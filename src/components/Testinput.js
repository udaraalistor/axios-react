import React, {Component} from "react";
import axios from 'axios';


export default class Testinput extends Component{
    state= {
            title: '',
    }

    handleChange = event => {
         this.setState({title: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        const user ={
            title: this.state.title
        }

        axios.post('https://jsonplaceholder.typicode.com/photos', {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

    }


    render() {
        return(
           <form onSubmit={this.handleSubmit}>
               <label>
                   Input Title:
                   <input type="text" name="title" onChange={this.handleChange}/>
               </label>
               <button type="submit">Add New Title</button>
           </form>
        )
    }


}