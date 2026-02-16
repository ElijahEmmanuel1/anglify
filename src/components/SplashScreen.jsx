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
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white transition-all duration-500 ease-out ${exiting ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100'}`}>
            <div className="relative z-10 text-center animate-fade-in">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                    <span className="text-3xl font-display font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">A</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 tracking-tight">Anglify</h1>
                <p className="text-brand-200/80 text-sm font-medium mb-1">Master English. Master Your Future.</p>
                <p className="text-brand-300/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">Premium Learning</p>

                <div className="w-40 h-1 bg-white/15 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full" style={{ animation: 'loadingSplash 1.2s ease-out forwards' }}></div>
                </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-400/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px]"></div>
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-purple-500/15 rounded-full blur-[100px]"></div>
            </div>
        </div>
    )
}
