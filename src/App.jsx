import { CustomCarousel } from "./components/CustomCarousel";
import { CustomNavbar } from "./components/CustomNavbar";
import Products from "./components/Products";

export const Home=()=>{
    return(
        <>
        <CustomNavbar/>
        <CustomCarousel/>
        <Products/>
        </>
    )
};