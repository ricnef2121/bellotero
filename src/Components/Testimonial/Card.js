import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CardTestimonial extends Component {
    
    static propTypes = {
        testimomial: PropTypes.object,
        position : PropTypes.number.isRequired
    }
    constructor(props){
        super(props);
    }
    
    render() {
        
        const { testimonial,position } = this.props;
       // console.log(typeof(testimonial))
        return (
            <Card className="divCard">
                <Card.Body>
                    <Row>
                        <Col md={3} >
                            <Col md={12}>
                                <Row>
                                    {testimonial && testimonial.map((el, k) => {
                                        return <Col md={12} key={k} className="colAuthor">{el.reviews[position].name} </Col>
                                    })}
                                    {testimonial && testimonial.map((el, k) => {
                                        return <Col md={12} key={k} className="colCorreo">{el.reviews[position].position} </Col>
                                    })}
                                </Row>
                            </Col>
                        </Col>
                        <Col md={{ span: 8, offset: 1 }} id="divTestimonioText">
                            <div >{testimonial && testimonial.map((el, k) => {
                                return <p key={k}>{el.reviews[position].comment}</p>
                            })} </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}


//export default connect(mapStateToProps,null)(CardTestimonial);
export default CardTestimonial;