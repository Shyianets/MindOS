export const workStartScenario = {
  id: 'workStart',
  slot: 'Work Start',
  progressLabel: 'Work Start 3/4',
  backgroundKey: 'workStart',
  pattern: {
    name: 'The Perfectionist',
    visibleText: 'The first version will be bad.',
    hiddenThought: "If I start badly, it means I'm not good enough.",
  },
  question: "What's the best way to start?",
  responses: [
    {
      id: 'two-minute-start',
      title: '2-minute start',
      description: 'Set a timer and just get going.',
      recommended: false,
      stable: true,
      effects: { workProgress: 1, selfTrust: 1 },
      outcomeExplanation:
        'A tiny start lowers the pressure and gets momentum going.',
    },
    {
      id: 'ugly-draft',
      title: 'Ugly draft',
      description: 'Write a messy first draft.',
      recommended: true,
      stable: true,
      effects: { workProgress: 1, awareness: 1, selfTrust: 1 },
      outcomeExplanation:
        'You separated the draft from your worth and took a realistic first step.',
    },
    {
      id: 'research-more',
      title: 'Research more',
      description: 'Read a bit more before starting.',
      recommended: false,
      stable: false,
      effects: { energy: -1 },
      outcomeExplanation:
        'More reading postponed the uncomfortable first step.',
    },
    {
      id: 'check-messages',
      title: 'Check messages',
      description: 'Quick scan, then come back.',
      recommended: false,
      stable: false,
      effects: { fun: 1, workProgress: -1 },
      outcomeExplanation:
        'A quick distraction felt easier than starting the real task.',
    },
  ],
  reflection: {
    stable: {
      title: 'Stable moment achieved.',
      explanation:
        'You noticed the automatic thought and chose a realistic first step.',
    },
    unstable: {
      title: 'The system stayed unstable.',
      explanation:
        'The character avoided the uncomfortable first step. Next time, make the action smaller.',
    },
  },
};
