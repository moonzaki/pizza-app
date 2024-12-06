
import Card from '../../../components/Card/Card';
import { MenuListProps } from './MenuList.props';
function MenuList({dishes}:MenuListProps) {

  return dishes.map((dish) => (
    <Card
      key={dish.id}
      id={dish.id}
      title={dish.name}
      description={dish.ingredients.join(', ')}
      price={dish.price}
      image={dish.image}
      rating={dish.rating} />
  ));
}

export default MenuList;
