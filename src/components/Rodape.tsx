import { FooterRoda } from "../styles";
import { RodapeProps } from "../types";


export default function Rodape(props: RodapeProps) {

    return (
        <FooterRoda>
            <div className="lojas">
            <h3>Lojas físicas</h3>
                {props.children}
            </div>
            <div className="duvidas">
            <h3>Fale conosco</h3>
                <ul>
                    <li>Telefone: 12331-1233</li>
                    <li>Email: morderna@gmail.com</li>
                    <li>CNPJ: 21321323-11</li>
                </ul>
            </div>
            <div className="social">
            <h3>Nos siga nas redes sociais!</h3>
                <li>
                    <img src="../../public/insta.png" alt="" />
                    <p>@moderna.ofc</p>
                </li>
                <li>
                    <img src="../../public/face.png" alt="" />
                    <p>@moderna.ofc</p>
                </li>
            </div>
        </FooterRoda>
    )
}