import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div className="text-xl text-center">SignUp</div>
      <p>Go back to <Link to={"/"} className="text-blue-500">Home Page</Link></p>
    </>
  );
};

export default SignUp;
