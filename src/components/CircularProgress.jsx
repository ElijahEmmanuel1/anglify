export default function CircularProgress({
    value = 0,
    max = 100,
    size = 120,
    strokeWidth = 8,
    trackColor = '#f1f5f9',
    progressColor = '#2451ed',
    label,
    sublabel,
    className = '',
}) {
    const percentage = Math.min((value / max) * 100, 100)
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                    }}
                />
            </svg>
            {(label !== undefined || sublabel) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {label !== undefined && (
                        <span className="text-lg font-display font-bold text-slate-900">{label}</span>
                    )}
                    {sublabel && (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{sublabel}</span>
                    )}
                </div>
            )}
        </div>
    )
}
