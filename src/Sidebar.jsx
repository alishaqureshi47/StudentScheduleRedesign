import { useMemo } from "react";

export default function Sidebar({ schedule, onOpenPopup }) {

  // Deduplicate by course id for the list
  const courses = useMemo(() => {
    const seen = new Map();
    for (const c of schedule) if (!seen.has(c.id)) seen.set(c.id, c);
    return Array.from(seen.values());
  }, [schedule]);

  const handleCourseClick = (course, target) => {
    if (!onOpenPopup) return;
    const rect = target?.getBoundingClientRect?.();
    onOpenPopup(course, rect);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="card-title">Course List</div>
        <div className="course-list">
          {courses.map((c) => (
            <button
              key={c.id}
              className="course-pill"
              onClick={(e) => handleCourseClick(c, e.currentTarget)}
              title="View details"
            >
              <span className="pill-color" style={{ background: c.meetings?.[0]?.color }} />
              <span className="pill-text">
                <div className="course-header">
                  <strong>{c.subject} {c.number}</strong>
                  <span className="section">Section {c.section}</span>
                </div>
                <div className="course-title">{c.title}</div>
                <div className="course-details">
                  <div className="instructor">{c.instructor}</div>
                  <div className="primary-time">
                    {c.meetings?.[0] ? `${c.meetings[0].days.join(", ")} ${c.meetings[0].start}–${c.meetings[0].end}` : ''}
                  </div>
                  {c.meetings && c.meetings.length > 1 && (
                    <div className="x-hours">
                      {c.meetings.slice(1).map((m, i) => (
                        <div key={i} className="x-hour-item">{m.type}: {m.days?.join(", ")} {m.start}–{m.end}</div>
                      ))}
                    </div>
                  )}
                </div>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* popup is managed by parent App via onOpenPopup */}
    </aside>
  );
}
