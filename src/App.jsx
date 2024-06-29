// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Inicio from './Inicio.jsx';
import Contacto from './contacto.jsx';
import Nosotros from './nosotros.jsx';
import Novedades from './novedades.jsx';
import Espectaculos from './espectaculos.jsx';
import Pasarela_Entrada from './pasarela_entrada_page.jsx';
import Espectaculo_page from './espectaculo_page.jsx';
import LoginPage from './login_page.jsx';
import SignUp from './signUp/signUp.jsx';
import ForgetPassword from './forget_password/forget_password.jsx';
import Profile_Page from './perfil.jsx';
import { readEvents } from './Firebase/eventManage/eventManage.js';
import { useEffect } from 'react';
import { readAtraction } from './Firebase/atractionsManage/atractionsManage.js';
import { readImage } from './Firebase/imageManage/imageManage.js';
import Error404 from './error404/404page.jsx';
import Novedad from './novedad_page.jsx';
function App(){


    return (
        <>
        <div className="App">
            <Routes>
                <Route path='/novedades/:idNovedad' element={<Novedad />} />
                <Route path="/" element={<Inicio />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/novedades' element={<Novedades />} />
                <Route path='/espectaculos' element={<Espectaculos />} />
                <Route path='/pasarela' element={<Pasarela_Entrada />} />
                <Route path='/eventos/:idEvento' element={<Espectaculo_page />} />
                <Route path='/entradas' element={<Pasarela_Entrada />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<Error404/>} />
                <Route path='/registrar' element={<SignUp />} />
                <Route path='/forget_password' element={<ForgetPassword />} />
                <Route path='/profile' element={<Profile_Page/>} />
            </Routes>
        </div>
        </>
    )
}

export default App