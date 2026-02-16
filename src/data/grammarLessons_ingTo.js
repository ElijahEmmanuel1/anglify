// ============================================
// Grammar Lessons — -ing and to ... (Units 53-68)
// French explanations for French-speaking learners
// ============================================

export const grammarLessonsIngTo = {

    // ─────────────────────────────────────────────
    // UNIT 53 — Verb + -ing (enjoy doing / stop doing etc.)
    // ─────────────────────────────────────────────
    53: {
        id: 53,
        title: 'Verb + -ing (enjoy doing / stop doing etc.)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certains verbes anglais sont toujours suivis de -ing</b> (le gérondif). C'est une des grandes difficultés de l'anglais car en français, on utilise souvent l'infinitif après un verbe.<br><br>
<b>Exemples clés :</b><br>
• <i>I <b>enjoy reading</b>.</i> = J'aime lire. (PAS ~~enjoy to read~~)<br>
• <i>She <b>stopped smoking</b>.</i> = Elle a arrêté de fumer.<br><br>
<b>Liste des verbes toujours suivis de -ing :</b><br>
enjoy, mind, finish, stop, suggest, imagine, avoid, admit, deny, recommend, consider, practise, miss, involve, keep (on), give up, put off, carry on, go on, fancy, risk, feel like<br><br>
⚠️ <b>Piège :</b> JAMAIS <i>"enjoy to do"</i>, <i>"suggest to do"</i>, <i>"mind to do"</i> — c'est TOUJOURS <b>+ -ing</b>.`,
        rules: [
            '📐 **enjoy / mind / finish / stop / suggest / imagine / avoid / admit / deny / recommend / consider / practise / miss / risk** → toujours + **-ing**',
            '📐 _I enjoy **reading**_ = J\'aime lire. JAMAIS _I enjoy ~~to read~~_',
            '📐 **give up / put off / carry on / go on / keep (on)** sont aussi suivis de **-ing** : _She **gave up smoking**._',
            '📐 Après une préposition, on utilise toujours **-ing** : _I\'m interested **in learning**._',
            '📐 **Forme négative** : not + -ing → _He suggested **not going** out._'
        ],
        examples: [
            { text: "I **enjoy cooking** for my family.", fr: "J'aime cuisiner pour ma famille.", correct: true },
            { text: "She **suggested going** to the cinema.", fr: "Elle a suggéré d'aller au cinéma.", correct: true },
            { text: "Would you **mind closing** the window?", fr: "Ça vous dérangerait de fermer la fenêtre ?", correct: true },
            { text: "He **avoided answering** the question.", fr: "Il a évité de répondre à la question.", correct: true },
            { text: "~~I enjoy to read~~ → I enjoy **reading**.", fr: "JAMAIS 'to' après enjoy !", correct: false, note: "enjoy, mind, suggest, avoid → TOUJOURS + -ing" }
        ],
        tips: [
            "🇫🇷 En français on dit 'j'aime lire' (infinitif), mais en anglais c'est 'I enjoy reading' (-ing). Ne traduisez pas mot à mot !",
            "💡 Astuce mnémotechnique : les verbes 'MEGA DISC' → Mind, Enjoy, Give up, Avoid, Deny, Imagine, Suggest, Consider → tous + -ing",
            "⚠️ 'stop' suivi de -ing = arrêter de faire : 'I stopped smoking' vs 'stop' suivi de to = s'arrêter pour faire : 'I stopped to smoke' (je me suis arrêté pour fumer)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I enjoy _____ (play) tennis on weekends.', answer: "playing", options: ["playing", "to play", "play", "played"], hint: "enjoy → toujours + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'She finished _____ (write) the report at 6 pm.', answer: "writing", options: ["writing", "to write", "write", "wrote"], hint: "finish → toujours + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'Would you mind _____ (open) the door?', answer: "opening", options: ["opening", "to open", "open", "opened"], hint: "mind → toujours + -ing" },
            { type: 'fill', difficulty: 'medium', question: 'He suggested _____ (take) a taxi to the airport.', answer: "taking", options: ["taking", "to take", "take", "took"], hint: "suggest → toujours + -ing" },
            { type: 'fill', difficulty: 'medium', question: 'I can\'t imagine _____ (live) in another country.', answer: "living", options: ["living", "to live", "live", "lived"] },
            { type: 'fill', difficulty: 'medium', question: 'She avoided _____ (make) eye contact with her boss.', answer: "making", options: ["making", "to make", "make", "made"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "He admitted stealing the money.", options: ["He admitted stealing the money.", "He admitted to steal the money.", "He admitted steal the money."] },
            { type: 'fill', difficulty: 'hard', question: 'The doctor recommended _____ (not eat) too much sugar.', answer: "not eating", options: ["not eating", "to not eat", "not to eat", "don't eat"] },
            { type: 'fill', difficulty: 'hard', question: 'She gave up _____ (try) to convince him.', answer: "trying", options: ["trying", "to try", "try", "tried"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The company considered _____ (move) to a bigger office.', answer: "moving", options: ["moving", "to move", "move", "moved"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I suggest to go home early today.", options: ["I suggest to go home early today.", "I enjoy working from home.", "She kept on talking during the meeting."] },
            { type: 'fill', difficulty: 'hard', question: 'He denied _____ (be) involved in the scandal.', answer: "being", options: ["being", "to be", "be", "been"] },
            { type: 'fill', difficulty: 'hard', question: 'She risked _____ (lose) her job by speaking out.', answer: "losing", options: ["losing", "to lose", "lose", "lost"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 54 — Verb + to ... (decide to / forget to etc.)
    // ─────────────────────────────────────────────
    54: {
        id: 54,
        title: 'Verb + to … (decide to / forget to etc.)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certains verbes sont toujours suivis de to + infinitif.</b> Ici, la logique est souvent plus proche du français (décider de faire → decide to do).<br><br>
<b>Verbes principaux :</b><br>
decide, offer, agree, refuse, promise, hope, expect, plan, manage, afford, arrange, threaten, fail, learn, tend, appear, seem, pretend, want, need<br><br>
<b>Exemples :</b><br>
• <i>She <b>decided to leave</b>.</i> = Elle a décidé de partir.<br>
• <i>He <b>offered to help</b>.</i> = Il a proposé d'aider.<br>
• <i>I <b>can't afford to buy</b> a new car.</i> = Je ne peux pas me permettre d'acheter une nouvelle voiture.`,
        rules: [
            '📐 **decide / offer / agree / refuse / promise / hope / expect / plan / manage / afford / arrange / threaten / fail / learn** → + **to + infinitif**',
            '📐 _She decided **to leave**._ = Elle a décidé de partir.',
            '📐 **want / need / would like** → + **to** : _I want **to go** home._',
            '📐 **Forme négative** : not to + verbe → _He promised **not to tell** anyone._',
            '📐 **seem / appear / tend / pretend** → + **to** : _She seems **to be** happy._'
        ],
        examples: [
            { text: "She **decided to quit** her job.", fr: "Elle a décidé de quitter son travail.", correct: true },
            { text: "He **offered to help** me with the project.", fr: "Il a proposé de m'aider avec le projet.", correct: true },
            { text: "I **can't afford to buy** a new car.", fr: "Je ne peux pas me permettre d'acheter une nouvelle voiture.", correct: true },
            { text: "They **agreed to meet** at 3 pm.", fr: "Ils ont accepté de se retrouver à 15h.", correct: true },
            { text: "She **promised not to tell** anyone.", fr: "Elle a promis de ne le dire à personne.", correct: true }
        ],
        tips: [
            "🇫🇷 Bonne nouvelle : pour ces verbes, la logique est similaire au français ! 'décider de faire' → 'decide to do'",
            "⚠️ Ne confondez pas : want to do (vouloir faire) ≠ enjoy doing (aimer faire). Le verbe qui précède détermine la structure !",
            "💡 TOEIC : 'fail to do' (échouer à, ne pas réussir à) et 'manage to do' (réussir à) sont très fréquents dans les textes business."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She decided _____ (go) to university.', answer: "to go", options: ["to go", "going", "go", "gone"], hint: "decide → toujours + to" },
            { type: 'fill', difficulty: 'easy', question: 'He offered _____ (carry) my bags.', answer: "to carry", options: ["to carry", "carrying", "carry", "carried"], hint: "offer → toujours + to" },
            { type: 'fill', difficulty: 'easy', question: 'I hope _____ (see) you again soon.', answer: "to see", options: ["to see", "seeing", "see", "seen"], hint: "hope → toujours + to" },
            { type: 'fill', difficulty: 'medium', question: 'They refused _____ (accept) the offer.', answer: "to accept", options: ["to accept", "accepting", "accept", "accepted"] },
            { type: 'fill', difficulty: 'medium', question: 'He promised _____ (not be) late again.', answer: "not to be", options: ["not to be", "to not be", "not being", "don't be"] },
            { type: 'fill', difficulty: 'medium', question: 'She managed _____ (finish) the project on time.', answer: "to finish", options: ["to finish", "finishing", "finish", "finished"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I can't afford to buy a new car.", options: ["I can't afford to buy a new car.", "I can't afford buying a new car.", "I can't afford buy a new car."] },
            { type: 'fill', difficulty: 'hard', question: 'The company failed _____ (meet) its quarterly targets.', answer: "to meet", options: ["to meet", "meeting", "meet", "met"] },
            { type: 'fill', difficulty: 'hard', question: 'She tends _____ (arrive) late to meetings.', answer: "to arrive", options: ["to arrive", "arriving", "arrive", "arrived"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'He arranged _____ (meet) the client at the hotel.', answer: "to meet", options: ["to meet", "meeting", "meet", "met"] },
            { type: 'fill', difficulty: 'hard', question: 'She threatened _____ (resign) if conditions didn\'t improve.', answer: "to resign", options: ["to resign", "resigning", "resign", "resigned"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "He offered helping me.", options: ["He offered helping me.", "She agreed to come.", "They planned to visit Paris."] },
            { type: 'fill', difficulty: 'hard', question: 'The CEO appeared _____ (be) confident about the merger.', answer: "to be", options: ["to be", "being", "be", "been"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 55 — Verb + (object) + to ...
    // ─────────────────────────────────────────────
    55: {
        id: 55,
        title: 'Verb + (object) + to … (I want you to …)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certains verbes suivent le schéma : verbe + complément + to + infinitif.</b><br><br>
En français, on utilise souvent « que + subjonctif » : <i>Je veux que tu viennes.</i> En anglais, la structure est très différente : <b>I want you to come.</b><br><br>
<b>Verbes principaux :</b> want, ask, tell, expect, advise, encourage, persuade, remind, warn, invite, teach, allow, permit, force, order<br><br>
• <i>I <b>want you to</b> be happy.</i> = Je veux que tu sois heureux.<br>
• <i>She <b>asked me to</b> help.</i> = Elle m'a demandé d'aider.<br>
• <i>He <b>told me to</b> wait.</i> = Il m'a dit d'attendre.<br><br>
⚠️ <b>Piège :</b> En français : « je veux que tu fasses » (subjonctif). En anglais : <b>I want you to do</b> (infinitif). JAMAIS <i>~~I want that you do~~</i> !`,
        rules: [
            '📐 **want / expect / would like** + objet + **to** : _I want **you to come**._',
            '📐 **ask / tell / advise / remind / warn / invite** + objet + **to** : _She asked **me to help**._',
            '📐 **encourage / persuade / teach / allow / force / order** + objet + **to** : _He persuaded **her to stay**._',
            '📐 JAMAIS "I want **that** you do" → toujours _I want **you to do**_',
            '📐 Forme négative : verbe + objet + **not to** + infinitif → _He told me **not to worry**._'
        ],
        examples: [
            { text: "I **want you to** be careful.", fr: "Je veux que tu fasses attention.", correct: true },
            { text: "She **asked me to** close the door.", fr: "Elle m'a demandé de fermer la porte.", correct: true },
            { text: "He **told her not to** worry.", fr: "Il lui a dit de ne pas s'inquiéter.", correct: true },
            { text: "The teacher **encouraged us to** ask questions.", fr: "Le professeur nous a encouragés à poser des questions.", correct: true },
            { text: "~~I want that you come~~ → I want **you to come**.", fr: "JAMAIS 'that' avec want !", correct: false, note: "Francophone error: I want + objet + to + infinitif" }
        ],
        tips: [
            "🇫🇷 C'est LE piège n°1 des francophones ! En français : 'je veux QUE tu viennes'. En anglais : 'I want YOU TO come'. Pas de 'that' !",
            "💡 Avec 'tell' : TOUJOURS un complément. 'He told TO wait' ❌ → 'He told ME to wait' ✅",
            "⚠️ 'advise' au TOEIC : 'The HR department advises employees to update their profiles.' → très fréquent en contexte professionnel."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I want you _____ (come) to the party.', answer: "to come", options: ["to come", "coming", "come", "came"], hint: "want + objet + to" },
            { type: 'fill', difficulty: 'easy', question: 'She asked me _____ (help) her.', answer: "to help", options: ["to help", "helping", "help", "helped"], hint: "ask + objet + to" },
            { type: 'fill', difficulty: 'easy', question: 'He told me _____ (wait) outside.', answer: "to wait", options: ["to wait", "waiting", "wait", "waited"] },
            { type: 'fill', difficulty: 'medium', question: 'The manager expected everyone _____ (arrive) on time.', answer: "to arrive", options: ["to arrive", "arriving", "arrive", "arrived"] },
            { type: 'fill', difficulty: 'medium', question: 'My parents didn\'t allow me _____ (go) out late.', answer: "to go", options: ["to go", "going", "go", "gone"] },
            { type: 'fill', difficulty: 'medium', question: 'She reminded me _____ (not forget) my passport.', answer: "not to forget", options: ["not to forget", "to not forget", "not forgetting", "don't forget"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I want you to listen carefully.", options: ["I want you to listen carefully.", "I want that you listen carefully.", "I want you listen carefully."] },
            { type: 'fill', difficulty: 'hard', question: 'The boss persuaded the employees _____ (accept) the new terms.', answer: "to accept", options: ["to accept", "accepting", "accept", "accepted"] },
            { type: 'fill', difficulty: 'hard', question: 'The government warned citizens _____ (not travel) to the area.', answer: "not to travel", options: ["not to travel", "to not travel", "not travelling", "don't travel"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'She invited her colleagues _____ (join) the conference.', answer: "to join", options: ["to join", "joining", "join", "joined"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I want that she comes to the meeting.", options: ["I want that she comes to the meeting.", "He told me to be quiet.", "She persuaded him to stay."] },
            { type: 'fill', difficulty: 'hard', question: 'The company forced employees _____ (work) overtime during the crisis.', answer: "to work", options: ["to work", "working", "work", "worked"] },
            { type: 'fill', difficulty: 'hard', question: 'The marketing team encouraged customers _____ (provide) feedback.', answer: "to provide", options: ["to provide", "providing", "provide", "provided"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 56 — Verb + -ing or to … (1) — remember / regret etc.
    // ─────────────────────────────────────────────
    56: {
        id: 56,
        title: 'Verb + -ing or to … (1) — remember, regret, try',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certains verbes changent de sens selon qu'on les suit de -ing ou de to !</b> C'est essentiel à comprendre.<br><br>
<b>1. remember / forget :</b><br>
• remember + <b>-ing</b> = se souvenir d'avoir fait : <i>I remember <b>locking</b> the door.</i> (Je me souviens d'avoir fermé la porte.)<br>
• remember + <b>to</b> = ne pas oublier de faire : <i>Remember <b>to lock</b> the door!</i> (N'oublie pas de fermer la porte !)<br><br>
<b>2. try :</b><br>
• try + <b>-ing</b> = essayer comme expérience : <i>Try <b>turning</b> it off and on again.</i> (Essaie de l'éteindre et rallumer.)<br>
• try + <b>to</b> = faire un effort pour : <i>I tried <b>to open</b> the window, but it was stuck.</i> (J'ai essayé d'ouvrir la fenêtre, mais elle était coincée.)<br><br>
<b>3. regret :</b><br>
• regret + <b>-ing</b> = regretter d'avoir fait : <i>I regret <b>telling</b> him.</i> (Je regrette de lui avoir dit.)<br>
• regret + <b>to</b> = être désolé de (formel) : <i>We regret <b>to inform</b> you…</i> (Nous avons le regret de vous informer…)`,
        rules: [
            '📐 **remember + -ing** = se souvenir d\'avoir fait → _I remember **meeting** her._ (Je me souviens de l\'avoir rencontrée.)',
            '📐 **remember + to** = ne pas oublier de faire → _Remember **to call** me._ (N\'oublie pas de m\'appeler.)',
            '📐 **try + -ing** = essayer comme expérience/suggestion → _Try **adding** some salt._ (Essaie d\'ajouter du sel.)',
            '📐 **try + to** = faire un effort → _I tried **to lift** the box but it was too heavy._ (J\'ai essayé de soulever la boîte.)',
            '📐 **regret + -ing** = regretter d\'avoir fait → _I regret **saying** that._ / **regret + to** = registre formel → _We regret **to inform** you._'
        ],
        examples: [
            { text: "I remember **meeting** you at the conference.", fr: "Je me souviens de vous avoir rencontré à la conférence.", correct: true },
            { text: "Remember **to bring** your ID card.", fr: "N'oublie pas d'apporter ta carte d'identité.", correct: true },
            { text: "Try **pressing** the red button.", fr: "Essaie d'appuyer sur le bouton rouge. (suggestion)", correct: true },
            { text: "I tried **to explain**, but she wouldn't listen.", fr: "J'ai essayé d'expliquer, mais elle n'écoutait pas. (effort)", correct: true },
            { text: "We regret **to inform** you that your application was unsuccessful.", fr: "Nous avons le regret de vous informer que votre candidature n'a pas été retenue.", correct: true }
        ],
        tips: [
            "🇫🇷 remember + -ing = 'je me SOUVIENS d'avoir fait' (passé) vs remember + to = 'je n'OUBLIE pas de faire' (futur). Pensez : -ing = passé, to = futur.",
            "💡 TOEIC classique : 'We regret to inform you...' = formule très courante dans les lettres professionnelles.",
            "⚠️ 'try' : Si c'est un conseil/une suggestion → -ing. Si c'est un effort → to. 'Try restarting your computer' (suggestion) vs 'I tried to restart it but it crashed' (effort)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I remember _____ (see) that movie when I was a child.', answer: "seeing", options: ["seeing", "to see", "see", "seen"], hint: "Se souvenir d'avoir fait → -ing" },
            { type: 'fill', difficulty: 'easy', question: 'Don\'t forget _____ (turn) off the lights before you leave.', answer: "to turn", options: ["to turn", "turning", "turn", "turned"], hint: "Ne pas oublier de faire → to" },
            { type: 'fill', difficulty: 'easy', question: 'I tried _____ (call) you but your phone was off.', answer: "to call", options: ["to call", "calling", "call", "called"], hint: "Faire un effort pour → to" },
            { type: 'fill', difficulty: 'medium', question: '"The food is too bland." "Try _____ (add) some spices."', answer: "adding", options: ["adding", "to add", "add", "added"] },
            { type: 'fill', difficulty: 'medium', question: 'She\'ll never forget _____ (visit) Paris for the first time.', answer: "visiting", options: ["visiting", "to visit", "visit", "visited"] },
            { type: 'fill', difficulty: 'medium', question: 'We regret _____ (inform) you that the flight has been cancelled.', answer: "to inform", options: ["to inform", "informing", "inform", "informed"] },
            { type: 'fill', difficulty: 'hard', question: 'He regrets _____ (not study) harder at university.', answer: "not studying", options: ["not studying", "to not study", "not to study", "don't study"] },
            { type: 'correct', difficulty: 'hard', question: '"I remember to lock the door" signifie :', answer: "Je n'oublierai pas de fermer la porte.", options: ["Je n'oublierai pas de fermer la porte.", "Je me souviens d'avoir fermé la porte.", "Je regrette d'avoir fermé la porte."] },
            { type: 'fill', difficulty: 'hard', question: 'I\'ll never forget _____ (hear) the news about the earthquake.', answer: "hearing", options: ["hearing", "to hear", "hear", "heard"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Please remember _____ (submit) the report by Friday.', answer: "to submit", options: ["to submit", "submitting", "submit", "submitted"] },
            { type: 'correct', difficulty: 'hard', question: 'Dans quel contexte dit-on "I stopped to smoke" ?', answer: "Je me suis arrêté(e) dans le but de fumer.", options: ["Je me suis arrêté(e) dans le but de fumer.", "J'ai arrêté de fumer.", "J'ai essayé de fumer."] },
            { type: 'fill', difficulty: 'hard', question: 'We regret _____ (announce) the closure of our downtown branch.', answer: "to announce", options: ["to announce", "announcing", "announce", "announced"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I tried adding more sugar but it still didn't taste good.", options: ["I tried adding more sugar but it still didn't taste good.", "I tried to adding more sugar.", "I tried add more sugar."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 57 — Verb + -ing or to … (2) — like, begin, continue
    // ─────────────────────────────────────────────
    57: {
        id: 57,
        title: 'Verb + -ing or to … (2) — like, begin, continue',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certains verbes acceptent -ing ET to sans changement de sens majeur.</b><br><br>
<b>Verbes où -ing et to sont (quasi) interchangeables :</b><br>
like, love, hate, prefer, begin, start, continue, intend, bother<br><br>
• <i>I <b>like swimming</b>.</i> = <i>I <b>like to swim</b>.</i> = J'aime nager.<br>
• <i>It <b>started raining</b>.</i> = <i>It <b>started to rain</b>.</i> = Il a commencé à pleuvoir.<br><br>
<b>Nuance pour like :</b><br>
• <b>like + -ing</b> = aimer, prendre du plaisir → <i>I like <b>cooking</b>.</i> (J'aime cuisiner — j'y prends du plaisir.)<br>
• <b>like + to</b> = trouver utile/judicieux → <i>I like <b>to cook</b> on Sundays.</i> (J'aime bien cuisiner le dimanche — c'est une bonne habitude.)<br><br>
⚠️ <b>would like / would love / would prefer</b> → TOUJOURS + **to** : _I'd like **to go** home._ (JAMAIS ~~I'd like going~~)`,
        rules: [
            '📐 **like / love / hate / prefer** acceptent **-ing** ou **to** : _I like **swimming** / I like **to swim**._',
            '📐 **begin / start / continue** acceptent les deux : _It started **raining** / It started **to rain**._',
            '📐 **would like / would love / would prefer** → TOUJOURS **to** : _I\'d like **to have** a coffee._',
            '📐 Évitez deux -ing de suite : _It **started to rain**_ est préféré à _It was starting ~~raining~~_.',
            '📐 **intend / bother** acceptent les deux : _I don\'t intend **to stay** / **staying** long._'
        ],
        examples: [
            { text: "I **love travelling** / **I love to travel**.", fr: "J'adore voyager. (les deux sont corrects)", correct: true },
            { text: "It **started raining** / **It started to rain**.", fr: "Il a commencé à pleuvoir. (les deux sont corrects)", correct: true },
            { text: "I**'d like to go** home now.", fr: "J'aimerais rentrer maintenant. (would like → to)", correct: true },
            { text: "She **continued working** / **She continued to work**.", fr: "Elle a continué à travailler. (les deux sont corrects)", correct: true },
            { text: "~~I'd like going~~ → I'd **like to go**.", fr: "would like → TOUJOURS + to !", correct: false, note: "would like/love/prefer → TOUJOURS + to" }
        ],
        tips: [
            "🇫🇷 Pour like/love/hate/prefer, les deux formes sont acceptées. Ne vous compliquez pas la vie !",
            "⚠️ Mais 'would like' → TOUJOURS + to. 'I'd like to have coffee' ✅ / 'I'd like having coffee' ❌",
            "💡 Au TOEIC: 'The company intends to expand' et 'began to implement' sont des formulations courantes."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I love _____ (read) novels. (les deux formes sont possibles)', answer: "reading", options: ["reading", "to read", "read", "reads"], hint: "love + -ing ou to — les deux marchent !" },
            { type: 'fill', difficulty: 'easy', question: 'It started _____ (snow) heavily last night.', answer: "to snow", options: ["to snow", "snowing", "snow", "snowed"], hint: "start + -ing ou to" },
            { type: 'fill', difficulty: 'easy', question: 'She continued _____ (work) after lunch.', answer: "working", options: ["working", "to work", "work", "worked"] },
            { type: 'fill', difficulty: 'medium', question: 'I\'d like _____ (reserve) a table for two, please.', answer: "to reserve", options: ["to reserve", "reserving", "reserve", "reserved"], hint: "would like → toujours + to" },
            { type: 'fill', difficulty: 'medium', question: 'I prefer _____ (drive) to taking the bus.', answer: "driving", options: ["driving", "to drive", "drive", "drove"] },
            { type: 'fill', difficulty: 'medium', question: 'Would you prefer _____ (sit) inside or outside?', answer: "to sit", options: ["to sit", "sitting", "sit", "sat"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "I would love going to that restaurant.", options: ["I would love going to that restaurant.", "I love going to that restaurant.", "She started to laugh."] },
            { type: 'fill', difficulty: 'hard', question: 'The company began _____ (implement) the new policy last month.', answer: "to implement", options: ["to implement", "implementing", "implement", "implemented"] },
            { type: 'fill', difficulty: 'hard', question: 'Don\'t bother _____ (call) me, I\'ll be asleep.', answer: "calling", options: ["calling", "to call", "call", "called"] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I'd prefer to stay home tonight.", options: ["I'd prefer to stay home tonight.", "I'd prefer staying home tonight.", "I'd prefer stay home tonight."] },
            { type: 'fill', difficulty: 'hard', question: 'The team intends _____ (finish) the project by March.', answer: "to finish", options: ["to finish", "finishing", "finish", "finished"] },
            { type: 'fill', difficulty: 'hard', question: 'She hates _____ (be) late for meetings.', answer: "being", options: ["being", "to be", "be", "been"] },
            { type: 'correct', difficulty: 'hard', question: 'Avec "would like", quelle structure est correcte ?', answer: "I would like to apply for this position.", options: ["I would like to apply for this position.", "I would like applying for this position.", "I would like apply for this position."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 58 — Prefer and would rather
    // ─────────────────────────────────────────────
    58: {
        id: 58,
        title: 'Prefer and would rather',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Exprimer une préférence : prefer, would prefer, would rather</b><br><br>
<b>1. prefer :</b><br>
• prefer + <b>-ing</b> (préférence générale) : <i>I prefer <b>driving</b> to taking the bus.</i> (Je préfère conduire plutôt que prendre le bus.)<br>
• prefer + <b>to + infinitif</b> (cas spécifique) : <i>Today I prefer <b>to walk</b>.</i><br><br>
<b>2. would prefer :</b><br>
• would prefer + <b>to</b> : <i>I'd prefer <b>to stay</b> home tonight.</i> (Ce soir, je préférerais rester à la maison.)<br><br>
<b>3. would rather :</b><br>
• would rather + <b>base verbale</b> (SANS to !) : <i>I'd rather <b>stay</b> home.</i> (Je préférerais rester à la maison.)<br>
• would rather + <b>not</b> : <i>I'd rather <b>not go</b> out tonight.</i><br><br>
⚠️ <b>Piège :</b> would rather + <b>personne</b> + <b>past tense</b> : <i>I'd rather you <b>didn't</b> tell anyone.</i> (Je préférerais que tu ne dises à personne.)`,
        rules: [
            '📐 **prefer -ing to -ing** (préférence générale) : _I prefer **cooking** to **eating** out._',
            '📐 **would prefer to** + infinitif : _I\'d prefer **to stay** home._',
            '📐 **would rather** + base verbale (SANS to) : _I\'d rather **go** home._ PAS ~~I\'d rather to go~~',
            '📐 **would rather not** : _I\'d rather **not say** anything._',
            '📐 **would rather** + personne + **past tense** : _I\'d rather you **came** tomorrow._ (subjonctif en français → prétérit en anglais !)'
        ],
        examples: [
            { text: "I prefer **cooking** to **eating** out.", fr: "Je préfère cuisiner plutôt que manger dehors.", correct: true },
            { text: "I'd prefer **to stay** home tonight.", fr: "Je préférerais rester à la maison ce soir.", correct: true },
            { text: "I'd rather **go** by taxi.", fr: "Je préférerais y aller en taxi.", correct: true },
            { text: "I'd rather you **didn't** mention it to anyone.", fr: "Je préférerais que tu n'en parles à personne.", correct: true },
            { text: "~~I'd rather to go~~ → I'd rather **go**.", fr: "JAMAIS 'to' après would rather !", correct: false, note: "would rather + base verbale sans to" }
        ],
        tips: [
            "🇫🇷 would rather + base verbale = je préférerais. PAS DE 'to' ! I'd rather stay ✅ / I'd rather to stay ❌",
            "⚠️ Structure spéciale : 'I'd rather you came tomorrow' utilise le prétérit mais parle du FUTUR. C'est comme le subjonctif français.",
            "💡 'prefer A to B' : attention, c'est 'TO' et non 'than' ! I prefer coffee TO tea ✅ / I prefer coffee ~~than~~ tea ❌"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I prefer _____ (swim) to running.', answer: "swimming", options: ["swimming", "to swim", "swim", "swam"], hint: "prefer -ing to -ing" },
            { type: 'fill', difficulty: 'easy', question: 'I\'d rather _____ (stay) home tonight.', answer: "stay", options: ["stay", "to stay", "staying", "stayed"], hint: "would rather + base verbale (SANS to)" },
            { type: 'fill', difficulty: 'easy', question: 'She\'d prefer _____ (take) the train.', answer: "to take", options: ["to take", "taking", "take", "took"], hint: "would prefer + to" },
            { type: 'fill', difficulty: 'medium', question: 'I\'d rather _____ (not go) out in this weather.', answer: "not go", options: ["not go", "not to go", "not going", "don't go"] },
            { type: 'fill', difficulty: 'medium', question: 'I prefer coffee _____ tea.', answer: "to", options: ["to", "than", "from", "over"] },
            { type: 'fill', difficulty: 'medium', question: 'Would you rather _____ (have) fish or meat?', answer: "have", options: ["have", "to have", "having", "had"] },
            { type: 'fill', difficulty: 'hard', question: 'I\'d rather you _____ (not mention) this to anyone.', answer: "didn't mention", options: ["didn't mention", "don't mention", "not mention", "wouldn't mention"] },
            { type: 'fill', difficulty: 'hard', question: 'I\'d rather she _____ (come) with us tomorrow.', answer: "came", options: ["came", "comes", "come", "would come"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I'd rather not discuss this matter.", options: ["I'd rather not discuss this matter.", "I'd rather to not discuss this matter.", "I'd rather don't discuss this matter."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Most employees prefer _____ (work) from home to commuting.', answer: "working", options: ["working", "to work", "work", "worked"] },
            { type: 'fill', difficulty: 'hard', question: 'The director would rather the team _____ (finish) the project this week.', answer: "finished", options: ["finished", "finish", "finishes", "finishing"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I'd rather to leave early today.", options: ["I'd rather to leave early today.", "I'd rather stay home.", "I'd prefer to go out."] },
            { type: 'fill', difficulty: 'hard', question: 'She\'d rather _____ (resign) than accept the new conditions.', answer: "resign", options: ["resign", "to resign", "resigning", "resigned"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 59 — Preposition + -ing (in/at/by/with + -ing)
    // ─────────────────────────────────────────────
    59: {
        id: 59,
        title: 'Preposition + -ing (in/at/with + -ing)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Après une préposition, on utilise TOUJOURS la forme -ing en anglais.</b><br><br>
C'est une règle absolue et l'une des plus simples à retenir :<br>
<b>Préposition + -ing</b> = <b>TOUJOURS</b><br><br>
• <i>I'm interested <b>in learning</b> Japanese.</i> = Je suis intéressé par l'apprentissage du japonais.<br>
• <i>She left <b>without saying</b> goodbye.</i> = Elle est partie sans dire au revoir.<br>
• <i>Thank you <b>for helping</b> me.</i> = Merci de m'avoir aidé.<br><br>
⚠️ <b>Piège :</b> En français, préposition + infinitif (« sans dire », « pour aider »). En anglais, préposition + <b>-ing</b> !<br>
❌ <i>~~without to say~~</i> → ✅ <i>without <b>saying</b></i>`,
        rules: [
            '📐 **Préposition + -ing** est une règle ABSOLUE : _interested **in learning**, good **at cooking**, tired **of waiting**_',
            '📐 **by + -ing** = en faisant / par le fait de : _You can improve **by practising** every day._',
            '📐 **without + -ing** : _She left **without saying** goodbye._',
            '📐 **before / after + -ing** : _**Before leaving**, check your email._ / _**After finishing**, we went home._',
            '📐 **instead of + -ing** : _**Instead of driving**, we walked._ (Au lieu de conduire, on a marché.)'
        ],
        examples: [
            { text: "I'm interested **in learning** about history.", fr: "Je suis intéressé par l'apprentissage de l'histoire.", correct: true },
            { text: "She's good **at speaking** in public.", fr: "Elle est douée pour parler en public.", correct: true },
            { text: "You can save money **by buying** in bulk.", fr: "On peut économiser en achetant en gros.", correct: true },
            { text: "He went to bed **without eating** dinner.", fr: "Il est allé se coucher sans dîner.", correct: true },
            { text: "~~Thank you for to help~~ → Thank you **for helping**.", fr: "Merci d'avoir aidé.", correct: false, note: "Après une préposition → TOUJOURS -ing, JAMAIS to" }
        ],
        tips: [
            "🇫🇷 En français : 'sans dire', 'pour aider', 'au lieu de partir' (infinitif). En anglais : without saying, for helping, instead of leaving (-ing).",
            "💡 Règle d'or : si le mot avant est une préposition (in, at, for, by, without, of, about, before, after...), le verbe prend -ing.",
            "⚠️ 'to' est parfois une préposition ! 'I look forward TO seeing you.' → -ing après 'to' préposition. (Pas un infinitif !)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Thank you for _____ (help) me with my homework.', answer: "helping", options: ["helping", "to help", "help", "helped"], hint: "for + -ing TOUJOURS" },
            { type: 'fill', difficulty: 'easy', question: 'She\'s interested in _____ (study) abroad.', answer: "studying", options: ["studying", "to study", "study", "studied"], hint: "in + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'He left without _____ (say) goodbye.', answer: "saying", options: ["saying", "to say", "say", "said"], hint: "without + -ing" },
            { type: 'fill', difficulty: 'medium', question: 'You can improve your English by _____ (read) every day.', answer: "reading", options: ["reading", "to read", "read", "reads"] },
            { type: 'fill', difficulty: 'medium', question: 'I\'m tired of _____ (wait) for the bus.', answer: "waiting", options: ["waiting", "to wait", "wait", "waited"] },
            { type: 'fill', difficulty: 'medium', question: 'Instead of _____ (complain), why don\'t you do something?', answer: "complaining", options: ["complaining", "to complain", "complain", "complained"] },
            { type: 'fill', difficulty: 'hard', question: 'I look forward to _____ (hear) from you soon.', answer: "hearing", options: ["hearing", "hear", "to hear", "heard"], hint: "'to' est une préposition ici !" },
            { type: 'fill', difficulty: 'hard', question: 'In addition to _____ (be) a doctor, she\'s also a writer.', answer: "being", options: ["being", "be", "to be", "been"] },
            { type: 'fill', difficulty: 'hard', question: 'She apologised for _____ (not attend) the meeting.', answer: "not attending", options: ["not attending", "to not attend", "not to attend", "don't attend"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'We succeeded in _____ (get) the contract signed.', answer: "getting", options: ["getting", "to get", "get", "got"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I look forward to meeting you.", options: ["I look forward to meeting you.", "I look forward to meet you.", "I look forward meeting you."] },
            { type: 'fill', difficulty: 'hard', question: 'He was accused of _____ (steal) company data.', answer: "stealing", options: ["stealing", "to steal", "steal", "stolen"] },
            { type: 'fill', difficulty: 'hard', question: 'The committee is responsible for _____ (make) the final decision.', answer: "making", options: ["making", "to make", "make", "made"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 60 — Be/get used to … (I'm used to …)
    // ─────────────────────────────────────────────
    60: {
        id: 60,
        title: 'Be/get used to … (I\'m used to doing)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Trois expressions à ne pas confondre :</b><br><br>
<b>1. used to + infinitif</b> = habitude passée révolue<br>
<i>I <b>used to smoke</b>.</i> = Je fumais avant (mais plus maintenant).<br><br>
<b>2. be used to + -ing</b> = être habitué à<br>
<i>I <b>'m used to working</b> late.</i> = Je suis habitué à travailler tard.<br><br>
<b>3. get used to + -ing</b> = s'habituer à (processus)<br>
<i>I <b>'m getting used to living</b> here.</i> = Je m'habitue à vivre ici.<br><br>
⚠️ <b>Le piège :</b> « used to » seul = habitude passée + infinitif. Mais « be/get used to » = être habitué + <b>-ing</b> ! Le « to » est ici une <b>préposition</b>, pas le signe de l'infinitif.`,
        rules: [
            '📐 **used to + infinitif** = habitude passée révolue → _I **used to play** football._ (Je jouais au foot avant.)',
            '📐 **be used to + -ing** = être habitué à → _She\'s **used to getting** up early._ (Elle est habituée à se lever tôt.)',
            '📐 **get used to + -ing** = s\'habituer à (processus) → _I\'m **getting used to driving** on the left._',
            '📐 Dans « be/get used to », le **to** est une préposition → le verbe prend **-ing**',
            '📐 Négatif : _I **didn\'t use to** like vegetables._ (Avant, je n\'aimais pas les légumes.)'
        ],
        examples: [
            { text: "I **used to live** in Paris.", fr: "Je vivais à Paris avant (plus maintenant).", correct: true },
            { text: "She **'s used to working** long hours.", fr: "Elle est habituée à travailler de longues heures.", correct: true },
            { text: "I **'m getting used to** the new system.", fr: "Je m'habitue au nouveau système.", correct: true },
            { text: "He **didn't use to** like coffee.", fr: "Avant, il n'aimait pas le café.", correct: true },
            { text: "~~I'm used to work late~~ → I'm used to **working** late.", fr: "be used to + -ing !", correct: false, note: "'to' est une préposition ici → -ing obligatoire" }
        ],
        tips: [
            "🇫🇷 Piège classique : 'used to' seul + infinitif (habitude passée) vs 'be used to' + -ing (être habitué). Le 'to' change de nature !",
            "💡 Pour retenir : 'I used to smoke' (je fumais = passé fini) / 'I'm used to smoking' (je suis habitué à fumer = état actuel)",
            "⚠️ Au TOEIC : 'Employees are used to following the new procedures.' — très courant en contexte professionnel."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I _____ (used to / live) in London when I was young.', answer: "used to live", options: ["used to live", "used to living", "am used to live", "am used to living"], hint: "Habitude passée → used to + infinitif" },
            { type: 'fill', difficulty: 'easy', question: 'She\'s _____ (used to / get up) early for work.', answer: "used to getting up", options: ["used to getting up", "used to get up", "use to get up", "using to get up"], hint: "Être habitué → be used to + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'He didn\'t _____ (use to / like) vegetables as a child.', answer: "use to like", options: ["use to like", "used to like", "use to liking", "used to liking"] },
            { type: 'fill', difficulty: 'medium', question: 'I\'m slowly getting used to _____ (drive) on the left.', answer: "driving", options: ["driving", "drive", "to drive", "drove"] },
            { type: 'fill', difficulty: 'medium', question: 'She _____ (used to / work) in a bank, but now she\'s a teacher.', answer: "used to work", options: ["used to work", "is used to working", "used to working", "gets used to work"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I'm not used to speaking in public.", options: ["I'm not used to speaking in public.", "I'm not used to speak in public.", "I'm not use to speaking in public."] },
            { type: 'correct', difficulty: 'hard', question: '"She used to travel a lot" signifie :', answer: "Elle voyageait beaucoup avant (mais plus maintenant).", options: ["Elle voyageait beaucoup avant (mais plus maintenant).", "Elle est habituée à voyager beaucoup.", "Elle s'habitue à voyager beaucoup."] },
            { type: 'fill', difficulty: 'hard', question: 'After six months in Japan, I got used to _____ (eat) with chopsticks.', answer: "eating", options: ["eating", "eat", "to eat", "ate"] },
            { type: 'fill', difficulty: 'hard', question: 'He _____ be very shy, but now he\'s quite confident.', answer: "used to", options: ["used to", "is used to", "was used to", "got used to"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'New employees quickly get used to _____ (follow) company procedures.', answer: "following", options: ["following", "follow", "to follow", "followed"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I'm used to wake up early.", options: ["I'm used to wake up early.", "I used to wake up early.", "I'm getting used to waking up early."] },
            { type: 'fill', difficulty: 'hard', question: 'There _____ be a cinema here, but it closed down.', answer: "used to", options: ["used to", "is used to", "was used to", "gets used to"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase décrit un PROCESSUS d\'adaptation ?', answer: "She's getting used to the new software.", options: ["She's getting used to the new software.", "She used to use the old software.", "She's used to the new software."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 61 — Verb + preposition + -ing
    // ─────────────────────────────────────────────
    61: {
        id: 61,
        title: 'Verb + preposition + -ing',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Les verbes suivis d'une préposition prennent toujours -ing après.</b><br><br>
Beaucoup de verbes anglais se construisent avec une préposition spécifique, et le verbe qui suit prend la forme -ing.<br><br>
<b>Constructions courantes :</b><br>
• succeed <b>in</b> doing = réussir à faire<br>
• insist <b>on</b> doing = insister pour faire<br>
• think <b>about/of</b> doing = penser à faire<br>
• apologise <b>for</b> doing = s'excuser d'avoir fait<br>
• dream <b>of/about</b> doing = rêver de faire<br>
• feel like doing = avoir envie de faire<br>
• look forward <b>to</b> doing = avoir hâte de faire (to = préposition !)<br><br>
⚠️ <b>Attention :</b> Les prépositions que les verbes prennent en anglais ne sont souvent PAS les mêmes qu'en français !`,
        rules: [
            '📐 **succeed in -ing** = réussir à : _She succeeded **in passing** the exam._',
            '📐 **insist on -ing** = insister pour : _He insisted **on paying** the bill._',
            '📐 **think about/of -ing** = penser à : _I\'m thinking **about changing** jobs._',
            '📐 **apologise for -ing** = s\'excuser de : _He apologised **for being** late._',
            '📐 **look forward to -ing** (to = préposition !) : _I look forward **to hearing** from you._'
        ],
        examples: [
            { text: "She succeeded **in getting** the promotion.", fr: "Elle a réussi à obtenir la promotion.", correct: true },
            { text: "He insisted **on paying** for dinner.", fr: "Il a insisté pour payer le dîner.", correct: true },
            { text: "I'm thinking **about moving** to Canada.", fr: "Je pense à déménager au Canada.", correct: true },
            { text: "She apologised **for not coming** to the party.", fr: "Elle s'est excusée de ne pas être venue à la fête.", correct: true },
            { text: "I look forward **to meeting** you.", fr: "J'ai hâte de vous rencontrer.", correct: true }
        ],
        tips: [
            "🇫🇷 'réussir à' = succeed IN, 'insister pour' = insist ON, 's'excuser de' = apologise FOR — les prépositions changent !",
            "💡 'look forward to' : le 'to' est une préposition → -ing. 'I look forward to seeing you.' JAMAIS 'to see'.",
            "⚠️ 'depend on + -ing' : 'It depends on having enough staff.' — fréquent au TOEIC."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'He apologised for _____ (be) late.', answer: "being", options: ["being", "to be", "be", "been"], hint: "apologise for + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'She succeeded in _____ (pass) the test.', answer: "passing", options: ["passing", "to pass", "pass", "passed"], hint: "succeed in + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'I\'m thinking about _____ (change) my job.', answer: "changing", options: ["changing", "to change", "change", "changed"] },
            { type: 'fill', difficulty: 'medium', question: 'He insisted on _____ (drive) us to the airport.', answer: "driving", options: ["driving", "to drive", "drive", "drove"] },
            { type: 'fill', difficulty: 'medium', question: 'She dreams of _____ (become) a lawyer.', answer: "becoming", options: ["becoming", "to become", "become", "became"] },
            { type: 'fill', difficulty: 'medium', question: 'I don\'t feel like _____ (go) out tonight.', answer: "going", options: ["going", "to go", "go", "gone"] },
            { type: 'fill', difficulty: 'hard', question: 'We look forward to _____ (receive) your proposal.', answer: "receiving", options: ["receiving", "receive", "to receive", "received"] },
            { type: 'fill', difficulty: 'hard', question: 'The outcome depends on _____ (have) enough resources.', answer: "having", options: ["having", "to have", "have", "had"] },
            { type: 'fill', difficulty: 'hard', question: 'She accused him of _____ (lie) about his qualifications.', answer: "lying", options: ["lying", "to lie", "lie", "lied"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The manager insisted on _____ (review) the proposal before signing.', answer: "reviewing", options: ["reviewing", "to review", "review", "reviewed"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "We look forward to hearing from you.", options: ["We look forward to hearing from you.", "We look forward to hear from you.", "We look forward hearing from you."] },
            { type: 'fill', difficulty: 'hard', question: 'She was accused of _____ (mismanage) the company funds.', answer: "mismanaging", options: ["mismanaging", "to mismanage", "mismanage", "mismanaged"] },
            { type: 'fill', difficulty: 'hard', question: 'The project\'s success depends on _____ (secure) additional funding.', answer: "securing", options: ["securing", "to secure", "secure", "secured"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 62 — Expressions + -ing (go swimming, spend time doing etc.)
    // ─────────────────────────────────────────────
    62: {
        id: 62,
        title: 'Expressions + -ing (go swimming, spend time doing)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certaines expressions courantes utilisent toujours -ing.</b><br><br>
<b>1. go + -ing</b> (activités de loisir) :<br>
go <b>swimming / shopping / skiing / fishing / jogging / sightseeing</b><br>
<i>Let's go <b>shopping</b>!</i> = Allons faire du shopping !<br><br>
<b>2. spend / waste + temps + -ing :</b><br>
<i>I spent two hours <b>waiting</b>.</i> = J'ai passé deux heures à attendre.<br><br>
<b>3. be busy + -ing :</b><br>
<i>She's busy <b>preparing</b> for the meeting.</i> = Elle est occupée à préparer la réunion.<br><br>
<b>4. have difficulty / trouble / a problem + -ing :</b><br>
<i>I had difficulty <b>finding</b> a parking space.</i> = J'ai eu du mal à trouver une place de parking.<br><br>
<b>5. there's no point (in) + -ing :</b><br>
<i>There's no point <b>worrying</b> about it.</i> = Ça ne sert à rien de s'inquiéter.`,
        rules: [
            '📐 **go + -ing** pour les activités : _go **swimming / shopping / skiing / fishing / jogging / sightseeing**_',
            '📐 **spend / waste + temps + -ing** : _I spent an hour **waiting**._',
            '📐 **be busy + -ing** : _She\'s busy **working**._',
            '📐 **have difficulty / trouble + -ing** : _I had difficulty **understanding** him._',
            '📐 **there\'s no point (in) + -ing** : _There\'s no point **complaining**._'
        ],
        examples: [
            { text: "We went **shopping** yesterday.", fr: "Nous sommes allés faire du shopping hier.", correct: true },
            { text: "She spends a lot of time **reading**.", fr: "Elle passe beaucoup de temps à lire.", correct: true },
            { text: "I'm busy **preparing** for the exam.", fr: "Je suis occupé à préparer l'examen.", correct: true },
            { text: "He had trouble **finding** the office.", fr: "Il a eu du mal à trouver le bureau.", correct: true },
            { text: "There's no point **arguing** about it.", fr: "Ça ne sert à rien de se disputer à ce sujet.", correct: true }
        ],
        tips: [
            "🇫🇷 'go shopping' = aller faire du shopping. JAMAIS 'go to shopping' ou 'go for shop' !",
            "💡 'spend time doing' est exactement comme en français : 'passer du temps à faire'.",
            "⚠️ TOEIC : 'have difficulty/trouble doing something' est très fréquent en contexte professionnel."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Let\'s go _____ (swim) this afternoon!', answer: "swimming", options: ["swimming", "to swim", "swim", "for swimming"], hint: "go + -ing pour les activités" },
            { type: 'fill', difficulty: 'easy', question: 'She spent two hours _____ (cook) dinner.', answer: "cooking", options: ["cooking", "to cook", "cook", "cooked"], hint: "spend + temps + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'I\'m busy _____ (prepare) the presentation.', answer: "preparing", options: ["preparing", "to prepare", "prepare", "prepared"] },
            { type: 'fill', difficulty: 'medium', question: 'He had trouble _____ (sleep) last night.', answer: "sleeping", options: ["sleeping", "to sleep", "sleep", "slept"] },
            { type: 'fill', difficulty: 'medium', question: 'There\'s no point _____ (wait) any longer.', answer: "waiting", options: ["waiting", "to wait", "wait", "waited"] },
            { type: 'fill', difficulty: 'medium', question: 'Don\'t waste time _____ (worry) about things you can\'t control.', answer: "worrying", options: ["worrying", "to worry", "worry", "worried"] },
            { type: 'fill', difficulty: 'hard', question: 'It\'s no use _____ (try) to convince her.', answer: "trying", options: ["trying", "to try", "try", "tried"] },
            { type: 'fill', difficulty: 'hard', question: 'We had no difficulty _____ (find) the restaurant.', answer: "finding", options: ["finding", "to find", "find", "found"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I spent the whole morning cleaning the house.", options: ["I spent the whole morning cleaning the house.", "I spent the whole morning to clean the house.", "I spent the whole morning for cleaning the house."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Staff members spent considerable time _____ (review) the new guidelines.', answer: "reviewing", options: ["reviewing", "to review", "review", "reviewed"] },
            { type: 'fill', difficulty: 'hard', question: 'There\'s no use _____ (complain) about the decision now.', answer: "complaining", options: ["complaining", "to complain", "complain", "complained"] },
            { type: 'fill', difficulty: 'hard', question: 'Customers had difficulty _____ (access) the new website.', answer: "accessing", options: ["accessing", "to access", "access", "accessed"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "We went to shop at the mall.", options: ["We went to shop at the mall.", "We went shopping at the mall.", "She spent hours studying for the test."] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 63 — To …, for …, and so that … (purpose)
    // ─────────────────────────────────────────────
    63: {
        id: 63,
        title: 'To …, for … and so that … (purpose)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Exprimer le but : to, for, so that</b><br><br>
En français, on utilise « pour + infinitif » ou « pour que + subjonctif ». En anglais :<br><br>
<b>1. to + infinitif</b> (but) :<br>
<i>I went to the shop <b>to buy</b> some bread.</i> = Je suis allé au magasin pour acheter du pain.<br><br>
<b>2. for + nom</b> :<br>
<i>I went out <b>for a walk</b>.</i> = Je suis sorti pour une promenade.<br>
⚠️ <b>PAS</b> <i>~~for to buy~~</i> ! JAMAIS « for + infinitif ».<br><br>
<b>3. so that + sujet + can/will/would</b> :<br>
<i>I left early <b>so that</b> I <b>wouldn't</b> be late.</i> = Je suis parti tôt pour ne pas être en retard.<br><br>
<b>4. in order to / so as to</b> (plus formel) :<br>
<i><b>In order to</b> improve, you must practise.</i> = Pour s'améliorer, il faut pratiquer.`,
        rules: [
            '📐 **to + infinitif** pour exprimer le but : _I study hard **to pass** the exam._',
            '📐 **for + nom** (PAS for + infinitif) : _I went out **for a coffee**._ PAS ~~for to buy~~',
            '📐 **so that + sujet + can/will/could/would** : _She spoke slowly **so that** everyone **could** understand._',
            '📐 **in order to / so as to** (formel) : _**In order to** apply, fill out the form._',
            '📐 **in order not to / so as not to** (négatif formel) : _He spoke quietly **so as not to** wake the baby._'
        ],
        examples: [
            { text: "I'm saving money **to buy** a car.", fr: "J'économise pour acheter une voiture.", correct: true },
            { text: "She went out **for a walk**.", fr: "Elle est sortie pour une promenade.", correct: true },
            { text: "He turned off his phone **so that** no one would disturb him.", fr: "Il a éteint son téléphone pour que personne ne le dérange.", correct: true },
            { text: "**In order to** succeed, you need to work hard.", fr: "Pour réussir, il faut travailler dur.", correct: true },
            { text: "~~I came for to help~~ → I came **to help**.", fr: "JAMAIS 'for to' !", correct: false, note: "for + nom ✅ / for + infinitif ❌ → Utilisez 'to + infinitif'" }
        ],
        tips: [
            "🇫🇷 'pour faire' = 'to do' (JAMAIS 'for to do'). 'pour une promenade' = 'for a walk' (for + nom).",
            "💡 'so that' est utilisé quand le sujet change : 'I left early so that SHE could rest.' (pour qu'ELLE puisse se reposer)",
            "⚠️ Très fréquent au TOEIC : 'In order to apply for the position, candidates must submit...' — style business formel."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I went to the supermarket _____ (buy) some groceries.', answer: "to buy", options: ["to buy", "for buy", "for buying", "buying"], hint: "But → to + infinitif" },
            { type: 'fill', difficulty: 'easy', question: 'She went out _____ a coffee.', answer: "for", options: ["for", "to", "to get", "for to get"], hint: "for + nom" },
            { type: 'fill', difficulty: 'easy', question: 'He studies hard _____ pass his exams.', answer: "to", options: ["to", "for", "for to", "so that"] },
            { type: 'fill', difficulty: 'medium', question: 'She spoke loudly _____ everyone could hear.', answer: "so that", options: ["so that", "to", "for", "in order to"] },
            { type: 'fill', difficulty: 'medium', question: '_____ improve customer satisfaction, the company revised its policies.', answer: "In order to", options: ["In order to", "For to", "For", "So that"] },
            { type: 'fill', difficulty: 'medium', question: 'He left early so as _____ miss the train.', answer: "not to", options: ["not to", "to not", "not", "don't"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "I came here for to learn English.", options: ["I came here for to learn English.", "I came here to learn English.", "I came here in order to learn English."] },
            { type: 'fill', difficulty: 'hard', question: 'The report was revised _____ ensure accuracy before publication.', answer: "to", options: ["to", "for", "for to", "so that"] },
            { type: 'fill', difficulty: 'hard', question: 'They hired more staff so that orders _____ be processed faster.', answer: "could", options: ["could", "can", "to", "will"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ apply for this position, please submit your CV online.', answer: "In order to", options: ["In order to", "For to", "For", "So as"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "We restructured the department so that efficiency would improve.", options: ["We restructured the department so that efficiency would improve.", "We restructured the department for to improve efficiency.", "We restructured the department for improving efficiency."] },
            { type: 'fill', difficulty: 'hard', question: 'The company implemented new protocols so as _____ prevent data breaches.', answer: "to", options: ["to", "not to", "for", "that"] },
            { type: 'fill', difficulty: 'hard', question: 'Additional funds were allocated _____ the project could be completed on time.', answer: "so that", options: ["so that", "to", "for", "in order to"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 64 — Adjective + to …
    // ─────────────────────────────────────────────
    64: {
        id: 64,
        title: 'Adjective + to … (difficult to, easy to etc.)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Les adjectifs suivis de « to + infinitif »</b><br><br>
Beaucoup d'adjectifs sont suivis de « to + infinitif » pour exprimer un sentiment, une évaluation ou une caractéristique.<br><br>
<b>1. Adjectif + to (sentiment) :</b><br>
• <i>I'm <b>happy to</b> help.</i> = Je suis heureux d'aider.<br>
• <i>She was <b>surprised to</b> see me.</i> = Elle a été surprise de me voir.<br><br>
<b>2. It's + adjectif + to :</b><br>
• <i>It's <b>easy to</b> learn.</i> = C'est facile à apprendre.<br>
• <i>It's <b>important to</b> be on time.</i> = C'est important d'être à l'heure.<br><br>
<b>3. Adjectif + enough + to / too + adjectif + to :</b><br>
• <i>She's <b>old enough to</b> drive.</i> = Elle est assez âgée pour conduire.<br>
• <i>It's <b>too hot to</b> go out.</i> = Il fait trop chaud pour sortir.`,
        rules: [
            '📐 **glad / happy / pleased / sorry / surprised / disappointed** + to : _I\'m **glad to meet** you._',
            '📐 **It\'s + difficult / easy / important / possible / impossible / nice** + to : _It\'s **difficult to understand**._',
            '📐 **too + adjectif + to** : _It\'s **too cold to** swim._ (Trop froid pour nager.)',
            '📐 **adjectif + enough + to** : _She\'s **smart enough to** understand._ (Assez intelligente pour comprendre.)',
            '📐 L\'objet peut devenir sujet : _This book is **easy to read**._ (Ce livre est facile à lire.)'
        ],
        examples: [
            { text: "I'm **happy to** help you anytime.", fr: "Je suis content de vous aider à tout moment.", correct: true },
            { text: "It's **important to** arrive on time.", fr: "C'est important d'arriver à l'heure.", correct: true },
            { text: "She's **old enough to** make her own decisions.", fr: "Elle est assez âgée pour prendre ses propres décisions.", correct: true },
            { text: "It's **too late to** change the booking.", fr: "C'est trop tard pour changer la réservation.", correct: true },
            { text: "This problem is **impossible to** solve.", fr: "Ce problème est impossible à résoudre.", correct: true }
        ],
        tips: [
            "🇫🇷 La structure est souvent identique au français : 'content de' = 'happy to', 'facile à' = 'easy to'.",
            "💡 Attention à l'ordre : 'enough' APRÈS l'adjectif ! 'old enough' ✅ / 'enough old' ❌",
            "⚠️ TOEIC : 'It is essential to comply with company regulations.' — 'It is + adj + to' est omniprésent dans les textes business."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'m glad _____ (meet) you.', answer: "to meet", options: ["to meet", "meeting", "meet", "met"], hint: "glad + to" },
            { type: 'fill', difficulty: 'easy', question: 'It\'s important _____ (eat) healthy food.', answer: "to eat", options: ["to eat", "eating", "eat", "ate"], hint: "It's + adj + to" },
            { type: 'fill', difficulty: 'easy', question: 'She was surprised _____ (hear) the news.', answer: "to hear", options: ["to hear", "hearing", "hear", "heard"] },
            { type: 'fill', difficulty: 'medium', question: 'The instructions are easy _____ (follow).', answer: "to follow", options: ["to follow", "following", "follow", "followed"] },
            { type: 'fill', difficulty: 'medium', question: 'He isn\'t old _____ to drive.', answer: "enough", options: ["enough", "too", "much", "very"] },
            { type: 'fill', difficulty: 'medium', question: 'It\'s too cold _____ (go) for a swim.', answer: "to go", options: ["to go", "going", "go", "for going"] },
            { type: 'fill', difficulty: 'hard', question: 'The report is _____ complicated to understand without help.', answer: "too", options: ["too", "enough", "very", "so"] },
            { type: 'fill', difficulty: 'hard', question: 'She was kind enough _____ (lend) me some money.', answer: "to lend", options: ["to lend", "lending", "lend", "lent"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The test was too difficult for me to pass.", options: ["The test was too difficult for me to pass.", "The test was too difficult for me pass.", "The test was enough difficult for me to pass."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'It is essential _____ (read) the terms and conditions before signing.', answer: "to read", options: ["to read", "reading", "read", "reads"] },
            { type: 'fill', difficulty: 'hard', question: 'The software is user-friendly _____ to navigate without training.', answer: "enough", options: ["enough", "too", "very", "so"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "She was too tired to attend the meeting.", options: ["She was too tired to attend the meeting.", "She was too tired for attend the meeting.", "She was enough tired to attend the meeting."] },
            { type: 'fill', difficulty: 'hard', question: 'The proposal is realistic _____ to be approved by the board.', answer: "enough", options: ["enough", "too", "very", "so"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 65 — to … (afraid to / fail to) and preposition + -ing
    // ─────────────────────────────────────────────
    65: {
        id: 65,
        title: 'to … (afraid to do) and preposition + -ing (afraid of -ing)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Certains adjectifs peuvent être suivis de 'to' OU d'une 'préposition + -ing', avec une nuance.</b><br><br>
<b>afraid :</b><br>
• afraid <b>to do</b> = ne pas oser faire (hésitation) : <i>She was afraid <b>to speak</b> up.</i> (Elle n'osait pas parler.)<br>
• afraid <b>of doing</b> = avoir peur que quelque chose arrive : <i>She was afraid <b>of making</b> a mistake.</i> (Elle avait peur de faire une erreur.)<br><br>
<b>interested :</b><br>
• interested <b>in doing</b> : <i>I'm interested <b>in applying</b> for the job.</i><br><br>
<b>sorry :</b><br>
• sorry <b>to do</b> = être désolé de (présent) : <i>I'm sorry <b>to bother</b> you.</i><br>
• sorry <b>for doing</b> = s'excuser d'avoir fait : <i>I'm sorry <b>for being</b> late.</i><br><br>
<b>failed :</b><br>
• fail <b>to do</b> = ne pas réussir à / omettre de : <i>He failed <b>to mention</b> the problem.</i>`,
        rules: [
            '📐 **afraid to do** = ne pas oser / **afraid of doing** = avoir peur que ça arrive',
            '📐 **sorry to do** = être désolé de (maintenant) / **sorry for doing** = s\'excuser d\'avoir fait',
            '📐 **interested in -ing** = intéressé par : _I\'m interested **in learning** more._',
            '📐 **fail to do** = ne pas réussir à, omettre de : _He failed **to submit** the report._',
            '📐 **used to do** (habitude passée) ≠ **used to doing** (habitué à) — cf. Unit 60'
        ],
        examples: [
            { text: "She was **afraid to ask** for a raise.", fr: "Elle n'osait pas demander une augmentation.", correct: true },
            { text: "He's **afraid of losing** his job.", fr: "Il a peur de perdre son emploi.", correct: true },
            { text: "I'm **sorry to hear** that.", fr: "Je suis désolé d'apprendre ça.", correct: true },
            { text: "I'm **sorry for interrupting**.", fr: "Je suis désolé d'avoir interrompu.", correct: true },
            { text: "The company **failed to meet** its targets.", fr: "L'entreprise n'a pas réussi à atteindre ses objectifs.", correct: true }
        ],
        tips: [
            "🇫🇷 afraid TO do = ne pas oser (on hésite). afraid OF doing = craindre que ça arrive (peur d'un résultat).",
            "💡 sorry TO + infinitif (au moment présent) vs sorry FOR + -ing (pour le passé). 'Sorry to disturb you' vs 'Sorry for disturbing you yesterday'.",
            "⚠️ 'fail to' au TOEIC : 'Employees who fail to submit their reports on time will…' — très fréquent !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'m interested _____ (learn) about your company.', answer: "in learning", options: ["in learning", "to learn", "learning", "for learning"], hint: "interested IN + -ing" },
            { type: 'fill', difficulty: 'easy', question: 'She was afraid _____ (walk) home alone at night.', answer: "to walk", options: ["to walk", "of walking", "walking", "walk"], hint: "Ne pas oser → afraid to" },
            { type: 'fill', difficulty: 'easy', question: 'I\'m sorry _____ (hear) about your loss.', answer: "to hear", options: ["to hear", "for hearing", "hearing", "hear"] },
            { type: 'fill', difficulty: 'medium', question: 'He\'s afraid _____ (make) a mistake during the presentation.', answer: "of making", options: ["of making", "to make", "making", "for making"] },
            { type: 'fill', difficulty: 'medium', question: 'She apologised _____ (not come) to the meeting.', answer: "for not coming", options: ["for not coming", "to not come", "not coming", "for not to come"] },
            { type: 'fill', difficulty: 'medium', question: 'He failed _____ (complete) the assignment on time.', answer: "to complete", options: ["to complete", "completing", "in completing", "complete"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle est la différence entre les deux phrases ?', answer: "La 1ère = il n'ose pas parler, la 2nde = il a peur de dire quelque chose de mal.", options: ["La 1ère = il n'ose pas parler, la 2nde = il a peur de dire quelque chose de mal.", "Elles ont le même sens.", "La 1ère est incorrecte."] },
            { type: 'fill', difficulty: 'hard', question: 'I\'m sorry _____ (cause) you so much trouble last week.', answer: "for causing", options: ["for causing", "to cause", "causing", "to causing"] },
            { type: 'fill', difficulty: 'hard', question: 'The contractor failed _____ (deliver) the materials as promised.', answer: "to deliver", options: ["to deliver", "delivering", "in delivering", "for delivering"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'I\'m interested _____ (apply) for the marketing manager position.', answer: "in applying", options: ["in applying", "to apply", "applying", "for applying"] },
            { type: 'fill', difficulty: 'hard', question: 'The supplier failed _____ (comply) with the agreed delivery schedule.', answer: "to comply", options: ["to comply", "complying", "in complying", "for complying"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "She's afraid of being fired.", options: ["She's afraid of being fired.", "She's afraid of be fired.", "She's afraid to being fired."] },
            { type: 'fill', difficulty: 'hard', question: 'We are sorry _____ (inform) you that your application has been unsuccessful.', answer: "to inform", options: ["to inform", "for informing", "informing", "of informing"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 66 — See somebody do and see somebody doing
    // ─────────────────────────────────────────────
    66: {
        id: 66,
        title: 'See somebody do and see somebody doing',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Les verbes de perception + infinitif ou -ing</b><br><br>
Avec les verbes <b>see, hear, watch, notice, feel</b>, on peut utiliser l'infinitif sans « to » OU la forme -ing :<br><br>
<b>1. see/hear + objet + infinitif (sans to)</b> = action complète (du début à la fin)<br>
<i>I saw her <b>cross</b> the road.</i> = Je l'ai vue traverser la route. (toute l'action)<br><br>
<b>2. see/hear + objet + -ing</b> = action en cours (pas forcément vue en entier)<br>
<i>I saw her <b>crossing</b> the road.</i> = Je l'ai vue (en train de) traverser la route. (l'action était en cours)<br><br>
⚠️ <b>Au passif :</b> on utilise <b>to + infinitif</b> :<br>
<i>She was seen <b>to cross</b> the road.</i> (Passif — le « to » réapparaît.)`,
        rules: [
            '📐 **see/hear/watch/notice/feel + objet + infinitif (sans to)** = action complète : _I saw him **leave** the building._',
            '📐 **see/hear/watch/notice/feel + objet + -ing** = action en cours : _I saw him **leaving** the building._',
            '📐 Infinitif = j\'ai vu TOUTE l\'action / -ing = j\'ai vu l\'action EN COURS',
            '📐 **Au passif** → **to + infinitif** : _He was seen **to leave** the building._',
            '📐 Même logique pour **hear** : _I heard someone **call** / **calling** my name._'
        ],
        examples: [
            { text: "I **watched** the children **play** in the garden.", fr: "J'ai regardé les enfants jouer dans le jardin. (toute l'action)", correct: true },
            { text: "I **saw** a man **running** down the street.", fr: "J'ai vu un homme courir dans la rue. (en cours)", correct: true },
            { text: "Did you **hear** the phone **ring**?", fr: "As-tu entendu le téléphone sonner ? (action complète)", correct: true },
            { text: "I could **hear** it **raining** outside.", fr: "J'entendais la pluie tomber dehors. (en cours)", correct: true },
            { text: "He was **seen to enter** the building at 9 pm.", fr: "Il a été vu entrer dans le bâtiment à 21h. (passif → to)", correct: true }
        ],
        tips: [
            "🇫🇷 En français, on utilise l'infinitif dans les deux cas : 'je l'ai vu traverser'. En anglais, le choix entre infinitif et -ing fait une différence !",
            "💡 Pensez à une caméra : infinitif = toute la scène enregistrée. -ing = un arrêt sur image, l'action était en cours.",
            "⚠️ PAS de 'to' avec ces verbes ! I saw him leave ✅ / I saw him TO leave ❌ (sauf au passif)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I saw her _____ (leave) the office at 6 pm. (action complète)', answer: "leave", options: ["leave", "leaving", "to leave", "left"], hint: "Action complète → infinitif sans to" },
            { type: 'fill', difficulty: 'easy', question: 'I heard someone _____ (shout) outside. (en cours)', answer: "shouting", options: ["shouting", "shout", "to shout", "shouted"], hint: "Action en cours → -ing" },
            { type: 'fill', difficulty: 'easy', question: 'Did you notice anyone _____ (come) in?', answer: "come", options: ["come", "coming", "to come", "came"] },
            { type: 'fill', difficulty: 'medium', question: 'I watched the sun _____ (set) over the ocean. (du début à la fin)', answer: "set", options: ["set", "setting", "to set", "sets"] },
            { type: 'fill', difficulty: 'medium', question: 'She could feel her heart _____ (beat) fast.', answer: "beating", options: ["beating", "beat", "to beat", "beats"] },
            { type: 'fill', difficulty: 'medium', question: 'He was seen _____ (enter) the building. (passif)', answer: "to enter", options: ["to enter", "enter", "entering", "entered"] },
            { type: 'correct', difficulty: 'hard', question: '"I saw her cross the road" vs "I saw her crossing the road". Quelle est la différence ?', answer: "La 1ère = j'ai vu toute la traversée ; la 2nde = je l'ai vue pendant qu'elle traversait.", options: ["La 1ère = j'ai vu toute la traversée ; la 2nde = je l'ai vue pendant qu'elle traversait.", "Elles ont exactement le même sens.", "La 2nde est incorrecte."] },
            { type: 'fill', difficulty: 'hard', question: 'The witness heard the suspect _____ (threaten) the victim.', answer: "threaten", options: ["threaten", "threatening", "to threaten", "threatened"] },
            { type: 'fill', difficulty: 'hard', question: 'She was heard _____ (argue) with her colleague.', answer: "to argue", options: ["to argue", "arguing", "argue", "argued"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Security cameras showed the employee _____ (take) documents from the office.', answer: "taking", options: ["taking", "take", "to take", "took"] },
            { type: 'fill', difficulty: 'hard', question: 'The suspect was observed _____ (leave) the premises at midnight.', answer: "to leave", options: ["to leave", "leaving", "leave", "left"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I watched him park the car.", options: ["I watched him park the car.", "I watched him to park the car.", "I watched him parked the car."] },
            { type: 'fill', difficulty: 'hard', question: 'Residents heard someone _____ (break) a window during the night.', answer: "break", options: ["break", "breaking", "to break", "broke"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 67 — -ing clauses (Feeling tired, I went to bed early.)
    // ─────────────────────────────────────────────
    67: {
        id: 67,
        title: '-ing clauses (Feeling tired, I went to bed early)',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Les propositions en -ing (participe présent)</b><br><br>
On peut utiliser une proposition en -ing pour donner des informations supplémentaires ou expliquer la raison. C'est très courant en anglais écrit et au TOEIC.<br><br>
<b>1. Cause / raison :</b><br>
<i><b>Feeling tired</b>, I went to bed early.</i> = Étant fatigué / Comme j'étais fatigué, je me suis couché tôt.<br><br>
<b>2. Deux actions simultanées :</b><br>
<i>She sat at her desk, <b>reading a report</b>.</i> = Elle était assise à son bureau, lisant un rapport.<br><br>
<b>3. Une action suivant immédiatement l'autre :</b><br>
<i><b>Opening the door</b>, he noticed the mess.</i> = En ouvrant la porte, il a remarqué le désordre.<br><br>
<b>4. Having + PP (action antérieure) :</b><br>
<i><b>Having finished</b> the report, she went home.</i> = Ayant terminé le rapport, elle est rentrée chez elle.`,
        rules: [
            '📐 **-ing clause en début de phrase** = cause : _**Being** a student, I get a discount._ (Étant étudiant…)',
            '📐 **-ing** pour deux actions simultanées : _She sat there, **reading** a book._',
            '📐 **-ing** pour une action juste avant : _**Opening** the letter, she smiled._',
            '📐 **Having + PP** pour une action antérieure : _**Having read** the email, he called her._',
            '📐 Le sujet doit être le MÊME dans les deux propositions : _~~**Walking** home, **the rain** started.~~ ❌ (dangling participle)'
        ],
        examples: [
            { text: "**Feeling hungry**, I decided to order pizza.", fr: "Ayant faim, j'ai décidé de commander une pizza.", correct: true },
            { text: "She sat in the café, **watching** people walk by.", fr: "Elle était assise au café, regardant les gens passer.", correct: true },
            { text: "**Not knowing** what to do, I asked for help.", fr: "Ne sachant pas quoi faire, j'ai demandé de l'aide.", correct: true },
            { text: "**Having finished** the project, the team celebrated.", fr: "Ayant terminé le projet, l'équipe a fêté ça.", correct: true },
            { text: "~~**Walking** home, **the rain** started.~~ → **While I was walking** home, the rain started.", fr: "Le sujet doit être le même dans les deux parties !", correct: false, note: "Erreur de 'dangling participle' — le sujet change !" }
        ],
        tips: [
            "🇫🇷 C'est l'équivalent du gérondif/participe présent français : 'En arrivant...' = 'Arriving...' / 'Étant fatigué...' = 'Being tired...'",
            "💡 'Having + PP' = 'Ayant + participe passé'. Having finished = Ayant terminé. Having read = Ayant lu.",
            "⚠️ Faute classique au TOEIC : le sujet de la clause -ing doit être le même que le sujet principal !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ (Feel) cold, she put on a sweater.', answer: "Feeling", options: ["Feeling", "Felt", "To feel", "Having felt"], hint: "Cause → -ing en début de phrase" },
            { type: 'fill', difficulty: 'easy', question: 'She walked along the beach, _____ (enjoy) the sunset.', answer: "enjoying", options: ["enjoying", "enjoyed", "to enjoy", "enjoys"], hint: "Action simultanée → -ing" },
            { type: 'fill', difficulty: 'easy', question: '_____ (Not know) the answer, I left the question blank.', answer: "Not knowing", options: ["Not knowing", "Not known", "Don't know", "Knowing not"] },
            { type: 'fill', difficulty: 'medium', question: '_____ (Have / finish) the meeting, they went to lunch.', answer: "Having finished", options: ["Having finished", "Finishing", "Finished", "To finish"] },
            { type: 'fill', difficulty: 'medium', question: '_____ (Be) a doctor, she understood the risks.', answer: "Being", options: ["Being", "Been", "To be", "Having been"] },
            { type: 'fill', difficulty: 'medium', question: 'He left the room, _____ (slam) the door behind him.', answer: "slamming", options: ["slamming", "slammed", "to slam", "slam"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "Having reviewed all the applications, the committee made its decision.", options: ["Having reviewed all the applications, the committee made its decision.", "Having reviewed all the applications, a decision was made.", "Reviewed all the applications, the committee decided."] },
            { type: 'fill', difficulty: 'hard', question: '_____ (Work) in finance for 20 years, she had extensive experience.', answer: "Having worked", options: ["Having worked", "Working", "Worked", "To work"] },
            { type: 'fill', difficulty: 'hard', question: '_____ (Not want) to cause any trouble, he left quietly.', answer: "Not wanting", options: ["Not wanting", "Not wanted", "Wanting not", "Don't want"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ (Complete) the required training, employees can apply for promotion.', answer: "Having completed", options: ["Having completed", "Completing", "Completed", "To complete"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez l\'erreur (dangling participle) :', answer: "Walking through the park, the flowers were beautiful.", options: ["Walking through the park, the flowers were beautiful.", "Walking through the park, I noticed the beautiful flowers.", "Having arrived early, we had time for coffee."] },
            { type: 'fill', difficulty: 'hard', question: '_____ (Not be) satisfied with the first draft, the editor requested revisions.', answer: "Not being", options: ["Not being", "Not been", "Being not", "Don't being"] },
            { type: 'fill', difficulty: 'hard', question: '_____ (Analyse) the market data, the team identified three growth opportunities.', answer: "Having analysed", options: ["Having analysed", "Analysing", "Analysed", "To analyse"] }
        ]
    },

    // ─────────────────────────────────────────────
    // UNIT 68 — Countable and uncountable review + -ing/-to summary
    // ─────────────────────────────────────────────
    68: {
        id: 68,
        title: '-ing and to … — Summary & TOEIC practice',
        category: 'ing-to',
        explanation: `🇫🇷 <b>Résumé complet : quand utiliser -ing et quand utiliser to + infinitif</b><br><br>
<b>TOUJOURS -ing :</b><br>
• Après : enjoy, mind, finish, stop, suggest, avoid, recommend, consider, imagine, risk, deny, admit, miss, keep on, give up, put off<br>
• Après une préposition : interested in, good at, tired of, without, by, before, after, instead of<br>
• Après : go + activité, spend/waste time, be busy, have difficulty<br><br>
<b>TOUJOURS to + infinitif :</b><br>
• Après : decide, offer, agree, refuse, promise, hope, expect, plan, manage, afford, fail, learn, threaten, arrange, seem, appear, tend, pretend<br>
• Après : want/need/would like + (objet) + to<br>
• Après : too + adj + to / adj + enough + to<br>
• Pour le but : I came to help.<br><br>
<b>Les deux (-ing ou to) :</b><br>
• like, love, hate, prefer, begin, start, continue<br>
• Sens différent : remember, forget, try, stop, regret<br><br>
<b>Infinitif SANS to :</b><br>
• Après : make, let + objet : He made me laugh.<br>
• Verbes de perception : I saw her leave.`,
        rules: [
            '📐 **Verbes + -ing uniquement** : enjoy, mind, finish, stop, suggest, avoid, admit, deny, recommend, consider, imagine, risk, miss, keep on, give up',
            '📐 **Verbes + to uniquement** : decide, offer, agree, refuse, promise, hope, expect, plan, manage, afford, fail, learn, threaten, seem, pretend',
            '📐 **Préposition + -ing** (toujours) : interested in, good at, tired of, look forward to, by, without',
            '📐 **Verbes + les deux** (sens similaire) : like, love, hate, prefer, begin, start, continue. **Sens différent** : remember, try, stop, regret',
            '📐 **Infinitif sans to** après make, let, et verbes de perception : _He **made** me **do** it._ / _I **saw** her **leave**._'
        ],
        examples: [
            { text: "I **enjoy reading** but I **want to** write a novel too.", fr: "J'aime lire mais je veux aussi écrire un roman.", correct: true },
            { text: "He **suggested meeting** at noon but she **refused to come**.", fr: "Il a suggéré de se retrouver à midi mais elle a refusé de venir.", correct: true },
            { text: "She made me **wait** two hours. (make + infinitif sans to)", fr: "Elle m'a fait attendre deux heures.", correct: true },
            { text: "I **stopped smoking** last year. (= j'ai arrêté)", fr: "J'ai arrêté de fumer l'année dernière.", correct: true },
            { text: "I **stopped to smoke** a cigarette. (= je me suis arrêté pour fumer)", fr: "Je me suis arrêté pour fumer une cigarette.", correct: true }
        ],
        tips: [
            "🇫🇷 Astuce finale : quand vous hésitez, demandez-vous si le verbe principal exprime un plaisir/aversion (→ -ing) ou une intention/décision (→ to).",
            "💡 Les 3 erreurs les plus fréquentes au TOEIC : 1) suggest TO do ❌ 2) enjoy TO do ❌ 3) look forward to + infinitif ❌",
            "⚠️ Réflexe : après une préposition → -ing. Après 'would like / would rather' → to / base verbale. Pas d'exception !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She enjoys _____ (travel) but can\'t afford _____ (go) on holiday.', answer: "travelling … to go", options: ["travelling … to go", "to travel … going", "travelling … going", "to travel … to go"], hint: "enjoy + -ing / afford + to" },
            { type: 'fill', difficulty: 'easy', question: 'They decided _____ (postpone) the meeting.', answer: "to postpone", options: ["to postpone", "postponing", "postpone", "postponed"], hint: "decide + to" },
            { type: 'fill', difficulty: 'easy', question: 'I can\'t help _____ (laugh) when I see that video.', answer: "laughing", options: ["laughing", "to laugh", "laugh", "laughed"] },
            { type: 'fill', difficulty: 'medium', question: 'He made her _____ (apologise) in front of everyone.', answer: "apologise", options: ["apologise", "to apologise", "apologising", "apologised"], hint: "make + objet + infinitif sans to" },
            { type: 'fill', difficulty: 'medium', question: 'She pretended _____ (not hear) what I said.', answer: "not to hear", options: ["not to hear", "not hearing", "to not hear", "don't hear"] },
            { type: 'fill', difficulty: 'medium', question: 'I look forward to _____ (work) with your team.', answer: "working", options: ["working", "work", "to work", "worked"] },
            { type: 'fill', difficulty: 'hard', question: 'The manager let the employees _____ (leave) early on Friday.', answer: "leave", options: ["leave", "to leave", "leaving", "left"], hint: "let + objet + infinitif sans to" },
            { type: 'fill', difficulty: 'hard', question: 'She stopped _____ (check) her emails and started _____ (focus) on the report.', answer: "checking … to focus", options: ["checking … to focus", "to check … focusing", "checking … focusing", "to check … to focus"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She suggested to organise a team-building event.", options: ["She suggested to organise a team-building event.", "He promised to finish by Friday.", "I can't imagine living abroad."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The company agreed _____ (extend) the deadline after the client requested more time.', answer: "to extend", options: ["to extend", "extending", "extend", "extended"] },
            { type: 'fill', difficulty: 'hard', question: 'Employees are encouraged _____ (participate) in the wellness programme.', answer: "to participate", options: ["to participate", "participating", "participate", "participated"] },
            { type: 'correct', difficulty: 'hard', question: 'Dans le contexte TOEIC, quelle phrase est correcte ?', answer: "We recommend reviewing the contract before signing.", options: ["We recommend reviewing the contract before signing.", "We recommend to review the contract before signing.", "We recommend review the contract before to sign."] },
            { type: 'fill', difficulty: 'hard', question: 'Management considered _____ (restructure) the department but decided _____ (keep) the current organisation.', answer: "restructuring … to keep", options: ["restructuring … to keep", "to restructure … keeping", "restructuring … keeping", "to restructure … to keep"] }
        ]
    }
};
