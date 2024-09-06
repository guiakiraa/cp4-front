import { SecServ } from "../styles";
import { ServicosProps } from "../types";


export default function Servicos(props: ServicosProps) {

    return (
        <SecServ>
            {props.servicos.map(servico => (
                <div>
                    <h3>{servico.nome}</h3>
                    <p>{servico.desc}</p>
                    <p>{servico.preco}</p>
                </div>
            ))}
        </SecServ>
    )
}