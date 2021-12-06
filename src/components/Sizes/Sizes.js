import './Sizes.scss'
import React, { useState, useContext } from "react";
import CartContext from "../../contexts/cart/CartContext";




export const Sizes = ({ parentItem, refer, ID }) => {

    const [size, setSize] = useState()
    const { addRemoveSize, cartItems } = useContext(CartContext);

    const ListaTalles = [
        { talle: "4", medida: "  (14,9 mm)" },
        { talle: "5", medida: "  (15,6 mm)" },
        { talle: "6", medida: "  (16,5 mm)" },
        { talle: "7", medida: "  (17,2 mm)" },
        { talle: "8", medida: "  (18,0 mm)" },
        { talle: "9", medida: "  (18,9 mm)" },
        { talle: "10", medida: "  (19,7 mm)" },
        { talle: "11", medida: "  (20,6 mm)" },
        { talle: "12", medida: "  (21,5 mm)" }
    ];


    if (!size) {
        const objIndex = cartItems.findIndex((obj => obj.id === parentItem))
        const existe = cartItems[objIndex].talles.some(obj => obj.id === ID)
        if (existe) {
            const objIndexDos = cartItems[objIndex].talles.findIndex((obj => obj.id === ID))
            setSize(cartItems[objIndex].talles[objIndexDos].size)
        }
    }

    const handleSelect = (e) => {
        e.preventDefault()
        setSize(e.target.id)
        const newSize = { id: parentItem + '_' + refer, parentItem: parentItem, refer: refer, size: e.target.id }
        addRemoveSize(newSize)
        enableNextButton()
    }

    const enableNextButton = () => {
        const objIndex = cartItems.findIndex((obj => obj.id === parentItem))
        const existe = cartItems[objIndex].talles.some(obj => obj.enableNext === ID)
        if (existe) {
            const objIndexDos = cartItems[objIndex].talles.findIndex((obj => obj.enableNext === ID))
            return cartItems[objIndex].talles[objIndexDos].enableNext
        }
    }

    const next = enableNextButton()


    return (
        <div className='my-3'>
            <div className='dropdown mx-1'>
                <button
                    className='btn dropdown-toggle btn-Size'
                    // ${colorChange === false ? 'btn-Carrito' : 'btn-CarritoDos'}
                    disabled={refer === 0 || ID === next ? false : true}
                    type="button"
                    id={`dropdownMenuButton1`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {size ? `${size}` : `Talle`}
                    <i className="fas fa-ring mx-1"></i>
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {ListaTalles.map((talle) => (
                        <button onClick={handleSelect} className="dropdown-item" type="button" id={talle.talle} key={talle.talle}>
                            {talle.talle} {talle.medida}
                        </button>
                    ))}
                </div>
            </div>
            <div className='text-center'> {!size ? null : <i className="fas fa-check"></i>} </div>
        </div>
    )
}