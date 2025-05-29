import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Contact from './Components/Contact/Contact.jsx';
import ShowPost from './Components/ShowPost/ShowPost.jsx';
import Meals from './Components/Meals/Meals.jsx';
import MealDetails from './Components/Meals/MealDetails.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>, 
    children:
    [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/posts',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      }, 
      {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<ShowPost></ShowPost>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/meals',
        loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<Meals></Meals>
      },
      {
        // path:'/meal/:idCategory',
        // loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/meal/${params.idCategory}`),
        path: '/meal/:idCategory',
          loader: async ({ params }) => {
           const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
           const data = await res.json();
            const selectedMeal = data.categories.find(meal => meal.idCategory === params.idCategory);
              return selectedMeal;
          },
        element:<MealDetails></MealDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
