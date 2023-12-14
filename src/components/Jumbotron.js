import React from 'react'
import Jumbo from '../assets/img/2.jpg'

const Jumbotron = () => {
  return (
    <>
    <img src={Jumbo} alt='img jombotron'/>
      <div className='flex flex-col py-20 '>
      <h1 className='font-bold text-7xl'> FAST LOKER DREAM</h1>
        <p>Pilihlah Karirmu sesuai Pasion yang kamu ingin dan mulailah memilih karirmu sesuai kesenanganmu</p>
      </div>
        
        
      

    
    </>
  )
}

export default Jumbotron
