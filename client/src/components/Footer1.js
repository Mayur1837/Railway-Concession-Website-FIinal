import React from "react";
import { SocialIcon } from 'react-social-icons'
import { FooterLink2 } from "./footer-links.js";
import { Link } from "react-router-dom";
import "../styles/Footer1.css"
import vjtiimg from "../vjti logo.png";
// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer1 = () => {
  return (

        <div className="temp" style={{"font":"-moz-initial"}}>

    © Copyright 2024 VJTI. All rights reserved.

    </div>
  );
};

export default Footer1;
