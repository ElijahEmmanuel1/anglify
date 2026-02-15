/* ============================================
   Anglify — Circular Progress Ring
   Animated SVG ring with center content
   ============================================ */

export default function CircularProgress({
    value = 0,
    max = 100,
    size = 120,
    strokeWidth = 8,
    color = 'var(--accent-primary)',
    gradientId,
    label,
    sublabel,
    className = '',
}) {
    const percentage = Math.min((value / max) * 100, 100)
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className={`progress-ring ${className}`} style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {gradientId && (
                    <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--accent-primary)" />
                            <stop offset="100%" stopColor="var(--accent-secondary)" />
                        </linearGradient>
                    </defs>
                )}
                {/* Background track */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="var(--bg-tertiary)"
                    strokeWidth={strokeWidth}
                />
                {/* Progress arc */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={gradientId ? `url(#${gradientId})` : color}
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
            <div className="progress-ring__content">
                {label !== undefined && (
                    <span className="progress-ring__label">{label}</span>
                )}
                {sublabel && (
                    <span className="progress-ring__sublabel">{sublabel}</span>
                )}
            </div>
        </div>
    )
}
