import React from "react";
import "./Main.scss";
import { Benefits } from "../Benefits/Benefits";
import Platforms from "../Platforms/Platforms";
import Company from "../Company/Company";

export const Main = () => {
    return (
        <main>
            <section id="beneficios" className="section-p">
                <Benefits/>
            </section>
            <section id="plataformas" className="section-p">
                <Platforms/>
            </section>
            <section id="nosotros" className="section-p">
                <Company/>
            </section>
        </main>
    );
};
