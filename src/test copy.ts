type Project = {
  readonly id: number
  readonly createdAt: Date
  name: string
  description: string
  readonly tasks: readonly Task[]
}

type Participant = {
  readonly id: number
  readonly createdAt: Date
  userId: number
  projectId: number
  role: 'admin' | 'member'
}

type Task = {
  readonly id: number
  readonly createdAt: Date
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'done'
  projectId: number
}

type UserSettings = Record<string, string | number | boolean>

type CreateProjectCommand = {
  name: string
  description: string
}

type UpdateProjectCommand = {
  id: number
  name?: string
  description?: string
}

function updateProject(
  project: Project,
  command: UpdateProjectCommand
): Project {
  if (project.id !== command.id) {
    throw new Error('Команда относится к другому проекту')
  }

  console.log(project)
  return {
    ...project,
    name: command.name ?? project.name,
    description: command.description ?? project.description
  }
}

const project: Project = {
  id: 1,
  createdAt: new Date(),
  name: 'Project 1',
  description: 'Description 1',
  tasks: []
}

const command: UpdateProjectCommand = {
  id: 1,
  name: 'Project 1 Updated',
  description: 'Description 1 Updated'
}

const updatedProject = updateProject(project, command)
