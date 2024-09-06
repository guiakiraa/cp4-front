import { SecServ } from "../styles";
import { ServicosProps } from "../types";


export default function Servicos(props: ServicosProps) {

    return (
        <SecServ>
            <h2>Serviços</h2>
            <div className="container">
                {props.servicos.map(servico => (
                    <div className="servico">
                        <h3>{servico.nome}</h3>
                        <p className="desc">{servico.desc}</p>
                        <p className="preco">{servico.preco}</p>
                    </div>
                ))}
            </div>
        </SecServ>
    )
}