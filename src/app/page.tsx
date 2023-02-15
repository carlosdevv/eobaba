'use client'

import Header from '@/components/Header'
import MainLayout from '@/components/MainLayout'
import PlayerCard from '@/components/PlayerCard'
import { StatusTab } from '@/components/StatusTab'
import { TabsComponent } from '@/components/Tabs'
import { useAuth } from '@/hooks/useAuth'

import * as S from './styles'

export default function Dashboard() {
  const { user } = useAuth()

  // if (!user) {
  //   return redirect('/login')
  // }

  const tabsProps = [
    {
      valueTab: '1',
      label: 'Meus Status',
      active: true,
      content: <StatusTab />
    },
    {
      valueTab: '2',
      label: 'Meus Status 2',
      active: true,
      content: <StatusTab />
    }
  ]

  return (
    <MainLayout>
      <S.Container>
        <Header title="Dashboard" />
        <S.ContentPage>
          <S.PlayerResume>
            <S.NameColumn>
              <h1>
                Bem vindo,<p>{user?.name ?? 'Craque'}</p>
              </h1>
              <div className="favoriteClub">
                <div
                  className="clubPic"
                  style={{
                    background: 'var(--gray-500)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}
                >
                  <span style={{ color: 'var(--primary)' }}>Torcedor do</span>
                  <span style={{ color: 'var(--white)', fontWeight: '500' }}>
                    Bahia
                  </span>
                </div>
              </div>

              <button className="seeStatusBtn">Ver Status</button>
            </S.NameColumn>

            <PlayerCard />

              <S.PlayerStatus>
                <S.PlayerStatusItem>
                  <span>Partidas</span>
                  <h2>50</h2>
                </S.PlayerStatusItem>
                <S.PlayerStatusItem>
                  <span>Idade</span>
                  <h2>22</h2>
                </S.PlayerStatusItem>
                <S.PlayerStatusItem>
                  <span>Gols</span>
                  <h2>50</h2>
                </S.PlayerStatusItem>
                <S.PlayerStatusItem>
                  <span>Assists</span>
                  <h2>50</h2>
                </S.PlayerStatusItem>
              </S.PlayerStatus>
          </S.PlayerResume>

          <S.TabContainer>
            <TabsComponent tabsProps={tabsProps} />
          </S.TabContainer>
        </S.ContentPage>
      </S.Container>
    </MainLayout>
  )
}
