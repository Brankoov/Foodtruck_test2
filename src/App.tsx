import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Foodtruck test</h1>
      
      <main>
        <section className='MainMenu'>
          <h2>Main Menu</h2>
          <article className='MainOrders'> Big burger 90kr</article>
          <article className='MainOrders'> Chicken wrap 70kr</article>
        </section>
          
      </main>
      
    </>
  )
}

export default App
