import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import githubIcon from "../images/icons/github-icon.svg";
import logo from "../images/logo.png";
import Modal from "react-responsive-modal";

const StyledFooter = styled.footer`
  ${tw`text-center w-full md:w-2/3 lg:w-1/3 flex justify-around items-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

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
      <a href="#" onClick={(event) => {
          event.preventDefault();
          setOpen(true);
      }}>
        Credits
      </a>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </StyledFooter>
  );
};

export default Footer;
