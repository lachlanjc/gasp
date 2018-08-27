import React from 'react'
import Page from '../components/page'
import Intro from '../components/home/intro'
import Screen from '../components/screen'

const Index = () => (
  <Page>
    <Screen offset={128}>
      <Intro />
    </Screen>
  </Page>
)

export default Index
