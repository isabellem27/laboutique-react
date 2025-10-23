import { useState } from 'react'
import prdData from './assets/produits.json'

function Categories(){
    const allProducts = prdData.products;
    const allCategories = prdData.categories;

    let catName ="";
   
    
    const filtered= allProducts.filter(
        (prd) => {
            const category =prd.category.toLowerCase();
            return(
                category.includes({catName}.toLowerCase())
            )
        }
    )
    

    function MaList(props) {
        return (
            <ul>
                {allCategories.map((categorie)=>{
                  return<ListItem key={props.category.id} cat={props.category.name}/>;
                })}
            </ul>
        )
    }


    function ListItem(props){
        catName=props.category.name;
        return <li>{props.category.name}  {filtered.length} produits</li>
    }
      

    // Je liste mes catégories, j'envoie à filtered le nom de la catégorie, j'affiche le length des produits filtrés
    return (
    <>
        <body>

            <h1>Nos catégories de produits</h1>
            <section className="catCards">

                <MaList allCategories={allCategories} />

            </section>
    </body>
    </>
    )
}

export default Categories;