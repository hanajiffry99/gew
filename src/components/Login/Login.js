import React from 'react';
import { Form, Button} from 'react-bootstrap'
import './Style.css'

function Login(props)
{
      const handleLogin = () => {
        props.history.push('/home');
      }

      return(    
        <Form style={{ width: "80%", marginTop: "10%", marginLeft: "10%" }}>
            <Form.Group>
                <Form.Label className="label">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="label" >Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <br/><br/>
            <Button variant="secondary" type="submit" onClick={handleLogin} className='center'>Login</Button><br /><br />
            <div style={{fontSize:'20px'}}>Don't have an account yet? <b>Sign Up</b></div>
            <br/><br/>
        </Form>
    );
}

export default Login;