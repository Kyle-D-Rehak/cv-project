import React from 'react';
import PersonalInputs from './PersonalInputs';
import ExperienceInputs from './ExperienceInputs';
import EducationInputs from './EducationInputs';

const Form = (props) => {
    return (        
        <div className='formWrapper'>
            <form>
                <PersonalInputs 
                    updateInfo={props.updateInfo} 
                    info={props.globalState.info}
                />
                <ExperienceInputs 
                    updateInfo={props.updateInfo} 
                    exp={props.globalState.exp} 
                    createNewExp={props.createNewExp} 
                    deleteExp={props.deleteExp}
                />
                <EducationInputs 
                    updateInfo={props.updateInfo} 
                    edu={props.globalState.edu}
                    createNewEdu={props.createNewEdu} 
                    deleteEdu={props.deleteEdu} 
                />
            </form>
        </div>
    );
}

export default Form