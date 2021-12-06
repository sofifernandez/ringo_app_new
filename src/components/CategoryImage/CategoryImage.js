import galeriaAnillos from "../../images/anillos1.svg"
import galeriaAros from "../../images/aros1_1.svg"
import { NavLink } from "react-router-dom";

export const CategoryImage = ({ type }) => {
    if (type === 'anillos') {
        return (
            <div className="col-12 px-0">
                <NavLink to={'/tipo/anillos'}><img id="cartel" className="img-fluid col-12 gx-0" src={galeriaAnillos} alt="BW" /></NavLink>
            </div>
        )
    } else if (type === 'aros'){
        return (
            <div className="col-12 px-0">
                 <NavLink to={'/tipo/aros'}><img id="cartel" className="img-fluid col-12 gx-0" src={galeriaAros} alt="BW" /></NavLink>
            </div>
        )
    }
}