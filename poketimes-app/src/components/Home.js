import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Pokeball from '../pokeball.png';

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() { // Will run after the component has mounted and rendered once.
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => { // .then waits for the request to be completed and then completes the callback function.
                // console.log(response)
                this.setState({
                    posts: response.data.slice(0,10)
                });
            });
    };

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (posts.map(post => { // does posts have any posts? Has the request completed?
            return ( // Yes? Return this...
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball"></img>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })) : ( // No? Return this... This will be returned first for a split second before the request is made and rendered.
            <div className="center">No Posts Yet</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
};

export default Home;