"use client";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUp, FaBars } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Drawer from "../ui/drawer/Drawer";

const Navbar = () => {
	const [show, setShow] = useState("");
	const [transparent, setTransparent] = useState(classes.bgTransparent);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const showScrollButton = () => setShow(classes.show);

	const hideScrollButton = () => setShow("");

	const makeTransparent = () => setTransparent(classes.bgTransparent);

	const removeTransparency = () => setTransparent("");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY < 150) makeTransparent();
			else removeTransparency();

			if (window.scrollY < 500) hideScrollButton();
			else showScrollButton();
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const linkTitles = ["home", "portfolio", "experience", "about", "contact"];

	const navLinks = linkTitles.map((title) => {
		return (
			<li className={classes.menuItem} key={title}>
				<Link
					to={title}
					spy={true}
					offset={-64}
					duration={200}
					activeClass={title !== "home" ? classes.active : ""}
				>
					{`${title[0].toUpperCase()}${title.substring(1)}`}
				</Link>
			</li>
		);
	});
	navLinks.push(
		<li className={classes.menuItem} key="blog">
			<a href="https://blog.mazedul.dev" target="_blank" rel="noreferrer">
				<span>Blog</span>
				<FiArrowUpRight style={{ marginLeft: "2px" }} />
			</a>
		</li>,
	);

	const drawerNavLinks = linkTitles.map((title) => {
		return (
			<Link
				to={title}
				key={title}
				onClick={toggleDrawer}
				activeClass={classes.active}
				spy={true}
				offset={-64}
				duration={200}
				className={classes.menuItem}
			>
				{`${title[0].toUpperCase()}${title.substring(1)}`}
			</Link>
		);
	});
	drawerNavLinks.push(
		<a
			href="https://blog.mazedul.dev"
			target="_blank"
			key="blog"
			onClick={toggleDrawer}
			className={classes.menuItem}
			rel="noreferrer"
		>
			<span>Blog</span>
			<FiArrowUpRight style={{ marginLeft: "2px" }} />
		</a>,
	);

	return (
		<>
			<a
				onClick={() => scroll.scrollToTop({ duration: 200 })}
				className={`${classes.scrollUpBtn} ${show}`}
			>
				<FaArrowUp />
			</a>
			<nav className={`${classes.navContainer} ${transparent}`}>
				<ul className={classes.menu}>{navLinks}</ul>
				<div className={classes.bars} onClick={toggleDrawer}>
					<FaBars className={classes.menuIcon}></FaBars>
				</div>
			</nav>
			<Drawer isOpen={isDrawerOpen} toggle={toggleDrawer}>
				<div className={classes.drawerMenu}>{drawerNavLinks}</div>
			</Drawer>
		</>
	);
};

export default Navbar;
