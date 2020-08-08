import Page from '~/components/page'
import Slider from '~/components/showcase/slider'
import { sortOrder, mapping } from '../../showcase-manifest'
import { useRouter } from 'next/router'
import Screen from '~/components/screen'

export const config = { amp: 'hybrid' }

// Returns the right slide index based on the current position
function normalizeSlideIndex(arr, index, fn) {
  // The logic doesn't care about the implementation, just the result
  const result = fn(index)

  // If the result is bigger than the length of the array we return the start of the array
  if (result > arr.length - 1) {
    return 0
  }

  // If the result is lower than the start of the array we return the end of the array
  if (result < 0) {
    return arr.length - 1
  }

  // If the result is within the array parameters we return it
  return result
}

// Since objects don't allow for a sort order we have to map an array to the object
function mapIndexToRoute(index) {
  const route = sortOrder[index]
  return mapping[route]
}

function calculateSlides(sortOrder, route) {
  let currentSlideIndex = sortOrder.indexOf(route)
  if (currentSlideIndex === -1) {
    currentSlideIndex = 0
  }
  const previousSlideIndex = normalizeSlideIndex(
    sortOrder,
    currentSlideIndex,
    x => x - 1
  )
  const nextSlideIndex = normalizeSlideIndex(
    sortOrder,
    currentSlideIndex,
    x => x + 1
  )
  return {
    currentSlide: mapIndexToRoute(currentSlideIndex),
    previousSlide: mapIndexToRoute(previousSlideIndex),
    nextSlide: mapIndexToRoute(nextSlideIndex)
  }
}

const Showcase = () => {
  const router = useRouter()
  const { item } = router.query
  const { currentSlide, previousSlide, nextSlide } = calculateSlides(
    sortOrder,
    item
  )
  return (
    <Page bg="#fafafa">
      <Screen offset={144}>
        <Slider
          currentSlide={currentSlide}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
        />
      </Screen>
    </Page>
  )
}

export default Showcase

export const getStaticPaths = () => {
  const paths = sortOrder.map(item => ({ params: { item } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const props = mapping[params.item]
  return { props }
}
