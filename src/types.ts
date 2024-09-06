
export type ListaAparelhosProps = {
    nome: string;
    img: string;
    desc: string;
    preco: number;
}

export type AparelhosProps = {
    aparelhos: ListaAparelhosProps[];
}

export type ItemServico = {
    nome: string;
    desc: string;
    preco: number;
}

export type ServicosProps = {
    servicos: ItemServico[];
}

export type RodapeProps = {
    children: React.ReactNode;
}