export const boardsData = [
  {
    id: 1,
    name: "Project Tracker",
    description: "Track project progress",
    seeRole: "admin",
    columns: [
      { id: 1, name: "To Do", cards: [{ id: 1, title: "Design homepage", description: "Create homepage design" }, { id: 2, title: "Set up database", description: "Initialize MongoDB" }] },
      { id: 2, name: "In Progress", cards: [{ id: 3, title: "API Integration", description: "Connect backend APIs" }] },
      { id: 3, name: "Done", cards: [{ id: 4, title: "Project setup", description: "Initial project scaffolding done" }] },
    ],
  },
  {
    id: 2,
    name: "Payroll Management",
    description: "Manage employee payroll efficiently.",
    seeRole: "admin",
    columns: [
      { id: 1, name: "Pending", cards: [{ id: 1, title: "Calculate salaries", description: "Calculate this month's salaries" }, { id: 2, title: "Check taxes", description: "Verify tax deductions" }] },
      { id: 2, name: "Completed", cards: [{ id: 3, title: "Send payslips", description: "Email payslips to employees" }] },
    ],
  },
  {
    id: 3,
    name: "Employee Worksheet",
    description: "Daily employee tasks and logs.",
    seeRole: "manager",
    columns: [
      { id: 1, name: "To Do", cards: [{ id: 1, title: "Task A", description: "Complete task A" }, { id: 2, title: "Task B", description: "Complete task B" }] },
      { id: 2, name: "Done", cards: [{ id: 3, title: "Task C", description: "Finished task C" }] },
    ],
  },
  {
    id: 4,
    name: "Employee List",
    description: "All employees with details.",
    seeRole: "admin",
    columns: [
      { id: 1, name: "HR Records", cards: [{ id: 1, title: "Update employee info", description: "Update new joining info" }] },
      { id: 2, name: "Completed", cards: [{ id: 2, title: "Archive old files", description: "Move old records to archive" }] },
    ],
  },
  {
    id: 5,
    name: "Project Tracker",
    description: "Track project progress and milestones.",
    seeRole: "manager",
    columns: [
      { id: 1, name: "Planned", cards: [{ id: 1, title: "Define scope", description: "Finalize project scope" }] },
      { id: 2, name: "In Progress", cards: [{ id: 2, title: "Develop features", description: "Develop main features" }] },
    ],
  },
  {
    id: 6,
    name: "Task Board",
    description: "Organize tasks and deadlines.",
    seeRole: "member",
    columns: [
      { id: 1, name: "To Do", cards: [{ id: 1, title: "Finish report", description: "Complete monthly report" }] },
      { id: 2, name: "In Progress", cards: [{ id: 2, title: "Prepare slides", description: "Work on presentation slides" }] },
    ],
  },
  {
    id: 7,
    name: "Intern Training Plan",
    description: "Plan and track intern learning progress.",
    seeRole: "intern",
    columns: [
      { id: 1, name: "Modules", cards: [{ id: 1, title: "HTML Basics", description: "Learn HTML structure" }, { id: 2, title: "CSS Basics", description: "Learn CSS styling" }] },
      { id: 2, name: "Completed", cards: [{ id: 3, title: "Git Introduction", description: "Learn git basics" }] },
    ],
  },
  {
    id: 8,
    name: "Recruitment Dashboard",
    description: "Manage job applications and interviews.",
    seeRole: "admin",
    columns: [
      { id: 1, name: "Applicants", cards: [{ id: 1, title: "Screen resumes", description: "Shortlist candidates" }] },
      { id: 2, name: "Interviews", cards: [{ id: 2, title: "Schedule interviews", description: "Arrange interview slots" }] },
    ],
  },
  {
    id: 9,
    name: "Budget Allocation",
    description: "Manage departmental budgets.",
    seeRole: "manager",
    columns: [
      { id: 1, name: "Pending Approval", cards: [{ id: 1, title: "Marketing budget", description: "Review marketing allocation" }] },
      { id: 2, name: "Approved", cards: [{ id: 2, title: "Operations budget", description: "Finalize operations budget" }] },
    ],
  },
  {
    id: 10,
    name: "Client Feedback",
    description: "Collect and review client feedback.",
    seeRole: "member",
    columns: [
      { id: 1, name: "Feedback Received", cards: [{ id: 1, title: "Client A", description: "Feedback on project X" }] },
      { id: 2, name: "Feedback Actioned", cards: [{ id: 2, title: "Client B", description: "Resolved their issues" }] },
    ],
  },
  {
    id: 11,
    name: "Meeting Schedule",
    description: "Organize team meetings and agendas.",
    seeRole: "intern",
    columns: [
      { id: 1, name: "Upcoming", cards: [{ id: 1, title: "Team Sync", description: "Schedule weekly sync" }] },
      { id: 2, name: "Done", cards: [{ id: 2, title: "Client Call", description: "Completed client call" }] },
    ],
  },
  {
    id: 12,
    name: "Performance Reviews",
    description: "Evaluate employee performance periodically.",
    seeRole: "admin",
    columns: [
      { id: 1, name: "Pending", cards: [{ id: 1, title: "Review A", description: "Evaluate employee A" }] },
      { id: 2, name: "Completed", cards: [{ id: 2, title: "Review B", description: "Evaluate employee B" }] },
    ],
  },
  {
    id: 13,
    name: "Task Assignments",
    description: "Assign tasks to team members.",
    seeRole: "manager",
    columns: [
      { id: 1, name: "To Do", cards: [{ id: 1, title: "Assign Task 1", description: "Assign task to member" }] },
      { id: 2, name: "Done", cards: [{ id: 2, title: "Assign Task 2", description: "Task completed" }] },
    ],
  },
  {
    id: 14,
    name: "Knowledge Base",
    description: "Documentation and guides for team.",
    seeRole: "member",
    columns: [
      { id: 1, name: "Articles", cards: [{ id: 1, title: "React Guide", description: "Guide for React" }] },
      { id: 2, name: "Tutorials", cards: [{ id: 2, title: "Node Tutorial", description: "Node.js tutorial" }] },
    ],
  },
  {
    id: 15,
    name: "Intern Feedback",
    description: "Collect feedback from interns.",
    seeRole: "intern",
    columns: [
      { id: 1, name: "Pending", cards: [{ id: 1, title: "Survey 1", description: "Collect feedback survey" }] },
      { id: 2, name: "Completed", cards: [{ id: 2, title: "Survey 2", description: "Completed survey" }] },
    ],
  },
  {
    id: 16,
    name: "Department Reports",
    description: "View and download department reports.",
    seeRole: "admin",
    columns: [
      { id: 1, name: "Drafts", cards: [{ id: 1, title: "Report A", description: "Draft report A" }] },
      { id: 2, name: "Published", cards: [{ id: 2, title: "Report B", description: "Published report B" }] },
    ],
  },
  {
    id: 17,
    name: "Project Budget",
    description: "Track project budget spending.",
    seeRole: "manager",
    columns: [
      { id: 1, name: "Proposals", cards: [{ id: 1, title: "Budget Proposal 1", description: "Prepare proposal" }] },
      { id: 2, name: "Approved", cards: [{ id: 2, title: "Budget Proposal 2", description: "Approved proposal" }] },
    ],
  },
  {
    id: 18,
    name: "Team To-Do List",
    description: "Shared team tasks and progress.",
    seeRole: "member",
    columns: [
      { id: 1, name: "Pending", cards: [{ id: 1, title: "Task 1", description: "Pending task" }] },
      { id: 2, name: "Completed", cards: [{ id: 2, title: "Task 2", description: "Completed task" }] },
    ],
  },
  {
    id: 19,
    name: "Training Modules",
    description: "Assign learning modules to interns.",
    seeRole: "intern",
    columns: [
      { id: 1, name: "Modules", cards: [{ id: 1, title: "Module 1", description: "Learn basics" }] },
      { id: 2, name: "Completed", cards: [{ id: 2, title: "Module 2", description: "Completed module" }] },
    ],
  },
  {
    id: 20,
    name: "Strategic Planning",
    description: "Plan company strategies.",
    seeRole: "admin",
    columns: [
      { id: 1, name: "Ideas", cards: [{ id: 1, title: "Strategy A", description: "Plan strategy A" }] },
      { id: 2, name: "Approved", cards: [{ id: 2, title: "Strategy B", description: "Approved strategy B" }] },
    ],
  },
];
