import { SecApare } from "../styles";
import { AparelhosProps } from "../types";


export default function Aparelhos(props: AparelhosProps) {

    return (
        <SecApare>
            <h2>Aparelhos</h2>
            <div className="container">
                {props.aparelhos.map(aparelho => (
                <div className="aparelho">
                    <img src={aparelho.img} alt="" />
                    <h3>{aparelho.nome}</h3>
                    <p className="desc">{aparelho.desc}</p>
                    <p className="preco">R${aparelho.preco}</p>
                </div>
                ))}
            </div>
        </SecApare>
    )
}