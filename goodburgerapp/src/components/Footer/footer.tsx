import React, {FC} from 'react';
import './footer.css';

const footer:FC = () => {

    return (
        <footer className="footer">
            <div className="footer__copyright">&copy; 2020 SKV</div>
            <div className="footer__signature">Made with love by yours truly</div>
        </footer>
    );
}
export default footer;