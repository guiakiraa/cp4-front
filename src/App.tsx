import Aparelhos from "./components/Aparelhos"
import Cabecalho from "./components/Cabecalho"
import Propagandas from "./components/Propagandas"
import Rodape from "./components/Rodape"
import Servicos from "./components/Servicos"
import { ItemServico, ListaAparelhosProps } from "./types"



function App() {

  const aparelhos: ListaAparelhosProps[] = [
    { nome: 'Iphone 11', img: '../../public/cel11.png', desc: "IP 11 de 256GB", preco: 1400 },
    { nome: 'Morola E22', img: '../../public/celular22.png', desc: "MOTO G23 de 128GB", preco: 700 },
    { nome: 'Samsung A10', img: '../../public/cel33.png', desc: "Samsung A03s de 64GB", preco: 1000 },
    { nome: 'Nokia Gold', img: '../../public/cel44.png', desc: "Nokia 2.4 (release) de 64GB", preco: 1900 },
    { nome: 'Xiaomi XX', img: '../../public/cel55.png', desc: "Xiaomi Redmi Note 13 de 256GB", preco: 1800 },
  ]

  const servicos: ItemServico[] = [
    { nome: "Garantia", desc: "Se seu aparelho apresentar qualquer anomalia durante 1 ano desde a compra, voê pode trazê-lo a uma de nossas lojas para o conserto gratuito ou estorno do dinheiro, caso seja a situação.", preco: 200 },
    { nome: "Manutenção", desc: "Durante os 2 primeiros anos desde a compra, seu aparelho pode receber 2 manutenções gratuitas em uma de nossas lojas.", preco: 500 },
    { nome: "Anti-Roubo", desc: "Com o seguro da loja, em casos de furto, descorra a nós o problema e receba o valor do aparelho.", preco: 1000 }
  ]

  return (
    <>
      <Cabecalho />
      <Propagandas />
      <Aparelhos aparelhos={aparelhos} />
      <Servicos servicos={servicos} />
      <Rodape>
        <ul>
          <li>Loja 1 - Tatuapé</li>
          <li>Loja 2 - Osasco</li>
          <li>Loja 3 - Pinheiros</li>
        </ul>
      </Rodape>
    </>
  )
}

export default App
