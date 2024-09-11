import styled from "styled-components";

export const HeaderCabec = styled.header`
    padding: 20px;
    background-color: #E5A4CB;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .logo {
        width: 55px;
    }

    button {
        background-color: #7F055F;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        color: white;
        font-weight: 500;
    }
`

export const SecPropa = styled.section`
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
        color: #7F055F;
        font-size: 35px;
        font-weight: bold;
    }

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;

        .propa1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;

            p {
                font-size: 20px;
                font-weight: 500;
                color: #000;
            }
        }

        .propa1 img {
            width: 250px;
            heigth: 200px;
        }

        .propa2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;

            p {
                font-size: 20px;
                font-weight: 500;
                color: #000;
            }
        }

        .propa2 img {
            width: 160px;
            heigth: 200px;
        }
    }
        
`

export const SecApare = styled.section`
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
        color: #7F055F;
        font-size: 35px;
        font-weight: bold;
    }

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        flex-wrap: wrap;
    }

    .aparelho {
        border-radius: 12px;
        min-height: 350px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #E5A4CB;

        img {
            width: 200px;
        }
        
        h3 {
            font-size: 22px;
            color: #7F055F;
        }

        .desc {
            color: #45062E;
            font-weight: 500;
        }

        .preco {
            padding: 10px;
            font-size: 20px;
            color: #000;
            font-weight: bold;
        }
    }

    
`

export const SecServ = styled.section`
    padding: 60px 0 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;

    h2 {
        color: #7F055F;
        font-size: 35px;
        font-weight: bold;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 80px;
        flex-wrap: wrap;
    }

    .servico {
        background-color: #45062E;
        width: 70%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            font-size: 22px;
            color: #e5e4CB;
        }

        .desc {
            color: #E5A4CB;
            font-weight: 500;
        }

        .preco {
            padding: 10px;
            font-size: 20px;
            color: #FFE8D4;
            font-weight: bold;
        }
    }
`

export const FooterRoda = styled.footer`
    padding: 50px;
    background-color: #7F055F;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ul, .social {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .social li {
        display: flex;
        gap: 5px;
    }

    ul, li {
        list-style: none;
        color: #fff;
    }

    img {
        width: 20px;
    }
`