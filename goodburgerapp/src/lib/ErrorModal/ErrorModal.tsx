import React, { ReactNode } from 'react';

interface Props {
    children?:ReactNode;
}

const errorModal:React.FC = ({ children}:Props) => {
    return (
        <React.Fragment>
            <div className="backdrop" >
                <div className="error-modal">
                    <h2>Error Occurred</h2>
                    <p>{children}</p>
                    <div className="error-modal_actions">
                        <button type="button">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default errorModal;