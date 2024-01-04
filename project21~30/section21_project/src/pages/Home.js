import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigatedHandler() {
    navigate('products')
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        go to <Link to="products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigatedHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
