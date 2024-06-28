import userImage from "../../../assets/images/user.jpg";

const FileInput = ({ label, field, value, onChange }) => {
    const img = value == null ? userImage : URL.createObjectURL(value);
    return (
      <>
          <div className="mb-3">
              <div className="row">
                  <div className="col-md-3">
                      <img src={img} alt="" className={"img-fluid"}/>
                  </div>
                  <div className="col-md-9">
                      <label htmlFor={field} className="form-label">{label}</label>
                      <input type="file"
                             className="form-control"
                             id={field}
                             name={field}
                             onChange={onChange}
                             aria-describedby="emailHelp"/>
                  </div>
              </div>

          </div>

      </>
    );
}

export default FileInput;