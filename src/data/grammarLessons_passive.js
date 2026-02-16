export const grammarLessonsPassive = {
    // ===== UNIT 42 — Passive (1) — is done / was done =====
    42: {
        id: 42,
        title: 'Passive (1) — is done / was done',
        category: 'passive',
        explanation: `🇫🇷 <b>Le passif : formation de base (present simple & past simple)</b><br><br>
<b>Qu'est-ce que le passif ?</b><br>
À la voix active, le sujet fait l'action : <i>"The manager <b>signed</b> the contract."</i><br>
À la voix passive, le sujet subit l'action : <i>"The contract <b>was signed</b> (by the manager)."</i><br><br>
<b>Formation :</b> <b>be + participe passé</b> (past participle)<br><br>
<b>1. Present simple passive : am/is/are + PP</b><br>
<i>"English <b>is spoken</b> in many countries."</i> → L'anglais est parlé dans beaucoup de pays.<br>
<i>"These computers <b>are made</b> in Japan."</i> → Ces ordinateurs sont fabriqués au Japon.<br><br>
<b>2. Past simple passive : was/were + PP</b><br>
<i>"The letter <b>was sent</b> yesterday."</i> → La lettre a été envoyée hier.<br>
<i>"The windows <b>were broken</b> during the storm."</i> → Les fenêtres ont été cassées pendant la tempête.<br><br>
🔑 <b>Point clé :</b> L'anglais utilise le passif <b>beaucoup plus souvent</b> que le français. En français, on préfère "on" (<i>"On parle anglais ici"</i>), tandis qu'en anglais, on dit <i>"English is spoken here"</i>.`,
        rules: [
            '📐 **Passif = be + participe passé (PP)**',
            '📐 **Present simple passive** : _am/is/are_ + PP → _The report **is written** every month._',
            '📐 **Past simple passive** : _was/were_ + PP → _The report **was written** last week._',
            '📐 L\'agent (celui qui fait l\'action) est introduit par **by** : _The cake was made **by** my mother._',
            '📐 On omet **by** quand l\'agent est inconnu, évident ou sans importance : _My car **was stolen**._ (on ne sait pas par qui)'
        ],
        examples: [
            { text: "English **is spoken** in over 50 countries.", fr: "L'anglais est parlé dans plus de 50 pays.", correct: true },
            { text: "The Eiffel Tower **was built** in 1889.", fr: "La tour Eiffel a été construite en 1889.", correct: true },
            { text: "These products **are manufactured** in Germany.", fr: "Ces produits sont fabriqués en Allemagne.", correct: true },
            { text: "The documents **were signed** by the CEO.", fr: "Les documents ont été signés par le PDG.", correct: true },
            { text: "~~The letter was send yesterday~~ → **The letter was sent yesterday.**", fr: "La lettre a été envoyée hier.", correct: false, note: "'Send' est la base verbale. Le participe passé est 'sent' (verbe irrégulier)." },
            { text: "~~English is speak here~~ → **English is spoken here.**", fr: "On parle anglais ici.", correct: false, note: "Il faut le participe passé 'spoken', pas la base verbale 'speak'." },
        ],
        tips: [
            "🇫🇷 En français, on utilise souvent 'on' là où l'anglais utilise le passif : 'On parle français ici' → 'French is spoken here' (PAS 'People speak French here', même si c'est possible).",
            "🇫🇷 Le passif anglais se forme comme en français (être + participe passé), mais l'anglais l'utilise beaucoup plus souvent, surtout dans les contextes professionnels et au TOEIC.",
            "🇫🇷 Attention aux participes passés irréguliers ! Ex : do → done, write → written, speak → spoken, make → made, send → sent."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "English ___ in Australia. (speak)", answer: "is spoken", options: ["is spoken", "speaks", "is speaking", "spoken"], hint: "Passif présent : is/are + PP" },
            { type: 'fill', difficulty: 'easy', question: "The email ___ yesterday. (send)", answer: "was sent", options: ["was sent", "was send", "sent", "is sent"], hint: "Passif passé : was/were + PP. 'Send → sent' (irrégulier)." },
            { type: 'fill', difficulty: 'easy', question: "These cars ___ in Japan. (make)", answer: "are made", options: ["are made", "is made", "were make", "made"], hint: "Sujet pluriel → are + PP. 'Make → made'." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "The new policy ___ by the board last Monday. (approve)", answer: "was approved", options: ["was approved", "approved", "is approved", "were approved"], hint: "Action passée ('last Monday') + sujet singulier → was + PP" },
            { type: 'fill', difficulty: 'medium', question: "Thousands of products ___ from this factory every year. (export)", answer: "are exported", options: ["are exported", "is exported", "export", "were exported"], hint: "Habitude présente ('every year') + sujet pluriel → are + PP" },
            { type: 'fill', difficulty: 'medium', question: "The meeting room ___ for the conference right now. — Wait, that's present continuous, not simple! Actually: The report ___ by the team every Friday. (prepare)", answer: "is prepared", options: ["is prepared", "are prepared", "was prepared", "prepares"], hint: "Action régulière au présent + sujet singulier → is + PP" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "Over 500 employees ___ during the restructuring last year. (lay off)", answer: "were laid off", options: ["were laid off", "was laid off", "laid off", "are laid off"], hint: "Passé + sujet pluriel. 'Lay off → laid off' (licencier)." },
            { type: 'fill', difficulty: 'hard', question: "All complaints ___ within 48 hours according to company policy. (handle)", answer: "are handled", options: ["are handled", "is handled", "were handled", "handle"], hint: "Politique actuelle → present passive. Sujet pluriel → are + PP" },
            { type: 'fill', difficulty: 'hard', question: "The suspect ___ near the crime scene at 11 p.m. (arrest)", answer: "was arrested", options: ["was arrested", "is arrested", "arrested", "were arrested"], hint: "Passé ('at 11 p.m.') + sujet singulier → was + PP" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "The report ___ to the director every Monday. (submit)", answer: "is submitted", options: ["is submitted", "submits", "was submitted", "are submitted"] },
            { type: 'fill', difficulty: 'hard', question: "The old factory ___ down in 2019 and a new one ___ the following year. (tear / build)", answer: "was torn, was built", options: ["was torn, was built", "tore, built", "was teared, was builded", "were torn, were built"] },
            { type: 'fill', difficulty: 'hard', question: "More than 10,000 units ___ to customers worldwide last quarter. (ship)", answer: "were shipped", options: ["were shipped", "was shipped", "shipped", "are shipped"] },
            { type: 'fill', difficulty: 'hard', question: "This software ___ by millions of people around the world every day. (use)", answer: "is used", options: ["is used", "are used", "was used", "uses"] },
        ]
    },

    // ===== UNIT 43 — Passive (2) — be/been/being done =====
    43: {
        id: 43,
        title: 'Passive (2) — be/been/being done',
        category: 'passive',
        explanation: `🇫🇷 <b>Le passif : formes continues et perfect</b><br><br>
Cette leçon couvre les formes passives plus complexes :<br><br>
<b>1. Present continuous passive : am/is/are + being + PP</b><br>
Action en cours, subie par le sujet.<br>
<i>"The road <b>is being repaired</b>."</i> → La route est en train d'être réparée.<br><br>
<b>2. Past continuous passive : was/were + being + PP</b><br>
Action en cours dans le passé.<br>
<i>"The house <b>was being painted</b> when I arrived."</i> → La maison était en train d'être peinte quand je suis arrivé.<br><br>
<b>3. Present perfect passive : have/has + been + PP</b><br>
Action accomplie avec lien au présent.<br>
<i>"The report <b>has been finished</b>."</i> → Le rapport a été terminé.<br><br>
<b>4. Past perfect passive : had + been + PP</b><br>
Action accomplie avant un autre événement passé.<br>
<i>"The car <b>had been stolen</b> before the police arrived."</i> → La voiture avait été volée avant l'arrivée de la police.<br><br>
🔑 <b>Astuce :</b> Pour former le passif, prenez la forme active de "be" au temps voulu, puis ajoutez le PP. Pour le continu, insérez "being" avant le PP.`,
        rules: [
            '📐 **Present continuous passive** : am/is/are + _being_ + PP → _The bridge **is being built**._',
            '📐 **Past continuous passive** : was/were + _being_ + PP → _The car **was being repaired**._',
            '📐 **Present perfect passive** : have/has + _been_ + PP → _The email **has been sent**._',
            '📐 **Past perfect passive** : had + _been_ + PP → _The decision **had been made** before the meeting._',
            '📐 Formule : prendre le temps actif de **be**, puis ajouter le **PP**. Continu = insérer **being**. Perfect = insérer **been**.'
        ],
        examples: [
            { text: "The new office **is being built** downtown.", fr: "Le nouveau bureau est en train d'être construit en centre-ville.", correct: true },
            { text: "The report **has been completed** ahead of schedule.", fr: "Le rapport a été terminé en avance.", correct: true },
            { text: "The data **was being analyzed** when the system crashed.", fr: "Les données étaient en train d'être analysées quand le système a planté.", correct: true },
            { text: "All the arrangements **had been made** before the guests arrived.", fr: "Tous les préparatifs avaient été faits avant l'arrivée des invités.", correct: true },
            { text: "~~The road is been repaired~~ → **The road is being repaired.**", fr: "La route est en train d'être réparée.", correct: false, note: "Pour le passif continu, c'est 'being' (pas 'been'). 'Been' c'est pour le perfect." },
            { text: "~~The email has being sent~~ → **The email has been sent.**", fr: "L'email a été envoyé.", correct: false, note: "Pour le present perfect passif, c'est 'has/have been' (pas 'has being')." },
        ],
        tips: [
            "🇫🇷 'Is being done' = 'est en train d'être fait' — cette construction existe en français mais elle est lourde, donc le français préfère souvent la voix active. En anglais, c'est très courant.",
            "🇫🇷 Confusion classique : 'being' (continu) vs 'been' (perfect). Retenez : 'is being built' (en ce moment) vs 'has been built' (c'est fait).",
            "🇫🇷 Au TOEIC, les formes 'has been + PP' et 'is being + PP' sont testées très fréquemment dans la partie grammaire."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "The new hospital ___ right now. (build — present continuous passive)", answer: "is being built", options: ["is being built", "is built", "has been built", "was built"], hint: "Action en cours → is/are + being + PP" },
            { type: 'fill', difficulty: 'easy', question: "The documents ___ already ___. (sign — present perfect passive)", answer: "have, been signed", options: ["have, been signed", "are, being signed", "were, signed", "had, been signed"], hint: "Déjà fait (already) → present perfect → have/has + been + PP" },
            { type: 'fill', difficulty: 'easy', question: "The house ___ when we drove past. (paint — past continuous passive)", answer: "was being painted", options: ["was being painted", "was painted", "has been painted", "is being painted"], hint: "Action en cours dans le passé → was/were + being + PP" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "Several changes ___ to the contract since last week. (make — present perfect passive)", answer: "have been made", options: ["have been made", "are being made", "were made", "had been made"], hint: "'Since last week' → present perfect → have/has + been + PP" },
            { type: 'fill', difficulty: 'medium', question: "The server ___ when the power went out. (update — past continuous passive)", answer: "was being updated", options: ["was being updated", "was updated", "has been updated", "is being updated"], hint: "Action en cours interrompue dans le passé → was + being + PP" },
            { type: 'fill', difficulty: 'medium', question: "By the time we arrived, all tickets ___. (sell — past perfect passive)", answer: "had been sold", options: ["had been sold", "have been sold", "were sold", "were being sold"], hint: "'By the time + past' → past perfect → had + been + PP" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "A new marketing strategy ___ at the moment, and results ___ by next month. (develop / expect — continuous + perfect)", answer: "is being developed, are expected", options: ["is being developed, are expected", "has been developed, were expected", "is developed, are being expected", "was being developed, have been expected"], hint: "En cours maintenant → is being + PP. Résultats attendus (habitude) → present simple passive." },
            { type: 'fill', difficulty: 'hard', question: "The suspect ___ for three hours before he finally confessed. (interrogate — past continuous passive)", answer: "had been being interrogated", options: ["had been being interrogated", "was being interrogated", "had been interrogated", "has been interrogated"], hint: "Action continue AVANT un événement passé. Forme rare mais correcte : had been being + PP. Acceptons aussi 'was being interrogated'." },
            { type: 'fill', difficulty: 'hard', question: "The budget for next year ___ not yet ___. Several departments are still submitting their proposals. (finalize — present perfect passive)", answer: "has, been finalized", options: ["has, been finalized", "is, being finalized", "was, finalized", "had, been finalized"], hint: "'Not yet' → present perfect → has/have + been + PP" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "Three new employees ___ since January. (hire — present perfect passive)", answer: "have been hired", options: ["have been hired", "are being hired", "were hired", "had been hired"] },
            { type: 'fill', difficulty: 'hard', question: "The warehouse ___ at the time of the inspection. (renovate — past continuous passive)", answer: "was being renovated", options: ["was being renovated", "was renovated", "has been renovated", "had been renovated"] },
            { type: 'fill', difficulty: 'hard', question: "All safety procedures ___ before the factory reopened. (review — past perfect passive)", answer: "had been reviewed", options: ["had been reviewed", "have been reviewed", "were reviewed", "are being reviewed"] },
            { type: 'fill', difficulty: 'hard', question: "The software ___ currently ___ to fix the security vulnerability. (update — present continuous passive)", answer: "is, being updated", options: ["is, being updated", "has, been updated", "was, being updated", "is, updated"] },
        ]
    },

    // ===== UNIT 44 — Passive (3) =====
    44: {
        id: 44,
        title: 'Passive (3)',
        category: 'passive',
        explanation: `🇫🇷 <b>Le passif : modaux, "get" passif et complément d'agent</b><br><br>
<b>1. Passif avec les modaux</b><br>
Structure : <b>modal + be + PP</b><br>
<i>"It <b>must be done</b> today."</i> → Ça doit être fait aujourd'hui.<br>
<i>"The error <b>should have been reported</b>."</i> → L'erreur aurait dû être signalée.<br>
<i>"The package <b>might be delivered</b> tomorrow."</i> → Le colis pourrait être livré demain.<br><br>
<b>2. Le "get" passif (informel)</b><br>
On peut remplacer <b>be</b> par <b>get</b> dans un style familier, surtout pour des événements négatifs ou soudains.<br>
<i>"She <b>got fired</b>."</i> = Elle s'est fait virer. (informel)<br>
<i>"He <b>got promoted</b>."</i> = Il a été promu.<br><br>
<b>3. Complément d'agent : by</b><br>
On utilise <b>by</b> pour préciser qui fait l'action (l'agent).<br>
<i>"The book was written <b>by Tolkien</b>."</i><br>
On omet <b>by</b> quand l'agent est inconnu, évident ou sans importance.<br><br>
⚠️ Le "get passif" n'existe PAS en français de la même manière. C'est une tournure <b>informelle</b> très courante en anglais parlé.`,
        rules: [
            '📐 **Modal + be + PP** : _It **can be done**. / It **must be finished**._',
            '📐 **Modal + have been + PP** (passé) : _It **should have been done**. / It **could have been avoided**._',
            '📐 **Get + PP** = passif informel, surtout pour événements soudains/négatifs : _He **got injured**._',
            '📐 **By + agent** : précise qui fait l\'action → _painted **by** Picasso_',
            '📐 On **omet by** quand l\'agent est inconnu ou sans importance : _My wallet **was stolen**._ (par qui ? On ne sait pas.)'
        ],
        examples: [
            { text: "This task **must be completed** by Friday.", fr: "Cette tâche doit être terminée d'ici vendredi.", correct: true },
            { text: "The report **should have been submitted** last week.", fr: "Le rapport aurait dû être soumis la semaine dernière.", correct: true },
            { text: "She **got promoted** to senior manager!", fr: "Elle a été promue directrice senior !", correct: true },
            { text: "The painting was created **by** a famous artist.", fr: "Le tableau a été créé par un artiste célèbre.", correct: true },
            { text: "~~The work must be do today~~ → **The work must be done today.**", fr: "Le travail doit être fait aujourd'hui.", correct: false, note: "Après 'be', il faut le participe passé 'done', pas la base verbale 'do'." },
            { text: "~~She got fire~~ → **She got fired.**", fr: "Elle s'est fait virer.", correct: false, note: "Le 'get' passif utilise aussi le participe passé : get + fired/injured/promoted…" },
        ],
        tips: [
            "🇫🇷 'Get fired' = 'se faire virer', 'get hurt' = 'se blesser', 'get married' = 'se marier'. Le 'get passif' est TRÈS courant en anglais parlé — utilisez-le pour paraître naturel.",
            "🇫🇷 'Should have been done' = 'aurait dû être fait'. C'est la même logique en français, juste avec plus de mots en anglais.",
            "🇫🇷 Au TOEIC, 'by + agent' est souvent testé. Rappelez-vous : by + personne/chose qui fait l'action, PAS 'by + date' (qui signifie 'avant')."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "The room ___ before the meeting. (must / clean)", answer: "must be cleaned", options: ["must be cleaned", "must clean", "must cleaned", "must been cleaned"], hint: "Modal + be + PP" },
            { type: 'fill', difficulty: 'easy', question: "He ___ during the football match. (get / injure)", answer: "got injured", options: ["got injured", "get injured", "got injure", "was got injured"], hint: "Get passif au passé : got + PP" },
            { type: 'fill', difficulty: 'easy', question: "This song was sung ___ Adele.", answer: "by", options: ["by", "from", "with", "of"], hint: "L'agent est introduit par 'by'" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "The error ___ earlier, but nobody noticed. (should / report)", answer: "should have been reported", options: ["should have been reported", "should be reported", "should report", "should been reported"], hint: "Reproche au passé : modal + have been + PP" },
            { type: 'fill', difficulty: 'medium', question: "The package ___ by tomorrow afternoon. (might / deliver)", answer: "might be delivered", options: ["might be delivered", "might deliver", "might been delivered", "might being delivered"], hint: "Possibilité future : modal + be + PP" },
            { type: 'fill', difficulty: 'medium', question: "Two employees ___ last month due to budget cuts. (get / lay off)", answer: "got laid off", options: ["got laid off", "get laid off", "got lay off", "were got laid off"], hint: "Get passif au passé : got + PP. 'Lay off' → 'laid off'." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "The defective products ___ from the shelves immediately. They ___ days ago. (must / remove — should / recall)", answer: "must be removed, should have been recalled", options: ["must be removed, should have been recalled", "must remove, should recall", "must be removed, should be recalled", "must been removed, should been recalled"], hint: "Obligation présente (must + be + PP) puis reproche passé (should + have been + PP)" },
            { type: 'fill', difficulty: 'hard', question: "The results ___ by an independent agency before they ___ to the public. (could / verify — can / release)", answer: "could be verified, can be released", options: ["could be verified, can be released", "could verify, can release", "could been verified, can been released", "could be verified, can released"], hint: "Deux modaux différents + passif : modal + be + PP" },
            { type: 'fill', difficulty: 'hard', question: "If you aren't careful, you ___ . (might / get / scam)", answer: "might get scammed", options: ["might get scammed", "might be get scammed", "might got scammed", "might getting scammed"], hint: "Modal + get passif : might + get + PP" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "All passengers ___ to fasten their seatbelts. (ask — present simple passive)", answer: "are asked", options: ["are asked", "asked", "are asking", "have asked"] },
            { type: 'fill', difficulty: 'hard', question: "The contract ___ before the deadline, but it wasn't. (should / sign)", answer: "should have been signed", options: ["should have been signed", "should be signed", "should sign", "should been signed"] },
            { type: 'fill', difficulty: 'hard', question: "Two staff members ___ after the company merger. (get / transfer)", answer: "got transferred", options: ["got transferred", "get transferred", "got transfer", "were getting transferred"] },
            { type: 'fill', difficulty: 'hard', question: "This decision ___ without consulting the entire team. (not / should / make)", answer: "should not have been made", options: ["should not have been made", "should not be made", "should not make", "should not been made"] },
        ]
    },

    // ===== UNIT 45 — It is said that … He is said to … He is supposed to … =====
    45: {
        id: 45,
        title: 'It is said that … He is said to … He is supposed to …',
        category: 'passive',
        explanation: `🇫🇷 <b>Le passif impersonnel et "be supposed to"</b><br><br>
<b>1. Le passif impersonnel : It is said that… / He is said to…</b><br>
Quand on rapporte ce que "les gens" disent, pensent ou croient, on peut utiliser deux structures :<br><br>
<b>Structure A :</b> <i>"<b>It is said that</b> he is very rich."</i> → On dit qu'il est très riche.<br>
<b>Structure B :</b> <i>"<b>He is said to be</b> very rich."</i> → Il est dit être très riche. (= On dit qu'il est…)<br><br>
Ces structures marchent avec : <b>said, thought, believed, known, reported, expected, considered, alleged</b><br>
<i>"<b>It is believed that</b> the company will expand."</i> = <i>"The company <b>is believed to</b> expand."</i><br><br>
<b>2. Be supposed to</b><br>
<b>a)</b> = Être censé (attente/obligation) : <i>"You <b>are supposed to</b> wear a uniform."</i> → Tu es censé porter un uniforme.<br>
<b>b)</b> = On dit que (réputation) : <i>"This restaurant <b>is supposed to be</b> excellent."</i> → Ce restaurant est censé être excellent (on dit qu'il est excellent).<br>
<b>c)</b> Négatif = interdit : <i>"You <b>are not supposed to</b> park here."</i> → Tu n'es pas censé te garer ici.<br><br>
🔑 <b>En français :</b> "On dit que…" = "It is said that…" ; "être censé" = "be supposed to".`,
        rules: [
            '📐 **It is said/thought/believed that** + proposition → passif impersonnel : _It is said that she is leaving._',
            '📐 **Sujet + is said/thought/believed + to + base** → forme personnelle : _She is said to be leaving._',
            '📐 Pour un fait passé : sujet + is said + **to have + PP** : _He is said **to have stolen** the money._',
            '📐 **Be supposed to** = être censé : _You **are supposed to** arrive on time._',
            '📐 **Not supposed to** = ne pas être censé (interdit) : _You **are not supposed to** use your phone here._'
        ],
        examples: [
            { text: "**It is said that** the CEO will resign next month.", fr: "On dit que le PDG va démissionner le mois prochain.", correct: true },
            { text: "The CEO **is said to be** planning his resignation.", fr: "Le PDG est dit planifier sa démission. (= On dit que le PDG…)", correct: true },
            { text: "You **are supposed to** submit the report by Friday.", fr: "Tu es censé remettre le rapport d'ici vendredi.", correct: true },
            { text: "He **is believed to have left** the country.", fr: "On pense qu'il a quitté le pays.", correct: true },
            { text: "~~It is said that he is left the country~~ → **It is said that he has left the country.**", fr: "On dit qu'il a quitté le pays.", correct: false, note: "Après 'that', on met une proposition complète avec le bon temps : 'has left' (present perfect), pas 'is left'." },
            { text: "~~She is suppose to work today~~ → **She is supposed to work today.**", fr: "Elle est censée travailler aujourd'hui.", correct: false, note: "C'est 'supposed' avec un -d (participe passé), pas 'suppose' (base verbale)." },
        ],
        tips: [
            "🇫🇷 'It is said that…' = 'On dit que…'. C'est la traduction exacte du français 'on' impersonnel. Au TOEIC, cette structure est hyper fréquente.",
            "🇫🇷 'Be supposed to' = 'être censé'. Attention à l'orthographe : 'supposed' avec un -d. C'est l'une des erreurs les plus courantes.",
            "🇫🇷 'He is said to have done' = 'On dit qu'il a fait' — quand le fait rapporté est antérieur au moment où on le rapporte."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "It ___ that the company is in financial trouble. (say)", answer: "is said", options: ["is said", "says", "said", "has said"], hint: "Passif impersonnel : It + is + PP" },
            { type: 'fill', difficulty: 'easy', question: "You ___ to arrive at 9 a.m. sharp. (be supposed)", answer: "are supposed", options: ["are supposed", "are suppose", "supposed", "were supposing"], hint: "Be supposed to = être censé. N'oubliez pas le -d !" },
            { type: 'fill', difficulty: 'easy', question: "The new restaurant ___ to be very good. (be supposed)", answer: "is supposed", options: ["is supposed", "is suppose", "supposed", "supposes"], hint: "On dit que le restaurant est très bon → is supposed to be" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "___ that the senator has resigned. (It / report)", answer: "It is reported", options: ["It is reported", "It reports", "It reported", "It has reported"], hint: "Passif impersonnel avec 'report' : It is reported that…" },
            { type: 'fill', difficulty: 'medium', question: "She ___ to have won a Nobel Prize in the past. (believe)", answer: "is believed", options: ["is believed", "believes", "believed", "has believed"], hint: "Forme personnelle du passif : She is believed + to have + PP" },
            { type: 'fill', difficulty: 'medium', question: "Employees ___ to use their ID cards at all times. (be supposed)", answer: "are supposed", options: ["are supposed", "are suppose", "supposed", "is supposed"], hint: "Sujet pluriel → are supposed to" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "The suspect ___ to ___ the country before the investigation began. (believe / leave)", answer: "is believed, have left", options: ["is believed, have left", "is believed, leave", "believes, have left", "was believed, leaving"], hint: "Fait passé rapporté : is believed + to have + PP (left)" },
            { type: 'fill', difficulty: 'hard', question: "It ___ that over 200 jobs ___ created by the new policy. (expect / will be)", answer: "is expected, will be", options: ["is expected, will be", "expects, will be", "is expected, are", "expected, will be"], hint: "Passif impersonnel + proposition future dans la subordonnée" },
            { type: 'fill', difficulty: 'hard', question: "You ___ to ___ your phone during the exam, but many students do it anyway. (not be supposed / use)", answer: "are not supposed, use", options: ["are not supposed, use", "are not suppose, use", "don't suppose, use", "are not supposed, using"], hint: "Interdit : be not supposed to + base verbale" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "It ___ that the meeting has been postponed. (understand)", answer: "is understood", options: ["is understood", "understands", "understood", "has understood"] },
            { type: 'fill', difficulty: 'hard', question: "The politician ___ to ___ millions in offshore accounts. (allege / hide)", answer: "is alleged, have hidden", options: ["is alleged, have hidden", "is alleged, hide", "alleges, have hidden", "was alleged, hiding"] },
            { type: 'fill', difficulty: 'hard', question: "Visitors ___ to register at the front desk upon arrival. (be supposed)", answer: "are supposed", options: ["are supposed", "are suppose", "supposed", "were supposing"] },
            { type: 'fill', difficulty: 'hard', question: "The number of applicants ___ to ___ doubled since last year. (think / have)", answer: "is thought, have", options: ["is thought, have", "thinks, have", "is thought, has", "thought, have"] },
        ]
    },

    // ===== UNIT 46 — have something done =====
    46: {
        id: 46,
        title: 'have something done',
        category: 'passive',
        explanation: `🇫🇷 <b>La structure causative : have/get something done</b><br><br>
<b>Qu'est-ce que le causatif ?</b><br>
On utilise cette structure quand <b>quelqu'un d'autre fait l'action pour nous</b>. On ne fait pas l'action soi-même — on la fait faire.<br><br>
<b>1. Have + objet + participe passé</b><br>
<i>"I <b>had my hair cut</b>."</i> = Je me suis fait couper les cheveux. (Le coiffeur l'a fait, pas moi.)<br>
<i>"She <b>has her car serviced</b> every year."</i> = Elle fait réviser sa voiture chaque année.<br><br>
<b>2. Get + objet + participe passé</b><br>
Même sens, mais plus informel.<br>
<i>"I <b>got my phone repaired</b>."</i> = J'ai fait réparer mon téléphone.<br>
<i>"You should <b>get your eyes tested</b>."</i> = Tu devrais faire examiner tes yeux.<br><br>
<b>Aux différents temps :</b><br>
• Présent : <i>I <b>have</b> my car <b>washed</b> every week.</i><br>
• Passé : <i>I <b>had</b> my car <b>washed</b> yesterday.</i><br>
• Futur : <i>I'm going to <b>have</b> my car <b>washed</b> tomorrow.</i><br>
• Present perfect : <i>I've just <b>had</b> my car <b>washed</b>.</i><br><br>
⚠️ <b>Pour les expériences négatives (vol, accident…) :</b><br>
<i>"He <b>had his wallet stolen</b>."</i> = Il s'est fait voler son portefeuille. (Il n'a pas demandé, ça lui est arrivé.)`,
        rules: [
            '📐 **Have + objet + PP** = faire faire quelque chose (par quelqu\'un d\'autre) : _I **had my suit dry-cleaned**._',
            '📐 **Get + objet + PP** = même sens, plus informel : _I **got my suit dry-cleaned**._',
            '📐 Le causatif se conjugue à tous les temps via le verbe **have/get** : _I **will have** it done. / I\'m **having** it done._',
            '📐 Pour les **expériences négatives** (subies) : _She **had her bag stolen**._ (= on lui a volé son sac)',
            '📐 Ne PAS confondre : _I **cut** my hair._ (= je l\'ai fait moi-même) ≠ _I **had** my hair **cut**._ (= quelqu\'un l\'a fait pour moi)'
        ],
        examples: [
            { text: "I **had my hair cut** last weekend.", fr: "Je me suis fait couper les cheveux le week-end dernier.", correct: true },
            { text: "You should **get your car serviced** regularly.", fr: "Tu devrais faire réviser ta voiture régulièrement.", correct: true },
            { text: "We're going to **have the house painted** next month.", fr: "On va faire peindre la maison le mois prochain.", correct: true },
            { text: "She **had her phone stolen** on the subway.", fr: "Elle s'est fait voler son téléphone dans le métro.", correct: true },
            { text: "~~I had cut my hair~~ (sens causatif) → **I had my hair cut.**", fr: "Je me suis fait couper les cheveux.", correct: false, note: "'I had cut my hair' = past perfect (je l'avais coupé moi-même). Pour le causatif : have + OBJET + PP." },
            { text: "~~I had my car to repair~~ → **I had my car repaired.**", fr: "J'ai fait réparer ma voiture.", correct: false, note: "Pas de 'to' ! C'est : have + objet + participe passé (sans 'to')." },
        ],
        tips: [
            "🇫🇷 'Have something done' = 'faire + infinitif' en français. 'Je fais réparer ma voiture' = 'I have my car repaired'. La structure est différente mais le sens est le même.",
            "🇫🇷 'Se faire voler/cambrioler' = 'have something stolen/burgled'. En anglais, on utilise la même structure causative pour les expériences négatives subies.",
            "🇫🇷 Au TOEIC, la confusion entre 'I had my car washed' (causatif) et 'I had washed my car' (past perfect) est un piège classique. L'ordre des mots est crucial !"
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "I ___ my hair ___ yesterday. (have / cut — causative past)", answer: "had, cut", options: ["had, cut", "have, cut", "had, cutting", "have, to cut"], hint: "Causatif au passé : had + objet + PP. 'Cut' est le même au PP." },
            { type: 'fill', difficulty: 'easy', question: "You should ___ your eyes ___. (get / test)", answer: "get, tested", options: ["get, tested", "get, test", "got, tested", "get, to test"], hint: "Get causatif : should get + objet + PP" },
            { type: 'fill', difficulty: 'easy', question: "She ___ her dress ___ for the wedding. (have / make — causative past)", answer: "had, made", options: ["had, made", "has, make", "had, make", "have, made"], hint: "Causatif au passé : had + objet + PP. 'Make → made'." },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "We're ___ the office ___ next week. (have / redecorate — causative future)", answer: "having, redecorated", options: ["having, redecorated", "having, redecorate", "going to have, redecorate", "have, redecorated"], hint: "Futur proche : be + having + objet + PP" },
            { type: 'fill', difficulty: 'medium', question: "He ___ his wallet ___ at the train station. (have / steal — negative experience)", answer: "had, stolen", options: ["had, stolen", "has, steal", "got, steal", "had, stole"], hint: "Expérience subie : had + objet + PP. 'Steal → stolen'." },
            { type: 'fill', difficulty: 'medium', question: "I need to ___ this document ___. (get / translate)", answer: "get, translated", options: ["get, translated", "get, translate", "have, to translate", "get, translating"], hint: "Causatif avec 'get' : get + objet + PP" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "She ___ just ___ her kitchen ___ by a professional team. (have / renovate — present perfect causative)", answer: "has, had, renovated", options: ["has, had, renovated", "has, have, renovated", "had, had, renovated", "have, had, renovated"], hint: "Present perfect causatif : has/have + had + objet + PP" },
            { type: 'fill', difficulty: 'hard', question: "By next Friday, we ___ all the computers ___. (will have / replace — future perfect causative)", answer: "will have had, replaced", options: ["will have had, replaced", "will have, replaced", "will had, replaced", "will get, replaced"], hint: "Future perfect causatif : will have had + objet + PP" },
            { type: 'fill', difficulty: 'hard', question: "The manager wants to ___ the financial records ___ by an external auditor before the board meeting. (have / audit)", answer: "have, audited", options: ["have, audited", "have, audit", "get, audit", "has, audited"], hint: "Après 'wants to' : have + objet + PP" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "I ___ my suit ___ before the job interview. (have / dry-clean — past)", answer: "had, dry-cleaned", options: ["had, dry-cleaned", "have, dry-clean", "had, dry-clean", "got, dry-clean"] },
            { type: 'fill', difficulty: 'hard', question: "She ___ her car ___ three times this year already. (have / service — present perfect)", answer: "has had, serviced", options: ["has had, serviced", "had, serviced", "has, serviced", "have had, serviced"] },
            { type: 'fill', difficulty: 'hard', question: "You should ___ that broken window ___ before winter. (get / fix)", answer: "get, fixed", options: ["get, fixed", "get, fix", "got, fixed", "have, to fix"] },
            { type: 'fill', difficulty: 'hard', question: "They ___ their entire IT system ___ after the cyberattack. (have / overhaul — past)", answer: "had, overhauled", options: ["had, overhauled", "have, overhaul", "had, overhaul", "got, to overhaul"] },
        ]
    },
};
