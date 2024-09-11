import anuncio1 from '../../public/anuncio1.jpg'
import anuncio2 from '../../public/anuncio2.jpg'
import { SecPropa } from '../styles'

export default function Propagandas() {

    return (
        <SecPropa>
            <h2>Propagandas</h2>
            <div className='container'>
                <div className='propa'>
                    <img src={anuncio1} alt="" />
                    <p>1 é R$1000 - 3 é R$4000</p>
                </div>
                <div className='propa'>
                    <img src={anuncio2} alt="" />
                    <p>Compre 10 e leve 1</p>
                </div>
            </div>
        </SecPropa>
    )
}