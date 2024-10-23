import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // ใช้ Button จาก react-bootstrap
import { verifyUser } from '../../data/users';
import './Login.css';

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState(''); // ตัวแปรเก็บข้อความข้อผิดพลาด

  const handleLogin = (event) => {
    event.preventDefault(); // ป้องกันการ refresh หน้าเว็บ
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();
    const userInfo = verifyUser(user, pass);

    userRef.current.value = '';
    passRef.current.value = '';

    if (userInfo === null) {
      setError('Wrong username or password'); // แสดงข้อผิดพลาด
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role);
      setError(''); // ล้างข้อความข้อผิดพลาดเมื่อสำเร็จ
    }
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="user"
            style={{ textAlign: 'center' }}
            ref={userRef}
          />
        </Form.Group>

        <Form.Group htmlFor="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="pass"
            style={{ textAlign: 'center' }}
            ref={passRef}
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>} {/* ข้อความแสดงข้อผิดพลาด */}

        <Button type="submit" variant="success" className="mt-3">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;





// import { useState, useRef } from 'react';

// import Form from 'react-bootstrap/Form';

// import { verifyUser } from '../../data/users'

// import "./Login.css"
// function Login({ setToken, setRole }) {
//     const userRef = useRef(); 
//     const passRef = useRef(); 

//     return (
//         <div className="login-container">
//         <Form.Label htmlFor="username">Username</Form.Label>
//         <Form.Control
//         type="text"
//         id="username"
//         // aria-describedby="passwordHelpBlock"
//         placeholder='user'
//         style={{textAlign: 'center'}}
//         ref={userRef}
//       />
//        <Form.Label htmlFor="password">Password</Form.Label>
//         <Form.Control
//         type="password"
//         id="password"
//         // aria-describedby="passwordHelpBlock"
//         placeholder='pass'
//         style={{textAlign: 'center'}}
//         ref={passRef}
//       />
//       <button className="btn btn-success mt-3" onClick={() =>{
//         const user = userRef.current.value.trim()
//         const pass = passRef.current.value.trim()
//         const userInfo = verifyUser(user, pass)
//         userRef.current.value = ''  
//         passRef.current.value = ''
//         if (userInfo === null) {
//         alert('Wrong username or password')
//         userRef.current.focus()
//         }else {
//           setToken(userInfo.token)
//           setRole(userInfo.role)
//         }

//       }}>Login</button>
//         </div>
//     )       

// }

// export default Login    