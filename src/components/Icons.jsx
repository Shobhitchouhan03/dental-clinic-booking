import React from "react";

/* A small hand-picked set of line icons used across the site.
   Centralising them here means every page shares the same visual language. */

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const ToothIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3c-2.2 0-3 1.2-4.5 1.2S5 3 3.8 4.2C2.6 5.4 3 8 3.6 10.5c.5 2 1 5.5 2 7.8.5 1.2 1.5 1.7 2.2.6.6-1 .8-3.4 1.7-3.4s1.1 2.4 1.7 3.4c.7 1.1 1.7.6 2.2-.6 1-2.3 1.5-5.8 2-7.8.6-2.5 1-5.1-.2-6.3C15 3 14.2 4.2 12.7 4.2S13.2 3 12 3Z" />
  </svg>
);

export const SparkleToothIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M11 4c-1.8 0-2.5 1-3.7 1S5.4 4 4.4 5c-1 1-.6 3.2-.1 5 .4 1.6.9 4.5 1.7 6.4.4 1 1.2 1.4 1.8.5.5-.8.7-2.8 1.4-2.8s.9 2 1.4 2.8c.6.9 1.4.5 1.8-.5.5-1.2.9-2.9 1.2-4.4" />
    <path d="M19 3l.6 1.7L21.3 5l-1.7.6L19 7.3l-.6-1.7L16.7 5l1.7-.6L19 3Z" />
  </svg>
);

export const ShieldToothIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
    <path d="M9.5 12.5c0-1.5.8-2.3 2.5-2.3s2.5.8 2.5 2.3c0 1.3-.6 2-1.2 2.7-.4.5-.6 1-.6 1.6" />
  </svg>
);

export const MagnifierToothIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.2 15.2 20 20" />
    <path d="M10.5 7c-1.1 0-1.6.6-2.4.6S6.9 7 6.3 7.5c-.6.5-.3 1.6 0 2.4.2.9.5 2.4.9 3.3" />
  </svg>
);

export const AlertToothIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3c-2.2 0-3 1.2-4.5 1.2S5 3 3.8 4.2C2.6 5.4 3 8 3.6 10.5c.5 2 1 5.5 2 7.8.5 1.2 1.5 1.7 2.2.6.6-1 .8-3.4 1.7-3.4s1.1 2.4 1.7 3.4c.7 1.1 1.7.6 2.2-.6 1-2.3 1.5-5.8 2-7.8" />
    <path d="M12 9v3" />
    <circle cx="12" cy="15" r="0.6" fill="currentColor" />
  </svg>
);

export const SmileIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 13.5c1 1.5 2.4 2.2 4 2.2s3-.7 4-2.2" />
    <path d="M9 9.5h.01M15 9.5h.01" />
  </svg>
);

export const ToothOutIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3c-2.2 0-3 1.2-4.5 1.2S5 3 3.8 4.2C2.6 5.4 3 8 3.6 10.5c.5 2 1 5.5 2 7.8.5 1.2 1.5 1.7 2.2.6.6-1 .8-3.4 1.7-3.4s1.1 2.4 1.7 3.4c.7 1.1 1.7.6 2.2-.6 1-2.3 1.5-5.8 2-7.8.6-2.5 1-5.1-.2-6.3" />
    <path d="M18 15l3 3M21 15l-3 3" />
  </svg>
);

export const KidToothIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 9.5c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" />
    <path d="M10 18v2M14 18v2" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6.5 3h3l1.5 4-2 1.5c1 2.3 2.7 4 5 5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 18 6 13.5 6 6.5 6 5.4 5.4 3 6.5 3Z" />
  </svg>
);

export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor" {...props}>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.2-.4-4.5-1.3l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
);

export const CalendarIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
  </svg>
);

export const MapPinIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const ClockIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.2" />
    <path d="M4 6.5l8 6 8-6" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const ChevronUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 15l7-7 7 7" />
  </svg>
);

export const ChevronDownIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 9l7 7 7-7" />
  </svg>
);

export const CheckCircleIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.5l2.5 2.5L16 9.5" />
  </svg>
);

export const InstagramIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14 21v-7h2.4l.4-3H14V9c0-.9.2-1.5 1.6-1.5H17V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9v2.1H8.5v3H11v7h3Z" />
  </svg>
);

/* A gentle smile-shaped wave, used as the site's recurring signature divider */
export const SmileWave = (props) => (
  <svg viewBox="0 0 400 40" preserveAspectRatio="none" {...props}>
    <path
      d="M0 8 C 60 8, 60 32, 120 32 S 180 8, 200 8 S 260 32, 320 32 S 380 8, 400 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export const iconMap = {
  "tooth-root": ToothIcon,
  "sparkle-tooth": SparkleToothIcon,
  "shield-tooth": ShieldToothIcon,
  "magnifier-tooth": MagnifierToothIcon,
  "alert-tooth": AlertToothIcon,
  smile: SmileIcon,
  "tooth-out": ToothOutIcon,
  "kid-tooth": KidToothIcon,
};
