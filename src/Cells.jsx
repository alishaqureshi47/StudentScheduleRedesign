import React from "react";

// Cells.jsx — single calendar class block component
// Props: id, title, location, section, start, end, color, instructor, status, timecode
// gridColumn, gridRow (for CSS grid placement), onClick
export default function ClassCell({
  id,
  title,
  location,
  section,
  start,
  end,
  color = "#e5e7eb",
  instructor,
  status,
  gridColumn,
  gridRow,
  onClick,
  timecode,
}) {
  const style = {
    gridColumn: gridColumn,
    gridRow: gridRow,
    background: color,
  };

  return (
    <div
      className="event"
      role="article"
      aria-label={`${title} ${start}–${end}${timecode ? ` (${timecode})` : ''}`}
      style={style}
    >
      <div className="event-content">
        <div className="event-title">{title}</div>
        <div className="event-meta">
          <span className="event-location">{location}</span>
        </div>
      </div>
      {timecode && (
        <div className="event-timecode">{timecode}</div>
      )}
    </div>
  );
}
