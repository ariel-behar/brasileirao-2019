import uniqid from "uniqid"
import { Link as RouterLink } from "react-router-dom"

import getImageUrl from "../../utils/getImageUrl"
import grassPattern from "../../assets/img/grass-patten.jpg"

import styled from "@emotion/styled"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Image from "react-bootstrap/Image"

const StyledHeader = styled('header')`
    background-image: url(${grassPattern});
    background-repeat: repeat;
    position: fixed;
    width: 60vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 40px 10px #f2fafc;;

    margin-top: 35px;
    padding: 0 20px;
    border-radius: 50px;
    border: 3px solid #fff;

    .nav-link {
        font-family: 'copperplate', sans-serif;
        text-transform: uppercase;
    }

    .header-logo {
        max-height: 120px;
        position: absolute;

        top: -80%;
        left: 50%;
        transform: translateX(-50%);
    }
`

const routes = [
    {
        path: "/",
        route: "Home"
    },
    {
        path: "/league",
        route: "League"
    },
    {
        path: "/teams",
        route: "Teams"
    },
    {
        path: "/fan-club",
        route: "Fan Club"
    },
    {
        path: "/events",
        route: "Events"
    },
    {
        path: "/tickets",
        route: "Tickets"
    }
]

function Header() {
    return (
        <>
            {/* <Container> */}
                <StyledHeader>
                    <Navbar expand="lg" as='nav'>
                        <Navbar.Collapse id="navbar-nav">
                            
                            <Navbar.Toggle aria-controls="navbar-nav" />

                            <Navbar.Brand as={RouterLink} to='/'>
                                <Image className="header-logo" src={getImageUrl('logos', 'brasileirao-logo.png')} alt="Brasileirao Logo" />
                            </Navbar.Brand>

                            <Nav className="me-auto">
                                {
                                    routes.map((route, index) => {
                                        if (index <= 2) {
                                            return (
                                                <Nav.Link className="py-0 nav-link text-custom-light-gray mx-2 fw-bold" as={RouterLink} to={route.path} key={uniqid()}>
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
                                                <Nav.Link className="py-0 nav-link text-custom-light-gray mx-2 fw-bold" as={RouterLink} to={route.path} key={uniqid()}>
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
            {/* </Container> */}

        </>
    )
}

export default Header