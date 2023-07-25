import { Form } from '../../atoms/Form'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { useFormCreatePersonality } from '@personality-voting/forms/src/createPersonality'
import { createPersonality } from '@personality-voting/contract-utilities'
import { useAccount } from '@personality-voting/hooks/web3'
import { Dialog } from '../../atoms/Dialog'
import { useState } from 'react'
import { PlainButton } from '../../atoms/PlainButton'
import { IconPlus } from '@tabler/icons-react'
import { Button } from '../../atoms/Button'
import { useAsync } from '@personality-voting/hooks/async'

export interface ICreatePersonalityProps {}

export const CreatePersonality = ({}: ICreatePersonalityProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCreatePersonality()
  const { contract, account } = useAccount()
  const [open, setOpen] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const [{ data, loading, error }, createPersonalityFunction] =
    useAsync(createPersonality)

  console.log('data ', data)

  console.log('error', error)
  if (!account) {
    return null
  }

  return (
    <>
      <Button
        size="sm"
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 px-4 text-sm transition-shadow rounded-full hover:shadow-lg hover:border"
      >
        <IconPlus />
        Create personality
      </Button>

      <Dialog open={open} setOpen={setOpen} title={'Create personality'}>
        <Form
          onSubmit={handleSubmit(async ({ name }) => {
            if (!contract) {
              console.error('Contract not found')
              return
            }

            const result = await createPersonalityFunction({
              account,
              contract,
              name,
            })
            setShowSuccessMessage(true)
            setOpen(false)
          })}
        >
          <HtmlLabel error={errors.name?.message} title="name">
            <HtmlInput placeholder="donald trump" {...register('name')} />
          </HtmlLabel>
          <Button loading={loading} color="black" type="submit">
            Create
          </Button>
        </Form>
      </Dialog>
      <Dialog
        open={showSuccessMessage}
        setOpen={setShowSuccessMessage}
        title={'Hurray!!'}
      >
        <div className="text-xl font-semibold">
          Your submission is successful.
        </div>
        <div className="mt-2 mb-4 text-sm text-gray">
          This may take a while to reflect in our database.
        </div>
      </Dialog>
    </>
  )
}
