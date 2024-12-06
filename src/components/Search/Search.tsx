import SearchProps from './Search.props';
import cn from 'classnames';
import styles from './Search.module.scss';
import Input from '../Input/Input';

function Search({className, ...props}: SearchProps) {
  return (
    <>
      <div className={cn(styles.search, className)} {...props}>
        <svg width="16" height="16" viewBox="0 0 16 16">
          <use href="/sprite.svg#search-svg"></use>
        </svg>
        <Input placeholder="Enter a dish or composition" />
      </div>
    </>
  );
}

export default Search;
