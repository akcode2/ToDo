
// Create objects using factory functions

// Package item details into a package and return it
const createItem = (title, description, dueDate, priority, notes) => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    completion
});

// The project object just contains an array of items
const createProject = () => ({
    itemList: []
});

const createWorkspace = () => ({
    projList: []
})

// Expose the functions globally so they can be accessed from the console.
window.createItem = createItem;
window.createProject = createProject;
window.createWorkspace = createWorkspace;

