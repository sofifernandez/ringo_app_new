import React, { useState } from "react";

export const Sizes = (params) => {

    const [size, setSize]= useState(null)

    const talles = [
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

    const handleSelect = (e) => {
        e.preventDefault()
        setSize(e.target.id)
        params.sizeToCart(e.target.id)
    }
    



    return (
        <>
            <button
                className="btn btn-secondary dropdown-toggle col-5"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {size ? `Talle: ${size}`: `Talle`}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {talles.map((talle) => (
                    <button  onClick={handleSelect} className="dropdown-item col-6" type="button" id={talle.talle} key={talle.talle}>
                            {talle.talle} {talle.medida}
                    </button>
                ))}
            </div>
        </>
    )
}