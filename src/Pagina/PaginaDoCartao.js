import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import { useState } from "react";
import Formulario from "../Componentes/Formulario";

function PaginaDoCartao() {
  //declare os estados aqui
  const [formaPagamento, setFormaPagamento] = useState("");
  const [nome, setNome] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [dataValidade, setDataValidade] = useState("");
  const [cvc, setCvc] = useState("");

  //declare as funções de controle de inputs aqui
  const alterarFormaPagamento = (event) => {
    setFormaPagamento(event.target.value);
  };

  const alterarNome = (event) => {
    setNome(event.target.value);
  };

  const alterarNumeroCartao = (event) => {
    setNumeroCartao(event.target.value);
  };

  const alterarDataValidade = (event) => {
    setDataValidade(event.target.value);
  };

  const alterarCvc = (event) => {
    setCvc(event.target.value);
  };
  const limparFormulario = (event) => {
    event.preventDefault();
    setFormaPagamento("");
    setNome("");
    setNumeroCartao("");
    setDataValidade("");
    setCvc("");
    alert("Seu cartão foi cadastrado com sucesso!");
  };

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        formaPagamento={formaPagamento}
        nome={nome}
        numeroCartao={numeroCartao}
        dataValidade={dataValidade}
        cvc={cvc}
      />

      {/* Chame o Componente Formulário Aqui */}
      <Formulario
        formaPagamento={formaPagamento}
        setFormaPagamento={setFormaPagamento}
        nome={nome}
        setNome={setNome}
        numeroCartao={numeroCartao}
        setNumeroCartao={setNumeroCartao}
        dataValidade={dataValidade}
        setDataValidade={setDataValidade}
        cvc={cvc}
        setCvc={setCvc}
        alterarFormaPagamento={alterarFormaPagamento}
        alterarNome={alterarNome}
        alterarNumeroCartao={alterarNumeroCartao}
        alterarDataValidade={alterarDataValidade}
        alterarCvc={alterarCvc}
        limparFormulario={limparFormulario}
      />
      {/* Passe a função de controle de input e variável de estado para o
      formulário. Para isso use Props */}
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
