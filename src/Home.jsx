import Hero from './Hero.jsx'
import BigBox from './BigBox.jsx'

export default function Home() {
    return (
        <div className="routebody">
            <p>⚠<b>UNDER CONSTRUCTION!</b>⚠</p>
            <BigBox
                head_content="Test Header"
                link = "awesome link"
                subtitle="test subtitle"
                body_content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis tortor quis rhoncus eleifend. Donec aliquet nisi non congue fringilla. Praesent interdum erat ligula, sed porta nunc tincidunt et. Mauris dictum gravida ante non condimentum. Donec elementum nunc non porta pharetra. Fusce quis sodales leo. Curabitur a velit ex. Aenean a dui elementum, aliquam neque sed, auctor massa. Etiam aliquet nisi et consequat tincidunt. Nunc lobortis dapibus leo, vel fermentum nisi. In auctor velit purus, et pellentesque felis ultrices id. Cras volutpat urna sit amet eros efficitur pellentesque. "
            />
            <Hero />
        </div>
    )
}