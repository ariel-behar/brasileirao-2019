import arielbeharLogo from "../../assets/img/logos/arielbehar-logo.png"

function Footer() {
    return (
        <footer className="w-100 d-flex flex-row justify-content-center ">
            <p className="text-custom-dark-gray fw-bold">
                &copy; 2020 All Rights Reserved&nbsp;
                <a href="www.arielbehar.com" target="_blank" rel="noreferrer">Ariel Behar</a>
                <img className="ms-1" style={{ height: '20px' }} src={arielbeharLogo} alt="Ariel Behar Logo" />
            </p>
        </footer>
    )
}

export default Footer