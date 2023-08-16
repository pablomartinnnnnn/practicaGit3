import { useState } from 'react'
import './App.css'





function App() {


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);


  const onSubmitForm = (e) => {
    
    e.preventDefault(); 
    
const isUsernameValid = validateUserName(userName);
const isPasswordValid = validatePassword(password);


if (!isPasswordValid || !isUsernameValid) {
alert("Alguno de los datos ingresados no son correctos");
} else {


alert(`Bienvenido: ${userName}`);
}
  
  
};


  const validateUserName = (userName) => {
    // Eliminamos los espacios en blanco
    const withoutSpaces = userName.trim();
    // Validamos la extension
    if (withoutSpaces.length > 2) {
    return true;
    } else {
    return false;
    }
    };


    const validatePassword = (password) => {
      
      const withoutSpaces = password.trim();
     
      const passwordAsArray = withoutSpaces.split("");
     
      const hasNumber = passwordAsArray.some((character) => {
      
      if (isNaN(character)) {
      return false;
      } else {
      return true;
      }
      });



    if (withoutSpaces.length > 5 && hasNumber) {
        return true;
        } else {
        return false;
        }
    };







  return (


    <>
      <div className="App">



        <h3>Iniciar Sesión</h3>


        <form onSubmit={onSubmitForm}>



          <input
            type="text"
            placeholder="nombre"
            value={userName}
            onChange={onChangeUserName}
          />

          <input
            type="password"
            placeholder="contra"
            value={password}
            onChange={onChangePassword}
          />


          <button type="submit">Enviar</button>



        </form>



      </div>
    </>



  )
}

export default App
