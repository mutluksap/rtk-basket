import {useSelector} from "react-redux";
import Product from "./Product";
import {useEffect} from "react";
import ShowAlert from "./Alert";


function Products (){

    const { products } = useSelector(state => state.products);
    const { warningAlreadyInBasket } = useSelector(state => state.basket);
    const {warningProductCount} = useSelector(state => state.basket);

    return(
        <main>
            <div className="flex items-center h-full flex-wrap justify-between">
                {
                    products.map((product, index) => {
                        return (
                            <Product product={product} key={index}/>
                        )
                    })
                }

                {warningProductCount && <ShowAlert  title="Warning" text="Please enter valid count" icon="warning" confirmButtonText="OK"/>}
                {warningAlreadyInBasket && <ShowAlert title="Warning" text="This product is already added to your cart." icon="warning" confirmButtonText="OK"/>}
            </div>
        </main>
    )
}

export default Products;