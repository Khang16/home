import React from 'react';

export const CategoryItem = ({ src, alt, text }) => {
    return (
        <div>
            <img src={src} alt={alt} />
            <p>{text}</p>
        </div>
    );
};
