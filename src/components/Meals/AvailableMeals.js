import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoadig, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
 

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-http-f3963-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!res.ok) {
        console.log("response error");
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      const loadedMeals = [];
      for (let key in data) {
        // Here we can not access data like: "name: key.name, description: key.description" because
        // for in loop gives us key as a "String" instead of object, to check its type ===>
        // console.log(typeOf(key))
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

 
      
       fetchMeals().catch(e => {
        setIsLoading(false)
        setHttpError(e.message);
       }) 
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  if (isLoadig) {
    return <section className={classes.mealsLoading}>Loading...</section>;
  }

  if (httpError) {
    return <section className={classes.mealsError}>{httpError}</section>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
