import {
  Chart1,
  Message2,
  Electricity,
  Smileys,
  Notification,
  Setting2,
  SafeHome,
} from "iconsax-react";

export const data = [
  {
    name: "Get Started",
    link: "/get-started",
    icon: <SafeHome className="w-5 h-5" />,
  },
  {
    name: "Analytics",
    link: "/",
    icon: <Chart1 className="w-5 h-5" />,
  },
  {
    name: "Chat",
    link: "/chat",
    icon: <Message2 className="w-5 h-5" />,
  },
  {
    name: "Moderation",
    link: "/moderation",
    icon: <Smileys className="w-5 h-5" />,
  },
  {
    name: "API & Auth Keys",
    link: "/api",
    icon: <Electricity className="w-6 h-6" />,
  },
  {
    name: "Announcement",
    link: "/anouncement",
    icon: <Notification className="w-5 h-5" />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Setting2 className="w-5 h-5" />,
  },
];
