import { useState } from 'react'

import './App.css'
import StateForm from './Components/StateForm/StateForm'
import StatefullForm from './Components/StatefulForm/StatefullForm'
import RefForm from './Components/RefForm/RefForm'




function App() {


  return (
    <>

 <h1 className='text-center text-3xl font-bold my-8'>React</h1>
 {/* <StateForm></StateForm> */}
 {/* <StatefullForm></StatefullForm> */}

 <RefForm></RefForm>






    </>
  )
}

export default App
