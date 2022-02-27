import styles from '../Button.module.scss';

const Button = props => {
  return(
    <button onClick={props.action} className={styles.button}>
      {props.children}
    </button>
  );
}

export default Button;