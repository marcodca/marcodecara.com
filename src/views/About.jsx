import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";
import { Blob, ResponsiveBlob } from "../components/Blobs";

const About = ({ children, offset }) => (
  <>
    <Divider
      bg={colors['blue-grey']}
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    >
      <ResponsiveBlob
        size={7}
        left="75%"
        top="15%"
        opacity="0.6"
        border="3px solid black"
        hiddenMobile
      />
    </Divider>
    <Divider
      speed={0.1}
      offset={offset}
      css={`
        z-index: 2;
      `}
    >
      <UpDown>
        <Blob
          size="80px"
          left="4%"
          top="5%"
          opacity="0.7"
          border="5px dotted grey"
          color={colors["grey-darkest"]}
          back
        />
        <Blob
          size="80px"
          left="55%"
          top="85%"
          opacity="0.7"
          border="5px solid white"
          color={colors["grey-dark"]}
          back
        />
      </UpDown>
      <UpDownWide />
      <ResponsiveBlob
        size={25}
        left="45%"
        top="6%"
        opacity="0.7"
        color={colors["grey-dark"]}
      />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
