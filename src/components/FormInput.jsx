const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <>
      <div className="form-group">
        {name && <label className="label" htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>}
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
