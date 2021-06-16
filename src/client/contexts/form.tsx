// Dependencies
import React, { FC, ReactElement, createContext, ChangeEvent } from 'react'

// Interfaces
interface IFormContext {
  onChange(e: ChangeEvent<HTMLInputElement>, setState: any): any
  setValue(name: string, value: string, setState: any): any
}

type Props = {
  children: ReactElement
  initialValues?: any
}

export const FormContext = createContext<IFormContext>({
  onChange: () => null,
  setValue: () => null
})

const FormProvider: FC<Props> = ({ children }) => {
  function onChange(e: ChangeEvent<HTMLInputElement>, setState: any) {
    const {
      target: { name, value }
    } = e

    if (name) {
      setState((prevState: any) => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  function setValue(name: string, value: string, setState: any): void {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value
    }))
  }

  const context = {
    onChange,
    setValue
  }

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}

export default FormProvider
