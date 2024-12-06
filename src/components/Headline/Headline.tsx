import styles from'./Headline.module.scss';
import HeadlineProps from './Headline.props';
import cn from 'classnames';

function Headline({children, className, tag: Tag='h1',  ...props}:HeadlineProps) {
  return (
    <Tag {...props} className={cn(styles.headline, className)}>{children}</Tag>
  );
}
export default Headline;
