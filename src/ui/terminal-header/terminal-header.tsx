import React, { useState, useEffect } from "react";
import "./terminal-header.styles.css";

const commands = [
  "/kdown @Talleyrand34",
  "/kup @Gallegarmy",
  "git clone https://github.com/Gallegarmy/sysarmyGalicia.git",
  "npm install",
  "docker-compose up -d",
];

const TerminalHeader: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 30;
    const pauseTime = 2000;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentCommand((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
          if (charIndex === 0) {
            setIsDeleting(false);
            setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
          }
        } else {
          const currentCommandText = commands[currentCommandIndex];
          if (charIndex < currentCommandText.length) {
            setCurrentCommand(currentCommandText.substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseTime);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentCommandIndex, isDeleting]);

  return (
    <div className="terminal-container">
      <div className="terminal">
        <span className="prompt">~$</span>
        <span className="command">{currentCommand}</span>
        <span className="cursor">_</span>
      </div>
    </div>
  );
};

export default TerminalHeader;
