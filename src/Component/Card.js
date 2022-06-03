import React from "react";
function Card(props){
    const{name,description,image1}=props
    return(
        <div className="card">
            
            <div className="image1">
                <img src={image1} alt=''/>
            
            <div className="container">
                <h2>{name}</h2>
                <p>{description}</p>
                
            </div>
            </div>
        </div>
        
    )

}

export default Card;
