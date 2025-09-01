// Part 1: Mastering JavaScript Basics
// Array to store tasks
let tasks = [];
let taskId = 0;

// Part 2: JavaScript Functions
// Function to add a new task
function addTask(taskText) {
    if (taskText.trim() === '') {
        alert('Please enter a valid task!');
        return;
    }
    
    const task = {
        id: taskId++,
        text: taskText,
        completed: false
    };
    tasks.push(task);
    updateTaskList();
    updateTaskCounter();
}

// Function to toggle task completion status
function toggleTaskStatus(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    updateTaskList();
}

// Part 3: JavaScript Loops
// Function to filter and display tasks
function displayFilteredTasks(filter) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    // Loop through tasks array using forEach
    tasks.forEach(task => {
        if (filter === 'all' || 
            (filter === 'completed' && task.completed) || 
            (filter === 'pending' && !task.completed)) {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${task.text}</span>
                <button onclick="toggleTaskStatus(${task.id})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
            `;
            taskList.appendChild(li);
        }
    });
}

// Function to update task counter using a for loop
function updateTaskCounter() {
    let completedCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) completedCount++;
    }
    document.getElementById('taskCounter').textContent = 
        `Total Tasks: ${tasks.length} | Completed: ${completedCount}`;
}

// Part 4: DOM Manipulation
// Update task list display
function updateTaskList() {
    displayFilteredTasks('all');
}

// DOM Event Listeners
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    addTask(taskInput.value);
    taskInput.value = '';
});

document.getElementById('showAll').addEventListener('click', () => {
    displayFilteredTasks('all');
});

document.getElementById('showCompleted').addEventListener('click', () => {
    displayFilteredTasks('completed');
});

document.getElementById('showPending').addEventListener('click', () => {
    displayFilteredTasks('pending');
});

// Initialize the task list
updateTaskList();