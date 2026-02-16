// ============================================
// Grammar Lessons — Articles & Nouns (Units 69-81)
// French explanations for French-speaking learners
// ============================================

export const grammarLessonsArticlesNouns = {

    69: {
        id: 69, title: 'Countable and uncountable nouns (1)', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Noms dénombrables et indénombrables</b><br><br>
En anglais, les noms sont soit <b>dénombrables</b> (countable) — on peut les compter : a book, two books — soit <b>indénombrables</b> (uncountable) — on ne les compte PAS : water, music, information.<br><br>
⚠️ <b>Le piège pour les francophones</b> : beaucoup de noms dénombrables en français sont INDÉNOMBRABLES en anglais !<br>
• <b>information</b> (indénombrable) : <i>some information</i> (PAS ~~an information~~, PAS ~~informations~~)<br>
• <b>advice</b> : <i>a piece of advice</i> (PAS ~~an advice~~)<br>
• <b>furniture</b> : <i>some furniture</i> (PAS ~~furnitures~~)<br>
• <b>news</b> : <i>The news <b>is</b> good.</i> (singulier !)<br>
• <b>luggage / baggage</b> : <i>a piece of luggage</i>`,
        rules: [
            '📐 **Dénombrables** : peuvent être au singulier ou pluriel. Utilisent a/an au singulier : _**a** book, **an** apple, two books_',
            '📐 **Indénombrables** : PAS de pluriel, PAS de a/an. Utilisent **some / much / a lot of** : _some water, much time, a lot of money_',
            '📐 **Indénombrables courants** : information, advice, furniture, news, luggage, equipment, progress, research, work, weather, traffic, accommodation',
            '📐 Pour compter un indénombrable → **a piece of / a bit of / a glass of** : _a piece of **advice**, a glass of **water**_',
            '📐 **news** est TOUJOURS singulier : _The news **is** good._ (PAS ~~are~~)'
        ],
        examples: [
            { text: "Can you give me some **information**?", fr: "Peux-tu me donner des informations ? (information = indénombrable)", correct: true },
            { text: "She gave me a **piece of advice**.", fr: "Elle m'a donné un conseil.", correct: true },
            { text: "The **furniture** in the office is new.", fr: "Les meubles du bureau sont neufs. (furniture = singulier)", correct: true },
            { text: "~~I need an information~~ → I need **some information**.", fr: "JAMAIS 'an information' !", correct: false, note: "information = indénombrable → some information" },
            { text: "~~The news are~~ good → The news **is** good.", fr: "news = singulier en anglais !", correct: false, note: "news + verbe singulier" }
        ],
        tips: [
            "🇫🇷 Les pièges classiques : 'une information' ❌ → 'some information' ou 'a piece of information' ✅",
            "💡 Liste à mémoriser : information, advice, furniture, news, luggage, equipment, progress, research → TOUS indénombrables !",
            "⚠️ TOEIC : 'equipment' et 'information' apparaissent très souvent. Pas de pluriel !"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'Can I have some _____ ? (information)', answer: "information", options: ["information", "informations", "an information", "the informations"], hint: "information = indénombrable" },
            { type: 'fill', difficulty: 'easy', question: 'She bought two _____ of furniture.', answer: "pieces", options: ["pieces", "piece", "furnitures", "items"], hint: "furniture = indénombrable → a piece of" },
            { type: 'fill', difficulty: 'easy', question: 'The news _____ (be) very worrying today.', answer: "is", options: ["is", "are", "were", "been"], hint: "news = singulier" },
            { type: 'fill', difficulty: 'medium', question: 'He has a lot of _____ to do today. (work)', answer: "work", options: ["work", "works", "working", "a work"] },
            { type: 'fill', difficulty: 'medium', question: 'We need to buy some new _____ for the office.', answer: "equipment", options: ["equipment", "equipments", "an equipment", "equipping"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She gave me a piece of advice.", options: ["She gave me a piece of advice.", "She gave me an advice.", "She gave me some advices."] },
            { type: 'fill', difficulty: 'hard', question: 'The company has made significant _____ this quarter.', answer: "progress", options: ["progress", "progresses", "a progress", "progressions"] },
            { type: 'fill', difficulty: 'hard', question: 'How much _____ do you have?', answer: "luggage", options: ["luggage", "luggages", "a luggage", "baggages"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I need to do some researches on this topic.", options: ["I need to do some researches on this topic.", "The traffic is terrible today.", "She has a lot of experience in marketing."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All _____ must be clearly labelled. (luggage)', answer: "luggage", options: ["luggage", "luggages", "the luggages", "a luggage"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The equipment was delivered this morning.", options: ["The equipment was delivered this morning.", "The equipments were delivered this morning.", "An equipment was delivered this morning."] },
            { type: 'fill', difficulty: 'hard', question: 'We need more _____ before making a decision. (information)', answer: "information", options: ["information", "informations", "an information", "the informations"] },
            { type: 'fill', difficulty: 'hard', question: 'The research _____ (show) promising results.', answer: "shows", options: ["shows", "show", "are showing", "have shown"] }
        ]
    },

    70: {
        id: 70, title: 'Countable and uncountable nouns (2)', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Noms à double nature : dénombrables ET indénombrables</b><br><br>
Certains noms peuvent être les deux, avec un sens différent :<br><br>
• <b>paper</b> (indénombrable) = le papier (matière) / <b>a paper</b> (dénombrable) = un journal, un article<br>
• <b>room</b> (indénombrable) = de l'espace / <b>a room</b> (dénombrable) = une pièce<br>
• <b>experience</b> (indénombrable) = l'expérience (compétence) / <b>an experience</b> (dénombrable) = une expérience vécue<br>
• <b>time</b> (indénombrable) = le temps / <b>a time</b> (dénombrable) = une fois, une période<br>
• <b>glass</b> (indénombrable) = le verre (matière) / <b>a glass</b> (dénombrable) = un verre (récipient)`,
        rules: [
            '📐 **coffee/tea** : indénombrable = la boisson / dénombrable = _**a** coffee_ = une tasse de café',
            '📐 **experience** : indénombrable = compétence / dénombrable = _**an** experience_ = un événement vécu',
            '📐 **paper** : indénombrable = matière / dénombrable = un document/journal',
            '📐 **room** : indénombrable = espace (_no room_) / dénombrable = une pièce (_three rooms_)',
            '📐 **hair** : indénombrable = les cheveux (en général) / dénombrable = _**a** hair_ = un cheveu'
        ],
        examples: [
            { text: "She has a lot of **experience**. (indénombrable = compétence)", fr: "Elle a beaucoup d'expérience.", correct: true },
            { text: "It was an amazing **experience**. (dénombrable = événement)", fr: "C'était une expérience incroyable.", correct: true },
            { text: "I'd like **a coffee**, please. (= une tasse de café)", fr: "Je voudrais un café, s'il vous plaît.", correct: true },
            { text: "There's no **room** for all this luggage. (= espace)", fr: "Il n'y a pas de place pour tous ces bagages.", correct: true },
            { text: "The hotel has 200 **rooms**. (= pièces)", fr: "L'hôtel a 200 chambres.", correct: true }
        ],
        tips: [
            "🇫🇷 Le contexte détermine si le nom est dénombrable ou non. 'experience' => beaucoup d'expérience (indénombrable) vs une expérience marquante (dénombrable).",
            "💡 'Two coffees' est courant à l'oral = deux tasses de café. C'est correct !",
            "⚠️ 'hair' au pluriel (hairs) = des poils individuels. 'She has beautiful hair' (cheveux en général) ≠ 'There are hairs on the sofa' (des poils)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I\'d like _____ coffee, please. (une tasse)', answer: "a", options: ["a", "some", "the", "an"], hint: "Dénombrable = une tasse" },
            { type: 'fill', difficulty: 'easy', question: 'She has long dark _____.', answer: "hair", options: ["hair", "hairs", "a hair", "the hairs"], hint: "Cheveux en général = indénombrable" },
            { type: 'fill', difficulty: 'easy', question: 'There isn\'t enough _____ in the car for everyone.', answer: "room", options: ["room", "rooms", "a room", "the room"], hint: "Espace = indénombrable" },
            { type: 'fill', difficulty: 'medium', question: 'He doesn\'t have much _____ in this field. (compétence)', answer: "experience", options: ["experience", "experiences", "an experience", "the experiences"] },
            { type: 'fill', difficulty: 'medium', question: 'Could I have two _____, please? (boissons)', answer: "coffees", options: ["coffees", "coffee", "a coffee", "the coffee"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase utilise "paper" comme indénombrable ?', answer: "I need some paper to write on.", options: ["I need some paper to write on.", "I read an interesting paper yesterday.", "She published several papers."] },
            { type: 'fill', difficulty: 'hard', question: 'Living abroad was _____ incredible experience.', answer: "an", options: ["an", "a", "the", "—"], hint: "Une expérience vécue = dénombrable" },
            { type: 'fill', difficulty: 'hard', question: 'There were several grey _____ on his jacket.', answer: "hairs", options: ["hairs", "hair", "a hair", "the hair"] },
            { type: 'correct', difficulty: 'hard', question: 'Dans quelle phrase "time" est dénombrable ?', answer: "I've been there many times.", options: ["I've been there many times.", "I don't have much time.", "Time flies when you're having fun."] }
        ],
        evaluation: [
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She has 10 years of experience in marketing.", options: ["She has 10 years of experience in marketing.", "She has 10 years of experiences in marketing.", "She has 10 years of an experience in marketing."] },
            { type: 'fill', difficulty: 'hard', question: 'The company has published several research _____ this year.', answer: "papers", options: ["papers", "paper", "a paper", "researches"] },
            { type: 'fill', difficulty: 'hard', question: 'This room doesn\'t have enough natural _____.', answer: "light", options: ["light", "lights", "a light", "the lights"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "Could we have three waters, please?", options: ["Could we have three waters, please?", "Could we have three water, please?", "Could we have three of water, please?"] }
        ]
    },

    71: {
        id: 71, title: 'Countable nouns with a/an and some', category: 'articles-nouns',
        explanation: `🇫🇷 <b>L'emploi de a/an et some avec les noms dénombrables</b><br><br>
<b>a/an</b> = UN, UNE (singulier uniquement)<br>
• <b>a</b> devant une consonne : <i>a book, a car, a university</i> (attention, « u » se prononce /juː/)<br>
• <b>an</b> devant un son voyelle : <i>an apple, an hour</i> (le « h » est muet)<br><br>
<b>some</b> = DES, QUELQUES (pluriel ou indénombrable)<br>
• <i>I bought <b>some</b> books.</i> = J'ai acheté des livres.<br>
• <i>I need <b>some</b> water.</i> = J'ai besoin d'eau.<br><br>
⚠️ <b>Piège :</b> En français, on dit souvent « des » sans y penser. En anglais, on utilise <b>some</b> (affirmatif) ou rien du tout (sens général) :<br>
• <i>I like <b>∅</b> dogs.</i> = J'aime les chiens. (en général → pas d'article)<br>
• <i>There are <b>some</b> dogs in the park.</i> = Il y a des chiens dans le parc. (quelques-uns)`,
        rules: [
            '📐 **a** devant un son consonne : _a book, a university_ (le « u » de university = /juː/)',
            '📐 **an** devant un son voyelle : _an apple, an hour, an MBA_ (le « h » muet, le « M » = /em/)',
            '📐 **some** en phrase affirmative pour « des/quelques » : _I bought **some** bananas._',
            '📐 **any** en questions et négations : _Do you have **any** questions? / I don\'t have **any** money._',
            '📐 **∅ (pas d\'article)** pour les généralités : _**∅** Dogs are loyal animals._ (Les chiens en général)'
        ],
        examples: [
            { text: "She's **a** teacher at **a** university.", fr: "Elle est professeur dans une université.", correct: true },
            { text: "I had **an** interesting idea.", fr: "J'ai eu une idée intéressante. (an devant voyelle)", correct: true },
            { text: "I bought **some** new clothes yesterday.", fr: "J'ai acheté des vêtements neufs hier.", correct: true },
            { text: "Do you have **any** brothers or sisters?", fr: "As-tu des frères et sœurs ? (any en question)", correct: true },
            { text: "**∅** Music makes people happy.", fr: "La musique rend les gens heureux. (généralité → pas d'article)", correct: true }
        ],
        tips: [
            "🇫🇷 'a' ou 'an' dépend du SON, pas de la lettre ! 'a university' (son /j/) mais 'an hour' (h muet).",
            "💡 En français : 'Je suis professeur'. En anglais : 'I am A teacher'. On a BESOIN de l'article pour les métiers !",
            "⚠️ 'some' s'utilise aussi pour offrir/proposer : 'Would you like some coffee?' (Voulez-vous du café ?)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She\'s _____ doctor.', answer: "a", options: ["a", "an", "the", "—"], hint: "Métier → a/an" },
            { type: 'fill', difficulty: 'easy', question: 'I had _____ egg for breakfast.', answer: "an", options: ["an", "a", "some", "the"], hint: "egg commence par une voyelle" },
            { type: 'fill', difficulty: 'easy', question: 'I bought _____ apples at the market.', answer: "some", options: ["some", "a", "an", "the"], hint: "Pluriel → some" },
            { type: 'fill', difficulty: 'medium', question: 'She goes to _____ university in London.', answer: "a", options: ["a", "an", "the", "—"], hint: "university commence par le son /j/" },
            { type: 'fill', difficulty: 'medium', question: 'He waited for _____ hour before leaving.', answer: "an", options: ["an", "a", "the", "some"], hint: "hour : le h est muet → son voyelle" },
            { type: 'fill', difficulty: 'medium', question: 'Are there _____ good restaurants near here?', answer: "any", options: ["any", "some", "a", "the"] },
            { type: 'fill', difficulty: 'hard', question: '_____ water is essential for life. (en général)', answer: "∅", options: ["∅", "The", "A", "Some"] },
            { type: 'fill', difficulty: 'hard', question: 'She\'s _____ honest person.', answer: "an", options: ["an", "a", "the", "—"], hint: "honest : le h est muet" },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "I am an engineer.", options: ["I am an engineer.", "I am engineer.", "I am the engineer."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Would you like _____ tea? (offre)', answer: "some", options: ["some", "any", "a", "the"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "She has an MBA from Harvard.", options: ["She has an MBA from Harvard.", "She has a MBA from Harvard.", "She has MBA from Harvard."] },
            { type: 'fill', difficulty: 'hard', question: '_____ good education is important for career success.', answer: "A", options: ["A", "An", "The", "∅"] },
            { type: 'fill', difficulty: 'hard', question: 'He applied for _____ position as _____ HR manager.', answer: "a … an", options: ["a … an", "the … a", "a … a", "the … an"] }
        ]
    },

    72: {
        id: 72, title: 'a/an and the', category: 'articles-nouns',
        explanation: `🇫🇷 <b>La grande différence entre a/an (indéfini) et the (défini)</b><br><br>
<b>a/an</b> = UN/UNE → on parle de quelque chose de <b>non spécifique</b>, pas encore identifié :<br>
<i>I saw <b>a</b> dog in the park.</i> (un chien — n'importe lequel, première mention)<br><br>
<b>the</b> = LE/LA/LES → on parle de quelque chose de <b>spécifique</b>, déjà connu :<br>
<i>I saw <b>a</b> dog in the park. <b>The</b> dog was very big.</i> (LE chien dont je viens de parler)<br><br>
<b>Règles principales :</b><br>
1. <b>Première mention → a/an</b> ; <b>deuxième mention → the</b><br>
2. <b>Unique au monde → the</b> : the sun, the moon, the internet<br>
3. <b>Contexte évident → the</b> : Can you close <b>the</b> door? (la porte qu'on voit)<br>
4. <b>Superlatifs → the</b> : the best, the most expensive`,
        rules: [
            '📐 **a/an** = première mention, non spécifique : _I bought **a** book._',
            '📐 **the** = déjà mentionné ou spécifique : _**The** book was very interesting._',
            '📐 **the** = unique : _**the** sun, **the** moon, **the** internet, **the** government_',
            '📐 **the** = contexte évident : _Can you open **the** window?_ (la fenêtre qu\'on voit)',
            '📐 **the** + superlatif : _She\'s **the** best student in the class._'
        ],
        examples: [
            { text: "I stayed at **a** hotel. **The** hotel was very comfortable.", fr: "J'ai logé dans un hôtel. L'hôtel était très confortable.", correct: true },
            { text: "**The** sun rises in **the** east.", fr: "Le soleil se lève à l'est. (unique)", correct: true },
            { text: "Can you turn off **the** light?", fr: "Peux-tu éteindre la lumière ? (contexte évident)", correct: true },
            { text: "She's **the** tallest person in our team.", fr: "C'est la plus grande de notre équipe. (superlatif)", correct: true },
            { text: "~~I went to the bed~~ → I went to **∅** bed.", fr: "Je suis allé me coucher. (expression figée)", correct: false, note: "go to bed / go to work / go to school = pas d'article" }
        ],
        tips: [
            "🇫🇷 En français, on dit 'le' / 'la' presque partout. En anglais, 'the' n'est utilisé que quand on sait de quoi on parle !",
            "💡 Astuce : si vous pouvez montrer du doigt ou que l'interlocuteur sait exactement de quoi vous parlez → the.",
            "⚠️ Expressions sans article : go to bed/work/school/church, at home, at night, by car/bus/train"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I saw _____ cat in the garden.', answer: "a", options: ["a", "the", "an", "—"], hint: "Première mention → a/an" },
            { type: 'fill', difficulty: 'easy', question: '_____ cat was sitting on the wall.', answer: "The", options: ["The", "A", "An", "—"], hint: "Déjà mentionné → the" },
            { type: 'fill', difficulty: 'easy', question: '_____ moon is very bright tonight.', answer: "The", options: ["The", "A", "An", "—"], hint: "Unique → the" },
            { type: 'fill', difficulty: 'medium', question: 'Can you pass me _____ salt, please?', answer: "the", options: ["the", "a", "some", "an"], hint: "Le sel sur la table (contexte évident)" },
            { type: 'fill', difficulty: 'medium', question: 'She\'s _____ best singer I\'ve ever heard.', answer: "the", options: ["the", "a", "an", "—"], hint: "Superlatif → the" },
            { type: 'fill', difficulty: 'medium', question: 'I go to _____ work by car every day.', answer: "∅", options: ["∅", "the", "a", "my"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The internet has changed the world.", options: ["The internet has changed the world.", "Internet has changed world.", "An internet has changed a world."] },
            { type: 'fill', difficulty: 'hard', question: 'He\'s _____ engineer. He works for _____ company in Berlin.', answer: "an … a", options: ["an … a", "the … the", "a … a", "an … the"] },
            { type: 'fill', difficulty: 'hard', question: 'I usually have _____ lunch at 1 pm.', answer: "∅", options: ["∅", "the", "a", "an"], hint: "Les repas → pas d'article" }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ report you submitted last week contained several errors.', answer: "The", options: ["The", "A", "An", "—"] },
            { type: 'fill', difficulty: 'hard', question: 'She was appointed _____ CEO of _____ company.', answer: "∅ … the", options: ["∅ … the", "the … the", "a … a", "the … a"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "He goes to work by bus.", options: ["He goes to work by bus.", "He goes to the work by the bus.", "He goes to a work by a bus."] },
            { type: 'fill', difficulty: 'hard', question: '_____ CEO mentioned in _____ email that _____ merger would be finalized by June.', answer: "The … the/an … the", options: ["The … the/an … the", "A … a … a", "The … the … a", "— … an … the"] }
        ]
    },

    73: {
        id: 73, title: 'the (1) — specific or general?', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Quand utiliser THE et quand l'omettre</b><br><br>
<b>The = spécifique, défini.</b> L'interlocuteur sait de quoi on parle.<br>
<b>∅ (pas d'article) = général.</b> On parle de choses en général.<br><br>
<b>Comparaison :</b><br>
• <i>I like <b>∅</b> music.</i> = J'aime la musique. (en général)<br>
• <i>I didn't like <b>the</b> music at the party.</i> = Je n'ai pas aimé la musique à la fête. (spécifique)<br><br>
• <i><b>∅</b> Children learn quickly.</i> = Les enfants apprennent vite. (en général)<br>
• <i><b>The</b> children in my class are very smart.</i> = Les enfants de ma classe sont très intelligents. (spécifique)<br><br>
⚠️ <b>En français</b>, on utilise « le/la/les » même pour les généralités. Pas en anglais !`,
        rules: [
            '📐 **∅** pour les généralités : _**∅** Life is beautiful._ _**∅** Dogs are loyal._',
            '📐 **the** quand on précise : _**The** life of a doctor is demanding._ _**The** dogs in my neighbourhood are noisy._',
            '📐 **∅** avec les noms abstraits en général : _**∅** Love is important. **∅** Education is key._',
            '📐 **the** + complément qui précise : _**The** education system in France is different._',
            '📐 **∅** avec les repas, sports, matières : _I like **∅** tennis. She studies **∅** history._'
        ],
        examples: [
            { text: "**∅** Money doesn't buy happiness.", fr: "L'argent n'achète pas le bonheur. (généralité)", correct: true },
            { text: "**The** money you lent me was very helpful.", fr: "L'argent que tu m'as prêté m'a beaucoup aidé. (spécifique)", correct: true },
            { text: "**∅** Crime is a serious problem.", fr: "La criminalité est un problème grave. (en général)", correct: true },
            { text: "**The** crime rate has decreased.", fr: "Le taux de criminalité a diminué. (spécifique)", correct: true },
            { text: "~~The life is short~~ → **∅** Life is short.", fr: "La vie est courte. (généralité → pas de the)", correct: false }
        ],
        tips: [
            "🇫🇷 Piège n°1 des francophones : en français, 'la musique', 'les enfants', 'l'argent' ont un article même en général. PAS en anglais !",
            "💡 Test : si vous pouvez remplacer par 'en général', pas de 'the'. 'Music is beautiful' (la musique en général).",
            "⚠️ 'the' + of/in/at : 'the history OF France', 'the people IN this room' → quand on précise, on met 'the'."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ cats are independent animals. (en général)', answer: "∅", options: ["∅", "The", "A", "Some"], hint: "Généralité → pas d'article" },
            { type: 'fill', difficulty: 'easy', question: '_____ cats next door are very noisy.', answer: "The", options: ["The", "∅", "A", "Some"], hint: "Spécifique → the" },
            { type: 'fill', difficulty: 'easy', question: 'I love _____ chocolate.', answer: "∅", options: ["∅", "the", "a", "some"], hint: "J'aime le chocolat en général" },
            { type: 'fill', difficulty: 'medium', question: '_____ education is the key to success.', answer: "∅", options: ["∅", "The", "An", "A"], hint: "L'éducation en général" },
            { type: 'fill', difficulty: 'medium', question: '_____ education system needs reform.', answer: "The", options: ["The", "∅", "An", "A"], hint: "Le système éducatif (spécifique)" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "Life is too short to worry.", options: ["Life is too short to worry.", "The life is too short to worry.", "A life is too short to worry."] },
            { type: 'fill', difficulty: 'hard', question: '_____ unemployment is rising. _____ unemployment rate is now 8%.', answer: "∅ … The", options: ["∅ … The", "The … The", "∅ … ∅", "The … ∅"] },
            { type: 'fill', difficulty: 'hard', question: 'I like _____ Italian food, especially _____ pizza we had in Rome.', answer: "∅ … the", options: ["∅ … the", "the … the", "∅ … ∅", "the … ∅"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "History teaches us important lessons.", options: ["History teaches us important lessons.", "The history teaches us important lessons.", "A history teaches us important lessons."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ customers who participated in the survey will receive a gift.', answer: "The", options: ["The", "∅", "A", "Some"] },
            { type: 'fill', difficulty: 'hard', question: '_____ technology has transformed _____ way we work.', answer: "∅ … the", options: ["∅ … the", "The … the", "∅ … ∅", "The … a"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "The happiness is the most important thing in the life.", options: ["The happiness is the most important thing in the life.", "Happiness is the most important thing in life.", "Money can't buy happiness."] },
            { type: 'fill', difficulty: 'hard', question: '_____ quality of _____ products we sell is guaranteed.', answer: "The … the", options: ["The … the", "∅ … ∅", "The … ∅", "∅ … the"] }
        ]
    },

    74: {
        id: 74, title: 'the (2) — geographical names, institutions', category: 'articles-nouns',
        explanation: `🇫🇷 <b>L'article "the" avec les noms propres géographiques et les institutions</b><br><br>
<b>PAS de "the" avec :</b><br>
• Continents : <b>∅</b> Europe, <b>∅</b> Africa<br>
• Pays (en général) : <b>∅</b> France, <b>∅</b> Japan, <b>∅</b> Brazil<br>
• Villes : <b>∅</b> Paris, <b>∅</b> London<br>
• Lacs : <b>∅</b> Lake Geneva<br>
• Montagnes (pic) : <b>∅</b> Mount Everest<br><br>
<b>"The" avec :</b><br>
• Pays avec Republic/Kingdom/States : <b>the</b> United States, <b>the</b> UK<br>
• Océans, mers, rivières : <b>the</b> Atlantic, <b>the</b> Mediterranean, <b>the</b> Seine<br>
• Chaînes de montagnes : <b>the</b> Alps, <b>the</b> Himalayas<br>
• Déserts : <b>the</b> Sahara<br>
• Hotels, cinémas, théâtres : <b>the</b> Hilton, <b>the</b> Odeon`,
        rules: [
            '📐 **PAS de the** : continents, pays (sauf Republic/Kingdom/States), villes, lacs, pics : _∅ France, ∅ Paris, ∅ Lake Geneva, ∅ Mount Everest_',
            '📐 **The** + pays composés : _**the** United States, **the** United Kingdom, **the** Czech Republic_',
            '📐 **The** + océans, mers, rivières, canaux : _**the** Pacific, **the** Seine, **the** English Channel_',
            '📐 **The** + chaînes de montagnes, archipels, déserts : _**the** Alps, **the** Sahara, **the** Canary Islands_',
            '📐 **PAS de the** : rues, parcs, gares, aéroports nommés : _∅ Oxford Street, ∅ Hyde Park, ∅ Heathrow Airport_'
        ],
        examples: [
            { text: "**∅** France is in **∅** Europe.", fr: "La France est en Europe.", correct: true },
            { text: "**The** United States is a large country.", fr: "Les États-Unis sont un grand pays.", correct: true },
            { text: "**The** Amazon is **the** longest river in **∅** South America.", fr: "L'Amazone est le plus long fleuve d'Amérique du Sud.", correct: true },
            { text: "We stayed at **the** Hilton near **∅** Oxford Street.", fr: "Nous sommes restés au Hilton près d'Oxford Street.", correct: true },
            { text: "~~the France~~ → **∅** France", fr: "Pas d'article avec les noms de pays simples !", correct: false }
        ],
        tips: [
            "🇫🇷 En français : 'la France', 'les États-Unis'. En anglais : '∅ France' mais 'the United States'. La règle dépend de la composition du nom !",
            "💡 Astuce : 'Republic', 'Kingdom', 'States', 'Union' dans le nom → THE. Sinon, pas d'article.",
            "⚠️ Rues et parcs : PAS de the. 'Oxford Street', 'Central Park', 'Heathrow Airport' — mais 'the White House', 'the Eiffel Tower' (bâtiments)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'I live in _____ United Kingdom.', answer: "the", options: ["the", "∅", "a", "an"], hint: "United Kingdom → the" },
            { type: 'fill', difficulty: 'easy', question: '_____ Paris is the capital of _____ France.', answer: "∅ … ∅", options: ["∅ … ∅", "The … the", "∅ … the", "The … ∅"], hint: "Ville + pays simple → pas de the" },
            { type: 'fill', difficulty: 'easy', question: 'We crossed _____ Atlantic by ship.', answer: "the", options: ["the", "∅", "an", "a"], hint: "Océan → the" },
            { type: 'fill', difficulty: 'medium', question: '_____ Mount Everest is in _____ Himalayas.', answer: "∅ … the", options: ["∅ … the", "The … the", "∅ … ∅", "The … ∅"] },
            { type: 'fill', difficulty: 'medium', question: 'We walked along _____ Champs-Élysées.', answer: "the", options: ["the", "∅", "a", "an"] },
            { type: 'fill', difficulty: 'medium', question: 'Have you ever been to _____ Lake Titicaca?', answer: "∅", options: ["∅", "the", "a", "an"] },
            { type: 'fill', difficulty: 'hard', question: '_____ Netherlands is below sea level.', answer: "The", options: ["The", "∅", "A", "An"] },
            { type: 'fill', difficulty: 'hard', question: 'He works on _____ Wall Street in _____ New York.', answer: "∅ … ∅", options: ["∅ … ∅", "the … ∅", "∅ … the", "the … the"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The Sahara Desert is in North Africa.", options: ["The Sahara Desert is in North Africa.", "Sahara Desert is in the North Africa.", "The Sahara Desert is in the North Africa."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Our office is near _____ Heathrow Airport.', answer: "∅", options: ["∅", "the", "a", "an"] },
            { type: 'fill', difficulty: 'hard', question: '_____ European Union was established by _____ Treaty of Maastricht.', answer: "The … the", options: ["The … the", "∅ … the", "The … ∅", "∅ … ∅"] },
            { type: 'fill', difficulty: 'hard', question: '_____ Philippines is located in _____ Pacific Ocean.', answer: "The … the", options: ["The … the", "∅ … the", "The … ∅", "∅ … ∅"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "He visited the Japan last year.", options: ["He visited the Japan last year.", "He visited Japan last year.", "He visited the United Kingdom last year."] }
        ]
    },

    75: {
        id: 75, title: 'the (3) — school, hospital, prison etc.', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Certains noms changent de sens avec ou sans "the"</b><br><br>
Quand on parle de la <b>fonction/activité</b>, PAS de "the" :<br>
• <i>go to <b>∅</b> school</i> = aller à l'école (comme élève)<br>
• <i>go to <b>∅</b> hospital</i> = aller à l'hôpital (comme patient)<br>
• <i>go to <b>∅</b> prison</i> = aller en prison (comme détenu)<br>
• <i>go to <b>∅</b> church</i> = aller à l'église (pour prier)<br>
• <i>go to <b>∅</b> bed</i> = aller se coucher<br><br>
Quand on parle du <b>bâtiment/lieu physique</b>, on utilise "the" :<br>
• <i>I went to <b>the</b> school to meet my son's teacher.</i> = Je suis allé à l'école (le bâtiment) pour voir le professeur.`,
        rules: [
            '📐 **∅ school/university/hospital/prison/church/bed/work/home** → pour la fonction habituelle',
            '📐 **the school/hospital/prison/church** → pour le bâtiment : _I went to **the** hospital to visit a friend._',
            '📐 **go to ∅ bed** (se coucher) ≠ _go to **the** bed_ (aller vers le meuble lit)',
            '📐 **at ∅ home / go ∅ home** (chez soi) : JAMAIS _~~at the home~~_',
            '📐 **at ∅ work** (au travail — activité) : _She\'s **at work**._ JAMAIS _~~at the work~~_'
        ],
        examples: [
            { text: "She's **at ∅ school** right now.", fr: "Elle est à l'école (comme élève).", correct: true },
            { text: "I went to **the school** to pick up my daughter.", fr: "Je suis allé à l'école (le bâtiment) pour chercher ma fille.", correct: true },
            { text: "He's **in ∅ hospital**. (British)", fr: "Il est à l'hôpital (comme patient).", correct: true },
            { text: "I'm going **∅ home** now.", fr: "Je rentre chez moi. (PAS 'to the home')", correct: true },
            { text: "~~I go to the bed at 10~~ → I go to **∅** bed at 10.", fr: "Se coucher → go to bed sans article", correct: false }
        ],
        tips: [
            "🇫🇷 'aller à l'école' se dit 'go to school' (sans article) en anglais. Le 'the' reviendrait seulement si on parle du bâtiment.",
            "💡 home est spécial : JAMAIS 'the home' en anglais courant. 'go home', 'at home', 'stay home'.",
            "⚠️ TOEIC : 'at work' (au travail), 'in hospital' (à l'hôpital comme patient) — très courant sans article."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'The children are at _____ school.', answer: "∅", options: ["∅", "the", "a", "their"], hint: "Comme élèves → pas d'article" },
            { type: 'fill', difficulty: 'easy', question: 'She goes to _____ bed at 10 pm.', answer: "∅", options: ["∅", "the", "a", "her"], hint: "Se coucher → go to bed" },
            { type: 'fill', difficulty: 'easy', question: 'I\'m going _____ home now.', answer: "∅", options: ["∅", "to the", "at the", "to a"] },
            { type: 'fill', difficulty: 'medium', question: 'He\'s been in _____ prison for two years. (détenu)', answer: "∅", options: ["∅", "the", "a", "his"] },
            { type: 'fill', difficulty: 'medium', question: 'I went to _____ prison to visit my brother.', answer: "the", options: ["the", "∅", "a", "his"], hint: "Visite le bâtiment → the" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She's at work right now.", options: ["She's at work right now.", "She's at the work right now.", "She's at a work right now."] },
            { type: 'fill', difficulty: 'hard', question: 'He went to _____ university to study medicine.', answer: "∅", options: ["∅", "the", "a", "an"] },
            { type: 'fill', difficulty: 'hard', question: 'We visited _____ university to see the new campus.', answer: "the", options: ["the", "∅", "a", "an"], hint: "Visite du lieu → the" },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "I went to the home after work.", options: ["I went to the home after work.", "I went home after work.", "I went to the hospital to visit her."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All employees must be at _____ work by 9 am.', answer: "∅", options: ["∅", "the", "their", "a"] },
            { type: 'fill', difficulty: 'hard', question: 'She\'s studying at _____ Harvard University.', answer: "∅", options: ["∅", "the", "a", "an"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "He was sent to prison for fraud.", options: ["He was sent to prison for fraud.", "He was sent to the prison for fraud.", "He was sent to a prison for fraud."] },
            { type: 'fill', difficulty: 'hard', question: 'She finished _____ university last year and is now looking for _____ job.', answer: "∅ … a", options: ["∅ … a", "the … a", "∅ … the", "the … the"] }
        ]
    },

    76: {
        id: 76, title: 'Singular and plural', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Singulier et pluriel — les pièges de la formation</b><br><br>
<b>Règles de base :</b><br>
• La plupart : + <b>s</b> → book → book<b>s</b><br>
• Fin en -s, -sh, -ch, -x, -z : + <b>es</b> → bus → bus<b>es</b>, watch → watch<b>es</b><br>
• Fin en consonne + -y : y → <b>ies</b> → city → cit<b>ies</b> (MAIS: day → days)<br>
• Fin en -f/-fe : → <b>ves</b> → knife → kni<b>ves</b>, wife → wi<b>ves</b><br><br>
<b>Pluriels irréguliers :</b><br>
man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice, sheep → sheep, fish → fish<br><br>
<b>Noms toujours pluriels :</b> trousers, jeans, glasses, scissors, stairs<br>
<b>Noms singuliers en -s :</b> news, mathematics, physics, economics`,
        rules: [
            '📐 Règle générale : + **s** : _book → books, car → cars_',
            '📐 -s/-sh/-ch/-x : + **es** : _bus → buses, dish → dishes, box → boxes_',
            '📐 Consonne + -y → **ies** : _city → cities, party → parties_ (MAIS voyelle + y : _day → days_)',
            '📐 Pluriels irréguliers courants : _man → men, child → children, person → people, tooth → teeth_',
            '📐 Noms toujours **pluriels** : _trousers, jeans, glasses, scissors_ → _My trousers **are** blue._'
        ],
        examples: [
            { text: "There are many **children** in the park.", fr: "Il y a beaucoup d'enfants dans le parc.", correct: true },
            { text: "Most **people** agree with this decision.", fr: "La plupart des gens sont d'accord.", correct: true },
            { text: "These **scissors** are very sharp.", fr: "Ces ciseaux sont très aiguisés. (toujours pluriel)", correct: true },
            { text: "She has two beautiful **knives** in the kitchen.", fr: "Elle a deux beaux couteaux dans la cuisine. (knife → knives)", correct: true },
            { text: "~~Two childs~~ → Two **children**.", fr: "Pluriel irrégulier !", correct: false }
        ],
        tips: [
            "🇫🇷 'people' est le pluriel de 'person'. 'Two people' ✅ / 'Two persons' (très formel/juridique uniquement).",
            "💡 Les noms toujours pluriels (trousers, glasses, scissors) s'utilisent avec 'a pair of' : 'a pair of trousers'.",
            "⚠️ 'news' ressemble à un pluriel mais c'est SINGULIER : 'The news IS good.'"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'There are five _____ in my family. (person)', answer: "people", options: ["people", "persons", "peoples", "person"], hint: "person → people" },
            { type: 'fill', difficulty: 'easy', question: 'She has three _____. (child)', answer: "children", options: ["children", "childs", "childrens", "child"] },
            { type: 'fill', difficulty: 'easy', question: 'The _____ in this city are historic. (church)', answer: "churches", options: ["churches", "churchs", "churche", "church"] },
            { type: 'fill', difficulty: 'medium', question: 'I need a new pair of _____. (trouser)', answer: "trousers", options: ["trousers", "trouser", "trouseres", "trousering"] },
            { type: 'fill', difficulty: 'medium', question: 'Several _____ were injured in the accident. (woman)', answer: "women", options: ["women", "womans", "womens", "woman"] },
            { type: 'fill', difficulty: 'medium', question: 'Use these _____ to cut the ribbon. (scissor)', answer: "scissors", options: ["scissors", "scissor", "scissores", "scissoring"] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ on the shelf are new. (knife)', answer: "knives", options: ["knives", "knifes", "knifs", "knive"] },
            { type: 'fill', difficulty: 'hard', question: 'There are many _____ in the lake. (fish)', answer: "fish", options: ["fish", "fishes", "fishs", "fishes"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The phenomena were observed by scientists.", options: ["The phenomena were observed by scientists.", "The phenomenons were observed by scientists.", "The phenomenon were observed by scientists."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'All _____ must wear safety glasses. (person)', answer: "personnel", options: ["personnel", "persons", "peoples", "personal"] },
            { type: 'fill', difficulty: 'hard', question: 'The analysis produced interesting _____. (datum)', answer: "data", options: ["data", "datums", "datas", "datum"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The criteria for selection are strict.", options: ["The criteria for selection are strict.", "The criterias for selection are strict.", "The criterion for selection are strict."] },
            { type: 'fill', difficulty: 'hard', question: 'Several _____ met to discuss company policy. (man)', answer: "men", options: ["men", "mans", "mens", "man"] }
        ]
    },

    77: {
        id: 77, title: 'Noun + noun (a tennis ball, a bus driver)', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Les noms composés : nom + nom</b><br><br>
En anglais, on met souvent deux noms côte à côte pour créer un nom composé. Le <b>premier nom</b> fonctionne comme un adjectif et reste généralement au <b>singulier</b>.<br><br>
<b>Exemples :</b><br>
• <i>a <b>tennis</b> ball</i> = une balle de tennis<br>
• <i>a <b>bus</b> driver</i> = un chauffeur de bus<br>
• <i>a <b>coffee</b> cup</i> = une tasse à café<br><br>
⚠️ <b>Piège :</b> En français, on utilise « de » : un chauffeur <b>de</b> bus. En anglais, on juxtapose les noms SANS préposition !<br>
❌ <i>~~a driver of bus~~</i> → ✅ <i>a bus driver</i><br><br>
<b>Le premier nom reste singulier</b> (même si le sens est pluriel) :<br>
• <i>a <b>shoe</b> shop</i> = un magasin de chaussures (PAS ~~shoes shop~~)`,
        rules: [
            '📐 **Nom + nom** : le premier nom est "adjectif" → _a **bus** stop, a **car** park, a **phone** call_',
            '📐 Le premier nom reste au **singulier** : _a **shoe** shop_ (PAS ~~shoes shop~~)',
            '📐 Pas de préposition entre les deux : _a coffee **cup**_ (PAS ~~a cup of coffee~~ pour le type d\'objet)',
            '📐 Exceptions au singulier : _a **sports** car, a **clothes** shop, a **savings** account_ (toujours pluriel)',
            '📐 On peut enchaîner 3+ noms : _a **city centre** **car park**_ = un parking du centre-ville'
        ],
        examples: [
            { text: "She's a **bus driver**.", fr: "Elle est chauffeur de bus. (PAS 'a driver of bus')", correct: true },
            { text: "I need a new **phone charger**.", fr: "J'ai besoin d'un nouveau chargeur de téléphone.", correct: true },
            { text: "There's a **shoe shop** on the corner.", fr: "Il y a un magasin de chaussures au coin. (shoe = singulier !)", correct: true },
            { text: "He opened a **savings account** at the bank.", fr: "Il a ouvert un compte d'épargne à la banque. (exception : savings)", correct: true },
            { text: "~~a shoes shop~~ → a **shoe** shop", fr: "Le premier nom reste singulier !", correct: false }
        ],
        tips: [
            "🇫🇷 En français : 'une tasse DE café', 'un chauffeur DE bus'. En anglais : 'a coffee cup', 'a bus driver'. Pas de 'de' !",
            "💡 Ordre : le mot le plus important (la chose) vient en DERNIER. Bus driver = un driver (conducteur), pas un bus.",
            "⚠️ Pièges pluriels : 'a sports car', 'a clothes shop', 'a savings account' — ces mots sont toujours au pluriel."
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'She works as a _____ (taxi) driver.', answer: "taxi", options: ["taxi", "taxis", "taxi's", "taxies"], hint: "Premier nom = singulier" },
            { type: 'fill', difficulty: 'easy', question: 'I left my keys in the _____ (car) park.', answer: "car", options: ["car", "cars", "car's", "cares"] },
            { type: 'fill', difficulty: 'easy', question: 'Can I have a _____ (water) bottle?', answer: "water", options: ["water", "waters", "water's", "watery"] },
            { type: 'fill', difficulty: 'medium', question: 'He\'s the _____ (football) team captain.', answer: "football", options: ["football", "footballs", "football's", "footballing"] },
            { type: 'fill', difficulty: 'medium', question: 'I need to go to the _____ shop. (shoe)', answer: "shoe", options: ["shoe", "shoes", "shoe's", "shoeing"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "She has a savings account.", options: ["She has a savings account.", "She has a saving account.", "She has a save account."] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ _____ department handles all claims. (customer, service)', answer: "customer service", options: ["customer service", "customers service", "customer's service", "customers services"] },
            { type: 'fill', difficulty: 'hard', question: 'We need to review the _____ _____ report. (sales, performance)', answer: "sales performance", options: ["sales performance", "sale performance", "sales' performance", "selling performance"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The five-star hotel has a swimming pool.", options: ["The five-star hotel has a swimming pool.", "The five-stars hotel has a swimming pool.", "The five star's hotel has a swimming pool."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: 'Please submit your _____ (expense) report by Friday.', answer: "expense", options: ["expense", "expenses", "expense's", "expensing"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle combinaison est correcte ?', answer: "a ten-page document", options: ["a ten-page document", "a ten-pages document", "a ten page's document"] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ _____ _____ is on the third floor. (human, resources, department)', answer: "human resources department", options: ["human resources department", "human resource department", "humans resources department", "human's resources department"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "She bought a sports shoes.", options: ["She bought a sports shoes.", "She bought sports shoes.", "She bought a pair of sports shoes."] }
        ]
    },

    78: {
        id: 78, title: '\'s (the girl\'s name) and of …', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Le génitif ('s) et la construction avec "of"</b><br><br>
En anglais, pour exprimer la possession ou l'appartenance, on a deux options :<br><br>
<b>1. 's (génitif saxon)</b> — surtout pour les personnes et les animaux :<br>
• <i><b>Tom's</b> car</i> = la voiture de Tom<br>
• <i>My <b>sister's</b> friend</i> = l'amie de ma sœur<br><br>
<b>2. of</b> — surtout pour les choses et les concepts abstraits :<br>
• <i>the name <b>of</b> the book</i> = le nom du livre<br>
• <i>the end <b>of</b> the road</i> = le bout de la route<br><br>
⚠️ <b>Pluriel + 's :</b> Si le pluriel finit déjà par -s, on ajoute juste l'apostrophe :<br>
• <i>my <b>parents'</b> house</i> = la maison de mes parents<br>
• <i>the <b>children's</b> toys</i> = les jouets des enfants (children ne finit pas par -s)`,
        rules: [
            '📐 **\'s** pour les personnes : _**Tom\'s** car, my **mother\'s** job, the **manager\'s** office_',
            '📐 **Pluriel en -s** : juste l\'apostrophe → _my **parents\'** house, the **employees\'** requests_',
            '📐 **Pluriel irrégulier** (pas de -s) : → _the **children\'s** toys, the **women\'s** team_',
            '📐 **of** pour les choses/abstractions : _the top **of** the page, the end **of** the meeting_',
            '📐 **\'s** aussi pour le temps et les lieux : _**today\'s** meeting, **France\'s** economy, a **week\'s** holiday_'
        ],
        examples: [
            { text: "**Tom's** brother is a doctor.", fr: "Le frère de Tom est médecin.", correct: true },
            { text: "My **parents'** house is beautiful.", fr: "La maison de mes parents est belle. (pluriel en -s → apostrophe seule)", correct: true },
            { text: "The **children's** room is upstairs.", fr: "La chambre des enfants est à l'étage. (children → 's)", correct: true },
            { text: "The end **of** the movie was surprising.", fr: "La fin du film était surprenante. (choses → of)", correct: true },
            { text: "I'm taking a **week's** holiday.", fr: "Je prends une semaine de vacances. ('s pour le temps)", correct: true }
        ],
        tips: [
            "🇫🇷 En français : 'la voiture DE Tom'. En anglais : 'Tom'S car'. L'ordre est inversé !",
            "💡 Personnes → 's. Choses → of. C'est la règle de base, mais 's marche aussi pour le temps et les lieux.",
            "⚠️ Ne confondez pas : it's = it is / its = possessif. 'The company improved its profits.' (PAS it's)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: 'This is _____ book. (Sarah)', answer: "Sarah's", options: ["Sarah's", "Sarahs", "Sarah", "of Sarah"], hint: "Personne → 's" },
            { type: 'fill', difficulty: 'easy', question: 'The _____ room is very messy. (children)', answer: "children's", options: ["children's", "childrens'", "childrens", "children"], hint: "Pluriel irrégulier → 's" },
            { type: 'fill', difficulty: 'easy', question: 'The end _____ the story was unexpected.', answer: "of", options: ["of", "'s", "from", "to"], hint: "Chose → of" },
            { type: 'fill', difficulty: 'medium', question: 'My _____ car is in the garage. (parents)', answer: "parents'", options: ["parents'", "parent's", "parents", "parentes'"], hint: "Pluriel en -s → apostrophe seule" },
            { type: 'fill', difficulty: 'medium', question: 'I had three _____ holiday. (week)', answer: "weeks'", options: ["weeks'", "week's", "weeks", "week"], hint: "Temps + pluriel" },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "The company's headquarters are in London.", options: ["The company's headquarters are in London.", "The company headquarters are in London.", "The headquarter's of the company are in London."] },
            { type: 'fill', difficulty: 'hard', question: 'In _____ opinion, we should wait. (James)', answer: "James's", options: ["James's", "James'", "Jame's", "James"], hint: "Nom en -s → James's ou James'" },
            { type: 'fill', difficulty: 'hard', question: 'The _____ success is due to hard work. (company)', answer: "company's", options: ["company's", "companies'", "company", "companys'"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The women's restroom is on the left.", options: ["The women's restroom is on the left.", "The womens' restroom is on the left.", "The womens restroom is on the left."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ meeting has been rescheduled. (today)', answer: "Today's", options: ["Today's", "Todays", "Todays'", "Of today"] },
            { type: 'fill', difficulty: 'hard', question: 'The _____ annual report was published yesterday. (CEO)', answer: "CEO's", options: ["CEO's", "CEOs", "CEO", "CEOs'"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "The employees' complaints were addressed by management.", options: ["The employees' complaints were addressed by management.", "The employee's complaints were addressed by management.", "The employees's complaints were addressed by management."] },
            { type: 'fill', difficulty: 'hard', question: 'At the end _____ the quarter, profits had risen by 12%.', answer: "of", options: ["of", "'s", "from", "at"] }
        ]
    },

    79: {
        id: 79, title: 'each and every', category: 'articles-nouns',
        explanation: `🇫🇷 <b>Each et every — chaque, tous les</b><br><br>
<b>each</b> et <b>every</b> se traduisent souvent par « chaque » en français, mais il y a une nuance :<br><br>
<b>every</b> = chaque / tous les (on pense au GROUPE entier)<br>
<i><b>Every</b> student must register.</i> = Chaque étudiant doit s'inscrire. (= tous les étudiants sans exception)<br><br>
<b>each</b> = chaque / chacun (on pense aux INDIVIDUS séparément)<br>
<i><b>Each</b> student received a different task.</i> = Chaque étudiant a reçu une tâche différente. (= chacun individuellement)<br><br>
⚠️ <b>each</b> fonctionne comme pronom : <i><b>Each</b> of the students received a prize.</i><br>
<b>every</b> n'est JAMAIS pronom seul. On utilise <b>everyone / everybody / everything</b>.`,
        rules: [
            '📐 **every** + nom singulier = tous sans exception (groupe) : _**Every** day I walk to work._',
            '📐 **each** + nom singulier = chacun individuellement : _**Each** room has its own bathroom._',
            '📐 **each** peut être pronom : _We **each** have a key._ / _**Each** of us has a key._',
            '📐 **every** → JAMAIS pronom seul. Utiliser **everyone / everything / everywhere** : _**Everyone** is here._',
            '📐 **every + nombre** = tous les X : _**Every** two weeks_ (toutes les deux semaines)'
        ],
        examples: [
            { text: "**Every** morning I drink coffee.", fr: "Chaque matin, je bois du café. (tous les matins sans exception)", correct: true },
            { text: "**Each** team member has a specific role.", fr: "Chaque membre de l'équipe a un rôle spécifique. (individuellement)", correct: true },
            { text: "We **each** received a bonus.", fr: "Nous avons chacun reçu un bonus.", correct: true },
            { text: "The meetings are held **every** two weeks.", fr: "Les réunions ont lieu toutes les deux semaines.", correct: true },
            { text: "~~Every of the students~~ → **Each** of the students.", fr: "'every' ne peut pas être suivi de 'of the' !", correct: false }
        ],
        tips: [
            "🇫🇷 En français, 'chaque' fonctionne pour les deux. En anglais, pensez : every = TOUT le groupe / each = les individus UN PAR UN.",
            "💡 'every day' (deux mots) = chaque jour. 'everyday' (un mot) = quotidien (adjectif). 'Everyday tasks' vs 'I go every day'.",
            "⚠️ each of + pluriel + verbe singulier : 'Each of the employees HAS a badge.' (PAS have)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ student must bring a notebook. (tous sans exception)', answer: "Every", options: ["Every", "Each", "All", "Any"], hint: "Tous → every" },
            { type: 'fill', difficulty: 'easy', question: '_____ room in the hotel has a balcony.', answer: "Each", options: ["Each", "Every", "All", "Any"], hint: "Individuellement → each" },
            { type: 'fill', difficulty: 'easy', question: '_____ morning she goes for a run.', answer: "Every", options: ["Every", "Each", "All", "The"] },
            { type: 'fill', difficulty: 'medium', question: '_____ of the candidates was interviewed.', answer: "Each", options: ["Each", "Every", "All", "Any"], hint: "Pronom + of → each" },
            { type: 'fill', difficulty: 'medium', question: 'The report is published _____ three months.', answer: "every", options: ["every", "each", "all", "per"] },
            { type: 'fill', difficulty: 'medium', question: 'They _____ had different opinions on the matter.', answer: "each", options: ["each", "every", "all", "both"] },
            { type: 'fill', difficulty: 'hard', question: '_____ of the employees _____ (have) access to the system.', answer: "Each … has", options: ["Each … has", "Every … has", "Each … have", "Every … have"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est INCORRECTE ?', answer: "Every of the books was interesting.", options: ["Every of the books was interesting.", "Each of the books was interesting.", "Every book was interesting."] },
            { type: 'fill', difficulty: 'hard', question: 'He checked _____ single document before signing.', answer: "every", options: ["every", "each", "all", "any"], hint: "'every single' = chacun sans la moindre exception" }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ employee is required to attend the training session.', answer: "Every", options: ["Every", "Each", "All", "Any"] },
            { type: 'fill', difficulty: 'hard', question: 'The team members _____ contributed to the project\'s success.', answer: "each", options: ["each", "every", "all", "both"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "Each of the proposals has been reviewed.", options: ["Each of the proposals has been reviewed.", "Every of the proposals has been reviewed.", "Each of the proposals have been reviewed."] },
            { type: 'fill', difficulty: 'hard', question: 'Performance reviews are conducted _____ six months.', answer: "every", options: ["every", "each", "all", "per"] }
        ]
    },

    80: {
        id: 80, title: 'all / all of / whole', category: 'articles-nouns',
        explanation: `🇫🇷 <b>all, all of, whole — tout / tous</b><br><br>
<b>all</b> = tout, tous, toutes :<br>
• <i><b>All</b> students must register.</i> = Tous les étudiants doivent s'inscrire.<br>
• <i>I worked <b>all</b> day.</i> = J'ai travaillé toute la journée.<br><br>
<b>all of</b> + pronom ou the/this/my :<br>
• <i><b>All of</b> them agreed.</i> = Tous ont été d'accord.<br>
• <i><b>All of</b> the students passed.</i> = Tous les étudiants ont réussi.<br><br>
<b>whole</b> = entier (après a/the/my) :<br>
• <i>the <b>whole</b> day</i> = <i><b>all</b> day</i> = toute la journée<br>
• <i>the <b>whole</b> team</i> = toute l'équipe<br><br>
⚠️ <b>whole</b> ne s'utilise PAS avec les indénombrables : <i>~~the whole money~~</i> → <i><b>all</b> the money</i>`,
        rules: [
            '📐 **all** + nom pluriel/indénombrable : _**All** students / **All** information_',
            '📐 **all (of) the / all (of) my / all (of) this** + nom : _**All (of) the** employees…_',
            '📐 **all of** + pronom : _**All of** them / **All of** us / **All of** it_',
            '📐 **the whole / my whole / a whole** + nom singulier dénombrable : _the **whole** day, the **whole** team_',
            '📐 **whole** PAS avec indénombrables : ~~the whole information~~ → **all the** information'
        ],
        examples: [
            { text: "**All** the windows were broken.", fr: "Toutes les fenêtres étaient cassées.", correct: true },
            { text: "**All of us** enjoyed the presentation.", fr: "Nous avons tous apprécié la présentation.", correct: true },
            { text: "She read the **whole** book in one day.", fr: "Elle a lu le livre entier en une journée.", correct: true },
            { text: "I spent **all** morning working on the report.", fr: "J'ai passé toute la matinée à travailler sur le rapport.", correct: true },
            { text: "~~the whole furniture~~ → **all** the furniture.", fr: "furniture = indénombrable → 'whole' impossible", correct: false }
        ],
        tips: [
            "🇫🇷 'tout le' = 'the whole' ou 'all the'. 'Tous les' = 'all the'. 'Tous' (pronom) = 'all of them/us'.",
            "💡 whole = entier, complet (dénombrables). all = tout (fonctionne avec tout type de nom).",
            "⚠️ 'all day' = 'the whole day' (les deux marchent pour le temps). Mais 'all the money' ≠ 'the whole money' ❌"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ students passed the exam.', answer: "All", options: ["All", "Whole", "Every", "Each"], hint: "Tous → all" },
            { type: 'fill', difficulty: 'easy', question: 'She ate the _____ cake!', answer: "whole", options: ["whole", "all", "every", "each"], hint: "Entier → whole" },
            { type: 'fill', difficulty: 'easy', question: '_____ of them agreed with the decision.', answer: "All", options: ["All", "Whole", "Every", "Each"] },
            { type: 'fill', difficulty: 'medium', question: 'I spent _____ day at the office.', answer: "all", options: ["all", "the whole", "whole", "every"], hint: "all day = the whole day" },
            { type: 'fill', difficulty: 'medium', question: 'He read _____ the document before signing.', answer: "all", options: ["all", "whole", "every", "each"] },
            { type: 'correct', difficulty: 'medium', question: 'Quelle phrase est correcte ?', answer: "All the money was spent.", options: ["All the money was spent.", "The whole money was spent.", "Every money was spent."] },
            { type: 'fill', difficulty: 'hard', question: 'That\'s _____ lot of nonsense! (the entire thing)', answer: "a whole", options: ["a whole", "all", "every", "the all"] },
            { type: 'fill', difficulty: 'hard', question: '_____ of the equipment needs to be replaced.', answer: "All", options: ["All", "The whole", "Every", "Each"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase INCORRECTE :', answer: "The whole information was incorrect.", options: ["The whole information was incorrect.", "All the information was incorrect.", "The whole report was incorrect."] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ employees are expected to attend the meeting.', answer: "All", options: ["All", "Whole", "Every", "The whole"] },
            { type: 'fill', difficulty: 'hard', question: 'She dedicated her _____ career to public service.', answer: "whole", options: ["whole", "all", "every", "entire"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "All of the candidates met the requirements.", options: ["All of the candidates met the requirements.", "Whole of the candidates met the requirements.", "All of candidates met the requirements."] },
            { type: 'fill', difficulty: 'hard', question: '_____ the data _____ (have) been analysed.', answer: "All … has", options: ["All … has", "All … have", "Whole … has", "The whole … have"] }
        ]
    },

    81: {
        id: 81, title: 'both / either / neither', category: 'articles-nouns',
        explanation: `🇫🇷 <b>both, either, neither — les deux, l'un ou l'autre, ni l'un ni l'autre</b><br><br>
Ces mots s'utilisent quand on parle de <b>DEUX</b> choses ou personnes :<br><br>
<b>both</b> = les deux (affirmatif) :<br>
<i><b>Both</b> restaurants are good.</i> = Les deux restaurants sont bons.<br>
<i><b>Both</b> of them agreed.</i> = Ils étaient tous les deux d'accord.<br><br>
<b>either</b> = l'un ou l'autre / chacun des deux :<br>
<i>You can take <b>either</b> bus.</i> = Tu peux prendre l'un ou l'autre bus.<br>
<i><b>Either</b> Monday or Tuesday is fine.</i> = Lundi ou mardi, ça me va.<br><br>
<b>neither</b> = ni l'un ni l'autre (négatif) :<br>
<i><b>Neither</b> answer is correct.</i> = Aucune des deux réponses n'est correcte.<br>
<i>I like <b>neither</b> of them.</i> = Je n'aime ni l'un ni l'autre.`,
        rules: [
            '📐 **both** + nom pluriel : _**Both** options are good._ / **both of** + pronom/the : _**Both of** them_',
            '📐 **both … and** : _**Both** the manager **and** the director agreed._',
            '📐 **either** + nom singulier : _**Either** day is fine._ / **either … or** : _**Either** Monday **or** Tuesday._',
            '📐 **neither** + nom singulier : _**Neither** option works._ / **neither … nor** : _**Neither** Tom **nor** Sarah came._',
            '📐 **neither** = négatif. NE PAS ajouter "not" : _I like **neither**._ (PAS ~~I don\'t like neither~~)'
        ],
        examples: [
            { text: "**Both** of my parents are teachers.", fr: "Mes deux parents sont professeurs.", correct: true },
            { text: "You can park on **either** side of the street.", fr: "Tu peux te garer de chaque côté de la rue.", correct: true },
            { text: "**Neither** of the two proposals was accepted.", fr: "Aucune des deux propositions n'a été acceptée.", correct: true },
            { text: "She speaks **both** English **and** French.", fr: "Elle parle à la fois l'anglais et le français.", correct: true },
            { text: "**Neither** Tom **nor** Sarah came to the party.", fr: "Ni Tom ni Sarah ne sont venus à la fête.", correct: true }
        ],
        tips: [
            "🇫🇷 both = les deux (positif) / either = l'un ou l'autre / neither = ni l'un ni l'autre (négatif sans 'not')",
            "💡 'either' en fin de phrase négative : 'I don't like coffee. I don't like tea either.' = 'moi non plus / non plus'",
            "⚠️ neither = déjà négatif. 'Neither of them came.' ✅ / 'Neither of them didn't come.' ❌ (double négation)"
        ],
        exercises: [
            { type: 'fill', difficulty: 'easy', question: '_____ of my brothers live in London.', answer: "Both", options: ["Both", "Either", "Neither", "All"], hint: "Les deux → both" },
            { type: 'fill', difficulty: 'easy', question: 'You can choose _____ option. They\'re both good.', answer: "either", options: ["either", "both", "neither", "any"] },
            { type: 'fill', difficulty: 'easy', question: '_____ answer is correct. They\'re both wrong.', answer: "Neither", options: ["Neither", "Either", "Both", "None"] },
            { type: 'fill', difficulty: 'medium', question: 'She\'s _____ intelligent _____ hardworking.', answer: "both … and", options: ["both … and", "either … or", "neither … nor", "not … but"] },
            { type: 'fill', difficulty: 'medium', question: 'We can meet _____ Monday _____ Wednesday. Which day suits you?', answer: "either … or", options: ["either … or", "both … and", "neither … nor", "not … but"] },
            { type: 'fill', difficulty: 'medium', question: '_____ the hotel _____ the restaurant was satisfactory.', answer: "Neither … nor", options: ["Neither … nor", "Either … or", "Both … and", "Not … but"] },
            { type: 'correct', difficulty: 'hard', question: 'Quelle phrase est correcte ?', answer: "Neither of the candidates was qualified.", options: ["Neither of the candidates was qualified.", "Neither of the candidates weren't qualified.", "Neither candidates was qualified."] },
            { type: 'fill', difficulty: 'hard', question: '"Do you want tea or coffee?" "_____, thanks. I\'ll have water."', answer: "Neither", options: ["Neither", "Either", "Both", "None"] },
            { type: 'fill', difficulty: 'hard', question: '"I don\'t like horror movies." "I don\'t like them _____."', answer: "either", options: ["either", "neither", "both", "too"] }
        ],
        evaluation: [
            { type: 'fill', difficulty: 'medium', question: '_____ the morning _____ the afternoon session is mandatory.', answer: "Both … and", options: ["Both … and", "Either … or", "Neither … nor", "Not … but"] },
            { type: 'fill', difficulty: 'hard', question: '_____ proposal met the client\'s requirements, so we need to start over.', answer: "Neither", options: ["Neither", "Either", "Both", "None"] },
            { type: 'correct', difficulty: 'hard', question: 'Identifiez la phrase correcte :', answer: "The contract benefits both parties equally.", options: ["The contract benefits both parties equally.", "The contract benefits either parties equally.", "The contract benefits both of party equally."] },
            { type: 'fill', difficulty: 'hard', question: 'Applicants must have experience in _____ marketing _____ sales.', answer: "either … or", options: ["either … or", "both … and", "neither … nor", "not … or"] }
        ]
    }
};
