import Header from "../src/Components/Header";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #8ecbe0;

  width: 100%;
  height: 100vh;

  div {
    height: auto;
    width: 75%;
  }
`;

const Input = styled.input`

width:50vh;
height:4vh;

border-radius: 8px;

margin: 1vh;

`

const Button = styled.button`
width: 50vh;
height: 4vh;

border-radius: 7px;

margin: 1vh;

background-color: #575a5e;

a{
  color:#fff;
}

&:hover{
  background-color: #343a40;
}

`

const Form = styled.form`

display:flex;
flex-direction:column;

align-items: center;
justify-content:center;

width: 60vh;
height: 50vh;

background-color: #fff;

border-radius: 8px;

`

export default function Cadastro() {
  return (
    <div>
      <Header />
      <Page>
     <Form>
     <h3>Cadastro</h3>
        <Input placeholder="  Nome Completo" id='Nome' name='Nome' type='text' />
        <Input placeholder="  Usuario" id='usuario' name='usuario' type='text' />
        <Input placeholder="  Data de Nascimento" id='nascimento' name='nascimento' type='text' />
        <Input placeholder="  Usuario" id='Email' name='email' type='text' />
        <Input placeholder="  Senha" id='senha' name='senha' type='password' />
        <Button type="submit"> <a href="Login">cadastrar</a></Button>


     </Form>
      </Page>
    </div>
  );
}

