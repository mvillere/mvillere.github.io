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
  role?: 'author' | 'contributor';
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
      "NFT Culture's in-house supporter token — one of the earliest projects under the banner and a hands-on proof-of-concept for production-quality EVM mechanics.\n\nThe contract featured three bespoke on-chain capabilities: Forging let holders combine owned tokens via a mathematical formula embedded in the contract — converting two silvers into a gold, merging cross-tier tokens into hybrids, or unlocking pieces that were never directly mintable. Burn Minting gifted holders of 32+ tokens a special multicolored piece created by the artist. Extensible Artwork allowed new token types to be added post-launch without a contract upgrade; when forging was activated roughly one month after mint, the Justice character became unlockable by combining three unrelated silvers.\n\nTwo companion interfaces shipped alongside the contract: a mint app (Angular + ethers v5 + Alchemy, embedded in a WordPress site) and a forge app that let holders browse their wallet contents and select tokens for combining. No backend.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Angular', 'Ethers.js', 'NFT Culture'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x5d75c1b764afd64fe02a28b5eff79e2f81db5bad' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/nftcult' },
    ],
    status: 'live',
    year: 'Sep 2021',
    chain: 'Ethereum',
    featured: true,
  },
  {
    id: 'jr-can-art-change-the-war',
    title: 'JR — Can Art Change the War?',
    description:
      "Charitable NFT project in collaboration with JR, a celebrated French photographic artist, timed to coincide with his work appearing on the cover of Time Magazine in April 2022. All proceeds were donated to Ukraine, raising over $300k USD.\n\nThe collection accepted both ETH and fiat payment — fiat purchasers received an airdropped NFT. Complete end-to-end solution (smart contract + front-end mint interface) built pro-bono in 7 days. The contract is a custom extension of ERC721a, chosen for its gas efficiency.",
    tags: ['Solidity', 'ERC721a', 'Ethereum', 'Angular', 'Ethers.js', 'Charitable'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x53142464f2faece413aaf1886e9f21d6113d1257#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/can-art-change-the-war' },
    ],
    status: 'live',
    year: 'Mar 2022',
    chain: 'Ethereum',
    featured: true,
  },
  {
    id: '3face-ian-cheng',
    title: '3FACE by Ian Cheng',
    description:
      "Adaptive generative portrait NFT by artist Ian Cheng, held in the permanent collection of the MoMA. 3FACE uses big data analytics of wallet behavior to build a proprietary personality model for each collector's address, which is then fed into a live art rendering engine to produce a portrait uniquely tuned to that wallet's on-chain history. Collectors can refresh their 3FACE as their wallet evolves.\n\nThe project features a live rendering backend, user-updatable artwork, big data analytics, and dynamic story-driven metadata. Michael was responsible for the overall architecture, cloud infrastructure, and component integration — and wrote the majority of the implementation outside of the art rendering engine itself.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art', 'MoMA'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0xd20969460645Add745f3F490d0f7AeE1Be60b741' },
      { label: 'MoMA Collection', url: 'https://www.moma.org/collection/works/442076' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/3face-by-ian-cheng' },
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
      "A collection of 5 works created in 1987 by Keith Haring on an Amiga computer — rediscovered by the New York Public Library in the 2010s. For this project the artwork was recovered and digitally preserved, with both modernized and source versions archived fully on-chain across a three-contract stack (NFT, metadata, and artwork). The collection was auctioned by Christie's and displayed at Christie's galleries around the globe.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', "Christie's", 'Keith Haring Foundation', 'On-Chain Artwork'],
    links: [
      {
        label: 'NFT Contract',
        url: 'https://etherscan.io/address/0x8CD834258d000166769733Dfb5fB6fD6E43dB4e7#code',
      },
      {
        label: 'Metadata Contract',
        url: 'https://etherscan.io/address/0x7ff5225c530a57dB690Ba56eaCD7979bb136298b#code',
      },
      {
        label: 'Artwork Contract',
        url: 'https://etherscan.io/address/0x8abC21a84992b8C50c086D5133D6B428b8FC7439#code',
      },
      {
        label: "Christie's Auction",
        url: 'https://onlineonly.christies.com/s/keith-haring-pixel-pioneer/overview/3479',
      },
      { label: 'OpenSea', url: 'https://opensea.io/collection/keith-haring-pixel-pioneer' },
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
      "The second part of Leo Villareal's Cosmologies series — the first of which was an Art Blocks Curated project. Cosmic Bloom uses the Dr3am Labs cloud backend as an instant reveal service. Using Dr3am Labs instead of Art Blocks Engine enabled Leo to implement significantly more complex live rendering code and a curation function for the artist, while still maintaining the archival benefits of IPFS. Each work features intricate generative geometric forms in perpetual non-repeating motion.",
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art', 'Dr3am Labs'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x667D28Ca8a8F4391Fe13c92d36e60c7615D2f8db' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/cosmic-bloom-by-leo-villareal' },
    ],
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
    id: 'source-on-nfts',
    title: 'SOURCE [On NFTs] by Robert Alice',
    description:
      'Fully on-chain generative art NFT developed as a companion project to the Taschen book OnNFTs. The first generative art collection launched on the Christie\'s 3.0 NFT platform, and one of the first projects to leverage a fully on-chain instance of p5.js via the Scripty.sol encoding system. Three-contract architecture (NFT, metadata, and artwork).',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art', 'p5.js', 'Scripty.sol', 'On-Chain', "Christie's"],
    links: [
      { label: 'NFT Contract', url: 'https://etherscan.io/address/0x5e5551fF74c8F5Bd3AAAE8801aEd0d579DdB470C#code' },
      { label: 'Metadata Contract', url: 'https://etherscan.io/address/0x65419C1eeC692E3D30FcB9E99889C6B8C723226A#code' },
      { label: 'Artwork Contract', url: 'https://etherscan.io/address/0xe3b57ed893E8FA03DD63A441372735bD7C07BCf5#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/source-on-nfts-by-robert-alice' },
    ],
    status: 'live',
    year: 'Mar 2024',
    chain: 'Ethereum',
    order: 4,
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
// Publicly released libraries and tools (top of Open Source tab).

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
];

// ─── Technology — Platforms & Frameworks ──────────────────────────────────────
// Internal platforms, frameworks, and services that power multiple projects.
// Distinct from open source libs: these are proprietary or not-yet-released.

export const techPlatforms: Project[] = [
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
  {
    id: 'dr3am-labs-cloud',
    title: 'Dr3am Labs Cloud',
    description:
      'Internal backend platform for NFT minting microsites and generative art projects. Provides instant reveal, metadata APIs, and asset delivery as a managed service — enabling more complex live rendering and artist curation workflows while preserving IPFS archival guarantees. Dual App Engine architecture (static + API services) on GCP, backed by Firestore and Cloud Storage.',
    tags: ['Node.js', 'TypeScript', 'Fastify', 'GCP', 'App Engine', 'Firestore'],
    links: [],
    status: 'live',
    year: '2022–present',
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
    id: 'nfts-and-anonymity',
    title: 'Our Stance on NFTs and Anonymity',
    description:
      'Examining how anonymity and pseudonymity function in the NFT space — when they are acceptable and when creators should maintain transparent identities to build trust.',
    url: 'https://www.nftculture.com/nft-projects/our-stance-on-nfts-and-anonymity/',
    publishedAt: '2021-07-28',
    tags: ['Opinion', 'Community', 'NFT'],
  },
  {
    id: 'nft-bill-of-rights',
    title: 'NFT Project Bill of Rights',
    description:
      'A foundational framework establishing five key rights for NFT project creators and buyers — covering reveal mechanics, asset delivery, licensing, open source contracts, and accountability.',
    url: 'https://www.nftculture.com/future-nfts/nft-project-bill-of-rights/',
    publishedAt: '2021-06-17',
    tags: ['Opinion', 'Standards', 'NFT'],
  },
  {
    id: 'mark-cuban-qa',
    title: 'Mark Cuban x NFT Culture Q&A',
    description:
      "An interview with Mark Cuban on the emerging NFT market — covering monetization potential, mainstream adoption, his investment in Mintable, and Ethereum gas fee challenges.",
    url: 'https://www.nftculture.com/nft-art/mark-cuban-x-nft-culture-qa/',
    publishedAt: '2021-04-05',
    tags: ['Interview', 'NFT', 'Web3'],
    role: 'contributor',
  },
];
