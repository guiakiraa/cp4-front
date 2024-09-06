import { FooterRoda } from "../styles";
import { RodapeProps } from "../types";


export default function Rodape(props: RodapeProps) {

    return (
        <FooterRoda>
            <div className="lojas">
                {props.children}
            </div>
            <div className="duvidas">
                <ul>
                    <li>Ligue para 12331-1233</li>
                    <li>Email: adsdsadsaa@adasd.com</li>
                    <li>CNPJ: 21321323-11</li>
                </ul>
            </div>
            <div className="social">
                <li>
                    <img src="../../public/insta.jfif" alt="" />
                    <p>@seilaoq</p>
                </li>
                <li>
                    <img src="../../public/face.png" alt="" />
                    <p>@sadsad</p>
                </li>
            </div>
        </FooterRoda>
    )
}