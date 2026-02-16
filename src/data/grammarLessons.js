// ============================================
// Grammar Lessons — French explanations for French-speaking learners
// Units 1-18: Present & Past + Present Perfect & Past
// Structure: lesson (cours) / exercises (exercices) / evaluation (évaluation)
// Difficulty: easy → medium → hard
// ============================================

export const grammarLessonsFR = {

    // ─────────────────────────────────────────────
    // UNIT 1 — Present continuous (I am doing)
    // ─────────────────────────────────────────────
    1: {
        id: 1,
        title: 'Present continuous (I am doing)',
        category: 'present-past',
        explanation: `🇫🇷 <b>Le Present Continuous</b> décrit une action <b>en cours au moment où l'on parle</b>. En français, on utilise « être en train de + infinitif » : <i>Je suis en train de manger</i> = <i>I am eating</i>.<br><br>
⚠️ <b>Piège pour les francophones</b> : en français, « je mange » peut signifier une habitude OU une action en cours. En anglais, il FAUT choisir :<br>
• <b>I eat</b> = habitude (tous les jours)<br>
• <b>I am eating</b> = en ce moment précis<br><br>
📐 <b>Formation</b> : sujet + <b>am / is / are</b> + verbe<b>-ing</b><br>
• I <b>am working</b> — She <b>is reading</b> — They <b>are playing</b>`,

        rules: [
            '📐 Formation : **sujet + am/is/are + verbe-ing** → _I am working, she is reading, they are playing_',
            '🔵 Action **en cours maintenant** : _I\'m studying for the TOEIC right now._ (Je suis en train d\'étudier pour le TOEIC.)',
            '🔵 Situation **temporaire** : _She\'s staying with friends this week._ (Elle loge chez des amis cette semaine — c\'est temporaire.)',
            '🔵 **Changement en cours** : _The population is increasing._ (La population augmente — tendance actuelle.)',
            '🔵 Habitude **agaçante** avec **always** : _He\'s always losing his keys!_ (Il perd toujours ses clés ! — ça m\'énerve)',
            '🔴 **Verbes d\'état** = PAS de continuous : know, like, want, believe, belong, understand, need, prefer, love, hate → _I **know** the answer_ (PAS : ~~I am knowing~~)'
        ],

        examples: [
            { text: "I **am working** right now. Please don't disturb me.", fr: "Je suis en train de travailler. Ne me dérange pas.", correct: true },
            { text: "The weather **is getting** warmer these days.", fr: "Le temps se réchauffe ces derniers temps.", correct: true },
            { text: "She **is living** in London temporarily.", fr: "Elle habite à Londres temporairement.", correct: true },
            { text: "He **is always complaining**!", fr: "Il se plaint tout le temps ! (habitude agaçante)", correct: true },
            { text: "~~I am knowing~~ the answer. → I **know** the answer.", fr: "Je connais la réponse. (know = verbe d'état → pas de -ing)", correct: false, note: "'know' est un verbe d'état — jamais de continuous !" }
        ],

        tips: [
            "🇫🇷 Pensez à « être en train de » : chaque fois que vous diriez « je suis en train de… » en français, utilisez le present continuous en anglais.",
            "⚠️ Les verbes d'état (know, like, want, believe, understand, need, prefer, love, hate) ne prennent JAMAIS le -ing. Ce sont des états, pas des actions.",
            "💡 Astuce : si vous pouvez répondre à « What are you doing RIGHT NOW? », c'est du present continuous."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'Please be quiet. I _____ (try) to concentrate.', answer: "am trying", options: ["am trying", "try", "tried", "have tried"], hint: "Action en cours maintenant → am/is/are + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'Look! It _____ (snow) outside.', answer: "is snowing", options: ["is snowing", "snows", "snowed", "has snowed"], hint: "On regarde par la fenêtre → action en cours" },
            { type: 'fill', difficulty: 'easy', question: '"Where\'s Sarah?" "She _____ (have) a shower."', answer: "is having", options: ["is having", "has", "had", "have"], hint: "Prendre une douche = action en cours" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'The number of people learning English _____ (grow) every year.', answer: "is growing", options: ["is growing", "grows", "grew", "has grown"], hint: "Tendance qui évolue → continuous" },
            { type: 'fill', difficulty: 'medium', question: 'You _____ (always/leave) your dirty socks on the floor!', answer: "are always leaving", options: ["are always leaving", "always leave", "have always left", "always are leaving"], hint: "Habitude agaçante → always + continuous" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I'm looking for my keys.", options: ["I'm looking for my keys.", "I look for my keys right now.", "I looking for my keys."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'I _____ (think) about changing my job. (= je considère)', answer: "am thinking", options: ["am thinking", "think", "thought", "have thought"], hint: "think about = considérer (action) → continuous possible" },
            { type: 'correct', difficulty: 'hard', question: 'Laquelle de ces phrases utilise correctement un verbe d\'état ?', answer: "I don't believe this story.", options: ["I don't believe this story.", "I am not believing this story.", "I am don't believing this story."], hint: "believe = verbe d'état" },
            { type: 'fill', difficulty: 'hard', question: 'More and more people _____ (work) from home since the pandemic.', answer: "are working", options: ["are working", "work", "works", "have been working"], hint: "Tendance actuelle → continuous" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The company _____ (expand) into new markets this year.', answer: "is expanding", options: ["is expanding", "expands", "expanded", "has expanded"] },
            { type: 'fill', difficulty: 'hard', question: 'She _____ (be) very difficult today. She\'s usually so nice.', answer: "is being", options: ["is being", "is", "was", "has been"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I am understanding the problem now.", options: ["I am understanding the problem now.", "I am working on the project.", "She is staying at a hotel this week."] },
            { type: 'fill', difficulty: 'hard', question: 'The cost of living _____ (rise) dramatically. We need to act now.', answer: "is rising", options: ["is rising", "rises", "rose", "has risen"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 2 — Present simple (I do)
    // ─────────────────────────────────────────────
    2: {
        id: 2,
        title: 'Present simple (I do)',
        category: 'present-past',
        explanation: `🇫🇷 <b>Le Present Simple</b> décrit des <b>habitudes</b>, des <b>vérités générales</b> et des <b>situations permanentes</b>.<br><br>
C'est l'équivalent du présent français pour les choses qui sont <b>toujours vraies</b> ou qui se répètent :<br>
• <i>Je travaille dans une banque</i> = <i>I work in a bank</i><br>
• <i>L'eau bout à 100°C</i> = <i>Water boils at 100°C</i><br><br>
⚠️ <b>Attention au -s</b> à la 3ème personne : He work<b>s</b>, She speak<b>s</b>, It cost<b>s</b><br>
⚠️ <b>Négation et question</b> : on utilise <b>do/does</b>, PAS de -s au verbe → <i>She <b>doesn't</b> like</i> (pas : ~~She doesn't likes~~)`,

        rules: [
            '📐 Formation : **sujet + verbe de base** (ajouter **-s/-es** pour he/she/it)',
            '🔵 **Habitudes et routines** : _I get up at 7 every morning._ (Je me lève à 7h tous les matins.)',
            '🔵 **Faits permanents** : _Water boils at 100°C._ (L\'eau bout à 100°C.)',
            '🔵 **Horaires et programmes** : _The train leaves at 9:30._ (Le train part à 9h30.)',
            '🔴 Négation : **don\'t / doesn\'t + verbe de base** : _She **doesn\'t** like coffee._ (Elle n\'aime pas le café.)',
            '🔴 Question : **Do / Does + sujet + verbe de base ?** : _**Do** you **speak** French?_ (Est-ce que tu parles français ?)'
        ],

        examples: [
            { text: "I **work** in a bank.", fr: "Je travaille dans une banque. (situation permanente)", correct: true },
            { text: "She **speaks** four languages.", fr: "Elle parle quatre langues.", correct: true },
            { text: "The Earth **goes** around the Sun.", fr: "La Terre tourne autour du Soleil. (fait scientifique)", correct: true },
            { text: "We **don't eat** meat. We're vegetarian.", fr: "Nous ne mangeons pas de viande. Nous sommes végétariens.", correct: true },
            { text: "~~She don't like~~ coffee. → She **doesn't like** coffee.", fr: "Erreur fréquente : doesn't (pas don't) à la 3ème personne.", correct: false, note: "He/She/It → doesn't (pas don't)" }
        ],

        tips: [
            "🇫🇷 Le present simple = votre présent français quand vous parlez d'habitudes : « Je mange à midi » = « I eat at noon ».",
            "⚠️ N'oubliez JAMAIS le -s à la 3ème personne : He works, She plays, It costs. C'est l'erreur n°1 des francophones !",
            "💡 Avec do/does dans les questions et négations, le verbe principal reste à la forme de BASE : Does she like ? (PAS : Does she likes ?)"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'She _____ (work) in a hospital. She\'s a nurse.', answer: "works", options: ["works", "is working", "work", "worked"], hint: "Situation permanente → present simple + -s" },
            { type: 'fill', difficulty: 'easy', question: 'The museum _____ (close) at 5 p.m. every day.', answer: "closes", options: ["closes", "is closing", "close", "closed"], hint: "Horaire régulier → present simple" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (not/drink) coffee. I prefer tea.', answer: "don't drink", options: ["don't drink", "am not drinking", "doesn't drink", "not drink"], hint: "I → don't (pas doesn't)" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: '_____ you _____ (speak) any foreign languages?', answer: "Do ... speak", options: ["Do ... speak", "Are ... speaking", "Does ... speak", "Did ... speak"], hint: "Question avec you → Do" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "He doesn't like cold weather.", options: ["He doesn't like cold weather.", "He don't like cold weather.", "He not likes cold weather."] },
            { type: 'fill', difficulty: 'medium', question: 'The flight _____ (depart) at 6:15 a.m. tomorrow.', answer: "departs", options: ["departs", "is departing", "will depart", "departed"], hint: "Horaire fixe/programme → present simple" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'She rarely _____ (make) mistakes in her reports.', answer: "makes", options: ["makes", "make", "is making", "made"], hint: "Adverbe de fréquence + present simple" },
            { type: 'fill', difficulty: 'hard', question: 'The contract clearly _____ (state) that payments are due on the 15th.', answer: "states", options: ["states", "is stating", "stated", "has stated"], hint: "Document officiel = fait permanent → present simple" },
            { type: 'correct', difficulty: 'hard', question: 'Toutes ces phrases sont au present simple SAUF une. Laquelle est INCORRECTE ?', answer: "The train is leaving at 8:00 according to the schedule.", options: ["The train is leaving at 8:00 according to the schedule.", "Water freezes at 0 degrees Celsius.", "She teaches English at the university."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Our company _____ (manufacture) electronic components.', answer: "manufactures", options: ["manufactures", "is manufacturing", "manufacture", "has manufactured"] },
            { type: 'fill', difficulty: 'hard', question: 'Each employee _____ (receive) a performance review every six months.', answer: "receives", options: ["receives", "receive", "is receiving", "received"] },
            { type: 'correct', difficulty: 'hard', question: 'Dans un contexte TOEIC, quelle phrase est correcte ?', answer: "The board meets every quarter to review the budget.", options: ["The board meets every quarter to review the budget.", "The board is meeting every quarter to review the budget.", "The board meet every quarter to review the budget."] },
            { type: 'fill', difficulty: 'hard', question: 'The policy _____ (not/apply) to temporary employees.', answer: "does not apply", options: ["does not apply", "is not applying", "not applies", "don't apply"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 3 — Present continuous vs Present simple 1
    // ─────────────────────────────────────────────
    3: {
        id: 3,
        title: 'Present continuous vs Present simple 1',
        category: 'present-past',
        explanation: `🇫🇷 C'est LA difficulté n°1 pour les francophones ! En français, « <i>je mange</i> » peut signifier :<br>
• une habitude → « je mange à midi » = <b>I eat</b> at noon (present simple)<br>
• une action en cours → « je mange en ce moment » = <b>I am eating</b> right now (present continuous)<br><br>
En anglais, il FAUT choisir entre les deux. La règle est simple :<br>
• <b>Present simple</b> = TOUJOURS vrai, habitude, fait permanent<br>
• <b>Present continuous</b> = EN CE MOMENT, temporaire, action en cours<br><br>
⚠️ Les <b>verbes d'état</b> (know, like, want, believe, understand, need, prefer, belong) utilisent <b>uniquement le present simple</b>, même si l'action est « maintenant ».`,

        rules: [
            '🔵 **Present continuous** = en cours / temporaire : _Tom **is reading** a book right now._ (Tom est en train de lire.)',
            '🔵 **Present simple** = toujours / permanent : _Tom **reads** a lot._ (Tom lit beaucoup — en général.)',
            '🔴 **Verbes d\'état** → toujours au present simple : know, like, want, believe, belong, understand, need, prefer, love, hate, see, hear, smell, taste (sens)',
            '🔵 Certains verbes changent de sens : _I\'m **thinking** about it_ (= je réfléchis — action) vs _I **think** it\'s good_ (= je pense que — opinion)',
            '🔵 **have** change aussi : _She\'s **having** lunch_ (= elle déjeune — action) vs _She **has** a car_ (= elle possède — état)',
            '🔵 **be** change aussi : _He **is being** very rude today_ (= il se comporte — temporaire) vs _He **is** rude_ (= il est — caractère permanent)'
        ],

        examples: [
            { text: "The water **is boiling**. Can you turn it off?", fr: "L'eau bout. Tu peux l'éteindre ? (action en cours)", correct: true },
            { text: "Water **boils** at 100 degrees Celsius.", fr: "L'eau bout à 100°C. (fait scientifique = toujours vrai)", correct: true },
            { text: "I **don't believe** you.", fr: "Je ne te crois pas. (believe = verbe d'état → simple)", correct: true },
            { text: "He **is being** very rude today.", fr: "Il se comporte de manière impolie aujourd'hui. (comportement temporaire)", correct: true },
            { text: "~~I am knowing~~ the answer. → I **know** the answer.", fr: "'know' est un verbe d'état → jamais de continuous", correct: false, note: "Erreur classique des francophones" }
        ],

        tips: [
            "🇫🇷 Posez-vous la question : « Est-ce que c'est MAINTENANT / TEMPORAIRE ? » → continuous. « Est-ce que c'est TOUJOURS VRAI / UNE HABITUDE ? » → simple.",
            "⚠️ Liste des verbes d'état à mémoriser : KNOW, LIKE, LOVE, HATE, WANT, NEED, PREFER, BELIEVE, UNDERSTAND, BELONG, SEE, HEAR. Jamais de -ing !",
            "💡 Moyen mnémotechnique : les verbes d'état décrivent ce qui se passe DANS VOTRE TÊTE (pensées, émotions, perceptions). Pas d'action physique = pas de -ing."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: '"Excuse me, _____ (you/speak) English?" "Yes, a little."', answer: "do you speak", options: ["do you speak", "are you speaking", "you speak", "you are speaking"], hint: "Capacité générale → present simple" },
            { type: 'fill', difficulty: 'easy', question: 'Where\'s Tom? He _____ (have) a shower.', answer: "is having", options: ["is having", "has", "have", "is have"], hint: "Prendre une douche = action en cours → continuous" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (not/understand) this sentence. What does it mean?', answer: "don't understand", options: ["don't understand", "am not understanding", "not understand", "doesn't understand"], hint: "understand = verbe d'état → simple" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'This soup _____ (taste) delicious! What did you put in it?', answer: "tastes", options: ["tastes", "is tasting", "tasted", "has tasted"], hint: "taste = perception/sens → verbe d'état ici" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I believe you are right.", options: ["I believe you are right.", "I am believing you are right.", "I believing you are right."] },
            { type: 'fill', difficulty: 'medium', question: 'She usually _____ (drive) to work, but today she _____ (take) the bus.', answer: "drives ... is taking", options: ["drives ... is taking", "is driving ... takes", "drives ... takes", "is driving ... is taking"], hint: "Habitude (simple) vs aujourd'hui (continuous)" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'I _____ (see) what you mean, but I _____ (see) the doctor at 3 pm today.', answer: "see ... am seeing", options: ["see ... am seeing", "am seeing ... see", "see ... see", "am seeing ... am seeing"], hint: "see = comprendre (état) vs see = consulter (action/RDV)" },
            { type: 'fill', difficulty: 'hard', question: 'The chef _____ (taste) the sauce to check if it needs more salt.', answer: "is tasting", options: ["is tasting", "tastes", "tasted", "has tasted"], hint: "taste = goûter volontairement (action) → continuous" },
            { type: 'correct', difficulty: 'hard', question: 'Les deux phrases sont possibles. Laquelle met l\'accent sur le TEMPORAIRE ?', answer: "She is living with her parents until she finds a flat.", options: ["She is living with her parents until she finds a flat.", "She lives with her parents.", "She has lived with her parents for years."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The company currently _____ (develop) a new product line.', answer: "is developing", options: ["is developing", "develops", "developed", "has developed"] },
            { type: 'fill', difficulty: 'hard', question: 'I _____ (think) this project is important, and I _____ (think) about ways to improve it.', answer: "think ... am thinking", options: ["think ... am thinking", "am thinking ... think", "think ... think", "am thinking ... am thinking"] },
            { type: 'correct', difficulty: 'hard', question: 'Dans une réunion TOEIC, quelle phrase est correcte ?', answer: "The data suggests that our market share is growing.", options: ["The data suggests that our market share is growing.", "The data is suggesting that our market share grows.", "The data suggesting that our market share is growing."] },
            { type: 'fill', difficulty: 'hard', question: 'This milk _____ (smell) bad — don\'t drink it. But she _____ (smell) the flowers in the garden right now.', answer: "smells ... is smelling", options: ["smells ... is smelling", "is smelling ... smells", "smells ... smells", "is smelling ... is smelling"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 4 — Present continuous vs Present simple 2
    // ─────────────────────────────────────────────
    4: {
        id: 4,
        title: 'Present continuous vs Present simple 2',
        category: 'present-past',
        explanation: `🇫🇷 Cette leçon approfondit les différences entre le present continuous et le present simple avec des cas avancés.<br><br>
<b>3 cas importants à maîtriser :</b><br>
1️⃣ <b>Temporaire vs Permanent</b> : _I\'m working from home this week_ (temporaire) vs _I work at Google_ (permanent)<br>
2️⃣ <b>Habitude agaçante</b> avec « always + -ing » : _He\'s always interrupting me!_ (ça m'énerve !)<br>
3️⃣ <b>Changement en cours</b> : _Prices are rising_ (les prix augmentent — tendance actuelle)`,

        rules: [
            '🔵 **Situation temporaire** → continuous : _I\'m living with friends until I find a flat._ (Je vis chez des amis temporairement.)',
            '🔵 **Situation permanente** → simple : _My parents live in Lyon._ (Mes parents vivent à Lyon — c\'est permanent.)',
            '🔵 **always + continuous** = habitude agaçante : _He\'s always borrowing money!_ (Il emprunte toujours de l\'argent ! — ça m\'énerve)',
            '🔵 **always + simple** = habitude neutre : _I always have coffee in the morning._ (Je prends toujours du café le matin — neutre.)',
            '🔵 **Tendance/changement en cours** → continuous : _The cost of living is rising every year._ (Le coût de la vie augmente.)',
            '🔵 **look / feel / smell / taste** acceptent les deux : _You look tired_ = _You\'re looking tired_ (les deux sont corrects)'
        ],

        examples: [
            { text: "I usually **drive** to work, but today I **am taking** the bus.", fr: "D'habitude je conduis, mais aujourd'hui je prends le bus.", correct: true },
            { text: "The population of the world **is increasing** very fast.", fr: "La population mondiale augmente très vite. (tendance)", correct: true },
            { text: "You **'re always complaining** about the food!", fr: "Tu te plains toujours de la nourriture ! (agaçant)", correct: true },
            { text: "She **works** in a bank. / She **'s working** at home today.", fr: "Elle travaille dans une banque (permanent) / Elle travaille à la maison aujourd'hui (temporaire).", correct: true }
        ],

        tips: [
            "🇫🇷 « always + -ing » est un outil puissant pour exprimer l'agacement, comme « il est ENCORE en train de… » en français.",
            "💡 Pour les changements de société (prix, population, technologie), utilisez toujours le continuous : « is increasing, is changing, is growing ».",
            "⚠️ Les verbes de perception (look, feel, smell, taste) acceptent souvent les deux formes sans changement de sens."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I usually _____ (drive) to work, but today I _____ (take) the bus.', answer: "drive ... am taking", options: ["drive ... am taking", "am driving ... take", "drive ... take", "am driving ... am taking"], hint: "Habitude (simple) vs aujourd'hui (continuous)" },
            { type: 'fill', difficulty: 'easy', question: 'You\'re always _____ (use) my phone without asking!', answer: "using", options: ["using", "use", "used", "to use"], hint: "always + -ing = agacement" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (stay) at a hotel until she finds an apartment.', answer: "is staying", options: ["is staying", "stays", "stayed", "has stayed"], hint: "Situation temporaire → continuous" },
            // MEDIUM
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase décrit une situation PERMANENTE ?', answer: "She works for a multinational company.", options: ["She works for a multinational company.", "She is working for a multinational company.", "She has worked for a multinational company."] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase exprime une habitude AGAÇANTE ?', answer: "He's always borrowing money and never paying it back!", options: ["He's always borrowing money and never paying it back!", "He always borrows money.", "He borrowed money again."] },
            { type: 'fill', difficulty: 'medium', question: 'The company _____ (grow) rapidly. It now has over 500 employees.', answer: "is growing", options: ["is growing", "grows", "grew", "has grown"], hint: "Tendance actuelle → continuous" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'More and more companies _____ (adopt) remote work policies, but our CEO still _____ (believe) in office work.', answer: "are adopting ... believes", options: ["are adopting ... believes", "adopt ... is believing", "are adopting ... is believing", "adopt ... believes"], hint: "Tendance (continuous) vs opinion (simple, verbe d'état)" },
            { type: 'fill', difficulty: 'hard', question: 'She _____ (have) three children. Right now she _____ (have) dinner with them.', answer: "has ... is having", options: ["has ... is having", "is having ... has", "has ... has", "is having ... is having"], hint: "have = posséder (état) vs have dinner = action" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est grammaticalement INCORRECTE ?', answer: "I am needing your help with this project.", options: ["I am needing your help with this project.", "I am working on a new project.", "She is being very patient today."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The IT department _____ (currently / upgrade) all the computers in the building.', answer: "is currently upgrading", options: ["is currently upgrading", "currently upgrades", "currently upgraded", "has currently upgraded"] },
            { type: 'fill', difficulty: 'hard', question: 'Although the company _____ (usually / perform) well, it _____ (face) some challenges this quarter.', answer: "usually performs ... is facing", options: ["usually performs ... is facing", "is usually performing ... faces", "usually performs ... faces", "is usually performing ... is facing"] },
            { type: 'correct', difficulty: 'hard', question: 'Contexte TOEIC : quelle phrase est correcte pour un rapport ?', answer: "Our customer base is expanding, and we now serve over 10,000 clients.", options: ["Our customer base is expanding, and we now serve over 10,000 clients.", "Our customer base expands, and we are now serving over 10,000 clients.", "Our customer base is expanding, and we are now serving over 10,000 clients."] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 5 — Past simple (I did)
    // ─────────────────────────────────────────────
    5: {
        id: 5,
        title: 'Past simple (I did)',
        category: 'present-past',
        explanation: `🇫🇷 <b>Le Past Simple</b> correspond au <b>passé composé</b> et au <b>passé simple</b> français pour les actions <b>terminées</b> dans le passé.<br><br>
• « J'ai travaillé hier » = <i>I <b>worked</b> yesterday</i><br>
• « Il est parti la semaine dernière » = <i>He <b>left</b> last week</i><br><br>
📐 <b>Formation</b> :<br>
• Verbes réguliers : ajouter <b>-ed</b> (worked, played, started)<br>
• Verbes irréguliers : à apprendre par cœur ! (go → went, see → saw, take → took)<br>
• Toutes les personnes ont la MÊME forme : I went, you went, he went, we went...<br><br>
⚠️ <b>Piège</b> : en français on dit « j'ai mangé » (auxiliaire avoir + participe). En anglais, le past simple n'utilise PAS d'auxiliaire : « I <b>ate</b> » (PAS : ~~I have ate~~)`,

        rules: [
            '📐 Verbes réguliers : ajouter **-ed** → work → worked, play → played, start → started',
            '📐 Verbes irréguliers : apprendre par cœur → go → **went**, see → **saw**, take → **took**, eat → **ate**',
            '🔴 Négation : **didn\'t + verbe de base** : _I **didn\'t go** to work yesterday._ (PAS : ~~I didn\'t went~~)',
            '🔴 Question : **Did + sujet + verbe de base ?** : _**Did** you **enjoy** the party?_ (PAS : ~~Did you enjoyed ?~~)',
            '🔵 Marqueurs de temps : yesterday, last week/month/year, ago, in 2020, when I was young',
            '⚠️ Après **did/didn\'t**, le verbe revient à la forme DE BASE : _She **didn\'t come**._ (PAS : ~~didn\'t came~~)'
        ],

        examples: [
            { text: "I **worked** in a factory last summer.", fr: "J'ai travaillé dans une usine l'été dernier.", correct: true },
            { text: "We **didn't go** out yesterday because it rained.", fr: "On n'est pas sortis hier parce qu'il a plu.", correct: true },
            { text: "**Did** you **see** the news last night?", fr: "Tu as vu les informations hier soir ?", correct: true },
            { text: "She **got** married three years ago.", fr: "Elle s'est mariée il y a trois ans.", correct: true },
            { text: "~~I have seen him yesterday.~~ → I **saw** him yesterday.", fr: "Erreur classique : yesterday = passé → past simple (PAS present perfect)", correct: false, note: "Marqueur de temps passé → past simple obligatoire" }
        ],

        tips: [
            "🇫🇷 Ne confondez PAS le passé composé français (j'ai mangé) avec le present perfect anglais (I have eaten). Le passé composé = past simple en anglais quand il y a un marqueur de temps passé.",
            "⚠️ Après did/didn't, le verbe revient TOUJOURS à la forme de base : Did you GO (pas went), I didn't SEE (pas saw).",
            "💡 Pour les verbes irréguliers, créez des flashcards : go-went-gone, see-saw-seen, take-took-taken, eat-ate-eaten, etc."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I _____ (see) a very interesting documentary last night.', answer: "saw", options: ["saw", "have seen", "see", "was seeing"], hint: "last night = temps passé → past simple" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (not/come) to the meeting yesterday.', answer: "didn't come", options: ["didn't come", "hasn't come", "not came", "doesn't come"], hint: "didn't + verbe de base" },
            { type: 'fill', difficulty: 'easy', question: 'They _____ (move) to Paris in 2019.', answer: "moved", options: ["moved", "have moved", "were moving", "move"], hint: "in 2019 = temps passé précis" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'When _____ you _____ (start) your new job?', answer: "did ... start", options: ["did ... start", "have ... started", "do ... start", "are ... starting"], hint: "Question au passé → Did + verbe de base" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I went to London three days ago.", options: ["I went to London three days ago.", "I have gone to London three days ago.", "I goed to London three days ago."] },
            { type: 'fill', difficulty: 'medium', question: 'The company _____ (not/meet) its sales targets last quarter.', answer: "didn't meet", options: ["didn't meet", "hasn't met", "didn't met", "not met"], hint: "last quarter = passé + did not + base form" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'Who _____ (write) this email? It contains several errors.', answer: "wrote", options: ["wrote", "written", "did write", "has written"], hint: "Question avec who comme sujet → pas de did" },
            { type: 'fill', difficulty: 'hard', question: 'The CEO _____ (resign) suddenly and the share price _____ (drop) by 12%.', answer: "resigned ... dropped", options: ["resigned ... dropped", "has resigned ... dropped", "resigned ... has dropped", "resigns ... drops"], hint: "Séquence d'événements passés → past simple pour les deux" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Did she went to the conference ?", options: ["Did she went to the conference ?", "She didn't attend the meeting.", "The board approved the budget last week."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The merger _____ (take) place in January and _____ (create) the largest company in the sector.', answer: "took ... created", options: ["took ... created", "has taken ... created", "took ... has created", "takes ... creates"] },
            { type: 'fill', difficulty: 'hard', question: 'Who _____ (authorize) this expenditure? We _____ (not/budget) for it.', answer: "authorized ... didn't budget", options: ["authorized ... didn't budget", "did authorize ... didn't budget", "authorized ... haven't budgeted", "has authorized ... didn't budget"] },
            { type: 'correct', difficulty: 'hard', question: 'Dans un rapport TOEIC, quelle phrase est correcte ?', answer: "Revenue increased by 8% in the third quarter.", options: ["Revenue increased by 8% in the third quarter.", "Revenue has increased by 8% in the third quarter.", "Revenue is increased by 8% in the third quarter."] },
            { type: 'fill', difficulty: 'hard', question: 'Although the project _____ (face) many challenges, the team _____ (deliver) it on time.', answer: "faced ... delivered", options: ["faced ... delivered", "has faced ... delivered", "faced ... has delivered", "was facing ... delivered"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 6 — Past continuous (I was doing)
    // ─────────────────────────────────────────────
    6: {
        id: 6,
        title: 'Past continuous (I was doing)',
        category: 'present-past',
        explanation: `🇫🇷 <b>Le Past Continuous</b> correspond à l'<b>imparfait</b> français dans certains cas. Il décrit une action qui était <b>en cours</b> à un moment du passé.<br><br>
C'est comme une « scène de fond » dans une histoire :<br>
• « Il pleuvait quand je suis sorti » = <i>It <b>was raining</b> when I went out</i><br>
• « Je lisais quand le téléphone a sonné » = <i>I <b>was reading</b> when the phone rang</i><br><br>
📐 <b>Formation</b> : sujet + <b>was/were</b> + verbe<b>-ing</b><br>
⚠️ <b>Past continuous</b> (action longue) + <b>past simple</b> (interruption courte) — comme imparfait + passé composé en français !`,

        rules: [
            '📐 Formation : **sujet + was/were + verbe-ing** → I was working, They were playing',
            '🔵 Action **en cours** à un moment précis du passé : _At 8 pm, I **was watching** TV._ (À 20h, je regardais la télé.)',
            '🔵 **Décor/arrière-plan** d\'une histoire : _The sun **was shining** and the birds **were singing**._ (Le soleil brillait et les oiseaux chantaient.)',
            '🔵 **when + past simple** (interruption) + **past continuous** (action en cours) : _I **was walking** when I **met** an old friend._',
            '🔵 **while + past continuous** : _**While** I **was sleeping**, someone stole my car._',
            '🔵 Deux actions **simultanées** : _**While** I **was reading**, my sister **was watching** TV._ (deux continuous = en même temps)',
            '🔴 Les actions courtes et terminées utilisent le **past simple** : _When I **arrived**, they **left**._ (PAS : ~~When I was arriving~~)'
        ],

        examples: [
            { text: "This time last year I **was living** in Brazil.", fr: "À cette époque l'an dernier, je vivais au Brésil.", correct: true },
            { text: "What **were** you **doing** at 10 o'clock last night?", fr: "Que faisais-tu à 22h hier soir ?", correct: true },
            { text: "I **was walking** along the street when I **met** an old friend.", fr: "Je marchais dans la rue quand j'ai rencontré un vieil ami.", correct: true },
            { text: "**While** I **was driving**, I **saw** an accident.", fr: "Pendant que je conduisais, j'ai vu un accident.", correct: true },
            { text: "~~When I was arriving, they left.~~ → When I **arrived**, they left.", fr: "Actions courtes → past simple (pas continuous)", correct: false, note: "Arriver = action courte → past simple" }
        ],

        tips: [
            "🇫🇷 Pensez à l'imparfait français : « je mangeais » (action en cours, décor) = I was eating. « J'ai mangé » (action terminée, ponctuelle) = I ate.",
            "💡 Formule magique : WHILE + past continuous, past simple (= PENDANT QUE je faisais X, Y s'est passé).",
            "⚠️ Deux past continuous ensemble = deux actions en même temps : While I was cooking, she was setting the table."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I _____ (walk) down the street when I heard someone shout.', answer: "was walking", options: ["was walking", "walked", "am walking", "had walked"], hint: "Action en cours + interruption → was/were + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'What _____ you _____ (do) at midnight last night?', answer: "were ... doing", options: ["were ... doing", "did ... do", "have ... done", "are ... doing"], hint: "Action en cours à un moment précis du passé" },
            { type: 'fill', difficulty: 'easy', question: 'While she _____ (cook), the fire alarm went off.', answer: "was cooking", options: ["was cooking", "cooked", "is cooking", "has cooked"], hint: "While + continuous" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'It _____ (rain) when we left the office yesterday.', answer: "was raining", options: ["was raining", "rained", "rains", "is raining"], hint: "Décor/contexte quand on est parti" },
            { type: 'fill', difficulty: 'medium', question: 'They _____ (not/listen) when the teacher explained the exercise.', answer: "weren't listening", options: ["weren't listening", "didn't listen", "not listened", "haven't listened"], hint: "Action en cours (ne pas écouter) pendant une autre action" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise correctement le past continuous pour un décor ?', answer: "The sun was setting and the birds were singing when we arrived.", options: ["The sun was setting and the birds were singing when we arrived.", "The sun set and the birds sang when we were arriving.", "The sun was setting and the birds were singing when we were arriving."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'While the manager _____ (present) the report, the fire alarm _____ (go) off.', answer: "was presenting ... went", options: ["was presenting ... went", "presented ... was going", "was presenting ... was going", "presented ... went"], hint: "Continuous (action longue) + simple (interruption)" },
            { type: 'fill', difficulty: 'hard', question: 'At 3 pm yesterday, we _____ (still/discuss) the proposal while the clients _____ (wait) in the lobby.', answer: "were still discussing ... were waiting", options: ["were still discussing ... were waiting", "still discussed ... waited", "were still discussing ... waited", "still discussed ... were waiting"], hint: "Deux actions simultanées → deux continuous" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "When I was arriving at the station, the train left.", options: ["When I was arriving at the station, the train left.", "When I arrived at the station, the train was leaving.", "While I was waiting, I read a magazine."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The employees _____ (work) overtime last week when the CEO _____ (announce) the bonus.', answer: "were working ... announced", options: ["were working ... announced", "worked ... was announcing", "were working ... was announcing", "worked ... announced"] },
            { type: 'fill', difficulty: 'hard', question: 'While the auditors _____ (review) the accounts, they _____ (discover) a significant discrepancy.', answer: "were reviewing ... discovered", options: ["were reviewing ... discovered", "reviewed ... were discovering", "were reviewing ... were discovering", "reviewed ... discovered"] },
            { type: 'correct', difficulty: 'hard', question: 'Contexte TOEIC : sélectionnez la phrase correcte.', answer: "I was preparing the presentation when I realized some data was missing.", options: ["I was preparing the presentation when I realized some data was missing.", "I prepared the presentation when I was realizing some data was missing.", "I was preparing the presentation when I was realizing some data was missing."] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 7 — Present perfect 1 (I have done)
    // ─────────────────────────────────────────────
    7: {
        id: 7,
        title: 'Present perfect 1 (I have done)',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>Le Present Perfect</b> est l'un des temps LES PLUS DIFFICILES pour les francophones, car il <b>n'existe pas vraiment en français</b>.<br><br>
Le present perfect relie le <b>passé au présent</b>. Quelque chose s'est passé dans le passé, mais <b>ça compte MAINTENANT</b>.<br><br>
Comparez :<br>
• <i>I <b>have lost</b> my keys.</i> → Je ne les ai pas → résultat MAINTENANT (present perfect)<br>
• <i>I <b>lost</b> my keys yesterday.</i> → Hier = temps passé fini → moment PRÉCIS (past simple)<br><br>
📐 <b>Formation</b> : sujet + <b>have/has</b> + <b>participe passé</b><br>
⚠️ <b>Règle d'or</b> : JAMAIS de present perfect avec un marqueur de temps passé précis (yesterday, last week, in 2020, ago)`,

        rules: [
            '📐 Formation : **have/has + participe passé** → I have worked, She has gone',
            '🔵 **Expériences** (dans toute ta vie, sans date) : _I **have been** to Japan twice._ (Je suis allé au Japon deux fois.)',
            '🔵 **Résultat au présent** : _She **has lost** her keys._ (= elle ne les a pas maintenant)',
            '🔵 Avec **just, already, yet** : _I\'ve **just** finished. Have you eaten **yet**?_',
            '🔴 **JAMAIS** avec un temps passé précis : ~~I have seen him yesterday~~ → I **saw** him yesterday.',
            '🔵 **Nouvelles/annonces** : _The CEO **has resigned**!_ (nouvelle — lien avec maintenant)'
        ],

        examples: [
            { text: "I **have visited** Paris three times.", fr: "J'ai visité Paris trois fois. (dans ma vie — pas de date précise)", correct: true },
            { text: "**Have** you ever **tried** sushi?", fr: "As-tu déjà goûté des sushis ? (expérience dans ta vie)", correct: true },
            { text: "She **has just** left the office.", fr: "Elle vient de quitter le bureau. (just = il y a très peu de temps)", correct: true },
            { text: "~~I have seen him yesterday.~~ → I **saw** him yesterday.", fr: "Yesterday = temps précis → TOUJOURS past simple", correct: false, note: "Erreur n°1 des francophones au TOEIC !" }
        ],

        tips: [
            "🇫🇷 Le passé composé français ressemble au present perfect anglais DANS LA FORME (j'ai mangé = I have eaten), mais PAS dans l'usage ! Le passé composé = past simple quand il y a un marqueur de temps.",
            "💡 Posez-vous la question : « Est-ce que je mentionne QUAND ? » OUI → past simple. NON → present perfect possible.",
            "⚠️ Les mots-clés du present perfect : ever, never, just, already, yet, since, for, recently, so far, this week/month/year."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I _____ (lose) my passport. Can you help me look for it?', answer: "have lost", options: ["have lost", "lost", "am losing", "lose"], hint: "Résultat au présent → present perfect" },
            { type: 'fill', difficulty: 'easy', question: '_____ you ever _____ (be) to Australia?', answer: "Have ... been", options: ["Have ... been", "Did ... be", "Are ... been", "Were ... being"], hint: "Expérience dans ta vie (ever)" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (already/finish) the report.', answer: "has already finished", options: ["has already finished", "already finished", "is already finishing", "already has finished"], hint: "already → present perfect" },
            // MEDIUM
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I've been to the new restaurant. It's great!", options: ["I've been to the new restaurant. It's great!", "I've been to the new restaurant yesterday.", "I've went to the new restaurant."] },
            { type: 'fill', difficulty: 'medium', question: 'We _____ (not/receive) any complaints so far this month.', answer: "haven't received", options: ["haven't received", "didn't receive", "don't receive", "aren't receiving"], hint: "so far this month = période pas encore finie → present perfect" },
            { type: 'fill', difficulty: 'medium', question: 'The company _____ (recently/launch) a new product.', answer: "has recently launched", options: ["has recently launched", "recently launched", "is recently launching", "recently has launched"], hint: "recently → present perfect" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'This is the third time she _____ (be) late this week.', answer: "has been", options: ["has been", "is", "was", "had been"], hint: "« This is the first/second/third time... » → present perfect" },
            { type: 'fill', difficulty: 'hard', question: 'I _____ (read) that book. It\'s excellent. I _____ (read) it during my vacation last August.', answer: "have read ... read", options: ["have read ... read", "read ... read", "have read ... have read", "read ... have read"], hint: "Expérience (PP) + moment précis (past simple)" },
            { type: 'correct', difficulty: 'hard', question: 'Laquelle de ces phrases est INCORRECTE ?', answer: "She has finished the project last Friday.", options: ["She has finished the project last Friday.", "She has finished the project.", "She finished the project last Friday."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The sales team _____ (exceed) its quarterly targets.', answer: "has exceeded", options: ["has exceeded", "exceeded", "is exceeding", "exceeds"] },
            { type: 'fill', difficulty: 'hard', question: 'Customer satisfaction _____ (improve) significantly since we _____ (implement) the new system.', answer: "has improved ... implemented", options: ["has improved ... implemented", "improved ... implemented", "has improved ... have implemented", "improved ... have implemented"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC Part 5 : choisissez la bonne réponse.', answer: "Our company has won three industry awards this year.", options: ["Our company has won three industry awards this year.", "Our company won three industry awards this year.", "Our company is winning three industry awards this year."] },
            { type: 'fill', difficulty: 'hard', question: 'It\'s the best presentation I _____ ever _____ (see) in my career.', answer: "have ... seen", options: ["have ... seen", "had ... seen", "did ... see", "ever ... saw"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 8 — Present perfect 2 (just/already/yet)
    // ─────────────────────────────────────────────
    8: {
        id: 8,
        title: 'Present perfect 2 (just / already / yet)',
        category: 'present-perfect',
        explanation: `🇫🇷 Les mots-clés <b>just, already, yet, still</b> sont presque toujours utilisés avec le <b>present perfect</b>. Maîtrisez-les pour le TOEIC !<br><br>
• <b>just</b> = « vient de » → <i>I've <b>just</b> arrived.</i> (Je viens d'arriver.)<br>
• <b>already</b> = « déjà » (plus tôt que prévu) → <i>She's <b>already</b> finished.</i> (Elle a déjà fini.)<br>
• <b>yet</b> = « encore / déjà » (dans les questions et négations) → <i>Have you finished <b>yet</b>?</i> (Tu as fini ?)<br>
• <b>still</b> + haven't = « toujours pas » → <i>He <b>still</b> hasn't replied.</i> (Il n'a toujours pas répondu.)`,

        rules: [
            '🔵 **just** = il y a très peu de temps : _I\'ve **just** had lunch._ (Je viens de déjeuner.) — se place entre have et le participe passé',
            '🔵 **already** = plus tôt que prévu : _She\'s **already** finished._ (Elle a déjà fini.) — entre have et le participe passé',
            '🔵 **yet** = jusqu\'à maintenant (questions et négations) : _Have you finished **yet**?_ / _I haven\'t finished **yet**._  — en fin de phrase',
            '🔵 **still** + haven\'t/hasn\'t = toujours pas : _He **still** hasn\'t replied._ (Il n\'a toujours pas répondu.) — avant haven\'t/hasn\'t',
            '🔵 Superlatif + **ever** : _It\'s the best book I\'ve **ever** read._ (C\'est le meilleur livre que j\'ai jamais lu.)',
            '🔵 **This is the first time** + present perfect : _This is the first time I\'ve **been** here._ (C\'est la première fois que je viens ici.)'
        ],

        examples: [
            { text: "I **'ve just had** lunch, so I'm not hungry.", fr: "Je viens de déjeuner, donc je n'ai pas faim.", correct: true },
            { text: "\"Has the meeting started **yet**?\" \"No, not **yet**.\"", fr: "« La réunion a-t-elle commencé ? » « Non, pas encore. »", correct: true },
            { text: "It's the most interesting documentary I **'ve ever seen**.", fr: "C'est le documentaire le plus intéressant que j'aie jamais vu.", correct: true },
            { text: "She **still hasn't called** me back.", fr: "Elle ne m'a toujours pas rappelé.", correct: true }
        ],

        tips: [
            "🇫🇷 « venir de + infinitif » en français = just + present perfect en anglais : « je viens de manger » → I've just eaten.",
            "💡 Position dans la phrase : just/already → ENTRE have et le participe. Yet → à la FIN. Still → AVANT haven't.",
            "⚠️ « Yet » ne s'utilise QUE dans les questions et les phrases négatives. Ne dites pas : ~~I have finished yet.~~"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'Don\'t eat the cake — I _____ (just/make) it, so it\'s still hot.', answer: "have just made", options: ["have just made", "just made", "am just making", "had just made"], hint: "venir de = just + present perfect" },
            { type: 'fill', difficulty: 'easy', question: '"Have you finished the report _____?" "No, not _____."', answer: "yet ... yet", options: ["yet ... yet", "already ... still", "still ... yet", "just ... already"], hint: "yet = déjà/encore (question et négation)" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (already/send) the email to all the clients.', answer: "has already sent", options: ["has already sent", "already sent", "is already sending", "already has sent"], hint: "already entre has et le participe passé" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'It\'s the best presentation I _____ ever _____ (see).', answer: "have ... seen", options: ["have ... seen", "had ... seen", "did ... see", "was ... seeing"], hint: "Superlatif + ever → present perfect" },
            { type: 'fill', difficulty: 'medium', question: 'Tom _____ (still/not/reply) to my email. I sent it three days ago!', answer: "still hasn't replied", options: ["still hasn't replied", "hasn't still replied", "still didn't reply", "is still not replying"], hint: "still avant hasn't" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise correctement « This is the first time… » ?', answer: "This is the first time I've flown business class.", options: ["This is the first time I've flown business class.", "This is the first time I fly business class.", "This is the first time I flew business class."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The board _____ (already/approve) the merger, but they _____ (not/announce) it publicly _____.', answer: "has already approved ... haven't announced ... yet", options: ["has already approved ... haven't announced ... yet", "already approved ... didn't announce ... yet", "has already approved ... haven't announced ... still", "already approved ... haven't announced ... yet"], hint: "already (fait) + not...yet (pas encore)" },
            { type: 'fill', difficulty: 'hard', question: 'It\'s the worst financial crisis the company _____ ever _____ (face).', answer: "has ... faced", options: ["has ... faced", "had ... faced", "ever ... faced", "has ... been facing"], hint: "Superlatif + ever → present perfect" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I have yet finished the report.", options: ["I have yet finished the report.", "I haven't finished the report yet.", "Have you finished the report yet?"] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The new policy _____ (just/be) announced by the CEO.', answer: "has just been", options: ["has just been", "was just", "is just being", "just has been"] },
            { type: 'fill', difficulty: 'hard', question: 'Although the deadline has passed, the supplier _____ (still/not/deliver) the components.', answer: "still hasn't delivered", options: ["still hasn't delivered", "hasn't still delivered", "still didn't deliver", "didn't still deliver"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC Part 5 : choisissez la meilleure option.', answer: "Management has already reviewed the proposal and approved the budget.", options: ["Management has already reviewed the proposal and approved the budget.", "Management already reviewed the proposal and approved the budget.", "Management has already reviewed the proposal and has already approved the budget."] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 9 — Present perfect continuous
    // ─────────────────────────────────────────────
    9: {
        id: 9,
        title: 'Present perfect continuous (I have been doing)',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>Le Present Perfect Continuous</b> met l'accent sur la <b>durée</b> ou le <b>caractère continu</b> d'une action qui a commencé dans le passé et continue jusqu'à maintenant (ou vient de s'arrêter).<br><br>
En français, on dirait « ça fait [durée] que je fais… » :<br>
• <i>I've <b>been studying</b> for 3 hours.</i> = Ça fait 3 heures que j'étudie.<br>
• <i>It's <b>been raining</b> all day.</i> = Il pleut depuis ce matin.<br><br>
📐 <b>Formation</b> : sujet + <b>have/has been</b> + verbe<b>-ing</b><br>
⚠️ Les verbes d'état (know, like, believe) ne prennent PAS le continuous → utilisez le present perfect simple.`,

        rules: [
            '📐 Formation : **have/has + been + verbe-ing** → I have been working, She has been studying',
            '🔵 **Durée** d\'une activité jusqu\'à maintenant : _I\'ve been waiting for 20 minutes._ (Ça fait 20 min que j\'attends.)',
            '🔵 **Résultat visible** d\'une activité récente : _You\'re out of breath — have you been running?_ (Tu es essoufflé — tu as couru ?)',
            '🔵 Avec **for** (durée) et **since** (point de départ) : _She\'s been working here **since** 2019._',
            '🔴 **Verbes d\'état** → present perfect simple uniquement : _I\'ve **known** him for years._ (PAS : ~~I\'ve been knowing~~)',
            '🔵 Comparez : _I\'ve been reading your book_ (encore en cours ou récemment arrêté) vs _I\'ve read your book_ (fini)'
        ],

        examples: [
            { text: "Your eyes are red. **Have** you **been crying**?", fr: "Tu as les yeux rouges. Tu as pleuré ? (résultat visible)", correct: true },
            { text: "I **'ve been studying** English for three years.", fr: "Ça fait 3 ans que j'étudie l'anglais. (et ça continue)", correct: true },
            { text: "It **'s been raining** all morning — the garden is flooded.", fr: "Il pleut depuis ce matin — le jardin est inondé.", correct: true },
            { text: "~~I've been knowing him for years.~~ → I **'ve known** him for years.", fr: "know = verbe d'état → present perfect simple", correct: false, note: "Verbe d'état : jamais de continuous !" }
        ],

        tips: [
            "🇫🇷 « Ça fait [durée] que je… » = present perfect continuous : « Ça fait 2 heures que j'attends » → I've been waiting for 2 hours.",
            "💡 Si quelqu'un montre des signes physiques (fatigue, sueur, saleté), pensez au present perfect continuous : « You look tired — have you been working all day? »",
            "⚠️ Verbes d'état → toujours SIMPLE : I've known, I've had, I've been (état), I've liked, I've loved."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'You look tired. _____ you _____ (work) all day?', answer: "Have ... been working", options: ["Have ... been working", "Did ... work", "Are ... working", "Were ... working"], hint: "Résultat visible → present perfect continuous" },
            { type: 'fill', difficulty: 'easy', question: 'How long _____ it _____ (rain)? The streets are flooded!', answer: "has ... been raining", options: ["has ... been raining", "did ... rain", "is ... raining", "was ... raining"], hint: "How long + durée → PP continuous" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (wait) for the bus for 30 minutes. Where is it?', answer: "have been waiting", options: ["have been waiting", "wait", "am waiting", "waited"], hint: "for 30 minutes = durée → PP continuous" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'They _____ (live) in that house since they got married.', answer: "have been living", options: ["have been living", "are living", "lived", "live"], hint: "since = point de départ → PP continuous" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase met correctement l\'accent sur un résultat visible ?', answer: "Your hands are dirty — have you been gardening?", options: ["Your hands are dirty — have you been gardening?", "Your hands are dirty — did you garden?", "Your hands are dirty — do you garden?"] },
            { type: 'correct', difficulty: 'medium', question: 'Laquelle est correcte ? (« know » = verbe d\'état)', answer: "I've known her since we were children.", options: ["I've known her since we were children.", "I've been knowing her since we were children.", "I know her since we were children."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The department _____ (work) on this project for six months. They expect to finish next week.', answer: "has been working", options: ["has been working", "has worked", "worked", "is working"], hint: "Durée + toujours en cours → PP continuous" },
            { type: 'fill', difficulty: 'hard', question: 'She _____ (study) reports all morning — that\'s why she _____ (not/reply) to your messages yet.', answer: "has been studying ... hasn't replied", options: ["has been studying ... hasn't replied", "studied ... didn't reply", "has been studying ... hasn't been replying", "is studying ... doesn't reply"], hint: "Activité en cours (continuous) / résultat (simple)" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I've been believing in this project since the beginning.", options: ["I've been believing in this project since the beginning.", "I've been working on this project since January.", "She has been training for the marathon for months."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The R&D team _____ (develop) a new prototype for the past six months.', answer: "has been developing", options: ["has been developing", "has developed", "developed", "is developing"] },
            { type: 'fill', difficulty: 'hard', question: 'Employees _____ (complain) about the new policy since it _____ (be) implemented last month.', answer: "have been complaining ... was", options: ["have been complaining ... was", "complained ... was", "have complained ... has been", "are complaining ... was"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : quelle phrase est la plus appropriée ?', answer: "We have been negotiating with the supplier for several weeks and hope to reach an agreement soon.", options: ["We have been negotiating with the supplier for several weeks and hope to reach an agreement soon.", "We negotiate with the supplier for several weeks and hope to reach an agreement soon.", "We negotiated with the supplier for several weeks and hope to reach an agreement soon."] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 10 — Present perfect continuous vs simple
    // ─────────────────────────────────────────────
    10: {
        id: 10,
        title: 'Present perfect continuous vs simple',
        category: 'present-perfect',
        explanation: `🇫🇷 Comment choisir entre <b>I have been doing</b> (continuous) et <b>I have done</b> (simple) ?<br><br>
La règle est claire :<br>
• <b>Continuous</b> = on met l'accent sur <b>L'ACTIVITÉ / LA DURÉE</b> : <i>I've been reading your report.</i> (j'étais en train de le lire)<br>
• <b>Simple</b> = on met l'accent sur <b>LE RÉSULTAT / L'ACHÈVEMENT</b> : <i>I've read your report.</i> (j'ai fini de le lire)<br><br>
💡 <b>Astuce TOEIC</b> :<br>
• <b>How long…?</b> → continuous : <i>How long have you been learning English?</i><br>
• <b>How many/much…?</b> → simple : <i>How many pages have you read?</i>`,

        rules: [
            '🔵 **Continuous** = accent sur l\'activité/la durée : _I\'ve been writing emails all morning._ (activité en cours)',
            '🔵 **Simple** = accent sur le résultat : _I\'ve written 15 emails today._ (résultat : 15 emails !)',
            '🔵 **How long…?** → continuous : _How long **have** you **been waiting**?_ (combien de temps ça dure ?)',
            '🔵 **How many/much…?** → simple : _How many countries **have** you **visited**?_ (quantité = résultat)',
            '🔵 Continuous : l\'activité peut être inachevée. Simple : l\'action est complète.',
            '🔵 Avec **live** et **work**, les deux formes sont souvent interchangeables : _I\'ve lived / I\'ve been living here for 10 years._'
        ],

        examples: [
            { text: "I **'ve been writing** emails all morning.", fr: "J'écris des emails depuis ce matin. (accent sur l'activité = durée)", correct: true },
            { text: "I **'ve written** 15 emails today.", fr: "J'ai écrit 15 emails aujourd'hui. (accent sur le résultat = quantité)", correct: true },
            { text: "How long **have** you **been waiting**?", fr: "Depuis combien de temps attends-tu ? (durée → continuous)", correct: true },
            { text: "How many countries **have** you **visited**?", fr: "Combien de pays as-tu visités ? (quantité → simple)", correct: true }
        ],

        tips: [
            "🇫🇷 Pensez à la différence : « j'écris depuis 2h » (activité/durée → continuous) vs « j'ai écrit 3 lettres » (résultat/quantité → simple).",
            "💡 Règle rapide : si la question commence par HOW LONG → continuous. Si elle commence par HOW MANY → simple.",
            "⚠️ Avec live et work, les deux formes sont correctes et signifient la même chose. Ne perdez pas de temps à hésiter sur le TOEIC !"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'My hands are dirty. I _____ (repair) the car.', answer: "have been repairing", options: ["have been repairing", "have repaired", "repaired", "am repairing"], hint: "Mains sales = résultat visible d'une activité → continuous" },
            { type: 'fill', difficulty: 'easy', question: 'How many cups of coffee _____ you _____ (drink) today?', answer: "have ... drunk", options: ["have ... drunk", "have ... been drinking", "did ... drink", "are ... drinking"], hint: "How many = quantité → simple" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (write) three reports this week. She\'s very productive.', answer: "has written", options: ["has written", "has been writing", "wrote", "is writing"], hint: "3 rapports = quantité/résultat → simple" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'I _____ (read) this book for two weeks and I\'m still only on chapter 3.', answer: "have been reading", options: ["have been reading", "have read", "read", "am reading"], hint: "Durée + en cours → continuous" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase met l\'accent sur HOW LONG ?', answer: "She's been working here since January.", options: ["She's been working here since January.", "She's worked on three projects.", "She worked here last year."] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle réponse est correcte avec « How many… » ?', answer: "How many books have you read this year?", options: ["How many books have you read this year?", "How many books have you been reading this year?", "How many books did you been reading?"] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The marketing team _____ (work) on the campaign for weeks, but they _____ (not/finalize) the budget yet.', answer: "has been working ... hasn't finalized", options: ["has been working ... hasn't finalized", "has worked ... hasn't finalized", "has been working ... hasn't been finalizing", "worked ... didn't finalize"], hint: "Durée de l'activité (continuous) + résultat absent (simple)" },
            { type: 'fill', difficulty: 'hard', question: 'We _____ (receive) over 200 applications so far. HR _____ (review) them since Monday.', answer: "have received ... has been reviewing", options: ["have received ... has been reviewing", "have been receiving ... has reviewed", "received ... has been reviewing", "have received ... reviewed"], hint: "Quantité (simple) + activité en cours (continuous)" },
            { type: 'correct', difficulty: 'hard', question: 'Les deux sont possibles. Laquelle met l\'accent sur LA DURÉE ?', answer: "I've been living in this city for 10 years.", options: ["I've been living in this city for 10 years.", "I've lived in this city for 10 years.", "I lived in this city for 10 years."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The team _____ (complete) 80% of the project. They _____ (work) extremely hard this quarter.', answer: "has completed ... have been working", options: ["has completed ... have been working", "has been completing ... have worked", "completed ... worked", "has completed ... worked"] },
            { type: 'fill', difficulty: 'hard', question: 'How many clients _____ you _____ (contact) this week? And how long _____ you _____ (try) to reach the Johnson account?', answer: "have ... contacted ... have ... been trying", options: ["have ... contacted ... have ... been trying", "have ... been contacting ... have ... tried", "did ... contact ... have ... been trying", "have ... contacted ... did ... try"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : quelle phrase est la plus naturelle ?', answer: "We have been experiencing supply chain disruptions, and so far we have lost three major contracts.", options: ["We have been experiencing supply chain disruptions, and so far we have lost three major contracts.", "We have experienced supply chain disruptions, and so far we have been losing three major contracts.", "We experience supply chain disruptions, and so far we lost three major contracts."] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 11 — How long have you (been)…?
    // ─────────────────────────────────────────────
    11: {
        id: 11,
        title: 'How long have you (been)…?',
        category: 'present-perfect',
        explanation: `🇫🇷 En français, on dit « <b>Depuis combien de temps…?</b> » ou « <b>Ça fait combien de temps que…?</b> »<br><br>
En anglais, la question est : <b>How long have you been…?</b> ou <b>How long have you + participe passé?</b><br><br>
⚠️ <b>Piège majeur pour les francophones</b> : en français, on utilise le présent (« je travaille ici depuis 5 ans »). En anglais, on utilise le <b>present perfect</b> : <i>I <b>have been working</b> here for 5 years</i> (PAS : ~~I work here since/for 5 years~~).<br><br>
• Verbes d'<b>action</b> → continuous : <i>How long have you been waiting?</i><br>
• Verbes d'<b>état</b> → simple : <i>How long have you known her?</i>`,

        rules: [
            '🔵 **How long have you been + -ing?** → pour les actions en cours : _How long have you been waiting?_ (Depuis combien de temps attends-tu ?)',
            '🔵 **How long have you + participe passé?** → pour les états : _How long have you known her?_ (Depuis combien de temps la connais-tu ?)',
            '🔴 Verbes d\'état → present perfect SIMPLE : know, have, be, like, love → _How long have you **had** that car?_',
            '🔵 Réponse avec **for** ou **since** : _I\'ve been here **for** two hours / **since** 3 o\'clock._',
            '🔴 **Situation actuelle** (still true) → present perfect : _How long have you been married?_ (tu es encore marié)',
            '🔴 **Situation passée** (now over) → past simple : _How long were you married?_ (tu n\'es plus marié)'
        ],

        examples: [
            { text: "**How long have** you **been learning** English? — For three years.", fr: "Depuis combien de temps apprends-tu l'anglais ? — Depuis 3 ans.", correct: true },
            { text: "**How long have** you **known** Bob? — Since university.", fr: "Depuis combien de temps connais-tu Bob ? — Depuis l'université.", correct: true },
            { text: "**How long have** you **had** that jacket? — I've had it for ages.", fr: "Depuis combien de temps as-tu cette veste ? — Depuis très longtemps.", correct: true },
            { text: "~~How long do you live here?~~ → How long **have** you **lived** here?", fr: "En français on dit « depuis combien de temps tu habites ici ? » (présent), mais en anglais → present perfect !", correct: false, note: "Erreur typique des francophones : présent français ≠ present anglais ici" }
        ],

        tips: [
            "🇫🇷 JAMAIS le present simple pour « depuis » ! « Je travaille ici depuis 5 ans » = I HAVE BEEN WORKING here for 5 years (PAS : ~~I work here since 5 years~~).",
            "💡 « Ça fait combien de temps que… ? » = How long have you been…? C'est automatique !",
            "⚠️ « How long were you…? » (past simple) = c'est TERMINÉ maintenant. « How long have you been…? » (present perfect) = c'est ENCORE vrai."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'How long _____ you _____ (know) each other?', answer: "have ... known", options: ["have ... known", "have ... been knowing", "do ... know", "did ... know"], hint: "know = verbe d'état → PP simple" },
            { type: 'fill', difficulty: 'easy', question: 'How long _____ she _____ (work) for this company?', answer: "has ... been working", options: ["has ... been working", "does ... work", "is ... working", "did ... work"], hint: "work = action → PP continuous" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (have) this car for five years now.', answer: "have had", options: ["have had", "have been having", "had", "am having"], hint: "have = posséder (état) → PP simple" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'She _____ (be) a teacher since 2015.', answer: "has been", options: ["has been", "has been being", "is", "was"], hint: "be = état → PP simple" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle question est correcte pour quelqu\'un qui habite ENCORE à Tokyo ?', answer: "How long have you been living in Tokyo?", options: ["How long have you been living in Tokyo?", "How long do you live in Tokyo?", "How long did you live in Tokyo?"] },
            { type: 'fill', difficulty: 'medium', question: '_____ long _____ you _____ (wait) for the bus? — About 20 minutes.', answer: "How ... have ... been waiting", options: ["How ... have ... been waiting", "How ... did ... wait", "How ... are ... waiting", "How ... do ... wait"], hint: "Durée d'attente → PP continuous" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'How long _____ the company _____ (operate) in Asia? They _____ (have) an office in Tokyo since 2010.', answer: "has ... been operating ... have had", options: ["has ... been operating ... have had", "has ... operated ... have been having", "did ... operate ... had", "does ... operate ... have"], hint: "operate = action (continuous), have = possession (simple)" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle question implique que la personne N\'EST PLUS mariée ?', answer: "How long were you married?", options: ["How long were you married?", "How long have you been married?", "How long are you married?"] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'How long _____ Mr. Chen _____ (serve) on the board of directors?', answer: "has ... been serving", options: ["has ... been serving", "does ... serve", "did ... serve", "is ... serving"] },
            { type: 'fill', difficulty: 'hard', question: 'The factory _____ (produce) electric vehicles since 2018. In that time, it _____ (manufacture) over 50,000 units.', answer: "has been producing ... has manufactured", options: ["has been producing ... has manufactured", "has produced ... has been manufacturing", "produces ... manufactured", "has been producing ... manufactured"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : identifiez la phrase INCORRECTE.', answer: "We work with this supplier since 2015.", options: ["We work with this supplier since 2015.", "We have been working with this supplier since 2015.", "We have worked with this supplier since 2015."] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 12 — For and since
    // ─────────────────────────────────────────────
    12: {
        id: 12,
        title: 'For and since — When…? and How long…?',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>For</b> et <b>since</b> s'utilisent avec le present perfect pour parler de <b>durée</b>. C'est un point TRÈS testé au TOEIC.<br><br>
• <b>for</b> + <b>durée</b> (combien de temps) : <i>for two hours, for six months, for a long time</i><br>
→ En français : « <b>depuis</b> 2 heures » ou « <b>pendant</b> 2 heures »<br><br>
• <b>since</b> + <b>point de départ</b> (à partir de quand) : <i>since Monday, since 2010, since I was a child</i><br>
→ En français : « <b>depuis</b> lundi »<br><br>
⚠️ <b>Piège courant</b> : en français, « depuis » se traduit par for OU since selon le contexte !<br>
• « Depuis 3 ans » = <b>for</b> 3 years (durée)<br>
• « Depuis 2020 » = <b>since</b> 2020 (point de départ)`,

        rules: [
            '🔵 **For** + période de temps : _for two hours, for six months, for a long time, for ages_',
            '🔵 **Since** + point dans le temps : _since Monday, since 2010, since I was a child, since breakfast_',
            '🔵 **When…?** (quand ?) + **past simple** : _**When** did you start learning English?_',
            '🔵 **How long…?** (combien de temps ?) + **present perfect** : _**How long** have you been learning English?_',
            '🔴 Ne confondez pas **for** et **during** : _I waited **for** two hours_ (durée) vs _I fell asleep **during** the film_ (pendant = au cours de)',
            '🔴 Ne confondez pas **for** et **ago** : _I arrived three days **ago**_ (past simple) vs _I\'ve been here **for** three days_ (present perfect)'
        ],

        examples: [
            { text: "I've been waiting **for** 30 minutes.", fr: "J'attends depuis 30 minutes. (for = durée)", correct: true },
            { text: "She has worked here **since** April.", fr: "Elle travaille ici depuis avril. (since = point de départ)", correct: true },
            { text: "We've known each other **for** ten years — **since** 2016.", fr: "On se connaît depuis 10 ans — depuis 2016.", correct: true },
            { text: "~~I am here since 3 o'clock.~~ → I **have been** here since 3 o'clock.", fr: "En français on dit « je suis là depuis 15h » (présent). En anglais → present perfect !", correct: false, note: "Since → toujours present perfect en anglais" },
            { text: "~~I have been here for last Monday.~~ → I have been here **since** last Monday.", fr: "« last Monday » = point dans le temps → since (pas for)", correct: false, note: "For = durée, Since = point dans le temps" }
        ],

        tips: [
            "🇫🇷 « Depuis » en français = FOR si c'est une DURÉE (depuis 3 ans = for 3 years) / SINCE si c'est une DATE ou un ÉVÉNEMENT (depuis lundi = since Monday).",
            "💡 Test rapide : si vous pouvez mettre un chiffre/quantité de temps → FOR. Si vous pouvez mettre une date/jour → SINCE.",
            "⚠️ TOEIC Trap : « ago » va TOUJOURS avec le past simple, JAMAIS avec le present perfect. « 3 days ago » → I arrived 3 days ago (past simple)."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'She has been a manager _____ January.', answer: "since", options: ["since", "for", "during", "ago"], hint: "January = point dans le temps → since" },
            { type: 'fill', difficulty: 'easy', question: 'They have lived in this city _____ over 20 years.', answer: "for", options: ["for", "since", "during", "ago"], hint: "20 years = durée → for" },
            { type: 'fill', difficulty: 'easy', question: 'I haven\'t seen her _____ the conference last month.', answer: "since", options: ["since", "for", "from", "during"], hint: "La conférence = point dans le temps → since" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: '_____ did you start working here?', answer: "When", options: ["When", "How long", "Since when", "For when"], hint: "Quand as-tu commencé ? → When + past simple" },
            { type: 'fill', difficulty: 'medium', question: '_____ have you been waiting for the delivery?', answer: "How long", options: ["How long", "When", "Since", "For"], hint: "Combien de temps ? → How long + present perfect" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I've known him since we were in college.", options: ["I've known him since we were in college.", "I've known him for we were in college.", "I know him since we were in college."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The negotiations have been ongoing _____ several weeks. They started _____ the first of March.', answer: "for ... since", options: ["for ... since", "since ... for", "for ... for", "since ... since"], hint: "Durée (for) + date de début (since)" },
            { type: 'fill', difficulty: 'hard', question: 'He joined the company 10 years _____. He has been working here _____ 10 years.', answer: "ago ... for", options: ["ago ... for", "ago ... since", "for ... ago", "since ... for"], hint: "ago → past simple (joined) / for → present perfect (has been)" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I work here since three years.", options: ["I work here since three years.", "I have worked here for three years.", "I have been working here since 2023."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Ms. Park has held the position of CFO _____ 2019. That\'s _____ over seven years now.', answer: "since ... for", options: ["since ... for", "for ... since", "since ... since", "for ... for"] },
            { type: 'fill', difficulty: 'hard', question: 'The factory has been closed _____ the safety inspection two weeks _____. It has remained shut _____ that time.', answer: "since ... ago ... since", options: ["since ... ago ... since", "for ... ago ... since", "since ... ago ... for", "for ... since ... ago"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC Part 5 : complétez. "The company has experienced steady growth _____ it was founded."', answer: "since", options: ["since", "for", "during", "while"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 13 — Present perfect and past 1
    // ─────────────────────────────────────────────
    13: {
        id: 13,
        title: 'Present perfect et past simple 1',
        category: 'present-perfect',
        explanation: `🇫🇷 Choisir entre le <b>present perfect</b> et le <b>past simple</b> est LE point de grammaire le plus testé au TOEIC (Part 5 et 6).<br><br>
La clé : <b>est-ce que la période de temps est FINIE ou PAS ?</b><br><br>
• Période <b>PAS finie</b> (today, this week, this year) → <b>present perfect</b> : <i>I've had 3 meetings <b>today</b>.</i><br>
• Période <b>FINIE</b> (yesterday, last week, in 2020) → <b>past simple</b> : <i>I had 3 meetings <b>yesterday</b>.</i><br><br>
⚠️ <b>been</b> vs <b>gone</b> :<br>
• He's <b>been</b> to France = il est allé en France (et il est revenu)<br>
• He's <b>gone</b> to France = il est parti en France (il y est encore)`,

        rules: [
            '🔵 **Present perfect** = lien avec le présent : _I\'ve lost my keys._ (= je ne les ai toujours pas)',
            '🔵 **Past simple** = moment passé précis : _I lost my keys yesterday._ (= hier, terminé)',
            '🔵 Période **non finie** → present perfect : _I\'ve had 3 meetings **today/this week/this year**._',
            '🔵 Période **finie** → past simple : _I had 3 meetings **yesterday/last week/in 2020/ago**._',
            '🔵 **Nouvelles** : present perfect d\'abord, puis past simple pour les détails : _There **has been** an accident. It **happened** on Main Street._',
            '🔵 **been** vs **gone** : _He\'s **been** to France_ (allé et revenu) vs _He\'s **gone** to France_ (encore là-bas)'
        ],

        examples: [
            { text: "**Have** you **seen** the new product brochure?", fr: "Tu as vu la nouvelle brochure ? (à un moment — lien avec maintenant)", correct: true },
            { text: "I **saw** it yesterday at the meeting.", fr: "Je l'ai vue hier à la réunion. (temps passé précis)", correct: true },
            { text: "The company **has opened** two new branches this year.", fr: "L'entreprise a ouvert 2 nouvelles agences cette année. (this year = pas fini)", correct: true },
            { text: "The company **opened** two new branches last year.", fr: "L'entreprise a ouvert 2 nouvelles agences l'an dernier. (last year = fini)", correct: true },
            { text: "~~I have seen him yesterday.~~ → I **saw** him yesterday.", fr: "Yesterday = fini → past simple OBLIGATOIRE", correct: false, note: "C'est l'erreur la plus courante au TOEIC !" }
        ],

        tips: [
            "🇫🇷 En français, « j'ai vu / j'ai mangé » ressemble au present perfect, mais c'est souvent du past simple en anglais ! Vérifiez toujours s'il y a un marqueur de temps passé.",
            "💡 Mémorisez les mots-clés : yesterday, last, ago, in (year) → TOUJOURS past simple. Today, this, so far, recently, ever, never → SOUVENT present perfect.",
            "⚠️ TOEIC Killer Question : « The revenue _____ by 5% this quarter. » → HAS INCREASED (this quarter = pas fini)"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I _____ (not/see) Tom today. Is he at work?', answer: "haven't seen", options: ["haven't seen", "didn't see", "don't see", "am not seeing"], hint: "today = période pas finie → PP" },
            { type: 'fill', difficulty: 'easy', question: 'We _____ (finish) the project last Friday.', answer: "finished", options: ["finished", "have finished", "have been finishing", "are finishing"], hint: "last Friday = passé fini → past simple" },
            { type: 'fill', difficulty: 'easy', question: 'She isn\'t here. She _____ (go) to the bank.', answer: "has gone", options: ["has gone", "has been", "went", "goes"], hint: "She's gone = elle y est encore → has gone" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'The price of oil _____ (rise) significantly this month.', answer: "has risen", options: ["has risen", "rose", "rises", "is rising"], hint: "this month = pas fini → PP" },
            { type: 'fill', difficulty: 'medium', question: '_____ you ever _____ (visit) Japan?', answer: "Have ... visited", options: ["Have ... visited", "Did ... visit", "Do ... visit", "Were ... visiting"], hint: "Expérience (ever) → PP" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise correctement le PP pour une période non finie ?', answer: "Sales have increased by 15% this quarter.", options: ["Sales have increased by 15% this quarter.", "Sales increased by 15% this quarter.", "Sales increase by 15% this quarter."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: '"I _____ (buy) a new laptop." "When _____ you _____ (buy) it?"', answer: "have bought ... did ... buy", options: ["have bought ... did ... buy", "bought ... did ... buy", "have bought ... have ... bought", "bought ... have ... bought"], hint: "Nouvelle (PP) → puis détails (past simple)" },
            { type: 'fill', difficulty: 'hard', question: 'She _____ (work) in marketing for 5 years. Then she _____ (move) to sales in 2022.', answer: "worked ... moved", options: ["worked ... moved", "has worked ... moved", "worked ... has moved", "has worked ... has moved"], hint: "Deux actions terminées dans un passé séquentiel → past simple" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We have launched the product two months ago.", options: ["We have launched the product two months ago.", "We have launched three products this year.", "We launched the product two months ago."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Revenue _____ (increase) by 12% so far this fiscal year, compared to the same period last year when it _____ (grow) by only 3%.', answer: "has increased ... grew", options: ["has increased ... grew", "increased ... grew", "has increased ... has grown", "increased ... has grown"] },
            { type: 'fill', difficulty: 'hard', question: 'The company _____ (establish) a strong presence in Asia. It _____ (enter) the Japanese market in 2015 and _____ (since/expand) to five other countries.', answer: "has established ... entered ... has since expanded", options: ["has established ... entered ... has since expanded", "established ... entered ... expanded", "has established ... has entered ... has since expanded", "established ... entered ... has since expanded"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC Part 5 : complétez. "The board _____ several changes to the corporate structure last quarter."', answer: "approved", options: ["approved", "has approved", "has been approving", "approves"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 14 — Present perfect and past 2
    // ─────────────────────────────────────────────
    14: {
        id: 14,
        title: 'Present perfect et past simple 2',
        category: 'present-perfect',
        explanation: `🇫🇷 Cette leçon approfondit le choix entre present perfect et past simple avec des <b>conversations</b> et des <b>expériences</b>.<br><br>
<b>Schéma de conversation typique :</b><br>
1. On commence avec le <b>present perfect</b> (expérience générale) :<br>
<i>"Have you read this book?"</i><br>
2. Puis on passe au <b>past simple</b> (détails) :<br>
<i>"Yes, I read it last summer. It was excellent."</i><br><br>
⚠️ <b>How long…?</b> change de sens selon le temps :<br>
• <i>How long <b>have</b> you <b>worked</b> here?</i> = tu travailles ENCORE ici<br>
• <i>How long <b>did</b> you <b>work</b> there?</i> = tu n'y travailles PLUS`,

        rules: [
            '🔵 **Expérience générale** (pas de date) → present perfect : _**Have** you **been** to Paris?_',
            '🔵 **Détails de l\'expérience** → past simple : _Yes, I **went** there in 2019._',
            '🔵 Une conversation **commence** au PP, puis **bascule** au past simple pour les détails',
            '🔵 **How long…?** situation actuelle (still true) → present perfect : _How long **have** you **worked** here?_ (tu y es encore)',
            '🔵 **How long…?** situation passée (now over) → past simple : _How long **did** you **work** there?_ (tu n\'y es plus)',
            '🔴 Mots-clés qui EXIGENT le past simple : yesterday, ago, last, when I was…, in (2005/June)'
        ],

        examples: [
            { text: "\"**Have** you **read** this book?\" — \"Yes, I **read** it last summer. It **was** excellent.\"", fr: "Tu as lu ce livre ? — Oui, je l'ai lu l'été dernier. C'était excellent.", correct: true },
            { text: "I **'ve worked** here for five years.", fr: "Je travaille ici depuis 5 ans. (j'y suis encore)", correct: true },
            { text: "I **worked** there for five years.", fr: "J'y ai travaillé pendant 5 ans. (je n'y suis plus)", correct: true },
            { text: "\"I **'ve bought** a new laptop.\" — \"Oh nice! Where **did** you **buy** it?\"", fr: "J'ai acheté un nouveau laptop. — Cool ! Où l'as-tu acheté ? (détail = past simple)", correct: true }
        ],

        tips: [
            "🇫🇷 En français, « j'ai travaillé là-bas pendant 5 ans » peut signifier les deux ! En anglais, vous DEVEZ choisir : I've worked (encore) vs I worked (fini).",
            "💡 Astuce conversation : commencez par le present perfect, puis passez au past simple quand on vous demande « When? Where? How? ».",
            "⚠️ « I've been there » = j'y suis allé (et revenu). « I've gone there » = j'y suis parti (et j'y suis encore)."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: '"_____ you ever _____ (try) Thai food?" "Yes, I _____ (have) some last week."', answer: "Have ... tried ... had", options: ["Have ... tried ... had", "Did ... try ... had", "Have ... tried ... have had", "Do ... try ... have"], hint: "PP pour la question, past simple pour le détail (last week)" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (work) for IBM for six years, then I left.', answer: "worked", options: ["worked", "have worked", "have been working", "was working"], hint: "then I left = c'est fini → past simple" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'How long _____ you _____ (be) in your current position?', answer: "have ... been", options: ["have ... been", "did ... be", "are ... being", "were ... being"], hint: "current position = encore actuel → PP" },
            { type: 'fill', difficulty: 'medium', question: '"I _____ (lose) my badge." "When _____ you last _____ (have) it?"', answer: "have lost ... did ... have", options: ["have lost ... did ... have", "lost ... did ... have", "have lost ... have ... had", "lost ... have ... had"], hint: "Résultat actuel (PP) → détail (past simple)" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle conversation bascule correctement du PP au past simple ?', answer: "\"I've met the new CEO.\" \"Really? When did you meet her?\"", options: ["\"I've met the new CEO.\" \"Really? When did you meet her?\"", "\"I've met the new CEO.\" \"Really? When have you met her?\"", "\"I met the new CEO.\" \"Really? When have you met her?\""] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'She _____ (hold) several senior positions throughout her career. Most recently, she _____ (serve) as VP of Operations from 2020 to 2024.', answer: "has held ... served", options: ["has held ... served", "held ... served", "has held ... has served", "held ... has served"], hint: "Carrière globale (PP) + période précise terminée (past simple)" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "How long did you be a teacher?", options: ["How long did you be a teacher?", "How long have you been a teacher?", "How long were you a teacher?"] },
            { type: 'fill', difficulty: 'hard', question: '"How long _____ you _____ (work) at your previous job?" "I _____ (be) there for 8 years before I _____ (join) this company."', answer: "did ... work ... was ... joined", options: ["did ... work ... was ... joined", "have ... worked ... was ... joined", "did ... work ... have been ... joined", "have ... worked ... have been ... have joined"], hint: "Previous job = terminé → tout au past simple" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The firm _____ (represent) major clients in the tech industry. Last year, it _____ (win) a landmark case for a Fortune 500 company.', answer: "has represented ... won", options: ["has represented ... won", "represented ... won", "has represented ... has won", "represented ... has won"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : quelle phrase est correcte ?', answer: "\"Have you ever presented at an international conference?\" \"Yes, I presented at a conference in Seoul in 2023.\"", options: ["\"Have you ever presented at an international conference?\" \"Yes, I presented at a conference in Seoul in 2023.\"", "\"Have you ever presented at an international conference?\" \"Yes, I have presented at a conference in Seoul in 2023.\"", "\"Did you ever present at an international conference?\" \"Yes, I presented at a conference in Seoul in 2023.\""] },
            { type: 'fill', difficulty: 'hard', question: 'Our CEO _____ (transform) the company over the past decade. When she _____ (take) over in 2016, the revenue _____ (be) under $10M.', answer: "has transformed ... took ... was", options: ["has transformed ... took ... was", "transformed ... took ... was", "has transformed ... has taken ... was", "has transformed ... took ... has been"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 15 — Past perfect (I had done)
    // ─────────────────────────────────────────────
    15: {
        id: 15,
        title: 'Past perfect (I had done)',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>Le Past Perfect</b> correspond au <b>plus-que-parfait</b> français. C'est « le passé du passé » — un événement qui s'est produit <b>AVANT un autre événement passé</b>.<br><br>
• <i>Quand je suis arrivé, la réunion <b>avait déjà commencé</b>.</i><br>
= <i>When I arrived, the meeting <b>had already started</b>.</i><br><br>
📐 <b>Formation</b> : sujet + <b>had + participe passé</b> (même forme pour toutes les personnes)<br><br>
💡 Bonne nouvelle pour les francophones : le past perfect fonctionne EXACTEMENT comme le plus-que-parfait français !`,

        rules: [
            '📐 Formation : **had + participe passé** (même forme pour toutes les personnes)',
            '🔵 Action qui s\'est passée **AVANT** une autre action passée : _When I arrived, the meeting **had already started**._',
            '🔵 Avec **when, by the time, before, after, already, just, never** : _**By the time** we got there, the film **had finished**._',
            '🔵 Pour expliquer une cause dans le passé : _I wasn\'t hungry because I **had eaten** lunch._ (manger = avant, pas faim = après)',
            '🔵 Négation : **had not (hadn\'t) + participe passé** : _She **hadn\'t seen** the email before the meeting._',
            '💡 Si la séquence est déjà claire, le past simple suffit souvent : _I got up, had breakfast, and left for work._ (ordre chronologique évident)'
        ],

        examples: [
            { text: "When I arrived at the party, most people **had already left**.", fr: "Quand je suis arrivé à la fête, la plupart des gens étaient déjà partis.", correct: true },
            { text: "She didn't want to go to the cinema because she **had seen** the film before.", fr: "Elle ne voulait pas aller au cinéma parce qu'elle avait déjà vu le film.", correct: true },
            { text: "I **had never flown** before my trip to New York.", fr: "Je n'avais jamais pris l'avion avant mon voyage à New York.", correct: true },
            { text: "~~If I had knew~~ → If I **had known** about the problem…", fr: "Toujours le PARTICIPE PASSÉ après had (pas la forme du passé)", correct: false, note: "After had → toujours le participe passé : known (pas knew)" }
        ],

        tips: [
            "🇫🇷 Le past perfect = votre plus-que-parfait français. « J'avais mangé » = I had eaten. C'est l'un des rares cas où la traduction directe fonctionne !",
            "💡 Utilisez-le quand vous racontez une histoire et que vous faites un « retour en arrière » pour expliquer quelque chose.",
            "⚠️ N'abusez pas du past perfect : si l'ordre chronologique est clair (then, after that, next), le past simple suffit."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'When I got to the station, the train _____ (already/leave).', answer: "had already left", options: ["had already left", "already left", "has already left", "already leaves"], hint: "Action AVANT l'arrivée → past perfect" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (never/visit) a foreign country before her first business trip.', answer: "had never visited", options: ["had never visited", "never visited", "has never visited", "never visits"], hint: "Jamais avant ce moment passé → had never + PP" },
            { type: 'fill', difficulty: 'easy', question: 'I felt ill because I _____ (eat) too much at lunch.', answer: "had eaten", options: ["had eaten", "ate", "have eaten", "was eating"], hint: "Cause (avant) → past perfect" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'By the time they arrived, we _____ (finish) the presentation.', answer: "had finished", options: ["had finished", "finished", "have finished", "were finishing"], hint: "By the time + past simple → past perfect pour l'action antérieure" },
            { type: 'fill', difficulty: 'medium', question: 'The company went bankrupt because it _____ (not/adapt) to the new market.', answer: "hadn't adapted", options: ["hadn't adapted", "didn't adapt", "hasn't adapted", "wasn't adapting"], hint: "Cause antérieure à la faillite → past perfect" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase montre correctement que l\'action 1 s\'est passée AVANT l\'action 2 ?', answer: "I couldn't enter the building because I had forgotten my access card.", options: ["I couldn't enter the building because I had forgotten my access card.", "I couldn't enter the building because I forgot my access card.", "I can't enter the building because I had forgotten my access card."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The CEO _____ (already/announce) his retirement before the board _____ (have) a chance to discuss it.', answer: "had already announced ... had", options: ["had already announced ... had", "already announced ... had", "has already announced ... had", "had already announced ... has had"], hint: "Annonce (avant) → PP, discussion (chronologiquement après) → past simple" },
            { type: 'fill', difficulty: 'hard', question: 'By the time the new policy _____ (be) implemented, most employees _____ (already/find) workarounds.', answer: "was ... had already found", options: ["was ... had already found", "had been ... already found", "was ... already found", "had been ... had already found"], hint: "Implementation (moment repère) → past simple / trouver des solutions (avant) → PP" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "By the time we arrived, the meeting had already began.", options: ["By the time we arrived, the meeting had already began.", "By the time we arrived, the meeting had already begun.", "When we arrived, the meeting had already started."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The auditors discovered that the company _____ (overstate) its profits for the past three years.', answer: "had overstated", options: ["had overstated", "overstated", "has overstated", "was overstating"] },
            { type: 'fill', difficulty: 'hard', question: 'Before she _____ (join) our company, she _____ (work) at three Fortune 500 firms and _____ (earn) an MBA from Harvard.', answer: "joined ... had worked ... had earned", options: ["joined ... had worked ... had earned", "joined ... worked ... earned", "had joined ... worked ... earned", "joined ... had worked ... earned"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : choisissez la meilleure option. "The project _____ significantly over budget by the time management decided to intervene."', answer: "had gone", options: ["had gone", "went", "has gone", "was going"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 16 — Past perfect continuous
    // ─────────────────────────────────────────────
    16: {
        id: 16,
        title: 'Past perfect continuous (I had been doing)',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>Le Past Perfect Continuous</b> décrit une activité qui était <b>en cours pendant un certain temps AVANT</b> un autre événement passé. Il met l'accent sur la <b>durée</b> de l'action antérieure.<br><br>
C'est le « film au ralenti du passé » : l'action se déroulait pendant un moment, puis quelque chose s'est passé.<br><br>
• <i>Quand il a pris sa retraite, il <b>travaillait dans l'entreprise depuis 35 ans</b>.</i><br>
= <i>When he retired, he <b>had been working</b> for the company for 35 years.</i><br><br>
📐 <b>Formation</b> : sujet + <b>had been</b> + verbe<b>-ing</b>`,

        rules: [
            '📐 Formation : **had been + verbe-ing**',
            '🔵 Activité en cours **pendant un certain temps AVANT** un autre événement passé : _When he retired, he **had been working** here for 35 years._',
            '🔵 Met l\'accent sur la **durée** de l\'action antérieure : _She was tired because she **had been studying** all night._',
            '🔵 Le résultat de l\'action était **visible** : _The ground was wet — it **had been raining**._',
            '🔵 Comparez avec le past perfect simple : _I **had been running** (accent sur l\'activité/durée) vs I **had run** 10 km (accent sur le résultat/quantité)',
            '🔴 Verbes d\'état → past perfect simple : _He **had known** her for years._ (PAS : ~~had been knowing~~)'
        ],

        examples: [
            { text: "I **had been waiting** for an hour before the bus finally came.", fr: "J'attendais depuis 1 heure quand le bus est enfin arrivé.", correct: true },
            { text: "He was out of breath — he **had been running**.", fr: "Il était essoufflé — il avait couru. (résultat visible)", correct: true },
            { text: "She got the promotion because she **had been performing** exceptionally well.", fr: "Elle a eu la promotion parce qu'elle travaillait exceptionnellement bien.", correct: true },
            { text: "They were exhausted. They **had been travelling** for 18 hours.", fr: "Ils étaient épuisés. Ils voyageaient depuis 18 heures.", correct: true }
        ],

        tips: [
            "🇫🇷 En français, on utilise souvent l'imparfait avec « depuis » : « il travaillait depuis 5 ans quand… ». En anglais → past perfect continuous : « he had been working for 5 years when… ».",
            "💡 Quand vous voyez un résultat physique dans un récit au passé (fatigué, sale, mouillé), pensez au past perfect continuous.",
            "⚠️ N'oubliez pas : verbes d'état = simple (had known, had had, had been), actions = continuous possible (had been working, had been running)."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'She was very tired because she _____ (work) since 6 a.m.', answer: "had been working", options: ["had been working", "has been working", "was working", "worked"], hint: "Activité en cours AVANT la fatigue → past perfect continuous" },
            { type: 'fill', difficulty: 'easy', question: 'The streets were wet. It _____ (rain) all night.', answer: "had been raining", options: ["had been raining", "has been raining", "rained", "was raining"], hint: "Résultat visible dans le passé → past perfect continuous" },
            { type: 'fill', difficulty: 'easy', question: 'When the factory closed, he _____ (work) there for 20 years.', answer: "had been working", options: ["had been working", "worked", "has been working", "was working"], hint: "Durée AVANT un événement passé" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'They _____ (negotiate) for months before they finally reached an agreement.', answer: "had been negotiating", options: ["had been negotiating", "negotiated", "have been negotiating", "were negotiating"], hint: "Durée (for months) avant le résultat (agreement) → PPC" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise correctement le past perfect continuous pour la durée ?', answer: "By the time I was promoted, I had been working there for 10 years.", options: ["By the time I was promoted, I had been working there for 10 years.", "By the time I was promoted, I worked there for 10 years.", "By the time I was promoted, I have been working there for 10 years."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'Before the merger was announced, the two companies _____ (discuss) terms for over a year. They _____ (hold) more than 50 meetings during that time.', answer: "had been discussing ... had held", options: ["had been discussing ... had held", "had discussed ... had been holding", "discussed ... held", "had been discussing ... held"], hint: "Activité continue (discussing → PPC) + quantité/résultat (50 meetings → PP simple)" },
            { type: 'fill', difficulty: 'hard', question: 'The engine _____ (overheat) for some time before the driver _____ (notice) the warning light.', answer: "had been overheating ... noticed", options: ["had been overheating ... noticed", "overheated ... noticed", "had been overheating ... had noticed", "was overheating ... noticed"], hint: "Activité en cours (PPC) + moment d'interruption (past simple)" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She had been knowing the answer before the teacher asked.", options: ["She had been knowing the answer before the teacher asked.", "She had been waiting for 30 minutes before the bus arrived.", "The company had been losing money for years before it went bankrupt."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Before the system crash, the IT team _____ (experience) intermittent issues for weeks.', answer: "had been experiencing", options: ["had been experiencing", "experienced", "has been experiencing", "was experiencing"] },
            { type: 'fill', difficulty: 'hard', question: 'The employees _____ (request) better working conditions for months before management finally _____ (agree) to negotiate. During that period, they _____ (submit) five formal complaints.', answer: "had been requesting ... agreed ... had submitted", options: ["had been requesting ... agreed ... had submitted", "requested ... agreed ... submitted", "had been requesting ... had agreed ... had submitted", "had been requesting ... agreed ... submitted"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : complétez. "The machine _____ properly before the technician arrived to fix it."', answer: "had not been functioning", options: ["had not been functioning", "was not functioning", "has not been functioning", "did not function"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 17 — Have and have got
    // ─────────────────────────────────────────────
    17: {
        id: 17,
        title: 'Have and have got',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>Have</b> et <b>have got</b> expriment tous les deux la <b>possession</b>, mais fonctionnent différemment grammaticalement.<br><br>
• <i>I <b>have</b> a car.</i> = <i>I<b>'ve got</b> a car.</i> (même sens : j'ai une voiture)<br><br>
⚠️ <b>Attention</b> : « have got » ne s'utilise QUE pour la possession ou les caractéristiques. Pour les ACTIONS (have a shower, have lunch, have fun), on utilise seulement <b>have</b>.<br><br>
💡 Pour le TOEIC, <b>have</b> (américain) est plus courant que <b>have got</b> (britannique).`,

        rules: [
            '🔵 **I have** = **I\'ve got** (possession) : _I have a car = I\'ve got a car._',
            '🔵 **Have** → do/does dans les questions et négations : _**Do** you **have** a passport? / I **don\'t have** a car._',
            '🔵 **Have got** → inversion dans les questions : _**Have** you **got** a passport? / I **haven\'t got** a car._',
            '🔴 Pour les **actions** → seulement **have** : _I **have** breakfast at 8._ / _She **has** a shower every morning._ (PAS : ~~I\'ve got breakfast~~)',
            '🔵 **Have got** est plus courant en anglais britannique. **Have** est plus courant en anglais américain et au TOEIC.',
            '🔴 Au passé → seulement **had** : _I **had** a blue car when I was young._ (PAS : ~~I had got~~)'
        ],

        examples: [
            { text: "I **have** two brothers. = I **'ve got** two brothers.", fr: "J'ai deux frères. (les deux formes sont correctes)", correct: true },
            { text: "**Do** you **have** any questions? = **Have** you **got** any questions?", fr: "Avez-vous des questions ? (les deux sont correctes)", correct: true },
            { text: "I usually **have** lunch at 1 p.m.", fr: "Je déjeune d'habitude à 13h. (action → seulement have, PAS have got)", correct: true },
            { text: "~~I've got breakfast at 7.~~ → I **have** breakfast at 7.", fr: "Prendre le petit-déjeuner = action → seulement have", correct: false, note: "Les actions n'utilisent PAS « have got »" }
        ],

        tips: [
            "🇫🇷 « J'ai » en français = « I have » ou « I've got » en anglais (pour la possession). Mais « j'ai mal à la tête » = « I have a headache » (pas I've got, car c'est une expression).",
            "💡 Au TOEIC, utilisez « have » (forme américaine) — c'est plus simple et toujours correct.",
            "⚠️ Les expressions avec « have » : have breakfast/lunch/dinner, have a bath/shower, have fun, have a good time → JAMAIS « have got »."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: '_____ you _____ a meeting at 3 o\'clock?', answer: "Do ... have", options: ["Do ... have", "Have ... got", "Are ... having", "Did ... have"], hint: "Forme américaine courante → Do you have" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (not/have) any experience in marketing.', answer: "doesn't have", options: ["doesn't have", "hasn't got", "haven't got", "don't have"], hint: "doesn't have = forme standard" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ a terrible headache. Can I leave early?', answer: "have", options: ["have", "am having", "had", "have had"], hint: "État actuel → have" },
            // MEDIUM
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise INCORRECTEMENT « have got » pour une action ?', answer: "I've got breakfast at 7 every morning.", options: ["I've got breakfast at 7 every morning.", "I've got a new laptop.", "I've got two sisters."] },
            { type: 'correct', difficulty: 'medium', question: 'Quelles deux phrases veulent dire la même chose ?', answer: "\"I have a car\" et \"I've got a car\"", options: ["\"I have a car\" et \"I've got a car\"", "\"I have lunch\" et \"I've got lunch\"", "\"I had a car\" et \"I'd got a car\""] },
            { type: 'fill', difficulty: 'medium', question: 'We _____ (not/have) enough time to finish the project.', answer: "don't have", options: ["don't have", "haven't got", "doesn't have", "aren't having"], hint: "We → don't have" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The company _____ (have) over 5,000 employees globally. It _____ (have) its annual meeting next week.', answer: "has ... is having", options: ["has ... is having", "has got ... has", "is having ... has", "has ... has"], hint: "Possession (simple) vs événement programmé (continuous)" },
            { type: 'correct', difficulty: 'hard', question: 'Dans un contexte TOEIC formel, quelle formulation est préférable ?', answer: "Does the company have a return policy?", options: ["Does the company have a return policy?", "Has the company got a return policy?", "Is the company having a return policy?"] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Each department _____ (have) its own budget and reporting structure.', answer: "has", options: ["has", "has got", "is having", "have"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC Part 5 : choisissez la meilleure option. "The applicant _____ extensive experience in international trade."', answer: "has", options: ["has", "has got", "is having", "have"] },
            { type: 'fill', difficulty: 'hard', question: '_____ the hotel _____ (have) a conference room available for next Thursday? We _____ (have) an important client meeting.', answer: "Does ... have ... are having", options: ["Does ... have ... are having", "Has ... got ... have", "Does ... have ... have", "Is ... having ... are having"], hint: "Disponibilité (simple have) + événement programmé (continuous)" },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 18 — Used to (do)
    // ─────────────────────────────────────────────
    18: {
        id: 18,
        title: 'Used to (do)',
        category: 'present-perfect',
        explanation: `🇫🇷 <b>Used to</b> décrit des <b>habitudes ou états du passé qui ne sont PLUS vrais aujourd'hui</b>.<br><br>
C'est l'équivalent de « <b>avant, je… / autrefois, je…</b> » en français :<br>
• <i>I <b>used to</b> smoke.</i> = Avant, je fumais. (Maintenant, je ne fume plus.)<br>
• <i>This building <b>used to be</b> a cinema.</i> = Ce bâtiment était autrefois un cinéma.<br><br>
⚠️ <b>3 structures à ne PAS confondre</b> :<br>
• <b>used to do</b> = habitude passée (I used to play tennis = avant, je jouais au tennis)<br>
• <b>be used to doing</b> = être habitué à (I'm used to working late = je suis habitué à travailler tard)<br>
• <b>get used to doing</b> = s'habituer à (I'm getting used to the cold = je m'habitue au froid)`,

        rules: [
            '🔵 **Used to + verbe** = habitude/état passé qui n\'est PLUS vrai : _I **used to smoke**, but I gave up._',
            '🔴 Négation : **didn\'t use to** : _He **didn\'t use to** like coffee._ (Note : use, PAS used)',
            '🔴 Question : **Did … use to…?** : _**Did** you **use to** live in Paris?_',
            '🔵 Pour les **états passés** : _This building **used to be** a cinema._ (Ce n\'est plus un cinéma.)',
            '⚠️ Ne confondez PAS : **used to do** (habitude passée) ≠ **be used to doing** (être habitué à) ≠ **get used to doing** (s\'habituer à)',
            '🔵 **would** peut aussi décrire des habitudes passées (actions SEULEMENT, PAS états) : _We **would go** to the beach every summer._'
        ],

        examples: [
            { text: "I **used to work** in a factory, but now I work in an office.", fr: "Avant, je travaillais dans une usine, mais maintenant je travaille dans un bureau.", correct: true },
            { text: "**Did** you **use to** play any musical instruments?", fr: "Est-ce que tu jouais d'un instrument avant ?", correct: true },
            { text: "She **didn't use to** like vegetables, but now she loves them.", fr: "Avant, elle n'aimait pas les légumes, mais maintenant elle les adore.", correct: true },
            { text: "I **am used to** working hard.", fr: "Je suis habitué à travailler dur. (≠ habitude passée !)", correct: true },
            { text: "~~I used to knowing him.~~ → I **used to know** him.", fr: "Used to + verbe de BASE (pas -ing)", correct: false, note: "Used to + base form (infinitif sans to)" }
        ],

        tips: [
            "🇫🇷 « Avant/Autrefois, je + imparfait » = used to : « Avant, je jouais au foot » → I used to play football.",
            "⚠️ Le piège « be used to doing » est TRÈS testé au TOEIC ! « I'm used to working late » = je suis habitué à travailler tard (PAS une habitude du passé).",
            "💡 Test rapide : si vous pouvez ajouter « but now I don't / but not anymore », c'est « used to + base verb ». Si c'est « je suis habitué à », c'est « be used to + -ing »."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I _____ (use/play) tennis a lot, but now I prefer swimming.', answer: "used to play", options: ["used to play", "use to play", "am used to playing", "was used to play"], hint: "Habitude passée → used to + base verb" },
            { type: 'fill', difficulty: 'easy', question: 'This area _____ (use/be) very quiet, but now it\'s very busy.', answer: "used to be", options: ["used to be", "use to be", "was used to be", "is used to"], hint: "État passé → used to be" },
            { type: 'fill', difficulty: 'easy', question: '_____ you _____ (use/live) in the city centre?', answer: "Did ... use to live", options: ["Did ... use to live", "Did ... used to live", "Have ... used to live", "Do ... use to live"], hint: "Question → Did + use to (sans -d)" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'She _____ (not/use/like) her job, but things have improved.', answer: "didn't use to like", options: ["didn't use to like", "didn't used to like", "wasn't used to like", "hasn't used to like"], hint: "Négation → didn't use to (sans -d)" },
            { type: 'fill', difficulty: 'medium', question: 'I\'ve lived in England for 3 years, so I _____ (be used to/drive) on the left.', answer: "am used to driving", options: ["am used to driving", "used to drive", "am used to drive", "get used to drive"], hint: "Être habitué à = be used to + -ing" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase décrit un état passé qui N\'EST PLUS vrai ?', answer: "This building used to be a hospital.", options: ["This building used to be a hospital.", "This building is used to be a hospital.", "This building was used to being a hospital."] },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'When I first moved to Japan, I found it hard to _____ (get used to/eat) with chopsticks, but now I _____ (be used to/use) them.', answer: "get used to eating ... am used to using", options: ["get used to eating ... am used to using", "used to eat ... used to use", "get used to eat ... am used to use", "get used to eating ... used to use"], hint: "S'habituer à (get used to + -ing) / être habitué à (be used to + -ing)" },
            { type: 'fill', difficulty: 'hard', question: 'The company _____ (use/manufacture) products locally, but it _____ (since/outsource) production to Asia.', answer: "used to manufacture ... has since outsourced", options: ["used to manufacture ... has since outsourced", "used to manufacture ... since outsourced", "use to manufacture ... has since outsourced", "was used to manufacturing ... has since outsourced"], hint: "Habitude passée (used to) + changement (present perfect)" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I didn't used to like spicy food.", options: ["I didn't used to like spicy food.", "I didn't use to like spicy food.", "I used to dislike spicy food."] },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The office _____ (use/be) located downtown, but the company _____ (relocate) to the suburbs last year.', answer: "used to be ... relocated", options: ["used to be ... relocated", "used to be ... has relocated", "was used to being ... relocated", "use to be ... relocated"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : quelle phrase est correcte ?', answer: "Employees are now used to working remotely after three years of the new policy.", options: ["Employees are now used to working remotely after three years of the new policy.", "Employees now used to work remotely after three years of the new policy.", "Employees are now used to work remotely after three years of the new policy."] },
            { type: 'fill', difficulty: 'hard', question: 'When Mr. Tanaka first joined the London office, he _____ (not/be used to/communicate) in English all day. Now he _____ (be/completely/used to) it.', answer: "wasn't used to communicating ... is completely used to", options: ["wasn't used to communicating ... is completely used to", "didn't use to communicate ... used to", "wasn't used to communicate ... is completely used to", "didn't used to communicating ... is completely used to"] },
        ]
    },
};
