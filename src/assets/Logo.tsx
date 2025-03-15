const Logo = ({ className }: { className?: string }) => (
    <svg className={className} > 
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="17" r="5" />
      <circle cx="18" cy="17" r="5" />
      <line x1="6" y1="17" x2="9" y2="9" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <line x1="15" y1="9" x2="18" y2="17" />
      <line x1="12" y1="9" x2="12" y2="3" />
      <line x1="12" y1="3" x2="9" y2="3" />
    </svg>
    </svg>
);

export default Logo;