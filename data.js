// All course data shown on the site.
// To update a grade, change the "score" value (null = not graded yet).
// status: "late" | "missing" | null
// state: "hidden" (instructor has not posted), "submitted" (submitted, not graded),
//        "text" (text entry submitted), "pending" (quiz pending), "none" (dash) or omit for graded.

window.STUDENT = { name: "Danial Shaikh", term: "Fall 2026" };

window.COURSES = {
  feas: {
    id: "feas",
    code: "FEAS - Upper Year Academic Advi...",
    name: "FEAS - Upper Year Academic Advising",
    short: "FEAS - Upper Year Academic ...",
    color: "#273d80",
    term: null,
    cardIcons: [["announcements", 6], ["discussions"]],
    nav: ["Home", "Announcements", "Discussions", "People", "Files"],
  },
  capstone1: {
    id: "capstone1",
    code: "202609 - Capstone Systems Desi...",
    name: "202609 - Capstone Systems Design I - 46382",
    short: "202609 - Capstone Systems ...",
    color: "#d12a0a",
    titleColor: "#d12a0a",
    term: "Fall 2026",
    cardIcons: [["announcements", 7], ["assignments"], ["discussions"]],
    nav: ["Home", "Announcements", "Assignments", "Discussions", "Grades", "People", "Files", "Syllabus", "Modules"],
  },
  deeplearning: {
    id: "deeplearning",
    code: "202609 - Deep Learning Arch and...",
    name: "202609 - Deep Learning Arch and Alg - 46374",
    crumb: "202609 - Deep Learning Arch and Alg - 46374",
    short: "202609 - Deep Learning Arch...",
    color: "#5b2a96",
    titleColor: "#7b2fb0",
    image: "assets/deep-learning.jpg",
    term: "Fall 2026",
    cardIcons: [["announcements", 6], ["assignments"], ["discussions"], ["files"]],
    nav: ["Home", "Announcements", "Assignments", "Discussions", "Grades", "People", "Files", "Syllabus", "Quizzes", "Modules", "Media Gallery", "Notebook"],
  },
  distributed: {
    id: "distributed",
    code: "202609 - Distributed Systems - 4...",
    name: "202609 - Distributed Systems - 43524",
    short: "202609 - Distributed System...",
    color: "#3a3f55",
    titleColor: "#2d3b45",
    image: "assets/distributed.jpg",
    term: "Fall 2026",
    cardIcons: [["announcements", 12], ["assignments"], ["discussions"], ["files"]],
    gradesBadge: 1,
    nav: ["Home", "Announcements", "Assignments", "Discussions", "Grades", "People", "Files", "Syllabus", "Quizzes", "Modules", "BigBlueButton", "Collaborations", "Notebook", "Google Drive", "Wiley Course Resources", "Parchment Badges", "Media Gallery"],
  },
  embedded: {
    id: "embedded",
    code: "202609 - Embedded Systems - 44...",
    name: "202609 - Embedded Systems - 44425",
    short: "202609 - Embedded Systems...",
    color: "#0770b5",
    titleColor: "#0770b5",
    term: "Fall 2026",
    cardIcons: [["announcements", 6], ["assignments"], ["discussions"], ["files"]],
    nav: ["Home", "Announcements", "Assignments", "Discussions", "Grades", "People", "Pages", "Files", "Syllabus", "Quizzes", "Modules", "BigBlueButton", "Collaborations", "Notebook", "Google Drive", "Wiley Course Resources", "Parchment Badges", "Media Gallery"],
  },
  capstone2: {
    id: "capstone2",
    code: "202701 - Capstone Systems Desi...",
    name: "202701 - Capstone Systems Design II",
    short: "202701 - Capstone Systems ...",
    color: "#637083",
    titleColor: "#2d3b45",
    term: "Winter 2027",
    cardIcons: [["discussions"]],
    nav: ["Home", "Announcements", "Discussions", "People"],
  },
  ai: {
    id: "ai",
    code: "Academic Integrity Modules for S...",
    name: "Academic Integrity Modules for Students",
    short: "AI for Students FEAS",
    color: "#4f3a4f",
    titleColor: "#2d3b45",
    term: null,
    cardIcons: [],
    nav: ["Home", "Modules"],
  },
};

window.DASHBOARD_ORDER = ["feas", "capstone1", "deeplearning", "distributed", "embedded", "capstone2", "ai"];

window.TODO = [
  { icon: "announcement", title: "Final Exams: A Little Pla...", course: "FEAS - Upper Year Academic Advising", when: "Nov 13 at 2:30pm", cid: "feas" },
  { icon: "assignment", title: "CONDITIONAL GROU...", course: "202609 - Capstone Systems Design I - 46382", when: "Closed", cid: "capstone1" },
  { icon: "announcement", title: "Challenge 7", course: "202609 - Deep Learning Arch and Alg - 46374", when: "Nov 14 at 10:15am", cid: "deeplearning" },
  { icon: "announcement", title: "Final exam", course: "202609 - Distributed Systems - 43524", when: "Nov 14 at 1:41pm", cid: "distributed" },
  { icon: "announcement", title: "Office Hours Today", course: "202609 - Embedded Systems - 44425", when: "Nov 16 at 9:43am", cid: "embedded" },
  { icon: "announcement", title: "CAPSTONE SYSTEMS...", course: "202609 - Capstone Systems Design I - 46382", when: "Nov 16 at 12:46pm", cid: "capstone1" },
  { icon: "announcement", title: "CAPSTONE SYSTEMS...", course: "202609 - Capstone Systems Design I - 46382", when: "Nov 17 at 12:15am", cid: "capstone1" },
];

// ---------------- Course home pages (modules + right sidebar) ----------------
window.HOMES = {
  embedded: {
    modules: [{ title: "Labs", items: [{ type: "page", name: "Lab Information" }] }],
    todo: [{ title: "Office Hours Today", course: "202609 - Embedded Systems - 44425", when: "Nov 16 at 9:43am" }],
    groups: ["Lab CRN 44428 Group 5"],
    feedback: [
      { name: "Lab 3 Submission", course: "202609 - Embedded Systems - 44425", score: "8 out of 0", comment: "part 1 misses explanations" },
      { name: "Quiz 2- Requires Respondus LockDown Browser", course: "202609 - Embedded Systems - 44425" },
    ],
  },
  deeplearning: {
    modules: [
      { title: "Course Outline", items: [{ type: "file", name: "ARTE4110U_Course_Outline_Fall_2026.pdf" }] },
      { title: "Week 1 - Introduction and Learning Types", items: [
        { type: "file", name: "01_introduction.pdf" },
        { type: "assignment", name: "Challenge 1: Data Preparation and Learning Types", meta: "Sep 16 &nbsp; 0 pts" },
      ] },
      { title: "Week 2 - Supervised Learning", items: [
        { type: "file", name: "02_Supervised_Learning.pdf" },
        { type: "file", name: "03_Shallow_Networks.pdf" },
      ] },
    ],
    todo: [],
    groups: ["Group 9"],
    feedback: [
      { name: "Quiz 4 - Challenge 7 - Residual Networks- Requires Respondus LockDown Browser", course: "202609 - Deep Learning Arch and Alg - 46374", score: "10 out of 10" },
      { name: "Milestone 2: Technical Checkpoint", course: "202609 - Deep Learning Arch and Alg - 46374", score: "18.5 out of 20" },
      { name: "Quiz 3 - Challenges 5 & 6- Requires Respondus LockDown Browser", course: "202609 - Deep Learning Arch and Alg - 46374", score: "4 out of 10" },
    ],
  },
  distributed: {
    modules: [{ title: "Course Notes", items: [
      { type: "file", name: "Lec00-SOFE4790U-Syllabus.pdf" },
      { type: "file", name: "Lec01-SOFE4790U-Introduction.pdf" },
      { type: "file", name: "Lec02-SOFE4790U-FailureDetection.pdf" },
      { type: "file", name: "Lec03-SOFE4790U-Clocks.pdf" },
      { type: "file", name: "Lec04-SOFE4790U-LogicalTimestamps .pdf" },
      { type: "file", name: "Lec05-SOFE4790U-GlobalState.pdf" },
      { type: "file", name: "Lec06-SOFE4790U-Multicast.pdf" },
      { type: "file", name: "Lec06A-TO-Multicast.pptx" },
    ] }],
    todo: [],
    groups: ["Project (5) 14", "Lab (CRN 43525) 19"],
    feedback: [
      { name: "Project Report and Code", course: "202609 - Distributed Systems - 43524", comment: "Video showcasing project is in docs/ inside the zip." },
      { name: "Lab 4 43525", course: "202609 - Distributed Systems - 43524", score: "9.5 out of 10", comment: "Avoid beginning paragraphs with questions. Use clear, introductory statements to maintain a formal and professional t..." },
      { name: "Project proposal grading", course: "202609 - Distributed Systems - 43524", score: "10 out of 10" },
    ],
    moreFeedback: 2,
  },
};

// ---------------- Grades ----------------
window.GRADES = {
  embedded: {
    totalsEnabled: true,
    groups: ["Midterm", "Quiz", "Assignments"],
    items: [
      { name: "Lab 1 Submission", group: "Assignments", due: "Sep 24 by 11:59p.m.", submitted: "Sep 24 at 8:27p.m.", score: 8, possible: 0, comments: 2 },
      { name: "Quiz 1", group: "Quiz", groupLabel: "Quiz", due: "Oct 5 by 9:10a.m.", submitted: "Oct 5 at 9:10a.m.", score: 3, possible: 5, whatif: true },
      { name: "Lab 2 Submission", group: "Assignments", due: "Oct 8 by 11:59p.m.", submitted: "Oct 8 at 8:13p.m.", score: 10, possible: 0 },
      { name: "SOFE 4590 Fall 2026 Midterm", group: "Midterm", due: "Oct 19 by 9:20a.m.", submitted: "Oct 19 at 9:20a.m.", score: 17, possible: 20, whatif: true },
      { name: "Assignment 1", group: "Assignments", due: "Oct 27 by 11:59p.m.", submitted: "Oct 27 at 4:28p.m.", score: 12.5, possible: 12.5, whatif: true },
      { name: "Lab 3 Submission", group: "Assignments", due: "Oct 29 by 11:59p.m.", submitted: "Oct 29 at 8:51p.m.", score: 8, possible: 0, comments: 1, commentText: ["part 1 misses explanations"] },
      { name: "Quiz 2- Requires Respondus LockDown Browser", group: "Quiz", due: "Nov 9 by 9:10a.m.", submitted: "Nov 9 at 9:06a.m.", score: null, possible: 5, state: "pending" },
      { name: "Lab 4 Submission", group: "Assignments", due: "Nov 12 by 11:59p.m.", submitted: "Nov 12 at 3:59p.m.", score: null, possible: 0, state: "hidden" },
      { name: "Assignment 2", group: "Assignments", due: "Nov 24 by 11:59p.m.", submitted: "Nov 24 at 9:28p.m.", score: null, possible: 12.5, state: "hidden" },
      { name: "Lab 5 Submission", group: "Assignments", due: "Nov 26 by 11:59p.m.", submitted: "Nov 19 at 3:15p.m.", score: null, possible: 0, state: "submitted" },
      { name: "stu ack", group: "Assignments", due: "", submitted: "Sep 24 at 12:39p.m.", score: null, possible: 0, state: "text" },
    ],
  },

  distributed: {
    totalsEnabled: true,
    groups: ["Labs", "Quizzes", "Project", "MidtermExam"],
    items: [
      { name: "Lab 1 43525", group: "Labs", due: "Oct 1 by 11:59p.m.", submitted: "Oct 1 at 7:22p.m.", score: 9, possible: 10, whatif: true, comments: 2 },
      { name: "Project Proposal", group: "Project", due: "Oct 20 by 11:59p.m.", submitted: "", status: "missing", score: null, possible: 10, state: "hidden" },
      { name: "Lab 2 43525", group: "Labs", due: "Oct 22 by 11:59p.m.", submitted: "Oct 15 at 6:49p.m.", score: 9.5, possible: 10, whatif: true, comments: 1 },
      { name: "Lab 3 43525", group: "Labs", due: "Nov 5 by 11:59p.m.", submitted: "Nov 5 at 8:44p.m.", score: null, possible: 10, state: "submitted" },
      { name: "Lab 4 43525", group: "Labs", due: "Nov 19 by 11:59p.m.", submitted: "Nov 19 at 9:05p.m.", score: 9.5, possible: 10, whatif: true, comments: 1, unread: true,
        commentText: ["Avoid beginning paragraphs with questions. Use clear, introductory statements to maintain a formal and professional t..."] },
      { name: "Contribution Matrix For Your Entire team", group: "Project", due: "Nov 25 by 11:59p.m.", submitted: "", status: "missing", score: null, possible: null, state: "none" },
      { name: "Project Report and Code", group: "Project", due: "Nov 25 by 11:59p.m.", submitted: "Nov 25 at 11:32p.m.", score: null, possible: 7.5, state: "submitted", comments: 1,
        commentText: ["Video showcasing project is in docs/ inside the zip."] },
      { name: "Lab 5 CRN 43526", group: "Labs", due: "Dec 1 by 11:59p.m.", submitted: "", score: null, possible: 10 },
      { name: "Lab 5 43525", group: "Labs", due: "Dec 3 by 11:59p.m.", submitted: "", score: null, possible: 10 },
      { name: "Project Presentation", group: "Project", due: "", submitted: "", score: null, possible: 10, state: "hidden" },
      { name: "Project proposal grading", group: "Project", due: "", submitted: "", score: 10, possible: 10, whatif: true },
      { name: "Q1-mid", group: "MidtermExam", due: "", submitted: "", score: 43, possible: 60, whatif: true },
      { name: "Q2-mid", group: "MidtermExam", due: "", submitted: "", score: 17, possible: 20, whatif: true },
      { name: "Q3-mid", group: "MidtermExam", due: "", submitted: "", score: 16, possible: 20, whatif: true },
      { name: "Safety Instructions", group: "Labs", due: "", submitted: "", score: null, possible: 0 },
      { name: "SOFE4790U-Q4", group: "Quizzes", due: "", submitted: "Nov 12 at 4:36p.m.", score: 10, possible: 10, whatif: true },
      { name: "SOFE4790U-Quiz-1", group: "Quizzes", due: "", submitted: "Sep 22 at 4:36p.m.", score: 10, possible: 10, whatif: true },
      { name: "SOFE4790U-Quiz2", group: "Quizzes", due: "", submitted: "Oct 6 at 4:17p.m.", score: 6.5, possible: 10, whatif: true },
      { name: "SOFE4790U-Quiz3", group: "Quizzes", due: "", submitted: "Nov 3 at 4:42p.m.", score: 10, possible: 10, whatif: true },
      { name: "SOFE4790U-Quiz5", group: "Quizzes", due: "", submitted: "Nov 24 at 4:42p.m.", score: 10, possible: 10, whatif: true },
      { name: "test Quiz- Requires Respondus LockDown Browser", group: "Quizzes", due: "", submitted: "Sep 24 at 12:51p.m.", score: 3, possible: 3, whatif: true },
    ],
  },

  deeplearning: {
    totalsEnabled: false,
    groups: ["Midterm", "Project Milestones", "Quizzes", "Assignments", "Weekly Challenges"],
    items: [
      { name: "Challenge 1: Data Preparation and Learning Types", group: "Weekly Challenges", due: "Sep 16 by 11:59p.m.", submitted: "Sep 22 at 10:52a.m.", status: "late", score: null, possible: 0, state: "hidden" },
      { name: "Challenge 2: Linear Regression Model", group: "Weekly Challenges", due: "Sep 23 by 11:59p.m.", submitted: "Sep 23 at 4:36p.m.", score: null, possible: 0, state: "hidden" },
      { name: "Quiz 1 - Challenges 1 & 2- Requires Respondus LockDown Browser", group: "Quizzes", due: "Sep 25 by 8:30p.m.", submitted: "Sep 25 at 8:27a.m.", score: 6, possible: 10, whatif: true },
      { name: "Challenge 3: Shallow vs. Deep Networks", group: "Weekly Challenges", due: "Sep 30 by 11:59p.m.", submitted: "Sep 28 at 8:34a.m.", score: null, possible: 0, state: "hidden" },
      { name: "Assignment #1 - Shallow Neural Network", group: "Assignments", due: "Oct 1 by 11:59p.m.", submitted: "Oct 1 at 8:46p.m.", score: 98, possible: 100, whatif: true, rubric: true },
      { name: "Challenge 4: Deep Learning on MNIST", group: "Weekly Challenges", due: "Oct 7 by 11:59p.m.", submitted: "Oct 15 at 6:50p.m.", status: "late", score: null, possible: 0, state: "hidden" },
      { name: "Quiz 2 - Challenges 3 & 4- Requires Respondus LockDown Browser", group: "Quizzes", due: "Oct 9 by 8:30a.m.", submitted: "", status: "missing", score: null, possible: 10, state: "hidden" },
      { name: "Assignment #2 - Loss Functions and Deep Neural Network", group: "Assignments", due: "Oct 22 by 11:59p.m.", submitted: "", score: 76.5, possible: 100, whatif: true, rubric: true },
      { name: "Midterm Exam- Requires Respondus LockDown Browser", group: "Midterm", due: "Oct 27 by 9:30a.m.", submitted: "Oct 27 at 9:30a.m.", score: 42.5, possible: 55, whatif: true },
      { name: "Milestone 1: Proposal and Project Plan", group: "Project Milestones", due: "Nov 3 by 11:59p.m.", submitted: "Nov 3 at 10:58p.m.", score: 16.5, possible: 20, whatif: true, rubric: true },
      { name: "Challenge 5: Initialization and Gradient Flow", group: "Weekly Challenges", due: "Nov 6 by 11:59p.m.", submitted: "Nov 7 at 3:05p.m.", status: "late", score: null, possible: 0, state: "hidden" },
      { name: "Challenge 6: 1D Convolutional Neural Networks", group: "Weekly Challenges", due: "Nov 11 by 11:59p.m.", submitted: "Nov 11 at 3:07p.m.", score: null, possible: 0, state: "hidden" },
      { name: "Quiz 3 - Challenges 5 & 6- Requires Respondus LockDown Browser", group: "Quizzes", due: "Nov 13 by 8:30a.m.", submitted: "Nov 13 at 8:22a.m.", score: 8, possible: 10, whatif: true },
      { name: "Assignment #3 - CNN on CIFAR", group: "Assignments", due: "Nov 17 by 11:59p.m.", submitted: "", status: "missing", score: null, possible: 100, state: "hidden" },
      { name: "Challenge 7: Residual Network", group: "Weekly Challenges", due: "Nov 19 by 11:59p.m.", submitted: "Nov 19 at 5:24p.m.", score: null, possible: 0, state: "hidden" },
      { name: "Quiz 4 - Challenge 7 - Residual Networks- Requires Respondus LockDown Browser", group: "Quizzes", due: "Nov 20 by 8:30a.m.", submitted: "Nov 20 at 8:23a.m.", score: 10, possible: 10, whatif: true },
      { name: "Milestone 2: Technical Checkpoint", group: "Project Milestones", due: "Nov 22 by 11:59p.m.", submitted: "Nov 22 at 11:58p.m.", score: 18.5, possible: 20, whatif: true, rubric: true },
      { name: "Final Project – Presentation and Demonstration", group: "Project Milestones", due: "Nov 29 by 11:59p.m.", submitted: "", score: null, possible: 20, state: "hidden" },
      { name: "Final Project: Documented Contribution", group: "Project Milestones", due: "Dec 4 by 11:59p.m.", submitted: "", score: null, possible: 10, state: "hidden" },
      { name: "Final Project: Implementation and Technical Report", group: "Project Milestones", due: "Dec 4 by 11:59p.m.", submitted: "", score: null, possible: 100, state: "hidden" },
      { name: "Assignment #4 - Technical Peer Evaluation of Projects", group: "Assignments", due: "Dec 7 by 4:40p.m.", submitted: "", score: null, possible: 40, state: "hidden" },
      { name: "Short Practice - Midterm Exam", group: "Midterm", due: "", submitted: "", score: null, possible: 0, state: "hidden" },
      { name: "Test Quiz - TEST YOUR LOCKDOWN BROWSER- Requires Respondus LockDown Browser", group: "Quizzes", due: "", submitted: "Sep 24 at 12:48p.m.", score: 0, possible: 0 },
    ],
  },
};
