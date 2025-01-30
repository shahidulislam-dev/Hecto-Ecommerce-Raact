import React, { useState } from "react";
import WaterMark from "../../assets/watermark.png";
import Banner from "../ComponentCommon/Banner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; 
import { sendEmailVerification } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 

const handleLogin = async (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
        newErrors.email = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
    }

    if (!password) {
        newErrors.password = "Password is required";
        isValid = false;
    }

    setError(newErrors);
    if (!isValid) return;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user.emailVerified) {
            toast.success("User Logged in Successfully!!", { position: "top-center" });
            navigate("/home");
        } else {
            toast.error("Please verify your email before logging in.", { position: "top-center" });

            await sendEmailVerification(user);
            toast.info("Verification email sent. Please check your inbox.", { position: "top-center" });
            await auth.signOut();
        }
    } catch (error) {
        toast.error(error.message, { position: "top-center" });
    }
};


  return (
    <>
      <Banner title="My Account" name="My Account" />
      <section className="pt-28 pb-20">
        <div className="container mx-auto">
          <div className="">
            <div className="w-[544px] h-auto mx-auto px-14 py-12 flex flex-col items-center shadow-lg">
              <form onSubmit={handleLogin} noValidate>
                <h4 className="font-josef font-bold text-[32px]">Login</h4>
                <p className="font-lato text-[17px] text-[#9096B2] pb-6">
                  Please login using account details below.
                </p>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-4"
                  placeholder="Email Address"
                />
                {error.email && <p className="text-red-500 text-sm mb-4">{error.email}</p>}


                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-2"
                  placeholder="Password"
                />
                {error.password && <p className="text-red-500 text-sm mb-4">{error.password}</p>}
                <p className="font-lato text-[17px] text-[#9096B2] mb-6 text-left w-full">
                  Forgot your password?
                </p>
                <button className="bg-primary w-[432px] h-12 rounded-md font-lato font-bold text-white text-[17px]">
                  Sign In
                </button>
                <p className="font-lato text-[17px] text-[#9096B2] pt-6">
                  Don’t have an Account? <Link to="/sign-up" className="text-primary">Create account</Link>
                </p>
              </form>
            </div>

            <div className="pt-28 flex justify-center">
              <img src={WaterMark} alt="Water Mark Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
