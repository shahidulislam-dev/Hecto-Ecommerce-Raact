import React, { useEffect, useState } from "react";
import WaterMark from "../../assets/watermark.png";
import Banner from "../ComponentCommon/Banner";
import { auth } from "../firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = async (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setError(newErrors);
    if (!isValid) return;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User Signed Up Successfully!!", { position: "top-center", autoClose: 1000 });
      navigate("/account");
    } catch (error) {
      toast.error(error.message, { position: "top-center", autoClose: 1000 });
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/account");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <Banner title="Registration Page" name="Registration Page" />
      <section className="pt-28 pb-20">
        <div className="container mx-auto">
          <form onSubmit={handleSignUp}>
            <div className="w-[544px] h-auto mx-auto px-14 py-12 flex flex-col shadow-lg">
              <h4 className="font-josef font-bold text-[32px]">Register Here</h4>
              <p className="font-lato text-[17px] text-[#9096B2] pb-6">
                Please sign up using your details below.
              </p>
              <div className="w-full text-left">
                <input
                  type="email"
                  className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-5"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && <p className="text-red-500 text-sm mb-4">{error.email}</p>}
                <input
                  type="password"
                  className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && <p className="text-red-500 text-sm mb-4">{error.password}</p>}
              </div>
              <p className="font-lato text-[17px] text-[#9096B2] mb-6">Forgot your password?</p>
              <button
                type="submit"
                className="bg-primary w-full h-12 rounded-md font-lato font-bold text-white text-[17px]"
              >
                Sign Up
              </button>
              <p className="font-lato text-[17px] text-[#9096B2] pt-6">
                Already have an Account?{" "}
                <Link to="/account" className="text-primary">
                  Please Login
                </Link>
              </p>
            </div>
          </form>
          <div className="pt-28 flex justify-center">
            <img src={WaterMark} alt="Water Mark Image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
