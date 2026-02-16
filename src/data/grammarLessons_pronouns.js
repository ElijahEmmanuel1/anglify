// ============================================
// Grammar Lessons — Pronouns & Determiners (Units 82–97)
// French explanations for francophone learners
// ============================================

export const grammarLessonsPronouns = {
    82: {
        id: 82, title: 'myself / yourself / themselves etc. (Reflexive pronouns)', category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les pronoms réfléchis</b> (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves)<br><br>
En français, on utilise « se/me/te… » : <i>je me lave, il se regarde</i>. En anglais, le pronom réfléchi est un mot séparé placé <b>après le verbe</b> :<br>
<i>"I cut <b>myself</b>."</i> = Je me suis coupé.<br><br>
<b>Quand les utiliser :</b><br>
1️⃣ Quand le sujet et l'objet sont la <b>même personne</b> : <i>"She looked at <b>herself</b> in the mirror."</i><br>
2️⃣ Pour <b>insister</b> (= moi-même, lui-même…) : <i>"I'll do it <b>myself</b>."</i> = Je le ferai moi-même.<br><br>
⚠️ <b>Piège :</b> Certains verbes réfléchis en français ne le sont PAS en anglais :<br>
• se lever = get up (PAS ~~get up myself~~)<br>
• se souvenir = remember (PAS ~~remember myself~~)<br>
• s'habiller = get dressed (PAS ~~dress myself~~)`,
        rules: [
            '📐 **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves**',
            '🔵 Sujet = objet : _She hurt **herself**._ (Elle s\'est blessée.)',
            '🔵 Emphase (= moi-même) : _I painted the house **myself**._ (J\'ai peint la maison moi-même.)',
            '🔵 **by myself** = tout seul : _He lives **by himself**._ (Il vit tout seul.)',
            '🔴 PAS de réfléchi : wash, dress, shave, feel, concentrate, relax, meet → _I **feel** great_ (PAS ~~feel myself~~)',
            '🔴 **each other** ≠ réfléchi : _They looked at **each other**_ = Ils se sont regardés (l\'un l\'autre) ≠ _themselves_'
        ],
        examples: [
            { text: "Be careful! Don't burn **yourself**.", fr: "Fais attention ! Ne te brûle pas.", correct: true },
            { text: "The children enjoyed **themselves** at the party.", fr: "Les enfants se sont bien amusés à la fête.", correct: true },
            { text: "I repaired the computer **myself**. (= I didn't need help)", fr: "J'ai réparé l'ordinateur moi-même.", correct: true, note: "Emphase : moi-même, sans aide" },
            { text: "~~She dressed herself~~ → She **got dressed**.", fr: "Elle s'est habillée. (get dressed, PAS dress oneself)", correct: false, note: "dress est rarement réfléchi en anglais" }
        ],
        tips: [
            "🇫🇷 Beaucoup de verbes qui sont réfléchis en français (se laver, s'habiller, se lever) ne le sont PAS en anglais. Retenez : wash, shave, dress → pas de pronom réfléchi.",
            "💡 « by + myself/himself… » = tout seul (alone). « I did it myself » = je l'ai fait moi-même (emphase).",
            "⚠️ each other ≠ themselves. « They help each other » = ils s'entraident (mutuellement). « They help themselves » = ils s'aident eux-mêmes."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I looked at _____ in the mirror.', answer: "myself", options: ["myself", "me", "I", "mine"], hint: "Sujet = objet → pronom réfléchi" },
            { type: 'fill', difficulty: 'easy', question: 'Be careful with the knife. Don\'t cut _____.', answer: "yourself", options: ["yourself", "you", "yours", "your"], hint: "Tu pourrais te couper → réfléchi" },
            { type: 'fill', difficulty: 'easy', question: 'The cat is washing _____.', answer: "itself", options: ["itself", "it", "its", "it's"], hint: "Le chat se lave → sujet = objet" },
            { type: 'fill', difficulty: 'medium', question: 'We painted the apartment _____.', answer: "ourselves", options: ["ourselves", "us", "our", "by us"], hint: "Nous l'avons fait nous-mêmes (emphase)" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "They looked at each other.", options: ["They looked at each other.", "They looked at themselves.", "They looked at them."], hint: "Regard mutuel → each other" },
            { type: 'fill', difficulty: 'medium', question: 'She lives by _____ in a small apartment.', answer: "herself", options: ["herself", "her", "hers", "she"], hint: "by + réfléchi = toute seule" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "I must concentrate myself on this project.", options: ["I must concentrate myself on this project.", "Help yourself to some coffee.", "The door opened by itself."], hint: "concentrate ne prend pas de réfléchi" },
            { type: 'fill', difficulty: 'hard', question: 'The manager _____ will attend the meeting. (emphase)', answer: "himself", options: ["himself", "him", "his", "he"], hint: "Le directeur lui-même → emphase" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle traduction est correcte pour « Ils se sont regardés » ?', answer: "They looked at each other.", options: ["They looked at each other.", "They looked at themselves.", "They looked at them."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Please make _____ at home. (= faites comme chez vous)', answer: "yourselves", options: ["yourselves", "yourself", "you", "yours"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She enjoyed herself the party.", options: ["She enjoyed herself the party.", "She enjoyed herself at the party.", "She did it by herself."] },
            { type: 'fill', difficulty: 'hard', question: 'The president _____ came to the opening ceremony. (emphase)', answer: "herself", options: ["herself", "her", "hers", "by herself"] },
        ]
    },

    83: {
        id: 83, title: "a friend of mine / my own / on my own", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les possessifs renforcés et « on my own »</b><br><br>
<b>1. a friend of mine/yours/his…</b><br>
En français : « un ami à moi ». En anglais : <b>a + nom + of + pronom possessif</b><br>
<i>"a friend of <b>mine</b>"</i> = un ami à moi (PAS ~~a friend of me~~)<br>
<i>"a colleague of <b>his</b>"</i> = un collègue à lui<br><br>
<b>2. my own / your own…</b> (= mon propre, ton propre)<br>
<i>"I have <b>my own</b> car."</i> = J'ai ma propre voiture.<br>
<i>"She makes <b>her own</b> clothes."</i> = Elle fait ses propres vêtements.<br><br>
<b>3. on my own / by myself</b> = tout seul<br>
<i>"I live <b>on my own</b>."</i> = Je vis tout seul.<br>
Les deux formules sont interchangeables : <i>on my own = by myself</i>`,
        rules: [
            '📐 **a friend of mine** (PAS ~~a friend of me~~) — utiliser le possessif : mine, yours, his, hers, ours, theirs',
            '🔵 **my own** = emphase sur la possession : _my **own** room_ = ma propre chambre',
            '🔵 **on my own** = **by myself** = tout seul, sans aide',
            '🔴 PAS ~~a friend of me~~ → a friend of **mine**'
        ],
        examples: [
            { text: "A friend of **mine** is getting married.", fr: "Un ami à moi va se marier.", correct: true },
            { text: "Is that a decision of **yours**?", fr: "C'est une décision à toi ?", correct: true },
            { text: "I'd like to have **my own** business one day.", fr: "J'aimerais avoir ma propre entreprise un jour.", correct: true },
            { text: "She lives **on her own** in London.", fr: "Elle vit toute seule à Londres.", correct: true }
        ],
        tips: [
            "🇫🇷 « Un ami à moi » = a friend of mine. Attention : of MINE (pas of me).",
            "💡 « my own » ajoute une emphase. « I have a car » vs « I have my OWN car » = ma propre voiture (à moi, pas empruntée).",
            "⚠️ « on my own » et « by myself » sont synonymes. Les deux signifient « tout seul »."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'A colleague of _____ told me about the job.', answer: "mine", options: ["mine", "me", "my", "I"], hint: "a + nom + of + possessif" },
            { type: 'fill', difficulty: 'easy', question: 'I want to have my _____ apartment.', answer: "own", options: ["own", "self", "personal", "proper"], hint: "my _____ = mon propre" },
            { type: 'fill', difficulty: 'easy', question: 'She prefers to work on her _____.', answer: "own", options: ["own", "self", "alone", "single"], hint: "on her _____ = toute seule" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Is that a friend of yours?", options: ["Is that a friend of yours?", "Is that a friend of you?", "Is that your a friend?"] },
            { type: 'fill', difficulty: 'medium', question: 'Tom repaired the car on his _____. Nobody helped him.', answer: "own", options: ["own", "self", "himself", "alone"] },
            { type: 'fill', difficulty: 'medium', question: 'Is that bag _____, or is it yours?', answer: "hers", options: ["hers", "her", "she", "herself"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "A friend of me called last night.", options: ["A friend of me called last night.", "She grew up on her own.", "I'd like my own office."] },
            { type: 'fill', difficulty: 'hard', question: 'It\'s not my idea. It was an idea of _____.', answer: "theirs", options: ["theirs", "them", "their", "they"] },
            { type: 'fill', difficulty: 'hard', question: 'The children made their _____ costumes for the play.', answer: "own", options: ["own", "self", "selves", "personal"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Is this book _____? (= le tien)', answer: "yours", options: ["yours", "your", "you", "yourself"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "That wasn't my fault. It was a mistake of his.", options: ["That wasn't my fault. It was a mistake of his.", "That wasn't my fault. It was a mistake of him.", "That wasn't my fault. It was his mistake of."] },
            { type: 'fill', difficulty: 'hard', question: 'We don\'t need help. We can manage on our _____.', answer: "own", options: ["own", "selves", "ourselves", "help"] },
        ]
    },

    84: {
        id: 84, title: "there … and it …", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>There is / There are vs It is</b><br><br>
<b>« there » sert à dire qu'une chose existe ou se trouve quelque part :</b><br>
<i>"<b>There is</b> a problem."</i> = Il y a un problème.<br>
<i>"<b>There are</b> some books on the table."</i> = Il y a des livres sur la table.<br><br>
<b>« it » est un sujet impersonnel pour parler de :</b><br>
• <b>la météo</b> : <i>"<b>It</b>'s cold today."</i><br>
• <b>l'heure</b> : <i>"<b>It</b>'s 3 o'clock."</i><br>
• <b>la distance</b> : <i>"<b>It</b>'s 10 km to the station."</i><br>
• <b>une situation générale</b> : <i>"<b>It</b>'s nice to see you."</i><br><br>
⚠️ <b>Piège pour les francophones :</b> en français, « il y a » et « il est/c'est » commencent tous les deux par « il ». En anglais, ce sont deux structures très différentes !<br>
<i>"Il y a un chat"</i> = <b>There</b> is a cat (PAS ~~It is~~ a cat)<br>
<i>"Il fait froid"</i> = <b>It</b>'s cold (PAS ~~There is~~ cold)`,
        rules: [
            '📐 **There is/are** = « il y a » → introduit l\'existence de qqch : _There **is** a new restaurant downtown._',
            '📐 **It is** = sujet impersonnel → météo, heure, distance, situation : _**It**\'s raining._',
            '🔵 **There** + be + nom : _There **are** no seats left._',
            '🔵 **It** + be + adj (+ to…) : _**It**\'s important **to** study._',
            '🔴 PAS ~~It has~~ a problem → **There is** a problem',
            '🔴 PAS ~~There is~~ cold → **It\'s** cold'
        ],
        examples: [
            { text: "**There's** a supermarket near my house.", fr: "Il y a un supermarché près de chez moi.", correct: true },
            { text: "**It's** dangerous to drive too fast.", fr: "C'est dangereux de conduire trop vite.", correct: true },
            { text: "**There were** a lot of people at the concert.", fr: "Il y avait beaucoup de monde au concert.", correct: true },
            { text: "~~It has~~ a mistake in this document. → **There is** a mistake.", fr: "Il y a une erreur dans ce document.", correct: false }
        ],
        tips: [
            "🇫🇷 En français, « il y a » et « c'est/il est » commencent par « il ». En anglais, c'est « there » (existence) vs « it » (impersonnel).",
            "💡 Astuce : si vous pouvez remplacer par « il y a » → there. Si c'est du temps/météo/situation → it.",
            "⚠️ « There is » s'accorde : there IS a book / there ARE books. À l'oral, « there's + pluriel » est courant mais grammaticalement incorrect au TOEIC."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ is a bank on the corner.', answer: "There", options: ["There", "It", "This", "That"], hint: "Il y a une banque → existence" },
            { type: 'fill', difficulty: 'easy', question: '_____ is cold today, isn\'t it?', answer: "It", options: ["It", "There", "This", "That"], hint: "Météo → sujet impersonnel" },
            { type: 'fill', difficulty: 'easy', question: '_____ are many students in this class.', answer: "There", options: ["There", "It", "They", "These"], hint: "Il y a beaucoup d'étudiants → existence" },
            { type: 'fill', difficulty: 'medium', question: '_____ is a long way from here to the airport.', answer: "It", options: ["It", "There", "This", "That"], hint: "Distance → it" },
            { type: 'fill', difficulty: 'medium', question: '_____ was an accident on the highway yesterday.', answer: "There", options: ["There", "It", "This", "That"], hint: "Il y a eu un accident → existence" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "There's no point in waiting.", options: ["There's no point in waiting.", "It's no point in waiting.", "This is no point in waiting."] },
            { type: 'fill', difficulty: 'hard', question: '_____ is said that English is easy. (= On dit que…)', answer: "It", options: ["It", "There", "This", "People"], hint: "It is said that = on dit que (impersonnel)" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "It is a lot of traffic today.", options: ["It is a lot of traffic today.", "It's about 5 km to the beach.", "There seems to be a problem."] },
            { type: 'fill', difficulty: 'hard', question: '_____ must have been a mistake in the calculation.', answer: "There", options: ["There", "It", "This", "That"], hint: "Il a dû y avoir une erreur → existence" }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ is expected that the company will grow. (= On s\'attend à ce que…)', answer: "It", options: ["It", "There", "This", "The company"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "There appears to be a shortage of qualified staff.", options: ["There appears to be a shortage of qualified staff.", "It appears to be a shortage of qualified staff.", "Here appears to be a shortage of qualified staff."] },
            { type: 'fill', difficulty: 'hard', question: '_____ is no doubt that he is the best candidate.', answer: "There", options: ["There", "It", "This", "No one"] },
        ]
    },

    85: {
        id: 85, title: "some and any", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Some et Any — quantité indéterminée</b><br><br>
<b>Some</b> = du, de la, des, quelques → phrases <b>affirmatives</b><br>
<i>"I bought <b>some</b> bread."</i> = J'ai acheté du pain.<br><br>
<b>Any</b> = du, de la, des, aucun → phrases <b>négatives et interrogatives</b><br>
<i>"Do you have <b>any</b> questions?"</i> = Avez-vous des questions ?<br>
<i>"I don't have <b>any</b> money."</i> = Je n'ai pas d'argent.<br><br>
⚠️ <b>Exceptions importantes :</b><br>
• <b>Some</b> dans une question = offre ou demande polie : <i>"Would you like <b>some</b> coffee?"</i><br>
• <b>Any</b> en affirmatif = n'importe quel : <i>"Take <b>any</b> seat you like."</i> = Prends n'importe quel siège.`,
        rules: [
            '📐 **some** → affirmative : _I need **some** help._',
            '📐 **any** → négative/interrogative : _Do you have **any** idea? / I don\'t have **any** time._',
            '🔵 **some** en question = offre/demande polie : _Would you like **some** tea?_ / _Can I have **some** water?_',
            '🔵 **any** en affirmatif = n\'importe quel : _Call me **any** time._ = Appelle-moi n\'importe quand.',
            '🔵 Composés : some**body**/any**body**, some**thing**/any**thing**, some**where**/any**where**'
        ],
        examples: [
            { text: "I've got **some** questions for you.", fr: "J'ai quelques questions pour toi.", correct: true },
            { text: "Is there **any** milk in the fridge?", fr: "Y a-t-il du lait dans le frigo ?", correct: true },
            { text: "Would you like **some** cake? (offre)", fr: "Voudrais-tu du gâteau ?", correct: true, note: "Offre → some même en question" },
            { text: "You can sit **anywhere** you like.", fr: "Tu peux t'asseoir n'importe où.", correct: true }
        ],
        tips: [
            "🇫🇷 « du/de la/des » se traduit par some (affirmatif) ou any (négatif/question).",
            "💡 Pour les offres et demandes polies (Would you like…? / Can I have…?), on attend une réponse positive → utilisez some.",
            "⚠️ N'importe quel/quelle = any en affirmatif. « Any doctor will tell you » = n'importe quel médecin vous dira."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I need _____ information about the course.', answer: "some", options: ["some", "any", "a", "the"] },
            { type: 'fill', difficulty: 'easy', question: 'There aren\'t _____ seats available.', answer: "any", options: ["any", "some", "no", "the"] },
            { type: 'fill', difficulty: 'easy', question: 'Would you like _____ more coffee?', answer: "some", options: ["some", "any", "a", "the"], hint: "Offre polie → some" },
            { type: 'fill', difficulty: 'medium', question: 'You can call me _____ time you want.', answer: "any", options: ["any", "some", "every", "all"], hint: "N'importe quand → any" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Is there anything I can do to help?", options: ["Is there anything I can do to help?", "Is there something I can do to help?", "Is there nothing I can do to help?"] },
            { type: 'fill', difficulty: 'medium', question: 'I looked everywhere but I couldn\'t find it _____.', answer: "anywhere", options: ["anywhere", "somewhere", "nowhere", "everywhere"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "If anyone calls, take a message.", options: ["If anyone calls, take a message.", "If someone calls, take a message.", "If no one calls, take a message."], hint: "If + phrase conditionnelle → any" },
            { type: 'fill', difficulty: 'hard', question: 'The exam was so easy that _____ could pass it.', answer: "anybody", options: ["anybody", "somebody", "nobody", "everybody"], hint: "N'importe qui → anybody" },
            { type: 'fill', difficulty: 'hard', question: 'Can I have _____ water, please?', answer: "some", options: ["some", "any", "a", "the"], hint: "Demande polie → some" }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'I\'d like _____ information about flights to Paris.', answer: "some", options: ["some", "any", "a", "the"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "Hardly anyone came to the meeting.", options: ["Hardly anyone came to the meeting.", "Hardly someone came to the meeting.", "Hardly no one came to the meeting."] },
            { type: 'fill', difficulty: 'hard', question: '_____body told me, but I can\'t remember who.', answer: "Some", options: ["Some", "Any", "No", "Every"] },
        ]
    },

    86: {
        id: 86, title: "no / none / any / nothing / nobody", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les mots négatifs : no, none, nothing, nobody, nowhere</b><br><br>
En anglais, <b>on ne peut pas avoir deux négations</b> dans la même phrase (double négation = incorrecte) :<br>
❌ <i>I don't have ~~nothing~~.</i> → ✅ <i>I don't have <b>anything</b>.</i> OU <i>I have <b>nothing</b>.</i><br><br>
<b>Deux façons d'exprimer la négation :</b><br>
1️⃣ verbe négatif + <b>any/anything/anybody/anywhere</b> : _I **don't** have **any** money._<br>
2️⃣ verbe affirmatif + <b>no/nothing/nobody/nowhere</b> : _I have **no** money._<br><br>
<b>none</b> = aucun (pronom, sans nom après) : _"How many tickets? — **None**."_<br>
<b>no</b> = aucun (déterminant, avec nom après) : _"There are **no** tickets left."_`,
        rules: [
            '📐 **Pas de double négation** : I don\'t know **anything** OU I know **nothing** (PAS ~~I don\'t know nothing~~)',
            '🔵 **no** + nom : _There is **no** reason to worry._',
            '🔵 **none** sans nom : _"How many? — **None**."_ / _**None** of them came._',
            '🔵 **nothing/nobody/nowhere** = pronom négatif complet : _**Nobody** knows._',
            '🔴 Après **no/nothing/nobody** → verbe AFFIRMATIF : _**Nobody** knows_ (PAS ~~Nobody doesn\'t know~~)'
        ],
        examples: [
            { text: "There is **no** parking available.", fr: "Il n'y a aucun parking disponible.", correct: true },
            { text: "**None** of the students passed the exam.", fr: "Aucun des étudiants n'a réussi l'examen.", correct: true },
            { text: "I have **nothing** to say.", fr: "Je n'ai rien à dire.", correct: true },
            { text: "~~I don't know nothing.~~ → I don't know **anything**.", fr: "Je ne sais rien. (pas de double négation !)", correct: false }
        ],
        tips: [
            "🇫🇷 En français, « je ne sais rien » a deux négations (ne…rien). En anglais, UNE SEULE négation : I know nothing OU I don't know anything.",
            "💡 none = « aucun » utilisé seul. no = « aucun » suivi d'un nom.",
            "⚠️ Au TOEIC, les questions sur la double négation sont fréquentes !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'There is _____ sugar left. We need to buy more.', answer: "no", options: ["no", "none", "any", "not"] },
            { type: 'fill', difficulty: 'easy', question: '"How many emails did you get?" "_____ ."', answer: "None", options: ["None", "No", "Nothing", "Any"] },
            { type: 'fill', difficulty: 'easy', question: '_____ called while you were out.', answer: "Nobody", options: ["Nobody", "Anybody", "Somebody", "Not anybody"] },
            { type: 'fill', difficulty: 'medium', question: 'There\'s _____ we can do about it now.', answer: "nothing", options: ["nothing", "anything", "something", "not anything"] },
            { type: 'correct', difficulty: 'medium', question: 'Identifiez la phrase INCORRECTE :', answer: "I don't have no time.", options: ["I don't have no time.", "I have no time.", "I don't have any time."] },
            { type: 'fill', difficulty: 'medium', question: '_____ of the information was correct.', answer: "None", options: ["None", "No", "Nothing", "Not any"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "She said nothing about the problem.", options: ["She said nothing about the problem.", "She didn't say nothing about the problem.", "She said not anything about the problem."] },
            { type: 'fill', difficulty: 'hard', question: 'I went _____ interesting last weekend. I stayed home.', answer: "nowhere", options: ["nowhere", "anywhere", "somewhere", "not anywhere"] },
            { type: 'fill', difficulty: 'hard', question: '_____ of the candidates was/were suitable for the job.', answer: "None", options: ["None", "No", "Neither", "Nothing"] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "There was nowhere to park.", options: ["There was nowhere to park.", "There wasn't nowhere to park.", "There was not anywhere to park."] },
            { type: 'fill', difficulty: 'hard', question: 'The report contained _____ new information.', answer: "no", options: ["no", "none", "not any", "nothing"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Nobody doesn't know the answer.", options: ["Nobody doesn't know the answer.", "Nobody knows the answer.", "No one knew the answer."] },
        ]
    },

    87: {
        id: 87, title: "much, many, little, few, a lot, plenty", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Quantifieurs : much/many, little/few, a lot/plenty</b><br><br>
<b>Dénombrables vs indénombrables :</b><br>
• <b>many / few / a few</b> → dénombrables (pluriel) : books, people, cars<br>
• <b>much / little / a little</b> → indénombrables : money, time, water<br>
• <b>a lot of / plenty of</b> → les deux !<br><br>
<b>Attention à la nuance few vs a few :</b><br>
• <b>few</b> = très peu (sens négatif) : _**Few** people understood._ (Peu de gens ont compris — c'est dommage)<br>
• <b>a few</b> = quelques (sens positif) : _I have **a few** friends in Paris._ (J'ai quelques amis — c'est bien)<br><br>
Même chose : <b>little</b> (très peu) vs <b>a little</b> (un peu)`,
        rules: [
            '📐 **many + dénombrable** : _How **many** people?_ / **much + indénombrable** : _How **much** money?_',
            '🔵 **a lot of / lots of** = beaucoup de → dénombrables ET indénombrables : _a lot of books_ / _a lot of time_',
            '🔵 **plenty of** = largement assez : _There\'s **plenty of** time_',
            '🔵 **few** (négatif) vs **a few** (positif) : _Few people came_ (dommage) vs _A few people came_ (c\'est OK)',
            '🔵 **little** (négatif) vs **a little** (positif) : _I have little hope_ (pas ou presque pas) vs _I have a little hope_ (un petit peu)'
        ],
        examples: [
            { text: "There weren't **many** people at the meeting.", fr: "Il n'y avait pas beaucoup de monde à la réunion.", correct: true },
            { text: "We don't have **much** time.", fr: "Nous n'avons pas beaucoup de temps.", correct: true },
            { text: "I have **a few** questions. (= some, positive)", fr: "J'ai quelques questions.", correct: true, note: "a few = quelques (positif)" },
            { text: "**Few** people know about this. (= almost none)", fr: "Peu de gens connaissent ça. (presque personne)", correct: true, note: "few = très peu (négatif)" }
        ],
        tips: [
            "🇫🇷 « Beaucoup de » = a lot of (toujours correct, dén. ou indén.). much/many sont surtout utilisés en négatif/question.",
            "💡 Piège TOEIC : few ≠ a few. « The company has few customers » = la société a peu de clients (mauvais). « A few customers » = elle a quelques clients (OK).",
            "⚠️ much/many en affirmatif sont moins naturels. Préférez « a lot of » : « I have a lot of work » plutôt que ~~I have much work~~."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'How _____ students are in your class?', answer: "many", options: ["many", "much", "a lot", "few"] },
            { type: 'fill', difficulty: 'easy', question: 'I don\'t have _____ money left.', answer: "much", options: ["much", "many", "a lot", "few"] },
            { type: 'fill', difficulty: 'easy', question: 'There are _____ of restaurants in this area.', answer: "a lot", options: ["a lot", "much", "many", "few"] },
            { type: 'fill', difficulty: 'medium', question: 'Very _____ tourists visit this small village.', answer: "few", options: ["few", "a few", "little", "a little"], hint: "Presque aucun → few (négatif)" },
            { type: 'fill', difficulty: 'medium', question: 'Could you give me _____ advice?', answer: "a little", options: ["a little", "a few", "little", "few"], hint: "Un peu de (positif) + indénombrable" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "We have plenty of time.", options: ["We have plenty of time.", "We have plenty time.", "We have the plenty of time."] },
            { type: 'fill', difficulty: 'hard', question: 'There was very _____ interest in the proposal.', answer: "little", options: ["little", "a little", "few", "a few"], hint: "Presque pas d'intérêt → négatif + indénombrable" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la différence correcte :', answer: "Few people passed (= bad) vs A few people passed (= some)", options: ["Few people passed (= bad) vs A few people passed (= some)", "Few = some, A few = none", "Few and a few mean the same thing"] },
            { type: 'fill', difficulty: 'hard', question: 'There\'s been _____ improvement in sales this quarter.', answer: "little", options: ["little", "a little", "few", "a few"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'How _____ experience do you have in marketing?', answer: "much", options: ["much", "many", "a lot", "few"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase a un sens NÉGATIF ?', answer: "The company has few skilled workers.", options: ["The company has few skilled workers.", "The company has a few skilled workers.", "The company has a lot of skilled workers."] },
            { type: 'fill', difficulty: 'hard', question: 'We have _____ time before the deadline. We must hurry.', answer: "little", options: ["little", "a little", "few", "plenty of"] },
        ]
    },

    88: {
        id: 88, title: "both / either / neither", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Both, Either, Neither — Parler de deux éléments</b><br><br>
<b>both</b> = les deux, tous les deux<br>
<i>"<b>Both</b> restaurants are good."</i> = Les deux restaurants sont bons.<br><br>
<b>either</b> = l'un ou l'autre (phrase affirmative), non plus (phrase négative)<br>
<i>"You can take <b>either</b> bus."</i> = Tu peux prendre l'un ou l'autre bus.<br>
<i>"I don't like <b>either</b> one."</i> = Je n'aime ni l'un ni l'autre.<br><br>
<b>neither</b> = ni l'un ni l'autre<br>
<i>"<b>Neither</b> answer is correct."</i> = Aucune des deux réponses n'est correcte.<br><br>
<b>Structures :</b><br>
• both … and … = et … et … / à la fois … et …<br>
• either … or … = soit … soit …<br>
• neither … nor … = ni … ni …`,
        rules: [
            '📐 **both** + pluriel : _**Both** books are good._ / _**Both** of them came._',
            '📐 **either** + singulier : _**Either** day is fine._ / _**Either** … **or** …_',
            '📐 **neither** + singulier : _**Neither** option works._ / _**Neither** … **nor** …_',
            '🔵 **both … and …** : _She speaks **both** French **and** English._',
            '🔵 **either … or …** : _We can go **either** Monday **or** Tuesday._',
            '🔵 **neither … nor …** : _**Neither** Tom **nor** Sue came._ (+ verbe affirmatif !)',
            '🔴 neither/either → PAS de double négation : _I don\'t like **either** one_ (PAS ~~neither one~~)'
        ],
        examples: [
            { text: "**Both** options are expensive.", fr: "Les deux options sont chères.", correct: true },
            { text: "I can meet you on **either** Monday or Tuesday.", fr: "Je peux te voir soit lundi soit mardi.", correct: true },
            { text: "**Neither** of us speaks Chinese.", fr: "Aucun de nous deux ne parle chinois.", correct: true },
            { text: "She's **both** intelligent **and** hardworking.", fr: "Elle est à la fois intelligente et travailleuse.", correct: true }
        ],
        tips: [
            "🇫🇷 « les deux » = both. « soit… soit… » = either…or. « ni… ni… » = neither…nor.",
            "💡 Après neither/nor → verbe AFFIRMATIF (pas de négation) : neither… nor = déjà négatif.",
            "⚠️ « Me neither » ou « Neither do I » = moi non plus. « Me either » est informel (US)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ of the students passed the test. (les deux)', answer: "Both", options: ["Both", "Either", "Neither", "All"] },
            { type: 'fill', difficulty: 'easy', question: 'You can have _____ tea or coffee.', answer: "either", options: ["either", "both", "neither", "any"] },
            { type: 'fill', difficulty: 'easy', question: '_____ train goes to the airport. We can take any.', answer: "Either", options: ["Either", "Both", "Neither", "Each"] },
            { type: 'fill', difficulty: 'medium', question: '_____ the manager _____ the director was available.', answer: "Neither … nor", options: ["Neither … nor", "Either … or", "Both … and", "Not … or"] },
            { type: 'fill', difficulty: 'medium', question: 'She speaks _____ French _____ Spanish fluently.', answer: "both … and", options: ["both … and", "either … or", "neither … nor", "not … but"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Neither of the answers is correct.", options: ["Neither of the answers is correct.", "Neither of the answers aren't correct.", "Neither the answers is correct."] },
            { type: 'fill', difficulty: 'hard', question: '"I don\'t like spicy food." "_____ do I."', answer: "Neither", options: ["Neither", "Either", "Both", "Nor"], hint: "Moi non plus → Neither do I" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte avec « nor » :', answer: "He neither called nor wrote.", options: ["He neither called nor wrote.", "He neither called or wrote.", "He didn't neither call nor write."] },
            { type: 'fill', difficulty: 'hard', question: 'The hotel is _____ cheap _____ comfortable. Let\'s find another.', answer: "neither … nor", options: ["neither … nor", "either … or", "both … and", "not … but"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ candidates have excellent qualifications.', answer: "Both", options: ["Both", "Either", "Neither", "Each"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "Neither the CEO nor the board members were informed.", options: ["Neither the CEO nor the board members were informed.", "Neither the CEO or the board members were informed.", "Neither the CEO nor the board members weren't informed."] },
            { type: 'fill', difficulty: 'hard', question: 'The product is _____ innovative _____ affordable. It won\'t sell.', answer: "neither … nor", options: ["neither … nor", "either … or", "both … and", "not … and"] },
        ]
    },

    89: {
        id: 89, title: "all / every / whole", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>All, Every, Whole — exprimer la totalité</b><br><br>
<b>all</b> = tout/tous/toutes (+ pluriel ou indénombrable)<br>
<i>"<b>All</b> the students passed."</i> = Tous les étudiants ont réussi.<br>
<i>"I spent <b>all</b> the money."</i> = J'ai dépensé tout l'argent.<br><br>
<b>every</b> = chaque, tous les (+ singulier)<br>
<i>"<b>Every</b> student must register."</i> = Chaque étudiant doit s'inscrire.<br><br>
<b>whole</b> = entier, en entier (+ singulier dénombrable)<br>
<i>"I read the <b>whole</b> book."</i> = J'ai lu le livre en entier.<br><br>
⚠️ <b>Différence clé :</b> all + pluriel vs every + singulier<br>
• **All** students = **Every** student (même sens, grammaire différente)`,
        rules: [
            '📐 **all** + article/possessif + nom pluriel ou indénombrable : _**all** the people, **all** my time_',
            '📐 **every** + nom singulier : _**every** person, **every** day_',
            '📐 **the whole** + nom singulier : _the **whole** day, the **whole** team_',
            '🔵 **all** peut être pronom : _**All** is well._ / _I ate it **all**._',
            '🔵 **everything** (= tout, pronom) vs **every** + nom : _**Everything** is fine._ vs _**Every** day._',
            '🔴 PAS ~~every~~ + pluriel → **all** + pluriel OU **every** + singulier'
        ],
        examples: [
            { text: "I work **every** day. (= each day)", fr: "Je travaille chaque jour / tous les jours.", correct: true },
            { text: "**All** the rooms have air conditioning.", fr: "Toutes les chambres ont la climatisation.", correct: true },
            { text: "She read the **whole** report in one hour.", fr: "Elle a lu le rapport en entier en une heure.", correct: true },
            { text: "~~Every people~~ → **All** people / **Every** person", fr: "Tous les gens / Chaque personne", correct: false }
        ],
        tips: [
            "🇫🇷 « chaque » = every (+ singulier). « tous les » = all (+ pluriel) ou every (+ singulier).",
            "💡 whole = entier. Utilisé avec « the » ou un possessif : the whole story / my whole life.",
            "⚠️ Piège : « all day » (pas d'article) mais « the whole day » (avec article). Les deux sont corrects."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ student in the class passed the exam.', answer: "Every", options: ["Every", "All", "Whole", "Each"] },
            { type: 'fill', difficulty: 'easy', question: '_____ the windows were open.', answer: "All", options: ["All", "Every", "Whole", "Each"] },
            { type: 'fill', difficulty: 'easy', question: 'She spent the _____ day at the beach.', answer: "whole", options: ["whole", "all", "every", "total"] },
            { type: 'fill', difficulty: 'medium', question: 'I\'ve been waiting _____ morning. (= toute la matinée)', answer: "all", options: ["all", "every", "whole", "the"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est INCORRECTE ?', answer: "Every students must attend.", options: ["Every students must attend.", "All students must attend.", "Every student must attend."] },
            { type: 'fill', difficulty: 'medium', question: '_____ in the room was silent.', answer: "Everything", options: ["Everything", "All thing", "Every", "Every things"] },
            { type: 'fill', difficulty: 'hard', question: 'Not _____ students will agree with this decision.', answer: "all", options: ["all", "every", "each", "whole"] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ company was restructured last year.', answer: "whole", options: ["whole", "all", "every", "entire"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "He worked all his life in education.", options: ["He worked all his life in education.", "He worked every his life in education.", "He worked the all life in education."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ employee must complete the training.', answer: "Every", options: ["Every", "All", "Whole", "Each the"] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ team contributed to the success.', answer: "whole", options: ["whole", "all", "every", "entire"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "All of the department's goals were achieved.", options: ["All of the department's goals were achieved.", "Every of the department's goals were achieved.", "Whole the department's goals were achieved."] },
        ]
    },

    90: {
        id: 90, title: "each and every", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Each vs Every — la différence subtile</b><br><br>
Les deux signifient « chaque/chacun », mais :<br><br>
<b>each</b> = chacun <b>individuellement</b>, un par un (petit groupe)<br>
<i>"<b>Each</b> student received a certificate."</i> = Chaque étudiant a reçu un certificat (on les imagine un par un).<br><br>
<b>every</b> = chacun dans un <b>ensemble</b>, tous sans exception (grand groupe)<br>
<i>"<b>Every</b> student in the school must wear a uniform."</i> = Tous les élèves (= chaque élève) doivent porter l'uniforme.<br><br>
<b>Différences grammaticales :</b><br>
• <b>each of</b> + pluriel : _Each of the rooms…_ (every of ❌)<br>
• <b>each</b> peut être pronom : _They cost $5 **each**._<br>
• <b>every</b> → composés : every**one**, every**thing**, every**where**, every**body**`,
        rules: [
            '📐 **each** = individuel, un par un (2+ éléments). **every** = tous dans un ensemble (3+ éléments).',
            '🔵 **each of** + the/these/those + pluriel : _Each of **the** rooms is different._',
            '🔵 **each** comme pronom : _The tickets cost $20 **each**._ / _We **each** have our own room._',
            '🔵 **every** + temps : _every day, every week, every 5 minutes_',
            '🔴 PAS ~~every of~~ → **each of** : _**Each of** the participants…_ (PAS ~~Every of~~)'
        ],
        examples: [
            { text: "**Each** room has its own bathroom.", fr: "Chaque chambre a sa propre salle de bain.", correct: true },
            { text: "**Every** child deserves a good education.", fr: "Chaque enfant mérite une bonne éducation.", correct: true },
            { text: "They paid $50 **each**. (= chacun)", fr: "Ils ont payé 50$ chacun.", correct: true },
            { text: "~~Every of~~ the employees → **Each of** the employees", fr: "Chacun des employés", correct: false }
        ],
        tips: [
            "🇫🇷 each = chacun (regard individuel). every = chaque/tous (regard global). La différence est subtile.",
            "💡 each of + the/them/us → OK. every of → JAMAIS. C'est une différence clé au TOEIC.",
            "⚠️ « every day » (chaque jour) vs « each day » (jour par jour) : souvent interchangeables en pratique."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ student has a textbook.', answer: "Each", options: ["Each", "Every", "All", "Any"], hint: "Individuellement, un par un" },
            { type: 'fill', difficulty: 'easy', question: 'She goes jogging _____ morning.', answer: "every", options: ["every", "each", "all", "any"] },
            { type: 'fill', difficulty: 'easy', question: 'The T-shirts cost $15 _____.', answer: "each", options: ["each", "every", "all", "one"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Each of the rooms has a balcony.", options: ["Each of the rooms has a balcony.", "Every of the rooms has a balcony.", "Every the rooms has a balcony."] },
            { type: 'fill', difficulty: 'medium', question: 'We _____ have our own computer. (pronom)', answer: "each", options: ["each", "every", "all", "both"] },
            { type: 'fill', difficulty: 'medium', question: '_____ employee will receive a bonus this year.', answer: "Every", options: ["Every", "Each", "All", "Any"], hint: "Ensemble, tous sans exception" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Every of the participants agreed.", options: ["Every of the participants agreed.", "Each of the participants agreed.", "Every participant agreed."] },
            { type: 'fill', difficulty: 'hard', question: '_____ side of the box was painted a different color.', answer: "Each", options: ["Each", "Every", "All", "Both"], hint: "Individuellement, côté par côté" },
            { type: 'fill', difficulty: 'hard', question: 'Trains depart _____ 30 minutes from this station.', answer: "every", options: ["every", "each", "all", "per"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ of the proposals has been carefully reviewed.', answer: "Each", options: ["Each", "Every", "All", "Any"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The company publishes a report every quarter.", options: ["The company publishes a report every quarter.", "The company publishes a report each of quarter.", "The company publishes a report every of the quarters."] },
            { type: 'fill', difficulty: 'hard', question: '_____ member of staff was interviewed individually.', answer: "Each", options: ["Each", "Every", "All", "Any"] },
        ]
    },

    91: {
        id: 91, title: "Relative clauses (1) — who/that/which", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les propositions relatives (1) : who, that, which</b><br><br>
Les relatives donnent des informations sur une personne ou une chose :<br>
<i>"The woman <b>who</b> works here is my sister."</i> = La femme qui travaille ici est ma sœur.<br><br>
<b>Quel pronom utiliser ?</b><br>
• <b>who/that</b> → personnes : _The man **who/that** called you…_<br>
• <b>which/that</b> → choses : _The book **which/that** I bought…_<br>
• <b>whose</b> → possession (dont) : _The woman **whose** car was stolen…_<br><br>
⚠️ <b>Piège pour les francophones :</b> En français, « qui/que » ne changent pas selon personne/chose. En anglais, il faut choisir !<br>
<b>that</b> est le plus polyvalent et peut remplacer who ou which dans la plupart des cas.`,
        rules: [
            '📐 **who/that** pour les personnes : _The teacher **who** helped me…_',
            '📐 **which/that** pour les choses : _The car **which** I bought…_',
            '📐 **whose** = dont (possession) : _A man **whose** wife is a doctor…_',
            '🔵 **that** remplace who/which dans les relatives <b>déterminatives</b> (essentielles)',
            '🔴 Pas de **that** après une virgule (relative non-déterminative) : _My sister, **who** lives in Paris…_ (PAS ~~that~~)'
        ],
        examples: [
            { text: "The man **who/that** lives next door is a doctor.", fr: "L'homme qui habite à côté est médecin.", correct: true },
            { text: "The book **which/that** you lent me was excellent.", fr: "Le livre que tu m'as prêté était excellent.", correct: true },
            { text: "I met a woman **whose** husband works at Google.", fr: "J'ai rencontré une femme dont le mari travaille chez Google.", correct: true },
            { text: "My car, ~~that~~ → **which** is red, is parked outside.", fr: "Ma voiture, qui est rouge, est garée dehors.", correct: false, note: "Après une virgule → which (pas that)" }
        ],
        tips: [
            "🇫🇷 « qui » (sujet) = who/which/that. « que » (objet) = who(m)/which/that ou rien.",
            "💡 « dont » = whose (possession) ou of which. C'est souvent un piège au TOEIC.",
            "⚠️ that n'est JAMAIS utilisé après une virgule. Si l'info est juste un supplément → who/which."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The woman _____ answered the phone was very helpful.', answer: "who", options: ["who", "which", "whose", "whom"] },
            { type: 'fill', difficulty: 'easy', question: 'This is the restaurant _____ I was telling you about.', answer: "that", options: ["that", "who", "whose", "whom"] },
            { type: 'fill', difficulty: 'easy', question: 'I know a girl _____ father is a pilot.', answer: "whose", options: ["whose", "who", "which", "that"] },
            { type: 'fill', difficulty: 'medium', question: 'The company _____ products we use has gone bankrupt.', answer: "whose", options: ["whose", "which", "that", "who"], hint: "dont les produits → possession" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Paris, which is the capital of France, is beautiful.", options: ["Paris, which is the capital of France, is beautiful.", "Paris, that is the capital of France, is beautiful.", "Paris, who is the capital of France, is beautiful."] },
            { type: 'fill', difficulty: 'medium', question: 'The people _____ live next door are very noisy.', answer: "who", options: ["who", "which", "whose", "whom"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "My brother, that lives in Rome, is a chef.", options: ["My brother, that lives in Rome, is a chef.", "My brother, who lives in Rome, is a chef.", "The man who lives next door is a chef."] },
            { type: 'fill', difficulty: 'hard', question: 'The hotel _____ we stayed was near the beach.', answer: "where", options: ["where", "which", "whose", "who"], hint: "lieu → where/in which" },
            { type: 'fill', difficulty: 'hard', question: 'I spoke to the woman _____ son had been injured.', answer: "whose", options: ["whose", "who", "which", "that"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The candidates _____ applications have been received will be contacted.', answer: "whose", options: ["whose", "who", "which", "that"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The report, which was published yesterday, contains new data.", options: ["The report, which was published yesterday, contains new data.", "The report, that was published yesterday, contains new data.", "The report, who was published yesterday, contains new data."] },
            { type: 'fill', difficulty: 'hard', question: 'This is the reason _____ I resigned.', answer: "why", options: ["why", "which", "whose", "that"] },
        ]
    },

    92: {
        id: 92, title: "Relative clauses (2) — omitting who/that/which", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les propositions relatives (2) : omettre le pronom relatif</b><br><br>
En anglais, on peut <b>supprimer</b> le pronom relatif (who/which/that) quand il est <b>OBJET</b> de la relative :<br><br>
<b>Relatif = sujet → obligatoire :</b><br>
<i>"The man <b>who</b> called me…"</i> (who est sujet de called → on garde)<br><br>
<b>Relatif = objet → on peut omettre :</b><br>
<i>"The man <b>(who/that)</b> I met…"</i> = L'homme que j'ai rencontré…<br>
<i>"The book <b>(which/that)</b> you bought…"</i> = Le livre que tu as acheté…<br><br>
💡 <b>Comment savoir ?</b> Si le pronom est suivi d'un <b>autre sujet</b> (I, you, she, they…), c'est un objet → on peut l'omettre.`,
        rules: [
            '📐 Relatif **sujet** → obligatoire : _The woman **who** works here…_ (who = sujet de works)',
            '📐 Relatif **objet** → optionnel : _The film **(that)** I saw…_ = _The film I saw…_',
            '🔵 Test : si le pronom est suivi d\'un sujet → il est objet → omissible',
            '🔴 PAS d\'omission en relative non-déterminative (avec virgule) : _My sister, **who** I adore, …_'
        ],
        examples: [
            { text: "The film **(that)** we saw last night was great.", fr: "Le film que nous avons vu hier soir était super.", correct: true, note: "that est objet → on peut omettre" },
            { text: "Have you found the keys **(which)** you lost?", fr: "As-tu trouvé les clés que tu as perdues ?", correct: true },
            { text: "The man **who** phoned didn't give his name. (obligatoire !)", fr: "L'homme qui a appelé n'a pas donné son nom.", correct: true, note: "who = sujet → on ne peut pas omettre" }
        ],
        tips: [
            "🇫🇷 En français, « que » est toujours obligatoire : « le livre QUE j'ai lu ». En anglais, on peut le supprimer.",
            "💡 Astuce : pronom + sujet + verbe → le pronom est objet → supprimable. Pronom + verbe → le pronom est sujet → obligatoire.",
            "⚠️ TOEIC : on vous demande souvent de choisir entre inclure ou omettre le pronom. Identifiez si c'est sujet ou objet !"
        ],
        exercises: [
            { type: 'correct', difficulty: 'easy', question: 'Dans quelle phrase peut-on omettre "that" ?', answer: "The shirt that I bought was too small.", options: ["The shirt that I bought was too small.", "The man that called me was rude.", "The car that broke down was new."], hint: "that = objet → omissible" },
            { type: 'fill', difficulty: 'easy', question: 'The music _____ I listen to is jazz. (pronom ou rien ?)', answer: "∅ (rien)", options: ["∅ (rien)", "who", "whose", "whom"], hint: "I listen to → I = sujet → le pronom est objet" },
            { type: 'correct', difficulty: 'easy', question: 'Quelle phrase est correcte ?', answer: "The people I met were friendly.", options: ["The people I met were friendly.", "The people met were friendly.", "The people who I met they were friendly."] },
            { type: 'correct', difficulty: 'medium', question: 'Dans quelle phrase le pronom est-il OBLIGATOIRE ?', answer: "The woman who teaches us is from Canada.", options: ["The woman who teaches us is from Canada.", "The woman who I met was friendly.", "The book which I read was boring."] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est INCORRECTE ?', answer: "The man lives next door is a doctor.", options: ["The man lives next door is a doctor.", "The man who lives next door is a doctor.", "The man I spoke to was helpful."] },
            { type: 'fill', difficulty: 'medium', question: 'Everything _____ happened was unexpected.', answer: "that", options: ["that", "which", "what", "∅"], hint: "that = sujet de happened → obligatoire" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The hotel we stayed in was nice.", options: ["The hotel we stayed in was nice.", "The hotel we stayed was nice.", "The hotel in that we stayed was nice."] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle réécriture est correcte ?', answer: "The advice you gave me was useful. (= that you gave me)", options: ["The advice you gave me was useful. (= that you gave me)", "The advice gave me was useful.", "The advice you gave was useful me."] },
            { type: 'fill', difficulty: 'hard', question: 'The reason _____ she left is unknown. (= sujet ou objet ?)', answer: "why", options: ["why", "that", "which", "∅"] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quel pronom peut être omis ?', answer: "The presentation that we attended was informative.", options: ["The presentation that we attended was informative.", "The presenter who spoke first was excellent.", "The slides which contained errors were removed."] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "The employee submitted the report was promoted.", options: ["The employee submitted the report was promoted.", "The employee who submitted the report was promoted.", "The report the employee submitted was detailed."] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The hotel room we were given was too small.", options: ["The hotel room we were given was too small.", "The hotel room given was too small.", "The hotel room we given was too small."] },
        ]
    },

    93: {
        id: 93, title: "Relative clauses (3) — whose/whom/where", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les relatives (3) : whose, whom, where, when, why</b><br><br>
<b>whose</b> = dont (possession)<br>
<i>"The student <b>whose</b> essay was the best won a prize."</i> = L'étudiant dont la rédaction était la meilleure a gagné un prix.<br><br>
<b>whom</b> = que/qui (objet, formel)<br>
<i>"The person <b>whom</b> I spoke to…"</i> = La personne à qui j'ai parlé…<br>
<i>"The person to <b>whom</b> I spoke…"</i> (très formel)<br><br>
<b>where</b> = où (lieu) : _The restaurant **where** we had dinner…_<br>
<b>when / in which</b> = quand/où (temps) : _The day **when** I arrived…_<br>
<b>why</b> = pourquoi : _The reason **why** I left…_`,
        rules: [
            '📐 **whose** = dont (possession) : _A man **whose** car was stolen…_ (l\'homme dont la voiture a été volée)',
            '📐 **whom** = objet formel : _The client **whom** I called…_ ou _to **whom** I spoke_',
            '📐 **where** = lieu : _The city **where** I grew up…_',
            '📐 **when** = moment : _The year **when** I graduated…_',
            '🔵 On peut remplacer where par **in which**, when par **in which / at which**',
            '🔴 PAS ~~who\'s~~ (= who is) à la place de **whose** (= dont)'
        ],
        examples: [
            { text: "The woman **whose** husband is a lawyer called us.", fr: "La femme dont le mari est avocat nous a appelés.", correct: true },
            { text: "The person to **whom** the letter was addressed…", fr: "La personne à qui la lettre était adressée…", correct: true },
            { text: "That's the hotel **where** we stayed last summer.", fr: "C'est l'hôtel où nous avons séjourné l'été dernier.", correct: true },
            { text: "I remember the day **when** we first met.", fr: "Je me souviens du jour où nous nous sommes rencontrés.", correct: true }
        ],
        tips: [
            "🇫🇷 « dont » = whose. C'est un des mots les plus piégeux au TOEIC. whose ≠ who's !",
            "💡 whom est formel. À l'oral, on dit « the person who I spoke to ». À l'écrit (et au TOEIC), on préfère whom.",
            "⚠️ where = in/at which. « The city where I live » = « The city in which I live »."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I know a girl _____ brother is famous.', answer: "whose", options: ["whose", "who", "which", "who's"] },
            { type: 'fill', difficulty: 'easy', question: 'This is the park _____ we had the picnic.', answer: "where", options: ["where", "which", "whose", "when"] },
            { type: 'fill', difficulty: 'easy', question: 'Do you remember the year _____ you graduated?', answer: "when", options: ["when", "where", "which", "whose"] },
            { type: 'fill', difficulty: 'medium', question: 'The candidate to _____ the offer was made declined.', answer: "whom", options: ["whom", "who", "whose", "which"], hint: "to + objet formel → whom" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The company whose shares dropped filed for bankruptcy.", options: ["The company whose shares dropped filed for bankruptcy.", "The company who's shares dropped filed for bankruptcy.", "The company whom shares dropped filed for bankruptcy."] },
            { type: 'fill', difficulty: 'medium', question: 'The building _____ the meeting will be held is downtown.', answer: "where", options: ["where", "which", "whose", "whom"] },
            { type: 'fill', difficulty: 'hard', question: 'The reason _____ he resigned has not been disclosed.', answer: "why", options: ["why", "which", "whose", "when"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The students who's project won were delighted.", options: ["The students who's project won were delighted.", "The students whose project won were delighted.", "The student to whom the prize was given was happy."] },
            { type: 'fill', difficulty: 'hard', question: 'The firm for _____ she works is based in London.', answer: "which", options: ["which", "whom", "whose", "who"], hint: "for + chose → which" }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The applicant _____ qualifications best match the role will be selected.', answer: "whose", options: ["whose", "who", "which", "whom"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The employee to whom the award was presented gave a speech.", options: ["The employee to whom the award was presented gave a speech.", "The employee to who the award was presented gave a speech.", "The employee to whose the award was presented gave a speech."] },
            { type: 'fill', difficulty: 'hard', question: 'The department _____ she transferred has a shortage of staff.', answer: "where", options: ["where", "which", "whose", "whom"] },
        ]
    },

    94: {
        id: 94, title: "Relative clauses (4) — extra information (non-defining)", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les relatives non-déterminatives (avec virgule)</b><br><br>
Il y a deux types de relatives :<br><br>
<b>1. Déterminative</b> (sans virgule) = essentielle pour identifier :<br>
<i>"The woman <b>who lives next door</b> is a doctor."</i> = QUELLE femme ? Celle qui habite à côté.<br><br>
<b>2. Non-déterminative</b> (avec virgules) = information supplémentaire :<br>
<i>"My mother<b>, who is 65,</b> still works."</i> = On sait déjà de qui on parle. L'info est un bonus.<br><br>
⚠️ <b>Règles cruciales :</b><br>
• Non-déterminative → <b>JAMAIS "that"</b>, toujours who/which<br>
• Avec noms propres → toujours non-déterminative : <i>"Paris<b>, which</b> is the capital…"</i>`,
        rules: [
            '📐 **Non-déterminative** = virgules + info supplémentaire. **Déterminative** = pas de virgule + info essentielle.',
            '🔵 Non-déterminative : **who** (personnes), **which** (choses). PAS "that" !',
            '🔵 Noms propres → toujours non-déterminative : _London**,** which is a big city**,** …_',
            '🔴 PAS de **that** après une virgule : ~~Paris, that…~~ → Paris, **which**…',
            '🔴 La relative non-déterminative peut être retirée sans changer le sens principal.'
        ],
        examples: [
            { text: "My brother**, who** lives in Canada**, is** visiting us.", fr: "Mon frère, qui vit au Canada, nous rend visite.", correct: true },
            { text: "The report**, which** was 200 pages long**, took** weeks to write.", fr: "Le rapport, qui faisait 200 pages, a pris des semaines à écrire.", correct: true },
            { text: "~~My sister, that~~ → My sister**, who** is a nurse, works nights.", fr: "Ma sœur, qui est infirmière, travaille de nuit.", correct: false, note: "Jamais that après une virgule !" }
        ],
        tips: [
            "🇫🇷 En français, il n'y a pas de différence visible entre « relative déterminative » et « non-déterminative ». En anglais, la virgule change tout !",
            "💡 Si on peut RETIRER la relative sans que la phrase perde son sens → c'est non-déterminative → virgules + who/which.",
            "⚠️ TOEIC : les questions who vs that dans les relatives à virgule sont TRÈS fréquentes !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'My boss, _____ is very kind, gave me a day off.', answer: "who", options: ["who", "that", "which", "whose"] },
            { type: 'fill', difficulty: 'easy', question: 'London, _____ I visited last year, is amazing.', answer: "which", options: ["which", "that", "who", "where"] },
            { type: 'correct', difficulty: 'easy', question: 'Quelle phrase est correcte ?', answer: "The Eiffel Tower, which is in Paris, was built in 1889.", options: ["The Eiffel Tower, which is in Paris, was built in 1889.", "The Eiffel Tower, that is in Paris, was built in 1889.", "The Eiffel Tower which is in Paris was built in 1889."] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est INCORRECTE ?', answer: "My car, that I bought last year, has broken down.", options: ["My car, that I bought last year, has broken down.", "My car, which I bought last year, has broken down.", "The car that I bought last year has broken down."] },
            { type: 'fill', difficulty: 'medium', question: 'Mr. Smith, _____ daughter goes to my school, is a lawyer.', answer: "whose", options: ["whose", "who", "which", "that"] },
            { type: 'fill', difficulty: 'medium', question: 'The meeting, _____ lasted 3 hours, was very productive.', answer: "which", options: ["which", "that", "who", "whose"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The CEO, who joined the company in 2010, announced his retirement.", options: ["The CEO, who joined the company in 2010, announced his retirement.", "The CEO, that joined the company in 2010, announced his retirement.", "The CEO who joined the company in 2010, announced his retirement."] },
            { type: 'fill', difficulty: 'hard', question: 'The new policy, _____ was implemented last month, has been controversial.', answer: "which", options: ["which", "that", "who", "what"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle relative est NON-déterminative ?', answer: "Tom's wife, who is a doctor, was at the party.", options: ["Tom's wife, who is a doctor, was at the party.", "The woman who called me was my aunt.", "Students who study hard will succeed."] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Identifiez la phrase correcte :', answer: "Our CEO, who has 20 years of experience, will give the keynote.", options: ["Our CEO, who has 20 years of experience, will give the keynote.", "Our CEO, that has 20 years of experience, will give the keynote.", "Our CEO who has 20 years of experience will give the keynote."] },
            { type: 'fill', difficulty: 'hard', question: 'The proposal, _____ had been under review for months, was finally approved.', answer: "which", options: ["which", "that", "who", "what"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "The conference, that attracted 500 attendees, was a success.", options: ["The conference, that attracted 500 attendees, was a success.", "The conference, which attracted 500 attendees, was a success.", "The conference attracted 500 attendees."] },
        ]
    },

    95: {
        id: 95, title: "-ing and -ed clauses (participle clauses)", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Les relatives réduites avec -ing et -ed</b><br><br>
On peut raccourcir une relative en remplaçant « who/which + verbe » par un participe :<br><br>
<b>-ing (participe présent) = qui fait qqch (actif) :</b><br>
<i>"The woman <b>sitting</b> next to me…"</i> = La femme qui est assise à côté de moi…<br>
(= The woman <b>who is sitting</b> next to me)<br><br>
<b>-ed / past participle (participe passé) = qui est fait/a été fait (passif) :</b><br>
<i>"The letter <b>sent</b> yesterday…"</i> = La lettre envoyée hier…<br>
(= The letter <b>which was sent</b> yesterday)<br><br>
💡 C'est plus concis et très courant en anglais écrit et au TOEIC.`,
        rules: [
            '📐 **-ing clause** (actif) = who/which + is/are/was + -ing : _The man **standing** there = who is standing there_',
            '📐 **-ed clause** (passif) = who/which + was/were + PP : _The goods **delivered** yesterday = which were delivered yesterday_',
            '🔵 -ing aussi pour des actions habituelles : _Students **involving** in sports…_',
            '🔵 -ed pour les adjectifs : _The **broken** window = the window which was broken_',
            '🔴 Ne pas confondre -ing (actif) et -ed (passif) : _the **boring** lecture_ (ennuyeuse) vs _the **bored** students_ (ennuyés)'
        ],
        examples: [
            { text: "The people **waiting** in the queue looked bored.", fr: "Les gens qui attendaient dans la file avaient l'air de s'ennuyer.", correct: true },
            { text: "The products **made** in Germany are high quality.", fr: "Les produits fabriqués en Allemagne sont de bonne qualité.", correct: true },
            { text: "A report **published** last week showed…", fr: "Un rapport publié la semaine dernière a montré…", correct: true },
            { text: "Do you know the woman **talking** to Tom?", fr: "Tu connais la femme qui parle à Tom ?", correct: true }
        ],
        tips: [
            "🇫🇷 En français aussi on réduit parfois : « la lettre envoyée » au lieu de « la lettre qui a été envoyée ». C'est le même principe !",
            "💡 Au TOEIC, les participle clauses sont très fréquentes dans les textes de lecture.",
            "⚠️ -ing = actif (le sujet fait). -ed = passif (le sujet subit). The exciting game (le jeu est excitant) vs the excited crowd (la foule est excitée)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The man _____ at the reception is my uncle. (= who is standing)', answer: "standing", options: ["standing", "stood", "stands", "stand"] },
            { type: 'fill', difficulty: 'easy', question: 'The goods _____ to our office arrived this morning. (= which were delivered)', answer: "delivered", options: ["delivered", "delivering", "deliver", "delivers"] },
            { type: 'fill', difficulty: 'easy', question: 'Do you know the girl _____ next to the window?', answer: "sitting", options: ["sitting", "sat", "sit", "sits"] },
            { type: 'fill', difficulty: 'medium', question: 'The emails _____ yesterday contained important updates.', answer: "sent", options: ["sent", "sending", "send", "sended"], hint: "emails qui ont été envoyés → passif" },
            { type: 'fill', difficulty: 'medium', question: 'A man _____ himself Mr. Brown called for you.', answer: "calling", options: ["calling", "called", "calls", "call"], hint: "Un homme qui s'appelle → actif" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle réécriture est correcte ?', answer: "The road leading to the airport is blocked.", options: ["The road leading to the airport is blocked.", "The road led to the airport is blocked.", "The road leads to the airport is blocked."] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The documents attached to the email are confidential.", options: ["The documents attached to the email are confidential.", "The documents attaching to the email are confidential.", "The documents attach to the email are confidential."] },
            { type: 'fill', difficulty: 'hard', question: 'The candidates _____ for the position must have 5 years of experience.', answer: "applying", options: ["applying", "applied", "apply", "to apply"] },
            { type: 'fill', difficulty: 'hard', question: 'The data _____ in the survey was very revealing.', answer: "collected", options: ["collected", "collecting", "collect", "collection"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The equipment _____ for the project has not yet arrived.', answer: "ordered", options: ["ordered", "ordering", "orders", "order"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The employees affected by the restructuring were offered severance packages.", options: ["The employees affected by the restructuring were offered severance packages.", "The employees affecting by the restructuring were offered severance packages.", "The employees affect by the restructuring were offered severance packages."] },
            { type: 'fill', difficulty: 'hard', question: 'Anyone _____ to attend the conference should register online.', answer: "wishing", options: ["wishing", "wished", "wish", "wishes"] },
        ]
    },

    96: {
        id: 96, title: "Countable and uncountable nouns (review)", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Révision : dénombrables vs indénombrables avec quantifieurs</b><br><br>
<b>Dénombrables</b> = on peut compter : a book, two books, three books…<br>
<b>Indénombrables</b> = on ne peut pas compter : water, information, advice…<br><br>
<b>Le bon quantifieur :</b><br>
• <b>many / few / a few</b> + dénombrable pluriel<br>
• <b>much / little / a little</b> + indénombrable<br>
• <b>some / any / a lot of / plenty of</b> + les deux<br><br>
⚠️ <b>Pièges pour francophones :</b> Certains mots sont indénombrables en anglais mais comptables en français :<br>
• information (PAS ~~informations~~)<br>
• advice (PAS ~~advices~~) → a <b>piece of</b> advice<br>
• furniture (PAS ~~furnitures~~) → a <b>piece of</b> furniture<br>
• luggage/baggage (PAS ~~luggages~~) → a <b>piece of</b> luggage`,
        rules: [
            '📐 **Indénombrables courants** au TOEIC : information, advice, furniture, luggage, equipment, progress, research, news, work, money, traffic, weather',
            '📐 Pour compter un indénombrable → **a piece of** : _a piece of **information/advice/furniture/luggage**_',
            '🔵 **some/any/a lot of** → dénombrables ET indénombrables',
            '🔵 **many/few** → dénombrables SEULEMENT',
            '🔵 **much/little** → indénombrables SEULEMENT',
            '🔴 PAS de pluriel aux indénombrables : ~~informations, advices, furnitures, luggages~~'
        ],
        examples: [
            { text: "Can you give me some **advice**? (PAS ~~advices~~)", fr: "Peux-tu me donner des conseils ?", correct: true },
            { text: "We need more **equipment** for the project.", fr: "Nous avons besoin de plus d'équipement.", correct: true },
            { text: "I'd like two **pieces of** information, please.", fr: "Je voudrais deux informations, s'il vous plaît.", correct: true },
            { text: "~~The furnitures are~~ → The **furniture is** expensive.", fr: "Les meubles sont chers.", correct: false, note: "furniture = indénombrable + singulier" }
        ],
        tips: [
            "🇫🇷 « des informations » = some information (JAMAIS informations). « des conseils » = some advice (JAMAIS advices).",
            "💡 Au TOEIC, les questions sur dénombrables/indénombrables reviennent TRÈS souvent. Mémorisez la liste !",
            "⚠️ news = indénombrable singulier ! « The news IS good » (PAS are). « A piece of news »."
        ],
        exercises: [
            { type: 'correct', difficulty: 'easy', question: 'Quelle phrase est correcte ?', answer: "I need some information.", options: ["I need some information.", "I need some informations.", "I need an information."] },
            { type: 'fill', difficulty: 'easy', question: 'The _____ is very old. (meuble)', answer: "furniture", options: ["furniture", "furnitures", "a furniture", "furnishings"] },
            { type: 'fill', difficulty: 'easy', question: 'She gave me a good piece of _____.', answer: "advice", options: ["advice", "advices", "advise", "advising"] },
            { type: 'correct', difficulty: 'medium', question: 'Identifiez la phrase INCORRECTE :', answer: "The news are very bad today.", options: ["The news are very bad today.", "The news is very bad today.", "There is some good news."] },
            { type: 'fill', difficulty: 'medium', question: 'How _____ luggage do you have?', answer: "much", options: ["much", "many", "few", "several"], hint: "luggage = indénombrable → much" },
            { type: 'fill', difficulty: 'medium', question: 'There has been a lot of _____ on this topic.', answer: "research", options: ["research", "researches", "a research", "researching"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "We need new equipment for the laboratory.", options: ["We need new equipment for the laboratory.", "We need new equipments for the laboratory.", "We need a new equipment for the laboratory."] },
            { type: 'fill', difficulty: 'hard', question: 'The company has made significant _____ this quarter.', answer: "progress", options: ["progress", "progresses", "a progress", "progressions"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We need more evidences to support the claim.", options: ["We need more evidences to support the claim.", "We need more evidence to support the claim.", "The evidence is conclusive."] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The office needs new furniture.", options: ["The office needs new furniture.", "The office needs new furnitures.", "The office needs a new furnitures."] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ were designed to measure customer satisfaction. (surveys)', answer: "questionnaires", options: ["questionnaires", "questionnaire", "a questionnaire", "questionnaring"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Could you give me some advices on this matter?", options: ["Could you give me some advices on this matter?", "Could you give me some advice on this matter?", "Could you give me a piece of advice?"] },
        ]
    },

    97: {
        id: 97, title: "Pronouns & determiners — review & practice", category: 'pronouns-determiners',
        explanation: `🇫🇷 <b>Révision complète : Pronoms & Déterminants</b><br><br>
Ce module révise tous les points clés :<br><br>
• <b>Pronoms réfléchis</b> : myself, yourself, himself…<br>
• <b>Possessifs renforcés</b> : a friend of mine, my own<br>
• <b>there vs it</b> (il y a vs c'est)<br>
• <b>some/any</b>, <b>no/none/nothing</b><br>
• <b>much/many</b>, <b>few/little</b>, <b>a lot of</b><br>
• <b>both/either/neither</b><br>
• <b>all/every/each/whole</b><br>
• <b>Relatives</b> : who, which, that, whose, whom, where, when<br>
• <b>Participle clauses</b> : -ing (actif) / -ed (passif)<br>
• <b>Dénombrables vs indénombrables</b>`,
        rules: [
            '📐 Révision : choisir le bon pronom/déterminant selon le contexte',
            '🔵 Combinaisons fréquentes au TOEIC : some/any + indénombrables, relatives après virgule → who/which (PAS that)',
            '🔵 Quantifieurs : much/little (indén.) vs many/few (dén.)',
            '🔵 each of + the + pluriel (PAS every of)',
            '🔴 Erreurs fréquentes : ~~informations~~, ~~advices~~, ~~every of~~, ~~Paris, that…~~'
        ],
        examples: [
            { text: "**Each** of the departments has its **own** budget.", fr: "Chaque département a son propre budget.", correct: true },
            { text: "**Neither** the manager **nor** the supervisor was available.", fr: "Ni le directeur ni le superviseur n'étaient disponibles.", correct: true },
            { text: "The project, **which** started in January, is on track.", fr: "Le projet, qui a débuté en janvier, est dans les délais.", correct: true },
            { text: "There's very **little** evidence to support this theory.", fr: "Il y a très peu de preuves pour soutenir cette théorie.", correct: true }
        ],
        tips: [
            "🇫🇷 Pour le TOEIC, concentrez-vous sur : 1) dén. vs indén. 2) relatives avec/sans virgule 3) each vs every 4) some/any/no",
            "💡 Astuce : lisez la phrase entière, identifiez le nom (dén. ou indén. ? singulier ou pluriel ?), puis choisissez le déterminant.",
            "⚠️ Relisez les unités 82-96 pour tout point non maîtrisé."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'My sister, _____ lives in Spain, is a teacher.', answer: "who", options: ["who", "that", "which", "whose"] },
            { type: 'fill', difficulty: 'easy', question: 'Can I have _____ sugar, please?', answer: "some", options: ["some", "any", "a", "many"] },
            { type: 'fill', difficulty: 'easy', question: 'There isn\'t _____ milk left.', answer: "any", options: ["any", "some", "no", "none"] },
            { type: 'fill', difficulty: 'medium', question: '_____ of the reports was accurate. They all had mistakes.', answer: "None", options: ["None", "Neither", "Either", "No"] },
            { type: 'fill', difficulty: 'medium', question: 'The goods _____ last week have already been dispatched.', answer: "ordered", options: ["ordered", "ordering", "orders", "order"], hint: "Relative réduite : qui ont été commandés → passif" },
            { type: 'fill', difficulty: 'medium', question: 'Very _____ progress has been made so far.', answer: "little", options: ["little", "few", "a little", "small"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Every of the participants received a certificate.", options: ["Every of the participants received a certificate.", "Each of the participants received a certificate.", "Every participant received a certificate."] },
            { type: 'fill', difficulty: 'hard', question: 'The company, _____ CEO resigned last month, is in crisis.', answer: "whose", options: ["whose", "which", "who", "that"], hint: "dont le PDG → possession" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "Neither the employees nor the manager was consulted.", options: ["Neither the employees nor the manager was consulted.", "Neither the employees or the manager was consulted.", "Neither the employees nor the manager wasn't consulted."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ applicant must submit _____ documents by Friday.', answer: "Each … their", options: ["Each … their", "Every … their", "All … his", "Each … its"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The team, which includes members from 5 countries, meets weekly.", options: ["The team, which includes members from 5 countries, meets weekly.", "The team, that includes members from 5 countries, meets weekly.", "The team which includes members from 5 countries meets weekly."] },
            { type: 'fill', difficulty: 'hard', question: 'The research _____ by the team revealed surprising results. (= qui a été conduite)', answer: "conducted", options: ["conducted", "conducting", "conduct", "conducts"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "We need more equipments and furnitures.", options: ["We need more equipments and furnitures.", "We need more equipment and furniture.", "The equipment was delivered on time."] },
        ]
    }
};
