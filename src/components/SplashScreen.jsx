import { useEffect, useState } from 'react'
import { AwardIcon } from './Icons'

export default function SplashScreen({ onComplete }) {
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true)
            setTimeout(onComplete, 500) // Wait for exit animation
        }, 2000)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div className={`splash-screen ${exiting ? 'splash-screen--exit' : ''}`}>
            <div className="splash-content">
                <div className="splash-logo">
                    <AwardIcon size={64} className="splash-icon" />
                </div>
                <h1 className="splash-title">Anglify</h1>
                <p className="splash-subtitle">Master English. Master Your Future.</p>

                <div className="splash-loader">
                    <div className="splash-loader__bar"></div>
                </div>
            </div>
        </div>
    )
}
