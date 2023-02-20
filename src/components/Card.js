import {useSelector} from "react-redux";
import Item from "./Item";
import PriceCard from "./PriceCard";
function Card (){

    const {basket} = useSelector(state => state.basket);
    return(
        <>
            <div className="mt-5">
                {
                    basket.map((item, index) => <Item item={item} key={index}/>)
                }
            </div>
            {/*<PriceCard/>*/}
            </>
    )
}
export default Card;