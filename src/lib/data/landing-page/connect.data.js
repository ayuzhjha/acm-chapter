import {
  House,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

// Data object for all content
export const connectData = {
  heading: {
    main: "Let's",
    highlight: "Connect",
  },
  description:
    "Join XIM's vibrant tech community. Whether you're a student, mentor, or industry partner, we'd love to hear from you.",
  contacts: [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: [
        "XIM University",
        "Bhubaneswar, Odisha",
        "India - 751002",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [
        "acm-xim-scse@acm.in",
        "acmxim@gmail.com",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: [
        "+91 xxxxxxxx",
        "+91 xxxxxxxx",
        "+91 xxxxxxxx",
      ],
    },
  ],
  newsletter: {
    heading: {
      main: "Join our",
      highlight: "newsletter",
    },
    description:
      "Hear it from us first. Sign up for real-time updates on upcoming events, networking opportunities, and valuable resources designed to fuel your academic and professional growth.",
    emailLabel: "Your email address",
    placeholder: "harri@gmail.com",
    button: "Subscribe to Newsletter",
  },
  footer: {
    left: {
      href: "/",
      label: "Team",
      icon: ChevronLeft,
      hidden: true,
    },
    center: {
      href: "/",
      icon: House,
    },
    right: {
      href: "events",
      label: "Events",
      icon: ChevronRight,
    },
  },
};