import React from "react";
import { SocialIcon } from 'react-social-icons'
import { FooterLink2 } from "./footer-links.js";
import { Link } from "react-router-dom";
import "../styles/Footer.css"
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

const Footer = () => {
  return (
    // <div className="bg-richblack-800" style={{ marginTop: "300px",border: '1px solid black'}}>
    //   <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
    //     <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
    //       {/* Section 1 */}
    //       <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
    //         <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
    //           <div className="flex flex-col gap-2">
    //             {["About", "Careers", "Affiliates"].map((ele, i) => {
    //               return (
    //                 <div
    //                   key={i}
    //                   className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
    //                 >
    //                   <Link to={ele.toLowerCase()}>{ele}</Link>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //           <div className="flex gap-3 text-lg">
    //             <FaFacebook />
    //             <FaGoogle />
    //             <FaTwitter />
    //             <FaYoutube />
    //           </div>
    //           <div></div>
    //         </div>

    //         <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
    //           <h1 className="text-richblack-50 font-semibold text-[16px]">
    //             Resources
    //           </h1>

    //           <div className="flex flex-col gap-2 mt-2">
    //             {Resources.map((ele, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
    //                 >
    //                   <Link to={ele.split(" ").join("-").toLowerCase()}>
    //                     {ele}
    //                   </Link>
    //                 </div>
    //               );
    //             })}
    //           </div>

    //           <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
    //             Support
    //           </h1>
    //           <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
    //             <Link to={"/help-center"}>Help Center</Link>
    //           </div>
    //         </div>

    //         <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
    //           <h1 className="text-richblack-50 font-semibold text-[16px]">
    //             Plans
    //           </h1>

    //           <div className="flex flex-col gap-2 mt-2">
    //             {Plans.map((ele, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
    //                 >
    //                   <Link to={ele.split(" ").join("-").toLowerCase()}>
    //                     {ele}
    //                   </Link>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //           <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
    //             Community
    //           </h1>

    //           <div className="flex flex-col gap-2 mt-2">
    //             {Community.map((ele, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
    //                 >
    //                   <Link to={ele.split(" ").join("-").toLowerCase()}>
    //                     {ele}
    //                   </Link>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Section 2 */}
    //       <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
    //         {FooterLink2.map((ele, i) => {
    //           return (
    //             <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
    //               <h1 className="text-richblack-50 font-semibold text-[16px]">
    //                 {ele.title}
    //               </h1>
    //               <div className="flex flex-col gap-2 mt-2">
    //                 {ele.links.map((link, index) => {
    //                   return (
    //                     <div
    //                       key={index}
    //                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
    //                     >
    //                       <Link to={link.link}>{link.title}</Link>
    //                     </div>
    //                   );
    //                 })}
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
    //     {/* Section 1 */}
    //     <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
    //       <div className="flex flex-row">
    //         {BottomFooter.map((ele, i) => {
    //           return (
    //             <div
    //               key={i}
    //               className={` ${
    //                 BottomFooter.length - 1 === i
    //                   ? ""
    //                   : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
    //               } px-3 `}
    //             >
    //               <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
    //                 {ele}
    //               </Link>
    //             </div>
    //           );
    //         })}
    //       </div>

    //       <div className="text-center">
    //         <h1 className="text-caribbeangreen-100 text-lg">
    //           Made with ❤️ by Rohan Nagrut © 2023 Runtime Educator's
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <footer class="footer-distributed">

<div class="footer-left">

  {/* <h3>Company<span>logo</span></h3> */}

<img src={vjtiimg} alt="LOGO" style={{
                  display: "block",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  " height": "100px",
                  width: "70px",
                }} />
  <p class="footer-links">
    <a href="#" class="link-1">Home</a>
    
    <a href="#">Blog</a>
  
    <a href="#">Pricing</a>
  
    <a href="#">About</a>
    
    <a href="#">Faq</a>
    
    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name">VJTI Mumbai © 1887</p>
</div>

<div class="footer-center">
{/* H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019  */}
  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>H R Mahajani Rd</span> Matunga, Mumbai, Maharashtra 400019 </p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+91 8374097238</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:dean_admin@vjti.ac.in">dean_admin@vjti.ac.in</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the VJTI</span>
    VJTI Mumbai (estd. in 1887 as Victoria Jubilee Technical Institute) has pioneered India’s Engineering education, research and training ecosystem. Pre-independence, VJTI had been instrumental in driving industrial growth throughout united India. Post-independence, VJTI played a pivotal role in setting up IITs and RECs of India and strengthened technology excellence of country.
  </p>

  <div class="footer-icons">

    {/* <a href="#"><i class="fa fa-facebook"></i></a> */}
    <SocialIcon network="instagram"target="_blank" url="https://www.instagram.com/vjtistudentactivities?igsh=b3prMno1ZmgyMDZq" />
    <SocialIcon network="twitter"target="_blank" url="https://twitter.com/i/flow/login" />
    <SocialIcon network="linkedin"target="_blank" url="https://www.linkedin.com/school/veermata-jijabai-technological-institute/ " />
    <SocialIcon network="google" target="_blank"url="https://vjti.ac.in/" />
    {/* <a href="twitter"><i class="fa fa-twitter"></i></a>
    <a href="linkedin"><i class="fa fa-linkedin"></i></a>
    <a href="github"><i class="fa fa-github"></i></a> */}

  </div>

</div>

</footer>
    </div>
  );
};

export default Footer;
