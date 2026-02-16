import { useEffect, useState } from 'react'
import { AwardIcon } from './Icons'

export default function SplashScreen({ onComplete }) {
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true)
            setTimeout(onComplete, 500)
        }, 2200)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-700 text-white transition-all duration-700 ${exiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative z-10 text-center animate-fadeIn">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-900/20 animate-bounce">
                    <AwardIcon size={64} className="text-white drop-shadow-md" />
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight">Anglify</h1>
                <p className="text-indigo-200 text-lg font-medium mb-12">Master English. Master Your Future.</p>

                <div className="w-48 h-1.5 bg-white/20 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-white/90 rounded-full animate-[loading_2s_ease-in-out_infinite] origin-left"></div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>
        </div>
    )
}
