// ============================================
// Grammar Lessons — Conjunctions & Prepositions (Units 116–130)
// French explanations for francophone learners
// Based on Raymond Murphy's "English Grammar in Use"
// ============================================

export const grammarLessonsConjPrep = {

    // ─────────────────────────────────────────────
    // UNIT 116 — Conjunctions (1) — and, but, or, so, because
    // ─────────────────────────────────────────────
    116: {
        id: 116,
        title: 'Conjunctions (1) — and, but, or, so, because',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Les conjonctions de coordination : and, but, or, so, because</b><br><br>
Les conjonctions relient des mots, des groupes de mots ou des propositions.<br><br>
<b>and</b> = et → ajoute une information : <i>"I bought a laptop <b>and</b> a printer."</i><br>
<b>but</b> = mais → oppose : <i>"The hotel was expensive <b>but</b> comfortable."</i><br>
<b>or</b> = ou → donne un choix : <i>"Would you like tea <b>or</b> coffee?"</i><br>
<b>so</b> = donc / alors → conséquence : <i>"It was raining, <b>so</b> we cancelled the meeting."</i><br>
<b>because</b> = parce que → cause : <i>"We cancelled the meeting <b>because</b> it was raining."</i><br><br>
⚠️ <b>Piège :</b> Ne confondez pas <b>so</b> (conséquence) et <b>because</b> (cause) :<br>
• <i>"I was tired, <b>so</b> I went to bed."</i> (→ conséquence)<br>
• <i>"I went to bed <b>because</b> I was tired."</i> (→ cause)`,
        rules: [
            '📐 **and** = et → relie des éléments similaires : _She speaks French **and** English._',
            '📐 **but** = mais → introduit une opposition : _The report is long **but** interesting._',
            '📐 **or** = ou → offre un choix ou une alternative : _You can call **or** email us._',
            '📐 **so** = donc → exprime la **conséquence** : _The flight was delayed, **so** we arrived late._',
            '📐 **because** = parce que → exprime la **cause** : _We arrived late **because** the flight was delayed._',
            '🔴 ~~Because it was raining, so we stayed inside.~~ → Choisir l\'un OU l\'autre, pas les deux !',
            '🔴 ~~I like coffee and tea too~~ → _I like **both** coffee **and** tea_ (structure parallèle)'
        ],
        examples: [
            { text: "The presentation was clear **and** well-structured.", fr: "La présentation était claire et bien structurée.", correct: true },
            { text: "I sent the email, **but** I haven't received a reply yet.", fr: "J'ai envoyé l'e-mail, mais je n'ai pas encore reçu de réponse.", correct: true },
            { text: "We need to hire more staff **because** the workload has increased.", fr: "Nous devons embaucher plus de personnel parce que la charge de travail a augmenté.", correct: true },
            { text: "The deadline is tomorrow, **so** we need to finish tonight.", fr: "La date limite est demain, donc nous devons finir ce soir.", correct: true },
            { text: "~~Because it was urgent, so I called immediately.~~ → **Because** it was urgent, I called immediately. / It was urgent, **so** I called immediately.", fr: "On ne combine pas because et so.", correct: false, note: "Erreur fréquente : ne jamais utiliser 'because' et 'so' ensemble." }
        ],
        tips: [
            "🇫🇷 En français, on dit parfois « parce que… donc… » à l'oral. En anglais, c'est INTERDIT : choisissez because (cause) OU so (conséquence), jamais les deux.",
            "⚠️ Au TOEIC, on teste souvent le choix entre 'so' et 'because'. Demandez-vous : est-ce que la phrase exprime la CAUSE ou la CONSÉQUENCE ?",
            "💡 Astuce TOEIC : 'and' relie des éléments de même nature (nom + nom, adjectif + adjectif). Vérifiez la structure parallèle !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The office was closed, _____ we went home.', answer: "so", options: ["so", "because", "but", "and"], hint: "On exprime la conséquence (= donc)." },
            { type: 'fill', difficulty: 'easy', question: 'Would you like to pay by card _____ cash?', answer: "or", options: ["or", "and", "but", "so"], hint: "On propose un choix entre deux options." },
            { type: 'fill', difficulty: 'easy', question: 'The meeting was long _____ boring.', answer: "and", options: ["and", "but", "or", "so"], hint: "On ajoute une information similaire." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I stayed late because I had to finish the report.", options: ["I stayed late because I had to finish the report.", "Because I had to finish the report, so I stayed late.", "I stayed late because so I had to finish the report."] },
            { type: 'fill', difficulty: 'medium', question: 'She applied for the job _____ she didn\'t have much experience.', answer: "but", options: ["but", "and", "so", "because"], hint: "Il y a une opposition entre postuler et ne pas avoir d'expérience." },
            { type: 'fill', difficulty: 'medium', question: 'The manager was busy, _____ he asked his assistant to handle the call.', answer: "so", options: ["so", "because", "but", "or"], hint: "Demander à l'assistant est la conséquence d'être occupé." },
            { type: 'fill', difficulty: 'hard', question: 'The product is popular _____ it is affordable _____ high quality.', answer: "because, and", options: ["because, and", "so, but", "and, because", "but, or"], hint: "Cause + deux raisons liées." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Because the train was late, so we missed the connection.", options: ["Because the train was late, so we missed the connection.", "The train was late, so we missed the connection.", "We missed the connection because the train was late."] },
            { type: 'fill', difficulty: 'hard', question: 'You can submit the application online _____ by mail, _____ it must arrive before Friday.', answer: "or, but", options: ["or, but", "and, so", "but, or", "so, and"], hint: "Choix de méthode + contrainte." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Sales dropped last quarter, _____ the company decided to restructure.', answer: "so", options: ["so", "because", "but", "or"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The project was cancelled because funding was cut.", options: ["The project was cancelled because funding was cut.", "Because funding was cut, so the project was cancelled.", "The project was cancelled because so funding was cut."] },
            { type: 'fill', difficulty: 'hard', question: 'The manager reviewed the budget _____ approved the expenses, _____ she had some concerns.', answer: "and, but", options: ["and, but", "but, and", "so, or", "or, so"] },
            { type: 'fill', difficulty: 'hard', question: 'We can schedule the meeting for Monday _____ Tuesday — let me know which works for you.', answer: "or", options: ["or", "and", "but", "so"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 117 — Conjunctions (2) — although, though, even though, in spite of, despite
    // ─────────────────────────────────────────────
    117: {
        id: 117,
        title: 'Conjunctions (2) — although, though, even though, in spite of, despite',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Exprimer la concession : although, though, even though, in spite of, despite</b><br><br>
Ces mots expriment une <b>opposition/concession</b> (= « bien que, malgré »).<br><br>
<b>although / though / even though</b> + <b>sujet + verbe</b> :<br>
<i>"<b>Although</b> it was raining, we went out."</i> = Bien qu'il pleuvait, nous sommes sortis.<br>
<i>"I enjoyed the course, <b>even though</b> it was difficult."</i><br><br>
<b>in spite of / despite</b> + <b>nom / -ing</b> (PAS de sujet + verbe) :<br>
<i>"<b>Despite</b> the rain, we went out."</i> = Malgré la pluie…<br>
<i>"<b>In spite of</b> being tired, she finished the report."</i><br><br>
⚠️ <b>Piège classique :</b> ~~despite of~~ n'existe PAS ! C'est <b>despite</b> (sans of) ou <b>in spite of</b> (avec of).`,
        rules: [
            '📐 **although / though / even though** + _sujet + verbe_ : _**Although** he was late, the manager didn\'t say anything._',
            '📐 **in spite of / despite** + _nom / -ing_ : _**Despite** the delay, we arrived on time._ / _**In spite of** working hard, she failed._',
            '📐 **even though** = forme emphatique de although (= même si) : plus fort que "although"',
            '📐 **though** peut se mettre en fin de phrase : _The job is hard. I enjoy it, **though**._',
            '🔴 ~~Despite of the rain~~ → **Despite** the rain / **In spite of** the rain',
            '🔴 ~~Although the rain~~ → **Although** it **rained** (il faut sujet + verbe après although)'
        ],
        examples: [
            { text: "**Although** the meeting was long, it was very productive.", fr: "Bien que la réunion ait été longue, elle a été très productive.", correct: true },
            { text: "She got the promotion **even though** she had only been there six months.", fr: "Elle a eu la promotion même si elle n'était là que depuis six mois.", correct: true },
            { text: "**Despite** the economic downturn, the company grew by 5%.", fr: "Malgré le ralentissement économique, l'entreprise a progressé de 5 %.", correct: true },
            { text: "**In spite of** being new, he performed very well.", fr: "Bien qu'il soit nouveau, il a très bien performé.", correct: true },
            { text: "~~Despite of the problems, we finished on time.~~ → **Despite** the problems / **In spite of** the problems.", fr: "Malgré les problèmes…", correct: false, note: "'Despite of' n'existe pas. Despite (sans of) ou In spite of (avec of)." }
        ],
        tips: [
            "🇫🇷 'Although' = 'bien que' (+ subjonctif en français). En anglais, pas de subjonctif : although + sujet + verbe normal.",
            "⚠️ Erreur n°1 au TOEIC : 'despite of'. Rappelez-vous : **despite** = JAMAIS de 'of'. **In spite** = TOUJOURS 'of'.",
            "💡 Au TOEIC Part 5, on teste souvent : although + phrase complète vs. despite + nom. Identifiez ce qui suit pour choisir !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ it was cold, she went for a walk.', answer: "Although", options: ["Although", "Despite", "In spite", "However"], hint: "Sujet + verbe suit → il faut une conjonction + proposition." },
            { type: 'fill', difficulty: 'easy', question: '_____ the bad weather, the event was a success.', answer: "Despite", options: ["Despite", "Although", "Even though", "But"], hint: "Un nom suit (the bad weather) → il faut une préposition." },
            { type: 'fill', difficulty: 'easy', question: 'The hotel was great, _____ it was a bit noisy.', answer: "though", options: ["though", "despite", "in spite of", "however"], hint: "'though' peut se placer au milieu d'une phrase." },
            { type: 'fill', difficulty: 'medium', question: '_____ having no experience, she was hired for the position.', answer: "In spite of", options: ["In spite of", "Although", "Even though", "However"], hint: "Un -ing suit → il faut 'in spite of' ou 'despite'." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Despite the difficulties, the team met the deadline.", options: ["Despite the difficulties, the team met the deadline.", "Despite of the difficulties, the team met the deadline.", "Although the difficulties, the team met the deadline."] },
            { type: 'fill', difficulty: 'medium', question: '_____ she studied hard, she didn\'t pass the exam.', answer: "Even though", options: ["Even though", "Despite", "In spite of", "Because"], hint: "Sujet + verbe → conjonction. Sens emphatique (= même si)." },
            { type: 'fill', difficulty: 'hard', question: '_____ the fact that sales increased, profits actually fell.', answer: "Despite", options: ["Despite", "Although", "Even", "Because of"], hint: "'the fact that' est un groupe nominal → despite." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Although the high cost, many customers bought the product.", options: ["Although the high cost, many customers bought the product.", "Despite the high cost, many customers bought the product.", "Even though the cost was high, many customers bought the product."] },
            { type: 'fill', difficulty: 'hard', question: 'The company expanded internationally _____ the risks involved. _____ many competitors had failed, they succeeded.', answer: "despite, Although", options: ["despite, Although", "although, Despite", "despite, Despite", "although, Although"], hint: "1er blanc : + nom → despite. 2e blanc : + sujet + verbe → although." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ the new policy was unpopular, management decided to implement it.', answer: "Although", options: ["Although", "Despite", "In spite of", "However"] },
            { type: 'fill', difficulty: 'hard', question: '_____ receiving several complaints, the company did not change its pricing strategy.', answer: "Despite", options: ["Despite", "Although", "Even though", "Because of"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "In spite of the delay, the shipment arrived in good condition.", options: ["In spite of the delay, the shipment arrived in good condition.", "In spite the delay, the shipment arrived in good condition.", "Despite of the delay, the shipment arrived in good condition."] },
            { type: 'fill', difficulty: 'hard', question: '_____ working overtime every day, the team still couldn\'t meet the deadline.', answer: "Despite", options: ["Despite", "Although", "Because of", "Even though"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 118 — Conjunctions (3) — when, as, while, until, before, after
    // ─────────────────────────────────────────────
    118: {
        id: 118,
        title: 'Conjunctions (3) — when, as, while, until, before, after',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Conjonctions de temps : when, as, while, until, before, after</b><br><br>
Ces conjonctions introduisent des <b>propositions de temps</b>.<br><br>
<b>when</b> = quand : <i>"<b>When</b> I arrived, the meeting had already started."</i><br>
<b>while / as</b> = pendant que / alors que : <i>"<b>While</b> I was reading, the phone rang."</i><br>
<b>before</b> = avant que : <i>"Finish the report <b>before</b> you leave."</i><br>
<b>after</b> = après que : <i>"<b>After</b> she graduated, she found a job."</i><br>
<b>until / till</b> = jusqu'à ce que : <i>"Wait <b>until</b> the manager arrives."</i><br><br>
⚠️ <b>Règle cruciale :</b> Après ces conjonctions de temps, on utilise le <b>PRÉSENT</b> pour parler du futur (PAS will) :<br>
<i>"I'll call you <b>when</b> I <b>arrive</b>."</i> (PAS ~~when I will arrive~~)`,
        rules: [
            '📐 **when** = quand (moment précis) : _**When** the meeting ends, I\'ll send you the notes._',
            '📐 **while / as** = pendant que (actions simultanées) : _**While** I was on the phone, a client arrived._',
            '📐 **before** = avant que : _Please review the document **before** you sign it._',
            '📐 **after** = après que : _**After** we finish the project, we\'ll celebrate._',
            '📐 **until / till** = jusqu\'à ce que : _We\'ll wait **until** the shipment arrives._',
            '🔴 Après when/while/before/after/until → **PRÉSENT** pour le futur (PAS will) : ~~when I will arrive~~ → when I **arrive**',
            '🔴 ~~During I was working~~ → **While** I was working (during + nom, while + proposition)'
        ],
        examples: [
            { text: "I'll send you the contract **when** it **is** ready.", fr: "Je vous enverrai le contrat quand il sera prêt. (présent en anglais !)", correct: true },
            { text: "**While** the manager was presenting, the projector broke down.", fr: "Pendant que le manager présentait, le projecteur est tombé en panne.", correct: true },
            { text: "Please reply **before** the end of the week.", fr: "Veuillez répondre avant la fin de la semaine.", correct: true },
            { text: "Don't leave **until** the meeting **is** over.", fr: "Ne partez pas avant que la réunion soit terminée.", correct: true },
            { text: "~~I'll call you when I will arrive.~~ → I'll call you when I **arrive**.", fr: "Je t'appellerai quand j'arriverai.", correct: false, note: "Après 'when' (futur), on utilise le PRESENT, pas 'will'." }
        ],
        tips: [
            "🇫🇷 En français, on dit « quand j'arriverai » (futur). En anglais : 'when I arrive' (PRÉSENT). C'est une erreur très fréquente chez les francophones !",
            "⚠️ Ne confondez pas 'during' (préposition + nom) et 'while' (conjonction + proposition) : 'during the meeting' mais 'while we were in the meeting'.",
            "💡 Au TOEIC Part 5, on teste : while/during + choix entre proposition et nom. Regardez ce qui suit !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'ll email you _____ I get to the office.', answer: "when", options: ["when", "until", "during", "while"], hint: "Moment précis dans le futur → quand." },
            { type: 'fill', difficulty: 'easy', question: 'Please sign the document _____ you leave.', answer: "before", options: ["before", "after", "until", "during"], hint: "Il faut signer AVANT de partir." },
            { type: 'fill', difficulty: 'easy', question: '_____ I was at lunch, someone left a message.', answer: "While", options: ["While", "During", "Until", "Before"], hint: "Sujet + verbe suit → conjonction, pas préposition." },
            { type: 'fill', difficulty: 'medium', question: 'We won\'t start the project _____ we receive approval from the board.', answer: "until", options: ["until", "when", "while", "after"], hint: "On attend → jusqu'à ce que l'approbation arrive." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I'll let you know when the package arrives.", options: ["I'll let you know when the package arrives.", "I'll let you know when the package will arrive.", "I'll let you know when the package would arrive."] },
            { type: 'fill', difficulty: 'medium', question: '_____ the manager finishes reviewing the budget, she will present it to the board.', answer: "After", options: ["After", "Until", "Before", "During"], hint: "D'abord la revue, puis la présentation → après." },
            { type: 'fill', difficulty: 'hard', question: 'The intern worked on the database _____ the IT team _____ back from the conference. (jusqu\'à ce que / revenir)', answer: "until, came", options: ["until, came", "while, came", "until, will come", "when, comes"], hint: "Passé → pas de 'will'. Jusqu'à ce que → until." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We'll discuss the proposal during we meet on Monday.", options: ["We'll discuss the proposal during we meet on Monday.", "We'll discuss the proposal when we meet on Monday.", "We'll discuss the proposal during the meeting on Monday."] },
            { type: 'fill', difficulty: 'hard', question: '_____ I was reviewing the contract, I noticed several errors. I fixed them _____ I submitted the final version.', answer: "While, before", options: ["While, before", "During, after", "When, until", "As, during"], hint: "1er : action simultanée + proposition. 2e : corriger AVANT de soumettre." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The meeting will continue _____ all agenda items have been covered.', answer: "until", options: ["until", "while", "during", "when"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I'll forward the files after I review them.", options: ["I'll forward the files after I review them.", "I'll forward the files after I will review them.", "I'll forward the files after I would review them."] },
            { type: 'fill', difficulty: 'hard', question: '_____ she was negotiating the contract, her team was preparing the launch plan.', answer: "While", options: ["While", "During", "Until", "Before"] },
            { type: 'fill', difficulty: 'hard', question: 'Please back up all files _____ installing the software update.', answer: "before", options: ["before", "after", "while", "until"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 119 — Conjunctions (4) — as if, as though, like
    // ─────────────────────────────────────────────
    119: {
        id: 119,
        title: 'Conjunctions (4) — as if, as though, like',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Comparaisons et apparences : as if, as though, like</b><br><br>
<b>as if / as though</b> = comme si → décrivent une apparence ou une situation hypothétique :<br>
<i>"She talks <b>as if</b> she were the manager."</i> = Elle parle comme si elle était la manager.<br>
<i>"It looks <b>as though</b> it's going to rain."</i> = On dirait qu'il va pleuvoir.<br><br>
<b>like</b> = comme → comparaison simple :<br>
<i>"She sings <b>like</b> a professional."</i> = Elle chante comme une professionnelle.<br><br>
⚠️ En anglais formel/écrit, on utilise <b>as if / as though + subjonctif</b> (were) pour une situation <b>irréelle</b> :<br>
<i>"He acts <b>as if</b> he <b>were</b> the boss."</i> (il n'est PAS le boss)<br><br>
En anglais informel, <b>like</b> remplace souvent <b>as if</b>, mais au TOEIC, préférez la forme correcte !`,
        rules: [
            '📐 **as if / as though** + proposition → apparence/hypothèse : _It looks **as if** the project is behind schedule._',
            '📐 **as if / as though** + **past/were** → situation irréelle : _He talks **as though** he **knew** everything._ (il ne sait pas tout)',
            '📐 **like** + nom/pronom → comparaison simple : _He runs **like** the wind._',
            '📐 En anglais informel, **like** remplace **as if** : _It looks **like** it\'s going to rain._',
            '🔴 En anglais formel (TOEIC) : ~~He acts like he is the boss~~ → He acts **as if** he **were** the boss.',
            '🔴 ~~It seems as if it will rain~~ → It looks **as if** it\'s **going** to rain (pas de will après as if pour l\'irréel)'
        ],
        examples: [
            { text: "It looks **as if** the shipment has been delayed.", fr: "On dirait que la livraison a été retardée.", correct: true },
            { text: "She treats her colleagues **as though** they **were** her employees.", fr: "Elle traite ses collègues comme s'ils étaient ses employés.", correct: true },
            { text: "He works **like** a machine — never stops!", fr: "Il travaille comme une machine — il ne s'arrête jamais !", correct: true },
            { text: "The new intern acts **as if** he **knew** everything about the business.", fr: "Le nouveau stagiaire agit comme s'il savait tout de l'entreprise.", correct: true },
            { text: "~~She looks as if she will cry.~~ → She looks **as if** she **is going** to cry. / She looks **as if** she **were** going to cry.", fr: "On dirait qu'elle va pleurer.", correct: false, note: "Évitez 'will' après 'as if'. Utilisez le présent ou le subjonctif." }
        ],
        tips: [
            "🇫🇷 'As if / as though' = 'comme si' en français. En français, on utilise l'imparfait après 'comme si' → en anglais, on utilise le past/were.",
            "⚠️ Au TOEIC, préférez 'as if / as though' à 'like' devant une proposition complète. 'Like' est informel dans ce contexte.",
            "💡 Verbes fréquents avec as if : look, seem, sound, feel, act, behave, talk, treat."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She sings _____ a professional.', answer: "like", options: ["like", "as if", "as though", "as"], hint: "Comparaison simple + nom → like." },
            { type: 'fill', difficulty: 'easy', question: 'It looks _____ it\'s going to rain.', answer: "as if", options: ["as if", "like to", "as", "so that"], hint: "Apparence + proposition → as if / as though." },
            { type: 'fill', difficulty: 'easy', question: 'He behaves _____ he were the owner of the company.', answer: "as if", options: ["as if", "like to", "so", "that"], hint: "Situation irréelle → as if + were." },
            { type: 'fill', difficulty: 'medium', question: 'The manager spoke to us _____ we _____ children.', answer: "as though, were", options: ["as though, were", "like, are", "as if, will be", "so that, were"], hint: "Situation irréelle → as though + past (were)." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est la plus appropriée en anglais formel ?', answer: "It seems as though the negotiations have stalled.", options: ["It seems as though the negotiations have stalled.", "It seems like the negotiations have stalled.", "It seems the negotiations like stalled."] },
            { type: 'fill', difficulty: 'medium', question: 'The building looks _____ it hasn\'t been maintained for years.', answer: "as if", options: ["as if", "like to", "so that", "because"], hint: "Apparence → as if + proposition." },
            { type: 'fill', difficulty: 'hard', question: 'He talks about the project _____ he _____ an expert, but he only started last week.', answer: "as if, were", options: ["as if, were", "like, is", "as though, will be", "so, was"], hint: "Irréel (il n'est PAS expert) → as if + were." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase la plus formelle et correcte :', answer: "The CEO presented the results as though the company were thriving.", options: ["The CEO presented the results as though the company were thriving.", "The CEO presented the results like the company was thriving.", "The CEO presented the results as if the company will thrive."] },
            { type: 'fill', difficulty: 'hard', question: 'She felt _____ she _____ been hit by a truck after the marathon.', answer: "as if, had", options: ["as if, had", "like, has", "as though, would have", "so, had"], hint: "Sensation passée → as if + past perfect." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The office looks _____ nobody has cleaned it in weeks.', answer: "as if", options: ["as if", "like to", "so that", "because"] },
            { type: 'fill', difficulty: 'hard', question: 'The consultant spoke _____ he _____ the company for years, but it was his first day.', answer: "as though, had known", options: ["as though, had known", "like, knows", "as if, will know", "so that, knew"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "It sounds as if the deal has fallen through.", options: ["It sounds as if the deal has fallen through.", "It sounds as if the deal will fall through.", "It sounds like to the deal fell through."] },
            { type: 'fill', difficulty: 'hard', question: 'He dresses _____ a CEO — always in expensive suits.', answer: "like", options: ["like", "as if", "as though", "so that"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 120 — Unless, as long as, provided/providing
    // ─────────────────────────────────────────────
    120: {
        id: 120,
        title: 'Unless, as long as, provided/providing',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Conditions restrictives : unless, as long as, provided/providing (that)</b><br><br>
<b>unless</b> = à moins que / sauf si :<br>
<i>"I'll go <b>unless</b> it rains."</i> = J'irai sauf s'il pleut.<br>
<b>unless</b> = <b>if… not</b> : <i>"<b>Unless</b> you hurry = <b>If</b> you <b>don't</b> hurry"</i><br><br>
<b>as long as / so long as</b> = tant que / à condition que :<br>
<i>"You can borrow my car <b>as long as</b> you drive carefully."</i><br><br>
<b>provided (that) / providing (that)</b> = à condition que (plus formel) :<br>
<i>"The project will succeed <b>provided that</b> we stay on budget."</i><br><br>
⚠️ <b>Piège :</b> Après ces conjonctions, on utilise le <b>PRÉSENT</b> pour le futur (comme avec if/when).`,
        rules: [
            '📐 **unless** = if… not (= à moins que / sauf si) : _**Unless** you register now, you\'ll lose your place._',
            '📐 **as long as / so long as** = à condition que / tant que : _You can work from home **as long as** you remain productive._',
            '📐 **provided (that) / providing (that)** = à condition que (formel) : _We\'ll meet the deadline **provided** we get the resources._',
            '📐 Après unless/as long as/provided → **PRÉSENT** pour le futur (comme if)',
            '🔴 ~~Unless you don\'t hurry~~ → **Unless** you hurry (unless = déjà négatif, pas de double négation)',
            '🔴 ~~I\'ll go unless it will rain~~ → unless it **rains** (présent pour le futur)'
        ],
        examples: [
            { text: "The shipment will arrive on time **unless** there are delays at customs.", fr: "La livraison arrivera à temps sauf s'il y a des retards en douane.", correct: true },
            { text: "You can attend the conference **as long as** you register in advance.", fr: "Vous pouvez assister à la conférence à condition de vous inscrire à l'avance.", correct: true },
            { text: "We will approve the budget **provided that** all departments submit their estimates.", fr: "Nous approuverons le budget à condition que tous les services soumettent leurs estimations.", correct: true },
            { text: "~~Unless you don't call me, I won't know.~~ → **Unless** you call me, I won't know.", fr: "Sauf si tu m'appelles, je ne saurai pas.", correct: false, note: "Unless = déjà négatif. Ne pas ajouter 'not' → double négation !" }
        ],
        tips: [
            "🇫🇷 'Unless' = 'à moins que' (+ subjonctif en français). En anglais : unless + PRÉSENT simple. Pas de subjonctif !",
            "⚠️ Piège : 'unless' contient DÉJÀ la négation. 'Unless you hurry' = 'Si tu ne te dépêches pas'. Ne dites PAS 'unless you don't hurry'.",
            "💡 Au TOEIC, 'provided that' est fréquent dans les contextes business : contrats, conditions de vente, politiques d'entreprise."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'You\'ll miss the train _____ you leave now.', answer: "unless", options: ["unless", "as long as", "provided", "because"], hint: "= Si tu ne pars pas maintenant → sauf si." },
            { type: 'fill', difficulty: 'easy', question: 'You can use my laptop _____ you return it by Friday.', answer: "as long as", options: ["as long as", "unless", "because", "although"], hint: "= à condition que / tant que." },
            { type: 'fill', difficulty: 'easy', question: 'The event will be held outdoors _____ the weather is good.', answer: "provided", options: ["provided", "unless", "because", "although"], hint: "= à condition que (formel)." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Unless you submit the form by Friday, your application won't be processed.", options: ["Unless you submit the form by Friday, your application won't be processed.", "Unless you don't submit the form by Friday, your application won't be processed.", "Unless you will submit the form by Friday, your application won't be processed."] },
            { type: 'fill', difficulty: 'medium', question: 'The contract will be valid _____ both parties sign it.', answer: "provided that", options: ["provided that", "unless", "although", "because"], hint: "Condition formelle pour un contrat → à condition que." },
            { type: 'fill', difficulty: 'medium', question: 'We won\'t cancel the order _____ the customer requests it.', answer: "unless", options: ["unless", "as long as", "provided", "while"], hint: "= sauf si le client le demande." },
            { type: 'fill', difficulty: 'hard', question: 'Employees may work remotely _____ they attend all scheduled meetings and _____ their productivity _____ satisfactory.', answer: "as long as, provided, remains", options: ["as long as, provided, remains", "unless, although, is", "provided, unless, will remain", "because, as long as, remained"], hint: "Deux conditions. Présent pour le futur après ces conjonctions." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Unless you won't finish the report, you can't go home.", options: ["Unless you won't finish the report, you can't go home.", "Unless you finish the report, you can't go home.", "You can't go home unless you finish the report."] },
            { type: 'fill', difficulty: 'hard', question: 'The merger will go ahead _____ regulatory approval _____ granted.', answer: "provided, is", options: ["provided, is", "unless, won't be", "as long as, will be", "although, is"], hint: "Condition formelle. Présent pour le futur après 'provided'." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The warranty is void _____ the product is used for commercial purposes.', answer: "if", options: ["if", "unless", "as long as", "provided"] },
            { type: 'fill', difficulty: 'hard', question: '_____ the supplier delivers by Thursday, we\'ll have to find an alternative.', answer: "Unless", options: ["Unless", "As long as", "Provided", "Although"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "As long as you follow the guidelines, your proposal will be accepted.", options: ["As long as you follow the guidelines, your proposal will be accepted.", "As long as you will follow the guidelines, your proposal will be accepted.", "As long as you don't not follow the guidelines, your proposal will be accepted."] },
            { type: 'fill', difficulty: 'hard', question: 'Access to the building is granted _____ employees present their ID badges.', answer: "provided that", options: ["provided that", "unless", "although", "because"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 121 — Prepositions — in, at, on (time)
    // ─────────────────────────────────────────────
    121: {
        id: 121,
        title: 'Prepositions — in, at, on (time)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Prépositions de temps : in, at, on</b><br><br>
<b>at</b> → heure précise, moments de la journée, fêtes :<br>
<i>**at** 9 o'clock, **at** noon, **at** night, **at** Christmas, **at** the weekend</i><br><br>
<b>on</b> → jours et dates :<br>
<i>**on** Monday, **on** March 15th, **on** my birthday, **on** Christmas Day</i><br><br>
<b>in</b> → mois, années, saisons, parties de la journée, durée future :<br>
<i>**in** January, **in** 2025, **in** summer, **in** the morning, **in** two weeks</i><br><br>
⚠️ <b>Exceptions :</b> PAS de préposition avec <b>last, next, this, every</b> :<br>
<i>"I'll see you **next** Monday."</i> (PAS ~~on next Monday~~)`,
        rules: [
            '📐 **at** + heure : _**at** 3 PM, **at** midnight, **at** lunchtime_',
            '📐 **at** + moments : _**at** night, **at** the weekend (UK), **at** Christmas, **at** the end of…_',
            '📐 **on** + jour/date : _**on** Friday, **on** June 5th, **on** New Year\'s Day_',
            '📐 **in** + mois/année/saison : _**in** April, **in** 2024, **in** winter_',
            '📐 **in** + parties du jour : _**in** the morning, **in** the afternoon, **in** the evening_ (MAIS : **at** night !)',
            '📐 **in** + durée future : _**in** five minutes, **in** a few days_ (= dans 5 minutes, dans quelques jours)',
            '🔴 PAS de préposition avec last/next/this/every : ~~on next Monday~~ → **next Monday**'
        ],
        examples: [
            { text: "The meeting is **at** 10 AM **on** Tuesday.", fr: "La réunion est à 10h mardi.", correct: true },
            { text: "The report is due **in** March.", fr: "Le rapport est attendu en mars.", correct: true },
            { text: "We launched the product **in** 2024.", fr: "Nous avons lancé le produit en 2024.", correct: true },
            { text: "I'll have it ready **in** two days.", fr: "Je l'aurai prêt dans deux jours.", correct: true },
            { text: "~~The meeting is on next Friday.~~ → The meeting is **next Friday**.", fr: "La réunion est vendredi prochain.", correct: false, note: "Pas de préposition avec 'next'." }
        ],
        tips: [
            "🇫🇷 En français, on dit 'le matin' mais en anglais c'est 'in the morning'. Et attention : 'la nuit' = 'at night' (pas 'in the night').",
            "⚠️ Piège pour francophones : 'in five minutes' = 'dans cinq minutes' (futur), PAS 'pendant cinq minutes' (= for five minutes).",
            "💡 Au TOEIC : at + heure, on + jour/date, in + mois/année. Si vous voyez 'last/next/this/every', pas de préposition !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The conference starts _____ 9:30 AM.', answer: "at", options: ["at", "on", "in", "by"], hint: "Heure précise → at." },
            { type: 'fill', difficulty: 'easy', question: 'We have a meeting _____ Monday.', answer: "on", options: ["on", "at", "in", "for"], hint: "Jour de la semaine → on." },
            { type: 'fill', difficulty: 'easy', question: 'The new office will open _____ September.', answer: "in", options: ["in", "on", "at", "by"], hint: "Mois → in." },
            { type: 'fill', difficulty: 'medium', question: 'The project must be completed _____ the end of the quarter.', answer: "at", options: ["at", "in", "on", "by"], hint: "'at the end of' = à la fin de." },
            { type: 'fill', difficulty: 'medium', question: 'I usually check my emails _____ the morning.', answer: "in", options: ["in", "at", "on", "during"], hint: "Partie de la journée → in (sauf 'night' → at)." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The store is closed on Sundays.", options: ["The store is closed on Sundays.", "The store is closed at Sundays.", "The store is closed in Sundays."] },
            { type: 'fill', difficulty: 'hard', question: 'The CEO was born _____ 1965, _____ March 12th, _____ 3 AM.', answer: "in, on, at", options: ["in, on, at", "on, in, at", "at, on, in", "in, at, on"], hint: "Année → in. Date → on. Heure → at." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I'll see you on next Wednesday.", options: ["I'll see you on next Wednesday.", "I'll see you next Wednesday.", "I'll see you on Wednesday."] },
            { type: 'fill', difficulty: 'hard', question: 'The product launch is scheduled for _____ Q3 2026. The team will present _____ the afternoon _____ July 14th.', answer: "in, in, on", options: ["in, in, on", "at, on, in", "on, in, at", "in, at, on"], hint: "Trimestre → in. Partie du jour → in. Date → on." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The annual report will be published _____ January.', answer: "in", options: ["in", "on", "at", "by"] },
            { type: 'fill', difficulty: 'hard', question: 'The shareholders\' meeting is _____ 2 PM _____ Friday, April 3rd.', answer: "at, on", options: ["at, on", "on, at", "in, on", "at, in"] },
            { type: 'fill', difficulty: 'hard', question: 'Revenue increased by 20% _____ the third quarter of 2025.', answer: "in", options: ["in", "at", "on", "during"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "We'll launch the campaign in the spring.", options: ["We'll launch the campaign in the spring.", "We'll launch the campaign at spring.", "We'll launch the campaign on spring."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 122 — Prepositions — in, at, on (place)
    // ─────────────────────────────────────────────
    122: {
        id: 122,
        title: 'Prepositions — in, at, on (place)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Prépositions de lieu : in, at, on</b><br><br>
<b>in</b> → à l'intérieur d'un espace fermé ou une zone :<br>
<i>**in** the office, **in** Paris, **in** France, **in** a car, **in** the newspaper</i><br><br>
<b>at</b> → un point précis, un lieu fonctionnel :<br>
<i>**at** the station, **at** the airport, **at** work, **at** the meeting, **at** home</i><br><br>
<b>on</b> → sur une surface :<br>
<i>**on** the desk, **on** the wall, **on** the second floor, **on** a bus/train/plane</i><br><br>
⚠️ <b>Pièges :</b><br>
• <b>in</b> a car / taxi MAIS <b>on</b> a bus / train / plane (transport public = on)<br>
• <b>at</b> home / work / school (PAS ~~in home~~)<br>
• <b>in</b> a picture / photo MAIS <b>on</b> television / the radio / the Internet`,
        rules: [
            '📐 **in** = à l\'intérieur : _**in** a room, **in** a building, **in** a city, **in** a country_',
            '📐 **at** = point précis / lieu fonctionnel : _**at** the door, **at** the bus stop, **at** the top, **at** the reception_',
            '📐 **on** = sur une surface : _**on** the table, **on** the floor, **on** the wall, **on** the ceiling_',
            '📐 Transport : **in** a car/taxi, **on** a bus/train/plane/bike/ship',
            '📐 Expressions fixes : **at** home/work/school, **in** bed, **on** the phone, **in** the newspaper, **on** the Internet',
            '🔴 ~~in home~~ → **at** home | ~~on the car~~ → **in** the car'
        ],
        examples: [
            { text: "The files are **in** the cabinet **on** the third floor.", fr: "Les dossiers sont dans l'armoire au troisième étage.", correct: true },
            { text: "I'll meet you **at** the reception desk.", fr: "Je vous retrouverai à l'accueil.", correct: true },
            { text: "She's **on** a business trip **in** Japan.", fr: "Elle est en voyage d'affaires au Japon.", correct: true },
            { text: "I read it **in** the newspaper / **on** the Internet.", fr: "Je l'ai lu dans le journal / sur Internet.", correct: true },
            { text: "~~She is in home.~~ → She is **at** home.", fr: "Elle est à la maison.", correct: false, note: "'at home' est une expression fixe." }
        ],
        tips: [
            "🇫🇷 En français, on dit 'dans le bus' (= in the bus). En anglais, c'est 'ON the bus'. Retenir : transport public = on.",
            "⚠️ 'At' indique un POINT (at the airport = à l'aéroport comme point), 'in' indique qu'on est À L'INTÉRIEUR (in the airport = dans le bâtiment).",
            "💡 Au TOEIC, les prépositions de lieu sont testées en Part 5 et Part 1 (description de photos)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The manager is _____ her office right now.', answer: "in", options: ["in", "at", "on", "by"], hint: "À l'intérieur d'un espace fermé → in." },
            { type: 'fill', difficulty: 'easy', question: 'Please leave your badge _____ the front desk.', answer: "at", options: ["at", "in", "on", "by"], hint: "Point précis → at." },
            { type: 'fill', difficulty: 'easy', question: 'There\'s a notice _____ the wall.', answer: "on", options: ["on", "in", "at", "by"], hint: "Sur une surface → on." },
            { type: 'fill', difficulty: 'medium', question: 'I was _____ the train when I received the email _____ my phone.', answer: "on, on", options: ["on, on", "in, on", "at, in", "on, in"], hint: "Transport public → on. Appareil → on." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She's at work right now.", options: ["She's at work right now.", "She's in work right now.", "She's on work right now."] },
            { type: 'fill', difficulty: 'medium', question: 'The branch office is _____ Tokyo, _____ the 12th floor of the Mitsui building.', answer: "in, on", options: ["in, on", "at, in", "on, at", "in, at"], hint: "Ville → in. Étage → on." },
            { type: 'fill', difficulty: 'hard', question: 'I saw the advertisement _____ the newspaper and then checked the company\'s website _____ the Internet.', answer: "in, on", options: ["in, on", "on, in", "at, on", "in, at"], hint: "Journal → in. Internet → on." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "He arrived in the airport at 6 AM.", options: ["He arrived in the airport at 6 AM.", "He arrived at the airport at 6 AM.", "He's at the airport waiting for his flight."] },
            { type: 'fill', difficulty: 'hard', question: 'We were sitting _____ the taxi _____ our way to a meeting _____ the Hilton Hotel.', answer: "in, on, at", options: ["in, on, at", "on, in, at", "in, at, on", "at, on, in"], hint: "Taxi (privé) → in. 'On our way' = expression. Hôtel (point) → at." }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The CEO is _____ a meeting _____ the conference room.', answer: "in, in", options: ["in, in", "at, in", "on, in", "in, at"] },
            { type: 'fill', difficulty: 'hard', question: 'There are 500 employees _____ our offices _____ London.', answer: "in, in", options: ["in, in", "at, in", "on, at", "in, on"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I left my laptop on the bus.", options: ["I left my laptop on the bus.", "I left my laptop in the bus.", "I left my laptop at the bus."] },
            { type: 'fill', difficulty: 'hard', question: 'She works _____ home but goes _____ the office _____ Mondays.', answer: "at, to, on", options: ["at, to, on", "in, at, on", "at, in, at", "on, to, in"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 123 — Prepositions — to, at, in, into
    // ─────────────────────────────────────────────
    123: {
        id: 123,
        title: 'Prepositions — to, at, in, into',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Prépositions de direction et de position : to, at, in, into</b><br><br>
<b>to</b> → direction / destination (vers) :<br>
<i>"I'm going <b>to</b> the office."</i> = Je vais AU bureau.<br><br>
<b>at</b> → position à un point précis :<br>
<i>"I'm <b>at</b> the office."</i> = Je suis AU bureau (j'y suis).<br><br>
<b>in</b> → position à l'intérieur :<br>
<i>"I'm <b>in</b> the office."</i> = Je suis DANS le bureau.<br><br>
<b>into</b> → mouvement vers l'intérieur (entrer dans) :<br>
<i>"She walked <b>into</b> the office."</i> = Elle est entrée dans le bureau.<br><br>
⚠️ <b>Piège :</b> <b>go to</b> (aller à) MAIS <b>go home</b> (PAS ~~go to home~~) et <b>arrive at/in</b> (PAS ~~arrive to~~)`,
        rules: [
            '📐 **to** = direction/destination : _go/come/travel/drive/fly **to**_ : _She flew **to** New York._',
            '📐 **at** = position (point) : _be/stay/wait **at**_ : _I\'m waiting **at** the station._',
            '📐 **in** = position (intérieur) : _be/sit/stay **in**_ : _The documents are **in** the folder._',
            '📐 **into** = mouvement vers l\'intérieur : _go/walk/run/get **into**_ : _He got **into** the car._',
            '🔴 ~~arrive to~~ → **arrive at** (lieu précis) / **arrive in** (ville/pays) : _We arrived **in** Paris / **at** the hotel._',
            '🔴 ~~go to home~~ → **go home** (pas de préposition avec home après go/come/get)'
        ],
        examples: [
            { text: "I'm driving **to** the airport. I'll arrive **at** the airport in 30 minutes.", fr: "Je conduis vers l'aéroport. J'arriverai à l'aéroport dans 30 minutes.", correct: true },
            { text: "She walked **into** the meeting room and sat down.", fr: "Elle est entrée dans la salle de réunion et s'est assise.", correct: true },
            { text: "We arrived **in** Tokyo on Monday morning.", fr: "Nous sommes arrivés à Tokyo lundi matin.", correct: true },
            { text: "~~We arrived to the hotel late.~~ → We arrived **at** the hotel late.", fr: "Nous sommes arrivés à l'hôtel tard.", correct: false, note: "'Arrive' ne prend JAMAIS 'to'. Utilisez 'at' (lieu) ou 'in' (ville/pays)." },
            { text: "~~I went to home after work.~~ → I went **home** after work.", fr: "Je suis rentré à la maison après le travail.", correct: false, note: "Pas de 'to' devant 'home' après go/come/get." }
        ],
        tips: [
            "🇫🇷 En français, on dit 'arriver à' (= arrive to ?). NON ! En anglais c'est 'arrive AT/IN'. C'est un piège majeur pour les francophones.",
            "⚠️ Différence in/into : 'in' = position statique (être dedans). 'Into' = mouvement (entrer dans). _He's **in** the car_ vs. _He got **into** the car._",
            "💡 Au TOEIC : 'arrive at' + lieu précis, 'arrive in' + ville/pays. Jamais 'arrive to' !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'m going _____ the office now.', answer: "to", options: ["to", "at", "in", "into"], hint: "Mouvement/direction → to." },
            { type: 'fill', difficulty: 'easy', question: 'She is _____ the office right now.', answer: "in", options: ["in", "to", "into", "at"], hint: "Position à l'intérieur → in." },
            { type: 'fill', difficulty: 'easy', question: 'He walked _____ the building through the main entrance.', answer: "into", options: ["into", "in", "to", "at"], hint: "Mouvement vers l'intérieur → into." },
            { type: 'fill', difficulty: 'medium', question: 'We arrived _____ the hotel at midnight.', answer: "at", options: ["at", "to", "in", "into"], hint: "Arrive + lieu précis → at (jamais 'to')." },
            { type: 'fill', difficulty: 'medium', question: 'The CEO flew _____ London and arrived _____ Heathrow Airport at 7 AM.', answer: "to, at", options: ["to, at", "at, to", "in, to", "to, in"], hint: "Fly TO + destination. Arrive AT + lieu précis." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She went home after the meeting.", options: ["She went home after the meeting.", "She went to home after the meeting.", "She went at home after the meeting."] },
            { type: 'fill', difficulty: 'hard', question: 'The inspector walked _____ the warehouse, looked around, and stayed _____ the facility for two hours.', answer: "into, in", options: ["into, in", "in, into", "to, at", "at, to"], hint: "Mouvement d'entrée → into. Rester à l'intérieur → in." },
            { type: 'fill', difficulty: 'hard', question: 'We arrived _____ Japan on Monday and drove straight _____ the conference center.', answer: "in, to", options: ["in, to", "at, to", "to, at", "in, into"], hint: "Arrive IN + pays. Drive TO + destination." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We arrived to the client's office on time.", options: ["We arrived to the client's office on time.", "We arrived at the client's office on time.", "We drove to the client's office and arrived on time."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Please come _____ my office when you get _____ work.', answer: "to, to", options: ["to, to", "in, at", "at, to", "into, in"] },
            { type: 'fill', difficulty: 'hard', question: 'The delivery truck arrived _____ the warehouse and the driver carried the boxes _____ the storage room.', answer: "at, into", options: ["at, into", "to, in", "in, to", "at, in"] },
            { type: 'fill', difficulty: 'hard', question: 'After arriving _____ Madrid, we went straight _____ the hotel.', answer: "in, to", options: ["in, to", "at, to", "to, at", "in, into"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I got home at 8 PM.", options: ["I got home at 8 PM.", "I got to home at 8 PM.", "I arrived to home at 8 PM."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 124 — Prepositions — on, in, at, by, with, about
    // ─────────────────────────────────────────────
    124: {
        id: 124,
        title: 'Prepositions — on, in, at, by, with, about',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Prépositions courantes : on, in, at, by, with, about</b><br><br>
Ces prépositions ont de nombreux usages qu'il faut mémoriser :<br><br>
<b>on</b> : on holiday, on business, on the phone, on fire, on TV, on purpose, on time<br>
<b>in</b> : in charge of, in advance, in trouble, in time (= assez tôt), in writing, in a hurry<br>
<b>at</b> : at first, at last, at the moment, at least, at once<br>
<b>by</b> : by accident, by mistake, by chance, by heart, by yourself<br>
<b>with</b> : deal with, agree with, pleased with<br>
<b>about</b> : worry about, think about, complain about, talk about<br><br>
⚠️ <b>on time</b> ≠ <b>in time</b> :<br>
• <b>on time</b> = à l'heure (ponctuel) : <i>"The train arrived <b>on time</b>."</i><br>
• <b>in time</b> = à temps (assez tôt) : <i>"We arrived <b>in time</b> for the meeting."</i>`,
        rules: [
            '📐 **on** : on business, on holiday, on the phone, on purpose (= exprès), on time (= à l\'heure)',
            '📐 **in** : in charge of (= responsable de), in advance, in trouble, in time (= à temps), in writing',
            '📐 **at** : at first, at last, at the moment, at least, at once (= immédiatement)',
            '📐 **by** : by accident / by mistake (= par erreur), by chance, by (my)self, by heart (= par cœur)',
            '📐 **with/about** : deal **with**, agree **with**, worry **about**, complain **about**',
            '🔴 ~~on advance~~ → **in** advance | ~~in purpose~~ → **on** purpose | ~~at mistake~~ → **by** mistake'
        ],
        examples: [
            { text: "The director is **on** a business trip **at** the moment.", fr: "Le directeur est en voyage d'affaires en ce moment.", correct: true },
            { text: "Please submit your request **in** writing **in** advance.", fr: "Veuillez soumettre votre demande par écrit à l'avance.", correct: true },
            { text: "I deleted the file **by** mistake.", fr: "J'ai supprimé le fichier par erreur.", correct: true },
            { text: "The manager will deal **with** the complaint **at** once.", fr: "Le manager traitera la réclamation immédiatement.", correct: true },
            { text: "~~She is in a business trip.~~ → She is **on** a business trip.", fr: "Elle est en voyage d'affaires.", correct: false, note: "'On a business trip' est l'expression correcte." }
        ],
        tips: [
            "🇫🇷 'On time' = 'à l'heure' (ponctuel). 'In time' = 'à temps' (avant qu'il soit trop tard). En français, on traduit parfois les deux par 'à temps' — attention !",
            "⚠️ Les expressions avec prépositions sont très fréquentes au TOEIC. Il faut les apprendre par cœur ('by heart' !).",
            "💡 Astuce : 'by accident / by mistake / by chance' → toutes les actions NON intentionnelles utilisent 'by'. 'On purpose' → action intentionnelle."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The train arrived _____ time, as usual.', answer: "on", options: ["on", "in", "at", "by"], hint: "Ponctuel, à l'heure → on time." },
            { type: 'fill', difficulty: 'easy', question: 'I sent the wrong file _____ mistake.', answer: "by", options: ["by", "on", "in", "at"], hint: "Erreur non intentionnelle → by mistake." },
            { type: 'fill', difficulty: 'easy', question: 'Can we talk _____ the new project?', answer: "about", options: ["about", "with", "on", "for"], hint: "Parler de quelque chose → talk about." },
            { type: 'fill', difficulty: 'medium', question: 'Tickets must be purchased _____ advance. They won\'t be available _____ the door.', answer: "in, at", options: ["in, at", "on, at", "at, in", "by, on"], hint: "À l'avance → in advance. À la porte → at the door." },
            { type: 'fill', difficulty: 'medium', question: 'She\'s _____ charge _____ the marketing department.', answer: "in, of", options: ["in, of", "on, of", "at, for", "by, of"], hint: "Responsable de → in charge of." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "We arrived in time to catch the bus.", options: ["We arrived in time to catch the bus.", "We arrived on time to catch the bus.", "We arrived at time to catch the bus."] },
            { type: 'fill', difficulty: 'hard', question: 'He\'s _____ the phone _____ the moment. Can I take a message?', answer: "on, at", options: ["on, at", "in, at", "at, on", "by, in"], hint: "Au téléphone → on the phone. En ce moment → at the moment." },
            { type: 'fill', difficulty: 'hard', question: 'The contract was cancelled _____ purpose, not _____ accident.', answer: "on, by", options: ["on, by", "by, on", "in, by", "at, on"], hint: "Intentionnel → on purpose. Non intentionnel → by accident." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She is in a business trip at the moment.", options: ["She is in a business trip at the moment.", "She is on a business trip at the moment.", "She's on holiday at the moment."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All complaints should be submitted _____ writing.', answer: "in", options: ["in", "on", "at", "by"] },
            { type: 'fill', difficulty: 'hard', question: 'The system crashed and I lost all my work. I hadn\'t saved it — it was completely _____ accident.', answer: "by", options: ["by", "on", "in", "at"] },
            { type: 'fill', difficulty: 'hard', question: 'The project manager is _____ charge _____ coordinating all teams. She deals _____ every issue personally.', answer: "in, of, with", options: ["in, of, with", "on, of, about", "at, for, with", "in, for, about"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "We need to discuss the issue at once — it's urgent.", options: ["We need to discuss the issue at once — it's urgent.", "We need to discuss the issue in once — it's urgent.", "We need to discuss the issue on once — it's urgent."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 125 — Prepositions — by (alone, by car, etc.)
    // ─────────────────────────────────────────────
    125: {
        id: 125,
        title: 'Prepositions — by (alone, by car, etc.)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Les multiples usages de "by"</b><br><br>
<b>by</b> a de nombreux sens en anglais :<br><br>
<b>1. Moyen de transport (sans article) :</b><br>
<i>by car, by bus, by train, by plane, by bike, by boat</i><br>
MAIS : <b>on foot</b> (PAS ~~by foot~~)<br><br>
<b>2. Agent (dans le passif) :</b><br>
<i>"The report was written <b>by</b> the consultant."</i><br><br>
<b>3. Moyen / méthode :</b><br>
<i>by email, by phone, by credit card, by hand</i><br><br>
<b>4. Proximité (= à côté de / près de) :</b><br>
<i>"She was sitting <b>by</b> the window."</i><br><br>
<b>5. Seul :</b> <b>by myself / yourself / himself…</b> = tout(e) seul(e)<br>
<i>"I did the project <b>by myself</b>."</i> = J'ai fait le projet tout seul.<br><br>
<b>6. Date limite :</b> <b>by</b> + date = au plus tard<br>
<i>"Submit the report <b>by</b> Friday."</i> = avant vendredi (au plus tard)`,
        rules: [
            '📐 Transport : **by** car/bus/train/plane/bike/boat (sans article). MAIS **on** foot (PAS ~~by foot~~)',
            '📐 Passif : action faite **par** quelqu\'un → _The email was sent **by** the secretary._',
            '📐 Moyen : **by** email/phone/credit card/hand → _Please confirm **by** email._',
            '📐 Seul : **by** myself/yourself/himself… → _She completed the audit **by** herself._',
            '📐 Proximité : **by** = à côté de / près de → _He was standing **by** the door._',
            '📐 Date limite : **by** = au plus tard → _The project must be done **by** December._',
            '🔴 ~~by foot~~ → **on** foot | ~~by the car~~ → **by** car (pas d\'article avec by + transport)'
        ],
        examples: [
            { text: "I usually go to work **by** train.", fr: "Je vais habituellement au travail en train.", correct: true },
            { text: "The proposal must be submitted **by** the end of the month.", fr: "La proposition doit être soumise avant la fin du mois.", correct: true },
            { text: "Payment can be made **by** credit card or **by** bank transfer.", fr: "Le paiement peut être effectué par carte de crédit ou par virement.", correct: true },
            { text: "The new system was designed **by** an external team.", fr: "Le nouveau système a été conçu par une équipe externe.", correct: true },
            { text: "~~I go to work by the bus.~~ → I go to work **by bus**.", fr: "Pas d'article avec 'by' + transport.", correct: false, note: "By + transport → pas d'article (by bus, by car, by plane)." }
        ],
        tips: [
            "🇫🇷 'By myself' = 'tout seul'. Ne confondez pas avec 'myself' (= moi-même). 'I did it by myself' = Je l'ai fait seul. 'I did it myself' = Je l'ai fait moi-même.",
            "⚠️ 'By' + transport → PAS d'article : 'by car' (PAS 'by the car'). Mais si on précise : 'in MY car' ou 'on THE bus'.",
            "💡 Au TOEIC : 'by' + deadline est très courant dans les e-mails professionnels. 'By Friday' = au plus tard vendredi."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She goes to the office _____ bus every day.', answer: "by", options: ["by", "on", "in", "with"], hint: "Transport → by (sans article)." },
            { type: 'fill', difficulty: 'easy', question: 'The report must be finished _____ Wednesday.', answer: "by", options: ["by", "until", "on", "at"], hint: "Date limite → by (= au plus tard)." },
            { type: 'fill', difficulty: 'easy', question: 'She did the entire presentation _____ herself.', answer: "by", options: ["by", "with", "for", "on"], hint: "Seule → by herself." },
            { type: 'fill', difficulty: 'medium', question: 'The building was designed _____ a famous architect.', answer: "by", options: ["by", "from", "with", "of"], hint: "Agent du passif → by." },
            { type: 'fill', difficulty: 'medium', question: 'You can pay _____ credit card or _____ cash.', answer: "by, in", options: ["by, in", "with, by", "in, by", "by, by"], hint: "By credit card MAIS in cash." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "We went to the conference on foot.", options: ["We went to the conference on foot.", "We went to the conference by foot.", "We went to the conference by feet."] },
            { type: 'fill', difficulty: 'hard', question: 'Please confirm your attendance _____ email _____ no later than Friday the 15th.', answer: "by, by", options: ["by, by", "in, by", "by, until", "on, before"], hint: "Moyen → by email. Date limite → by + date." },
            { type: 'fill', difficulty: 'hard', question: 'The contract was reviewed _____ the legal team and signed _____ the CEO. It was delivered _____ hand.', answer: "by, by, by", options: ["by, by, by", "by, from, in", "from, by, with", "by, by, in"], hint: "Agent (passif) → by. Moyen → by hand." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "He travels to work by the train every morning.", options: ["He travels to work by the train every morning.", "He travels to work by train every morning.", "The project was completed by the entire team."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Applications must be received _____ 5 PM on March 30th.', answer: "by", options: ["by", "until", "at", "before"] },
            { type: 'fill', difficulty: 'hard', question: 'The audit was conducted _____ an independent firm, and the results were sent _____ email.', answer: "by, by", options: ["by, by", "from, in", "by, in", "from, by"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "He managed the entire project by himself.", options: ["He managed the entire project by himself.", "He managed the entire project by his own.", "He managed the entire project by him."] },
            { type: 'fill', difficulty: 'hard', question: 'The package was sent _____ express delivery and should arrive _____ tomorrow morning.', answer: "by, by", options: ["by, by", "with, until", "by, until", "in, by"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 126 — Prepositions — noun + preposition (reason for, etc.)
    // ─────────────────────────────────────────────
    126: {
        id: 126,
        title: 'Prepositions — noun + preposition (reason for, etc.)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Nom + préposition : expressions à mémoriser</b><br><br>
En anglais, de nombreux noms sont suivis d'une <b>préposition fixe</b>. Ces combinaisons ne se traduisent pas littéralement depuis le français.<br><br>
<b>Avec FOR :</b> reason for, need for, demand for, application for, solution for/to<br>
<b>Avec OF :</b> cause of, advantage of, disadvantage of, cost of, lack of<br>
<b>Avec IN :</b> increase in, decrease in, rise in, interest in, experience in<br>
<b>Avec TO :</b> answer to, key to, reaction to, solution to, damage to, invitation to<br>
<b>Avec ON :</b> effect on, impact on, influence on, tax on, ban on<br>
<b>Avec WITH :</b> connection with, relationship with, problem with<br>
<b>Avec BETWEEN :</b> difference between, relationship between, link between<br><br>
⚠️ <b>Piège :</b> En français, on dit « la raison de » mais en anglais c'est « the reason <b>for</b> ». Ne traduisez pas mot à mot !`,
        rules: [
            '📐 reason **for**, need **for**, demand **for**, application **for** : _What is the reason **for** the delay?_',
            '📐 cause **of**, lack **of**, advantage **of**, cost **of** : _The lack **of** funding is a problem._',
            '📐 increase/decrease/rise **in** : _There was a sharp increase **in** sales._',
            '📐 answer/key/reaction/solution/damage **to** : _What\'s the answer **to** this question?_',
            '📐 effect/impact/influence **on** : _The policy had a big impact **on** productivity._',
            '🔴 ~~the reason of the delay~~ → the reason **for** the delay',
            '🔴 ~~the effect of sales~~ → the effect **on** sales'
        ],
        examples: [
            { text: "What is the reason **for** the increase **in** expenses?", fr: "Quelle est la raison de l'augmentation des dépenses ?", correct: true },
            { text: "The key **to** success is hard work.", fr: "La clé du succès, c'est le travail.", correct: true },
            { text: "The new regulations had a significant impact **on** small businesses.", fr: "Les nouvelles réglementations ont eu un impact significatif sur les petites entreprises.", correct: true },
            { text: "There's been a sharp rise **in** demand **for** our products.", fr: "Il y a eu une forte hausse de la demande pour nos produits.", correct: true },
            { text: "~~The reason of his absence is unknown.~~ → The reason **for** his absence is unknown.", fr: "La raison de son absence est inconnue.", correct: false, note: "En français 'raison de', en anglais 'reason FOR'." }
        ],
        tips: [
            "🇫🇷 Piège classique : 'la raison DE' = 'the reason FOR'. 'L'effet SUR' = 'the effect ON'. Ne traduisez pas les prépositions littéralement !",
            "⚠️ 'Solution' prend 'to' ou 'for' : 'a solution TO the problem' / 'a solution FOR the issue'. Les deux sont acceptés.",
            "💡 Au TOEIC, les combinaisons nom + préposition sont TRÈS fréquentes en Part 5. Apprenez-les par groupes !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'What\'s the reason _____ the delay in shipping?', answer: "for", options: ["for", "of", "to", "about"], hint: "reason + préposition = reason for." },
            { type: 'fill', difficulty: 'easy', question: 'There has been a significant increase _____ online sales.', answer: "in", options: ["in", "of", "on", "for"], hint: "increase + préposition = increase in." },
            { type: 'fill', difficulty: 'easy', question: 'The new software had a positive effect _____ productivity.', answer: "on", options: ["on", "in", "for", "to"], hint: "effect + préposition = effect on." },
            { type: 'fill', difficulty: 'medium', question: 'The lack _____ communication between departments caused several problems.', answer: "of", options: ["of", "in", "for", "with"], hint: "lack + préposition = lack of." },
            { type: 'fill', difficulty: 'medium', question: 'What is the key _____ maintaining good client relationships?', answer: "to", options: ["to", "for", "of", "in"], hint: "key + préposition = key to." },
            { type: 'fill', difficulty: 'medium', question: 'The company received many applications _____ the new position.', answer: "for", options: ["for", "to", "of", "about"], hint: "application + préposition = application for." },
            { type: 'fill', difficulty: 'hard', question: 'The rise _____ interest rates had a major impact _____ the housing market.', answer: "in, on", options: ["in, on", "of, in", "on, for", "for, to"], hint: "rise IN + impact ON." },
            { type: 'fill', difficulty: 'hard', question: 'There is a strong connection _____ employee satisfaction and the quality _____ management.', answer: "between, of", options: ["between, of", "with, in", "of, for", "in, to"], hint: "Connection between A and B. Quality of something." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The damage of the equipment was caused by flooding.", options: ["The damage of the equipment was caused by flooding.", "The damage to the equipment was caused by flooding.", "There was a need for additional staff during the holiday season."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The advantage _____ this method is that it saves time.', answer: "of", options: ["of", "for", "to", "in"] },
            { type: 'fill', difficulty: 'hard', question: 'There has been a sharp decrease _____ demand _____ printed materials.', answer: "in, for", options: ["in, for", "of, to", "on, in", "for, of"] },
            { type: 'fill', difficulty: 'hard', question: 'Her reaction _____ the news was surprising.', answer: "to", options: ["to", "for", "of", "about"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The difference between the two proposals is significant.", options: ["The difference between the two proposals is significant.", "The difference of the two proposals is significant.", "The difference for the two proposals is significant."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 127 — Prepositions — adjective + preposition (afraid of, etc.)
    // ─────────────────────────────────────────────
    127: {
        id: 127,
        title: 'Prepositions — adjective + preposition (afraid of, etc.)',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Adjectif + préposition : combinaisons à mémoriser</b><br><br>
Comme les noms, de nombreux adjectifs sont suivis d'une <b>préposition fixe</b>.<br><br>
<b>Avec OF :</b> afraid of, aware of, capable of, fond of, proud of, tired of, full of, short of<br>
<b>Avec FOR :</b> responsible for, famous for, sorry for, ready for, grateful for<br>
<b>Avec TO :</b> used to, similar to, married to, polite to, rude to, devoted to<br>
<b>Avec IN :</b> interested in, involved in, successful in<br>
<b>Avec WITH :</b> pleased with, satisfied with, disappointed with, fed up with, familiar with<br>
<b>Avec AT :</b> good at, bad at, surprised at/by, amazed at/by<br>
<b>Avec ABOUT :</b> worried about, excited about, enthusiastic about, serious about<br><br>
⚠️ En français, on dit « intéressé PAR » mais en anglais c'est « interested <b>IN</b> ».`,
        rules: [
            '📐 afraid/aware/capable/proud/tired **of** : _She\'s aware **of** the risks._',
            '📐 responsible/famous/sorry/ready **for** : _Who is responsible **for** this project?_',
            '📐 used/similar/married **to** : _This method is similar **to** the previous one._',
            '📐 interested/involved/successful **in** : _I\'m interested **in** applying for the job._',
            '📐 pleased/satisfied/disappointed **with** : _The client was pleased **with** the results._',
            '📐 good/bad **at** : _She\'s very good **at** negotiating._',
            '📐 worried/excited/enthusiastic **about** : _We\'re excited **about** the new partnership._',
            '🔴 ~~interested by~~ → interested **in** | ~~responsible of~~ → responsible **for**'
        ],
        examples: [
            { text: "The board is **aware of** the financial challenges.", fr: "Le conseil d'administration est conscient des défis financiers.", correct: true },
            { text: "She's **responsible for** managing the team's budget.", fr: "Elle est responsable de la gestion du budget de l'équipe.", correct: true },
            { text: "We're very **pleased with** your performance this quarter.", fr: "Nous sommes très satisfaits de votre performance ce trimestre.", correct: true },
            { text: "He's **good at** solving problems under pressure.", fr: "Il est bon pour résoudre les problèmes sous pression.", correct: true },
            { text: "~~I'm interested by this opportunity.~~ → I'm interested **in** this opportunity.", fr: "Je suis intéressé(e) par cette opportunité.", correct: false, note: "En français 'intéressé PAR', en anglais 'interested IN'." }
        ],
        tips: [
            "🇫🇷 Pièges majeurs pour francophones : 'intéressé PAR' = interested IN. 'Responsable DE' = responsible FOR. 'Satisfait DE' = satisfied WITH.",
            "⚠️ 'Used to' (habitué à) vs 'used to + verb' (avais l'habitude de). 'I'm used TO working late' (adj + prép) ≠ 'I used to work late' (habitude passée).",
            "💡 Au TOEIC Part 5, les questions adj + préposition sont parmi les plus fréquentes. Mémorisez les combinaisons par préposition !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She is afraid _____ losing her job.', answer: "of", options: ["of", "for", "about", "to"], hint: "afraid + préposition = afraid of." },
            { type: 'fill', difficulty: 'easy', question: 'I\'m interested _____ the marketing position.', answer: "in", options: ["in", "by", "for", "about"], hint: "interested + préposition = interested in." },
            { type: 'fill', difficulty: 'easy', question: 'She is very good _____ public speaking.', answer: "at", options: ["at", "in", "for", "with"], hint: "good + préposition = good at." },
            { type: 'fill', difficulty: 'medium', question: 'The employees were not satisfied _____ the new salary structure.', answer: "with", options: ["with", "of", "about", "for"], hint: "satisfied + préposition = satisfied with." },
            { type: 'fill', difficulty: 'medium', question: 'Who is responsible _____ training new staff?', answer: "for", options: ["for", "of", "to", "about"], hint: "responsible + préposition = responsible for." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The new system is similar to the one we used before.", options: ["The new system is similar to the one we used before.", "The new system is similar with the one we used before.", "The new system is similar of the one we used before."] },
            { type: 'fill', difficulty: 'hard', question: 'She\'s _____ up _____ the long commute and is looking for a job closer to home.', answer: "fed, with", options: ["fed, with", "tired, for", "fed, of", "done, about"], hint: "Fed up WITH = en avoir marre de." },
            { type: 'fill', difficulty: 'hard', question: 'The investors are aware _____ the risks but remain enthusiastic _____ the potential returns.', answer: "of, about", options: ["of, about", "about, of", "of, for", "for, about"], hint: "Aware OF. Enthusiastic ABOUT." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She is responsible of the entire project.", options: ["She is responsible of the entire project.", "She is responsible for the entire project.", "She is proud of the team's achievements."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All employees must be familiar _____ the company\'s safety procedures.', answer: "with", options: ["with", "of", "to", "about"] },
            { type: 'fill', difficulty: 'hard', question: 'The manager was disappointed _____ the results but proud _____ the team\'s effort.', answer: "with, of", options: ["with, of", "of, with", "about, for", "for, about"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I'm not used to working such long hours.", options: ["I'm not used to working such long hours.", "I'm not used for working such long hours.", "I'm not used of working such long hours."] },
            { type: 'fill', difficulty: 'hard', question: 'The company is short _____ qualified engineers and is keen _____ recruiting internationally.', answer: "of, on", options: ["of, on", "in, for", "of, about", "for, to"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 128 — Prepositions — verb + preposition (1) — depend on, etc.
    // ─────────────────────────────────────────────
    128: {
        id: 128,
        title: 'Prepositions — verb + preposition (1) — depend on, etc.',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Verbe + préposition (1) : dépendre de, consister en, etc.</b><br><br>
Certains verbes anglais sont suivis d'une <b>préposition fixe</b> qui diffère souvent du français :<br><br>
<b>depend on</b> = dépendre de : <i>"It <b>depends on</b> the budget."</i><br>
<b>belong to</b> = appartenir à : <i>"This laptop <b>belongs to</b> the IT department."</i><br>
<b>consist of</b> = consister en / se composer de : <i>"The team <b>consists of</b> five members."</i><br>
<b>rely on</b> = compter sur : <i>"We <b>rely on</b> our partners."</i><br>
<b>result in</b> = aboutir à, entraîner : <i>"The error <b>resulted in</b> a delay."</i><br>
<b>result from</b> = résulter de : <i>"The delay <b>resulted from</b> a shortage."</i><br>
<b>succeed in</b> = réussir à : <i>"She <b>succeeded in</b> getting the contract."</i><br>
<b>participate in</b> = participer à : <i>"All staff must <b>participate in</b> the training."</i>`,
        rules: [
            '📐 **depend on** (= dépendre de) : _The deadline **depends on** the client\'s response._',
            '📐 **belong to** (= appartenir à) : _This equipment **belongs to** the company._',
            '📐 **consist of** (= se composer de) : _The report **consists of** three sections._',
            '📐 **rely on** (= compter sur) : _We **rely on** technology for communication._',
            '📐 **result in** (= entraîner) / **result from** (= résulter de) : _The strike **resulted in** losses._ / _Losses **resulted from** the strike._',
            '📐 **succeed in** (= réussir à) / **participate in** (= participer à)',
            '🔴 ~~depend of~~ → depend **on** | ~~consist in~~ → consist **of** | ~~participate at~~ → participate **in**'
        ],
        examples: [
            { text: "The success of the project **depends on** teamwork.", fr: "Le succès du projet dépend du travail d'équipe.", correct: true },
            { text: "The package **consists of** a laptop, software, and a user manual.", fr: "Le pack se compose d'un ordinateur portable, d'un logiciel et d'un guide.", correct: true },
            { text: "The delay **resulted from** a supply chain disruption.", fr: "Le retard résultait d'une perturbation de la chaîne d'approvisionnement.", correct: true },
            { text: "All employees are encouraged to **participate in** the wellness program.", fr: "Tous les employés sont encouragés à participer au programme de bien-être.", correct: true },
            { text: "~~It depends of the weather.~~ → It **depends on** the weather.", fr: "Ça dépend du temps.", correct: false, note: "En français 'dépendre DE', en anglais 'depend ON'." }
        ],
        tips: [
            "🇫🇷 Pièges majeurs : 'dépendre DE' = depend ON. 'Participer À' = participate IN. 'Consister EN' = consist OF. Les prépositions sont différentes !",
            "⚠️ Ne confondez pas : 'result IN' (= causer/entraîner) vs. 'result FROM' (= être causé par). La direction est inversée !",
            "💡 Au TOEIC, 'depend on', 'consist of', et 'result in/from' sont parmi les combinaisons les plus testées."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The delivery time depends _____ the shipping method.', answer: "on", options: ["on", "of", "in", "from"], hint: "depend + préposition = depend on." },
            { type: 'fill', difficulty: 'easy', question: 'This building belongs _____ the city council.', answer: "to", options: ["to", "for", "of", "at"], hint: "belong + préposition = belong to." },
            { type: 'fill', difficulty: 'easy', question: 'The team consists _____ eight engineers.', answer: "of", options: ["of", "in", "from", "with"], hint: "consist + préposition = consist of." },
            { type: 'fill', difficulty: 'medium', question: 'The power outage resulted _____ the loss of important data.', answer: "in", options: ["in", "from", "to", "of"], hint: "Cause → conséquence : result IN + conséquence." },
            { type: 'fill', difficulty: 'medium', question: 'She succeeded _____ convincing the board to approve the project.', answer: "in", options: ["in", "to", "at", "for"], hint: "succeed + préposition = succeed in." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "We rely on our suppliers to deliver on time.", options: ["We rely on our suppliers to deliver on time.", "We rely of our suppliers to deliver on time.", "We rely in our suppliers to deliver on time."] },
            { type: 'fill', difficulty: 'hard', question: 'The confusion resulted _____ a lack of communication, which in turn resulted _____ several missed deadlines.', answer: "from, in", options: ["from, in", "in, from", "of, to", "from, from"], hint: "Result FROM = être causé par. Result IN = entraîner." },
            { type: 'fill', difficulty: 'hard', question: 'The training program consists _____ three modules and all staff must participate _____ at least two.', answer: "of, in", options: ["of, in", "in, of", "of, at", "in, in"], hint: "Consist OF. Participate IN." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The outcome depends of many factors.", options: ["The outcome depends of many factors.", "The outcome depends on many factors.", "We can rely on the new system to process orders faster."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All new hires must participate _____ an orientation session.', answer: "in", options: ["in", "at", "to", "for"] },
            { type: 'fill', difficulty: 'hard', question: 'The merger resulted _____ significant cost savings for both companies.', answer: "in", options: ["in", "from", "to", "of"] },
            { type: 'fill', difficulty: 'hard', question: 'The final product consists _____ locally sourced materials and the price depends _____ the size of the order.', answer: "of, on", options: ["of, on", "in, of", "of, from", "from, in"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The problems resulted from poor planning.", options: ["The problems resulted from poor planning.", "The problems resulted of poor planning.", "The problems resulted by poor planning."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 129 — Prepositions — verb + preposition (2) — apologise for, etc.
    // ─────────────────────────────────────────────
    129: {
        id: 129,
        title: 'Prepositions — verb + preposition (2) — apologise for, etc.',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Verbe + préposition (2) : s'excuser de, remercier pour, etc.</b><br><br>
<b>apologise for</b> = s'excuser de/pour : <i>"I <b>apologise for</b> the inconvenience."</i><br>
<b>thank (sb) for</b> = remercier (qqn) de : <i>"Thank you <b>for</b> your help."</i><br>
<b>apply for</b> = postuler à/pour : <i>"She <b>applied for</b> the position."</i><br>
<b>wait for</b> = attendre : <i>"We're <b>waiting for</b> the approval."</i><br>
<b>pay for</b> = payer : <i>"Who's going to <b>pay for</b> the repairs?"</i><br>
<b>ask for</b> = demander : <i>"He <b>asked for</b> a raise."</i><br>
<b>care about</b> = se soucier de : <i>"She <b>cares about</b> her team."</i><br>
<b>care for</b> = prendre soin de : <i>"Nurses <b>care for</b> patients."</i><br>
<b>look for</b> = chercher : <i>"I'm <b>looking for</b> the meeting room."</i><br>
<b>listen to</b> = écouter : <i>"Please <b>listen to</b> the announcement."</i>`,
        rules: [
            '📐 **apologise/apologize for** : _We apologise **for** the delay._ (s\'excuser POUR)',
            '📐 **thank for**, **ask for**, **apply for**, **pay for**, **wait for**, **look for** → préposition **for**',
            '📐 **listen to** : _Please listen **to** the safety instructions._ (écouter → PAS ~~listen the~~)',
            '📐 **care about** = se soucier de / **care for** = prendre soin de',
            '📐 **look for** = chercher / **look at** = regarder / **look after** = surveiller, s\'occuper de',
            '🔴 ~~listen the music~~ → listen **to** the music',
            '🔴 ~~wait the bus~~ → wait **for** the bus'
        ],
        examples: [
            { text: "We **apologise for** any inconvenience caused.", fr: "Nous nous excusons pour tout désagrément causé.", correct: true },
            { text: "Thank you **for** attending the meeting.", fr: "Merci d'avoir assisté à la réunion.", correct: true },
            { text: "She **applied for** the management position last week.", fr: "Elle a postulé au poste de direction la semaine dernière.", correct: true },
            { text: "We've been **waiting for** the supplier's confirmation for three days.", fr: "Nous attendons la confirmation du fournisseur depuis trois jours.", correct: true },
            { text: "~~Please listen the instructions carefully.~~ → Please **listen to** the instructions carefully.", fr: "Écoutez attentivement les instructions.", correct: false, note: "En anglais, 'listen' a TOUJOURS besoin de 'to'. En français, 'écouter' est direct." }
        ],
        tips: [
            "🇫🇷 'Écouter' est un verbe direct en français (écouter la musique). En anglais, 'listen' a besoin de 'to' : listen TO the music. Même chose pour 'wait' : 'attendre le bus' = wait FOR the bus.",
            "⚠️ 'Look for' (chercher) ≠ 'look at' (regarder) ≠ 'look after' (s'occuper de). Trois prépositions, trois sens !",
            "💡 Au TOEIC : 'apologise for', 'thank for', 'apply for' sont très fréquents dans les contextes d'e-mails et de lettres professionnelles."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Please listen _____ the announcement carefully.', answer: "to", options: ["to", "for", "at", "about"], hint: "Listen + préposition = listen to." },
            { type: 'fill', difficulty: 'easy', question: 'She applied _____ the internship program.', answer: "for", options: ["for", "to", "at", "in"], hint: "apply + préposition = apply for." },
            { type: 'fill', difficulty: 'easy', question: 'Thank you _____ your prompt response.', answer: "for", options: ["for", "to", "about", "of"], hint: "Thank + préposition = thank for." },
            { type: 'fill', difficulty: 'medium', question: 'We\'re still waiting _____ the results of the audit.', answer: "for", options: ["for", "to", "on", "about"], hint: "wait + préposition = wait for." },
            { type: 'fill', difficulty: 'medium', question: 'I\'m looking _____ a copy of the contract. Have you seen it?', answer: "for", options: ["for", "at", "to", "after"], hint: "Chercher → look for." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "We apologise for the error in your invoice.", options: ["We apologise for the error in your invoice.", "We apologise about the error in your invoice.", "We apologise of the error in your invoice."] },
            { type: 'fill', difficulty: 'hard', question: 'The company cares _____ its employees and also cares _____ its reputation in the industry.', answer: "about, about", options: ["about, about", "for, about", "about, for", "for, for"], hint: "Se soucier de → care about (les deux fois ici)." },
            { type: 'fill', difficulty: 'hard', question: 'He asked _____ a transfer to the London office and applied _____ the senior analyst role.', answer: "for, for", options: ["for, for", "to, for", "for, to", "about, for"], hint: "Ask for + apply for → les deux prennent 'for'." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We are waiting the delivery since Monday.", options: ["We are waiting the delivery since Monday.", "We have been waiting for the delivery since Monday.", "She's looking for a new supplier."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Who is going to pay _____ the conference tickets?', answer: "for", options: ["for", "to", "on", "about"] },
            { type: 'fill', difficulty: 'hard', question: 'We apologise _____ the delay and thank you _____ your patience.', answer: "for, for", options: ["for, for", "about, for", "for, to", "of, for"] },
            { type: 'fill', difficulty: 'hard', question: 'She was listening _____ a podcast while looking _____ her passport.', answer: "to, for", options: ["to, for", "for, at", "at, for", "to, at"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "He asked for more time to complete the project.", options: ["He asked for more time to complete the project.", "He asked about more time to complete the project.", "He asked to more time to complete the project."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 130 — Prepositions — verb + preposition (3) — look after, etc.
    // ─────────────────────────────────────────────
    130: {
        id: 130,
        title: 'Prepositions — verb + preposition (3) — look after, etc.',
        category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Verbe + préposition (3) : phrasal verbs courants au TOEIC</b><br><br>
<b>look after</b> = s'occuper de : <i>"Who <b>looks after</b> the accounts?"</i><br>
<b>look forward to</b> = avoir hâte de : <i>"I <b>look forward to</b> hearing from you."</i><br>
<b>look into</b> = examiner, enquêter : <i>"We'll <b>look into</b> the matter."</i><br>
<b>look up</b> = chercher (dans un dictionnaire, en ligne) : <i>"<b>Look up</b> their company profile."</i><br>
<b>give up</b> = abandonner : <i>"Don't <b>give up</b>!"</i><br>
<b>turn down</b> = refuser : <i>"She <b>turned down</b> the offer."</i><br>
<b>put off</b> = reporter : <i>"Let's <b>put off</b> the meeting."</i><br>
<b>carry out</b> = effectuer, réaliser : <i>"We need to <b>carry out</b> the survey."</i><br>
<b>fill in/out</b> = remplir (un formulaire) : <i>"Please <b>fill in</b> this form."</i><br>
<b>set up</b> = créer, mettre en place : <i>"We <b>set up</b> a new department."</i><br><br>
⚠️ Après <b>look forward to</b>, on utilise le <b>-ing</b> : <i>"I look forward to <b>meeting</b> you."</i> (PAS ~~to meet~~)`,
        rules: [
            '📐 **look after** = s\'occuper de : _She **looks after** the client accounts._',
            '📐 **look forward to** + **-ing** = avoir hâte de : _I **look forward to** receiving your reply._ (PAS ~~to receive~~)',
            '📐 **look into** = examiner/enquêter : _The department will **look into** the complaint._',
            '📐 **carry out** = effectuer/réaliser : _The team **carried out** the inspection._',
            '📐 **put off** = reporter / **turn down** = refuser / **give up** = abandonner',
            '📐 **set up** = créer, mettre en place / **fill in/out** = remplir (formulaire)',
            '🔴 ~~look forward to meet~~ → look forward to **meeting** ("to" ici est une préposition, pas un infinitif !)'
        ],
        examples: [
            { text: "I **look forward to** working with your team.", fr: "J'ai hâte de travailler avec votre équipe.", correct: true },
            { text: "The committee will **look into** the allegations.", fr: "Le comité examinera les allégations.", correct: true },
            { text: "She **turned down** the job offer because of the salary.", fr: "Elle a refusé l'offre d'emploi à cause du salaire.", correct: true },
            { text: "The meeting has been **put off** until next week.", fr: "La réunion a été reportée à la semaine prochaine.", correct: true },
            { text: "~~I look forward to meet you.~~ → I look forward to **meeting** you.", fr: "J'ai hâte de vous rencontrer.", correct: false, note: "Après 'look forward to', le 'to' est une préposition → -ing (pas infinitif)." }
        ],
        tips: [
            "🇫🇷 'Look forward to' = formule INCONTOURNABLE des e-mails professionnels. Le 'to' ici n'est PAS l'infinitif — c'est une préposition → toujours + -ing !",
            "⚠️ 'Fill in' (UK) = 'fill out' (US) = remplir un formulaire. Les deux sont corrects au TOEIC.",
            "💡 Les phrasal verbs sont testés en Part 5, 6 et 7 du TOEIC. Apprenez 'carry out' (effectuer), 'set up' (mettre en place), 'look into' (examiner) — vocabulaire business essentiel !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Please fill _____ this application form.', answer: "in", options: ["in", "up", "on", "for"], hint: "Remplir un formulaire → fill in / fill out." },
            { type: 'fill', difficulty: 'easy', question: 'We look forward _____ hearing from you.', answer: "to", options: ["to", "for", "at", "about"], hint: "Look forward TO + -ing." },
            { type: 'fill', difficulty: 'easy', question: 'Don\'t give _____! The exam is almost over.', answer: "up", options: ["up", "in", "off", "out"], hint: "Abandonner → give up." },
            { type: 'fill', difficulty: 'medium', question: 'The HR department will look _____ the complaint filed by the employee.', answer: "into", options: ["into", "after", "for", "up"], hint: "Examiner/enquêter → look into." },
            { type: 'fill', difficulty: 'medium', question: 'She turned _____ the promotion because she wanted to stay in her current role.', answer: "down", options: ["down", "off", "up", "out"], hint: "Refuser → turn down." },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I look forward to meeting you at the conference.", options: ["I look forward to meeting you at the conference.", "I look forward to meet you at the conference.", "I look forward for meeting you at the conference."] },
            { type: 'fill', difficulty: 'hard', question: 'The company _____ out a thorough investigation and decided to _____ up a new compliance team.', answer: "carried, set", options: ["carried, set", "looked, put", "turned, gave", "put, carried"], hint: "Effectuer → carry out. Créer → set up." },
            { type: 'fill', difficulty: 'hard', question: 'The meeting was put _____ because the CEO had to look _____ an urgent matter. She asked her assistant to look _____ the rescheduling.', answer: "off, into, after", options: ["off, into, after", "off, after, into", "down, for, into", "up, after, for"], hint: "Reporter → put off. Examiner → look into. S'occuper de → look after." },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We look forward to receive your application.", options: ["We look forward to receive your application.", "We look forward to receiving your application.", "The auditors carried out a detailed review."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Please fill _____ the feedback form before you leave.', answer: "out", options: ["out", "up", "on", "for"] },
            { type: 'fill', difficulty: 'hard', question: 'We look forward _____ _____ with your company in the future.', answer: "to, working", options: ["to, working", "to, work", "for, working", "to, worked"] },
            { type: 'fill', difficulty: 'hard', question: 'The board decided to turn _____ the acquisition offer and instead set _____ a new R&D division.', answer: "down, up", options: ["down, up", "off, up", "down, out", "up, down"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The manager carried out a performance review for all team members.", options: ["The manager carried out a performance review for all team members.", "The manager carried on a performance review for all team members.", "The manager carried up a performance review for all team members."] }
        ]
    }
};
