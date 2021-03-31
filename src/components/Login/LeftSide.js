import React from 'react'
import { Card, Col, Container,Row} from 'react-bootstrap';
import {BrowserRouter as Router, Switch,Route,NavLink } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './Style.css'


const LeftSide = () => {
    return (
        <Card className='card'>
            <Container>
                <Router>
                    <div className="head">
                    <Row>
                        <Col>
                        <NavLink exact active activeClassName="active" to="/signnin/login" >Login</NavLink>
                        </Col>
                        <Col>
                        <NavLink activeClassName="active" to="/signin/signup">Sign Up</NavLink>
                        </Col>
                    </Row>
                    </div>
                    <Switch>
                        <Route exact path="/signnin/login" component={Login} />
                        <Route exact path="/signin/signup" component={Signup} />
                    </Switch>
                </Router>
            </Container>
        </Card>
    )
}

export default LeftSide

