import './assets/css/PrdCard.css'
export default function PrdCard (props){
    
    return (    
        <div className="prdCard" >
            <div className="image">
                <img src={props.prd.image}  alt="" />
            </div>
            <h3> {props.prd.name} </h3>
            <p>{props.prd.brand}</p>
            <p>{props.prd.description}</p>
            <br></br>
            <p>{props.prd.price} €</p>
        </div>
    )
};