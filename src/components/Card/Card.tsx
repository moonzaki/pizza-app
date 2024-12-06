import cn from 'classnames';
import CardProps from './Card.props';
import styles from './Card.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Card({className, ...props}: CardProps) {

  return (
    <Link to={`/dish/${props.id}`} className={cn(styles.link)}>
      <div className={cn(styles.card, className)}>
        <div className={styles.image}>
          {props.image? <img loading="lazy" src={props.image} alt={props.title} /> : false}
          <div className={styles.price}>
            {props.price}
            <span> ₽</span>
          </div>
          <div className={styles.rate}>
            <span>{props.rating}</span>
            <svg width="11" height="11" viewBox="0 0 11 11">
              <use href="/sprite.svg#rate-svg"></use>
            </svg>
          </div>
          <Button appearence="add-dish" className={ cn(styles['card-button'])}>
            <svg width="16" height="17" viewBox="0 0 16 17">
              <use href="/sprite.svg#bag-svg"></use>
            </svg>
          </Button>
        </div>
        <div className={styles.data}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
