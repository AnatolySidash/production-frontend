import React from 'react';
import classes from './counter.module.scss';

export const Counter = () => {

   const [count, setCount] = React.useState(0);

   const increment = () => {
      setCount(count + 1)
   }

   return (
      <>
         <h1>{count}</h1>
         <div className={classes.btn}>
            <button onClick={increment}>Increment</button>
         </div>
      </>
   );
};