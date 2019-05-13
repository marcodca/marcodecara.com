import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" 
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" 
      speed={0.2} 
      offset={offset} 
      css={`z-index: 20`}
    />
    <Divider 
      speed={0.1} 
      offset={offset}
      css={`z-index: 20`}
    >
      <UpDown>  
      </UpDown>
      <UpDownWide>
      </UpDownWide>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
