interface Props {
  size?: number;
  className?: string;
}

export default function BrandIcon({ size = 24, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#059669" />
      <path
        d="M16 4C10.477 4 6 8.477 6 14C6 21 16 28 16 28C16 28 26 21 26 14C26 8.477 21.523 4 16 4Z"
        fill="white"
      />
      <circle cx="16" cy="14" r="4" fill="#059669" />
    </svg>
  );
}
