// ============================================
// Grammar Lessons — Adjectives & Adverbs (Units 98–115)
// French explanations for francophone learners
// ============================================

export const grammarLessonsAdjAdv = {
    98: {
        id: 98, title: 'Adjectives ending in -ing and -ed', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Adjectifs en -ing vs -ed</b><br><br>
C'est un des pièges les plus fréquents pour les francophones !<br><br>
<b>-ing</b> = qui <b>provoque</b> le sentiment (= la chose/personne est la cause)<br>
<i>"The film is <b>boring</b>."</i> = Le film EST ennuyeux (il provoque l'ennui).<br><br>
<b>-ed</b> = qui <b>ressent</b> le sentiment (= la personne est affectée)<br>
<i>"I am <b>bored</b>."</i> = Je SUIS ennuyé (je ressens l'ennui).<br><br>
⚠️ Erreur classique : ~~"I am boring"~~ = "Je suis ennuyeux" (vous dites que VOUS êtes ennuyeux, pas que vous vous ennuyez !)`,
        rules: [
            '📐 **-ing** = la chose/personne **cause** le sentiment : _The meeting was **boring**_ (la réunion provoquait l\'ennui)',
            '📐 **-ed** = la personne **ressent** le sentiment : _I was **bored**_ (je ressentais l\'ennui)',
            '🔵 Paires courantes : interesting/interested, exciting/excited, surprising/surprised, disappointing/disappointed, confusing/confused, tiring/tired, amazing/amazed, annoying/annoyed, frightening/frightened, shocking/shocked',
            '🔴 ~~I am interesting in science~~ → I am **interested** in science',
            '🔴 ~~The film was very bored~~ → The film was very **boring**'
        ],
        examples: [
            { text: "The news was **shocking**. I was **shocked**.", fr: "La nouvelle était choquante. J'étais choqué(e).", correct: true },
            { text: "It was an **exciting** game. The fans were **excited**.", fr: "C'était un match passionnant. Les fans étaient enthousiastes.", correct: true },
            { text: "~~I am very interesting in history.~~ → I am very **interested** in history.", fr: "Je suis très intéressé(e) par l'histoire.", correct: false },
            { text: "~~The lecture was very bored.~~ → The lecture was very **boring**.", fr: "Le cours était très ennuyeux.", correct: false }
        ],
        tips: [
            "🇫🇷 Astuce : -ING = la chose (cause). -ED = la personne (ressent). « Le film est ennuyant (-ing) → je suis ennuyé (-ed) ».",
            "💡 Si le sujet est une CHOSE → probablement -ing. Si le sujet est une PERSONNE → probablement -ed.",
            "⚠️ C'est une question TRÈS fréquente au TOEIC. Mémorisez les paires !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The movie was really _____. I loved it! (exciter)', answer: "exciting", options: ["exciting", "excited", "excite", "excites"] },
            { type: 'fill', difficulty: 'easy', question: 'I\'m _____ in learning Japanese. (intéresser)', answer: "interested", options: ["interested", "interesting", "interest", "interests"] },
            { type: 'fill', difficulty: 'easy', question: 'The test results were _____. Nobody expected them. (surprendre)', answer: "surprising", options: ["surprising", "surprised", "surprise", "surprises"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The children were excited about the trip.", options: ["The children were excited about the trip.", "The children were exciting about the trip.", "The children were excite about the trip."] },
            { type: 'fill', difficulty: 'medium', question: 'The instructions were _____. I didn\'t understand them.', answer: "confusing", options: ["confusing", "confused", "confuse", "confusion"] },
            { type: 'fill', difficulty: 'medium', question: 'She was _____ by the rude comment.', answer: "annoyed", options: ["annoyed", "annoying", "annoy", "annoyance"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The presentation was very bored.", options: ["The presentation was very bored.", "The audience was bored.", "The presentation was boring."] },
            { type: 'fill', difficulty: 'hard', question: 'It\'s _____ that they haven\'t replied yet.', answer: "worrying", options: ["worrying", "worried", "worry", "worries"] },
            { type: 'fill', difficulty: 'hard', question: 'The employees were _____ with the new policy.', answer: "disappointed", options: ["disappointed", "disappointing", "disappoint", "disappointment"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The results of the survey were quite _____. (surprendre)', answer: "surprising", options: ["surprising", "surprised", "surprise", "surprisingly"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The exhausted workers left the office at midnight.", options: ["The exhausted workers left the office at midnight.", "The exhausting workers left the office at midnight.", "The exhaust workers left the office at midnight."] },
            { type: 'fill', difficulty: 'hard', question: 'Customers were _____ by the poor service they received.', answer: "frustrated", options: ["frustrated", "frustrating", "frustrate", "frustration"] },
        ]
    },

    99: {
        id: 99, title: 'Adjectives: word order (a nice new house)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>L'ordre des adjectifs en anglais</b><br><br>
En anglais, quand on a <b>plusieurs adjectifs</b> avant un nom, ils suivent un <b>ordre précis</b> :<br><br>
<b>Opinion → Taille → Âge → Forme → Couleur → Origine → Matière → But</b><br>
(mnémo : <b>O-T-A-F-C-O-M-B</b>)<br><br>
<i>"a <b>beautiful large old round red</b> Italian leather racing car"</i><br><br>
En pratique, on utilise rarement plus de 2-3 adjectifs :<br>
<i>"a <b>nice new</b> house"</i> (opinion + âge)<br>
<i>"<b>big blue</b> eyes"</i> (taille + couleur)<br>
<i>"an <b>expensive French</b> restaurant"</i> (opinion + origine)`,
        rules: [
            '📐 Ordre : **Opinion → Taille → Âge → Forme → Couleur → Origine → Matière → But** + NOM',
            '🔵 Opinion : nice, beautiful, ugly, lovely, horrible…',
            '🔵 Taille : big, small, tall, short, long…',
            '🔵 Âge : old, new, young, ancient, modern…',
            '🔵 Couleur : red, blue, dark, light…',
            '🔵 Origine : French, Japanese, American…',
            '🔵 Matière : wooden, metal, cotton, leather…',
            '🔴 PAS ~~a red big car~~ → **a big red car** (taille avant couleur)'
        ],
        examples: [
            { text: "She lives in a **beautiful old** stone house.", fr: "Elle habite dans une belle vieille maison en pierre. (opinion + âge + matière)", correct: true },
            { text: "He bought a **small black** leather bag.", fr: "Il a acheté un petit sac en cuir noir. (taille + couleur + matière)", correct: true },
            { text: "~~a Japanese interesting book~~ → an **interesting Japanese** book", fr: "Un livre japonais intéressant (opinion avant origine)", correct: false }
        ],
        tips: [
            "🇫🇷 En français, les adjectifs se placent souvent APRÈS le nom (une voiture rouge). En anglais, ils vont AVANT.",
            "💡 Retenez : Opinion toujours en PREMIER, Matière/But toujours en DERNIER (juste avant le nom).",
            "⚠️ Au TOEIC, les questions sur l'ordre sont rares, mais en compréhension écrite, c'est important."
        ],
        exercises: [
            { type: 'correct', difficulty: 'easy', question: 'Quel est le bon ordre ?', answer: "a lovely old French village", options: ["a lovely old French village", "an old lovely French village", "a French lovely old village"] },
            { type: 'correct', difficulty: 'easy', question: 'Quel est le bon ordre ?', answer: "big blue eyes", options: ["big blue eyes", "blue big eyes", "eyes blue big"] },
            { type: 'correct', difficulty: 'easy', question: 'Quel est le bon ordre ?', answer: "a nice new car", options: ["a nice new car", "a new nice car", "a car nice new"] },
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "a beautiful large wooden table", options: ["a beautiful large wooden table", "a large beautiful wooden table", "a wooden beautiful large table"] },
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "an expensive Italian sports car", options: ["an expensive Italian sports car", "an Italian expensive sports car", "a sports expensive Italian car"] },
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "small round metal boxes", options: ["small round metal boxes", "round small metal boxes", "metal small round boxes"] },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon ordre ?', answer: "a stunning tall young American model", options: ["a stunning tall young American model", "a tall stunning young American model", "an American stunning tall young model"] },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon ordre ?', answer: "an ugly old brown brick building", options: ["an ugly old brown brick building", "a brown ugly old brick building", "an old ugly brown brick building"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She wore a silk beautiful long dress.", options: ["She wore a silk beautiful long dress.", "She wore a beautiful long silk dress.", "He drives a big red German car."] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "a well-known international consulting firm", options: ["a well-known international consulting firm", "an international well-known consulting firm", "a consulting well-known international firm"] },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon ordre ?', answer: "a valuable antique Chinese vase", options: ["a valuable antique Chinese vase", "a Chinese valuable antique vase", "an antique valuable Chinese vase"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "He bought a leather expensive Italian jacket.", options: ["He bought a leather expensive Italian jacket.", "He bought an expensive Italian leather jacket.", "They live in a nice old house."] },
        ]
    },

    100: {
        id: 100, title: 'Adjectives after verbs (look/feel/sound + adj)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Adjectifs après certains verbes (verbes de perception)</b><br><br>
Après certains verbes, on utilise un <b>adjectif</b> (PAS un adverbe) :<br>
<b>look, feel, sound, smell, taste, seem, appear, become, get</b><br><br>
<i>"You look <b>tired</b>."</i> = Tu as l'air fatigué. (PAS ~~tiredly~~)<br>
<i>"The food smells <b>good</b>."</i> = La nourriture sent bon. (PAS ~~well~~)<br>
<i>"That sounds <b>interesting</b>."</i> = Ça a l'air intéressant.<br><br>
⚠️ <b>Piège :</b> Ces verbes décrivent un <b>ÉTAT</b>, pas une action. On décrit le sujet (= adjectif), pas la manière de faire (= adverbe).`,
        rules: [
            '📐 Verbes d\'état + **adjectif** (PAS adverbe) : look, feel, sound, smell, taste, seem, appear, become, get',
            '🔵 _You look **great**_ (PAS ~~greatly~~) = Tu as l\'air super.',
            '🔵 _She feels **happy**_ (PAS ~~happily~~) = Elle se sent heureuse.',
            '🔵 _It sounds **strange**_ (PAS ~~strangely~~) = Ça semble étrange.',
            '🔴 **good** (adj) vs **well** (adv) : _The cake tastes **good**_ mais _She plays the piano **well**_',
            '🔴 Exception : **well** peut être adjectif = en bonne santé : _I don\'t feel **well**_ (= I\'m sick)'
        ],
        examples: [
            { text: "You look **nice** today!", fr: "Tu es beau/belle aujourd'hui !", correct: true },
            { text: "This soup tastes **delicious**.", fr: "Cette soupe est délicieuse. (au goût)", correct: true },
            { text: "The idea sounds **great**!", fr: "L'idée a l'air super !", correct: true },
            { text: "~~She looks beautifully~~ → She looks **beautiful**.", fr: "Elle est belle. (= elle a l'air belle)", correct: false }
        ],
        tips: [
            "🇫🇷 En français aussi : « ça sent BON » (pas « bonnement »). Le principe est le même en anglais.",
            "💡 Test : si le verbe peut être remplacé par « être » → adjectif. « She looks tired » = « She is tired ».",
            "⚠️ well = adverbe SAUF pour la santé. « I feel well » = je me sens bien (santé). « I feel good » = je me sens bien (humeur)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'You look _____! What happened? (fatigué)', answer: "tired", options: ["tired", "tiredly", "tiring", "tire"] },
            { type: 'fill', difficulty: 'easy', question: 'This cake tastes _____! (délicieux)', answer: "delicious", options: ["delicious", "deliciously", "delicioning", "deliciate"] },
            { type: 'fill', difficulty: 'easy', question: 'That sounds _____ to me. (bien/super)', answer: "great", options: ["great", "greatly", "greating", "greaten"] },
            { type: 'fill', difficulty: 'medium', question: 'She seemed _____ about the news. (inquiet)', answer: "worried", options: ["worried", "worriedly", "worrying", "worry"] },
            { type: 'fill', difficulty: 'medium', question: 'The flowers smell _____. (merveilleux)', answer: "wonderful", options: ["wonderful", "wonderfully", "wonder", "wondering"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I feel good about the decision.", options: ["I feel good about the decision.", "I feel goodly about the decision.", "I feel well about the decision."] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The music sounds beautifully.", options: ["The music sounds beautifully.", "The music sounds beautiful.", "She plays the piano beautifully."] },
            { type: 'fill', difficulty: 'hard', question: 'The situation is getting _____. (pire)', answer: "worse", options: ["worse", "worsely", "more bad", "badly"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I don't feel well today. (= I'm a bit sick)", options: ["I don't feel well today. (= I'm a bit sick)", "I don't feel goodly today.", "I feel me bad today."] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The new product looks promising.", options: ["The new product looks promising.", "The new product looks promisingly.", "The new product looks promiseful."] },
            { type: 'fill', difficulty: 'hard', question: 'The quarterly results appear _____ than expected.', answer: "better", options: ["better", "more well", "more good", "goodlier"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The situation seems strangely.", options: ["The situation seems strangely.", "The situation seems strange.", "She spoke strangely."] },
        ]
    },

    101: {
        id: 101, title: 'Adverbs (quickly / well / fast / hard)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Les adverbes de manière</b><br><br>
Les adverbes décrivent <b>comment</b> on fait quelque chose :<br><br>
<b>Formation :</b> adjectif + <b>-ly</b><br>
• quick → quick<b>ly</b>, careful → careful<b>ly</b>, serious → serious<b>ly</b><br><br>
<b>Exceptions (même forme adj/adv) :</b><br>
• <b>fast</b> (rapide/rapidement), <b>hard</b> (dur/durement), <b>late</b> (tard/en retard), <b>early</b> (tôt)<br><br>
⚠️ <b>Pièges :</b><br>
• <b>hard</b> ≠ <b>hardly</b> ! hard = intensément, hardly = à peine<br>
• <b>late</b> ≠ <b>lately</b> ! late = en retard, lately = récemment<br>
• <b>good</b> (adj) → <b>well</b> (adv) : _She speaks English **well**_ (PAS ~~good~~)`,
        rules: [
            '📐 Adjectif + **-ly** = adverbe : _careful → careful**ly**, quiet → quiet**ly**_',
            '🔵 Exceptions qui gardent la même forme : **fast, hard, late, early, near, high, low, straight**',
            '🔵 **good** (adj) → **well** (adv) : _He\'s a **good** driver. He drives **well**._',
            '🔴 **hard** ≠ **hardly** : _She works **hard**_ (beaucoup) vs _She **hardly** works_ (presque pas !)',
            '🔴 **late** ≠ **lately** : _He arrived **late**_ (en retard) vs _I haven\'t seen him **lately**_ (récemment)'
        ],
        examples: [
            { text: "She speaks French **fluently**.", fr: "Elle parle français couramment.", correct: true },
            { text: "He runs very **fast**.", fr: "Il court très vite. (fast = adj ET adv)", correct: true },
            { text: "She works **hard** every day.", fr: "Elle travaille dur chaque jour.", correct: true },
            { text: "I **hardly** know her. (= à peine)", fr: "Je la connais à peine.", correct: true, note: "hardly ≠ hard !" },
            { text: "~~She speaks English good~~ → She speaks English **well**.", fr: "Elle parle bien anglais.", correct: false }
        ],
        tips: [
            "🇫🇷 En français : « il conduit bien » (bien = adverbe). En anglais : « He drives well » (PAS good).",
            "💡 Piège au TOEIC : hard/hardly et late/lately. Sens TOTALEMENT différents !",
            "⚠️ Certains adverbes en -ly changent de sens : hardly (à peine), lately (récemment), nearly (presque)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She dances very _____. (bien)', answer: "well", options: ["well", "good", "goodly", "fine"] },
            { type: 'fill', difficulty: 'easy', question: 'Please drive _____. The road is wet. (prudemment)', answer: "carefully", options: ["carefully", "careful", "careless", "caring"] },
            { type: 'fill', difficulty: 'easy', question: 'He works very _____. (dur)', answer: "hard", options: ["hard", "hardly", "hardily", "harder"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She hardly ever goes out.", options: ["She hardly ever goes out.", "She hard ever goes out.", "She hardly goes out ever."] },
            { type: 'fill', difficulty: 'medium', question: 'Have you seen Tom _____? (récemment)', answer: "lately", options: ["lately", "late", "later", "latest"], hint: "lately = récemment (PAS late)" },
            { type: 'fill', difficulty: 'medium', question: 'The train arrived _____ again. (en retard)', answer: "late", options: ["late", "lately", "later", "latest"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She plays the piano very good.", options: ["She plays the piano very good.", "She plays the piano very well.", "She's a very good piano player."] },
            { type: 'fill', difficulty: 'hard', question: 'I can _____ believe it! (= à peine)', answer: "hardly", options: ["hardly", "hard", "barely", "hard not"], hint: "hardly = à peine, presque pas" },
            { type: 'fill', difficulty: 'hard', question: 'The company is doing _____ this quarter.', answer: "well", options: ["well", "good", "fine", "greatly"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The new software operates _____ and efficiently.', answer: "smoothly", options: ["smoothly", "smooth", "smoothing", "smoothful"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The deadline is approaching fast.", options: ["The deadline is approaching fast.", "The deadline is approaching fastly.", "The deadline is approaching quick."] },
            { type: 'fill', difficulty: 'hard', question: 'We _____ had time to finish the report.', answer: "hardly", options: ["hardly", "hard", "barely", "nearly"] },
        ]
    },

    102: {
        id: 102, title: 'Adjectives and adverbs (1) — good/well, fast/hard', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Adjectifs vs Adverbes — Choisir le bon</b><br><br>
<b>Adjectif</b> → décrit un <b>NOM</b> (comment est la chose/personne) :<br>
<i>"She is a <b>careful</b> driver."</i> (careful décrit driver)<br><br>
<b>Adverbe</b> → décrit un <b>VERBE</b> (comment on fait l'action) :<br>
<i>"She drives <b>carefully</b>."</i> (carefully décrit drives)<br><br>
<b>Placement :</b><br>
• Adjectif : avant le nom ou après be/look/feel/seem<br>
• Adverbe : après le verbe ou avant l'adjectif/autre adverbe<br><br>
⚠️ Adverbe + adjectif : <i>"extremely **expensive**"</i> (PAS ~~extreme expensive~~)`,
        rules: [
            '📐 **Adjectif + nom** : _a **quick** decision_ / **Adverbe + verbe** : _He decided **quickly**_',
            '📐 **Adverbe + adjectif** : _**extremely** difficult, **incredibly** fast_',
            '🔵 Après be/look/feel/seem → **adjectif** : _It looks **easy**_',
            '🔵 Après un verbe d\'action → **adverbe** : _She answered **correctly**_',
            '🔴 PAS ~~She answered correct~~ → She answered **correctly**',
            '🔴 PAS ~~It was extreme difficult~~ → It was **extremely** difficult'
        ],
        examples: [
            { text: "He gave a **quick** answer. He answered **quickly**.", fr: "Il a donné une réponse rapide. Il a répondu rapidement.", correct: true },
            { text: "The test was **surprisingly easy**.", fr: "Le test était étonnamment facile. (adv + adj)", correct: true },
            { text: "She's an **incredibly talented** musician.", fr: "C'est une musicienne incroyablement talentueuse.", correct: true },
            { text: "~~He spoke very rapid~~ → He spoke very **rapidly**.", fr: "Il a parlé très rapidement.", correct: false }
        ],
        tips: [
            "🇫🇷 En français, les adverbes en « -ment » (rapidement, doucement) = adverbes en « -ly » en anglais.",
            "💡 Test : l'adverbe répond à la question « COMMENT ? ». L'adjectif répond à « QUEL/QUELLE ? ».",
            "⚠️ TOEIC aime tester : adverbe + adjectif (extremely important) vs adjectif + nom (important decision)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She is a _____ worker. (efficient)', answer: "efficient", options: ["efficient", "efficiently", "efficiency", "efficients"] },
            { type: 'fill', difficulty: 'easy', question: 'She works _____. (efficient)', answer: "efficiently", options: ["efficiently", "efficient", "efficiency", "efficients"] },
            { type: 'fill', difficulty: 'easy', question: 'It\'s an _____ important decision.', answer: "extremely", options: ["extremely", "extreme", "extremity", "extremes"] },
            { type: 'fill', difficulty: 'medium', question: 'The company performed _____ well this quarter.', answer: "remarkably", options: ["remarkably", "remarkable", "remarking", "remarked"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The meeting went surprisingly well.", options: ["The meeting went surprisingly well.", "The meeting went surprising well.", "The meeting went surprisingly good."] },
            { type: 'fill', difficulty: 'medium', question: 'He made a _____ considered decision.', answer: "carefully", options: ["carefully", "careful", "caring", "cares"], hint: "Adverbe modifiant le participe 'considered'" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The results were significant better than last year.", options: ["The results were significant better than last year.", "The results were significantly better than last year.", "The results were significant."] },
            { type: 'fill', difficulty: 'hard', question: 'The plan has been _____ revised.', answer: "thoroughly", options: ["thoroughly", "thorough", "throughly", "thorughful"] },
            { type: 'fill', difficulty: 'hard', question: 'It is _____ that all employees attend the training.', answer: "essential", options: ["essential", "essentially", "essentials", "essentialing"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The proposal was _____ approved by the board.', answer: "unanimously", options: ["unanimously", "unanimous", "unanimity", "unanimoused"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "Sales have increased dramatically since the campaign.", options: ["Sales have increased dramatically since the campaign.", "Sales have increased dramatic since the campaign.", "Sales have dramatical increased since the campaign."] },
            { type: 'fill', difficulty: 'hard', question: 'The CEO made a _____ worded statement.', answer: "carefully", options: ["carefully", "careful", "caring", "cared"] },
        ]
    },

    103: {
        id: 103, title: 'Comparatives (cheaper / more expensive / not as…as)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Le comparatif en anglais</b><br><br>
<b>1. Adjectifs courts (1 syllabe) :</b> adj + <b>-er</b> + than<br>
<i>"Paris is <b>bigger than</b> Lyon."</i><br><br>
<b>2. Adjectifs longs (2+ syllabes) :</b> <b>more</b> + adj + than<br>
<i>"English is <b>more practical than</b> Latin."</i><br><br>
<b>3. Comparatif d'égalité :</b> <b>as</b> + adj + <b>as</b><br>
<i>"She's <b>as tall as</b> her brother."</i><br><br>
<b>4. Comparatif d'infériorité :</b> <b>not as</b> + adj + <b>as</b><br>
<i>"My car <b>isn't as fast as</b> yours."</i><br><br>
<b>Irréguliers :</b> good → better, bad → worse, far → further/farther`,
        rules: [
            '📐 Court (1 syll.) : **-er than** : _cheap → cheap**er** than, tall → tall**er** than_',
            '📐 Long (2+ syll.) : **more… than** : _more expensive than, more comfortable than_',
            '📐 2 syll. en -y : **-ier than** : _easy → eas**ier** than, happy → happ**ier** than_',
            '📐 Égalité : **as… as** : _as good as, as important as_',
            '🔵 Irréguliers : good → **better**, bad → **worse**, far → **further/farther**, old → **older/elder**',
            '🔴 PAS de double comparatif : ~~more better~~ → **better** / ~~more bigger~~ → **bigger**'
        ],
        examples: [
            { text: "This hotel is **cheaper than** the other one.", fr: "Cet hôtel est moins cher que l'autre.", correct: true },
            { text: "The exam was **more difficult than** I expected.", fr: "L'examen était plus difficile que prévu.", correct: true },
            { text: "She's **as qualified as** the other candidate.", fr: "Elle est aussi qualifiée que l'autre candidate.", correct: true },
            { text: "~~He is more taller~~ → He is **taller**.", fr: "Il est plus grand.", correct: false, note: "Pas de double comparatif !" }
        ],
        tips: [
            "🇫🇷 En français : « plus… que ». En anglais : -er than (court) ou more… than (long).",
            "💡 Les adjectifs de 2 syllabes en -y → -ier : happy → happier, easy → easier.",
            "⚠️ TOEIC : les comparatifs irréguliers (better, worse, further) sont très testés."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'This exercise is _____ than the last one. (easy)', answer: "easier", options: ["easier", "more easy", "easyer", "most easy"] },
            { type: 'fill', difficulty: 'easy', question: 'The new office is _____ than the old one. (big)', answer: "bigger", options: ["bigger", "more big", "biger", "most big"] },
            { type: 'fill', difficulty: 'easy', question: 'This sofa is _____ than that one. (comfortable)', answer: "more comfortable", options: ["more comfortable", "comfortabler", "most comfortable", "comfortably"] },
            { type: 'fill', difficulty: 'medium', question: 'The results were _____ than expected. (good)', answer: "better", options: ["better", "gooder", "more good", "best"] },
            { type: 'fill', difficulty: 'medium', question: 'Her presentation was _____ impressive _____ his.', answer: "as … as", options: ["as … as", "more … than", "so … as", "like … as"] },
            { type: 'fill', difficulty: 'medium', question: 'The situation is getting _____ and _____.', answer: "worse and worse", options: ["worse and worse", "more bad and more bad", "worst and worst", "badder and badder"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "This project is more bigger than we planned.", options: ["This project is more bigger than we planned.", "This project is bigger than we planned.", "This project is more complex than we planned."] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ you practice, the _____ you become.', answer: "more … better", options: ["more … better", "more … more good", "most … best", "much … gooder"] },
            { type: 'fill', difficulty: 'hard', question: 'I need _____ information before making a decision.', answer: "further", options: ["further", "farther", "more far", "farer"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The second quarter was _____ profitable _____ the first.', answer: "more … than", options: ["more … than", "as … as", "most … then", "much … as"] },
            { type: 'fill', difficulty: 'hard', question: 'The new model is _____ efficient and _____ expensive.', answer: "more … less", options: ["more … less", "most … least", "more … fewer", "much … little"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The further we investigated, the worse the situation seemed.", options: ["The further we investigated, the worse the situation seemed.", "The more far we investigated, the more bad the situation seemed.", "The furthest we investigated, the worst the situation seemed."] },
        ]
    },

    104: {
        id: 104, title: 'Superlatives (the best / the most expensive)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Le superlatif en anglais</b><br><br>
<b>1. Adjectifs courts :</b> <b>the</b> + adj + <b>-est</b><br>
<i>"It's <b>the cheapest</b> hotel in town."</i><br><br>
<b>2. Adjectifs longs :</b> <b>the most</b> + adj<br>
<i>"It's <b>the most expensive</b> restaurant."</i><br><br>
<b>Irréguliers :</b> good → the <b>best</b>, bad → the <b>worst</b>, far → the <b>furthest/farthest</b><br><br>
⚠️ <b>N'oubliez pas « the » !</b> Le superlatif s'utilise TOUJOURS avec <b>the</b> (sauf avec un possessif).<br>
⚠️ Superlatif + <b>in</b> (lieu/groupe) ou <b>of</b> (ensemble) : _the tallest **in** the class_ / _the best **of** all_`,
        rules: [
            '📐 Court : **the + -est** : _the tall**est**, the bigg**est**, the cheap**est**_',
            '📐 Long : **the most + adj** : _the most important, the most beautiful_',
            '📐 2 syll. en -y : **the + -iest** : _the easi**est**, the happi**est**_',
            '🔵 Irréguliers : good → **the best**, bad → **the worst**, far → **the furthest**',
            '🔵 **in** + lieu/groupe : _the biggest city **in** France_',
            '🔵 **of** + ensemble : _the best **of** all_',
            '🔴 PAS ~~the more better~~ → **the best** / ~~the most cheapest~~ → **the cheapest**'
        ],
        examples: [
            { text: "She's **the best** student in the class.", fr: "C'est la meilleure étudiante de la classe.", correct: true },
            { text: "It was **the most interesting** book I've ever read.", fr: "C'était le livre le plus intéressant que j'aie jamais lu.", correct: true },
            { text: "~~the most cheapest~~ → **the cheapest**", fr: "Le moins cher.", correct: false, note: "Pas de double superlatif !" }
        ],
        tips: [
            "🇫🇷 « le/la plus… » = the + -est (court) ou the most + adj (long).",
            "💡 Toujours THE devant le superlatif. Seule exception : possessif → « my best friend » (pas the).",
            "⚠️ TOEIC : superlatif + in (lieu) ou of (groupe). The tallest IN the office. The best OF all."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'This is _____ hotel in the city. (cheap)', answer: "the cheapest", options: ["the cheapest", "the most cheap", "the cheaper", "cheapest"] },
            { type: 'fill', difficulty: 'easy', question: 'She\'s _____ person I know. (kind)', answer: "the kindest", options: ["the kindest", "the most kind", "the kinder", "kindest"] },
            { type: 'fill', difficulty: 'easy', question: 'It was _____ film I\'ve ever seen. (bad)', answer: "the worst", options: ["the worst", "the baddest", "the most bad", "the worse"] },
            { type: 'fill', difficulty: 'medium', question: 'Tokyo is one of _____ cities in the world. (expensive)', answer: "the most expensive", options: ["the most expensive", "the expensivest", "most expensive", "the more expensive"] },
            { type: 'fill', difficulty: 'medium', question: 'That was _____ day of my life! (happy)', answer: "the happiest", options: ["the happiest", "the most happy", "the happier", "happiest"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "He's the tallest player in the team.", options: ["He's the tallest player in the team.", "He's the most tallest player in the team.", "He's tallest player in the team."] },
            { type: 'fill', difficulty: 'hard', question: 'What is _____ way to get to the airport? (quick)', answer: "the quickest", options: ["the quickest", "the most quick", "quickest", "the quicker"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "This is the most simplest solution.", options: ["This is the most simplest solution.", "This is the simplest solution.", "This is the most practical solution."] },
            { type: 'fill', difficulty: 'hard', question: 'Of all the proposals, yours is _____ promising one.', answer: "the most", options: ["the most", "the more", "most", "the much"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'This is _____ effective marketing strategy we\'ve tried.', answer: "the most", options: ["the most", "most", "the more", "the much"] },
            { type: 'fill', difficulty: 'hard', question: 'Among all divisions, the R&D department showed _____ results.', answer: "the best", options: ["the best", "the most good", "the better", "the goodest"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "This quarter has been the most challenging of all.", options: ["This quarter has been the most challenging of all.", "This quarter has been the most challenging in all.", "This quarter has been the challengingest of all."] },
        ]
    },

    105: {
        id: 105, title: 'Word order: adverbs with the verb', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Place de l'adverbe avec le verbe</b><br><br>
En anglais, la place de l'adverbe est <b>très importante</b> et souvent différente du français.<br><br>
<b>1. Adverbes de fréquence (always, often, usually, never, sometimes) :</b><br>
→ <b>AVANT</b> le verbe principal, <b>APRÈS</b> be/aux :<br>
<i>"I <b>always</b> drink coffee."</i> / <i>"She <b>is always</b> late."</i><br><br>
<b>2. Adverbes de degré (almost, quite, really, also, just, still) :</b><br>
→ <b>AVANT</b> le verbe principal : <i>"I <b>almost</b> forgot."</i><br><br>
<b>3. Adverbes de temps/lieu :</b><br>
→ En <b>fin de phrase</b> : <i>"I saw him <b>yesterday</b>."</i><br><br>
⚠️ <b>Piège :</b> En français, on dit « je bois toujours du café ». En anglais : « I <b>always</b> drink coffee » (PAS ~~I drink always coffee~~).`,
        rules: [
            '📐 **Fréquence** (always, usually, often, never, sometimes) : AVANT le verbe, APRÈS be : _I **often** go / She **is** often late_',
            '📐 **Degré** (almost, quite, also, just, still, even, only) : AVANT le verbe principal',
            '📐 **Temps/lieu** (yesterday, here, today) : en FIN de phrase',
            '🔵 Avec un auxiliaire : après l\'aux, avant le verbe : _I **have** never **been**… / She **will** probably **come**…_',
            '🔴 PAS ~~I drink always~~ → I **always** drink',
            '🔴 PAS ~~She goes often~~ → She **often** goes'
        ],
        examples: [
            { text: "I **usually** get up at 7 o'clock.", fr: "D'habitude, je me lève à 7 heures.", correct: true },
            { text: "She **has never** been to Japan.", fr: "Elle n'est jamais allée au Japon.", correct: true },
            { text: "We **will probably** arrive late.", fr: "Nous arriverons probablement en retard.", correct: true },
            { text: "~~He goes always to work by car~~ → He **always goes** to work by car.", fr: "Il va toujours au travail en voiture.", correct: false }
        ],
        tips: [
            "🇫🇷 En français, l'adverbe est souvent après le verbe. En anglais, il est AVANT le verbe (sauf be).",
            "💡 Astuce : adverbe de fréquence → entre le sujet et le verbe principal. Après be/auxiliaire.",
            "⚠️ also, even, only : devant le verbe principal. « I also speak Spanish » = Je parle aussi espagnol."
        ],
        exercises: [
            { type: 'correct', difficulty: 'easy', question: 'Quel est le bon ordre ?', answer: "I always have coffee in the morning.", options: ["I always have coffee in the morning.", "I have always coffee in the morning.", "Always I have coffee in the morning."] },
            { type: 'correct', difficulty: 'easy', question: 'Quel est le bon ordre ?', answer: "She is usually very punctual.", options: ["She is usually very punctual.", "She usually is very punctual.", "Usually she is very punctual."] },
            { type: 'correct', difficulty: 'easy', question: 'Quel est le bon ordre ?', answer: "They have never been to Paris.", options: ["They have never been to Paris.", "They never have been to Paris.", "Never they have been to Paris."] },
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "I can also speak German.", options: ["I can also speak German.", "I also can speak German.", "Also I can speak German."] },
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "She probably won't come to the party.", options: ["She probably won't come to the party.", "She won't probably come to the party.", "Probably she won't come to the party."] },
            { type: 'correct', difficulty: 'medium', question: 'Identifiez la phrase INCORRECTE :', answer: "He eats rarely at home.", options: ["He eats rarely at home.", "He rarely eats at home.", "He is rarely at home."] },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon ordre ?', answer: "I have almost finished the report.", options: ["I have almost finished the report.", "I almost have finished the report.", "I have finished almost the report."] },
            { type: 'correct', difficulty: 'hard', question: 'Quel est le bon ordre ?', answer: "She would never have agreed to this.", options: ["She would never have agreed to this.", "She never would have agreed to this.", "Never she would have agreed to this."] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The project has been successfully completed.", options: ["The project has been successfully completed.", "The project has successfully been completed.", "The project successfully has been completed."] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quel est le bon ordre ?', answer: "The report will probably be ready by Friday.", options: ["The report will probably be ready by Friday.", "The report probably will be ready by Friday.", "Probably the report will be ready by Friday."] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The proposal has already been reviewed by the committee.", options: ["The proposal has already been reviewed by the committee.", "The proposal already has been reviewed by the committee.", "Already the proposal has been reviewed by the committee."] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She completes always her tasks on time.", options: ["She completes always her tasks on time.", "She always completes her tasks on time.", "She is always on time."] },
        ]
    },

    106: {
        id: 106, title: 'still, yet, already, anymore/any longer', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Still, yet, already, anymore — exprimer le temps qui passe</b><br><br>
<b>still</b> = encore, toujours (la situation continue)<br>
<i>"She <b>still</b> works here."</i> = Elle travaille encore ici.<br><br>
<b>yet</b> = pas encore / déjà (question) — en FIN de phrase<br>
<i>"Have you finished <b>yet</b>?"</i> = Tu as déjà fini ?<br>
<i>"I haven't finished <b>yet</b>."</i> = Je n'ai pas encore fini.<br><br>
<b>already</b> = déjà (affirmatif) — AVANT le verbe principal<br>
<i>"I've <b>already</b> seen that film."</i> = J'ai déjà vu ce film.<br><br>
<b>anymore / any longer / no longer</b> = ne… plus<br>
<i>"She doesn't live here <b>anymore</b>."</i> / <i>"She <b>no longer</b> lives here."</i>`,
        rules: [
            '📐 **still** = encore → AVANT le verbe (après be) : _I **still** live here / She **is still** working_',
            '📐 **yet** = pas encore / déjà ? → FIN de phrase, négatifs + questions : _Not **yet** / Have you…**yet**?_',
            '📐 **already** = déjà → AVANT le verbe principal (affirmatif) : _I\'ve **already** paid_',
            '📐 **anymore/any longer** = ne plus → FIN de phrase, négatifs : _She doesn\'t work here **anymore**_',
            '📐 **no longer** = ne plus → AVANT le verbe (formel) : _She **no longer** works here_',
            '🔴 PAS ~~I haven\'t still~~ → I **still** haven\'t / I haven\'t… **yet**'
        ],
        examples: [
            { text: "I'm **still** waiting for a reply.", fr: "J'attends encore une réponse.", correct: true },
            { text: "Have they arrived **yet**?", fr: "Sont-ils déjà arrivés ?", correct: true },
            { text: "I've **already** done my homework.", fr: "J'ai déjà fait mes devoirs.", correct: true },
            { text: "He **no longer** works for the company.", fr: "Il ne travaille plus pour la société.", correct: true }
        ],
        tips: [
            "🇫🇷 « encore » = still (affirmatif) ou yet (négatif : pas encore). « déjà » = already (affirmatif) ou yet? (question).",
            "💡 still → mid-position (avant verbe). yet → fin de phrase. already → mid-position.",
            "⚠️ anymore = fin de phrase. no longer = milieu de phrase. Même sens, place différente."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I haven\'t received the package _____. (pas encore)', answer: "yet", options: ["yet", "still", "already", "anymore"] },
            { type: 'fill', difficulty: 'easy', question: 'She _____ lives with her parents.', answer: "still", options: ["still", "yet", "already", "anymore"] },
            { type: 'fill', difficulty: 'easy', question: 'I\'ve _____ eaten, thanks. (= c\'est fait)', answer: "already", options: ["already", "yet", "still", "anymore"] },
            { type: 'fill', difficulty: 'medium', question: 'He doesn\'t smoke _____. (= il ne fume plus)', answer: "anymore", options: ["anymore", "still", "yet", "already"] },
            { type: 'fill', difficulty: 'medium', question: 'Have you booked the tickets _____?', answer: "yet", options: ["yet", "still", "already", "anymore"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I still haven't received a response.", options: ["I still haven't received a response.", "I haven't still received a response.", "Still I haven't received a response."] },
            { type: 'fill', difficulty: 'hard', question: 'The company _____ longer offers that product.', answer: "no", options: ["no", "not", "any", "still"], hint: "no longer + verbe affirmatif = ne plus" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "She has already submitted the report.", options: ["She has already submitted the report.", "She already has submitted the report.", "She has submitted already the report."] },
            { type: 'fill', difficulty: 'hard', question: 'Is the position _____ available? (= encore ?)', answer: "still", options: ["still", "yet", "already", "anymore"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The shipment has not _____ been dispatched.', answer: "yet", options: ["yet", "still", "already", "anymore"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The policy is no longer in effect.", options: ["The policy is no longer in effect.", "The policy is anymore not in effect.", "The policy isn't no longer in effect."] },
            { type: 'fill', difficulty: 'hard', question: 'Negotiations are _____ ongoing, but we hope to reach an agreement soon.', answer: "still", options: ["still", "yet", "already", "no longer"] },
        ]
    },

    107: {
        id: 107, title: 'enough and too', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Enough (assez) et Too (trop)</b><br><br>
<b>enough</b> = assez, suffisamment<br>
• <b>adj + enough</b> : _She's old <b>enough</b> to drive._ (assez âgée pour)<br>
• <b>enough + nom</b> : _We have <b>enough</b> time._ (assez de temps)<br><br>
<b>too</b> = trop<br>
• <b>too + adj</b> : _It's <b>too</b> expensive._ (trop cher)<br>
• <b>too much</b> + indénombrable : _<b>Too much</b> noise._ (trop de bruit)<br>
• <b>too many</b> + dénombrable : _<b>Too many</b> mistakes._ (trop d'erreurs)<br><br>
⚠️ <b>Place de enough :</b> APRÈS l'adjectif/adverbe, mais AVANT le nom !`,
        rules: [
            '📐 **adj + enough** : _warm **enough**, good **enough**, old **enough**_',
            '📐 **enough + nom** : _**enough** money, **enough** time_',
            '📐 **too + adj** : _**too** hot, **too** difficult_',
            '📐 **too much** + indénombrable / **too many** + dénombrable pluriel',
            '🔵 enough/too + **to** + verbe : _big enough **to** carry / too heavy **to** lift_',
            '🔴 PAS ~~enough old~~ → old **enough** (adjectif AVANT enough)',
            '🔴 PAS ~~too much people~~ → **too many** people (dénombrable pluriel)'
        ],
        examples: [
            { text: "This bag isn't big **enough** for all my things.", fr: "Ce sac n'est pas assez grand pour toutes mes affaires.", correct: true },
            { text: "We don't have **enough** money to buy a house.", fr: "Nous n'avons pas assez d'argent pour acheter une maison.", correct: true },
            { text: "It's **too** cold to go swimming.", fr: "Il fait trop froid pour aller nager.", correct: true },
            { text: "There are **too many** cars on the road.", fr: "Il y a trop de voitures sur la route.", correct: true }
        ],
        tips: [
            "🇫🇷 « assez grand » = big enough (enough APRÈS). « assez d'argent » = enough money (enough AVANT le nom).",
            "💡 too much = trop de + indénombrable. too many = trop de + dénombrable pluriel. C'est comme much/many.",
            "⚠️ « trop pour » = too… to… : « too tired to work » = trop fatigué pour travailler."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'He isn\'t old _____ to drive.', answer: "enough", options: ["enough", "too", "much", "very"] },
            { type: 'fill', difficulty: 'easy', question: 'It\'s _____ hot! Let\'s find some shade.', answer: "too", options: ["too", "enough", "much", "very"] },
            { type: 'fill', difficulty: 'easy', question: 'There\'s _____ much traffic today.', answer: "too", options: ["too", "enough", "so", "very"] },
            { type: 'fill', difficulty: 'medium', question: 'I don\'t have _____ experience for this job.', answer: "enough", options: ["enough", "too", "many", "much"] },
            { type: 'fill', difficulty: 'medium', question: 'There are too _____ errors in this report.', answer: "many", options: ["many", "much", "enough", "a lot"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She speaks clearly enough to be understood.", options: ["She speaks clearly enough to be understood.", "She speaks enough clearly to be understood.", "She enough speaks clearly to be understood."] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "He is enough smart to solve the problem.", options: ["He is enough smart to solve the problem.", "He is smart enough to solve the problem.", "The problem is too difficult for him."] },
            { type: 'fill', difficulty: 'hard', question: 'The company has spent too _____ on advertising this year.', answer: "much", options: ["much", "many", "enough", "lot"] },
            { type: 'fill', difficulty: 'hard', question: 'Is this room large _____ for the conference?', answer: "enough", options: ["enough", "too", "much", "so"] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The budget isn't large enough to cover all expenses.", options: ["The budget isn't large enough to cover all expenses.", "The budget isn't enough large to cover all expenses.", "The budget isn't large too to cover all expenses."] },
            { type: 'fill', difficulty: 'hard', question: 'Too _____ employees were affected by the restructuring.', answer: "many", options: ["many", "much", "enough", "several"] },
            { type: 'fill', difficulty: 'hard', question: 'The data is not _____ reliable to draw conclusions.', answer: "enough", options: ["enough", "too", "very", "much"] },
        ]
    },

    108: {
        id: 108, title: 'quite, pretty, rather, fairly', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Quite, pretty, rather, fairly — degrés « intermédiaires »</b><br><br>
Ces mots signifient tous « assez/plutôt », mais avec des nuances :<br><br>
<b>fairly</b> = assez (le plus faible) : _The exam was **fairly** easy._ (pas tant que ça)<br>
<b>quite</b> = assez, plutôt : _It was **quite** good._ (pas mal)<br>
<b>rather</b> = plutôt, assez (peut être négatif) : _It's **rather** cold._ (un peu trop froid)<br>
<b>pretty</b> = assez (informel) : _She's **pretty** smart._ (plutôt intelligente)<br><br>
⚠️ <b>Quite</b> a deux sens :<br>
• avec adjectifs « relatifs » : quite good = assez bien<br>
• avec adjectifs « absolus » : quite amazing = absolument incroyable`,
        rules: [
            '📐 Du + faible au + fort : **fairly < quite < rather < pretty** (≈ assez, plutôt)',
            '🔵 **quite/rather + a + adj + nom** : _It\'s **quite a** big house_ / _It was **rather a** surprise_',
            '🔵 **quite** + adj absolu = complètement : _quite **amazing** = absolument incroyable, quite **sure** = tout à fait sûr_',
            '🔵 **rather** → souvent négatif : _rather expensive_ (c\'est un peu trop cher)',
            '🔴 PAS ~~a quite big house~~ → **quite a** big house'
        ],
        examples: [
            { text: "The test was **fairly** difficult.", fr: "Le test était assez difficile (modérément).", correct: true },
            { text: "The movie was **quite** good, but not amazing.", fr: "Le film était plutôt bien, mais pas incroyable.", correct: true },
            { text: "It's **rather** cold today, isn't it?", fr: "Il fait plutôt froid aujourd'hui, non ? (connotation négative)", correct: true },
            { text: "I'm **quite** sure about this. (= complètement sûr)", fr: "Je suis tout à fait sûr(e) de ça. (quite + adj absolu)", correct: true }
        ],
        tips: [
            "🇫🇷 « assez » en français peut être fairly, quite, rather ou pretty. Regardez le contexte !",
            "💡 rather → souvent une surprise ou un ton négatif. « It's rather expensive » = c'est un peu trop cher à mon goût.",
            "⚠️ quite a + adj + nom (PAS a quite). « Quite a nice day » = une assez belle journée."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The film was _____ good. (= assez bien, pas mal)', answer: "quite", options: ["quite", "very", "too", "so"] },
            { type: 'fill', difficulty: 'easy', question: 'It was a _____ easy exam.', answer: "fairly", options: ["fairly", "fair", "fairy", "fail"] },
            { type: 'fill', difficulty: 'easy', question: 'The restaurant is _____ expensive. I wouldn\'t go there often.', answer: "rather", options: ["rather", "quiet", "quite", "rarely"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "It's quite a long journey.", options: ["It's quite a long journey.", "It's a quite long journey.", "It's quite long a journey."] },
            { type: 'fill', difficulty: 'medium', question: 'She\'s _____ clever for her age. (informel)', answer: "pretty", options: ["pretty", "prettily", "beauty", "nice"] },
            { type: 'fill', difficulty: 'medium', question: 'I\'m _____ certain this is correct. (= tout à fait)', answer: "quite", options: ["quite", "rather", "fairly", "pretty"], hint: "quite + adj absolu = complètement" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase a un sens NÉGATIF ?', answer: "The service was rather slow.", options: ["The service was rather slow.", "The service was fairly good.", "The service was quite acceptable."] },
            { type: 'fill', difficulty: 'hard', question: 'I found the lecture _____ boring, to be honest.', answer: "rather", options: ["rather", "quite", "fairly", "pretty"], hint: "connotation négative, surprise" },
            { type: 'correct', difficulty: 'hard', question: 'Dans quelle phrase « quite » signifie « complètement » ?', answer: "The results were quite remarkable.", options: ["The results were quite remarkable.", "The weather was quite nice.", "The food was quite good."], hint: "remarkable = adj absolu" }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The negotiations were _____ successful, but there\'s still work to do.', answer: "fairly", options: ["fairly", "absolutely", "completely", "very"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "It was quite an impressive achievement.", options: ["It was quite an impressive achievement.", "It was a quite impressive achievement.", "It was quite impressive an achievement."] },
            { type: 'fill', difficulty: 'hard', question: 'The delay was _____ unexpected and caused significant problems.', answer: "rather", options: ["rather", "fairly", "only", "quite"] },
        ]
    },

    109: {
        id: 109, title: 'Comparison (3): as … as / than', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Structures comparatives avancées</b><br><br>
<b>1. the same … as</b> = le/la même… que<br>
<i>"She has <b>the same</b> phone <b>as</b> me."</i><br><br>
<b>2. similar to / different from</b><br>
<i>"His style is <b>similar to</b> mine."</i> / <i>"French is <b>different from</b> English."</i><br><br>
<b>3. like vs as</b><br>
• <b>like</b> + nom/pronom = comme : _She looks **like** her mother._<br>
• <b>as</b> + sujet + verbe = comme : _Do **as** I say._<br><br>
<b>4. Intensifieurs :</b> much/far/a lot + comparatif<br>
<i>"It's <b>much better</b> than before."</i> / <i>"She's <b>far more experienced</b>."</i>`,
        rules: [
            '📐 **the same + nom + as** : _the same color **as**…_',
            '📐 **similar to** / **different from** (PAS ~~different than~~ en British English)',
            '📐 **like** + nom : _like a child_ / **as** + clause : _as I said_',
            '🔵 Intensifieurs : **much/far/a lot/a bit** + comparatif : _much bigger, far better, a lot easier_',
            '🔴 PAS ~~same like~~ → the same **as**',
            '🔴 PAS ~~different than~~ (en BE) → different **from**'
        ],
        examples: [
            { text: "This phone is **the same** price **as** that one.", fr: "Ce téléphone est au même prix que celui-là.", correct: true },
            { text: "The new version is **much better** than the old one.", fr: "La nouvelle version est bien meilleure que l'ancienne.", correct: true },
            { text: "She looks **like** her sister.", fr: "Elle ressemble à sa sœur.", correct: true },
            { text: "~~This is same like mine~~ → This is **the same as** mine.", fr: "C'est le même que le mien.", correct: false }
        ],
        tips: [
            "🇫🇷 « le même que » = the same as (PAS same like). « différent de » = different from.",
            "💡 like = comme + NOM. as = comme + PHRASE. « Like me » vs « As I said ».",
            "⚠️ Pour renforcer un comparatif : much/far/a lot + comparatif. « Much better » = bien meilleur. PAS ~~very better~~."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She has the same bag _____ me.', answer: "as", options: ["as", "like", "than", "to"] },
            { type: 'fill', difficulty: 'easy', question: 'This restaurant is different _____ the one we went to last week.', answer: "from", options: ["from", "than", "as", "to"] },
            { type: 'fill', difficulty: 'easy', question: 'The new model is _____ better than the old one.', answer: "much", options: ["much", "very", "more", "so"] },
            { type: 'fill', difficulty: 'medium', question: 'He speaks English just _____ his father did.', answer: "as", options: ["as", "like", "than", "same"] },
            { type: 'fill', difficulty: 'medium', question: 'She looks _____ a movie star.', answer: "like", options: ["like", "as", "same", "similar"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "This version is far more efficient than the previous one.", options: ["This version is far more efficient than the previous one.", "This version is very more efficient than the previous one.", "This version is far more efficient as the previous one."] },
            { type: 'fill', difficulty: 'hard', question: 'The results are similar _____ what we expected.', answer: "to", options: ["to", "as", "than", "like"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "It's the same thing like before.", options: ["It's the same thing like before.", "It's the same thing as before.", "It's similar to before."] },
            { type: 'fill', difficulty: 'hard', question: 'The project took _____ longer than anticipated.', answer: "a lot", options: ["a lot", "very", "so", "too"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Our products are similar _____ quality _____ our competitors\'.', answer: "in … to", options: ["in … to", "of … as", "in … than", "at … with"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The new strategy is significantly different from the old one.", options: ["The new strategy is significantly different from the old one.", "The new strategy is significant different from the old one.", "The new strategy is significantly different than the old one."] },
            { type: 'fill', difficulty: 'hard', question: 'As _____ in the previous report, sales have declined.', answer: "stated", options: ["stated", "like stated", "same stated", "it stated"] },
        ]
    },

    110: {
        id: 110, title: 'so and such', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>So et Such — intensité et conséquence</b><br><br>
Les deux signifient « si/tellement » mais avec des structures différentes :<br><br>
<b>so + adjectif/adverbe :</b><br>
<i>"It was <b>so</b> cold!"</i> = Il faisait tellement froid !<br>
<i>"She speaks <b>so</b> quickly!"</i> = Elle parle tellement vite !<br><br>
<b>such + (a/an) + nom (avec ou sans adjectif) :</b><br>
<i>"It was <b>such a</b> cold day!"</i> = C'était une journée tellement froide !<br>
<i>"She's <b>such a</b> nice person!"</i> = C'est une personne tellement gentille !<br><br>
<b>so/such … that</b> = tellement… que (conséquence):<br>
<i>"It was <b>so</b> cold <b>that</b> we stayed inside."</i>`,
        rules: [
            '📐 **so** + adjectif/adverbe : _so beautiful, so quickly_',
            '📐 **such** + (a/an) + nom : _such a great idea, such nice weather_',
            '🔵 **so… that** / **such… that** = conséquence : _so tired **that** I fell asleep_',
            '🔵 **so much / so many** (PAS ~~such much~~) : _so much work, so many people_',
            '🔴 PAS ~~so a nice day~~ → **such a** nice day',
            '🔴 PAS ~~such beautiful~~ (sans nom) → **so** beautiful OU **such a** beautiful thing'
        ],
        examples: [
            { text: "The weather is **so** nice today!", fr: "Le temps est tellement beau aujourd'hui !", correct: true },
            { text: "It's **such a** beautiful day!", fr: "C'est une si belle journée !", correct: true },
            { text: "I was **so** tired **that** I fell asleep immediately.", fr: "J'étais tellement fatigué(e) que je me suis endormi(e) aussitôt.", correct: true },
            { text: "~~It was so a nice meal~~ → It was **such a** nice meal.", fr: "C'était un si bon repas.", correct: false }
        ],
        tips: [
            "🇫🇷 « tellement + adj » = so. « tellement + un(e) + adj + nom » = such a/an.",
            "💡 Astuce : so = PAS de nom après. such = un nom après (avec ou sans adjectif).",
            "⚠️ Attention : so much (indén.) / so many (dén.) → PAS such much/many."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'It was _____ cold last night!', answer: "so", options: ["so", "such", "such a", "very much"] },
            { type: 'fill', difficulty: 'easy', question: 'She\'s _____ nice person!', answer: "such a", options: ["such a", "so", "so a", "such"] },
            { type: 'fill', difficulty: 'easy', question: 'I\'m _____ happy to see you!', answer: "so", options: ["so", "such", "such a", "too"] },
            { type: 'fill', difficulty: 'medium', question: 'There were _____ many people that we couldn\'t find a seat.', answer: "so", options: ["so", "such", "too", "enough"] },
            { type: 'fill', difficulty: 'medium', question: 'It was _____ a surprise that nobody expected it.', answer: "such", options: ["such", "so", "so a", "very"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She speaks such good English!", options: ["She speaks such good English!", "She speaks so good English!", "She speaks such a good English!"], hint: "English = indénombrable → pas de 'a'" },
            { type: 'fill', difficulty: 'hard', question: 'The delay was _____ long _____ several clients cancelled.', answer: "so … that", options: ["so … that", "such … that", "too … that", "enough … that"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "It was so a difficult exam.", options: ["It was so a difficult exam.", "It was such a difficult exam.", "The exam was so difficult."] },
            { type: 'fill', difficulty: 'hard', question: 'We had _____ much work to do that we had to stay late.', answer: "so", options: ["so", "such", "too", "very"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The project was _____ a success that the team received a bonus.', answer: "such", options: ["such", "so", "so a", "very"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "There has been so much interest in the new product.", options: ["There has been so much interest in the new product.", "There has been such much interest in the new product.", "There has been so interest in the new product."] },
            { type: 'fill', difficulty: 'hard', question: 'The presentation was _____ well-received _____ management approved the project.', answer: "so … that", options: ["so … that", "such … that", "too … that", "such … as"] },
        ]
    },

    111: {
        id: 111, title: 'although / though / even though / in spite of / despite', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Exprimer la concession : bien que, malgré</b><br><br>
<b>although / though / even though</b> + sujet + verbe = bien que / même si<br>
<i>"<b>Although</b> it was raining, we went out."</i> = Bien qu'il pleuve, nous sommes sortis.<br><br>
<b>in spite of / despite</b> + nom / -ing = malgré<br>
<i>"<b>Despite</b> the rain, we went out."</i> = Malgré la pluie, nous sommes sortis.<br><br>
⚠️ <b>Piège :</b><br>
• although/though/even though + <b>phrase complète</b><br>
• despite/in spite of + <b>nom/-ing</b> (PAS de phrase complète!)`,
        rules: [
            '📐 **although/though/even though** + sujet + verbe : _**Although** he\'s rich, he\'s not happy._',
            '📐 **despite / in spite of** + nom/-ing : _**Despite** his wealth, he\'s not happy._',
            '📐 **despite the fact that / in spite of the fact that** + phrase',
            '🔵 **though** peut être en fin de phrase : _It was cold. I went out, **though**._ (= quand même)',
            '🔴 PAS ~~despite he is rich~~ → **despite being** rich / **although** he is rich',
            '🔴 PAS ~~although of~~ → **in spite of** / **despite**'
        ],
        examples: [
            { text: "**Although** she was tired, she kept working.", fr: "Bien qu'elle soit fatiguée, elle a continué à travailler.", correct: true },
            { text: "**Despite** the bad weather, we had a great time.", fr: "Malgré le mauvais temps, on a passé un bon moment.", correct: true },
            { text: "The food was OK, **though**. (= quand même)", fr: "La nourriture était OK quand même.", correct: true },
            { text: "~~Despite it was raining~~ → **Despite the rain** / **Although** it was raining", fr: "Malgré la pluie → despite + nom ou although + phrase.", correct: false }
        ],
        tips: [
            "🇫🇷 « bien que » = although. « malgré » = despite/in spite of. La différence est GRAMMATICALE, pas de sens.",
            "💡 despite/in spite of → JAMAIS de phrase avec sujet+verbe après. Utilisez un nom, -ing, ou ajoutez « the fact that ».",
            "⚠️ TOEIC : despite vs although est une question classique. Regardez ce qui suit !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ she studied hard, she failed the exam.', answer: "Although", options: ["Although", "Despite", "In spite of", "However"] },
            { type: 'fill', difficulty: 'easy', question: '_____ the rain, the match continued.', answer: "Despite", options: ["Despite", "Although", "Even though", "However"] },
            { type: 'fill', difficulty: 'easy', question: '_____ it was late, they decided to go out.', answer: "Even though", options: ["Even though", "Despite", "In spite of", "Despite of"] },
            { type: 'fill', difficulty: 'medium', question: '_____ having no experience, she got the job.', answer: "Despite", options: ["Despite", "Although", "Even though", "Though"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "In spite of the difficulties, the project was completed.", options: ["In spite of the difficulties, the project was completed.", "In spite of the project was difficult, it was completed.", "In spite the difficulties, the project was completed."] },
            { type: 'fill', difficulty: 'medium', question: '_____ the service was poor, the food was good.', answer: "Although", options: ["Although", "Despite", "In spite of", "Despite of"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Despite she worked hard, she didn't get promoted.", options: ["Despite she worked hard, she didn't get promoted.", "Despite working hard, she didn't get promoted.", "Although she worked hard, she didn't get promoted."] },
            { type: 'fill', difficulty: 'hard', question: '_____ the fact that sales declined, the company remained profitable.', answer: "Despite", options: ["Despite", "Although", "However", "Wherever"] },
            { type: 'fill', difficulty: 'hard', question: 'The product is popular _____ its high price.', answer: "despite", options: ["despite", "although", "even though", "however"] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Despite the economic downturn, the company posted record profits.", options: ["Despite the economic downturn, the company posted record profits.", "Despite the economic downturn happened, the company posted record profits.", "Although the economic downturn, the company posted record profits."] },
            { type: 'fill', difficulty: 'hard', question: '_____ having limited resources, the team delivered on time.', answer: "Despite", options: ["Despite", "Although", "Even", "However"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "In spite she was ill, she came to work.", options: ["In spite she was ill, she came to work.", "In spite of being ill, she came to work.", "Although she was ill, she came to work."] },
        ]
    },

    112: {
        id: 112, title: 'in case', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>In case — au cas où</b><br><br>
<b>in case</b> = au cas où, pour le cas où (prévention)<br>
<i>"Take an umbrella <b>in case</b> it rains."</i> = Prends un parapluie au cas où il pleuvrait.<br><br>
⚠️ <b>Différence : in case ≠ if</b><br>
• <b>in case</b> = par précaution, AVANT que ça arrive : _I'll take money **in case** I need it._ (je prends l'argent maintenant, par sécurité)<br>
• <b>if</b> = à condition que, SI ça arrive : _I'll buy food **if** I need it._ (j'achèterai seulement si j'en ai besoin)<br><br>
<b>in case of</b> + nom = en cas de (formel)<br>
<i>"<b>In case of</b> emergency, call 911."</i>`,
        rules: [
            '📐 **in case** + sujet + verbe (present, PAS will) : _Take a map **in case** you get lost._',
            '📐 **in case of** + nom : _**In case of** fire, use the stairs._',
            '🔵 in case = précaution (on fait qqch AVANT). if = condition (on fait qqch SI).',
            '🔴 PAS ~~in case it will rain~~ → in case it **rains** (present simple après in case)'
        ],
        examples: [
            { text: "I'll give you my number **in case** you need to contact me.", fr: "Je te donne mon numéro au cas où tu aurais besoin de me contacter.", correct: true },
            { text: "**In case of** delay, please notify the client.", fr: "En cas de retard, veuillez prévenir le client.", correct: true },
            { text: "~~I'll take money in case I will need it~~ → … **in case** I **need** it.", fr: "Au cas où j'en aurais besoin. (present simple après in case)", correct: false }
        ],
        tips: [
            "🇫🇷 « au cas où » = in case. « en cas de » = in case of + nom.",
            "💡 in case = par précaution, je fais qqch MAINTENANT. if = je ferai qqch seulement SI la condition se réalise.",
            "⚠️ Après in case → present simple (PAS will)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Take some water _____ you get thirsty.', answer: "in case", options: ["in case", "if", "when", "because"] },
            { type: 'fill', difficulty: 'easy', question: '_____ case _____ emergency, leave the building immediately.', answer: "In … of", options: ["In … of", "In … for", "At … of", "On … of"] },
            { type: 'fill', difficulty: 'easy', question: 'I\'ll write it down _____ I forget.', answer: "in case", options: ["in case", "if", "when", "because"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Take warm clothes in case it gets cold.", options: ["Take warm clothes in case it gets cold.", "Take warm clothes in case it will get cold.", "Take warm clothes in case it would get cold."] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle est la différence ?', answer: "In case = by precaution, if = on condition", options: ["In case = by precaution, if = on condition", "In case = if (they're the same)", "In case = when something happens definitely"] },
            { type: 'fill', difficulty: 'medium', question: 'I\'ll keep my phone on _____ you need to reach me.', answer: "in case", options: ["in case", "if", "when", "so that"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Take an umbrella in case it will rain.", options: ["Take an umbrella in case it will rain.", "Take an umbrella in case it rains.", "I'll buy food if I need it."] },
            { type: 'fill', difficulty: 'hard', question: '_____ case of any discrepancies, please contact the finance department.', answer: "In", options: ["In", "On", "At", "For"] },
            { type: 'fill', difficulty: 'hard', question: 'She always carries a first-aid kit _____ someone gets hurt.', answer: "in case", options: ["in case", "if", "when", "unless"] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Please save your work regularly in case the system crashes.", options: ["Please save your work regularly in case the system crashes.", "Please save your work regularly in case the system will crash.", "Please save your work regularly in case of the system crashes."] },
            { type: 'fill', difficulty: 'hard', question: '_____ case of a security breach, all passwords must be changed immediately.', answer: "In", options: ["In", "On", "If", "At"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle utilisation de « in case » est correcte ?', answer: "I noted the address in case I forget.", options: ["I noted the address in case I forget.", "I noted the address in case I forgot.", "I noted the address in case I will forget."] },
        ]
    },

    113: {
        id: 113, title: 'unless / as long as / provided', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Unless, as long as, provided (that) — conditions</b><br><br>
<b>unless</b> = à moins que, sauf si<br>
<i>"I'll go <b>unless</b> it rains."</i> = J'irai sauf s'il pleut. (= if it doesn't rain)<br><br>
<b>as long as / so long as</b> = du moment que, tant que<br>
<i>"You can borrow it <b>as long as</b> you return it."</i> = Tu peux l'emprunter du moment que tu le rends.<br><br>
<b>provided (that) / providing (that)</b> = à condition que (formel)<br>
<i>"You can leave early <b>provided that</b> you finish your work."</i> = Tu peux partir tôt à condition que tu finisses ton travail.`,
        rules: [
            '📐 **unless** = if… not : _Don\'t call me **unless** it\'s urgent._ (PAS ~~unless it isn\'t~~)',
            '📐 **as long as** = condition suffisante : _You can stay **as long as** you\'re quiet._',
            '📐 **provided (that)** = à condition que (formel) : _**Provided** the weather is good, we\'ll go._',
            '🔴 unless = déjà négatif ! PAS de double négation : ~~unless you don\'t finish~~ → **unless you finish**'
        ],
        examples: [
            { text: "I won't go **unless** you come with me.", fr: "Je n'irai pas à moins que tu viennes avec moi.", correct: true },
            { text: "**As long as** you study, you'll pass.", fr: "Du moment que tu étudies, tu réussiras.", correct: true },
            { text: "The event will proceed **provided that** there are enough participants.", fr: "L'événement aura lieu à condition qu'il y ait assez de participants.", correct: true },
            { text: "~~Unless it doesn't rain~~ → **Unless it rains** / **If it doesn't rain**", fr: "Sauf s'il pleut (unless est déjà négatif !)", correct: false }
        ],
        tips: [
            "🇫🇷 unless = sauf si = if not. C'est DÉJÀ négatif, donc pas de « not » après unless.",
            "💡 as long as / provided that = même sens, formalités différentes. provided = plus formel.",
            "⚠️ TOEIC : unless est fréquent dans les contrats et conditions. Ex : « Unless otherwise stated… »"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'ll take the job _____ the salary is good.', answer: "as long as", options: ["as long as", "unless", "despite", "in case"] },
            { type: 'fill', difficulty: 'easy', question: 'Don\'t touch anything _____ I tell you to.', answer: "unless", options: ["unless", "if", "as long as", "despite"] },
            { type: 'fill', difficulty: 'easy', question: 'You can go _____ you finish your homework first.', answer: "provided", options: ["provided", "unless", "despite", "although"] },
            { type: 'fill', difficulty: 'medium', question: '_____ you hurry, we\'ll miss the train.', answer: "Unless", options: ["Unless", "If", "As long as", "Provided"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Unless the price drops, I won't buy it.", options: ["Unless the price drops, I won't buy it.", "Unless the price doesn't drop, I won't buy it.", "Unless the price will drop, I won't buy it."] },
            { type: 'fill', difficulty: 'medium', question: 'You can park here _____ as you don\'t block the entrance.', answer: "as long", options: ["as long", "unless", "provided", "in case"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "Unless you don't pay on time, there will be a penalty.", options: ["Unless you don't pay on time, there will be a penalty.", "Unless you pay on time, there will be a penalty.", "If you don't pay on time, there will be a penalty."] },
            { type: 'fill', difficulty: 'hard', question: '_____ otherwise stated, the terms apply to all employees.', answer: "Unless", options: ["Unless", "If", "Provided", "Despite"] },
            { type: 'fill', difficulty: 'hard', question: 'The contract will be renewed _____ both parties agree.', answer: "provided that", options: ["provided that", "unless", "despite", "in spite of"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ the project is completed by the deadline, the budget will not be extended.', answer: "Unless", options: ["Unless", "If", "Provided", "As long as"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The funds will be released provided the audit is satisfactory.", options: ["The funds will be released provided the audit is satisfactory.", "The funds will be released unless the audit is satisfactory.", "The funds will be released providing the audit isn't satisfactory."] },
            { type: 'fill', difficulty: 'hard', question: 'Employees may work remotely _____ long _____ they meet their deadlines.', answer: "as … as", options: ["as … as", "so … as", "if … then", "when … then"] },
        ]
    },

    114: {
        id: 114, title: 'Prepositions of time (at/on/in)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Prépositions de temps : at, on, in</b><br><br>
<b>at</b> = heure précise, moment ponctuel<br>
<i>"<b>at</b> 9 o'clock, <b>at</b> night, <b>at</b> Christmas, <b>at</b> the weekend"</i><br><br>
<b>on</b> = jour, date<br>
<i>"<b>on</b> Monday, <b>on</b> 15 March, <b>on</b> my birthday, <b>on</b> Christmas Day"</i><br><br>
<b>in</b> = mois, année, saison, partie du jour<br>
<i>"<b>in</b> July, <b>in</b> 2025, <b>in</b> summer, <b>in</b> the morning"</i><br><br>
⚠️ <b>Pas de préposition :</b> last, next, this, every → _**last** week_ (PAS ~~in last week~~)`,
        rules: [
            '📐 **at** : heure (_at 5pm_), moments (_at night, at noon, at midnight_), fêtes (_at Christmas, at Easter_), _at the weekend_ (BE)',
            '📐 **on** : jours (_on Friday_), dates (_on 1 January_), jour + moment (_on Monday morning_), occasions (_on my birthday_)',
            '📐 **in** : mois (_in April_), années (_in 2024_), saisons (_in summer_), parties du jour (_in the morning/afternoon/evening_)',
            '🔴 PAS de préposition avec **last, next, this, every** : _**last** week, **this** morning, **every** day_ (PAS ~~in last week~~)',
            '🔴 **in** the morning MAIS **at** night (exception !)'
        ],
        examples: [
            { text: "I have a meeting **at** 10 o'clock **on** Monday.", fr: "J'ai une réunion à 10h lundi.", correct: true },
            { text: "She was born **in** 1990 **in** December.", fr: "Elle est née en 1990 en décembre.", correct: true },
            { text: "We go skiing **in** winter.", fr: "Nous faisons du ski en hiver.", correct: true },
            { text: "~~I'll see you in next week~~ → I'll see you **next** week (pas de préposition)", fr: "Je te verrai la semaine prochaine.", correct: false }
        ],
        tips: [
            "🇫🇷 « à 9h » = at. « lundi » = on. « en mars » = in. Les prépositions de temps sont souvent différentes du français.",
            "💡 Astuce : AT = point précis. ON = surface (un jour). IN = contenu dans une période.",
            "⚠️ in the morning/afternoon/evening MAIS at night (exception classique au TOEIC)."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The meeting starts _____ 9 a.m.', answer: "at", options: ["at", "on", "in", "by"] },
            { type: 'fill', difficulty: 'easy', question: 'I was born _____ 15th March.', answer: "on", options: ["on", "at", "in", "by"] },
            { type: 'fill', difficulty: 'easy', question: 'We go on holiday _____ August.', answer: "in", options: ["in", "on", "at", "by"] },
            { type: 'fill', difficulty: 'medium', question: 'The shop closes _____ midnight.', answer: "at", options: ["at", "on", "in", "by"] },
            { type: 'fill', difficulty: 'medium', question: 'I like reading _____ the evening.', answer: "in", options: ["in", "at", "on", "by"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I'll see you next Monday.", options: ["I'll see you next Monday.", "I'll see you on next Monday.", "I'll see you at next Monday."] },
            { type: 'fill', difficulty: 'hard', question: 'The conference will be held _____ Friday _____ the afternoon.', answer: "on … in", options: ["on … in", "at … on", "in … at", "on … at"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I don't like driving in night.", options: ["I don't like driving in night.", "I don't like driving at night.", "I wake up early in the morning."] },
            { type: 'fill', difficulty: 'hard', question: 'The company was founded _____ the 19th century.', answer: "in", options: ["in", "on", "at", "during"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The deadline is _____ March 31st _____ 5 p.m.', answer: "on … at", options: ["on … at", "in … at", "at … on", "on … in"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The meeting is scheduled at Monday morning.", options: ["The meeting is scheduled at Monday morning.", "The meeting is scheduled for Monday morning.", "The meeting is on Monday morning."] },
            { type: 'fill', difficulty: 'hard', question: 'Revenue increased by 20% _____ the third quarter.', answer: "in", options: ["in", "on", "at", "during"] },
        ]
    },

    115: {
        id: 115, title: 'Prepositions of place (at/on/in)', category: 'adj-adv-prep',
        explanation: `🇫🇷 <b>Prépositions de lieu : at, on, in</b><br><br>
<b>at</b> = point précis, adresse, lieu de rendez-vous<br>
<i>"<b>at</b> the bus stop, <b>at</b> 10 Downing Street, <b>at</b> work, <b>at</b> home"</i><br><br>
<b>on</b> = surface, étage, rue (sans numéro), transport<br>
<i>"<b>on</b> the table, <b>on</b> the second floor, <b>on</b> Main Street, <b>on</b> the bus"</i><br><br>
<b>in</b> = à l'intérieur, ville, pays, espace fermé<br>
<i>"<b>in</b> the box, <b>in</b> Paris, <b>in</b> France, <b>in</b> my car"</i><br><br>
⚠️ <b>Transport :</b> on the bus/train/plane MAIS in a car/taxi<br>
⚠️ <b>in</b> a picture/photo, <b>in</b> a book, <b>in</b> the newspaper`,
        rules: [
            '📐 **at** : point précis (_at the station, at the door_), adresse (_at 45 Elm St._), lieux habituels (_at home, at work, at school_)',
            '📐 **on** : surface (_on the wall, on the floor_), étage (_on the 3rd floor_), rue sans numéro (_on Oak Street_), transport public (_on the train_)',
            '📐 **in** : espace fermé (_in the room, in the car_), ville/pays (_in Tokyo, in Japan_), texte/image (_in the photo_)',
            '🔵 **on** the bus/train/plane MAIS **in** a car/taxi',
            '🔴 PAS ~~in the bus~~ → **on** the bus (transport public = on)'
        ],
        examples: [
            { text: "She's **at** home.", fr: "Elle est à la maison.", correct: true },
            { text: "The painting is **on** the wall.", fr: "Le tableau est sur le mur.", correct: true },
            { text: "He lives **in** Paris.", fr: "Il vit à Paris.", correct: true },
            { text: "We were **on** the train when it happened.", fr: "Nous étions dans le train quand c'est arrivé.", correct: true },
            { text: "~~She's in home~~ → She's **at** home.", fr: "Elle est à la maison.", correct: false }
        ],
        tips: [
            "🇫🇷 Pour les villes/pays → toujours in (in Paris, in France). Pour un point de rencontre → at (at the airport).",
            "💡 Transport : ON = grand véhicule où on se lève (bus, train, avion). IN = petit véhicule où on est assis (voiture, taxi).",
            "⚠️ at home, at work, at school → pas d'article !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'ll meet you _____ the station.', answer: "at", options: ["at", "on", "in", "to"] },
            { type: 'fill', difficulty: 'easy', question: 'The keys are _____ the table.', answer: "on", options: ["on", "at", "in", "to"] },
            { type: 'fill', difficulty: 'easy', question: 'She works _____ London.', answer: "in", options: ["in", "at", "on", "to"] },
            { type: 'fill', difficulty: 'medium', question: 'There\'s a good restaurant _____ the second floor.', answer: "on", options: ["on", "at", "in", "to"] },
            { type: 'fill', difficulty: 'medium', question: 'I left my bag _____ the car.', answer: "in", options: ["in", "on", "at", "to"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "I read it in the newspaper.", options: ["I read it in the newspaper.", "I read it on the newspaper.", "I read it at the newspaper."] },
            { type: 'fill', difficulty: 'hard', question: 'She was waiting _____ the bus stop when I saw her.', answer: "at", options: ["at", "on", "in", "by"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "Passengers must remain on the train until it stops.", options: ["Passengers must remain on the train until it stops.", "Passengers must remain in the train until it stops.", "Passengers must remain at the train until it stops."] },
            { type: 'fill', difficulty: 'hard', question: 'The company has offices _____ major cities worldwide.', answer: "in", options: ["in", "at", "on", "to"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'The conference will be held _____ the Grand Hotel.', answer: "at", options: ["at", "in", "on", "to"] },
            { type: 'fill', difficulty: 'hard', question: 'Please leave your ID _____ the reception desk.', answer: "at", options: ["at", "on", "in", "by"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She arrived in the airport at 6 a.m.", options: ["She arrived in the airport at 6 a.m.", "She arrived at the airport at 6 a.m.", "She works at the airport."] },
        ]
    }
};
