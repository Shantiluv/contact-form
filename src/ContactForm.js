import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
    const cardStyle = {
        maxWidth: '600px',
        margin: '0 auto',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    };

    const asteriskStyle = {
        color: 'black',
    };

    const radioGroupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const radioItemStyle = {
        flex: '1',
        padding: '10px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        textAlign: 'left',
    };

    const formGroupStyle = {
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <Card className="p-3" style={cardStyle}>
                <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formFirstName" style={formGroupStyle}>
                                    <Form.Label>First Name <span style={asteriskStyle}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formLastName" style={formGroupStyle}>
                                    <Form.Label>Last Name <span style={asteriskStyle}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formEmail" style={formGroupStyle}>
                            <Form.Label>Email Address <span style={asteriskStyle}>*</span></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group controlId="formQueryType" style={formGroupStyle}>
                            <Form.Label>Query Type <span style={asteriskStyle}>*</span></Form.Label>
                            <div style={radioGroupStyle}>
                                <div style={radioItemStyle}>
                                    <Form.Check 
                                        type="radio" 
                                        label="General Query" 
                                        name="queryType" 
                                        id="generalQuery" 
                                        required 
                                    />
                                </div>
                                <div style={radioItemStyle}>
                                    <Form.Check 
                                        type="radio" 
                                        label="Support Request" 
                                        name="queryType" 
                                        id="supportRequest" 
                                        required 
                                    />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formMessage" style={formGroupStyle}>
                            <Form.Label>Message <span style={asteriskStyle}>*</span></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                        </Form.Group>
                        <Form.Group controlId="formConsent" style={formGroupStyle}>
                            <Form.Check 
                                type="checkbox" 
                                label={<span>I consent to being contacted by the team <span style={asteriskStyle}>*</span></span>}
                                required 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ContactForm;
