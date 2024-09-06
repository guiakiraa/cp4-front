import Aparelhos from "./components/Aparelhos"
import Cabecalho from "./components/Cabecalho"
import Propagandas from "./components/Propagandas"
import Rodape from "./components/Rodape"
import Servicos from "./components/Servicos"
import { ItemServico, ListaAparelhosProps } from "./types"



function App() {

  const aparelhos: ListaAparelhosProps[] = [
    { nome: 'Iphone 11', img: '../../public/cel1.jpg', desc: "celular de 11kg e muito veloz", preco: 1000 },
    { nome: 'Morola E22', img: '../../public/cel2.jpg', desc: "celular de 1kg e muito ruim", preco: 2000 },
    { nome: 'S22', img: '../../public/cel3.jpg', desc: "celular de 15cm e divertido", preco: 1500 },
    { nome: 'Nokia Gold', img: '../../public/cel4.jpg', desc: "celular azul e muito lerdo", preco: 900 },
    { nome: 'Xiaomi XX', img: '../../public/cel5.jpg', desc: "celular fino e muito bonito", preco: 999 },
  ]

  const servicos: ItemServico[] = [
    { nome: "Garantia", desc: "Se seu aparelho quebrar antes dos 3 meses a gente devolve o dinhiero", preco: 12345 },
    { nome: "Manutenção", desc: "Se seu aparelho der problema, a gente resolve!", preco: 333 },
    { nome: "Anti-Roubo", desc: "Se seu aparelo for furtado ou roubado, a gnt te envia outro!", preco: 999 }
  ]

  return (
    <>
      <Cabecalho />
      <Propagandas />
      <Aparelhos aparelhos={aparelhos} />
      <Servicos servicos={servicos} />
      <Rodape>
        <ul>
          <li>Loja 1</li>
          <li>Loja 2</li>
          <li>Loja 3</li>
        </ul>
      </Rodape>
    </>
  )
}

export default App
