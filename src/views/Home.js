import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import remote from '../images/remotework.svg';
import onboard from '../images/onboard.svg';
import share from '../images/share.svg';

const Home = () => {
    return ( 
        <div className="home-page">
            {/* Showcase */}
            <section className="bg-dark text-light p-5 text-center text-sm-start">
                <Container>
                    <div className="d-sm-flex">
                        <div>
                            <h1>Alone we can do <span className="text-warning">so little.</span></h1>
                            <h1>Together we can do  <span className="text-warning">so much.</span></h1>
                            <p className="lead my-4">
                                Feeling overwhelmed by a slog of error messages can be extremely
                                demoralizing. Ask for help. Not because you are weak, but because
                                you want to remain strong
                            </p>
                            <Button variant="primary" type="link" href="/dashboard" size="lg">Customize your Profile</Button>
                        </div>
                        <img className="img-fluid w-50 d-none d-sm-block" style={{paddingLeft: '35px'}}src={remote} alt="" />
                    </div>
                </Container>
            </section>

            {/* Newsletter */}
            <section className="bg-primary text-light p-5">
                <Container>
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
                        <InputGroup className="mb-3 news-input">
                            <FormControl placeholder="Enter Email" />
                            <Button variant="dark" size="lg"> Subscribe </Button>
                        </InputGroup>
                    </div>
                </Container>
            </section>

            {/* Boxes Section */}
            <secton className="p-5">
                <Container>
                    <Row className='text-center g-4'>
                        <Col md={true}>
                            <Card bg="dark" text="light" >
                                <Card.Body className='text-center' style={{paddingBottom: '25px'}}>
                                    <div className="h1 mb-3">
                                        <i className="bi bi-laptop"></i>
                                    </div>
                                    <Card.Title className="mb-3">Community</Card.Title>
                                    <Card.Text>
                                        Irure tempor cupidatat occaecat dolor tempor eu magna excepteur. 
                                        Minim aute pariatur et labore anim tempor anim duis duis except
                                    </Card.Text>
                                    <a href="/all-bugs" className="btn btn-primary">See More</a>
                                </Card.Body >
                            </Card>
                        </Col>
                        <Col md={true}>
                            <Card bg="secondary" text="light" >
                                <Card.Body className='text-center' style={{paddingBottom: '25px'}}>
                                    <div className="h1 mb-3">
                                        <i className="bi bi-person-square"></i>
                                    </div>
                                    <Card.Title className="mb-3">Create</Card.Title>
                                    <Card.Text>
                                        Irure tempor cupidatat occaecat dolor tempor eu magna excepteur. 
                                        Minim aute pariatur et labore anim tempor anim duis duis except
                                    </Card.Text>
                                    <a href="/create-bug" className="btn btn-dark">Submit</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={true}>
                            <Card bg="dark" text="light" >
                                <Card.Body className='text-center' style={{paddingBottom: '25px'}}>
                                    <div className="h1 mb-3">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <Card.Title className="mb-3">Register</Card.Title>
                                    <Card.Text>
                                        Irure tempor cupidatat occaecat dolor tempor eu magna excepteur. 
                                        Minim aute pariatur et labore anim tempor anim duis duis except
                                    </Card.Text>
                                    <a href="/signup" className="btn btn-primary">Sign Up</a>
                                </Card.Body>
                            </Card>
                        </Col>         
                    </Row>
                </Container>
            </secton>

            {/* Learn Section */}
            <section className="p-5" id="learn">
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col md={true}>
                            <img src={onboard} className="img-fluid w-70 d-none d-sm-block" alt="" />
                        </Col>
                        <Col md={true} className="p-5">
                            <h2>Learn The Fundamentals</h2>
                            <p className="lead">
                                Lorem sint irure voluptate in aliquip ad ad consectetur 
                                Lornsbuem sint irure voluptate in aliquip ad ads skvsr 
                                wiqahn shshssh sqmav lola sjsuas wit dolor ezsnsnlanw 
                                Ghsyem ssvysi sgyksb wuwbs hishis hgsii  ad ad sjknsskur 
                                magna occaecat minim elit dolor exercitation.
                            </p>
                            <p className="lead">
                                Lorem sint irure voluptate in aliquip ad ad consectetur 
                                Amet sint culpa id cillum esse minim pariatur ullamco tempor
                                qui nisi ut officia magnas ialhahs aouwwe oapa,sk ppquw
                                qornsbuem sint irure voluptate in aliquip ad ads skvsr 
                                wiqahn shshssh sqmav lola sjsuas wit dolor ezsnsnlanw 
                                Ghsyem ssvysi sgyksb wuwbs hishis hgsii  ad ad sjknsskur 
                            </p>
                            <a href="/" className="btn btn-light mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Share Section */}
            <section className="p-5 bg-dark text-light" id="learn">
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col md={true} className="p-5">
                            <h2>Share The Wealth</h2>
                            <p className="lead">
                                Lorem sint irure voluptate in aliquip ad ad consectetur 
                                Lornsbuem sint irure voluptate in aliquip ad ads skvsr 
                                wiqahn shshssh sqmav lola sjsuas wit dolor ezsnsnlanw 
                                Ghsyem ssvysi sgyksb wuwbs hishis hgsii  ad ad sjknsskur 
                                magna occaecat minim elit dolor exercitation.
                            </p>
                            <p className="lead">
                                Lorem sint irure voluptate in aliquip ad ad consectetur 
                                Amet sint culpa id cillum esse minim pariatur ullamco tempor
                                qui nisi ut officia magnas ialhahs aouwwe oapa,sk ppquw
                                qornsbuem sint irure voluptate in aliquip ad ads skvsr 
                                wiqahn shshssh sqmav lola sjsuas wit dolor ezsnsnlanw 
                                Ghsyem ssvysi sgyksb wuwbs hishis hgsii  ad ad sjknsskur 
                            </p>
                            <a href="/" className="btn btn-dark mt-3">
                                <i className="bi bi-chevron-right"></i> Read More
                            </a>
                        </Col>
                        <Col md={true}>
                            <img src={share} className="img-fluid w-70 d-none d-sm-block" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* More Stuff */}

        </div>
     );
}
 
export default Home;