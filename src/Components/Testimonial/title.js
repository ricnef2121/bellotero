import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import './testimonial.css'

class Title extends Component {
     static propTypes = {
        title:PropTypes.array
     } 
    constructor() {
        super();
    }
    render() {
        const { title } = this.props;
        
        return (
            <Col md={12} className="colPadreTitle">
                {title && title.map((el, k) => {
                    return <span key={k} className="spanTitle"
                    >{el.title}</span>
                })}
            </Col>
        )
    }
}

export default Title;