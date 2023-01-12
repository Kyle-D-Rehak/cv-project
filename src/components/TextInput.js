import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, placeholder, onChange, value, datakey } = this.props;
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
}

export default TextInput