import React, {Component} from 'react';
import axios from 'axios';

export default class FullPost extends Component{
    constructor(props){
        super(props)
        this.state = { 
            loadedPost: null
        }
    }

    componentDidMount(){
        if(this.props.id){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id === this.props.id)){
                axios
                    .get(`https://jsonplaceholder.typicode.com/posts/`+this.props.id)
                    .then((res) => {
                        this.setState({
                            loadedPost: res.data
                        });
                    }).catch((error) => {
                        console.log(error)
                    });
            }
        }
    }

    render() {
        let post = '';
        if ( this.state.loadedPost ) {
            post = (
                <React.Fragment>
                    <h1 className="post-title">{this.state.loadedPost.title}</h1>
                    <p className="description">{this.state.loadedPost.body}</p>
                </React.Fragment>
            );
        }

        return post;
      }
}