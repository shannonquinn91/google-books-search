import React from 'react';

function Input(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" {...props} placeholder="Search for a book"></input>
        </div>
    )
}

export default Input;