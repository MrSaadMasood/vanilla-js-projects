# Task Manager Web Application

This project is a simple web-based task manager created using HTML, CSS, and JavaScript. It allows users to add, view, mark tasks as complete, and delete tasks.

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [HTML Structure](#html-structure)
  - [CSS Styling](#css-styling)
  - [JavaScript Logic](#js-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features <a name="features"></a>

- Add new tasks with a name and description.
- Mark tasks as complete or incomplete.
- Delete tasks.
- View task details by clicking on the task name.

## File Structure <a name="file-structure"></a>

- **index.html**: Main HTML file for the application.
- **styles.css**: External CSS file for styling.
- **taskManager.js**: External JavaScript file containing application logic.

## Getting Started <a name="getting-started"></a>

To run this application locally, simply download the files and open `index.html` in a web browser.

## Usage <a name="usage"></a>

- Click the "Add Tasks" button to open the task input form.
- Enter the task name and description, then click "Submit" to create a new task.
- Tasks are displayed in the main interface.
- Click a task name to view its description in a separate box.
- Use the "Mark as Complete" button to change the task status.
- Click the "Delete" button to remove a task.

## Code Explanation <a name="code-explanation"></a>

### HTML Structure <a name="html-structure"></a>

The HTML file (`index.html`) defines the structure of the web page, including the main container, navigation bar, task manager interface, and various form elements.

### CSS Styling <a name="css-styling"></a>

Styling is handled by the `styles.css` file, which provides a clean and modern appearance to the application. It utilizes Flexbox and Grid for layout management.

# JavaScript Documentation <a name="js-documentation"></a>

## Table of Contents

1. [Initialization](#initialization)
2. [Form Handling](#form-handling)
3. [Task Creation](#task-creation)
4. [Task Description Display](#task-description-display)
5. [Storage Management](#storage-management)
6. [Event Listeners](#event-listeners)

---

### Initialization <a name="initialization"></a>

#### Variables

- **`taskObject`**: An empty object initialized to store task data.
- **`AnothertaskNumber`**: A variable initialized to 0 to keep track of task numbers.

#### Page Initialization

- The `DOMContentLoaded` event listener is used to execute code once the DOM is fully loaded.
- Retrieves data from local storage using `localStorage.getItem("tasksInfo")`.
- Parses the retrieved data and copies it to `taskObject`.
- Creates new tasks based on the retrieved data and updates the task number.

### Form Handling <a name="form-handling"></a>

#### Elements

- **`addButton`**: Button to show the task input form.
- **`form`**: Task input form.
- **`taskManager`**: Container for displaying tasks.

#### Functions

- **`showForm`**: Displays the task input form and hides the task manager.
- **`submitForm`**: Handles form submission, creates new tasks, and updates local storage.
- **`cancelForm`**: Handles form cancellation.

### Task Creation <a name="task-creation"></a>

#### Function

- **`newTaskCreate(name, number, status)`**: Creates a new task div and its children based on user input.
- Creates HTML elements dynamically for task name, status, and delete button.
- Appends the new task div to the task manager.

### Task Description Display <a name="task-description-display"></a>

#### Elements

- **`desciptionBoxDiv`**: Container for displaying task descriptions.

#### Function

- **`desciptionBox(descript)`**: Displays the task description in a separate box.
- Clears existing content in the description box.
- Creates HTML elements for description heading and detail.
- Appends the elements to the description box.

### Storage Management <a name="storage-management"></a>

#### Variables

- **`anotherTaskObject`**: An object initialized to store task data, initially set to `taskObject`.
- **`taskNumber`**: Number of tasks, retrieved from local storage or set to 0.

#### Functions

- **`StorageUpdater`**: Updates local storage with task data using `localStorage.setItem`.

### Event Listeners <a name="event-listeners"></a>

#### Elements

- Various buttons and elements related to form submission, cancellation, and task manipulation.

#### Functions

- Event listeners are attached to buttons and elements to trigger specific actions.
- Examples include submitting the form, canceling the form, updating task status, deleting tasks, and displaying task descriptions.


## License <a name="license"></a>

This project is licensed under the [MIT License](LICENSE).
