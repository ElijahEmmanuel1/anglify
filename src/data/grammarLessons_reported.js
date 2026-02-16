export const grammarLessonsReported = {
    // ===== UNIT 47 — Reported speech (1) =====
    47: {
        id: 47,
        title: 'Reported speech (1) — He said that...',
        category: 'reported',
        explanation: `🇫🇷 <b>Le discours indirect (1) : rapporter des affirmations</b><br><br>
<b>Qu'est-ce que le discours indirect ?</b><br>
Quand on rapporte les paroles de quelqu'un, on passe du discours direct au discours indirect :<br>
Direct : <i>"I <b>am</b> tired."</i><br>
Indirect : <i>He said (that) he <b>was</b> tired.</i><br><br>
<b>La concordance des temps (tense backshift) :</b><br>
Quand le verbe introducteur est au passé (<b>said, told</b>), les temps reculent d'un cran :<br><br>
<b>1. Present simple → Past simple</b><br>
<i>"I <b>work</b> in Paris."</i> → He said he <b>worked</b> in Paris.<br><br>
<b>2. Present continuous → Past continuous</b><br>
<i>"I <b>am working</b>."</i> → She said she <b>was working</b>.<br><br>
<b>3. Past simple → Past perfect</b><br>
<i>"I <b>bought</b> a car."</i> → He said he <b>had bought</b> a car.<br><br>
<b>4. Will → Would</b><br>
<i>"I <b>will</b> call you."</i> → She said she <b>would</b> call me.<br><br>
<b>5. Can → Could</b><br>
<i>"I <b>can</b> help."</i> → He said he <b>could</b> help.<br><br>
<b>6. Present perfect → Past perfect</b><br>
<i>"I <b>have finished</b>."</i> → She said she <b>had finished</b>.<br><br>
🔑 <b>Say vs Tell :</b><br>
• <b>say</b> + (that) : <i>He <b>said</b> (that) he was tired.</i><br>
• <b>tell</b> + personne + (that) : <i>He <b>told me</b> (that) he was tired.</i><br>
⚠️ JAMAIS <i>"He said me"</i> ni <i>"He told that"</i>.`,
        rules: [
            '📐 **Discours indirect** : verbe introducteur (said/told) + **(that)** + phrase avec temps reculé',
            '📐 **Backshift** : present → past, past → past perfect, _will_ → _would_, _can_ → _could_',
            '📐 **say** : pas de complément → _He **said** (that) he was tired._ (JAMAIS ~~He said me~~)',
            '📐 **tell** : toujours + complément personne → _He **told me** (that) he was tired._ (JAMAIS ~~He told that~~)',
            '📐 Les pronoms et possessifs changent aussi : _"**I** love **my** job"_ → _She said **she** loved **her** job._',
            '📐 Les marqueurs de temps changent : _today → that day, yesterday → the day before, tomorrow → the next day_'
        ],
        examples: [
            { text: "\"I work in London.\" → He **said** (that) he **worked** in London.", fr: "« Je travaille à Londres. » → Il a dit qu'il travaillait à Londres.", correct: true },
            { text: "\"I will send the report.\" → She **told me** she **would** send the report.", fr: "« J'enverrai le rapport. » → Elle m'a dit qu'elle enverrait le rapport.", correct: true },
            { text: "\"I have finished the project.\" → He said he **had finished** the project.", fr: "« J'ai terminé le projet. » → Il a dit qu'il avait terminé le projet.", correct: true },
            { text: "\"I can speak French.\" → She said she **could** speak French.", fr: "« Je sais parler français. » → Elle a dit qu'elle savait parler français.", correct: true },
            { text: "~~He said me that he was tired.~~ → **He told me that he was tired.**", fr: "Il m'a dit qu'il était fatigué.", correct: false, note: "On dit 'He told me' ou 'He said to me', mais JAMAIS 'He said me'." },
            { text: "~~She told that she was leaving.~~ → **She said that she was leaving.**", fr: "Elle a dit qu'elle partait.", correct: false, note: "'Tell' a toujours besoin d'un complément (me, him, us...). Sans complément, utilisez 'say'." },
        ],
        tips: [
            "🇫🇷 Le discours indirect fonctionne pareil qu'en français avec la concordance des temps : « je suis fatigué » → il a dit qu'il était fatigué = present → imparfait. En anglais : am → was.",
            "🇫🇷 Piège classique pour les francophones : 'He said me' ❌ — en anglais, 'say' ne prend pas de COI directement. Dites 'He told me' ou 'He said to me'.",
            "🇫🇷 'That' est souvent omis à l'oral : 'He said he was tired' = 'He said that he was tired'. Au TOEIC, les deux sont corrects.",
            "🇫🇷 Les indicateurs de temps changent aussi : today → that day, here → there, this → that. C'est logique comme en français : « aujourd'hui » → « ce jour-là »."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "\"I am happy.\" → She said she ___ happy.", answer: "was", options: ["was", "is", "has been", "were"], hint: "Present simple → past simple dans le discours indirect." },
            { type: 'fill', difficulty: 'easy', question: "\"I will call you.\" → He told me he ___ call me.", answer: "would", options: ["would", "will", "could", "should"], hint: "Will → would dans le discours indirect." },
            { type: 'fill', difficulty: 'easy', question: "He ___ that he was tired.", answer: "said", options: ["said", "told", "said me", "told to me"], hint: "Pas de complément personne → 'said' (pas 'told')." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "\"I have seen the report.\" → She said she ___ the report.", answer: "had seen", options: ["had seen", "has seen", "saw", "have seen"], hint: "Present perfect → past perfect dans le discours indirect." },
            { type: 'fill', difficulty: 'medium', question: "\"We are leaving tomorrow.\" → They told us they ___ leaving ___.", answer: "were, the next day", options: ["were, the next day", "are, tomorrow", "were, tomorrow", "had been, the day before"], hint: "Present continuous → past continuous. Tomorrow → the next day." },
            { type: 'fill', difficulty: 'medium', question: "\"I bought a new car yesterday.\" → He said he ___ a new car ___.", answer: "had bought, the day before", options: ["had bought, the day before", "bought, yesterday", "had bought, yesterday", "has bought, the day before"], hint: "Past simple → past perfect. Yesterday → the day before." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "\"I can't come to the meeting because I am flying to Tokyo.\" → She ___ us she ___ come to the meeting because she ___ flying to Tokyo.", answer: "told, couldn't, was", options: ["told, couldn't, was", "said, can't, is", "told, can't, was", "said, couldn't, were"], hint: "Tell + complément. Can't → couldn't. Am → was." },
            { type: 'fill', difficulty: 'hard', question: "\"We will have finished by Friday.\" → They said they ___ by Friday.", answer: "would have finished", options: ["would have finished", "will have finished", "had finished", "would finish"], hint: "Will have done → would have done (future perfect → conditionnel passé)." },
            { type: 'fill', difficulty: 'hard', question: "\"I was working when the fire alarm went off.\" → He said he ___ when the fire alarm ___.", answer: "had been working, had gone off", options: ["had been working, had gone off", "was working, went off", "had been working, went off", "has been working, had gone off"], hint: "Past continuous → past perfect continuous. Past simple → past perfect." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "\"I don't like this hotel.\" → She said she ___ like that hotel.", answer: "didn't", options: ["didn't", "doesn't", "hadn't", "won't"] },
            { type: 'fill', difficulty: 'hard', question: "\"I have been waiting for two hours.\" → He ___ me he ___ for two hours.", answer: "told, had been waiting", options: ["told, had been waiting", "said, has been waiting", "told, was waiting", "said me, had been waiting"] },
            { type: 'fill', difficulty: 'hard', question: "\"We may cancel the event.\" → They said they ___ cancel the event.", answer: "might", options: ["might", "may", "could", "would"] },
            { type: 'fill', difficulty: 'hard', question: "\"I must finish this today.\" → She said she ___ finish that ___.", answer: "had to, that day", options: ["had to, that day", "must, today", "had to, today", "must, that day"] },
        ]
    },

    // ===== UNIT 48 — Reported speech (2) =====
    48: {
        id: 48,
        title: 'Reported speech (2) — questions, orders & requests',
        category: 'reported',
        explanation: `🇫🇷 <b>Le discours indirect (2) : questions, ordres et demandes</b><br><br>
<b>1. Rapporter une question (reported questions) :</b><br><br>
<b>a) Questions avec mot interrogatif (wh-) :</b><br>
Direct : <i>"<b>Where</b> do you live?"</i><br>
Indirect : <i>She asked (me) <b>where</b> I <b>lived</b>.</i><br>
⚠️ L'ordre redevient <b>sujet + verbe</b> (pas d'inversion, pas d'auxiliaire do/did) !<br><br>
<b>b) Questions oui/non :</b><br>
Direct : <i>"Do you like coffee?"</i><br>
Indirect : <i>He asked me <b>if / whether</b> I liked coffee.</i><br>
On ajoute <b>if</b> ou <b>whether</b> pour les questions fermées.<br><br>
<b>2. Rapporter un ordre ou une demande :</b><br><br>
<b>a) Ordres (tell + to) :</b><br>
Direct : <i>"Close the door."</i><br>
Indirect : <i>She <b>told me to close</b> the door.</i><br><br>
<b>b) Demandes (ask + to) :</b><br>
Direct : <i>"Could you help me?"</i><br>
Indirect : <i>He <b>asked me to help</b> him.</i><br><br>
<b>c) Ordres négatifs :</b><br>
Direct : <i>"Don't touch that."</i><br>
Indirect : <i>She <b>told me not to touch</b> that.</i><br><br>
🔑 <b>Point clé :</b> Dans les questions rapportées, l'ordre des mots est celui d'une affirmation (sujet + verbe), PAS d'une question.`,
        rules: [
            '📐 **Questions wh- rapportées** : ask + mot interrogatif + **sujet + verbe** → _She asked where I **lived**._ (PAS ~~where did I live~~)',
            '📐 **Questions oui/non rapportées** : ask + **if / whether** + sujet + verbe → _He asked **if** I liked coffee._',
            '📐 **Ordres rapportés** : **tell** + personne + **to** + infinitif → _She **told me to** close the door._',
            '📐 **Demandes rapportées** : **ask** + personne + **to** + infinitif → _He **asked me to** help him._',
            '📐 **Ordres négatifs** : tell + personne + **not to** + infinitif → _She **told me not to** be late._',
            '📐 Pas de point d\'interrogation dans les questions rapportées ! C\'est une affirmation.'
        ],
        examples: [
            { text: "\"Where do you work?\" → She asked me **where I worked**.", fr: "« Où travailles-tu ? » → Elle m'a demandé où je travaillais.", correct: true },
            { text: "\"Do you speak English?\" → He asked **if I spoke** English.", fr: "« Parlez-vous anglais ? » → Il a demandé si je parlais anglais.", correct: true },
            { text: "\"Close the door.\" → She **told me to close** the door.", fr: "« Ferme la porte. » → Elle m'a dit de fermer la porte.", correct: true },
            { text: "\"Could you send the file?\" → He **asked me to send** the file.", fr: "« Pourriez-vous envoyer le fichier ? » → Il m'a demandé d'envoyer le fichier.", correct: true },
            { text: "\"Don't be late.\" → She **told me not to be** late.", fr: "« Ne sois pas en retard. » → Elle m'a dit de ne pas être en retard.", correct: true },
            { text: "~~She asked me where did I live.~~ → **She asked me where I lived.**", fr: "Elle m'a demandé où j'habitais.", correct: false, note: "Pas d'inversion dans les questions rapportées ! L'ordre est sujet + verbe (comme une affirmation)." },
            { text: "~~He told me don't be late.~~ → **He told me not to be late.**", fr: "Il m'a dit de ne pas être en retard.", correct: false, note: "Pour les ordres négatifs rapportés : tell + personne + NOT TO + infinitif." },
        ],
        tips: [
            "🇫🇷 En français, 'Il m'a demandé où j'habitais' — l'ordre des mots est le même qu'en affirmation. C'est pareil en anglais : 'He asked me where I lived' (pas d'inversion) !",
            "🇫🇷 Piège classique : 'Do you know where is she?' ❌ → 'Do you know where she is?' ✓ — même logique que le discours indirect : pas d'inversion après le mot interrogatif.",
            "🇫🇷 'Tell someone to do' = 'dire à quelqu'un de faire' (ordre). 'Ask someone to do' = 'demander à quelqu'un de faire' (demande, plus poli).",
            "🇫🇷 N'oubliez pas : dans les questions rapportées, le point d'interrogation disparaît car ce n'est plus une vraie question."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "\"Where is the station?\" → She asked me where the station ___.", answer: "was", options: ["was", "is", "were", "has been"], hint: "Present → past dans le discours indirect. L'ordre est sujet + verbe." },
            { type: 'fill', difficulty: 'easy', question: "\"Do you like tea?\" → He asked me ___ I liked tea.", answer: "if", options: ["if", "that", "what", "do"], hint: "Question oui/non → on ajoute 'if' ou 'whether'." },
            { type: 'fill', difficulty: 'easy', question: "\"Sit down.\" → The teacher told us ___ sit down.", answer: "to", options: ["to", "that", "for", "should"], hint: "Ordre rapporté : tell + personne + TO + infinitif." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "\"What time does the meeting start?\" → She asked ___ the meeting ___.", answer: "what time, started", options: ["what time, started", "what time, starts", "what time, did start", "that, started"], hint: "Question wh- rapportée : mot interrogatif + sujet + verbe (backshift)." },
            { type: 'fill', difficulty: 'medium', question: "\"Don't open the attachment.\" → The IT manager told us ___ the attachment.", answer: "not to open", options: ["not to open", "to not open", "don't open", "not open"], hint: "Ordre négatif rapporté : tell + personne + NOT TO + infinitif." },
            { type: 'fill', difficulty: 'medium', question: "\"Can you help me with this report?\" → She ___ me ___ her with the report.", answer: "asked, to help", options: ["asked, to help", "told, to help", "asked, helping", "said, to help"], hint: "Demande polie rapportée : ask + personne + to + infinitif." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "\"Why haven't you submitted the application yet?\" → The manager asked him why he ___ the application yet.", answer: "hadn't submitted", options: ["hadn't submitted", "hasn't submitted", "didn't submit", "haven't submitted"], hint: "Present perfect → past perfect. L'ordre est sujet + verbe (pas d'inversion)." },
            { type: 'fill', difficulty: 'hard', question: "\"Will you be attending the conference, or would you prefer to join online?\" → She asked me ___ I ___ attending the conference or ___ I ___ prefer to join online.", answer: "whether, would be, whether, would", options: ["whether, would be, whether, would", "if, will be, if, would", "that, would be, that, would", "whether, was, whether, did"], hint: "Will → would. Question alternative → whether...or..." },
            { type: 'fill', difficulty: 'hard', question: "\"Please don't mention this to anyone and keep it confidential.\" → She asked us ___ it to anyone and ___ it confidential.", answer: "not to mention, to keep", options: ["not to mention, to keep", "to not mention, to keep", "don't mention, keep", "not mentioning, keeping"], hint: "Demande polie rapportée : ask + not to + V et ask + to + V." },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "\"How long have you worked here?\" → She asked me how long I ___ there.", answer: "had worked", options: ["had worked", "have worked", "worked", "was working"] },
            { type: 'fill', difficulty: 'hard', question: "\"Are you coming to the party?\" → He asked me ___ I ___ to the party.", answer: "if, was coming", options: ["if, was coming", "that, was coming", "if, am coming", "whether, come"] },
            { type: 'fill', difficulty: 'hard', question: "\"Don't use your phone during the presentation.\" → The speaker told the audience ___ their phones during the presentation.", answer: "not to use", options: ["not to use", "to not use", "don't use", "not using"] },
            { type: 'fill', difficulty: 'hard', question: "\"Could you tell me where the nearest bank is?\" → She asked me ___ her where the nearest bank ___.", answer: "to tell, was", options: ["to tell, was", "to tell, is", "telling, was", "if I could tell, was"] },
        ]
    },
};
