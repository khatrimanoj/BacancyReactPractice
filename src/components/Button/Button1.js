const Button1 = ({
  variants = "primary",
  size = "medium",
  children,
  type = "button",
  style,
  onClick,
  label,
  icon,
  iconName,
  iconStyle,
  iconEnd,
}) => {
  return (
    <>
      <button
        {...children}
        type={type}
        style={style}
        onClick={onClick}
        className={`btn btn-${variants} btn-${size} ${
          iconEnd ? "flex-reverse" : ""
        }
          ${icon ? "btn-icon" : ""}`}
      >
        {icon && <img src={icon} alt={iconName} style={iconStyle} />}
        <span>
          {label && label} {children}
        </span>
      </button>
    </>
  );
};

export default Button1;
