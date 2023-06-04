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

  const [{ data, loading, error }, createPersonalityFunction] =
    useAsync(createPersonality)
  return (
    <>
      <PlainButton
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2"
      >
        <IconPlus />
        Create personality
      </PlainButton>
      <Dialog open={open} setOpen={setOpen} title={'Create personality'}>
        <Form
          onSubmit={handleSubmit(({ name }) => {
            if (!contract) {
              console.error('Contract not found')
              return
            }

            createPersonalityFunction({ account, contract, name })
          })}
        >
          <HtmlLabel error={errors.name?.message} title="name">
            <HtmlInput placeholder="donald trump" {...register('name')} />
          </HtmlLabel>
          <Button loading={loading} type="submit">
            Create
          </Button>
        </Form>
      </Dialog>
    </>
  )
}
