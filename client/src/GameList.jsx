import { Link } from 'react-router-dom';
import IconMarvel from './assets/marvel.jpg';
import IconGrogu from './assets/findIcons/grogu.jpg';
import IconPerry from './assets/findIcons/perry.jpg';
import IconGoofy from './assets/findIcons/goofy.jpg';

import IconMultiversus from './assets/multiversus.jpg';
import IconKratos from './assets/findIcons/kratos.jpg';
import IconDamien from './assets/findIcons/damien.jpg';
import IconSonic from './assets/findIcons/sonic.jpg';

import IconRickMorty from './assets/rick_and_morty.jpg';
import IconCowboy from './assets/findIcons/cowboy.jpg';
import IconJar from './assets/findIcons/jar.jpg';
import IconFlamingo from './assets/findIcons/flamingo.jpg';

import './gamelist.css';

export default function GameList() {
  return (
    <div className="gamelist">
      <h2>Pick A Mode To Play</h2>
      <div className="game-cards">
        <Link to="/game/rickandmorty">
          <h4>RICK & MORTY (EASY)</h4>
          <div className="game-image">
            <img src={IconRickMorty} alt="" />
          </div>

          <ul>
            <li>
              <img src={IconCowboy} alt="" />
            </li>
            <li>
              <img src={IconJar} alt="" />
            </li>
            <li>
              <img src={IconFlamingo} alt="" />
            </li>
          </ul>
        </Link>
        <Link to="/game/marvel">
          <h4>MARVEL (NORMAL)</h4>
          <div className="game-image">
            <img src={IconMarvel} alt="" />
          </div>

          <ul>
            <li>
              <img src={IconGrogu} alt="" />
            </li>
            <li>
              <img src={IconPerry} alt="" />
            </li>
            <li>
              <img src={IconGoofy} alt="" />
            </li>
          </ul>
        </Link>
        <Link to="/game/multiversus">
          <h4>MULTIVERSUS (HARD)</h4>
          <div className="game-image">
            <img src={IconMultiversus} alt="" />
          </div>

          <ul>
            <li>
              <img src={IconKratos} alt="" />
            </li>
            <li>
              <img src={IconDamien} alt="" />
            </li>
            <li>
              <img src={IconSonic} alt="" />
            </li>
          </ul>
        </Link>
      </div>
    </div>
  );
}
