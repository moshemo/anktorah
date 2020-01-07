import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import styled, { css } from 'styled-components'
import { Box, Button } from 'rebass/styled-components'
import { Close as CloseIconImport } from 'styled-icons/material/Close'
import { Menu as MenuIconImport } from 'styled-icons/material/Menu'

import { animated, useSpring } from 'react-spring'

import Scrollspy from 'react-scrollspy'

import { Container } from 'Elements/container'
import theme, { breakpoints as bp } from 'Base/theme'

const { colors } = theme

export const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false)
  const toggleOpen = () => {
    return setOpen(state => !state)
  }

  const fadeIn = useSpring({
    opacity: isOpen ? 1 : 0,
    display: isOpen ? 'flex' : 'none',
  })
  const fadeOut = useSpring({ opacity: isOpen ? 0 : 1 })

  return (
    <Nav
      as="nav"
      bg="#fafbff"
      py={6}
      px={0}
      position="sticky"
      top="0"
      width="100%"
      sx={{
        borderBottom: '1px solid',
        borderBottomColor: 'grey.lighter',
        zIndex: '9999',
      }}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo>
          anki<span>Daf</span>
        </Logo>

        <Menu style={fadeOut}>
          <form>
            <Search type="text" placeholder="Search..." />
          </form>
          <Links>
            <Link to="/">Home</Link>
            <Link to="/benefits">Benefits</Link>
            <Link to="/faq">FAQ</Link>
          </Links>
          <Button>Sign Up</Button>
        </Menu>
        {!isOpen && <MenuIcon size={32} onClick={toggleOpen} />}
        {isOpen && <CloseIcon size={32} onClick={toggleOpen} />}
        <MobileMenu style={fadeIn}>
          <MobileLinks>
            <MobileLink to="/">Home</MobileLink>
            <MobileLink to="/benefits">Benefits</MobileLink>
            <MobileLink to="/faq">FAQ 2</MobileLink>
            <MobileButton variant="text">Sign Up</MobileButton>
          </MobileLinks>
        </MobileMenu>
      </Container>
    </Nav>
  )
}

// --- STYLES
const Nav = styled(Box)`
  transition: all 0.3s ease 0s;
`

const Search = styled.input`
  border: 1px solid #eee;
  border-radius: 5px;
  outline: 0;
  padding: 12px 16px;
  margin-left: 8px;
  width: 320px;
  transition: all 0.3s ease 0s;

  :focus {
    border: 1px solid ${colors.grey.light};
  }
`

const Logo = styled(GatsbyLink)`
  color: #545454;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  user-select: none;

  span {
    color: #212121;
    margin-left: 1px;
  }
`

const Menu = styled.div`
  display: none;

  @media (min-width: ${bp.md}) {
    display: flex;
    align-items: center;
  }
`

const Links = styled.div`
  margin-left: 32px;
  margin-right: 18px;
  transition: all 0.3s ease 0s;
`

const Link = styled(GatsbyLink)`
  text-transform: uppercase;
  margin: 0 18px;

  &:not(.isCurrent) {
    color: #454545;
  }

  :hover {
    color: #121212;
  }
`

// Mobile
const MobileMenu = styled(animated.div)`
  display: flex;
  position: fixed;
  top: 70px;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fafaff;

  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px;
  width: 100%;
`
const MobileLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  height: calc(100vh - 70px);
  padding: 0;
  position: absolute;
  transition: all 0.3s ease 0s;
  width: 100%;
`

const MobileLink = styled(Link)`
  display: block;
  margin: 0;
  padding: 12px 0;
  text-align: center;
  width: 100%;
  transition: all 0.3s ease-in-out 0s;

  :hover {
    background-color: #fafafa;
  }
`

const MobileButton = styled(Button)`
  /* margin-top: 36px; */
  /* width: 150px; */
`

// Icons
const IconCSS = css`
  cursor: pointer;
  z-index: 9999;
  @media (min-width: ${bp.md}) {
    display: none;
  }
`

const MenuIcon = styled(MenuIconImport)`
  ${IconCSS}
`

const CloseIcon = styled(CloseIconImport)`
  ${IconCSS}
`
