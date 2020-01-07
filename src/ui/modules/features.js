import React from 'react'

import styled from 'styled-components'

import {
  FaRegCalendarCheck as CalendarCheck,
  FaRegClock as Clock,
  FaRegLightbulb as LightBulb,
  FaRegSmile as Smile,
  FaStream as Stream,
} from 'react-icons/fa'

import { AiOutlineDashboard as Timer } from 'react-icons/ai'

import theme, { breakpoints as bp } from 'Base/theme'
import { Container } from 'Elements/container'
import { Grid } from 'Elements/grid'
import { Section } from 'Elements/section'
import { IconCard as Card } from 'Components/cards'
import { IntroTitles } from 'Components/titles'

const { colors } = theme

export const Features = () => (
  <Section>
    <Container>
      <IntroTitles subtitle="The Anki Advantage" title="Main Benefits" />
      <Grid autoFit="443px" gridGap={24}>
        <Card
          icon={LightBulb}
          color="#73d13d"
          title="Remember Anything"
          description="Review questions on a schedule designed to help you remember everything that you have learned"
        />
        <Card
          icon={Timer}
          color="#ffa940"
          title="Go at Your Own Pace"
          description="You determine the pace at which you review your learning.  Daf Yomi, Amud Yomi, Daf Shavua, etc"
        />
        <Card
          icon={Clock}
          color="#ffc53d"
          title="Minimal Time Commitment"
          description="Even a daily 5 minute review will significantly improve your ability to remember what you have learned"
        />
        <Card
          icon={CalendarCheck}
          color="#f759ab"
          title="Review Anywhere"
          description="ANKI is compatible with all modern computers and mobile devices.  Review on the Go!"
        />
        <Card
          icon={Stream}
          color="#ff4d4f"
          title="Work at Your Level"
          description="With two levels of questions, you can either focus on the main points or work on mastering a perek or entire Mesechta"
        />
        <Card
          icon={Smile}
          color="#40a9ff"
          title="100% Free"
          description="The ANKI program is a free download (except on iPhones) and AnkiTorah provides all of the questions free of charge"
        />
      </Grid>
    </Container>
  </Section>
)
