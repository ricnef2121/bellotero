//dependencies
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../public/images/bellotero.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import {Link} from 'react-router-dom';
import './css/Header.css';


export class Header extends Component {
    static propTypes ={
        getData:PropTypes.func.isRequired,
        menu:PropTypes.array
    }
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getData();
      
    }

    render() {
        //console.log(this.props.menu)
        return (
            <div className="Header">
                <Navbar  expand="lg">
                    <Container>
                        <Navbar.Brand><Image src={logo} /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="Nav">
                            {this.props.menu.map((item,key)=>(
                                 <Link style={{color:'#071eb3',padding:'8px'}} key={key} to={`/${item.route}`}>{item.text}</Link>
                                
                            ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    };
}

export default connect(mapStateToProps, { getData })(Header);