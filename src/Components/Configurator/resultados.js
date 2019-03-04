import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './configurator.css';

class Resultados extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Col md={12} style={{ marginTop: '40px', marginBottom: '10px' }}>
                <Row>
                    <Col xs={6} md={6} style={{ padding: 0, margin: 0 }}>
                        <Col md={12} style={{ margin: '0px', padding: '0px' }} >
                            <div className="divResultados">
                                <span className="spanSimbolo">
                                    $</span>
                                {` ${this.props.estFoodCostSave}`}
                            </div>
                        </Col>
                        <Col md={12} className="labelResults" >Estimated cost food savings</Col>
                    </Col>

                    <Col xs={6} md={6} style={{ padding: 0, margin: 0 }}>
                        <Col md={12} style={{ margin: '0px', padding: '0px' }} >
                            <div className="divResultados">
                                <span className="spanSimbolo">$</span>
                                {` ${this.props.annualSave}`}
                            </div>
                        </Col>
                        <Col md={12} className="labelResults" >Your estimated annual savings</Col>
                    </Col>


                </Row>
            </Col>


        )
    }
}

export default Resultados;
