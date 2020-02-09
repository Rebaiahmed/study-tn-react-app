import React, { Component } from 'react';
import Todos from '../components/Todos';
class Home extends Component {
    render() {
        return (

            <div className="container">

                <Todos />
            </div>



        );
    }
}

export default Home;