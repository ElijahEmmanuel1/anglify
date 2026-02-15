// ============================================
// TOEIC Prep Data — Based on Le TOEIC en 49 étapes (Julie Valette)
// ============================================

export const toeicParts = [
    {
        id: 'part1',
        number: 'I',
        title: 'Photographs',
        subtitle: 'Listening — Photos',
        type: 'listening',
        steps: [1, 2, 3, 4, 5, 6, 7, 8],
        description: 'Listen to descriptions of photographs and choose the correct one.',
        tips: 'Focus on the main action and subjects in each photo. Watch out for similar-sounding words!'
    },
    {
        id: 'part2',
        number: 'II',
        title: 'Questions & Answers',
        subtitle: 'Listening — Q&A',
        type: 'listening',
        steps: [9, 10, 11, 12, 13, 14, 15, 16],
        description: 'Listen to questions and choose the best response.',
        tips: 'Identify the question word (Who, What, When, Where, Why, How) immediately.'
    },
    {
        id: 'part3',
        number: 'III',
        title: 'Conversations',
        subtitle: 'Listening — Dialogues',
        type: 'listening',
        steps: [17, 18, 19, 20, 21, 22],
        description: 'Listen to conversations and answer questions about them.',
        tips: 'Read the questions BEFORE the audio plays. Focus on key details.'
    },
    {
        id: 'part4',
        number: 'IV',
        title: 'Talks',
        subtitle: 'Listening — Monologues',
        type: 'listening',
        steps: [23, 24, 25, 26, 27],
        description: 'Listen to talks (announcements, messages) and answer questions.',
        tips: 'Identify the type of talk (announcement, voicemail, news) early on.'
    },
    {
        id: 'part5-6',
        number: 'V-VI',
        title: 'Incomplete Sentences & Texts',
        subtitle: 'Reading — Grammar & Vocabulary',
        type: 'reading',
        steps: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
        description: 'Complete sentences and texts with the correct word or phrase.',
        tips: 'Look at the words around the blank. Identify if you need a noun, verb, adjective, or adverb.'
    },
    {
        id: 'part7',
        number: 'VII',
        title: 'Reading Comprehension',
        subtitle: 'Reading — Documents',
        type: 'reading',
        steps: [44, 45, 46, 47, 48],
        description: 'Read passages and answer questions about them.',
        tips: 'Use scanning technique: read questions first, then find answers in the text.'
    },
    {
        id: 'mock',
        number: '🏆',
        title: 'Full Mock Test',
        subtitle: 'Complete TOEIC Simulation',
        type: 'exam',
        steps: [49],
        description: 'Complete TOEIC mock examination under timed conditions.',
        tips: 'Simulate real test conditions: 2 hours, no breaks, no dictionary.'
    }
];

export const toeicSteps = {
    1: {
        id: 1,
        title: 'Mobiliser du vocabulaire autour d\'une photographie',
        titleEn: 'Building vocabulary around a photograph',
        part: 'part1',
        content: {
            strategy: 'Before listening, quickly identify what you see in the photo: **people** (who?), **actions** (what are they doing?), **location** (where?), **objects** (what things are visible?).',
            keyPoints: [
                'Describe people: man, woman, group, worker, customer, employee',
                'Describe actions: standing, sitting, working, talking, carrying, holding',
                'Describe locations: office, street, restaurant, factory, store',
                'Describe positions: in front of, behind, next to, between'
            ],
            vocabulary: [
                { word: 'to lean against', definition: 's\'appuyer contre', example: 'The man is leaning against the wall.' },
                { word: 'to browse', definition: 'parcourir / feuilleter', example: 'She is browsing through a magazine.' },
                { word: 'to stack', definition: 'empiler', example: 'Boxes are stacked in the corner.' },
                { word: 'to display', definition: 'exposer / afficher', example: 'Products are displayed on the shelves.' },
                { word: 'to examine', definition: 'examiner', example: 'The inspector is examining the document.' },
                { word: 'to overlook', definition: 'surplomber / donner sur', example: 'The balcony overlooks the garden.' }
            ]
        },
        exercises: [
            {
                type: 'fill',
                question: 'The man is _____ against the counter, reading a newspaper.',
                answer: 'leaning',
                options: ['leaning', 'leaving', 'lending', 'learning']
            },
            {
                type: 'fill',
                question: 'Several items are _____ on the table for customers to see.',
                answer: 'displayed',
                options: ['displayed', 'displaced', 'disposed', 'disbanded']
            },
            {
                type: 'correct',
                question: 'Which sentence best matches: A woman looking at items in a store?',
                answer: 'A woman is browsing through merchandise.',
                options: ['A woman is browsing through merchandise.', 'A woman is buying a store.', 'A woman is closing the shop.']
            }
        ]
    },
    2: {
        id: 2,
        title: 'Éviter les pièges liés à la prononciation',
        titleEn: 'Avoiding pronunciation traps',
        part: 'part1',
        content: {
            strategy: 'The TOEIC often uses words that **sound similar** but have different meanings. Train your ear to distinguish them.',
            keyPoints: [
                'Similar sounds: work/walk, right/write, hear/here, there/their/they\'re',
                'Silent letters: know (k silent), write (w silent), hour (h silent)',
                'Homophone pairs are common traps in Part I',
                'Focus on context to determine the correct word'
            ],
            vocabulary: [
                { word: 'work / walk', definition: 'travailler / marcher', example: 'She works (travaille) downtown. / She walks (marche) to work.' },
                { word: 'right / write', definition: 'droit-correct / écrire', example: 'Turn right. / Write your name.' },
                { word: 'flour / flower', definition: 'farine / fleur', example: 'We need flour for the cake. / What a beautiful flower!' },
                { word: 'wear / where', definition: 'porter / où', example: 'What should I wear? / Where is the meeting?' },
                { word: 'stationary / stationery', definition: 'immobile / papeterie', example: 'The car is stationary. / Buy some stationery.' }
            ]
        },
        exercises: [
            {
                type: 'correct',
                question: 'Which word means "to travel on foot"?',
                answer: 'walk',
                options: ['walk', 'work', 'wake', 'woke']
            },
            {
                type: 'fill',
                question: 'The employees are _____ (walking/working) in the office.',
                answer: 'working',
                options: ['working', 'walking', 'waking', 'watching']
            }
        ]
    },
    9: {
        id: 9,
        title: 'Identifier les types de phrases interrogatives',
        titleEn: 'Identifying question types',
        part: 'part2',
        content: {
            strategy: 'In Part II, you hear a question and three responses. The key is to identify the **question type** instantly.',
            keyPoints: [
                '**WH questions** (Who, What, When, Where, Why, How) → need specific info',
                '**Yes/No questions** (Do you...?, Is it...?, Can you...?) → yes/no + detail',
                '**Tag questions** (It\'s hot, isn\'t it?) → confirmation expected',
                '**Choice questions** (Tea or coffee?) → pick one option',
                'Trap: the correct answer may NOT directly answer the question (indirect responses)'
            ],
            vocabulary: [
                { word: 'How long', definition: 'combien de temps', example: 'How long does the meeting last?' },
                { word: 'How often', definition: 'à quelle fréquence', example: 'How often do you travel for work?' },
                { word: 'How far', definition: 'à quelle distance', example: 'How far is the airport?' },
                { word: 'How many / How much', definition: 'combien', example: 'How many employees work here?' },
                { word: 'What time', definition: 'à quelle heure', example: 'What time does the train leave?' }
            ]
        },
        exercises: [
            {
                type: 'correct',
                question: '"When is the deadline for the report?" — Best answer:',
                answer: 'It\'s due by Friday.',
                options: ['It\'s due by Friday.', 'Yes, I wrote the report.', 'The report is very long.']
            },
            {
                type: 'correct',
                question: '"Would you like coffee or tea?" — Best answer:',
                answer: 'Tea, please.',
                options: ['Tea, please.', 'Yes, I would.', 'No, thank you very much.']
            },
            {
                type: 'fill',
                question: '_____ does the conference start?',
                answer: 'What time',
                options: ['What time', 'How long', 'How far', 'How many']
            }
        ]
    },
    14: {
        id: 14,
        title: 'Maîtriser le lexique de la carrière et du recrutement',
        titleEn: 'Mastering career and recruitment vocabulary',
        part: 'part2',
        content: {
            strategy: 'Career and recruitment vocabulary appears frequently in ALL parts of the TOEIC.',
            keyPoints: [
                'Job search: apply for, résumé/CV, cover letter, job opening, vacancy',
                'Interview process: interview, candidate, shortlist, hire, recruit',
                'Employment: salary, benefits, promotion, raise, bonus',
                'Leaving: resign, retire, dismiss, lay off, notice period'
            ],
            vocabulary: [
                { word: 'to apply for', definition: 'postuler à', example: 'She applied for the marketing position.' },
                { word: 'résumé / CV', definition: 'curriculum vitae', example: 'Please submit your résumé by email.' },
                { word: 'job opening / vacancy', definition: 'poste à pourvoir', example: 'There are several job openings in our department.' },
                { word: 'to hire / recruit', definition: 'embaucher / recruter', example: 'We need to hire two new employees.' },
                { word: 'salary / wages', definition: 'salaire', example: 'The starting salary is $50,000 per year.' },
                { word: 'promotion', definition: 'promotion', example: 'She got a promotion to senior manager.' },
                { word: 'to resign', definition: 'démissionner', example: 'He resigned from his position last month.' },
                { word: 'benefits', definition: 'avantages sociaux', example: 'The company offers excellent benefits.' },
                { word: 'probation period', definition: 'période d\'essai', example: 'The probation period lasts three months.' },
                { word: 'performance review', definition: 'évaluation de performance', example: 'Annual performance reviews are in December.' }
            ]
        },
        exercises: [
            {
                type: 'fill',
                question: 'She decided to _____ for the position of project manager.',
                answer: 'apply',
                options: ['apply', 'resign', 'retire', 'dismiss']
            },
            {
                type: 'fill',
                question: 'After 30 years with the company, Mr. Johnson decided to _____.',
                answer: 'retire',
                options: ['retire', 'hire', 'apply', 'promote']
            },
            {
                type: 'fill',
                question: 'The company is looking to _____ three new software developers.',
                answer: 'hire',
                options: ['hire', 'fire', 'retire', 'resign']
            },
            {
                type: 'correct',
                question: 'Which word means "avantages sociaux"?',
                answer: 'benefits',
                options: ['benefits', 'salary', 'promotion', 'bonus']
            }
        ]
    },
    28: {
        id: 28,
        title: 'Apprendre à analyser les énoncés incomplets',
        titleEn: 'Learning to analyze incomplete sentences',
        part: 'part5-6',
        content: {
            strategy: 'In Parts V & VI, you must choose the correct word to complete a sentence. Analyze the **structure** before the options.',
            keyPoints: [
                'Step 1: Read the sentence and identify what\'s missing (noun? verb? adjective? adverb?)',
                'Step 2: Look at the words before and after the blank',
                'Step 3: Check agreement (singular/plural, tense)',
                'Step 4: Eliminate obviously wrong options',
                'Common patterns: article + ___ + noun = adjective needed'
            ],
            vocabulary: [
                { word: 'despite / in spite of', definition: 'malgré', example: 'Despite the rain, we went outside.' },
                { word: 'although / even though', definition: 'bien que', example: 'Although he studied hard, he failed.' },
                { word: 'therefore', definition: 'par conséquent', example: 'The road is closed; therefore, we must take a detour.' },
                { word: 'however', definition: 'cependant', example: 'The results were good. However, we can improve.' },
                { word: 'moreover / furthermore', definition: 'de plus', example: 'The product is affordable. Moreover, it\'s eco-friendly.' }
            ]
        },
        exercises: [
            {
                type: 'fill',
                question: 'The company achieved _____ results last quarter.',
                answer: 'outstanding',
                options: ['outstanding', 'outstandingly', 'outstand', 'outstandingness']
            },
            {
                type: 'fill',
                question: '_____ the economic downturn, the company reported a profit.',
                answer: 'Despite',
                options: ['Despite', 'Although', 'Because', 'Therefore']
            },
            {
                type: 'fill',
                question: 'The project was completed _____.',
                answer: 'successfully',
                options: ['successfully', 'successful', 'success', 'succeed']
            }
        ]
    },
    29: {
        id: 29,
        title: 'Connaître les préfixes et suffixes',
        titleEn: 'Knowing prefixes and suffixes',
        part: 'part5-6',
        content: {
            strategy: 'Understanding prefixes and suffixes helps you guess word meanings and choose the correct word form.',
            keyPoints: [
                '**Noun suffixes**: -tion, -ment, -ness, -ity, -ance/-ence, -er/-or',
                '**Adjective suffixes**: -ful, -less, -able/-ible, -ous, -ive, -al',
                '**Adverb suffix**: -ly',
                '**Verb suffixes**: -ize/-ise, -ify, -en',
                '**Negative prefixes**: un-, dis-, im-/in-/ir-/il-, mis-'
            ],
            vocabulary: [
                { word: '-tion / -sion', definition: '→ nom', example: 'inform → information, decide → decision' },
                { word: '-ment', definition: '→ nom', example: 'develop → development, manage → management' },
                { word: '-able / -ible', definition: '→ adjectif', example: 'accept → acceptable, access → accessible' },
                { word: '-ful / -less', definition: '→ adjectif (avec/sans)', example: 'care → careful / careless' },
                { word: 'un- / dis-', definition: '→ négatif', example: 'happy → unhappy, agree → disagree' },
                { word: '-ly', definition: '→ adverbe', example: 'quick → quickly, careful → carefully' }
            ]
        },
        exercises: [
            {
                type: 'fill',
                question: 'The new policy has been very _____ (effect).',
                answer: 'effective',
                options: ['effective', 'effect', 'effectively', 'effectiveness']
            },
            {
                type: 'fill',
                question: 'We need to _____ (modern) our IT infrastructure.',
                answer: 'modernize',
                options: ['modernize', 'modern', 'modernly', 'modernization']
            },
            {
                type: 'fill',
                question: 'Her _____ (manage) skills are excellent.',
                answer: 'management',
                options: ['management', 'manage', 'managing', 'managerial']
            },
            {
                type: 'correct',
                question: 'What is the adjective form of "care"?',
                answer: 'careful',
                options: ['careful', 'caring', 'careness', 'carefully']
            }
        ]
    },
    44: {
        id: 44,
        title: 'Se familiariser avec les types de documents',
        titleEn: 'Getting familiar with document types',
        part: 'part7',
        content: {
            strategy: 'Part VII presents various document types. Knowing them helps you read faster and find information more efficiently.',
            keyPoints: [
                '**Emails/Letters**: look for sender, recipient, purpose, action required',
                '**Advertisements**: product/service, features, contact info, special offers',
                '**Articles/Reports**: main topic, key findings, statistics',
                '**Notices/Announcements**: who, what, when, where, why',
                '**Forms/Tables**: column headers tell you what info to look for',
                '**Text message chains**: follow the conversation flow'
            ],
            vocabulary: [
                { word: 'regarding / concerning', definition: 'concernant', example: 'I am writing regarding your application.' },
                { word: 'enclosed / attached', definition: 'ci-joint', example: 'Please find the documents enclosed.' },
                { word: 'deadline', definition: 'date limite', example: 'The deadline for submissions is March 15.' },
                { word: 'complimentary', definition: 'gratuit / offert', example: 'We offer complimentary breakfast.' },
                { word: 'inquiry', definition: 'demande de renseignements', example: 'Thank you for your inquiry about our services.' },
                { word: 'to reschedule', definition: 'reporter / reprogrammer', example: 'We need to reschedule the meeting to Thursday.' }
            ]
        },
        exercises: [
            {
                type: 'correct',
                question: '"Please find attached the quarterly report." — This is from:',
                answer: 'An email',
                options: ['An email', 'A newspaper article', 'An advertisement', 'A notice board']
            },
            {
                type: 'fill',
                question: 'We would like to _____ the meeting to next Monday.',
                answer: 'reschedule',
                options: ['reschedule', 'cancel', 'apply', 'regarding']
            },
            {
                type: 'fill',
                question: 'All hotel guests receive a _____ breakfast.',
                answer: 'complimentary',
                options: ['complimentary', 'complementary', 'complete', 'complicated']
            }
        ]
    }
};

export function getStepsByPart(partId) {
    const part = toeicParts.find(p => p.id === partId);
    if (!part) return [];
    return part.steps.map(id => toeicSteps[id]).filter(Boolean);
}
