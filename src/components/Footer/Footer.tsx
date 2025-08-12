import React from "react";
import { Mail } from "lucide-react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white border-t border-[#0010661a] py-8 px-4 md:px-[120px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#cf0f12]" />
          <a
            href="mailto:niteshamalap@gmail.com"
            className="font-small-regular font-[number:var(--small-regular-font-weight)] text-[#000626e6] text-[length:var(--small-regular-font-size)] tracking-[var(--small-regular-letter-spacing)] leading-[var(--small-regular-line-height)] [font-style:var(--small-regular-font-style)] hover:text-[#cf0f12] transition-colors duration-200"
          >
            niteshamalap@gmail.com
          </a>
        </div>
        <p className="font-tiny-regular font-[number:var(--tiny-regular-font-weight)] text-[#000833a6] text-[length:var(--tiny-regular-font-size)] tracking-[var(--tiny-regular-letter-spacing)] leading-[var(--tiny-regular-line-height)] [font-style:var(--tiny-regular-font-style)] text-center">
          Let's discuss how I can help grow your product
        </p>
      </div>
    </footer>
  );
};