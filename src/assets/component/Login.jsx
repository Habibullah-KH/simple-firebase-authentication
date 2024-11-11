import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {

  const [loginerror, setLoginerror] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const emailRef = useRef();

  const handleLogin = event => {
    event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;
console.log(email, password);

setLoginerror('')
setLoginSuccess(false)

  //login user
  signInWithEmailAndPassword(auth, email, password)
  .then(result => {
    console.log(result.user);

    if(!result.user.emailVerified){
      setLoginerror('please verify your email address')
    }
    else{
        setLoginSuccess(true)  
    }

  })
  .catch(error => {
    console.log('Error', error.massage );
    setLoginerror(error.massage)
    setLoginSuccess(false)
  })
  }

  //* handleForgetPass

  const handleForgetPass = () => {
const email = emailRef.current.value;
if(!email){
  toast.error('Please provide a valid email address')
}
else{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.error('Reset email sent, please check your email')
  })
}
  }




    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" ref={emailRef} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label onClick={handleForgetPass} className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <div className="flex items-center">
            <p className="text-sm text-gray-500">Don&#39;t have any account?</p>
            <NavLink to='/' className="hover:text-blue-800 border border-2 duration-500 border-white hover:border-black rounded-xl p-2">SignIn</NavLink>
        </div>
      </form>
      {
        loginerror && <p className="text-orange-600">{loginerror}</p>
      }
      {
        loginSuccess && toast.success('login success')
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;