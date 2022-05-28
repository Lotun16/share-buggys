import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from '../views/Dashboard';
import UpdateProfile from '../views/UpdateProfile';

export default function PrivateOutlet( {component: Component, ...rest}) {
    const { currentUser } = useAuth();
    return currentUser ? (
        <Dashboard>
            <Outlet />
        </Dashboard> 
    ) : (
        <Navigate to="/login" /> 
    )
}
