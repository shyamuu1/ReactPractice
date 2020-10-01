import React from 'react';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <div className='backdrop'onClick={props.onClose}>
                <div className='error-modal'>
                    <h2>Error Occurred!</h2>
                    <p>{props.children}</p>
                    <div className='error-modal__actions'>
                        <button type="button" onClick={props.onClose}>
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ErrorModal;