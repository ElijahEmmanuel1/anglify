// ============================================
// TOEIC Prep Data — Complete Redesign
// Part 1: Photographs with real images
// ============================================

// Unsplash free images (permanent hotlink URLs)
const U = (id, w = 800, h = 500) => `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

// ── TOEIC Parts Overview ──────────────────────
export const toeicParts = [
    {
        id: 'part1',
        number: 'I',
        title: 'Photographs',
        subtitle: 'Listening',
        type: 'listening',
        icon: '📸',
        color: 'brand',
        questionsPerTest: 6,
        lessons: ['p1_l1', 'p1_l2', 'p1_l3', 'p1_l4', 'p1_l5', 'p1_l6', 'p1_l7', 'p1_l8'],
        description: 'Look at a photograph and choose the statement that best describes what you see.',
        tips: 'Focus on the main action, the subjects, and the setting. Watch out for distractors that mention visible objects but describe incorrect actions.',
        strategy: [
            'Scan the photo **before** listening: identify **who** (people), **what** (actions), **where** (location)',
            'Pay attention to **verbs** — the action is usually the key to the correct answer',
            'Beware of **sound-alike words**: work/walk, pour/poor, close/clothes',
            'Eliminate options that describe things **not visible** in the photo',
            'If no people are present, focus on the **state of objects** and the **setting**'
        ]
    },
    {
        id: 'part2',
        number: 'II',
        title: 'Question-Response',
        subtitle: 'Listening',
        type: 'listening',
        icon: '💬',
        color: 'violet',
        questionsPerTest: 25,
        lessons: ['p2_l1', 'p2_l2', 'p2_l3', 'p2_l4', 'p2_l5', 'p2_l6', 'p2_l7', 'p2_l8'],
        description: 'Listen to a question or statement and choose the best response from three options.',
        tips: 'Identify the question word (Who, What, When, Where, Why, How) immediately. The correct answer directly addresses the question.',
        strategy: [
            'Listen for the **first word** — it tells you what type of answer is expected (Who → person, Where → place, When → time)',
            'Beware of **traps with similar-sounding words**: "right" (correct) vs "write" (écrire), "mail" vs "male"',
            'Watch out for **indirect answers** — "Why don\'t we go?" → "That sounds great" (not "Because...")',
            'A **statement** (not a question) may require agreement, disagreement, or a follow-up — listen carefully',
            'Eliminate answers that **repeat words** from the question — they are often distractors',
            'For **Yes/No questions**, the answer might not start with "Yes" or "No" — look for meaning'
        ]
    },
    {
        id: 'part3',
        number: 'III',
        title: 'Conversations',
        subtitle: 'Listening',
        type: 'listening',
        icon: '🗣️',
        color: 'teal',
        questionsPerTest: 39,
        lessons: [],
        description: 'Listen to conversations between two or three speakers and answer questions.',
        tips: 'Read the questions BEFORE the audio plays. Focus on key details.',
        strategy: []
    },
    {
        id: 'part4',
        number: 'IV',
        title: 'Talks',
        subtitle: 'Listening',
        type: 'listening',
        icon: '🎙️',
        color: 'amber',
        questionsPerTest: 30,
        lessons: [],
        description: 'Listen to short talks (announcements, voicemails, speeches) and answer questions.',
        tips: 'Identify the type of talk early (announcement, voicemail, news report).',
        strategy: []
    },
    {
        id: 'part5',
        number: 'V',
        title: 'Incomplete Sentences',
        subtitle: 'Reading',
        type: 'reading',
        icon: '📝',
        color: 'emerald',
        questionsPerTest: 30,
        lessons: [],
        description: 'Complete sentences by choosing the correct word or phrase.',
        tips: 'Look at words around the blank. Determine if you need a noun, verb, adjective, or adverb.',
        strategy: []
    },
    {
        id: 'part6',
        number: 'VI',
        title: 'Text Completion',
        subtitle: 'Reading',
        type: 'reading',
        icon: '📄',
        color: 'orange',
        questionsPerTest: 16,
        lessons: [],
        description: 'Complete passages with the correct words or sentences.',
        tips: 'Read the entire passage first to understand context before filling blanks.',
        strategy: []
    },
    {
        id: 'part7',
        number: 'VII',
        title: 'Reading Comprehension',
        subtitle: 'Reading',
        type: 'reading',
        icon: '📚',
        color: 'rose',
        questionsPerTest: 54,
        lessons: [],
        description: 'Read single and multiple passages and answer questions about them.',
        tips: 'Scan questions first, then scan the text for answers. Don\'t read every word.',
        strategy: []
    }
]

// ── Part 1: Photographs — Lessons & Exercises ──────────────────────

export const toeicLessons = {

    // ═══════════════════════════════════════════════
    // LESSON 1: People at Work — Office Scenes
    // ═══════════════════════════════════════════════
    p1_l1: {
        id: 'p1_l1',
        partId: 'part1',
        title: 'People at Work',
        titleFr: 'Les personnes au travail',
        description: 'Identify actions and settings in office and workplace photographs.',
        difficulty: 'beginner',
        keyVocabulary: [
            { en: 'to give a presentation', fr: 'faire une présentation' },
            { en: 'to attend a meeting', fr: 'assister à une réunion' },
            { en: 'to type on a keyboard', fr: 'taper au clavier' },
            { en: 'to review a document', fr: 'examiner un document' },
            { en: 'to shake hands', fr: 'serrer la main' },
            { en: 'to take notes', fr: 'prendre des notes' },
        ],
        exercises: [
            {
                id: 'p1_l1_q1',
                type: 'photo',
                image: U('photo-1552664730-d307ca884978'),
                imageAlt: 'A group of people gathered around a table in a bright office, looking at documents and a laptop.',
                statements: [
                    '(A) The team is having a meeting around a table.',
                    '(B) A man is eating lunch alone at his desk.',
                    '(C) The office is completely empty.',
                    '(D) People are waiting in line at a counter.'
                ],
                answer: 0,
                explanation: 'The photo shows several colleagues gathered around a table working together — a team meeting.'
            },
            {
                id: 'p1_l1_q2',
                type: 'photo',
                image: U('nWxpa5qHE9I'),
                imageAlt: 'A woman smiling while working at her desk, with a laptop in front of her.',
                statements: [
                    '(A) A woman is cleaning the office floor.',
                    '(B) A woman is sitting at her desk working on a laptop.',
                    '(C) Two women are arguing in a hallway.',
                    '(D) A woman is arranging flowers on a table.'
                ],
                answer: 1,
                explanation: 'The woman is seated at a desk and is working / looking at her laptop computer.'
            },
            {
                id: 'p1_l1_q3',
                type: 'photo',
                image: U('E8pqwxaS6ko'),
                imageAlt: 'Two colleagues collaborating, looking at a laptop screen together in a modern office.',
                statements: [
                    '(A) Two people are looking at a computer screen together.',
                    '(B) A man is making a phone call at his desk.',
                    '(C) Two people are shaking hands in a lobby.',
                    '(D) The employees are leaving the building.'
                ],
                answer: 0,
                explanation: 'Both people are leaning toward and looking at a laptop screen — they are collaborating.'
            },
            {
                id: 'p1_l1_q4',
                type: 'photo',
                image: U('photo-1521737711867-e3b97375f902'),
                imageAlt: 'People working together at a desk covered with papers and a laptop in a creative office.',
                statements: [
                    '(A) A group of people is working together at a shared desk.',
                    '(B) A man is hanging a picture on the wall.',
                    '(C) A woman is watering plants near the window.',
                    '(D) The conference room is being renovated.'
                ],
                answer: 0,
                explanation: 'Multiple people are visible around a desk with documents and a laptop, working together in a collaborative workspace.'
            },
            {
                id: 'p1_l1_q5',
                type: 'photo',
                image: U('I9meM8YQ9DM'),
                imageAlt: 'A woman standing and speaking to colleagues who are seated at a table during a meeting.',
                statements: [
                    '(A) Everyone is standing near the exit door.',
                    '(B) A woman is washing dishes in the kitchen.',
                    '(C) A woman is presenting to a group of colleagues.',
                    '(D) The room is set up for a dinner party.'
                ],
                answer: 2,
                explanation: 'A woman is standing while others are seated and listening — she is giving a presentation or speaking to the group.'
            },
            {
                id: 'p1_l1_q6',
                type: 'photo',
                image: U('LycaA7rWsHc'),
                imageAlt: 'An open modern office space with desks, computers, and large windows.',
                statements: [
                    '(A) Workers are packed into a tiny, dark room.',
                    '(B) An open office space is filled with desks and computers.',
                    '(C) A classroom is full of students taking an exam.',
                    '(D) People are shopping in a furniture store.'
                ],
                answer: 1,
                explanation: 'The photo shows a spacious modern office with multiple desks, screens, and good natural lighting — an open-plan office.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 2: Transportation & Outdoors
    // ═══════════════════════════════════════════════
    p1_l2: {
        id: 'p1_l2',
        partId: 'part1',
        title: 'Transportation & Outdoors',
        titleFr: 'Transport et extérieur',
        description: 'Describe scenes involving vehicles, streets, and outdoor settings.',
        difficulty: 'beginner',
        keyVocabulary: [
            { en: 'pedestrian', fr: 'piéton' },
            { en: 'to cross the street', fr: 'traverser la rue' },
            { en: 'to ride a bicycle', fr: 'faire du vélo' },
            { en: 'to load / unload', fr: 'charger / décharger' },
            { en: 'platform', fr: 'quai' },
            { en: 'sidewalk / pavement', fr: 'trottoir' },
        ],
        exercises: [
            {
                id: 'p1_l2_q1',
                type: 'photo',
                image: U('photo-1517649763962-0c623066013b'),
                imageAlt: 'Cyclists riding on a road during a race or training session.',
                statements: [
                    '(A) Cars are stuck in heavy traffic on the highway.',
                    '(B) Cyclists are riding along a road.',
                    '(C) Children are playing in a swimming pool.',
                    '(D) A bus is parked at a bus stop.'
                ],
                answer: 1,
                explanation: 'The photo clearly shows cyclists riding on a road — likely training or racing.'
            },
            {
                id: 'p1_l2_q2',
                type: 'photo',
                image: U('cs18jLUoQ5M'),
                imageAlt: 'An aerial view of a busy city street with buildings, cars, and pedestrians.',
                statements: [
                    '(A) A bird\'s-eye view of a busy city street.',
                    '(B) A quiet country road surrounded by fields.',
                    '(C) A single car is parked in a large empty lot.',
                    '(D) People are swimming in the ocean.'
                ],
                answer: 0,
                explanation: 'The photo shows a bird\'s-eye view of a city street with buildings, traffic, and pedestrians.'
            },
            {
                id: 'p1_l2_q3',
                type: 'photo',
                image: U('nQ3t3zTL59w'),
                imageAlt: 'A modern train at a station platform.',
                statements: [
                    '(A) A ship is docked at the harbor.',
                    '(B) A plane is taking off from the runway.',
                    '(C) A train is stopped at a station platform.',
                    '(D) A bus is dropping off passengers in the rain.'
                ],
                answer: 2,
                explanation: 'A train can be seen at a station platform — it is stopped and ready for boarding or departure.'
            },
            {
                id: 'p1_l2_q4',
                type: 'photo',
                image: U('photo-1506521781263-d8422e82f27a'),
                imageAlt: 'A large parking lot full of cars seen from above.',
                statements: [
                    '(A) A garden is full of blooming flowers.',
                    '(B) A parking lot is full of vehicles.',
                    '(C) An airport terminal is crowded with travelers.',
                    '(D) A stadium is packed with spectators.'
                ],
                answer: 1,
                explanation: 'The aerial shot shows rows of parked vehicles filling a large parking area.'
            },
            {
                id: 'p1_l2_q5',
                type: 'photo',
                image: U('photo-1517732306149-e8f829eb588a'),
                imageAlt: 'Pedestrians crossing a busy street at a crosswalk in a city.',
                statements: [
                    '(A) People are crossing the street at a crosswalk.',
                    '(B) Workers are repairing a pothole in the road.',
                    '(C) A police officer is directing traffic.',
                    '(D) A truck is delivering goods to a store.'
                ],
                answer: 0,
                explanation: 'People are walking across the street at a marked crosswalk — pedestrians crossing.'
            },
            {
                id: 'p1_l2_q6',
                type: 'photo',
                image: U('photo-1476900164809-ff19b8ae5968'),
                imageAlt: 'A yellow taxi cab on a city street.',
                statements: [
                    '(A) A taxi is driving down a city street.',
                    '(B) An ambulance is rushing to the hospital.',
                    '(C) A truck is being loaded with cargo.',
                    '(D) A bicycle is leaning against a wall.'
                ],
                answer: 0,
                explanation: 'The photo shows a yellow taxi cab on a city street — a common urban transportation scene.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 3: Restaurants & Food Service
    // ═══════════════════════════════════════════════
    p1_l3: {
        id: 'p1_l3',
        partId: 'part1',
        title: 'Restaurants & Food Service',
        titleFr: 'Restaurants et restauration',
        description: 'Recognize dining, cooking, and food service situations in photographs.',
        difficulty: 'beginner',
        keyVocabulary: [
            { en: 'to serve a meal', fr: 'servir un repas' },
            { en: 'to pour a drink', fr: 'verser une boisson' },
            { en: 'to place an order', fr: 'passer une commande' },
            { en: 'chef / cook', fr: 'chef cuisinier' },
            { en: 'waiter / waitress', fr: 'serveur / serveuse' },
            { en: 'dining area', fr: 'salle à manger' },
        ],
        exercises: [
            {
                id: 'p1_l3_q1',
                type: 'photo',
                image: U('photo-1577219491135-ce391730fb2c'),
                imageAlt: 'A professional chef working in a restaurant kitchen, preparing dishes.',
                statements: [
                    '(A) A mechanic is repairing a car engine.',
                    '(B) A chef is preparing food in a kitchen.',
                    '(C) A scientist is conducting an experiment.',
                    '(D) A doctor is examining a patient.'
                ],
                answer: 1,
                explanation: 'The photo shows a chef in professional attire working in a commercial kitchen — preparing food.'
            },
            {
                id: 'p1_l3_q2',
                type: 'photo',
                image: U('photo-1414235077428-338989a2e8c0'),
                imageAlt: 'A beautifully plated dish on a white plate in a fine dining setting.',
                statements: [
                    '(A) A meal has been served on a table.',
                    '(B) A painter is working on a canvas.',
                    '(C) A child is opening birthday presents.',
                    '(D) Kitchen utensils are stored in a drawer.'
                ],
                answer: 0,
                explanation: 'The photo shows a professionally plated dish on a table — a meal served in a restaurant setting.'
            },
            {
                id: 'p1_l3_q3',
                type: 'photo',
                image: U('photo-1495474472287-4d71bcdd2085'),
                imageAlt: 'A cup of coffee on a saucer, on a wooden table in a café setting.',
                statements: [
                    '(A) A glass of orange juice is on the counter.',
                    '(B) A cup of coffee is placed on a table.',
                    '(C) A bowl of soup is being heated on the stove.',
                    '(D) A bottle of water has been left on the floor.'
                ],
                answer: 1,
                explanation: 'The photo shows a cup of coffee placed on a saucer on a table — a typical café scene.'
            },
            {
                id: 'p1_l3_q4',
                type: 'photo',
                image: U('photo-1517248135467-4c7edcad34c4'),
                imageAlt: 'An elegant restaurant interior with tables set for dining, chairs neatly arranged.',
                statements: [
                    '(A) Tables are set up in a restaurant dining room.',
                    '(B) Students are taking a test in a classroom.',
                    '(C) Workers are assembling furniture in a factory.',
                    '(D) Boxes are stacked in a warehouse.'
                ],
                answer: 0,
                explanation: 'The interior shows tables with place settings and chairs arranged neatly — a restaurant ready for guests.'
            },
            {
                id: 'p1_l3_q5',
                type: 'photo',
                image: U('photo-1554118811-1e0d58224f24'),
                imageAlt: 'An outdoor café with tables and chairs on a sidewalk.',
                statements: [
                    '(A) A swimming pool is surrounded by lounge chairs.',
                    '(B) An outdoor café has tables arranged on the sidewalk.',
                    '(C) Benches are lined up along a running track.',
                    '(D) A farmer is selling vegetables at a market.'
                ],
                answer: 1,
                explanation: 'The photo shows tables and chairs set up outside on a sidewalk — an outdoor café or terrace.'
            },
            {
                id: 'p1_l3_q6',
                type: 'photo',
                image: U('photo-1567521464027-f127ff144326'),
                imageAlt: 'A bartender preparing drinks behind a bar counter.',
                statements: [
                    '(A) A librarian is shelving books on a high shelf.',
                    '(B) A bartender is preparing drinks behind the counter.',
                    '(C) A cashier is scanning items at a register.',
                    '(D) A nurse is checking a patient\'s temperature.'
                ],
                answer: 1,
                explanation: 'The person is behind a bar counter mixing or preparing drinks — a bartender at work.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 4: Construction & Industry
    // ═══════════════════════════════════════════════
    p1_l4: {
        id: 'p1_l4',
        partId: 'part1',
        title: 'Construction & Industry',
        titleFr: 'Construction et industrie',
        description: 'Describe industrial sites, manual labor, and construction scenarios.',
        difficulty: 'intermediate',
        keyVocabulary: [
            { en: 'hard hat / helmet', fr: 'casque de chantier' },
            { en: 'scaffolding', fr: 'échafaudage' },
            { en: 'to operate machinery', fr: 'faire fonctionner une machine' },
            { en: 'blueprint / plan', fr: 'plan / schéma' },
            { en: 'safety vest', fr: 'gilet de sécurité' },
            { en: 'to inspect', fr: 'inspecter' },
        ],
        exercises: [
            {
                id: 'p1_l4_q1',
                type: 'photo',
                image: U('photo-1504307651254-35680f356dfd'),
                imageAlt: 'A construction site with cranes and buildings under construction.',
                statements: [
                    '(A) A building is under construction with cranes in view.',
                    '(B) A park is being decorated for a festival.',
                    '(C) An office building is being demolished.',
                    '(D) Boats are anchored in a marina.'
                ],
                answer: 0,
                explanation: 'The photo shows a construction site with cranes and partially built structures — construction in progress.'
            },
            {
                id: 'p1_l4_q2',
                type: 'photo',
                image: U('photo-1581578731548-c64695cc6952'),
                imageAlt: 'A worker wearing a hard hat and safety gear on a construction site.',
                statements: [
                    '(A) A man is wearing a suit and tie at a formal event.',
                    '(B) A worker is wearing protective safety gear.',
                    '(C) An athlete is warming up before a race.',
                    '(D) A musician is performing on a stage.'
                ],
                answer: 1,
                explanation: 'The person is wearing a hard hat and safety gear — a construction or industrial worker in protective equipment.'
            },
            {
                id: 'p1_l4_q3',
                type: 'photo',
                image: U('photo-1553413077-190dd305871c'),
                imageAlt: 'A large warehouse interior with rows of shelving and stacked boxes.',
                statements: [
                    '(A) Guests are checking into a hotel lobby.',
                    '(B) Goods are stored on shelves in a warehouse.',
                    '(C) Cars are displayed in a showroom.',
                    '(D) A library is full of students studying.'
                ],
                answer: 1,
                explanation: 'The photo shows a warehouse interior with tall shelving units stacked with boxes and goods — storage/logistics.'
            },
            {
                id: 'p1_l4_q4',
                type: 'photo',
                image: U('photo-1503387762-592deb58ef4e'),
                imageAlt: 'An architect or engineer looking at blueprints spread out on a table.',
                statements: [
                    '(A) An artist is painting a portrait.',
                    '(B) A person is reading a novel in a bookstore.',
                    '(C) Plans or blueprints are spread out on a surface.',
                    '(D) A photographer is setting up camera equipment.'
                ],
                answer: 2,
                explanation: 'Architectural plans or blueprints can be seen laid out — reviewing building or construction designs.'
            },
            {
                id: 'p1_l4_q5',
                type: 'photo',
                image: U('photo-1586528116311-ad8dd3c8310d'),
                imageAlt: 'A forklift operating inside a warehouse, moving pallets.',
                statements: [
                    '(A) A tractor is plowing a field.',
                    '(B) A forklift is moving goods in a warehouse.',
                    '(C) A crane is lifting steel beams at a port.',
                    '(D) A delivery van is parked outside a store.'
                ],
                answer: 1,
                explanation: 'A forklift is visible inside a warehouse environment — it is being used to move or transport goods.'
            },
            {
                id: 'p1_l4_q6',
                type: 'photo',
                image: U('photo-1541888946425-d81bb19240f5'),
                imageAlt: 'Construction workers on a site with concrete structures being built.',
                statements: [
                    '(A) Firefighters are extinguishing a fire.',
                    '(B) Swimmers are competing in a pool.',
                    '(C) Construction workers are on a building site.',
                    '(D) A gardener is mowing a large lawn.'
                ],
                answer: 2,
                explanation: 'Workers in hard hats and safety equipment are visible on a construction site — building in progress.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 5: Shopping & Retail
    // ═══════════════════════════════════════════════
    p1_l5: {
        id: 'p1_l5',
        partId: 'part1',
        title: 'Shopping & Retail',
        titleFr: 'Commerce et vente au détail',
        description: 'Describe shopping scenes, stores, and retail environments.',
        difficulty: 'intermediate',
        keyVocabulary: [
            { en: 'customer / shopper', fr: 'client / acheteur' },
            { en: 'checkout / register', fr: 'caisse' },
            { en: 'shopping cart / trolley', fr: 'chariot / caddie' },
            { en: 'to browse', fr: 'parcourir / regarder' },
            { en: 'merchandise / goods', fr: 'marchandises' },
            { en: 'aisle', fr: 'rayon / allée' },
        ],
        exercises: [
            {
                id: 'p1_l5_q1',
                type: 'photo',
                image: U('photo-1604719312566-8912e9227c6a'),
                imageAlt: 'Inside a grocery store with colorful produce displayed on shelves.',
                statements: [
                    '(A) Fresh produce is displayed in a grocery store.',
                    '(B) Animals are being fed at a farm.',
                    '(C) Flowers are being arranged for a wedding.',
                    '(D) A worker is painting the walls of a room.'
                ],
                answer: 0,
                explanation: 'The photo shows fruits and vegetables displayed in a grocery store — fresh produce on shelves.'
            },
            {
                id: 'p1_l5_q2',
                type: 'photo',
                image: U('photo-1556742049-0cfed4f6a45d'),
                imageAlt: 'A person at a checkout counter in a store, paying for items.',
                statements: [
                    '(A) A person is checking out at a store counter.',
                    '(B) A doctor is writing a prescription.',
                    '(C) Students are registering for classes.',
                    '(D) An employee is fixing a copy machine.'
                ],
                answer: 0,
                explanation: 'A customer is at a checkout counter paying for their purchases — a retail transaction.'
            },
            {
                id: 'p1_l5_q3',
                type: 'photo',
                image: U('photo-1441986300917-64674bd600d8'),
                imageAlt: 'A clothing store interior with racks of clothes and mannequins.',
                statements: [
                    '(A) Clothes are hanging on racks in a store.',
                    '(B) Luggage is being loaded onto a conveyor belt.',
                    '(C) Books are stacked on the floor of a library.',
                    '(D) Tools are hanging on a workshop wall.'
                ],
                answer: 0,
                explanation: 'Clothing items are displayed on racks and mannequins — a clothing or fashion store interior.'
            },
            {
                id: 'p1_l5_q4',
                type: 'photo',
                image: U('photo-1567958451986-2de427a4a0be'),
                imageAlt: 'A supermarket aisle with shelves stocked with products on both sides.',
                statements: [
                    '(A) A corridor of a hospital is dimly lit.',
                    '(B) Products are lined up on shelves in a store aisle.',
                    '(C) Visitors are walking through a museum exhibit.',
                    '(D) Passengers are queuing at an airport gate.'
                ],
                answer: 1,
                explanation: 'Shelves on both sides are stocked with products — a supermarket or grocery store aisle.'
            },
            {
                id: 'p1_l5_q5',
                type: 'photo',
                image: U('photo-1534723452862-4c874018d66d'),
                imageAlt: 'A farmer\'s market with vendors selling fresh fruits and vegetables.',
                statements: [
                    '(A) Vendors are selling produce at an outdoor market.',
                    '(B) A lecture is being given in a university hall.',
                    '(C) Artists are displaying paintings at a gallery.',
                    '(D) Mechanics are working underneath a car.'
                ],
                answer: 0,
                explanation: 'The open-air setting with vendors and fresh produce indicates a farmers\' market.'
            },
            {
                id: 'p1_l5_q6',
                type: 'photo',
                image: U('photo-1555529669-e69e7aa0ba9a'),
                imageAlt: 'A woman looking at items on a store shelf, selecting products.',
                statements: [
                    '(A) A customer is browsing products on a shelf.',
                    '(B) A teacher is writing on a chalkboard.',
                    '(C) A receptionist is answering the phone.',
                    '(D) A janitor is mopping the hallway.'
                ],
                answer: 0,
                explanation: 'The woman is standing in front of shelves looking at products — she is shopping or browsing.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 6: Nature, Parks & Objects (No People)
    // ═══════════════════════════════════════════════
    p1_l6: {
        id: 'p1_l6',
        partId: 'part1',
        title: 'Landscapes & Objects',
        titleFr: 'Paysages et objets',
        description: 'Describe scenes without people — focus on objects, nature, and settings.',
        difficulty: 'intermediate',
        keyVocabulary: [
            { en: 'to be lined up', fr: 'être aligné(s)' },
            { en: 'to be stacked', fr: 'être empilé(s)' },
            { en: 'to be parked', fr: 'être garé(s)' },
            { en: 'to overlook', fr: 'surplomber / donner sur' },
            { en: 'to stretch across', fr: 's\'étendre à travers' },
            { en: 'to be surrounded by', fr: 'être entouré(e) de' },
        ],
        exercises: [
            {
                id: 'p1_l6_q1',
                type: 'photo',
                image: U('photo-1481627834876-b7833e8f5570'),
                imageAlt: 'Library bookshelves filled with books in a quiet reading room.',
                statements: [
                    '(A) Tables are set up for a banquet.',
                    '(B) Bookshelves are filled with books in a library.',
                    '(C) A gym is equipped with exercise machines.',
                    '(D) Crates are being unloaded from a ship.'
                ],
                answer: 1,
                explanation: 'The shelves are loaded with books — a library or reading room setting, with no people visible.'
            },
            {
                id: 'p1_l6_q2',
                type: 'photo',
                image: U('photo-1477959858617-67f85cf4f1df'),
                imageAlt: 'An aerial view of a city with buildings and streets below.',
                statements: [
                    '(A) The view shows a city from high above.',
                    '(B) A field of sunflowers stretches to the horizon.',
                    '(C) Snow covers the mountain peaks.',
                    '(D) Boats are sailing on a lake at sunset.'
                ],
                answer: 0,
                explanation: 'The aerial photograph shows buildings, streets, and an urban landscape from above.'
            },
            {
                id: 'p1_l6_q3',
                type: 'photo',
                image: U('photo-1507035895480-2b3156c31fc8'),
                imageAlt: 'Rows of bicycles parked at a bike rack or sharing station.',
                statements: [
                    '(A) Motorcycles are racing on a track.',
                    '(B) Bicycles are parked in a row.',
                    '(C) Scooters are scattered on a sidewalk.',
                    '(D) Skateboards are displayed in a shop window.'
                ],
                answer: 1,
                explanation: 'The photo shows bicycles neatly parked or docked in a row — a bike rack or sharing station.'
            },
            {
                id: 'p1_l6_q4',
                type: 'photo',
                image: U('photo-1486406146926-c627a92ad1ab'),
                imageAlt: 'A modern glass skyscraper viewed from below, against a blue sky.',
                statements: [
                    '(A) A tall glass building reaches toward the sky.',
                    '(B) A stone bridge crosses a wide river.',
                    '(C) A wooden cabin sits in a snowy forest.',
                    '(D) A church tower rises above old houses.'
                ],
                answer: 0,
                explanation: 'A modern glass skyscraper is captured from a low angle — a tall commercial building.'
            },
            {
                id: 'p1_l6_q5',
                type: 'photo',
                image: U('photo-1416169607655-0c2b3ce2e067'),
                imageAlt: 'A park pathway lined with trees and benches in autumn.',
                statements: [
                    '(A) A walking path is lined with trees in a park.',
                    '(B) Cars are driving on a winding mountain road.',
                    '(C) A runway is being prepared at an airport.',
                    '(D) A tunnel entrance is blocked by construction barriers.'
                ],
                answer: 0,
                explanation: 'A tree-lined pathway leads through a park — a peaceful outdoor setting, likely in autumn.'
            },
            {
                id: 'p1_l6_q6',
                type: 'photo',
                image: U('photo-1502672260266-1c1ef2d93688'),
                imageAlt: 'A living room interior with a sofa, coffee table, and decorations.',
                statements: [
                    '(A) Medical equipment fills a hospital room.',
                    '(B) A living room is furnished with a sofa and table.',
                    '(C) An empty warehouse has concrete walls.',
                    '(D) A stage is set up for a rock concert.'
                ],
                answer: 1,
                explanation: 'The photo shows a furnished living room with comfortable seating — a residential interior.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 7: Mixed Practice — Set 1
    // ═══════════════════════════════════════════════
    p1_l7: {
        id: 'p1_l7',
        partId: 'part1',
        title: 'Mixed Practice 1',
        titleFr: 'Entraînement mixte 1',
        description: 'Practice with a mix of workplace, outdoor, and daily life photographs.',
        difficulty: 'advanced',
        keyVocabulary: [
            { en: 'to lean against', fr: 's\'appuyer contre' },
            { en: 'to carry', fr: 'porter / transporter' },
            { en: 'to examine', fr: 'examiner' },
            { en: 'to point at', fr: 'montrer du doigt' },
            { en: 'to be seated', fr: 'être assis' },
            { en: 'to be crowded', fr: 'être bondé' },
        ],
        exercises: [
            {
                id: 'p1_l7_q1',
                type: 'photo',
                image: U('photo-1560264280-88b68371db39'),
                imageAlt: 'A woman talking on her phone while standing near a window in an office.',
                statements: [
                    '(A) A woman is making a phone call near a window.',
                    '(B) A woman is painting a wall white.',
                    '(C) A woman is unlocking the front door.',
                    '(D) A woman is folding clothes on a bed.'
                ],
                answer: 0,
                explanation: 'The woman is holding a phone to her ear while standing near a window — she is on a phone call.'
            },
            {
                id: 'p1_l7_q2',
                type: 'photo',
                image: U('photo-1524758631624-e2822e304c36'),
                imageAlt: 'A minimalist workspace with a desk, chair, computer, and a plant.',
                statements: [
                    '(A) A workspace is neatly organized with a desk and computer.',
                    '(B) A crowded subway car is full of commuters.',
                    '(C) A hotel room has been recently cleaned.',
                    '(D) A mechanic\'s workshop is messy with tools everywhere.'
                ],
                answer: 0,
                explanation: 'A clean, minimal workspace is shown with a desk, chair, computer or monitor, and a plant — an organized home or small office.'
            },
            {
                id: 'p1_l7_q3',
                type: 'photo',
                image: U('photo-1528698827591-e19cef51a992'),
                imageAlt: 'People boarding or exiting a public bus at a bus stop.',
                statements: [
                    '(A) Hikers are climbing a steep mountain trail.',
                    '(B) Passengers are getting on or off a bus.',
                    '(C) Spectators are watching a football match.',
                    '(D) Diners are leaving a restaurant after a meal.'
                ],
                answer: 1,
                explanation: 'People can be seen near a bus — boarding or exiting at a bus stop.'
            },
            {
                id: 'p1_l7_q4',
                type: 'photo',
                image: U('photo-1571624436279-b272aff752b5'),
                imageAlt: 'A doctor in a white coat examining medical records or talking to a patient.',
                statements: [
                    '(A) A musician is tuning a guitar on stage.',
                    '(B) A medical professional is reviewing records or speaking with someone.',
                    '(C) A pilot is checking instruments in a cockpit.',
                    '(D) A teacher is distributing papers to students.'
                ],
                answer: 1,
                explanation: 'The person in a white coat (medical attire) is either reviewing documents or speaking — a healthcare setting.'
            },
            {
                id: 'p1_l7_q5',
                type: 'photo',
                image: U('photo-1560448204-e02f11c3d0e2'),
                imageAlt: 'A hotel room with a neatly made bed, lamps, and modern decoration.',
                statements: [
                    '(A) A classroom is filled with desks and a projector.',
                    '(B) A hotel room is prepared for a guest.',
                    '(C) A laundry room has piles of dirty clothes.',
                    '(D) An office cubicle has papers scattered on the desk.'
                ],
                answer: 1,
                explanation: 'The well-made bed, lamps, and tidy furnishings indicate a hotel room ready for a guest.'
            },
            {
                id: 'p1_l7_q6',
                type: 'photo',
                image: U('photo-1513258496099-48168024aec0'),
                imageAlt: 'A woman walking up stairs carrying a briefcase or bag.',
                statements: [
                    '(A) A woman is climbing stairs while carrying a bag.',
                    '(B) A man is jogging along the beach.',
                    '(C) Children are sliding down a playground slide.',
                    '(D) Workers are carrying lumber to a building.'
                ],
                answer: 0,
                explanation: 'A woman is ascending stairs with a bag or briefcase — heading to work or an appointment.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    // LESSON 8: Mixed Practice — Set 2
    // ═══════════════════════════════════════════════
    p1_l8: {
        id: 'p1_l8',
        partId: 'part1',
        title: 'Mixed Practice 2',
        titleFr: 'Entraînement mixte 2',
        description: 'A final practice set mixing all themes — test your accuracy before the exam.',
        difficulty: 'advanced',
        keyVocabulary: [
            { en: 'to be located', fr: 'être situé' },
            { en: 'to be piled up', fr: 'être entassé / empilé' },
            { en: 'to hang', fr: 'accrocher / pendre' },
            { en: 'to face each other', fr: 'se faire face' },
            { en: 'to be reflected', fr: 'être reflété' },
            { en: 'in the foreground / background', fr: 'au premier plan / à l\'arrière-plan' },
        ],
        exercises: [
            {
                id: 'p1_l8_q1',
                type: 'photo',
                image: U('photo-1531973576160-7125cd663d86'),
                imageAlt: 'A conference room with a long table and chairs, a projector screen on the wall.',
                statements: [
                    '(A) A conference room is set up with a table and screen.',
                    '(B) A family is having dinner at home.',
                    '(C) Students are writing an exam in a gymnasium.',
                    '(D) A receptionist is greeting visitors at the entrance.'
                ],
                answer: 0,
                explanation: 'A conference table, chairs, and a projector screen indicate a meeting or conference room.'
            },
            {
                id: 'p1_l8_q2',
                type: 'photo',
                image: U('photo-1556742393-d75f468bfcb0'),
                imageAlt: 'A man working at a standing desk in a modern office with dual monitors.',
                statements: [
                    '(A) A security guard is watching monitors in a control room.',
                    '(B) A man is working at a desk with multiple screens.',
                    '(C) A technician is repairing a television set.',
                    '(D) A gaming tournament is taking place.'
                ],
                answer: 1,
                explanation: 'A man is standing or sitting at a desk with multiple computer screens — working in a modern office.'
            },
            {
                id: 'p1_l8_q3',
                type: 'photo',
                image: U('photo-1519500099198-fd81846b8f03'),
                imageAlt: 'A person gardening, planting or tending to plants in a garden.',
                statements: [
                    '(A) A person is tending to plants in a garden.',
                    '(B) A child is feeding ducks at a pond.',
                    '(C) A worker is repairing a fence.',
                    '(D) A painter is working on a mural outdoors.'
                ],
                answer: 0,
                explanation: 'The person is working with soil or plants in a garden — gardening or planting.'
            },
            {
                id: 'p1_l8_q4',
                type: 'photo',
                image: U('photo-1527192491265-7e15c55b1ed2'),
                imageAlt: 'A harbor with boats moored at docks, water and sky visible.',
                statements: [
                    '(A) Boats are moored at a harbor.',
                    '(B) A parking garage is full of vehicles.',
                    '(C) Planes are lined up on an airport tarmac.',
                    '(D) Trains are stationed at a depot.'
                ],
                answer: 0,
                explanation: 'The photo shows boats docked or moored in a harbor — a marina or waterfront scene.'
            },
            {
                id: 'p1_l8_q5',
                type: 'photo',
                image: U('photo-1560185893-a55cbc8c57e8'),
                imageAlt: 'A modern reception area or lobby with seating and a front desk.',
                statements: [
                    '(A) A reception area or lobby is ready to welcome visitors.',
                    '(B) Athletes are stretching before a competition.',
                    '(C) A shop owner is closing the shutters at night.',
                    '(D) Patients are waiting in a dentist\'s office.'
                ],
                answer: 0,
                explanation: 'A clean and modern reception area with seating — a lobby or front desk area for a hotel or office.'
            },
            {
                id: 'p1_l8_q6',
                type: 'photo',
                image: U('photo-1570129477492-45c003edd2be'),
                imageAlt: 'A scientist or researcher looking through a microscope in a laboratory.',
                statements: [
                    '(A) A jeweler is examining a gemstone with a magnifying glass.',
                    '(B) A researcher is using a microscope in a laboratory.',
                    '(C) A student is reading a textbook in a study room.',
                    '(D) A photographer is adjusting a camera lens.'
                ],
                answer: 1,
                explanation: 'The person is using a microscope in what appears to be a lab — a researcher or scientist at work.'
            }
        ]
    },

    // ═══════════════════════════════════════════════
    //  PART 2: QUESTION-RESPONSE LESSONS
    // ═══════════════════════════════════════════════

    // ─── Lesson 1: Who Questions ───────────────────
    p2_l1: {
        id: 'p2_l1',
        partId: 'part2',
        title: 'Who Questions',
        titleFr: 'Questions avec « Who »',
        description: 'Learn to identify the correct response to questions asking about people.',
        difficulty: 'beginner',
        keyVocabulary: [
            { en: 'in charge of', fr: 'responsable de' },
            { en: 'supervisor', fr: 'superviseur' },
            { en: 'department', fr: 'service / département' },
            { en: 'colleague', fr: 'collègue' },
            { en: 'applicant', fr: 'candidat' },
            { en: 'representative', fr: 'représentant' },
        ],
        exercises: [
            {
                id: 'p2_l1_q1',
                type: 'qr',
                question: 'Who is responsible for the quarterly report?',
                questionFr: 'Qui est responsable du rapport trimestriel ?',
                responses: [
                    '(A) Ms. Chen from the finance department.',
                    '(B) The report is due on Friday.',
                    '(C) It covers the third quarter.'
                ],
                answer: 0,
                explanation: '"Who" asks for a person. Only (A) names a person — Ms. Chen. (B) gives a deadline, (C) describes content.'
            },
            {
                id: 'p2_l1_q2',
                type: 'qr',
                question: 'Who should I contact about the new policy?',
                questionFr: 'Qui dois-je contacter au sujet de la nouvelle politique ?',
                responses: [
                    '(A) It was announced last week.',
                    '(B) Try reaching out to the HR manager.',
                    '(C) The policy covers all employees.'
                ],
                answer: 1,
                explanation: '"Who" expects a person. (B) suggests contacting the HR manager — a specific person. (A) and (C) don\'t answer "who".'
            },
            {
                id: 'p2_l1_q3',
                type: 'qr',
                question: 'Who approved the budget for the conference?',
                questionFr: 'Qui a approuvé le budget pour la conférence ?',
                responses: [
                    '(A) The conference is in March.',
                    '(B) About twenty thousand dollars.',
                    '(C) The regional director did.'
                ],
                answer: 2,
                explanation: '(C) identifies a person (the regional director) who approved it. (A) gives a date, (B) gives a price.'
            },
            {
                id: 'p2_l1_q4',
                type: 'qr',
                question: 'Who is leading tomorrow\'s training session?',
                questionFr: 'Qui dirige la session de formation de demain ?',
                responses: [
                    '(A) It starts at nine o\'clock.',
                    '(B) An external consultant will be running it.',
                    '(C) In the large meeting room.'
                ],
                answer: 1,
                explanation: '(B) identifies a person — an external consultant. (A) gives a time, (C) gives a location.'
            },
            {
                id: 'p2_l1_q5',
                type: 'qr',
                question: 'Who else is attending the client dinner?',
                questionFr: 'Qui d\'autre assiste au dîner avec le client ?',
                responses: [
                    '(A) The restaurant is downtown.',
                    '(B) Both the sales manager and the CEO.',
                    '(C) It was a successful meeting.'
                ],
                answer: 1,
                explanation: '(B) names people (sales manager and CEO). (A) is a place, (C) doesn\'t mention anyone.'
            },
            {
                id: 'p2_l1_q6',
                type: 'qr',
                question: 'Who left this package on my desk?',
                questionFr: 'Qui a laissé ce colis sur mon bureau ?',
                responses: [
                    '(A) I think it was the delivery person.',
                    '(B) Yes, it\'s very heavy.',
                    '(C) Your desk is near the window.'
                ],
                answer: 0,
                explanation: '(A) identifies a person — the delivery person. (B) describes the package, (C) describes the desk location.'
            }
        ]
    },

    // ─── Lesson 2: Where Questions ─────────────────
    p2_l2: {
        id: 'p2_l2',
        partId: 'part2',
        title: 'Where Questions',
        titleFr: 'Questions avec « Where »',
        description: 'Practice answering questions about locations, places, and directions.',
        difficulty: 'beginner',
        keyVocabulary: [
            { en: 'across from', fr: 'en face de' },
            { en: 'on the second floor', fr: 'au deuxième étage' },
            { en: 'around the corner', fr: 'au coin de la rue' },
            { en: 'supply room', fr: 'salle de fournitures' },
            { en: 'branch office', fr: 'bureau régional / succursale' },
            { en: 'warehouse', fr: 'entrepôt' },
        ],
        exercises: [
            {
                id: 'p2_l2_q1',
                type: 'qr',
                question: 'Where can I find the extra printer paper?',
                questionFr: 'Où puis-je trouver du papier pour l\'imprimante ?',
                responses: [
                    '(A) There\'s some in the supply closet down the hall.',
                    '(B) We ordered it yesterday.',
                    '(C) The printer is working fine.'
                ],
                answer: 0,
                explanation: '"Where" asks for a place. (A) gives a location — the supply closet down the hall. (B) talks about ordering, (C) about the printer.'
            },
            {
                id: 'p2_l2_q2',
                type: 'qr',
                question: 'Where is the nearest post office?',
                questionFr: 'Où se trouve le bureau de poste le plus proche ?',
                responses: [
                    '(A) It closes at five o\'clock.',
                    '(B) Two blocks east of here, next to the bank.',
                    '(C) I need to mail a package.'
                ],
                answer: 1,
                explanation: '(B) provides a specific location. (A) gives a time, (C) explains a personal need.'
            },
            {
                id: 'p2_l2_q3',
                type: 'qr',
                question: 'Where will the team-building event take place?',
                questionFr: 'Où aura lieu l\'événement de team-building ?',
                responses: [
                    '(A) At the Riverside Park, near the lake.',
                    '(B) It will last about three hours.',
                    '(C) The whole department is invited.'
                ],
                answer: 0,
                explanation: '(A) gives a place — Riverside Park. (B) gives a duration, (C) says who is invited.'
            },
            {
                id: 'p2_l2_q4',
                type: 'qr',
                question: 'Where should I park my car during the renovation?',
                questionFr: 'Où dois-je garer ma voiture pendant la rénovation ?',
                responses: [
                    '(A) The renovation will last two months.',
                    '(B) You can use the temporary lot on Oak Street.',
                    '(C) It\'s a silver sedan.'
                ],
                answer: 1,
                explanation: '(B) gives a place — the temporary lot on Oak Street. (A) gives a duration, (C) describes the car.'
            },
            {
                id: 'p2_l2_q5',
                type: 'qr',
                question: 'Where did you put the client files?',
                questionFr: 'Où as-tu mis les dossiers du client ?',
                responses: [
                    '(A) They\'re in the top drawer of the filing cabinet.',
                    '(B) I reviewed them this morning.',
                    '(C) The client called earlier.'
                ],
                answer: 0,
                explanation: '(A) specifies a location — the top drawer. (B) says when they were reviewed, (C) is about the client calling.'
            },
            {
                id: 'p2_l2_q6',
                type: 'qr',
                question: 'Where is the new branch office being built?',
                questionFr: 'Où le nouveau bureau régional est-il en construction ?',
                responses: [
                    '(A) On the corner of Fifth Avenue and Main Street.',
                    '(B) It should be finished by December.',
                    '(C) The company is expanding rapidly.'
                ],
                answer: 0,
                explanation: '(A) provides a specific location. (B) talks about a deadline, (C) is a general statement about the company.'
            }
        ]
    },

    // ─── Lesson 3: When Questions ──────────────────
    p2_l3: {
        id: 'p2_l3',
        partId: 'part2',
        title: 'When Questions',
        titleFr: 'Questions avec « When »',
        description: 'Practice answering questions about time, deadlines, and schedules.',
        difficulty: 'beginner',
        keyVocabulary: [
            { en: 'deadline', fr: 'date limite' },
            { en: 'by the end of the week', fr: 'd\'ici la fin de la semaine' },
            { en: 'as soon as possible', fr: 'dès que possible' },
            { en: 'postpone', fr: 'reporter / repousser' },
            { en: 'ahead of schedule', fr: 'en avance sur le planning' },
            { en: 'reschedule', fr: 'reprogrammer' },
        ],
        exercises: [
            {
                id: 'p2_l3_q1',
                type: 'qr',
                question: 'When is the project deadline?',
                questionFr: 'Quand est la date limite du projet ?',
                responses: [
                    '(A) The project manager is Mr. Lee.',
                    '(B) We need to finish by next Friday.',
                    '(C) The budget was approved last month.'
                ],
                answer: 1,
                explanation: '"When" asks for a time. (B) provides a deadline — next Friday. (A) names a person, (C) talks about the budget.'
            },
            {
                id: 'p2_l3_q2',
                type: 'qr',
                question: 'When did the shipment arrive?',
                questionFr: 'Quand la livraison est-elle arrivée ?',
                responses: [
                    '(A) It came in early this morning.',
                    '(B) It was shipped from the warehouse.',
                    '(C) There are about fifty boxes.'
                ],
                answer: 0,
                explanation: '(A) gives a time — early this morning. (B) talks about origin, (C) about quantity.'
            },
            {
                id: 'p2_l3_q3',
                type: 'qr',
                question: 'When will the new software be installed?',
                questionFr: 'Quand le nouveau logiciel sera-t-il installé ?',
                responses: [
                    '(A) Sometime next week, probably Tuesday.',
                    '(B) It\'s much faster than the old version.',
                    '(C) The IT department handles that.'
                ],
                answer: 0,
                explanation: '(A) provides a time frame — next week, probably Tuesday. (B) describes a feature, (C) names a department.'
            },
            {
                id: 'p2_l3_q4',
                type: 'qr',
                question: 'When was the last time you visited the factory?',
                questionFr: 'Quand avez-vous visité l\'usine pour la dernière fois ?',
                responses: [
                    '(A) The factory is in the industrial district.',
                    '(B) I think it was in early January.',
                    '(C) We manufacture electronic components.'
                ],
                answer: 1,
                explanation: '(B) gives a time — early January. (A) gives a location, (C) describes what the factory produces.'
            },
            {
                id: 'p2_l3_q5',
                type: 'qr',
                question: 'When should I submit the expense report?',
                questionFr: 'Quand dois-je soumettre la note de frais ?',
                responses: [
                    '(A) Please submit it before the end of the month.',
                    '(B) You can download the form from the intranet.',
                    '(C) The expenses totaled around three hundred dollars.'
                ],
                answer: 0,
                explanation: '(A) gives a deadline — before the end of the month. (B) talks about a form, (C) gives a total.'
            },
            {
                id: 'p2_l3_q6',
                type: 'qr',
                question: 'When are they planning to open the new store?',
                questionFr: 'Quand prévoient-ils d\'ouvrir le nouveau magasin ?',
                responses: [
                    '(A) The grand opening is scheduled for May fifteenth.',
                    '(B) It\'s going to be a clothing store.',
                    '(C) The location is on Market Street.'
                ],
                answer: 0,
                explanation: '(A) gives a specific date — May fifteenth. (B) describes the store type, (C) gives a location.'
            }
        ]
    },

    // ─── Lesson 4: What Questions ──────────────────
    p2_l4: {
        id: 'p2_l4',
        partId: 'part2',
        title: 'What Questions',
        titleFr: 'Questions avec « What »',
        description: 'Practice responding to questions asking about things, topics, and specifics.',
        difficulty: 'intermediate',
        keyVocabulary: [
            { en: 'agenda', fr: 'ordre du jour' },
            { en: 'specifications', fr: 'caractéristiques / spécifications' },
            { en: 'annual review', fr: 'bilan annuel' },
            { en: 'to be in charge of', fr: 'être en charge de' },
            { en: 'requirements', fr: 'exigences / conditions' },
            { en: 'updated version', fr: 'version mise à jour' },
        ],
        exercises: [
            {
                id: 'p2_l4_q1',
                type: 'qr',
                question: 'What time does the meeting start?',
                questionFr: 'À quelle heure commence la réunion ?',
                responses: [
                    '(A) In conference room B.',
                    '(B) It\'s been rescheduled to two thirty.',
                    '(C) About the marketing campaign.'
                ],
                answer: 1,
                explanation: '"What time" asks for a time. (B) gives a time — two thirty. (A) is a place, (C) is a topic.'
            },
            {
                id: 'p2_l4_q2',
                type: 'qr',
                question: 'What is on the agenda for this afternoon?',
                questionFr: 'Qu\'y a-t-il à l\'ordre du jour cet après-midi ?',
                responses: [
                    '(A) We\'ll be reviewing the sales figures and the new hires.',
                    '(B) The afternoon session lasts two hours.',
                    '(C) I prefer mornings for meetings.'
                ],
                answer: 0,
                explanation: '(A) describes topics (sales figures, new hires) — what is on the agenda. (B) gives a duration, (C) states a preference.'
            },
            {
                id: 'p2_l4_q3',
                type: 'qr',
                question: 'What kind of experience does the position require?',
                questionFr: 'Quel type d\'expérience le poste exige-t-il ?',
                responses: [
                    '(A) At least five years in project management.',
                    '(B) The salary is competitive.',
                    '(C) We received over a hundred applications.'
                ],
                answer: 0,
                explanation: '(A) specifies the type of experience needed. (B) talks about salary, (C) about applications.'
            },
            {
                id: 'p2_l4_q4',
                type: 'qr',
                question: 'What happened to the old furniture in the lobby?',
                questionFr: 'Qu\'est-il arrivé aux anciens meubles du hall ?',
                responses: [
                    '(A) It was donated to a local charity.',
                    '(B) The lobby looks much better now.',
                    '(C) New furniture is quite expensive.'
                ],
                answer: 0,
                explanation: '(A) explains what happened — it was donated. (B) comments on appearance, (C) mentions price.'
            },
            {
                id: 'p2_l4_q5',
                type: 'qr',
                question: 'What should I bring to the orientation session?',
                questionFr: 'Que dois-je apporter à la session d\'orientation ?',
                responses: [
                    '(A) The orientation is for new employees.',
                    '(B) Just your ID and a notebook.',
                    '(C) It\'s held in the main auditorium.'
                ],
                answer: 1,
                explanation: '(B) lists items to bring — ID and a notebook. (A) describes the event, (C) gives a location.'
            },
            {
                id: 'p2_l4_q6',
                type: 'qr',
                question: 'What does the warranty cover?',
                questionFr: 'Que couvre la garantie ?',
                responses: [
                    '(A) All defects in materials and workmanship for two years.',
                    '(B) You can purchase it at the customer service desk.',
                    '(C) The product comes in three colors.'
                ],
                answer: 0,
                explanation: '(A) describes what the warranty covers — defects for two years. (B) is about purchasing, (C) describes options.'
            }
        ]
    },

    // ─── Lesson 5: Why Questions ───────────────────
    p2_l5: {
        id: 'p2_l5',
        partId: 'part2',
        title: 'Why Questions',
        titleFr: 'Questions avec « Why »',
        description: 'Practice answering questions about reasons, causes, and justifications.',
        difficulty: 'intermediate',
        keyVocabulary: [
            { en: 'due to', fr: 'en raison de' },
            { en: 'in order to', fr: 'afin de' },
            { en: 'maintenance', fr: 'maintenance / entretien' },
            { en: 'to comply with', fr: 'se conformer à' },
            { en: 'shortage', fr: 'pénurie' },
            { en: 'feedback', fr: 'retour / commentaire' },
        ],
        exercises: [
            {
                id: 'p2_l5_q1',
                type: 'qr',
                question: 'Why was the meeting postponed?',
                questionFr: 'Pourquoi la réunion a-t-elle été reportée ?',
                responses: [
                    '(A) Because the director is traveling this week.',
                    '(B) The meeting room is on the third floor.',
                    '(C) We discussed the budget last time.'
                ],
                answer: 0,
                explanation: '"Why" asks for a reason. (A) gives a cause — the director is traveling. (B) gives a location, (C) a topic.'
            },
            {
                id: 'p2_l5_q2',
                type: 'qr',
                question: 'Why do we need to update the system?',
                questionFr: 'Pourquoi devons-nous mettre à jour le système ?',
                responses: [
                    '(A) The update will take about an hour.',
                    '(B) To fix several security vulnerabilities.',
                    '(C) The system runs on the cloud.'
                ],
                answer: 1,
                explanation: '(B) gives a reason — to fix security vulnerabilities. (A) gives a duration, (C) describes the system.'
            },
            {
                id: 'p2_l5_q3',
                type: 'qr',
                question: 'Why hasn\'t the invoice been paid yet?',
                questionFr: 'Pourquoi la facture n\'a-t-elle pas encore été payée ?',
                responses: [
                    '(A) It\'s for twelve thousand dollars.',
                    '(B) Please send it to the accounting department.',
                    '(C) There seems to be a discrepancy in the amounts.'
                ],
                answer: 2,
                explanation: '(C) gives a reason — a discrepancy in the amounts. (A) gives the amount, (B) gives instructions.'
            },
            {
                id: 'p2_l5_q4',
                type: 'qr',
                question: 'Why are the offices being rearranged?',
                questionFr: 'Pourquoi les bureaux sont-ils réorganisés ?',
                responses: [
                    '(A) To make room for the new team members.',
                    '(B) The furniture was ordered online.',
                    '(C) It should be done by next Monday.'
                ],
                answer: 0,
                explanation: '(A) provides the reason — to make room for new team members. (B) talks about ordering, (C) gives a deadline.'
            },
            {
                id: 'p2_l5_q5',
                type: 'qr',
                question: 'Why did the client cancel the order?',
                questionFr: 'Pourquoi le client a-t-il annulé la commande ?',
                responses: [
                    '(A) The order was placed two weeks ago.',
                    '(B) They found a more affordable supplier.',
                    '(C) We usually process orders within three days.'
                ],
                answer: 1,
                explanation: '(B) explains the reason — they found a cheaper supplier. (A) gives a date, (C) describes processing time.'
            },
            {
                id: 'p2_l5_q6',
                type: 'qr',
                question: 'Why is the parking lot closed today?',
                questionFr: 'Pourquoi le parking est-il fermé aujourd\'hui ?',
                responses: [
                    '(A) They\'re resurfacing the pavement.',
                    '(B) There\'s usually plenty of space.',
                    '(C) You can pay at the meter near the entrance.'
                ],
                answer: 0,
                explanation: '(A) gives the cause — resurfacing the pavement. (B) talks about availability, (C) about payment.'
            }
        ]
    },

    // ─── Lesson 6: How Questions ───────────────────
    p2_l6: {
        id: 'p2_l6',
        partId: 'part2',
        title: 'How Questions',
        titleFr: 'Questions avec « How »',
        description: 'Handle "How" questions — including How long, How many, How much, How often.',
        difficulty: 'intermediate',
        keyVocabulary: [
            { en: 'approximately', fr: 'environ / approximativement' },
            { en: 'quarterly', fr: 'trimestriel' },
            { en: 'to commute', fr: 'faire le trajet domicile-travail' },
            { en: 'duration', fr: 'durée' },
            { en: 'frequently', fr: 'fréquemment' },
            { en: 'budget-friendly', fr: 'économique' },
        ],
        exercises: [
            {
                id: 'p2_l6_q1',
                type: 'qr',
                question: 'How long will the renovation take?',
                questionFr: 'Combien de temps la rénovation va-t-elle durer ?',
                responses: [
                    '(A) It\'s on the third floor.',
                    '(B) They estimate about six weeks.',
                    '(C) The building was constructed in 1985.'
                ],
                answer: 1,
                explanation: '"How long" asks for a duration. (B) provides one — about six weeks. (A) is a location, (C) is a date.'
            },
            {
                id: 'p2_l6_q2',
                type: 'qr',
                question: 'How many applicants did we receive for the position?',
                questionFr: 'Combien de candidatures avons-nous reçues pour le poste ?',
                responses: [
                    '(A) Over seventy-five, which is a record.',
                    '(B) The position is for a software engineer.',
                    '(C) Human Resources is handling it.'
                ],
                answer: 0,
                explanation: '"How many" asks for a number. (A) gives a quantity — over seventy-five. (B) describes the role, (C) names a department.'
            },
            {
                id: 'p2_l6_q3',
                type: 'qr',
                question: 'How do you usually get to work?',
                questionFr: 'Comment allez-vous habituellement au travail ?',
                responses: [
                    '(A) I take the subway and then walk ten minutes.',
                    '(B) I usually start at eight thirty.',
                    '(C) My office is in the downtown area.'
                ],
                answer: 0,
                explanation: '"How" asks about a method/way. (A) describes transportation — subway and walking. (B) is a time, (C) is a location.'
            },
            {
                id: 'p2_l6_q4',
                type: 'qr',
                question: 'How much does the premium membership cost?',
                questionFr: 'Combien coûte l\'abonnement premium ?',
                responses: [
                    '(A) It includes access to all facilities.',
                    '(B) You can sign up at the front desk.',
                    '(C) Ninety-nine dollars a month.'
                ],
                answer: 2,
                explanation: '"How much" asks for a price. (C) gives that — $99/month. (A) describes features, (B) gives instructions.'
            },
            {
                id: 'p2_l6_q5',
                type: 'qr',
                question: 'How often do the buses run on weekends?',
                questionFr: 'À quelle fréquence les bus circulent-ils le week-end ?',
                responses: [
                    '(A) The bus stop is right outside the building.',
                    '(B) Every thirty minutes, starting at seven a.m.',
                    '(C) I usually drive on weekends.'
                ],
                answer: 1,
                explanation: '"How often" asks for frequency. (B) gives it — every 30 minutes. (A) is a location, (C) is a personal habit.'
            },
            {
                id: 'p2_l6_q6',
                type: 'qr',
                question: 'How was the workshop last Thursday?',
                questionFr: 'Comment était l\'atelier de jeudi dernier ?',
                responses: [
                    '(A) It was really informative, I learned a lot.',
                    '(B) It was held in the conference center.',
                    '(C) About forty people signed up.'
                ],
                answer: 0,
                explanation: '"How was" asks for an opinion/evaluation. (A) gives one — informative. (B) is a location, (C) is a number.'
            }
        ]
    },

    // ─── Lesson 7: Yes/No & Tag Questions ──────────
    p2_l7: {
        id: 'p2_l7',
        partId: 'part2',
        title: 'Yes/No & Tag Questions',
        titleFr: 'Questions fermées et question tags',
        description: 'Practice answering yes/no questions and tag questions with appropriate responses.',
        difficulty: 'advanced',
        keyVocabulary: [
            { en: 'as far as I know', fr: 'à ma connaissance' },
            { en: 'I\'m afraid so/not', fr: 'j\'en ai bien peur / j\'ai peur que non' },
            { en: 'actually', fr: 'en fait' },
            { en: 'I believe so', fr: 'je crois que oui' },
            { en: 'not necessarily', fr: 'pas nécessairement' },
            { en: 'it depends', fr: 'ça dépend' },
        ],
        exercises: [
            {
                id: 'p2_l7_q1',
                type: 'qr',
                question: 'Has the shipment been dispatched yet?',
                questionFr: 'L\'envoi a-t-il déjà été expédié ?',
                responses: [
                    '(A) Yes, it left the warehouse this morning.',
                    '(B) The warehouse is in New Jersey.',
                    '(C) We ordered fifty units.'
                ],
                answer: 0,
                explanation: 'This is a Yes/No question. (A) confirms with yes and adds detail. (B) is a place, (C) is a quantity.'
            },
            {
                id: 'p2_l7_q2',
                type: 'qr',
                question: 'Didn\'t you send the revised proposal to the client?',
                questionFr: 'N\'as-tu pas envoyé la proposition révisée au client ?',
                responses: [
                    '(A) The client\'s office is on Park Avenue.',
                    '(B) I thought David was handling that.',
                    '(C) The proposal includes a detailed timeline.'
                ],
                answer: 1,
                explanation: '(B) is an indirect response — "I thought David was handling that" implies the speaker didn\'t do it. This is a common TOEIC pattern — indirect answers.'
            },
            {
                id: 'p2_l7_q3',
                type: 'qr',
                question: 'The new policy takes effect next month, doesn\'t it?',
                questionFr: 'La nouvelle politique entre en vigueur le mois prochain, n\'est-ce pas ?',
                responses: [
                    '(A) Actually, it was pushed back to March.',
                    '(B) The policy affects all departments.',
                    '(C) You should read the employee handbook.'
                ],
                answer: 0,
                explanation: '(A) corrects the assumption with "actually" — a very common response pattern for tag questions. (B) and (C) don\'t confirm or deny.'
            },
            {
                id: 'p2_l7_q4',
                type: 'qr',
                question: 'Would you like me to reserve a conference room?',
                questionFr: 'Voulez-vous que je réserve une salle de conférence ?',
                responses: [
                    '(A) The conference is about digital marketing.',
                    '(B) That would be great, thank you.',
                    '(C) Room 204 is the largest one.'
                ],
                answer: 1,
                explanation: '(B) is a polite acceptance — answering the offer/request. (A) changes the topic, (C) gives a room detail.'
            },
            {
                id: 'p2_l7_q5',
                type: 'qr',
                question: 'Are you going to the company picnic on Saturday?',
                questionFr: 'Allez-vous au pique-nique d\'entreprise samedi ?',
                responses: [
                    '(A) The weather forecast says it might rain.',
                    '(B) I haven\'t decided yet, it depends on my schedule.',
                    '(C) The picnic was a lot of fun last year.'
                ],
                answer: 1,
                explanation: '(B) is a valid indirect response — expressing uncertainty. (A) discusses weather, (C) talks about last year.'
            },
            {
                id: 'p2_l7_q6',
                type: 'qr',
                question: 'Can you finish the report by end of day?',
                questionFr: 'Pouvez-vous terminer le rapport d\'ici la fin de la journée ?',
                responses: [
                    '(A) I\'m afraid I\'ll need until tomorrow morning.',
                    '(B) The report has six sections.',
                    '(C) It was submitted to the manager.'
                ],
                answer: 0,
                explanation: '(A) is a polite refusal with an alternative timeline. (B) describes the report, (C) says it was already submitted.'
            }
        ]
    },

    // ─── Lesson 8: Statements & Requests ───────────
    p2_l8: {
        id: 'p2_l8',
        partId: 'part2',
        title: 'Statements & Requests',
        titleFr: 'Déclarations et demandes',
        description: 'Respond to statements, suggestions, and polite requests — the trickiest Part 2 format.',
        difficulty: 'advanced',
        keyVocabulary: [
            { en: 'I\'d appreciate it if…', fr: 'J\'apprécierais que…' },
            { en: 'Why don\'t we…', fr: 'Pourquoi ne pas…' },
            { en: 'How about…', fr: 'Que dirais-tu de…' },
            { en: 'I was wondering if…', fr: 'Je me demandais si…' },
            { en: 'Do you mind if…', fr: 'Est-ce que ça vous dérange si…' },
            { en: 'Let me know if…', fr: 'Dites-moi si…' },
        ],
        exercises: [
            {
                id: 'p2_l8_q1',
                type: 'qr',
                question: 'I can\'t seem to find the keys to the storage room.',
                questionFr: 'Je n\'arrive pas à trouver les clés de la réserve.',
                responses: [
                    '(A) The storage room is on the ground floor.',
                    '(B) Try checking with the security desk.',
                    '(C) We keep office supplies in there.'
                ],
                answer: 1,
                explanation: 'This is a statement (not a question). (B) offers helpful advice. (A) gives the location of the room, (C) describes its contents.'
            },
            {
                id: 'p2_l8_q2',
                type: 'qr',
                question: 'Why don\'t we take a short break before the next presentation?',
                questionFr: 'Pourquoi ne ferions-nous pas une courte pause avant la prochaine présentation ?',
                responses: [
                    '(A) That sounds like a good idea.',
                    '(B) Because the room is too warm.',
                    '(C) The presentation is about sales trends.'
                ],
                answer: 0,
                explanation: '"Why don\'t we" is a **suggestion**, not a real "Why" question. (A) agrees with the suggestion. (B) gives a reason (trap — treating it as a real why-question). (C) is unrelated.'
            },
            {
                id: 'p2_l8_q3',
                type: 'qr',
                question: 'The printer on the second floor seems to be jammed again.',
                questionFr: 'L\'imprimante du deuxième étage semble encore bloquée.',
                responses: [
                    '(A) I\'ll call maintenance right away.',
                    '(B) We bought it last September.',
                    '(C) There\'s paper in the drawer.'
                ],
                answer: 0,
                explanation: 'This is a statement reporting a problem. (A) offers a solution — calling maintenance. (B) gives purchase date, (C) mentions paper.'
            },
            {
                id: 'p2_l8_q4',
                type: 'qr',
                question: 'Could you let me know when the delivery arrives?',
                questionFr: 'Pourriez-vous me prévenir quand la livraison arrive ?',
                responses: [
                    '(A) Of course, I\'ll send you a message.',
                    '(B) The delivery includes ten crates.',
                    '(C) We use an express shipping service.'
                ],
                answer: 0,
                explanation: 'This is a polite request. (A) agrees to the request. (B) describes the delivery, (C) mentions the shipping service.'
            },
            {
                id: 'p2_l8_q5',
                type: 'qr',
                question: 'I was wondering if there are any tickets left for the gala.',
                questionFr: 'Je me demandais s\'il restait des billets pour le gala.',
                responses: [
                    '(A) The gala is at the Grand Hotel.',
                    '(B) Let me check — I think a few are still available.',
                    '(C) It was a wonderful evening.'
                ],
                answer: 1,
                explanation: '"I was wondering if" is an indirect question/request. (B) addresses it by offering to check. (A) gives a location, (C) reflects on a past event.'
            },
            {
                id: 'p2_l8_q6',
                type: 'qr',
                question: 'How about we reschedule the meeting to Thursday instead?',
                questionFr: 'Et si nous reprogrammions la réunion à jeudi ?',
                responses: [
                    '(A) The meeting lasted about an hour.',
                    '(B) Thursday works for me. Let me update the calendar.',
                    '(C) The agenda hasn\'t been set yet.'
                ],
                answer: 1,
                explanation: '"How about" is a suggestion. (B) accepts and takes action. (A) talks about duration, (C) mentions the agenda.'
            }
        ]
    }
}

// ── Backward compat stubs (old API) ──────────────────────

// Old code used toeicSteps[stepId], remap to new lessons
export const toeicSteps = Object.fromEntries(
    Object.values(toeicLessons).map((l, i) => [i + 1, {
        id: i + 1,
        title: l.titleFr,
        titleEn: l.title,
        part: l.partId,
        exercises: l.exercises.map(ex => ({
            type: 'correct',
            question: ex.type === 'qr' ? ex.question : 'Choose the statement that best describes the photo.',
            answer: ex.type === 'qr' ? ex.responses?.[ex.answer] : ex.statements?.[ex.answer],
            options: ex.type === 'qr' ? ex.responses : ex.statements || []
        }))
    }])
)

// ── Helper functions ──────────────────────

export function getLessonsByPart(partId) {
    const part = toeicParts.find(p => p.id === partId)
    if (!part) return []
    return part.lessons.map(id => toeicLessons[id]).filter(Boolean)
}

export function getTotalLessons() {
    return Object.keys(toeicLessons).length
}

export function getTotalExercises() {
    return Object.values(toeicLessons).reduce((sum, l) => sum + l.exercises.length, 0)
}

export function getStepsByPart(partId) {
    return getLessonsByPart(partId)
}
