// import {useSelector} from "react-redux";
// import {useState, useEffect} from "react";
//
// function PriceCard(){
//     const [amount, setAmount] = useState(0);
//     const basket = useSelector(state => state.basket);
//     useEffect(() => {
//         basket.map(prod => setAmount(amount + prod.count * prod.count));
//     }, [basket]);
//
//     return(
//         <div>
//             {amount}
//         </div>
//     )
// }
//
// export default PriceCard;