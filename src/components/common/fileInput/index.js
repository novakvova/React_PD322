const TextInput = ({ label, field, type, value, onChange }) => {
    return (
      <>
          <div className="mb-3">
              <label htmlFor={field} className="form-label">{label}</label>
              <input type={type}
                     className="form-control"
                     id={field}
                     name={field}
                     value={value}
                     onChange={onChange}
                     aria-describedby="emailHelp"/>
          </div>
      </>
    );
}

export default TextInput;