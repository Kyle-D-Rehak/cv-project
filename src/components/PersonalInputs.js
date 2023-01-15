import React from 'react';
import TextInput from './TextInput';

const PersonalInputs = (props) => {

    const handleChange = (e) => {
        props.updateInfo(e.target, 'info');
    }

    const handleImageChange = (e) => {
        props.updateInfo(e.target, 'info', undefined, true);
    }
    const info = {...props.info};
    console.log(props.info);
    return (
        <div>
            <div>
                <h2>Personal Information</h2>
                <TextInput 
                    name='firstName' 
                    placeholder='First name' 
                    onChange={handleChange} 
                    value={info.firstName}
                />
                <TextInput 
                    name='lastName' 
                    placeholder='Last name' 
                    onChange={handleChange} 
                    value={info.lastName}
                />
                <TextInput 
                    name='title' 
                    placeholder='Title' 
                    onChange={handleChange} 
                    value={info.title}
                />
                <TextInput 
                    name='address' 
                    placeholder='Address' 
                    onChange={handleChange} 
                    value={info.address}
                />
                <input
                    type='file'
                    accept='image/*'
                    id='image'
                    name='image'
                    onChange={handleImageChange}
                />
                <input 
                    type='text' 
                    pattern='[0-9]*' 
                    inputMode='numeric' 
                    id='phone' 
                    name='phone' 
                    placeholder='Phone Number' 
                    onChange={handleChange} 
                    value={info.phone}
                />
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='Email' 
                    onChange={handleChange}
                    value={info.email}
                />
                <textarea 
                    name='disc' 
                    id='disc'
                    placeholder='Description' 
                    onChange={handleChange} 
                    value={info.disc}
                />
            </div>
        </div>
    );
}

export default PersonalInputs