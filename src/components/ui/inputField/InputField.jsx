import PropTypes from "prop-types";
import { useField } from "formik";
import {
  Input,
  InputContainer,
  ErrorMessage,
  InputTitle,
} from "./inputField.styles";

const InputField = ({ label, showError, showLabel, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      <InputTitle>
        {showLabel && <label>{label}</label>}
        <Input {...field} {...props} $error={meta.touched && meta.error} />
      </InputTitle>
      {meta.touched && meta.error && showError ? (
        <ErrorMessage $showLabel={showLabel}>
          <p>{meta.error}</p>
        </ErrorMessage>
      ) : null}
    </InputContainer>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  showLabel: PropTypes.bool,
};

export default InputField;
