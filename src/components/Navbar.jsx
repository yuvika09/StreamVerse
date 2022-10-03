// import React from "react";
// import styled from "styled-components";
// import logo from "../assets/logonew.png";

// export default function Navbar({ isScrolled }) {
//     const links = [
//         { name: "Home", link: "/"},
//         { name: "TV Shows", link: "/tv"},
//         { name: "Movies", link: "/movies"},
//         { name: "My List", link: "/mylist"}
//     ];
//     const [showSearch, setSearch] = useState(false);
//     const [inputHover, setInputHover] = useState(false);

//     return (
//         <Container>
//             <nav className = {`flex ${isScrolled ? "scrolled" : ""}`}>
//                 <div className="left flex a-centre">
//                     <div className="brand flex a-center j-center">
//                         <img src = {logo} alt = "logo"/>
//                     </div>
//                  <ul classname="links flex">
//                     links.map((name,link)=>{
//                         return(
//                         <li key><Link to={Link}>{name}</Link></li>
//                             )
//                     })
//                  </ul>
//                 </div>
//                 <div className="right flex a-center">
//                     <div className= {'search ${showSearch ? "show-search" : ""}`}>
//                     <button>

//                     </div>
//                 </div>
//             </nav>
//         </Container>
//     )
// }

// const Container = styled.div``;