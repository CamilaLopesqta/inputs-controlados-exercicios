//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React, { useState } from "react";
import { Botao } from "./estiloDoFormulario";
import PaginaDoCartao from "../Pagina/PaginaDoCartao";

const Formulario = (props) => {
  console.log(props);
 
  return (
    <div>
      <form>
        <select value={props.formaPagamento} onChange={props.alterarFormaPagamento}>
          <option>Selecione:</option>
          <option>Crédito</option>
          <option>Débito</option>
        </select>
        <br />
        <br />
        <label>
          Nome:
          <input value={props.nome} onChange={props.alterarNome} type="text" />
        </label>
        <br />
        <br />
        <label>
          Número do Cartão:
          <input value={props.numeroCartao} onChange={props.alterarNumeroCartao} type="text"/>
        </label>
        <br />
        <br />
        <label>
          Data de validade:
          <input value={props.dataValidade} onChange={props.alterarDataValidade} type="text"/>
        </label>
        <br />
        <br />
        <label>
          CVC:
          <input value={props.cvc} onChange={props.alterarCvc} type="text"/>
        </label>
        <br />
        <br />
        <Botao onClick={props.limparFormulario}>Cadastrar cartão</Botao>
        </form>
    </div>
  );
};

export default Formulario;
