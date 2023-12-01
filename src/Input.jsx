import clsx from "clsx";
import PropTypes from "prop-types";

export default function Input(props) {

    const { className, type="text",placeholder,required, ...rest } = props;

    const classes = clsx({
        input: true,
    },
    className);

    return (
        <label className="label">
  {placeholder}
  {required && <span className="input-required">*</span> }
  <div>
    <input type={type} className={classes} placeholder={placeholder} required={required} {...rest} />
  </div>
</label>

    );
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
};