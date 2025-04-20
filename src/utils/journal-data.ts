
import { JournalEntry, AnalyticsData } from '@/types';

// Sample journal entries based on the user's input
export const journalEntries: JournalEntry[] = [
  {
    id: '1',
    date: '2024-03-29',
    title: 'The Journey Begins',
    content: `Morning Departure: Packing chaos, sibling banter with your brother, and your aunt's calming presence.

Road Trip Vibes: Playlist nostalgia (Bandish Bandits songs), laughter, and sudden tension as you pass a fatal accident.

Coconut Stop: A roadside vendor, the sweetness of coconut water juxtaposed with the heaviness of witnessing tragedy.

Arrival at the Resort: First impressions of the coastal property, the salty breeze, and the weight of responsibility (helping with lease preparations).

Evening Stand-Up: Conversations with your mentor under the stars—discussing life goals, fears, and the chaos of adulthood.`,
    images: ['public/lovable-uploads/66b9d53b-9d43-4760-a392-b4890f6e2ef8.png'],
    tags: ['travel', 'family', 'reflection'],
    mood: 'mixed',
    location: 'On the road to Mandarmani'
  },
  {
    id: '2',
    date: '2024-03-30',
    title: 'Family, Friends, and Floating',
    content: `Dawn Fatigue: Waking up early despite exhaustion, brewing coffee, and watching the sunrise over the Bay of Bengal.

Family Reunion: Your parents' arrival, Lisa's excitement (tail wags, beach zoomies), and sibling inside jokes.

Brother's Friends Become Yours: Instant camaraderie with Rujuma (MLBB bonding), Nithin's humor, Sahil's quiet wisdom, Arya's vegan snacks, and Satish/Saurav's antics.

Pool & Sea Shenanigans: Water volleyball, finding a stranded starfish, and Sahil's disastrous attempt at surfing.

The pool sparkled like liquid sapphire under the midday sun, its surface rippling as Sahil cannonballed in, drenching Satish's meticulously styled hair. "You animal!" Satish yelled, but his grin betrayed him. Rujuma floated lazily on a inflatable unicorn, her phone balanced precariously as she shouted, "Someone queue with me for Ranked! I'm stuck with randoms!"

Arya, ever the peacemaker, passed around homemade vegan cookies. "Try these—dates and almond butter. No dairy, I swear!" Nithin, mid-bite, feigned horror. "Wait, is this health? In my vacation?" We erupted into laughter, the sound mingling with the crash of distant waves.

The sea called to us next. The Bay of Bengal was restless, its waves frothing like champagne. Lisa bounded ahead, barking at seagulls, her paws kicking up sand. "Careful!" Mom called, but Lisa was already knee-deep, wagging her tail at a retreating crab.

Rujuma and I waded in, the water icy at first. "Think we'll find a starfish today?" she asked. As if on cue, Saurav shouted, "Over here!" There it was—a tiny orange starfish, clinging to a rock. We crouched, mesmerized, as Sahil snapped photos. "Instagram gold," he declared.

Night Games: Uno battles, dumb charades (Arya's Bollywood impressions), and midnight ghost stories.

Back at the pool, Uno turned vicious. "Draw four, Satish! And it's green!" I slapped the card down triumphantly. He groaned, tallying his penalty cards. Arya, ever the strategist, whispered to Nithin, "He's bluffing. Reverse it!" But the game dissolved into chaos when Sahil accused Saurav of cheating—again.

By midnight, we were sprawled on the terrace, the sky a tapestry of stars. Rujuma hummed a Bandish Bandits tune, and for a moment, the exhaustion of shifting furniture and Excel sheets faded. The sea murmured in the distance, a lullaby of salt and secrets.`,
    images: [
      'public/lovable-uploads/1ac31ca1-3b76-4c9b-9041-cc1383d4728d.png',
      'public/lovable-uploads/2ecc77bc-a0a8-44c0-a013-7f843b8587ed.png',
      'public/lovable-uploads/7c7854cb-c531-4f32-aebd-18eb227a30e1.png'
    ],
    tags: ['beach', 'friends', 'games', 'swimming'],
    mood: 'happy',
    location: 'Mandarmani Beach Resort'
  },
  {
    id: '3',
    date: '2024-03-31',
    title: 'Work and Waves',
    content: `Goodbyes and Quiet Mornings: Half the group departs; lingering laughter over breakfast.

Poolside Productivity: Balancing resort tasks (inventory checks, lease paperwork) with lazy swims.

Project Mode: Collaborating with your brother on the startup—heated debates, Excel sheets, and breakthrough ideas.

Uncle's Guidance: Learning the ropes of hospitality, negotiating with local vendors, and bonding over shared exhaustion.`,
    images: ['public/lovable-uploads/48844408-da2a-4dab-8f69-fc79a3ee10fe.png'],
    tags: ['work', 'family', 'business'],
    mood: 'focused',
    location: 'Mandarmani Beach Resort'
  },
  {
    id: '4',
    date: '2024-04-01',
    title: 'The Rhythm of Routine (Part 1)',
    content: `Sunrise Walks: Lisa's paw prints in the sand, collecting seashells, and morning yoga with Arya.

Work Hard, Play Hard: Balancing spreadsheets and sunset dips, Rujuma's late-night MLBB matches, and Nithin's guitar sessions.`,
    tags: ['routine', 'balance', 'beach'],
    mood: 'peaceful',
    location: 'Mandarmani Beach'
  },
  {
    id: '5',
    date: '2024-04-02',
    title: 'The Rhythm of Routine (Part 2)',
    content: `Continued work on the resort paperwork. Had a long call with the property manager about upcoming renovations.

Evening swim with Lisa. She's really taken to the ocean now, no longer afraid of the waves.

Dinner with the family. Mom's cooking tastes even better here somehow.`,
    tags: ['routine', 'family', 'work'],
    mood: 'content',
    location: 'Mandarmani Beach Resort'
  },
  {
    id: '6',
    date: '2024-04-03',
    title: 'Farewell to Mandarmani',
    content: `Packing up, final beach bonfire, and promises to reunite.

The last day always feels bittersweet. We took one final swim at dawn, just me and Lisa. The water was perfectly calm, like glass.

Said goodbye to the staff who made our stay so special. Exchanged numbers with Rujuma - she's promised to visit us next month.

The drive home was quieter than the journey there. Everyone lost in their own thoughts and memories of the trip.`,
    tags: ['farewell', 'reflection', 'travel'],
    mood: 'bittersweet',
    location: 'Mandarmani to home'
  }
];

// Generate analytics data based on the journal entries
export const analyticsData: AnalyticsData = {
  wordCountByDay: [
    { date: "Mar 29", count: 105 },
    { date: "Mar 30", count: 450 },
    { date: "Mar 31", count: 80 },
    { date: "Apr 1", count: 65 },
    { date: "Apr 2", count: 75 },
    { date: "Apr 3", count: 120 }
  ],
  moodDistribution: [
    { mood: "Mixed", count: 1 },
    { mood: "Happy", count: 1 },
    { mood: "Focused", count: 1 },
    { mood: "Peaceful", count: 1 },
    { mood: "Content", count: 1 },
    { mood: "Bittersweet", count: 1 }
  ],
  topWords: [
    { word: "beach", count: 8 },
    { word: "water", count: 7 },
    { word: "family", count: 6 },
    { word: "friend", count: 5 },
    { word: "work", count: 5 },
    { word: "wave", count: 4 },
    { word: "resort", count: 4 },
    { word: "Lisa", count: 4 },
    { word: "Rujuma", count: 4 },
    { word: "swim", count: 3 }
  ],
  entriesPerWeekday: [
    { day: "Monday", count: 1 },
    { day: "Tuesday", count: 1 },
    { day: "Wednesday", count: 1 },
    { day: "Thursday", count: 0 },
    { day: "Friday", count: 1 },
    { day: "Saturday", count: 1 },
    { day: "Sunday", count: 1 }
  ],
  tagsUsage: [
    { tag: "beach", count: 3 },
    { tag: "family", count: 3 },
    { tag: "travel", count: 2 },
    { tag: "work", count: 2 },
    { tag: "reflection", count: 2 },
    { tag: "routine", count: 2 },
    { tag: "friends", count: 1 },
    { tag: "games", count: 1 },
    { tag: "swimming", count: 1 },
    { tag: "business", count: 1 },
    { tag: "balance", count: 1 },
    { tag: "farewell", count: 1 }
  ]
};

export const getAllJournalEntries = (): JournalEntry[] => {
  return journalEntries;
};

export const getJournalEntryById = (id: string): JournalEntry | undefined => {
  return journalEntries.find(entry => entry.id === id);
};

export const getAnalyticsData = (): AnalyticsData => {
  return analyticsData;
};
