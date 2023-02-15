'use client'
import BrasilFlag from '@/assets/brasil.svg'
import CardBg from '@/assets/card_bg.png'
import { BsFillPersonFill } from '@/components/Icons'
import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import * as S from './styles'

export default function PlayerCard() {
  const { user } = useAuth()

  return (
    <S.FutPlayerCard url={CardBg.src}>
      <S.PlayerCardTop>
        <S.PlayerMasterInfo>
          <div className="player-rating">
            <span>00</span>
          </div>
          <div className="player-nation">
            <Image src={BrasilFlag} alt="Brasil" draggable="false" />
          </div>
          <div className="player-club">
            <img
              src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg"
              alt="Barcelona"
              draggable="false"
            />
          </div>
        </S.PlayerMasterInfo>
        <div className="player-picture">
          <BsFillPersonFill />
        </div>
      </S.PlayerCardTop>
      <S.PlayerCardBottom>
        <S.PlayerInfo>
          <div className="player-name">
            <span>{user?.name?.toUpperCase() ?? 'CARLOS'}</span>
            <div className="divider" />
          </div>
          <S.PlayerFeatures>
            <S.PlayerFeaturesCol>
              <span>
                <div className="player-feature-value">00</div>
                <div className="player-feature-title">GOLS</div>
              </span>
              <span>
                <div className="player-feature-value">00</div>
                <div className="player-feature-title">ASST</div>
              </span>
            </S.PlayerFeaturesCol>
            <S.PlayerFeaturesCol>
              <span>
                <div className="player-feature-value">00</div>
                <div className="player-feature-title">JOGOS</div>
              </span>
              <span>
                <div className="player-feature-value">00</div>
                <div className="player-feature-title">CART</div>
              </span>
            </S.PlayerFeaturesCol>
          </S.PlayerFeatures>
        </S.PlayerInfo>
      </S.PlayerCardBottom>
    </S.FutPlayerCard>
  )
}
