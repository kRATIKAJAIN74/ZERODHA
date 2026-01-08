import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          className="mb-5"
          src="media/images/homeHero.png"
          alt="Hero Image"
        />
        <h1 className="mt-5">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          style={{ width: "20%", margin: "auto" }}
          className="btn btn-primary fs-5"
          onClick={() => navigate('/signup')}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Hero;
