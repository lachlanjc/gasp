import Link from 'next/link'

const ShowcaseLink = ({ item, children }) => (
  <Link
    href={`/read?item=${item.internalUrl}`}
    as={`/read/${item.internalUrl}`}
    replace
  >
    {children}
  </Link>
)

export default ShowcaseLink
