

import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Foodtruck test</h1>
      <hr className="divider" />
      
      <main>
        <section className='MainMenu'>
          <h2>Main Menu</h2>
          <article className='MainOrders'> Big burger 90kr</article>
          <article className='MainOrders'> Chicken wrap 70kr</article>
        </section>

        <section className='Deserts'>
          <h2>Deserts</h2>
          <article className='DesertOrders'>Cheesecake 40kr</article>
          <article className='DesertOrders'>Strawberry cake 40kr</article>
        </section>
          
      </main>
      
    </>
  )
}

export default App
