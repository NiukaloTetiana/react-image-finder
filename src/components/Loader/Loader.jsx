import RingLoader from 'react-spinners/RingLoader';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loderBeckdrop}>
      <RingLoader
        color="#02a7e3e7"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="1"
      />
    </div>
  );
};
