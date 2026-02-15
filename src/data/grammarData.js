// ============================================
// Grammar Data — Based on English Grammar in Use (Raymond Murphy)
// 145 Units organized in 12 categories
// ============================================

export const grammarCategories = [
    {
        id: 'present-past',
        title: 'Present & Past',
        icon: '🕐',
        color: '#4F46E5',
        description: 'Master present and past tenses — the foundation of English communication',
        units: [1, 2, 3, 4, 5, 6]
    },
    {
        id: 'present-perfect',
        title: 'Present Perfect & Past',
        icon: '⏳',
        color: '#7C3AED',
        description: 'Perfect tenses, duration, and connecting past to present',
        units: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    {
        id: 'future',
        title: 'Future',
        icon: '🚀',
        color: '#2563EB',
        description: 'Express plans, predictions, and future events',
        units: [19, 20, 21, 22, 23, 24, 25]
    },
    {
        id: 'modals',
        title: 'Modals',
        icon: '⚡',
        color: '#9333EA',
        description: 'Ability, possibility, permission, obligation, and advice',
        units: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
    },
    {
        id: 'conditionals',
        title: 'If & Wish',
        icon: '🔮',
        color: '#EC4899',
        description: 'Conditionals, hypothetical situations, and wishes',
        units: [38, 39, 40, 41]
    },
    {
        id: 'passive',
        title: 'Passive Voice',
        icon: '🔄',
        color: '#14B8A6',
        description: 'Passive constructions and causative structures',
        units: [42, 43, 44, 45, 46]
    },
    {
        id: 'reported',
        title: 'Reported Speech',
        icon: '💬',
        color: '#F59E0B',
        description: 'Indirect speech and reporting what people said',
        units: [47, 48]
    },
    {
        id: 'questions',
        title: 'Questions & Auxiliaries',
        icon: '❓',
        color: '#EF4444',
        description: 'Question forms, embedded questions, and tag questions',
        units: [49, 50, 51, 52]
    },
    {
        id: 'ing-to',
        title: '-ing and to …',
        icon: '🔗',
        color: '#10B981',
        description: 'Verb patterns with gerunds and infinitives',
        units: [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]
    },
    {
        id: 'articles-nouns',
        title: 'Articles & Nouns',
        icon: '📖',
        color: '#3B82F6',
        description: 'Countable/uncountable nouns, articles, and noun forms',
        units: [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81]
    },
    {
        id: 'pronouns-determiners',
        title: 'Pronouns & Determiners',
        icon: '🎯',
        color: '#8B5CF6',
        description: 'Pronouns, quantifiers, and relative clauses',
        units: [82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
    },
    {
        id: 'adj-adv-prep',
        title: 'Adjectives, Adverbs & Prepositions',
        icon: '🧩',
        color: '#F97316',
        description: 'Comparatives, word order, conjunctions, prepositions, and phrasal verbs',
        units: [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
            113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127,
            128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142,
            143, 144, 145]
    }
];

export const grammarUnits = {
    1: {
        id: 1,
        title: 'Present continuous (I am doing)',
        category: 'present-past',
        explanation: `The present continuous is used to talk about things happening **at the moment of speaking** or **around the current time**.`,
        rules: [
            'Form: **subject + am/is/are + verb-ing**',
            'Use for actions happening **right now**: _I\'m working at the moment._',
            'Use for **temporary situations**: _She\'s staying with friends this week._',
            'Use for **changing situations**: _The population is increasing._',
            'Use with **always** for annoying habits: _He\'s always losing his keys!_'
        ],
        examples: [
            { text: "I **am working** right now. Please don't disturb me.", correct: true },
            { text: "The weather **is getting** warmer these days.", correct: true },
            { text: "She **is living** in London temporarily.", correct: true },
            { text: "~~I am knowing~~ the answer. → I **know** the answer.", correct: false, note: "Know is a state verb — don't use continuous" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'Please be quiet. I _____ (try) to concentrate.',
                answer: "am trying",
                options: ["am trying", "try", "tried", "have tried"]
            },
            {
                type: 'fill',
                question: 'Look! It _____ (snow) outside.',
                answer: "is snowing",
                options: ["is snowing", "snows", "snowed", "has snowed"]
            },
            {
                type: 'fill',
                question: '"Where\'s Sarah?" "She _____ (have) a shower."',
                answer: "is having",
                options: ["is having", "has", "had", "have"]
            },
            {
                type: 'fill',
                question: 'The number of people learning English _____ (grow) every year.',
                answer: "is growing",
                options: ["is growing", "grows", "grew", "has grown"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I\'m looking for my keys.",
                options: ["I\'m looking for my keys.", "I look for my keys right now.", "I looking for my keys."]
            }
        ]
    },
    2: {
        id: 2,
        title: 'Present simple (I do)',
        category: 'present-past',
        explanation: `The present simple is used for **permanent situations**, **habits**, **facts**, and **scheduled events**.`,
        rules: [
            'Form: **subject + base verb** (add -s/-es for he/she/it)',
            'Use for **habits and routines**: _I get up at 7 every morning._',
            'Use for **permanent facts**: _Water boils at 100°C._',
            'Use for **timetabled events**: _The train leaves at 9:30._',
            'Negative: **don\'t/doesn\'t + base verb**: _She doesn\'t like coffee._',
            'Question: **Do/Does + subject + base verb?**: _Do you speak French?_'
        ],
        examples: [
            { text: "I **work** in a bank. (permanent job)", correct: true },
            { text: "She **speaks** four languages.", correct: true },
            { text: "The Earth **goes** around the Sun.", correct: true },
            { text: "We **don't eat** meat. We're vegetarian.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'She _____ (work) in a hospital. She\'s a nurse.',
                answer: "works",
                options: ["works", "is working", "work", "worked"]
            },
            {
                type: 'fill',
                question: 'The museum _____ (close) at 5 p.m. every day.',
                answer: "closes",
                options: ["closes", "is closing", "close", "closed"]
            },
            {
                type: 'fill',
                question: 'I _____ (not/drink) coffee. I prefer tea.',
                answer: "don't drink",
                options: ["don't drink", "am not drinking", "doesn't drink", "not drink"]
            },
            {
                type: 'fill',
                question: '_____ you _____ (speak) any foreign languages?',
                answer: "Do ... speak",
                options: ["Do ... speak", "Are ... speaking", "Does ... speak", "Did ... speak"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "He doesn't like cold weather.",
                options: ["He doesn't like cold weather.", "He don't like cold weather.", "He not likes cold weather."]
            }
        ]
    },
    3: {
        id: 3,
        title: 'Present continuous and present simple 1',
        category: 'present-past',
        explanation: `Learn when to use present continuous vs present simple — one of the most important distinctions in English.`,
        rules: [
            '**Present continuous** = happening now / temporary: _Tom is reading a book._',
            '**Present simple** = always / permanent: _Tom reads a lot._',
            '**State verbs** (know, like, want, believe, belong) → usually **present simple only**',
            '**Action verbs** (work, play, run, eat) → can use both',
            'Some verbs change meaning: _I\'m thinking about it_ (= considering) vs _I think it\'s good_ (= opinion)'
        ],
        examples: [
            { text: "The water **is boiling**. Can you turn it off? (happening now)", correct: true },
            { text: "Water **boils** at 100 degrees Celsius. (general fact)", correct: true },
            { text: "I **don't believe** you. (NOT: I'm not believing)", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: '"Excuse me, _____ (you/speak) English?" "Yes, a little."',
                answer: "do you speak",
                options: ["do you speak", "are you speaking", "you speak", "you are speaking"]
            },
            {
                type: 'fill',
                question: 'Where\'s Tom? He _____ (have) a shower.',
                answer: "is having",
                options: ["is having", "has", "have", "is have"]
            },
            {
                type: 'fill',
                question: 'I _____ (not/understand) this sentence. What does it mean?',
                answer: "don't understand",
                options: ["don't understand", "am not understanding", "not understand", "doesn't understand"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I believe you are right.",
                options: ["I believe you are right.", "I am believing you are right.", "I believing you are right."]
            }
        ]
    },
    5: {
        id: 5,
        title: 'Past simple (I did)',
        category: 'present-past',
        explanation: `The past simple is used for **completed actions** in the past.`,
        rules: [
            'Regular verbs: add **-ed** (worked, played, started)',
            'Irregular verbs: learn the forms (went, saw, took, etc.)',
            'Negative: **didn\'t + base verb**: _I didn\'t go to work yesterday._',
            'Question: **Did + subject + base verb?**: _Did you enjoy the party?_',
            'Time expressions: yesterday, last week, ago, in 2020, when I was young'
        ],
        examples: [
            { text: "I **worked** in a factory last summer.", correct: true },
            { text: "We **didn't go** out yesterday because it rained.", correct: true },
            { text: "**Did** you **see** the news last night?", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I _____ (see) a very interesting documentary last night.',
                answer: "saw",
                options: ["saw", "have seen", "see", "was seeing"]
            },
            {
                type: 'fill',
                question: 'She _____ (not/come) to the meeting yesterday.',
                answer: "didn't come",
                options: ["didn't come", "hasn't come", "not came", "doesn't come"]
            },
            {
                type: 'fill',
                question: 'When _____ you _____ (start) your new job?',
                answer: "did ... start",
                options: ["did ... start", "have ... started", "do ... start", "are ... starting"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I went to London three days ago.",
                options: ["I went to London three days ago.", "I have gone to London three days ago.", "I goed to London three days ago."]
            }
        ]
    },
    7: {
        id: 7,
        title: 'Present perfect 1 (I have done)',
        category: 'present-perfect',
        explanation: `The present perfect connects the **past to the present**. Something happened in the past, but it matters NOW.`,
        rules: [
            'Form: **have/has + past participle**',
            'Use for **experiences**: _I have been to Japan twice._',
            'Use for **recent events with a present result**: _She has lost her keys._ (= she can\'t find them now)',
            'Use with **just, already, yet**: _I\'ve just finished. Have you eaten yet?_',
            'DON\'T use with specific past times (yesterday, last week, in 2020)',
            'Compare: _I\'ve lost my keys_ (present result) vs _I lost my keys yesterday_ (specific time = past simple)'
        ],
        examples: [
            { text: "I **have visited** Paris three times.", correct: true },
            { text: "**Have** you ever **tried** sushi?", correct: true },
            { text: "She **has just** left the office.", correct: true },
            { text: "~~I have seen him yesterday.~~ → I **saw** him yesterday.", correct: false, note: "Specific past time = past simple" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I _____ (lose) my passport. Can you help me look for it?',
                answer: "have lost",
                options: ["have lost", "lost", "am losing", "lose"]
            },
            {
                type: 'fill',
                question: '_____ you ever _____ (be) to Australia?',
                answer: "Have ... been",
                options: ["Have ... been", "Did ... be", "Are ... been", "Were ... being"]
            },
            {
                type: 'fill',
                question: 'She _____ (already/finish) the report.',
                answer: "has already finished",
                options: ["has already finished", "already finished", "is already finishing", "already has finished"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I've been to the new restaurant. It's great!",
                options: ["I've been to the new restaurant. It's great!", "I've been to the new restaurant yesterday.", "I've went to the new restaurant."]
            }
        ]
    },
    19: {
        id: 19,
        title: 'Present tenses for the future',
        category: 'future',
        explanation: `Present tenses can be used to talk about the future in specific situations.`,
        rules: [
            '**Present continuous** for fixed arrangements: _I\'m meeting John at 3 o\'clock tomorrow._',
            '**Present simple** for timetables/schedules: _The flight leaves at 11:30._',
            'Don\'t confuse with going to: _I\'m going to buy a car_ (intention) vs _I\'m buying a new car_ (arrangement)'
        ],
        examples: [
            { text: "I **am playing** tennis with Sarah tomorrow. (arrangement)", correct: true },
            { text: "The concert **starts** at 7:30 p.m. (timetable)", correct: true },
            { text: "What time **does** your train **leave**?", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I _____ (meet) Chris at 6.00 tomorrow. We arranged it yesterday.',
                answer: "am meeting",
                options: ["am meeting", "meet", "will meet", "going to meet"]
            },
            {
                type: 'fill',
                question: 'What time _____ the film _____ (start)?',
                answer: "does ... start",
                options: ["does ... start", "is ... starting", "will ... start", "has ... started"]
            },
            {
                type: 'correct',
                question: 'Which sentence best expresses a fixed arrangement?',
                answer: "We're having dinner with the Johnsons tonight.",
                options: ["We're having dinner with the Johnsons tonight.", "We have dinner with the Johnsons tonight.", "We will have dinner with the Johnsons tonight."]
            }
        ]
    },
    21: {
        id: 21,
        title: 'will and shall 1',
        category: 'future',
        explanation: `**Will** is used for decisions made at the moment, predictions, and promises.`,
        rules: [
            'For **instant decisions**: _Oh, I\'ll have the chicken, please._',
            'For **predictions**: _I think it will rain tomorrow._',
            'For **promises**: _I\'ll call you later, I promise._',
            'For **offers**: _I\'ll carry that bag for you._',
            '**Shall** in questions for suggestions (I/we only): _Shall we go out tonight?_'
        ],
        examples: [
            { text: "\"I'm cold.\" \"I **'ll** close the window.\" (instant decision)", correct: true },
            { text: "I think the exam **will** be difficult.", correct: true },
            { text: "**Shall** I help you with those bags?", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: '"I\'m really hungry." "I _____ make you a sandwich."',
                answer: "\'ll",
                options: ["'ll", "'m going to", "shall", "'m"]
            },
            {
                type: 'fill',
                question: 'I think the weather _____ (be) nice tomorrow.',
                answer: "will be",
                options: ["will be", "is being", "is going to be", "is"]
            },
            {
                type: 'correct',
                question: 'Which is an offer?',
                answer: "I'll carry that for you.",
                options: ["I'll carry that for you.", "I'm carrying that for you.", "I carry that for you."]
            }
        ]
    },
    26: {
        id: 26,
        title: 'can, could and (be) able to',
        category: 'modals',
        explanation: `These express **ability** and **possibility** in different tenses.`,
        rules: [
            '**Can** = present ability: _She can speak three languages._',
            '**Could** = past general ability: _When I was young, I could run fast._',
            '**Was/were able to** = past specific achievement: _The fire was huge but they were able to escape._',
            '**Will be able to** = future ability: _I\'ll be able to help you next week._',
            'Negative: can\'t / couldn\'t / wasn\'t able to'
        ],
        examples: [
            { text: "**Can** you swim?", correct: true },
            { text: "I **could** read when I was four.", correct: true },
            { text: "After the course, you **will be able to** write professional emails.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'My grandmother _____ speak five languages.',
                answer: "could",
                options: ["could", "can", "was able to", "is able to"]
            },
            {
                type: 'fill',
                question: 'I _____ (not/sleep) last night because of the noise.',
                answer: "couldn't sleep",
                options: ["couldn't sleep", "can't sleep", "wasn't able sleeping", "not could sleep"]
            },
            {
                type: 'correct',
                question: 'Which sentence describes a specific past achievement?',
                answer: "The plane was delayed, but we were able to catch it.",
                options: ["The plane was delayed, but we were able to catch it.", "The plane was delayed, but we could catch it.", "The plane was delayed, but we can catch it."]
            }
        ]
    },
    38: {
        id: 38,
        title: 'If I do … and If I did …',
        category: 'conditionals',
        explanation: `Conditional sentences describe what happens **if** a condition is met. The type of conditional tells us how likely the situation is.`,
        rules: [
            '**First conditional** (real/possible): If + present simple, … will + base verb',
            '_If it rains tomorrow, I\'ll stay home._',
            '**Second conditional** (unreal/imaginary): If + past simple, … would + base verb',
            '_If I had a million dollars, I would travel the world._',
            'Note: In the second conditional, we use **were** (not was) in formal English: _If I were you, I would…_'
        ],
        examples: [
            { text: "If I **find** your book, I **will** give it back to you. (real possibility)", correct: true },
            { text: "If I **knew** his number, I **would** call him. (but I don't know it)", correct: true },
            { text: "If I **were** you, I **would** accept the job.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'If I _____ (be) you, I\'d apply for the job.',
                answer: "were",
                options: ["were", "am", "was", "would be"]
            },
            {
                type: 'fill',
                question: 'If it _____ (rain) tomorrow, we\'ll cancel the picnic.',
                answer: "rains",
                options: ["rains", "rained", "will rain", "would rain"]
            },
            {
                type: 'fill',
                question: 'If I had more time, I _____ (learn) another language.',
                answer: "would learn",
                options: ["would learn", "will learn", "learn", "learned"]
            },
            {
                type: 'correct',
                question: 'Which is a second conditional (unreal) sentence?',
                answer: "If I lived near the ocean, I would go surfing every day.",
                options: ["If I lived near the ocean, I would go surfing every day.", "If I live near the ocean, I will go surfing every day.", "If I live near the ocean, I go surfing every day."]
            }
        ]
    },
    42: {
        id: 42,
        title: 'Passive 1 (is done / was done)',
        category: 'passive',
        explanation: `The passive voice is used when the **action** is more important than **who** does it.`,
        rules: [
            'Form: **subject + be + past participle**',
            'Present: _English **is spoken** all over the world._',
            'Past: _The office **was built** in 2005._',
            'Future: _The results **will be announced** tomorrow._',
            'Use passive when we don\'t know who did the action, or it\'s not important',
            'Use **by** to mention the agent: _The book was written **by** J.K. Rowling._'
        ],
        examples: [
            { text: "This bridge **was built** in 1990.", correct: true },
            { text: "The TOEIC exam **is taken** by millions of people every year.", correct: true },
            { text: "The meeting **has been cancelled**.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'English _____ (speak) in many countries around the world.',
                answer: "is spoken",
                options: ["is spoken", "speaks", "is speaking", "spoken"]
            },
            {
                type: 'fill',
                question: 'The company _____ (found) in 1985.',
                answer: "was founded",
                options: ["was founded", "founded", "has founded", "is founded"]
            },
            {
                type: 'fill',
                question: 'A new hospital _____ (build) in the city centre next year.',
                answer: "will be built",
                options: ["will be built", "is building", "builds", "was built"]
            },
            {
                type: 'correct',
                question: 'Which passive sentence is correct?',
                answer: "The report was written by the manager.",
                options: ["The report was written by the manager.", "The report was wrote by the manager.", "The report is write by the manager."]
            }
        ]
    },
    53: {
        id: 53,
        title: 'Verb + -ing (enjoy doing / stop doing etc.)',
        category: 'ing-to',
        explanation: `Some verbs are followed by **-ing** (the gerund form).`,
        rules: [
            'These verbs are followed by **-ing**: enjoy, mind, finish, stop, suggest, avoid, imagine, deny, risk, consider, postpone, keep, practise, fancy, admit',
            'Example: _I enjoy **reading** books._',
            'Example: _Have you finished **working**?_',
            'Example: _I can\'t imagine **living** in a cold country._',
            'Negative: _She denied **stealing** the money._'
        ],
        examples: [
            { text: "I **enjoy cooking** for my friends.", correct: true },
            { text: "Would you **mind closing** the door?", correct: true },
            { text: "He **suggested going** to a restaurant.", correct: true },
            { text: "~~I enjoy to cook.~~ → I enjoy **cooking**.", correct: false, note: "enjoy is always followed by -ing" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I enjoy _____ (listen) to music.',
                answer: "listening",
                options: ["listening", "to listen", "listen", "listened"]
            },
            {
                type: 'fill',
                question: 'She suggested _____ (go) to the cinema.',
                answer: "going",
                options: ["going", "to go", "go", "went"]
            },
            {
                type: 'fill',
                question: 'Would you mind _____ (open) the window?',
                answer: "opening",
                options: ["opening", "to open", "open", "opened"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I can't imagine living without internet.",
                options: ["I can't imagine living without internet.", "I can't imagine to live without internet.", "I can't imagine live without internet."]
            }
        ]
    },
    69: {
        id: 69,
        title: 'Countable and uncountable 1',
        category: 'articles-nouns',
        explanation: `English nouns are either **countable** (can be counted) or **uncountable** (cannot be counted). This affects articles, quantifiers, and verb agreement.`,
        rules: [
            '**Countable**: book/books, car/cars, idea/ideas — can use a/an, numbers',
            '**Uncountable**: water, music, information, advice, luggage — NO a/an, NO plural',
            'Common uncountable nouns: information, advice, furniture, weather, news, traffic, work, money',
            '~~an information~~ → **a piece of information** / **some information**',
            '~~furnitures~~ → **furniture** (always singular)'
        ],
        examples: [
            { text: "I need **some information** about trains.", correct: true },
            { text: "Can I give you **a piece of advice**?", correct: true },
            { text: "~~I have a good news.~~ → I have **good news**.", correct: false, note: "news is uncountable" }
        ],
        exercises: [
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I need some information about the TOEIC exam.",
                options: ["I need some information about the TOEIC exam.", "I need an information about the TOEIC exam.", "I need informations about the TOEIC exam."]
            },
            {
                type: 'fill',
                question: 'The _____ (furniture) in this office is very old.',
                answer: "furniture",
                options: ["furniture", "furnitures", "a furniture", "piece furniture"]
            },
            {
                type: 'fill',
                question: 'She gave me some very useful _____.',
                answer: "advice",
                options: ["advice", "advices", "an advice", "advise"]
            }
        ]
    },
    105: {
        id: 105,
        title: 'Comparative 1 (cheaper, more expensive etc.)',
        category: 'adj-adv-prep',
        explanation: `Comparatives are used to **compare two things**. The form depends on the length of the adjective.`,
        rules: [
            '**Short adjectives** (1 syllable): add **-er** → cheap → **cheaper**, tall → **taller**',
            '**Long adjectives** (2+ syllables): **more +** adjective → expensive → **more expensive**',
            'Adjectives ending in **-y**: change y to i + er → easy → **easier**, happy → **happier**',
            'Irregular: good → **better**, bad → **worse**, far → **further**',
            'Use **than** after comparatives: _This book is **cheaper than** that one._'
        ],
        examples: [
            { text: "Tokyo is **more expensive than** Seoul.", correct: true },
            { text: "My English is getting **better**.", correct: true },
            { text: "The TOEIC is **easier than** IELTS for some people.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'This exercise is _____ (easy) than the last one.',
                answer: "easier",
                options: ["easier", "more easy", "most easy", "easyer"]
            },
            {
                type: 'fill',
                question: 'The new office is _____ (good) than the old one.',
                answer: "better",
                options: ["better", "gooder", "more good", "best"]
            },
            {
                type: 'fill',
                question: 'Learning vocabulary is _____ (important) than you think for the TOEIC.',
                answer: "more important",
                options: ["more important", "importanter", "most important", "more importanter"]
            }
        ]
    },
    137: {
        id: 137,
        title: 'Phrasal verbs 1 — Introduction',
        category: 'adj-adv-prep',
        explanation: `Phrasal verbs combine a verb with a particle (preposition/adverb) to create a new meaning.`,
        rules: [
            'A **phrasal verb** = verb + particle (up, down, out, in, off, on, away, back)',
            'The meaning is often **different** from the individual words',
            '**look up** = search for information: _I\'ll look it up in the dictionary._',
            '**turn off** = stop a device: _Turn off the light._',
            '**fill in** = complete a form: _Please fill in this form._',
            '**find out** = discover: _I need to find out more about the TOEIC._'
        ],
        examples: [
            { text: "Can you **turn down** the music? It's too loud.", correct: true },
            { text: "I **looked up** every word I didn't know.", correct: true },
            { text: "The meeting has been **put off** until next week.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'Could you _____ the TV? I want to watch the news.',
                answer: "turn on",
                options: ["turn on", "turn in", "turn up", "turn by"]
            },
            {
                type: 'fill',
                question: 'I need to _____ what time the exam starts.',
                answer: "find out",
                options: ["find out", "find in", "find on", "find up"]
            },
            {
                type: 'fill',
                question: 'Please _____ this application form and return it.',
                answer: "fill in",
                options: ["fill in", "fill up", "fill on", "fill out"]
            }
        ]
    }
};

// Helper to get units for a category
export function getUnitsByCategory(categoryId) {
    const category = grammarCategories.find(c => c.id === categoryId);
    if (!category) return [];
    return category.units.map(id => grammarUnits[id]).filter(Boolean);
}

// Get all available unit IDs
export function getAvailableUnitIds() {
    return Object.keys(grammarUnits).map(Number);
}
