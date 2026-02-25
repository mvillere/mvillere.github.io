// ─── Skills ───────────────────────────────────────────────────────────────────
// Four groups rendered in order: Leadership → AI → Technical → Domains.

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'leadership',
    label: 'Leadership',
    skills: [
      'Engineering Management',
      'Team Building',
      'Technical Recruiting',
      'Distributed & Offshore Teams',
      'Agile / Scrum',
      'Roadmap & Prioritization',
      'Stakeholder Communication',
      'Developer Mentoring',
      'Budget & Headcount Planning',
      'Architecture Review',
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    skills: [
      'AI-Assisted Development',
      'Claude Code',
      'Cursor IDE',
      'GitHub Copilot',
      'Prompt Engineering',
      'LLM Integration',
      'Agentic Workflows',
      'AI Tooling Adoption',
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Solidity',
      'Vue.js',
      'React',
      'Node.js',
      'AWS',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'Ethers.js',
      'Web3.js',
      'SaaS Architecture',
      'Microservices',
    ],
  },
  {
    id: 'domains',
    label: 'Domains',
    skills: ['Blockchain / Web3', 'Ethereum', 'Bitcoin / Ordinals', 'NFTs', 'EdTech'],
  },
];
