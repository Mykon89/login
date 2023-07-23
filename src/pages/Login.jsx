import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post('https://localhost:8000/', {
          email,
          password,
        })
        .then(res => {
          if ((res.data = 'exist')) {
            history('/home', { state: { id: email } });
          } else if ((res.data = 'notexist')) {
            alert('User have not sign up');
          }
        })
        .catch(e => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Login</h1>

      <form action="POST">
        <input
          type="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Senha"
          name=""
          id=""
        />
        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>Ou</p>
      <br />
    </div>
  );
};

export default Login;
