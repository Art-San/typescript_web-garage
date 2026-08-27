"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateProject(project, command) {
    if (project.id !== command.id) {
        throw new Error('Команда относится к другому проекту');
    }
    console.log(project);
    return {
        ...project,
        name: command.name ?? project.name,
        description: command.description ?? project.description
    };
}
const project = {
    id: 1,
    createdAt: new Date(),
    name: 'Project 1',
    description: 'Description 1',
    tasks: []
};
const command = {
    id: 1,
    name: 'Project 1 Updated',
    description: 'Description 1 Updated'
};
const updatedProject = updateProject(project, command);
