/* ============================================
   Anglify — Premium Duotone Icons
   Consistent, rounded SVG icon system
   ============================================ */

const IconBase = ({ size = 24, className = '', children, viewBox = "0 0 24 24" }) => (
    <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
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
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const ChartIcon = (props) => (
    <IconBase {...props}>
        <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

export const ArrowRightIcon = (props) => (
    <IconBase {...props}>
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

// --- New icons replacing emojis ---

export const SparkleIcon = (props) => (
    <IconBase {...props}>
        <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19 15L19.83 17.17L22 18L19.83 18.83L19 21L18.17 18.83L16 18L18.17 17.17L19 15Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconBase>
)

export const BrainIcon = (props) => (
    <IconBase {...props}>
        <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.5 7 11 8.5 12C7 13 6 14.5 6 16.5C6 19.5 8.5 22 12 22C15.5 22 18 19.5 18 16.5C18 14.5 17 13 15.5 12C17 11 18 9.5 18 7.5C18 4.5 15.5 2 12 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
)

export const RulesIcon = (props) => (
    <IconBase {...props}>
        <path d="M3 6H21M3 12H21M3 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="2" y="3" width="20" height="18" rx="2" fill="currentColor" fillOpacity="0.08" />
    </IconBase>
)

export const LightbulbIcon = (props) => (
    <IconBase {...props}>
        <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.22 7.21 13.16 9 14.2V17H15V14.2C16.79 13.16 18 11.22 18 9C18 5.68629 15.3137 3 12 3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const PencilEditIcon = (props) => (
    <IconBase {...props}>
        <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.43739 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const PinIcon = (props) => (
    <IconBase {...props}>
        <path d="M12 2L19 21L12 17L5 21L12 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const TrophyIcon = (props) => (
    <IconBase {...props}>
        <path d="M6 9H4C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H6M18 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H18M6 3H18V9C18 12.3137 15.3137 15 12 15C8.68629 15 6 12.3137 6 9V3Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15V18M8 21H16M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const PartyIcon = (props) => (
    <IconBase {...props}>
        <path d="M5.8 11.3L2 22L12.7 18.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 3H4.01M22 8H22.01M16 2H16.01M11 7H11.01M20 14H20.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M5.8 11.3C7.36 9.34 9.28 7.71 11.45 6.5M12.7 18.2C14.76 16.72 16.52 14.85 17.86 12.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
)

export const CorrectIcon = (props) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const WrongIcon = (props) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
        <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const PlayIcon = (props) => (
    <IconBase {...props}>
        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const RefreshIcon = (props) => (
    <IconBase {...props}>
        <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51 15C4.15839 16.8404 5.39045 18.4202 7.01717 19.4952C8.64389 20.5702 10.5772 21.0811 12.5193 20.9517C14.4614 20.8224 16.3065 20.0601 17.768 18.7803C19.2296 17.5005 20.2298 15.7723 20.6142 13.8608C20.9987 11.9493 20.7466 9.96078 19.8955 8.20709C19.0443 6.45341 17.6423 5.03067 15.9009 4.15468C14.1596 3.27869 12.1747 2.99888 10.2575 3.35604C8.34036 3.7132 6.59693 4.68667 5.29 6.12L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)

export const GlobeIcon = (props) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <path d="M2 12H22M12 2C14.5 4.73 15.82 8.3 16 12C15.82 15.7 14.5 19.27 12 22C9.5 19.27 8.18 15.7 8 12C8.18 8.3 9.5 4.73 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
)
