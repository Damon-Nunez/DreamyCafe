import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../images/logo.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <div className="navDiv">
        
		<header className="navbarHeader">
			<a href="/"><img className="logo" src={logo}/></a>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/menu">Menu</a>
				<a href="/aboutus">About Us</a>
				<a href="/books">Books </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        </div>
	);
}

export default Navbar;