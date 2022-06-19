import React from 'react';
import { Navigate } from 'react-router-dom';


// This component will help us when someon introduce an incorrect url direction
function NotFoundPage() {
    return <Navigate to='/' />
}

export { NotFoundPage }