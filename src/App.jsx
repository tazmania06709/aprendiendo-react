// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const [isFollowing, setIsFollowing] = useState(false)

    return (
        <section className='App'>
            <TwitterFollowCard userName="tazmania06709" initialIsFollowing={isFollowing}>
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

            <button onClick={() => setIsFollowing(isFollowing)}>
                Cambia estado de App
            </button>
        </section>
    )
} 