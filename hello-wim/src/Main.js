import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuList from './components/MenuList';
import UserForm from './components/UserForm';
import Alert from './components/Alert';
import Button from './components/Button';
import './Main.css';


function Main() {

  const index1 = 1;
  const index2 = 2;

  const [name1, setName1] = useState('');
const [school1, setSchool1] = useState('');
const [call1, setCall1] = useState('');
const [email1, setEmail1] = useState('');

const [name2, setName2] = useState('');
const [school2, setSchool2] = useState('');
const [call2, setCall2] = useState('');
const [email2, setEmail2] = useState('');

const [alert, setAlert] = useState({show: false});

const [edit, setEdit] = useState(false);

const [inputFields, setInputFields] = useState([
  {id: "Dev1", name: "", school: "", call: "", email: ""},
  {id: "Dev2", name: "", school: "", call: "", email: ""},

])


const handleName = (_name, index) => {
  if(index === 1) setName1(_name);
  if(index === 2) setName2(_name);
}

const handleSchool = (_school, index) => {
  if(index === 1) setSchool1(_school);
  if(index === 2) setSchool2(_school);
}

const handleCall = (_call, index) => {
  if(index === 1) setCall1(_call);
  if(index === 2) setCall2(_call);
}

const handleEmail = (_email, index) => {
  if(index === 1) setEmail1(_email);
  if(index === 2) setEmail2(_email);
}

const handleSubmit = (e) => {
  e.preventDefault();

    if(edit) {
      const newInputField = [...inputFields];
      newInputField[0] = {id: "Dev1", name: name1, school: school1, call: call1, email: email1};
      newInputField[1] = {id: "Dev2", name: name2, school: school2, call: call2, email: email2};

      setInputFields(newInputField);
      setEdit(false); // 수정 모드 종료
      handleAlert({type: 'success', text: "수정되었습니다. "});
      console.log('아이템이 수정되었습니다..');
    }
};

const handleEdit = () => {
  setEdit(true);
}

const handleAlert = ({type, text}) => {
  setAlert({show: true, type, text});
  setTimeout(() => {
    setAlert({show: false});
  }, 5000); //5초 후에
}

  return (
    <main className="main-container">
       {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
       <div className="Control">
       <button className="btn"><Link to="/signin">Signin</Link></button>
       <button className="btn"><Link to="/signup">Signup</Link></button>
       </div>
      <div className="Banner">
      <h1 style={{fontSize: '50px'}}>WIM</h1>
      </div>
      <div className="Introduce">
            Who I am? Make your PortFolio, W I M
          </div>
      <div className="Main">
        <div className="MenuBar">
          {/* menuList */}
          <MenuList />
        </div>
        <div className="UserForm">
          {/* UserForm */}
          <UserForm
          handleName={handleName}
          handleSchool={handleSchool}
          handleCall={handleCall}
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          name={name1}
          school={school1}
          call={call1}
          email={email1}
          edit={edit}
          index={index1}
          />
<UserForm
          handleName={handleName}
          handleSchool={handleSchool}
          handleCall={handleCall}
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          name={name2}
          school={school2}
          call={call2}
          email={email2}
          edit={edit}
          index={index2}
          />
          
        </div>
        <div>
        {edit ? 
          (<Button type='submit' text= '제출' onClick={handleSubmit}></Button>) : 
          (<Button type='button' text= '수정' onClick={handleEdit}></Button>)
        }
      </div>
      </div>
    </main>
  );
}

export default Main;
