import Meta from '../components/meta'
import Intro from '../components/home/intro'
import Screen from '../components/screen'

export const config = { amp: true }

const Index = () => (
  <>
    <Meta />
    <Screen offset={128}>
      <Intro />
    </Screen>
  </>
)

export default Index
