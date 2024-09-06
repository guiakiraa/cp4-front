import logo from '../../public/logo.png'
import { HeaderCabec } from '../styles'

export default function Cabecalho() {

    return (
        <HeaderCabec>
            <div>
                <img className='logo' src={logo} alt="Logo Apple" />
                <h1>Apple</h1>
            </div>
            <button>Login</button>
        </HeaderCabec>
    )
}