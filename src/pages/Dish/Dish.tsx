import { Await, useLoaderData } from 'react-router-dom';
import { DishArray } from '../../interfaces/dish.array.interface';
import { Suspense } from 'react';
function Dish() {
  const data = useLoaderData() as {data: DishArray};
  
  return (
    <Suspense fallback={<div>Loading dish...</div>}>
      <Await
        resolve={data.data}>
        {({ data }: { data: DishArray; }) => (
          <>Dish - {data.name}</>
        )}
      </Await>
    </Suspense>
  );
}

export default Dish;
