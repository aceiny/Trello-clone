import React from 'react';
import { Login as lg } from '../../store/reducers/auth.reducer';
import { useDispatch } from 'react-redux';
const Login = () => {
  const dispatch = useDispatch();
  const LoginUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(lg({ username, password }));
    console.log(username, password);
  };
  return (
    <form
      action=""
      className="flex flex-1  gap-3 flex-col"
      onSubmit={LoginUser}
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        className="border-black border px-2  py-1 rounded"
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        className="border-black border px-2 py-1 rounded"
      />
      <button type="submit" className="bg-blue-200 p-2 rounded">
        submit
      </button>
    </form>
  );
};

export default Login;
