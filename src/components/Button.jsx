import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  download = false,
  onClick,
}) => {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noreferrer"}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;