import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import './configurator.css';

class ComponentLefth extends Component {
    static propsTypes = { 
        calculator: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { calculator } = this.props;        
        return (
            <Col md={4} style={{ marginBottom: '10px' }} >
                <Col md={12} style={{ padding: '0px', margin: '0px' }}>
                    <Row>
                        <Col md={10} className="divTitleLeft">
                            <span className="spanTitleConfig"
                            >{calculator.title}</span>
                        </Col>
                        <Col md={12} style={{ textAlign: 'justify' }}>
                            <span className="spanInput">{calculator.description}</span>
                        </Col>
                    </Row>
                </Col>
            </Col>
        )
    }
}

export default ComponentLefth; 