import React from 'react';

interface Props {
id:string,
description:string
}

const ItemContainer:React.FC = ():JSX.Element => {
    return(
        <div className="App">
            <p>Reminder Form</p>
            <section>
                <p>Reminder List</p>
            </section>
        </div>
    );
}

export default ItemContainer;