import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Container, Button, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ContactCard = ({user}) => {
    return ( 
        <div >
            <Container >
                <Row className="d-flex justify-content-center">
                    <Col md={10}className=" mt-5 pt-5 ">
                        <Row  className="shadow p-0 mb-5 bg-white rounded">
                            <Col className="sm-2 bg-info rounded-left">
                                <Card.Body className="text-center text-light blockquote mt-3 bg-info" >
                                    <i className="bi bi-file-earmark-person mt-2" style={{fontSize: 150}} ></i>
                                    <h2 className="font-weight-bold mt-1">User</h2>
                                    <p>Software Engineer</p>
                                    <i className="person-lines-fill"></i>
                                </Card.Body>
                            </Col>
                            <Col className="bg-white rounded-right">
                                <h3 className="mt-3 text-center">Information</h3>
                                <hr className="bg-primary" />
                                <Row>
                                    <Col>
                                        <p className="font-weight-bold">Email</p>
                                        <h6 className="text-muted">{user}</h6>
                                    </Col>
                                    <Col>
                                        <p className="font-weight-bold">Phone</p>
                                        <h6 className="text-muted">98762538286</h6>
                                    </Col>
                                </Row>
                                <h3 className="mt-3 text-center">Projects</h3>
                                <hr className="bg-primary" />
                                <Row>
                                    <Col>
                                        <p className="font-weight-bold">Recent</p>
                                        <h6 className="text-muted">School Web</h6>
                                    </Col>
                                    <Col>
                                        <p className="font-weight-bold">Most Viewed</p>
                                        <h6 className="text-muted">Site Web</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ContactCard;