import React from 'react';

import './input-card.styles.scss'
const InputCard = ({children,title,span, full, className}) => (
    <div className={`input-card card-${span} ${className}`}>
        <div className="card-header">
            <h4>{title}</h4>
        </div>
        {
            children
        }
    </div>
)
export default InputCard