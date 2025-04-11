// Project data array
const projects = [
  {
    title: 'Registration Form',
    description: 'A responsive registration form practice project',
    path: 'Registration_Form/index.html',
  },
  {
    title: 'Responsive Ordered List',
    description: 'A responsive ordered list practice project',
    path: 'Responsive_ol/index.html',
  },
];

// Function to create project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.path}">View Project</a>
    `;

  return card;
}

// Function to render all projects
function renderProjects() {
  const container = document.getElementById('projectsContainer');

  projects.forEach((project) => {
    const card = createProjectCard(project);
    container.appendChild(card);
  });
}

// Render projects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);
