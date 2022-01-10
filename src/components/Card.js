import React from "react";
const Card = ({name, price}) => {
     return (
                <div>
                    <h3>Producto: {name} Precio: ${price}</h3>
                    </div>
            );
        }
 export default Card;