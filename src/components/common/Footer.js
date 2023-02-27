import {Link} from "react-router-dom";

function Footer (){
    return(
        <footer className="h-16 bg-green-500 w-full mt-3">
            <div className="container mx-auto md flex items-center h-full justify-center items-center text-white text-3xl font-bold">
                <Link to="/">BasketApp</Link>

            </div>
        </footer>
    )
}

export default Footer;