//dependencies
import React, { Component } from 'react';
import PropTypes from "prop-types";

import './App.css';
//Components
import Header from './Global/Header.jsx';
import Content from './Global/Content.jsx';


class App extends Component {
    static propTypes={
        children: PropTypes.object.isRequired
    }
    render() {
        const {children}= this.props;
        return (
            <div className="Container">
                <Header />
                <Content body={children}/>
            </div>
        )
    }
}
export default  App;