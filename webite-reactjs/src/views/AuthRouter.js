import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from './Login';

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
}
