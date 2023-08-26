import React from 'react';
import InputField from './InputField';
import './UserForm.css';

const UserForm = ({
  handleName, handleSchool, handleCall, handleEmail,
  handleSubmit, name, school, call, email, edit, index
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
          <InputField 
            label="Name" 
            name="Name"
            placeholder="your name"
            value={name}
            readOnly={!edit}
            onChange={(e) => handleName(e.target.value, index)}
          />
<InputField 
            label="School" 
            name="School"
            placeholder="your school"
            value={school}
            readOnly={!edit}
            onChange={(e) => handleSchool(e.target.value, index)}
          />

<InputField 
            label="Call" 
            name="Call"
            placeholder="your call"
            value={call}
            readOnly={!edit}
            onChange={(e) => handleCall(e.target.value, index)}
          />

<InputField 
            label="Email" 
            name="Email"
            placeholder="your email"
            value={email}
            readOnly={!edit}
            onChange={(e) => handleEmail(e.target.value, index)}
          />
       </div>
    </form>
  )
}

export default UserForm;
