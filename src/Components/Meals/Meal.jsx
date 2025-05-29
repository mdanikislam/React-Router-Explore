import { Link } from "react-router-dom";

const Meal = ({meal}) => {
    const {idCategory, strCategory, strCategoryThumb} = meal
    return (
        <div className="border-2 border-sky-500 p-5 rounded-lg">
            <img src={strCategoryThumb} alt="" />
            <h1 className="my-3 text-2xl font-bold">{strCategory}</h1><br />
            <Link className="bg-sky-500 hover:bg-sky-700 py-2 px-5 rounded-lg" to={`/meal/${idCategory}`}>Show Details</Link>
        </div>
    );
};

export default Meal;