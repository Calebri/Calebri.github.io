import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.box}>
            <h1 style={{fontSize:"32px"}}>
                Header Text
            </h1>

            <p className="indented">
                First paragraph.
            </p>

            <p className="indented">
                Second paragraph.
            </p>
            
            <Link to="/timeline" className="button">Full Projects List</Link>
            
        </div>
    )
}