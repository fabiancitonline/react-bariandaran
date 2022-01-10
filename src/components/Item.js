import React from 'react';
import Card from './Card.js';
import { useState } from 'react';


function Item() {
    const productos = [
        { name: 'Mermelada', price: '23' },
        { name: 'Dulce de leche', price: '21' },
        { name: 'Tostada', price: '30' },
    ]
    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productos.length > 0) {
                resolve("Existen productos")
            } else {
                reject('No hay productos')
            }
        }, 2000)
    })
    getProductos.then( prods => {console.log(prods)})
    .catch(err => console.log(err))
    const [contar, setContar] = useState(1);
    let stock = 5
    return (
        <div>
         {productos.map(p => <Card key={p.name} name={p.name} price={p.price} />)}
            <br />
            <p>
                <h2>Items a llevar (stock: {stock} unidades)</h2>
                <button onClick={() => setContar(contar <= 1 ? contar : contar - 1)}>-</button>
                <label>{contar}</label>
                <button onClick={() => setContar(contar >= 5 ? contar : contar + 1)}>+</button>
            </p>        </div>
    )
}
export default Item;
