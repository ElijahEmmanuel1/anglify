import { useEffect, useRef } from 'react'

export default function LordIcon({
    src,
    trigger = 'hover',
    colors = '',
    size = 32,
    delay = 0,
    className = ''
}) {
    const iconRef = useRef(null)

    useEffect(() => {
        if (iconRef.current) {
            // Force refresh if needed, though usually automatic
        }
    }, [src, colors])

    if (!src) return null

    return (
        <lord-icon
            ref={iconRef}
            src={src}
            trigger={trigger}
            colors={colors}
            style={{ width: size, height: size }}
            delay={delay}
            class={className}
        />
    )
}
