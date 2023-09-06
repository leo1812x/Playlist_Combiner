import { ReactNode } from "react";

interface Props{
    children:ReactNode;
}

function CardsHolder({children}:Props){

    return (
    <div
    id="CardsHolder">
        {children}
    </div>)
}









export default CardsHolder;