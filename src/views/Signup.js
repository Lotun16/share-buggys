import React, { useRef, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAuth } from '../contexts/AuthContext';
import welcome from '../images/welcome.svg';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const firstNameRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            setError('Failed to create an account')
        }
        setLoading(false);
        history('/dashboard');
        
    }

    return ( 
        <section>
            <h1 className='text-center mb-3' style={{fontFamily: 'Roboto Slab', fontSize: '75px'}}>Sign Up</h1>
            {error && <Alert variant ="danger" >{error}</Alert>}
            <Container className='mt-5'>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <img  className="w-100"  src={welcome} alt="" />
                    </Col>

                    <Col lg={4} md={6} sm={12} className="text-center" style={{alignItems: 'center', justifyContent: 'center' }}>
                       
                        <div className="h1 mb-3">
                            <i className="bi bi-person-circle" style={{fontSize: '100px', color: '#00BFA6'}}></i>
                        </div>  
                        <Form onSubmit={handleSubmit}>
                            <Row >
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                                        <Form.Control type="text" placeholder="Enter First Name" ref={firstNameRef}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicLastName">
                                        <Form.Control type="text" placeholder="Enter Last Name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                                <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                            </Form.Group>

                            <Button disabled={loading} variant="primary w-100 mb-4" type="submit">Sign Up</Button>
                        </Form>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/login" style={{textDecoration: 'none'}}>Log In</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Signup;
