import React from 'react';
import {Food} from '../../util/types';
import OrderList from './OrderList/OrderList';

const Orders:React.FC = () => {
    const currentOrders:Food[] = [];
    return(
        <div className="Orders">
            <OrderList allorders={currentOrders} />
        </div>
    );
};

export default Orders;