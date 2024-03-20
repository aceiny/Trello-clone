import React from 'react';
import { Login } from '../store/reducers/auth.reducer';
import { useDispatch } from 'react-redux';
const AuthPage = () => {
  const dispatch = useDispatch();
  const LoginUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(Login({ username, password }));
    console.log(username, password);
  };
  return (
    <div>
      <form action="" onSubmit={LoginUser}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="border-black"
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          className="border-black"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AuthPage;
