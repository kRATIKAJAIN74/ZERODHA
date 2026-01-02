import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/auth/logout",
        {},
        { withCredentials: true }
      );

      // 🔥 Redirect to login page
      window.location.href = "http://localhost:3000/login";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleLogout} style={{border:"none"}} className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutButton;
