import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDataReviews } from '../../actions';
import './testimonial.css'

//components
import Title from './title';
import CardTestimonial from './Card'


class Testimonial extends Component {
    static propTypes = {
        getDataReviews: PropTypes.func.isRequired,
        reviews: PropTypes.array.isRequired
    }
    constructor() {
        super();

        this.ButtonNext = this.ButtonNext.bind(this);
        this.ButtonPrev = this.ButtonPrev.bind(this);

        this.state = {
            position: 0
        }
    }
    componentWillMount() {
        this.props.getDataReviews();
    }

    ButtonNext() {
        event.preventDefault();
        let lenght = this.props.reviews.map(elem => elem.reviews.length)
        let num = lenght[0] - 1
        let pos = this.state.position
        if (pos < num) {
            this.setState({
                position: this.state.position + 1
            })
            //console.log('length',num);
            //console.log('position',pos);
        } else {
            this.setState({
                position: 0
            })
        }
    }

    ButtonPrev() {
        event.preventDefault();
        let lenght = this.props.reviews.map(elem => elem.reviews.length)
        let num = lenght[0] - 1
        let pos = this.state.position
        if (pos > 0) {
            this.setState({
                position: this.state.position - 1
            })
            //console.log('length',num);
            //console.log('position',pos);
        }  else{
            this.setState({
                position: num
            })
        }            
    }

    render() {
        const { position } = this.state;
        const { reviews } = this.props;

        const lenght = reviews.map(elem => {
            return elem.reviews.length
        })



        return (

            <Container>
                <Row className="justify-content-md-center">
                    <Title title={reviews} />
                    <Col md={12} className="colPadreTestimonio" >
                        <Col md={10} className="colPadreCard" >
                            <CardTestimonial testimonial={reviews} position={position} />
                        </Col>
                    </Col>
                </Row>
                <div className="divPadrePagination">
                    <div className="divPagination">
                        <Row>
                            <Button id="divConta" >{`${position + 1}/${lenght[0]}`}</Button>
                            <Button id="divButtonNext" onClick={this.ButtonPrev}>{`<-`}</Button>
                            <Button id="divButtonNext2" onClick={this.ButtonNext}>{`->`}</Button>
                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        reviews: state.reviews
    };
}

export default connect(mapStateToProps, { getDataReviews })(Testimonial);