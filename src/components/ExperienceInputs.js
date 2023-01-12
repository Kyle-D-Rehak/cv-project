import React from 'react';
import TextInput from './TextInput';

class ExperienceInputs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.updateInfo(e.target, 'exp', e.target.dataset.key);
    }

    render() {
        const exp = this.props.exp;
        return (
            <div>
                <h2>Experience</h2>
                {exp.map((item, index) => {
                    console.log(item);
                    console.log(index);
                    return ( 
                        <div>
                            <TextInput 
                                name='position' 
                                placeholder='Position' 
                                onChange={this.handleChange} 
                                value={item.position}
                                datakey={index}
                            />
                            <TextInput 
                                name='company' 
                                placeholder='Company'
                                onChange={this.handleChange} 
                                value={item.company}
                                datakey={index} 
                            />
                            <TextInput 
                                name='city' 
                                placeholder='City' 
                                onChange={this.handleChange} 
                                value={item.city}
                                datakey={index}
                            />
                            <TextInput 
                                name='from' 
                                placeholder='From' 
                                onChange={this.handleChange} 
                                value={item.from}
                                datakey={index}
                            />
                            <TextInput 
                                name='to' 
                                placeholder='To' 
                                onChange={this.handleChange} 
                                value={item.to}
                                datakey={index}
                            />
                            <button onClick={() => this.props.deleteExp(index)} type='button'>
                                Delete
                            </button>
                        </div>
                    );
                })
                }
                <button onClick={this.props.createNewExp} type='button'>+ Add Experience</button>
            </div>
        );
    }
}

export default ExperienceInputs