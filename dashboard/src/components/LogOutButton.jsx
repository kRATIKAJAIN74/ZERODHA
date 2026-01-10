import axios from "axios";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );

      // 🔥 Redirect to login page
      window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/login`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      style={{ border: "none" }}
      className="btn btn-danger"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
