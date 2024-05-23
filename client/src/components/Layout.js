import React, { useState } from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";

import {
  Banner,
  BannerButton,
  BannerContent,
  BannerFlag,
  BannerGuidance,
  BannerHeader,
  BannerIcon,
  Button,
  Footer,
  Address,
  FooterNav,
  Logo,
  Icon,
  MediaBlockBody,
} from "@trussworks/react-uswds";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

import flagImg from "../Assets/download.png";
import dotGovIcon from "../Assets/govicon.svg";
import httpsIcon from "../Assets/secureicon.svg";

import Footerbyme from "./Footer";
const Layout = ({ children }) => {
  // const { user } = useSelector((state) => state.user);
  // console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };
  // const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  return (
    <>
      {" "}
      <Banner
        className="bg-white "
        style={{marginTop: "-50px", textDecoration:"none"}}
        aria-label="Official website of the state department of something specific"
      >
        <div className="main">
          <BannerHeader
            isOpen={isOpen}
            flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
            headerText="This is an official website of the state department of something specific"
            headerActionText="Here's how you know"
          >
            <BannerButton
              isOpen={isOpen}
              aria-controls="custom-banner"
              onClick={() => {
                setIsOpen((previousIsOpen) => !previousIsOpen);
              }}
            >
              Here&apos;s how you know
            </BannerButton>
          </BannerHeader>
          <BannerContent id="custom-banner" isOpen={isOpen}>
            <div className="grid-row grid-gap-lg">
              <BannerGuidance className="tablet:grid-col-6">
                <BannerIcon src={dotGovIcon} alt="" />
                <MediaBlockBody>
                  <p>
                    <strong>Official websites use .gov</strong>
                    <br />A <strong>.gov</strong> website belongs to an official
                    government organization in the United States.
                  </p>
                </MediaBlockBody>
              </BannerGuidance>
              <BannerGuidance className="tablet:grid-col-6">
                <BannerIcon src={httpsIcon} alt="" />
                <MediaBlockBody>
                  <p>
                    <strong>Secure .gov websites use HTTPS</strong>
                    <br />A{" "}
                    <strong>
                      lock (<Icon.Lock aria-label="Locked padlock icon" />)
                    </strong>{" "}
                    or <strong>https://</strong> means you&apos;ve safely
                    connected to the .gov website. Share sensitive information
                    only on official, secure websites.
                  </p>
                </MediaBlockBody>
              </BannerGuidance>
            </div>
          </BannerContent>
          <div className="layout" >
            <div className="content" >
              <div className="header">
                <div className="header-content" style={{ cursor: "pointer" ,marginRight:"0px"}}>
                  <Badge
                    // count={user && user.notifcation.length}
                    onClick={() => {
                      navigate("/notification");
                    }}
                  >
                    <i class="fa-solid fa-bell"></i>
                  </Badge>
                  {/* <Link to="/">{user?.name}</Link> */}
                </div>
              </div>
              <div className="body" style={{marginLeft:"0px"}}>{children}</div>
            </div>
          </div>
        </div>
      </Banner>
    </>
  );
};

export default Layout;