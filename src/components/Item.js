import {useDispatch} from "react-redux";
import {removeBasket, changeCount} from "../store/reducers/Basket";

function Item({item}){
    const dispatch = useDispatch();
    const removeProdFromBasket = (id) => {
        dispatch(removeBasket(id));
    }
    const decCount = (id, count) => {
        const data = count-1;
        dispatch(changeCount({id, data}));
    }
    const incCount = (id, count) => {
        const data = count+1;
        dispatch(changeCount({id, data}));
    }
    return(
        <div className="border-2 border-stone-200 border-solid flex mb-2 rounded p-5 flex items-center">
            <div className="w-40 shrink-0">
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="mx-5 flex-1">
                <div className="text-3xl font-semibold mb-2">{item.title}</div>
                <div>{item.description}</div>
            </div>
            <div className="border-l-4 border-stone-200 text-2xl text-center min-w-[280px]">

                <div className="mb-2">
                    {
                        item.count !== 1 ? item.price + '$ x ' + item.count + '=' + (item.price * item.count).toFixed(2) + '$' : item.price.toFixed(2) + '$'
                    }
                </div>
                <div className="flex mb-1.5 justify-center">
                    <div onClick={() => item.count !== 1 && decCount(item.id, item.count)} className="bg-green-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold text-xl cursor-pointer select-none	">-</div>
                    <input className="border-solid border-green-500 w-12 rounded mx-2 text-center placeholder:text-center appearance-none select-none" readOnly value={item.count}/>
                    <div onClick={() => incCount(item.id, item.count)}  className="bg-green-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold text-xl cursor-pointer select-none	">+</div>
                </div>
                <div>
                    <button onClick={() => removeProdFromBasket(item.id)} className="bg-red-800 p-2 text-white rounded">Remove Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Item;