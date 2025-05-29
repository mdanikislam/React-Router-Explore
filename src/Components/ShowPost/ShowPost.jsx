import {   useLoaderData, useNavigate } from "react-router-dom";

const ShowPost = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate =useNavigate();

    const handleBack =()=>{
        navigate(-1)
    }

    return (
        <div className="w-10/12 mx-auto">
            <h1>ID: {id}</h1>
            <h2 className="text-2xl font-bold my-4"> Title : {title}</h2>
            <p>Description: {body}</p>
            <button onClick={handleBack} className="bg-sky-500 hover:bg-sky-700 py-2 px-6 my-5 rounded-lg " >Back</button>
        </div>
    );
};

export default ShowPost;