import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CV from './components/CV';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.createNewExp = this.createNewExp.bind(this);
    this.deleteExp = this.deleteExp.bind(this);
    this.createNewEdu = this.createNewEdu.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
    this.state = {
      info: {
        firstName: '',
        lastName: '',
        title: '',
        image: '',
        address: '',
        phone: '',
        email: '',
        disc: ''
      },
      exp: [
        {
          position: '',
          company: '',
          city: '',
          from: '',
          to: ''
        }
      ],
      edu: [
        {
          university: '',
          degree: '',
          from: '',
          to: ''
        }
      ]
    };

  };

  updateInfo(target, object, index = undefined, image = false) {
    if(image) {
      if (target.files && target.files[0]) {
        this.setState((state) => {
          const newState = JSON.parse(JSON.stringify(state));
            newState.info.image = URL.createObjectURL(target.files[0]);
          return newState;
        });
      }
    } else {
      this.setState((state) => {
        const newState = JSON.parse(JSON.stringify(state));
        if(index === undefined) {
          newState[object][target.name] = target.value;
        } else {
          newState[object][index][target.name] = target.value;
        }
        return newState;
      }); 
    }
  }

  createNewExp() {
    this.setState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.exp.push({
        position: '',
        company: '',
        city: '',
        from: '',
        to: ''
      });
      return newState;
    });
  }

  deleteExp(index) {
    this.setState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.exp.splice(index, 1);
      return newState;
    });
  }

  createNewEdu() {
    this.setState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.edu.push({
        university: '',
        degree: '',
        from: '',
        to: ''
      });
      return newState;
    });
  }

  deleteEdu(index) {
    this.setState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.edu.splice(index, 1);
      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id='main'>
          <Form 
            updateInfo={this.updateInfo} 
            createNewExp={this.createNewExp} 
            deleteExp={this.deleteExp} 
            createNewEdu={this.createNewEdu} 
            deleteEdu={this.deleteEdu} 
            globalState={this.state}
          />
          <CV globalState={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
