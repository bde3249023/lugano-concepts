import { useEffect, useState } from "react";

interface DecryptTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function DecryptText({ text, className = "", speed = 50, delay = 0 }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
        }

        iteration += 1 / 3; // Slow down the reveal
      }, speed);
    };

    const timeout = setTimeout(startScramble, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayText}</span>;
}
