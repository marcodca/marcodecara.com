import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import { colors, screens } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide } from "../styles/animations";
import { Blob, ResponsiveBlob } from "../components/Blobs";

console.log(screens)

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const DoubleBlob = props => (
  <ResponsiveBlob
      color={props.outerColor}
      size={props.size}
      top={props.top}
      left={props.left}
      shadow={props.shadow}
      css={` 
          @media (max-width: ${screens.sm}) {
          top: 0;
        }`
      }
  >
    <Blob 
      color={props.innerColor}
      size="80%"
    />
  </ResponsiveBlob>
);

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <ResponsiveBlob
          size={10}
          left="15%"
          top="77%"
          opacity="0.9"
          border="1px solid black"
          color={colors.white}
        />
        <DoubleBlob 
          outerColor={"black"}
          innerColor={"white"}
          size={20}
          left="52%"
          top="10%"
          shadow
        />
      </UpDown>
      <UpDownWide>
        <Blob
          size="70px"
          left="5%"
          top="-5%"
          opacity="0.6"
          border="3px solid black"
          empty
        />
      </UpDownWide>
      <Blob
        size="30px"
        left="65%"
        top="75%"
        opacity="0.8"
        color={colors["black"]}
      />
      <ResponsiveBlob
        size={40}
        hiddenMobile
        left="80%"
        top="-3%"
        opacity="0.5"
        color={colors['grey-dark']}
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
