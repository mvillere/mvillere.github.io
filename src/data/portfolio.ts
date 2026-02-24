// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectStatus = 'live' | 'archived' | 'coming-soon' | 'placeholder';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  status: ProjectStatus;
  year: string;
  org?: string;
  chain?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string | null;
  publishedAt: string;
  tags: string[];
}

// ─── NFT Smart Contracts ──────────────────────────────────────────────────────
// Smart contracts that create NFTs or are directly part of the NFT
// creation / operational stack.

export const nftContracts: Project[] = [
  {
    id: 'nft-placeholder-1',
    title: '[PLACEHOLDER] Project Name',
    description: '[PLACEHOLDER] Description of this NFT smart contract and its role in the project.',
    tags: ['Solidity', 'ERC-721', 'Ethereum'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'nft-placeholder-2',
    title: '[PLACEHOLDER] Project Name',
    description: '[PLACEHOLDER] Description of this NFT smart contract and its role in the project.',
    tags: ['Solidity', 'ERC-1155', 'Ethereum'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'nft-placeholder-3',
    title: '[PLACEHOLDER] Project Name',
    description: '[PLACEHOLDER] Description of this NFT smart contract and its role in the project.',
    tags: ['Solidity', 'ERC-721A', 'Ethereum'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
];

// ─── Infrastructure / Tool Smart Contracts ────────────────────────────────────
// Smart contracts not directly tied to NFT creation — payment splitters,
// access control, utility contracts, etc.

export const infraContracts: Project[] = [
  {
    id: 'infra-placeholder-1',
    title: '[PLACEHOLDER] Contract Name',
    description: '[PLACEHOLDER] Description of what this infrastructure contract does and the problem it solves.',
    tags: ['Solidity', 'Ethereum'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'infra-placeholder-2',
    title: '[PLACEHOLDER] Contract Name',
    description: '[PLACEHOLDER] Description of what this infrastructure contract does and the problem it solves.',
    tags: ['Solidity', 'Ethereum'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
];

// ─── Open Source ──────────────────────────────────────────────────────────────
// Publicly released libraries and frameworks.

export const openSource: Project[] = [
  {
    id: 'nftc-contracts',
    title: 'nftc-contracts',
    description:
      'Core Solidity smart contract library for NFT Culture. Provides reusable base contracts, mixins, and extensions used across NFT Culture projects and the broader community.',
    tags: ['Solidity', 'ERC-721', 'ERC-1155', 'OpenZeppelin'],
    links: [{ label: 'GitHub', url: 'https://github.com/NFTCulture/nftc-contracts' }],
    status: 'live',
    year: '2021–2023',
    org: 'NFT Culture',
  },
  {
    id: 'testarossa',
    title: 'Testarossa',
    description:
      'A templating framework for building smart contracts and mint microsites. Enables rapid, standardized deployment of NFT project infrastructure with consistent, auditable patterns across projects.',
    tags: ['Framework', 'Solidity', 'JavaScript', 'Templating'],
    links: [],
    status: 'coming-soon',
    year: '2022–2023',
    org: 'NFT Culture',
  },
  {
    id: 'shakespeare',
    title: 'Shakespeare',
    description:
      'Python-based generative art construction library for building layered NFT artwork. Handles trait systems, rarity weights, and large-scale image composition pipelines.',
    tags: ['Python', 'Generative Art', 'NFT'],
    links: [],
    status: 'coming-soon',
    year: '2021–2022',
    org: 'NFT Culture',
  },
];

// ─── Front Ends ───────────────────────────────────────────────────────────────
// Mint microsites and other front-end work.

export const frontEnds: Project[] = [
  {
    id: 'fe-placeholder-1',
    title: '[PLACEHOLDER] Mint Site',
    description: '[PLACEHOLDER] Description of this mint microsite — the project, stack, and any notable features.',
    tags: ['Vue', 'Ethers.js', 'Web3'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'fe-placeholder-2',
    title: '[PLACEHOLDER] Mint Site',
    description: '[PLACEHOLDER] Description of this mint microsite — the project, stack, and any notable features.',
    tags: ['React', 'Ethers.js', 'Web3'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'fe-placeholder-3',
    title: '[PLACEHOLDER] Front End Project',
    description: '[PLACEHOLDER] Description of this front-end project and what makes it notable.',
    tags: ['Vue', 'TypeScript'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
];

// ─── Back Ends ────────────────────────────────────────────────────────────────
// Infrastructure and services — primarily enabling mint microsites,
// but not exclusively.

export const backEnds: Project[] = [
  {
    id: 'be-placeholder-1',
    title: '[PLACEHOLDER] Service / API',
    description: '[PLACEHOLDER] Description of this back-end service, what it powers, and the stack.',
    tags: ['Node.js', 'AWS'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'be-placeholder-2',
    title: '[PLACEHOLDER] Service / API',
    description: '[PLACEHOLDER] Description of this back-end service, what it powers, and the stack.',
    tags: ['Python', 'AWS Lambda'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
];

// ─── Content ──────────────────────────────────────────────────────────────────
// Articles and writing published on nftculture.com.

export const authorProfileUrl = 'https://www.nftculture.com/author/michael/';

export const articles: Article[] = [
  {
    id: 'article-placeholder-1',
    title: '[PLACEHOLDER] Article Title',
    description: '[PLACEHOLDER] Brief summary of what this article covers.',
    url: null,
    publishedAt: '20XX',
    tags: ['Web3', 'NFT'],
  },
  {
    id: 'article-placeholder-2',
    title: '[PLACEHOLDER] Article Title',
    description: '[PLACEHOLDER] Brief summary of what this article covers.',
    url: null,
    publishedAt: '20XX',
    tags: ['DeFi', 'Analysis'],
  },
  {
    id: 'article-placeholder-3',
    title: '[PLACEHOLDER] Article Title',
    description: '[PLACEHOLDER] Brief summary of what this article covers.',
    url: null,
    publishedAt: '20XX',
    tags: ['Smart Contracts', 'Tutorial'],
  },
];
