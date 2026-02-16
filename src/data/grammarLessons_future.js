// ============================================
// Grammar Lessons — French explanations for French-speaking learners
// Units 19-25: Future Tenses
// Structure: lesson (cours) / exercises (exercices) / evaluation (évaluation)
// Difficulty: easy → medium → hard
// ============================================

export const grammarLessonsFuture = {

    // ─────────────────────────────────────────────
    // UNIT 19 — Present tenses (I am doing / I do) for the future
    // ─────────────────────────────────────────────
    19: {
        id: 19,
        title: 'Present tenses (I am doing / I do) for the future',
        category: 'future',
        explanation: `🇫🇷 <b>Utiliser le présent pour parler du futur</b> — En anglais, on utilise souvent des temps présents pour parler d'événements futurs. C'est aussi le cas en français ! Quand vous dites « <i>je pars demain</i> », vous utilisez le présent pour parler du futur.<br><br>
📌 <b>Present continuous (I am doing)</b> → pour des <b>arrangements personnels déjà organisés</b> : rendez-vous, réservations, plans confirmés avec d'autres personnes.<br>
• <i>I<b>'m meeting</b> Tom tomorrow.</i> = J'ai rendez-vous avec Tom demain. (C'est arrangé, confirmé.)<br>
• <i>We<b>'re having</b> dinner with the Smiths on Friday.</i> = Nous dînons chez les Smith vendredi. (C'est prévu.)<br><br>
📌 <b>Present simple (I do)</b> → pour des <b>horaires, programmes, emplois du temps officiels</b> : transports, cinéma, cours, événements fixes.<br>
• <i>The train <b>leaves</b> at 9:30.</i> = Le train part à 9h30. (Horaire officiel.)<br>
• <i>The conference <b>starts</b> on Monday.</i> = La conférence commence lundi. (Programme fixe.)<br><br>
⚠️ <b>Piège</b> : Ne confondez pas les deux ! Le present continuous = arrangement personnel. Le present simple = horaire/programme impersonnel.`,

        rules: [
            '📐 **Present continuous** pour le futur : **sujet + am/is/are + verbe-ing** → arrangement personnel déjà organisé : _I\'m meeting Tom tomorrow._ (J\'ai rendez-vous avec Tom demain.)',
            '📐 **Present simple** pour le futur : **sujet + verbe de base** → horaire, programme officiel, emploi du temps fixe : _The train leaves at 9:30._ (Le train part à 9h30.)',
            '🔵 Present continuous = on a **organisé** l\'événement avec quelqu\'un : _I\'m having lunch with Sarah on Tuesday._ (C\'est un rendez-vous pris.)',
            '🔵 Present simple = **horaire officiel** qu\'on ne contrôle pas : _The movie starts at 8._ (Horaire du cinéma.)',
            '🔴 On ne dit PAS : ~~_The train is leaving at 9:30._~~ pour un horaire régulier → _The train **leaves** at 9:30._',
            '🔴 On ne dit PAS : ~~_I leave with Tom tomorrow._~~ pour un arrangement → _I **am leaving** with Tom tomorrow._'
        ],

        examples: [
            { text: "I **'m meeting** Tom tomorrow at 3 o'clock.", fr: "J'ai rendez-vous avec Tom demain à 3 heures. (arrangement personnel)", correct: true },
            { text: "What time **does** the film **start**?", fr: "À quelle heure commence le film ? (horaire fixe)", correct: true },
            { text: "We **'re going** to a concert tonight.", fr: "Nous allons à un concert ce soir. (plan organisé)", correct: true },
            { text: "The meeting **starts** at 2 p.m. sharp.", fr: "La réunion commence à 14h précises. (programme officiel)", correct: true },
            { text: "~~The train is leaving at 6.~~ → The train **leaves** at 6.", fr: "Horaire officiel → present simple, pas continuous.", correct: false, note: "Pour un horaire de transport officiel, on utilise le present simple." },
            { text: "~~I meet John tomorrow for lunch.~~ → I **'m meeting** John tomorrow for lunch.", fr: "Arrangement avec quelqu'un → present continuous.", correct: false, note: "C'est un rendez-vous arrangé avec une personne → present continuous." }
        ],

        tips: [
            "🇫🇷 En français, « je pars demain » utilise le présent pour le futur — c'est pareil en anglais ! Mais il faut choisir QUEL présent : continuous (arrangement) ou simple (horaire).",
            "⚠️ Erreur typique des francophones : utiliser « will » partout pour le futur. Pour un plan arrangé, dites « I'm meeting him at 3 » (PAS : I will meet him at 3).",
            "💡 Astuce TOEIC : si la phrase mentionne un horaire officiel (vol, train, cours, conférence), c'est presque toujours le present simple. Si c'est un arrangement personnel, c'est le present continuous."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'The conference _____ (start) at 9 a.m. on Monday.', answer: "starts", options: ["starts", "is starting", "will start", "started"], hint: "Programme officiel → present simple" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (meet) Sarah for coffee after work today.', answer: "am meeting", options: ["am meeting", "meet", "will meet", "meets"], hint: "Rendez-vous arrangé avec quelqu'un → present continuous" },
            { type: 'fill', difficulty: 'easy', question: 'What time _____ the bus _____ (arrive)?', answer: "does ... arrive", options: ["does ... arrive", "is ... arriving", "will ... arrive", "has ... arrived"], hint: "Horaire de bus → present simple" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'We _____ (fly) to London next Tuesday. The tickets are booked.', answer: "are flying", options: ["are flying", "fly", "will fly", "flew"], hint: "Les billets sont réservés = arrangement confirmé" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise correctement le présent pour le futur ?', answer: "The train leaves at 7:15 tomorrow morning.", options: ["The train leaves at 7:15 tomorrow morning.", "The train is leaving at 7:15 tomorrow morning.", "The train will leave at 7:15 tomorrow morning.", "The train left at 7:15 tomorrow morning."], hint: "Horaire officiel → quel présent ?" },
            { type: 'fill', difficulty: 'medium', question: 'I _____ (have) dinner with my boss tonight. We booked the restaurant yesterday.', answer: "am having", options: ["am having", "have", "will have", "had"], hint: "Restaurant réservé = arrangement" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The semester _____ (begin) on September 5th and _____ (end) on December 20th.', answer: "begins ... ends", options: ["begins ... ends", "is beginning ... is ending", "will begin ... will end", "began ... ended"], hint: "Calendrier académique officiel" },
            { type: 'correct', difficulty: 'hard', question: 'Un collègue vous dit : « What are you doing this weekend? » Quelle est la meilleure réponse ?', answer: "I'm visiting my parents.", options: ["I'm visiting my parents.", "I visit my parents.", "I will visit my parents.", "I do visit my parents."], hint: "Plan personnel pour le week-end" },
            { type: 'fill', difficulty: 'hard', question: 'The board of directors _____ (meet) next Thursday to discuss the merger. It\'s been arranged.', answer: "is meeting", options: ["is meeting", "meets", "will meet", "met"], hint: "Réunion arrangée entre personnes → continuous, même en contexte professionnel" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Our flight _____ (depart) at 6:45 a.m. according to the schedule.', answer: "departs", options: ["departs", "is departing", "will depart", "departed"] },
            { type: 'fill', difficulty: 'hard', question: 'I _____ (see) the dentist on Friday. I made the appointment last week.', answer: "am seeing", options: ["am seeing", "see", "will see", "saw"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The exhibition is opening on March 1st. (horaire officiel du musée)", options: ["The exhibition is opening on March 1st. (horaire officiel du musée)", "I'm playing tennis with Mark on Saturday.", "The class starts at 10 a.m.", "We're having a team meeting at 3 p.m."] },
            { type: 'fill', difficulty: 'hard', question: 'We _____ (launch) the new product next month. Everything is organized.', answer: "are launching", options: ["are launching", "launch", "will launch", "launched"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 20 — (I'm) going to (do)
    // ─────────────────────────────────────────────
    20: {
        id: 20,
        title: "(I'm) going to (do)",
        category: 'future',
        explanation: `🇫🇷 <b>Be going to + infinitif</b> est l'équivalent presque parfait du français « <b>aller + infinitif</b> » !<br>
• <i>Je <b>vais acheter</b> une voiture</i> = <i>I <b>'m going to buy</b> a car.</i><br>
• <i>Il <b>va pleuvoir</b></i> = <i>It <b>'s going to rain</b>.</i><br><br>
📌 <b>Deux utilisations principales :</b><br>
1️⃣ <b>Intentions / Plans déjà décidés</b> : On a déjà pris la décision AVANT le moment de parole.<br>
• <i>I <b>'m going to</b> study medicine.</i> = Je vais étudier la médecine. (C'est décidé.)<br><br>
2️⃣ <b>Prédictions basées sur des preuves visibles</b> : On voit quelque chose qui nous permet de prédire.<br>
• <i>Look at those clouds! It <b>'s going to</b> rain.</i> = Regarde ces nuages ! Il va pleuvoir. (On voit les nuages → preuve visible.)<br><br>
📐 <b>Formation</b> : sujet + <b>am/is/are + going to</b> + verbe de base<br>
⚠️ À l'oral, « going to » se prononce souvent « gonna » — mais n'écrivez JAMAIS « gonna » au TOEIC !`,

        rules: [
            '📐 Formation : **sujet + am/is/are + going to + verbe de base** → _I\'m going to buy a car._',
            '🔵 **Intention / décision déjà prise** : _I\'m going to apply for that job._ (J\'ai décidé de postuler.)',
            '🔵 **Prédiction basée sur une preuve visible** : _Look at those clouds — it\'s going to rain._ (On voit les nuages → il va pleuvoir.)',
            '🔴 Négation : **sujet + am/is/are + not + going to** : _I\'m not going to tell her._ (Je ne vais pas lui dire.)',
            '🔴 Question : **Am/Is/Are + sujet + going to ?** : _Are you going to come?_ (Tu vas venir ?)',
            '⚠️ Ne confondez pas _going to_ (futur) et _going to_ (aller à un lieu) : _I\'m **going to buy** milk_ (futur) vs _I\'m **going to** the shop_ (déplacement).'
        ],

        examples: [
            { text: "I **'m going to** buy a new laptop this weekend.", fr: "Je vais acheter un nouvel ordinateur portable ce week-end. (décision prise)", correct: true },
            { text: "Look at those dark clouds! It **'s going to** rain.", fr: "Regarde ces nuages sombres ! Il va pleuvoir. (preuve visible)", correct: true },
            { text: "She **'s going to** start a new job in September.", fr: "Elle va commencer un nouveau travail en septembre. (plan décidé)", correct: true },
            { text: "Be careful! You **'re going to** spill your coffee!", fr: "Fais attention ! Tu vas renverser ton café ! (preuve visible — on le voit)", correct: true },
            { text: "~~I'm going to going~~ to the store. → I **'m going to go** to the store.", fr: "Je vais aller au magasin. (going to + verbe de base, pas de double -ing !)", correct: false, note: "Après 'going to', on met le verbe de BASE : go, buy, eat — jamais de -ing." }
        ],

        tips: [
            "🇫🇷 « Going to » fonctionne exactement comme « aller + infinitif » en français : « je vais manger » = I'm going to eat. Exploitez cette similitude !",
            "⚠️ Erreur fréquente des francophones : oublier « to » → ~~I'm going buy~~ → I'm going **to** buy.",
            "💡 Astuce TOEIC : si la question parle d'un plan déjà décidé ou d'une preuve visible (Look! / Watch out!), pensez « going to ».",
            "🇫🇷 À l'oral, les anglophones disent « gonna » mais au TOEIC, la forme écrite est toujours « going to »."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I _____ (going to / buy) a new car next month.', answer: "am going to buy", options: ["am going to buy", "going to buy", "will going to buy", "am going buy"], hint: "Formation : am/is/are + going to + verbe de base" },
            { type: 'fill', difficulty: 'easy', question: 'Look! That tree _____ (going to / fall)!', answer: "is going to fall", options: ["is going to fall", "going to fall", "will fall", "falls"], hint: "On voit un signe → prédiction basée sur une preuve" },
            { type: 'fill', difficulty: 'easy', question: 'They _____ (going to / move) to a bigger office next year.', answer: "are going to move", options: ["are going to move", "going to move", "will going to move", "is going to move"], hint: "They → are + going to + verbe de base" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: '_____ you _____ (going to / apply) for the manager position?', answer: "Are ... going to apply", options: ["Are ... going to apply", "Do ... going to apply", "Will ... going to apply", "Is ... going to apply"], hint: "Question avec you → Are you going to... ?" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase exprime une prédiction basée sur une preuve visible ?', answer: "Watch out! You're going to hit that car!", options: ["Watch out! You're going to hit that car!", "I think you will hit that car.", "You hit that car every day.", "You are hitting that car."], hint: "Preuve visible → quel temps ?" },
            { type: 'fill', difficulty: 'medium', question: 'She _____ (not / going to / accept) the offer. She already told me.', answer: "is not going to accept", options: ["is not going to accept", "not going to accept", "doesn't going to accept", "won't going to accept"], hint: "Négation : sujet + is/am/are + not + going to" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The company _____ (going to / restructure) its entire sales department. The board approved it last week.', answer: "is going to restructure", options: ["is going to restructure", "will restructure", "restructures", "is restructuring"], hint: "Décision déjà approuvée = plan décidé" },
            { type: 'correct', difficulty: 'hard', question: 'Choisissez la phrase qui utilise correctement « going to » pour une intention :', answer: "I've made up my mind — I'm going to resign.", options: ["I've made up my mind — I'm going to resign.", "I've made up my mind — I will resign.", "I've made up my mind — I resign.", "I've made up my mind — I'm resigning."], hint: "Décision déjà prise AVANT le moment de parole" },
            { type: 'fill', difficulty: 'hard', question: 'Based on current trends, revenue _____ (going to / decrease) by 15% this quarter.', answer: "is going to decrease", options: ["is going to decrease", "will decrease", "decreases", "has decreased"], hint: "Prédiction basée sur des données visibles (tendances actuelles)" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'We _____ (going to / hire) three new engineers. The budget has been approved.', answer: "are going to hire", options: ["are going to hire", "will hire", "hire", "are hiring"] },
            { type: 'fill', difficulty: 'hard', question: 'Look at the forecast — it _____ (going to / snow) heavily this weekend.', answer: "is going to snow", options: ["is going to snow", "will snow", "snows", "is snowing"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She is going to goes to the gym tomorrow.", options: ["She is going to goes to the gym tomorrow.", "They're going to renovate the office.", "I'm not going to attend the meeting.", "He's going to apply for the position."] },
            { type: 'fill', difficulty: 'hard', question: 'The CEO announced that the company _____ (not / going to / expand) into Asia this year.', answer: "is not going to expand", options: ["is not going to expand", "will not expand", "doesn't expand", "won't going to expand"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 21 — Will/shall (1)
    // ─────────────────────────────────────────────
    21: {
        id: 21,
        title: 'Will/shall (1)',
        category: 'future',
        explanation: `🇫🇷 <b>Will</b> est le mot-clé du futur en anglais, mais attention : il ne correspond PAS toujours au futur simple français !<br><br>
📌 <b>Utilisations principales de « will » :</b><br>
1️⃣ <b>Décision spontanée</b> (prise AU MOMENT où l'on parle) :<br>
• <i>"What would you like?" — "I<b>'ll have</b> the chicken."</i> = Je prendrai le poulet. (Je décide maintenant.)<br><br>
2️⃣ <b>Offre / proposition d'aide</b> :<br>
• <i>"That bag looks heavy. I<b>'ll carry</b> it for you."</i> = Je vais te le porter. (Je propose mon aide.)<br><br>
3️⃣ <b>Promesse</b> :<br>
• <i>"I<b>'ll call</b> you later, I promise."</i> = Je t'appellerai plus tard. (Promesse.)<br><br>
📌 <b>Shall</b> s'utilise UNIQUEMENT avec <b>I</b> et <b>we</b> pour faire des <b>suggestions / demander un avis</b> :<br>
• <i>"<b>Shall</b> we go?"</i> = On y va ? (Suggestion.)<br>
• <i>"<b>Shall</b> I open the window?"</i> = Je dois ouvrir la fenêtre ? (Proposition.)<br><br>
📐 <b>Formation</b> : sujet + <b>will / shall</b> + verbe de base — Contraction : I'll, you'll, he'll, she'll, we'll, they'll<br>
📐 <b>Négation</b> : will not = <b>won't</b> — shall not = <b>shan't</b> (rare)`,

        rules: [
            '📐 Formation : **sujet + will + verbe de base** → _I will help you._ Contraction : _I\'ll help you._',
            '🔵 **Décision spontanée** (au moment de parler) : _"It\'s cold." — "I\'**ll** close the window."_ (Je vais fermer la fenêtre — décision à l\'instant.)',
            '🔵 **Offre d\'aide** : _"I\'**ll** carry that for you."_ (Je vais te porter ça.)',
            '🔵 **Promesse** : _"I\'**ll** pay you back tomorrow."_ (Je te rembourserai demain.)',
            '🔵 **Shall + I/we** pour une suggestion ou proposition : _"**Shall** we take a break?"_ (On fait une pause ?)',
            '🔴 **Will ≠ going to** ici : _will_ = décision MAINTENANT / _going to_ = décision déjà prise AVANT'
        ],

        examples: [
            { text: "\"I'm thirsty.\" — \"I **'ll get** you some water.\"", fr: "« J'ai soif. » — « Je vais te chercher de l'eau. » (offre spontanée)", correct: true },
            { text: "I **'ll have** the steak, please.", fr: "Je prendrai le steak, s'il vous plaît. (décision au moment de commander)", correct: true },
            { text: "Don't worry. I **'ll be** there on time. I promise.", fr: "Ne t'inquiète pas. Je serai là à l'heure. Promis. (promesse)", correct: true },
            { text: "**Shall** I turn on the heating?", fr: "Est-ce que j'allume le chauffage ? (proposition)", correct: true },
            { text: "**Shall** we go out for dinner tonight?", fr: "On sort dîner ce soir ? (suggestion)", correct: true },
            { text: "~~I will to help~~ you. → I **'ll help** you.", fr: "Après 'will', verbe de base SANS 'to'.", correct: false, note: "Après will, on met le verbe de base directement — jamais de 'to'." }
        ],

        tips: [
            "🇫🇷 En français, on utilise le futur simple pour « je ferai, je prendrai, j'irai ». En anglais, 'will' n'est pas toujours le bon choix — il est surtout pour les décisions SPONTANÉES, les offres et les promesses.",
            "⚠️ Erreur classique : utiliser « will » pour un plan déjà décidé. Si vous avez déjà pris la décision → « I'm going to... » (PAS : I will...).",
            "💡 Astuce TOEIC : « Shall I...? » et « Shall we...? » apparaissent souvent dans les dialogues de la Part 3. C'est TOUJOURS une suggestion ou une proposition.",
            "🇫🇷 « Shall we...? » = « On... ? » en français → « Shall we go? » = « On y va ? »"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: '"It\'s hot in here." — "I _____ (open) the window."', answer: "'ll open", options: ["'ll open", "open", "am going to open", "am opening"], hint: "Décision spontanée → will (I'll)" },
            { type: 'fill', difficulty: 'easy', question: '"I don\'t understand this email." — "I _____ (help) you with it."', answer: "'ll help", options: ["'ll help", "help", "am going to help", "am helping"], hint: "Offre d'aide spontanée → will" },
            { type: 'fill', difficulty: 'easy', question: '_____ we go to the park this afternoon?', answer: "Shall", options: ["Shall", "Will", "Do", "Are"], hint: "Suggestion avec we → Shall" },
            // MEDIUM
            { type: 'correct', difficulty: 'medium', question: 'Un serveur vous demande votre commande. Quelle est la réponse naturelle ?', answer: "I'll have the salmon, please.", options: ["I'll have the salmon, please.", "I'm going to have the salmon, please.", "I have the salmon, please.", "I'm having the salmon."], hint: "Décision prise au moment de commander" },
            { type: 'fill', difficulty: 'medium', question: '"Don\'t worry about the report. I _____ (finish) it by Friday." — "Thanks, I appreciate it."', answer: "'ll finish", options: ["'ll finish", "finish", "am going to finish", "am finishing"], hint: "Promesse → will" },
            { type: 'fill', difficulty: 'medium', question: '"_____ I make some coffee for everyone?"', answer: "Shall", options: ["Shall", "Will", "Do", "Am"], hint: "Proposition d'aide avec I → Shall" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: '"The printer is jammed again!" — "Don\'t worry, I _____ (call) the technician right away."', answer: "'ll call", options: ["'ll call", "call", "am going to call", "am calling"], hint: "Réaction immédiate et spontanée en contexte professionnel" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est la plus appropriée pour une promesse formelle dans un email professionnel ?', answer: "I will ensure the documents are sent by end of day.", options: ["I will ensure the documents are sent by end of day.", "I'm going to ensure the documents are sent by end of day.", "I ensure the documents are sent by end of day.", "I shall ensure the documents are sent by end of day."], hint: "Promesse formelle dans un contexte professionnel" },
            { type: 'fill', difficulty: 'hard', question: '"There\'s someone at the door." — "I _____ (go) and see who it is."', answer: "'ll go", options: ["'ll go", "go", "am going to go", "am going"], hint: "Réaction spontanée à une situation" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '"This suitcase is so heavy!" — "I _____ (carry) it for you."', answer: "'ll carry", options: ["'ll carry", "carry", "am going to carry", "am carrying"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez l\'utilisation correcte de « shall » :', answer: "Shall I book the meeting room?", options: ["Shall I book the meeting room?", "Shall he book the meeting room?", "She shall book the meeting room.", "They shall book the meeting room."] },
            { type: 'fill', difficulty: 'hard', question: '"I need these copies urgently." — "I _____ (do) them right now."', answer: "'ll do", options: ["'ll do", "do", "am going to do", "shall do"] },
            { type: 'fill', difficulty: 'hard', question: '"We have two options." — "_____ we discuss the pros and cons of each?"', answer: "Shall", options: ["Shall", "Will", "Do", "Can"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 22 — Will/shall (2)
    // ─────────────────────────────────────────────
    22: {
        id: 22,
        title: 'Will/shall (2)',
        category: 'future',
        explanation: `🇫🇷 <b>Will pour les prédictions, les faits futurs et les refus</b><br><br>
Dans l'unité 21, on a vu « will » pour les décisions spontanées, les offres et les promesses. Maintenant, voyons les <b>autres utilisations de will</b> :<br><br>
1️⃣ <b>Prédictions basées sur une opinion / ce qu'on croit</b> :<br>
• <i>I <b>think</b> it <b>will rain</b> tomorrow.</i> = Je pense qu'il pleuvra demain. (Mon opinion, pas une preuve visible.)<br>
• <i>I don't think she <b>will pass</b> the exam.</i> = Je ne pense pas qu'elle réussira l'examen.<br><br>
2️⃣ <b>Faits certains sur le futur</b> :<br>
• <i>The meeting <b>will be</b> at 10 tomorrow.</i> = La réunion sera à 10h demain. (Information factuelle.)<br>
• <i>She <b>will be</b> 30 next month.</i> = Elle aura 30 ans le mois prochain.<br><br>
3️⃣ <b>Won't pour le refus</b> (quelqu'un/quelque chose refuse de faire quelque chose) :<br>
• <i>She <b>won't listen</b> to me.</i> = Elle refuse de m'écouter.<br>
• <i>The car <b>won't start</b>.</i> = La voiture ne veut pas démarrer.<br><br>
⚠️ <b>Nuance importante</b> : « won't » peut exprimer un <b>refus</b> (pas seulement une prédiction négative). « She won't come » peut signifier « elle refuse de venir » OU « elle ne viendra pas ».`,

        rules: [
            '📐 **Will** pour une **prédiction / opinion** : _I **think** it **will** be a good meeting._ (Je pense que ce sera une bonne réunion.)',
            '📐 Souvent avec : **I think / I don\'t think / I\'m sure / I expect / probably** → _It **will probably** rain._ (Il pleuvra probablement.)',
            '🔵 **Faits futurs certains** : _Tomorrow **will be** Friday._ (Demain, ce sera vendredi.)',
            '🔵 **Won\'t = refus** (personne ou chose) : _She **won\'t** help me._ (Elle refuse de m\'aider.) / _The door **won\'t** open._ (La porte ne veut pas s\'ouvrir.)',
            '🔴 Pour les prédictions : **will** = opinion personnelle / **going to** = preuve visible. _I **think** it **will** rain._ vs _Look at those clouds — it **is going to** rain._',
            '⚠️ **I don\'t think + will** (PAS : ~~I think + won\'t~~) : _I don\'t think he **will** come._ (PAS : ~~I think he won\'t come.~~)'
        ],

        examples: [
            { text: "I **think** she **will** get the promotion.", fr: "Je pense qu'elle obtiendra la promotion. (opinion personnelle)", correct: true },
            { text: "Don't worry. You **will** pass the TOEIC. I'm sure of it.", fr: "Ne t'inquiète pas. Tu réussiras le TOEIC. J'en suis sûr(e). (certitude personnelle)", correct: true },
            { text: "The new office **will be** ready by March.", fr: "Le nouveau bureau sera prêt d'ici mars. (fait futur)", correct: true },
            { text: "My computer **won't** turn on! Can you help?", fr: "Mon ordinateur ne veut pas s'allumer ! Tu peux m'aider ? (refus de la machine)", correct: true },
            { text: "~~I think he won't come.~~ → I **don't think** he **will** come.", fr: "Je ne pense pas qu'il viendra.", correct: false, note: "En anglais, la négation se met sur 'think', pas sur 'will' : I don't think... will" },
            { text: "~~She will has~~ 30 next month. → She **will be** 30 next month.", fr: "Elle aura 30 ans le mois prochain.", correct: false, note: "Après 'will', c'est toujours le verbe de BASE : will be, will have, will go." }
        ],

        tips: [
            "🇫🇷 Le futur simple français (« il pleuvra », « elle réussira ») correspond souvent à « will » pour les prédictions. C'est la correspondance la plus directe !",
            "⚠️ En français, on dit « je pense qu'il ne viendra pas ». En anglais, on dit « I DON'T THINK he will come » — on met la négation sur « think », pas sur « will ».",
            "💡 Astuce TOEIC : quand vous voyez « I think / probably / I'm sure / I expect » dans une question, c'est un indice fort que la réponse utilise « will ».",
            "🇫🇷 « Won't » pour le refus : en français, on dit « la voiture ne veut pas démarrer ». En anglais, c'est pareil : « The car won't start. »"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'I think the weather _____ (be) nice tomorrow.', answer: "will be", options: ["will be", "is going to be", "is being", "is"], hint: "Opinion personnelle (I think) → will" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (be) 25 next birthday.', answer: "will be", options: ["will be", "is going to be", "is being", "is"], hint: "Fait futur certain → will" },
            { type: 'fill', difficulty: 'easy', question: 'The door _____ (not/open). It\'s stuck!', answer: "won't open", options: ["won't open", "doesn't open", "isn't opening", "not opens"], hint: "Refus d'une chose → won't" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'I don\'t think the boss _____ (agree) with your proposal.', answer: "will agree", options: ["will agree", "agrees", "is going to agree", "agreed"], hint: "I don't think... → will (pas going to)" },
            { type: 'correct', difficulty: 'medium', question: 'Comment traduire correctement « Je ne pense pas qu\'il viendra » ?', answer: "I don't think he will come.", options: ["I don't think he will come.", "I think he won't come.", "I think he doesn't come.", "I don't think he comes."], hint: "En anglais, la négation va sur 'think'" },
            { type: 'fill', difficulty: 'medium', question: 'Don\'t worry about the exam. I\'m sure you _____ (do) well.', answer: "will do", options: ["will do", "are going to do", "do", "are doing"], hint: "I'm sure → certitude personnelle → will" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'The report predicts that inflation _____ (rise) by 3% next year.', answer: "will rise", options: ["will rise", "is going to rise", "rises", "is rising"], hint: "Prédiction formelle (rapport) → will" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase utilise « won\'t » pour exprimer un REFUS (pas une simple prédiction négative) ?', answer: "He won't listen to anyone's advice.", options: ["He won't listen to anyone's advice.", "It won't rain tomorrow.", "The meeting won't last long.", "The project won't be finished on time."], hint: "Refus ≠ prédiction négative" },
            { type: 'fill', difficulty: 'hard', question: 'Market analysts expect that the stock price _____ probably _____ (increase) after the merger announcement.', answer: "will ... increase", options: ["will ... increase", "is going to ... increase", "... increases", "... is increasing"], hint: "Analysts expect + probably → opinion experte → will" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'I expect the construction _____ (take) about six months.', answer: "will take", options: ["will take", "is going to take", "takes", "is taking"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase qui exprime un REFUS :', answer: "The client won't sign the contract until the terms are changed.", options: ["The client won't sign the contract until the terms are changed.", "The project won't be completed until June.", "I don't think it will snow this winter.", "The new system will probably work better."] },
            { type: 'fill', difficulty: 'hard', question: 'I don\'t think the new policy _____ (affect) our department directly.', answer: "will affect", options: ["will affect", "affects", "is going to affect", "is affecting"] },
            { type: 'fill', difficulty: 'hard', question: 'The photocopier _____ (not/work) again. We should call maintenance.', answer: "won't work", options: ["won't work", "doesn't work", "isn't working", "not working"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 23 — I will and I'm going to
    // ─────────────────────────────────────────────
    23: {
        id: 23,
        title: "I will and I'm going to",
        category: 'future',
        explanation: `🇫🇷 <b>Will vs Going to — la grande comparaison !</b><br><br>
C'est l'une des questions les plus fréquentes au TOEIC. Les deux parlent du futur, mais dans des contextes DIFFÉRENTS :<br><br>
📌 <b>Décisions :</b><br>
• <b>Will</b> = décision prise <b>AU MOMENT où l'on parle</b> (spontanée) :<br>
<i>"Oh, we've run out of milk." — "I<b>'ll go</b> and get some."</i> (Je décide maintenant.)<br>
• <b>Going to</b> = décision prise <b>AVANT</b> le moment de parole (déjà réfléchi) :<br>
<i>"I<b>'m going to</b> paint my room this weekend."</i> (C'est déjà décidé, j'ai acheté la peinture.)<br><br>
📌 <b>Prédictions :</b><br>
• <b>Will</b> = prédiction basée sur une <b>opinion</b> / ce qu'on croit :<br>
<i>"I <b>think</b> Real Madrid <b>will win</b>."</i> (Mon opinion.)<br>
• <b>Going to</b> = prédiction basée sur une <b>preuve visible</b> / ce qu'on voit :<br>
<i>"Look at those clouds! It<b>'s going to</b> rain."</i> (On voit les nuages.)<br><br>
🇫🇷 <b>En français :</b><br>
• « Going to » ≈ « <b>aller + infinitif</b> » : <i>Je <b>vais</b> peindre ma chambre.</i> (plan décidé)<br>
• « Will » ≈ <b>futur simple</b> : <i>Je <b>pense</b> qu'il <b>pleuvra</b>.</i> (opinion)`,

        rules: [
            '📐 **Will** = décision **spontanée** (au moment de parler) : _"We need milk." — "I\'ll go and buy some."_ (Je décide maintenant.)',
            '📐 **Going to** = décision **déjà prise** (avant de parler) : _"I\'m going to buy a new car. I\'ve been saving up."_ (C\'est décidé, j\'économise déjà.)',
            '🔵 **Will** + opinion = prédiction subjective : _I **think** the project **will** succeed._ (Mon avis.)',
            '🔵 **Going to** + preuve = prédiction objective : _Look at the sales numbers — we**\'re going to** exceed our target._ (Les chiffres le montrent.)',
            '🔴 Ne dites PAS : ~~_"We\'ve run out of paper." — "I\'m going to order some."_~~ → _"I\'ll order some."_ (Décision spontanée → will)',
            '🔴 Ne dites PAS : ~~_"I\'ve already planned it — I\'ll paint my room."_~~ → _"I\'m going to paint my room."_ (Déjà décidé → going to)'
        ],

        examples: [
            { text: "\"Oh no, I forgot to call Sarah!\" — \"I **'ll call** her now.\"", fr: "« Oh non, j'ai oublié d'appeler Sarah ! » — « Je l'appelle maintenant. » (décision spontanée → will)", correct: true },
            { text: "I **'m going to** learn Japanese next year. I've already enrolled in a course.", fr: "Je vais apprendre le japonais l'an prochain. Je me suis déjà inscrit à un cours. (déjà décidé → going to)", correct: true },
            { text: "I **think** the new CEO **will** make big changes.", fr: "Je pense que le nouveau PDG fera de grands changements. (opinion → will)", correct: true },
            { text: "Look at the traffic! We **'re going to** be late.", fr: "Regarde le trafic ! On va être en retard. (preuve visible → going to)", correct: true },
            { text: "~~\"I've decided — I'll change jobs.\"~~ → \"I've decided — I **'m going to** change jobs.\"", fr: "J'ai décidé → décision déjà prise → going to (pas will).", correct: false, note: "Si la décision est DÉJÀ prise (I've decided), on utilise 'going to', pas 'will'." },
            { text: "~~\"Look! The vase is going to fall!\" → \"Look! The vase will fall!\"~~", fr: "Preuve visible (on voit le vase tomber) → going to est correct ici. Ne pas changer !", correct: false, note: "Quand il y a une preuve visible, 'going to' est le bon choix — pas 'will'." }
        ],

        tips: [
            "🇫🇷 Pensez en français : « je vais faire » (plan = going to) vs « je ferai / je pense qu'il fera » (opinion/spontané = will).",
            "⚠️ Au TOEIC, la distinction will/going to est testée régulièrement. Demandez-vous toujours : « La décision est-elle prise MAINTENANT ou AVANT ? »",
            "💡 Indices textuels : si vous voyez « I think / probably / I'm sure » → will. Si vous voyez « I've decided / Look! / already planned » → going to.",
            "🇫🇷 En pratique, les anglophones utilisent parfois les deux de façon interchangeable. Mais au TOEIC, la distinction est importante !"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: '"There\'s no milk left." — "I _____ go to the shop and get some."', answer: "'ll", options: ["'ll", "'m going to", "go to", "shall"], hint: "Décision prise à l'instant → will" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ (going to) study abroad next year. I\'ve already applied.', answer: "'m going to", options: ["'m going to", "'ll", "will", "am"], hint: "Déjà décidé + déjà fait des démarches → going to" },
            { type: 'fill', difficulty: 'easy', question: 'I think it _____ be sunny tomorrow.', answer: "will", options: ["will", "is going to", "is", "does"], hint: "I think → opinion → will" },
            // MEDIUM
            { type: 'correct', difficulty: 'medium', question: 'Vous venez de remarquer que le ciel est très noir. Que dites-vous ?', answer: "It's going to rain.", options: ["It's going to rain.", "It will rain.", "It rains.", "It's raining."], hint: "Preuve visible → quel futur ?" },
            { type: 'fill', difficulty: 'medium', question: '"The phone is ringing." — "I _____ get it."', answer: "'ll", options: ["'ll", "'m going to", "am", "shall"], hint: "Réaction spontanée au téléphone qui sonne" },
            { type: 'fill', difficulty: 'medium', question: 'We _____ redesign the website. The designer has already started working on it.', answer: "'re going to", options: ["'re going to", "'ll", "will", "are"], hint: "Le designer a déjà commencé = plan décidé" },
            // HARD
            { type: 'correct', difficulty: 'hard', question: 'Dans un contexte TOEIC, choisissez la MEILLEURE réponse : "The quarterly report shows declining profits. What do you think?" — "Based on these figures, I believe profits _____."', answer: "will continue to decline", options: ["will continue to decline", "are going to continue to decline", "continue to decline", "are continuing to decline"], hint: "'I believe' = opinion → quel futur ?" },
            { type: 'fill', difficulty: 'hard', question: '"Have you made any plans for the company retreat?" — "Yes, we _____ (going to) hold it at the Grand Hotel. Everything is booked."', answer: "'re going to", options: ["'re going to", "'ll", "will", "shall"], hint: "Tout est réservé = plan confirmé" },
            { type: 'fill', difficulty: 'hard', question: '"Did you remember to email the client?" — "Oh no, I forgot! I _____ do it right now."', answer: "'ll", options: ["'ll", "'m going to", "am going", "shall"], hint: "Il vient juste de s'en rendre compte → décision spontanée" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '"Can somebody help me with these boxes?" — "I _____ help you."', answer: "'ll", options: ["'ll", "'m going to", "am", "shall"] },
            { type: 'fill', difficulty: 'hard', question: 'I _____ (going to) resign next month. I\'ve already written my resignation letter.', answer: "'m going to", options: ["'m going to", "'ll", "will", "am going"] },
            { type: 'correct', difficulty: 'hard', question: 'Choisissez la phrase correcte :', answer: "Look at that driver! He's going to crash!", options: ["Look at that driver! He's going to crash!", "Look at that driver! He'll crash!", "Look at that driver! He crashes!", "Look at that driver! He's crashing!"] },
            { type: 'fill', difficulty: 'hard', question: 'I\'m not sure, but I think the company _____ announce layoffs next quarter.', answer: "will", options: ["will", "is going to", "is", "does"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 24 — Will be doing and will have done
    // ─────────────────────────────────────────────
    24: {
        id: 24,
        title: 'Will be doing and will have done',
        category: 'future',
        explanation: `🇫🇷 <b>Le future continuous et le future perfect</b> — deux temps avancés qui impressionnent au TOEIC !<br><br>
📌 <b>Future continuous : will be + -ing</b><br>
Décrit une action qui sera <b>en cours à un moment précis dans le futur</b>.<br>
• <i>This time tomorrow, I <b>will be flying</b> to New York.</i> = Demain à cette heure-ci, je serai en train de voler vers New York.<br>
🇫🇷 En français, c'est comme « <b>je serai en train de + infinitif</b> ».<br><br>
On utilise aussi le future continuous pour parler d'actions <b>prévues dans le cours normal des choses</b> (sans intention particulière) :<br>
• <i>I <b>'ll be seeing</b> John at the meeting, so I'll give him the message.</i> = Je verrai John à la réunion (ça va se passer naturellement), alors je lui passerai le message.<br><br>
📌 <b>Future perfect : will have + participe passé</b><br>
Décrit une action qui sera <b>terminée/accomplie AVANT un moment futur</b>.<br>
• <i>I <b>will have finished</b> the report by Friday.</i> = J'aurai terminé le rapport d'ici vendredi.<br>
🇫🇷 C'est exactement le <b>futur antérieur</b> français : « j'<b>aurai fini</b> », « il <b>sera parti</b> ».<br><br>
📐 Mots-clés : <b>by</b> (Friday / then / next year) = d'ici / avant — <b>this time tomorrow/next week</b> = demain/la semaine prochaine à cette heure-ci`,

        rules: [
            '📐 **Future continuous** : **will be + verbe-ing** → action en cours à un moment futur précis : _This time next week, I **will be lying** on a beach._ (Je serai en train de me prélasser sur une plage.)',
            '📐 **Future perfect** : **will have + participe passé** → action terminée avant un moment futur : _By 2027, I **will have graduated**._ (D\'ici 2027, j\'aurai obtenu mon diplôme.)',
            '🔵 Future continuous pour une action **prévue naturellement** : _I **\'ll be seeing** the manager later. Do you want me to mention it?_ (Je verrai le manager plus tard — ça fait partie de ma journée.)',
            '🔵 Future perfect avec **by** : _She **will have left** by the time you arrive._ (Elle sera partie avant que tu arrives.)',
            '🔴 Ne confondez PAS : _I **will do** it._ (futur simple = je le ferai) vs _I **will be doing** it._ (future continuous = je serai en train de le faire) vs _I **will have done** it._ (future perfect = je l\'aurai fait)',
            '⚠️ Négation : _I **won\'t be working**_ / _I **won\'t have finished**_'
        ],

        examples: [
            { text: "This time tomorrow, I **will be sitting** in my exam.", fr: "Demain à cette heure-ci, je serai en train de passer mon examen.", correct: true },
            { text: "By the end of the year, we **will have launched** three new products.", fr: "D'ici la fin de l'année, nous aurons lancé trois nouveaux produits.", correct: true },
            { text: "Don't call me at 9 — I **'ll be driving** to work.", fr: "Ne m'appelle pas à 9h — je serai en train de conduire pour aller au travail.", correct: true },
            { text: "She **will have completed** her training by June.", fr: "Elle aura terminé sa formation d'ici juin. (futur antérieur)", correct: true },
            { text: "I **'ll be seeing** Karen at lunch, so I'll pass on your message.", fr: "Je verrai Karen au déjeuner (naturellement), alors je lui transmettrai ton message.", correct: true },
            { text: "~~By Friday, I will be finished the report.~~ → By Friday, I **will have finished** the report.", fr: "D'ici vendredi, j'aurai terminé le rapport.", correct: false, note: "Action terminée AVANT un moment futur → future perfect (will have + participe passé), pas future continuous." }
        ],

        tips: [
            "🇫🇷 Le future perfect = le futur antérieur français. C'est une traduction quasi directe : « j'aurai fini » = I will have finished. Bonne nouvelle pour les francophones !",
            "⚠️ Le future continuous est plus difficile car il n'existe pas vraiment en français. Pensez à « je serai en train de... » pour le comprendre.",
            "💡 Astuce TOEIC : le mot **by** (by Friday, by then, by next year) est un signal fort pour le future perfect. « By » = « d'ici / avant ».",
            "🇫🇷 « This time tomorrow / next week » → futur continu : « This time next Monday, I'll be presenting the project. » (Lundi prochain à cette heure-ci...)"
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'This time next week, I _____ (lie) on a beach in Spain.', answer: "will be lying", options: ["will be lying", "will lie", "will have lain", "am lying"], hint: "Action en cours à un moment futur → will be + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'By December, she _____ (work) here for 10 years.', answer: "will have worked", options: ["will have worked", "will be working", "will work", "has worked"], hint: "Action accomplie d'ici décembre → will have + participe passé" },
            { type: 'fill', difficulty: 'easy', question: 'Don\'t phone me between 7 and 8. I _____ (have) dinner.', answer: "will be having", options: ["will be having", "will have", "will have had", "am having"], hint: "Action en cours pendant cette période → future continuous" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'By the time you get here, I _____ (finish) all the work.', answer: "will have finished", options: ["will have finished", "will be finishing", "will finish", "finish"], hint: "'By the time' → action terminée avant un moment futur" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte pour dire : « D\'ici 2030, la population mondiale aura atteint 9 milliards » ?', answer: "By 2030, the world population will have reached 9 billion.", options: ["By 2030, the world population will have reached 9 billion.", "By 2030, the world population will be reaching 9 billion.", "By 2030, the world population will reach 9 billion.", "By 2030, the world population reaches 9 billion."], hint: "Action accomplie d'ici un moment futur" },
            { type: 'fill', difficulty: 'medium', question: 'I _____ (see) the director this afternoon anyway, so I can give him the documents.', answer: "'ll be seeing", options: ["'ll be seeing", "'ll see", "'ll have seen", "see"], hint: "Action prévue naturellement dans le cours de la journée" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'By the end of this project, the team _____ (spend) over $2 million on development.', answer: "will have spent", options: ["will have spent", "will be spending", "will spend", "has spent"], hint: "'By the end of' → action qui sera accomplie" },
            { type: 'correct', difficulty: 'hard', question: 'Choisissez la phrase correcte pour un rapport TOEIC :', answer: "The audit will have been completed by the end of Q3.", options: ["The audit will have been completed by the end of Q3.", "The audit will be completing by the end of Q3.", "The audit will complete by the end of Q3.", "The audit has completed by the end of Q3."], hint: "Forme passive du future perfect : will have been + participe passé" },
            { type: 'fill', difficulty: 'hard', question: 'At 3 p.m. tomorrow, the CEO _____ (present) the annual results to shareholders.', answer: "will be presenting", options: ["will be presenting", "will present", "will have presented", "presents"], hint: "À un moment précis demain, action en cours" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'By the time we arrive, the show _____ (already/start).', answer: "will have already started", options: ["will have already started", "will be already starting", "will already start", "has already started"] },
            { type: 'fill', difficulty: 'hard', question: 'This time next month, I _____ (work) at my new job.', answer: "will be working", options: ["will be working", "will have worked", "will work", "work"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "By next year, I will be graduated from university.", options: ["By next year, I will be graduated from university.", "By next year, I will have graduated from university.", "This time next year, I will be studying for my final exams.", "By Friday, they will have submitted the report."] },
            { type: 'fill', difficulty: 'hard', question: 'The company estimates that by 2028, it _____ (invest) $500 million in renewable energy.', answer: "will have invested", options: ["will have invested", "will be investing", "will invest", "invests"] },
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 25 — When I do / When I've done (future time clauses)
    // ─────────────────────────────────────────────
    25: {
        id: 25,
        title: "When I do / When I've done (future time clauses)",
        category: 'future',
        explanation: `🇫🇷 <b>Les subordonnées de temps au futur — LE piège n°1 des francophones !</b><br><br>
⚠️ <b>Règle FONDAMENTALE</b> : après <b>when, before, after, until, as soon as, while, by the time</b> (quand on parle du futur), on utilise un temps <b>PRÉSENT</b> en anglais — <b>JAMAIS « will »</b> !<br><br>
🇫🇷 C'est l'INVERSE du français :<br>
• Français : <i>Quand j'<b>aurai fini</b>, je t'appellerai.</i> (futur dans les deux parties)<br>
• Anglais : <i>When I <b>have finished</b>, I'll call you.</i> (present perfect + will)<br>
• <b>PAS</b> : ~~When I <b>will have finished</b>~~<br><br>
📌 <b>Deux cas :</b><br>
1️⃣ <b>Present simple</b> après when/before/after/until/as soon as :<br>
• <i>When I <b>get</b> home, I'll call you.</i> = Quand j'arriverai à la maison, je t'appellerai.<br>
• <i>I'll wait until she <b>comes</b> back.</i> = J'attendrai jusqu'à ce qu'elle revienne.<br><br>
2️⃣ <b>Present perfect</b> après when (pour une action TERMINÉE avant l'autre) :<br>
• <i>When I <b>'ve finished</b> this book, I'll lend it to you.</i> = Quand j'aurai fini ce livre, je te le prêterai.<br><br>
⚠️ <b>Attention</b> : « will » reste dans la <b>proposition principale</b> ! C'est seulement dans la subordonnée de temps qu'on n'utilise PAS « will ».<br>
• _When I get home, <b>I'll</b> call you._ ✅ (will dans la principale)<br>
• _~~When I will get home~~, I'll call you._ ❌ (will dans la subordonnée = FAUX)`,

        rules: [
            '📐 Après **when / before / after / until / as soon as / while / by the time** → **present simple** (PAS will) : _When I **get** home, I\'ll call you._ (PAS : ~~When I will get~~)',
            '📐 **Present perfect** après when/after pour une action **terminée** avant l\'autre : _When I **have finished**, I\'ll let you know._ (Quand j\'aurai fini…)',
            '🔵 **As soon as** + present : _I\'ll tell you **as soon as** I **know**._ (Je te dirai dès que je saurai.)',
            '🔵 **Until** + present : _Wait here **until** I **come** back._ (Attends ici jusqu\'à ce que je revienne.)',
            '🔵 **Before/After** + present : _I\'ll finish the report **before** I **leave**._ (Je finirai le rapport avant de partir.)',
            '🔴 **PIÈGE MAJEUR** : en français → « quand je **serai** / quand j\'**aurai fini** » (futur). En anglais → _when I **am** / when I **have finished**_ (présent). Ne traduisez JAMAIS littéralement !',
            '⚠️ **will** reste dans la **proposition principale** : _**I\'ll** call you when I **get** home._ (« I\'ll » = principale, « get » = subordonnée)'
        ],

        examples: [
            { text: "When I **get** home, **I'll** call you.", fr: "Quand j'arriverai à la maison, je t'appellerai. (present simple après when)", correct: true },
            { text: "I'll wait until she **comes** back.", fr: "J'attendrai jusqu'à ce qu'elle revienne. (present simple après until)", correct: true },
            { text: "As soon as I **hear** any news, I'll let you know.", fr: "Dès que j'aurai des nouvelles, je te ferai savoir. (present simple après as soon as)", correct: true },
            { text: "When I **'ve read** this report, I'll pass it to you.", fr: "Quand j'aurai lu ce rapport, je te le passerai. (present perfect après when — action terminée)", correct: true },
            { text: "I'll email you before I **leave** the office.", fr: "Je t'enverrai un email avant de quitter le bureau.", correct: true },
            { text: "~~When I **will get** home, I'll call you.~~ → When I **get** home, I'll call you.", fr: "JAMAIS de 'will' après when/before/after/until/as soon as !", correct: false, note: "Piège n°1 des francophones : en français on dit « quand j'arriverai » (futur) mais en anglais c'est « when I get » (présent)." },
            { text: "~~I'll call you when I **will have finished**.~~ → I'll call you when I **have finished**.", fr: "Même avec le present perfect — pas de will dans la subordonnée !", correct: false, note: "Pas de 'will' dans la subordonnée de temps, même pour le present perfect." }
        ],

        tips: [
            "🇫🇷 C'est LE piège le plus courant pour les francophones ! En français : « quand j'arriverai » (futur). En anglais : « when I arrive » (présent). Ne traduisez JAMAIS littéralement !",
            "⚠️ Mémorisez cette liste : when, before, after, until, as soon as, while, by the time → JAMAIS de will après ces mots (quand ils parlent du futur).",
            "💡 Astuce TOEIC : repérez les subordonnées de temps dans les phrases. Si vous voyez « when/before/after/until + will », c'est FAUX. La bonne réponse sera au present simple ou present perfect.",
            "🇫🇷 Pour savoir si c'est present simple ou present perfect après « when » : si l'action doit être TERMINÉE avant l'autre, utilisez le present perfect. « When I've finished » (= quand j'aurai FINI) vs « When I arrive » (= quand j'arrive/arriverai)."
        ],

        exercises: [
            // EASY
            { type: 'fill', difficulty: 'easy', question: 'When I _____ (get) home, I\'ll have dinner.', answer: "get", options: ["get", "will get", "am getting", "got"], hint: "Après 'when' (futur) → present simple, pas will" },
            { type: 'fill', difficulty: 'easy', question: 'I\'ll call you as soon as I _____ (arrive) at the hotel.', answer: "arrive", options: ["arrive", "will arrive", "am arriving", "arrived"], hint: "Après 'as soon as' → present simple" },
            { type: 'fill', difficulty: 'easy', question: 'Please wait here until I _____ (come) back.', answer: "come", options: ["come", "will come", "am coming", "came"], hint: "Après 'until' → present simple" },
            // MEDIUM
            { type: 'fill', difficulty: 'medium', question: 'When I _____ (finish) university, I\'m going to travel the world.', answer: "finish", options: ["finish", "will finish", "have finished", "am finishing"], hint: "Après 'when' pour le futur → présent (pas will)" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est CORRECTE ?', answer: "I'll send you the report before I leave the office.", options: ["I'll send you the report before I leave the office.", "I'll send you the report before I will leave the office.", "I'll send you the report before I'll leave the office.", "I send you the report before I will leave the office."], hint: "Après 'before' → quel temps ?" },
            { type: 'fill', difficulty: 'medium', question: 'I won\'t go to bed until I _____ (finish) this assignment.', answer: "have finished", options: ["have finished", "will finish", "will have finished", "finished"], hint: "L'action doit être TERMINÉE → present perfect après until" },
            // HARD
            { type: 'fill', difficulty: 'hard', question: 'By the time the manager _____ (arrive), we will have prepared the presentation.', answer: "arrives", options: ["arrives", "will arrive", "has arrived", "is arriving"], hint: "'By the time' = subordonnée de temps → présent" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte dans un contexte TOEIC :', answer: "The contract will be signed after the lawyers have reviewed all the terms.", options: ["The contract will be signed after the lawyers have reviewed all the terms.", "The contract will be signed after the lawyers will have reviewed all the terms.", "The contract will be signed after the lawyers will review all the terms.", "The contract is signed after the lawyers reviewed all the terms."], hint: "Après 'after' pour une action terminée → present perfect" },
            { type: 'fill', difficulty: 'hard', question: 'The new system will be implemented once the IT team _____ (complete) the testing phase.', answer: "has completed", options: ["has completed", "will complete", "will have completed", "completes"], hint: "Action qui doit être terminée avant l'autre → present perfect après 'once'" },
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'I\'ll give you a call when I _____ (be) ready.', answer: "am", options: ["am", "will be", "'ll be", "was"] },
            { type: 'fill', difficulty: 'hard', question: 'The project won\'t be approved until the committee _____ (review) the budget proposal.', answer: "has reviewed", options: ["has reviewed", "will review", "will have reviewed", "reviews"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We'll start the meeting when everyone will arrive.", options: ["We'll start the meeting when everyone will arrive.", "We'll start the meeting when everyone arrives.", "We'll start the meeting as soon as everyone has arrived.", "We'll start the meeting after everyone has sat down."] },
            { type: 'fill', difficulty: 'hard', question: 'Please notify all employees before the policy _____ (take) effect on January 1st.', answer: "takes", options: ["takes", "will take", "has taken", "is taking"] },
        ]
    },
};
