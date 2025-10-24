import { useState } from 'react'
// import './assets/css/App.css'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className='body'>
        <div className="container">
        <h1 className="title">LaBoutique</h1>
        <h2 className="subtitle">Électronique, Maison & Vie, Sports</h2>
        <p>Votre boutique en ligne pour l’électronique, la maison et les articles de sport.</p>
        <h2 className="subtitle">Qualité, marques fiables et conseils pour trouver l’équipement adapté à votre quotidien.</h2>
        <p>Retrouvez des produits sélectionnés de qualité, des marques fiables et des offres adaptées à votre quotidien.</p>
        </div>
      </div>
    </>
  )
}

export default App
