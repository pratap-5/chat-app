import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
  const { loading, login } = useLogin();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(userName,password);
  };

  return (
    <div className=" md:w-[600px] flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {" "}
          login <span className="text-blue-500"> chatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text  "> User name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className="text-base label-text  "> Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 inline-block"
          >
            {"Dont't "}have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-slate-900"
              disabled={loading}
             >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

//starter code

// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 p-3">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             {" "}
//             login <span className="text-blue-500"> chatApp</span>
//           </h1>

//           <form action="">
//             <div>
//               <label className=" label p-2">
//                 <span className="text-base label-text  "> User name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label className=" label p-2">
//                 <span className="text-base label-text  "> Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <a
//               fref="#"
//               className="text-sm hover:underline hover:text-blue-600 inline-block"
//             >
//               {"Dont't "}have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2 bg-slate-900">
//                   Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   export default Login;
