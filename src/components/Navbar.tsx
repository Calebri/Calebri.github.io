import { NavLink as Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinkStyles = ({isActive}: {isActive: boolean}) => ({
    color: isActive ? '#FF00FF' : '#FFFFFF',
    textDecoration: isActive ? 'underline' : 'none'
});

export default function Navbar() {
    return (
        <nav>
            <p className={styles.navheader}>
                <b>Caleb Site</b>
            </p>

            <div className={styles.linkcontainer}>
                <Link to="/" style={navLinkStyles}>Home</Link> |{" "}
                <Link to="/timeline" style={navLinkStyles}>Timeline</Link> |{" "}
                <Link to="/about" style={navLinkStyles}>About</Link>
            </div>
        </nav>
    )
}