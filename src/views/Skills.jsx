import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Divider, DividerMiddle } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { Blob, ResponsiveBlob } from "../components/Blobs";
import WebTechs from "../components/WebTechs";
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";
import { media } from '../styles/utils';

const WebTechsWrapper = styled.div`
  ${tw`absolute w-5/6 flex items-center justify-center h-auto`};
  top: 60%;
  ${media.md`top: 75%;`}
  ${media.sm`top: 85%;`}
`;

const Skills = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg={`linear-gradient(to right, ${colors["grey-darkest"]} 0%, ${
        colors["grey-dark"]
      } 100%)`}
      speed={-0.2}
      offset={`${offset}`}
      factor={2.1}
      

    />
    <Content speed={0} offset={`${offset}.7`} factor={1}>
      <Inner>{children}</Inner>
      <WebTechsWrapper>
        <WebTechs />
      </WebTechsWrapper>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown />
      <ResponsiveBlob
        size={10}
        left="5%"
        top="13%"
        opacity="0.6"
        border="3px solid black"
      />
      <UpDownWide>
        <Blob
          size="110px"
          left="80%"
          top="-10%"
          opacity="0.6"
          border="3px solid black"
          color={colors["black"]}
          back
        />
      </UpDownWide>
      <ResponsiveBlob
        size={5}
        left="85%"
        top="95%"
        opacity="0.2"
        border="10px solid black"
        empty
        hiddenMobile
      />
    </Divider>
  </>
);

export default Skills;

Skills.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
