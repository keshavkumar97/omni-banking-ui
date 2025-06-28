const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <>
      <div className="form-group">
        {placeholder && (
          <label className="label" htmlFor={placeholder}>
            {placeholder[0].toUpperCase() + placeholder.slice(1)}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input"
        />
      </div>
    </>
  );
};

export default FormInput;
