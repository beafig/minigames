import '../../styles/Memory.scss';
import ModalMemory from './ModalMemory';
import MemoryCards from './MemoryCards';
import Monica from '../../images/Friends/MonicaDuck.png';
import Joey from '../../images/Friends/JoeyDuck.png';
import Phoebe from '../../images/Friends/PhoebeDuck.png';
import Ross from '../../images/Friends/RossDuck.png';
import Rachel from '../../images/Friends/RachelDuck.png';
import Chandler from '../../images/Friends/ChandlerDuck.png';
import Aragorn from '../../images/LOTR/Aragorn.png';
import Arwen from '../../images/LOTR/Arwen.png';
import Frodo from '../../images/LOTR/Frodo.png';
import Galadriel from '../../images/LOTR/Galadriel.png';
import Gandalf from '../../images/LOTR/GandalfNot.png';
import Gimli from '../../images/LOTR/Gimli.png';
import Gollum from '../../images/LOTR/Gollum.png';
import Legolas from '../../images/LOTR/Legolas.png';
import Lurtz from '../../images/LOTR/lurtz.png';
import Samwise from '../../images/LOTR/Samwise.png';
import Saruman from '../../images/LOTR/Saruman.png';
import Sauron from '../../images/LOTR/Sauron.png';
import AquaDuck from '../../images/DC/Aquaduck.png';
import BatDuck from '../../images/DC/Batduck.png';
import BloodSportDuck from '../../images/DC/BloodSportDuck.png';
import CatDuck from '../../images/DC/Catduck.png';
import HarleyDuck from '../../images/DC/Harleyduck.png';
import JokerDuck from '../../images/DC/JokerDuck.png';
import PeacemakerDuck from '../../images/DC/PeacemakerDuck.png';
import RobinDuck from '../../images/DC/RobinDuck.png';
import SuperDuck from '../../images/DC/Superduck.png';
import TDKDuck from '../../images/DC/TDKDuck.png';
import TwoFaceDuck from '../../images/DC/TwoFaceDuck.png';
import WonderDuck from '../../images/DC/Wonderduck.png';
import JanineDuck from '../../images/Ghostbusters/JanineDuck.png';
import SlimerDuck from '../../images/Ghostbusters/SlimerDuck.png';
import SpenglerDuck from '../../images/Ghostbusters/SpenglerDuck.png';
import StantzDuck from '../../images/Ghostbusters/StantzDuck.png';
import StayPuftDuck from '../../images/Ghostbusters/StayPuftDuck.png';
import VenkmanDuck from '../../images/Ghostbusters/VenkmanDuck.png';
import VenkmanDuckSlime from '../../images/Ghostbusters/VenkmanDuckSlime.png';
import WinstonDuck from '../../images/Ghostbusters/WinstonDuck.png';
import ChuckyDuck from '../../images/Horror/ChuckyDuck.png';
import DraculaDuck from '../../images/Horror/DraculaDuck.png';
import ExorcistDuck from '../../images/Horror/ExorcistDuck.png';
import GremlinDuck from '../../images/Horror/GremlinDuck.png';
import MummyDuck from '../../images/Horror/MummyDuck.png';
import NunDuck from '../../images/Horror/NunDuck.png';
import PennywiseDuck from '../../images/Horror/PennywiseDuck.png';
import TexasDuck from '../../images/Horror/TexasDuck.png';
import BlankaDuck from '../../images/StreetFighter/BlankaDuck.png';
import ChunLiDuck from '../../images/StreetFighter/ChunLiDuck.png';
import EHondaDuck from '../../images/StreetFighter/EHondaDuck.png';
import GuileDuck from '../../images/StreetFighter/GuileDuck.png';
import RyuDuck from '../../images/StreetFighter/RyuDuck.png';
import Zangief from '../../images/StreetFighter/ZangiefDuck.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Memory = () => {
  const [images, setImages] = useState([]);

  const [cardsFlipped, setCardsFlipped] = useState([]);
  const [cardsMatched, setCardsMatched] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');

  const [counter, setCounter] = useState(0);
  const friends = [Monica, Joey, Phoebe, Ross, Rachel, Chandler];
  const street = [
    BlankaDuck,
    ChunLiDuck,
    EHondaDuck,
    GuileDuck,
    RyuDuck,
    Zangief,
  ];
  const lotr = [
    Aragorn,
    Arwen,
    Frodo,
    Galadriel,
    Gandalf,
    Gimli,
    Gollum,
    Legolas,
    Lurtz,
    Samwise,
    Saruman,
    Sauron,
  ];

  const dc = [
    AquaDuck,
    BatDuck,
    BloodSportDuck,
    CatDuck,
    HarleyDuck,
    JokerDuck,
    PeacemakerDuck,
    RobinDuck,
    SuperDuck,
    TDKDuck,
    TwoFaceDuck,
    WonderDuck,
  ];

  const ghostbuster = [
    JanineDuck,
    SlimerDuck,
    SpenglerDuck,
    StantzDuck,
    StayPuftDuck,
    VenkmanDuck,
    VenkmanDuckSlime,
    WinstonDuck,
  ];
  const horror = [
    ChuckyDuck,
    DraculaDuck,
    ExorcistDuck,
    GremlinDuck,
    MummyDuck,
    NunDuck,
    PennywiseDuck,
    TexasDuck,
  ];

  const [themeOne, setThemeOne] = useState(friends);
  const [themeTwo, setThemeTwo] = useState(street);

  const shuffle = () => {
    images.sort(() => {
      return Math.random() - 0.5;
    });
    setImages([...images]);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const flipCards = (cardId) => {
    increment();
    if (
      cardsFlipped.length < 2 &&
      !cardsFlipped.includes(cardId) &&
      !cardsMatched.includes(cardId)
    ) {
      const newCardsFlipped = [...cardsFlipped, cardId];
      setCardsFlipped(newCardsFlipped);

      if (newCardsFlipped.length === 2) {
        const card1 = newCardsFlipped[0];
        const card2 = newCardsFlipped[1];
        console.log('card1', card1, 'card2', card2);

        if (images[card1] === images[card2]) {
          setCardsMatched([...cardsMatched, card1, card2]);
          setCardsFlipped([]);
        } else {
          setTimeout(() => {
            setCardsFlipped([]);
          }, 1000);
        }
      }
    }
  };

  const winner = () => {
    if (cardsMatched.length === 16) {
      return '¡Has ganado!';
    }
  };

  const handleReset = () => {
    setCardsMatched([]);
    setCardsFlipped([]);
    shuffle();
    setCounter(0);
  };

  const selectDifficulty = (ev) => {
    if (ev.target.id === 'easy') {
      setDifficulty('easy');
      setThemeOne(friends);
      setThemeTwo(street);
    } else if (ev.target.id === 'medium') {
      setDifficulty('medium');
      setThemeOne(horror);
      setThemeTwo(ghostbuster);
    } else if (ev.target.id === 'hard') {
      setDifficulty('hard');
      setThemeOne(lotr);
      setThemeTwo(dc);
    }
  };

  const themeOption1 = () => {
    if (difficulty === 'easy') {
      return 'Friends';
    } else if (difficulty === 'medium') {
      return 'Terror';
    } else if (difficulty === 'hard') {
      return 'El señor de los anillos';
    }
  };

  const themeOption2 = () => {
    if (difficulty === 'easy') {
      return 'Street Fighter';
    } else if (difficulty === 'medium') {
      return 'Cazafantasmas';
    } else if (difficulty === 'hard') {
      return 'DC';
    }
  };

  const selectTheme = (ev) => {
    console.log(ev.target.id);
    if (ev.target.id === '1') {
      const copy = themeOne.concat(themeOne);
      console.log(copy, 'theme1');
      setImages(copy);
    } else {
      const copy = themeTwo.concat(themeTwo);
      console.log(copy, 'theme2');
      setImages(copy);
    }
  };

  return (
    <>
      <main className="main main__memory">
        {/* <ModalMemory /> */}
        <label className="memory__difficulty--label">
          <input
            onChange={selectDifficulty}
            type="radio"
            name="difficulty"
            id="easy"
            checked={difficulty === 'easy'}
          />
          Fácil (6 parejas)
        </label>
        <label className="memory__difficulty--label">
          <input
            onChange={selectDifficulty}
            type="radio"
            name="difficulty"
            id="medium"
            checked={difficulty === 'medium'}
          />
          Medio (8 parejas)
        </label>
        <label className="memory__difficulty--label">
          <input
            onChange={selectDifficulty}
            type="radio"
            name="difficulty"
            id="hard"
            checked={difficulty === 'hard'}
          />
          Difícil (12 parejas)
        </label>
        <input
          id="1"
          type="button"
          onClick={selectTheme}
          value={themeOption1()}
        />
        <input
          id="2"
          type="button"
          onClick={selectTheme}
          value={themeOption2()}
        />
        {/* <button id="1" onClick={selectTheme}>
          {themeOne}
        </button>
        <button id="2" onClick={selectTheme}>
          {themeTwo}
        </button> */}
        <h1 className="memory__title">Memory</h1>
        <div className="memory__board">
          <MemoryCards
            images={images}
            cardsMatched={cardsMatched}
            cardsFlipped={cardsFlipped}
            flipCards={flipCards}
          />
        </div>
        {/* <section className="memory__footer">
          <section className="buttons">
            <Link to="/" className="button__return">
              Sala de juegos
            </Link>
            <button className="button__reset" onClick={handleReset}>
              Reiniciar partida
            </button>
          </section>
          <h3 className="message">
            Parejas acertadas: {Math.floor(cardsMatched.length / 2)}/8
          </h3>
        </section> */}
        {/* <p>{Math.floor(counter / 2)} movimientos</p>
      <h3>{winner()}</h3> */}
      </main>
      <section className="modal__memory--last"></section>
    </>
  );
};

export default Memory;
