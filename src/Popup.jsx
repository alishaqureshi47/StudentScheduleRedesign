import React, { useState } from 'react';

export default function Popup({ course = null, onClose = () => {}, rect = null }) {
  const [openIds, setOpenIds] = useState([]);

  const sections = [
    { id: 'class-details', title: 'Class Details' },
    { id: 'instructor-times', title: 'Instructor/Meeting Times' },
    { id: 'textbooks', title: 'Textbooks and Learning Objs' },
    { id: 'cross-listed', title: 'Cross Listed Courses' },
  ];

  function toggle(id) {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }
  // compute vertical position from rect (center Y) if provided
  const style = rect
    ? (() => {
        // align near the top of the clicked element, slightly above it
        const preferred = rect.top + window.scrollY - 10; // nudge up 10px from top
        const minTop = 8;
        return { top: Math.max(minTop, preferred) };
      })()
    : {};

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className={`popup-content ${rect ? 'popup-anchored' : ''}`} style={style} onClick={(e) => e.stopPropagation()}>
  <button className="close-button" type="button" aria-label="Close course details" onClick={onClose}>×</button>
        <h2>Course Details</h2>

        <div className="accordion" role="region" aria-label="Course detail sections">
          {sections.map((s) => {
            const isOpen = openIds.includes(s.id);
            return (
              <div className="accordion-item" key={s.id}>
                <button
                  className="accordion-header"
                  aria-expanded={isOpen}
                  aria-controls={`${s.id}-panel`}
                  id={`${s.id}-header`}
                  onClick={() => toggle(s.id)}
                  type="button"
                >
                  <span className="accordion-title">{s.title}</span>
                  <span className={`accordion-caret ${isOpen ? 'open' : ''}`} aria-hidden="true">▾</span>
                </button>
                <div
                  id={`${s.id}-panel`}
                  role="region"
                  aria-labelledby={`${s.id}-header`}
                  className={`accordion-panel ${isOpen ? 'open' : ''}`}
                >
                  {s.id === 'class-details' && course && (
                    <div className="panel-body">
                      <div style={{ fontWeight: 700 }}>{course.subject} {course.number} — Section {course.section}</div>
                      <div style={{ marginTop: 6 }}>{course.title}</div>
                      <div style={{ marginTop: 8, color: '#444' }}>
                        {course.creditHours ? `${course.creditHours} credit hour(s)` : null}
                        {course.campus ? ` • ${course.campus}` : null}
                      </div>
                      <div style={{ marginTop: 6 }}>{course.location}</div>
                      <div style={{ marginTop: 6 }}>{course.scheduleType}{course.timecode ? ` • Timecode: ${course.timecode}` : ''}</div>
                    </div>
                  )}

                  {s.id === 'instructor-times' && course && (
                    <div className="panel-body">
                      <div style={{ fontWeight: 700, marginBottom: 8 }}>{course.instructor}</div>
                      <div>
                        {course.meetings?.map((m, i) => (
                          <div key={i} style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ minWidth: 8, width: 8, height: 24, background: m.color || 'transparent', borderRadius: 2 }} aria-hidden="true" />
                            <div>
                              <div style={{ fontWeight: 700 }}>{m.type}</div>
                              <div style={{ color: '#333' }}>{(m.days || []).join(', ')} {m.start}–{m.end}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {s.id === 'textbooks' && (
                    <div className="panel-body">
                      {/* No textbook data in schedule.js currently */}
                      <div style={{ color: '#666' }}>No textbooks listed.</div>
                    </div>
                  )}

                  {s.id === 'cross-listed' && (
                    <div className="panel-body">
                      {/* No cross-listing data in schedule.js currently */}
                      <div style={{ color: '#666' }}>No cross-listed courses.</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
