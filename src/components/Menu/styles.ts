import styled from 'styled-components'

export const MenuContainer = styled.aside`
  height: 100vh;
  background: var(--black);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
`

export const MenuItem = styled.div`
  text-decoration: none;
  cursor: pointer;

  svg {
    color: var(--gray-50);
    transition: all 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: auto;
`

export const Logout = styled.div`
  margin-top: auto;
  margin-bottom: 2rem;

  button {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: transparent;
    border: 0;

    svg {
      color: var(--gray-50);
      transition: all 0.2s;

      &:hover {
        color: var(--primary);
      }
    }
  }
`

export const Logo = styled.img`
  width: 50%;
`
