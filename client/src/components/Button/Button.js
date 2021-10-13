import PropTypes from 'prop-types';
import React from 'react';

const handleClick = (href, onClick, preventDefault, e) => {
  if (preventDefault && href === '#') {
    e.preventDefault();
    e.stopPropagation();
  }

  if (onClick) {
    onClick(e);
  }
};

/**
 * A reusable button. Uses a <a> tag underneath.
 */
const Button = ({
  className,
  children,
  accessibleLabel,
  href,
  target,
  preventDefault,
  onClick,
  dialogTrigger,
}) => {
  const hasText = children !== null;
  const accessibleElt = accessibleLabel ? (
    <span className="visuallyhidden">
      {accessibleLabel}
    </span>
  ) : null;

  return (
    <a
      className={className}
      onClick={handleClick.bind(null, href, onClick, preventDefault)}
      rel={target === '_blank' ? 'noopener noreferrer' : null}
      href={href}
      target={target}
      aria-haspopup={dialogTrigger ? 'dialog' : null}
    >
      {hasText ? children : accessibleElt}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
  accessibleLabel: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  preventDefault: PropTypes.bool,
  dialogTrigger: PropTypes.bool,
};

Button.defaultProps = {
  href: '#',
  className: '',
  target: null,
  children: null,
  accessibleLabel: null,
  onClick: null,
  isLoading: false,
  preventDefault: true,
  dialogTrigger: false,
};

export default Button;