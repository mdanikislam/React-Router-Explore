import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData();
    const navigate = useNavigate();

    const handleBack =()=>{
        navigate(-1)
    }

    return (
        <div className='w-11/12 mx-auto flex flex-col items-center gap-5'>
            <img src={meal.strCategoryThumb} alt="" />
            <h1 className='text-2xl font-bold'>Meal Name: {meal.strCategory}</h1>
            <p>{meal.strCategoryDescription}</p>
            <button className='bg-sky-500 hover:bg-sky-700 py-2 px-5 rounded-lg' onClick={handleBack}>Back</button>
        </div>
    );
};

export default MealDetails;