'use client'

import Logo from '@/assets/logo.svg'
import { FiHome, FiLogOut } from '@/components/Icons'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export function Menu() {
  const { logOut } = useAuth()

  return (
    <S.MenuContainer>
      <S.ProfileContainer>
        <Image src={Logo} alt="Logo" width={40} />
      </S.ProfileContainer>

      <S.MenuItem>
        <Link href="/">
          <FiHome size={24} />
        </Link>
      </S.MenuItem>

      <S.Logout>
        <button onClick={() => logOut()}>
          <FiLogOut size={24} />
        </button>
      </S.Logout>
    </S.MenuContainer>
  )
}
