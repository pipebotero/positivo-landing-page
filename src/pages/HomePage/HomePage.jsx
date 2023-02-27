import React, { Fragment } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Home } from "../../components/Home/Home";
import { Main } from "../../components/Main/Main";

export const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <Home />
            <Main/>
            <Footer />
        </Fragment>
    );
};
