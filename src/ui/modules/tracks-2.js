import React from 'react'

import styled from 'styled-components'

import { StarOfDavid } from 'styled-icons/fa-solid/StarOfDavid'
import { Torah } from 'styled-icons/fa-solid/Torah'
import { Book } from 'styled-icons/fa-solid/Book'
import { FolderOpen } from 'styled-icons/boxicons-regular/FolderOpen'
import { LibraryBooks } from 'styled-icons/material/LibraryBooks'
import { Law } from 'styled-icons/octicons/Law'

import { Container } from 'Elements/container'
import { Section } from 'Elements/section'

import theme, { breakpoints as bp } from 'Base/theme'

import { Box } from 'Elements/box'
import { Flex } from 'Elements/flex'
import { Grid } from 'Elements/grid'
import { Title, Subtitle, Text } from 'Elements/typography'

const { colors } = theme

export const Test = props => <h2>Hi</h2>

export const TrackTest = <Section>Hi there</Section>

// export const Tracks2b = () => (
//   <Section>
//     <Container>
//       <Box variant="titleSection">
//         <Subtitle variant="sectionSubTitle">Learn What You Want</Subtitle>
//         <Title variant="sectionTitle">Multiple Tracks</Title>
//       </Box>
//       <Grid
//         gridTemplateColumns={{
//           _: '1fr',
//           xs: 'repeat(auto-fill, minmax(443px, 1fr))',
//         }}
//       >
//         <Flex
//           flexShrink="0"
//           flexBasis={{ _: '90px', md: '75px', lg: '90px' }}
//           pr={20}
//         >
//           <Torah />
//         </Flex>
//         <Box>
//           <Title
//             boxSizing="border-box"
//             color="rgb(15, 33, 55)"
//             fontSize={{ _: '18px', xs: '20px' }}
//             fontWeight="400"
//             lineHeight="1.5"
//             letterSpacing="-0.025em"
//             mb={{ _: '10px', xs: '15px' }}
//             mt={0}
//           >
//             App Development
//           </Title>
//           <Text
//             boxSizing="border-box"
//             color="rgb(93, 100, 109)"
//             fontSize="15px"
//             fontWeight="400"
//             letterSpacing="-0.025em"
//             lineHeight="1.88"
//             mb="0px"
//             mt="0px"
//           >
//             Get your proof tests delivered home collect a sample from the news
//             get design.
//           </Text>
//         </Box>
//       </Grid>
//     </Container>
//   </Section>
// )
