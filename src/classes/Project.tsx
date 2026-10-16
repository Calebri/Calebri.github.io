import BigBox from "../components/BigBox.tsx"

// Converts Date to formatted string.
function formatDate(d: Date) {
    return (
        d.toLocaleString('default', { month: 'short' })
        + ", "
        + d.getFullYear()
    )
}

export default class Project {
    title: string
    description: string
    createdDate: Date
    updatedDate: Date
    linkURL: string
    tags: Array<string>
    footerLinks: Record<string, string>

    constructor(title: string, description: string, createdDate: Date, updatedDate: Date, linkURL: string = "", tags: Array<string> = []) {
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.updatedDate = updatedDate
        this.linkURL = linkURL
        this.tags = tags
        this.footerLinks = {}
    }

    addLink(name: string, url: string) {
        this.footerLinks[name] = url
        return this
    }

    addDemoLink(url: string) {
        return this.addLink("Live Demo", url)
    }

    addReleasesLink() {
        return this.addLink("Releases", this.linkURL + "/releases")
    }

    toHTML(key = 0) {
        return (
            <BigBox
                key = {key}
                head_content = {this.title}
                subtitle = {"Created: " + formatDate(this.createdDate) + "; Updated: " + formatDate(this.updatedDate)}
                body_content = {this.description}
                link = {this.linkURL}
                footer_links = {this.footerLinks}
            />
        )
    }
}