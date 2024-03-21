import Login from '../componants/Auth/login';
import React, { useState } from 'react';
import Signup from '../componants/Auth/signup';

const AuthPage = () => {
  const [view, setView] = useState(false);
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className=" flex flex-col items-center gap-5 rounded md  shadow-xl border p-5 border-black">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setView(false)}
            className={`px-4 py-2 rounded-xl cursor-pointer  font-[700] ${!view ? 'bg-blue-500 text-white ' : 'bg-transparent text-black'} `}
          >
            Login
          </button>
          <button
            onClick={() => setView(true)}
            className={` bg-blue-500 px-4 py-2 rounded-xl cursor-pointer font-[700] ${view ? 'bg-blue-500 text-white' : 'bg-transparent text-black'} `}
          >
            Signup
          </button>
        </div>
        {view ? <Signup handler={setView} /> : <Login />}
      </div>
    </div>
  );
};

export default AuthPage;
