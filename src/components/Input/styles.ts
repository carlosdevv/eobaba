import styled from 'styled-components'

type InputProps = {
  isCustom: boolean
  hasError?: boolean
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  padding: 0 1rem;
  background: ${props => (props.isCustom ? 'transparent' : 'var(--white)')};
  border: ${props => (props.isCustom ? '0' : '1px solid var(--gray-300)')};
  border: ${props => (props.hasError && '1px solid var(--error)')};
  gap: 0.5rem;

  input {
    background: transparent;
    border: 0;
    outline: none;
    flex: 1;

    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: var(--gray-300);
    }
  }

  svg {
    color: var(--gray-500);
  }
`
