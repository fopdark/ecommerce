import z from 'zod';

export const SubscribeSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'form-error.required' })
    .email({ message: 'form-error.email' }),
});

export type Subscriber = z.infer<typeof SubscribeSchema>;
