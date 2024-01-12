import s from './Button.module.css';
import { IoReloadCircleSharp } from 'react-icons/io5';

export const Button = ({ onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <IoReloadCircleSharp size="28" />
      more
    </button>
  );
};
