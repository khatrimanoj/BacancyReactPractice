export default function Button(props) {
  const ButtonClass = "btn" + (props.className ? ` ${props.className}` : "");
  const ButtonType = props.type ? `${props.type}` : "button";

  return (
    <>
      <button
        {...props}
        type={ButtonType}
        className={ButtonClass}
        onClick={props.onClick}
      >
        <span>{props.children}</span>
      </button>
    </>
  );
}
