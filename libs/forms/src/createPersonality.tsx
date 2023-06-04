import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const schemaCreatePersonality = z.object({
  name: z.string(),
})

export type FormTypeCreatePersonality = z.infer<typeof schemaCreatePersonality>

export const useFormCreatePersonality = () =>
  useForm<FormTypeCreatePersonality>({
    resolver: zodResolver(schemaCreatePersonality),
  })
