import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide } from "../styles/animations";
import { Blob, ResponsiveBlob, DoubleBlob } from "../components/Blobs";
import { media } from "../styles/utils";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

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
          left="56%"
          top="10%"
          shadow
          css={`
            ${media.md`top: 0`};
          `}
        />
      </UpDown>
      <UpDownWide>
        <Blob
          size="90px"
          left="0%"
          top="45%"
          opacity="0.6"
          border="3px solid black"
          color={colors["black"]}
          css={`
            ${media.lg`display: none`};
          `}
        />
        <Blob
          size="90px"
          left="65%"
          top="85%"
          opacity="0.6"
          border="3px dotted black"
          empty
        />
      </UpDownWide>
      <ResponsiveBlob
        size={10}
        left="5%"
        top="8%"
        opacity="0.6"
        border="3px solid black"
        empty
      />
      <Blob
        size="30px"
        left="65%"
        top="75%"
        opacity="0.8"
        color={colors["grey-light"]}
      />
      <ResponsiveBlob
        size={40}
        hiddenMobile
        left="80%"
        top="-3%"
        opacity="0.5"
        color={colors["grey-dark"]}
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
