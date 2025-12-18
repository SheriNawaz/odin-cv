import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    date: ''
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
        <h2 className="section-title">Education</h2>
        <div className="form">
          <div className="form-group">
            <label className="label">School Name</label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Title of Study</label>
            <input
              className="input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Date of Study</label>
            <input
              className="input"
              type="date"
              name="date"
              value={formData.date}
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
        <h2 className="section-title">Education</h2>
        <div className="display-card">
          <p className="display-subtitle">{formData.name}</p>
          <p className="display-info">{formData.title}</p>
          <p className="display-date">{formData.date}</p>
        </div>
        <button onClick={handleEdit} className="btn btn-secondary">Edit</button>
      </div>
    )
  }
}

export default Education;
