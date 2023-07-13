import {withRouter, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav>
      <ul className="list-container">
        <li className="logo-container">
          <Link to="/">
            <img
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            />
          </Link>
        </li>
        <li className="nav-links-container">
          <Link to="/">
            <AiFillHome />
            <h1>Home</h1>
          </Link>
          <Link to="/jobs">
            <BsBriefcaseFill />
            <h1>Jobs</h1>
          </Link>
        </li>
        <li className="nav-button-container">
          <FiLogOut onClick={onClickLogOut} />
          <button type="button" onClick={onClickLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
