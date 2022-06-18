import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import {Footer, Header} from "./components/";

import {Reglog, Home, Objects} from "./pages";

const App = () => {
    const location = useLocation();

    return (
        <>
            <React.Suspense fallback={<></>}>
                {location.pathname !== "/" ? <Header /> : null}

                <Reglog />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/objects" element={<Objects />} />
                </Routes>

                <Footer />
            </React.Suspense>
        </>
    );
};

export default App;
