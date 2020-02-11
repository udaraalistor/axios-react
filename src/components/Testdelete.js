import React, {Component} from "react";
import axios from 'axios';


export default class Testdelete extends Component{
    state= {
        id: 0,
    }

    handleChange = event => {
        this.setState({id: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();


        axios.delete('https://jsonplaceholder.typicode.com/photos/${this.state.id}')
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Input Id:
                    <input type="number" name="id" onChange={this.handleChange}/>
                </label>
                <button type="submit">Delete Id</button>
            </form>
        )
    }


}