import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div className="border-2 border-sky-300 p-3 rounded-2xl">
           <h1 className="text-2xl font-bold">Title : {title} </h1> <br />
            <Link className="bg-sky-500 hover:bg-sky-700 p-2 rounded-lg" to={`/post/${id}`} >Show Details</Link>
            
        </div>
    );
};

export default Post;