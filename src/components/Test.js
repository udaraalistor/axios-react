import React, {Component} from "react";
import axios from 'axios';


export default class Test extends Component{
    state= {
        person: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos', {params: {_limit:5}}).then(res =>{
            console.log(res);
           this.setState({person: res.data})
        });
    }

    render() {
        return(
            <ul >

                {this.state.person.map(person=>
                        <li key={person.id}>
                        {person.id}
                        <br/>
                        {person.title}
                        <br/>
                        {/*<img src={person.thumbnailUrl}/>*/}
                        </li>
                )}
            </ul>
        )
    }


}