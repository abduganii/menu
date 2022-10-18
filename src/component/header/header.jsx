import "./header.css"
import { NavLink } from 'react-router-dom'
import content from "../../localization/content"
const Header = ({ lang }) => {
    return (
        <header className="Header">
            <div className="container">
                <ul className="Header-list">
                    <li className="Header-item">
                        <NavLink className="navbar-link" to={'/'}>
                            {content[lang].header.home}
                        </NavLink>
                    </li>
                    <li className="Header-item">
                        <NavLink className="navbar-link" to={'/aboutUS'}>
                            {content[lang].header.aboutUs}
                        </NavLink>
                    </li>
                    <li className="Header-item">
                        <NavLink className="navbar-link" to={'/categoreis'}>
                            {content[lang].header.categore}
                        </NavLink>
                    </li>
                    <li className="Header-item">
                        <NavLink className="navbar-link" to={'/languages'}>
                            {content[lang].header.langouge}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;