import React, {FC} from 'react';
import Mainheader from "../../Main/Main Header/mainheader";
import Checkout from "../../Checkout/checkout";

const CheckoutPage:FC = () => {
    return (
        <div>
            <Mainheader>Checkout Summary</Mainheader>
            <Checkout />
        </div>
    );
}

export default CheckoutPage;