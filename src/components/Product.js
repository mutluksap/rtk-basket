import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import basket, {addBasket} from "../store/reducers/Basket";

function Product({product}){
    const dispatch = useDispatch();
    const {basket} = useSelector(state => state.basket);
    const [count, setCount] = useState(0) ;
    const addBasketProduct = (product, count) => {
        const selectedProduct = {...product, ...{"count": count}}
        dispatch(addBasket(selectedProduct));
    }
    return (
        <div className="w-[24%] border-2 border-stone-200 border-solid flex items-center justify-center rounded my-2 flex-col">
            <img className="h-64 block p-4" alt={product.title} src={product.image} />
            <div className="w-full flex justify-center">
                <div className="flex flex-col p-1">
                    <div className="flex mb-1.5 justify-center">
                        <div onClick={() => count !== 0 && setCount(count-1)} className="bg-green-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold text-xl cursor-pointer select-none	">-</div>
                        <input className="border-solid border-green-500 w-12 rounded mx-2 text-center placeholder:text-center appearance-none select-none" readOnly value={count}/>
                        <div onClick={() => setCount(count+1)} className="bg-green-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold text-xl cursor-pointer select-none	">+</div>
                    </div>
                    <div className="text-center text-2xl">{product.price} $</div>
                    <button onClick={() => addBasketProduct(product, count)} className="border-2 border-solid border-green-500 bg-white rounded text-green-500 p-2 font-bold">Add Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Product;