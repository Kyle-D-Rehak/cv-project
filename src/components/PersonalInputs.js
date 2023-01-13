import React from 'react';
import TextInput from './TextInput';

class PersonalInputs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     title: '',
        //     address: '',
        //     phone: '',
        //     email: '',
        //     disc: ''
        // }


    }

    handleChange(e) {
        this.props.updateInfo(e.target, 'info');
    }

    handleImageChange(e) {
        this.props.updateInfo(e.target, 'info', undefined, true);
    }

    render() {
        const info = {...this.props.info};
        console.log(this.props.info);
        return (
            <div>
                <div>
                    <h2>Personal Information</h2>
                    <TextInput 
                        name='firstName' 
                        placeholder='First name' 
                        onChange={this.handleChange} 
                        value={info.firstName}
                    />
                    <TextInput 
                        name='lastName' 
                        placeholder='Last name' 
                        onChange={this.handleChange} 
                        value={info.lastName}
                    />
                    <TextInput 
                        name='title' 
                        placeholder='Title' 
                        onChange={this.handleChange} 
                        value={info.title}
                    />
                    <TextInput 
                        name='address' 
                        placeholder='Address' 
                        onChange={this.handleChange} 
                        value={info.address}
                    />
                    <input
                        type='file'
                        accept='image/*'
                        id='image'
                        name='image'
                        onChange={this.handleImageChange}
                    />
                    <input 
                        type='text' 
                        pattern='[0-9]*' 
                        inputMode='numeric' 
                        id='phone' 
                        name='phone' 
                        placeholder='Phone Number' 
                        onChange={this.handleChange} 
                        value={info.phone}
                    />
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email' 
                        onChange={this.handleChange}
                        value={info.email}
                    />
                    <textarea 
                        name='disc' 
                        id='disc'
                        placeholder='Description' 
                        onChange={this.handleChange} 
                        value={info.disc}
                    />
                </div>
            </div>
        );
    }
}

export default PersonalInputs