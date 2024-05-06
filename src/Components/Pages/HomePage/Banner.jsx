import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.css";

const IconWithShadow = () => {
  return (
    <span style={{ textShadow: "0 2px 2px rgba(59, 130, 246, 0.5)" }}>
      <FaDiscord style={{ color: "#3b82f6", fontSize: "1.5rem" }} />
    </span>
  );
};

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Gaming Cockroaches</h1>
          <p className="py-6">
            Welcome to Gaming Cockroaches – your ultimate hub for gaming,
            content creation, and camaraderie. Join us to connect, create, and
            celebrate in our vibrant community
          </p>
          <div className="w-52 mx-auto h-12  rounded-full wrapper">
            <div className="py-2 px-8 text-xl  flex justify-between text-content">
            <Link
                className="text-blue-500 hover:scale-110 text-[22px] duration-300"
                to="/"
              >
                <FaFacebook />
              </Link>
              <Link
                className="text-pink-600 hover:scale-110 text-[24px] duration-300"
                to="/"
              >
                <FaInstagram />
              </Link>
              
              <Link
                className="text-blue-500 hover:scale-110 text-2xl duration-300"
                to="/"
              >
                <IconWithShadow />
              </Link>
            </div>
            <div className="flex justify-evenly py-2 px-8 rounded-full space-x-6 text-xl">


            </div>
          </div>
          {/* <Link to='/'></Link> */}
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
