import { useState } from 'react'
import prdData from './assets/produits.json'
import './assets/css/Produits.css'
import PrdCard from './PrdCard.jsx'

function Produits(){
    const allProducts = prdData.products;
    const [search, setSearch] = useState("");

   

    const filtered= allProducts.filter(
        (prd) => {
            const nom =prd.name.toLowerCase();
            const prix =prd.price.toString().toLowerCase();
            const marque = prd.brand.toLowerCase();
            const detail = prd.description.toLowerCase();
            return(
                nom.includes(search.toLowerCase())||prix.includes(search.toString())|| marque.includes(search.toLowerCase())|| detail.includes(search.toLowerCase())
            )
        }
    )

     return (
    <>
        <div className='bodyPrd'>

            <div className='searchPrd'>
                    <input type='text' placeholder='Search...' 
                        value={search}
                        onChange={(valeurInput) => setSearch(valeurInput.target.value)}
                    />
                    
            </div>

            <h1 className="bodyTitle">Nos produits</h1>
            <section className="prdCards">
                {filtered.map(
                    (prd) => (
                            <PrdCard key={prd.id} prd={prd} />

                ))}

            </section>
       </div>
    </>
  )
}

export default Produits;