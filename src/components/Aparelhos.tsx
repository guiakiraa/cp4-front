import { SecApare } from "../styles";
import { AparelhosProps } from "../types";


export default function Aparelhos(props: AparelhosProps) {

    return (
        <SecApare>
            {props.aparelhos.map(aparelho => (
                <div>
                    <img src={aparelho.img} alt="" />
                    <h3>{aparelho.nome}</h3>
                    <p>{aparelho.desc}</p>
                    <p>R${aparelho.preco}</p>
                </div>
            ))}
        </SecApare>
    )
}