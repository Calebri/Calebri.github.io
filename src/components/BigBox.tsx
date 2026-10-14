import styles from './BigBox.module.css'

function getFooterLinks(fls: Record<string, string>) {
    let out = []
    for (const [key, value] of Object.entries(fls)) {
        out.push(
            <a key={key} className='button' href={value} target='_blank'>
                {key}
            </a>
        )
    }
    out.push(<br key={out.length}/>)
    return out
}

type BigBoxProps = {
    head_content: string,
    body_content: string,

    subtitle?: string,
    link?: string,
    footer_links?: Record<string, string>,
}

export default function BigBox(props: BigBoxProps) {
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

            {
                (props.footer_links && Object.keys(props.footer_links).length > 0) ?
                getFooterLinks(props.footer_links)
                : <></>
            }
        </div>
    )
}