// ─── Skills ───────────────────────────────────────────────────────────────────
// Four groups rendered in order: Leadership → AI → Technical → Domains.
// Use SKILL_LINE_BREAK as a sentinel to force a visual line break in flex-wrap.

export const SKILL_LINE_BREAK = '__break__';

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
      // Web2
      'TypeScript', 'JavaScript', 'Python', 'Vue.js', 'React', 'Angular', 'Node.js',
      SKILL_LINE_BREAK,
      // Cloud
      'GCP', 'AWS', 'Firebase', 'Alchemy',
      SKILL_LINE_BREAK,
      // Web3
      'Solidity', 'Ethers.js', 'Web3.js', 'Hardhat',
      SKILL_LINE_BREAK,
      // DevOps
      'Docker', 'GitHub Actions', 'CI/CD',
      SKILL_LINE_BREAK,
      // Architectural
      'REST APIs', 'GraphQL', 'PostgreSQL', 'SaaS Architecture', 'Microservices',
    ],
  },
  {
    id: 'domains',
    label: 'Domains',
    skills: ['Blockchain / Web3', 'Ethereum', 'Bitcoin / Ordinals', 'NFTs', 'EdTech'],
  },
];
