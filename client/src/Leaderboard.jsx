import './leaderboard.css';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function Leaderboard() {
  const [rickandmorty, setRickandmorty] = useState([]);
  const [marvel, setMarvel] = useState([]);
  const [multiversus, setMultiversus] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/leaderboard/rickandmorty`)
      .then((response) => response.json())
      .then((content) => setRickandmorty(content.players));
    fetch(`${import.meta.env.VITE_BASE_URL}/leaderboard/marvel`)
      .then((response) => response.json())
      .then((content) => setMarvel(content.players));
    fetch(`${import.meta.env.VITE_BASE_URL}/leaderboard/multiversus`)
      .then((response) => response.json())
      .then((content) => setMultiversus(content.players));
  }, []);

  console.log(rickandmorty);
  console.log(marvel);

  return (
    <div className="leaderboard">
      <div className="board">

        <div className="stats">
          <h2>
            Rick and Morty
            <br />
            (Easy)
          </h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rickandmorty.map((list, index) => (
                <tr key={list.name + index}>
                  <td>{index}</td>
                  <td>{list.name}</td>
                  <td>{list.timetext}</td>
                  <td>{format(list.date, 'dd/MM/yyyy')}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <div className="stats">
          <h2>
            Marvel
            <br />
            (Normal)
          </h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {marvel.map((list, index) => (
                <tr key={list.name + index}>
                  <td>{index}</td>
                  <td>{list.name}</td>
                  <td>{list.timetext}</td>
                  <td>{format(list.date, 'dd/MM/yyyy')}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <div className="stats">
          <h2>
            Multiversus
            <br />
            (Hard)
          </h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {multiversus.map((list, index) => (
                <tr key={list.name + index}>
                  <td>{index}</td>
                  <td>{list.name}</td>
                  <td>{list.timetext}</td>
                  <td>{format(list.date, 'dd/MM/yyyy')}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>

  );
}
