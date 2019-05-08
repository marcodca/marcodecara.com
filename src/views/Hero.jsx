import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide } from "../styles/animations";
import { Blob, ResponsiveBlob } from "../components/Blobs";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;
const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <ResponsiveBlob
          size={10}
          left="15vw"
          top="77vh"
          opacity="0.9"
          border="1px solid black"
          color={colors.white}
        />
      </UpDown>
      <UpDownWide>
        <Blob
          size="70px"
          left="5vw"
          top="-5vh"
          opacity="0.6"
          border="3px solid black"
          empty
        />
      </UpDownWide>
      <Blob
        size="30px"
        left="35vw"
        top="75vh"
        opacity="0.8"
        color={colors["black"]}
      />
      <ResponsiveBlob
        size={40}
        left="80vw"
        top="-3vh"
        opacity="0.6"
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
