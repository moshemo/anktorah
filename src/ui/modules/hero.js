import React from 'react'

import styled from 'styled-components'
import { Button, Text } from 'rebass/styled-components'

import Scrollspy from 'react-scrollspy'

import { Container } from 'Elements/container'
import { Section } from 'Elements/section'
import { VideoPlayer } from 'Components/video-player'
import { breakpoints as bp } from 'Base/theme'

import VideoCoverImage from 'Images/laptop-desk--640x360.jpg'

export const Hero = () => (
  <Section bg="#fafbff">
    <Container
      display="flex"
      alignItems="center"
      justifyContent={{ _: 'center', md: 'space-between' }}
      flexWrap={{ _: 'wrap', md: 'nowrap' }}
      textAlign={{ _: 'center', md: 'left' }}
    >
      <Content>
        <Title as="h1">Take the Anki Challenge</Title>
        <Blurb>
          Take your learning to a whole new level with a review program tailored
          to your skill and schedule.
        </Blurb>
        <Action>
          <Button>Sign Up</Button>
          <Button variant="text">Learn More</Button>
        </Action>
      </Content>
      <Video>
        <VideoContent>
          <VideoPlayer
            controls
            light={VideoCoverImage}
            url="https://player.vimeo.com/video/240066239"
          />
        </VideoContent>
      </Video>
    </Container>
  </Section>
)

// --- STYLES
const Content = styled.div`
  flex-basis: 500px;
`

const Title = styled(Text)`
  color: #002233;
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 20px;

  @media (min-width: ${bp.lg}) {
    font-size: 44px;
    line-height: 56px;
    margin-bottom: 24px;
  }
`

const Blurb = styled(Text)`
  color: #667788;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  margin: 0 auto;
  max-width: 450px;

  @media (min-width: ${bp.md}) {
    margin: 0;
  }
`

const Action = styled.div`
  flex-basis: 100%;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 36px;
`

const Video = styled.div`
  flex-shrink: 0;
  flex-basis: 75%;
  margin-top: 40px;

  @media (min-width: ${bp.xs}) {
    flex-basis: 62.5%;
    margin-top: 50px;
  }

  @media (min-width: ${bp.md}) {
    flex-basis: 46%;
  }
`

const VideoContent = styled.div``
