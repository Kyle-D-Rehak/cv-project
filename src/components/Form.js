import React from 'react';
import PersonalInputs from './PersonalInputs';
import ExperienceInputs from './ExperienceInputs';
import EducationInputs from './EducationInputs';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='formWrapper'>
                <form>
                    <PersonalInputs 
                        updateInfo={this.props.updateInfo} 
                        info={this.props.globalState.info}
                    />
                    <ExperienceInputs 
                        updateInfo={this.props.updateInfo} 
                        exp={this.props.globalState.exp} 
                        createNewExp={this.props.createNewExp} 
                        deleteExp={this.props.deleteExp}
                    />
                    <EducationInputs 
                        updateInfo={this.props.updateInfo} 
                        edu={this.props.globalState.edu}
                        createNewEdu={this.props.createNewEdu} 
                        deleteEdu={this.props.deleteEdu} 
                    />
                </form>
            </div>
        );
    }
}

export default Form