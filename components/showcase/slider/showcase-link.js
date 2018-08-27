import Link from 'next/link'

function ShowcaseLink({ item, children }) {
  return (
    <Link
      href={`/read?item=${item.internalUrl}`}
      as={`/read/${item.internalUrl}`}
      replace
    >
      {children}
    </Link>
  )
}

export default ShowcaseLink
