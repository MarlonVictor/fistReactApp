import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
  position: relative;

  input[type="color"] {
    padding-left: 56px;
  }
`

export const Label = styled.label``

Label.Text = styled.span`
  color: color: var(--lightGray);
  height: 55px;
  position: absolute; 
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`

export const Input = styled.input`
  background: #fff;
  color: var(--lightGray);
  display: block;
  max-width: 100%;
  width: 700px;
  height: 55px;
  font-size: 16px;
  
  outline: 0;
  border: 1.5px solid var(--fontGray);
  
  padding: 10px 16px 5px;
  margin-bottom: 20px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &[type='color'] {
    padding: 30px 16px 5px;
  }
  &:focus {
    border-color: #0d6efd;
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`