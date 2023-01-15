import React from 'react';
import TextInput from './TextInput';

const ExperienceInputs = (props) => {
    
    const handleChange = (e) => {
        props.updateInfo(e.target, 'exp', e.target.dataset.key);
    }
    
        const exp = props.exp;
    return (
        <div>
            <h2>Experience</h2>
            {exp.map((item, index) => {
                return ( 
                    <div>
                        <TextInput 
                            name='position' 
                            placeholder='Position' 
                            onChange={handleChange} 
                            value={item.position}
                            datakey={index}
                        />
                        <TextInput 
                            name='company' 
                            placeholder='Company'
                            onChange={handleChange} 
                            value={item.company}
                            datakey={index} 
                        />
                        <TextInput 
                            name='city' 
                            placeholder='City' 
                            onChange={handleChange} 
                            value={item.city}
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
                        <button onClick={() => props.deleteExp(index)} type='button'>
                            Delete
                        </button>
                    </div>
                );
            })
            }
            <button onClick={props.createNewExp} type='button'>+ Add Experience</button>
        </div>
    );
}

export default ExperienceInputs