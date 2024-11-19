import { Link } from 'react-router-dom';

function ErrorPage() {
  return(<>
    <div>
      <Link to="/">Menu</Link>
      <Link to="/basket">Basket</Link> 
    </div>
    ErrorPage
  </>);
}

export default ErrorPage;
