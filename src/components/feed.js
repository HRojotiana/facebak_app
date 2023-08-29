import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.css';

function Feed(props) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://[::1]:8080/posts').then((response) => {
                setPosts(response.data);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div className="body">
            <header className='header'>
                <div className="logo">Facebak</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="profile">
                    {isLoggedIn ? (
                        <>
                            <img
                                src={props.userImage}
                                alt="User"
                                className="user-image"
                            />
                            <span>{props.username}</span>
                        </>
                    ) : (
                        <p>Connectez-vous pour voir les informations d'utilisateur</p>
                    )}
                </div>
            </header>
            <div className="feed">
                <div>
                    {posts.map((post, index) => (
                        <Post
                            key={index}
                            post={post}
                        />
                    ))}
                </div>
                <div className="sidebar-right">
                    <div className="message-list"></div>
                </div>
            </div>
        </div>
    )};

    const Post = ({ post }) => {
        const createdAt = new Date(post.createdAt).toLocaleString();
        const [comments, setComments] = useState([]);
    
    
        const fetchCommentsForPost = async (postId) => {
            try {
                const response = await axios.get(`http://[::1]:8080/posts/${postId}/comments`);
                return response.data;
            } catch (error) {
                console.log("Error fetching comments:", error);
                throw error;
            }
        };
    
        useEffect(() => {
            fetchCommentsForPost(post.id)
                .then(commentsData => {
                    setComments(commentsData);
                })
                .catch(error => {
                    console.log("Error fetching comments:", error);
                });
        }, [post.id]);
    
        return (
            <div className="post">
                <div className="post-header">
                    <img src={post.user.photo} alt='profile'></img>
                    <div className="post-author">
                        <h3>{post.user.username}</h3>
                        <span>{createdAt}</span>
                    </div>
                </div>
                <div className="post-content">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <div className="post-actions">
                    <ul>Reacts: {post._count.reactions}</ul>
                    <ul>Comments: {post._count.comments} </ul>
                    <ul>Share</ul>
                </div>
                <div className="comments">
                    <h4>Your comment</h4>
                    <ul className="comment-list">
                        {/* Comment list items */}
                    </ul>
                    <form className="comment-form">
                        <input type="text" placeholder="Ajouter un commentaire" />
                        <button type="submit" className="comment-button">Envoyer</button>
                    </form>
                    {/* Add more comments */}
                </div>
                {comments && comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        );
    }
    
    const Comment = ({ comment }) => {
        const createdAt = new Date(comment.createdAt).toLocaleString();
        return (
            <div className="comments">
                <h4>Comments</h4>
                <form className="comment-form">
                    <p>{comment.content}</p>
                    <p>Posted by: {comment.user.username}</p>
                    <p>On: {createdAt}</p>
                </form>
            </div>
        );
    }
    
    export default Feed;