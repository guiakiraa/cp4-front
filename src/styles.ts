import styled from "styled-components";

export const HeaderCabec = styled.header`
    padding: 20px;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .logo {
        width: 55px;
    }

    button {
        background-color: beige;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
`

export const SecPropa = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 300px;
    }
`

export const SecApare = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 100px;
    }
`

export const SecServ = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const FooterRoda = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .social li {
        display: flex;
        gap: 5px;
    }

    ul, li {
        list-style: none;
    }

    img {
        width: 20px;
    }
`