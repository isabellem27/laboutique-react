import { useState } from 'react'
import prdData from './assets/produits.json'
import './assets/css/Produits.css'
import prdCard from './prdCard.jsx'

function Produits(){
    const allProducts = prdData.products;
    const [index, setIndex] = useState(0);
    const prd= allProducts[index];
    // const [search, setSearch] = useState([""]);

   

    // const filtered= allProducts.filter(
    //     (prd) => {
    //         const nom =prd.name.toLowerCase();
    //         const prix =prd.price.toString().toLowerCase();
    //         const marque = prd.brand.toLowerCase();
    //         const detail = prd.description.toLowerCase();
    //         return(
    //             nom.includes(search.toLowerCase())||prix.includes(search.toString())|| marque.includes(search.toLowerCase())|| detail.includes(search.toLowerCase())
    //         )
    //     }
    // )

     return (
    <>
        <body>

            {/* <div className='searchPrd'>
                    <input type='text' placeholder='Search...' 
                        value={search}
                        onChange={(valeurInput) => setSearch(valeurInput.target.value)}
                    />
                    
            </div> */}

            <h1>Nos produits</h1>
            <section className="prdCards">
                <div className="prdCard" >
                    <img src={prd.image}  alt="" />
                    <h3> {prd.name} </h3>
                    <p>{prd.brand}</p>
                    <p>{prd.description}</p>
                    <br></br>
                    <p>{prd.price} €</p>
                </div>

            </section>
            <p>Produit {index+1} of {allProducts.length}</p>
       </body>
    </>
  )
}

export default Produits;