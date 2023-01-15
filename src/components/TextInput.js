import React from 'react';

const TextInput = (props) => {
    const { name, placeholder, onChange, value, datakey } = props;
    return (
        <input 
            type='text' 
            id={name} 
            name={name} 
            placeholder={placeholder} 
            onChange={onChange} 
            value={value}
            data-key={datakey}
        />
    );
}

export default TextInput