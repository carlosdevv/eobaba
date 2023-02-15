import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  background: var(--black-10);
  align-items: stretch;
`

export const AsideLogin = styled.aside`
  flex: 5;

  background: var(--black);
  padding: 5rem 0 8rem 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 80%;
  }

  .illustrationText {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 7rem;

    h1 {
      font-size: 2.25rem;
    }

    span {
      color: var(--gray-500);
      font-size: 1.1rem;
    }
  }
`

export const MainContainer = styled.main`
  flex: 5;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  align-items: stretch;
  text-align: center;

  h3 {
    text-align: left;
    color: var(--gray-50);
    margin-bottom: 0.5rem;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1rem;
  }

  h1 {
    text-align: left;
    color: var(--gray-50);
    font-weight: 500;
  }

  .googleBtn {
    border-radius: 8px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2.5rem 0;
    padding: 1rem 0;
    gap: 0.5rem;

    color: var(--gray-50);
    background: transparent;

    border: 1px solid var(--primary);
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .registerLink {
    margin-top: 2.5rem;
    color: var(--gray-50);
    a {
      margin-left: 0.25rem;
      color: var(--primary);
      font-weight: 600;
    }
  }
`

export const LoginForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    color: var(--white);
  }

  button,
  input {
    width: 100%;
  }
`

export const Separator = styled.div`
  display: flex;
  align-items: center;

  margin: 0.5rem 0;
  font-size: 14px;
  color: var(--gray-300);

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--gray-500);
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--gray-500);
    margin-left: 1rem;
  }
`
export const MessageErrorInput = styled.span`
  display: flex;
  align-items: start;
  color: var(--error);
  font-size: 0.75rem;
`
