import React, { useRef, useEffect } from 'react'
import Select from 'react-select'
import { useField } from '@unform/core'
import { InputContent } from './styles'

const CustomSelect = ({ name, children, ...rest }) => {
  const selectRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return []
          }
          return ref.state.value.map(option => option.value)
        }
        if (!ref.state.value) {
          return ''
        }
        return ref.state.value.value
      }
    })
  }, [fieldName, registerField, rest.isMulti])

  return (
    <InputContent>
      <Select
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      <span className="focusInput"></span>
      {children ? <span className="inputIcon">{children}</span> : null}

      {error && <span className="input-error">* {error}</span>}
    </InputContent>
  )
}

export default CustomSelect
