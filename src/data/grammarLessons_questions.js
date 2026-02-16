export const grammarLessonsQuestions = {
    // ===== UNIT 49 — Questions (1) =====
    49: {
        id: 49,
        title: 'Questions (1) — formation & wh- questions',
        category: 'questions',
        explanation: `🇫🇷 <b>Les questions (1) : formation et questions en wh-</b><br><br>
<b>1. Formation des questions en anglais :</b><br>
La structure de base est : <b>auxiliaire + sujet + verbe</b><br>
<i>"<b>Do</b> you <b>speak</b> English?"</i><br>
<i>"<b>Is</b> she <b>coming</b>?"</i><br>
<i>"<b>Have</b> you <b>finished</b>?"</i><br><br>
<b>2. Questions avec mots interrogatifs (wh-) :</b><br>
On place le mot interrogatif <b>avant</b> l'auxiliaire :<br>
<i>"<b>What</b> do you want?"</i> → Qu'est-ce que tu veux ?<br>
<i>"<b>Where</b> does she work?"</i> → Où travaille-t-elle ?<br>
<i>"<b>When</b> did you arrive?"</i> → Quand es-tu arrivé ?<br>
<i>"<b>Why</b> are you laughing?"</i> → Pourquoi ris-tu ?<br>
<i>"<b>How</b> did you find out?"</i> → Comment l'as-tu découvert ?<br><br>
<b>3. ⚠️ Questions sur le sujet (subject questions) :</b><br>
Quand <b>who</b> ou <b>what</b> est le SUJET de la phrase, on n'utilise <b>PAS</b> d'auxiliaire do/did :<br>
<i>"<b>Who wrote</b> this report?"</i> (PAS ~~Who did write~~)<br>
<i>"<b>What happened</b>?"</i> (PAS ~~What did happen~~)<br><br>
Comparez :<br>
• <i>"Who did you <b>call</b>?"</i> → who = COD → auxiliaire nécessaire<br>
• <i>"Who <b>called</b> you?"</i> → who = sujet → PAS d'auxiliaire<br><br>
🔑 <b>Astuce :</b> Si le mot interrogatif remplace le sujet, la question a la même structure qu'une affirmation.`,
        rules: [
            '📐 Structure de base : **(mot interrogatif) + auxiliaire + sujet + verbe** → _**What** do you want?_',
            '📐 Au **present simple** : do/does + sujet + base verbale → _**Does** she **work** here?_',
            '📐 Au **past simple** : did + sujet + base verbale → _**Did** you **see** the email?_',
            '📐 Avec **be** : inversion directe (pas de do) → _**Is** she ready? / **Were** they late?_',
            '📐 **Subject questions** (who/what = sujet) : PAS de do/did → _**Who wrote** this?_ (pas ~~Who did write~~)',
            '📐 **Object questions** (who/what = COD) : do/did nécessaire → _**Who did** you **call**?_'
        ],
        examples: [
            { text: "**Where** does she **work**?", fr: "Où travaille-t-elle ?", correct: true },
            { text: "**What** did you **say**?", fr: "Qu'est-ce que tu as dit ?", correct: true },
            { text: "**Who wrote** this report?", fr: "Qui a écrit ce rapport ? (who = sujet)", correct: true },
            { text: "**What happened** at the meeting?", fr: "Que s'est-il passé à la réunion ? (what = sujet)", correct: true },
            { text: "**How many** people **attended** the conference?", fr: "Combien de personnes ont assisté à la conférence ? (how many people = sujet)", correct: true },
            { text: "~~Who did write this report?~~ → **Who wrote this report?**", fr: "Qui a écrit ce rapport ?", correct: false, note: "Quand 'who' est le sujet, on n'utilise PAS l'auxiliaire 'did'. La question a la structure d'une affirmation." },
            { text: "~~Where she works?~~ → **Where does she work?**", fr: "Où travaille-t-elle ?", correct: false, note: "Quand le sujet n'est PAS le mot interrogatif, il faut l'auxiliaire : Where does she work?" },
        ],
        tips: [
            "🇫🇷 En français, on peut poser une question par intonation seule ('Tu viens ?'). En anglais, l'inversion auxiliaire-sujet est obligatoire à l'écrit : 'Are you coming?' (pas ~~You are coming?~~, sauf oral informel).",
            "🇫🇷 Le piège principal : les questions sur le sujet. 'Qui a appelé ?' = 'Who called?' (PAS 'Who did call?'). En français aussi, ces questions ont la structure d'une affirmation.",
            "🇫🇷 'How many/How much' fonctionne comme un mot interrogatif composé : 'How many employees work here?' (sujet = how many employees → pas de do).",
            "🇫🇷 Au TOEIC, les subject questions sont fréquemment testées. Retenez : si le mot en wh- EST le sujet → pas de do/did."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "___ you speak Spanish?", answer: "Do", options: ["Do", "Are", "Have", "Does"], hint: "Present simple, sujet 'you' → auxiliaire 'do'." },
            { type: 'fill', difficulty: 'easy', question: "Where ___ she live?", answer: "does", options: ["does", "do", "is", "did"], hint: "Present simple, sujet 'she' (3e personne) → 'does'." },
            { type: 'fill', difficulty: 'easy', question: "What ___ yesterday? (happen)", answer: "happened", options: ["happened", "did happen", "was happened", "happens"], hint: "'What' est le sujet → pas d'auxiliaire. Conjuguez directement au passé." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "Who ___ to about the project? (you / talk)", answer: "did you talk", options: ["did you talk", "you talked", "talked you", "you did talk"], hint: "'Who' est le complément (à qui as-tu parlé ?), pas le sujet → il faut l'auxiliaire 'did'." },
            { type: 'fill', difficulty: 'medium', question: "How many people ___ the workshop? (attend)", answer: "attended", options: ["attended", "did attend", "do attend", "were attended"], hint: "'How many people' est le sujet → pas de 'did'. Conjuguez au passé directement." },
            { type: 'fill', difficulty: 'medium', question: "___ the manager ___ the new policy? (approve)", answer: "Did, approve", options: ["Did, approve", "Does, approved", "Has, approve", "Did, approved"], hint: "Question objet au passé : Did + sujet + base verbale." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "Which company ___ the contract last year? (win)", answer: "won", options: ["won", "did win", "has won", "was won"], hint: "'Which company' est le sujet de la question → pas d'auxiliaire. Verbe directement au passé." },
            { type: 'fill', difficulty: 'hard', question: "Who ___ you ___ to present first at the meeting? (want)", answer: "do, want", options: ["do, want", "want", "does, want", "did, wanted"], hint: "'Who' est le COD (qui voulez-vous ?), pas le sujet ('you' est le sujet) → auxiliaire nécessaire." },
            { type: 'fill', difficulty: 'hard', question: "What kind of problems ___ during the implementation? (arise)", answer: "arose", options: ["arose", "did arise", "have arisen", "arising"], hint: "'What kind of problems' est le sujet → pas d'auxiliaire. Arise → arose (passé irrégulier)." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "Who ___ the presentation at tomorrow's meeting? (give)", answer: "is giving", options: ["is giving", "does give", "gives", "giving"] },
            { type: 'fill', difficulty: 'hard', question: "How many candidates ___ for the position so far? (apply)", answer: "have applied", options: ["have applied", "did apply", "applied", "are applying"] },
            { type: 'fill', difficulty: 'hard', question: "Which department ___ the most revenue last quarter? (generate)", answer: "generated", options: ["generated", "did generate", "has generated", "was generated"] },
        ]
    },

    // ===== UNIT 50 — Questions (2) =====
    50: {
        id: 50,
        title: 'Questions (2) — negative & embedded questions',
        category: 'questions',
        explanation: `🇫🇷 <b>Les questions (2) : questions négatives et questions indirectes</b><br><br>
<b>1. Questions négatives (negative questions) :</b><br>
On utilise les questions négatives pour exprimer la <b>surprise</b>, la <b>confirmation</b>, ou faire une <b>suggestion</b> :<br>
<i>"<b>Don't</b> you like chocolate?"</i> → Tu n'aimes pas le chocolat ? (surprise)<br>
<i>"<b>Haven't</b> you finished yet?"</i> → Tu n'as pas encore fini ? (impatience)<br>
<i>"<b>Isn't</b> it a beautiful day?"</i> → N'est-ce pas une belle journée ? (confirmation)<br><br>
⚠️ <b>Attention aux réponses !</b> En anglais, <b>Yes = affirmatif</b>, <b>No = négatif</b>, même si la question est négative :<br>
<i>"Don't you like it?" — "Yes, I do."</i> = Si, je l'aime.<br>
<i>"Don't you like it?" — "No, I don't."</i> = Non, je ne l'aime pas.<br><br>
<b>2. Questions indirectes (embedded/indirect questions) :</b><br>
Ce sont des questions « cachées » dans une phrase. L'ordre des mots est celui d'une <b>affirmation</b> :<br>
<i>"Do you know <b>where she is</b>?"</i> (PAS ~~where is she~~)<br>
<i>"Could you tell me <b>what time the meeting starts</b>?"</i><br>
<i>"I wonder <b>if he's coming</b>."</i><br>
<i>"I don't know <b>how much it costs</b>."</i><br><br>
🔑 <b>Formules d'introduction courantes :</b> Do you know..., Could you tell me..., I wonder..., I don't know..., I'd like to know...`,
        rules: [
            '📐 **Questions négatives** : auxiliaire négatif contracté + sujet → _**Don\'t** you like it? / **Hasn\'t** she called?_',
            '📐 Les questions négatives expriment la **surprise**, la **confirmation** ou une **suggestion**',
            '📐 Réponse à une question négative : **Yes** = affirmatif, **No** = négatif (comme en anglais normal, PAS comme en français avec "si")',
            '📐 **Questions indirectes** : ordre = **sujet + verbe** (pas d\'inversion) → _Do you know **where she is**?_ (PAS ~~where is she~~)',
            '📐 Pour les questions oui/non indirectes, on ajoute **if / whether** → _I wonder **if** he\'s coming._',
            '📐 La phrase principale peut être une question (?) ou une affirmation (.) → _I don\'t know where he is**.**_'
        ],
        examples: [
            { text: "**Don't** you **like** this restaurant?", fr: "Tu n'aimes pas ce restaurant ? (surprise)", correct: true },
            { text: "**Haven't** you **heard** the news?", fr: "Tu n'as pas entendu la nouvelle ? (surprise)", correct: true },
            { text: "Do you know **where the office is**?", fr: "Savez-vous où se trouve le bureau ?", correct: true },
            { text: "Could you tell me **how much this costs**?", fr: "Pourriez-vous me dire combien ça coûte ?", correct: true },
            { text: "I wonder **if she received** my email.", fr: "Je me demande si elle a reçu mon email.", correct: true },
            { text: "~~Do you know where is the station?~~ → **Do you know where the station is?**", fr: "Savez-vous où est la gare ?", correct: false, note: "Dans les questions indirectes, l'ordre est sujet + verbe : 'where the station is' (PAS 'where is the station')." },
            { text: "~~Can you tell me how much does it cost?~~ → **Can you tell me how much it costs?**", fr: "Pouvez-vous me dire combien ça coûte ?", correct: false, note: "Pas d'auxiliaire 'does' dans la question indirecte. L'ordre est sujet + verbe : 'it costs'." },
        ],
        tips: [
            "🇫🇷 Piège numéro 1 pour les francophones : 'Do you know where is she?' ❌ — en anglais, pas d'inversion dans les questions indirectes ! Dites 'Do you know where she is?'",
            "🇫🇷 En français, on répond 'si' à une question négative pour affirmer : 'Tu n'aimes pas ?' → 'Si !' En anglais, c'est toujours 'Yes' : 'Don't you like it?' → 'Yes, I do!' (pas de 'si').",
            "🇫🇷 'I wonder if...' = 'Je me demande si...' — la structure est identique en français et en anglais.",
            "🇫🇷 Au TOEIC, les questions indirectes sont très fréquentes dans la partie listening (Part 2/3). 'Could you tell me...' est un classique."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "___ you like coffee? I thought everyone did! (negative question)", answer: "Don't", options: ["Don't", "Do", "Aren't", "Didn't"], hint: "Question négative de surprise au present simple → Don't + sujet + verbe." },
            { type: 'fill', difficulty: 'easy', question: "Do you know where she ___?", answer: "is", options: ["is", "is she", "does she", "she is"], hint: "Question indirecte : ordre = sujet + verbe. 'Where she is'." },
            { type: 'fill', difficulty: 'easy', question: "Could you tell me what time the bank ___?", answer: "opens", options: ["opens", "does open", "open", "is opening"], hint: "Question indirecte : pas d'auxiliaire supplémentaire. Sujet + verbe." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "___ she already left? I thought she was staying until Friday.", answer: "Hasn't", options: ["Hasn't", "Didn't", "Isn't", "Doesn't"], hint: "Question négative de surprise avec present perfect → Hasn't + sujet + PP." },
            { type: 'fill', difficulty: 'medium', question: "I'd like to know ___ the report will be ready.", answer: "when", options: ["when", "when will", "that when", "if when"], hint: "Question indirecte avec 'when' : I'd like to know when + sujet + verbe." },
            { type: 'fill', difficulty: 'medium', question: "\"Don't you agree with me?\" — \"___, I do. You're absolutely right.\"", answer: "Yes", options: ["Yes", "Si", "No", "Sure not"], hint: "En anglais, on répond 'Yes' pour affirmer, même à une question négative (pas de 'si' comme en français)." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "I wonder ___ there ___ any seats available for Friday's show.", answer: "if, are", options: ["if, are", "if, is", "that, are", "whether, is there"], hint: "Question indirecte oui/non → if/whether + sujet + verbe (pas d'inversion)." },
            { type: 'fill', difficulty: 'hard', question: "Could you tell me ___ in charge of the marketing department?", answer: "who is", options: ["who is", "who's is", "who does", "who"], hint: "Question indirecte. 'Who is' suit l'ordre sujet-verbe car 'who' est déjà le sujet." },
            { type: 'fill', difficulty: 'hard', question: "Do you have any idea ___ the shipment ___ delayed?", answer: "why, was", options: ["why, was", "why, were", "why was, the", "that, was"], hint: "Question indirecte : why + sujet + verbe. 'The shipment' = sujet singulier → 'was'." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "Do you know ___ has been appointed as the new director?", answer: "who", options: ["who", "who has", "that who", "whom"] },
            { type: 'fill', difficulty: 'hard', question: "Could you explain ___ the system ___ yesterday?", answer: "why, crashed", options: ["why, crashed", "why did, crash", "why, was crashed", "that, crashed"] },
            { type: 'fill', difficulty: 'hard', question: "___ it be better to postpone the meeting? Several people can't attend.", answer: "Wouldn't", options: ["Wouldn't", "Won't", "Doesn't", "Isn't"] },
            { type: 'fill', difficulty: 'hard', question: "I'm not sure ___ the client ___ our proposal or not.", answer: "whether, accepted", options: ["whether, accepted", "if, did accept", "that, accepted", "whether, has accept"] },
        ]
    },

    // ===== UNIT 51 — Auxiliary verbs =====
    51: {
        id: 51,
        title: 'Auxiliary verbs — do/have/can & short answers',
        category: 'questions',
        explanation: `🇫🇷 <b>Les auxiliaires : réponses courtes, questions-écho et So do I / Neither do I</b><br><br>
<b>1. Réponses courtes (short answers) :</b><br>
En anglais, on ne répond pas juste "Yes" ou "No". On reprend l'<b>auxiliaire</b> :<br>
<i>"Do you like coffee?" — "Yes, I <b>do</b>."</i> / <i>"No, I <b>don't</b>."</i><br>
<i>"Is she coming?" — "Yes, she <b>is</b>."</i> / <i>"No, she <b>isn't</b>."</i><br>
<i>"Have you finished?" — "Yes, I <b>have</b>."</i> / <i>"No, I <b>haven't</b>."</i><br>
<i>"Can you swim?" — "Yes, I <b>can</b>."</i> / <i>"No, I <b>can't</b>."</i><br><br>
<b>2. Questions-écho / reply questions :</b><br>
Pour montrer de l'intérêt ou de la surprise, on reprend l'auxiliaire sous forme de question :<br>
<i>"I went to Japan last summer." — "<b>Did</b> you? How was it?"</i><br>
<i>"She's been promoted." — "<b>Has</b> she? That's great!"</i><br>
<i>"I can't come tomorrow." — "<b>Can't</b> you? What a shame."</i><br><br>
<b>3. So do I / Neither do I (accord) :</b><br>
Pour dire "moi aussi" ou "moi non plus" :<br>
• Affirmatif → <b>So</b> + auxiliaire + sujet : <i>"I love pizza." — "<b>So do I</b>."</i><br>
• Négatif → <b>Neither/Nor</b> + auxiliaire + sujet : <i>"I don't smoke." — "<b>Neither do I</b>."</i><br><br>
⚠️ L'auxiliaire doit correspondre au temps de la phrase :<br>
<i>"She has been to Rome." — "So <b>have</b> I."</i><br>
<i>"He can't swim." — "Neither <b>can</b> I."</i>`,
        rules: [
            '📐 **Réponses courtes** : Yes/No + pronom + **auxiliaire** → _"Are you ready?" — "Yes, I **am**."_',
            '📐 On ne répète PAS le verbe principal : _"Yes, I do."_ (PAS ~~"Yes, I like."~~)',
            '📐 **Questions-écho** : auxiliaire + sujet → _"I passed the exam." — "**Did** you?"_ (intérêt/surprise)',
            '📐 **So + auxiliaire + sujet** = moi aussi → _"I like tea." — "**So do** I."_',
            '📐 **Neither/Nor + auxiliaire + sujet** = moi non plus → _"I can\'t swim." — "**Neither can** I."_',
            '📐 L\'auxiliaire doit correspondre au **temps** et au **verbe** de la phrase originale'
        ],
        examples: [
            { text: "\"Do you speak French?\" — \"Yes, I **do**.\"", fr: "« Parlez-vous français ? » — « Oui. »", correct: true },
            { text: "\"She has never been to London.\" — \"**Neither have** I.\"", fr: "« Elle n'est jamais allée à Londres. » — « Moi non plus. »", correct: true },
            { text: "\"I love Italian food.\" — \"**So do** I!\"", fr: "« J'adore la cuisine italienne. » — « Moi aussi ! »", correct: true },
            { text: "\"I got promoted!\" — \"**Did** you? Congratulations!\"", fr: "« J'ai été promu ! » — « Ah bon ? Félicitations ! »", correct: true },
            { text: "~~\"I like coffee.\" — \"So like I.\"~~ → **\"So do I.\"**", fr: "« Moi aussi. »", correct: false, note: "On utilise l'auxiliaire (do), pas le verbe principal. Et l'ordre est : So + auxiliaire + sujet." },
            { text: "~~\"I can't drive.\" — \"Neither I can.\"~~ → **\"Neither can I.\"**", fr: "« Moi non plus. »", correct: false, note: "L'ordre est : Neither + auxiliaire + sujet (inversion). Pas 'Neither I can'." },
        ],
        tips: [
            "🇫🇷 Les auxiliaires n'existent pas de la même façon en français — c'est un concept clé à maîtriser. En français, on dit 'Oui' ou 'Non'. En anglais, on reprend l'auxiliaire : 'Yes, I do / No, I don't'.",
            "🇫🇷 'So do I' = 'Moi aussi'. 'Neither do I' = 'Moi non plus'. Attention : en anglais, l'ordre est inversé (auxiliaire avant sujet), comme dans une question.",
            "🇫🇷 Les questions-écho ('Did you?', 'Has she?') n'ont pas d'équivalent direct en français. On dirait plutôt 'Ah bon ?' ou 'Vraiment ?'. Au TOEIC, elles apparaissent souvent dans les dialogues.",
            "🇫🇷 Piège courant : 'Me too' est correct à l'oral informel, mais 'So do I' est plus approprié au TOEIC et dans un contexte professionnel."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "\"Are you a student?\" — \"Yes, I ___.\"", answer: "am", options: ["am", "do", "have", "was"], hint: "La question utilise 'are' → réponse avec 'am' (1re personne de be)." },
            { type: 'fill', difficulty: 'easy', question: "\"I love chocolate.\" — \"So ___ I!\"", answer: "do", options: ["do", "am", "love", "have"], hint: "'Love' au present simple → auxiliaire 'do'." },
            { type: 'fill', difficulty: 'easy', question: "\"Can you drive?\" — \"No, I ___.\"", answer: "can't", options: ["can't", "don't", "am not", "haven't"], hint: "La question utilise 'can' → réponse avec 'can't'." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "\"She hasn't replied to my email.\" — \"___ ___ I noticed.\"", answer: "Neither have", options: ["Neither have", "So have", "Neither has", "Neither did"], hint: "Accord négatif + present perfect (hasn't) → Neither have I." },
            { type: 'fill', difficulty: 'medium', question: "\"We went to the conference last week.\" — \"___ you? How was it?\"", answer: "Did", options: ["Did", "Have", "Were", "Do"], hint: "Question-écho : 'went' = past simple → auxiliaire 'did'." },
            { type: 'fill', difficulty: 'medium', question: "\"I've been to Japan twice.\" — \"___ ___ I! I loved it.\"", answer: "So have", options: ["So have", "So do", "So did", "Neither have"], hint: "Accord affirmatif + present perfect (I've been) → So have I." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "\"I won't be at the meeting tomorrow.\" — \"___ ___ Sarah. She's on a business trip.\"", answer: "Neither will", options: ["Neither will", "So will", "Neither would", "Neither does"], hint: "Accord négatif + 'won't' (futur) → Neither will." },
            { type: 'fill', difficulty: 'hard', question: "\"The project should have been completed by now.\" — \"Yes, it ___.\"", answer: "should", options: ["should", "should have", "has", "must"], hint: "Réponse courte : on reprend le premier auxiliaire. 'Should have been' → 'it should'." },
            { type: 'fill', difficulty: 'hard', question: "\"I'd never seen anything like that before.\" — \"___ ___ I. It was incredible.\"", answer: "Neither had", options: ["Neither had", "Neither have", "So had", "Neither did"], hint: "'I'd never seen' = past perfect négatif → Neither had I." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "\"Has the report been submitted?\" — \"Yes, it ___.\"", answer: "has", options: ["has", "did", "was", "does"] },
            { type: 'fill', difficulty: 'hard', question: "\"We don't have a meeting on Friday.\" — \"___ ___ we. Ours was cancelled too.\"", answer: "Neither do", options: ["Neither do", "So do", "Neither have", "Neither did"] },
            { type: 'fill', difficulty: 'hard', question: "\"She was working late last night.\" — \"___ she? She must be exhausted.\"", answer: "Was", options: ["Was", "Did", "Has", "Is"] },
            { type: 'fill', difficulty: 'hard', question: "\"I would have accepted the offer.\" — \"So ___ I, but I wasn't given the chance.\"", answer: "would", options: ["would", "had", "did", "have"] },
        ]
    },

    // ===== UNIT 52 — Question tags =====
    52: {
        id: 52,
        title: 'Question tags — isn\'t it? do you? etc.',
        category: 'questions',
        explanation: `🇫🇷 <b>Les question tags : n'est-ce pas ? / hein ?</b><br><br>
<b>Qu'est-ce qu'un question tag ?</b><br>
C'est une mini-question ajoutée à la fin d'une phrase pour demander confirmation :<br>
<i>"You're coming, <b>aren't you</b>?"</i> → Tu viens, n'est-ce pas ?<br><br>
<b>Règle fondamentale :</b><br>
• Phrase <b>affirmative</b> → tag <b>négatif</b> : <i>"She <b>is</b> French, <b>isn't</b> she?"</i><br>
• Phrase <b>négative</b> → tag <b>affirmatif</b> : <i>"You <b>don't</b> smoke, <b>do</b> you?"</i><br><br>
<b>L'auxiliaire du tag doit correspondre au verbe de la phrase :</b><br>
<i>"She <b>works</b> here, <b>doesn't</b> she?"</i> (present simple → does)<br>
<i>"They <b>have</b> left, <b>haven't</b> they?"</i> (present perfect → have)<br>
<i>"He <b>can</b> swim, <b>can't</b> he?"</i> (modal → can)<br>
<i>"You <b>went</b> there, <b>didn't</b> you?"</i> (past simple → did)<br><br>
<b>Cas particuliers :</b><br>
• <b>I am</b> → <b>aren't I?</b> : <i>"I'm right, <b>aren't I</b>?"</i> (pas ~~amn't I~~)<br>
• <b>Let's</b> → <b>shall we?</b> : <i>"Let's go, <b>shall we</b>?"</i><br>
• <b>Impératif</b> → <b>will you?</b> : <i>"Close the door, <b>will you</b>?"</i><br>
• <b>There is/are</b> → <b>isn't/aren't there?</b> : <i>"There's a problem, <b>isn't there</b>?"</i><br><br>
<b>Intonation :</b><br>
• Intonation <b>descendante</b> ↘ = on attend une confirmation (on est sûr)<br>
• Intonation <b>montante</b> ↗ = vraie question (on n'est pas sûr)`,
        rules: [
            '📐 Phrase **affirmative** → tag **négatif** : _She is nice, **isn\'t she**?_',
            '📐 Phrase **négative** → tag **affirmatif** : _You don\'t like it, **do you**?_',
            '📐 Le tag reprend l\'**auxiliaire** de la phrase principale et le **pronom sujet**',
            '📐 **I am** → **aren\'t I?** (exception) : _I\'m late, **aren\'t I**?_',
            '📐 **Let\'s** → **shall we?** : _Let\'s start, **shall we**?_',
            '📐 **Impératif** → **will you? / won\'t you?** : _Help me, **will you**?_',
            '📐 Intonation ↘ = confirmation attendue. Intonation ↗ = vraie question.'
        ],
        examples: [
            { text: "You're coming to the party, **aren't you**?", fr: "Tu viens à la fête, n'est-ce pas ?", correct: true },
            { text: "She doesn't speak Japanese, **does she**?", fr: "Elle ne parle pas japonais, si ?", correct: true },
            { text: "They have finished the report, **haven't they**?", fr: "Ils ont terminé le rapport, non ?", correct: true },
            { text: "I'm right, **aren't I**?", fr: "J'ai raison, pas vrai ?", correct: true },
            { text: "Let's take a break, **shall we**?", fr: "Prenons une pause, d'accord ?", correct: true },
            { text: "~~She likes tea, doesn't she? / She likes tea, does she?~~ — The first is correct: **She likes tea, doesn't she?**", fr: "Elle aime le thé, non ?", correct: false, note: "Phrase affirmative (likes) → tag négatif (doesn't she). Un tag affirmatif après une phrase affirmative est rare et exprime la surprise." },
            { text: "~~You're French, isn't it?~~ → **You're French, aren't you?**", fr: "Tu es français(e), non ?", correct: false, note: "Le pronom du tag doit correspondre au sujet de la phrase : 'you' → 'aren't you' (pas 'isn't it')." },
        ],
        tips: [
            "🇫🇷 En français, on utilise 'n'est-ce pas ?', 'hein ?' ou 'non ?' pour tous les cas. En anglais, le tag DOIT s'adapter au verbe et au sujet de la phrase. C'est ce qui rend les tags difficiles pour les francophones.",
            "🇫🇷 Erreur fréquente : utiliser 'isn't it?' pour tout (influence du français 'n'est-ce pas ?'). En anglais, le tag change : 'doesn't she?', 'haven't they?', 'can't he?', etc.",
            "🇫🇷 Le tag 'aren't I?' (pour 'I am') est une exception. On ne dit pas 'amn't I' — ça n'existe pas en anglais standard.",
            "🇫🇷 Au TOEIC, les question tags apparaissent surtout dans les dialogues (Part 2). La bonne réponse reprend souvent l'auxiliaire du tag."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "She is your sister, ___ ___?", answer: "isn't she", options: ["isn't she", "is she", "doesn't she", "wasn't she"], hint: "Phrase affirmative avec 'is' → tag négatif 'isn't she'." },
            { type: 'fill', difficulty: 'easy', question: "You don't like spicy food, ___ ___?", answer: "do you", options: ["do you", "don't you", "are you", "did you"], hint: "Phrase négative (don't) → tag affirmatif 'do you'." },
            { type: 'fill', difficulty: 'easy', question: "They can come tomorrow, ___ ___?", answer: "can't they", options: ["can't they", "can they", "don't they", "won't they"], hint: "Phrase affirmative avec 'can' → tag négatif 'can't they'." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "He went to the conference last week, ___ ___?", answer: "didn't he", options: ["didn't he", "did he", "wasn't he", "hasn't he"], hint: "Past simple (went) → auxiliaire 'did'. Phrase affirmative → tag négatif." },
            { type: 'fill', difficulty: 'medium', question: "I'm early, ___ ___?", answer: "aren't I", options: ["aren't I", "am I not", "isn't I", "am I"], hint: "Exception : 'I am' → tag = 'aren't I'." },
            { type: 'fill', difficulty: 'medium', question: "Let's go for lunch, ___ ___?", answer: "shall we", options: ["shall we", "will we", "let us", "don't we"], hint: "Après 'Let's', le tag est toujours 'shall we'." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "There won't be any problems with the delivery, ___ ___?", answer: "will there", options: ["will there", "won't there", "is there", "will they"], hint: "Phrase négative (won't) → tag affirmatif. Sujet 'there' → 'will there'." },
            { type: 'fill', difficulty: 'hard', question: "Nobody called while I was out, ___ ___?", answer: "did they", options: ["did they", "didn't they", "did he", "didn't he"], hint: "'Nobody' est négatif → tag affirmatif. 'Nobody' est repris par 'they' en anglais moderne." },
            { type: 'fill', difficulty: 'hard', question: "The shareholders haven't been informed yet, ___ ___?", answer: "have they", options: ["have they", "haven't they", "did they", "were they"], hint: "Phrase négative (haven't) → tag affirmatif. Present perfect → 'have they'." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "The deadline is next Friday, ___ ___?", answer: "isn't it", options: ["isn't it", "is it", "doesn't it", "won't it"] },
            { type: 'fill', difficulty: 'hard', question: "You've already submitted the application, ___ ___?", answer: "haven't you", options: ["haven't you", "have you", "didn't you", "don't you"] },
            { type: 'fill', difficulty: 'hard', question: "She hardly ever misses a meeting, ___ ___?", answer: "does she", options: ["does she", "doesn't she", "is she", "has she"] },
            { type: 'fill', difficulty: 'hard', question: "Everyone has received the memo, ___ ___?", answer: "haven't they", options: ["haven't they", "have they", "hasn't he", "don't they"] },
        ]
    },
};
