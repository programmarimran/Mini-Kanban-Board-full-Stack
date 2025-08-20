# Mini Kanban Board

A role-based **Kanban board app** built with **React**, **Tailwind CSS**, and a backend server (Node.js + MongoDB).  
Supports multiple roles: **Admin, Manager, Member, Intern**, each with different permissions on boards, columns, and cards.

**Live Demo:** [Mini Kanban Board](https://mini-kanban-board-82e51.web.app/)  
**Screenshot:** [View Screenshot](https://drive.google.com/file/d/1NNQ0z8CkUNOwLlnGbFWh-ffRLEuPQzgV/view?usp=sharing)

---

## Features

### Core Features
1. **Authentication**
   - Signup / Login
   - Password hashing
   - JWT token-based authentication

2. **Boards**
   - Users see only boards they own or are assigned to
   - Boards contain multiple columns
   - Columns contain multiple cards

3. **Columns & Cards**
   - Add, edit, delete columns and cards based on role
   - Move cards between columns
   - Optional: Drag-and-drop support

4. **Role-Based Access**
   - Admin, Manager, Member, Intern
   - Role defines CRUD permissions
   - Permissions enforced in UI and backend

5. **UI/UX**
   - Clean interface
   - Color-coded columns/cards
   - Modals for adding/editing cards

---

## Example Role-Wise Boards

| Role      | Sample Boards Example |
|-----------|----------------------|
| Admin     | Project Tracker, Payroll Management, Employee List, Recruitment Dashboard |
| Manager   | Employee Worksheet, Project Tracker, Budget Allocation, Task Assignments |
| Member    | Task Board, Client Feedback, Knowledge Base, Team To-Do List |
| Intern    | Intern Training Plan, Meeting Schedule, Intern Feedback, Training Modules |

> Boards are filtered based on the `seeRole` property in the data.

---

## Installation

### 1. Clone repository

```bash
git clone <repo_url>
cd mini-kanban-board
2. Frontend Setup
bash
Copy
Edit
cd client
npm install
Create a .env file in client/:

env
Copy
Edit
VITE_apiKey=AIzaSyDxf6...
VITE_authDomain=mini-kanban
VITE_projectId=mini-kanban
VITE_storageBucket=mini-kanban
VITE_messagingSenderId=1080986300
VITE_appId=1:10809863
VITE_Server_URL=http://localhost:5000
Run frontend:

bash
Copy
Edit
npm run dev
3. Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file in server/:

env
Copy
Edit
CONNECT_MONGODB=mongodb://localhost:27017/mini-kanban
JWT_SECRET=f105401
NODE_ENV=production
CLIENT_URL=http://localhost:5173
Run backend:

bash
Copy
Edit
npm run dev
Folder Structure
pgsql
Copy
Edit
client/
 ├─ src/
 │   ├─ assets/data/dashboardBoardData.js
 │   ├─ components/
 │   │   ├─ BoardList.jsx
 │   │   ├─ BoardView.jsx
 │   │   ├─ Column.jsx
 │   │   └─ AddCardModal.jsx
 │   ├─ layouts/
 │   │   ├─ DashboardLayout.jsx
 │   │   └─ AuthLayout.jsx
 │   ├─ pages/
 │   │   ├─ dashboard/dashboardHome/DashboardHome.jsx
 │   │   └─ auth/email&password/Login.jsx / Register.jsx
 │   └─ hooks/useUserRole.js
server/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 ├─ middleware/
 └─ index.js