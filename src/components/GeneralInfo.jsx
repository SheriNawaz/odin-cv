import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if(isEditing){
    return (
      <div className="section">
        <h2 className="section-title">General Information</h2>
        <div className="form">
          <div className="form-group">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Phone Number</label>
            <input
              className="input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">Save</button>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="section">
        <h2 className="section-title">General Information</h2>
        <div className="display-card">
          <p className="display-name">{formData.name}</p>
          <p className="display-info">{formData.email}</p>
          <p className="display-info">{formData.phone}</p>
        </div>
        <button onClick={handleEdit} className="btn btn-secondary">Edit</button>
      </div>
    )
  }
}
export default GeneralInfo;
