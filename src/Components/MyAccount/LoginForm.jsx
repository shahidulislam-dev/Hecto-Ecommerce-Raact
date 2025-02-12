import React, { useState } from "react";
import WaterMark from "../../assets/watermark.png";
import Banner from "../ComponentCommon/Banner";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import GoogleIcon from "../../assets/googleIcon.png"
import { doc, setDoc } from "firebase/firestore";

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

  const handleLoginWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        navigate("/home");
      }
    });
  }


  return (
    <>
      <Banner title="Login Page" name="Login Page" />
      <section className="pt-28 pb-20">
        <div className="container mx-auto">
          <div className="">
            <div className="w-[544px] h-auto mx-auto px-14 py-12 flex flex-col items-center shadow-lg">
              <form onSubmit={handleLogin} noValidate>
                <h4 className="font-josef font-bold text-[32px] text-center">Login</h4>
                <p className="font-lato text-[17px] text-[#9096B2] pb-6 text-center">
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
                  className="w-full h-12 px-3 border-2 border-[#9096B2] rounded-md outline-none mb-4"
                  placeholder="Password"
                />
                {error.password && <p className="text-red-500 text-sm mb-4">{error.password}</p>}

                <button className="bg-primary w-[432px] h-12 rounded-md font-lato font-bold text-white text-[17px]">
                  Sign In
                </button>
                <p className="font-lato text-[17px] text-[#9096B2] pt-6 text-right">
                  Don’t have an Account? <Link to="/sign-up" className="text-primary underline">Create account</Link>
                </p>
                <p className="font-lato text-[14px] text-[#9096B2] pt-6 text-center">-- Or --</p>
                <div className="flex justify-center mt-5" onClick={handleLoginWithGoogle}>
                  <div className="flex items-center border-2 rounded">
                    <div className="bg-white flex justify-center py-2 px-2">
                      <img src={GoogleIcon} alt="Google Icon" className="h-5 w-5" />
                    </div>
                    <div className="bg-primary px-5 py-2 text-white font-josef font-bold text-[15px]">
                      <button>Sign In With Google</button>
                    </div>
                  </div>
                </div>


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
