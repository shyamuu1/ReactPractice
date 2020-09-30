import React from 'react';
import { ItemProvider } from 'util/context';
import ItemContainer from './containers/ItemContainer';

const App:React.FC = ():JSX.Element => {
    
    return (
        <div>
            <ItemProvider>
                <ItemContainer />
            </ItemProvider>
        </div>
    );

}

export default App;