import styled from 'styled-components'

const getStyle = color => {
    return `
        color: ${color};
        border-color: ${color};
    `
}

export const CurrentName = styled.span`
    ${({ color }) => getStyle(color)};
    font-weight: lighter;
`

export const Txt = styled.p`
    max-width: 400px;
    color: var(--fontGray);
    font-size: 14px;
`

export const CategoryList = styled.ul`
    border: 1px solid var(--fontGray);
    margin-top: 40px;
    color: #040404;
    padding: 50px;
    max-width: 100%;
    width: 700px;
    border-radius: 8px;

    p {
        font-size: 22px;
        font-weight: bold;
    }
    @media(max-width: 530px) {
        padding: 10px;    
    }
`

export const ItenList = styled.li`
    list-style: none;
    border-bottom: 1px solid var(--fontGray);
    padding: 10px;
    display: flex;

    &:last-child {
        border: none;
        padding-bottom: 15px;
    }
    span {
        transform: translateY(6px);
        border: 3px solid #000;
        width: 10px;
        height: 10px;
        border-radius: 3px;
        margin-right: 20px;
    }
`