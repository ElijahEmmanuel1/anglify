export const grammarLessonsConditionals = {
    // ===== UNIT 38 — If I do … and If I did … =====
    38: {
        id: 38,
        title: 'If I do … and If I did …',
        category: 'conditionals',
        explanation: `🇫🇷 <b>Le conditionnel de type 1 et de type 2</b><br><br>
En anglais, il existe plusieurs types de phrases conditionnelles. Cette leçon couvre les deux premiers :<br><br>
<b>Type 1 — La condition réelle (probable) :</b><br>
Structure : <b>If + present simple, will + base verbale</b><br>
On l'utilise quand la situation est <b>réaliste et probable</b>.<br>
Exemple : <i>"If it rains, I'll stay home."</i> → Si il pleut, je resterai à la maison.<br><br>
<b>Type 2 — La condition irréelle (imaginaire au présent) :</b><br>
Structure : <b>If + past simple, would + base verbale</b><br>
On l'utilise quand la situation est <b>imaginaire ou improbable maintenant</b>.<br>
Exemple : <i>"If I had money, I would travel."</i> → Si j'avais de l'argent, je voyagerais.<br><br>
⚠️ <b>Attention :</b> En français, on dit "Si + présent → futur" et "Si + imparfait → conditionnel". La logique est similaire en anglais, MAIS on ne met <b>JAMAIS "will" ou "would" après "if"</b> ! C'est une erreur très fréquente chez les francophones.<br>
❌ <i>If I would have money…</i> → ✅ <i>If I had money…</i>`,
        rules: [
            '📐 **Type 1** : If + _present simple_, will + _base verbale_ → condition réelle/probable',
            '📐 **Type 2** : If + _past simple_, would + _base verbale_ → condition irréelle/imaginaire au présent',
            '📐 On ne met **JAMAIS** _will_ ou _would_ dans la proposition avec **if**',
            '📐 On peut inverser les propositions : _I\'ll stay home if it rains._ (pas de virgule)',
            '📐 Au type 2, on utilise **were** (pas _was_) avec _I/he/she/it_ dans un style soutenu : _If I **were** rich…_'
        ],
        examples: [
            { text: "If it **rains**, I**'ll** stay home.", fr: "S'il pleut, je resterai à la maison.", correct: true },
            { text: "If I **had** a million dollars, I **would** buy a house.", fr: "Si j'avais un million de dollars, j'achèterais une maison.", correct: true },
            { text: "If you **study** hard, you **will** pass the exam.", fr: "Si tu étudies bien, tu réussiras l'examen.", correct: true },
            { text: "If she **knew** the answer, she **would** tell us.", fr: "Si elle connaissait la réponse, elle nous le dirait.", correct: true },
            { text: "~~If I would have time~~ → **If I had time, I would help you.**", fr: "Si j'avais le temps, je t'aiderais.", correct: false, note: "On ne met JAMAIS 'would' après 'if'. C'est 'If + past simple'." },
            { text: "~~If it will rain~~ → **If it rains, we'll cancel.**", fr: "S'il pleut, on annulera.", correct: false, note: "On ne met JAMAIS 'will' après 'if' dans une condition. C'est 'If + present simple'." },
        ],
        tips: [
            "🇫🇷 En français on dit 'Si j'aurais' à l'oral (fautif), et beaucoup de francophones traduisent par 'If I would' — c'est FAUX en anglais. Retenez : **pas de will/would après if**.",
            "🇫🇷 Type 1 ≈ 'Si + présent → futur' en français. Type 2 ≈ 'Si + imparfait → conditionnel'.",
            "🇫🇷 'If I were you' (pas 'If I was you') est la forme correcte en anglais soutenu, même à la 1re personne."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "If it ___ tomorrow, we'll go to the beach. (shine)", answer: "shines", options: ["shines", "will shine", "shone", "would shine"], hint: "Type 1 : If + present simple" },
            { type: 'fill', difficulty: 'easy', question: "If I ___ you, I would apologize. (be)", answer: "were", options: ["were", "am", "would be", "will be"], hint: "Type 2 : If + past simple (were pour tous les sujets)" },
            { type: 'fill', difficulty: 'easy', question: "She'll call you if she ___ time. (have)", answer: "has", options: ["has", "will have", "would have", "had"], hint: "Type 1 : If + present simple, même si la proposition est inversée" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "If Tom ___ harder, he would get better results. (work)", answer: "worked", options: ["worked", "works", "would work", "will work"], hint: "Situation irréelle au présent → Type 2" },
            { type: 'fill', difficulty: 'medium', question: "If we ___ early, we ___ the traffic. (leave / avoid)", answer: "leave, will avoid", options: ["leave, will avoid", "will leave, avoid", "left, will avoid", "leave, would avoid"], hint: "Condition réelle → Type 1 : If + present, will + base" },
            { type: 'fill', difficulty: 'medium', question: "I ___ around the world if I ___ a millionaire. (travel / be)", answer: "would travel, were", options: ["would travel, were", "will travel, am", "travel, was", "would travel, would be"], hint: "Situation imaginaire → Type 2" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "If the company ___ more staff, productivity ___ significantly. (hire / improve)", answer: "hired, would improve", options: ["hired, would improve", "hires, would improve", "hired, will improve", "would hire, improved"], hint: "Hypothèse peu probable → Type 2" },
            { type: 'fill', difficulty: 'hard', question: "What ___ you ___ if you ___ the lottery? (do / win)", answer: "would, do, won", options: ["would, do, won", "will, do, win", "would, do, win", "do, do, won"], hint: "Question au conditionnel type 2" },
            { type: 'fill', difficulty: 'hard', question: "If I ___ in your position, I ___ the job offer. (be / accept)", answer: "were, would accept", options: ["were, would accept", "was, would accept", "am, will accept", "would be, accepted"], hint: "Conseil avec 'If I were you' → Type 2 soutenu" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "If Sarah ___ the meeting, she'll miss the announcement. (not attend)", answer: "doesn't attend", options: ["doesn't attend", "won't attend", "didn't attend", "wouldn't attend"] },
            { type: 'fill', difficulty: 'hard', question: "If I ___ more money, I ___ a bigger apartment. (earn / rent)", answer: "earned, would rent", options: ["earned, would rent", "earn, will rent", "would earn, rented", "earned, rented"] },
            { type: 'fill', difficulty: 'hard', question: "We ___ you if we ___ any problems with the delivery. (contact / have)", answer: "will contact, have", options: ["will contact, have", "contact, will have", "would contact, had", "will contact, will have"] },
            { type: 'fill', difficulty: 'hard', question: "If the weather ___ better, we ___ outside. But it's raining. (be / eat)", answer: "were, would eat", options: ["were, would eat", "is, will eat", "was, would eat", "would be, ate"] },
        ]
    },

    // ===== UNIT 39 — If I knew … I wish I knew … =====
    39: {
        id: 39,
        title: 'If I knew … I wish I knew …',
        category: 'conditionals',
        explanation: `🇫🇷 <b>Le conditionnel type 2 (approfondissement) et Wish + past simple</b><br><br>
<b>1. If I knew… / If I were you…</b><br>
Le conditionnel de type 2 exprime une situation <b>irréelle au présent</b>. On utilise le <b>past simple</b> après "if", mais ça ne parle PAS du passé — ça parle d'une <b>situation imaginaire maintenant</b>.<br>
<i>"If I knew the answer, I would tell you."</i> = Je ne connais PAS la réponse (maintenant).<br>
<i>"If I were you, I would accept the offer."</i> = Je ne suis PAS toi.<br><br>
<b>2. I wish I knew…</b><br>
<b>Wish + past simple</b> exprime un <b>souhait irréel au présent</b> (on regrette que la réalité soit différente).<br>
<i>"I wish I had a car."</i> = Je n'ai PAS de voiture (et je le regrette).<br>
<i>"I wish I spoke Japanese."</i> = Je ne parle PAS japonais (et j'aimerais).<br><br>
🔑 <b>Point clé :</b> Dans les deux cas (if… et wish…), on utilise le <b>past simple</b> pour parler du <b>présent irréel</b>. Avec "wish" et "if", on préfère <b>"were"</b> à "was" dans un registre soutenu.`,
        rules: [
            '📐 **If + past simple, would + base** → situation imaginaire/irréelle au présent',
            '📐 **If I were you** (pas _was_) → pour donner un conseil',
            '📐 **I wish + past simple** → souhait irréel au présent (la réalité est différente)',
            '📐 Après **wish**, on utilise **were** (pas _was_) en anglais soutenu : _I wish I **were** taller._',
            '📐 Le past simple dans ces structures NE parle PAS du passé — il exprime l\'**irréel**'
        ],
        examples: [
            { text: "If I **knew** her number, I **would** call her.", fr: "Si je connaissais son numéro, je l'appellerais.", correct: true },
            { text: "If I **were** you, I **would** take the job.", fr: "Si j'étais toi, j'accepterais le poste.", correct: true },
            { text: "I wish I **had** more free time.", fr: "J'aimerais avoir plus de temps libre.", correct: true },
            { text: "She wishes she **spoke** better English.", fr: "Elle aimerait mieux parler anglais.", correct: true },
            { text: "~~I wish I have a car~~ → **I wish I had a car.**", fr: "J'aimerais avoir une voiture.", correct: false, note: "Après 'wish', on utilise le past simple (had), pas le present (have)." },
            { text: "~~If I would be you~~ → **If I were you, I would study more.**", fr: "Si j'étais toi, j'étudierais plus.", correct: false, note: "Jamais 'would' après 'if'. Et on dit 'were', pas 'was' ou 'would be'." },
        ],
        tips: [
            "🇫🇷 'I wish I had…' = 'J'aimerais avoir…' ou 'Si seulement j'avais…'. En français, on utilise l'imparfait ou le conditionnel ; en anglais, c'est le past simple après wish.",
            "🇫🇷 'If I were you' = 'Si j'étais toi / à ta place'. C'est LA formule pour donner un conseil en anglais.",
            "🇫🇷 Ne confondez pas : 'I wish I had' (= je n'ai pas, je le regrette) ≠ 'I wish I had had' (= regret au passé, unité 40)."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "I wish I ___ taller. (be)", answer: "were", options: ["were", "am", "was being", "would be"], hint: "Wish + past simple → irréel présent. 'Were' en soutenu." },
            { type: 'fill', difficulty: 'easy', question: "If I ___ you, I'd apologize. (be)", answer: "were", options: ["were", "am", "would be", "was being"], hint: "Conseil : If I were you…" },
            { type: 'fill', difficulty: 'easy', question: "She wishes she ___ a bigger house. (have)", answer: "had", options: ["had", "has", "would have", "is having"], hint: "Wish + past simple pour un souhait irréel au présent" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "If he ___ the truth, he ___ so surprised. (know / not be)", answer: "knew, wouldn't be", options: ["knew, wouldn't be", "knows, won't be", "knew, won't be", "would know, wasn't"], hint: "Il ne connaît pas la vérité (irréel présent) → Type 2" },
            { type: 'fill', difficulty: 'medium', question: "I wish I ___ how to play the piano. (know)", answer: "knew", options: ["knew", "know", "would know", "have known"], hint: "Je ne sais PAS jouer → souhait irréel → wish + past simple" },
            { type: 'fill', difficulty: 'medium', question: "If we ___ closer to the office, we ___ so much time commuting. (live / not waste)", answer: "lived, wouldn't waste", options: ["lived, wouldn't waste", "live, won't waste", "lived, didn't waste", "would live, won't waste"], hint: "On n'habite PAS près du bureau → irréel → Type 2" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "Tom acts as if he ___ everything, but he doesn't. (know)", answer: "knew", options: ["knew", "knows", "would know", "has known"], hint: "'As if' fonctionne comme 'if' irréel → past simple" },
            { type: 'fill', difficulty: 'hard', question: "I wish the neighbors ___ so much noise. It's really annoying. (not make)", answer: "didn't make", options: ["didn't make", "don't make", "wouldn't make", "haven't made"], hint: "Souhait irréel au présent → wish + past simple (négatif)" },
            { type: 'fill', difficulty: 'hard', question: "If the CEO ___ more about technology, the company ___ more competitive. (understand / be)", answer: "understood, would be", options: ["understood, would be", "understands, will be", "would understand, was", "understood, will be"], hint: "Le PDG ne comprend pas bien la techno → irréel → Type 2" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "I wish I ___ speak Chinese fluently. (can)", answer: "could", options: ["could", "can", "would", "am able to"] },
            { type: 'fill', difficulty: 'hard', question: "If she ___ more experience, she ___ promoted. (have / get)", answer: "had, would get", options: ["had, would get", "has, will get", "would have, got", "had, will get"] },
            { type: 'fill', difficulty: 'hard', question: "He wishes he ___ in a big city. Life in the countryside is boring. (live)", answer: "lived", options: ["lived", "lives", "would live", "is living"] },
            { type: 'fill', difficulty: 'hard', question: "If I ___ what to do, I ___ you for advice. (know / not ask)", answer: "knew, wouldn't ask", options: ["knew, wouldn't ask", "know, won't ask", "knew, didn't ask", "would know, won't ask"] },
        ]
    },

    // ===== UNIT 40 — If I had known … I wish I had known … =====
    40: {
        id: 40,
        title: 'If I had known … I wish I had known …',
        category: 'conditionals',
        explanation: `🇫🇷 <b>Le conditionnel type 3 et Wish + past perfect</b><br><br>
<b>1. Le conditionnel de type 3 — le regret au passé</b><br>
Structure : <b>If + past perfect (had + participe passé), would have + participe passé</b><br>
On l'utilise pour parler d'une <b>situation irréelle dans le passé</b> — quelque chose qui ne s'est PAS produit.<br>
<i>"If I had known, I would have helped."</i> = Je ne savais pas → je n'ai pas aidé.<br>
<i>"If she had studied, she would have passed."</i> = Elle n'a pas étudié → elle n'a pas réussi.<br><br>
<b>2. I wish I had known… — le regret</b><br>
<b>Wish + past perfect</b> exprime un <b>regret concernant le passé</b>.<br>
<i>"I wish I had studied harder."</i> = Je regrette de ne pas avoir étudié plus.<br>
<i>"I wish I hadn't said that."</i> = Je regrette d'avoir dit ça.<br><br>
🔑 <b>Point clé pour les francophones :</b> Le type 3 anglais fonctionne exactement comme en français !<br>
"Si j'avais su, j'aurais aidé" = "If I had known, I would have helped."<br>
"Si + plus-que-parfait → conditionnel passé" = "If + past perfect → would have + PP"`,
        rules: [
            '📐 **Type 3** : If + _had + PP_, would have + _PP_ → irréel dans le passé',
            '📐 **Wish + past perfect** (had + PP) → regret sur le passé',
            '📐 On ne met **JAMAIS** _would have_ dans la proposition avec **if** : ❌ _If I would have known…_',
            '📐 Contractions courantes : _I\'d have_ = I would have ; _wouldn\'t have_ = would not have',
            '📐 On peut aussi dire **could have + PP** ou **might have + PP** au lieu de _would have_ : _If I had known, I **could have** helped._'
        ],
        examples: [
            { text: "If I **had known** about the meeting, I **would have** attended.", fr: "Si j'avais su pour la réunion, j'y aurais assisté.", correct: true },
            { text: "She **would have** passed if she **had studied** more.", fr: "Elle aurait réussi si elle avait étudié davantage.", correct: true },
            { text: "I wish I **had taken** that job offer.", fr: "Je regrette de ne pas avoir accepté cette offre d'emploi.", correct: true },
            { text: "I wish I **hadn't spent** so much money.", fr: "Je regrette d'avoir dépensé autant d'argent.", correct: true },
            { text: "~~If I would have known~~ → **If I had known, I would have come.**", fr: "Si j'avais su, je serais venu.", correct: false, note: "Pas de 'would have' après 'if' ! C'est 'If + had + PP'." },
            { text: "~~I wish I didn't say that~~ → **I wish I hadn't said that.**", fr: "Je regrette d'avoir dit ça.", correct: false, note: "Pour un regret au passé, c'est 'wish + past perfect' (had + PP), pas le past simple." },
        ],
        tips: [
            "🇫🇷 Bonne nouvelle : le type 3 est quasi identique au français ! 'Si j'avais su, j'aurais fait' = 'If I had known, I would have done'.",
            "🇫🇷 L'erreur typique des francophones : 'If I would have known' (traduction mot à mot de 'si j'aurais su', qui est AUSSI fautif en français !).",
            "🇫🇷 'I wish I had…' (past perfect) = regret passé ≠ 'I wish I had…' (past simple) = souhait irréel présent. Contexte crucial !"
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "If I ___ the email, I would have replied. (see)", answer: "had seen", options: ["had seen", "saw", "would see", "have seen"], hint: "Irréel passé → If + past perfect (had + PP)" },
            { type: 'fill', difficulty: 'easy', question: "I wish I ___ to the party last night. (go)", answer: "had gone", options: ["had gone", "went", "would go", "have gone"], hint: "Regret au passé → wish + past perfect" },
            { type: 'fill', difficulty: 'easy', question: "She would have been happy if she ___ the news. (hear)", answer: "had heard", options: ["had heard", "heard", "would hear", "has heard"], hint: "If + past perfect dans le type 3" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "If they ___ earlier, they ___ the train. (leave / not miss)", answer: "had left, wouldn't have missed", options: ["had left, wouldn't have missed", "left, wouldn't miss", "had left, didn't miss", "would have left, hadn't missed"], hint: "Situation passée irréelle → Type 3 complet" },
            { type: 'fill', difficulty: 'medium', question: "I wish I ___ harder for the TOEIC. I failed by 10 points. (study)", answer: "had studied", options: ["had studied", "studied", "would study", "have studied"], hint: "Regret sur un événement passé → wish + had + PP" },
            { type: 'fill', difficulty: 'medium', question: "We ___ the project on time if we ___ more resources. (finish / have)", answer: "would have finished, had had", options: ["would have finished, had had", "finished, had", "would finish, had had", "would have finished, would have had"], hint: "Type 3 : would have + PP, if + had + PP. 'Had had' = past perfect de 'have'." },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "If the manager ___ the report, she ___ the error before the deadline. (review / catch)", answer: "had reviewed, would have caught", options: ["had reviewed, would have caught", "reviewed, would catch", "had reviewed, caught", "would have reviewed, had caught"], hint: "Type 3 avec vocabulaire professionnel" },
            { type: 'fill', difficulty: 'hard', question: "I wish I ___ that investment. I lost a lot of money. (not make)", answer: "hadn't made", options: ["hadn't made", "didn't make", "wouldn't make", "haven't made"], hint: "Regret passé négatif → wish + hadn't + PP" },
            { type: 'fill', difficulty: 'hard', question: "The accident ___ if the driver ___ attention. (not happen / pay)", answer: "wouldn't have happened, had paid", options: ["wouldn't have happened, had paid", "didn't happen, paid", "wouldn't happen, had paid", "wouldn't have happened, would have paid"], hint: "Type 3 négatif + affirmatif" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'hard', question: "If we ___ about the delay, we ___ alternative arrangements. (know / make)", answer: "had known, would have made", options: ["had known, would have made", "knew, would make", "had known, made", "would know, had made"] },
            { type: 'fill', difficulty: 'hard', question: "She wishes she ___ the opportunity when she had the chance. (take)", answer: "had taken", options: ["had taken", "took", "would take", "has taken"] },
            { type: 'fill', difficulty: 'medium', question: "I ___ you if I ___ your number. But I didn't have it. (call / have)", answer: "would have called, had had", options: ["would have called, had had", "called, had", "would call, had had", "would have called, had"] },
            { type: 'fill', difficulty: 'hard', question: "If the shipment ___ on time, the client ___ the contract. (arrive / not cancel)", answer: "had arrived, wouldn't have cancelled", options: ["had arrived, wouldn't have cancelled", "arrived, wouldn't cancel", "had arrived, didn't cancel", "would have arrived, hadn't cancelled"] },
        ]
    },

    // ===== UNIT 41 — Wish =====
    41: {
        id: 41,
        title: 'Wish',
        category: 'conditionals',
        explanation: `🇫🇷 <b>Wish — Exprimer des souhaits et des regrets</b><br><br>
Le verbe <b>wish</b> s'utilise de trois façons principales :<br><br>
<b>1. Wish + past simple → souhait irréel au présent</b><br>
On regrette que la situation actuelle soit différente.<br>
<i>"I wish I knew the answer."</i> = J'aimerais connaître la réponse (mais je ne la connais pas).<br>
<i>"I wish I were taller."</i> = J'aimerais être plus grand (mais je ne le suis pas).<br><br>
<b>2. Wish + past perfect → regret au passé</b><br>
On regrette quelque chose qui s'est (ou ne s'est pas) produit dans le passé.<br>
<i>"I wish I had studied harder."</i> = Je regrette de ne pas avoir étudié plus.<br><br>
<b>3. Wish + would → frustration / demande de changement</b><br>
On exprime son <b>agacement</b> face à une situation, ou on veut que quelqu'un/quelque chose <b>change</b>.<br>
<i>"I wish it would stop raining."</i> = Si seulement il arrêtait de pleuvoir !<br>
<i>"I wish you wouldn't make so much noise."</i> = J'aimerais que tu ne fasses pas autant de bruit.<br><br>
⚠️ <b>Attention :</b> On ne dit PAS <i>"I wish I would"</i> — on ne peut pas utiliser wish + would pour le <b>même sujet</b>. On dit <i>"I wish I could"</i> ou <i>"I wish I knew"</i>.`,
        rules: [
            '📐 **Wish + past simple** → souhait irréel au **présent** : _I wish I **had** more time._',
            '📐 **Wish + past perfect** → regret au **passé** : _I wish I **had known** earlier._',
            '📐 **Wish + would** → **frustration** ou demande de changement : _I wish he **would** listen._',
            '📐 On ne combine PAS **wish + would** avec le **même sujet** : ❌ _I wish I would_ → ✅ _I wish I could_',
            '📐 **If only** = **I wish** (plus emphatique) : _If only I **were** rich!_ = _I wish I **were** rich!_'
        ],
        examples: [
            { text: "I wish I **spoke** fluent English.", fr: "J'aimerais parler anglais couramment.", correct: true },
            { text: "I wish I **had listened** to your advice.", fr: "Je regrette de ne pas avoir écouté ton conseil.", correct: true },
            { text: "I wish it **would** stop raining.", fr: "Si seulement il arrêtait de pleuvoir !", correct: true },
            { text: "If only I **had** more money!", fr: "Si seulement j'avais plus d'argent !", correct: true },
            { text: "~~I wish I would be rich~~ → **I wish I were rich.**", fr: "J'aimerais être riche.", correct: false, note: "On ne dit pas 'I wish I would'. Pour le même sujet, on utilise le past simple ou 'could'." },
            { text: "~~I wish I can help~~ → **I wish I could help.**", fr: "J'aimerais pouvoir aider.", correct: false, note: "Après 'wish', on met 'could' (past), pas 'can' (present)." },
        ],
        tips: [
            "🇫🇷 'I wish + past simple' ≈ 'J'aimerais…' ou 'Si seulement + imparfait'. 'I wish + past perfect' ≈ 'Je regrette de…' ou 'Si seulement + plus-que-parfait'.",
            "🇫🇷 'I wish he would…' exprime l'agacement → la personne ne veut PAS changer son comportement, et ça nous énerve.",
            "🇫🇷 'If only' est plus dramatique que 'I wish' — c'est l'équivalent de 'Si seulement…!' avec un point d'exclamation."
        ],
        exercises: [
            // EASY x3
            { type: 'fill', difficulty: 'easy', question: "I wish I ___ a better job. (have)", answer: "had", options: ["had", "have", "would have", "am having"], hint: "Souhait irréel présent → wish + past simple" },
            { type: 'fill', difficulty: 'easy', question: "I wish I ___ that movie yesterday. It was great. (see)", answer: "had seen", options: ["had seen", "saw", "would see", "have seen"], hint: "Regret au passé → wish + past perfect" },
            { type: 'fill', difficulty: 'easy', question: "I wish it ___ stop raining! (would)", answer: "would", options: ["would", "will", "could", "did"], hint: "Frustration face à la pluie → wish + would" },
            // MEDIUM x3
            { type: 'fill', difficulty: 'medium', question: "She wishes she ___ drive. She has to take the bus every day. (can)", answer: "could", options: ["could", "can", "would", "is able to"], hint: "Souhait irréel présent avec un modal → 'can' devient 'could'" },
            { type: 'fill', difficulty: 'medium', question: "I wish you ___ interrupting me when I'm speaking! (stop — frustration)", answer: "would stop", options: ["would stop", "stopped", "stop", "had stopped"], hint: "Agacement → wish + would (le sujet est 'you', pas 'I')" },
            { type: 'fill', difficulty: 'medium', question: "If only we ___ about the problem sooner. We could have fixed it. (know)", answer: "had known", options: ["had known", "knew", "would know", "know"], hint: "Regret passé avec 'if only' → same as wish + past perfect" },
            // HARD x3
            { type: 'fill', difficulty: 'hard', question: "I wish the government ___ more to fight climate change. (do — frustration)", answer: "would do", options: ["would do", "did", "does", "had done"], hint: "Frustration face à l'inaction → wish + would (sujet différent)" },
            { type: 'fill', difficulty: 'hard', question: "He wishes he ___ so rude to his colleague yesterday. (not be)", answer: "hadn't been", options: ["hadn't been", "wasn't", "wouldn't be", "isn't"], hint: "Regret sur un comportement passé → wish + past perfect négatif" },
            { type: 'fill', difficulty: 'hard', question: "I wish I ___ help you, but I'm not qualified. (can)", answer: "could", options: ["could", "can", "would", "had been able to"], hint: "Je ne PEUX pas aider maintenant → souhait irréel présent → wish + could" },
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: "I wish I ___ closer to my workplace. The commute is exhausting. (live)", answer: "lived", options: ["lived", "live", "would live", "had lived"] },
            { type: 'fill', difficulty: 'hard', question: "She wishes she ___ that email. Now everyone is upset. (not send)", answer: "hadn't sent", options: ["hadn't sent", "didn't send", "wouldn't send", "doesn't send"] },
            { type: 'fill', difficulty: 'hard', question: "I wish my neighbors ___ playing loud music at night! (stop — frustration)", answer: "would stop", options: ["would stop", "stopped", "had stopped", "stop"] },
            { type: 'fill', difficulty: 'hard', question: "If only I ___ before signing the contract. (read it)", answer: "had read it", options: ["had read it", "read it", "would read it", "could read it"] },
        ]
    },
};
