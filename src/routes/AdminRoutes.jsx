import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AdminRoutes({ children }) {
    const token = localStorage.getItem("token");

    // If no token is present, redirect to login or admin page
    if (!token) {
        return <Navigate to="/admin" />;
    }

    // Render children if provided; otherwise, render Outlet for nested routes
    return children || <Outlet />;
}

export default AdminRoutes;

