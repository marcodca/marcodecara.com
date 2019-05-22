import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import githubIcon from "../images/icons/github-icon.svg";
import logo from "../images/logo.png";
import Modal from "react-responsive-modal";

const StyledFooter = styled.footer`
  ${tw`text-center w-full md:w-2/3 lg:w-1/3 flex justify-around items-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Ul = styled.ul`
  ${tw`leading-relaxed font-sans p-4`}
  list-style : none;
`

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledFooter>
      <a href="https://github.com/marcodca/marcodecara.com">
        <img width="30px" src={githubIcon} />
      </a>
      <span css={tw`flex items-center space-between`}>
        Made by
        <a href="https://github.com/marcodca">
          <img
            width="30px"
            src={logo}
            css={`
              ${tw`ml-1 md:ml-3`} filter : invert(100%)
            `}
          />
        </a>
      </span>
      <a
        href="#"
        onClick={event => {
          event.preventDefault();
          setOpen(true);
        }}
      >
        Credits
      </a>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <Ul>
          <li>
            Project made in <a href="https://www.reactjs.org/">React</a> and
            <a href="https://www.gatsbyjs.org/"> GatsbyJs</a>.
          </li>
          <li>
            Gatsby starter  
            <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara"> Cara </a>
            by <a href="https://www.lekoarts.de/"> Lekoarts</a>.
          </li>
          <li>
            <a href="https://github.com/KyleAMathews/typefaces">Typefaces</a> by
            <a href="https://www.bricolage.io/"> Kyle Mathews</a>
          </li>
          <li>
            <a href="https://www.styled-components.com/">styled-components</a>
          </li>
          <li>
            <a href="https://tailwindcss.com/"> Tailwind css</a>
          </li>
          <li>
            <a href="https://www.react-spring.io/"> React spring</a>
          </li>
          <li>
            Background by
            <a href="https://www.svgbackgrounds.com/"> SVG backgrounds</a>
          </li>
          <li>
            Icons by <a href="https://www.flaticon.com/"> flat icon</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-blob">react-blob</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-responsive-modal">react-responsive-modal</a>
          </li>
          <li>
            <a href="https://realfavicongenerator.net/">RealFaviconGenerator</a>
          </li>
        </Ul>
      </Modal>
    </StyledFooter>
  );
};

export default Footer;
