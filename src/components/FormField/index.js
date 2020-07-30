import React from "react"
import { FormContainer, Label, Input } from './styles'

const FormField = ({ label, type, name, value, onChange }) => {
  return (
    <FormContainer>
        <Label> 
          <Input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
          <Label.Text>{label}</Label.Text>
        </Label>
    </FormContainer>
  )
}

export default FormField;