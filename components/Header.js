import Link from 'next/link'
import { Button } from 'reactstrap';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <Button>Home</Button>
    </Link>
    <Link href="/about">
      <Button>About</Button>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        color: blue;
      }
      `}</style>
  </div>
)

export default Header