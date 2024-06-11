import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="text-xl text-center">404 not found</div>
      <p>
        Go back to{" "}
        <Link to={"/"} className="text-blue-500">
          Home Page
        </Link>
      </p>
    </>
  );
};

export default NotFound;
