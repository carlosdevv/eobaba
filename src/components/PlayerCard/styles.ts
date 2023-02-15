import styled from 'styled-components'

type CardProps = {
  url: string
}

export const FutPlayerCard = styled.div<CardProps>`
  position: relative;
  width: 360px;
  height: 525px;
  background-image: ${props => `url(${props.url})`};
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 3.8rem 0;
  z-index: 2;
  transition: 200ms ease-in;
`

export const PlayerCardTop = styled.div`
  position: relative;
  display: flex;
  color: var(--black);
  padding: 0 1.5rem;

  .player-picture {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    overflow: hidden;

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: relative;
      right: -1.5rem;
      bottom: 0;
    }
  }
`

export const PlayerMasterInfo = styled.div`
  position: absolute;
  line-height: 2.2rem;
  font-weight: 300;
  padding: 1.5rem 0;
  text-transform: uppercase;
  top: 1.75rem;
  left: 3.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .player-rating {
    font-size: 2.85rem;
    font-weight: 500;
    color: #fccb32;
  }

  .player-nation {
    display: block;
    width: 2rem;
    height: 25px;
    margin: 0.75rem 0 0.3rem 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .player-club {
    display: block;
    width: 2.1rem;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

export const PlayerCardBottom = styled.div`
  position: relative;

  .player-name {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
    padding-bottom: 0.3rem;
    overflow: hidden;

    .divider {
      height: 2px;
      background: #9b1d33;
      width: 50%;
      margin: 0.25rem auto;
      border-radius: 100%;
    }

    span {
      margin-top: 0.5rem;
      color: #fccb32;
      display: block;
      font-size: 1.75rem;
      font-weight: 500;
    }
  }
`

export const PlayerInfo = styled.div`
  display: block;
  padding: 0.3rem 0;
  color: #fccb32;
  width: 90%;
  margin: 0 auto;
  height: auto;
  position: relative;
  z-index: 2;
`

export const PlayerFeatures = styled.div`
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-evenly;
`

export const PlayerFeaturesCol = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    display: flex;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .player-feature-value {
    margin-right: 0.3rem;
    font-weight: 700;
  }
  .player-feature-title {
    font-weight: 600;
  }

  &:last-child {
    border: 0;
  }
`
