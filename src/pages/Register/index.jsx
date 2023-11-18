import logo from '../../assets/wave.png'
import arrow from '../../assets/arrow.png'

import  './styles.css'
import { auth } from '../services/firebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';

export function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
    function handleSignUp(e) {
      e.preventDefault();
      createUserWithEmailAndPassword(email, password)
    }
  
    if(loading) {
      return <p>carregando...</p>
    }
  return (

<div className="container">
  <header className="header">
    <img src={ logo } alt="SyncWave" />
    <span>Por favor digite suas informações de cadastro</span>
  </header>

  <form>
    <div className="inputContainer">
      <label htmlFor="email">E-mail: </label>
      <input 
        type="text" 
        name="email"
        id="email"
        placeholder="johndoe@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    
    <div className="inputContainer">
      <label htmlFor="password">Senha: </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
        />
    </div>

    <button className="button"  onClick={handleSignUp}>
      Cadastrar <img src={ arrow } alt="Seta" />
    </button>
    <div className="footer">
    <p>Você já tem uma conta?</p>
    <a href="/">Acesse a sua conta aqui</a>
  </div>
  </form>
</div>
  )
}
