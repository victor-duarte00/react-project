import React from 'react';
import Home from './containers/Home';
import Users from './containers/Users';

import { Routes, Route, Link } from 'react-router-dom';

export default function MainRoutes() {
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="usuarios" element={<Users />} />
        </Routes>
    )
}