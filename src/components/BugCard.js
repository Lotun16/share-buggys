import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';


const BugCard = ({ title, error, body, posterEmail, id, status, alter}) => {
    const color = (status === 0)  ? 'danger' : 'success';
    // const [badgeState, setBadgeState] = useState(status);


    // console.log(color);
    return ( 
        <Card style={{ margin: 10 }} >
                            <Card.Header style={{ display: "flex" }}>
                                <span
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 30,
                                        fontFamily: 'Dongle'
                                    }}
                                >
                                    {posterEmail}
                                </span>
                            </Card.Header>
                            <Card.Body style={{color: "black"}}>
                                <Card.Title><h3 style={{fontSize: 50, fontFamily: 'Dongle'}}>{title}</h3></Card.Title>
                                <Card></Card>
                                <p style={{fontSize: 35, fontFamily: 'Dongle', color: 'red'}}>Error: {error}</p>
                                <p style={{fontSize: 25, fontFamily: 'Dongle'}}>{body}</p>
                                <h4>
                                    <Badge style={{cursor: 'pointer'}} onClick={() => alter()} bg={color}>{status === 0 ? 'Open' : 'Closed'}</Badge>
                                </h4>
                            </Card.Body>
                        </Card>
     );
}
 
export default BugCard;