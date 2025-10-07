const SCHEDULE = [
  // -------------------- FALL 2024 --------------------
  {
    id: "MATH003_F24_02",
    term: "Fall 2024",
    subject: "MATH",
    number: "003",
    section: "02",
    title: "Calculus",
    creditHours: 1,
    instructor: "Rebecca L. Hardenbrook",
    campus: "Hanover",
    location: "Kemeny Hall 008",
    scheduleType: "Lecture",
    timecode: "10",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "10:10", end: "11:15", type: "Class", color: "#C9D8F2" },
      { days: ["Thu"], start: "12:15", end: "13:05", type: "X-hour", color: "#AEBCE5" }
    ]
  },
  {
    id: "WRIT002_F24_01",
    term: "Fall 2024",
    subject: "WRIT",
    number: "002",
    section: "01",
    title: "Composition and Research I",
    creditHours: 1,
    instructor: "Alan C. Taylor",
    campus: "Hanover",
    location: "Berry Library 371",
    scheduleType: "Lecture",
    timecode: "12",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "12:15", end: "13:05", type: "Class", color: "#E4B7F0" },
      { days: ["Tue"], start: "11:30", end: "12:35", type: "X-hour", color: "#D7A8E5" }
    ]
  },
  {
    id: "COSC001_F24_02",
    term: "Fall 2024",
    subject: "COSC",
    number: "001",
    section: "02",
    title: "Intro to Programming and Computation",
    creditHours: 1,
    instructor: "Vasanta Lakshmi Kommineni",
    campus: "Hanover",
    location: "Life Sciences Center 100",
    scheduleType: "Lecture",
    timecode: "2",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "13:20", end: "14:10", type: "Class", color: "#F2C6B6" },
      { days: ["Tue"], start: "12:50", end: "13:55", type: "X-hour", color: "#F0B8A8" }
    ]
  },

  // -------------------- WINTER 2025 --------------------
  {
    id: "WRIT003_W25_02",
    term: "Winter 2025",
    subject: "WRIT",
    number: "003",
    section: "02",
    title: "Composition and Research II",
    creditHours: 1,
    instructor: "Alan C. Taylor",
    campus: "Hanover",
    location: "Berry Library 277",
    scheduleType: "Lecture",
    timecode: "2",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "13:20", end: "14:10", type: "Class", color: "#FCE2B2" },
      { days: ["Tue"], start: "12:50", end: "13:55", type: "X-hour", color: "#FADFA5" }
    ]
  },
  {
    id: "GERM001_W25_01",
    term: "Winter 2025",
    subject: "GERM",
    number: "001",
    section: "01",
    title: "Introductory German",
    creditHours: 1,
    instructor: "Heidi D. Denzel",
    campus: "Hanover",
    location: "Dartmouth Hall 110",
    scheduleType: "Lecture",
    timecode: "9L",
    meetings: [
      { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], start: "09:05", end: "09:55", type: "Class", color: "#B7D5B0" }
    ]
  },
  {
    id: "LING001_W25_01",
    term: "Winter 2025",
    subject: "LING",
    number: "001",
    section: "01",
    title: "Introductory Linguistics",
    creditHours: 1,
    instructor: "Rolando A. Coto Solano",
    campus: "Hanover",
    location: "Carpenter Hall 201F",
    scheduleType: "Lecture",
    timecode: "12",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "12:15", end: "13:05", type: "Class", color: "#F2B6C8" },
      { days: ["Tue"], start: "11:30", end: "12:35", type: "X-hour", color: "#F0A8B5" }
    ]
  },

  // -------------------- SPRING 2025 --------------------
  {
    id: "MATH022_S25_01",
    term: "Spring 2025",
    subject: "MATH",
    number: "022",
    section: "01",
    title: "Linear Algebra with Applications",
    creditHours: 1,
    instructor: "Thomas J. Zdyrski",
    campus: "Hanover",
    location: "Kemeny Hall 105",
    scheduleType: "Lecture",
    timecode: "10",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "10:10", end: "11:15", type: "Class", color: "#C9F2D6" },
      { days: ["Thu"], start: "12:15", end: "13:05", type: "X-hour", color: "#B5E8C2" }
    ]
  },
  {
    id: "COLT079_S25_01",
    term: "Spring 2025",
    subject: "COLT",
    number: "079",
    section: "01",
    title: "Lit of the Colonial Encounter",
    creditHours: 1,
    instructor: "Ayo A. Coly",
    campus: "Hanover",
    location: "Reed Hall 106",
    scheduleType: "Lecture",
    timecode: "2",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "13:20", end: "14:10", type: "Class", color: "#F6CFB7" },
      { days: ["Tue"], start: "12:50", end: "13:55", type: "X-hour", color: "#F4C1A5" }
    ]
  },
  {
    id: "COSC050_S25_01",
    term: "Spring 2025",
    subject: "COSC",
    number: "050",
    section: "01",
    title: "Software Design and Implementation",
    creditHours: 1,
    instructor: "Kyungtae Kim",
    campus: "Hanover",
    location: "Life Sciences Center 200",
    scheduleType: "Lecture",
    timecode: "3B",
    meetings: [
      { days: ["Mon", "Wed"], start: "15:30", end: "17:20", type: "Class", color: "#E7E0A5" },
      { days: ["Thu"], start: "17:30", end: "18:20", type: "X-hour", color: "#E4D882" }
    ]
  },

  // -------------------- FALL 2025 --------------------
  {
    id: "LING035_F25_01",
    term: "Fall 2025",
    subject: "LING",
    number: "035",
    section: "01",
    title: "Field Methods",
    creditHours: 1,
    instructor: "Laura E. McPherson",
    campus: "Hanover",
    location: "Anonymous Hall 202",
    scheduleType: "Lecture",
    timecode: "10A",
    meetings: [
      { days: ["Tue", "Thu"], start: "10:10", end: "12:00", type: "Class", color: "#E8B6F2" },
      { days: ["Fri"], start: "15:30", end: "16:20", type: "X-hour", color: "#E0A3EA" }
    ]
  },
  {
    id: "COSC067_F25_01",
    term: "Fall 2025",
    subject: "COSC",
    number: "067",
    section: "01",
    title: "Human-Computer Interaction",
    creditHours: 1,
    instructor: "Nikhil U. Singh",
    campus: "Hanover",
    location: "Cummings 100",
    scheduleType: "Lecture",
    timecode: "3A",
    meetings: [
      { days: ["Mon", "Wed"], start: "15:30", end: "17:20", type: "Class", color: "#EFE3A4" },
      { days: ["Thu"], start: "17:30", end: "18:20", type: "X-hour", color: "#E4D882" }
    ]
  },
  {
    id: "PHYS013_F25_02",
    term: "Fall 2025",
    subject: "PHYS",
    number: "013",
    section: "02",
    title: "Introductory Physics I",
    creditHours: 1,
    instructor: "James W. LaBelle",
    campus: "Hanover",
    location: "Wilder Hall 104",
    scheduleType: "Lecture",
    timecode: "12",
    meetings: [
      { days: ["Mon", "Wed", "Fri"], start: "12:15", end: "13:05", type: "Class", color: "#B7D5B0" },
      { days: ["Tue"], start: "12:30", end: "13:35", type: "X-hour", color: "#A3C7A2" }
    ]
  }
];

export default SCHEDULE;
