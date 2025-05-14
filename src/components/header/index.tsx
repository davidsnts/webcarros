import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiLogIn, FiUser } from "react-icons/fi";

export function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex w-full items-center justify-between max-w-7xl px-4 mx-auto">
        <Link to="/">
          <img src={logo} alt="logo do site" />
        </Link>

        {!loadingAuth && signed && (
          <Link to={"/dashboard"}>
            <div className="border-1 rounded-full p-1 border-gray-800">
              <FiUser size={24} color="#000"></FiUser>
            </div>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to={"/login"}>
            <div className="border-1 rounded-full p-1 border-gray-800">
              <FiLogIn size={24} color="#000"></FiLogIn>
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
