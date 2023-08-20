import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuList from './components/MenuList';
import UserForm from './components/UserForm';
import Alert from './components/Alert';
import './Main.css';


function Main() {

  const [name, setName] = useState('');

const [school, setSchool] = useState('');

const [call, setCall] = useState('');

const [email, setEmail] = useState('');

const [alert, setAlert] = useState({show: false});

const [edit, setEdit] = useState(true);

const [inputFields, setInputFields] = useState([
  {id: "Dev1", name: "", school: "", call: "", email: ""},
])


const handleName = (_name) => {
 setName(_name);
}

const handleSchool = (_school) => {
  setSchool(_school);
}

const handleCall = (_call) => {
 setCall(_call);
}

const handleEmail = (_email) => {
  setEmail(_email);
}

const handleSubmit = (e) => {
  e.preventDefault();

    if(edit) {
      const newInputField = inputFields.map(item => {
        return {...item, name: name, school: school, call: call, email: email}
      })

      setInputFields(newInputField);
      setEdit(false); // 수정 모드 종료
      handleAlert({type: 'success', text: "수정되었습니다. "});
      console.log('아이템이 수정되었습니다..');
    } else {
      const newInputField = {id: crypto.randomUUID(), name, school, call, email}

    //불변성을 지켜주기 위해서 새로운 expenses를 생성
    const newInputFields = [...inputFields, newInputField] //...객체 는 해당 배열이나 객체 값을 모조리 복사
    setInputFields(newInputFields);
    console.log('아이템이 추가되었습니다.');
    setEdit(true);
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
       <button className="btn">Signup</button>
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
          handleEdit={handleEdit}
          name={name}
          school={school}
          call={call}
          email={email}
          edit={edit}
          />
          
        </div>
      </div>
    </main>
  );
}

export default Main;
