import React from 'react';

export default function Button(props) {
    const {label, type, className, onClick} = props;
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {label}
        </button>
    );
}