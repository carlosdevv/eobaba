import React, { InputHTMLAttributes } from 'react'

import { IconBaseProps } from 'react-icons'

import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  isCustom?: boolean
  icon?: React.ComponentType<IconBaseProps>
  error?: boolean
}

export function Input({
  name,
  icon: Icon,
  isCustom = false,
  error,
  ...rest
}: InputProps) {
  return (
    <S.InputContainer isCustom={isCustom} hasError={error}>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </S.InputContainer>
  )
}
