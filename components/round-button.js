import Link from 'next/link'

export default ({ children, color, href, className }) => (
  <Link href={href}>
    <a className={`${className ? className + ' ' : ''}${color}`}>
      <span>{children}</span>
      <style jsx>{`
        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 10px;
          width: 256px;
          height: 48px;
          border-radius: 48px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.125);
          cursor: pointer;
          text-decoration: none;
        }
        span {
          font-size: 20px;
          line-height: 24px;
          height: 24px;
        }
        .white {
          background-color: #ffffff;
          color: #666;
          transition: all 0.2s ease;
        }
        .primary {
          background-color: #ec008c;
          color: #ffffff;
          font-weight: 800;
          transition: all 0.2s ease;
        }
        a.white:hover {
          background-color: #666;
          color: #ffffff;
        }
        a.primary:hover {
          background-color: #ffffff;
          color: #ec008c;
        }
      `}</style>
    </a>
  </Link>
)
