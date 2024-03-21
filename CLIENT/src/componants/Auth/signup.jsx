import React from 'react';
import { useDispatch } from 'react-redux';
import { Signup as sg } from '../../store/reducers/auth.reducer';
const Signup = ({ handler }) => {
  const dispatch = useDispatch();
  const SignupUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(sg({ username, password }));
  };
  return (
    <form
      action=""
      method="POST"
      className="flex flex-1  gap-3 flex-col"
      onSubmit={SignupUser}
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
        signup
      </button>
    </form>
  );
};

export default Signup;
