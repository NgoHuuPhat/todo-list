# Todolist App

A simple Todolist application built with vanilla JavaScript, following a minimal React/Redux-like architecture for state and UI management.

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Filter tasks: All, Active, Completed
- Edit task title (double-click)
- Persist state with LocalStorage

## Installation & Usage

1. Clone or download the source code.
2. Install required packages:
   ```bash
   npm install
   ```
3. Open `tpl.html` in your browser to use the app.

## Project Structure

- `component/` - UI components (Header, Footer, TodoList, TodoItem)
- `core.js` - Template rendering and state store logic
- `reducer.js` - State reducer and actions
- `util/` - LocalStorage utilities
- `tpl.html` - Main application interface

## Notes

- The app does not use any frameworks, only ES6 modules.
- For further development, check the files in the `component/` folder and `reducer.js`.

---
