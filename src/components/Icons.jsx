/* ============================================
   Anglify — Premium Duotone Icons
   Rounded, friendly, and polished SVG icons
   ============================================ */

const IconBase = ({ size = 24, className = '', children, viewBox = "0 0 24 24" }) => (
    <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`icon ${className}`}
        style={{ transition: 'all 0.2s ease' }}
    >
        {children}
    </svg>
)

// --- Navigation Icons ---

export const HomeIcon = (props) => (
    <IconBase {...props}>
        <path d="M9.16016 10.7499H14.8402V21.1699H9.16016V10.7499Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M12.0002 21.1699H9.16016V10.7499H14.8402V21.1699H12.0002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 13.06L3.92 14.8L12 7.54001L20.08 14.8L22 13.06L12 4.08002L2 13.06Z" fill="currentColor" />
    </IconBase>
)

export const BookIcon = (props) => (
    <IconBase {...props}>
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M6.5 6H17.5M6.5 10H17.5M6.5 14H13.5M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
)

export const TargetIcon = (props) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
    </IconBase>
)

export const PenIcon = (props) => (
    <IconBase {...props}>
        <path d="M17 3.00002L21 7.00002L15 13L11 9.00002L17 3.00002Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M17 3.00002L21 7.00002L7.5 20.5L3.5 20.5L3.5 16.5L17 3.00002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const ZapIcon = (props) => (
    <IconBase {...props}>
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" fillOpacity="0.2" />
    </IconBase>
)

export const ChartIcon = (props) => (
    <IconBase {...props}>
        <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
    </IconBase>
)

// --- UI / Action Icons ---

export const BellIcon = (props) => (
    <IconBase {...props}>
        <path d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21A2 2 0 0 1 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const StarIcon = (props) => (
    <IconBase {...props}>
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const FlameIcon = (props) => (
    <IconBase {...props}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12C11 11.24 10.37 11 10.37 11C13 10.74 13.5 11.96 13.5 14.5C13.5 16.99 11.49 19 9 19C6.51 19 4.5 16.99 4.5 14.5C4.5 12.01 6.51 10 8.5 14.5Z" fill="currentColor" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M15 12C15 12 16.5 13 16.5 16C16.5 18.5 14.5 20.5 12 20.5C9.5 20.5 7.5 18.5 7.5 16C7.5 13.5 9 12 12 7C14 10 15 12 15 12Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const LayersIcon = (props) => (
    <IconBase {...props}>
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const ArrowLeftIcon = (props) => (
    <IconBase {...props}>
        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const ChevronDownIcon = (props) => (
    <IconBase {...props}>
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const CheckCircleIcon = (props) => (
    <IconBase {...props}>
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const AwardIcon = (props) => (
    <IconBase {...props}>
        <circle cx="12" cy="8" r="7" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const ClockIcon = (props) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const BookOpenIcon = (props) => (
    <IconBase {...props}>
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)
