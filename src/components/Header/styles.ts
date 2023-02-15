import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  span {
    font-size: 1.25rem;
  }
`

export const BackButton = styled.div`
  background: var(--black);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;

  svg {
    color: var(--gray-100);
  }
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem 0 auto;
`

export const Avatar = styled.img`
  width: 35px;
  border-radius: 1.7rem;
`
