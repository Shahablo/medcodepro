// Source-linked reporting only. Generated public files must be committed with this data.
// See BLOG.md for the exact-version review and deployment checks.
export const articles = [{
  slug: 'payer-claim-review-evidence-trail',
  title: 'Payer Claim Review Is Getting Smarter. Your Evidence Trail Should Too.',
  summary: 'Elevance described a wider payment-integrity effort. Here is a practical chart-to-code check without assuming a new denial trend.',
  category: 'Claims & denials',
  published: '2026-10-26',
  updated: '2026-10-26',
  lede: {
    text: 'The chart is finished, the codes are selected, and the claim is nearly out the door. Then someone asks a deceptively simple question: Where, exactly, does the note support this line?',
    cites: [], analysis: true
  },
  sections: [
    {
      heading: 'What Elevance actually said',
      paragraphs: [
        {
          text: 'On its October 21, 2026 earnings call, Elevance Health executives said the company was expanding claims review and coding policies. Its finance chief said AI-enabled analytics were helping teams identify potentially inappropriate billing and utilization patterns earlier. Those are Elevance’s descriptions of its own work, reported by Becker’s Healthcare; the company’s investor site dates the call.',
          cites: ['beckers', 'call']
        },
        {
          text: 'In its third-quarter filing, Elevance also describes enhancing payment integrity as one part of its response to elevated Medicaid medical-cost trends.',
          cites: ['filing']
        },
        {
          text: 'None of this establishes that Elevance has increased denials, that its reviews are wrong, or that every specialty practice will see a change. A payer strategy update is a reason to check your own evidence trail, not a reason to declare a denial emergency.',
          cites: [], analysis: true
        }
      ]
    },
    {
      heading: 'The hard part is showing why a code fits',
      paragraphs: [
        {
          text: 'In complex procedural work, a code can look plausible in a billing queue while the chart support is scattered through an operative note. A procedure might appear in a plan but not in the record of what was performed. A modifier might depend on a detail that is obvious to the surgeon and ambiguous to the next reviewer.',
          cites: [], analysis: true
        },
        {
          text: 'For a practical spot check, take a handful of difficult historical claims and ask four questions:',
          cites: [], analysis: true
        }
      ],
      list: [
        { lead: 'What was documented as performed?', text: 'Find the passage in the actual note, not just a procedure name in the schedule.' },
        { lead: 'What coding conclusion follows?', text: 'Keep a proposed code or modifier visibly provisional until a qualified human reviews it.' },
        { lead: 'Which rule applies?', text: 'Record the source and effective version. Payer and coverage details can change.' },
        { lead: 'What is still uncertain?', text: 'Show an unclear level, missing detail, or policy conflict as a question for a person to resolve.' }
      ]
    },
    {
      heading: 'A better use of AI: show your work',
      paragraphs: [
        {
          text: 'MedCode Pro’s approach starts with retrospective review of de-identified historical cases. It surfaces coding and documentation questions with links back to the underlying note, then routes recommendations to a human reviewer. It does not finalize codes, submit claims, or decide what a payer will cover.',
          cites: [], analysis: true
        },
        {
          text: 'The useful result is a reviewable trail from chart evidence to a question to a human decision. It will not settle a contract dispute or guarantee payment. It can help a team see where its documentation and coding handoffs are strong, where they are thin, and which questions recur.',
          cites: [], analysis: true
        },
        {
          text: 'Before buying another promise to “stop denials,” try a smaller question: could your team explain its most complex claims, line by line, using the record it already has?',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'See the review process on your own case mix',
    text: 'Request a scoped MedCode Pro walkthrough. Please do not send patient records through the website contact form.'
  },
  sources: [
    { id: 'beckers', title: 'Becker’s Healthcare, October 21: Elevance’s payment-integrity push', url: 'https://www.beckershospitalreview.com/finance/revenue-cycle-management/elevances-payment-integrity-push-what-revenue-cycle-leaders-should-know/' },
    { id: 'call', title: 'Elevance Health, third-quarter 2026 earnings call', url: 'https://ir.elevancehealth.com/events-and-presentations/event-details/2026/Elevance-Health-2026-Q3-Earnings-Call/default.aspx' },
    { id: 'filing', title: 'Elevance Health, third-quarter 2026 Form 10-Q', url: 'https://www.sec.gov/Archives/edgar/data/1156039/000115603926000071/elv-20260930.htm' }
  ]
}, {
  slug: 'denied-claims-evidence-trail',
  title: 'Denied Claims: Find the Real Problem First',
  summary: 'A Georgia hospital payment lawsuit is a reminder to separate documentation, processing, authorization and contract questions before assigning denial work.',
  category: 'Claims & denials',
  published: '2026-10-28',
  updated: '2026-10-28',
  lede: {
    text: '“Denied” looks like one status in a work queue. In practice, it can describe several different problems. One claim may need chart evidence, another a duplicate-submission reconciliation, and another an answer about contract terms. Sending all three to the same reviewer wastes time and can leave the real question untouched.',
    cites: [], analysis: true
  },
  sections: [
    {
      heading: 'What the October filing shows—and what it does not',
      paragraphs: [
        {
          text: 'Seven HCA-affiliated hospitals filed a complaint against Blue Cross Blue Shield Healthcare Plan of Georgia, doing business as Anthem Blue Cross and Blue Shield, on October 5, 2026. The stamped filing identifies the case as Bay Area Healthcare Group, Ltd. et al. v. Blue Cross Blue Shield Healthcare Plan of Georgia, Inc., No. 1:26-cv-05750.',
          cites: ['complaint', 'docket']
        },
        {
          text: 'The hospitals allege $501,213.64 in unpaid or underpaid claims involving eight members. Their complaint describes payer responses involving medical necessity or authorization, a duplicate claim or appeal, and allegedly missing information or documentation. In at least one example, the hospitals say they repeatedly supplied requested records. A payer’s “missing information” label is therefore not proof that the underlying chart was incomplete.',
          cites: ['complaint']
        },
        {
          text: 'These are allegations, not court findings. The lawsuit does not establish whether any particular claim should have been paid, which party will prevail, or a nationwide trend in denials. Its practical lesson is narrower: a denial label alone does not tell a practice which kind of evidence or specialist it needs.',
          cites: [], analysis: true
        }
      ]
    },
    {
      heading: 'Sort the question before trying to solve it',
      paragraphs: [
        {
          text: 'A short first pass can separate the work into four lanes. They may overlap, but keeping their evidence distinct makes a human review more useful.',
          cites: [], analysis: true
        }
      ],
      list: [
        { lead: 'Documentation and coding.', text: 'Find the note passage supporting what was actually performed and the proposed code. Flag missing or ambiguous detail for a qualified reviewer.' },
        { lead: 'Claim processing.', text: 'For a duplicate or missing field, compare the original claim, correction, remittance and payer response before building a medical-necessity argument.' },
        { lead: 'Authorization and policy.', text: 'Check the plan, service date, applicable rule and actual payer communication. Route the question to the team that handles utilization review.' },
        { lead: 'Contract and payment.', text: 'If the issue is a negotiated rate or legal obligation, send it to contracting or counsel. Better chart documentation cannot interpret the agreement by itself.' }
      ]
    },
    {
      heading: 'Where a documentation review helps',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term workflow starts with de-identified historical cases. It surfaces review-required coding candidates and documentation questions with links back to source note passages, then leaves the decision to a qualified human. It does not finalize codes, submit claims or prior authorizations, adjudicate coverage, or promise to overturn a denial.',
          cites: [], analysis: true
        },
        {
          text: 'That boundary matters. A practice can test whether its own chart-to-code explanation is coherent before deciding whether the remaining issue belongs with processing, policy or contracting. A clear evidence trail is useful even when the right next step is outside the coding lane.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'See the review process on your own case mix',
    text: 'Request a scoped MedCode Pro walkthrough of the retrospective, human-reviewed process. Discuss secure intake before sharing any case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'complaint', title: 'Original stamped federal complaint, filed October 5, 2026 (55-page PDF)', url: 'https://beckers-cs-assets.s3.us-east-1.amazonaws.com/cs/lawsuits/bay-area-healthcare-group-v-anthem-bcbs-georgia-complaint-2026-10-05.pdf' },
    { id: 'docket', title: 'Federal case docket mirror, last retrieved October 6, 2026', url: 'https://dockets.justia.com/docket/georgia/gandce/1%3A2026cv05750/365960' },
    { id: 'beckers', title: 'Becker’s Healthcare, October 7, 2026: HCA hospitals’ payment lawsuit', url: 'https://www.beckershospitalreview.com/finance/hca-hospitals-escalate-payment-fight-with-insurers/' }
  ]
}, {
  slug: 'electronic-prior-authorization-evidence',
  title: 'Prior Authorization Is Moving Online. The Evidence Still Has to Travel With It.',
  summary: 'An October 21 employer statement adds momentum to electronic prior authorization, while a separate CMS rule sets narrower 2026 and 2027 requirements. Here is what specialty practices can check now.',
  category: 'Prior authorization',
  published: '2026-10-30',
  updated: '2026-10-30',
  lede: {
    text: 'Anyone who has chased a prior authorization by phone knows the problem is bigger than the fax machine. A request can move faster and still leave the next person hunting for the note, the applicable rule, or the reason a payer asked for more information.',
    cites: [], analysis: true
  },
  sections: [
    {
      heading: 'What changed on October 21',
      paragraphs: [
        {
          text: 'On October 21, 2026, the Centers for Medicare & Medicaid Services and the Department of Labor announced that five employers had signed a statement supporting the expansion of electronic prior-authorization improvements to self-funded employer plans. The employers were Amazon, Axon, Google, Meta, and Oracle. The statement is support for broader adoption; it is not a report that those plans have already implemented a common workflow or measured a drop in delays.',
          cites: ['cms-employers']
        },
        {
          text: 'A separate CMS final rule already sets requirements for specified impacted payers, including Medicare Advantage, Medicaid and CHIP programs, and certain exchange plans. Beginning in 2026, those payers must provide a specific reason when denying prior authorization for covered medical items and services. Prior Authorization API requirements generally begin January 1, 2027. The rule excludes drug prior authorizations from these provisions. The employer statement and the final rule address different populations and should not be treated as one universal change.',
          cites: ['cms-rule', 'cms-employers']
        }
      ]
    },
    {
      heading: 'A reason is useful only when the evidence is findable',
      paragraphs: [
        {
          text: 'A more specific payer response can help a team decide what to investigate. The question might concern missing clinical detail, a plan-specific coverage requirement, an incomplete submission, or a disagreement that needs a direct payer conversation. More electronic transactions will not resolve that question on their own.',
          cites: [], analysis: true
        },
        {
          text: 'For one difficult historical case, try tracing the handoff without asking the clinician to reconstruct it from memory:',
          cites: [], analysis: true
        }
      ],
      list: [
        { lead: 'Start with the source.', text: 'What was documented as performed, and what was available when the request or claim was prepared?' },
        { lead: 'Preserve the rule.', text: 'Which coverage or coding source applied to that plan and date? Keep the version with the review.' },
        { lead: 'Keep the payer response distinct.', text: 'Record what the payer actually said instead of translating every response into “missing documentation.”' },
        { lead: 'Name the reviewer.', text: 'Who decided whether the next step belongs with clinical documentation, coding, utilization review, or a payer discussion?' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits, and where it does not',
      paragraphs: [
        {
          text: 'MedCode Pro currently focuses on retrospective review of de-identified historical cases. It surfaces coding and documentation questions with links to the underlying operative note and leaves decisions to a human reviewer. It does not submit prior authorizations, finalize codes, make payer-final coverage decisions, or guarantee approval or payment.',
          cites: [], analysis: true
        },
        {
          text: 'The connection to the federal news is evidence discipline. As administrative steps become more electronic, a specialty practice still needs to explain the chain from source note to proposed code or service, applicable rule, and human decision. A small review of past cases can show where that chain is clear and where a handoff needs work.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'See a source-linked review',
    text: 'Request a scoped MedCode Pro walkthrough of the retrospective, human-reviewed process. Discuss a secure intake path before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'cms-employers', title: 'CMS and Department of Labor, October 21, 2026: employer support for electronic prior authorization', url: 'https://www.cms.gov/newsroom/press-releases/leading-employers-back-expansion-electronic-prior-authorization-self-funded-health-plans' },
    { id: 'cms-rule', title: 'CMS: Interoperability and Prior Authorization Final Rule, CMS-0057-F', url: 'https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f' }
  ]
}, {
  slug: 'denial-survey-practice-baseline',
  title: 'A Denial Survey Is a Prompt, Not Your Practice’s Baseline',
  summary: 'Experian Health’s 2026 survey captures revenue-cycle concerns. A specialty practice still needs its own consistent claim data before deciding what to change.',
  category: 'Claims & denials',
  published: '2026-11-02',
  updated: '2026-11-02',
  lede: {
    text: 'A headline about rising denials can make a team want to buy a fix immediately. Before changing the workflow, ask a smaller question: what does your own denial rate count?',
    cites: [], analysis: true
  },
  sections: [
    {
      heading: 'What the new survey actually measures',
      paragraphs: [
        {
          text: 'Experian Health said on October 28, 2026 that 75% of respondents to its State of Claims survey reported increasing claim denials, while 40% said their organization’s denial rate exceeded 10% of claims. The company says it surveyed 204 healthcare professionals responsible for financial, billing or claims-management decisions.',
          cites: ['experian-release']
        },
        {
          text: 'Those are responses from professionals, not an independently measured national claim-denial rate. The public release does not provide a claim-level denominator, a specialty breakdown, or enough sampling detail to tell one practice how its results compare. It is useful evidence of what respondents say they are experiencing; it cannot diagnose a specific practice’s claims.',
          cites: ['experian-release'], analysis: true
        },
        {
          text: 'Becker’s Healthcare highlighted technology changes respondents said they had made, including replacing claims systems and expanding portal reviews. That is a discovery signal about industry attention, not proof that any one tool caused denials to fall.',
          cites: ['beckers'], analysis: true
        }
      ]
    },
    {
      heading: 'Build a number your team can explain',
      paragraphs: [
        {
          text: 'A practice can use the survey as a reason to check its own baseline, with definitions set before comparing months or buying software. Start with a bounded period of adjudicated claims and record:',
          cites: [], analysis: true
        }
      ],
      list: [
        { lead: 'The denominator.', text: 'Count eligible submitted claims consistently. Keep rejected submissions, initial denials and final unpaid claims as different states.' },
        { lead: 'The mix.', text: 'Break out payer, service line and reason category. A change in case mix or payer mix can make a single headline rate misleading.' },
        { lead: 'The work after denial.', text: 'Track which items were corrected, appealed, paid or still open, and how much staff review each path required.' },
        { lead: 'The source of each conclusion.', text: 'Keep the remittance, claim version, relevant note and applicable rule together so a reviewer can check the classification.' }
      ]
    },
    {
      heading: 'Use a focused review before a broad promise',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term work is narrower than an end-to-end claims platform. In a retrospective review of de-identified historical cases, it links coding and documentation questions to source note passages and routes conclusions to a human reviewer. It does not calculate a practice-wide denial rate on its own, finalize codes, submit claims, resolve payer contracts, or guarantee recovered revenue.',
          cites: [], analysis: true
        },
        {
          text: 'If a practice’s own baseline points to a documentation or coding handoff, a small, human-reviewed case sample can test whether the evidence trail is the problem. If the pattern is eligibility, authorization, processing or contract payment, that finding should send the team to the right workflow instead. The survey starts the question; the practice’s own records decide where to look.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Look at the cases behind your numbers',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked review. Discuss a secure intake path before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'experian-release', title: 'Experian Health, October 28, 2026: State of Claims survey release', url: 'https://www.experianplc.com/newsroom/press-releases/2026/experian-health-s-annual-state-of-claims-survey-finds-denials-re' },
    { id: 'beckers', title: 'Becker’s Healthcare: tactics providers reported using to reduce denials', url: 'https://www.beckershospitalreview.com/finance/revenue-cycle-management/the-tactics-providers-are-using-to-reduce-claim-denials/' }
  ]
}, {
  slug: 'ncci-ptp-2027-version-control',
  title: 'A New NCCI Version Is Coming. Which Edit Applied to That Claim?',
  summary: 'CMS has announced January 2027 PTP edits. For a historical claim review, the service date and practitioner-versus-hospital file matter more than a future file announcement.',
  category: 'Coding & documentation',
  published: '2026-11-04',
  updated: '2026-11-04',
  lede: {
    text: 'An edit pair in a spreadsheet can look like a simple yes-or-no answer. It is not useful until someone can say which file, which setting and which date the answer came from.',
    cites: [], analysis: true
  },
  sections: [
    {
      heading: 'What CMS has announced',
      paragraphs: [
        {
          text: 'A September 17, 2026 CMS transmittal announces National Correct Coding Initiative procedure-to-procedure (NCCI PTP) version 33.0, effective January 1, 2027, with a January 4 implementation date for contractors. It says test files will be available through CMS’s Hybrid Cloud Data Center on or about November 2, and final files on or about November 17. Those are target availability dates in a contractor transmittal, not proof that a practice can download a final public file today.',
          cites: ['transmittal']
        },
        {
          text: 'As checked November 4, the CMS public PTP download page still displays 2026 fourth-quarter files, effective October 1, 2026. It lists separate hospital-outpatient and practitioner files. We did not verify access to the contractor test files and are not naming a new or deleted 2027 edit pair before CMS publishes the final files.',
          cites: ['cms-ptp']
        }
      ]
    },
    {
      heading: 'The question for an older claim',
      paragraphs: [
        {
          text: 'CMS explains that a PTP edit has a Column One and Column Two code. When an edit pair is reported for the same beneficiary and service date, the Column Two code is generally denied unless a clinically appropriate associated modifier is reported. CMS also publishes quarterly additions, deletions and modifier-indicator changes. That makes the applicable quarter and setting part of the evidence, not a footnote.',
          cites: ['cms-ptp']
        },
        {
          text: 'For a retrospective review, start with the date of service and the claim setting. Then identify the practitioner or hospital-outpatient file that applied on that date, preserve the exact file version, and ask a qualified coder to examine the pair and modifier question against the documented work. A future version should not be projected backward onto a 2026 service just because it is the newest one in a download folder.',
          cites: ['cms-ptp'], analysis: true
        }
      ],
      list: [
        { lead: 'Date and setting.', text: 'Record service date and whether the claim used the practitioner or hospital-outpatient edit set.' },
        { lead: 'Version and source.', text: 'Keep the CMS file name, quarter and effective date beside the review.' },
        { lead: 'Human decision.', text: 'Show the note passage and the reviewer’s reasoning about the pair and any modifier; do not treat an automated flag as a final coding answer.' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term workflow is retrospective and human-reviewed. With de-identified historical cases, it can surface coding and documentation questions and link a reviewer back to source-note evidence. The relevant NCCI version and setting still need to be verified for the service date. The product does not finalize codes, submit claims, decide payer coverage or guarantee payment.',
          cites: [], analysis: true
        },
        {
          text: 'When CMS publishes the final 2027 files, the useful question will be which actual edit and modifier-indicator changes affect a practice’s case mix. Until then, the announcement is a prompt to tighten version control, not a claim that a specific 2027 pair has changed.',
          cites: ['transmittal', 'cms-ptp'], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the evidence behind a coding question',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Discuss secure intake before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'transmittal', title: 'CMS Transmittal 13946 / Change Request 14611, September 17, 2026', url: 'https://www.cms.gov/files/document/r13946cp.pdf' },
    { id: 'cms-ptp', title: 'CMS Medicare NCCI Procedure-to-Procedure Edits, public download page', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits/medicare-ncci-procedure-procedure-ptp-edits' }
  ]
}];
