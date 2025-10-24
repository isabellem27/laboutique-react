
import prdData from './assets/produits.json'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import PrdCard from './PrdCard.jsx';
import './assets/css/Categories.css'

function Categories(){
    const allProducts = prdData.products;
    const allCategories = prdData.categories;
   
    
    // const { slug } = useParams();           // récupérer le slug depuis l'URL
    const navigate = useNavigate();
    const [selectedCat, setSelectedCat] = useState(null);

    // Je liste mes catégories, j'envoie à nbPrdCat le nom de la catégorie, j'affiche le length des produits filtrés

    //Si j'ai une catégorie dans mon URL, je charge selectedCat sinon selectedCat est null
    // useEffect(() => {
    //     if (slug) {
    //       const category = allCategories.find(cat =>
    //         cat.name.toLowerCase().replace(/\s+/g, '-') === slug
    //       );
    //       setSelectedCat(category || null);
    //     } else {
    //       setSelectedCat(null);
    //     }
    //   }, [slug, allCategories]
    // );

    //Si j'ai sélectionné une catégorie, je renvoie la liste des produits filtrés par catégorie, sinon la liste est vide
    const filtered = selectedCat ? allProducts.filter(prd => prd.category === selectedCat.id) : [];

    //Si j'ai cliqué sur une catégorie, je met le nom dans l'URL et je charge selectedCat sinon selectedCat est null
    const handleClickCategory = cat => {
        const catSlug = cat.name.toLowerCase().replace(/\s+/g, '-');
        navigate(`/categorie/${catSlug}`);
        const category = allCategories.find(cat =>
            cat.name.toLowerCase().replace(/\s+/g, '-') === catSlug
          );
        setSelectedCat(category || null);
    };

    const nbPrdByCat = (catName) => {
        return allProducts.filter(
            (prd) => prd.category === catName
        ).length
    }
    

    function MaList({allCategories}) {
        return (
            <ul>
                <div className="catCards">
                    {allCategories.map((categorie)=>{
                    return<ListItem key={categorie.id} cat={categorie}/>;
                    })}
                </div>
            </ul>
        )
    }


    function ListItem({cat}){
        const nbPrd = nbPrdByCat(cat.id);
        return (
            <div className="catCard" onClick={() => handleClickCategory(cat)}>
                <h2>{cat.name}</h2>
                <p>{nbPrd} produit{nbPrd > 1 ? 's' : ''}</p>
            </div>
        )
    }
      

    
    return (
    <>
        <div className='body'>
        {/* on affiche la liste des catégories si aucune catégorie n'est sélectionnée */}
            {!selectedCat && <div>

                    <h1 className="bodyTitle">Nos catégories de produits</h1>
                        <MaList allCategories={allCategories} />
                </div>}

        {/*La liste des produits ne s'affiche que si une catégorie a été selectionnée */}
            {selectedCat && (
            <div>
            <button className="backButton" onClick={() =>{
                        setSelectedCat(null);
                        navigate('/categories', { replace: true }); 
                    }
                  }>
                ← Retour aux catégories
            </button>
            <h2>Produits de la catégorie "{selectedCat.name}"</h2>
            <section className="prdCards">
                {filtered.map(prd => (<PrdCard key={prd.id} prd={prd} />
                ))}
            </section>
            </div>
            )}
        </div>
    </>
    )
}

export default Categories;