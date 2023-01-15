import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CV from './components/CV';
import './App.css';

const App = () => {
    const [appState, setAppState] = useState({
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
    });

  const updateInfo = (target, object, index = undefined, image = false) => {
    if(image) {
      if (target.files && target.files[0]) {
        setAppState((state) => {
          const newState = JSON.parse(JSON.stringify(state));
            newState.info.image = URL.createObjectURL(target.files[0]);
          return newState;
        });
      }
    } else {
      setAppState((appState) => {
        const newState = JSON.parse(JSON.stringify(appState));
        if(index === undefined) {
          newState[object][target.name] = target.value;
        } else {
          newState[object][index][target.name] = target.value;
        }
        return newState;
      }); 
    }
  }

  const createNewExp = () => {
    setAppState((state) => {
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

  const deleteExp = (index) => {
    setAppState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.exp.splice(index, 1);
      return newState;
    });
  }

  const createNewEdu = () => {
    setAppState((state) => {
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

  const deleteEdu = (index) => {
    setAppState((state) => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.edu.splice(index, 1);
      return newState;
    });
  }

  return (
    <div className="App">
      <Header />
      <div id='main'>
        <Form 
          updateInfo={updateInfo} 
          createNewExp={createNewExp} 
          deleteExp={deleteExp} 
          createNewEdu={createNewEdu} 
          deleteEdu={deleteEdu} 
          globalState={appState}
        />
        <CV globalState={appState} />
      </div>
    </div>
  );
}

export default App;
