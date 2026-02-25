// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectStatus = 'live' | 'archived' | 'coming-soon' | 'placeholder';

export type ProjectRole = 'sole' | 'lead' | 'contributor';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  status: ProjectStatus;
  year: string;
  featured?: boolean;
  order?: number;
  role?: ProjectRole;
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

// ─── NFTs ─────────────────────────────────────────────────────────────────────
// EVM smart contracts and Bitcoin Ordinals inscriptions.
// On-chain authorship: implementation contracts carry the tag
// `@author @NiftyMike | @NFTCulture` in the source.

export const nftContracts: Project[] = [
  // ── Flagship ──────────────────────────────────────────────────────────────
  {
    id: 'nft-cult',
    title: 'The NFT Cult',
    description:
      "NFT Culture's in-house supporter token - one of the earliest projects under the NFT Culture banner and a hands-on proof-of-concept for the ETH/NFT ecosystem. Built to demonstrate technical command of on-chain NFT mechanics from day one.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'NFT Culture'],
    links: [{ label: 'Contract', url: 'https://etherscan.io/address/0x5d75c1b764afd64fe02a28b5eff79e2f81db5bad' }],
    status: 'live',
    year: 'Sep 2021',
    chain: 'Ethereum',
    featured: true,
  },
  {
    id: '3face-ian-cheng',
    title: '3FACE by Ian Cheng',
    description:
      "Generative portrait NFT by artist Ian Cheng, held in the permanent collection of the MoMA. Each work reads its owner's on-chain wallet history through a personality model developed by Cheng, producing a continuously evolving visual portrait of the collector's digital identity. Collectors can refresh their 3FACE as their wallet evolves.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art', 'MoMA'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0xd20969460645Add745f3F490d0f7AeE1Be60b741' },
      { label: 'MoMA Collection', url: 'https://www.moma.org/collection/works/442076' },
    ],
    status: 'live',
    year: 'Aug 2022',
    chain: 'Ethereum',
    featured: true,
  },
  {
    id: 'keith-haring-pixel-pioneer',
    title: 'Keith Haring: Pixel Pioneer',
    description:
      "Five unique digital drawings created by Keith Haring on an Amiga computer in the mid-1980s, minted on Ethereum by the Keith Haring Foundation. Previously accessible only via floppy disk - the collection sold at Christie's for $1.5M. Multi-contract stack; primary implementation shown, additional contracts to be linked.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', "Christie's", 'Keith Haring Foundation'],
    links: [
      {
        label: 'Contract (primary)',
        url: 'https://etherscan.io/address/0x8CD834258d000166769733Dfb5fB6fD6E43dB4e7',
      },
      {
        label: "Christie's Auction",
        url: 'https://onlineonly.christies.com/s/keith-haring-pixel-pioneer/overview/3479',
      },
    ],
    status: 'live',
    year: 'Sep 2023',
    chain: 'Ethereum',
    featured: true,
  },

  // ── Additional Work ────────────────────────────────────────────────────────
  {
    id: 'cosmic-bloom',
    title: 'Cosmic Bloom by Leo Villareal',
    description:
      "Generative NFT collection by light artist Leo Villareal - the second in his Cosmologies series. Produced with custom live code, each work features intricate geometric forms in perpetual non-repeating motion, extending Villareal's large-scale light sculpture practice into purely digital works.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art'],
    links: [{ label: 'Contract', url: 'https://etherscan.io/address/0x667D28Ca8a8F4391Fe13c92d36e60c7615D2f8db' }],
    status: 'live',
    year: 'Dec 2022',
    chain: 'Ethereum',
    order: 1,
  },
  {
    id: 'moonray-presale',
    title: 'Moonray Presale Pass',
    description:
      'Presale entry pass for Moonray, a surreal action RPG featuring next-gen graphics and Web3 mechanics.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Gaming'],
    links: [{ label: 'Contract', url: 'https://etherscan.io/address/0x4d57b36c1555b48a63feab9f90d38a9b7ebc4419' }],
    status: 'live',
    year: 'Oct 2021',
    chain: 'Ethereum',
    order: 2,
  },
  {
    id: 'pizza-pets',
    title: 'Pizza Pets',
    description:
      'The first fully on-chain Tamagotchi-style game on Bitcoin, built with recursion and no custom indexer or manual intervention. This immortal game lives on Bitcoin forever — playable only once, its outcome eternally recorded.',
    tags: ['Bitcoin', 'Ordinals', 'Recursion', 'On-Chain Game'],
    links: [
      {
        label: 'Root Inscription',
        url: 'https://ordinals.com/inscription/79b19216adc1082eade26a059ef77676c0ea99d421fdfa8bc603eb30e099ccd4i0',
      },
      {
        label: 'Manifesto',
        url: 'https://ordinals.com/inscription/0a5263554c5734223af45f121a036e837aebb54e06c779517845423812d90506i0',
      },
      {
        label: 'Code Root',
        url: 'https://ordinals.com/children/b581be7e2ec3844972f25749d56fa245de838abf94b20063d5d45158f19b04efi1',
      },
    ],
    status: 'live',
    year: 'Dec 2024',
    chain: 'Bitcoin (Ordinals)',
    role: 'contributor',
    order: 3,
  },
  {
    id: 'ordinals-placeholder-1',
    title: '[PLACEHOLDER] Ordinals Project',
    description: '[PLACEHOLDER] Description of this Bitcoin Ordinals inscription project.',
    tags: ['Bitcoin', 'Ordinals'],
    links: [],
    status: 'placeholder',
    year: '20XX',
    chain: 'Bitcoin (Ordinals)',
    order: 99,
  },
];

// ─── Open Source — Tools ──────────────────────────────────────────────────────
// One-off contracts and tools (below repos in Open Source tab).

export const openSourceTools: Project[] = [
  {
    id: 'gas-refunder',
    title: 'Gas Refunder',
    description:
      'Community-available utility contract for issuing bulk ETH refunds. Simplifies and reduces the cost of sending gas refunds to multiple recipients in a single transaction.',
    tags: ['Solidity', 'Ethereum', 'Utility'],
    links: [{ label: 'Contract', url: 'https://etherscan.io/address/0x9916b6b525bd114211cb9afcc926f06ca914e1a2' }],
    status: 'live',
    year: 'Sep 2021',
    chain: 'Ethereum',
  },
  {
    id: 'ordinals-minting-tool',
    title: 'Ordinals Minting Tool',
    description:
      'Pure web-based tool for minting Bitcoin Ordinals inscriptions without a local node. Open source release planned.',
    tags: ['TypeScript', 'Bitcoin', 'Ordinals', 'Web3'],
    links: [],
    status: 'coming-soon',
    year: '2023',
    chain: 'Bitcoin (Ordinals)',
  },
  {
    id: 'infra-placeholder-1',
    title: '[PLACEHOLDER] Contract / Tool',
    description: '[PLACEHOLDER] Description of what this crypto infrastructure item does and the problem it solves.',
    tags: ['Solidity', 'Ethereum'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
];

// ─── Open Source — Repos ──────────────────────────────────────────────────────
// Publicly released libraries and frameworks (top of Open Source tab).

export const openSourceRepos: Project[] = [
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
    description: '[PLACEHOLDER] Description of this mint microsite - the project, stack, and any notable features.',
    tags: ['Vue', 'Ethers.js', 'Web3'],
    links: [],
    status: 'placeholder',
    year: '20XX',
  },
  {
    id: 'fe-placeholder-2',
    title: '[PLACEHOLDER] Mint Site',
    description: '[PLACEHOLDER] Description of this mint microsite - the project, stack, and any notable features.',
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
// Infrastructure and services - primarily enabling mint microsites,
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
