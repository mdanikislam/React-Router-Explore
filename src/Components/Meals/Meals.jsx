import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
    const meals = useLoaderData();

    return (
        <div>
            <h1>Meals {meals.categories.length}</h1>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
             {
                meals.categories.map((meal,idx)=><Meal key={idx} meal={meal}></Meal>)
            }
           </div>
        </div>
    );
};

export default Meals;