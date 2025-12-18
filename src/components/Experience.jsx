import { useState } from "react";

function Experience({ onDataChange }) {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      name: '',
      title: '',
      responsibilities: '',
      dateStarted: '',
      dateFinished: '',
      isCurrent: false,
      isEditing: true
    }
  ]);

  const handleChange = (id, field, value) => {
    const updated = experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updated);
    onDataChange(updated);
  };

  const handleSubmit = (id, e) => {
    e.preventDefault();
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, isEditing: false } : exp
    ));
  };

  const handleEdit = (id) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, isEditing: true } : exp
    ));
  };

  const handleDelete = (id) => {
    if (experiences.length > 1) {
      const updated = experiences.filter(exp => exp.id !== id);
      setExperiences(updated);
      onDataChange(updated);
    }
  };

  const handleAddNew = () => {
    if (experiences.length < 4) {
      const newId = Math.max(...experiences.map(exp => exp.id)) + 1;
      const updated = [...experiences, {
        id: newId,
        name: '',
        title: '',
        responsibilities: '',
        dateStarted: '',
        dateFinished: '',
        isCurrent: false,
        isEditing: true
      }];
      setExperiences(updated);
      onDataChange(updated);
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">Experience</h2>
      
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-item">
          {exp.isEditing ? (
            <div className="form">
              <div className="form-group">
                <label className="label">Company Name</label>
                <input
                  className="input"
                  type="text"
                  value={exp.name}
                  onChange={(e) => handleChange(exp.id, 'name', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label className="label">Job Title</label>
                <input
                  className="input"
                  type="text"
                  value={exp.title}
                  onChange={(e) => handleChange(exp.id, 'title', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label className="label">Responsibilities</label>
                <textarea
                  className="textarea"
                  value={exp.responsibilities}
                  onChange={(e) => handleChange(exp.id, 'responsibilities', e.target.value)}
                  rows="4"
                />
              </div>
              
              <div className="form-group">
                <label className="label">Start Date</label>
                <input
                  className="input"
                  type="date"
                  value={exp.dateStarted}
                  onChange={(e) => handleChange(exp.id, 'dateStarted', e.target.value)}
                />
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={exp.isCurrent}
                    onChange={(e) => handleChange(exp.id, 'isCurrent', e.target.checked)}
                  />
                  <span>Current Job</span>
                </label>
              </div>
              
              {!exp.isCurrent && (
                <div className="form-group">
                  <label className="label">End Date</label>
                  <input
                    className="input"
                    type="date"
                    value={exp.dateFinished}
                    onChange={(e) => handleChange(exp.id, 'dateFinished', e.target.value)}
                  />
                </div>
              )}
              
              <div className="button-group">
                <button onClick={(e) => handleSubmit(exp.id, e)} className="btn btn-primary">Save</button>
                {experiences.length > 1 && (
                  <button onClick={() => handleDelete(exp.id)} className="btn btn-danger">Delete</button>
                )}
              </div>
            </div>
          ) : (
            <div className="display-card">
              <p className="display-subtitle">{exp.name}</p>
              <p className="display-job-title">{exp.title}</p>
              <p className="display-info">{exp.responsibilities}</p>
              <p className="display-date">{exp.dateStarted} - {exp.isCurrent ? 'Present' : exp.dateFinished}</p>
              <div className="button-group">
                <button onClick={() => handleEdit(exp.id)} className="btn btn-secondary">Edit</button>
                {experiences.length > 1 && (
                  <button onClick={() => handleDelete(exp.id)} className="btn btn-danger">Delete</button>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      
      {experiences.length < 4 && (
        <button onClick={handleAddNew} className="btn btn-add">+ Add New Experience</button>
      )}
    </div>
  );
}


export default Experience;
