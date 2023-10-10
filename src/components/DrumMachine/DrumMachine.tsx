import { Flex } from '@chakra-ui/react';
import { Board } from '../Board';
import { Panel } from '../Panel';

export const DrumMachine = () => {
  return (
    <Flex flexDirection={'column'}>
      <Panel/>
      <Board/>
    </Flex>
  );
};

//
// const onStyle = { transform: 'scale(0.95)', boxShadow: '1px 1px 3px 4px cyan, -1px -1px 4px 4px cyan' };
// const offStyle = { transform: 'scale(1)', boxShadow: 'none' };
//
// function Pad({ pad, power, volume, updateDisplay }) {
//   const [playing, setPlaying] = useState(false);
//

//
//   const onPlay = () => {
//     if (power) {
//       const sound = document.getElementById(pad.letter);
//       sound.currentTime = 0;
//       sound.volume = volume;
//       sound.play();
//       updateDisplay(pad.id);
//       setPlaying(true);
//       setTimeout(() => {
//         setPlaying(false);
//       }, 100);
//     }
//   };
//
//   const style = !power ? { background: '#476b68' } : playing ? onStyle : offStyle;
//
//   return (
//     <div style={style} className="outer-drum-pad">
//       <div
//         className="drum-pad"
//         id={pad.id}
//         onClick={onPlay}
//       >
//         <audio
//           id={pad.letter}
//           src={pad.url}
//           className="clip"
//         ></audio>
//         {pad.letter}
//       </div>
//     </div>
//   );
// }
//
// function SidePanel({ power, colorStyle, currentSound, togglePower, volumeInput, changeVolume }) {
//   return (
//     <div className="side-panel">
//       <div className="label">Drum Machine 3000</div>
//       <div style={colorStyle} className="display" id="display">
//         {currentSound}
//       </div>
//       <div>
//         <p>Power</p>
//         <button style={power ? { background: '#0ad82c' } : { background: '#063d0f', boxShadow: 'none' }} onClick={togglePower}></button>
//       </div>
//       <div>
//         <p>Volume</p>
//         <input
//           value={volumeInput}
//           type="range"
//           min="1"
//           max="100"
//           onChange={changeVolume}
//         ></input>
//       </div>
//       <div className="speakers">
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//       </div>
//     </div>
//   );
// }
//
// function App({ data }) {
//   const [currentSound, setCurrentSound] = useState('');
//   const [power, setPower] = useState(true);
//   const [volumeInput, setVolumeInput] = useState(50);
//   const [volume, setVolume] = useState(0.5);
//
//   const updateDisplay = (id) => {
//     setCurrentSound(id);
//   };
//
//   const togglePower = () => {
//     const message = !power && 'Welcome';
//     setPower(!power);
//     setCurrentSound(message);
//     setTimeout(() => {
//       setCurrentSound('');
//     }, 1500);
//   };
//
//   const changeVolume = (e) => {
//     const newVolume = e.target.value / 100;
//     const message = 'Volume: ' + e.target.value;
//     setVolume(newVolume);
//     setVolumeInput(e.target.value);
//     setCurrentSound(message);
//   };
//
//   const colorStyle = power ? { background: '#1ec8ce' } : { background: '#476b68' };
//
//   const pads = DATA.map((pad, i) => (
//     <Pad key={i} pad={pad} updateDisplay={updateDisplay} power={power} volume={volume} style={colorStyle} />
//   ));
//
//   return (
//     <div className="container">
//       <div className="machine">
//         <div className="pads">{pads}</div>
//         <SidePanel
//           volumeInput={volumeInput}
//           togglePower={togglePower}
//           changeVolume={changeVolume}
//           currentSound={currentSound}
//           power={power}
//           colorStyle={colorStyle}
//         />
//       </div>
//     </div>
//   );
// }
//
// export default App;
