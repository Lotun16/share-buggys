
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BugsPage = () => {
    return ( 
        <>
            <div className="w-100 text-center mt-2">
                <Link to="/my-bugs" style={{textDecoration: 'none'}}>My Bugs</Link>
            </div>
            <div className="w-100 text-center mt-2">
                <Link to="/all-bugs" style={{textDecoration: 'none'}}>All Bugs</Link>
            </div>
        </>
     );
}
 
export default BugsPage;