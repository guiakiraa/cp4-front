import anuncio1 from '../../public/anuncio1.jpg'
import anuncio2 from '../../public/anuncio2.jpg'
import { SecPropa } from '../styles'

export default function Propagandas() {

    return (
        <SecPropa>
            <img src={anuncio1} alt="" />
            <img src={anuncio2} alt="" />
        </SecPropa>
    )
}