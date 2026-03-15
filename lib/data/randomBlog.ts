export const BLOG_DATA = {
  publication: {
    name: "The Daily Brief",
    tagline: "Independent Journalism Since 2025",
    sections: [
      "Home",
      "Technology",
      "Business",
      "Opinion",
      "Science",
      "Culture",
      "World",
    ],
  },

  // ── The main featured article ──────────────────────────────────
  featuredArticle: {
    section: "Technology",
    headline: "How AI is Reshaping the Way We Work",
    deck: "A new wave of tools is forcing companies to rethink everything from hiring to strategy — and the changes are only accelerating.",
    authors: ["Sarah Chen", "Marcus Webb"],
    date: "March 15, 2026",
    readingTime: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
    imageCaption:
      "Workers at a tech hub in San Francisco adapt to new AI-assisted workflows.",
    imageCredit: "James Morley for The Daily Brief",
    pullQuote: {
      text: "The machines aren't replacing assembly lines. They're replacing the cognitive middle.",
      attribution: "Dr. Priya Nair, Labor Economist, MIT",
    },
    tags: ["AI", "Future of Work", "Technology", "Economy", "Labor"],
    body: [
      "The transformation began quietly, almost imperceptibly. First it was autocomplete suggestions. Then draft emails. Then entire quarterly reports, assembled overnight by a system that never slept, never tired, and never asked for overtime.",
      "We had 14 people in our research team, said Marcus Webb, chief strategy officer at a mid-size logistics firm. Today we have six — and we produce three times the output.",
      "The numbers tell a sweeping story. Across industries, companies that adopted AI-assisted workflows in the past two years reported productivity gains averaging 34 percent, according to a new study from the McKinsey Global Institute. But beneath those headlines lies a more complicated reality: the tools are powerful, the gains are real, and the human cost is still being counted.",
      "Critics warn that the efficiency gains mask a deeper restructuring of labor — one that falls hardest on mid-level knowledge workers. Analysts, coordinators, junior writers, and entry-level coders find themselves competing not just with each other, but with systems trained on billions of examples of their own work.",
      "This is not automation in the old sense, said Dr. Priya Nair, a labor economist at MIT. The machines aren't replacing assembly lines. They're replacing the cognitive middle.",
      "Yet for every story of displacement, there is a counterpoint of transformation. Companies that invested in retraining saw different outcomes — teams reconfigured around judgment, creativity, and human insight that AI still cannot replicate. The question is no longer whether the tools will arrive. It is whether organizations will be ready when they do.",
      "A quiet divide is opening between firms that treat AI as a reduction tool — cutting headcount to trim budgets — and those that treat it as a leverage tool, amplifying what their people can achieve. The former may win the next quarter. The latter, analysts say, will likely win the decade.",
      "In a light-filled office overlooking downtown Austin, a team of eight runs what was once a thirty-person editorial operation. They do it without frantic overtime, without burnout, and — by their own account — without sacrificing quality. They are not nostalgic for the old way. They are too busy building the new one.",
    ],
  },

  // ── Sidebar stories ────────────────────────────────────────────
  sidebarStories: [
    {
      section: "Business",
      title: "Goldman Sachs Doubles Down on AI Infrastructure Bets",
      deck: "The bank's latest fund targets data centers and chip foundries as the AI arms race intensifies.",
    },
    {
      section: "Science",
      title: "Breakthrough in Protein Folding Opens Door to Custom Drugs",
      deck: "Researchers at Stanford say the technique could cut drug development timelines in half.",
    },
    {
      section: "Opinion",
      title: "The Case Against Moving Fast and Breaking Things",
      deck: "Silicon Valley's founding mantra is now a liability, argues venture capitalist Anna Kimura.",
    },
    {
      section: "World",
      title: "EU Regulators Signal Tougher Stance on Foundation Models",
      deck: "Brussels is preparing a set of obligations that could reshape how large AI models are trained and deployed.",
    },
  ],

  // ── Aside: trending stories ────────────────────────────────────
  trending: [
    {
      title: "The Hidden Cost of Automation on Junior Employees",
      time: "2 hours ago",
    },
    { title: "Inside the Race to Build Truly General AI", time: "4 hours ago" },
    {
      title: "Why Remote Work Survived the Return-to-Office Wave",
      time: "Yesterday",
    },
    {
      title: "The New Geography of Tech: How Secondary Cities Won",
      time: "2 days ago",
    },
    {
      title: "Founders Who Sold Too Early — and What They Learned",
      time: "3 days ago",
    },
  ],

  // ── More stories grid ──────────────────────────────────────────
  moreStories: [
    {
      section: "Technology",
      title: "The Quiet Dominance of Open Source AI",
      deck: "Community-built models are catching up to proprietary giants faster than anyone expected.",
      author: "Leila Park",
      time: "5 hours ago",
    },
    {
      section: "Economy",
      title: "America's Productivity Paradox, Revisited",
      deck: "New data suggests the gains are real — but unevenly distributed in ways that matter.",
      author: "James Okonkwo",
      time: "6 hours ago",
    },
    {
      section: "Culture",
      title: "What We Talk About When We Talk About Creative AI",
      deck: "The debate over authorship, originality, and the nature of creative work itself.",
      author: "Nadia Volkov",
      time: "8 hours ago",
    },
    {
      section: "Opinion",
      title: "Stop Treating AI Ethics as a PR Exercise",
      deck: "The field deserves more than press releases and advisory boards with no power.",
      author: "Prof. David Sims",
      time: "Yesterday",
    },
  ],
};
