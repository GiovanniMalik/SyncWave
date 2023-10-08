import logo from './assets/wave.png'
import arrow from './assets/arrow.png'

import  './style.css'

export function App() {

  return (

<div className="container">
  <header className="header">
    <img src={ logo } alt="SyncWave" />
    <span>Por favor digite suas informações de login</span>
  </header>

  <form>
    <div className="inputContainer">
      <label htmlFor="email">E-mail: </label>
      <input type="text" name="email" id="email" placeholder="johndoe@gmail.com"/>
    </div>
    
    <div className="inputContainer">
      <label htmlFor="password">Senha: </label>
      <input type="password" name="password" id="password" placeholder="********"/>
    </div>

    <a href="" className='lostPass'>Esqueceu sua senha?</a>
    <button className="button">
      Conectar <img src={ arrow } alt="Seta" />
    </button>
    <div className="footer">
    <p>Você não tem uma conta?</p>
    <a href="">Crie a sua conta aqui</a>
  </div>
  </form>
</div>
  )
}
