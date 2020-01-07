import React from 'react'
import PropTypes from 'prop-types'

import Base from 'Base'

const MainLayout = ({ children }) => <Base>{children}</Base>

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
