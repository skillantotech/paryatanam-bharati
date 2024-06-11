import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div className="text-xl text-center">LogIn</div>
      <p>Go back to <Link to={"/"} className="text-blue-500">Home Page</Link></p>
    </>
  );
};

export default LogIn;
