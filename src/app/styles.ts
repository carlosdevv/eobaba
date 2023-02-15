import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const ContentPage = styled.div`
  padding: 0 10rem;
`
export const PlayerResume = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.25fr 1fr;
  align-items: center;
  justify-content: space-evenly;
  justify-items: start;
  width: 100%;
  margin-top: 3rem;
`

export const NameColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .favoriteClub {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .seeStatusBtn {
    background: var(--primary);
    padding: 0.75rem;
    cursor: pointer;
    border-radius: 1.75rem;
    color: var(--white);
    font-weight: 500;
    font-size: 1rem;
  }
`

export const PlayerStatus = styled.div`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

export const PlayerStatusItem = styled.div`
  width: 6.5rem;
  height: 6rem;
  border-radius: 1.25rem;
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: var(--gray-500);
    font-weight: 500;
  }

  h2 {
    font-weight: 500;
  }
`

export const TabContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`
