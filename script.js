/* ====================================================
   1. INTERACTIVE ACADEMIC PLANNER (DOM Manipulation)
   ==================================================== */
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

if (addTaskBtn) {
  // Add task on button click
  addTaskBtn.addEventListener('click', addTask);

  // Add task on pressing "Enter" key
  taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a valid task!');
    return;
  }

  // Create list item <li>
  const li = document.createElement('li');
  li.className = 'task-item';

  // Create text container <span>
  const span = document.createElement('span');
  span.textContent = taskText;

  // Create action container for buttons
  const actionDiv = document.createElement('div');
  actionDiv.className = 'task-actions';

  // Complete Button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓ Done';
  completeBtn.className = 'complete-btn';
  completeBtn.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕ Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  // Append buttons to action container, and item to list
  actionDiv.appendChild(completeBtn);
  actionDiv.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actionDiv);
  taskList.appendChild(li);

  // Clear input box
  taskInput.value = '';
}

/* ====================================================
   2. CONTACT FORM VALIDATION (Requirements Check)
   ==================================================== */
const contactForm = document.getElementById('contactForm');
const feedbackMsg = document.getElementById('feedbackMsg');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop page refresh

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // 1. Check if any field is empty
    if (name === '' || email === '' || phone === '' || message === '') {
      showFeedback('Please fill in all fields before submitting.', 'var(--danger)');
      return;
    }

    // 2. Validate Email Format (Regex pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please enter a valid email address (e.g., student@miva.edu.ng).', 'var(--danger)');
      return;
    }

    // 3. Validate Phone Number (Only digits requirement)
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      showFeedback('Phone number must contain digits only (no spaces or letters).', 'var(--danger)');
      return;
    }

    // Success State
    showFeedback('Thank you, ' + name + '! Your message has been validated and sent successfully.', 'var(--success)');
    contactForm.reset();
  });
}

function showFeedback(text, color) {
  feedbackMsg.textContent = text;
  feedbackMsg.style.color = color;
}