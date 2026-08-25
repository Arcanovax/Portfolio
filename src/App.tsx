import React from 'react';
import Portfolio from './portfolio/Portfolio';
import TheAnswerProtocol from './portfolio/tap';
import { Routes, Route } from "react-router-dom";



export default function App() {
	return (
		<Routes>
            <Route path="/" element={<Portfolio />} />

            <Route
                path="/projects/the-answer-protocol"
                element={<TheAnswerProtocol />}
            />
        </Routes>
	);
}
