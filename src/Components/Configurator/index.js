import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDataCalculator } from '../../actions';
import './configurator.css';
import 'react-input-range/lib/css/index.css';

//components
import ComponentLefth from './contentlefth';
import ComponentRight from './contentright';

class Configurator extends Component {
    static propsTypes ={
        getDataCalculator:PropTypes.func.isRequired,
        calculator:PropTypes.array.isRequired
    }
    constructor(props){
        super(props);
    }
    componentWillMount() {
     this.props.getDataCalculator()
    }


    render() {
        
        return (
            <Container>
                <Col md={12} className="colPadre">
                    <Row>
                        <ComponentLefth calculator={this.props.calculator} />
                        <ComponentRight />
                    </Row>
                </Col>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {calculator : state.calculator}
}

export default connect(mapStateToProps,{getDataCalculator})(Configurator);

/**
 *
 */