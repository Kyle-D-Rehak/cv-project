import React from 'react';
import TextInput from './TextInput';

class EducationInputs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.updateInfo(e.target, 'edu', e.target.dataset.key);
    }

    render() {
        const edu = [...this.props.edu];
        return (
            <div>
                <h2>Education</h2>
                    {edu.map((item, index) => {
                        return (
                            <div>
                                <TextInput 
                                    name='university' 
                                    placeholder='University Name'
                                    onChange={this.handleChange}
                                    value={item.university}
                                    datakey={index}
                                />
                                <TextInput 
                                    name='degree' 
                                    placeholder='Degree'
                                    onChange={this.handleChange}
                                    value={item.degree}
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
                                <button onClick={() => this.props.deleteEdu(index)} type='button'>
                                    Delete
                                </button>
                            </div>
                        )

                    })}
                <button onClick={this.props.createNewEdu} type='button'>+ Add Education</button>
            </div>
        );
    }
}

export default EducationInputs