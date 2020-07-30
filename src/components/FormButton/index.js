import styled from 'styled-components'

const getStyle = type => {
    if(type === "red") {
        return `
            color: var(--white);
            background-color: var(--darkRed);
            margin-top: 20px;
            border-radius: none;
        `
    } else if(type === "blue") {
        return `
            color: var(--white);
            background-color: #0d6efd;
        `
    }
    return `
        color: var(--darkGray);
        background-color: #ccc;
        margin: 0 10px;
    `
}

const Button = styled.button`
    ${({ type }) => getStyle(type)}
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    padding: 15px;
    transition: .2s;
    margin-top: 40px;

    &:hover {
        filter: brightness(80%);
    }
`

export default Button