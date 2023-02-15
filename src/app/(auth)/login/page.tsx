'use client'

import IllustrationImg from '@/assets/ney.png'
import { Button } from '@/components/Button'
import { BsGoogle, FiLock, FiMail } from '@/components/Icons'
import { Input } from '@/components/Input'
import { useAuth } from '@/hooks/useAuth'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import * as S from './styles'

type FormProps = {
  email: string
  password: string
}

export default function Login() {
  const { signIn, signInWithGoogle } = useAuth()

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um E-mail válido.'),
    password: Yup.string().required('Senha obrigatória')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>({
    resolver: yupResolver(schema)
  })

  const onSubmit = useCallback((data: FormProps) => {
    signIn({ email: data.email, password: data.password })
  }, [])

  return (
    <S.PageContainer>
      <S.AsideLogin>
        <Image src={IllustrationImg} width={800} height={600} alt="genio" />
        <div className="illustrationText">
          <h1>
            O lugar onde o baba é tudo
            <pre />e um pouco mais.
          </h1>
          <span>
            O melhor aplicativo para você registrar o seus status e
            <pre />
            compartilhar com seus amigos.
          </span>
        </div>
      </S.AsideLogin>

      <S.MainContainer>
        <S.MainContent>
          <h3>Log in</h3>
          <h1>Bem vindo de volta.</h1>

          <button className="googleBtn" onClick={() => signInWithGoogle()}>
            <BsGoogle size={24} color="var(--primary)" />
            Entrar com Google
          </button>

          <S.Separator>OU</S.Separator>

          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email', { required: true })}
              name="email"
              icon={FiMail}
              placeholder="Informe seu email"
              type="text"
              error={!!errors.email}
            />
            {errors.email && (
              <S.MessageErrorInput>{errors.email.message}</S.MessageErrorInput>
            )}
            <Input
              {...register('password', { required: true })}
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Informe sua senha"
              autoComplete="off"
              error={!!errors.password}
            />
            {errors.password && (
              <S.MessageErrorInput>
                {errors.password.message}
              </S.MessageErrorInput>
            )}

            <Button type="submit">Acessar minha conta</Button>
          </S.LoginForm>

          <p className={'registerLink'}>
            Não é membro ainda? <Link href="/register">Registre-se</Link>
          </p>
        </S.MainContent>
      </S.MainContainer>
    </S.PageContainer>
  )
}
