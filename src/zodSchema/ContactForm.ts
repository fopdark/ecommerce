import z from 'zod';

export const contactSchema = z.object({
  name: z.string().nonempty({ message: 'form-error.required' }),
  content: z.string().nonempty({ message: 'form-error.required' }),
  phone: z
    .string()
    .nonempty({ message: 'form-error.required' })
    .refine(
      (value) =>
        /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3,4}[-\s\\.]?[0-9]{4,6}$/im.test(
          value,
        ),
      { message: 'form-error.phone' },
    ),
  email: z
    .string()
    .nonempty({ message: 'form-error.required' })
    .email({ message: 'form-error.email' }),
});

export type Contact = z.infer<typeof contactSchema>;
