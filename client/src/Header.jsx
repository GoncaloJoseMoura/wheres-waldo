import { Link, useNavigate } from 'react-router-dom';
import './header.css';

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('accessToken');
    navigate('/');
  }

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="/logo.svg" alt="Blog log" />
        <h1>WHERE'S WALDO</h1>
      </Link>
      <Link to="/leaderboard">
        <h3>Leaderboard</h3>
      </Link>
    </div>

  );
}
