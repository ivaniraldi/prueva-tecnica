import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length === 0 || email.length === 0 || phone.length === 0) {
      //alert("Please fill all required fields.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all required fields!",
      });
    }
    if (!validateEmail(email)) {
      //alert("Please enter a valid email address.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
      });
      return;
    }
    if (!validatePassword(password)) {
      //alert("Password must have at least 8 characters, one number, one symbol, and one uppercase letter.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least 8 characters, one number, one symbol, and one uppercase letter.",
      });
      return;
    }
    if (!validatePhone(phone)) {
      //alert("Please enter a valid phone number.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid phone number!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Good!",
      text: "You have successfully registered!",
    });
    // Aqui você pode enviar os dados do formulário para o backend ou realizar outra ação.
  };

  const handleTogglePassword = () => {
    setHidePassword(!hidePassword);
  };
  const validateEmail = (email) => {
    // Expresión regular para validar un email
    const re =
      /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){1,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Expressão regular para validar uma senha
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const validatePhone = (phone) => {
    const re = /^\(?([0-9]{2})\)?([0-9]{4,5})[-.]?([0-9]{4})$/;
    return re.test(phone);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="content">
        <div className="bg-img"></div>
        <header className="header cursor-default mt-6">
          <Link to={"/"}>
            <button className="backButton mt-4 bg-gray-400 px-2 py-1 text-white rounded-full">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </Link>
          <h2 className="text-2xl mt-6">Create Account</h2>
          <h4 className="text-gray-500 mt-6">
            Enter your information below or continue <br /> with social media
            account
          </h4>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-200 rounded-lg p-3 mt-6 h-full">
            <div className="ms-3 text-gray-300 text-2xl me-6">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                className="focus:outline-none text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email address"
              />
            </div>
          </div>
          <div className="flex items-center border border-gray-200 rounded-lg p-3 mt-2 h-full">
            <div className="ms-3 text-gray-300 text-2xl me-6">
              <i className="fa-solid fa-mobile"></i>
            </div>
            <div className="flex flex-col">
              <label>Mobile Number</label>
              <input
                className="focus:outline-none text-gray-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Your mobile number"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between border border-gray-200 rounded-lg p-3 mt-2 h-full">
            <div className="flex items-center">
              <div className="ms-3 text-gray-300 text-2xl me-6">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="flex flex-col me-6">
                <label>Password</label>
                <input
                  className="passInput focus:outline-none text-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={hidePassword ? "password" : "text"}
                  placeholder="Create password"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleTogglePassword}
              className="text-gray-400 text-2xl"
            >
              <i
                className={
                  hidePassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                }
              ></i>
            </button>
          </div>
          <button
            type="submit"
            className="buttonOrange w-full py-5 my-4 text-white rounded-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 mt-12 mb-6 cursor-default">
          Or Register with Social Accounts
        </p>
        <div className="flex justify-between">
          <button className="socialButton border p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </button>
          <button className="socialButton border p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </button>
          <button className="socialButton border p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
          </button>
          <button className="socialButton border p-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#03A9F4"
                d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-center text-gray-500 mt-2 pb-6 cursor-default">
          Already have an account?{" "}
          <Link to={"/"}>
            <span className="textOrange hover:underline">Login Now</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
