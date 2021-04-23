import React, {Component} from 'react';
import axios from 'axios';

export default class NewPost extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "",
            body : "",
            userId : "0"
        }
    }
    postDataHandler = () => {
        const data = {
            title:this.state.title,
            body:this.state.body,
            userId:this.state.userId
        }

    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/1`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })

        axios.post(`https://jsonplaceholder.typicode.com/posts`, data)
            .then(response => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
    }
    render(){
        return(
            <React.Fragment>
                <h1>New Post</h1>
                <div><input type="text" className="title" placeholder="Title" onChange={(event) => { this.setState({title: event.target.value}) }}/></div>
                <div><textarea className="post-des" onChange={(event) => {this.setState({body:event.target.value})}}></textarea></div>
                <div><select onChange={(event) => {this.setState({auth:event.target.value})}}><option value="unauthor">Select Author</option><option value="22">BB</option><option value="25">BL</option></select></div>
                <div><button onClick={this.postDataHandler}>Submit</button></div>
            </React.Fragment>
        );
    }
} 
