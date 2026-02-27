// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectStatus = 'live' | 'archived' | 'coming-soon' | 'placeholder';

export type ProjectRole = 'sole' | 'lead' | 'contributor' | 'owner';

export interface ProjectDetailSection {
  heading: string;
  body: string;
}

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
  detail?: ProjectDetailSection[];
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
    id: 'moonray-presale',
    title: 'Moonray Presale Pass',
    description:
      'Presale entry pass for Moonray, a surreal action RPG featuring next-gen graphics and Web3 mechanics.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Gaming'],
    links: [{ label: 'Contract', url: 'https://etherscan.io/address/0x4d57b36c1555b48a63feab9f90d38a9b7ebc4419' }],
    status: 'live',
    year: 'Oct 2021',
    chain: 'Ethereum',
    order: 1,
  },
  {
    id: 'the-gallery-nft-culture',
    title: 'The Gallery By NFT Culture',
    description:
      'Art gallery with custom art creations for NFT Culture token supporters. ERC1155 with significant gas optimizations for the pre-ERC721a era. Complete end-to-end technology solution built by NFT Culture.',
    tags: ['Solidity', 'ERC-1155', 'Ethereum', 'NFT Culture'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0xcdf177e68104e64d306e829a5a5b277e58ee3fdb#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/the-gallery-by-nft-culture' },
    ],
    status: 'live',
    year: 'Nov 2021',
    chain: 'Ethereum',
    order: 2,
  },
  {
    id: 'noob-punks',
    title: 'Noob Punks',
    description:
      '10,000 generative Punks in the style of NOOBS — a collaborative project with Mad Pups group and the NOOBS project. Art generation and smart contract by NFT Culture.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0xa5a1e6972ace6f4ae388fbafcb7ec12013b64f53#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/noobpunks-nft' },
    ],
    status: 'live',
    year: 'Feb 2022',
    chain: 'Ethereum',
    order: 3,
  },
  {
    id: 'justice-for-ukraine',
    title: 'Justice (For Ukraine)',
    description:
      "Charitable NFT project with 100% of revenue donated to Ukraine. Launched to harden NFT Culture Labs' v2 minting dApp ahead of the JR — Can Art Change the War? project, ensuring seamless bug-free minting at scale. Contract is ERC721a.",
    tags: ['Solidity', 'ERC721a', 'Ethereum', 'Charitable'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x31a82b5b4abc844591016c38d36bbc2020a7aa3e#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/j4u' },
    ],
    status: 'live',
    year: 'Mar 2022',
    chain: 'Ethereum',
    order: 4,
  },
  {
    id: 'monster-champions',
    title: 'Monster Champions',
    description:
      'Genesis character drop for Monster Champions, an upcoming GameFi game. Michael handled both art generation and smart contract development. The contract is a custom gas-efficient extension of ERC721a.',
    tags: ['Solidity', 'ERC721a', 'Ethereum', 'GameFi', 'Generative Art'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x0151f9726d0c056b8c29311029cc43bec291820c#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/monsterchampions' },
    ],
    status: 'live',
    year: 'Apr 2022',
    chain: 'Ethereum',
    order: 5,
  },
  {
    id: 'monster-champions-menagerie',
    title: 'Monster Champions Menagerie',
    description:
      'NFT project on Polygon serving two roles: an airdrop for early Monster Champions supporters, and a live character inventory contract for the Monster Champions GameFi game. Monster Egg tokens function as rewards that later hatch into Monsters playable in the game.',
    tags: ['Solidity', 'ERC-721', 'Polygon', 'GameFi', 'Airdrop'],
    links: [
      { label: 'Contract', url: 'https://polygonscan.com/address/0x0151f9726d0c056b8c29311029cc43bec291820c#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/monsterchampionsmenagerie' },
    ],
    status: 'live',
    year: 'Apr 2022',
    chain: 'Polygon',
    order: 6,
  },
  {
    id: 'moonray-foundation',
    title: 'Moonray: The Foundation Collection',
    description:
      'Genesis playable avatar drop for Moonray, a AAA action RPG with a blockchain-based economy. The contract is a custom gas-efficient extension of ERC721a, with multiple presale phases accommodating different gamer communities and discount tiers.',
    tags: ['Solidity', 'ERC721a', 'Ethereum', 'GameFi', 'Gaming'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0xa178a73f6e215531047d3486f8edc68d14548f6b#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/moonray-foundation' },
    ],
    status: 'live',
    year: 'May 2022',
    chain: 'Ethereum',
    order: 7,
  },
  {
    id: 'moonray-comics',
    title: 'Moonray Comics',
    description:
      'A series of comic book chapters released as mintable NFTs, based on Moonray in-game lore. The first time Michael hooked a minting interface up to multiple separate contracts concurrently — not commonplace at the time.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Gaming'],
    links: [
      { label: 'Contract (Ch. 1)', url: 'https://etherscan.io/address/0x70e3011712c2925ffEb9b4Fc8075e63848D34023#code' },
      { label: 'Contract (Ch. 2)', url: 'https://etherscan.io/address/0xD7a3Bda3B7ae28e2e5fA7c60Da35341A1A444A32#code' },
    ],
    status: 'live',
    year: 'Jul 2022',
    chain: 'Ethereum',
    order: 8,
  },
  {
    id: 'moonray-token',
    title: 'Moonray Token',
    description:
      'ERC20 utility token for the Moonray web3 ecosystem. Convertible from in-game Miium Dust, used to purchase skins, items, and digital assets in-game, and as currency for match wagers via the wager protocol.',
    tags: ['Solidity', 'ERC-20', 'Ethereum', 'Gaming', 'Token'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x06904a21f2dB805487FcBDC3b3Fe9607dAaa5D54#code' },
    ],
    status: 'live',
    year: 'Jul 2022',
    chain: 'Ethereum',
    order: 9,
  },
  {
    id: 'moonray-genesis-skins',
    title: 'Moonray Genesis Skins',
    description:
      'A series of 6 playable skins for Moonray, plus a bonus skin packaged with the Bored Box collection. The first implementation of the NFTC Expandable Contract system — dynamic creation of individual NFT types with a consistent minting API enforced across all contracts, enabling a single front-end interface to service all contracts concurrently. Predated the release of the OpenSea SeaDrop protocol by two months.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'GameFi', 'Expandable Contract'],
    links: [
      { label: 'OpenSea (Creator)', url: 'https://opensea.io/MoonrayGame/created' },
      { label: 'Skin 1', url: 'https://etherscan.io/address/0x2B99aBd1E78FC4712CA9b335d248444A8b0b2217#code' },
      { label: 'Skin 2', url: 'https://etherscan.io/address/0x36653274C741A89D4F6Ebf07B1a617231854a7a6#code' },
      { label: 'Skin 3', url: 'https://etherscan.io/address/0xA943510c723333CD56D109805EA0bd955b2bcBB5#code' },
      { label: 'Skin 4', url: 'https://etherscan.io/address/0x38F97d6139D67BD2ea5F502BEaE4a0a84545AA3D#code' },
      { label: 'Skin 5', url: 'https://etherscan.io/address/0x0DDD3d6b8015C74922dF22e95E2C4bE4e1e1e0Bc#code' },
      { label: 'Skin 6', url: 'https://etherscan.io/address/0x1b09d57b0c92c6cdec9237cac36f7e1713556e5b#code' },
      { label: 'Bored Box Skin', url: 'https://etherscan.io/address/0x8f30c31f2800920d36cc23f19241781f9c360808#code' },
    ],
    status: 'live',
    year: 'Sep 2022',
    chain: 'Ethereum',
    order: 10,
  },
  {
    id: 'noob-zoo',
    title: 'Noob Zoo',
    description:
      '5,000 companion animals in the style of NOOBS — a collaborative project with Mad Pups group and the NOOBS project. Art generation and smart contract by NFT Culture.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Generative Art'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x0f2d97060776c8184aca969e9bd2d42b16e7c134#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/noobzoo' },
    ],
    status: 'live',
    year: 'Dec 2022',
    chain: 'Ethereum',
    order: 11,
  },
  {
    id: 'neon-istanbul',
    title: 'Neon Istanbul by Devrim Erbil',
    description:
      'Paintings and prints of Istanbul by Devrim Erbil, a renowned Turkish artist. Bundled with physical works and sold by the London gallery Renko. Released as a standard edition and an open edition.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Physical + Digital'],
    links: [
      { label: 'Contract', url: 'https://etherscan.io/address/0x1333d787Dca8bb5ACb88C2DBeb0670AC5163e1Af#code' },
      { label: 'OE Contract', url: 'https://etherscan.io/address/0x336aD6F60d9224B759bE6416009D7B08ab73c6a0#code' },
      { label: 'OpenSea', url: 'https://opensea.io/collection/neon-istanbul' },
      { label: 'OpenSea (OE)', url: 'https://opensea.io/collection/neon-istanbul-open-edition' },
    ],
    status: 'live',
    year: 'Jan 2023',
    chain: 'Ethereum',
    order: 12,
  },
  {
    id: 'source-on-nfts',
    title: 'SOURCE [On NFTs] by Robert Alice',
    description:
      "Fully on-chain generative art NFT developed as a companion project to the Taschen book OnNFTs. The first generative art collection launched on the Christie's 3.0 NFT platform, and one of the first projects to leverage a fully on-chain instance of p5.js via the Scripty.sol encoding system. Three-contract architecture (NFT, metadata, and artwork).",
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
    order: 13,
  },
  {
    id: 'onnfts-companion',
    title: 'On NFTs Book Companion NFTs',
    description:
      '4 companion art NFTs for the On NFTs coffee table book by Taschen and Robert Alice, featuring work by Refik Anadol, Dmitri Cherniak, Sofia Crespo, and Osinachi. Built on the Chainnative multi-contract stack developed on Keith Haring: Pixel Pioneer. Special editions of the book contained redemption codes allowing NFTs to be minted via the interface — secured via a salted merkle tree, an early example of the approach predating later mainstream uses.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'On-Chain', 'Chainnative', 'Taschen'],
    links: [
      { label: 'Refik Anadol', url: 'https://etherscan.io/address/0xC5fE623cF7022C7f844Af7D6Ba96eEBa85e51AeD#code' },
      { label: 'Dmitri Cherniak', url: 'https://etherscan.io/address/0x4EbabE5d942B0Dde9e2Ab17E7fF563CCEfA65d34#code' },
      { label: 'Sofia Crespo', url: 'https://etherscan.io/address/0xC0756CDaB3D9C87F1Cd04468c9359c86A1FA13a1#code' },
      { label: 'Osinachi', url: 'https://etherscan.io/address/0x2C10d625E5F7120177fcE2c9687bfBB90Fbbe27E#code' },
      { label: 'Art Contract', url: 'https://etherscan.io/address/0xFad35BE3d5746919218F63aBc91FeACE0E2f3FF8#code' },
      { label: 'Metadata Contract', url: 'https://etherscan.io/address/0xB5a9f4d240187a60A311a3fAd7cC72dEA59a06F8#code' },
    ],
    status: 'live',
    year: 'May 2024',
    chain: 'Ethereum',
    order: 14,
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
    featured: true,
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
    role: 'owner',
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
    role: 'contributor',
  },
];

// ─── Open Source — Repos ──────────────────────────────────────────────────────
// Publicly released libraries and tools (top of Open Source tab).

export const openSourceRepos: Project[] = [
  {
    id: 'nftc-contract-audit',
    title: 'nftc-contract-audit',
    description:
      'Shared resources, checklists, and documentation for auditing EVM smart contracts. Provides the community with practical frameworks for reviewing smart contract code — covering access control, fund management, minting logic, and common vulnerability patterns.',
    tags: ['Solidity', 'Security', 'Auditing', 'EVM', 'Documentation'],
    links: [{ label: 'GitHub', url: 'https://github.com/NFTCulture/nftc-contract-audit' }],
    status: 'live',
    year: '2022–2026',
    org: 'NFT Culture',
    role: 'owner',
  },
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
    role: 'owner',
  },
  {
    id: 'pizza-pets-docs',
    title: 'pizza-pets-docs',
    description:
      'API reference and documentation for the Pizza Pets and Color-Test collections, demonstrating dynamic Ordinals collections driven by Bitcoin block events. Provides a baseline implementation for evaluating Pizza Pet states without relying on hosted backend services — useful for marketplace integrations and tooling.',
    tags: ['TypeScript', 'Bitcoin', 'Ordinals', 'API', 'Documentation'],
    links: [{ label: 'GitHub', url: 'https://github.com/RocketshipApp/pizza-pets-docs' }],
    status: 'live',
    year: '2025',
    org: 'Rocketship',
    role: 'contributor',
  },
];

// ─── Technology — Platforms & Frameworks ──────────────────────────────────────
// Internal platforms, frameworks, and services that power multiple projects.
// Distinct from open source libs: these are proprietary or not-yet-released.

export const techPlatforms: Project[] = [
  {
    id: 'chainnative',
    title: 'Chainnative',
    description:
      'A multi-contract architecture for fully on-chain NFT artwork. Separates token, metadata, and artwork into independent verified on-chain contracts — enabling archival of generative and historical artwork with no off-chain dependencies. First developed on Keith Haring: Pixel Pioneer and extended for the On NFTs Book Companion NFTs.',
    tags: ['Solidity', 'On-Chain', 'EVM', 'Multi-Contract', 'Scripty.sol', 'Artwork'],
    links: [],
    status: 'live',
    year: '2023–2024',
    org: 'NFT Culture',
    detail: [
      {
        heading: 'Philosophy',
        body: '"Chainnative" is not a feature — it is a constraint. Every component in the stack exists to fulfill one requirement: all NFT data must live on-chain and be constructible at read time from contract state alone.\n\nIn practice: tokenURI() returns a data:application/json;base64,... string — the complete JSON is built on-chain, not fetched from an API. Image data is either stored as base64-encoded bytes in contract storage or constructed at read time from on-chain JavaScript. Attribute and trait data is stored as compact packed integers, decoded at read time through on-chain lookup tables. The stack provides no IPFS helpers, no off-chain pointer patterns, and no centralized URI patterns — these are out of scope by design.\n\nThe motivation is archival: token data survives even if NFT Culture or any third party disappears. For fine art editions — Keith Haring, Robert Alice — the artwork itself is preserved on-chain, not a pointer to it.',
      },
      {
        heading: 'Contract Architecture',
        body: 'The stack enforces a strict three-contract separation for every deployment:\n\n• NFT Contract (Consumer) — owns tokens; delegates tokenURI() to the metadata producer\n• Metadata Contract (Producer) — assembles and returns JSON strings; delegates image and animation values to the art producer\n• Art Contract (Art Producer) — holds or constructs image data; returns data URIs\n\nAn optional fourth contract — the Mapper — resolves (collection, tokenId) → tokenType. When token type assignment is non-trivial (multi-collection, edition-based, range-keyed), it is factored into a dedicated contract rather than embedded in metadata logic.\n\nThe producer-consumer boundary is defined by interface contracts. Producers implement an interface; consumers reference that interface and call through it. The consumer never imports the producer\'s concrete type. This enables upgradeability without redeploying the NFT contract — art data may need to be uploaded post-mint, metadata fields refined before launch, or rendering updated without disturbing the immutable token ledger.\n\nTwo interface generations are in active use. V1 uses a single-collection assumption and uint256 token types. V2 adds an address collection parameter throughout (enabling one producer contract to serve multiple NFT contracts), promotes token types to uint64, and passes an extraData parameter — typically an entropy seed — from the NFT contract to the art producer for generative rendering.',
      },
      {
        heading: 'Art Production',
        body: 'Two concrete art manager patterns cover the range of supported project types.\n\nPNGBackedSVGArtManager stores base64-encoded PNG data in contract storage, written via transactions post-deploy. At read time it wraps the PNG in an SVG document and returns a data:image/svg+xml;base64,... URI. The SVG is never stored — it is constructed on every read. SVG construction is delegated to a pluggable, stateless ISVGConstructor contract (implementations exist for general use, pixel art V1 with crisp-edges rendering, and pixel art V2 using a XHTML foreignObject for better Safari compatibility), so the rendering approach can be upgraded without redeploying the art contract.\n\nDynamicHTMLArtManager is used for generative art projects where the image is a full HTML page containing JavaScript that renders the artwork. The art contract holds references to named script components in Scripty.sol\'s on-chain content store. At read time, ScriptyBuilderV2 fetches and assembles those components, wraps them in HTML, and returns a data:text/html;base64,... URI. The V2 consumer interface passes an entropy seed through to the art producer as extraData, allowing the generative script to produce a unique piece for each token with no off-chain randomness source.\n\nFor archival projects, additional native file formats can be stored on-chain alongside the primary art and retrieved byte-for-byte from the contract — enabling true digital archival of original source files, not just rendered output.',
      },
      {
        heading: 'Metadata Production',
        body: 'The metadata producer builds ERC-721 JSON strings entirely on-chain using a structured template system. Storage is divided into two levels: CollectionAttributesV2 holds collection-level fields (attribute names, shared description parts, external URL), while DynamicAttributesV2 holds per-token-type definitions (title, per-type description parts, attribute values).\n\nDescription composition uses a configurable insertion system: a sharedDescriptionParts array defines the collection-level template, while per-token-type tokenDescriptionParts arrays are inserted at configurable positions within the shared parts. This produces rich per-type descriptions with minimal storage overhead.\n\nAttribute values support a %tokenId% placeholder replaced at read time with the actual token ID — avoiding per-token storage for traits derived from token ID. A two-phase attribute reveal is also supported: tokens initially return placeholder metadata while off-chain rendering determines trait assignments; the owner then writes final trait maps on-chain in batch, and the metadata contract switches automatically to full attributes on the next read, with no additional transaction required from holders.',
      },
      {
        heading: 'Deployments',
        body: 'The stack has been proven across three production deployments on Ethereum mainnet, each extending the architecture.\n\nKeith Haring: Pixel Pioneer (Sep 2023, Christie\'s) — V1 stack; first production deployment. Five 1/1 artworks created by Haring in 1987 on an Amiga computer, recovered from the New York Public Library\'s archive. The art contract stores multiple formats on-chain — SVG, PNG, and the original Amiga IFF and Apple PICT files via Scripty.sol — making it a true digital archive. Displayed at Christie\'s galleries globally and auctioned on the Christie\'s platform.\n\nSOURCE [On NFTs] by Robert Alice (Mar 2024, Christie\'s 3.0) — V2 stack; first generative deployment. 400-token collection using DynamicHTMLArtManager with Scripty.sol. Entropy is generated at mint time; an off-chain rendering pipeline determines traits, which are written on-chain in batch. Minting gated through the Christie\'s marketplace contract via the privileged minter pattern. Two-phase metadata reveal.\n\nOn NFTs Book Companion NFTs (May 2024, Taschen / Rocketship) — V2 stack; multi-artist architecture. Four NFT contracts (Refik Anadol, Dmitri Cherniak, Sofia Crespo, Osinachi) sharing one metadata contract, one art contract, and one mapper — demonstrating the multi-collection producer pattern in production. Book purchasers claimed NFTs via salted merkle-tree-verified redemption codes.\n\nAcross the three deployments: approximately 136 contracts, 120+ test files.',
      },
    ],
  },
  {
    id: 'dr3am-labs-cloud',
    title: 'Dr3am Labs Cloud',
    description:
      "Internal backend platform for NFT minting microsites and generative art projects. Provides a minting API, administrative tools, client portal, and managed cloud infrastructure — enabling more complex live rendering and artist curation workflows than standard platforms, while preserving IPFS archival guarantees.\n\nDual App Engine architecture on GCP: a default service handles static content while an API service provides RESTful endpoints, with custom domain routing via dispatch.yaml. Runs Node.js with TypeScript and Fastify, backed by Firebase Firestore and Google Cloud Storage. AWS is used for CDN and customer-facing asset hosting.",
    tags: ['Node.js', 'TypeScript', 'Fastify', 'GCP', 'App Engine', 'Firebase', 'AWS'],
    links: [],
    status: 'live',
    year: '2022–present',
    org: 'NFT Culture',
  },
  {
    id: 'testarossa',
    title: 'Testarossa',
    description:
      "NFT Culture's proprietary smart contract and minting UI generation engine — a suite of CLI tools that automate creation of complete, production-ready NFT project infrastructure.\n\nThe smart contract generator conducts a project survey, then outputs a full Hardhat development environment: a contract tailored to the project parameters, deployment scripts, and a test suite that can be run immediately to verify correctness and harden against common vulnerabilities. The minting UI generator does the same for front ends — outputting Angular component projects that can be bundled and dropped into WordPress, NextJS, Vercel, or similar platforms with no incompatibilities.\n\nThree guiding principles shape the architecture: independence per project (each output is a standalone dev environment, separately licensable); developer as end user (rich libraries, consistent patterns, low cognitive load); and automation with maximum flexibility (designed for bespoke top-tier art projects where Manifold, Mojito, or ThirdWeb fall short). Wholly proprietary and owned by NFT Culture.",
    tags: ['CLI', 'Solidity', 'TypeScript', 'Angular', 'Hardhat', 'Code Generation'],
    links: [],
    status: 'live',
    year: '2022–2025',
    org: 'NFT Culture',
  },
  {
    id: 'shakespeare',
    title: 'Shakespeare',
    description:
      "Rapidly configurable, Python-based generative art construction library for building layered NFT artwork. Handles trait systems, rarity weights, layer composition, and large-scale image generation pipelines — enabling deployment of NFTs with nearly unlimited customization based on the artist's scope and vision.",
    tags: ['Python', 'Generative Art', 'NFT', 'Image Generation'],
    links: [],
    status: 'live',
    year: '2021–2025',
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
