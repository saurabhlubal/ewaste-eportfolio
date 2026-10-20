const assignments = [
  {
    id: 1,
    title: "Assignment 01 - Sustainability Reflection & Action Plan",
    date: "05 August 2026",
    category: "E-Waste Management",
    image: "/assignments/images/assignment-01.jpeg",
    shortDescription:
      "Reflection on why sustainability matters and the concrete personal actions planned for electronic waste reduction.",
    description: `
Sustainability matters to me because the choices we make today directly affect the quality of life for future generations. As technology continues to evolve, the amount of electronic waste is increasing rapidly. Improper disposal of e-waste can pollute the environment, harm wildlife, and waste valuable natural resources.

I believe every individual has a responsibility to protect the environment by adopting sustainable habits and making informed decisions.

To contribute towards a greener future, I plan to practice responsible disposal and recycling of electronic waste through authorized collection centres. I will also reduce unnecessary electronic purchases, repair and reuse devices whenever possible, and spread awareness about sustainable e-waste management among my family and friends.

By following the principles of Reduce, Reuse and Recycle, I hope to contribute towards a cleaner and healthier environment.
`,
    remarks: "Core foundational coursework submission focusing on personal responsibility and community e-waste collection.",
    tags: ["Sustainability", "E-Waste", "Action Plan", "3R Strategy"],
    links: [],
  },
  {
    id: 2,
    title: "Assignment 02 - E-Waste & Sustainability Crossword Puzzle",
    date: "06 August 2026",
    category: "Interactive Learning",
    pdf: "/assignments/pdfs/crossword.pdf",
    shortDescription:
      "Interactive educational crossword puzzle reinforcing key terms and concepts in electronic waste management.",
    description: `
This assignment is an educational crossword puzzle prepared as part of the E-Waste and Environmental Studies course. It focuses on important terms and concepts related to electronic waste, recycling, environmental protection, sustainability, and responsible waste management.

The activity helped strengthen my understanding of key environmental concepts in an engaging and interactive manner while improving my knowledge of sustainable engineering practices.
`,
    remarks: "Educational crossword puzzle covering circular economy, bio-accumulation, statutory e-waste categories, and responsible recycling.",
    tags: ["Crossword", "E-Waste", "Interactive", "Terminology"],
    links: [],
  },
  {
    id: 3,
    title: "Assignment 03 - Hazardous Substances & Toxic Leaching Analysis",
    date: "18 August 2026",
    category: "Hazardous Waste",
    pdf: "/assignments/pdfs/case-studies.pdf",
    shortDescription:
      "Technical study analyzing toxic constituents in discarded electronics (Lead, Mercury, Cadmium, and Brominated Retardants).",
    description: `
This coursework submission explores the hazardous elemental composition of modern printed circuit boards (PCBs), cathode-ray tubes (CRTs), and lithium-ion batteries.

When electronic equipment is disposed of in unlined landfills or subjected to crude backyard recovery methods, heavy metals such as Lead (Pb), Mercury (Hg), Cadmium (Cd), and Hexavalent Chromium leach into regional groundwater tables and bio-accumulate across trophic chains.

The report highlights statutory Restriction of Hazardous Substances (RoHS) thresholds, maximum permissible concentration values, and non-destructive dismantling protocols required in certified disposal facilities.
`,
    remarks: "Laboratory and technical assessment on heavy metal leaching mechanisms and RoHS compliance benchmarks.",
    tags: ["Hazardous Waste", "RoHS", "Heavy Metals", "Environmental Health"],
    links: [
      { label: "RoHS Directive Guidelines", url: "https://eur-lex.europa.eu/eli/dir/2011/65/oj" }
    ],
  },
  {
    id: 4,
    title: "Assignment 04 - Extended Producer Responsibility (EPR) & Policy Frameworks",
    date: "02 September 2026",
    category: "Policy & Governance",
    pdf: "/assignments/pdfs/mse2-ewaste.pdf",
    shortDescription:
      "Comparative analysis of Extended Producer Responsibility (EPR) regulations and statutory take-back frameworks.",
    description: `
Extended Producer Responsibility (EPR) is an environmental policy approach in which a producer's responsibility for a product is extended to the post-consumer stage of its lifecycle.

This assignment examines statutory EPR guidelines under national and international waste management directives. It covers EPR authorization mechanisms, annual recycling targets, take-back schemes, PRO (Producer Responsibility Organisation) partnerships, and the statutory penalties associated with non-compliance.

The research emphasizes the economic incentives that EPR creates for manufacturers to adopt modular, easily repairable, and eco-friendly hardware designs.
`,
    remarks: "Regulatory analysis comparing statutory European WEEE Directives with Indian E-Waste Management Rules.",
    tags: ["EPR", "Policy", "Legislation", "Take-Back Targets"],
    links: [
      { label: "CPCB E-Waste Rules Portal", url: "https://cpcb.nic.in/e-waste/" }
    ],
  },
  {
    id: 5,
    title: "Assignment 05 - Case Studies in Global E-Waste & Circular Supply Chains",
    date: "15 September 2026",
    category: "Case Study",
    pdf: "/assignments/pdfs/case-studies.pdf",
    shortDescription:
      "Detailed investigations into urban electronic waste flows, informal scrap hubs, and precious mineral recovery.",
    description: `
This assignment delivers in-depth answers and analyses for five real-world case studies in electronic waste management and circular industrial models:

1. Transboundary E-Waste Dumping: Examining international waste trafficking from developed nations to informal dumping hubs in West Africa and Southeast Asia.
2. Informal Sector Health Hazards: Quantifying occupational inhalation risks and toxic exposure among informal recyclers performing acid bath extraction.
3. Urban Mining Economics: Assessing the concentration of Gold (Au), Silver (Ag), Palladium (Pd), and Copper (Cu) in electronic circuit boards compared to virgin ore mining.
4. Corporate Refurbishment & Closed-Loop Design: Evaluating tech industry trade-in programs and the feasibility of 100% recycled aluminum and rare-earth magnets.
5. Statutory Take-Back Logistics: Designing accessible consumer collection drop-off points and automated deposit-refund reverse logistics.
`,
    remarks: "Comprehensive five-part case study dossier evaluating informal vs formal recycling economics.",
    tags: ["Case Study", "Circular Economy", "Supply Chain", "Urban Mining"],
    links: [
      { label: "Basel Action Network (BAN)", url: "https://www.ban.org/" },
      { label: "Global E-Waste Monitor (UN)", url: "https://ewastemonitor.info/" }
    ],
  },
  {
    id: 6,
    title: "Assignment 06 - Green Computing & Software Carbon Footprint Presentation",
    date: "28 September 2026",
    category: "Green Computing",
    file: "/assignments/docs/presentation-01.pptx",
    shortDescription:
      "Academic seminar presentation examining algorithmic energy consumption, server efficiency, and hardware longevity.",
    description: `
As information technology students, our code has direct physical environmental consequences. This presentation assignment analyzes the carbon overhead associated with software execution, data center cooling, and rapid device obsolescence.

Key topics covered:
- Carbon-Aware Software Engineering: Shifting batch processing and heavy computations to times and geographic regions where grid renewable energy is highest.
- Memory and Cache Optimization: Writing efficient algorithms that minimize CPU instruction cycles and reduce semiconductor thermal dissipation.
- Hardware Longevity: Preventing forced obsolescence by ensuring backward-compatible software architectures that run gracefully on legacy client devices.
- Green Cloud Infrastructure: Serverless execution models, container orchestration, and PUE (Power Usage Effectiveness) metrics.
`,
    remarks: "Academic slide presentation and research seminar on sustainable software engineering principles.",
    tags: ["Green Computing", "Presentation", "Energy Efficiency", "Software Architecture"],
    links: [
      { label: "Green Software Foundation", url: "https://greensoftware.foundation/" }
    ],
  },
  {
    id: 7,
    title: "Assignment 07 - Mid-Semester Exam (MSE-2) Comprehensive E-Waste Dossier",
    date: "18 October 2026",
    category: "Academic Synthesis",
    pdf: "/assignments/pdfs/mse2-ewaste.pdf",
    shortDescription:
      "Comprehensive examination study dossier and consolidated synthesis notes on environmental management systems.",
    description: `
This assignment contains the complete examination study dossier and technical synthesis prepared for the Mid-Semester Examination (MSE-2) in E-Waste and Environmental Management.

Contents:
- Complete breakdown of Statutory E-Waste Categories (IT & Telecom, Consumer Electronics, Medical Devices, Lighting Equipment).
- Step-by-step technological workflows for Automated Dismantling, Magnetic Separation, Eddy-Current Sorting, and Precious Metal Hydrometallurgy.
- Comparative life-cycle assessment (LCA) from raw mineral extraction through product retirement.
- Statutory compliance obligations under ISO 14001 Environmental Management Systems.
- Future outlook: Bio-leaching utilizing microbial solutions for zero-emission recovery of precious electronic metals.
`,
    remarks: "Master examination dossier and reference paper synthesizing e-waste management systems.",
    tags: ["MSE2", "Exam Dossier", "Lifecycle Assessment", "Recycling Tech"],
    links: [
      { label: "ISO 14001 Environmental Management", url: "https://www.iso.org/iso-14001-environmental-management.html" }
    ],
  },
];

export default assignments;