//dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Content.css'
import Container from 'react-bootstrap/Container'

class Content extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    render() {
        const { body } = this.props;
        return (
            <div className="Content" style={{height: '37.5pc'}}>
                <Container>
                    {body}
                </Container>

            </div>
        )
    }
}

export default Content;