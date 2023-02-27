import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {useMemo} from "react";

function Header (){
    const {basket} = useSelector(state => state.basket);

    const totalPrice = useMemo(() => basket.reduce((prev, next) => {
        if(next) {
            return prev + next.price * next.count;
        }
        else {
            return prev
        }
    }, 0.0), [basket]);

    return(
        <header className="h-16 bg-green-500 fixed top-0 w-full">
            <div className="container mx-auto md flex items-center h-full justify-between items-center">
                <div className="text-white text-3xl font-bold">
                    <Link to="/">BasketApp</Link>
                </div>
                <div className="text-white text-2xl flex items-center">
                    <Link to="/card"><FontAwesomeIcon icon={faShoppingBasket} /></Link>
                    {totalPrice > 0 && <div className="ml-2">{totalPrice.toFixed(2)}$</div>}
                </div>
            </div>
        </header>
    )
}

export default Header;