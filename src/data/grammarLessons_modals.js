export const grammarLessonsModals = {
    26: {
        id: 26,
        title: 'can, could and (be) able to',
        category: 'modals',
        explanation: `🇫🇷 <b>can, could et (be) able to — exprimer la capacité</b><br><br>
En français, on utilise le verbe <b>pouvoir</b> pour exprimer la capacité, la possibilité ou la permission. En anglais, on dispose de plusieurs formes : <b>can</b>, <b>could</b> et <b>be able to</b>.<br><br>
<b>can</b> = capacité au présent → <i>Je peux nager.</i> = <i>I can swim.</i><br>
<b>could</b> = capacité au passé (capacité générale) → <i>Je pouvais courir vite quand j'étais jeune.</i> = <i>I could run fast when I was young.</i><br>
<b>be able to</b> = utilisé à tous les temps (présent, passé, futur, present perfect…).<br><br>
⚠️ <b>Différence cruciale</b> : Pour parler d'une <b>réussite spécifique</b> dans le passé, on utilise <b>was/were able to</b> (ou <b>managed to</b>), PAS <i>could</i>.<br>
Exemple : <i>The fire spread quickly, but everyone <b>was able to</b> escape.</i> (Tout le monde a réussi à s'échapper.) On ne dit PAS <i>could escape</i> ici.<br><br>
En revanche, avec les verbes de perception (<i>see, hear, smell, taste, feel</i>) et les verbes cognitifs (<i>understand, remember</i>), on peut utiliser <b>could</b> même pour une situation spécifique : <i>I could hear them talking.</i>`,
        rules: [
            '📐 **can** + base verbale → capacité/possibilité au **présent** : _I **can** speak English._',
            '📐 **could** + base verbale → capacité **générale** au passé : _She **could** dance very well when she was young._',
            '📐 **was/were able to** + base verbale → **réussite spécifique** au passé : _He **was able to** finish the project on time._',
            '📐 **be able to** remplace **can** aux temps où **can** n\'existe pas : _I will **be able to** come tomorrow._ / _I have **been able to** solve the problem._',
            '📐 À la forme négative, **couldn\'t** fonctionne pour les situations spécifiques ET générales : _I **couldn\'t** find my keys._ (spécifique, OK)',
        ],
        examples: [
            { text: "I **can** play the piano.", fr: "Je sais/peux jouer du piano.", correct: true },
            { text: "She **could** swim when she was five.", fr: "Elle savait nager quand elle avait cinq ans.", correct: true },
            { text: "The door was locked, but I **was able to** open it.", fr: "La porte était fermée à clé, mais j'ai réussi à l'ouvrir.", correct: true },
            { text: "I haven't **been able to** sleep recently.", fr: "Je n'ai pas réussi à dormir récemment.", correct: true },
            { text: "~~I could finish the report yesterday.~~ → **I was able to** finish the report yesterday.", fr: "J'ai réussi à finir le rapport hier.", correct: false, note: "Pour une réussite spécifique au passé, on utilise 'was able to', pas 'could'." },
            { text: "~~I will can come tomorrow.~~ → I **will be able to** come tomorrow.", fr: "Je pourrai venir demain.", correct: false, note: "Can n'a pas de futur. On utilise 'will be able to'." },
        ],
        tips: [
            "🇫🇷 En français, « pouvoir » fonctionne à tous les temps. En anglais, **can** n'a que deux formes : **can** (présent) et **could** (passé). Pour les autres temps, utilisez **be able to**.",
            "🇫🇷 « J'ai pu » en français peut être soit **I could** (capacité générale) soit **I was able to** (réussite spécifique). Réfléchissez au contexte !",
            "🇫🇷 Attention : **can** exprime aussi le « savoir faire » (je sais nager = I can swim). Ne traduisez pas par *I know to swim* !",
            "🇫🇷 Au TOEIC, la distinction **could** vs **was able to** est fréquemment testée dans les parties 5 et 6.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "I ___ speak three languages.", answer: "can", options: ["can", "could", "am able", "was able to"], hint: "Capacité au présent → quel modal ?" },
            { type: 'fill', difficulty: 'easy', question: "When I was a child, I ___ climb trees very well.", answer: "could", options: ["can", "could", "was able to", "am able to"], hint: "Capacité générale dans le passé." },
            { type: 'fill', difficulty: 'easy', question: "She ___ drive. She doesn't have a licence.", answer: "can't", options: ["can't", "couldn't", "isn't able", "weren't able to"], hint: "Incapacité au présent → forme négative de 'can'." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "The exam was difficult, but I ___ pass it.", answer: "was able to", options: ["could", "was able to", "can", "am able to"], hint: "Réussite spécifique dans le passé." },
            { type: 'fill', difficulty: 'medium', question: "I haven't ___ contact him yet.", answer: "been able to", options: ["been able to", "could", "can", "be able to"], hint: "Present perfect + capacité → quelle forme ?" },
            { type: 'fill', difficulty: 'medium', question: "By next year, she will ___ speak Japanese fluently.", answer: "be able to", options: ["can", "could", "be able to", "been able to"], hint: "Futur + capacité → 'can' n'a pas de forme future." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "I ___ smell something burning. Can you check the kitchen?", answer: "can", options: ["can", "am able to", "could", "was able to"], hint: "Verbe de perception au présent." },
            { type: 'fill', difficulty: 'hard', question: "The negotiations were tough, but we ___ reach an agreement.", answer: "were able to", options: ["could", "were able to", "can", "might"], hint: "Réussite spécifique au passé avec sujet pluriel." },
            { type: 'fill', difficulty: 'hard', question: "I ___ hear the manager talking in the next room, but I ___ understand what he was saying.", answer: "could", options: ["could", "was able to", "can", "managed to"], hint: "Deux verbes de perception dans le passé." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "She ___ play the violin since she was four.", answer: "has been able to", options: ["could", "has been able to", "can", "was able to"] },
            { type: 'fill', difficulty: 'hard', question: "The fire spread quickly, but everyone ___ escape.", answer: "was able to", options: ["could", "was able to", "can", "is able to"] },
            { type: 'fill', difficulty: 'hard', question: "Will you ___ attend the meeting tomorrow?", answer: "be able to", options: ["can", "could", "be able to", "able to"] },
            { type: 'fill', difficulty: 'hard', question: "I ___ see the presentation from the back of the room. The screen was too small.", answer: "couldn't", options: ["wasn't able to", "couldn't", "can't", "haven't been able to"] },
        ],
    },

    27: {
        id: 27,
        title: 'could (do) and could have (done)',
        category: 'modals',
        explanation: `🇫🇷 <b>could (do) et could have (done) — l'irréel présent et passé</b><br><br>
En français, on exprime l'irréel avec le <b>conditionnel présent</b> (je pourrais) et le <b>conditionnel passé</b> (j'aurais pu). L'anglais fonctionne de manière similaire :<br><br>
<b>could + base verbale</b> = possibilité irréelle au présent/futur :<br>
<i>I <b>could</b> go to the cinema tonight.</i> (Je pourrais aller au cinéma ce soir.)<br><br>
<b>could have + participe passé</b> = possibilité irréelle au passé (quelque chose était possible mais ne s'est pas produit) :<br>
<i>I <b>could have gone</b> to the party, but I decided to stay home.</i> (J'aurais pu aller à la fête, mais j'ai décidé de rester.)<br><br>
⚠️ <b>could have done</b> peut aussi exprimer un <b>reproche</b> : <i>You <b>could have told</b> me!</i> (Tu aurais pu me le dire !)<br><br>
La structure <b>could have done</b> est souvent confondue par les francophones avec le passé simple de « pouvoir ». Attention : <i>I could have done it</i> ≠ <i>I could do it</i> (j'ai pu le faire).`,
        rules: [
            '📐 **could** + base verbale → possibilité/suggestion au présent ou futur : _We **could** go out for dinner tonight._',
            '📐 **could have** + participe passé → possibilité non réalisée au passé : _You **could have won** the race if you had trained harder._',
            '📐 **could have** + participe passé → reproche : _You **could have warned** me!_',
            '📐 **couldn\'t have** + participe passé → impossibilité au passé : _She **couldn\'t have known** about it._',
            '📐 Ne pas confondre : _I **could** do it_ (je pourrais le faire / capacité passée) ≠ _I **could have done** it_ (j\'aurais pu le faire)',
        ],
        examples: [
            { text: "We **could** have lunch together tomorrow.", fr: "On pourrait déjeuner ensemble demain.", correct: true },
            { text: "I **could have taken** a taxi, but I walked instead.", fr: "J'aurais pu prendre un taxi, mais j'ai marché.", correct: true },
            { text: "You **could have been** killed!", fr: "Tu aurais pu être tué !", correct: true },
            { text: "She **couldn't have passed** the exam. She didn't study at all.", fr: "Elle n'a pas pu réussir l'examen. Elle n'a pas du tout étudié.", correct: true },
            { text: "~~I could go to the party yesterday but I didn't.~~ → I **could have gone** to the party yesterday.", fr: "J'aurais pu aller à la fête hier.", correct: false, note: "Pour une possibilité non réalisée au passé, utilisez 'could have + participe passé'." },
            { text: "~~He could have help us.~~ → He **could have helped** us.", fr: "Il aurait pu nous aider.", correct: false, note: "Après 'could have', il faut le participe passé (helped), pas la base verbale." },
        ],
        tips: [
            "🇫🇷 **could** = conditionnel présent de « pouvoir » (je pourrais). **could have done** = conditionnel passé (j'aurais pu).",
            "🇫🇷 Piège fréquent : ne confondez pas « j'ai pu » (I was able to / I could) avec « j'aurais pu » (I could have).",
            "🇫🇷 En français, « tu aurais pu me prévenir ! » = You **could have** warned me! C'est un reproche, pas une simple possibilité.",
            "🇫🇷 Au TOEIC, **could have + pp** apparaît souvent dans les textes de la partie 7 pour exprimer le regret ou l'analyse d'une situation passée.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "It's a nice day. We ___ go for a walk.", answer: "could", options: ["could", "could have", "can have", "must"], hint: "Suggestion pour maintenant ou le futur → conditionnel présent." },
            { type: 'fill', difficulty: 'easy', question: "Why did you walk? You ___ taken a taxi.", answer: "could have", options: ["could have", "could", "can", "should"], hint: "Possibilité non réalisée au passé." },
            { type: 'fill', difficulty: 'easy', question: "I ___ help you if you want.", answer: "could", options: ["could", "could have", "can have", "must have"], hint: "Offre au présent → conditionnel." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "She ___ been seriously injured in the accident, but she was lucky.", answer: "could have", options: ["could have", "could", "can", "must"], hint: "Quelque chose de grave qui aurait pu arriver mais ne s'est pas produit." },
            { type: 'fill', difficulty: 'medium', question: "I ___ asked for help, but I preferred to do it alone.", answer: "could have", options: ["could have", "could", "can have", "was able to"], hint: "Choix non réalisé dans le passé." },
            { type: 'fill', difficulty: 'medium', question: "Don't worry! Things ___ be worse.", answer: "could", options: ["could", "could have", "can have", "might have"], hint: "Situation hypothétique au présent : les choses pourraient être pires." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "You ___ warned us about the delay. We waited for two hours!", answer: "could have", options: ["could have", "could", "should", "can"], hint: "Reproche pour quelque chose qui n'a pas été fait." },
            { type: 'fill', difficulty: 'hard', question: "He ___ have known about the meeting. Nobody told him.", answer: "couldn't", options: ["couldn't", "could", "mustn't", "shouldn't"], hint: "Impossibilité logique au passé." },
            { type: 'fill', difficulty: 'hard', question: "The project failed. We ___ planned it more carefully.", answer: "could have", options: ["could have", "could", "can", "must have"], hint: "Regret : quelque chose qui aurait pu être fait différemment." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "We ___ eat out tonight. What do you think?", answer: "could", options: ["could", "could have", "must", "can have"] },
            { type: 'fill', difficulty: 'hard', question: "I ___ finished the report yesterday, but I ran out of time.", answer: "could have", options: ["could have", "could", "can", "was able to"] },
            { type: 'fill', difficulty: 'hard', question: "She ___ have said that. She's always very polite.", answer: "couldn't", options: ["couldn't", "could", "mustn't", "shouldn't"] },
            { type: 'fill', difficulty: 'hard', question: "The traffic was terrible. We ___ taken the train instead.", answer: "could have", options: ["could have", "could", "should", "can have"] },
        ],
    },

    28: {
        id: 28,
        title: 'must and can\'t',
        category: 'modals',
        explanation: `🇫🇷 <b>must et can't — la déduction logique</b><br><br>
En français, on exprime la déduction avec « <b>il doit être…</b> » (certitude positive) et « <b>il ne peut pas être…</b> » (certitude négative). L'anglais utilise <b>must</b> et <b>can't</b> de la même manière :<br><br>
<b>must</b> = déduction logique positive (on est presque sûr que c'est vrai) :<br>
<i>You've been working all day. You <b>must</b> be tired.</i> (Tu dois être fatigué.)<br><br>
<b>can't</b> = déduction logique négative (on est presque sûr que c'est faux) :<br>
<i>She <b>can't</b> be at home. Her car isn't here.</i> (Elle ne peut pas être chez elle.)<br><br>
Pour les déductions sur le <b>passé</b> :<br>
<b>must have + pp</b> : <i>He <b>must have forgotten</b>.</i> (Il a dû oublier.)<br>
<b>can't have + pp</b> : <i>She <b>can't have left</b> already.</i> (Elle n'a pas pu partir déjà.)<br><br>
⚠️ Ne confondez pas <b>must</b> (déduction) avec <b>must</b> (obligation). Le contexte est essentiel !`,
        rules: [
            '📐 **must** + base verbale → déduction logique **positive** au présent : _You **must** be joking!_',
            '📐 **can\'t** + base verbale → déduction logique **négative** au présent : _It **can\'t** be true._',
            '📐 **must have** + participe passé → déduction sur le **passé** (positif) : _He **must have left** early._',
            '📐 **can\'t have** + participe passé → déduction sur le **passé** (négatif) : _They **can\'t have** arrived yet._',
            '📐 On n\'utilise PAS **mustn\'t** pour la déduction négative → on utilise **can\'t** : _She ~~mustn\'t~~ **can\'t** be serious._',
        ],
        examples: [
            { text: "You've been travelling all day. You **must** be exhausted.", fr: "Tu as voyagé toute la journée. Tu dois être épuisé(e).", correct: true },
            { text: "That restaurant **can't** be very good. It's always empty.", fr: "Ce restaurant ne peut pas être très bon. Il est toujours vide.", correct: true },
            { text: "I can't find my keys. I **must have** left them at the office.", fr: "Je ne trouve pas mes clés. J'ai dû les laisser au bureau.", correct: true },
            { text: "She passed the exam easily. It **can't have** been very difficult.", fr: "Elle a réussi l'examen facilement. Ça n'a pas pu être très difficile.", correct: true },
            { text: "~~She mustn't be at home.~~ → She **can't** be at home.", fr: "Elle ne peut pas être chez elle.", correct: false, note: "Pour la déduction négative, on utilise 'can't', pas 'mustn't'. 'Mustn't' = interdiction." },
            { text: "~~He must forgot.~~ → He **must have forgotten**.", fr: "Il a dû oublier.", correct: false, note: "Déduction au passé = must have + participe passé." },
        ],
        tips: [
            "🇫🇷 « Il doit être fatigué » = He **must** be tired. Le français utilise « devoir » de la même façon pour la déduction.",
            "🇫🇷 Piège majeur : **mustn't** ≠ déduction négative ! **Mustn't** = interdiction (tu ne dois pas). Pour la déduction négative, c'est **can't**.",
            "🇫🇷 « Il a dû oublier » = He **must have** forgotten. Notez la structure anglaise avec **have + pp**.",
            "🇫🇷 Au TOEIC, les déductions logiques avec **must** et **can't** sont très courantes dans les dialogues de la partie 3.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "You've been running. You ___ be thirsty.", answer: "must", options: ["must", "can't", "mustn't", "should"], hint: "Déduction positive → tu dois être assoiffé." },
            { type: 'fill', difficulty: 'easy', question: "He's only three years old. He ___ be a university student!", answer: "can't", options: ["can't", "must", "mustn't", "shouldn't"], hint: "Déduction négative → c'est impossible." },
            { type: 'fill', difficulty: 'easy', question: "Look at all that food! You ___ be very hungry.", answer: "must", options: ["must", "can't", "mustn't", "couldn't"], hint: "Déduction positive basée sur l'observation." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "She knew all about our plans. Someone ___ have told her.", answer: "must", options: ["must", "can't", "should", "would"], hint: "Déduction logique sur le passé (positif)." },
            { type: 'fill', difficulty: 'medium', question: "I called him five times. He ___ have heard the phone.", answer: "can't", options: ["can't", "must", "mustn't", "shouldn't"], hint: "Déduction sur le passé : impossible qu'il n'ait pas entendu → en fait si : il ne peut pas ne pas avoir entendu ? Non : il n'a pas pu entendre." },
            { type: 'fill', difficulty: 'medium', question: "The meeting room is empty. The meeting ___ have finished early.", answer: "must", options: ["must", "can't", "shouldn't", "wouldn't"], hint: "Déduction au passé basée sur une observation présente." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "She ___ have received my email. I sent it to the wrong address.", answer: "can't", options: ["can't", "must", "mustn't", "needn't"], hint: "Déduction négative au passé : j'ai envoyé à la mauvaise adresse." },
            { type: 'fill', difficulty: 'hard', question: "The sales figures are excellent. The new strategy ___ be working.", answer: "must", options: ["must", "can't", "mustn't", "wouldn't"], hint: "Déduction positive : les résultats prouvent que ça marche." },
            { type: 'fill', difficulty: 'hard', question: "He ___ have been at the meeting. He was in another country that day.", answer: "can't", options: ["can't", "must", "shouldn't", "wouldn't"], hint: "Impossibilité logique au passé : il était ailleurs." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "There's no answer. They ___ be out.", answer: "must", options: ["must", "can't", "mustn't", "shouldn't"] },
            { type: 'fill', difficulty: 'hard', question: "He ___ have stolen the money. He was with me the whole time.", answer: "can't", options: ["can't", "must", "mustn't", "shouldn't"] },
            { type: 'fill', difficulty: 'hard', question: "The project was completed ahead of schedule. The team ___ have worked very hard.", answer: "must", options: ["must", "can't", "shouldn't", "wouldn't"] },
            { type: 'fill', difficulty: 'hard', question: "She ___ be the new manager. She only started working here last week.", answer: "can't", options: ["can't", "must", "mustn't", "won't"] },
        ],
    },

    29: {
        id: 29,
        title: 'may and might (1)',
        category: 'modals',
        explanation: `🇫🇷 <b>may et might (1) — exprimer la possibilité</b><br><br>
En français, on exprime la possibilité avec « <b>peut-être que</b> », « <b>il se peut que</b> » ou « <b>il est possible que</b> ». En anglais, on utilise <b>may</b> et <b>might</b> :<br><br>
<b>may/might</b> + base verbale = possibilité au présent ou au futur :<br>
<i>She <b>may</b> be at work.</i> (Elle est peut-être au travail.)<br>
<i>I <b>might</b> go to the cinema tonight.</i> (J'irai peut-être au cinéma ce soir.)<br><br>
<b>may</b> et <b>might</b> sont très proches en sens. <b>Might</b> est parfois perçu comme légèrement moins probable que <b>may</b>, mais dans la pratique quotidienne, ils sont souvent interchangeables.<br><br>
À la forme <b>négative</b> :<br>
<i>She <b>may not</b> (mightn't) come tonight.</i> (Il se peut qu'elle ne vienne pas.)<br>
⚠️ <b>may not</b> ≠ <b>can't</b> : <i>may not</i> = peut-être pas ; <i>can't</i> = certainement pas.<br><br>
<b>Attention</b> : on n'utilise PAS <b>may</b> dans les questions pour exprimer la possibilité. On utilise plutôt : <i>Do you think she <b>might</b> come?</i> ou <i>Is she <b>likely</b> to come?</i>`,
        rules: [
            '📐 **may/might** + base verbale → possibilité au présent ou futur : _It **may** rain later._',
            '📐 **may not / might not** → possibilité négative : _He **might not** come to the party._',
            '📐 **might** est légèrement moins certain que **may**, mais les deux sont souvent interchangeables.',
            '📐 On n\'utilise PAS **may** en début de question pour la possibilité → _~~May it rain?~~_ → _Do you think it **might** rain?_',
            '📐 **may/might** + **be** + -ing → possibilité d\'une action en cours : _She **may be waiting** for us._',
        ],
        examples: [
            { text: "I **may** go to the conference next week.", fr: "J'irai peut-être à la conférence la semaine prochaine.", correct: true },
            { text: "She **might** be late. There's a lot of traffic.", fr: "Elle sera peut-être en retard. Il y a beaucoup de circulation.", correct: true },
            { text: "The company **may not** accept your proposal.", fr: "L'entreprise n'acceptera peut-être pas votre proposition.", correct: true },
            { text: "Take an umbrella. It **might** rain.", fr: "Prends un parapluie. Il pourrait pleuvoir.", correct: true },
            { text: "~~May she come to the meeting?~~ → Do you think she **might** come to the meeting?", fr: "Penses-tu qu'elle viendra peut-être à la réunion ?", correct: false, note: "On n'utilise pas 'may' en début de question pour exprimer la possibilité." },
            { text: "~~I may to go home early.~~ → I **may go** home early.", fr: "Je partirai peut-être tôt.", correct: false, note: "Après un modal, pas de 'to'. C'est directement la base verbale." },
        ],
        tips: [
            "🇫🇷 « Peut-être que… » se traduit par **may/might** : « Peut-être qu'il pleuvra » = It **may/might** rain.",
            "🇫🇷 Ne confondez pas **may not** (peut-être pas) et **can't** (certainement pas). C'est une nuance importante au TOEIC !",
            "🇫🇷 En français, on peut dire « Il se peut qu'elle vienne ? » En anglais, on ne met PAS **may** en début de question de possibilité.",
            "🇫🇷 Au TOEIC, **may** et **might** apparaissent très souvent dans les e-mails et mémos pour indiquer des possibilités futures.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "Take a jacket. It ___ be cold tonight.", answer: "might", options: ["might", "must", "can", "will"], hint: "Possibilité pour le futur." },
            { type: 'fill', difficulty: 'easy', question: "I ___ go to the gym after work. I'm not sure yet.", answer: "may", options: ["may", "must", "will", "can"], hint: "Possibilité incertaine → 'peut-être que'." },
            { type: 'fill', difficulty: 'easy', question: "She ___ not come to the party. She has a lot of work.", answer: "might", options: ["might", "must", "can", "will"], hint: "Possibilité négative : peut-être qu'elle ne viendra pas." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "The meeting ___ be cancelled. The manager is sick.", answer: "may", options: ["may", "must", "will", "shall"], hint: "Possibilité basée sur une information." },
            { type: 'fill', difficulty: 'medium', question: "Do you think he ___ accept our offer?", answer: "might", options: ["might", "may", "will can", "must"], hint: "Possibilité dans une question → quel modal ?" },
            { type: 'fill', difficulty: 'medium', question: "She ___ be waiting for us outside. Let me check.", answer: "may be", options: ["may be", "maybe", "must", "can"], hint: "Possibilité d'une action en cours → may + be + -ing." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "The company ___ relocate its headquarters. Nothing is confirmed yet.", answer: "may", options: ["may", "must", "will", "shall"], hint: "Possibilité officielle, rien n'est encore confirmé." },
            { type: 'fill', difficulty: 'hard', question: "I wouldn't call her now. She ___ be sleeping.", answer: "might", options: ["might", "must", "will", "can"], hint: "Possibilité : il se peut qu'elle dorme." },
            { type: 'fill', difficulty: 'hard', question: "The new policy ___ not affect all departments equally.", answer: "may", options: ["may", "must", "will", "can"], hint: "Possibilité dans un contexte professionnel : la politique pourrait ne pas affecter…" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "We ___ have a meeting tomorrow. It depends on the director.", answer: "may", options: ["may", "must", "will", "shall"] },
            { type: 'fill', difficulty: 'hard', question: "The report ___ contain some errors. We need to review it.", answer: "might", options: ["might", "must", "will", "can"] },
            { type: 'fill', difficulty: 'hard', question: "He ___ not be the right person for the job. We should consider other candidates.", answer: "may", options: ["may", "must", "can", "will"] },
        ],
    },

    30: {
        id: 30,
        title: 'may and might (2)',
        category: 'modals',
        explanation: `🇫🇷 <b>may et might (2) — formes passées et continues</b><br><br>
Cette unité approfondit l'utilisation de <b>may</b> et <b>might</b> avec les formes composées :<br><br>
<b>may/might have + participe passé</b> → possibilité au passé :<br>
<i>She <b>might have gone</b> home.</i> (Elle est peut-être rentrée chez elle.)<br>
En français : « il se peut qu'elle soit partie » ou « elle est peut-être partie ».<br><br>
<b>may/might be + -ing</b> → possibilité d'une action en cours :<br>
<i>He <b>might be working</b> late.</i> (Il est peut-être en train de travailler tard.)<br><br>
<b>may/might have been + -ing</b> → possibilité d'une action en cours dans le passé :<br>
<i>She <b>may have been waiting</b> for a long time.</i> (Elle attendait peut-être depuis longtemps.)<br><br>
⚠️ <b>might</b> (et non <b>may</b>) est utilisé dans les situations <b>irréelles</b> ou hypothétiques :<br>
<i>If I had known, I <b>might have helped</b>.</i> (Si j'avais su, j'aurais peut-être aidé.)`,
        rules: [
            '📐 **may/might have** + participe passé → possibilité au **passé** : _She **may have missed** the bus._',
            '📐 **may/might be** + -ing → possibilité d\'une action **en cours** : _They **might be having** lunch._',
            '📐 **may/might have been** + -ing → possibilité d\'une action en cours **dans le passé** : _He **may have been sleeping** when you called._',
            '📐 Dans les situations **irréelles/hypothétiques**, on préfère **might** à **may** : _If I had studied harder, I **might** have passed._',
            '📐 **might not have** + pp → possibilité négative au passé : _She **might not have received** my message._',
        ],
        examples: [
            { text: "A: I can't find Tom anywhere. B: He **may have gone** home early.", fr: "A : Je ne trouve Tom nulle part. B : Il est peut-être rentré tôt.", correct: true },
            { text: "Don't call her now. She **might be sleeping**.", fr: "Ne l'appelle pas maintenant. Elle est peut-être en train de dormir.", correct: true },
            { text: "You **might have been waiting** for hours! I'm sorry I'm late.", fr: "Tu attendais peut-être depuis des heures ! Désolé d'être en retard.", correct: true },
            { text: "If I had taken that job, I **might have been** happier.", fr: "Si j'avais accepté ce travail, j'aurais peut-être été plus heureux.", correct: true },
            { text: "~~She may has gone home.~~ → She **may have gone** home.", fr: "Elle est peut-être rentrée.", correct: false, note: "Après 'may', on utilise 'have' (base verbale), pas 'has'." },
            { text: "~~He may went to the store.~~ → He **may have gone** to the store.", fr: "Il est peut-être allé au magasin.", correct: false, note: "May + base verbale ou may have + participe passé. Jamais may + prétérit." },
        ],
        tips: [
            "🇫🇷 « Elle est peut-être partie » = She **may/might have** gone. En français, le passé composé + « peut-être ». En anglais : modal + have + pp.",
            "🇫🇷 « Il est peut-être en train de dormir » = He **might be sleeping**. Notez la forme continue avec be + -ing.",
            "🇫🇷 Dans les structures conditionnelles irréelles, utilisez **might** (pas may) : « Si j'avais su » → If I had known, I **might** have…",
            "🇫🇷 Au TOEIC, les formes **may/might have done** apparaissent dans les réponses de compréhension orale pour exprimer des hypothèses sur ce qui s'est passé.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "I can't find my phone. I ___ have left it in the car.", answer: "might", options: ["might", "must", "should", "will"], hint: "Possibilité au passé : « je l'ai peut-être laissé »." },
            { type: 'fill', difficulty: 'easy', question: "Be quiet! The baby ___ be sleeping.", answer: "might", options: ["might", "must", "will", "shall"], hint: "Possibilité d'une action en cours maintenant." },
            { type: 'fill', difficulty: 'easy', question: "She ___ have forgotten about the meeting.", answer: "may", options: ["may", "must", "will", "shall"], hint: "Possibilité au passé : « elle a peut-être oublié »." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "He's not answering his phone. He ___ be driving.", answer: "might", options: ["might", "must", "will", "shall"], hint: "Possibilité d'une action en cours : « il est peut-être en train de conduire »." },
            { type: 'fill', difficulty: 'medium', question: "The email ___ not have reached him. Check the address.", answer: "may", options: ["may", "must", "will", "can"], hint: "Possibilité négative au passé." },
            { type: 'fill', difficulty: 'medium', question: "They ___ have been waiting for us at the wrong entrance.", answer: "might", options: ["might", "must", "will", "should"], hint: "Possibilité d'une action continue dans le passé." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "If we had invested earlier, we ___ have made more profit.", answer: "might", options: ["might", "may", "must", "should"], hint: "Situation irréelle au passé → quel modal pour l'hypothétique ?" },
            { type: 'fill', difficulty: 'hard', question: "The manager ___ have been considering the proposal for weeks before she approved it.", answer: "may", options: ["may", "must", "will", "shall"], hint: "Possibilité d'une action continue dans le passé (may have been + -ing)." },
            { type: 'fill', difficulty: 'hard', question: "He didn't answer. He ___ not have seen the message, or he ___ have been too busy.", answer: "might", options: ["might", "must", "should", "would"], hint: "Deux possibilités au passé, on utilise le même modal." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "The package hasn't arrived. It ___ have been sent to the wrong address.", answer: "may", options: ["may", "must", "will", "shall"] },
            { type: 'fill', difficulty: 'hard', question: "If she had called earlier, we ___ have been able to help.", answer: "might", options: ["might", "may", "must", "should"] },
            { type: 'fill', difficulty: 'hard', question: "He ___ have been working on the report when the system crashed.", answer: "might", options: ["might", "must", "should", "would"] },
            { type: 'fill', difficulty: 'hard', question: "She ___ not have understood the instructions. They were quite complex.", answer: "may", options: ["may", "must", "will", "shall"] },
        ],
    },

    31: {
        id: 31,
        title: 'have to and must',
        category: 'modals',
        explanation: `🇫🇷 <b>have to et must — l'obligation</b><br><br>
En français, « <b>devoir</b> » couvre à la fois l'obligation personnelle et l'obligation externe. En anglais, on distingue :<br><br>
<b>must</b> → obligation <b>interne</b> (c'est l'opinion du locuteur, une règle qu'on s'impose) :<br>
<i>I <b>must</b> stop smoking.</i> (Je dois arrêter de fumer — c'est ma décision.)<br><br>
<b>have to</b> → obligation <b>externe</b> (règlement, loi, nécessité extérieure) :<br>
<i>I <b>have to</b> wear a uniform at work.</i> (Je dois porter un uniforme — c'est le règlement.)<br><br>
⚠️ <b>Grande différence à la forme négative</b> :<br>
<b>mustn't</b> = <b>interdiction</b> (il ne faut pas) : <i>You <b>mustn't</b> park here.</i><br>
<b>don't have to</b> = <b>pas d'obligation</b> (pas obligé de) : <i>You <b>don't have to</b> come if you don't want to.</i><br><br>
Cette différence n'existe pas en français avec « ne pas devoir » qui est ambigu. C'est un piège majeur pour les francophones !<br><br>
<b>have to</b> a toutes les formes verbales : <i>had to</i> (passé), <i>will have to</i> (futur), <i>have had to</i> (present perfect).`,
        rules: [
            '📐 **must** → obligation interne / opinion du locuteur : _I **must** remember to call her._',
            '📐 **have to** → obligation externe / règle / nécessité : _You **have to** show your ID to enter._',
            '📐 **mustn\'t** → **interdiction** : _You **mustn\'t** tell anyone._ (Tu ne dois surtout pas.)',
            '📐 **don\'t have to** → **absence d\'obligation** : _You **don\'t have to** pay. It\'s free._ (Tu n\'es pas obligé.)',
            '📐 **have to** est utilisé au passé (**had to**), futur (**will have to**), etc. car **must** n\'a qu\'une forme.',
        ],
        examples: [
            { text: "I **must** study harder. My grades are terrible.", fr: "Je dois travailler plus dur. Mes notes sont terribles. (décision personnelle)", correct: true },
            { text: "Employees **have to** be at work by 9 a.m.", fr: "Les employés doivent être au travail avant 9h. (règle de l'entreprise)", correct: true },
            { text: "You **mustn't** use your phone during the exam.", fr: "Il est interdit d'utiliser son téléphone pendant l'examen.", correct: true },
            { text: "You **don't have to** attend the meeting. It's optional.", fr: "Tu n'es pas obligé(e) d'assister à la réunion. C'est facultatif.", correct: true },
            { text: "~~You mustn't come if you don't want to.~~ → You **don't have to** come if you don't want to.", fr: "Tu n'es pas obligé de venir si tu ne veux pas.", correct: false, note: "Mustn't = interdiction. Ici, on veut dire 'pas obligé' → don't have to." },
            { text: "~~I must to go now.~~ → I **must go** / I **have to go** now.", fr: "Je dois y aller maintenant.", correct: false, note: "Pas de 'to' après must. Avec 'have to', le 'to' fait partie de la structure." },
        ],
        tips: [
            "🇫🇷 Le piège n°1 : **mustn't** ≠ **don't have to**. « Tu ne dois pas » en français est ambigu. En anglais : mustn't = interdiction, don't have to = pas obligé.",
            "🇫🇷 « Je dois porter un uniforme » (règle) = I **have to** wear a uniform. « Je dois me mettre au sport » (décision personnelle) = I **must** start exercising.",
            "🇫🇷 Au passé, on utilise **had to** (pas 'musted') : « J'ai dû partir tôt » = I **had to** leave early.",
            "🇫🇷 Au TOEIC, la distinction **mustn't** vs **don't have to** est un classique de la partie 5.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "You ___ wear a seatbelt. It's the law.", answer: "have to", options: ["have to", "must", "mustn't", "don't have to"], hint: "Obligation externe (la loi)." },
            { type: 'fill', difficulty: 'easy', question: "You ___ smoke in the hospital. It's forbidden.", answer: "mustn't", options: ["mustn't", "don't have to", "must", "have to"], hint: "Interdiction." },
            { type: 'fill', difficulty: 'easy', question: "Tomorrow is a holiday. I ___ go to work.", answer: "don't have to", options: ["don't have to", "mustn't", "must", "have to"], hint: "Pas d'obligation → pas obligé de." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "I ___ finish this report by Friday. My boss is expecting it.", answer: "have to", options: ["have to", "must", "mustn't", "don't have to"], hint: "Obligation imposée par le patron." },
            { type: 'fill', difficulty: 'medium', question: "She ___ leave early yesterday because she was feeling ill.", answer: "had to", options: ["had to", "must", "has to", "have to"], hint: "Obligation au passé → quelle forme ?" },
            { type: 'fill', difficulty: 'medium', question: "You ___ touch the paintings in the museum.", answer: "mustn't", options: ["mustn't", "don't have to", "must", "have to"], hint: "C'est interdit !" },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "The dress code is casual on Fridays. Employees ___ wear formal clothes.", answer: "don't have to", options: ["don't have to", "mustn't", "must", "have to"], hint: "C'est facultatif, pas interdit." },
            { type: 'fill', difficulty: 'hard', question: "If the project is delayed, we ___ extend the deadline.", answer: "will have to", options: ["will have to", "must", "mustn't", "had to"], hint: "Obligation au futur." },
            { type: 'fill', difficulty: 'hard', question: "You ___ disclose confidential information to anyone outside the company.", answer: "mustn't", options: ["mustn't", "don't have to", "must", "have to"], hint: "Interdiction stricte dans un contexte professionnel." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "We ___ submit our tax returns before April 15.", answer: "have to", options: ["have to", "must", "mustn't", "don't have to"] },
            { type: 'fill', difficulty: 'hard', question: "You ___ be a member to use the facilities. Anyone can come.", answer: "don't have to", options: ["don't have to", "mustn't", "must", "have to"] },
            { type: 'fill', difficulty: 'hard', question: "She ___ work overtime last week because of the product launch.", answer: "had to", options: ["had to", "must", "has to", "mustn't"] },
            { type: 'fill', difficulty: 'hard', question: "Visitors ___ enter the restricted area without authorization.", answer: "mustn't", options: ["mustn't", "don't have to", "must", "have to"] },
        ],
    },

    32: {
        id: 32,
        title: 'must, mustn\'t, needn\'t',
        category: 'modals',
        explanation: `🇫🇷 <b>must, mustn't, needn't — obligation, interdiction et absence de nécessité</b><br><br>
Cette unité précise les nuances entre <b>must</b>, <b>mustn't</b> et <b>needn't</b> :<br><br>
<b>must</b> = obligation : <i>You <b>must</b> be on time.</i> (Tu dois être à l'heure.)<br>
<b>mustn't</b> = interdiction : <i>You <b>mustn't</b> park here.</i> (Il est interdit de se garer ici.)<br>
<b>needn't</b> = pas nécessaire : <i>You <b>needn't</b> bring anything.</i> (Tu n'as pas besoin d'apporter quoi que ce soit.)<br><br>
⚠️ <b>Différence cruciale au passé</b> :<br>
<b>needn't have done</b> → on a fait quelque chose d'<b>inutile</b> (on l'a fait mais ce n'était pas nécessaire) :<br>
<i>I <b>needn't have bought</b> so much food. Nobody was hungry.</i><br><br>
<b>didn't need to</b> → ce n'était pas nécessaire (on ne sait pas forcément si la personne l'a fait ou non) :<br>
<i>I <b>didn't need to</b> get up early, so I stayed in bed.</i><br><br>
En français, cette nuance n'existe pas clairement, ce qui en fait un piège pour les francophones.`,
        rules: [
            '📐 **must** → obligation : _All passengers **must** fasten their seatbelts._',
            '📐 **mustn\'t** → interdiction (il ne faut pas) : _You **mustn\'t** tell anyone._',
            '📐 **needn\'t** (= don\'t need to) → pas nécessaire : _You **needn\'t** wait for me._',
            '📐 **needn\'t have** + pp → action faite mais **inutile** : _You **needn\'t have** cooked. We\'re eating out._',
            '📐 **didn\'t need to** → pas nécessaire (sans préciser si l\'action a été faite) : _I **didn\'t need to** take a taxi. Tom gave me a lift._',
        ],
        examples: [
            { text: "You **must** hand in your assignment by Friday.", fr: "Tu dois rendre ton devoir avant vendredi.", correct: true },
            { text: "You **mustn't** use your phone while driving.", fr: "Il est interdit d'utiliser son téléphone en conduisant.", correct: true },
            { text: "We **needn't** hurry. We have plenty of time.", fr: "Nous n'avons pas besoin de nous dépêcher. On a largement le temps.", correct: true },
            { text: "I **needn't have bought** all this food. Nobody came to the party.", fr: "Je n'avais pas besoin d'acheter toute cette nourriture. Personne n'est venu.", correct: true },
            { text: "~~You needn't to worry.~~ → You **needn't worry** / You **don't need to worry**.", fr: "Tu n'as pas besoin de t'inquiéter.", correct: false, note: "Needn't est suivi directement de la base verbale (sans 'to')." },
            { text: "~~You mustn't come if you're busy.~~ → You **needn't** come if you're busy.", fr: "Tu n'as pas besoin de venir si tu es occupé.", correct: false, note: "Mustn't = interdiction. Ici le sens est 'pas nécessaire' → needn't." },
        ],
        tips: [
            "🇫🇷 **Needn't** = « pas besoin de ». **Mustn't** = « il est interdit de ». Ne les confondez pas !",
            "🇫🇷 « Je n'avais pas besoin d'acheter du pain (et je l'ai fait quand même) » = I **needn't have bought** bread.",
            "🇫🇷 « Je n'avais pas besoin d'acheter du pain (et je ne l'ai pas fait) » = I **didn't need to** buy bread.",
            "🇫🇷 Au TOEIC, les panneaux et règlements dans la partie 1 et les annonces dans la partie 4 utilisent souvent **must** et **mustn't**.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "You ___ wear a helmet on the construction site. It's compulsory.", answer: "must", options: ["must", "mustn't", "needn't", "shouldn't"], hint: "C'est obligatoire." },
            { type: 'fill', difficulty: 'easy', question: "You ___ eat in the library. It's against the rules.", answer: "mustn't", options: ["mustn't", "needn't", "must", "don't have to"], hint: "C'est interdit." },
            { type: 'fill', difficulty: 'easy', question: "You ___ bring food. Lunch will be provided.", answer: "needn't", options: ["needn't", "mustn't", "must", "should"], hint: "Ce n'est pas nécessaire." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "I ___ have worried. Everything turned out fine.", answer: "needn't", options: ["needn't", "mustn't", "didn't need", "shouldn't"], hint: "Je me suis inquiété mais ce n'était pas nécessaire." },
            { type: 'fill', difficulty: 'medium', question: "Employees ___ leave the building during a fire drill.", answer: "must", options: ["must", "mustn't", "needn't", "shouldn't"], hint: "Obligation obligatoire pendant un exercice d'évacuation." },
            { type: 'fill', difficulty: 'medium', question: "You ___ shout. I can hear you perfectly well.", answer: "needn't", options: ["needn't", "mustn't", "must", "should"], hint: "Ce n'est pas nécessaire de crier." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "I ___ have rushed to the airport. The flight was delayed by three hours.", answer: "needn't", options: ["needn't", "mustn't", "didn't need to", "shouldn't"], hint: "J'ai couru (action faite) mais ce n'était pas nécessaire." },
            { type: 'fill', difficulty: 'hard', question: "All documents ___ be submitted electronically. Paper copies will not be accepted.", answer: "must", options: ["must", "mustn't", "needn't", "might"], hint: "Obligation stricte dans un contexte administratif." },
            { type: 'fill', difficulty: 'hard', question: "She ___ have come to the meeting. Her presence wasn't required, and she ended up wasting her time.", answer: "needn't", options: ["needn't", "mustn't", "shouldn't", "can't"], hint: "Elle est venue (action faite) mais ce n'était pas nécessaire." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "Staff ___ access client data without authorization.", answer: "mustn't", options: ["mustn't", "needn't", "must", "don't have to"] },
            { type: 'fill', difficulty: 'hard', question: "You ___ have brought your own laptop. The company provides one.", answer: "needn't", options: ["needn't", "mustn't", "shouldn't", "didn't need to"] },
            { type: 'fill', difficulty: 'hard', question: "All participants ___ register before the deadline. Late registrations will not be accepted.", answer: "must", options: ["must", "needn't", "mustn't", "might"] },
            { type: 'fill', difficulty: 'hard', question: "I ___ go to the bank yesterday. I did everything online.", answer: "didn't need to", options: ["didn't need to", "needn't have", "mustn't", "needn't"] },
        ],
    },

    33: {
        id: 33,
        title: 'should (1)',
        category: 'modals',
        explanation: `🇫🇷 <b>should (1) — conseil et opinion</b><br><br>
En français, « <b>tu devrais</b> » (conditionnel de « devoir ») correspond exactement à <b>should</b> en anglais. On l'utilise pour donner des <b>conseils</b>, exprimer des <b>opinions</b> ou dire ce qui est <b>bien/correct</b> :<br><br>
<b>should</b> + base verbale → conseil au présent/futur :<br>
<i>You <b>should</b> see a doctor.</i> (Tu devrais voir un médecin.)<br><br>
<b>should have</b> + participe passé → conseil au passé (on regrette de ne pas l'avoir fait) :<br>
<i>You <b>should have told</b> me earlier.</i> (Tu aurais dû me le dire plus tôt.)<br><br>
<b>shouldn't have</b> + participe passé → reproche pour quelque chose qu'on a fait :<br>
<i>I <b>shouldn't have eaten</b> so much.</i> (Je n'aurais pas dû manger autant.)<br><br>
<b>should</b> est moins fort que <b>must</b>. C'est un conseil, pas une obligation :<br>
<i>You <b>should</b> exercise more.</i> (conseil) vs <i>You <b>must</b> exercise more.</i> (obligation forte)`,
        rules: [
            '📐 **should** + base verbale → conseil, recommandation : _You **should** apply for that job._',
            '📐 **shouldn\'t** + base verbale → conseil négatif : _You **shouldn\'t** stay up so late._',
            '📐 **should have** + pp → on aurait dû faire quelque chose (mais on ne l\'a pas fait) : _I **should have** studied harder._',
            '📐 **shouldn\'t have** + pp → on a fait quelque chose qu\'on n\'aurait pas dû : _You **shouldn\'t have** said that._',
            '📐 **I think / I don\'t think** + should : _I **don\'t think** you **should** go._ (plus naturel que _I think you shouldn\'t go_)',
        ],
        examples: [
            { text: "You look tired. You **should** get some rest.", fr: "Tu as l'air fatigué. Tu devrais te reposer.", correct: true },
            { text: "The report **should** be ready by tomorrow.", fr: "Le rapport devrait être prêt d'ici demain.", correct: true },
            { text: "I **should have** called her on her birthday.", fr: "J'aurais dû l'appeler pour son anniversaire.", correct: true },
            { text: "You **shouldn't have** spent so much money.", fr: "Tu n'aurais pas dû dépenser autant d'argent.", correct: true },
            { text: "~~You should to study more.~~ → You **should study** more.", fr: "Tu devrais étudier davantage.", correct: false, note: "Pas de 'to' après should. C'est un modal." },
            { text: "~~I should have tell him.~~ → I **should have told** him.", fr: "J'aurais dû lui dire.", correct: false, note: "Après 'should have', on utilise le participe passé (told), pas la base verbale." },
        ],
        tips: [
            "🇫🇷 **should** = « tu devrais » (conditionnel de devoir). C'est une correspondance quasi parfaite !",
            "🇫🇷 « J'aurais dû » = I **should have** + pp. C'est une structure très courante pour exprimer le regret.",
            "🇫🇷 Piège : pas de « to » après should ! ~~should to go~~ → **should go**. Les francophones ajoutent souvent « to » par habitude.",
            "🇫🇷 Au TOEIC, **should** est omniprésent dans les e-mails de recommandation et les conversations pour donner des conseils professionnels.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "You ___ see a dentist. Your tooth looks bad.", answer: "should", options: ["should", "must", "might", "would"], hint: "Conseil → « tu devrais »." },
            { type: 'fill', difficulty: 'easy', question: "You ___ eat so much sugar. It's bad for your health.", answer: "shouldn't", options: ["shouldn't", "mustn't", "needn't", "won't"], hint: "Conseil négatif → « tu ne devrais pas »." },
            { type: 'fill', difficulty: 'easy', question: "I think you ___ talk to your manager about it.", answer: "should", options: ["should", "must", "might", "would"], hint: "Opinion / conseil." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "She ___ have accepted the job offer. It was a great opportunity.", answer: "should", options: ["should", "must", "might", "would"], hint: "Regret : elle aurait dû accepter." },
            { type: 'fill', difficulty: 'medium', question: "We ___ have left earlier. Now we're stuck in traffic.", answer: "should", options: ["should", "must", "might", "could"], hint: "Regret : on aurait dû partir plus tôt." },
            { type: 'fill', difficulty: 'medium', question: "I don't think you ___ send that email. It sounds too aggressive.", answer: "should", options: ["should", "must", "might", "would"], hint: "Conseil négatif avec 'I don't think'." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "The company ___ have invested more in employee training. Now they're losing staff.", answer: "should", options: ["should", "must", "might", "would"], hint: "Critique / regret au passé dans un contexte professionnel." },
            { type: 'fill', difficulty: 'hard', question: "You ___ have discussed the matter with HR before making a decision.", answer: "should", options: ["should", "must", "might", "could"], hint: "Reproche professionnel : il aurait fallu consulter les RH." },
            { type: 'fill', difficulty: 'hard', question: "He ___ have resigned without giving proper notice. That was unprofessional.", answer: "shouldn't", options: ["shouldn't", "mustn't", "needn't", "wouldn't"], hint: "Reproche : il n'aurait pas dû démissionner sans préavis." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "Applicants ___ submit their résumé and a cover letter.", answer: "should", options: ["should", "must", "might", "would"] },
            { type: 'fill', difficulty: 'hard', question: "The deadline was yesterday. You ___ have submitted the report on time.", answer: "should", options: ["should", "must", "might", "could"] },
            { type: 'fill', difficulty: 'hard', question: "I ___ have been more careful with the client's data.", answer: "should", options: ["should", "must", "might", "would"] },
        ],
    },

    34: {
        id: 34,
        title: 'should (2)',
        category: 'modals',
        explanation: `🇫🇷 <b>should (2) — usages avancés</b><br><br>
Au-delà du conseil, <b>should</b> a des usages plus avancés en anglais :<br><br>
<b>1. Should pour l'attente / la probabilité :</b><br>
<i>She <b>should</b> be here by now.</i> (Elle devrait être là maintenant — on s'y attend.)<br>
<i>The package <b>should</b> arrive tomorrow.</i> (Le colis devrait arriver demain.)<br><br>
<b>2. Should après certains adjectifs (it's strange/surprising/funny that…) :</b><br>
<i>It's strange that he <b>should</b> say that.</i> (C'est étrange qu'il dise cela.)<br>
En français, on utiliserait le <b>subjonctif</b> : « Il est étrange qu'il dise… »<br><br>
<b>3. Should après suggest, recommend, insist, demand, propose :</b><br>
<i>I suggest that he <b>should</b> apply for the position.</i><br>
En anglais américain, on préfère souvent le subjonctif sans should : <i>I suggest that he <b>apply</b>…</i><br><br>
<b>4. If + should (éventualité peu probable) :</b><br>
<i>If you <b>should</b> see Tom, tell him to call me.</i> (Si par hasard tu vois Tom…)<br>
<i><b>Should</b> you need any help, please contact us.</i> (forme inversée, très formelle)`,
        rules: [
            '📐 **should** pour l\'attente : _The meeting **should** finish by 5 p.m._ (probabilité)',
            '📐 It\'s + adjectif + that + sujet + **should** → surprise, bizarrerie : _It\'s odd that she **should** refuse._',
            '📐 suggest/recommend/insist + that + sujet + **should** + base verbale : _He recommended that I **should** take a break._',
            '📐 If + sujet + **should** → éventualité peu probable : _If you **should** change your mind, let me know._',
            '📐 **Should** + sujet (inversion) → forme très formelle : _**Should** you require assistance, please ask._',
        ],
        examples: [
            { text: "The train **should** arrive in about ten minutes.", fr: "Le train devrait arriver dans une dizaine de minutes.", correct: true },
            { text: "It's surprising that he **should** have failed the exam.", fr: "C'est surprenant qu'il ait échoué à l'examen.", correct: true },
            { text: "The doctor recommended that she **should** rest for a week.", fr: "Le médecin a recommandé qu'elle se repose pendant une semaine.", correct: true },
            { text: "**Should** you have any questions, please don't hesitate to contact us.", fr: "Si vous avez des questions, n'hésitez pas à nous contacter.", correct: true },
            { text: "~~It's strange that he says that.~~ → It's strange that he **should say** that.", fr: "C'est étrange qu'il dise cela.", correct: false, note: "Après 'it's strange that', on utilise should + base verbale pour exprimer la surprise." },
            { text: "~~I suggest that he comes early.~~ → I suggest that he **should come** / **come** early.", fr: "Je suggère qu'il vienne tôt.", correct: false, note: "Après suggest, on utilise should + base verbale ou le subjonctif (come sans -s)." },
        ],
        tips: [
            "🇫🇷 « Ça devrait aller » = It **should** be fine. Should exprime ici une attente raisonnable, pas un conseil.",
            "🇫🇷 « C'est bizarre qu'il dise ça » = It's strange that he **should** say that. Le subjonctif français → should en anglais.",
            "🇫🇷 Après « suggest, recommend, insist », l'anglais utilise **should** ou le subjonctif (sans -s). Ne mettez pas de forme conjuguée normale !",
            "🇫🇷 La forme « Should you need… » est très courante dans les e-mails professionnels du TOEIC. C'est la version formelle de « If you need… ».",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "The package ___ arrive by Friday.", answer: "should", options: ["should", "must", "might", "would"], hint: "Attente raisonnable : on s'attend à ce qu'il arrive." },
            { type: 'fill', difficulty: 'easy', question: "She left an hour ago. She ___ be home by now.", answer: "should", options: ["should", "must", "might", "would"], hint: "Probabilité : elle devrait être arrivée." },
            { type: 'fill', difficulty: 'easy', question: "I suggest that we ___ postpone the meeting.", answer: "should", options: ["should", "must", "might", "shall"], hint: "Après 'suggest that', on utilise should." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "It's odd that she ___ refuse such a generous offer.", answer: "should", options: ["should", "must", "would", "might"], hint: "Expression de surprise → It's odd that... should." },
            { type: 'fill', difficulty: 'medium', question: "The manager insisted that all employees ___ attend the training.", answer: "should", options: ["should", "must", "might", "would"], hint: "Après 'insist that' → should ou subjonctif." },
            { type: 'fill', difficulty: 'medium', question: "If you ___ need further information, please visit our website.", answer: "should", options: ["should", "must", "might", "would"], hint: "Éventualité peu probable, formule polie." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "___ you require any assistance, please do not hesitate to contact our support team.", answer: "Should", options: ["Should", "Must", "Would", "Could"], hint: "Inversion formelle : Should + sujet en début de phrase." },
            { type: 'fill', difficulty: 'hard', question: "It's essential that every participant ___ sign the confidentiality agreement.", answer: "should", options: ["should", "must", "might", "would"], hint: "Après 'it's essential that' → should + base verbale." },
            { type: 'fill', difficulty: 'hard', question: "The board proposed that the CEO ___ step down.", answer: "should", options: ["should", "must", "might", "would"], hint: "Après 'propose that' → should + base verbale." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "The results ___ be available next week.", answer: "should", options: ["should", "must", "might", "shall"] },
            { type: 'fill', difficulty: 'hard', question: "It's surprising that the company ___ have made such a large profit this quarter.", answer: "should", options: ["should", "must", "would", "might"] },
            { type: 'fill', difficulty: 'hard', question: "___ you wish to cancel your subscription, please fill out the online form.", answer: "Should", options: ["Should", "Would", "Must", "Could"] },
            { type: 'fill', difficulty: 'hard', question: "The committee recommended that the policy ___ be reviewed annually.", answer: "should", options: ["should", "must", "would", "might"] },
        ],
    },

    35: {
        id: 35,
        title: "had better, it's time",
        category: 'modals',
        explanation: `🇫🇷 <b>had better et it's time — conseil fort et urgence</b><br><br>
<b>had better</b> (souvent contracté en <b>'d better</b>) exprime un <b>conseil fort</b> avec l'idée qu'il y aura des <b>conséquences négatives</b> si on ne le suit pas :<br>
<i>You <b>'d better</b> hurry or you'll miss the train.</i> (Tu ferais mieux de te dépêcher sinon tu vas rater le train.)<br><br>
En français : « <b>tu ferais mieux de</b> » ou « <b>il vaudrait mieux que</b> ».<br><br>
⚠️ <b>had better</b> est suivi de la <b>base verbale</b> (sans to) :<br>
<i>You'd better <b>go</b> now.</i> (PAS ~~better to go~~)<br>
La forme négative : <i>You'd better <b>not</b> be late.</i><br><br>
<b>it's time</b> + <b>prétérit</b> → il est temps de faire quelque chose (avec une nuance de reproche ou d'urgence) :<br>
<i>It's time we <b>left</b>.</i> (Il est temps de partir / Il est temps que nous partions.)<br>
<i>It's time you <b>started</b> looking for a job.</i><br><br>
En français, on utilise le <b>subjonctif</b> : « il est temps que tu <b>commences</b>… »<br>
En anglais, on utilise le <b>prétérit</b> (valeur irréelle, pas un vrai passé).`,
        rules: [
            '📐 **had better** (\'d better) + base verbale → conseil fort avec conséquence négative : _You\'d **better** leave now._',
            '📐 **had better not** → forme négative : _You\'d **better not** tell anyone._',
            '📐 **it\'s time** + sujet + **prétérit** → il est temps que… : _It\'s time we **went** home._',
            '📐 **it\'s time** + to + infinitif (sans sujet spécifique) : _It\'s time **to go**._',
            '📐 **it\'s about time / it\'s high time** + prétérit → emphase, reproche : _It\'s **high time** you **learned** to drive._',
        ],
        examples: [
            { text: "You**'d better** take an umbrella. It looks like rain.", fr: "Tu ferais mieux de prendre un parapluie. On dirait qu'il va pleuvoir.", correct: true },
            { text: "We**'d better not** wake the baby.", fr: "On ferait mieux de ne pas réveiller le bébé.", correct: true },
            { text: "It's time we **made** a decision.", fr: "Il est temps que nous prenions une décision.", correct: true },
            { text: "It's **high time** you **got** a haircut!", fr: "Il est grand temps que tu te fasses couper les cheveux !", correct: true },
            { text: "~~You'd better to go now.~~ → You'd better **go** now.", fr: "Tu ferais mieux de partir maintenant.", correct: false, note: "Pas de 'to' après had better. C'est directement la base verbale." },
            { text: "~~It's time we go home.~~ → It's time we **went** home.", fr: "Il est temps de rentrer.", correct: false, note: "Après it's time + sujet, on utilise le prétérit (went), pas le présent." },
        ],
        tips: [
            "🇫🇷 « Tu ferais mieux de… » = You'd **better**… La traduction est presque directe !",
            "🇫🇷 Piège classique : pas de « to » après had better ! ~~better to go~~ → **better go**.",
            "🇫🇷 « Il est temps que tu partes » = It's time you **left**. Le prétérit anglais remplace le subjonctif français.",
            "🇫🇷 Au TOEIC, « it's time + prétérit » et « had better » apparaissent dans des situations de prise de décision professionnelle.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "It's getting late. You'd better ___ home.", answer: "go", options: ["go", "to go", "going", "gone"], hint: "Après 'had better', pas de 'to' → base verbale." },
            { type: 'fill', difficulty: 'easy', question: "It's time ___ lunch.", answer: "for", options: ["for", "to", "we", "had"], hint: "It's time for + nom." },
            { type: 'fill', difficulty: 'easy', question: "You'd better ___ be late for the interview.", answer: "not", options: ["not", "don't", "won't", "didn't"], hint: "Forme négative de had better → had better NOT." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "It's time we ___ thinking about the budget for next year.", answer: "started", options: ["started", "start", "starting", "to start"], hint: "It's time + sujet + prétérit." },
            { type: 'fill', difficulty: 'medium', question: "You'd better ___ the doctor about those headaches.", answer: "see", options: ["see", "to see", "seeing", "seen"], hint: "Had better + base verbale (sans to)." },
            { type: 'fill', difficulty: 'medium', question: "It's high time the company ___ its policy on remote work.", answer: "updated", options: ["updated", "updates", "update", "to update"], hint: "It's high time + sujet + prétérit (emphase)." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "You'd better ___ disclose this information to the press. It could damage the company.", answer: "not", options: ["not", "don't", "never", "won't"], hint: "Conseil fort négatif : il ne faut surtout pas." },
            { type: 'fill', difficulty: 'hard', question: "It's about time the management ___ to our concerns.", answer: "listened", options: ["listened", "listens", "listen", "to listen"], hint: "It's about time + sujet + prétérit = reproche." },
            { type: 'fill', difficulty: 'hard', question: "We'd better ___ the client before making any changes to the contract.", answer: "consult", options: ["consult", "to consult", "consulting", "consulted"], hint: "Had better + base verbale dans un contexte professionnel." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "You'd better ___ the report before the meeting.", answer: "finish", options: ["finish", "to finish", "finishing", "finished"] },
            { type: 'fill', difficulty: 'hard', question: "It's high time the government ___ action on climate change.", answer: "took", options: ["took", "takes", "take", "to take"] },
            { type: 'fill', difficulty: 'hard', question: "We'd better ___ make any promises we can't keep.", answer: "not", options: ["not", "don't", "never", "won't"] },
            { type: 'fill', difficulty: 'hard', question: "It's about time you ___ taking your career more seriously.", answer: "started", options: ["started", "start", "starting", "to start"] },
        ],
    },

    36: {
        id: 36,
        title: 'would',
        category: 'modals',
        explanation: `🇫🇷 <b>would — conditionnel, habitudes passées et offres polies</b><br><br>
<b>would</b> est l'un des modaux les plus polyvalents en anglais. En français, il correspond principalement au <b>conditionnel</b> :<br><br>
<b>1. Situation hypothétique / conditionnel :</b><br>
<i>I <b>would</b> go if I could.</i> (J'irais si je pouvais.)<br>
<i>What <b>would</b> you do if you won the lottery?</i><br><br>
<b>2. Habitudes dans le passé (= used to) :</b><br>
<i>When I was a child, we <b>would</b> play in the park every day.</i><br>
(Quand j'étais enfant, on jouait dans le parc tous les jours.)<br>
⚠️ <b>would</b> ne s'utilise PAS pour les <b>états</b> passés → on utilise <b>used to</b> :<br>
<i>I <b>used to</b> live in Paris.</i> (PAS ~~I would live in Paris~~)<br><br>
<b>3. Offres et invitations polies :</b><br>
<i><b>Would</b> you like some coffee?</i> (Voulez-vous du café ?)<br>
<i>I<b>'d like</b> to make a reservation.</i> (Je voudrais faire une réservation.)<br><br>
<b>4. Refus passé :</b><br>
<i>I asked him, but he <b>wouldn't</b> listen.</i> (Il refusait d'écouter.)`,
        rules: [
            '📐 **would** + base verbale → conditionnel : _I **would** help you if I had time._',
            '📐 **would** pour les habitudes passées (actions répétées, PAS les états) : _We **would** go fishing every summer._',
            '📐 **Would you like…?** → offre polie : _**Would** you **like** some tea?_',
            '📐 **I\'d like** (= I would like) → souhait poli : _I**\'d like** to speak to the manager._',
            '📐 **wouldn\'t** → refus dans le passé : _The car **wouldn\'t** start this morning._',
        ],
        examples: [
            { text: "I **would** travel more if I had more money.", fr: "Je voyagerais davantage si j'avais plus d'argent.", correct: true },
            { text: "When we were kids, we **would** spend hours playing outside.", fr: "Quand on était enfants, on passait des heures à jouer dehors.", correct: true },
            { text: "**Would** you like to join us for dinner?", fr: "Voudriez-vous vous joindre à nous pour dîner ?", correct: true },
            { text: "I tried to warn her, but she **wouldn't** listen.", fr: "J'ai essayé de la prévenir, mais elle refusait d'écouter.", correct: true },
            { text: "~~I would live in London when I was young.~~ → I **used to** live in London when I was young.", fr: "J'habitais à Londres quand j'étais jeune.", correct: false, note: "'Would' ne s'utilise pas pour les états passés (live, be, have). Utilisez 'used to'." },
            { text: "~~Would you like go to the cinema?~~ → Would you like **to go** to the cinema?", fr: "Voudriez-vous aller au cinéma ?", correct: false, note: "Après 'would like', on utilise 'to' + infinitif." },
        ],
        tips: [
            "🇫🇷 **would** = conditionnel français dans la plupart des cas. « Je voudrais » = I **would** like.",
            "🇫🇷 Pour les habitudes passées, **would** = « on faisait » (imparfait d'habitude). Mais uniquement pour les ACTIONS, pas les états !",
            "🇫🇷 Piège : « J'habitais à Paris » (état) = I **used to** live in Paris. PAS ~~I would live~~.",
            "🇫🇷 Au TOEIC, « Would you like… » et « I'd like to… » sont omniprésents dans les situations de service client.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "___ you like a cup of coffee?", answer: "Would", options: ["Would", "Will", "Could", "Should"], hint: "Offre polie → « Voudriez-vous… ? »" },
            { type: 'fill', difficulty: 'easy', question: "I ___ love to visit Japan someday.", answer: "would", options: ["would", "will", "could", "should"], hint: "Souhait → conditionnel." },
            { type: 'fill', difficulty: 'easy', question: "If it rained, I ___ stay home.", answer: "would", options: ["would", "will", "could", "should"], hint: "Conditionnel dans une phrase hypothétique." },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "When I was a student, I ___ study at the library every evening.", answer: "would", options: ["would", "will", "used to", "could"], hint: "Habitude passée (action répétée)." },
            { type: 'fill', difficulty: 'medium', question: "I'd ___ to make a reservation for two, please.", answer: "like", options: ["like", "love", "want", "prefer"], hint: "I'd like to… = formule de politesse standard." },
            { type: 'fill', difficulty: 'medium', question: "I asked for a refund, but the store ___ give me one.", answer: "wouldn't", options: ["wouldn't", "won't", "didn't", "can't"], hint: "Refus dans le passé." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "If the company had invested in R&D, it ___ have been more competitive.", answer: "would", options: ["would", "will", "could", "should"], hint: "Conditionnel passé dans une hypothèse irréelle." },
            { type: 'fill', difficulty: 'hard', question: "My grandmother ___ always bake cookies when we visited her.", answer: "would", options: ["would", "will", "used to", "could"], hint: "Habitude passée (action, pas état) avec 'always'." },
            { type: 'fill', difficulty: 'hard', question: "I ___ appreciate it if you could forward the report by tomorrow.", answer: "would", options: ["would", "will", "should", "could"], hint: "Formulation polie et formelle dans un e-mail professionnel." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "I ___ like to schedule a meeting with the director.", answer: "would", options: ["would", "will", "should", "could"] },
            { type: 'fill', difficulty: 'hard', question: "Every summer, we ___ go to the seaside. Those were great times.", answer: "would", options: ["would", "will", "should", "used to"] },
            { type: 'fill', difficulty: 'hard', question: "The printer ___ work this morning. We had to call a technician.", answer: "wouldn't", options: ["wouldn't", "won't", "didn't", "couldn't"] },
            { type: 'fill', difficulty: 'hard', question: "If I had been informed earlier, I ___ have handled the situation differently.", answer: "would", options: ["would", "will", "should", "could"] },
        ],
    },

    37: {
        id: 37,
        title: 'can/could/would you …? (requests, offers, permission)',
        category: 'modals',
        explanation: `🇫🇷 <b>can/could/would you…? — demandes, offres et permission</b><br><br>
En anglais, le choix du modal dans une question détermine le <b>niveau de politesse</b>. C'est similaire au français où « tu peux… ? » est moins formel que « pourriez-vous… ? ».<br><br>
<b>Échelle de politesse pour les demandes :</b><br>
<i><b>Can</b> you help me?</i> → informel, direct<br>
<i><b>Could</b> you help me?</i> → plus poli<br>
<i><b>Would</b> you mind helping me?</i> → très poli<br><br>
<b>Demander la permission :</b><br>
<i><b>Can</b> I use your phone?</i> → informel<br>
<i><b>Could</b> I use your phone?</i> → plus poli<br>
<i><b>May</b> I use your phone?</i> → formel, très poli<br>
<i>Do you <b>mind</b> if I use your phone?</i> → très poli<br><br>
<b>Offres :</b><br>
<i><b>Can</b> I help you?</i> → courant<br>
<i><b>Shall</b> I open the window?</i> → offre (britannique)<br>
<i><b>Would</b> you like me to help?</i> → poli<br><br>
⚠️ Attention à <b>Would you mind…?</b> + -ing : la réponse « non » est positive !<br>
<i>Would you mind closing the door?</i> → <i>No, not at all.</i> (= Bien sûr, je ferme.)`,
        rules: [
            '📐 Échelle de politesse pour les **demandes** : **Can** (informel) < **Could** (poli) < **Would you mind** + -ing (très poli)',
            '📐 Échelle de politesse pour la **permission** : **Can I** (informel) < **Could I** (poli) < **May I** (formel)',
            '📐 **Would you mind** + **-ing** → demande très polie : _Would you mind **opening** the window?_',
            '📐 **Do you mind if I** + présent → permission polie : _Do you mind if I **sit** here?_',
            '📐 Réponse à « Would you mind…? » : **No, not at all** / **Of course not** = oui, allez-y (réponse positive malgré le « no »)',
        ],
        examples: [
            { text: "**Could** you send me the report by Friday?", fr: "Pourriez-vous m'envoyer le rapport d'ici vendredi ?", correct: true },
            { text: "**Would** you mind waiting a few minutes?", fr: "Cela vous dérangerait d'attendre quelques minutes ?", correct: true },
            { text: "**May** I ask you a question?", fr: "Puis-je vous poser une question ?", correct: true },
            { text: "**Can** I borrow your pen? — Sure, here you go.", fr: "Je peux emprunter ton stylo ? — Bien sûr, tiens.", correct: true },
            { text: "~~Would you mind to close the door?~~ → Would you mind **closing** the door?", fr: "Ça vous dérangerait de fermer la porte ?", correct: false, note: "Après 'would you mind', on utilise le gérondif (-ing), pas 'to'." },
            { text: "~~Can you to help me?~~ → **Can** you **help** me?", fr: "Tu peux m'aider ?", correct: false, note: "Après 'can', pas de 'to'. Base verbale directement." },
        ],
        tips: [
            "🇫🇷 « Pourriez-vous… ? » = **Could you…?**. « Vous serait-il possible de… ? » = **Would you mind…?**. Plus le modal est « indirect », plus c'est poli.",
            "🇫🇷 Piège : à « Would you mind…? », on répond **No** pour dire oui ! « No, not at all » = non, ça ne me dérange pas = bien sûr.",
            "🇫🇷 « Puis-je… ? » = **May I…?** C'est la forme la plus formelle pour demander la permission, comme en français soutenu.",
            "🇫🇷 Au TOEIC, les conversations de la partie 2 et 3 testent souvent la compréhension des niveaux de politesse et des formules de demandes.",
        ],
        exercises: [
            // EASY (3)
            { type: 'fill', difficulty: 'easy', question: "___ you pass me the salt, please?", answer: "Can", options: ["Can", "Must", "Should", "Shall"], hint: "Demande informelle et simple." },
            { type: 'fill', difficulty: 'easy', question: "___ I sit here? — Of course!", answer: "Can", options: ["Can", "Must", "Should", "Will"], hint: "Demander la permission de façon informelle." },
            { type: 'fill', difficulty: 'easy', question: "___ you like something to drink?", answer: "Would", options: ["Would", "Will", "Should", "Must"], hint: "Offre polie → « Voudriez-vous… ? »" },
            // MEDIUM (3)
            { type: 'fill', difficulty: 'medium', question: "___ you mind opening the window? It's hot in here.", answer: "Would", options: ["Would", "Will", "Should", "Must"], hint: "Demande très polie → Would you mind + -ing." },
            { type: 'fill', difficulty: 'medium', question: "___ I leave early today? I have a doctor's appointment.", answer: "Could", options: ["Could", "Would", "Should", "Must"], hint: "Permission polie (plus formel que 'can')." },
            { type: 'fill', difficulty: 'medium', question: "Would you mind ___ the music down? I'm trying to concentrate.", answer: "turning", options: ["turning", "to turn", "turn", "turned"], hint: "Après 'would you mind' → gérondif (-ing)." },
            // HARD (3)
            { type: 'fill', difficulty: 'hard', question: "___ I have a word with you in private, please?", answer: "May", options: ["May", "Must", "Should", "Will"], hint: "Permission très formelle dans un contexte professionnel." },
            { type: 'fill', difficulty: 'hard', question: "Do you mind if I ___ this call? It's urgent.", answer: "take", options: ["take", "taking", "took", "to take"], hint: "Après 'Do you mind if I' → présent simple." },
            { type: 'fill', difficulty: 'hard', question: "___ it be possible to reschedule the meeting to next week?", answer: "Would", options: ["Would", "Will", "Could", "Must"], hint: "Demande très formelle et polie dans un contexte professionnel." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "___ you tell me where the nearest station is?", answer: "Could", options: ["Could", "Must", "Should", "Will"] },
            { type: 'fill', difficulty: 'hard', question: "Would you mind ___ me your notes from the meeting?", answer: "lending", options: ["lending", "to lend", "lend", "lent"] },
            { type: 'fill', difficulty: 'hard', question: "___ I make a suggestion? I think we should reconsider the timeline.", answer: "May", options: ["May", "Must", "Should", "Will"] },
            { type: 'fill', difficulty: 'hard', question: "Do you mind if I ___ a few minutes late tomorrow?", answer: "arrive", options: ["arrive", "arriving", "arrived", "to arrive"] },
        ],
    },
};
