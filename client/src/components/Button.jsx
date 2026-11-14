import React from 'react';

export default function Button(props) {
    const {label, type, className, onClickHandler} = props;
    return (
        <button
            type={type}
            className={className}
            onClick={onClickHandler}
        >
            {label}
        </button>
    );
}