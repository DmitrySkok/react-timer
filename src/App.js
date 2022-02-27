import { useEffect, useState } from 'react';
import Button from './Components/Button/Button';

const App  = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if(start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [start]);

  const formatTime = time => {
    const hours = ("0" + Math.floor((time / 36000000) % 24)).slice(-2);
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const mileSeconds = Math.floor(time % 1000);
    return `${hours}:${minutes}:${seconds}:${mileSeconds}`
  }

  return (
    <div className="App">
      <h1>{formatTime(time)}</h1>
      <Button action={() => setStart(true)}>Start</Button>
      <Button action={() => setStart(false)}>Pause</Button>
      <Button action={() => {setTime(0); setStart(false);}}>Stop</Button>
    </div>
  );
}

export default App;
