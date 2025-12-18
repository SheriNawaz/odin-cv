function CV({ generalInfo, education, experiences }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-container">
      <div className="cv-actions">
        <button onClick={handlePrint} className="btn btn-primary">Print / Download PDF</button>
      </div>
      
      <div className="cv-document">
        {/* Header Section */}
        <div className="cv-header">
          <h1 className="cv-name">{generalInfo.name || 'Your Name'}</h1>
          <div className="cv-contact">
            {generalInfo.email && <span>{generalInfo.email}</span>}
            {generalInfo.email && generalInfo.phone && <span className="cv-separator">•</span>}
            {generalInfo.phone && <span>{generalInfo.phone}</span>}
          </div>
        </div>

        {/* Education Section */}
        {education.name && (
          <div className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            <div className="cv-section-content">
              <div className="cv-entry">
                <div className="cv-entry-header">
                  <h3 className="cv-institution">{education.name}</h3>
                  <span className="cv-date">{formatDate(education.date)}</span>
                </div>
                <p className="cv-degree">{education.title}</p>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {experiences.some(exp => exp.name) && (
          <div className="cv-section">
            <h2 className="cv-section-title">Experience</h2>
            <div className="cv-section-content">
              {experiences
                .filter(exp => exp.name)
                .map((exp) => (
                  <div key={exp.id} className="cv-entry">
                    <div className="cv-entry-header">
                      <div>
                        <h3 className="cv-company">{exp.name}</h3>
                        <p className="cv-position">{exp.title}</p>
                      </div>
                      <span className="cv-date">
                        {formatDate(exp.dateStarted)} - {exp.isCurrent ? 'Present' : formatDate(exp.dateFinished)}
                      </span>
                    </div>
                    {exp.responsibilities && (
                      <p className="cv-description">{exp.responsibilities}</p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default CV;
