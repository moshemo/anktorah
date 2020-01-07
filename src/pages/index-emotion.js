// import React from 'react'
// import { Link as GatsbyLink } from 'gatsby'

// import styled from '@emotion/styled'
// import { Button } from 'rebass'

// import { Search as SearchIcon } from 'styled-icons/material/Search'

// import SEO from 'Components/seo'
// import MainLayout from 'Layouts/main'
// import { minQuery } from 'Base/functions'

// const IndexPage = () => {
//   return (
//     <MainLayout>
//       <SEO title="Anki Daf - Torah Review Program" />
//       <Navbar>
//         <Container>
//           <Logo>
//             anki<span>Daf</span>
//           </Logo>
//           <Menu>
//             <Links>
//               <Link to="/">Home</Link>
//               <Link to="#mainFeatures">Main Features</Link>
//               <Link to="#faq">FAQ</Link>
//             </Links>
//             <Search>
//               <SearchForm />
//               <SearchIcon size="24" />
//             </Search>
//             <Button>Sign Up</Button>
//           </Menu>
//         </Container>
//       </Navbar>
//     </MainLayout>
//   )
// }

// export default IndexPage

// // --- STYLES
// const Navbar = styled.nav`
//   background-color: #fafbff;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//   padding: 32px 0;
//   position: fixed;
//   transition: all 0.3s ease 0s;
//   width: 100%;
//   z-index: 9999;
// `

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 0 auto;
//   width: 100%;

//   ${minQuery('sm')} {
//     max-width: 750px;
//   }
//   ${minQuery('md')} {
//     max-width: 970px;
//   }
//   ${minQuery('lg')} {
//     max-width: 1170px;
//   }
// `

// const Logo = styled(GatsbyLink)`
//   color: #545454;
//   font-size: 20px;
//   font-weight: 600;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   user-select: none;

//   span {
//     color: #212121;
//     margin-left: 1px;
//   }
// `

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
// `
// const Links = styled.div`
//   margin-right: 12px;
//   transition: all 0.3s ease 0s;
// `

// const Link = styled(GatsbyLink)`
//   margin-right: 18px;
// `

// const Search = styled.div``
// const SearchForm = styled.form``
