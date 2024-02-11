import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import uniqid from "uniqid"
import { NavLink, useLocation } from "react-router-dom"
import styled from "@emotion/styled"

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
    

    margin-top: 15px;
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
        margin-top: 35px;
        .header-logo {
            img {
                max-height: 60px;
                padding-left: 0;
            }
        }
    }

    @media(min-width: 992px) {
        width: 85vw;
        box-shadow: 0 0 40px 10px #f2fafc;
        
        .header-logo {
            position: absolute;
            top: -80%;
            left: 50%;
            transform: translateX(-50%);

            img {
                max-height: 90px;
            }
        }
    }

    @media(min-width: 1200px) {
        width: 80vw;
        .header-logo {
            img {
                max-height: 100px;
            }
        }
    }

    @media(min-width: 1400px) {
        width: 70vw;
    }
`

function Header() {
    const location = useLocation()
    const [numRender, setNumRender] = useState<number>(0)
    const [expanded, setExpanded] = useState<boolean>(false)
    const navButton = useRef<HTMLButtonElement | null>(null);
    const navbarCollapseRef = useRef<HTMLDivElement | null>(null);
    const { t } = useTranslation('Header');

    const routes = [
        {
            path: "/",
            route: t('navbar.routes.home', { ns: 'Header', defaultValue: 'Home' })
        },
        {
            path: "/league",
            route: t('navbar.routes.league', { ns: 'Header', defaultValue: 'League' })
        },
        {
            path: "/teams",
            route: t('navbar.routes.teams', { ns: 'Header', defaultValue: 'Teams' })
        },
        {
            path: "/fan-club",
            route: t('navbar.routes.fanClub', { ns: 'Header', defaultValue: 'Fan Club' })
        },
        {
            path: "/events",
            route: t('navbar.routes.events', { ns: 'Header', defaultValue: 'Events' })
        },
        {
            path: "/tickets",
            route: t('navbar.routes.tickets', { ns: 'Header', defaultValue: 'Tickets' })
        }
    ]

    useEffect(() => {
        if (numRender < 1) {
            setNumRender(numRender + 1);
            setExpanded(false)
        } else {
            setExpanded(false)
            collapseNav()
        }
    }, [location])

    function collapseNav() {
        if (navButton.current !== null) {
            navButton.current.click();
        }

        if (navbarCollapseRef.current !== null) {
            navbarCollapseRef.current.click();
        }

        setExpanded(false)
    }


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
                    }}
                    className="d-block d-lg-none ">
                    <TranslationIcons />
                </span>
                <Navbar expand="lg" expanded={expanded} className="navbar-dark py-0 py-md-2" onMouseLeave={collapseNav}>
                    <Navbar.Brand className="header-logo">
                        <NavLink to="/">
                            <Image src={getImageUrl('logos', 'brasileirao-logo.png')} alt="Brasileirao Logo" fluid />
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" ref={navButton} onClick={() => setExpanded(() => !expanded)} />

                    <Navbar.Collapse id="navbar-nav" className="pt-3 pt-md-0" ref={navbarCollapseRef}>
                        <Nav className="me-auto">
                            {
                                routes.map((route, index) => {
                                    if (index <= 2) {
                                        return (
                                            <Nav.Link onClick={collapseNav} className="py-1 py-lg-0 px-md-0 px-xl-2 nav-link text-custom-light-gray mx-2 fw-bold" as={NavLink} to={route.path} key={uniqid()}>
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
                                            <Nav.Link onClick={collapseNav} className="py-1 py-lg-0 px-md-0 px-xl-2 nav-link text-custom-light-gray mx-2 fw-bold" as={NavLink} to={route.path} key={uniqid()}>
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