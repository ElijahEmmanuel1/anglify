// ============================================
// Grammar Data — Based on English Grammar in Use (Raymond Murphy)
// 145 Units organized in 12 categories
// ============================================

import { grammarLessonsFR } from './grammarLessons';
import { grammarLessonsFuture } from './grammarLessons_future';
import { grammarLessonsModals } from './grammarLessons_modals';
import { grammarLessonsConditionals } from './grammarLessons_conditionals';
import { grammarLessonsPassive } from './grammarLessons_passive';
import { grammarLessonsReported } from './grammarLessons_reported';
import { grammarLessonsQuestions } from './grammarLessons_questions';
import { grammarLessonsIngTo } from './grammarLessons_ingTo';
import { grammarLessonsArticlesNouns } from './grammarLessons_articlesNouns';
import { grammarLessonsPronouns } from './grammarLessons_pronouns';
import { grammarLessonsAdjAdv } from './grammarLessons_adjAdv';
import { grammarLessonsConjPrep } from './grammarLessons_conjPrep';
import { grammarLessonsPhrasalVerbs } from './grammarLessons_phrasalVerbs';

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
        explanation: `Learn when to use present continuous vs present simple — one of the most important distinctions in English. The **present continuous** describes things happening RIGHT NOW or temporarily. The **present simple** describes things that are ALWAYS true or happen regularly.`,
        rules: [
            '**Present continuous** = happening now / temporary: _Tom is reading a book (right now)._',
            '**Present simple** = always / permanent: _Tom reads a lot (in general)._',
            '**State verbs** (know, like, want, believe, belong, understand, need, prefer) → usually **present simple only**',
            '**Action verbs** (work, play, run, eat, write) → can use both tenses',
            'Some verbs change meaning: _I\'m thinking about it_ (= considering) vs _I think it\'s good_ (= opinion)',
            '**have** changes: _She\'s having lunch_ (= eating, action) vs _She has a car_ (= possessing, state)'
        ],
        examples: [
            { text: "The water **is boiling**. Can you turn it off? (happening now)", correct: true },
            { text: "Water **boils** at 100 degrees Celsius. (general fact)", correct: true },
            { text: "I **don't believe** you. (NOT: I'm not believing)", correct: true },
            { text: "He **is being** very rude today. (temporary behaviour, NOT permanent)", correct: true },
            { text: "~~I am knowing~~ the answer. → I **know** the answer.", correct: false, note: "'know' is a state verb — never use continuous" }
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
                type: 'fill',
                question: 'This soup _____ (taste) delicious! What did you put in it?',
                answer: "tastes",
                options: ["tastes", "is tasting", "tasted", "has tasted"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I believe you are right.",
                options: ["I believe you are right.", "I am believing you are right.", "I believing you are right."]
            }
        ]
    },
    4: {
        id: 4,
        title: 'Present continuous and present simple 2',
        category: 'present-past',
        explanation: `This unit goes deeper into the differences between present continuous and present simple, focusing on **temporary vs permanent**, **changing situations**, and tricky cases that often appear on the TOEIC.`,
        rules: [
            '**I always do** (present simple) = I do it every time: _I always go to work by car._',
            '**I\'m always doing** (continuous) = too often / annoying habit: _He\'s always leaving the door open!_',
            'Temporary situation → **continuous**: _I\'m living with a friend until I find an apartment._',
            'Permanent situation → **simple**: _My parents live in London._',
            'Changing/developing situations → **continuous**: _The cost of living **is rising** every year._',
            '**look / feel / smell / taste** can use both: _You look tired_ = _You\'re looking tired_ (both OK)'
        ],
        examples: [
            { text: "I **usually drive** to work, but today I **am taking** the bus.", correct: true },
            { text: "The population of the world **is increasing** very fast.", correct: true },
            { text: "You **'re always complaining** about the food! (annoying habit)", correct: true },
            { text: "She **works** in a bank. (permanent) / She **'s working** at home today. (temporary)", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I usually _____ (drive) to work, but today I _____ (take) the bus.',
                answer: "drive ... am taking",
                options: ["drive ... am taking", "am driving ... take", "drive ... take", "am driving ... am taking"]
            },
            {
                type: 'fill',
                question: 'The company _____ (grow) rapidly. It now has over 500 employees.',
                answer: "is growing",
                options: ["is growing", "grows", "grew", "has grown"]
            },
            {
                type: 'fill',
                question: 'You\'re always _____ (use) my phone without asking!',
                answer: "using",
                options: ["using", "use", "used", "to use"]
            },
            {
                type: 'fill',
                question: 'She _____ (stay) at a hotel until she finds an apartment.',
                answer: "is staying",
                options: ["is staying", "stays", "stayed", "has stayed"]
            },
            {
                type: 'correct',
                question: 'Which sentence describes a permanent situation?',
                answer: "She works for a multinational company.",
                options: ["She works for a multinational company.", "She is working for a multinational company.", "She has worked for a multinational company."]
            },
            {
                type: 'correct',
                question: 'Which sentence expresses an annoying habit?',
                answer: "He's always borrowing money and never paying it back!",
                options: ["He's always borrowing money and never paying it back!", "He always borrows money.", "He borrowed money again."]
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
    6: {
        id: 6,
        title: 'Past continuous (I was doing)',
        category: 'present-past',
        explanation: `The past continuous describes an action that was **in progress** at a particular time in the past. It sets the **background scene** for a story and is often used with the past simple to show an interruption.`,
        rules: [
            'Form: **subject + was/were + verb-ing**',
            'Use for an action **in progress** at a specific past time: _At 8 o\'clock last night, I was watching TV._',
            'Use for **background actions** in a story: _The sun was shining and birds were singing._',
            'Use with **when/while** to show interruption: _I was walking home **when** it started to rain._',
            '**Past continuous** (longer action) + **past simple** (shorter interruption): _She was cooking dinner when the phone rang._',
            '**While** + past continuous: _While I was sleeping, someone stole my car._',
            'Two past continuous verbs = **two things happening at the same time**: _While I was reading, my sister was watching TV._'
        ],
        examples: [
            { text: "This time last year I **was living** in Brazil.", correct: true },
            { text: "What **were** you **doing** at 10 o'clock last night?", correct: true },
            { text: "I **was walking** along the street when I **met** an old friend. (interrupted)", correct: true },
            { text: "**While** I **was driving**, I **saw** an accident.", correct: true },
            { text: "~~When I was arriving, they left.~~ → When I **arrived**, they left.", correct: false, note: "Short completed actions use past simple, not continuous" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I _____ (walk) down the street when I heard someone shout.',
                answer: "was walking",
                options: ["was walking", "walked", "am walking", "had walked"]
            },
            {
                type: 'fill',
                question: 'What _____ you _____ (do) at midnight last night?',
                answer: "were ... doing",
                options: ["were ... doing", "did ... do", "have ... done", "are ... doing"]
            },
            {
                type: 'fill',
                question: 'While she _____ (cook), the fire alarm went off.',
                answer: "was cooking",
                options: ["was cooking", "cooked", "is cooking", "has cooked"]
            },
            {
                type: 'fill',
                question: 'It _____ (rain) when we left the office yesterday.',
                answer: "was raining",
                options: ["was raining", "rained", "rains", "is raining"]
            },
            {
                type: 'fill',
                question: 'They _____ (not/listen) when the teacher explained the exercise.',
                answer: "weren't listening",
                options: ["weren't listening", "didn't listen", "not listened", "haven't listened"]
            },
            {
                type: 'correct',
                question: 'Which sentence correctly uses the past continuous for a background scene?',
                answer: "The sun was setting and the birds were singing when we arrived at the lake.",
                options: ["The sun was setting and the birds were singing when we arrived at the lake.", "The sun setted and the birds singed when we arrived at the lake.", "The sun set and the birds sang when we were arriving at the lake."]
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
    8: {
        id: 8,
        title: 'Present perfect 2 (I have done)',
        category: 'present-perfect',
        explanation: `This unit explores more uses of the present perfect — focusing on **recent news**, **superlatives with ever**, and the key words **just, already, yet, still**.`,
        rules: [
            '**just** = a short time ago: _I\'ve **just** arrived._',
            '**already** = sooner than expected: _She\'s **already** finished the report._',
            '**yet** = until now (questions & negatives): _Have you finished **yet**? / I haven\'t finished **yet**._',
            '**still** + haven\'t/hasn\'t = emphasises the action hasn\'t happened: _He **still** hasn\'t replied._',
            'Use for **news/announcements**: _The CEO **has resigned**._ (We can then give details in past simple)',
            'Superlative + **ever**: _It\'s the best book I\'ve ever read._',
            '**This is the first/second time…** + present perfect: _This is the first time I\'ve been here._'
        ],
        examples: [
            { text: "I **'ve just had** lunch, so I'm not hungry.", correct: true },
            { text: "\"Has the meeting started **yet**?\" \"No, not **yet**.\"", correct: true },
            { text: "It's the most interesting documentary I **'ve ever seen**.", correct: true },
            { text: "She **still hasn't called** me back.", correct: true },
            { text: "The company **has announced** a new product. (news — present perfect) The announcement **was made** this morning. (details — past simple)", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'Don\'t eat the cake — I _____ (just/make) it, so it\'s still hot.',
                answer: "have just made",
                options: ["have just made", "just made", "am just making", "had just made"]
            },
            {
                type: 'fill',
                question: '"Have you finished the report _____?" "No, not _____."',
                answer: "yet ... yet",
                options: ["yet ... yet", "already ... still", "still ... yet", "just ... already"]
            },
            {
                type: 'fill',
                question: 'She _____ (already/send) the email to all the clients.',
                answer: "has already sent",
                options: ["has already sent", "already sent", "is already sending", "already has sent"]
            },
            {
                type: 'fill',
                question: 'It\'s the best presentation I _____ ever _____ (see).',
                answer: "have ... seen",
                options: ["have ... seen", "had ... seen", "did ... see", "was ... seeing"]
            },
            {
                type: 'fill',
                question: 'Tom _____ (still/not/reply) to my email. I sent it three days ago!',
                answer: "still hasn't replied",
                options: ["still hasn't replied", "hasn't still replied", "still didn't reply", "is still not replying"]
            },
            {
                type: 'correct',
                question: 'Which sentence correctly uses "This is the first time..."?',
                answer: "This is the first time I've flown business class.",
                options: ["This is the first time I've flown business class.", "This is the first time I fly business class.", "This is the first time I flew business class."]
            }
        ]
    },
    9: {
        id: 9,
        title: 'Present perfect continuous (I have been doing)',
        category: 'present-perfect',
        explanation: `The present perfect continuous emphasises the **duration** or **ongoing nature** of an activity that started in the past and continues to now (or has just stopped with a visible result).`,
        rules: [
            'Form: **have/has + been + verb-ing**',
            'Emphasises **how long** something has been happening: _I\'ve been waiting for 20 minutes._',
            'For an activity that **recently stopped** but has visible results: _You\'re out of breath — have you been running?_',
            'Use with **for** (duration) and **since** (starting point): _She\'s been working here **since** 2019._',
            'Compare: _I\'ve been reading your book_ (still reading / recently stopped) vs _I\'ve read your book_ (finished)',
            'Some verbs don\'t take continuous: know, like, believe → use **present perfect simple** only'
        ],
        examples: [
            { text: "Your eyes are red. **Have** you **been crying**?", correct: true },
            { text: "I **'ve been studying** English for three years.", correct: true },
            { text: "It **'s been raining** all morning — the garden is flooded.", correct: true },
            { text: "She **'s been working** too hard recently. She needs a holiday.", correct: true },
            { text: "~~I've been knowing him for years.~~ → I **'ve known** him for years.", correct: false, note: "'know' is a state verb — use present perfect simple" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'You look tired. _____ you _____ (work) all day?',
                answer: "Have ... been working",
                options: ["Have ... been working", "Did ... work", "Are ... working", "Were ... working"]
            },
            {
                type: 'fill',
                question: 'How long _____ it _____ (rain)? The streets are flooded!',
                answer: "has ... been raining",
                options: ["has ... been raining", "did ... rain", "is ... raining", "was ... raining"]
            },
            {
                type: 'fill',
                question: 'They _____ (live) in that house since they got married.',
                answer: "have been living",
                options: ["have been living", "are living", "lived", "live"]
            },
            {
                type: 'fill',
                question: 'I _____ (wait) for the bus for 30 minutes. Where is it?',
                answer: "have been waiting",
                options: ["have been waiting", "wait", "am waiting", "waited"]
            },
            {
                type: 'correct',
                question: 'Which sentence correctly emphasises a visible result of a recent action?',
                answer: "Your hands are dirty — have you been gardening?",
                options: ["Your hands are dirty — have you been gardening?", "Your hands are dirty — did you garden?", "Your hands are dirty — do you garden?"]
            },
            {
                type: 'correct',
                question: 'Which is correct? ("know" is a state verb)',
                answer: "I've known her since we were children.",
                options: ["I've known her since we were children.", "I've been knowing her since we were children.", "I know her since we were children."]
            }
        ]
    },
    10: {
        id: 10,
        title: 'Present perfect continuous and simple',
        category: 'present-perfect',
        explanation: `This unit helps you choose between **present perfect continuous** (I have been doing) and **present perfect simple** (I have done). This is crucial for TOEIC!`,
        rules: [
            '**Continuous** emphasises the **activity/duration**: _I\'ve been reading your report._ (focus: the activity of reading)',
            '**Simple** emphasises the **result/completion**: _I\'ve read your report._ (focus: I finished it)',
            '**How long…?** → usually continuous: _How long have you been learning English?_',
            '**How many/much…?** → always simple: _How many pages have you read?_',
            'Continuous: activity may OR may not be complete. Simple: the action is complete.',
            'With **live** and **work**, both are often possible with the same meaning: _I\'ve lived / I\'ve been living here for 10 years._'
        ],
        examples: [
            { text: "I **'ve been writing** emails all morning. (focus: activity, maybe not finished)", correct: true },
            { text: "I **'ve written** 15 emails today. (focus: the result — 15 emails!)", correct: true },
            { text: "How long **have** you **been waiting**? (focus: duration)", correct: true },
            { text: "How many countries **have** you **visited**? (quantity → simple)", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'My hands are dirty. I _____ (repair) the car.',
                answer: "have been repairing",
                options: ["have been repairing", "have repaired", "repaired", "am repairing"]
            },
            {
                type: 'fill',
                question: 'How many cups of coffee _____ you _____ (drink) today?',
                answer: "have ... drunk",
                options: ["have ... drunk", "have ... been drinking", "did ... drink", "are ... drinking"]
            },
            {
                type: 'fill',
                question: 'I _____ (read) this book for two weeks and I\'m still only on chapter 3.',
                answer: "have been reading",
                options: ["have been reading", "have read", "read", "am reading"]
            },
            {
                type: 'fill',
                question: 'She _____ (write) three reports this week. She\'s very productive.',
                answer: "has written",
                options: ["has written", "has been writing", "wrote", "is writing"]
            },
            {
                type: 'correct',
                question: 'Which sentence focuses on HOW LONG?',
                answer: "She's been working here since January.",
                options: ["She's been working here since January.", "She's worked on three projects.", "She worked here last year."]
            },
            {
                type: 'correct',
                question: 'Which answer is correct with "How many…?"',
                answer: "How many books have you read this year?",
                options: ["How many books have you read this year?", "How many books have you been reading this year?", "How many books did you been reading?"]
            }
        ]
    },
    11: {
        id: 11,
        title: 'How long have you (been) …?',
        category: 'present-perfect',
        explanation: `We use the present perfect (simple or continuous) with **How long…?** to ask about situations that started in the past and are still true NOW. This is one of the most common patterns in English.`,
        rules: [
            '**How long have you been…?** asks about duration from past to now',
            'For **actions in progress**: _How long have you been waiting?_ → present perfect continuous',
            'For **states**: _How long have you known her?_ → present perfect simple (state verbs)',
            '**I\'ve known / I\'ve had / I\'ve been** → state verbs always use simple',
            'Don\'t confuse: _How long have you been married?_ (still married now) vs _How long were you married?_ (now divorced)',
            'The answer usually uses **for** or **since**: _I\'ve been here **for** two hours / **since** 3 o\'clock._'
        ],
        examples: [
            { text: "**How long have** you **been learning** English? — For three years.", correct: true },
            { text: "**How long have** you **known** Bob? — Since we were at university.", correct: true },
            { text: "**How long have** you **had** that jacket? — I've had it for ages.", correct: true },
            { text: "~~How long do you live here?~~ → How long **have** you **lived** here?", correct: false, note: "Use present perfect for 'past to now' duration" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'How long _____ you _____ (know) each other?',
                answer: "have ... known",
                options: ["have ... known", "have ... been knowing", "do ... know", "did ... know"]
            },
            {
                type: 'fill',
                question: 'How long _____ she _____ (work) for this company?',
                answer: "has ... been working",
                options: ["has ... been working", "does ... work", "is ... working", "did ... work"]
            },
            {
                type: 'fill',
                question: 'I _____ (have) this car for five years now.',
                answer: "have had",
                options: ["have had", "have been having", "had", "am having"]
            },
            {
                type: 'fill',
                question: 'She _____ (be) a teacher since 2015.',
                answer: "has been",
                options: ["has been", "has been being", "is", "was"]
            },
            {
                type: 'correct',
                question: 'Which question is correct for someone who is still living in Tokyo?',
                answer: "How long have you been living in Tokyo?",
                options: ["How long have you been living in Tokyo?", "How long do you live in Tokyo?", "How long did you live in Tokyo?"]
            }
        ]
    },
    12: {
        id: 12,
        title: 'For and since — When…? and How long…?',
        category: 'present-perfect',
        explanation: `**For** and **since** are used with the present perfect to talk about duration. Getting them right is essential for TOEIC Part 5 and Part 6.`,
        rules: [
            '**For** + a period of time: _for two hours, for six months, for a long time, for ages_',
            '**Since** + a point in time: _since Monday, since 2010, since I was a child, since breakfast_',
            '**When…?** + past simple: _When did you start learning English?_',
            '**How long…?** + present perfect: _How long have you been learning English?_',
            'Don\'t confuse **for** and **during**: _I waited **for** two hours_ (how long) vs _I fell asleep **during** the film_ (when)',
            'Don\'t confuse **for** and **ago**: _I arrived **three days ago**_ (past simple) vs _I\'ve been here **for** three days_ (present perfect)'
        ],
        examples: [
            { text: "I've been waiting **for** 30 minutes.", correct: true },
            { text: "She has worked here **since** April.", correct: true },
            { text: "We've known each other **for** ten years — **since** 2016.", correct: true },
            { text: "~~I am here since 3 o'clock.~~ → I **have been** here since 3 o'clock.", correct: false, note: "Use present perfect with 'since', not present simple" },
            { text: "~~I have been here for last Monday.~~ → I have been here **since** last Monday.", correct: false, note: "'Last Monday' is a point in time → use 'since'" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'She has been a manager _____ January.',
                answer: "since",
                options: ["since", "for", "during", "ago"]
            },
            {
                type: 'fill',
                question: 'They have lived in this city _____ over 20 years.',
                answer: "for",
                options: ["for", "since", "during", "ago"]
            },
            {
                type: 'fill',
                question: 'I haven\'t seen her _____ the conference last month.',
                answer: "since",
                options: ["since", "for", "from", "during"]
            },
            {
                type: 'fill',
                question: '_____ did you start working here?',
                answer: "When",
                options: ["When", "How long", "Since when", "For when"]
            },
            {
                type: 'fill',
                question: '_____ have you been waiting for the delivery?',
                answer: "How long",
                options: ["How long", "When", "Since", "For"]
            },
            {
                type: 'correct',
                question: 'Which sentence is correct?',
                answer: "I've known him since we were in college.",
                options: ["I've known him since we were in college.", "I've known him for we were in college.", "I know him since we were in college."]
            }
        ]
    },
    13: {
        id: 13,
        title: 'Present perfect and past 1',
        category: 'present-perfect',
        explanation: `Choosing between the **present perfect** and the **past simple** is one of the most tested grammar points on the TOEIC. The key: does the time period connect to NOW?`,
        rules: [
            '**Present perfect** = past action with a connection to NOW: _I\'ve lost my keys._ (I still don\'t have them)',
            '**Past simple** = past action with NO connection to now: _I lost my keys yesterday._ (specific past time)',
            'Present perfect with **today / this week / this year** (the time period is NOT finished): _I\'ve had three meetings today._',
            'Past simple with **yesterday / last week / in 2020 / ago** (finished time): _I had three meetings yesterday._',
            '**News** → present perfect first, then past simple for details: _There **has been** an accident. It **happened** on Main Street._',
            '**been** vs **gone**: _He\'s **been** to France_ (went and came back) vs _He\'s **gone** to France_ (he\'s still there now)'
        ],
        examples: [
            { text: "**Have** you **seen** the new product brochure? (at any time — connected to now)", correct: true },
            { text: "I **saw** it yesterday at the meeting. (specific past time)", correct: true },
            { text: "The company **has opened** two new branches this year. (this year is NOT finished)", correct: true },
            { text: "The company **opened** two new branches last year. (last year IS finished)", correct: true },
            { text: "~~I have seen him yesterday.~~ → I **saw** him yesterday.", correct: false, note: "'yesterday' = specific past time → past simple required" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I _____ (not/see) Tom today. Is he at work?',
                answer: "haven't seen",
                options: ["haven't seen", "didn't see", "don't see", "am not seeing"]
            },
            {
                type: 'fill',
                question: 'We _____ (finish) the project last Friday.',
                answer: "finished",
                options: ["finished", "have finished", "have been finishing", "are finishing"]
            },
            {
                type: 'fill',
                question: 'The price of oil _____ (rise) significantly this month.',
                answer: "has risen",
                options: ["has risen", "rose", "rises", "is rising"]
            },
            {
                type: 'fill',
                question: '_____ you ever _____ (visit) Japan?',
                answer: "Have ... visited",
                options: ["Have ... visited", "Did ... visit", "Do ... visit", "Were ... visiting"]
            },
            {
                type: 'fill',
                question: 'She isn\'t here. She _____ (go) to the bank.',
                answer: "has gone",
                options: ["has gone", "has been", "went", "goes"]
            },
            {
                type: 'correct',
                question: 'Which sentence correctly uses the present perfect for unfinished time?',
                answer: "Sales have increased by 15% this quarter.",
                options: ["Sales have increased by 15% this quarter.", "Sales increased by 15% this quarter.", "Sales increase by 15% this quarter."]
            }
        ]
    },
    14: {
        id: 14,
        title: 'Present perfect and past 2',
        category: 'present-perfect',
        explanation: `More practice distinguishing present perfect from past simple — this time focusing on **experiences**, **conversations that shift tenses**, and common TOEIC traps.`,
        rules: [
            'For **general experience** (no specific time): _**Have** you **been** to Paris?_ → present perfect',
            'For **specific details about that experience**: _Yes, I **went** there in 2019._ → past simple',
            'A conversation often **starts** with present perfect, then **switches** to past simple for details',
            '**How long…?** about a current situation → present perfect: _How long **have** you **worked** here?_',
            '**How long…?** about a past situation (now finished) → past simple: _How long **did** you **work** there?_',
            'Time expressions that ALWAYS take past simple: yesterday, ago, last (week/year), when I was…, in (2005/June)'
        ],
        examples: [
            { text: "\"**Have** you **read** this book?\" — \"Yes, I **read** it last summer. It **was** excellent.\"", correct: true },
            { text: "I **'ve worked** here for five years. (I still work here)", correct: true },
            { text: "I **worked** there for five years. (I don't work there anymore)", correct: true },
            { text: "\"I **'ve bought** a new laptop.\" — \"Oh nice! Where **did** you **buy** it?\"", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: '"_____ you ever _____ (try) Thai food?" "Yes, I _____ (have) some last week."',
                answer: "Have ... tried ... had",
                options: ["Have ... tried ... had", "Did ... try ... had", "Have ... tried ... have had", "Do ... try ... have"]
            },
            {
                type: 'fill',
                question: 'I _____ (work) for IBM for six years, then I left and joined Google.',
                answer: "worked",
                options: ["worked", "have worked", "have been working", "was working"]
            },
            {
                type: 'fill',
                question: 'How long _____ you _____ (be) in your current position?',
                answer: "have ... been",
                options: ["have ... been", "did ... be", "are ... being", "were ... being"]
            },
            {
                type: 'fill',
                question: '"I _____ (lose) my badge." "When _____ you last _____ (have) it?"',
                answer: "have lost ... did ... have",
                options: ["have lost ... did ... have", "lost ... did ... have", "have lost ... have ... had", "lost ... have ... had"]
            },
            {
                type: 'correct',
                question: 'Which conversation correctly switches from present perfect to past simple?',
                answer: "\"I've met the new CEO.\" \"Really? When did you meet her?\"",
                options: ["\"I've met the new CEO.\" \"Really? When did you meet her?\"", "\"I've met the new CEO.\" \"Really? When have you met her?\"", "\"I met the new CEO.\" \"Really? When have you met her?\""]
            }
        ]
    },
    15: {
        id: 15,
        title: 'Past perfect (I had done)',
        category: 'present-perfect',
        explanation: `The past perfect describes an action that happened **before another past action**. It's the "past of the past". Very useful for telling stories and explaining sequences of events.`,
        rules: [
            'Form: **had + past participle** (same form for all subjects)',
            'Use to show that something happened **BEFORE** another past event: _When I arrived, the meeting **had already started**._',
            'Often used with **when, by the time, before, after, already, just, never**: _By the time we got there, the film **had finished**._',
            'Compare: _I wasn\'t hungry because I **had eaten** lunch._ (eating = first, not hungry = second)',
            'In a time sequence already clear from context, past simple is often enough: _I got up, **had** breakfast, and **left** for work._',
            'Negative: **had not (hadn\'t) + past participle**: _She **hadn\'t seen** the email before the meeting._'
        ],
        examples: [
            { text: "When I arrived at the party, most people **had already left**.", correct: true },
            { text: "She didn't want to go to the cinema because she **had seen** the film before.", correct: true },
            { text: "I **had never flown** before my trip to New York last year.", correct: true },
            { text: "By the time the ambulance arrived, the patient **had recovered**.", correct: true },
            { text: "~~If I had knew about the problem…~~ → If I **had known** about the problem…", correct: false, note: "Always use past participle after 'had'" }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'When I got to the station, the train _____ (already/leave).',
                answer: "had already left",
                options: ["had already left", "already left", "has already left", "already leaves"]
            },
            {
                type: 'fill',
                question: 'She _____ (never/visit) a foreign country before her first business trip.',
                answer: "had never visited",
                options: ["had never visited", "never visited", "has never visited", "never visits"]
            },
            {
                type: 'fill',
                question: 'By the time they arrived, we _____ (finish) the presentation.',
                answer: "had finished",
                options: ["had finished", "finished", "have finished", "were finishing"]
            },
            {
                type: 'fill',
                question: 'I felt ill because I _____ (eat) too much at lunch.',
                answer: "had eaten",
                options: ["had eaten", "ate", "have eaten", "was eating"]
            },
            {
                type: 'fill',
                question: 'The company went bankrupt because it _____ (not/adapt) to the new market.',
                answer: "hadn't adapted",
                options: ["hadn't adapted", "didn't adapt", "hasn't adapted", "wasn't adapting"]
            },
            {
                type: 'correct',
                question: 'Which sentence correctly shows that action 1 happened before action 2?',
                answer: "I couldn't enter the building because I had forgotten my access card.",
                options: ["I couldn't enter the building because I had forgotten my access card.", "I couldn't enter the building because I forgot my access card.", "I can't enter the building because I had forgotten my access card."]
            }
        ]
    },
    16: {
        id: 16,
        title: 'Past perfect continuous (I had been doing)',
        category: 'present-perfect',
        explanation: `The past perfect continuous describes an activity that was **in progress for a period** before another past event. It emphasises the **duration** of the earlier action.`,
        rules: [
            'Form: **had been + verb-ing**',
            'Use for an activity in progress for a time **before something else** happened: _When he retired, he **had been working** for the company for 35 years._',
            'Emphasises **how long** the first action lasted: _She was tired because she **had been studying** all night._',
            'The result or effect of the action was visible: _The ground was wet. It **had been raining**._',
            'Compare with past perfect simple: _I **had been running** (focus on the activity) vs I **had run** 10 km (focus on completion/quantity)_',
            'State verbs use past perfect simple: _He **had known** her for years (NOT: had been knowing)_'
        ],
        examples: [
            { text: "I **had been waiting** for an hour before the bus finally came.", correct: true },
            { text: "He was out of breath — he **had been running**.", correct: true },
            { text: "She got the promotion because she **had been performing** exceptionally well.", correct: true },
            { text: "They were exhausted. They **had been travelling** for 18 hours.", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'She was very tired because she _____ (work) since 6 a.m.',
                answer: "had been working",
                options: ["had been working", "has been working", "was working", "worked"]
            },
            {
                type: 'fill',
                question: 'The streets were wet. It _____ (rain) all night.',
                answer: "had been raining",
                options: ["had been raining", "has been raining", "rained", "was raining"]
            },
            {
                type: 'fill',
                question: 'When the factory closed, he _____ (work) there for 20 years.',
                answer: "had been working",
                options: ["had been working", "worked", "has been working", "was working"]
            },
            {
                type: 'fill',
                question: 'They _____ (negotiate) for months before they finally reached an agreement.',
                answer: "had been negotiating",
                options: ["had been negotiating", "negotiated", "have been negotiating", "were negotiating"]
            },
            {
                type: 'correct',
                question: 'Which sentence correctly uses the past perfect continuous for duration?',
                answer: "By the time I was promoted, I had been working there for 10 years.",
                options: ["By the time I was promoted, I had been working there for 10 years.", "By the time I was promoted, I worked there for 10 years.", "By the time I was promoted, I have been working there for 10 years."]
            }
        ]
    },
    17: {
        id: 17,
        title: 'Have and have got',
        category: 'present-perfect',
        explanation: `**Have** and **have got** both express **possession**, but they work differently grammatically. Understanding this distinction helps you pick the right answer on the TOEIC.`,
        rules: [
            '**I have** = **I\'ve got** (same meaning for possession): _I have a car = I\'ve got a car._',
            '**Have** uses do/does in questions and negatives: _**Do** you **have** a passport? / I **don\'t have** a car._',
            '**Have got** inverts in questions and uses not: _**Have** you **got** a passport? / I **haven\'t got** a car._',
            'For **actions/experiences** → only **have** (NOT have got): _I **have** breakfast at 8._ / _She **has** a shower every morning._',
            '**Have got** is more common in British English. **Have** is more common in American English.',
            'In the past, **have got** is not used → always **had**: _I **had** a blue car when I was young._ (NOT: I had got)'
        ],
        examples: [
            { text: "I **have** two brothers. = I **'ve got** two brothers.", correct: true },
            { text: "**Do** you **have** any questions? = **Have** you **got** any questions?", correct: true },
            { text: "I usually **have** lunch at 1 p.m. (action — NOT: I've got lunch)", correct: true },
            { text: "She **has** a bath every evening. (action, NOT: She's got a bath)", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: '_____ you _____ a meeting at 3 o\'clock?',
                answer: "Do ... have",
                options: ["Do ... have", "Have ... got", "Are ... having", "Did ... have"]
            },
            {
                type: 'fill',
                question: 'She _____ (not/have) any experience in marketing.',
                answer: "doesn't have",
                options: ["doesn't have", "hasn't got", "haven't got", "don't have"]
            },
            {
                type: 'fill',
                question: 'I _____ a terrible headache. Can I leave early?',
                answer: "have",
                options: ["have", "am having", "had", "have had"]
            },
            {
                type: 'correct',
                question: 'Which sentence incorrectly uses "have got" for an action?',
                answer: "I've got breakfast at 7 every morning.",
                options: ["I've got breakfast at 7 every morning.", "I've got a new laptop.", "I've got two sisters."]
            },
            {
                type: 'correct',
                question: 'Which two sentences mean the same thing?',
                answer: "\"I have a car\" and \"I've got a car\"",
                options: ["\"I have a car\" and \"I've got a car\"", "\"I have lunch\" and \"I've got lunch\"", "\"I had a car\" and \"I'd got a car\""]
            }
        ]
    },
    18: {
        id: 18,
        title: 'Used to (do)',
        category: 'present-perfect',
        explanation: `**Used to** describes past habits or states that are **no longer true**. It's a very useful structure for talking about changes in life and comparing past and present.`,
        rules: [
            '**Used to + verb** = a past habit or state that is no longer true: _I **used to smoke**, but I gave up._',
            'Negative: **didn\'t use to**: _He **didn\'t use to** like coffee, but now he drinks it every day._',
            'Question: **Did … use to…?**: _**Did** you **use to** live in Paris?_',
            'For **past states** (not actions): _This building **used to be** a cinema._ (It isn\'t anymore)',
            'Don\'t confuse: **used to do** (past habit) vs **be used to doing** (= be accustomed to) vs **get used to** (= become accustomed to)',
            '**would** can also describe past habits (actions only, NOT states): _We **would go** to the beach every summer._'
        ],
        examples: [
            { text: "I **used to work** in a factory, but now I work in an office.", correct: true },
            { text: "**Did** you **use to** play any musical instruments?", correct: true },
            { text: "She **didn't use to** like vegetables, but now she loves them.", correct: true },
            { text: "~~I used to be knowing him.~~ → I **used to know** him.", correct: false, note: "Used to + base verb, not continuous" },
            { text: "Be careful: _I **am used to** working hard._ = I am accustomed to it (NOT a past habit)", correct: true }
        ],
        exercises: [
            {
                type: 'fill',
                question: 'I _____ (use/play) tennis a lot, but now I prefer swimming.',
                answer: "used to play",
                options: ["used to play", "use to play", "am used to playing", "was used to play"]
            },
            {
                type: 'fill',
                question: 'This area _____ (use/be) very quiet, but now it\'s very busy.',
                answer: "used to be",
                options: ["used to be", "use to be", "was used to be", "is used to"]
            },
            {
                type: 'fill',
                question: '_____ you _____ (use/live) in the city centre?',
                answer: "Did ... use to live",
                options: ["Did ... use to live", "Did ... used to live", "Have ... used to live", "Do ... use to live"]
            },
            {
                type: 'fill',
                question: 'She _____ (not/use/like) her job, but things have improved.',
                answer: "didn't use to like",
                options: ["didn't use to like", "didn't used to like", "wasn't used to like", "hasn't used to like"]
            },
            {
                type: 'fill',
                question: 'I\'ve lived in England for 3 years now, so I _____ (be used to/drive) on the left.',
                answer: "am used to driving",
                options: ["am used to driving", "used to drive", "am used to drive", "get used to drive"]
            },
            {
                type: 'correct',
                question: 'Which sentence describes a past state that is NO LONGER true?',
                answer: "This building used to be a hospital.",
                options: ["This building used to be a hospital.", "This building is used to be a hospital.", "This building was used to being a hospital."]
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

// Merge ALL rich French content into grammarUnits — overrides old stub content
const allLessonSources = [
    grammarLessonsFR,          // Units 1-18
    grammarLessonsFuture,      // Units 19-25
    grammarLessonsModals,      // Units 26-37
    grammarLessonsConditionals,// Units 38-41
    grammarLessonsPassive,     // Units 42-46
    grammarLessonsReported,    // Units 47-48
    grammarLessonsQuestions,   // Units 49-52
    grammarLessonsIngTo,       // Units 53-68
    grammarLessonsArticlesNouns,// Units 69-81
    grammarLessonsPronouns,    // Units 82-97
    grammarLessonsAdjAdv,      // Units 98-115
    grammarLessonsConjPrep,    // Units 116-130
    grammarLessonsPhrasalVerbs,// Units 131-145
];

allLessonSources.forEach(source => {
    Object.entries(source).forEach(([id, unit]) => {
        grammarUnits[Number(id)] = unit;
    });
});

// Normalize a unit to the new structure (for backward compat with old-format units)
export function normalizeUnit(unit) {
    if (!unit) return null;
    // Already in new format (has lesson-level tips or evaluation)
    if (unit.tips || unit.evaluation) return unit;
    // Convert old format: add empty tips/evaluation, tag exercises as 'medium'
    return {
        ...unit,
        tips: [],
        evaluation: [],
        exercises: (unit.exercises || []).map(ex => ({
            ...ex,
            difficulty: ex.difficulty || 'medium',
        })),
    };
}

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
