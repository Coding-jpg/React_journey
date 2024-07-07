interface Props {
  children: string;
  onClick: () => void;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {props.children}
      <button
        type="button"
        className="btn-close"
        onClick={props.onClick}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
