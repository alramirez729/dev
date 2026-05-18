export type Project = {
  name: string
  description: string
  tech: string[]
  url: string
  repo?: string
}

export const projects: Project[] = [
  {
    name: 'car vs car',
    description: 'compare cars, get AI recommendations, have a mild argument with your friends about which one is objectively better',
    tech: ['React', 'TypeScript', 'OpenAI', 'Vercel'],
    url: 'https://car-vs-car-webapp.vercel.app/',
    repo: 'https://github.com/alramirez729/CarVsCar',
  },
  {
    name: 'MBTA live',
    description: "real-time Boston transit tracker (for when the T is lying to you) currently NOT in service",
    tech: ['React', 'Node.js', 'REST APIs'],
    url: 'https://se24mbta-0tek.onrender.com/',
  },
  {
    name: 'SSU Social',
    description: 'social platform built on the MERN stack with S3 under the hood',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'AWS S3'],
    url: 'https://ssu-social-app.onrender.com/',
  },
]
