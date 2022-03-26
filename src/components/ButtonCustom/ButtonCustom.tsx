import "./ButtonCustom.scss";

const ButtonCustom = (props: {className?: string; children?: string}) => {
  const classes = "btn " + props.className;
  return (
    <div className={classes} data-testid="custom-element">
      {props.children}
    </div>
  );
};
export default ButtonCustom;
