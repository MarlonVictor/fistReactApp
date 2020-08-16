import styled from 'styled-components'

const getStyle = type => {
    if(type === "red") {
        return `
            color: var(--white);
            background-color: var(--darkRed);
            transform: translateY(-15px);
            border-radius: none;
            font-size: 16px;
        `
    } else if(type === "blue") {
        return `
            font-size: 14px;
            color: var(--white);
            background-color: #0d6efd;
        `
    }
    return `
        font-size: 14px;
        color: var(--darkGray);
        background-color: #ccc;
        margin: 0 10px;
    `
}

const Button = styled.button`
    ${({ type }) => getStyle(type)}
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