import React from 'react';
import InputField from './InputField';
import Button from './Button';
import './UserForm.css';

const UserForm = ({
  handleName, handleSchool, handleCall, handleEmail,
  handleSubmit, name, school, call, email, edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <InputField 
            label="Name" 
            name="Name"
            placeholder="your name"
            value={name}
            readOnly={!edit}
            onChange={(e) => handleName(e.target.value)}
          />
<InputField 
            label="School" 
            name="School"
            placeholder="your school"
            value={school}
            readOnly={!edit}
            onChange={(e) => handleSchool(e.target.value)}
          />

<InputField 
            label="Call" 
            name="Call"
            placeholder="your call"
            value={call}
            readOnly={!edit}
            onChange={(e) => handleCall(e.target.value)}
          />

<InputField 
            label="Email" 
            name="Email"
            placeholder="your email"
            value={email}
            readOnly={!edit}
            onChange={(e) => handleEmail(e.target.value)}
          />
       </div>
      </div>
      <Button type='submit' text={edit ? "제출" : "수정"} />
    </form>
  )
}

export default UserForm;
