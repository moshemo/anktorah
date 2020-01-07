// import React from 'react'

// import styled from 'styled-components'
// import { grid } from 'styled-system'
// import { Box, Card as RebassCard, Text } from 'rebass/styled-components'

// import { StarOfDavid } from 'styled-icons/fa-solid/StarOfDavid'
// import { Torah } from 'styled-icons/fa-solid/Torah'
// import { Book } from 'styled-icons/fa-solid/Book'
// import { FolderOpen } from 'styled-icons/boxicons-regular/FolderOpen'
// import { LibraryBooks } from 'styled-icons/material/LibraryBooks'
// import { Law } from 'styled-icons/octicons/Law'

// import { Container } from 'Elements/container'
// import { Section } from 'Elements/section'

// import theme, { breakpoints as bp } from 'Base/theme'

// const { colors } = theme

// export const Tracks = () => (
//   <Section>
//     <Container>
//       <TitleSection>
//         <Subtitle>Learn What You Want</Subtitle>
//         <Title>Multiple Tracks</Title>
//       </TitleSection>
//       <Grid
//         gridGap={24}
//         gridTemplateColumns={{
//           _: '1fr',
//           xs: 'repeat(auto-fill, minmax(260px, 1fr))',
//         }}
//       >
//         <RebassCard textAlign="center">
//           <Icon bg="#454545" p={48} borderRadius="100%">
//             <StarOfDavid
//               style={{ backgroundColor: 'lightpurple', color: 'purple' }}
//               size={48}
//             />
//           </Icon>
//           <Text as="h4">Judaism 101</Text>
//           <Text as="p">General Knowledge. Brachot. Biblical Hebrew.</Text>
//         </RebassCard>
//         <RebassCard textAlign="center">
//           <Icon
//             display="inline-flex"
//             justifyContent="center"
//             alignItems="center"
//             bg="primary.faint"
//             height="96px"
//             width="96px"
//             sx={{ borderRadius: '9999px' }}
//           >
//             <Torah style={{ color: colors.primary.dark }} size={48} />
//           </Icon>
//           <Text as="h4">Torah</Text>
//           <Text as="p">Chumash. Rashi. English & Hebrew.</Text>
//         </RebassCard>
//         <RebassCard textAlign="center">
//           <Icon bg="#454545" p={48}>
//             <Book style={{ color: 'lightblue' }} size={48} />
//           </Icon>
//           <Text as="h4">Nach</Text>
//           <Text as="p">Neviim Rishonim. Ezra. And more.</Text>
//         </RebassCard>
//         <RebassCard textAlign="center">
//           <Icon bg="#454545" p={48}>
//             <FolderOpen style={{ color: 'gold' }} size={48} />
//           </Icon>
//           <Text as="h4">Mishnayos</Text>
//           <Text as="p">Shas Mishnayos. Mishna Ba'al Peh.</Text>
//         </RebassCard>
//         <RebassCard textAlign="center">
//           <Icon bg="#454545" p={48}>
//             <LibraryBooks style={{ color: 'orange' }} size={48} />
//           </Icon>
//           <Text as="h4">Gemara</Text>
//           <Text as="p">Essentials. In-Depth. And more.</Text>
//         </RebassCard>
//         <RebassCard textAlign="center">
//           <Icon bg="#454545" p={48}>
//             <Law style={{ color: 'pink' }} size={48} />
//           </Icon>
//           <Text as="h4">Halacha</Text>
//           <Text as="p">Guidelines. Pocket Halacha. Mishna Berura.</Text>
//         </RebassCard>

//         {/* <Card icon={StarOfDavid} color="#eee" title="Judaism 101" description="General Knowledge. Brachot. Biblical Hebrew." />
//         <Card icon={Torah} iconColor="#eee" title="Torah" description="Chumash. Rashi. English & Hebrew." />
//         <Card icon={Book} iconColor="#eee" title="Nach" description="Neviim Rishonim. Ezra. And more." />
//         <Card icon={FolderOpen} iconColor="#eee" title="Mishnayos" description="Shas Mishnayos.  Mishna Ba'al Peh." />
//         <Card icon={LibraryBooks} iconColor="#eee" title="Gemara" description="Essentials.  In-Depth.  And more." />
//         <Card icon={Law} iconColor="#eee" title="Halacha" description="Guidelines. Pocket Halacha. Mishna Berura." /> */}
//       </Grid>
//     </Container>
//   </Section>
// )

// // --- STYLES
// // const Grid = styled.div`
// //   display: grid;
// //   grid-template-columns: 1fr;
// //   grid-gap: 24px;

// //   @media (min-width: ${bp.xs}) {
// //     grid-template-columns: repeat(auto-fill, minmax(443px, 1fr));
// //   }
// // `

// const Grid = styled(Box)`
//   display: grid;
//   ${grid}
// `

// const TrackBase = styled.div`
//   background-color: #fafaff;
//   min-height: 450px;
//   padding-top: 65px;
//   padding-bottom: 65px;
// `

// const TitleSection = styled.div`
//   max-width: 352px;
//   margin: 0px auto 58px;
//   text-align: center;
//   width: 100%;
// `

// const Title = styled.h2`
//   color: ${colors.offBlack};
//   font-size: 30px;
//   font-weight: 700;
//   letter-spacing: -1px;
//   line-height: 36px;
//   margin: 0px;
// `

// const Subtitle = styled.h5`
//   color: ${colors.primary.accent.dark};
//   font-size: 14px;
//   font-weight: 700;
//   letter-spacing: 1.5px;
//   line-height: 24px;
//   margin-bottom: 12px;
//   text-transform: uppercase;
// `

// const Icon = styled(Box)``

// // card
// const Card = (props, { iconColor, icon, title, description }) => {
//   const IconName = icon
//   return (
//     <CardBase {...props}>
//       <CardInner>
//         <CardIcon>
//           <IconName size={48} color={iconColor} />
//         </CardIcon>
//         <CardContent>
//           <CardTitle>{title}</CardTitle>
//           <CardDescription>{description}</CardDescription>
//         </CardContent>
//       </CardInner>
//     </CardBase>
//   )
// }

// const CardBase = styled(Box)`
//   flex-basis: 50%;
// `

// const CardInner = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;

//   /* background-color: #fff;
//   box-shadow: 0 25px 70px 0 rgba(0, 0, 0, 0.07); */

//   padding: 42px 24px;

//   @media (min-width: ${bp.xs}) {
//     flex-direction: row;
//     flex-wrap: nowrap;
//     justify-content: space-between;
//   }
// `

// const CardContent = styled.div`
//   text-align: center;
//   padding-left: 12px;
//   padding-right: 18px;

//   @media (min-width: ${bp.xs}) {
//     text-align: left;
//   }
// `

// const CardIcon = styled.i`
//   font-size: 48px;
//   padding: 24px;

//   svg {
//     color: ${props => props.color};
//     fill: ${props => props.color};
//   }
// `

// const CardTitle = styled.h4`
//   color: ${colors.offBlack};
//   font-size: 20px;
//   line-height: 1.4;
//   font-weight: 600;
//   margin-bottom: 0.5em;
// `

// const CardDescription = styled.span`
//   color: ${colors.grey.darker};
//   font-size: 16px;
//   font-weight: 400;
// `
