import styles from './BigBox.module.css'

export default function BigBox(props) {
    return (
        <div className={styles.box}>
            <div className={styles.header}>
                <h1>{props.head_content}</h1>
                <a className={styles.link} target="_blank" href={props.link}>{props.link}</a>
            </div>

            <p className="subtitle">
                {props.subtitle}
            </p>

            <p>
                {props.body_content}
            </p>
        </div>
    )
}