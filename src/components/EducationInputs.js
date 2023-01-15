import React from 'react';
import TextInput from './TextInput';

const EducationInputs = (props) => {
    
    const handleChange = (e) => {
        props.updateInfo(e.target, 'edu', e.target.dataset.key);
    }

    const edu = [...props.edu];
    return (
        <div>
            <h2>Education</h2>
                {edu.map((item, index) => {
                    return (
                        <div>
                            <TextInput 
                                name='university' 
                                placeholder='University Name'
                                onChange={handleChange}
                                value={item.university}
                                datakey={index}
                            />
                            <TextInput 
                                name='degree' 
                                placeholder='Degree'
                                onChange={handleChange}
                                value={item.degree}
                                datakey={index}
                            />
                            <TextInput 
                                name='from' 
                                placeholder='From'
                                onChange={handleChange}
                                value={item.from}
                                datakey={index} 
                            />
                            <TextInput 
                                name='to' 
                                placeholder='To'
                                onChange={handleChange}
                                value={item.to}
                                datakey={index} 
                            />
                            <button onClick={() => props.deleteEdu(index)} type='button'>
                                Delete
                            </button>
                        </div>
                    )
                })}
            <button onClick={props.createNewEdu} type='button'>+ Add Education</button>
        </div>
    );
}

export default EducationInputs