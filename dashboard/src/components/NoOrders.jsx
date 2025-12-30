import { Link } from "react-router-dom";

function NoOrders() {
  return (
    <>
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}

export default NoOrders;
