import publi1 from "../../public/publi1.png"
import publi2 from "../../public/publi2.png"
import { SecPropa } from '../styles'

export default function Propagandas() {

    return (
        <SecPropa>
            <h2>Propagandas</h2>
            <div className='container'>
                <div className='propa1'>
                    <img src={publi1} alt="" />
                    <p>Promoção: 1 é R$1000, 3 é R$4000!</p>
                </div>
                <div className='propa2'>
                    <img src={publi2} alt="" />
                    <p>Compre à vista e ganhe 20% de desconto!</p>
                </div>
            </div>
        </SecPropa>
    )
}