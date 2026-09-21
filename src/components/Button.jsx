import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  download = false,
}) => {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link
        to={to}
        className={className}
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
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;