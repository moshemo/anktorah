import React from 'react'
import SEO from 'Components/seo'
import MainLayout from 'Layouts/main'

import { Navbar } from 'Modules/navbar'
import { Hero } from 'Modules/hero'
import { Features } from 'Modules/features'
import { Tracks } from 'Modules/tracks'

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO title="Anki Daf - Torah Review Program" />

      <Navbar />
      <Hero />
      <Features />
      <Tracks />
    </MainLayout>
  )
}

export default IndexPage
