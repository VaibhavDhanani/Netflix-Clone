import React from "react";
import { useLocation } from "react-router-dom";
import SignUp from "./sign-up";

const SignupPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const success = searchParams.get("success");

  return <SignUp successPayment={success === "true"} />;
};

export default SignupPage;
