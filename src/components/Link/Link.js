// import PropTypes from "prop-types";

const Link = ({ url, className, style, linkText, ...props }) => {
  return (
    <>
      <li {...props}>
        <a href={url} className={className} style={style}>
          {linkText}
        </a>
      </li>
    </>
  );
};

export default Link;

// Link.propTypes = {
//   href: PropTypes.string.isRequired,
//   linkText: PropTypes.string.isRequired,
// };
