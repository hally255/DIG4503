import React, { useState, useEffect } from "react";
import axios from "axios";
import Counter from "./counter.js";

const Comments = () => {
    const [comment, setComment] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            const responseComment = res.data;
            setComment(responseComment);
        });
    }, []);

    return (
        <div id="content" class="">
            <div class="article">
                <h1>Article 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non arcu. At lectus urna duis convallis convallis tellus id interdum velit. Tincidunt dui ut ornare lectus sit amet est. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Quisque id diam vel quam. Malesuada bibendum arcu vitae elementum curabitur vitae. Auctor augue mauris augue neque gravida in fermentum. Gravida dictum fusce ut placerat. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tellus elementum sagittis vitae et leo duis ut diam. Dui id ornare arcu odio. Sit amet facilisis magna etiam tempor orci eu lobortis. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Orci a scelerisque purus semper eget duis at tellus at. Sit amet risus nullam eget felis eget nunc. Donec massa sapien faucibus et molestie. Nunc consequat interdum varius sit amet mattis vulputate enim.</p>

                {comment && comment.map((comment) => {
                    const { postId, email, body } = comment;
                    if (postId === 2) {
                        return (
                            <div class="comment" key={postId}>
                                <h4>{email}</h4>
                                <p>{body}</p>
                            </div>
                        )
                    } else { }
                    return (null)
                })}
                <Counter />
            </div>
            <div class="article">
                <h1>Article 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor morbi non arcu. At lectus urna duis convallis convallis tellus id interdum velit. Tincidunt dui ut ornare lectus sit amet est. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Quisque id diam vel quam. Malesuada bibendum arcu vitae elementum curabitur vitae. Auctor augue mauris augue neque gravida in fermentum. Gravida dictum fusce ut placerat. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Tellus elementum sagittis vitae et leo duis ut diam. Dui id ornare arcu odio. Sit amet facilisis magna etiam tempor orci eu lobortis. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Orci a scelerisque purus semper eget duis at tellus at. Sit amet risus nullam eget felis eget nunc. Donec massa sapien faucibus et molestie. Nunc consequat interdum varius sit amet mattis vulputate enim.</p>

                {comment && comment.map((comment) => {
                    const { postId, email, body } = comment;
                    if (postId === 1) {
                        return (
                            <div class="comment" key={postId}>
                                <h4>{email}</h4>
                                <p>{body}</p>
                            </div>
                        )
                    } else { }
                    return (null)
                })}
                <Counter />
            </div>
        </div>
    );
};

export default Comments;