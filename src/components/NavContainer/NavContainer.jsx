import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import * as Scroll from 'react-scroll';
import { Link as LinkScroll } from 'react-scroll';
import './NavContainer.scss';


function HeaderNav({ direction, children }) {
    return (
        <Stack spacing={2} direction={direction} className='nav-container'>
            {children}
            {/* <Link
                underline="none"
            >
                Link
            </Link> */}
            <LinkScroll className="link-p" activeClass="active" to="beneficios" spy={true} smooth={true} offset={50} duration={500}>
                Beneficios
            </LinkScroll>
            <LinkScroll className="link-p" activeClass="active" to="plataformas" spy={true} smooth={true} offset={50} duration={500}>
                Plataformas
            </LinkScroll>
            <LinkScroll className="link-p" activeClass="active" to="nosotros" spy={true} smooth={true} offset={50} duration={500}>
                Nostros
            </LinkScroll>
        </Stack>
    );
}

HeaderNav.propTypes = {
    direction: PropTypes.string,
};

export default HeaderNav;
