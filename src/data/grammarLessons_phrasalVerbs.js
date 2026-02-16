// ============================================
// Grammar Lessons — Phrasal Verbs & Review (Units 131-145)
// French explanations for francophone learners
// ============================================

export const grammarLessonsPhrasalVerbs = {

    // ─────────────────────────────────────────────
    // UNIT 131 — Phrasal verbs (1): Introduction
    // ─────────────────────────────────────────────
    131: {
        id: 131,
        title: 'Phrasal verbs (1) — Introduction',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Les phrasal verbs (verbes à particule) : introduction</b><br><br>
Un phrasal verb = <b>verbe + particule</b> (in, out, up, down, on, off, away, back…).<br>
Le sens change souvent complètement par rapport au verbe seul :<br><br>
• <b>look</b> = regarder → <b>look after</b> = s'occuper de<br>
• <b>give</b> = donner → <b>give up</b> = abandonner<br>
• <b>turn</b> = tourner → <b>turn down</b> = refuser<br><br>
⚠️ <b>Piège francophone :</b> les phrasal verbs n'existent PAS en français. On ne peut pas les traduire mot à mot. Il faut les apprendre comme du vocabulaire.<br><br>
🔑 <b>Deux types :</b><br>
1. <b>Séparables</b> : on peut séparer le verbe de la particule → <i>Turn <b>the light</b> off</i> ou <i>Turn off <b>the light</b></i><br>
2. <b>Inséparables</b> : toujours collés → <i>Look after <b>the children</b></i> (PAS : ~~Look the children after~~)`,

        rules: [
            '📐 **Phrasal verb** = verbe + particule (in, out, up, down, on, off, away, back)',
            '🔵 Le sens est souvent **idiomatique** — impossible à deviner : _give up_ = abandonner, _look forward to_ = avoir hâte de',
            '🔵 **Séparables** : le complément peut se mettre entre verbe et particule → _Turn **it** off_ (obligatoire avec pronom !)',
            '🔵 **Inséparables** : le complément va toujours APRÈS → _Look after **them**_ (PAS : ~~Look them after~~)',
            '⚠️ Avec un **pronom** (it, them, him…), un phrasal verb séparable DOIT être séparé → _Pick **it** up_ (PAS : ~~Pick up it~~)'
        ],

        examples: [
            { text: "Could you **turn off** the TV? / Could you **turn** the TV **off**?", fr: "Tu peux éteindre la télé ?", correct: true },
            { text: "I **gave up** smoking last year.", fr: "J'ai arrêté de fumer l'an dernier.", correct: true },
            { text: "She **looks after** her grandmother.", fr: "Elle s'occupe de sa grand-mère.", correct: true },
            { text: "Please **pick it up**. (NOT: ~~pick up it~~)", fr: "Ramasse-le. (pronom → obligatoirement séparé)", correct: true, note: "Avec un pronom, toujours séparer !" },
            { text: "~~I look forward to see you.~~ → I **look forward to seeing** you.", fr: "J'ai hâte de te voir. (to = préposition → -ing)", correct: false, note: "'look forward to' + -ing, pas infinitif !" }
        ],

        tips: [
            "🇫🇷 Il n'y a pas d'équivalent des phrasal verbs en français. Apprenez-les comme des mots de vocabulaire à part entière.",
            "⚠️ Avec un pronom (it, them, her…), un phrasal verb séparable DOIT être séparé : 'turn it off', JAMAIS 'turn off it'.",
            "💡 Astuce TOEIC : les phrasal verbs sont très fréquents dans la partie Reading. Apprenez les 50 plus courants."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Can you _____ the music? It\'s too loud.', answer: "turn down", options: ["turn down", "turn up", "turn in", "turn off"], hint: "Baisser le volume = turn ___" },
            { type: 'fill', difficulty: 'easy', question: 'I need to _____ early tomorrow for my flight.', answer: "get up", options: ["get up", "get in", "get on", "get off"], hint: "Se lever = get ___" },
            { type: 'fill', difficulty: 'easy', question: 'Don\'t forget to _____ the lights when you leave.', answer: "turn off", options: ["turn off", "turn on", "turn up", "turn in"], hint: "Éteindre = turn ___" },
            { type: 'fill', difficulty: 'medium', question: 'The meeting has been _____ until next week.', answer: "put off", options: ["put off", "put on", "put up", "put away"], hint: "Reporter = put ___" },
            { type: 'fill', difficulty: 'medium', question: 'She _____ her father. They have the same eyes.', answer: "takes after", options: ["takes after", "takes on", "takes off", "takes up"], hint: "Ressembler à = take ___" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Pick it up!", options: ["Pick it up!", "Pick up it!", "Pick up to it!"] },
            { type: 'fill', difficulty: 'hard', question: 'The company was _____ by a larger corporation.', answer: "taken over", options: ["taken over", "taken up", "taken off", "taken in"], hint: "Racheter (entreprise) = take ___" },
            { type: 'fill', difficulty: 'hard', question: 'I can\'t _____ _____ this noise anymore!', answer: "put up with", options: ["put up with", "put off with", "put on with", "put away with"], hint: "Supporter/tolérer = put ___ ___" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase CORRECTE :', answer: "I'm looking forward to meeting you.", options: ["I'm looking forward to meeting you.", "I'm looking forward to meet you.", "I look forward meet you."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The factory was _____ due to safety concerns.', answer: "shut down", options: ["shut down", "shut up", "shut off", "shut in"] },
            { type: 'fill', difficulty: 'hard', question: 'We need to _____ a solution to this problem.', answer: "come up with", options: ["come up with", "come out with", "come off with", "come on with"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "She turned off it.", options: ["She turned off it.", "She turned it off.", "She turned off the light."] },
            { type: 'fill', difficulty: 'hard', question: 'The flight has been _____ because of fog.', answer: "called off", options: ["called off", "called up", "called on", "called in"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 132 — Phrasal verbs (2): in/out
    // ─────────────────────────────────────────────
    132: {
        id: 132,
        title: 'Phrasal verbs (2) — in/out',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec IN et OUT</b><br><br>
<b>IN</b> = souvent l'idée d'<b>entrer, intégrer, commencer</b> :<br>
• <b>check in</b> = s'enregistrer (hôtel, aéroport)<br>
• <b>fill in</b> = remplir (un formulaire)<br>
• <b>hand in</b> = remettre (un devoir, un rapport)<br>
• <b>join in</b> = participer<br><br>
<b>OUT</b> = souvent l'idée de <b>sortir, distribuer, découvrir, épuiser</b> :<br>
• <b>find out</b> = découvrir<br>
• <b>work out</b> = résoudre / faire du sport<br>
• <b>run out (of)</b> = manquer de, être à court de<br>
• <b>carry out</b> = effectuer, réaliser<br>
• <b>turn out</b> = s'avérer`,

        rules: [
            '📐 **IN** → idée d\'entrer, d\'inclure, de remplir : _fill in_ (remplir), _check in_ (s\'enregistrer), _hand in_ (remettre)',
            '📐 **OUT** → idée de sortir, distribuer, découvrir : _find out_ (découvrir), _work out_ (résoudre), _run out of_ (être à court de)',
            '🔵 _carry out_ = effectuer, réaliser (très formel TOEIC) : _The survey was **carried out** last month._',
            '🔵 _turn out_ = s\'avérer : _It **turned out** that she was right._ (Il s\'est avéré qu\'elle avait raison.)',
            '🔵 _sort out_ = régler, résoudre : _We need to **sort out** this problem._'
        ],

        examples: [
            { text: "Please **fill in** the application form.", fr: "Veuillez remplir le formulaire de candidature.", correct: true },
            { text: "We've **run out of** paper for the printer.", fr: "On n'a plus de papier pour l'imprimante.", correct: true },
            { text: "I need to **find out** what time the meeting starts.", fr: "Je dois découvrir à quelle heure la réunion commence.", correct: true },
            { text: "The experiment was **carried out** by a team of researchers.", fr: "L'expérience a été réalisée par une équipe de chercheurs.", correct: true }
        ],

        tips: [
            "🇫🇷 'fill in' (UK) = 'fill out' (US) pour 'remplir un formulaire'. Le TOEIC accepte les deux.",
            "💡 'work out' a deux sens : 1) résoudre un problème 2) faire de l'exercice. Le contexte vous guidera.",
            "⚠️ 'run out of' est inséparable : 'We ran out of time' (PAS : 'We ran time out of')."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I need to _____ what time the train leaves.', answer: "find out", options: ["find out", "find in", "find on", "find off"], hint: "Découvrir = find ___" },
            { type: 'fill', difficulty: 'easy', question: 'Please _____ this form with your personal details.', answer: "fill in", options: ["fill in", "fill on", "fill up", "fill at"], hint: "Remplir un formulaire = fill ___" },
            { type: 'fill', difficulty: 'easy', question: 'All the guests must _____ at the front desk.', answer: "check in", options: ["check in", "check out", "check on", "check up"], hint: "S'enregistrer = check ___" },
            { type: 'fill', difficulty: 'medium', question: 'The research was _____ over a period of two years.', answer: "carried out", options: ["carried out", "carried in", "carried on", "carried off"], hint: "Effectuer = carry ___" },
            { type: 'fill', difficulty: 'medium', question: 'We\'ve _____ of milk. Can you buy some?', answer: "run out", options: ["run out", "run in", "run off", "run up"], hint: "Manquer de = run ___ of" },
            { type: 'fill', difficulty: 'medium', question: 'It _____ that the information was incorrect.', answer: "turned out", options: ["turned out", "turned in", "turned off", "turned up"], hint: "S'avérer = turn ___" },
            { type: 'fill', difficulty: 'hard', question: 'The company needs to _____ these issues before the launch.', answer: "sort out", options: ["sort out", "sort in", "sort up", "sort off"], hint: "Résoudre/régler = sort ___" },
            { type: 'fill', difficulty: 'hard', question: 'Can you _____ how much we owe?', answer: "work out", options: ["work out", "work in", "work up", "work on"], hint: "Calculer/résoudre = work ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The plan didn't work out as expected.", options: ["The plan didn't work out as expected.", "The plan didn't work in as expected.", "The plan didn't work off as expected."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Students must _____ their assignments by Friday.', answer: "hand in", options: ["hand in", "hand out", "hand on", "hand off"] },
            { type: 'fill', difficulty: 'hard', question: 'The investigation _____ that the employee had been stealing.', answer: "found out", options: ["found out", "found in", "found off", "found up"] },
            { type: 'fill', difficulty: 'hard', question: 'A new study has been _____ to examine the effects of pollution.', answer: "carried out", options: ["carried out", "carried in", "carried off", "carried on"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 133 — Phrasal verbs (3): up/down
    // ─────────────────────────────────────────────
    133: {
        id: 133,
        title: 'Phrasal verbs (3) — up/down',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec UP et DOWN</b><br><br>
<b>UP</b> = idée de <b>monter, augmenter, compléter, commencer</b> :<br>
• <b>set up</b> = créer, mettre en place<br>
• <b>bring up</b> = élever (un enfant) / aborder (un sujet)<br>
• <b>make up</b> = inventer / se réconcilier / constituer<br>
• <b>come up</b> = survenir, apparaître<br>
• <b>give up</b> = abandonner<br><br>
<b>DOWN</b> = idée de <b>descendre, diminuer, noter, arrêter</b> :<br>
• <b>break down</b> = tomber en panne / s'effondrer<br>
• <b>turn down</b> = refuser / baisser (volume)<br>
• <b>write down</b> = noter par écrit<br>
• <b>cut down (on)</b> = réduire<br>
• <b>let down</b> = décevoir`,

        rules: [
            '📐 **UP** → augmenter, compléter, commencer : _set up_ (créer), _give up_ (abandonner), _bring up_ (élever/aborder)',
            '📐 **DOWN** → diminuer, noter, arrêter : _break down_ (tomber en panne), _turn down_ (refuser), _write down_ (noter)',
            '🔵 _make up_ a 3 sens courants : inventer (_He **made up** a story_), se réconcilier (_They **made up**_), constituer (_Women **make up** 60% of staff_)',
            '🔵 _cut down on_ = réduire : _You should **cut down on** sugar._ (Tu devrais réduire le sucre.)',
            '⚠️ _let down_ = décevoir (pas "laisser tomber" littéralement) : _Don\'t **let** me **down**._'
        ],

        examples: [
            { text: "The company was **set up** in 2010.", fr: "L'entreprise a été créée en 2010.", correct: true },
            { text: "My car **broke down** on the highway.", fr: "Ma voiture est tombée en panne sur l'autoroute.", correct: true },
            { text: "She **turned down** the job offer.", fr: "Elle a refusé l'offre d'emploi.", correct: true },
            { text: "Please **write down** your email address.", fr: "Veuillez noter votre adresse email.", correct: true },
            { text: "He was **brought up** by his grandparents.", fr: "Il a été élevé par ses grands-parents.", correct: true }
        ],

        tips: [
            "🇫🇷 'turn down' = refuser (une offre, une invitation). Ne confondez pas avec 'turn off' (éteindre).",
            "💡 'break down' a deux sens : 1) tomber en panne (machine/voiture) 2) s'effondrer émotionnellement.",
            "⚠️ 'make up' est le phrasal verb le plus polysémique — toujours regarder le contexte !"
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Don\'t _____ ! Keep trying!', answer: "give up", options: ["give up", "give in", "give out", "give off"], hint: "Abandonner = give ___" },
            { type: 'fill', difficulty: 'easy', question: 'Could you _____ the music? It\'s too loud.', answer: "turn down", options: ["turn down", "turn up", "turn off", "turn in"], hint: "Baisser (volume) = turn ___" },
            { type: 'fill', difficulty: 'easy', question: '_____ your name and phone number, please.', answer: "Write down", options: ["Write down", "Write up", "Write in", "Write off"], hint: "Noter = write ___" },
            { type: 'fill', difficulty: 'medium', question: 'A new committee has been _____ to investigate the matter.', answer: "set up", options: ["set up", "set down", "set in", "set off"], hint: "Créer/mettre en place = set ___" },
            { type: 'fill', difficulty: 'medium', question: 'She _____ a story to explain her absence.', answer: "made up", options: ["made up", "made out", "made off", "made in"], hint: "Inventer = make ___" },
            { type: 'fill', difficulty: 'medium', question: 'You should _____ _____ sugar and fatty food.', answer: "cut down on", options: ["cut down on", "cut up on", "cut off on", "cut in on"], hint: "Réduire = cut ___ ___" },
            { type: 'fill', difficulty: 'hard', question: 'An unexpected problem _____ during the meeting.', answer: "came up", options: ["came up", "came down", "came in", "came off"], hint: "Survenir = come ___" },
            { type: 'fill', difficulty: 'hard', question: 'I\'m sorry I _____ you _____. I won\'t do it again.', answer: "let … down", options: ["let … down", "let … up", "let … in", "let … off"], hint: "Décevoir = let ___ ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est CORRECTE ?', answer: "Women make up 52% of the population.", options: ["Women make up 52% of the population.", "Women make out 52% of the population.", "Women make in 52% of the population."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The negotiations _____ after three days of talks.', answer: "broke down", options: ["broke down", "broke up", "broke in", "broke off"] },
            { type: 'fill', difficulty: 'hard', question: 'She was _____ in a small village in the countryside.', answer: "brought up", options: ["brought up", "brought down", "brought in", "brought out"] },
            { type: 'fill', difficulty: 'hard', question: 'He _____ the invitation because he was too busy.', answer: "turned down", options: ["turned down", "turned off", "turned up", "turned out"] },
            { type: 'correct', difficulty: 'hard', question: 'Quel phrasal verb signifie "créer/fonder" ?', answer: "set up", options: ["set up", "set down", "set off", "set in"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 134 — Phrasal verbs (4): on/off
    // ─────────────────────────────────────────────
    134: {
        id: 134,
        title: 'Phrasal verbs (4) — on/off',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec ON et OFF</b><br><br>
<b>ON</b> = idée de <b>continuer, mettre, fonctionner</b> :<br>
• <b>carry on</b> = continuer<br>
• <b>go on</b> = continuer / se passer<br>
• <b>put on</b> = mettre (vêtement) / allumer<br>
• <b>get on (with)</b> = s'entendre avec<br>
• <b>hold on</b> = attendre / s'accrocher<br><br>
<b>OFF</b> = idée d'<b>éloigner, arrêter, annuler, partir</b> :<br>
• <b>take off</b> = décoller / enlever (vêtement)<br>
• <b>put off</b> = reporter / décourager<br>
• <b>call off</b> = annuler<br>
• <b>go off</b> = sonner (alarme) / expirer (nourriture)<br>
• <b>set off</b> = partir en voyage / déclencher`,

        rules: [
            '📐 **ON** → continuer, mettre, fonctionner : _carry on_ (continuer), _put on_ (mettre), _get on with_ (s\'entendre avec)',
            '📐 **OFF** → éloigner, arrêter, annuler : _take off_ (décoller/enlever), _call off_ (annuler), _put off_ (reporter)',
            '🔵 _go on_ = continuer + se passer : _What\'s **going on**?_ (Qu\'est-ce qui se passe ?)',
            '🔵 _go off_ = sonner (alarme) + tourner (nourriture) : _The alarm **went off** at 6am._',
            '🔵 _set off_ = partir + déclencher : _We **set off** early._ / _The noise **set off** the alarm._'
        ],

        examples: [
            { text: "**Carry on** with your work. I'll wait.", fr: "Continue ton travail. J'attendrai.", correct: true },
            { text: "The plane **took off** on time.", fr: "L'avion a décollé à l'heure.", correct: true },
            { text: "The meeting has been **called off**.", fr: "La réunion a été annulée.", correct: true },
            { text: "**Put on** your coat — it's cold outside.", fr: "Mets ton manteau — il fait froid dehors.", correct: true },
            { text: "Don't **put off** what you can do today.", fr: "Ne remets pas à demain ce que tu peux faire aujourd'hui.", correct: true }
        ],

        tips: [
            "🇫🇷 'take off' a deux sens très différents : 1) un avion décolle 2) enlever un vêtement. Le contexte est roi !",
            "💡 'call off' = annuler (réunion, événement). Différent de 'cancel' qui est plus formel.",
            "⚠️ 'put off' = reporter OU décourager. Ex: 'The smell put me off' = L'odeur m'a dégoûté."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ your jacket. It\'s warm inside.', answer: "Take off", options: ["Take off", "Take on", "Take up", "Take in"], hint: "Enlever (vêtement) = take ___" },
            { type: 'fill', difficulty: 'easy', question: 'Please _____ — I\'ll be with you in a moment.', answer: "hold on", options: ["hold on", "hold off", "hold up", "hold in"], hint: "Attendre = hold ___" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ her coat and went outside.', answer: "put on", options: ["put on", "put off", "put in", "put up"], hint: "Mettre (vêtement) = put ___" },
            { type: 'fill', difficulty: 'medium', question: 'The game was _____ because of the rain.', answer: "called off", options: ["called off", "called on", "called up", "called in"], hint: "Annuler = call ___" },
            { type: 'fill', difficulty: 'medium', question: 'What\'s _____ _____ ? Why is everyone shouting?', answer: "going on", options: ["going on", "going off", "going in", "going up"], hint: "Que se passe-t-il ? = What's ___ ?" },
            { type: 'fill', difficulty: 'medium', question: 'We _____ the meeting _____ until next week.', answer: "put … off", options: ["put … off", "put … on", "put … in", "put … up"], hint: "Reporter = put ___" },
            { type: 'fill', difficulty: 'hard', question: 'The fire alarm _____ in the middle of the night.', answer: "went off", options: ["went off", "went on", "went in", "went out"], hint: "Sonner (alarme) = go ___" },
            { type: 'fill', difficulty: 'hard', question: 'We _____ at dawn to avoid traffic.', answer: "set off", options: ["set off", "set on", "set up", "set in"], hint: "Partir en voyage = set ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase signifie "s\'entendre bien" ?', answer: "They get on well with each other.", options: ["They get on well with each other.", "They get off well with each other.", "They get up well with each other."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'I don\'t _____ well with my new colleague.', answer: "get on", options: ["get on", "get off", "get in", "get up"] },
            { type: 'fill', difficulty: 'hard', question: 'The smell of the fish _____ me _____. I couldn\'t eat it.', answer: "put … off", options: ["put … off", "put … on", "put … out", "put … in"] },
            { type: 'fill', difficulty: 'hard', question: 'The company decided to _____ the project due to budget cuts.', answer: "call off", options: ["call off", "call on", "call up", "call out"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 135 — Phrasal verbs (5): away/back
    // ─────────────────────────────────────────────
    135: {
        id: 135,
        title: 'Phrasal verbs (5) — away/back',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec AWAY et BACK</b><br><br>
<b>AWAY</b> = idée d'<b>éloignement, disparition, rangement</b> :<br>
• <b>go away</b> = partir<br>
• <b>give away</b> = donner (gratuitement) / révéler<br>
• <b>throw away</b> = jeter<br>
• <b>put away</b> = ranger<br>
• <b>run away</b> = s'enfuir<br><br>
<b>BACK</b> = idée de <b>retour, réponse</b> :<br>
• <b>come back</b> = revenir<br>
• <b>give back</b> = rendre<br>
• <b>call back</b> = rappeler (téléphone)<br>
• <b>pay back</b> = rembourser<br>
• <b>look back</b> = regarder en arrière / repenser`,

        rules: [
            '📐 **AWAY** → éloignement, disparition : _go away_ (partir), _throw away_ (jeter), _give away_ (donner/révéler)',
            '📐 **BACK** → retour, réponse : _come back_ (revenir), _call back_ (rappeler), _pay back_ (rembourser)',
            '🔵 _give away_ = donner gratuitement + révéler un secret : _She **gave away** the ending of the movie!_',
            '🔵 _get away with_ = s\'en tirer : _He **got away with** cheating on the exam._',
            '🔵 _hold back_ = retenir : _She **held back** her tears._'
        ],

        examples: [
            { text: "**Go away**! I want to be alone.", fr: "Va-t'en ! Je veux être seul.", correct: true },
            { text: "Can you **give back** my book, please?", fr: "Tu peux me rendre mon livre, s'il te plaît ?", correct: true },
            { text: "She **threw away** all her old clothes.", fr: "Elle a jeté tous ses vieux vêtements.", correct: true },
            { text: "I'll **call** you **back** in five minutes.", fr: "Je te rappelle dans cinq minutes.", correct: true }
        ],

        tips: [
            "🇫🇷 'give away' a deux sens : 1) donner gratuitement 2) révéler un secret. En français, on dirait 'vendre la mèche'.",
            "💡 'pay back' = rembourser de l'argent. 'Get back' = récupérer quelque chose.",
            "⚠️ 'run away from' = s'enfuir de. 'Get away with' = s'en sortir sans punition."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Don\'t _____ these papers. I need them.', answer: "throw away", options: ["throw away", "throw in", "throw up", "throw off"], hint: "Jeter = throw ___" },
            { type: 'fill', difficulty: 'easy', question: 'I\'ll _____ you _____ later this evening.', answer: "call … back", options: ["call … back", "call … off", "call … in", "call … up"], hint: "Rappeler (téléphone) = call ___" },
            { type: 'fill', difficulty: 'easy', question: 'Please _____ your toys _____ before dinner.', answer: "put … away", options: ["put … away", "put … back", "put … up", "put … off"], hint: "Ranger = put ___" },
            { type: 'fill', difficulty: 'medium', question: 'I need to _____ you _____ the money I borrowed.', answer: "pay … back", options: ["pay … back", "pay … off", "pay … in", "pay … out"], hint: "Rembourser = pay ___" },
            { type: 'fill', difficulty: 'medium', question: 'Don\'t _____ the ending of the film!', answer: "give away", options: ["give away", "give back", "give in", "give out"], hint: "Révéler = give ___" },
            { type: 'fill', difficulty: 'medium', question: 'He _____ from home when he was 16.', answer: "ran away", options: ["ran away", "ran back", "ran out", "ran off"], hint: "S'enfuir = run ___" },
            { type: 'fill', difficulty: 'hard', question: 'Looking _____, I realize I should have studied harder.', answer: "back", options: ["back", "away", "out", "up"], hint: "Repenser au passé = look ___" },
            { type: 'fill', difficulty: 'hard', question: 'He lied but _____ _____ with it.', answer: "got away", options: ["got away", "got back", "got out", "got off"], hint: "S'en tirer = get ___ with" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase signifie "rendre quelque chose" ?', answer: "Give it back to me.", options: ["Give it back to me.", "Give it away to me.", "Give it off to me."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The charity _____ free meals to homeless people.', answer: "gives away", options: ["gives away", "gives back", "gives in", "gives off"] },
            { type: 'fill', difficulty: 'hard', question: 'She _____ _____ her tears during the presentation.', answer: "held back", options: ["held back", "held away", "held on", "held off"] },
            { type: 'fill', difficulty: 'hard', question: 'How did he manage to _____ the mistake?', answer: "get away with", options: ["get away with", "get back with", "get on with", "get out of"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 136 — Phrasal verbs (6): up (continued)
    // ─────────────────────────────────────────────
    136: {
        id: 136,
        title: 'Phrasal verbs (6) — up (continued)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec UP (suite)</b><br><br>
UP est la particule la plus fréquente. Voici d'autres phrasal verbs essentiels :<br><br>
• <b>pick up</b> = ramasser / prendre en voiture / apprendre<br>
• <b>look up</b> = chercher (dans un dictionnaire) / lever les yeux<br>
• <b>show up</b> = se montrer, arriver<br>
• <b>end up</b> = finir par<br>
• <b>keep up (with)</b> = suivre le rythme<br>
• <b>cheer up</b> = remonter le moral<br>
• <b>grow up</b> = grandir<br>
• <b>take up</b> = commencer (un hobby) / occuper (espace)`,

        rules: [
            '🔵 _pick up_ = ramasser / aller chercher / apprendre : _I\'ll **pick you up** at 8._ / _She **picked up** Spanish quickly._',
            '🔵 _look up_ = chercher une info : _**Look up** this word in the dictionary._',
            '🔵 _end up_ + -ing = finir par : _We **ended up** staying home._ (On a fini par rester à la maison.)',
            '🔵 _keep up with_ = suivre le rythme : _I can\'t **keep up with** all the changes._',
            '🔵 _take up_ = commencer un hobby / occuper : _She **took up** yoga._ / _This desk **takes up** too much space._'
        ],

        examples: [
            { text: "I'll **pick you up** at the airport.", fr: "Je viendrai te chercher à l'aéroport.", correct: true },
            { text: "She **ended up** becoming a doctor.", fr: "Elle a fini par devenir médecin.", correct: true },
            { text: "I can't **keep up with** all the new technology.", fr: "Je n'arrive pas à suivre le rythme de la technologie.", correct: true },
            { text: "He **grew up** in a small town in France.", fr: "Il a grandi dans une petite ville en France.", correct: true },
            { text: "She **took up** painting after retirement.", fr: "Elle s'est mise à la peinture après la retraite.", correct: true }
        ],

        tips: [
            "🇫🇷 'pick up' est un des phrasal verbs les plus polyvalents : ramasser, chercher quelqu'un, apprendre facilement, décrocher le téléphone...",
            "💡 'end up' + -ing : toujours suivi du gérondif ! 'We ended up walking' (pas 'to walk').",
            "⚠️ 'grow up' (grandir) ≠ 'grow' (pousser/cultiver). 'Where did you grow up?' est une question fréquente."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I _____ in Paris but now I live in London.', answer: "grew up", options: ["grew up", "grew in", "grew on", "grew out"], hint: "Grandir = grow ___" },
            { type: 'fill', difficulty: 'easy', question: 'Can you _____ this word in the dictionary?', answer: "look up", options: ["look up", "look out", "look in", "look on"], hint: "Chercher (référence) = look ___" },
            { type: 'fill', difficulty: 'easy', question: '_____ ! Things will get better.', answer: "Cheer up", options: ["Cheer up", "Cheer on", "Cheer in", "Cheer off"], hint: "Remonter le moral = cheer ___" },
            { type: 'fill', difficulty: 'medium', question: 'I\'ll _____ you _____ at the station at 7.', answer: "pick … up", options: ["pick … up", "pick … on", "pick … in", "pick … off"], hint: "Aller chercher = pick ___" },
            { type: 'fill', difficulty: 'medium', question: 'He wanted to travel but _____ _____ working in a bank.', answer: "ended up", options: ["ended up", "ended in", "ended on", "ended off"], hint: "Finir par = end ___" },
            { type: 'fill', difficulty: 'medium', question: 'She recently _____ tennis as a hobby.', answer: "took up", options: ["took up", "took on", "took in", "took off"], hint: "Commencer (hobby) = take ___" },
            { type: 'fill', difficulty: 'hard', question: 'Sales are growing so fast that production can\'t _____ _____.', answer: "keep up", options: ["keep up", "keep on", "keep in", "keep off"], hint: "Suivre le rythme = keep ___" },
            { type: 'fill', difficulty: 'hard', question: 'She never _____ to the meeting. We waited for nothing.', answer: "showed up", options: ["showed up", "showed in", "showed on", "showed off"], hint: "Se présenter/arriver = show ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "We ended up taking a taxi.", options: ["We ended up taking a taxi.", "We ended up to take a taxi.", "We ended up take a taxi."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'She _____ French very quickly when she moved to Paris.', answer: "picked up", options: ["picked up", "picked on", "picked in", "picked out"] },
            { type: 'fill', difficulty: 'hard', question: 'This project is _____ too much of our time.', answer: "taking up", options: ["taking up", "taking on", "taking in", "taking off"] },
            { type: 'fill', difficulty: 'hard', question: 'I tried to _____ _____ _____ the other students but they were too fast.', answer: "keep up with", options: ["keep up with", "keep on with", "keep in with", "keep out with"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 137 — Phrasal verbs (7): out (continued)
    // ─────────────────────────────────────────────
    137: {
        id: 137,
        title: 'Phrasal verbs (7) — out (continued)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec OUT (suite)</b><br><br>
OUT est très productif. Voici d'autres phrasal verbs essentiels :<br><br>
• <b>point out</b> = faire remarquer, signaler<br>
• <b>leave out</b> = omettre, exclure<br>
• <b>figure out</b> = comprendre, résoudre<br>
• <b>stand out</b> = se démarquer<br>
• <b>check out</b> = vérifier / quitter (hôtel)<br>
• <b>drop out (of)</b> = abandonner (études)<br>
• <b>hang out</b> = traîner, passer du temps`,

        rules: [
            '🔵 _point out_ = signaler, faire remarquer : _She **pointed out** several errors in the report._',
            '🔵 _figure out_ = comprendre, résoudre : _I can\'t **figure out** how to use this software._',
            '🔵 _leave out_ = omettre : _Don\'t **leave out** any details._',
            '🔵 _stand out_ = se démarquer : _Her CV **stood out** from the others._',
            '🔵 _drop out of_ = abandonner : _He **dropped out of** university._'
        ],

        examples: [
            { text: "She **pointed out** that the deadline had passed.", fr: "Elle a fait remarquer que la date limite était passée.", correct: true },
            { text: "I can't **figure out** this math problem.", fr: "Je n'arrive pas à résoudre ce problème de maths.", correct: true },
            { text: "You **left out** the most important information!", fr: "Tu as omis l'information la plus importante !", correct: true },
            { text: "Her presentation really **stood out**.", fr: "Sa présentation s'est vraiment démarquée.", correct: true }
        ],

        tips: [
            "🇫🇷 'figure out' = comprendre/résoudre quelque chose de compliqué. Synonyme de 'work out'.",
            "💡 'check out' a plusieurs sens : 1) vérifier 2) quitter l'hôtel 3) regarder (informel : 'Check this out!' = Regarde ça !).",
            "⚠️ 'drop out OF school' — ne pas oublier 'of' ! En français : décrocher de l'école."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Can you _____ this website? It\'s really interesting.', answer: "check out", options: ["check out", "check in", "check up", "check off"], hint: "Regarder/vérifier = check ___" },
            { type: 'fill', difficulty: 'easy', question: 'Don\'t _____ any names from the list.', answer: "leave out", options: ["leave out", "leave in", "leave on", "leave off"], hint: "Omettre = leave ___" },
            { type: 'fill', difficulty: 'easy', question: 'He _____ _____ that we had made a mistake.', answer: "pointed out", options: ["pointed out", "pointed in", "pointed up", "pointed off"], hint: "Signaler = point ___" },
            { type: 'fill', difficulty: 'medium', question: 'I can\'t _____ why the computer isn\'t working.', answer: "figure out", options: ["figure out", "figure in", "figure on", "figure up"], hint: "Comprendre/résoudre = figure ___" },
            { type: 'fill', difficulty: 'medium', question: 'Her bright red dress made her _____ in the crowd.', answer: "stand out", options: ["stand out", "stand up", "stand in", "stand off"], hint: "Se démarquer = stand ___" },
            { type: 'fill', difficulty: 'medium', question: 'He _____ _____ of college after the first year.', answer: "dropped out", options: ["dropped out", "dropped in", "dropped off", "dropped on"], hint: "Abandonner (études) = drop ___ of" },
            { type: 'fill', difficulty: 'hard', question: 'We used to _____ at the café after school.', answer: "hang out", options: ["hang out", "hang in", "hang on", "hang up"], hint: "Traîner = hang ___" },
            { type: 'fill', difficulty: 'hard', question: 'It took me hours to _____ how to assemble the furniture.', answer: "figure out", options: ["figure out", "work in", "sort off", "check up"], hint: "Comprendre après réflexion = figure ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "She pointed out the problem to us.", options: ["She pointed out the problem to us.", "She pointed the problem out to us.", "Les deux sont correctes."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The report _____ several key issues that need attention.', answer: "points out", options: ["points out", "points in", "points off", "points up"] },
            { type: 'fill', difficulty: 'hard', question: 'You need to _____ from other candidates if you want this job.', answer: "stand out", options: ["stand out", "stand up", "stand in", "stand off"] },
            { type: 'fill', difficulty: 'hard', question: 'Scientists are trying to _____ what causes this disease.', answer: "figure out", options: ["figure out", "figure in", "figure on", "figure off"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 138 — Phrasal verbs (8): get
    // ─────────────────────────────────────────────
    138: {
        id: 138,
        title: 'Phrasal verbs (8) — get',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec GET</b><br><br>
GET est le verbe le plus utilisé dans les phrasal verbs. Il change de sens avec chaque particule :<br><br>
• <b>get up</b> = se lever<br>
• <b>get on (with)</b> = s'entendre (avec) / monter (bus, train)<br>
• <b>get off</b> = descendre (bus, train)<br>
• <b>get in/into</b> = entrer / monter (voiture)<br>
• <b>get out (of)</b> = sortir (de)<br>
• <b>get over</b> = surmonter / se remettre de<br>
• <b>get along (with)</b> = bien s'entendre<br>
• <b>get through</b> = traverser / joindre (téléphone)<br>
• <b>get rid of</b> = se débarrasser de`,

        rules: [
            '🔵 _get up_ = se lever : _I **get up** at 7 every morning._',
            '🔵 _get on/off_ = monter/descendre (transport en commun) : _**Get on** the bus._ / _**Get off** at the next stop._',
            '🔵 _get in/out of_ = monter/descendre (voiture/taxi) : _**Get in** the car._ / _**Get out of** the taxi._',
            '🔵 _get over_ = surmonter, se remettre : _It took her months to **get over** the breakup._',
            '🔵 _get rid of_ = se débarrasser de : _I need to **get rid of** these old magazines._'
        ],

        examples: [
            { text: "What time do you usually **get up**?", fr: "À quelle heure te lèves-tu habituellement ?", correct: true },
            { text: "She **got over** her illness quickly.", fr: "Elle s'est remise rapidement de sa maladie.", correct: true },
            { text: "I need to **get rid of** this old furniture.", fr: "Je dois me débarrasser de ces vieux meubles.", correct: true },
            { text: "We **get along** well with our neighbours.", fr: "On s'entend bien avec nos voisins.", correct: true },
            { text: "**Get in** the car! (NOT: ~~Get on the car!~~)", fr: "Monte dans la voiture ! (on dit 'get in' pour les voitures)", correct: true, note: "Voiture/taxi = get in/out of. Bus/train = get on/off." }
        ],

        tips: [
            "🇫🇷 Voiture/taxi = GET IN / GET OUT OF. Bus/train/avion = GET ON / GET OFF. C'est une règle stricte !",
            "💡 'get over' peut signifier 1) se remettre d'une maladie 2) surmonter une difficulté 3) se remettre d'une rupture.",
            "⚠️ Ne confondez pas 'get on with' (s'entendre avec) et 'get on' (monter dans un transport)."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I _____ at 6:30 every morning.', answer: "get up", options: ["get up", "get on", "get in", "get off"], hint: "Se lever = get ___" },
            { type: 'fill', difficulty: 'easy', question: 'Please _____ the bus at the next stop.', answer: "get off", options: ["get off", "get out", "get in", "get away"], hint: "Descendre du bus = get ___" },
            { type: 'fill', difficulty: 'easy', question: '_____ _____ the car — we\'re leaving now.', answer: "Get in", options: ["Get in", "Get on", "Get up", "Get off"], hint: "Monter (voiture) = get ___" },
            { type: 'fill', difficulty: 'medium', question: 'It took him a long time to _____ the divorce.', answer: "get over", options: ["get over", "get on", "get off", "get up"], hint: "Surmonter = get ___" },
            { type: 'fill', difficulty: 'medium', question: 'Do you _____ well with your colleagues?', answer: "get along", options: ["get along", "get over", "get up", "get in"], hint: "S'entendre avec = get ___" },
            { type: 'fill', difficulty: 'medium', question: 'I need to _____ _____ _____ all this junk.', answer: "get rid of", options: ["get rid of", "get out of", "get on of", "get off of"], hint: "Se débarrasser de = get ___ ___" },
            { type: 'fill', difficulty: 'hard', question: 'I tried calling but couldn\'t _____ _____.', answer: "get through", options: ["get through", "get over", "get on", "get along"], hint: "Joindre (téléphone) = get ___" },
            { type: 'fill', difficulty: 'hard', question: 'She _____ _____ the taxi and walked into the hotel.', answer: "got out of", options: ["got out of", "got off of", "got in of", "got away of"], hint: "Descendre (taxi) = get ___ ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "Get on the car please.", options: ["Get on the car please.", "Get in the car please.", "Get on the bus please."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Passengers should _____ the train at platform 3.', answer: "get on", options: ["get on", "get in", "get off", "get up"] },
            { type: 'fill', difficulty: 'hard', question: 'She hasn\'t _____ _____ the death of her cat yet.', answer: "got over", options: ["got over", "got on", "got off", "got up"] },
            { type: 'fill', difficulty: 'hard', question: 'The company is trying to _____ _____ _____ outdated equipment.', answer: "get rid of", options: ["get rid of", "get out of", "get away of", "get on of"] },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon phrasal verb pour "joindre quelqu\'un par téléphone" ?', answer: "get through to", options: ["get through to", "get over to", "get on to", "get along to"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 139 — Phrasal verbs (9): look/go/come
    // ─────────────────────────────────────────────
    139: {
        id: 139,
        title: 'Phrasal verbs (9) — look/go/come',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec LOOK, GO, COME</b><br><br>
<b>LOOK :</b><br>
• <b>look for</b> = chercher<br>
• <b>look after</b> = s'occuper de<br>
• <b>look forward to</b> = avoir hâte de<br>
• <b>look into</b> = examiner, enquêter sur<br><br>
<b>GO :</b><br>
• <b>go on</b> = continuer / se passer<br>
• <b>go through</b> = traverser (épreuve) / examiner<br>
• <b>go ahead</b> = aller de l'avant<br><br>
<b>COME :</b><br>
• <b>come across</b> = tomber sur<br>
• <b>come up with</b> = trouver (idée, solution)<br>
• <b>come from</b> = venir de`,

        rules: [
            '🔵 _look for_ = chercher (activement) : _I\'m **looking for** my keys._',
            '🔵 _look forward to_ + **-ing** : _I **look forward to hearing** from you._ (formule TOEIC très courante !)',
            '🔵 _look into_ = examiner : _The manager will **look into** the complaint._',
            '🔵 _go through_ = traverser une épreuve : _She\'s **going through** a difficult time._',
            '🔵 _come up with_ = trouver (idée) : _We need to **come up with** a solution._'
        ],

        examples: [
            { text: "I'm **looking for** a new apartment.", fr: "Je cherche un nouvel appartement.", correct: true },
            { text: "Who **looks after** the children when you're at work?", fr: "Qui s'occupe des enfants quand tu travailles ?", correct: true },
            { text: "I **came across** an old photo of us.", fr: "Je suis tombé sur une vieille photo de nous.", correct: true },
            { text: "We need to **come up with** a plan quickly.", fr: "On doit trouver un plan rapidement.", correct: true },
            { text: "I **look forward to meeting** you. (NOT: ~~look forward to meet~~)", fr: "J'ai hâte de vous rencontrer.", correct: true, note: "'look forward to' + -ing (to = préposition !)" }
        ],

        tips: [
            "🇫🇷 'look forward to' + -ING ! Le 'to' ici est une PRÉPOSITION, pas l'infinitif. 'I look forward to seeing you' (pas 'to see').",
            "💡 'look into' est très formel (TOEIC) : 'We will look into this matter' = Nous examinerons cette affaire.",
            "⚠️ 'come across' = tomber sur par hasard. Différent de 'look for' qui est intentionnel."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'What are you _____ _____ ?', answer: "looking for", options: ["looking for", "looking at", "looking on", "looking in"], hint: "Chercher = look ___" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ _____ her sick mother every day.', answer: "looks after", options: ["looks after", "looks for", "looks at", "looks on"], hint: "S'occuper de = look ___" },
            { type: 'fill', difficulty: 'easy', question: 'I _____ _____ to seeing you at the party!', answer: "look forward", options: ["look forward", "look after", "look for", "look into"], hint: "Avoir hâte = look ___ to" },
            { type: 'fill', difficulty: 'medium', question: 'The police are _____ the case.', answer: "looking into", options: ["looking into", "looking for", "looking after", "looking at"], hint: "Enquêter sur = look ___" },
            { type: 'fill', difficulty: 'medium', question: 'She _____ _____ a great idea for the project.', answer: "came up with", options: ["came up with", "came across with", "came on with", "came in with"], hint: "Trouver (idée) = come ___ ___" },
            { type: 'fill', difficulty: 'medium', question: 'I _____ _____ an interesting article about AI.', answer: "came across", options: ["came across", "came up", "came in", "came on"], hint: "Tomber sur (par hasard) = come ___" },
            { type: 'fill', difficulty: 'hard', question: 'She\'s _____ _____ a very difficult period in her life.', answer: "going through", options: ["going through", "going on", "going over", "going in"], hint: "Traverser (épreuve) = go ___" },
            { type: 'fill', difficulty: 'hard', question: '_____ _____ and start without me.', answer: "Go ahead", options: ["Go ahead", "Go on", "Go through", "Go over"], hint: "Aller de l'avant = go ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I look forward to hearing from you.", options: ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hearing from you."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'We are _____ the matter and will respond shortly.', answer: "looking into", options: ["looking into", "looking for", "looking at", "looking on"] },
            { type: 'fill', difficulty: 'hard', question: 'The team _____ _____ _____ an innovative solution to reduce costs.', answer: "came up with", options: ["came up with", "came across with", "came through with", "came on with"] },
            { type: 'fill', difficulty: 'hard', question: 'She _____ _____ a lot of difficulties during her first year abroad.', answer: "went through", options: ["went through", "went on", "went over", "went ahead"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 140 — Phrasal verbs (10): take/bring/put
    // ─────────────────────────────────────────────
    140: {
        id: 140,
        title: 'Phrasal verbs (10) — take/bring/put',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec TAKE, BRING, PUT</b><br><br>
<b>TAKE :</b><br>
• <b>take off</b> = enlever / décoller<br>
• <b>take on</b> = embaucher / assumer (responsabilité)<br>
• <b>take over</b> = reprendre, prendre le contrôle<br>
• <b>take up</b> = commencer (hobby) / occuper (espace)<br><br>
<b>BRING :</b><br>
• <b>bring up</b> = élever / aborder (sujet)<br>
• <b>bring about</b> = provoquer, causer<br>
• <b>bring back</b> = rapporter / raviver (souvenirs)<br><br>
<b>PUT :</b><br>
• <b>put up with</b> = supporter, tolérer<br>
• <b>put forward</b> = proposer (idée)<br>
• <b>put aside</b> = mettre de côté (argent, différences)`,

        rules: [
            '🔵 _take on_ = embaucher : _The company is **taking on** new staff._ → L\'entreprise embauche du nouveau personnel.',
            '🔵 _take over_ = prendre le contrôle : _A new CEO **took over** the company._',
            '🔵 _bring up_ = 1) élever un enfant 2) aborder un sujet : _Don\'t **bring up** politics at dinner._',
            '🔵 _put up with_ = supporter (négatif) : _I can\'t **put up with** this noise!_',
            '🔵 _put forward_ = proposer : _She **put forward** an interesting idea._ (très formel, TOEIC)'
        ],

        examples: [
            { text: "The company is **taking on** 50 new employees.", fr: "L'entreprise embauche 50 nouveaux employés.", correct: true },
            { text: "She **brought up** three children on her own.", fr: "Elle a élevé trois enfants toute seule.", correct: true },
            { text: "I can't **put up with** his behaviour anymore.", fr: "Je ne supporte plus son comportement.", correct: true },
            { text: "The manager **put forward** a new proposal.", fr: "Le directeur a proposé une nouvelle proposition.", correct: true }
        ],

        tips: [
            "🇫🇷 'put up with' = supporter/tolérer quelque chose de négatif. C'est un phrasal verb à 3 mots inséparable.",
            "💡 'bring about' = provoquer, causer. Très formel : 'Technology has brought about many changes.'",
            "⚠️ 'take over' est très courant en business English (TOEIC) : rachat d'entreprise, prise de contrôle."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Please _____ off your shoes at the door.', answer: "take", options: ["take", "put", "bring", "get"], hint: "Enlever = take ___" },
            { type: 'fill', difficulty: 'easy', question: 'Can you _____ back my book tomorrow?', answer: "bring", options: ["bring", "take", "put", "give"], hint: "Rapporter = bring ___" },
            { type: 'fill', difficulty: 'easy', question: 'The plane _____ off on time.', answer: "took", options: ["took", "put", "brought", "set"], hint: "Décoller = take ___" },
            { type: 'fill', difficulty: 'medium', question: 'The firm has _____ on 20 new trainees this year.', answer: "taken", options: ["taken", "brought", "put", "given"], hint: "Embaucher = take ___ new staff" },
            { type: 'fill', difficulty: 'medium', question: 'Please don\'t _____ this subject _____ at the meeting.', answer: "bring … up", options: ["bring … up", "bring … on", "bring … in", "bring … off"], hint: "Aborder (sujet) = bring ___" },
            { type: 'fill', difficulty: 'medium', question: 'How do you _____ _____ _____ such a noisy environment?', answer: "put up with", options: ["put up with", "put on with", "put off with", "put in with"], hint: "Supporter = put ___ ___" },
            { type: 'fill', difficulty: 'hard', question: 'The new manager will _____ _____ next month.', answer: "take over", options: ["take over", "take on", "take up", "take off"], hint: "Prendre le contrôle = take ___" },
            { type: 'fill', difficulty: 'hard', question: 'Several delegates _____ _____ proposals for reform.', answer: "put forward", options: ["put forward", "put on", "put up", "put out"], hint: "Proposer (formel) = put ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase signifie "provoquer des changements" ?', answer: "Technology has brought about many changes.", options: ["Technology has brought about many changes.", "Technology has brought up many changes.", "Technology has brought on many changes."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'A multinational company has _____ _____ the local business.', answer: "taken over", options: ["taken over", "taken on", "taken up", "taken off"] },
            { type: 'fill', difficulty: 'hard', question: 'The new policy has _____ _____ significant improvements.', answer: "brought about", options: ["brought about", "brought up", "brought in", "brought on"] },
            { type: 'fill', difficulty: 'hard', question: 'She _____ _____ an innovative plan at the board meeting.', answer: "put forward", options: ["put forward", "put on", "put up", "put off"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 141 — Phrasal verbs (11): make/do/have
    // ─────────────────────────────────────────────
    141: {
        id: 141,
        title: 'Phrasal verbs (11) — make/do/have',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs avec MAKE, DO, HAVE</b><br><br>
Ces verbes sont source de confusion car le français utilise "faire" pour les deux premiers.<br><br>
<b>MAKE :</b><br>
• <b>make up</b> = inventer / se réconcilier / constituer / se maquiller<br>
• <b>make out</b> = distinguer / comprendre<br>
• <b>make up for</b> = compenser<br><br>
<b>DO :</b><br>
• <b>do without</b> = se passer de<br>
• <b>do up</b> = rénover / boutonner<br>
• <b>do away with</b> = supprimer, abolir<br><br>
<b>HAVE :</b><br>
• <b>have … to do with</b> = avoir rapport avec<br>
• <b>have it out (with)</b> = s'expliquer avec<br>`,

        rules: [
            '🔵 _make up_ a 4 sens : 1) inventer 2) se réconcilier 3) constituer 4) se maquiller',
            '🔵 _make up for_ = compenser : _She worked extra hours to **make up for** the lost time._',
            '🔵 _do without_ = se passer de : _We\'ll have to **do without** a car this month._',
            '🔵 _do away with_ = abolir, supprimer (formel) : _They want to **do away with** the old rules._',
            '🔵 _have nothing to do with_ = n\'avoir rien à voir avec : _This **has nothing to do with** you._'
        ],

        examples: [
            { text: "He **made up** a story to avoid trouble.", fr: "Il a inventé une histoire pour éviter les ennuis.", correct: true },
            { text: "I can't **make out** what the sign says.", fr: "Je n'arrive pas à distinguer ce que dit le panneau.", correct: true },
            { text: "She worked extra to **make up for** being late.", fr: "Elle a travaillé davantage pour compenser son retard.", correct: true },
            { text: "We'll have to **do without** coffee today.", fr: "On devra se passer de café aujourd'hui.", correct: true }
        ],

        tips: [
            "🇫🇷 MAKE = créer/fabriquer → phrasal verbs liés à la création. DO = effectuer → phrasal verbs liés à l'action.",
            "💡 'make up for' = compenser. Souvent au TOEIC : 'The quality makes up for the high price.'",
            "⚠️ 'have nothing to do with' = ne pas être lié à. Très utile en conversation !"
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The whole story was _____ up.', answer: "made", options: ["made", "done", "had", "got"], hint: "Inventer = make ___" },
            { type: 'fill', difficulty: 'easy', question: 'I can manage to _____ without a car.', answer: "do", options: ["do", "make", "have", "get"], hint: "Se passer de = ___ without" },
            { type: 'fill', difficulty: 'easy', question: 'This _____ nothing to _____ with you.', answer: "has … do", options: ["has … do", "makes … do", "does … make", "gets … do"], hint: "Avoir rapport avec = have ___ to do with" },
            { type: 'fill', difficulty: 'medium', question: 'They finally _____ up after their argument.', answer: "made", options: ["made", "did", "had", "put"], hint: "Se réconcilier = make ___" },
            { type: 'fill', difficulty: 'medium', question: 'The extra bonus _____ up for the low salary.', answer: "makes", options: ["makes", "does", "has", "takes"], hint: "Compenser = make up ___" },
            { type: 'fill', difficulty: 'medium', question: 'I can barely _____ out the words on this old letter.', answer: "make", options: ["make", "do", "have", "take"], hint: "Distinguer = make ___" },
            { type: 'fill', difficulty: 'hard', question: 'The government wants to _____ away with this tax.', answer: "do", options: ["do", "make", "have", "take"], hint: "Supprimer/abolir = ___ away with" },
            { type: 'fill', difficulty: 'hard', question: 'Women _____ up about 60% of university students.', answer: "make", options: ["make", "do", "have", "take"], hint: "Constituer = make ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase utilise correctement "make up for" ?', answer: "The good weather made up for the poor food.", options: ["The good weather made up for the poor food.", "The good weather made up with the poor food.", "The good weather did up for the poor food."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Immigrants _____ up a significant part of the labour force.', answer: "make", options: ["make", "do", "have", "take"] },
            { type: 'fill', difficulty: 'hard', question: 'The company decided to _____ away with the old policy.', answer: "do", options: ["do", "make", "have", "put"] },
            { type: 'fill', difficulty: 'hard', question: 'Nothing can _____ up for the loss of a loved one.', answer: "make", options: ["make", "do", "have", "get"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 142 — Phrasal verbs in business (TOEIC focus)
    // ─────────────────────────────────────────────
    142: {
        id: 142,
        title: 'Phrasal verbs in business (TOEIC)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Phrasal verbs en contexte professionnel (TOEIC)</b><br><br>
Le TOEIC teste fréquemment les phrasal verbs dans un contexte business. Voici les plus importants :<br><br>
• <b>carry out</b> = effectuer, réaliser → <i>carry out a survey</i><br>
• <b>deal with</b> = traiter, gérer → <i>deal with a problem</i><br>
• <b>look into</b> = examiner → <i>look into a complaint</i><br>
• <b>set up</b> = créer, organiser → <i>set up a meeting</i><br>
• <b>turn down</b> = refuser → <i>turn down an offer</i><br>
• <b>put forward</b> = proposer → <i>put forward a plan</i><br>
• <b>take over</b> = reprendre → <i>take over a company</i><br>
• <b>lay off</b> = licencier → <i>lay off employees</i><br>
• <b>draw up</b> = rédiger → <i>draw up a contract</i><br>
• <b>follow up (on)</b> = donner suite → <i>follow up on a request</i>`,

        rules: [
            '🔵 _carry out_ = effectuer (formel) : _The audit was **carried out** last month._',
            '🔵 _deal with_ = traiter/gérer : _How do you **deal with** stress?_',
            '🔵 _lay off_ = licencier : _The company **laid off** 200 workers._',
            '🔵 _draw up_ = rédiger (document formel) : _The lawyer **drew up** the contract._',
            '🔵 _follow up (on)_ = donner suite : _I\'ll **follow up on** your request tomorrow._'
        ],

        examples: [
            { text: "We need to **carry out** a market analysis.", fr: "Nous devons effectuer une analyse de marché.", correct: true },
            { text: "The HR department **deals with** employee complaints.", fr: "Le service RH traite les plaintes des employés.", correct: true },
            { text: "The factory **laid off** 100 workers due to cutbacks.", fr: "L'usine a licencié 100 ouvriers à cause des réductions.", correct: true },
            { text: "The lawyer will **draw up** the agreement.", fr: "L'avocat rédigera l'accord.", correct: true },
            { text: "Could you **follow up on** the delivery status?", fr: "Pourriez-vous donner suite au suivi de la livraison ?", correct: true }
        ],

        tips: [
            "🇫🇷 Au TOEIC, les phrasal verbs formels (carry out, deal with, look into, put forward) sont très fréquents dans la partie 5 et 6.",
            "💡 'lay off' = licencier (pour raisons économiques). Différent de 'fire' (licencier pour faute). 'Layoffs' = licenciements collectifs.",
            "⚠️ 'draw up' = rédiger un document officiel (contrat, plan, liste). Pas 'write up' qui est plus informel."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The company _____ out a customer satisfaction survey.', answer: "carried", options: ["carried", "dealt", "looked", "followed"], hint: "Effectuer = carry ___" },
            { type: 'fill', difficulty: 'easy', question: 'Who _____ with customer complaints in your office?', answer: "deals", options: ["deals", "carries", "follows", "draws"], hint: "Traiter/gérer = deal ___" },
            { type: 'fill', difficulty: 'easy', question: 'We need to _____ up a meeting for next week.', answer: "set", options: ["set", "make", "do", "take"], hint: "Organiser = set ___" },
            { type: 'fill', difficulty: 'medium', question: 'The company was forced to _____ off 500 employees.', answer: "lay", options: ["lay", "take", "put", "call"], hint: "Licencier = ___ off" },
            { type: 'fill', difficulty: 'medium', question: 'I\'ll _____ up on your application next week.', answer: "follow", options: ["follow", "look", "take", "carry"], hint: "Donner suite = follow ___" },
            { type: 'fill', difficulty: 'medium', question: 'The legal team _____ up the new contract.', answer: "drew", options: ["drew", "set", "put", "made"], hint: "Rédiger (contrat) = draw ___" },
            { type: 'fill', difficulty: 'hard', question: 'The board _____ forward a new strategy for growth.', answer: "put", options: ["put", "brought", "set", "drew"], hint: "Proposer (formel) = put ___" },
            { type: 'fill', difficulty: 'hard', question: 'The merger means Company A will _____ over Company B.', answer: "take", options: ["take", "put", "carry", "bring"], hint: "Reprendre le contrôle = take ___" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est la plus formelle pour "examiner un problème" ?', answer: "We will look into the matter immediately.", options: ["We will look into the matter immediately.", "We will check the matter.", "We will see the matter."] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The investigation was _____ out by an independent auditor.', answer: "carried", options: ["carried", "dealt", "followed", "drew"] },
            { type: 'fill', difficulty: 'hard', question: 'Due to restructuring, the company _____ off 300 staff members.', answer: "laid", options: ["laid", "took", "put", "called"] },
            { type: 'fill', difficulty: 'hard', question: 'The committee _____ up a detailed report on the findings.', answer: "drew", options: ["drew", "set", "wrote", "put"] },
            { type: 'correct', difficulty: 'hard', question: 'Quel phrasal verb signifie "donner suite à une demande" ?', answer: "follow up on", options: ["follow up on", "deal up with", "carry on with", "look up for"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 143 — Word formation & prefixes
    // ─────────────────────────────────────────────
    143: {
        id: 143,
        title: 'Word formation & prefixes',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>La formation des mots et les préfixes</b><br><br>
En anglais, on peut modifier le sens d'un mot avec des <b>préfixes</b> (avant le mot) :<br><br>
<b>Préfixes négatifs :</b><br>
• <b>un-</b> : happy → <b>un</b>happy (malheureux), able → <b>un</b>able (incapable)<br>
• <b>in-/im-/il-/ir-</b> : possible → <b>im</b>possible, legal → <b>il</b>legal, regular → <b>ir</b>regular<br>
• <b>dis-</b> : agree → <b>dis</b>agree, advantage → <b>dis</b>advantage<br>
• <b>mis-</b> : understand → <b>mis</b>understand, lead → <b>mis</b>lead<br><br>
<b>Autres préfixes utiles :</b><br>
• <b>re-</b> : do → <b>re</b>do (refaire), write → <b>re</b>write (réécrire)<br>
• <b>over-</b> : work → <b>over</b>work (surtravailler), charge → <b>over</b>charge (surfacturer)<br>
• <b>under-</b> : estimate → <b>under</b>estimate (sous-estimer), paid → <b>under</b>paid (sous-payé)<br>
• <b>pre-</b> : view → <b>pre</b>view (avant-première), war → <b>pre</b>-war (d'avant-guerre)`,

        rules: [
            '📐 **un-** est le préfixe négatif le plus courant : _unhappy, unusual, unfair, unable, uncomfortable_',
            '📐 **im-** devant b, m, p : _impossible, impolite, immature, imbalance_',
            '📐 **il-** devant l : _illegal, illiterate, illogical_',
            '📐 **ir-** devant r : _irregular, irresponsible, irrelevant_',
            '🔵 **mis-** = mal fait, erreur : _misunderstand, mislead, misspell, misuse_',
            '🔵 **over-/under-** = trop/pas assez : _overweight/underweight, overpaid/underpaid_'
        ],

        examples: [
            { text: "The decision was very **unfair**.", fr: "La décision était très injuste.", correct: true },
            { text: "It's **impossible** to finish by tomorrow.", fr: "C'est impossible de finir d'ici demain.", correct: true },
            { text: "I **misunderstood** the instructions.", fr: "J'ai mal compris les instructions.", correct: true },
            { text: "The hotel **overcharged** us by $50.", fr: "L'hôtel nous a surfacturé de 50$.", correct: true },
            { text: "The workers are **underpaid** for what they do.", fr: "Les ouvriers sont sous-payés pour ce qu'ils font.", correct: true }
        ],

        tips: [
            "🇫🇷 Beaucoup de préfixes anglais viennent du latin, comme en français : in-/im- (impossible), re- (refaire), dis- (désaccord).",
            "💡 Au TOEIC, les questions de word formation (Part 5) testent souvent le bon préfixe négatif.",
            "⚠️ Attention : 'invaluable' ne signifie PAS 'sans valeur' mais 'inestimable' !"
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'It\'s _____ (legal) to drive without a licence.', answer: "illegal", options: ["illegal", "unlegal", "dislegal", "irlegal"], hint: "Devant L = il-" },
            { type: 'fill', difficulty: 'easy', question: 'His behaviour was _____ (responsible).', answer: "irresponsible", options: ["irresponsible", "unresponsible", "disresponsible", "inresponsible"], hint: "Devant R = ir-" },
            { type: 'fill', difficulty: 'easy', question: 'I\'m sorry, I _____ (understand) you.', answer: "misunderstood", options: ["misunderstood", "ununderstood", "disunderstood", "inunderstood"], hint: "Erreur/mal fait = mis-" },
            { type: 'fill', difficulty: 'medium', question: 'They were _____ (charge) for the repair.', answer: "overcharged", options: ["overcharged", "uncharged", "discharged", "mischarged"], hint: "Trop cher = over-" },
            { type: 'fill', difficulty: 'medium', question: 'The weather was very _____ (predict) — it changed every hour.', answer: "unpredictable", options: ["unpredictable", "impredictable", "dispredictable", "mispredictable"], hint: "Pas possible de prédire = un-" },
            { type: 'fill', difficulty: 'medium', question: 'Don\'t _____ (estimate) the difficulty of the exam.', answer: "underestimate", options: ["underestimate", "overestimate", "misestimate", "disestimate"], hint: "Sous-estimer = under-" },
            { type: 'fill', difficulty: 'hard', question: 'The data in the report was _____ (lead). It showed the wrong trend.', answer: "misleading", options: ["misleading", "unleading", "disleading", "overleading"], hint: "Trompeur = mis-" },
            { type: 'fill', difficulty: 'hard', question: 'His comments were completely _____ (relevant) to the discussion.', answer: "irrelevant", options: ["irrelevant", "unrelevant", "disrelevant", "inrelevant"], hint: "Devant R = ir-" },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon préfixe négatif pour "polite" ?', answer: "impolite", options: ["impolite", "unpolite", "dispolite", "irpolite"] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The instructions were _____ (clear) and caused confusion.', answer: "unclear", options: ["unclear", "inclear", "disclear", "misclear"] },
            { type: 'fill', difficulty: 'hard', question: 'The company was accused of _____ (manage) its funds.', answer: "mismanaging", options: ["mismanaging", "unmanaging", "overmanaging", "dismanaging"] },
            { type: 'fill', difficulty: 'hard', question: 'Workers feel they are _____ (pay) compared to their counterparts.', answer: "underpaid", options: ["underpaid", "unpaid", "dispaid", "mispaid"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 144 — Word formation & suffixes
    // ─────────────────────────────────────────────
    144: {
        id: 144,
        title: 'Word formation & suffixes',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>La formation des mots et les suffixes</b><br><br>
Les <b>suffixes</b> (après le mot) changent la catégorie grammaticale du mot :<br><br>
<b>Verbe → Nom :</b><br>
• <b>-tion/-sion</b> : inform → informa<b>tion</b>, decide → deci<b>sion</b><br>
• <b>-ment</b> : achieve → achieve<b>ment</b>, manage → manage<b>ment</b><br>
• <b>-er/-or</b> : teach → teach<b>er</b>, invent → invent<b>or</b><br>
• <b>-ness</b> : happy → happi<b>ness</b>, dark → dark<b>ness</b><br><br>
<b>Nom/Verbe → Adjectif :</b><br>
• <b>-ful</b> : care → care<b>ful</b>, success → success<b>ful</b><br>
• <b>-less</b> : care → care<b>less</b>, home → home<b>less</b><br>
• <b>-able/-ible</b> : manage → manage<b>able</b>, flex → flex<b>ible</b><br>
• <b>-ive</b> : act → act<b>ive</b>, create → creat<b>ive</b><br>
• <b>-ous</b> : danger → danger<b>ous</b>, fame → fam<b>ous</b><br><br>
<b>Adjectif → Adverbe :</b><br>
• <b>-ly</b> : quick → quick<b>ly</b>, careful → careful<b>ly</b>`,

        rules: [
            '📐 **-ful** = plein de : _beautiful_ (plein de beauté), _helpful_ (utile), _successful_ (avec succès)',
            '📐 **-less** = sans : _homeless_ (sans maison), _careless_ (sans attention), _useless_ (inutile)',
            '📐 **-able/-ible** = qui peut être : _manageable_ (gérable), _visible_ (visible)',
            '📐 **-tion/-sion** = nom d\'action : _communication, decision, production_',
            '📐 **-ment** = résultat, processus : _development, improvement, management_',
            '⚠️ **-ful vs -less** : _careful_ (prudent) ↔ _careless_ (négligent) — sens opposés !'
        ],

        examples: [
            { text: "The **development** of new technology requires **investment**.", fr: "Le développement de nouvelles technologies nécessite des investissements.", correct: true },
            { text: "She is a very **creative** and **successful** designer.", fr: "C'est une designer très créative et à succès.", correct: true },
            { text: "His **careless** driving caused the accident.", fr: "Sa conduite négligente a causé l'accident.", correct: true },
            { text: "Please speak **slowly** and **clearly**.", fr: "Veuillez parler lentement et clairement.", correct: true }
        ],

        tips: [
            "🇫🇷 Les suffixes -tion et -ment sont très proches du français ! information, communication, management, development.",
            "💡 Au TOEIC Part 5, on vous donne souvent 4 formes du même mot (nom, verbe, adj, adv). Le suffixe vous dit quelle forme utiliser.",
            "⚠️ -ful a toujours UN seul L : beautiful, careful, wonderful (pas 'beautifull')."
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The _____ (manage) decided to close the office early.', answer: "management", options: ["management", "manageable", "manager", "managing"], hint: "Nom d'action = -ment" },
            { type: 'fill', difficulty: 'easy', question: 'She spoke _____ (quiet) so nobody heard her.', answer: "quietly", options: ["quietly", "quietness", "quietful", "quieting"], hint: "Adverbe = -ly" },
            { type: 'fill', difficulty: 'easy', question: 'This product is completely _____ (use). It doesn\'t work.', answer: "useless", options: ["useless", "useful", "using", "used"], hint: "Sans utilité = -less" },
            { type: 'fill', difficulty: 'medium', question: 'Her _____ (achieve) in science is remarkable.', answer: "achievement", options: ["achievement", "achievable", "achiever", "achieving"], hint: "Résultat = -ment" },
            { type: 'fill', difficulty: 'medium', question: 'The situation is _____ (manage). We can handle it.', answer: "manageable", options: ["manageable", "management", "managed", "managing"], hint: "Qui peut être géré = -able" },
            { type: 'fill', difficulty: 'medium', question: 'She made an important _____ (decide) about her career.', answer: "decision", options: ["decision", "decisive", "decidable", "decider"], hint: "Nom d'action = -sion" },
            { type: 'fill', difficulty: 'hard', question: 'The _____ (compete) in the market is very intense.', answer: "competition", options: ["competition", "competitive", "competitor", "competing"], hint: "Nom = -tion" },
            { type: 'fill', difficulty: 'hard', question: 'We need to find a _____ (create) solution to this problem.', answer: "creative", options: ["creative", "creation", "creator", "creating"], hint: "Adjectif = -ive" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle est la bonne forme pour compléter : "His _____ was very impressive" ?', answer: "performance", options: ["performance", "performable", "performant", "perform"] }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The _____ (improve) in sales figures is encouraging.', answer: "improvement", options: ["improvement", "improvable", "improving", "improver"] },
            { type: 'fill', difficulty: 'hard', question: 'His lack of _____ (responsible) caused problems for the team.', answer: "responsibility", options: ["responsibility", "responsibly", "responsible", "responsiveness"] },
            { type: 'fill', difficulty: 'hard', question: 'The report should be written _____ (profession).', answer: "professionally", options: ["professionally", "professional", "professionalism", "profession"] },
            { type: 'correct', difficulty: 'hard', question: 'TOEIC : "The company announced a _____ increase in profits." Quelle forme ?', answer: "significant", options: ["significant", "significance", "significantly", "signify"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 145 — Grand Review & TOEIC Practice
    // ─────────────────────────────────────────────
    145: {
        id: 145,
        title: 'Grand Review — TOEIC Practice',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Révision générale — Pratique TOEIC</b><br><br>
Cette unité finale est une <b>révision transversale</b> de toute la grammaire anglaise étudiée dans ce cours.<br><br>
<b>Les points clés à maîtriser pour le TOEIC :</b><br><br>
✅ <b>Temps verbaux</b> : present simple vs continuous, past simple vs present perfect, future forms<br>
✅ <b>Modaux</b> : can/could, must/have to, should/ought to, may/might<br>
✅ <b>Passif</b> : be + past participle dans tous les temps<br>
✅ <b>Conditionnels</b> : if + present → will / if + past → would<br>
✅ <b>Discours indirect</b> : backshift des temps<br>
✅ <b>Phrasal verbs</b> : les 100 plus courants<br>
✅ <b>Word formation</b> : préfixes et suffixes<br>
✅ <b>Prépositions</b> : in/on/at pour le temps et le lieu<br>
✅ <b>Articles</b> : a/an/the/∅<br><br>
🎯 <b>Conseil TOEIC</b> : lisez TOUTE la phrase avant de répondre. Le contexte général vous aide souvent plus que l'analyse mot par mot.`,

        rules: [
            '🎯 **Temps** : choisissez le temps en fonction du contexte temporel (now → continuous, always → simple, already → perfect)',
            '🎯 **Modaux** : must = obligation / should = conseil / may-might = possibilité / can-could = capacité',
            '🎯 **Passif** : utilisez-le quand l\'agent est inconnu ou moins important que l\'action',
            '🎯 **Phrasal verbs** : apprenez-les en contexte, pas par liste. Les plus testés : carry out, deal with, look into, set up',
            '🎯 **Word formation** : le suffixe détermine la catégorie (-tion = nom, -ful = adj, -ly = adv)',
            '🎯 **Articles** : the = spécifique / a-an = général / ∅ = pluriel générique'
        ],

        examples: [
            { text: "The meeting **has been postponed** until further notice.", fr: "La réunion a été reportée jusqu'à nouvel ordre. (passif present perfect)", correct: true },
            { text: "If sales **had increased**, we **would have expanded** the team.", fr: "Si les ventes avaient augmenté, nous aurions agrandi l'équipe. (conditionnel type 3)", correct: true },
            { text: "She **must have forgotten** about the appointment.", fr: "Elle a dû oublier le rendez-vous. (déduction passée)", correct: true },
            { text: "The survey was **carried out** to **assess** customer **satisfaction**.", fr: "L'enquête a été réalisée pour évaluer la satisfaction client. (phrasal verb + word formation)", correct: true }
        ],

        tips: [
            "🇫🇷 Au TOEIC, la Part 5 (Incomplete Sentences) teste principalement : temps verbaux, word formation, prépositions, et phrasal verbs.",
            "💡 Stratégie : commencez par les questions faciles pour gagner du temps. Revenez aux difficiles ensuite.",
            "⚠️ Ne passez pas plus de 30 secondes par question en Part 5. Si vous hésitez, devinez et passez.",
            "🎯 Relisez vos erreurs fréquentes : c'est là que les points faciles vous attendent !"
        ],

        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The report _____ (send) to all employees yesterday.', answer: "was sent", options: ["was sent", "sent", "is sent", "has sent"], hint: "Passif past simple" },
            { type: 'fill', difficulty: 'easy', question: 'She _____ (work) here since 2015.', answer: "has worked", options: ["has worked", "works", "worked", "is working"], hint: "since → present perfect" },
            { type: 'fill', difficulty: 'easy', question: 'You _____ smoke in the building. It\'s forbidden.', answer: "mustn't", options: ["mustn't", "don't have to", "shouldn't", "can't"], hint: "Interdiction = mustn't" },
            { type: 'fill', difficulty: 'medium', question: 'If I _____ (know) earlier, I would have told you.', answer: "had known", options: ["had known", "knew", "know", "have known"], hint: "Conditionnel type 3 → if + past perfect" },
            { type: 'fill', difficulty: 'medium', question: 'The _____ (develop) of the new product took two years.', answer: "development", options: ["development", "developing", "developed", "develop"], hint: "Nom = -ment" },
            { type: 'fill', difficulty: 'medium', question: 'She said she _____ (will) be late for the meeting.', answer: "would", options: ["would", "will", "is", "has"], hint: "Reported speech : will → would" },
            { type: 'fill', difficulty: 'hard', question: 'The company is _____ (current) looking into the matter.', answer: "currently", options: ["currently", "current", "currency", "currant"], hint: "Adverbe = -ly" },
            { type: 'fill', difficulty: 'hard', question: 'Had the train not been delayed, we _____ arrived on time.', answer: "would have", options: ["would have", "will have", "had", "have"], hint: "Conditionnel type 3 inversé" },
            { type: 'fill', difficulty: 'hard', question: 'Sales are expected to increase, _____ is good news for investors.', answer: "which", options: ["which", "that", "what", "who"], hint: "Relative non-restrictive → which" }
        ],

        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All employees _____ (require) to attend the training session.', answer: "are required", options: ["are required", "require", "requiring", "required"] },
            { type: 'fill', difficulty: 'medium', question: 'He asked me where I _____ (live).', answer: "lived", options: ["lived", "live", "am living", "was living"] },
            { type: 'fill', difficulty: 'hard', question: 'Not only _____ the company expand, but it also increased profits.', answer: "did", options: ["did", "has", "was", "does"] },
            { type: 'fill', difficulty: 'hard', question: 'The new regulations, _____ were introduced last month, have been effective.', answer: "which", options: ["which", "that", "what", "who"] },
            { type: 'fill', difficulty: 'hard', question: 'The results were _____ (signify) better than expected.', answer: "significantly", options: ["significantly", "significant", "significance", "signify"] }
        ]
    }
};
