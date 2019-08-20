import Link from 'next/link'
import { useAmp } from 'next/amp'

const ShowcaseLink = ({ item, children }) => {
  const isAmp = useAmp()
  return (
    <Link
      href={`/read?item=${item.internalUrl}${isAmp ? '&amp=1' : ''}`}
      as={`/read/${item.internalUrl}${isAmp ? '?amp=1' : ''}`}
      replace
    >
      {children}
    </Link>
  )
}

export default ShowcaseLink
