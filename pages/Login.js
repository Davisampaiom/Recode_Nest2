import Header from "../src/Components/Header";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

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
height: 40vh;

background-color: #fff;

border-radius: 8px;

`

export default function Login() {
  return (
  
 <div>
      <Header /> 
      <Page
         >
   
     <Form>
     <h2>Login</h2>
        <Input placeholder="  Usuario" id='usuario' name='usuario' type='text' />
        <Input placeholder="  Senha" id='senha' name='senha' type='password' />
        <Button type="submit"> <a href="Cria_alertas">Login</a></Button>
        <Button type="submit"> <a href="Cadastro">Fazer cadastro</a></Button>

     </Form>
      </Page>
 </div>
    
  );
}
