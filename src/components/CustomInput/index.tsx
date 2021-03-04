import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputContent } from './styles'

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const CustomInput = (
  {
    name,
    label,
    children,
    ...rest
  }: InputProps
) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputContent>
        {label && <label htmlFor={fieldName}>{label}</label>}
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        {children ? <span className="inputIcon">{children}</span> : null}
        {error && <span className="input-error">* {error}</span>}
      </InputContent>
    </>
  )
}

export default CustomInput
