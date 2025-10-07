import { useState } from "react";
import Header from "./Header";
import CalendarView from "./CalendarView";
import Sidebar from "./Sidebar";
import Popup from "./Popup";
import SCHEDULE from "./data/schedule";
import "./index.css";

export default function App() {
  // Ordered terms (explicit order requested)
  const ORDERED_TERMS = [
    "Fall 2024",
    "Spring 2025",
    "Winter 2025",
    "Summer 2025",
    "Fall 2025",
  ];

  // pick the most recent term present in SCHEDULE (search from newest to oldest in ORDERED_TERMS)
  const defaultTerm = (() => {
    for (let i = ORDERED_TERMS.length - 1; i >= 0; i--) {
      const t = ORDERED_TERMS[i];
      if (SCHEDULE.some((c) => c.term === t)) return t;
    }
    // fallback to the newest declared term if none are in SCHEDULE
    return ORDERED_TERMS[ORDERED_TERMS.length - 1];
  })();

  const [term, setTerm] = useState(defaultTerm);
  const [popupCourse, setPopupCourse] = useState(null);
  const [popupRect, setPopupRect] = useState(null);

  // filter schedule for the selected term
  const filtered = SCHEDULE.filter((c) => c.term === term);

  const openPopup = (course, rect = null) => {
    setPopupCourse(course);
    setPopupRect(rect || null);
  };

  return (
    <div className="app">
      <Header term={term} terms={ORDERED_TERMS} onTermChange={setTerm} />
      <main className="content">
        <div className="grid">
          <CalendarView schedule={filtered} />
          <Sidebar schedule={filtered} onOpenPopup={openPopup} />
        </div>
      </main>
      {popupCourse && (
        <Popup course={popupCourse} onClose={() => setPopupCourse(null)} rect={popupRect} />
      )}
    </div>
  );
}
