import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form';

const initialTeamValues = {
  name: '',
  age: '',
  email: '',
  role: '',
};




function App() {
  const [teamList, setTeamList] = useState([]);
  const [teamValues, setTeamValues] = useState(initialTeamValues);
  
  const updateForm = (inputName, inputValue) => {
    setTeamValues({...teamValues,[inputName]: inputValue }) 
  }

  const submitForm = (event) => {
    const newTeamMember = {
      name: teamValues.name.trim(),
      age: teamValues.age.trim(),
      email: teamValues.email.trim(),
      role: teamValues.role.trim(),
    }

    if (!newTeamMember.name || !newTeamMember.age || !newTeamMember.email ||!newTeamMember.role) {return;}

    setTeamList([...teamList, newTeamMember ]);
    setTeamValues(initialTeamValues);
  }
  
  return (
    <div className="App">
      <Form key={teamList.name} teamList={teamList} teamValues={teamValues} update={updateForm} submit={submitForm}/>
      {
        teamList.map(teamMember => {
          return (
            <div>
              <p>{teamMember.role}: {teamMember.name} is {teamMember.age} years old. To contact them, please email them at {teamMember.email}</p>
            </div>
            )
        })
      }
    </div>
    )
}       
  
export default App;
