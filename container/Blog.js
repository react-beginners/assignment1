import React, {Component} from 'react';
import axios from 'axios';
import FullPost from '../components/FullPost';
import NewPost from '../components/NewPost';

export default class Blog extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <FullPost id="2"/>
                <NewPost />
            </React.Fragment>
        );
      }
}