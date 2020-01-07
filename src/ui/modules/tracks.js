import React from 'react'

import styled from 'styled-components'

import { Container } from 'Elements/container'
import { Grid } from 'Elements/grid'
import { Section } from 'Elements/section'
import { ImageCard as Card } from 'Components/cards'
import { IntroTitles } from 'Components/titles'

import judaismImage from 'Images/judaism-450.jpg'
import gemaraImage from 'Images/gemara-5b-250.jpg'
import torahImage from 'Images/torah-2-250.jpg'
import nachImage from 'Images/nach-2-250.jpg'
import halachaImage from 'Images/torah-250.jpg'
import mishnaImage from 'Images/mishna-2-250.jpg'

import theme, { breakpoints as bp } from 'Base/theme'
const { colors } = theme

export const Tracks = () => (
  <Section>
    <Container>
      <IntroTitles subtitle="Learn What You Want" title="Multiple Tracks" />
      <Grid autoFit="250px" gridGap={24}>
        <Card
          level="Beginner"
          imgPos="0 0"
          image={judaismImage}
          title="Judaism 101"
          description="General knowledge questions, biblical hebrew and more."
        />
        <Card
          level="Intermediate"
          image={torahImage}
          imgPos="-50px 50%"
          imgSize="200%"
          title="Torah"
          description="Chumash as well as Chumash with Rashi.  English & Hebrew tracks."
        />
        <Card
          level="Beginner"
          imgPos="0% 58%"
          imgSize="auto"
          image={nachImage}
          title="Nach"
          description="Yeshua, Shoftim, Shmuel and Melachim.  Megillas Esther, Ezra & Nechyemia"
        />
        <Card
          level="Intermediate"
          imgPos="0 0"
          image={mishnaImage}
          title="Mishnayos"
          description="Shas Mishnayos as well as a 'Mishnah Ba'al Peh' track"
        />
        <Card
          level="Advanced"
          imgPos="0px 0%"
          image={gemaraImage}
          title="Gemara"
          description="The essentials of Gemara, Gemara Ba'al Peh and a comprehensive track"
        />
        <Card
          level="Intermediate"
          image={halachaImage}
          imgPos="0 37%"
          title="Halacha"
          description="Guidelines, 'Pocket Halacha' and the Mishnah Berura."
        />
      </Grid>
    </Container>
  </Section>
)
