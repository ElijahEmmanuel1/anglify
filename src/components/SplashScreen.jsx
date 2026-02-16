import { useEffect, useState } from 'react'

export default function SplashScreen({ onComplete }) {
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setExiting(true)
            setTimeout(onComplete, 400)
        }, 1200)

        return () => clearTimeout(timer)
    }, [onComplete])

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-600 text-white transition-all duration-500 ease-out ${exiting ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100'}`}>
            <div className="relative z-10 text-center animate-fade-in">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl font-display font-bold">A</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 tracking-tight">Anglify</h1>
                <p className="text-brand-200 text-sm font-medium mb-10">Master English. Master Your Future.</p>

                <div className="w-40 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-white/80 rounded-full" style={{ animation: 'loadingSplash 1.2s ease-out forwards' }}></div>
                </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-500/40 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-700/40 rounded-full blur-[120px]"></div>
            </div>
        </div>
    )
}
