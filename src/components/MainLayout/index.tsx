import { Menu } from '@/components/Menu'

import { ReactNode } from 'react'

import * as S from './styles'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <S.Container>
      <Menu />
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
