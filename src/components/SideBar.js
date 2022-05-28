import React from 'react';
import '../App.css';

const SideBar = () => {
    // const { currentUser, logout } = useAuth();
    // const [error, setError] = useState('');
    // const history = useNavigate();

    // async function handleLogout() {
    //     setError('')

    //     try{
    //         await logout()
    //         history('/home')
    //     }
    //     catch{
    //         setError('Failed to logout')
    //     }

    // }

    return ( 
        <div className='Sidebar'>
            {/* <ul className="SidebarList">
                        {SideBarData.map((data, i) => (
                            <Link to={data.link} style={{color: 'white', fontSize: '20px', textDecoration: 'none', height: '50px', width: '100%'}}>
                                <Container>
                                    <i className={data.icon}></i>
                                    {data.title}
                                </Container>
                            </Link>
                        ))}
                        <Container style={{color: 'white', fontSize: '20px', textDecoration: 'none', height: '50px', width: '100%', cursor: 'pointer'}} onClick={handleLogout}>
                            <i className='bi bi-door-closed'></i>
                            Logout
                        </Container>
            </ul> */}
        </div>
     );
}
 
export default SideBar;


