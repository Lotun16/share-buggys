import React from 'react';
import {useRef, useState} from 'react';
import { useAuth } from '../contexts/AuthContext';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ForgotPassword = () => {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const {resetPassword} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setMessage("");
            setError("");
            setLoading(true);

            await resetPassword(emailRef.current.value);

            setMessage("Check your inbox for further instructions");
          } 
          catch {
            setError("Failed to reset password");
          }
      
          setLoading(false);

    }

    return ( 
        <>
            <Card>
                <Card.Body className="text-center">
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-50- mt-3" type="submit">
                    Reset Password
                    </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
                </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup" style={{textDecoration: 'none'}}>Sign Up</Link>
            </div>
        </>
     );
}
 
export default ForgotPassword;