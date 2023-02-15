'use client'
import { useAuth } from '@/hooks/useAuth'
import { BiArrowBack } from '../Icons'
import * as S from './styles'

type HeaderProps = {
  backButton?: boolean
  title: string
}

export default function Header({ backButton = false, title }: HeaderProps) {
  const { user } = useAuth()

  return (
    <S.Container>
      {backButton && (
        <S.BackButton>
          <BiArrowBack />
        </S.BackButton>
      )}

      <span>{title}</span>
      <S.ProfileContainer>
        {user?.avatar ? <S.Avatar src={user.avatar} alt="Avatar" /> : <div />}
        {user?.name ?? 'Usuário'}
      </S.ProfileContainer>
    </S.Container>
  )
}
