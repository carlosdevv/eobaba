import styled from 'styled-components'

type ButtonProps = {
  isOutlined: boolean
}
export const ButtonContainer = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => (props.isOutlined ? 'var(--white)' : 'var(--primary)')};
  color: ${props => (props.isOutlined ? 'var(--primary)' : 'var(--white)')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;

  cursor: pointer;
  border: ${props => (props.isOutlined ? '2px solid var(--primary)' : '0')};

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    filter: brightness(0.6);
    cursor: not-allowed;
  }
`
