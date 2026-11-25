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
}, {
  slug: '2027-same-day-em-final-rule',
  title: 'The 2027 Same-Day E/M Rule Got Narrower. Keep the Review Precise.',
  summary: 'CMS finalized a narrower same-day office visit payment policy than it proposed. A specialty practice should separate documented work, global period and payment before estimating its exposure.',
  category: 'Coding & documentation',
  published: '2026-11-06',
  updated: '2026-11-06',
  lede: {
    text: 'A proposed rule can send a team into a spreadsheet exercise. The final rule can make that spreadsheet wrong before it is finished. CMS’s new same-day office visit policy is a useful example: the final scope and reduction are both narrower than the proposal.',
    cites: ['cms-fact']
  },
  sections: [
    {
      heading: 'What changed between proposal and final rule',
      paragraphs: [
        {
          text: 'CMS released its calendar year 2027 Physician Fee Schedule final-rule fact sheet on November 4, 2026. The final rule went on public display that day; CMS lists November 9 as its Federal Register publication date. The policy takes effect on or after January 1, 2027. It is a future Medicare payment change, not a recalculation of a 2026 claim.',
          cites: ['cms-fact', 'cms-rule']
        },
        {
          text: 'The proposal would have applied a same-day payment reduction to separately identifiable office/outpatient evaluation and management (E/M) visits furnished by the same physician or practice alongside procedures with 0-, 10- or 90-day global periods. It would have paid the most expensive service at 100% and the other relevant services at 50%. After comments, CMS finalized the policy for 0-day global procedures only. The most expensive service remains at 100%; the other separately billed surgical procedure or office/outpatient E/M service is paid at 80%, rather than the proposed 50%.',
          cites: ['cms-fact']
        },
        {
          text: 'A budget model built from the proposal would therefore overstate both the range of procedures and the size of this particular reduction. The final rule does not mean every same-day E/M visit is separately payable; the documentation and coding question still has to be reviewed on its own terms.',
          cites: ['cms-fact'], analysis: true
        }
      ]
    },
    {
      heading: 'Three questions before anyone estimates the impact',
      paragraphs: [
        {
          text: 'For a forward-looking sample, separate the questions instead of turning every same-day visit into one payment category:',
          cites: [], analysis: true
        }
      ],
      list: [
        { lead: 'What work is documented?', text: 'Ask a qualified reviewer whether the office/outpatient E/M work is separately identifiable from the procedure. Preserve the supporting note passages and the reviewer’s conclusion.' },
        { lead: 'Which procedure and period?', text: 'Check the actual procedure’s global period and service date. The finalized policy described here covers 0-day procedures, not the proposed 10- or 90-day groups.' },
        { lead: 'What is the payment question?', text: 'Keep the final CMS methodology separate from coding support and from contract-specific or non-Medicare payment assumptions. Model an effect only with the relevant finalized rates and case mix.' }
      ]
    },
    {
      heading: 'Where a retrospective evidence review fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term work is retrospective, de-identified and human-reviewed. It can surface coding and documentation questions in historical cases and link them to source-note passages. A practice could use that kind of review to learn whether its E/M and procedure documentation is explainable before applying a future payment model.',
          cites: [], analysis: true
        },
        {
          text: 'The product does not finalize codes, submit claims, determine Medicare payment, apply this 2027 rule to live claims or guarantee revenue. The final rule gives a team a more precise question to investigate; its own records and a qualified coding and payment review determine the answer.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'See the evidence review, not a payment promise',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Discuss secure intake before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'cms-fact', title: 'CMS, November 4, 2026: CY 2027 Medicare Physician Fee Schedule final-rule fact sheet', url: 'https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-final-rule' },
    { id: 'cms-rule', title: 'CMS-1848-F final-rule record, display November 4 and scheduled publication November 9, 2026', url: 'https://www.cms.gov/medicare/payment/fee-schedules/physician/federal-regulation-notices/cms-1848-f' }
  ]
}, {
  slug: 'g2211-b1-2027-modifier-transition',
  title: 'G2211 Becomes B1 in 2027. Do Not Treat It as a Simple Rename.',
  summary: 'CMS is moving the Medicare visit-complexity add-on to a modifier on the E/M code. Review eligibility, evidence and payment assumptions separately before changing a specialty-practice workflow.',
  category: 'Coding & documentation',
  published: '2026-11-09',
  updated: '2026-11-09',
  lede: {
    text: 'When a separate claim line becomes a modifier on another line, a find-and-replace rule looks tempting. The 2027 Medicare change to G2211 deserves a closer look: the code structure and the payment method both change.',
    cites: ['cms-2027']
  },
  sections: [
    {
      heading: 'What CMS finalized',
      paragraphs: [
        {
          text: 'In its November 4, 2026 calendar year 2027 Physician Fee Schedule final-rule summary, CMS says the separately paid office/outpatient E/M visit-complexity add-on, HCPCS G2211, will transition to modifier B1 on the associated E/M base code. B1 increases payment for that E/M code by 16% instead of the add-on’s flat payment. CMS says the policy applies on or after January 1, 2027; it does not change the coding of a 2026 service.',
          cites: ['cms-2027', 'cms-rule']
        },
        {
          text: 'The same final-rule summary describes a different, voluntary modifier, B2, with a 32% E/M payment increase for qualifying practitioners in a Medicare Shared Savings Program ACO or the LEAD Model. B2 has its own participation conditions. A practice should not treat B1 and B2 as interchangeable, or assume that ACO participation can be inferred from a patient’s assignment alone.',
          cites: ['cms-2027']
        }
      ]
    },
    {
      heading: 'The review question is still about the visit',
      paragraphs: [
        {
          text: 'CMS’s current G2211 FAQ describes the add-on as reflecting complexity from a longitudinal practitioner-patient relationship. It says the code is inappropriate when the practitioner has not taken responsibility for ongoing care with consistency and continuity, or does not plan to do so. That existing guidance is useful context for examining historical claims; teams should verify the final 2027 billing instructions before converting it into a B1 edit rule.',
          cites: ['cms-faq', 'cms-2027'], analysis: true
        },
        {
          text: 'Start with a dated sample of Medicare office/outpatient E/M visits and their G2211 use. Have a qualified reviewer separate three questions: whether the historical service supported G2211 under the instructions in force on its date, how the 2027 modifier should be reported under final operational guidance, and how the change might affect payment for the practice’s actual E/M mix. A percentage applied to an E/M base payment is not the old flat add-on amount, so multiplying historical G2211 counts by a single assumed dollar difference would be a poor forecast.',
          cites: ['cms-2027', 'cms-faq'], analysis: true
        }
      ],
      list: [
        { lead: 'Preserve the service date.', text: 'Keep 2026 G2211 reviews under the rules that applied to those claims; identify the January 2027 transition separately.' },
        { lead: 'Check the relationship evidence.', text: 'Link the reviewer to the note and relevant care context. Do not mark every specialty E/M visit eligible by default.' },
        { lead: 'Verify the new claim rule.', text: 'Confirm final modifier instructions, ACO participation where relevant, and payer-specific implementation before changing claim edits or forecasts.' }
      ]
    },
    {
      heading: 'Where a retrospective review fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term workflow is a retrospective, de-identified, source-linked coding and documentation risk review with a human reviewer. It can help a team locate historical G2211 patterns and examine the note evidence behind a question. That is a baseline for human follow-up, not an automated decision that B1 or B2 belongs on a future claim.',
          cites: [], analysis: true
        },
        {
          text: 'The product does not finalize codes, submit claims, apply a live 2027 modifier, determine Medicare payment or guarantee recovered revenue. Treat this final rule as a reason to prepare a controlled transition, with the eventual claim workflow checked against CMS and the relevant payer’s operational instructions.',
          cites: ['cms-2027'], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review historical evidence before changing the workflow',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Discuss secure intake before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'cms-2027', title: 'CMS, November 4, 2026: CY 2027 Medicare Physician Fee Schedule final-rule fact sheet', url: 'https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-final-rule' },
    { id: 'cms-rule', title: 'CMS-1848-F final-rule record', url: 'https://www.cms.gov/medicare/payment/fee-schedules/physician/federal-regulation-notices/cms-1848-f' },
    { id: 'cms-faq', title: 'CMS: Frequently Asked Questions about E/M Visit Complexity Add-On HCPCS Code G2211', url: 'https://www.cms.gov/files/document/hcpcs-g2211-faq.pdf' }
  ]
}, {
  slug: '2027-outpatient-rule-facility-professional-claims',
  title: 'The 2027 Outpatient Rule Changes the Facility Question. Keep the Surgeon’s Claim Separate.',
  summary: 'CMS finalized new hospital outpatient and ASC policies for 2027. A specialty practice should check the exact procedure and setting before assuming its professional claim or payment changes.',
  category: 'Coding & documentation',
  published: '2026-11-11',
  updated: '2026-11-11',
  lede: {
    text: 'A surgery moves from the hospital inpatient list, or an imaging service gets a different hospital outpatient payment method. It is easy to hear “site of care change” and assume every related claim changes with it. The 2027 Medicare outpatient rule calls for a more careful split: facility status, professional coding and clinical setting are different questions.',
    cites: ['cms-fact'], analysis: true
  },
  sections: [
    {
      heading: 'What CMS finalized on November 4',
      paragraphs: [
        {
          text: 'CMS issued its calendar year 2027 Hospital Outpatient Prospective Payment System and Ambulatory Surgical Center final rule on November 4, 2026. It updates the two facility payment systems for 2027. For imaging without contrast furnished in certain excepted off-campus hospital departments, CMS finalized use of a Physician Fee Schedule-equivalent rate for codes assigned to the affected imaging ambulatory payment classifications. The agency names certain bone density scans, x-rays, ultrasounds, CT scans and MRIs; rural Sole Community Hospitals are exempt from this particular policy.',
          cites: ['cms-fact', 'cms-rule']
        },
        {
          text: 'CMS also finalized removal of 637 services from the inpatient-only list for 2027 as part of a multiyear phaseout. That change concerns whether Medicare can pay for a service in the hospital outpatient setting when clinically appropriate. It is not a blanket instruction to move a patient to an ASC, a guarantee of coverage in every setting, or a change to the surgeon’s professional documentation requirements.',
          cites: ['cms-fact', 'opps-addenda', 'asc-addenda'], analysis: true
        }
      ]
    },
    {
      heading: 'Do the code-and-setting check before modeling dollars',
      paragraphs: [
        {
          text: 'A specialty practice with hospital or ASC cases can make a small, controlled review list rather than applying the headline to all procedures. Start with the actual code and service setting, then check the final CMS addenda and the instructions in force for the date of service. The OPPS addenda identify payment by HCPCS code, status indicators and the remaining inpatient-only codes; the ASC addenda separately identify covered surgical procedures, payment indicators and excluded procedures. A service removed from one list should not be treated as automatically present on another.',
          cites: ['opps-addenda', 'asc-addenda'], analysis: true
        }
      ],
      list: [
        { lead: 'Separate the claims.', text: 'Identify the hospital or ASC facility claim and the clinician’s professional claim before estimating any effect.' },
        { lead: 'Preserve the date and setting.', text: 'Keep historical 2026 reviews under their applicable rules; use the final 2027 files for prospective planning, with later operational updates checked before implementation.' },
        { lead: 'Resolve the patient-care decision elsewhere.', text: 'A payment-status change does not establish that a particular outpatient setting is clinically appropriate for a particular person.' }
      ]
    },
    {
      heading: 'Where a documentation review actually fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term process is retrospective first: de-identified historical cases, source-linked coding and documentation questions, and a qualified human reviewer. It can help a specialty team examine whether the professional note supports what was coded and where the evidence is thin. It does not determine an ASC’s covered-procedure status, set a facility payment, choose a site of care, finalize codes, submit claims or guarantee recovered revenue.',
          cites: [], analysis: true
        },
        {
          text: 'That division of labor is the practical point. Let facility billing and clinical teams confirm the applicable setting and payment files. Use a separate evidence review to understand the professional documentation in the practice’s own historical cases. Only then is a case-mix forecast worth building.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the professional evidence, with a person in the loop',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Discuss secure intake before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'cms-fact', title: 'CMS, November 4, 2026: CY 2027 OPPS and ASC final-rule fact sheet', url: 'https://www.cms.gov/newsroom/fact-sheets/calendar-year-2027-hospital-outpatient-prospective-payment-system-opps-ambulatory-surgical-center-0' },
    { id: 'cms-rule', title: 'CMS-1850-FC final-rule record', url: 'https://www.cms.gov/medicare/payment/prospective-payment-systems/ambulatory-surgical-center-asc/asc-regulations-and-notices/cms-1850-fc' },
    { id: 'opps-addenda', title: 'CMS 2027 final OPPS addenda table of contents', url: 'https://www.cms.gov/files/document/2027-fr-opps-addenda-table-contents.pdf' },
    { id: 'asc-addenda', title: 'CMS 2027 final ASC addenda table of contents', url: 'https://www.cms.gov/files/document/2027-fr-asc-addenda-table-contents.pdf-0' }
  ]
}, {
  slug: '2027-shared-medical-appointments-individual-record',
  title: 'Medicare Will Pay for Shared Medical Appointments in 2027. Each Patient Still Needs Their Own Record.',
  summary: 'The new group-visit codes create a payment path, but the final rule keeps individual care, consent and documentation at the center.',
  category: 'Coding & documentation',
  published: '2026-11-16',
  updated: '2026-11-16',
  lede: {
    text: 'A group visit can have one agenda and ten very different clinical stories. Medicare’s new shared medical appointment codes make that distinction operational: the session is shared, but the care and record still belong to each person.',
    cites: ['final-rule'], analysis: true
  },
  sections: [
    {
      heading: 'The final rule creates a specific payment path',
      paragraphs: [
        {
          text: 'In its November 4, 2026 Physician Fee Schedule final rule, published November 9, CMS established separate coding and payment for shared medical appointments beginning in calendar year 2027. The finalized G0686 descriptor covers a voluntary medical session for 2 to 10 patients with common conditions, led and billed by a physician or other qualified health care professional. It includes group education and peer support along with individualized clinical assessment and care, and is billed once per patient for the first 60 minutes.',
          cites: ['cms-summary', 'final-rule']
        },
        {
          text: 'CMS also finalized G0687 for each additional 30 minutes, up to two units when medically necessary, and a limit of no more than one shared medical appointment per week per beneficiary. These are 2027 rules, not instructions to recode a 2026 visit. A new payment route does not establish that any particular practice, patient or session is eligible.',
          cites: ['final-rule'], analysis: true
        }
      ]
    },
    {
      heading: 'A group note cannot do all the work',
      paragraphs: [
        {
          text: 'The rule requires each session to be documented in each participating beneficiary’s medical record. CMS also says participation must be voluntary, with consent to the appointment and confidentiality terms. A roster or shared slide deck may show who attended and what was taught, but it cannot by itself explain the assessment and care an individual received. CMS calls attendance verification potentially useful for an audit, rather than the substitute for each person’s record.',
          cites: ['final-rule'], analysis: true
        },
        {
          text: 'For a specialty practice considering this model, the first workflow test is a small, privacy-safe mock chart review: can a reviewer distinguish the common session from each participant’s clinical work, the consent record and the time being billed? The final rule also says minutes counted toward the shared appointment cannot be counted again for another separately billed service. Have coding, clinical and privacy staff validate the workflow against the final rule and later payer instructions before using it.',
          cites: ['final-rule'], analysis: true
        }
      ],
      list: [
        { lead: 'Separate common and individual work.', text: 'Keep a session record, but document the assessment and care in each person’s own chart.' },
        { lead: 'Record choice and confidentiality.', text: 'Verify consent to participate and to the group’s confidentiality terms before treating the visit as routine.' },
        { lead: 'Guard the time boundary.', text: 'Review the first 60 minutes, any medically necessary add-on time and overlap with other billed services.' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits today',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term workflow is retrospective first: source-linked coding and documentation risk questions from de-identified historical cases, with a qualified human reviewer. That process can help a practice see whether its existing group-visit records show individualized care and where the note evidence is thin. It cannot certify a future G0686 or G0687 claim, manage consent, decide medical necessity, submit a claim or guarantee payment.',
          cites: [], analysis: true
        },
        {
          text: 'The useful preparation is to learn from a small historical sample before building a 2027 billing workflow. Keep the final CMS rule beside the team’s review notes, and let the responsible clinicians, coders and privacy staff make the actual implementation decisions.',
          cites: ['final-rule'], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the individual evidence before changing the workflow',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Discuss secure intake before sharing case material; do not put patient records in the website contact form.'
  },
  sources: [
    { id: 'cms-summary', title: 'CMS, November 4, 2026: CY 2027 Physician Fee Schedule final-rule fact sheet', url: 'https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-final-rule' },
    { id: 'final-rule', title: 'Federal Register, November 9, 2026: CY 2027 Physician Fee Schedule final rule, shared medical appointments', url: 'https://www.govinfo.gov/content/pkg/FR-2026-11-09/html/2026-22743.htm' }
  ]
}, {
  slug: '2027-orthopedic-medicare-impact-practice-mix',
  title: 'Orthopedics Shows a 6% Drop in Medicare’s 2027 Specialty Table. Your Practice Needs Its Own Math.',
  summary: 'CMS’s orthopedic average combines many services and settings. A spine or pain practice needs its own code mix before treating that number as a forecast.',
  category: 'Coding & documentation',
  published: '2026-11-18',
  updated: '2026-11-18',
  lede: {
    text: 'A 6% drop is a useful headline and a poor budget line. CMS’s 2027 specialty-impact table describes an average across orthopedic surgery, not the financial result for a particular spine practice.',
    cites: ['cms-impact', 'cms-rule'], analysis: true
  },
  sections: [
    {
      heading: 'Read the table before repeating the number',
      paragraphs: [
        {
          text: 'CMS issued the calendar year 2027 Physician Fee Schedule final rule on November 4, 2026; it was published November 9. In the updated specialty-impact file posted with that rule, the estimated combined change in allowed charges from work, practice-expense and malpractice relative value units is minus 6% for orthopedic surgery overall. The file shows minus 4% for nonfacility services and minus 7% for facility-setting professional services. Its neurosurgery and interventional pain-management rows each show minus 2% overall.',
          cites: ['cms-rule', 'cms-impact']
        },
        {
          text: 'Those facility and nonfacility rows concern Physician Fee Schedule professional services; they are not an estimate of a hospital or surgery center’s facility payment. The table’s columns describe relative-value changes. The conversion factor and geographic adjustments are separate parts of the payment calculation, so the minus 6% row should not be presented as a complete 2027 rate change.',
          cites: ['cms-impact', 'cms-payment'], analysis: true
        },
        {
          text: 'CMS built the specialty estimates using 2025 Medicare utilization to compare 2026 and 2027 rates. The final rule says an individual practitioner’s result depends on the services furnished, and changes in service volume or mix will make actual Medicare revenue differ from the table. A spine-heavy orthopedic group is not necessarily the same as the aggregate orthopedic row; neither the row nor this article predicts a practice’s denials or total revenue.',
          cites: ['cms-rule'], analysis: true
        }
      ]
    },
    {
      heading: 'Build a practice-specific question, not a headline forecast',
      paragraphs: [
        {
          text: 'The useful next step is a bounded review of the practice’s own historical Medicare service mix. Let the billing team identify high-volume and high-dollar professional codes, service dates and places of service. Compare the applicable final 2027 code-level values and local payment inputs with the 2026 baseline; keep any separately paid facility claim, commercial contract and changing case volume outside that first comparison. Have a qualified reimbursement specialist validate the model before using it for a budget.',
          cites: ['cms-rule', 'cms-payment'], analysis: true
        }
      ],
      list: [
        { lead: 'Name the denominator.', text: 'Use the practice’s actual Medicare professional services, not every patient or every dollar of practice revenue.' },
        { lead: 'Keep setting and code together.', text: 'A facility-setting professional service and a nonfacility service can have different practice-expense values. Check the date and locality before comparing.' },
        { lead: 'Separate payment from evidence.', text: 'A lower allowed amount, a coding question and a denial are different events. Do not assign one explanation to all three.' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term work is retrospective first. With de-identified historical cases, it surfaces source-linked coding and documentation risk questions for a qualified human reviewer. That can help a specialty practice examine whether the professional note supports a proposed code and where its evidence is uncertain. It does not calculate a 2027 fee schedule, finalize codes, submit claims, make payer-final decisions or guarantee recovered revenue.',
          cites: [], analysis: true
        },
        {
          text: 'Put the CMS payment files and the practice’s own billing analysis beside the documentation review. Then the team can distinguish a rate change from a chart-to-code problem instead of treating a specialty average as the answer to both.',
          cites: ['cms-impact', 'cms-payment'], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the documentation behind your own case mix',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Discuss secure intake before sharing case material; do not send patient records through the website contact form.'
  },
  sources: [
    { id: 'cms-impact', title: 'CMS, CY 2027 PFS final-rule estimated impact on total allowed charges by specialty, updated November 5, 2026 (ZIP with accessible text table)', url: 'https://www.cms.gov/files/zip/cy-2027-pfs-final-rule-estimated-impact-total-allowed-charges-specialty-updated-11-05-2026.zip' },
    { id: 'cms-rule', title: 'Federal Register, November 9, 2026: CY 2027 Physician Fee Schedule final rule, impact analysis', url: 'https://www.govinfo.gov/content/pkg/FR-2026-11-09/html/2026-22743.htm' },
    { id: 'cms-payment', title: 'CMS Physician Fee Schedule documentation and payment formula', url: 'https://www.cms.gov/medicare/physician-fee-schedule/search/documentation' },
    { id: 'beckers', title: 'Becker’s Healthcare, November 18, 2026: final 2027 specialty estimates (discovery signal)', url: 'https://www.beckershospitalreview.com/compensation-issues/medicares-final-2027-pay-cuts-by-specialty/' }
  ]
}, {
  slug: 'spine-policy-code-list-december-2026-plan-date',
  title: 'Three Spine Codes Leave a December Policy List. Check the Plan Before Changing a Claim.',
  summary: 'Surest and UMR bulletins remove three CPT codes from a spine policy’s reference list on December 1. That is a version-control question, not a denial forecast.',
  category: 'Coding & documentation',
  published: '2026-11-20',
  updated: '2026-11-20',
  lede: {
    text: 'A code is slated to disappear from a payer policy list. It is tempting to turn that into a rule for every spine claim. The November Surest and UMR bulletins make a narrower point: three codes are leaving their spinal-fusion applicable-code lists on December 1. Before anyone changes an edit, the plan and service date need a closer look.',
    cites: ['surest-bulletin', 'umr-bulletin'], analysis: true
  },
  sections: [
    {
      heading: 'The change is specific',
      paragraphs: [
        {
          text: 'The November 1, 2026 medical-policy bulletins for Surest and UMR each list Spinal Fusion and Decompression as updated effective December 1, 2026. In the Applicable Codes entry, each says CPT 22850, 22855 and 63286 are removed. These are notices for named plan lines and a future policy date, not evidence that UnitedHealthcare has applied one new rule to every product or already denied any claim.',
          cites: ['surest-bulletin', 'umr-bulletin'], analysis: true
        },
        {
          text: 'The September 1 Surest version still lists the three codes. That older document also says its code list is for reference, may be incomplete, and does not itself decide coverage or guarantee payment. The meaningful comparison is therefore a dated policy-list change. It does not say the CPT codes were deleted, that they should never be billed, or that every service described by them is now noncovered.',
          cites: ['surest-prior', 'surest-bulletin'], analysis: true
        }
      ]
    },
    {
      heading: 'What the billing team should pin down',
      paragraphs: [
        {
          text: 'Start with the member’s actual plan line and the service date. Save the policy version that applies, not just a screenshot of the latest search result. Then have a qualified coder compare the proposed code with the operative note and the full code descriptor. If coverage or authorization is at issue, read the member-specific benefit terms and the payer’s actual response. A code-list edit, a documentation gap and a claim denial are different facts.',
          cites: ['surest-bulletin', 'umr-bulletin', 'surest-prior'], analysis: true
        }
      ],
      list: [
        { lead: 'Plan and date.', text: 'Record whether the case is Surest, UMR or another product, and which policy version applied on the service date.' },
        { lead: 'Code and note.', text: 'Ask a human reviewer what procedure the note actually supports before changing a code or an edit.' },
        { lead: 'Payer outcome.', text: 'If there is a response, preserve its exact reason and the relevant claim or authorization history instead of assuming the policy-list change caused it.' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term workflow is retrospective first. On de-identified historical spine cases, it can surface coding and documentation risk questions and link a reviewer back to source-note evidence. The reviewer can keep the applicable payer policy version beside that review. A qualified human still decides what the record supports. The product does not determine a member’s benefit, finalize codes, submit claims or prior authorizations, make payer-final decisions, or promise recovered revenue.',
          cites: [], analysis: true
        },
        {
          text: 'The useful test is modest: in a de-identified historical spine sample, see whether the team can separate a chart-to-code question from a policy-version check. Once the December 1 change takes effect, evaluate any actually affected cases using their plan and service dates. Neither exercise forecasts denials or payment.',
          cites: ['surest-bulletin', 'umr-bulletin'], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the evidence behind the code',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Arrange secure intake before sharing case material; do not send patient records through the website contact form.'
  },
  sources: [
    { id: 'surest-bulletin', title: 'UnitedHealthcare, November 1, 2026: Surest Medical Policy Update Bulletin, spinal fusion and decompression', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/policies/mpub-archives/surest/surest-medical-policy-update-bulletin-november-2026-full.pdf' },
    { id: 'umr-bulletin', title: 'UnitedHealthcare, November 1, 2026: UMR Medical Policy Update Bulletin, spinal fusion and decompression', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/policies/mpub-archives/umr/umr-medical-policy-update-bulletin-november-2026-full.pdf' },
    { id: 'surest-prior', title: 'UnitedHealthcare, September 1, 2026: Surest Spinal Fusion and Decompression policy, SRST2026T0639J', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/policies/surest/spinal-fusion-decompression-sur.pdf' }
  ]
}, {
  slug: '2027-spine-osteotomy-work-rvus-operative-note',
  title: 'CMS Finalized 2027 Spine Osteotomy Values. The Operative Note Still Has to Tell the Story.',
  summary: 'Four spine osteotomy codes receive finalized Medicare work values for 2027. A code-level review starts with the documented procedure, not a specialty-wide payment estimate.',
  category: 'Coding & documentation',
  published: '2026-11-23',
  updated: '2026-11-23',
  lede: {
    text: 'A specialty average cannot tell a spine group what happened to a particular procedure code. The 2027 Medicare Physician Fee Schedule final rule gives a more useful example: four posterior spine osteotomy codes with revised guidance and finalized work values. The first question for a practice is whether its operative notes clearly describe the work it is asking a human coder to evaluate.',
    cites: ['final-rule'], analysis: true
  },
  sections: [
    {
      heading: 'What CMS actually finalized',
      paragraphs: [
        {
          text: 'CMS displayed the 2027 Physician Fee Schedule final rule on November 4, 2026, and it was published November 9. For CPT 22210, 22212, 22214 and add-on 22216, CMS finalized work relative value units of 23.12, 21.72, 19.53 and 3.00, respectively, as proposed. The policy takes effect January 1, 2027. These are work RVUs, not dollar payment rates or a forecast for any one practice.',
          cites: ['final-rule'], analysis: true
        },
        {
          text: 'The rule describes revised CPT guidance for this code family, including the extent of ligament and bony resection involved in realigning the spinal column. CMS did not simply accept the specialty panel’s higher recommended work values for the first three codes. It weighed surveyed intraservice time and assumptions about postoperative visits; commenters disputed parts of that reasoning. The final values settle the 2027 Medicare valuation decision, not whether a particular operation met a code’s requirements.',
          cites: ['final-rule'], analysis: true
        }
      ]
    },
    {
      heading: 'Put the code, date and operative evidence together',
      paragraphs: [
        {
          text: 'For a spine group, the practical review is narrower than applying a headline percentage to every case. Identify historical cases involving the osteotomy family, keep the service date and code version attached, and have a qualified coder compare the full operative note with the applicable code descriptors and guidelines. The note should support what was actually performed, at which level and with what separately reportable work; the reviewer must resolve that question rather than infer it from a planned procedure or a payment table.',
          cites: ['final-rule'], analysis: true
        },
        {
          text: 'A work RVU change also does not by itself establish a claim denial or a final allowed amount. A Medicare professional payment comparison needs the relevant 2026 and 2027 code-level inputs, conversion factor, locality, service setting and actual practice mix. Commercial contracts and any facility payment are separate. Keep those calculations with the reimbursement team rather than treating the finalized work values as a revenue prediction.',
          cites: ['final-rule', 'pfs-formula'], analysis: true
        }
      ],
      list: [
        { lead: 'Version the rule.', text: 'Keep the 2027 final-rule code family and the code set applicable on the service date.' },
        { lead: 'Review the note.', text: 'Ask which operative details support the proposed code and which details remain uncertain.' },
        { lead: 'Separate the outcomes.', text: 'Documented work, coding, Medicare valuation and an actual payer response are different findings.' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term workflow is retrospective first. On de-identified historical spine operative notes, it can surface source-linked coding and documentation risk questions for a qualified human reviewer. This code family is a concrete way to test whether the evidence chain points to the actual operative details and flags uncertainty for review. The product does not finalize codes, calculate 2027 Medicare payment, submit claims or prior authorizations, decide a payer’s response, or guarantee recovered revenue.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the evidence behind the spine code',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Arrange secure intake before sharing case material; do not send patient records through the website contact form.'
  },
  sources: [
    { id: 'final-rule', title: 'Federal Register, November 9, 2026: CY 2027 Medicare Physician Fee Schedule final rule, spine osteotomy valuation', url: 'https://www.govinfo.gov/content/pkg/FR-2026-11-09/html/2026-22743.htm' },
    { id: 'pfs-formula', title: 'CMS Physician Fee Schedule payment formula documentation', url: 'https://www.cms.gov/medicare/physician-fee-schedule/search/documentation' }
  ]
}, {
  slug: '2027-99024-postoperative-reporting-pause',
  title: 'Medicare Is Pausing 99024 Reporting in 2027. Postoperative Documentation Still Matters.',
  summary: 'CMS finalized a narrow pause in no-pay postoperative-visit data collection. Spine and orthopedic groups should separate that reporting step from the care record and global-package payment.',
  category: 'Coding & documentation',
  published: '2026-11-25',
  updated: '2026-11-25',
  lede: {
    text: 'A 99024 claim can be easy to mistake for the postoperative visit itself. In the 2027 Medicare Physician Fee Schedule final rule, CMS paused a data-collection requirement associated with that no-pay code. The rule was displayed November 4, 2026, published November 9, and takes effect January 1, 2027. It does not make postoperative care disappear from a 10- or 90-day global package.',
    cites: ['final-rule', 'rule-page'], analysis: true
  },
  sections: [
    {
      heading: 'Which reporting step is paused?',
      paragraphs: [
        {
          text: 'Since 2017, Medicare has collected postoperative-visit data for selected high-volume or high-cost procedures with 10- or 90-day global periods. The reporting population is limited to practices with at least 10 practitioners in Florida, Kentucky, Louisiana, Nevada, New Jersey, North Dakota, Ohio, Oregon and Rhode Island. CPT 99024 is a no-pay code for reporting a related follow-up visit; it is not separate payment for that visit. CMS finalized a pause of this collection for calendar year 2027.',
          cites: ['global-data', 'final-rule']
        },
        {
          text: 'A group outside that population should not read the pause as a change to a reporting duty it never had. A group inside it should keep the applicable 2026 instructions distinct from the 2027 policy and confirm its operational change against current CMS and Medicare Administrative Contractor guidance.',
          cites: ['global-data', 'final-rule'], analysis: true
        }
      ]
    },
    {
      heading: 'The payment question remains open',
      paragraphs: [
        {
          text: 'CMS says collected data have shown fewer postoperative visits than assumed in global-package valuation and that the reporting burden warrants a pause. Commenters argued that a missing 99024 claim does not prove there was no postoperative work: non-visit tasks and visit intensity are not fully captured by a visit count. CMS finalized the pause while leaving better data methods and possible future revaluation for later consideration.',
          cites: ['final-rule']
        },
        {
          text: 'The rule discusses a public-use calculation of possible work-RVU effects. It is an illustration for potential future rulemaking, not an enacted across-the-board 2027 payment cut for global surgery. Neither side of the data debate measures the outcome for a particular spine or orthopedic practice.',
          cites: ['final-rule'], analysis: true
        }
      ]
    },
    {
      heading: 'Keep the reporting claim and clinical record distinct',
      paragraphs: [
        {
          text: 'Before changing a workflow, have the billing lead identify whether the group was in the 99024 reporting population, which procedures and dates were involved, and which instructions apply. Keep the documentation of actual postoperative care separate from the no-pay reporting claim. Transfers of postoperative care have their own rules and should not be inferred from this pause.',
          cites: ['global-data', 'final-rule'], analysis: true
        },
        {
          text: 'A paused data-collection code does not erase follow-up documentation, turn every global package into a zero-day service, or make every postoperative visit separately billable. For a historical sample, a human reviewer should be able to see the surgery date, applicable global-period context, actual follow-up evidence and practitioner role without treating a missing 99024 as the entire record.',
          cites: ['final-rule'], analysis: true
        }
      ],
      list: [
        { lead: 'Identify the population.', text: 'Check practice size, state, procedure and service date against the applicable CMS instructions.' },
        { lead: 'Preserve the care record.', text: 'Keep the clinical evidence independent of whether a no-pay data-collection claim was required.' },
        { lead: 'Version the conclusion.', text: 'Record the policy year and source before a qualified human changes an edit or billing workflow.' }
      ]
    },
    {
      heading: 'Where MedCode Pro fits',
      paragraphs: [
        {
          text: 'MedCode Pro’s near-term role is retrospective, source-linked, human-reviewed coding and documentation risk review using de-identified historical cases. It can surface questions about whether the available note evidence and applicable rule version support a proposed conclusion. It does not finalize codes, submit claims or prior authorizations, decide Medicare payment, or promise recovered revenue.',
          cites: [], analysis: true
        }
      ]
    }
  ],
  productFit: {
    heading: 'Review the evidence behind the record',
    text: 'Request a scoped MedCode Pro walkthrough of its retrospective, source-linked, human-reviewed process. Arrange secure intake before sharing case material; do not send patient records through the website contact form.'
  },
  sources: [
    { id: 'final-rule', title: 'Federal Register, November 9, 2026: CY 2027 Medicare Physician Fee Schedule final rule, Global Surgical Packages', url: 'https://www.govinfo.gov/content/pkg/FR-2026-11-09/html/2026-22743.htm' },
    { id: 'rule-page', title: 'CMS, CY 2027 Physician Fee Schedule final-rule notice, displayed November 4, 2026', url: 'https://www.cms.gov/medicare/payment/fee-schedules/physician/federal-regulation-notices/cms-1848-f' },
    { id: 'global-data', title: 'CMS, Global Surgery Data Collection: practitioner population and 99024 reporting', url: 'https://www.cms.gov/medicare/payment/fee-schedules/physician/global-surgery-data-collection' }
  ]
}];
