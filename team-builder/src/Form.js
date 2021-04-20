import React from 'react';

export default function Form(props) {
    const { teamList, teamValues, update, submit } = props;


const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}






return(
    <div>
        <p>Add a New Team Member!</p>
        <form onSubmit={onSubmit}>
            <label>Name: <input
                            type="text"
                            value={teamValues.name}
                            onChange={onChange}
                            name='name'
                            placeholder='Name Here..'
                            />
            </label>
            <label>Age: <input
                            type="number"
                            value={teamValues.age}
                            onChange={onChange}
                            name='age'
                            placeholder='Age Here..'
                            />
            </label>
            <label>Email: <input
                            type="text"
                            value={teamValues.email}
                            onChange={onChange}
                            name='email'
                            placeholder='Email Here..'
                            />
            </label>
            <label>Role: <select value={teamValues.role} name='role' onChange={onChange}>
                            <option value=''>--Select a Role--</option>
                            <option value='Frontend Engineer'>Frontend Engineer</option>
                            <option value='Backend Engineer'>Backend Engineer</option>
                            <option value='Fullstack Engineer'>Fullstack Engineer</option>
                            <option value='Project Manager'>Project Manager</option>
                            </select>
            </label>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
);

}