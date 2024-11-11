import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase.init";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";


const SignIn = () => {
    const [errorViw, setErrorViw] = useState('');
    const [success, setSuccess] = useState(false)
    const [click, setClick] = useState(false);
    console.log(errorViw);
    const handleSignup = (event) => {
        event.preventDefault();
        const email = (event.target.email.value);
        const password = (event.target.password.value);

        setErrorViw('');
        setSuccess(false);

        if(password.length < 6){
          setErrorViw (toast.error('Password should be 6 character'))
          return;
        }

        //* sign in user with email and pass
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
              console.log(result.user);
              setSuccess(true)

        //* send verification
        sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log('email send');
        })

            })
            .catch(error => {
                console.log('ERROR', error.message);
                setErrorViw(error)
                setSuccess(false);

            })

    }


    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signin now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">


      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={click ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
<button onClick={() => setClick(!click)}>
        <p className="btn w-fit rounded-full absolute right-4 top-40">  <FaEye /></p>
</button>

        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Signin</button>
        </div>
        <div className="flex items-center">
            <p className="text-sm text-gray-500">Alrady have an account</p>
            <NavLink to='/login' className="hover:text-blue-800 border border-2 duration-500 border-white hover:border-black rounded-xl p-2">Login</NavLink>
        </div>
      </form>
{
  errorViw && <p className="text-red-700">{errorViw}</p>
}
{
  success && toast.success('go you email and verify')
}
    </div>
  </div>
</div>


        </>
    );
};

export default SignIn;