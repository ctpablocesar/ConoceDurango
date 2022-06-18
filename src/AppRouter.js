import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from './App'
import { Recompensa } from './Recompensa';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path='/recompensa' element={<Recompensa />} />
            </Routes>
        </Router>
    )
}
