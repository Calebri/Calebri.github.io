import { Link } from 'react-router-dom'
import styles from './BigBox.module.css'

export default function Hero() {
    return (
        <div className={styles.box}>
            <h1 style={{fontSize:"32px", marginTop: "0"}}>
                Welcome
            </h1>

            <p className="indented">
                My name is Caleb and I make programs and stuff. On this site, you can view the full
                collection of publicly available projects I've worked on, including various apps,
                games, or anything I've decided to build, dating back to 2020. There are also links
                for each project to live web demos, public builds, and source code.
            </p>
            
            <br />
            <Link to="/timeline" className="button">Full Projects List</Link>
            <br />
            
        </div>
    )
}