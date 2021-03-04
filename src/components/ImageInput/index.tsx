import React, { useRef, useEffect, useCallback, useState } from 'react'

import { useField } from '@unform/core'

import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'

import { InputContent } from './styles'

interface Props {
  name: any
  children: string
}

const ImageInput = (
  {
    name,
    children,
    ...rest
  }: Props
) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, registerField } = useField(name)
  const [fileName, setFileName] = useState(defaultValue)

  const handleFileName = useCallback(e => {
    const file = e.target.files?.[0]

    if (!file) {
      setFileName(null)
    }

    const fileText = file.name

    setFileName(fileText)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = ''
      }
    })
  }, [fieldName, registerField])

  return (
    <InputContent>
      <label htmlFor="file-input" className={fileName ? 'with-file' : ''}>
        <BsFileEarmarkSpreadsheet />
        <span>{fileName ? fileName : children}</span>
      </label>
      <input
        type="file"
        accept=".csv"
        id={`${name}-input`}
        onChange={handleFileName}
        ref={inputRef}
        {...rest}
      />
    </InputContent>
  )
}

export default ImageInput
