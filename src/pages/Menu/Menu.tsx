import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import Headline from '../../components/Headline/Headline';
import styles from './Menu.module.scss';
import cn from 'classnames';
import { URL_PREFIX } from '../../helpers/API';
import { DishArray } from '../../interfaces/dish.array.interface';
import MenuList from './MenuList/MenuList';
function Menu() {
  const [dishes, setDishes] = useState<DishArray[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenu = async() => {
    try {
      setIsLoading(true);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 100);
      });
      const { data } = await axios.get<DishArray[]>(`${URL_PREFIX}products`);
      setDishes(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <>
      <div className={cn(styles.head)}>
        <Headline style={{ margin: 0}}>Menu</Headline>
        <Search style={{ maxWidth: '256px'}}/>
      </div>
      <div className={cn(styles.menu, styles['grid'])} data-columns='auto'>
        {error && <p>{error}</p>}
        {!isLoading && <MenuList dishes={dishes}/>}
        {isLoading && <p>Loading dishes...</p>}
      </div>
    </>
  );
}

export default Menu;
