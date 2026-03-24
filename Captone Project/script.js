document.addEventListener('DOMContentLoaded', () => {
    let tasks = [
        { title: 'Python Final Project', desc: 'Project', status: 'todo'},
        { title: 'Dark/Light Mode Implementation', desc: 'UI logic', status: 'todo'},
        { title: 'Web Module Capstone Project', desc: 'Developing Dashboard', status: 'inprogress'},
        { title: 'Taxpal Project', desc: 'Project Finalized', status: 'done'},
        { title: 'Gusto Project', desc: 'Project Finalized', status: 'done'},
    ];

    const todoList = document.getElementById('todo-list');
    const inprogressList = document.getElementById('inprogress-list');
    const doneList = document.getElementById('done-list');

    const modal = document.getElementById('taskModel'); 
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('taskForm');

    function renderApp() {
        if(todoList) todoList.innerHTML = '';
        if(inprogressList) inprogressList.innerHTML = '';
        if(doneList) doneList.innerHTML = '';

        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = `
                <h4>${task.title}</h4>
                <p>${task.desc}</p>
            `;

            if (task.status === 'todo' && todoList) todoList.appendChild(card);
            else if (task.status === 'inprogress' && inprogressList) inprogressList.appendChild(card);
            else if (task.status === 'done' && doneList) doneList.appendChild(card);
        });

        const totalEl = document.getElementById('total-count');
        const progressEl = document.getElementById('progress-count');
        const completedEl = document.getElementById('completed-count');

        if(totalEl) totalEl.innerText = tasks.length;
        if(progressEl) progressEl.innerText = tasks.filter(t => t.status === 'inprogress').length;
        if(completedEl) completedEl.innerText = tasks.filter(t => t.status === 'done').length;
    }

    if(openBtn && modal) {
        openBtn.onclick = () => { modal.style.display = 'flex'; };
    }
    
    if(closeBtn && modal) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
            form.reset();
        };
    }

    if(form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const newTask = {
                title: document.getElementById('taskTitle').value,
                desc: document.getElementById('taskDesc').value,
                status: document.getElementById('taskStatus').value
            };
            tasks.push(newTask);
            renderApp();
            form.reset();
            modal.style.display = 'none';
        };
    }

    renderApp();
});