import React, { useState } from "react";
import WaterMark from "../../assets/watermark.png";
import Banner from "../ComponentCommon/Banner";
import { auth, db } from "../firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const navigate = useNavigate()
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = async (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = { firstName: "", lastName: "", email: "", password: "" };

    if (!firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }
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
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), { email: user.email, firstName, lastName, photo: "" });
      }
      
      toast.success("User Signed Up Successfully!!", { position: "top-center" });
      navigate("/account")
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <>
      <Banner title="Ragistration Page" name="Ragistration Page" />
      <section className="pt-28 pb-20">
        <div className="container mx-auto">
          <form onSubmit={handleSignUp}>
            <div className="w-[544px] h-auto mx-auto px-14 py-12 flex flex-col shadow-lg">
              <h4 className="font-josef font-bold text-[32px]">Register Here</h4>
              <p className="font-lato text-[17px] text-[#9096B2] pb-6">Please sign up using your details below.</p>
              <div className="w-full text-left">
                <input type="text" className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-3" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {error.firstName && <p className="text-red-500 text-sm mb-4">{error.firstName}</p>}
                <input type="text" className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-3" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {error.lastName && <p className="text-red-500 text-sm mb-4">{error.lastName}</p>}
                <input type="email" className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-3" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error.email && <p className="text-red-500 text-sm mb-4">{error.email}</p>}
                <input type="password" className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error.password && <p className="text-red-500 text-sm mb-4">{error.password}</p>}
              </div>
              <p className="font-lato text-[17px] text-[#9096B2] mb-6">Forgot your password?</p>
              <button type="submit" className="bg-primary w-full h-12 rounded-md font-lato font-bold text-white text-[17px]">Sign Up</button>
              <p className="font-lato text-[17px] text-[#9096B2] pt-6">Already have an Account? <Link to="/account" className="text-primary">Please Login</Link></p>
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
