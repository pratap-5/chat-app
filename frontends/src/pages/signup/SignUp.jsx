import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UserSignup from "../../hooks/UseSignup";



function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = UserSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(inputs);
    toast.success("Successfully toasted!");
  };

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <div className="md:w-[600px] flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded shadow-sm bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          signUP
          <span className="text-blue-500"> chatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname "
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(event) =>
                setInputs({ ...inputs, fullName: event.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> User name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username "
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(event) =>
                setInputs({ ...inputs, userName: event.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Passwod</span>
            </label>
            <input
              type="text"
              placeholder="Enter passsword "
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(event) =>
                setInputs({ ...inputs, password: event.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm passwod</span>
            </label>
            <input
              type="text"
              placeholder="Confirm passsword "
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(event) =>
                setInputs({ ...inputs, confirmPassword: event.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckBox}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="  text-sm  hover:underline hover:text-blue-600"
          >
            {" "}
            Already have an account
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-slate-900"
            disabled={loading}>
              
            {loading? <span className="loading loading-spinner"></span>:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
