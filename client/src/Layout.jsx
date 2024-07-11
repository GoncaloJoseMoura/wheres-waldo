import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import GameList from './GameList';
import './index.css';
import Leaderboard from './Leaderboard';

export default function Layout() {
  const location = useLocation();
  console.log(location.pathname);
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <Header />
      {location.pathname === '/leaderboard' && <Leaderboard />}
      {location.pathname === '/' && <GameList />}
      <Footer />
    </>
  );
}
