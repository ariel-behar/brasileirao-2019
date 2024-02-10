import uniqid from "uniqid"
import { NavLink } from "react-router-dom"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import getImageUrl from "../../utils/getImageUrl"
import grassPattern from "../../assets/img/grass-patten.jpg"
import TranslationIcons from "./TranslationIcons"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"

const StyledHeader = styled('header')`
    background-image: url(${grassPattern});
    background-repeat: repeat;
    width: 95vw;
    position: fixed;
    z-index: 4;
    top: 0;
    left: 50%;
    
    transform: translateX(-50%);
    box-shadow: 0 0 40px 10px #f2fafc;

    margin-top: 35px;
    padding: 0 20px;
    border-radius: 30px;
    border: 3px solid #fff;

    .navbar-toggler:focus {
        box-shadow: none;
    }

    .nav-link {
        font-family: 'copperplate', sans-serif;
        text-transform: uppercase;
        &:hover {
            color: #dedede!important;
        }
        &.active {
            color: #fff!important;
        }
    }

    .header-logo {
        img {
            max-height: 50px;
            padding-left: 10px;
        }
    }

    @media(min-width: 768px) {
        width: 95vw;
        .header-logo {
            position: absolute;
            top: -80%;
            left: 50%;
            transform: translateX(-50%);

            img {
                max-height: 80px;
                padding-left: 0;

            }
        }
    }

    @media(min-width: 992px) {
        width: 80vw;
        .header-logo {
            img {
                max-height: 100px;
            }
        }
    }

    @media(min-width: 1200px) {
        width: 70vw;
        .header-logo {
            img {
                max-height: 120px;
            }
        }
    }
`

function Header() {
    const { t } = useTranslation('Header');

    const routes = [
        {
            path: "/",
            route: t('navbar.routes.home', {ns: 'Header', defaultValue: 'Home'})
        },
        {
            path: "/league",
            route: t('navbar.routes.league', {ns: 'Header', defaultValue: 'League'})
        },
        {
            path: "/teams",
            route: t('navbar.routes.teams', {ns: 'Header', defaultValue: 'Teams'})
        },
        {
            path: "/fan-club",
            route: t('navbar.routes.fanClub', {ns: 'Header', defaultValue: 'Fan Club'})
        },
        {
            path: "/events",
            route: t('navbar.routes.events', {ns: 'Header', defaultValue: 'Events'})
        },
        {
            path: "/tickets",
            route: t('navbar.routes.tickets', {ns: 'Header', defaultValue: 'Tickets'})
        }
    ]

    return (
        <>
            <StyledHeader>
                <span 
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '-15px',
                        zIndex: 5,
                        backgroundImage: `url(${grassPattern})`,
                        padding: '5px 10px',
                        borderRadius: '15px',
                        border: '2px solid #fff'
                    
                    }}
                className="d-block d-md-none">
                    <TranslationIcons />
                </span>
                <Navbar expand="md" as='nav' className="navbar-dark">
                    <Navbar.Brand className="header-logo">
                        <NavLink to="/">
                            <Image src={getImageUrl('logos', 'brasileirao-logo.png')} alt="Brasileirao Logo" fluid />
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="navbar-nav" className="pt-3 pt-md-0">
                        <Nav className="me-auto">
                            {
                                routes.map((route, index) => {
                                    if (index <= 2) {
                                        return (
                                            <Nav.Link className="py-1 py-md-0 px-1 px-lg-2 nav-link text-custom-light-gray mx-2 fw-bold" as={NavLink} to={route.path} key={uniqid()}>
                                                {route.route}
                                            </Nav.Link>
                                        )
                                    }
                                })
                            }

                        </Nav>

                        <Nav className="ms-auto">
                            {
                                routes.map((route, index) => {
                                    if (index >= 3) {
                                        return (
                                            <Nav.Link className="py-1 py-md-0 px-lg-2 nav-link text-custom-light-gray mx-2 fw-bold" as={NavLink} to={route.path} key={uniqid()}>
                                                {route.route}
                                            </Nav.Link>
                                        )
                                    }
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </StyledHeader>
        </>
    )
}

export default Header