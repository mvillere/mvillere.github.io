// ─── Bio ──────────────────────────────────────────────────────────────────────
// Three variants: 'short' | 'medium' | 'long'
// Switch activeBioVariant to change which one renders in the About tab.
//
// POSITIONING NOTE
// Lead identity : "seasoned engineering leader" — not "Web3 engineer"
// AI angle      : early/heavy adopter of AI tooling — the forward-looking differentiator
// Web3 / NFTs   : supporting credential, not the headline
// 3FACE / MoMA  : anchor technical credential — keep in medium + long
// EdTech scale  : 15M+ students, ~20,000 schools, ~$50M ARR
// Contract count: update "30+" as projects are added
// Artists       : Ian Cheng, Leo Villareal, JR, Refik Anadol
// Personal info : family, ranch, etc. — omit from bio, use a personal section if needed

export type BioVariant = 'short' | 'medium' | 'long';

export const activeBioVariant: BioVariant = 'long';

// ⚠️  If you change the 'short' variant, also update the matching meta description in
//     index.html (og:description, twitter:description, and name="description").
//     Those tags are hardcoded and will drift otherwise.

// ─── Personal ─────────────────────────────────────────────────────────────────
// Deliberately not run through cwlint. The writing system is built for
// technical prose, and applying it here would strip out the contractions and
// rhythm that make this sound like a person rather than a spec.
//
// Earlier drafts split this into Family / Ranch Life / Home Automation /
// Other Interests. Kept as one block for now. Bring the sections back when
// there is enough to say to fill them.

export const personal = `Michael lives in Frisco, Texas with his wife and their two daughters.\n\n\
Outside of work he's usually under the hood of something, chipping away at a project at the \
family ranch on the Brazos, or building something wild with a crew of AI agents.`;

export const bio: Record<BioVariant, string> = {
  short: `Michael Villere is a seasoned engineering leader and entrepreneur with 20+ years of \
experience building and managing software teams across SaaS, EdTech, and Web3.`,

  medium: `Michael Villere is a seasoned engineering leader and entrepreneur with 20+ years of \
experience across SaaS, EdTech, and Web3. He co-founded NFT Culture in 2021 and serves as CTO, \
and spent 13 years prior as a Senior Software Development Manager at Edmentum, leading distributed \
teams on large-scale K-12 platforms serving over 15 million students. An early and heavy adopter \
of AI development tooling, he brings deep experience both writing code and managing the engineering \
organizations that ship it. His technical work includes 30+ smart contracts deployed to Ethereum \
— among them Ian Cheng's 3FACE (2022), acquired by the MoMA.`,

  long: `Michael Villere is a seasoned engineering leader and entrepreneur with 20+ years of \
experience building and managing software across SaaS, EdTech, and Web3. He co-founded NFT Culture \
in 2021 and serves as CTO of its media brand and software consulting arm, NFT Culture Labs.\n\n\
Prior to founding NFT Culture, Michael spent 13 years as a Senior Software Development Manager at \
Edmentum, where he led distributed engineering teams and served as principal architect on \
large-scale K-12 SaaS platforms that collectively served over 15 million students across \
approximately 20,000 schools.\n\n\
An early and heavy adopter of AI development tooling, Michael brings hands-on experience \
integrating AI-assisted workflows into engineering teams and believes the next significant \
leverage point for engineering organizations is the systematic adoption of these practices \
across their development staff.\n\n\
His technical work spans the stack, from Solidity smart contracts (30+ deployments to Ethereum \
mainnet and EVM networks, including Ian Cheng's 3FACE, acquired by the MoMA) to full-stack \
minting platforms, backend infrastructure, and open source libraries. He holds a B.S. in \
Computer Science from the University of Texas at Dallas.`,
};
