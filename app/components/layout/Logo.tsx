"use client";

import Image from "next/image";
import { useTheme } from "../providers/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center cursor-pointer group hover:opacity-90 transition-opacity duration-200">
      {/* Mobile: Show icon only */}
      <Image
        src="/img/transparent/logo.png"
        alt="Senpai Career"
        width={64}
        height={64}
        priority
        className="h-16 w-16 md:hidden"
      />
      {/* Desktop: Show full logo - theme aware */}
      <Image
        src={theme === "dark" ? "/img/transparent/imageFullDark.jpeg" : "/img/transparent/imageFullLight.jpeg"}
        alt="Senpai Career"
        width={560}
        height={157}
        priority
        className="hidden h-20 w-auto md:block"
      />
    </div>
  );
}
