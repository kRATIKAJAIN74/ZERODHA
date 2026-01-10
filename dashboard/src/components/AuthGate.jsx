import { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const AuthGate = ({ children }) => {
  const { setUser } = useContext(GeneralContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, [setUser]);

  if (loading) return <p>Loading dashboard...</p>;

  return children;
};

export default AuthGate;
