export type Project = {
  name: string
  description: string
  tech: string[]
  url: string
  repo?: string
}

export const projects: Project[] = [
  {
    name: 'Project One',
    description: 'One-line description of what this does.',
    tech: ['React', 'Node.js'],
    url: 'https://example.com',
    repo: 'https://github.com/alramirez729/project-one',
  },
]
