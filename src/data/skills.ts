// ─── Skills ───────────────────────────────────────────────────────────────────
// Four groups rendered in order: Leadership → AI → Domains → Technical.
// Technical sits last on purpose. It is the longest block and the least
// differentiated, so it should not stand between a reader and the rest.
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
      // Practice and the tools it runs on
      'AI-Assisted Development', 'Claude Code', 'Cursor IDE', 'OpenAI Codex',
      SKILL_LINE_BREAK,
      // The craft — what makes an agent produce work worth keeping
      'Context Engineering', 'Model Selection', 'Token Optimization',
      'Skill Creation', 'Agent Instruction Design', 'Agent Guardrails',
      SKILL_LINE_BREAK,
      // Systems and organizational adoption
      'LLM Integration', 'Agentic Workflows', 'AI Tooling Adoption',
    ],
  },
  {
    id: 'domains',
    label: 'Domains',
    skills: [
      // Own row so they read first rather than trailing the blockchain set.
      'Developer Tooling', 'AI Engineering',
      SKILL_LINE_BREAK,
      'Blockchain / Web3', 'Ethereum', 'Bitcoin / Ordinals', 'NFTs', 'EdTech',
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
];
