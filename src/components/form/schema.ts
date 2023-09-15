import {z} from 'zod'

export const schema = z.object({
    username: z.string().min(4, 'Seu nome de usuário precisa ter no mínimo 4 caracteres.'),
    email: z.string().email('Insira um email válido.').min(1, 'insira um email válido.'),
    password: z.string().min(6, 'Sua senha precisa ter no mínimo 6 caracteres.'),
    confirmpassword: z.string().min(6, 'Senha inválida.') 
}).refine(
    (data) => data.password === data.confirmpassword, {
        message: 'Confirme a sua senha corretamente.',
        path: ['confirmpassword']
    }
    )
    // Aqui pode ser feito outro '.refine()'
    // Utilidade: Fazer requesição no BD e verificar se email já existe.

export type formProps = z.infer<typeof schema>