import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            const responsePost = res.data;
            setPost(responsePost);
        });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {post &&
                post.map((post) => {
                    const { id, title, body } = post;
                    return (
                        <div key={id}>
                            <h4>{title}</h4>
                            <p>{body}</p>
                        </div>
                    )
                })}
        </div>
    );
};

export default Posts;