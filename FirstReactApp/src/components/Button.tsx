interface Props {
  children: string;
  onClick: () => void;
  colour: string;
}

const Button = (props: Props) => {
  return (
    <button
      type="button"
      className={"btn" + props.colour}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
