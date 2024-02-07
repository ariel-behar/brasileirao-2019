import styled from "@emotion/styled"
import arielbeharLogo from "../../assets/img/logos/arielbehar-logo.png"

const StyledFooter = styled('footer')`
    position: absolute;
    bottom: 0;
    p {
        text-shadow: 1px 1px 1px #353535;
        a {
            text-decoration: none;
            text-shadow: 1px 1px 1px #353535;
            color: #969696;
            &:hover {
                color: #b6b5b5;
            }
        }
    }
`

function Footer() {
    return (
        <StyledFooter className="w-100 d-flex flex-row justify-content-center ">
            <p className="text-custom-light-gray fw-bold">
                &copy; 2020 All Rights Reserved&nbsp;
                <a  href="www.arielbehar.com" target="_blank" rel="noreferrer">Ariel Behar</a>
                <img className="ms-1" style={{ height: '20px' }} src={arielbeharLogo} alt="Ariel Behar Logo" />
            </p>
        </StyledFooter>
    )
}

export default Footer