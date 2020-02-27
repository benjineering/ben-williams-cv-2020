import { Link } from "preact-router"

const Header = () => {
  return (
    <div id="header">
      <nav>
        <ul>
          <li>
            <Link path="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
