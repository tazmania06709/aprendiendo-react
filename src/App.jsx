// import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    // const format = (userName) => `@${userName}`
    // const [name, setName] = useState('midudev')

    console.log('render', name)

    return (
        <section className='App'>
            <TwitterFollowCard userName="tazmania06709" initialIsFollowing={true}>
                Tazmania
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>
            {/* <TwitterFollowCard userName={name}>
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard userName={name}>
                Vanderhart
            </TwitterFollowCard> */}

            {/* <button onClick={() => setName('tazmania06709')}>
                Cambia nombre
            </button> */}
        </section>
    )
} 