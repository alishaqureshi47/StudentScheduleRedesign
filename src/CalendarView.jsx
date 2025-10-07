import ClassCell from "./Cells";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const DISPLAY_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const START_HOUR = 8; // show from 8 AM
const END_HOUR = 22; // extend calendar to 10 PM
const SLOT_MIN = 15; // 15-min increments

function timeToIndex(t) {
  const [H, M] = t.split(":").map(Number);
  return Math.round(((H - START_HOUR) * 60 + M) / SLOT_MIN);
}

function formatHour(h) {
  const ampm = h < 12 ? "AM" : "PM";
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12} ${ampm}`;
}

export default function CalendarView({ onSelect, schedule = [] }) {
  // include an extra slot so the END_HOUR (e.g., 22:00) is shown as a label at the bottom
  const slots = ((END_HOUR - START_HOUR) * 60) / SLOT_MIN + 1;

  return (
    <section className="calendar">
      {/* Day Headers */}
      <div className="day-header time-col" />
      {DISPLAY_DAYS.map((d) => (
        <div key={d} className="day-header">{d}</div>
      ))}

      {/* Time grid - explicitly place each cell to avoid relying on display:contents */}
      {Array.from({ length: slots }).map((_, i) => {
        const hour = START_HOUR + Math.floor((i * SLOT_MIN) / 60);
        const labelNeeded = i % (60 / SLOT_MIN) === 0;
        const row = i + 2; // row 1 = header

        return [
          <div
            key={`time-${i}`}
            className="time-cell"
            style={{ gridColumn: 1, gridRow: row }}
          >
            {labelNeeded ? formatHour(hour) : ""}
          </div>,

          ...DAYS.map((d, idx) => (
            <div
              key={`${d}-${i}`}
              className="grid-cell"
              style={{ gridColumn: idx + 2, gridRow: row }}
            />
          ))
        ];
      })}

      {/* Event blocks: for each course, render each meeting per day */}
      {schedule.flatMap((course) =>
        (course.meetings || []).flatMap((meeting, mIdx) =>
          (meeting.days || []).map((d) => {
            const colIdx = DAYS.indexOf(d);
            if (colIdx < 0) return null;

            const rowStart = 2 + timeToIndex(meeting.start);
            const rowEnd = 2 + timeToIndex(meeting.end);

            const selection = {
              courseId: course.id,
              term: course.term,
              subject: course.subject,
              number: course.number,
              section: course.section,
              title: course.title,
              instructor: course.instructor,
              location: course.location,
              meeting: { ...meeting }
            };

            return (
              <ClassCell
                key={`${course.id}-${mIdx}-${d}`}
                id={course.id}
                title={`${course.subject} ${course.number}`}
                location={course.location}
                section={course.section}
                start={meeting.start}
                end={meeting.end}
                color={meeting.color}
                instructor={course.instructor}
                status={course.status}
                gridColumn={colIdx + 2}
                gridRow={`${rowStart} / ${rowEnd}`}
                    timecode={course.timecode}
              />
            );
          })
        )
      )}
    </section>
  );
}
