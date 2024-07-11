// Basic utilities
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Files
import Multiversus from './assets/multiversus.jpg';
import IconKratos from './assets/findIcons/kratos.jpg';
import IconDamien from './assets/findIcons/damien.jpg';
import IconSonic from './assets/findIcons/sonic.jpg';

import RickMorty from './assets/rick_and_morty.jpg';
import IconCowboy from './assets/findIcons/cowboy.jpg';
import IconJar from './assets/findIcons/jar.jpg';
import IconFlamingo from './assets/findIcons/flamingo.jpg';

import Marvel from './assets/marvel.jpg';
import IconGrogu from './assets/findIcons/grogu.jpg';
import IconPerry from './assets/findIcons/perry.jpg';
import IconGoofy from './assets/findIcons/goofy.jpg';

// Styling
import './header.css';
import './game.css';

// Components
import GameHeader from './components/GameHeader';
import DialogModal from './components/DialogModal';
import Indicator from './components/Indicator';
import Label from './components/Label';

export default function Game() {
  const board = {
    marvel: {
      characters: {
        perry: {
          x_min: 0.424,
          x_max: 0.455,
          y_min: 0.166,
          y_max: 0.178,
          icon: IconPerry,
        },
        grogu: {
          x_min: 0.453,
          x_max: 0.498,
          y_min: 0.774,
          y_max: 0.812,
          icon: IconGrogu,
        },
        goofy: {
          x_min: 0.158,
          x_max: 0.195,
          y_min: 0.360,
          y_max: 0.395,
          icon: IconGoofy,
        },
      },
      background: Marvel,
    },
    multiversus: {
      characters: {
        kratos: {
          x_min: 0.441,
          x_max: 0.488,
          y_min: 0.307,
          y_max: 0.341,
          icon: IconKratos,
        },
        damien: {
          x_min: 0.178,
          x_max: 0.204,
          y_min: 0.761,
          y_max: 0.789,
          icon: IconDamien,
        },
        sonic: {
          x_min: 0.713,
          x_max: 0.740,
          y_min: 0.665,
          y_max: 0.693,
          icon: IconSonic,
        },
      },
      background: Multiversus,
    },
    rickandmorty: {
      characters: {
        cowboy: {
          x_min: 0.819,
          x_max: 0.847,
          y_min: 0.296,
          y_max: 0.402,
          icon: IconCowboy,
        },
        jar: {
          x_min: 0.437,
          x_max: 0.463,
          y_min: 0.509,
          y_max: 0.583,
          icon: IconJar,
        },
        flamingo: {
          x_min: 0.733,
          x_max: 0.778,
          y_min: 0.143,
          y_max: 0.218,
          icon: IconFlamingo,
        },
      },
      background: RickMorty,
    },
  };
  const { id } = useParams();
  const navigate = useNavigate();

  const [inter, setInter] = useState(false);
  const [find, setFind] = useState(Object.keys(board[id].characters));
  const [position, setPosition] = useState({ normalizedPosition: [0, 0], display: [30, 80], screenPosition: [0, 0] });

  const [start, setStart] = useState(Date.now());
  const [isRunning, setRunning] = useState(true);

  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const timer = useRef(null);

  const clicked = (char) => {
    setInter(false);

    const comparison = board[id].characters[char];

    if (
      comparison.x_min <= position.normalizedPosition[0] && comparison.x_max >= position.normalizedPosition[0]
      && comparison.y_min <= position.normalizedPosition[1] && comparison.y_max >= position.normalizedPosition[1]
    ) {
      if (find.indexOf(char) !== -1) {
        find.splice(find.indexOf(char), 1);
        setFind(find);

        if (find.length === 0) {
          setRunning(false);
          modalRef.current.showModal();
        }
      }
    }
  };

  const boardClick = (event) => {
    setPosition({
      screenPosition: [event.pageX, event.pageY],
      normalizedPosition: [event.pageX / event.target.offsetWidth, (event.pageY - 80) / event.target.offsetHeight],
      display: [event.target.offsetWidth - 150 > event.pageX ? event.pageX + 30 : event.pageX - 130,
        event.target.offsetHeight - 50 > event.pageY ? event.pageY - 80 : event.pageY - 220,
      ],
    });
    setInter(!inter);
  };

  const submitModal = async (event) => {
    event.preventDefault();
    await fetch(`${import.meta.env.VITE_BASE_URL}/save`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: event.target.elements.name.value,
        time: Number(timer.current.split('.').join('')),
        timetext: `${timer.current}ms`,
        board: id,
      }),
    });
    navigate('/leaderboard');
  };

  return (
    <div className="main-game">

      <GameHeader timer={timer} start={start} isRunning={isRunning} toFind={find.length} />

      <div className="playing-image">
        <img onClick={boardClick} src={board[id].background} alt="" ref={imageRef} />

        <Indicator
          iterator={board[id].characters}
          clickAction={clicked}
          pagex={position.display[0]}
          pagey={position.display[1]}
          show={inter}
        />

        <Label iterator={board[id].characters} find={find} image={imageRef.current} />

      </div>

      <DialogModal modalRef={modalRef} timer={timer.current} submitAction={submitModal} />

    </div>
  );
}
