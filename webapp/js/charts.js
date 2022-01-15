let questionWords = [{"question":"Acceptance","cd_color":"G"},{"question":"Achievement","cd_color":"B"},{"question":"Adaptability","cd_color":"U"},{"question":"Advantageous","cd_color":"B"},{"question":"Adventure","cd_color":"R"},{"question":"Affection","cd_color":"R"},{"question":"Agreeable","cd_color":"G"},{"question":"Ambition","cd_color":"B"},{"question":"Amorality","cd_color":"B"},{"question":"Analyzing","cd_color":"U"},{"question":"Arrogant","cd_color":"B"},{"question":"Assertive","cd_color":"R"},{"question":"Authenticity","cd_color":"R"},{"question":"Authority","cd_color":"W"},{"question":"Autonomy","cd_color":"B"},{"question":"Balance","cd_color":"G"},{"question":"Being Present","cd_color":"R"},{"question":"Benevolence","cd_color":"W"},{"question":"Boldness","cd_color":"R"},{"question":"Calculating","cd_color":"B"},{"question":"Calm","cd_color":"G"},{"question":"Casual","cd_color":"R"},{"question":"Centered","cd_color":"G"},{"question":"Charm","cd_color":"R"},{"question":"Cold (attitude)","cd_color":"U"},{"question":"Commitment","cd_color":"W"},{"question":"Common sense","cd_color":"G"},{"question":"Community","cd_color":"G"},{"question":"Competitive","cd_color":"B"},{"question":"Complexity","cd_color":"U"},{"question":"Connected","cd_color":"G"},{"question":"Contentment","cd_color":"G"},{"question":"Contribution","cd_color":"W"},{"question":"Cooperation","cd_color":"W"},{"question":"Courage","cd_color":"R"},{"question":"Curiosity","cd_color":"U"},{"question":"Cynical","cd_color":"U"},{"question":"Deception","cd_color":"B"},{"question":"Decisive","cd_color":"W"},{"question":"Dedication","cd_color":"W"},{"question":"Defiance","cd_color":"B"},{"question":"Desire","cd_color":"B"},{"question":"Desire to Know","cd_color":"U"},{"question":"Destiny","cd_color":"G"},{"question":"Discerning","cd_color":"U"},{"question":"Discipline","cd_color":"W"},{"question":"Dominance","cd_color":"B"},{"question":"Earthy","cd_color":"G"},{"question":"Efficiency","cd_color":"U"},{"question":"Ego","cd_color":"B"},{"question":"Emotion","cd_color":"R"},{"question":"Empathy","cd_color":"R"},{"question":"Enthusiasm","cd_color":"R"},{"question":"Exploitation","cd_color":"B"},{"question":"Fairness","cd_color":"W"},{"question":"Flamboyant","cd_color":"R"},{"question":"Focus","cd_color":"U"},{"question":"Formality","cd_color":"W"},{"question":"Fortitude","cd_color":"G"},{"question":"Freedom","cd_color":"R"},{"question":"Friendship","cd_color":"R"},{"question":"Fun","cd_color":"R"},{"question":"Generosity","cd_color":"W"},{"question":"Growth","cd_color":"G"},{"question":"Guardian","cd_color":"W"},{"question":"Guile","cd_color":"U"},{"question":"Harmony","cd_color":"G"},{"question":"Heart","cd_color":"R"},{"question":"Hearty","cd_color":"G"},{"question":"Helpful","cd_color":"W"},{"question":"Honesty","cd_color":"W"},{"question":"Honor","cd_color":"W"},{"question":"Hope","cd_color":"G"},{"question":"Humble","cd_color":"W"},{"question":"Humor","cd_color":"R"},{"question":"Imaginative","cd_color":"U"},{"question":"Impulsive","cd_color":"R"},{"question":"Independent","cd_color":"R"},{"question":"Individuality","cd_color":"R"},{"question":"Influence","cd_color":"B"},{"question":"Instinct","cd_color":"G"},{"question":"Integrity","cd_color":"W"},{"question":"Intuition","cd_color":"G"},{"question":"Inventive","cd_color":"U"},{"question":"Investigative","cd_color":"U"},{"question":"Joy","cd_color":"R"},{"question":"Justice","cd_color":"W"},{"question":"Knowledge","cd_color":"U"},{"question":"Law","cd_color":"W"},{"question":"Leadership","cd_color":"W"},{"question":"Leverage","cd_color":"B"},{"question":"Live and let live","cd_color":"G"},{"question":"Logical","cd_color":"U"},{"question":"Looking to the Future","cd_color":"U"},{"question":"Love","cd_color":"R"},{"question":"Manipulation","cd_color":"B"},{"question":"Mastery","cd_color":"B"},{"question":"Mischievous","cd_color":"R"},{"question":"Morality","cd_color":"W"},{"question":"Natural","cd_color":"G"},{"question":"Neatness","cd_color":"W"},{"question":"Notices the little things","cd_color":"U"},{"question":"Nuance","cd_color":"U"},{"question":"Opportunistic","cd_color":"B"},{"question":"Organization","cd_color":"W"},{"question":"Originality","cd_color":"R"},{"question":"Passion","cd_color":"R"},{"question":"Peace","cd_color":"W"},{"question":"Perfection","cd_color":"U"},{"question":"Performer","cd_color":"R"},{"question":"Persistence","cd_color":"G"},{"question":"Persuasive","cd_color":"U"},{"question":"Poetic","cd_color":"R"},{"question":"Possessions","cd_color":"B"},{"question":"Power","cd_color":"B"},{"question":"Pragmatism","cd_color":"B"},{"question":"Pride","cd_color":"B"},{"question":"Profanity","cd_color":"B"},{"question":"Professional","cd_color":"W"},{"question":"Progress","cd_color":"U"},{"question":"Protective","cd_color":"W"},{"question":"Purity","cd_color":"W"},{"question":"Purpose","cd_color":"R"},{"question":"Questioning","cd_color":"U"},{"question":"Randomness","cd_color":"R"},{"question":"Rational","cd_color":"U"},{"question":"Realistic","cd_color":"B"},{"question":"Reckless","cd_color":"R"},{"question":"Relentless","cd_color":"B"},{"question":"Remorseless","cd_color":"B"},{"question":"Respect","cd_color":"G"},{"question":"Respect for Life","cd_color":"G"},{"question":"Responsibility","cd_color":"W"},{"question":"Romance","cd_color":"R"},{"question":"Ruthless","cd_color":"B"},{"question":"Sacred","cd_color":"W"},{"question":"Scholarly","cd_color":"U"},{"question":"Seeking Meaningfulness","cd_color":"G"},{"question":"Self-Control","cd_color":"W"},{"question":"Self-interest","cd_color":"B"},{"question":"Self-reliant","cd_color":"B"},{"question":"Sensitive","cd_color":"R"},{"question":"Sentiment","cd_color":"R"},{"question":"Serenity","cd_color":"G"},{"question":"Service","cd_color":"W"},{"question":"Significance","cd_color":"G"},{"question":"Simplicity","cd_color":"G"},{"question":"Skepticism","cd_color":"U"},{"question":"Solitary","cd_color":"B"},{"question":"Soul","cd_color":"G"},{"question":"Speculation","cd_color":"U"},{"question":"Spirituality","cd_color":"G"},{"question":"Spontaneous","cd_color":"R"},{"question":"Stability","cd_color":"G"},{"question":"Strategic","cd_color":"U"},{"question":"Stubborn","cd_color":"G"},{"question":"Studious","cd_color":"U"},{"question":"Subtlety","cd_color":"U"},{"question":"Success","cd_color":"B"},{"question":"Supportive","cd_color":"W"},{"question":"Supremacy","cd_color":"B"},{"question":"Talented","cd_color":"G"},{"question":"Teamwork","cd_color":"W"},{"question":"Technologically Fluent","cd_color":"U"},{"question":"Theorizing","cd_color":"U"},{"question":"Tradition","cd_color":"G"},{"question":"Trustworthy","cd_color":"W"},{"question":"Truth","cd_color":"U"},{"question":"Uninhibited","cd_color":"B"},{"question":"Valuing High Quality","cd_color":"U"},{"question":"Virtue","cd_color":"W"},{"question":"Willing to let go","cd_color":"G"},{"question":"Winning","cd_color":"B"},{"question":"Wisdom","cd_color":"G"},{"question":"Wordplay","cd_color":"U"}]
let colorGroups =[{"quick_name":"Abzan","color_group":["w","b","g"]},{"quick_name":"Azorius","color_group":["w","u"]},{"quick_name":"Bant","color_group":["w","u","g"]},{"quick_name":"Boros","color_group":["w","r"]},{"quick_name":"Dimir","color_group":["u","b"]},{"quick_name":"Esper","color_group":["w","u","b"]},{"quick_name":"Golgari","color_group":["b","g"]},{"quick_name":"Grixis","color_group":["u","b","r"]},{"quick_name":"Gruul","color_group":["r","g"]},{"quick_name":"Izzet","color_group":["u","r"]},{"quick_name":"Jeskai","color_group":["w","u","r"]},{"quick_name":"Jund","color_group":["b","r","g"]},{"quick_name":"Mardu","color_group":["w","b","r"]},{"quick_name":"Mono Black","color_group":["b"]},{"quick_name":"Mono Blue","color_group":["u"]},{"quick_name":"Mono Green","color_group":["g"]},{"quick_name":"Mono Red","color_group":["r"]},{"quick_name":"Mono White","color_group":["u"]},{"quick_name":"Multicolored","color_group":["w","u","b","r","g"]},{"quick_name":"Naya","color_group":["w","r","g"]},{"quick_name":"Orzhov","color_group":["w","b"]},{"quick_name":"Rakdos","color_group":["b","r"]},{"quick_name":"Selesnya","color_group":["w","g"]},{"quick_name":"Simic","color_group":["u","g"]},{"quick_name":"Sultai","color_group":["u","b","g"]},{"quick_name":"Temur","color_group":["u","r","g"]}];
let chartResultsFiveColorRadar =[{"data":[{"yes_count":"2959","max_value_column_name":"black","total_count":"9485","total_column_name":"black","percentage":"0.31196626251976805482"},{"yes_count":"17677","max_value_column_name":"blue","total_count":"37437","total_column_name":"blue","percentage":"0.47217992894729812752"},{"yes_count":"8047","max_value_column_name":"green","total_count":"10624","total_column_name":"green","percentage":"0.75743599397590361446"},{"yes_count":"14896","max_value_column_name":"red","total_count":"25176","total_column_name":"red","percentage":"0.59167461074038767080"},{"yes_count":"8674","max_value_column_name":"white","total_count":"14714","total_column_name":"white","percentage":"0.58950659236101671877"}],"question_word":"Acceptance"},{"data":[{"yes_count":"1338","max_value_column_name":"black","total_count":"9500","total_column_name":"black","percentage":"0.14084210526315789474"},{"yes_count":"4089","max_value_column_name":"blue","total_count":"37910","total_column_name":"blue","percentage":"0.10786072276444209971"},{"yes_count":"2775","max_value_column_name":"green","total_count":"10431","total_column_name":"green","percentage":"0.26603393730227207363"},{"yes_count":"4198","max_value_column_name":"red","total_count":"25749","total_column_name":"red","percentage":"0.16303545768767719135"},{"yes_count":"4807","max_value_column_name":"white","total_count":"14054","total_column_name":"white","percentage":"0.34203785399174612210"}],"question_word":"Sacred"},{"data":[{"yes_count":"4246","max_value_column_name":"black","total_count":"9361","total_column_name":"black","percentage":"0.45358401880141010576"},{"yes_count":"18135","max_value_column_name":"blue","total_count":"37556","total_column_name":"blue","percentage":"0.48287890084141016083"},{"yes_count":"6226","max_value_column_name":"green","total_count":"10085","total_column_name":"green","percentage":"0.61735250371839365394"},{"yes_count":"16786","max_value_column_name":"red","total_count":"25270","total_column_name":"red","percentage":"0.66426592797783933518"},{"yes_count":"12550","max_value_column_name":"white","total_count":"15522","total_column_name":"white","percentage":"0.80852982863033114289"}],"question_word":"Protective"},{"data":[{"yes_count":"1985","max_value_column_name":"black","total_count":"9530","total_column_name":"black","percentage":"0.20828961175236096537"},{"yes_count":"10843","max_value_column_name":"blue","total_count":"37827","total_column_name":"blue","percentage":"0.28664710392048008037"},{"yes_count":"4550","max_value_column_name":"green","total_count":"10210","total_column_name":"green","percentage":"0.44564152791380999021"},{"yes_count":"11559","max_value_column_name":"red","total_count":"25317","total_column_name":"red","percentage":"0.45657068373029979855"},{"yes_count":"9672","max_value_column_name":"white","total_count":"14941","total_column_name":"white","percentage":"0.64734622849876179640"}],"question_word":"Teamwork"},{"data":[{"yes_count":"2366","max_value_column_name":"black","total_count":"9515","total_column_name":"black","percentage":"0.24866001050972149238"},{"yes_count":"10058","max_value_column_name":"blue","total_count":"37649","total_column_name":"blue","percentage":"0.26715184998273526521"},{"yes_count":"4765","max_value_column_name":"green","total_count":"10134","total_column_name":"green","percentage":"0.47019932899151371620"},{"yes_count":"16066","max_value_column_name":"red","total_count":"25587","total_column_name":"red","percentage":"0.62789697893461523430"},{"yes_count":"6841","max_value_column_name":"white","total_count":"15065","total_column_name":"white","percentage":"0.45409890474610023233"}],"question_word":"Joy"},{"data":[{"yes_count":"5095","max_value_column_name":"black","total_count":"9460","total_column_name":"black","percentage":"0.53858350951374207188"},{"yes_count":"10656","max_value_column_name":"blue","total_count":"37814","total_column_name":"blue","percentage":"0.28180039138943248532"},{"yes_count":"2218","max_value_column_name":"green","total_count":"10330","total_column_name":"green","percentage":"0.21471442400774443369"},{"yes_count":"8607","max_value_column_name":"red","total_count":"24801","total_column_name":"red","percentage":"0.34704245796540462078"},{"yes_count":"4468","max_value_column_name":"white","total_count":"15232","total_column_name":"white","percentage":"0.29332983193277310924"}],"question_word":"Assertive"},{"data":[{"yes_count":"4094","max_value_column_name":"black","total_count":"9411","total_column_name":"black","percentage":"0.43502284560620550420"},{"yes_count":"14048","max_value_column_name":"blue","total_count":"37602","total_column_name":"blue","percentage":"0.37359714908781447795"},{"yes_count":"5021","max_value_column_name":"green","total_count":"9944","total_column_name":"green","percentage":"0.50492759452936444087"},{"yes_count":"9990","max_value_column_name":"red","total_count":"25499","total_column_name":"red","percentage":"0.39178006980665908467"},{"yes_count":"6183","max_value_column_name":"white","total_count":"15093","total_column_name":"white","percentage":"0.40966010733452593918"}],"question_word":"Significance"},{"data":[{"yes_count":"5754","max_value_column_name":"black","total_count":"9516","total_column_name":"black","percentage":"0.60466582597730138714"},{"yes_count":"20216","max_value_column_name":"blue","total_count":"37371","total_column_name":"blue","percentage":"0.54095421583580851462"},{"yes_count":"3659","max_value_column_name":"green","total_count":"10063","total_column_name":"green","percentage":"0.36360926165159495180"},{"yes_count":"7062","max_value_column_name":"red","total_count":"25300","total_column_name":"red","percentage":"0.27913043478260869565"},{"yes_count":"5910","max_value_column_name":"white","total_count":"14913","total_column_name":"white","percentage":"0.39629853148259907463"}],"question_word":"Pragmatism"},{"data":[{"yes_count":"3185","max_value_column_name":"black","total_count":"9535","total_column_name":"black","percentage":"0.33403251179863660199"},{"yes_count":"12154","max_value_column_name":"blue","total_count":"37464","total_column_name":"blue","percentage":"0.32441810805039504591"},{"yes_count":"6579","max_value_column_name":"green","total_count":"10350","total_column_name":"green","percentage":"0.63565217391304347826"},{"yes_count":"9940","max_value_column_name":"red","total_count":"25443","total_column_name":"red","percentage":"0.39067720001572141650"},{"yes_count":"6538","max_value_column_name":"white","total_count":"14931","total_column_name":"white","percentage":"0.43788091889357712143"}],"question_word":"Simplicity"},{"data":[{"yes_count":"1050","max_value_column_name":"black","total_count":"9659","total_column_name":"black","percentage":"0.10870690547675742831"},{"yes_count":"4230","max_value_column_name":"blue","total_count":"37839","total_column_name":"blue","percentage":"0.11178942361056053278"},{"yes_count":"2482","max_value_column_name":"green","total_count":"10356","total_column_name":"green","percentage":"0.23966782541521823098"},{"yes_count":"3627","max_value_column_name":"red","total_count":"25733","total_column_name":"red","percentage":"0.14094742159872537209"},{"yes_count":"5751","max_value_column_name":"white","total_count":"14449","total_column_name":"white","percentage":"0.39802062426465499343"}],"question_word":"Purity"},{"data":[{"yes_count":"6233","max_value_column_name":"black","total_count":"9702","total_column_name":"black","percentage":"0.64244485673057101629"},{"yes_count":"21186","max_value_column_name":"blue","total_count":"37462","total_column_name":"blue","percentage":"0.56553307351449468795"},{"yes_count":"4688","max_value_column_name":"green","total_count":"10313","total_column_name":"green","percentage":"0.45457189954426452051"},{"yes_count":"11915","max_value_column_name":"red","total_count":"25405","total_column_name":"red","percentage":"0.46900216492816374729"},{"yes_count":"6226","max_value_column_name":"white","total_count":"14936","total_column_name":"white","percentage":"0.41684520621317621853"}],"question_word":"Autonomy"},{"data":[{"yes_count":"4709","max_value_column_name":"black","total_count":"9454","total_column_name":"black","percentage":"0.49809604400253860800"},{"yes_count":"24249","max_value_column_name":"blue","total_count":"37639","total_column_name":"blue","percentage":"0.64425197268790350434"},{"yes_count":"4603","max_value_column_name":"green","total_count":"10333","total_column_name":"green","percentage":"0.44546598277363785929"},{"yes_count":"11935","max_value_column_name":"red","total_count":"25513","total_column_name":"red","percentage":"0.46780072904009720535"},{"yes_count":"7381","max_value_column_name":"white","total_count":"14853","total_column_name":"white","percentage":"0.49693664579546219619"}],"question_word":"Progress"},{"data":[{"yes_count":"1852","max_value_column_name":"black","total_count":"9725","total_column_name":"black","percentage":"0.19043701799485861183"},{"yes_count":"10051","max_value_column_name":"blue","total_count":"37844","total_column_name":"blue","percentage":"0.26559031814818729521"},{"yes_count":"2841","max_value_column_name":"green","total_count":"10475","total_column_name":"green","percentage":"0.27121718377088305489"},{"yes_count":"10228","max_value_column_name":"red","total_count":"24758","total_column_name":"red","percentage":"0.41311899184102108409"},{"yes_count":"3453","max_value_column_name":"white","total_count":"15107","total_column_name":"white","percentage":"0.22856953730058913087"}],"question_word":"Poetic"},{"data":[{"yes_count":"2169","max_value_column_name":"black","total_count":"9500","total_column_name":"black","percentage":"0.22831578947368421053"},{"yes_count":"10209","max_value_column_name":"blue","total_count":"37642","total_column_name":"blue","percentage":"0.27121300674778173317"},{"yes_count":"5781","max_value_column_name":"green","total_count":"10166","total_column_name":"green","percentage":"0.56866024001573873697"},{"yes_count":"8588","max_value_column_name":"red","total_count":"25528","total_column_name":"red","percentage":"0.33641491695393293638"},{"yes_count":"5880","max_value_column_name":"white","total_count":"14896","total_column_name":"white","percentage":"0.39473684210526315789"}],"question_word":"Contentment"},{"data":[{"yes_count":"4196","max_value_column_name":"black","total_count":"9466","total_column_name":"black","percentage":"0.44327065286287766744"},{"yes_count":"11059","max_value_column_name":"blue","total_count":"37769","total_column_name":"blue","percentage":"0.29280626969207551166"},{"yes_count":"2751","max_value_column_name":"green","total_count":"10367","total_column_name":"green","percentage":"0.26536124240378122890"},{"yes_count":"8227","max_value_column_name":"red","total_count":"25502","total_column_name":"red","percentage":"0.32260214885107050427"},{"yes_count":"7106","max_value_column_name":"white","total_count":"14563","total_column_name":"white","percentage":"0.48794891162535191925"}],"question_word":"Leadership"},{"data":[{"yes_count":"4797","max_value_column_name":"black","total_count":"9430","total_column_name":"black","percentage":"0.50869565217391304348"},{"yes_count":"14002","max_value_column_name":"blue","total_count":"37727","total_column_name":"blue","percentage":"0.37114003233758316325"},{"yes_count":"6452","max_value_column_name":"green","total_count":"10338","total_column_name":"green","percentage":"0.62410524279357709422"},{"yes_count":"14129","max_value_column_name":"red","total_count":"25297","total_column_name":"red","percentage":"0.55852472625212475788"},{"yes_count":"5941","max_value_column_name":"white","total_count":"15019","total_column_name":"white","percentage":"0.39556561688527864705"}],"question_word":"Instinct"},{"data":[{"yes_count":"4717","max_value_column_name":"black","total_count":"9439","total_column_name":"black","percentage":"0.49973514143447399089"},{"yes_count":"11860","max_value_column_name":"blue","total_count":"37918","total_column_name":"blue","percentage":"0.31278020992668389683"},{"yes_count":"2171","max_value_column_name":"green","total_count":"10363","total_column_name":"green","percentage":"0.20949531988806330213"},{"yes_count":"11665","max_value_column_name":"red","total_count":"25060","total_column_name":"red","percentage":"0.46548284118116520351"},{"yes_count":"2483","max_value_column_name":"white","total_count":"15171","total_column_name":"white","percentage":"0.16366752356469580120"}],"question_word":"Mischievous"},{"data":[{"yes_count":"5067","max_value_column_name":"black","total_count":"9254","total_column_name":"black","percentage":"0.54754700669980548952"},{"yes_count":"23387","max_value_column_name":"blue","total_count":"37238","total_column_name":"blue","percentage":"0.62804124818733551748"},{"yes_count":"5891","max_value_column_name":"green","total_count":"10060","total_column_name":"green","percentage":"0.58558648111332007952"},{"yes_count":"22045","max_value_column_name":"red","total_count":"26523","total_column_name":"red","percentage":"0.83116540361195943144"},{"yes_count":"8298","max_value_column_name":"white","total_count":"14710","total_column_name":"white","percentage":"0.56410605030591434398"}],"question_word":"Humor"},{"data":[{"yes_count":"3057","max_value_column_name":"black","total_count":"9530","total_column_name":"black","percentage":"0.32077649527806925498"},{"yes_count":"10297","max_value_column_name":"blue","total_count":"37541","total_column_name":"blue","percentage":"0.27428677978743240723"},{"yes_count":"3022","max_value_column_name":"green","total_count":"10331","total_column_name":"green","percentage":"0.29251766527925660633"},{"yes_count":"14295","max_value_column_name":"red","total_count":"25056","total_column_name":"red","percentage":"0.57052203065134099617"},{"yes_count":"3291","max_value_column_name":"white","total_count":"15133","total_column_name":"white","percentage":"0.21747175047908544241"}],"question_word":"Randomness"},{"data":[{"yes_count":"3804","max_value_column_name":"black","total_count":"9698","total_column_name":"black","percentage":"0.39224582388121262116"},{"yes_count":"9475","max_value_column_name":"blue","total_count":"37849","total_column_name":"blue","percentage":"0.25033686491056566884"},{"yes_count":"3642","max_value_column_name":"green","total_count":"10252","total_column_name":"green","percentage":"0.35524775653531018338"},{"yes_count":"11031","max_value_column_name":"red","total_count":"24762","total_column_name":"red","percentage":"0.44548097891931184880"},{"yes_count":"6610","max_value_column_name":"white","total_count":"14974","total_column_name":"white","percentage":"0.44143181514625350608"}],"question_word":"Courage"},{"data":[{"yes_count":"6074","max_value_column_name":"black","total_count":"9683","total_column_name":"black","percentage":"0.62728493235567489414"},{"yes_count":"18525","max_value_column_name":"blue","total_count":"37679","total_column_name":"blue","percentage":"0.49165317550890416412"},{"yes_count":"3296","max_value_column_name":"green","total_count":"10224","total_column_name":"green","percentage":"0.32237871674491392801"},{"yes_count":"7212","max_value_column_name":"red","total_count":"25371","total_column_name":"red","percentage":"0.28426155847227149107"},{"yes_count":"5693","max_value_column_name":"white","total_count":"15041","total_column_name":"white","percentage":"0.37849877002858852470"}],"question_word":"Mastery"},{"data":[{"yes_count":"3953","max_value_column_name":"black","total_count":"9567","total_column_name":"black","percentage":"0.41319117800773492213"},{"yes_count":"24054","max_value_column_name":"blue","total_count":"37321","total_column_name":"blue","percentage":"0.64451649205541116262"},{"yes_count":"3509","max_value_column_name":"green","total_count":"10182","total_column_name":"green","percentage":"0.34462777450402671381"},{"yes_count":"9838","max_value_column_name":"red","total_count":"25377","total_column_name":"red","percentage":"0.38767387792095204319"},{"yes_count":"4771","max_value_column_name":"white","total_count":"14964","total_column_name":"white","percentage":"0.31883186313819834269"}],"question_word":"Speculation"},{"data":[{"yes_count":"3558","max_value_column_name":"black","total_count":"9494","total_column_name":"black","percentage":"0.37476300821571518854"},{"yes_count":"18392","max_value_column_name":"blue","total_count":"37366","total_column_name":"blue","percentage":"0.49221217149280094203"},{"yes_count":"6490","max_value_column_name":"green","total_count":"9988","total_column_name":"green","percentage":"0.64977973568281938326"},{"yes_count":"21312","max_value_column_name":"red","total_count":"26055","total_column_name":"red","percentage":"0.81796200345423143351"},{"yes_count":"10652","max_value_column_name":"white","total_count":"14753","total_column_name":"white","percentage":"0.72202263946316003525"}],"question_word":"Friendship"},{"data":[{"yes_count":"5659","max_value_column_name":"black","total_count":"9350","total_column_name":"black","percentage":"0.60524064171122994652"},{"yes_count":"27706","max_value_column_name":"blue","total_count":"37719","total_column_name":"blue","percentage":"0.73453697075744319839"},{"yes_count":"4014","max_value_column_name":"green","total_count":"10655","total_column_name":"green","percentage":"0.37672454246832473017"},{"yes_count":"10262","max_value_column_name":"red","total_count":"25493","total_column_name":"red","percentage":"0.40254187423998744753"},{"yes_count":"5637","max_value_column_name":"white","total_count":"14937","total_column_name":"white","percentage":"0.37738501707170114481"}],"question_word":"Skepticism"},{"data":[{"yes_count":"5800","max_value_column_name":"black","total_count":"9428","total_column_name":"black","percentage":"0.61518879932117098006"},{"yes_count":"15351","max_value_column_name":"blue","total_count":"37500","total_column_name":"blue","percentage":"0.40936000000000000000"},{"yes_count":"3282","max_value_column_name":"green","total_count":"10247","total_column_name":"green","percentage":"0.32028886503366839075"},{"yes_count":"8410","max_value_column_name":"red","total_count":"25389","total_column_name":"red","percentage":"0.33124581511678285872"},{"yes_count":"6293","max_value_column_name":"white","total_count":"14992","total_column_name":"white","percentage":"0.41975720384204909285"}],"question_word":"Achievement"},{"data":[{"yes_count":"2599","max_value_column_name":"black","total_count":"9472","total_column_name":"black","percentage":"0.27438766891891891892"},{"yes_count":"16203","max_value_column_name":"blue","total_count":"37769","total_column_name":"blue","percentage":"0.42900262119727819111"},{"yes_count":"5478","max_value_column_name":"green","total_count":"10132","total_column_name":"green","percentage":"0.54066324516383734702"},{"yes_count":"18701","max_value_column_name":"red","total_count":"25646","total_column_name":"red","percentage":"0.72919753567807845278"},{"yes_count":"7877","max_value_column_name":"white","total_count":"14719","total_column_name":"white","percentage":"0.53515863849446293906"}],"question_word":"Sensitive"},{"data":[{"yes_count":"5050","max_value_column_name":"black","total_count":"9212","total_column_name":"black","percentage":"0.54819800260529743812"},{"yes_count":"9282","max_value_column_name":"blue","total_count":"37897","total_column_name":"blue","percentage":"0.24492703907961052326"},{"yes_count":"2023","max_value_column_name":"green","total_count":"10369","total_column_name":"green","percentage":"0.19510078117465522230"},{"yes_count":"6901","max_value_column_name":"red","total_count":"25535","total_column_name":"red","percentage":"0.27025651067162717838"},{"yes_count":"3297","max_value_column_name":"white","total_count":"14921","total_column_name":"white","percentage":"0.22096374237651631928"}],"question_word":"Possessions"},{"data":[{"yes_count":"5398","max_value_column_name":"black","total_count":"9275","total_column_name":"black","percentage":"0.58199460916442048518"},{"yes_count":"6156","max_value_column_name":"blue","total_count":"37765","total_column_name":"blue","percentage":"0.16300807626108830928"},{"yes_count":"932","max_value_column_name":"green","total_count":"10264","total_column_name":"green","percentage":"0.09080280592361652377"},{"yes_count":"3134","max_value_column_name":"red","total_count":"25491","total_column_name":"red","percentage":"0.12294535326193558511"},{"yes_count":"1698","max_value_column_name":"white","total_count":"15105","total_column_name":"white","percentage":"0.11241310824230387289"}],"question_word":"Exploitation"},{"data":[{"yes_count":"1617","max_value_column_name":"black","total_count":"9470","total_column_name":"black","percentage":"0.17074973600844772967"},{"yes_count":"7830","max_value_column_name":"blue","total_count":"37769","total_column_name":"blue","percentage":"0.20731287563875135693"},{"yes_count":"4770","max_value_column_name":"green","total_count":"9948","total_column_name":"green","percentage":"0.47949336550060313631"},{"yes_count":"10364","max_value_column_name":"red","total_count":"25549","total_column_name":"red","percentage":"0.40565188461387921249"},{"yes_count":"7391","max_value_column_name":"white","total_count":"14952","total_column_name":"white","percentage":"0.49431514178705189941"}],"question_word":"Community"},{"data":[{"yes_count":"2269","max_value_column_name":"black","total_count":"9402","total_column_name":"black","percentage":"0.24133163156775154223"},{"yes_count":"7904","max_value_column_name":"blue","total_count":"37845","total_column_name":"blue","percentage":"0.20885189589113489232"},{"yes_count":"2027","max_value_column_name":"green","total_count":"10453","total_column_name":"green","percentage":"0.19391562230938486559"},{"yes_count":"3239","max_value_column_name":"red","total_count":"25448","total_column_name":"red","percentage":"0.12727915749764225086"},{"yes_count":"5678","max_value_column_name":"white","total_count":"14312","total_column_name":"white","percentage":"0.39673001676914477362"}],"question_word":"Formality"},{"data":[{"yes_count":"7728","max_value_column_name":"black","total_count":"9602","total_column_name":"black","percentage":"0.80483232659862528640"},{"yes_count":"11416","max_value_column_name":"blue","total_count":"37578","total_column_name":"blue","percentage":"0.30379477353770823354"},{"yes_count":"2336","max_value_column_name":"green","total_count":"10389","total_column_name":"green","percentage":"0.22485321012609490808"},{"yes_count":"7219","max_value_column_name":"red","total_count":"25530","total_column_name":"red","percentage":"0.28276537406972189581"},{"yes_count":"3955","max_value_column_name":"white","total_count":"14860","total_column_name":"white","percentage":"0.26615074024226110363"}],"question_word":"Power"},{"data":[{"yes_count":"8000","max_value_column_name":"black","total_count":"9759","total_column_name":"black","percentage":"0.81975612255354032175"},{"yes_count":"16043","max_value_column_name":"blue","total_count":"37484","total_column_name":"blue","percentage":"0.42799594493650624266"},{"yes_count":"3175","max_value_column_name":"green","total_count":"10109","total_column_name":"green","percentage":"0.31407656543673953902"},{"yes_count":"9347","max_value_column_name":"red","total_count":"25322","total_column_name":"red","percentage":"0.36912566148013585025"},{"yes_count":"3490","max_value_column_name":"white","total_count":"14849","total_column_name":"white","percentage":"0.23503266213213010977"}],"question_word":"Self-interest"},{"data":[{"yes_count":"2551","max_value_column_name":"black","total_count":"9849","total_column_name":"black","percentage":"0.25901106711341252919"},{"yes_count":"19217","max_value_column_name":"blue","total_count":"36989","total_column_name":"blue","percentage":"0.51953283408580929466"},{"yes_count":"2706","max_value_column_name":"green","total_count":"10390","total_column_name":"green","percentage":"0.26044273339749759384"},{"yes_count":"5334","max_value_column_name":"red","total_count":"25744","total_column_name":"red","percentage":"0.20719390926041019267"},{"yes_count":"5349","max_value_column_name":"white","total_count":"14875","total_column_name":"white","percentage":"0.35959663865546218487"}],"question_word":"Studious"},{"data":[{"yes_count":"4515","max_value_column_name":"black","total_count":"9322","total_column_name":"black","percentage":"0.48433812486590860330"},{"yes_count":"17719","max_value_column_name":"blue","total_count":"37441","total_column_name":"blue","percentage":"0.47325124863117972276"},{"yes_count":"5408","max_value_column_name":"green","total_count":"10168","total_column_name":"green","percentage":"0.53186467348544453186"},{"yes_count":"21180","max_value_column_name":"red","total_count":"25945","total_column_name":"red","percentage":"0.81634226247831952207"},{"yes_count":"7496","max_value_column_name":"white","total_count":"14826","total_column_name":"white","percentage":"0.50559827330365573992"}],"question_word":"Fun"},{"data":[{"yes_count":"6633","max_value_column_name":"black","total_count":"9384","total_column_name":"black","percentage":"0.70684143222506393862"},{"yes_count":"22295","max_value_column_name":"blue","total_count":"37521","total_column_name":"blue","percentage":"0.59420058100796887077"},{"yes_count":"5289","max_value_column_name":"green","total_count":"10344","total_column_name":"green","percentage":"0.51131090487238979118"},{"yes_count":"14829","max_value_column_name":"red","total_count":"25819","total_column_name":"red","percentage":"0.57434447499903172083"},{"yes_count":"7107","max_value_column_name":"white","total_count":"14944","total_column_name":"white","percentage":"0.47557548179871520343"}],"question_word":"Independent"},{"data":[{"yes_count":"2458","max_value_column_name":"black","total_count":"9544","total_column_name":"black","percentage":"0.25754400670578373847"},{"yes_count":"5931","max_value_column_name":"blue","total_count":"37865","total_column_name":"blue","percentage":"0.15663541529116598442"},{"yes_count":"1446","max_value_column_name":"green","total_count":"10496","total_column_name":"green","percentage":"0.13776676829268292683"},{"yes_count":"10771","max_value_column_name":"red","total_count":"24693","total_column_name":"red","percentage":"0.43619649293321994087"},{"yes_count":"2035","max_value_column_name":"white","total_count":"15273","total_column_name":"white","percentage":"0.13324166830354219865"}],"question_word":"Flamboyant"},{"data":[{"yes_count":"2134","max_value_column_name":"black","total_count":"9559","total_column_name":"black","percentage":"0.22324510932105868815"},{"yes_count":"16350","max_value_column_name":"blue","total_count":"37572","total_column_name":"blue","percentage":"0.43516448419035451932"},{"yes_count":"5805","max_value_column_name":"green","total_count":"10109","total_column_name":"green","percentage":"0.57424077554654268474"},{"yes_count":"13242","max_value_column_name":"red","total_count":"25477","total_column_name":"red","percentage":"0.51976292342112493622"},{"yes_count":"12249","max_value_column_name":"white","total_count":"15384","total_column_name":"white","percentage":"0.79621684867394695788"}],"question_word":"Morality"},{"data":[{"yes_count":"4714","max_value_column_name":"black","total_count":"9574","total_column_name":"black","percentage":"0.49237518278671401713"},{"yes_count":"16810","max_value_column_name":"blue","total_count":"37458","total_column_name":"blue","percentage":"0.44876928826952853863"},{"yes_count":"5091","max_value_column_name":"green","total_count":"10305","total_column_name":"green","percentage":"0.49403202328966521106"},{"yes_count":"12218","max_value_column_name":"red","total_count":"25471","total_column_name":"red","percentage":"0.47968277649091123238"},{"yes_count":"10765","max_value_column_name":"white","total_count":"15281","total_column_name":"white","percentage":"0.70446960277468752045"}],"question_word":"Dedication"},{"data":[{"yes_count":"6793","max_value_column_name":"black","total_count":"9547","total_column_name":"black","percentage":"0.71153241856080444119"},{"yes_count":"14533","max_value_column_name":"blue","total_count":"37787","total_column_name":"blue","percentage":"0.38460317040251938497"},{"yes_count":"2701","max_value_column_name":"green","total_count":"10257","total_column_name":"green","percentage":"0.26333235838939260992"},{"yes_count":"8059","max_value_column_name":"red","total_count":"25490","total_column_name":"red","percentage":"0.31616320125539427226"},{"yes_count":"4094","max_value_column_name":"white","total_count":"14823","total_column_name":"white","percentage":"0.27619240369695743102"}],"question_word":"Advantageous"},{"data":[{"yes_count":"1783","max_value_column_name":"black","total_count":"9468","total_column_name":"black","percentage":"0.18831854668356569497"},{"yes_count":"7230","max_value_column_name":"blue","total_count":"37661","total_column_name":"blue","percentage":"0.19197578396749953533"},{"yes_count":"5494","max_value_column_name":"green","total_count":"9988","total_column_name":"green","percentage":"0.55006007208650380457"},{"yes_count":"7724","max_value_column_name":"red","total_count":"25364","total_column_name":"red","percentage":"0.30452609998422961678"},{"yes_count":"5361","max_value_column_name":"white","total_count":"15067","total_column_name":"white","percentage":"0.35581071215238600916"}],"question_word":"Spirituality"},{"data":[{"yes_count":"3959","max_value_column_name":"black","total_count":"9490","total_column_name":"black","percentage":"0.41717597471022128556"},{"yes_count":"13258","max_value_column_name":"blue","total_count":"37522","total_column_name":"blue","percentage":"0.35333937423378284740"},{"yes_count":"4506","max_value_column_name":"green","total_count":"10341","total_column_name":"green","percentage":"0.43574122425297360023"},{"yes_count":"16132","max_value_column_name":"red","total_count":"25348","total_column_name":"red","percentage":"0.63642101940981537005"},{"yes_count":"5711","max_value_column_name":"white","total_count":"14999","total_column_name":"white","percentage":"0.38075871724781652110"}],"question_word":"Adventure"},{"data":[{"yes_count":"2436","max_value_column_name":"black","total_count":"9496","total_column_name":"black","percentage":"0.25652906486941870261"},{"yes_count":"10083","max_value_column_name":"blue","total_count":"37663","total_column_name":"blue","percentage":"0.26771632636805352733"},{"yes_count":"6669","max_value_column_name":"green","total_count":"10304","total_column_name":"green","percentage":"0.64722437888198757764"},{"yes_count":"10016","max_value_column_name":"red","total_count":"25302","total_column_name":"red","percentage":"0.39585803493794956920"},{"yes_count":"5609","max_value_column_name":"white","total_count":"14838","total_column_name":"white","percentage":"0.37801590510850518938"}],"question_word":"Natural"},{"data":[{"yes_count":"5331","max_value_column_name":"black","total_count":"9311","total_column_name":"black","percentage":"0.57254859843196219525"},{"yes_count":"33017","max_value_column_name":"blue","total_count":"38212","total_column_name":"blue","percentage":"0.86404794305453784152"},{"yes_count":"5424","max_value_column_name":"green","total_count":"10026","total_column_name":"green","percentage":"0.54099341711549970078"},{"yes_count":"15244","max_value_column_name":"red","total_count":"25145","total_column_name":"red","percentage":"0.60624378604096241798"},{"yes_count":"7608","max_value_column_name":"white","total_count":"14832","total_column_name":"white","percentage":"0.51294498381877022654"}],"question_word":"Questioning"},{"data":[{"yes_count":"3224","max_value_column_name":"black","total_count":"9365","total_column_name":"black","percentage":"0.34426054458088627870"},{"yes_count":"21845","max_value_column_name":"blue","total_count":"37536","total_column_name":"blue","percentage":"0.58197463768115942029"},{"yes_count":"6825","max_value_column_name":"green","total_count":"10119","total_column_name":"green","percentage":"0.67447376222946931515"},{"yes_count":"16133","max_value_column_name":"red","total_count":"25275","total_column_name":"red","percentage":"0.63829871414441147379"},{"yes_count":"13145","max_value_column_name":"white","total_count":"15563","total_column_name":"white","percentage":"0.84463149778320375249"}],"question_word":"Honesty"},{"data":[{"yes_count":"6380","max_value_column_name":"black","total_count":"9774","total_column_name":"black","percentage":"0.65275219971352568038"},{"yes_count":"22431","max_value_column_name":"blue","total_count":"37441","total_column_name":"blue","percentage":"0.59910258807189978900"},{"yes_count":"5083","max_value_column_name":"green","total_count":"10086","total_column_name":"green","percentage":"0.50396589331746976006"},{"yes_count":"9477","max_value_column_name":"red","total_count":"25407","total_column_name":"red","percentage":"0.37300743889479277365"},{"yes_count":"6277","max_value_column_name":"white","total_count":"14939","total_column_name":"white","percentage":"0.42017537987817122967"}],"question_word":"Solitary"},{"data":[{"yes_count":"2883","max_value_column_name":"black","total_count":"9605","total_column_name":"black","percentage":"0.30015616866215512754"},{"yes_count":"8647","max_value_column_name":"blue","total_count":"37772","total_column_name":"blue","percentage":"0.22892618871121465636"},{"yes_count":"2208","max_value_column_name":"green","total_count":"10541","total_column_name":"green","percentage":"0.20946779242956076274"},{"yes_count":"12647","max_value_column_name":"red","total_count":"24921","total_column_name":"red","percentage":"0.50748364832871875125"},{"yes_count":"3436","max_value_column_name":"white","total_count":"15119","total_column_name":"white","percentage":"0.22726370791719029036"}],"question_word":"Performer"},{"data":[{"yes_count":"3407","max_value_column_name":"black","total_count":"9340","total_column_name":"black","percentage":"0.36477516059957173448"},{"yes_count":"20426","max_value_column_name":"blue","total_count":"37260","total_column_name":"blue","percentage":"0.54820182501341921632"},{"yes_count":"6094","max_value_column_name":"green","total_count":"9993","total_column_name":"green","percentage":"0.60982687881517061943"},{"yes_count":"13368","max_value_column_name":"red","total_count":"25222","total_column_name":"red","percentage":"0.53001348029498057252"},{"yes_count":"12387","max_value_column_name":"white","total_count":"15341","total_column_name":"white","percentage":"0.80744410403493905221"}],"question_word":"Integrity"},{"data":[{"yes_count":"7323","max_value_column_name":"black","total_count":"9813","total_column_name":"black","percentage":"0.74625496789972485478"},{"yes_count":"17384","max_value_column_name":"blue","total_count":"37659","total_column_name":"blue","percentage":"0.46161608114926046895"},{"yes_count":"4625","max_value_column_name":"green","total_count":"10310","total_column_name":"green","percentage":"0.44859359844810863240"},{"yes_count":"16687","max_value_column_name":"red","total_count":"25359","total_column_name":"red","percentage":"0.65803067944319570961"},{"yes_count":"5977","max_value_column_name":"white","total_count":"14920","total_column_name":"white","percentage":"0.40060321715817694370"}],"question_word":"Desire"},{"data":[{"yes_count":"2707","max_value_column_name":"black","total_count":"9535","total_column_name":"black","percentage":"0.28390141583639223912"},{"yes_count":"11325","max_value_column_name":"blue","total_count":"37732","total_column_name":"blue","percentage":"0.30014311459768896427"},{"yes_count":"2659","max_value_column_name":"green","total_count":"10401","total_column_name":"green","percentage":"0.25564849533698682819"},{"yes_count":"4371","max_value_column_name":"red","total_count":"25590","total_column_name":"red","percentage":"0.17080890973036342321"},{"yes_count":"7201","max_value_column_name":"white","total_count":"14492","total_column_name":"white","percentage":"0.49689483853160364339"}],"question_word":"Organization"},{"data":[{"yes_count":"3190","max_value_column_name":"black","total_count":"9531","total_column_name":"black","percentage":"0.33469730353583044801"},{"yes_count":"14964","max_value_column_name":"blue","total_count":"37619","total_column_name":"blue","percentage":"0.39777771870597304554"},{"yes_count":"4226","max_value_column_name":"green","total_count":"10522","total_column_name":"green","percentage":"0.40163467021478806311"},{"yes_count":"5054","max_value_column_name":"red","total_count":"25534","total_column_name":"red","percentage":"0.19793216887287538184"},{"yes_count":"7964","max_value_column_name":"white","total_count":"14693","total_column_name":"white","percentage":"0.54202681549036956374"}],"question_word":"Self-Control"},{"data":[{"yes_count":"2698","max_value_column_name":"black","total_count":"9511","total_column_name":"black","percentage":"0.28367153821890442645"},{"yes_count":"18393","max_value_column_name":"blue","total_count":"37454","total_column_name":"blue","percentage":"0.49108239440380199712"},{"yes_count":"6716","max_value_column_name":"green","total_count":"10072","total_column_name":"green","percentage":"0.66679904686258935663"},{"yes_count":"18518","max_value_column_name":"red","total_count":"25162","total_column_name":"red","percentage":"0.73595103727843573643"},{"yes_count":"12623","max_value_column_name":"white","total_count":"15565","total_column_name":"white","percentage":"0.81098618695791840668"}],"question_word":"Supportive"},{"data":[{"yes_count":"2808","max_value_column_name":"black","total_count":"9464","total_column_name":"black","percentage":"0.29670329670329670330"},{"yes_count":"23874","max_value_column_name":"blue","total_count":"37475","total_column_name":"blue","percentage":"0.63706470980653769179"},{"yes_count":"3191","max_value_column_name":"green","total_count":"10336","total_column_name":"green","percentage":"0.30872678018575851393"},{"yes_count":"6618","max_value_column_name":"red","total_count":"25730","total_column_name":"red","percentage":"0.25720948309366498251"},{"yes_count":"6035","max_value_column_name":"white","total_count":"15113","total_column_name":"white","percentage":"0.39932508436445444319"}],"question_word":"Scholarly"},{"data":[{"yes_count":"4882","max_value_column_name":"black","total_count":"9469","total_column_name":"black","percentage":"0.51557714647798077939"},{"yes_count":"12273","max_value_column_name":"blue","total_count":"37786","total_column_name":"blue","percentage":"0.32480283702958767798"},{"yes_count":"2619","max_value_column_name":"green","total_count":"10506","total_column_name":"green","percentage":"0.24928612221587664192"},{"yes_count":"6346","max_value_column_name":"red","total_count":"25493","total_column_name":"red","percentage":"0.24893107911975836504"},{"yes_count":"5785","max_value_column_name":"white","total_count":"14558","total_column_name":"white","percentage":"0.39737601318862481110"}],"question_word":"Decisive"},{"data":[{"yes_count":"6375","max_value_column_name":"black","total_count":"9373","total_column_name":"black","percentage":"0.68014509762082577617"},{"yes_count":"23879","max_value_column_name":"blue","total_count":"37340","total_column_name":"blue","percentage":"0.63950187466523835029"},{"yes_count":"6749","max_value_column_name":"green","total_count":"10027","total_column_name":"green","percentage":"0.67308267677271367308"},{"yes_count":"21217","max_value_column_name":"red","total_count":"26182","total_column_name":"red","percentage":"0.81036590023680391108"},{"yes_count":"8827","max_value_column_name":"white","total_count":"14999","total_column_name":"white","percentage":"0.58850590039335955730"}],"question_word":"Freedom"},{"data":[{"yes_count":"6576","max_value_column_name":"black","total_count":"9594","total_column_name":"black","percentage":"0.68542839274546591620"},{"yes_count":"11657","max_value_column_name":"blue","total_count":"37779","total_column_name":"blue","percentage":"0.30855766431086053098"},{"yes_count":"2736","max_value_column_name":"green","total_count":"10240","total_column_name":"green","percentage":"0.26718750000000000000"},{"yes_count":"8427","max_value_column_name":"red","total_count":"25432","total_column_name":"red","percentage":"0.33135419943378420887"},{"yes_count":"4384","max_value_column_name":"white","total_count":"14761","total_column_name":"white","percentage":"0.29699884831650972156"}],"question_word":"Relentless"},{"data":[{"yes_count":"3016","max_value_column_name":"black","total_count":"9423","total_column_name":"black","percentage":"0.32006791892178711663"},{"yes_count":"17858","max_value_column_name":"blue","total_count":"37375","total_column_name":"blue","percentage":"0.47780602006688963211"},{"yes_count":"7094","max_value_column_name":"green","total_count":"10570","total_column_name":"green","percentage":"0.67114474929044465468"},{"yes_count":"7491","max_value_column_name":"red","total_count":"25286","total_column_name":"red","percentage":"0.29625088982045400617"},{"yes_count":"7423","max_value_column_name":"white","total_count":"14977","total_column_name":"white","percentage":"0.49562662749549308940"}],"question_word":"Calm"},{"data":[{"yes_count":"2879","max_value_column_name":"black","total_count":"9402","total_column_name":"black","percentage":"0.30621144437353754520"},{"yes_count":"10140","max_value_column_name":"blue","total_count":"37567","total_column_name":"blue","percentage":"0.26991774695876700295"},{"yes_count":"2947","max_value_column_name":"green","total_count":"10326","total_column_name":"green","percentage":"0.28539608754600038737"},{"yes_count":"3933","max_value_column_name":"red","total_count":"25614","total_column_name":"red","percentage":"0.15354884047786366831"},{"yes_count":"7727","max_value_column_name":"white","total_count":"14625","total_column_name":"white","percentage":"0.52834188034188034188"}],"question_word":"Discipline"},{"data":[{"yes_count":"4545","max_value_column_name":"black","total_count":"9376","total_column_name":"black","percentage":"0.48474829351535836177"},{"yes_count":"7938","max_value_column_name":"blue","total_count":"37666","total_column_name":"blue","percentage":"0.21074709286890033452"},{"yes_count":"2125","max_value_column_name":"green","total_count":"10270","total_column_name":"green","percentage":"0.20691333982473222980"},{"yes_count":"8873","max_value_column_name":"red","total_count":"25478","total_column_name":"red","percentage":"0.34826124499568254965"},{"yes_count":"2408","max_value_column_name":"white","total_count":"15103","total_column_name":"white","percentage":"0.15943852214791763226"}],"question_word":"Uninhibited"},{"data":[{"yes_count":"2113","max_value_column_name":"black","total_count":"9415","total_column_name":"black","percentage":"0.22442910249601699416"},{"yes_count":"13033","max_value_column_name":"blue","total_count":"37503","total_column_name":"blue","percentage":"0.34751886515745407034"},{"yes_count":"6605","max_value_column_name":"green","total_count":"10304","total_column_name":"green","percentage":"0.64101319875776397516"},{"yes_count":"7708","max_value_column_name":"red","total_count":"25581","total_column_name":"red","percentage":"0.30131738399593448262"},{"yes_count":"6781","max_value_column_name":"white","total_count":"14966","total_column_name":"white","percentage":"0.45309367900574635841"}],"question_word":"Balance"},{"data":[{"yes_count":"5884","max_value_column_name":"black","total_count":"9527","total_column_name":"black","percentage":"0.61761309961163010392"},{"yes_count":"28124","max_value_column_name":"blue","total_count":"37905","total_column_name":"blue","percentage":"0.74196016356681176626"},{"yes_count":"4107","max_value_column_name":"green","total_count":"10258","total_column_name":"green","percentage":"0.40037044258139988302"},{"yes_count":"9355","max_value_column_name":"red","total_count":"25484","total_column_name":"red","percentage":"0.36709307800973159630"},{"yes_count":"7573","max_value_column_name":"white","total_count":"14906","total_column_name":"white","percentage":"0.50805044948342949148"}],"question_word":"Strategic"},{"data":[{"yes_count":"4027","max_value_column_name":"black","total_count":"9490","total_column_name":"black","percentage":"0.42434141201264488936"},{"yes_count":"19626","max_value_column_name":"blue","total_count":"37465","total_column_name":"blue","percentage":"0.52384892566395302282"},{"yes_count":"8007","max_value_column_name":"green","total_count":"10677","total_column_name":"green","percentage":"0.74992975554931160438"},{"yes_count":"14682","max_value_column_name":"red","total_count":"25157","total_column_name":"red","percentage":"0.58361489843781054975"},{"yes_count":"11672","max_value_column_name":"white","total_count":"14711","total_column_name":"white","percentage":"0.79341988987832234382"}],"question_word":"Respect"},{"data":[{"yes_count":"3859","max_value_column_name":"black","total_count":"9559","total_column_name":"black","percentage":"0.40370331624646929595"},{"yes_count":"14583","max_value_column_name":"blue","total_count":"37585","total_column_name":"blue","percentage":"0.38800053212717839564"},{"yes_count":"2989","max_value_column_name":"green","total_count":"10237","total_column_name":"green","percentage":"0.29198007228680277425"},{"yes_count":"5604","max_value_column_name":"red","total_count":"25558","total_column_name":"red","percentage":"0.21926598325377572580"},{"yes_count":"8209","max_value_column_name":"white","total_count":"14595","total_column_name":"white","percentage":"0.56245289482699554642"}],"question_word":"Professional"},{"data":[{"yes_count":"6937","max_value_column_name":"black","total_count":"10448","total_column_name":"black","percentage":"0.66395482388973966309"},{"yes_count":"15133","max_value_column_name":"blue","total_count":"37803","total_column_name":"blue","percentage":"0.40031214453879321747"},{"yes_count":"3150","max_value_column_name":"green","total_count":"10346","total_column_name":"green","percentage":"0.30446549391069012179"},{"yes_count":"13077","max_value_column_name":"red","total_count":"25392","total_column_name":"red","percentage":"0.51500472589792060491"},{"yes_count":"4256","max_value_column_name":"white","total_count":"14750","total_column_name":"white","percentage":"0.28854237288135593220"}],"question_word":"Profanity"},{"data":[{"yes_count":"5126","max_value_column_name":"black","total_count":"9544","total_column_name":"black","percentage":"0.53709136630343671417"},{"yes_count":"22119","max_value_column_name":"blue","total_count":"37523","total_column_name":"blue","percentage":"0.58947845321536124510"},{"yes_count":"7096","max_value_column_name":"green","total_count":"10661","total_column_name":"green","percentage":"0.66560360191351655567"},{"yes_count":"11564","max_value_column_name":"red","total_count":"25510","total_column_name":"red","percentage":"0.45331242649941199530"},{"yes_count":"8898","max_value_column_name":"white","total_count":"14710","total_column_name":"white","percentage":"0.60489462950373895309"}],"question_word":"Common sense"},{"data":[{"yes_count":"6028","max_value_column_name":"black","total_count":"9658","total_column_name":"black","percentage":"0.62414578587699316629"},{"yes_count":"25444","max_value_column_name":"blue","total_count":"37320","total_column_name":"blue","percentage":"0.68177920685959271168"},{"yes_count":"3239","max_value_column_name":"green","total_count":"10357","total_column_name":"green","percentage":"0.31273534807376653471"},{"yes_count":"6608","max_value_column_name":"red","total_count":"25569","total_column_name":"red","percentage":"0.25843795220775157417"},{"yes_count":"5675","max_value_column_name":"white","total_count":"14986","total_column_name":"white","percentage":"0.37868677432270118778"}],"question_word":"Calculating"},{"data":[{"yes_count":"5522","max_value_column_name":"black","total_count":"9439","total_column_name":"black","percentage":"0.58501959953384892467"},{"yes_count":"24340","max_value_column_name":"blue","total_count":"37787","total_column_name":"blue","percentage":"0.64413687246936777199"},{"yes_count":"6078","max_value_column_name":"green","total_count":"10167","total_column_name":"green","percentage":"0.59781646503393331366"},{"yes_count":"14563","max_value_column_name":"red","total_count":"25301","total_column_name":"red","percentage":"0.57558989763250464409"},{"yes_count":"7706","max_value_column_name":"white","total_count":"15071","total_column_name":"white","percentage":"0.51131311790856612036"}],"question_word":"Adaptability"},{"data":[{"yes_count":"3135","max_value_column_name":"black","total_count":"9648","total_column_name":"black","percentage":"0.32493781094527363184"},{"yes_count":"15221","max_value_column_name":"blue","total_count":"37651","total_column_name":"blue","percentage":"0.40426549095641550025"},{"yes_count":"5557","max_value_column_name":"green","total_count":"10021","total_column_name":"green","percentage":"0.55453547550144696138"},{"yes_count":"20939","max_value_column_name":"red","total_count":"25955","total_column_name":"red","percentage":"0.80674243883644769794"},{"yes_count":"8913","max_value_column_name":"white","total_count":"14867","total_column_name":"white","percentage":"0.59951570592587610143"}],"question_word":"Affection"},{"data":[{"yes_count":"2101","max_value_column_name":"black","total_count":"9488","total_column_name":"black","percentage":"0.22143760539629005059"},{"yes_count":"14650","max_value_column_name":"blue","total_count":"37616","total_column_name":"blue","percentage":"0.38946193109315185028"},{"yes_count":"6547","max_value_column_name":"green","total_count":"10450","total_column_name":"green","percentage":"0.62650717703349282297"},{"yes_count":"12699","max_value_column_name":"red","total_count":"25241","total_column_name":"red","percentage":"0.50311001941286002932"},{"yes_count":"8631","max_value_column_name":"white","total_count":"15073","total_column_name":"white","percentage":"0.57261328202746633052"}],"question_word":"Agreeable"},{"data":[{"yes_count":"7295","max_value_column_name":"black","total_count":"9842","total_column_name":"black","percentage":"0.74121113594797805324"},{"yes_count":"15481","max_value_column_name":"blue","total_count":"37658","total_column_name":"blue","percentage":"0.41109458813532317170"},{"yes_count":"3109","max_value_column_name":"green","total_count":"10216","total_column_name":"green","percentage":"0.30432654659357870008"},{"yes_count":"9886","max_value_column_name":"red","total_count":"25269","total_column_name":"red","percentage":"0.39123036131227986861"},{"yes_count":"5402","max_value_column_name":"white","total_count":"14999","total_column_name":"white","percentage":"0.36015734382292152810"}],"question_word":"Ambition"},{"data":[{"yes_count":"5100","max_value_column_name":"black","total_count":"9635","total_column_name":"black","percentage":"0.52932018681888946549"},{"yes_count":"6080","max_value_column_name":"blue","total_count":"38003","total_column_name":"blue","percentage":"0.15998736941820382601"},{"yes_count":"1160","max_value_column_name":"green","total_count":"10302","total_column_name":"green","percentage":"0.11259949524364201126"},{"yes_count":"3035","max_value_column_name":"red","total_count":"25583","total_column_name":"red","percentage":"0.11863346753703631318"},{"yes_count":"1451","max_value_column_name":"white","total_count":"14947","total_column_name":"white","percentage":"0.09707633638857295778"}],"question_word":"Amorality"},{"data":[{"yes_count":"5613","max_value_column_name":"black","total_count":"9433","total_column_name":"black","percentage":"0.59503869394678257182"},{"yes_count":"34069","max_value_column_name":"blue","total_count":"38448","total_column_name":"blue","percentage":"0.88610590928006658344"},{"yes_count":"5134","max_value_column_name":"green","total_count":"9904","total_column_name":"green","percentage":"0.51837641357027463651"},{"yes_count":"11365","max_value_column_name":"red","total_count":"25389","total_column_name":"red","percentage":"0.44763480247351215093"},{"yes_count":"8314","max_value_column_name":"white","total_count":"14680","total_column_name":"white","percentage":"0.56634877384196185286"}],"question_word":"Analyzing"},{"data":[{"yes_count":"5572","max_value_column_name":"black","total_count":"9242","total_column_name":"black","percentage":"0.60289980523696169660"},{"yes_count":"7781","max_value_column_name":"blue","total_count":"37611","total_column_name":"blue","percentage":"0.20688096567493552418"},{"yes_count":"988","max_value_column_name":"green","total_count":"10245","total_column_name":"green","percentage":"0.09643728648121034651"},{"yes_count":"4748","max_value_column_name":"red","total_count":"25453","total_column_name":"red","percentage":"0.18653989706517895729"},{"yes_count":"1797","max_value_column_name":"white","total_count":"14955","total_column_name":"white","percentage":"0.12016048144433299900"}],"question_word":"Arrogant"},{"data":[{"yes_count":"4364","max_value_column_name":"black","total_count":"9446","total_column_name":"black","percentage":"0.46199449502434893076"},{"yes_count":"21716","max_value_column_name":"blue","total_count":"37467","total_column_name":"blue","percentage":"0.57960338431152747751"},{"yes_count":"6513","max_value_column_name":"green","total_count":"10187","total_column_name":"green","percentage":"0.63934426229508196721"},{"yes_count":"18104","max_value_column_name":"red","total_count":"25875","total_column_name":"red","percentage":"0.69967149758454106280"},{"yes_count":"9685","max_value_column_name":"white","total_count":"14926","total_column_name":"white","percentage":"0.64886774755460270669"}],"question_word":"Authenticity"},{"data":[{"yes_count":"3601","max_value_column_name":"black","total_count":"9287","total_column_name":"black","percentage":"0.38774631204910089372"},{"yes_count":"6622","max_value_column_name":"blue","total_count":"37898","total_column_name":"blue","percentage":"0.17473217584041374215"},{"yes_count":"1566","max_value_column_name":"green","total_count":"10703","total_column_name":"green","percentage":"0.14631411753713911987"},{"yes_count":"3344","max_value_column_name":"red","total_count":"25796","total_column_name":"red","percentage":"0.12963250116297100326"},{"yes_count":"5340","max_value_column_name":"white","total_count":"14498","total_column_name":"white","percentage":"0.36832666574699958615"}],"question_word":"Authority"},{"data":[{"yes_count":"3031","max_value_column_name":"black","total_count":"9484","total_column_name":"black","percentage":"0.31959088991986503585"},{"yes_count":"11318","max_value_column_name":"blue","total_count":"37728","total_column_name":"blue","percentage":"0.29998939779474130619"},{"yes_count":"4691","max_value_column_name":"green","total_count":"10363","total_column_name":"green","percentage":"0.45266814628968445431"},{"yes_count":"11333","max_value_column_name":"red","total_count":"24939","total_column_name":"red","percentage":"0.45442880628734111231"},{"yes_count":"6733","max_value_column_name":"white","total_count":"14903","total_column_name":"white","percentage":"0.45178823055760585117"}],"question_word":"Being Present"},{"data":[{"yes_count":"1891","max_value_column_name":"black","total_count":"9679","total_column_name":"black","percentage":"0.19537142266763095361"},{"yes_count":"13027","max_value_column_name":"blue","total_count":"37640","total_column_name":"blue","percentage":"0.34609458023379383634"},{"yes_count":"4905","max_value_column_name":"green","total_count":"10176","total_column_name":"green","percentage":"0.48201650943396226415"},{"yes_count":"11327","max_value_column_name":"red","total_count":"25310","total_column_name":"red","percentage":"0.44753062030817858554"},{"yes_count":"9568","max_value_column_name":"white","total_count":"15075","total_column_name":"white","percentage":"0.63469320066334991708"}],"question_word":"Benevolence"},{"data":[{"yes_count":"4487","max_value_column_name":"black","total_count":"9419","total_column_name":"black","percentage":"0.47637753477014545068"},{"yes_count":"8780","max_value_column_name":"blue","total_count":"38023","total_column_name":"blue","percentage":"0.23091286852694421797"},{"yes_count":"2335","max_value_column_name":"green","total_count":"10377","total_column_name":"green","percentage":"0.22501686421894574540"},{"yes_count":"10937","max_value_column_name":"red","total_count":"24817","total_column_name":"red","percentage":"0.44070596768344280131"},{"yes_count":"4233","max_value_column_name":"white","total_count":"15151","total_column_name":"white","percentage":"0.27938749917497194905"}],"question_word":"Boldness"},{"data":[{"yes_count":"3437","max_value_column_name":"black","total_count":"9621","total_column_name":"black","percentage":"0.35723937220663132730"},{"yes_count":"17222","max_value_column_name":"blue","total_count":"37514","total_column_name":"blue","percentage":"0.45908194274137655275"},{"yes_count":"5740","max_value_column_name":"green","total_count":"10031","total_column_name":"green","percentage":"0.57222609909281228193"},{"yes_count":"16911","max_value_column_name":"red","total_count":"25596","total_column_name":"red","percentage":"0.66068917018284106892"},{"yes_count":"6762","max_value_column_name":"white","total_count":"14984","total_column_name":"white","percentage":"0.45128136679124399359"}],"question_word":"Casual"},{"data":[{"yes_count":"2804","max_value_column_name":"black","total_count":"9562","total_column_name":"black","percentage":"0.29324409119431081364"},{"yes_count":"9688","max_value_column_name":"blue","total_count":"37721","total_column_name":"blue","percentage":"0.25683306381060947483"},{"yes_count":"4377","max_value_column_name":"green","total_count":"9937","total_column_name":"green","percentage":"0.44047499245245043776"},{"yes_count":"4648","max_value_column_name":"red","total_count":"25683","total_column_name":"red","percentage":"0.18097574270918506405"},{"yes_count":"4583","max_value_column_name":"white","total_count":"15113","total_column_name":"white","percentage":"0.30324885859855753325"}],"question_word":"Centered"},{"data":[{"yes_count":"3693","max_value_column_name":"black","total_count":"9526","total_column_name":"black","percentage":"0.38767583455805164812"},{"yes_count":"10193","max_value_column_name":"blue","total_count":"37815","total_column_name":"blue","percentage":"0.26954912071929128653"},{"yes_count":"2916","max_value_column_name":"green","total_count":"10467","total_column_name":"green","percentage":"0.27858985382631126397"},{"yes_count":"12862","max_value_column_name":"red","total_count":"24905","total_column_name":"red","percentage":"0.51644248142943184100"},{"yes_count":"4334","max_value_column_name":"white","total_count":"15214","total_column_name":"white","percentage":"0.28486919942158538189"}],"question_word":"Charm"},{"data":[{"yes_count":"4400","max_value_column_name":"black","total_count":"9484","total_column_name":"black","percentage":"0.46393926613243357233"},{"yes_count":"12099","max_value_column_name":"blue","total_count":"36624","total_column_name":"blue","percentage":"0.33035714285714285714"},{"yes_count":"1662","max_value_column_name":"green","total_count":"10564","total_column_name":"green","percentage":"0.15732677016281711473"},{"yes_count":"2485","max_value_column_name":"red","total_count":"25733","total_column_name":"red","percentage":"0.09656860840166323398"},{"yes_count":"2375","max_value_column_name":"white","total_count":"15348","total_column_name":"white","percentage":"0.15474328902788636956"}],"question_word":"Cold (attitude)"},{"data":[{"yes_count":"3800","max_value_column_name":"black","total_count":"9624","total_column_name":"black","percentage":"0.39484621778886118038"},{"yes_count":"15797","max_value_column_name":"blue","total_count":"37512","total_column_name":"blue","percentage":"0.42111857538920878652"},{"yes_count":"5192","max_value_column_name":"green","total_count":"10085","total_column_name":"green","percentage":"0.51482399603371343580"},{"yes_count":"12623","max_value_column_name":"red","total_count":"25280","total_column_name":"red","percentage":"0.49932753164556962025"},{"yes_count":"11339","max_value_column_name":"white","total_count":"15296","total_column_name":"white","percentage":"0.74130491631799163180"}],"question_word":"Commitment"},{"data":[{"yes_count":"7385","max_value_column_name":"black","total_count":"9694","total_column_name":"black","percentage":"0.76181142975036104807"},{"yes_count":"16766","max_value_column_name":"blue","total_count":"37470","total_column_name":"blue","percentage":"0.44745129436882839605"},{"yes_count":"3209","max_value_column_name":"green","total_count":"10335","total_column_name":"green","percentage":"0.31049830672472181906"},{"yes_count":"11126","max_value_column_name":"red","total_count":"25243","total_column_name":"red","percentage":"0.44075585310779225924"},{"yes_count":"5775","max_value_column_name":"white","total_count":"14944","total_column_name":"white","percentage":"0.38644271948608137045"}],"question_word":"Competitive"},{"data":[{"yes_count":"4735","max_value_column_name":"black","total_count":"9382","total_column_name":"black","percentage":"0.50468983159241099979"},{"yes_count":"27172","max_value_column_name":"blue","total_count":"37744","total_column_name":"blue","percentage":"0.71990250105977108944"},{"yes_count":"4180","max_value_column_name":"green","total_count":"10188","total_column_name":"green","percentage":"0.41028661170003926188"},{"yes_count":"11978","max_value_column_name":"red","total_count":"25449","total_column_name":"red","percentage":"0.47066682384376596330"},{"yes_count":"5928","max_value_column_name":"white","total_count":"15035","total_column_name":"white","percentage":"0.39428001330229464583"}],"question_word":"Complexity"},{"data":[{"yes_count":"2280","max_value_column_name":"black","total_count":"9607","total_column_name":"black","percentage":"0.23732694909961486416"},{"yes_count":"8567","max_value_column_name":"blue","total_count":"37698","total_column_name":"blue","percentage":"0.22725343519550108759"},{"yes_count":"4788","max_value_column_name":"green","total_count":"9900","total_column_name":"green","percentage":"0.48363636363636363636"},{"yes_count":"9834","max_value_column_name":"red","total_count":"25417","total_column_name":"red","percentage":"0.38690640122752488492"},{"yes_count":"5768","max_value_column_name":"white","total_count":"15045","total_column_name":"white","percentage":"0.38338318378198737122"}],"question_word":"Connected"},{"data":[{"yes_count":"2420","max_value_column_name":"black","total_count":"9455","total_column_name":"black","percentage":"0.25594923320994182972"},{"yes_count":"12165","max_value_column_name":"blue","total_count":"37593","total_column_name":"blue","percentage":"0.32359747825393025297"},{"yes_count":"4421","max_value_column_name":"green","total_count":"10142","total_column_name":"green","percentage":"0.43591007690790771051"},{"yes_count":"10105","max_value_column_name":"red","total_count":"25517","total_column_name":"red","percentage":"0.39601050280205353294"},{"yes_count":"9461","max_value_column_name":"white","total_count":"15000","total_column_name":"white","percentage":"0.63073333333333333333"}],"question_word":"Contribution"},{"data":[{"yes_count":"2314","max_value_column_name":"black","total_count":"9638","total_column_name":"black","percentage":"0.24009130525005187798"},{"yes_count":"13868","max_value_column_name":"blue","total_count":"37604","total_column_name":"blue","percentage":"0.36879055419636208914"},{"yes_count":"5625","max_value_column_name":"green","total_count":"10243","total_column_name":"green","percentage":"0.54915552084350288002"},{"yes_count":"13420","max_value_column_name":"red","total_count":"25493","total_column_name":"red","percentage":"0.52641901698505472090"},{"yes_count":"11294","max_value_column_name":"white","total_count":"15662","total_column_name":"white","percentage":"0.72110841527263440174"}],"question_word":"Cooperation"},{"data":[{"yes_count":"5548","max_value_column_name":"black","total_count":"9503","total_column_name":"black","percentage":"0.58381563716721035462"},{"yes_count":"33998","max_value_column_name":"blue","total_count":"38826","total_column_name":"blue","percentage":"0.87565033740277133879"},{"yes_count":"6398","max_value_column_name":"green","total_count":"10082","total_column_name":"green","percentage":"0.63459631025590160682"},{"yes_count":"19107","max_value_column_name":"red","total_count":"25079","total_column_name":"red","percentage":"0.76187248295386578412"},{"yes_count":"8752","max_value_column_name":"white","total_count":"14715","total_column_name":"white","percentage":"0.59476724430852871220"}],"question_word":"Curiosity"},{"data":[{"yes_count":"6032","max_value_column_name":"black","total_count":"9490","total_column_name":"black","percentage":"0.63561643835616438356"},{"yes_count":"21144","max_value_column_name":"blue","total_count":"37136","total_column_name":"blue","percentage":"0.56936665230504093063"},{"yes_count":"2656","max_value_column_name":"green","total_count":"10329","total_column_name":"green","percentage":"0.25714009100590570239"},{"yes_count":"7733","max_value_column_name":"red","total_count":"25700","total_column_name":"red","percentage":"0.30089494163424124514"},{"yes_count":"3842","max_value_column_name":"white","total_count":"15037","total_column_name":"white","percentage":"0.25550309237214869987"}],"question_word":"Cynical"},{"data":[{"yes_count":"5565","max_value_column_name":"black","total_count":"9395","total_column_name":"black","percentage":"0.59233634912187333688"},{"yes_count":"9881","max_value_column_name":"blue","total_count":"37701","total_column_name":"blue","percentage":"0.26208853876554998541"},{"yes_count":"1423","max_value_column_name":"green","total_count":"10316","total_column_name":"green","percentage":"0.13794106242729740209"},{"yes_count":"4592","max_value_column_name":"red","total_count":"25323","total_column_name":"red","percentage":"0.18133712435335465782"},{"yes_count":"1866","max_value_column_name":"white","total_count":"15192","total_column_name":"white","percentage":"0.12282780410742496051"}],"question_word":"Deception"},{"data":[{"yes_count":"6389","max_value_column_name":"black","total_count":"9751","total_column_name":"black","percentage":"0.65521484975899907702"},{"yes_count":"14159","max_value_column_name":"blue","total_count":"37645","total_column_name":"blue","percentage":"0.37611900650816841546"},{"yes_count":"2792","max_value_column_name":"green","total_count":"10262","total_column_name":"green","percentage":"0.27207172091210290392"},{"yes_count":"11712","max_value_column_name":"red","total_count":"25425","total_column_name":"red","percentage":"0.46064896755162241888"},{"yes_count":"3583","max_value_column_name":"white","total_count":"15000","total_column_name":"white","percentage":"0.23886666666666666667"}],"question_word":"Defiance"},{"data":[{"yes_count":"6061","max_value_column_name":"black","total_count":"9353","total_column_name":"black","percentage":"0.64802737089703838341"},{"yes_count":"35814","max_value_column_name":"blue","total_count":"38852","total_column_name":"blue","percentage":"0.92180582724184083187"},{"yes_count":"6505","max_value_column_name":"green","total_count":"9940","total_column_name":"green","percentage":"0.65442655935613682093"},{"yes_count":"17325","max_value_column_name":"red","total_count":"25007","total_column_name":"red","percentage":"0.69280601431599152237"},{"yes_count":"9824","max_value_column_name":"white","total_count":"14696","total_column_name":"white","percentage":"0.66848121937942297224"}],"question_word":"Desire to Know"},{"data":[{"yes_count":"2378","max_value_column_name":"black","total_count":"9483","total_column_name":"black","percentage":"0.25076452599388379205"},{"yes_count":"5944","max_value_column_name":"blue","total_count":"38012","total_column_name":"blue","percentage":"0.15637167210354624855"},{"yes_count":"4351","max_value_column_name":"green","total_count":"10308","total_column_name":"green","percentage":"0.42209934031819945673"},{"yes_count":"6429","max_value_column_name":"red","total_count":"25698","total_column_name":"red","percentage":"0.25017511090357226243"},{"yes_count":"3950","max_value_column_name":"white","total_count":"14986","total_column_name":"white","percentage":"0.26357934071800346991"}],"question_word":"Destiny"},{"data":[{"yes_count":"3798","max_value_column_name":"black","total_count":"9659","total_column_name":"black","percentage":"0.39320840666735686924"},{"yes_count":"20532","max_value_column_name":"blue","total_count":"37154","total_column_name":"blue","percentage":"0.55261882973569467621"},{"yes_count":"3435","max_value_column_name":"green","total_count":"10323","total_column_name":"green","percentage":"0.33275210694565533275"},{"yes_count":"7074","max_value_column_name":"red","total_count":"25626","total_column_name":"red","percentage":"0.27604776398969796301"},{"yes_count":"5318","max_value_column_name":"white","total_count":"14870","total_column_name":"white","percentage":"0.35763281775386684600"}],"question_word":"Discerning"},{"data":[{"yes_count":"6879","max_value_column_name":"black","total_count":"9559","total_column_name":"black","percentage":"0.71963594518255047599"},{"yes_count":"8455","max_value_column_name":"blue","total_count":"37601","total_column_name":"blue","percentage":"0.22486104092976250632"},{"yes_count":"1507","max_value_column_name":"green","total_count":"10107","total_column_name":"green","percentage":"0.14910458098347679826"},{"yes_count":"5262","max_value_column_name":"red","total_count":"25425","total_column_name":"red","percentage":"0.20696165191740412979"},{"yes_count":"3010","max_value_column_name":"white","total_count":"14821","total_column_name":"white","percentage":"0.20309020983739288847"}],"question_word":"Dominance"},{"data":[{"yes_count":"1681","max_value_column_name":"black","total_count":"9470","total_column_name":"black","percentage":"0.17750791974656810982"},{"yes_count":"6817","max_value_column_name":"blue","total_count":"37695","total_column_name":"blue","percentage":"0.18084626608303488526"},{"yes_count":"5148","max_value_column_name":"green","total_count":"9930","total_column_name":"green","percentage":"0.51842900302114803625"},{"yes_count":"7012","max_value_column_name":"red","total_count":"25321","total_column_name":"red","percentage":"0.27692429208956992220"},{"yes_count":"4120","max_value_column_name":"white","total_count":"14965","total_column_name":"white","percentage":"0.27530905446040761777"}],"question_word":"Earthy"},{"data":[{"yes_count":"5778","max_value_column_name":"black","total_count":"9582","total_column_name":"black","percentage":"0.60300563556668753914"},{"yes_count":"24563","max_value_column_name":"blue","total_count":"37663","total_column_name":"blue","percentage":"0.65217853065342643974"},{"yes_count":"4469","max_value_column_name":"green","total_count":"10247","total_column_name":"green","percentage":"0.43612764711622914024"},{"yes_count":"9270","max_value_column_name":"red","total_count":"25901","total_column_name":"red","percentage":"0.35790123933438863364"},{"yes_count":"8050","max_value_column_name":"white","total_count":"14754","total_column_name":"white","percentage":"0.54561474854276806290"}],"question_word":"Efficiency"},{"data":[{"yes_count":"6399","max_value_column_name":"black","total_count":"9447","total_column_name":"black","percentage":"0.67735789139409336297"},{"yes_count":"10407","max_value_column_name":"blue","total_count":"37768","total_column_name":"blue","percentage":"0.27555073077737767422"},{"yes_count":"1652","max_value_column_name":"green","total_count":"10362","total_column_name":"green","percentage":"0.15942868172167535225"},{"yes_count":"6965","max_value_column_name":"red","total_count":"25430","total_column_name":"red","percentage":"0.27388910735351946520"},{"yes_count":"2525","max_value_column_name":"white","total_count":"15025","total_column_name":"white","percentage":"0.16805324459234608985"}],"question_word":"Ego"},{"data":[{"yes_count":"3620","max_value_column_name":"black","total_count":"9430","total_column_name":"black","percentage":"0.38388123011664899258"},{"yes_count":"13758","max_value_column_name":"blue","total_count":"37481","total_column_name":"blue","percentage":"0.36706598009658226835"},{"yes_count":"5158","max_value_column_name":"green","total_count":"10144","total_column_name":"green","percentage":"0.50847791798107255521"},{"yes_count":"21587","max_value_column_name":"red","total_count":"25919","total_column_name":"red","percentage":"0.83286392221922142058"},{"yes_count":"7502","max_value_column_name":"white","total_count":"14715","total_column_name":"white","percentage":"0.50981991165477404010"}],"question_word":"Emotion"},{"data":[{"yes_count":"2462","max_value_column_name":"black","total_count":"9533","total_column_name":"black","percentage":"0.25826077834889331795"},{"yes_count":"18699","max_value_column_name":"blue","total_count":"37373","total_column_name":"blue","percentage":"0.50033446605838439515"},{"yes_count":"6585","max_value_column_name":"green","total_count":"10119","total_column_name":"green","percentage":"0.65075600355766380077"},{"yes_count":"20304","max_value_column_name":"red","total_count":"25914","total_column_name":"red","percentage":"0.78351470247742532994"},{"yes_count":"10209","max_value_column_name":"white","total_count":"14714","total_column_name":"white","percentage":"0.69382900638847356259"}],"question_word":"Empathy"},{"data":[{"yes_count":"3272","max_value_column_name":"black","total_count":"9454","total_column_name":"black","percentage":"0.34609689020520414639"},{"yes_count":"12450","max_value_column_name":"blue","total_count":"37533","total_column_name":"blue","percentage":"0.33170809687475021981"},{"yes_count":"4197","max_value_column_name":"green","total_count":"10317","total_column_name":"green","percentage":"0.40680430357662111079"},{"yes_count":"17482","max_value_column_name":"red","total_count":"25603","total_column_name":"red","percentage":"0.68281060813185954771"},{"yes_count":"6641","max_value_column_name":"white","total_count":"14896","total_column_name":"white","percentage":"0.44582438238453276047"}],"question_word":"Enthusiasm"},{"data":[{"yes_count":"2984","max_value_column_name":"black","total_count":"9523","total_column_name":"black","percentage":"0.31334663446392943400"},{"yes_count":"22165","max_value_column_name":"blue","total_count":"37249","total_column_name":"blue","percentage":"0.59504953153104781336"},{"yes_count":"6726","max_value_column_name":"green","total_count":"10003","total_column_name":"green","percentage":"0.67239828051584524643"},{"yes_count":"15857","max_value_column_name":"red","total_count":"25327","total_column_name":"red","percentage":"0.62609073320961819402"},{"yes_count":"13114","max_value_column_name":"white","total_count":"15778","total_column_name":"white","percentage":"0.83115730764355431614"}],"question_word":"Fairness"},{"data":[{"yes_count":"3840","max_value_column_name":"black","total_count":"9640","total_column_name":"black","percentage":"0.39834024896265560166"},{"yes_count":"16312","max_value_column_name":"blue","total_count":"36987","total_column_name":"blue","percentage":"0.44101981777381242058"},{"yes_count":"3409","max_value_column_name":"green","total_count":"10344","total_column_name":"green","percentage":"0.32956303170920340294"},{"yes_count":"5643","max_value_column_name":"red","total_count":"25819","total_column_name":"red","percentage":"0.21855997521205313916"},{"yes_count":"6314","max_value_column_name":"white","total_count":"15166","total_column_name":"white","percentage":"0.41632599235131214559"}],"question_word":"Focus"},{"data":[{"yes_count":"1967","max_value_column_name":"black","total_count":"9552","total_column_name":"black","percentage":"0.20592546063651591290"},{"yes_count":"13399","max_value_column_name":"blue","total_count":"37416","total_column_name":"blue","percentage":"0.35810883044686765020"},{"yes_count":"5302","max_value_column_name":"green","total_count":"10122","total_column_name":"green","percentage":"0.52380952380952380952"},{"yes_count":"14323","max_value_column_name":"red","total_count":"25319","total_column_name":"red","percentage":"0.56570164698447805995"},{"yes_count":"10512","max_value_column_name":"white","total_count":"15031","total_column_name":"white","percentage":"0.69935466702148892289"}],"question_word":"Generosity"},{"data":[{"yes_count":"3825","max_value_column_name":"black","total_count":"9578","total_column_name":"black","percentage":"0.39935268323240760075"},{"yes_count":"16910","max_value_column_name":"blue","total_count":"37713","total_column_name":"blue","percentage":"0.44838649802455386737"},{"yes_count":"6950","max_value_column_name":"green","total_count":"10349","total_column_name":"green","percentage":"0.67156246980384578220"},{"yes_count":"13074","max_value_column_name":"red","total_count":"25477","total_column_name":"red","percentage":"0.51316874043254700318"},{"yes_count":"7536","max_value_column_name":"white","total_count":"14969","total_column_name":"white","percentage":"0.50344044358340570512"}],"question_word":"Growth"},{"data":[{"yes_count":"2822","max_value_column_name":"black","total_count":"9507","total_column_name":"black","percentage":"0.29683391185442305670"},{"yes_count":"12148","max_value_column_name":"blue","total_count":"37707","total_column_name":"blue","percentage":"0.32216829766356379452"},{"yes_count":"5182","max_value_column_name":"green","total_count":"10122","total_column_name":"green","percentage":"0.51195415925706382138"},{"yes_count":"11544","max_value_column_name":"red","total_count":"25129","total_column_name":"red","percentage":"0.45938954992240041386"},{"yes_count":"10658","max_value_column_name":"white","total_count":"14970","total_column_name":"white","percentage":"0.71195724782899131597"}],"question_word":"Guardian"},{"data":[{"yes_count":"3949","max_value_column_name":"black","total_count":"9702","total_column_name":"black","percentage":"0.40702947845804988662"},{"yes_count":"12094","max_value_column_name":"blue","total_count":"36676","total_column_name":"blue","percentage":"0.32975242665503326426"},{"yes_count":"1519","max_value_column_name":"green","total_count":"10483","total_column_name":"green","percentage":"0.14490126872078603453"},{"yes_count":"5096","max_value_column_name":"red","total_count":"25663","total_column_name":"red","percentage":"0.19857382223434516619"},{"yes_count":"2350","max_value_column_name":"white","total_count":"15237","total_column_name":"white","percentage":"0.15422983526940998884"}],"question_word":"Guile"},{"data":[{"yes_count":"1467","max_value_column_name":"black","total_count":"9521","total_column_name":"black","percentage":"0.15408045373385148619"},{"yes_count":"10858","max_value_column_name":"blue","total_count":"37693","total_column_name":"blue","percentage":"0.28806409678189584273"},{"yes_count":"7053","max_value_column_name":"green","total_count":"10328","total_column_name":"green","percentage":"0.68290085205267234702"},{"yes_count":"9857","max_value_column_name":"red","total_count":"25412","total_column_name":"red","percentage":"0.38788761215173933575"},{"yes_count":"7220","max_value_column_name":"white","total_count":"14820","total_column_name":"white","percentage":"0.48717948717948717949"}],"question_word":"Harmony"},{"data":[{"yes_count":"2725","max_value_column_name":"black","total_count":"9468","total_column_name":"black","percentage":"0.28781157583438952260"},{"yes_count":"12993","max_value_column_name":"blue","total_count":"37523","total_column_name":"blue","percentage":"0.34626762252485142446"},{"yes_count":"6042","max_value_column_name":"green","total_count":"9955","total_column_name":"green","percentage":"0.60693119035660472125"},{"yes_count":"20195","max_value_column_name":"red","total_count":"25894","total_column_name":"red","percentage":"0.77991040395458407353"},{"yes_count":"9413","max_value_column_name":"white","total_count":"14797","total_column_name":"white","percentage":"0.63614246130972494425"}],"question_word":"Heart"},{"data":[{"yes_count":"2150","max_value_column_name":"black","total_count":"9538","total_column_name":"black","percentage":"0.22541413294191654435"},{"yes_count":"7794","max_value_column_name":"blue","total_count":"37697","total_column_name":"blue","percentage":"0.20675385309175796482"},{"yes_count":"5014","max_value_column_name":"green","total_count":"10051","total_column_name":"green","percentage":"0.49885583524027459954"},{"yes_count":"11400","max_value_column_name":"red","total_count":"25229","total_column_name":"red","percentage":"0.45186095366443378652"},{"yes_count":"5986","max_value_column_name":"white","total_count":"15153","total_column_name":"white","percentage":"0.39503728634593809807"}],"question_word":"Hearty"},{"data":[{"yes_count":"2640","max_value_column_name":"black","total_count":"9497","total_column_name":"black","percentage":"0.27798252079604085501"},{"yes_count":"18546","max_value_column_name":"blue","total_count":"37485","total_column_name":"blue","percentage":"0.49475790316126450580"},{"yes_count":"6363","max_value_column_name":"green","total_count":"10154","total_column_name":"green","percentage":"0.62664959621823911759"},{"yes_count":"16350","max_value_column_name":"red","total_count":"25408","total_column_name":"red","percentage":"0.64349811083123425693"},{"yes_count":"12572","max_value_column_name":"white","total_count":"15489","total_column_name":"white","percentage":"0.81167280005164955775"}],"question_word":"Helpful"},{"data":[{"yes_count":"2937","max_value_column_name":"black","total_count":"9444","total_column_name":"black","percentage":"0.31099110546378653113"},{"yes_count":"12615","max_value_column_name":"blue","total_count":"37738","total_column_name":"blue","percentage":"0.33427844612857067147"},{"yes_count":"4776","max_value_column_name":"green","total_count":"10148","total_column_name":"green","percentage":"0.47063460780449349626"},{"yes_count":"9796","max_value_column_name":"red","total_count":"25429","total_column_name":"red","percentage":"0.38522946242479059342"},{"yes_count":"10829","max_value_column_name":"white","total_count":"14992","total_column_name":"white","percentage":"0.72231856990394877268"}],"question_word":"Honor"},{"data":[{"yes_count":"2124","max_value_column_name":"black","total_count":"9633","total_column_name":"black","percentage":"0.22049205854873871068"},{"yes_count":"12058","max_value_column_name":"blue","total_count":"37733","total_column_name":"blue","percentage":"0.31956112686507831341"},{"yes_count":"7116","max_value_column_name":"green","total_count":"10727","total_column_name":"green","percentage":"0.66337279761349864827"},{"yes_count":"14235","max_value_column_name":"red","total_count":"25474","total_column_name":"red","percentage":"0.55880505613566773966"},{"yes_count":"8611","max_value_column_name":"white","total_count":"14820","total_column_name":"white","percentage":"0.58103913630229419703"}],"question_word":"Hope"},{"data":[{"yes_count":"1482","max_value_column_name":"black","total_count":"9574","total_column_name":"black","percentage":"0.15479423438479214539"},{"yes_count":"12357","max_value_column_name":"blue","total_count":"37568","total_column_name":"blue","percentage":"0.32892355195911413969"},{"yes_count":"5192","max_value_column_name":"green","total_count":"10101","total_column_name":"green","percentage":"0.51400851400851400851"},{"yes_count":"9085","max_value_column_name":"red","total_count":"25449","total_column_name":"red","percentage":"0.35698848677747652167"},{"yes_count":"9336","max_value_column_name":"white","total_count":"15000","total_column_name":"white","percentage":"0.62240000000000000000"}],"question_word":"Humble"},{"data":[{"yes_count":"5138","max_value_column_name":"black","total_count":"9444","total_column_name":"black","percentage":"0.54404913172384582804"},{"yes_count":"29159","max_value_column_name":"blue","total_count":"38420","total_column_name":"blue","percentage":"0.75895366996356064550"},{"yes_count":"6323","max_value_column_name":"green","total_count":"10116","total_column_name":"green","percentage":"0.62504942665085013839"},{"yes_count":"19795","max_value_column_name":"red","total_count":"24970","total_column_name":"red","percentage":"0.79275130156187424910"},{"yes_count":"7994","max_value_column_name":"white","total_count":"14746","total_column_name":"white","percentage":"0.54211311542113115421"}],"question_word":"Imaginative"},{"data":[{"yes_count":"4657","max_value_column_name":"black","total_count":"9368","total_column_name":"black","percentage":"0.49711784799316823228"},{"yes_count":"10931","max_value_column_name":"blue","total_count":"37583","total_column_name":"blue","percentage":"0.29084958624910198760"},{"yes_count":"3076","max_value_column_name":"green","total_count":"10308","total_column_name":"green","percentage":"0.29840900271633682577"},{"yes_count":"17266","max_value_column_name":"red","total_count":"25493","total_column_name":"red","percentage":"0.67728396030282822736"},{"yes_count":"3588","max_value_column_name":"white","total_count":"15050","total_column_name":"white","percentage":"0.23840531561461794020"}],"question_word":"Impulsive"},{"data":[{"yes_count":"7014","max_value_column_name":"black","total_count":"9546","total_column_name":"black","percentage":"0.73475801382778126964"},{"yes_count":"25830","max_value_column_name":"blue","total_count":"37317","total_column_name":"blue","percentage":"0.69217782779966235228"},{"yes_count":"6309","max_value_column_name":"green","total_count":"10216","total_column_name":"green","percentage":"0.61756068911511354738"},{"yes_count":"20247","max_value_column_name":"red","total_count":"26029","total_column_name":"red","percentage":"0.77786315263744285220"},{"yes_count":"7764","max_value_column_name":"white","total_count":"14990","total_column_name":"white","percentage":"0.51794529686457638426"}],"question_word":"Individuality"},{"data":[{"yes_count":"5184","max_value_column_name":"black","total_count":"9274","total_column_name":"black","percentage":"0.55898210049601035152"},{"yes_count":"10216","max_value_column_name":"blue","total_count":"37753","total_column_name":"blue","percentage":"0.27060101184011866607"},{"yes_count":"2082","max_value_column_name":"green","total_count":"10149","total_column_name":"green","percentage":"0.20514336387821460242"},{"yes_count":"6903","max_value_column_name":"red","total_count":"25620","total_column_name":"red","percentage":"0.26943793911007025761"},{"yes_count":"3994","max_value_column_name":"white","total_count":"15096","total_column_name":"white","percentage":"0.26457339692633810281"}],"question_word":"Influence"},{"data":[{"yes_count":"5097","max_value_column_name":"black","total_count":"9433","total_column_name":"black","percentage":"0.54033711438566733807"},{"yes_count":"22332","max_value_column_name":"blue","total_count":"37513","total_column_name":"blue","percentage":"0.59531362461013515315"},{"yes_count":"7186","max_value_column_name":"green","total_count":"10455","total_column_name":"green","percentage":"0.68732663797226207556"},{"yes_count":"14683","max_value_column_name":"red","total_count":"25403","total_column_name":"red","percentage":"0.57800259811833248042"},{"yes_count":"7046","max_value_column_name":"white","total_count":"14822","total_column_name":"white","percentage":"0.47537444339495344758"}],"question_word":"Intuition"},{"data":[{"yes_count":"3272","max_value_column_name":"black","total_count":"9544","total_column_name":"black","percentage":"0.34283319362950544845"},{"yes_count":"21013","max_value_column_name":"blue","total_count":"37238","total_column_name":"blue","percentage":"0.56428916697996670068"},{"yes_count":"2857","max_value_column_name":"green","total_count":"10400","total_column_name":"green","percentage":"0.27471153846153846154"},{"yes_count":"9754","max_value_column_name":"red","total_count":"25335","total_column_name":"red","percentage":"0.38500098677718571147"},{"yes_count":"4457","max_value_column_name":"white","total_count":"15051","total_column_name":"white","percentage":"0.29612650322237725068"}],"question_word":"Inventive"},{"data":[{"yes_count":"4425","max_value_column_name":"black","total_count":"9536","total_column_name":"black","percentage":"0.46403104026845637584"},{"yes_count":"28884","max_value_column_name":"blue","total_count":"37750","total_column_name":"blue","percentage":"0.76513907284768211921"},{"yes_count":"3968","max_value_column_name":"green","total_count":"10145","total_column_name":"green","percentage":"0.39112863479546574667"},{"yes_count":"11313","max_value_column_name":"red","total_count":"25295","total_column_name":"red","percentage":"0.44724253805099822099"},{"yes_count":"6666","max_value_column_name":"white","total_count":"14696","total_column_name":"white","percentage":"0.45359281437125748503"}],"question_word":"Investigative"},{"data":[{"yes_count":"3167","max_value_column_name":"black","total_count":"9502","total_column_name":"black","percentage":"0.33329825299936855399"},{"yes_count":"17085","max_value_column_name":"blue","total_count":"37431","total_column_name":"blue","percentage":"0.45643984932275386712"},{"yes_count":"4921","max_value_column_name":"green","total_count":"10179","total_column_name":"green","percentage":"0.48344631103251792907"},{"yes_count":"12159","max_value_column_name":"red","total_count":"25539","total_column_name":"red","percentage":"0.47609538353107012804"},{"yes_count":"11692","max_value_column_name":"white","total_count":"15398","total_column_name":"white","percentage":"0.75931939212884790232"}],"question_word":"Justice"},{"data":[{"yes_count":"5653","max_value_column_name":"black","total_count":"9348","total_column_name":"black","percentage":"0.60472828412494651262"},{"yes_count":"33811","max_value_column_name":"blue","total_count":"38343","total_column_name":"blue","percentage":"0.88180371906214954490"},{"yes_count":"5873","max_value_column_name":"green","total_count":"10070","total_column_name":"green","percentage":"0.58321747765640516385"},{"yes_count":"13528","max_value_column_name":"red","total_count":"25193","total_column_name":"red","percentage":"0.53697455642440360418"},{"yes_count":"8931","max_value_column_name":"white","total_count":"14778","total_column_name":"white","percentage":"0.60434429557450263906"}],"question_word":"Knowledge"},{"data":[{"yes_count":"2024","max_value_column_name":"black","total_count":"9526","total_column_name":"black","percentage":"0.21247113163972286374"},{"yes_count":"8230","max_value_column_name":"blue","total_count":"37932","total_column_name":"blue","percentage":"0.21696720447115891595"},{"yes_count":"2150","max_value_column_name":"green","total_count":"10366","total_column_name":"green","percentage":"0.20740883658113061933"},{"yes_count":"3696","max_value_column_name":"red","total_count":"25894","total_column_name":"red","percentage":"0.14273576890399320306"},{"yes_count":"7948","max_value_column_name":"white","total_count":"14939","total_column_name":"white","percentage":"0.53203025637592877703"}],"question_word":"Law"},{"data":[{"yes_count":"5193","max_value_column_name":"black","total_count":"9138","total_column_name":"black","percentage":"0.56828627708470124754"},{"yes_count":"9248","max_value_column_name":"blue","total_count":"37832","total_column_name":"blue","percentage":"0.24444914358215267498"},{"yes_count":"1382","max_value_column_name":"green","total_count":"10145","total_column_name":"green","percentage":"0.13622474125184820108"},{"yes_count":"4255","max_value_column_name":"red","total_count":"25461","total_column_name":"red","percentage":"0.16711833785004516712"},{"yes_count":"2512","max_value_column_name":"white","total_count":"14946","total_column_name":"white","percentage":"0.16807172487622106249"}],"question_word":"Leverage"},{"data":[{"yes_count":"3405","max_value_column_name":"black","total_count":"9397","total_column_name":"black","percentage":"0.36234968607002234756"},{"yes_count":"18225","max_value_column_name":"blue","total_count":"37302","total_column_name":"blue","percentage":"0.48857970082033134953"},{"yes_count":"7921","max_value_column_name":"green","total_count":"10782","total_column_name":"green","percentage":"0.73465034316453348173"},{"yes_count":"14423","max_value_column_name":"red","total_count":"25325","total_column_name":"red","percentage":"0.56951628825271470879"},{"yes_count":"6931","max_value_column_name":"white","total_count":"14689","total_column_name":"white","percentage":"0.47184968343658519981"}],"question_word":"Live and let live"},{"data":[{"yes_count":"5437","max_value_column_name":"black","total_count":"9256","total_column_name":"black","percentage":"0.58740276577355229041"},{"yes_count":"32323","max_value_column_name":"blue","total_count":"38069","total_column_name":"blue","percentage":"0.84906354251490714229"},{"yes_count":"5200","max_value_column_name":"green","total_count":"10197","total_column_name":"green","percentage":"0.50995390801216043934"},{"yes_count":"9901","max_value_column_name":"red","total_count":"25346","total_column_name":"red","percentage":"0.39063363055314448039"},{"yes_count":"8599","max_value_column_name":"white","total_count":"14510","total_column_name":"white","percentage":"0.59262577532736044108"}],"question_word":"Logical"},{"data":[{"yes_count":"4353","max_value_column_name":"black","total_count":"9512","total_column_name":"black","percentage":"0.45763246425567703953"},{"yes_count":"22950","max_value_column_name":"blue","total_count":"37555","total_column_name":"blue","percentage":"0.61110371455199041406"},{"yes_count":"4590","max_value_column_name":"green","total_count":"10205","total_column_name":"green","percentage":"0.44977951984321411073"},{"yes_count":"11328","max_value_column_name":"red","total_count":"25323","total_column_name":"red","percentage":"0.44734036251628953915"},{"yes_count":"7367","max_value_column_name":"white","total_count":"14975","total_column_name":"white","percentage":"0.49195325542570951586"}],"question_word":"Looking to the Future"},{"data":[{"yes_count":"3217","max_value_column_name":"black","total_count":"9672","total_column_name":"black","percentage":"0.33260959470636889992"},{"yes_count":"15446","max_value_column_name":"blue","total_count":"37421","total_column_name":"blue","percentage":"0.41276288714892707303"},{"yes_count":"5832","max_value_column_name":"green","total_count":"10059","total_column_name":"green","percentage":"0.57977930211750671041"},{"yes_count":"21263","max_value_column_name":"red","total_count":"25962","total_column_name":"red","percentage":"0.81900469917571835760"},{"yes_count":"9073","max_value_column_name":"white","total_count":"14595","total_column_name":"white","percentage":"0.62165125042822884550"}],"question_word":"Love"},{"data":[{"yes_count":"6079","max_value_column_name":"black","total_count":"9416","total_column_name":"black","percentage":"0.64560322854715378080"},{"yes_count":"10362","max_value_column_name":"blue","total_count":"37562","total_column_name":"blue","percentage":"0.27586390501038283371"},{"yes_count":"1277","max_value_column_name":"green","total_count":"10285","total_column_name":"green","percentage":"0.12416140009722897423"},{"yes_count":"4428","max_value_column_name":"red","total_count":"25705","total_column_name":"red","percentage":"0.17226220579653763859"},{"yes_count":"1933","max_value_column_name":"white","total_count":"15084","total_column_name":"white","percentage":"0.12814903208697958101"}],"question_word":"Manipulation"},{"data":[{"yes_count":"1972","max_value_column_name":"black","total_count":"9429","total_column_name":"black","percentage":"0.20914200869657439813"},{"yes_count":"8214","max_value_column_name":"blue","total_count":"37622","total_column_name":"blue","percentage":"0.21832970070703311892"},{"yes_count":"2194","max_value_column_name":"green","total_count":"10592","total_column_name":"green","percentage":"0.20713746223564954683"},{"yes_count":"3655","max_value_column_name":"red","total_count":"25499","total_column_name":"red","percentage":"0.14333895446880269815"},{"yes_count":"5525","max_value_column_name":"white","total_count":"14272","total_column_name":"white","percentage":"0.38712163677130044843"}],"question_word":"Neatness"},{"data":[{"yes_count":"4136","max_value_column_name":"black","total_count":"9437","total_column_name":"black","percentage":"0.43827487549009219031"},{"yes_count":"24287","max_value_column_name":"blue","total_count":"37834","total_column_name":"blue","percentage":"0.64193582491938468045"},{"yes_count":"5260","max_value_column_name":"green","total_count":"10155","total_column_name":"green","percentage":"0.51797144263909404234"},{"yes_count":"12991","max_value_column_name":"red","total_count":"25413","total_column_name":"red","percentage":"0.51119505764766064613"},{"yes_count":"7764","max_value_column_name":"white","total_count":"14755","total_column_name":"white","percentage":"0.52619451033547949848"}],"question_word":"Notices the little things"},{"data":[{"yes_count":"2831","max_value_column_name":"black","total_count":"9645","total_column_name":"black","percentage":"0.29351995852773457750"},{"yes_count":"18526","max_value_column_name":"blue","total_count":"36904","total_column_name":"blue","percentage":"0.50200520268805549534"},{"yes_count":"3153","max_value_column_name":"green","total_count":"10288","total_column_name":"green","percentage":"0.30647356143079315708"},{"yes_count":"7866","max_value_column_name":"red","total_count":"25436","total_column_name":"red","percentage":"0.30924673690831891807"},{"yes_count":"3981","max_value_column_name":"white","total_count":"15019","total_column_name":"white","percentage":"0.26506425194753312471"}],"question_word":"Nuance"},{"data":[{"yes_count":"7430","max_value_column_name":"black","total_count":"9809","total_column_name":"black","percentage":"0.75746763176674482618"},{"yes_count":"15204","max_value_column_name":"blue","total_count":"37564","total_column_name":"blue","percentage":"0.40474922798424023001"},{"yes_count":"2966","max_value_column_name":"green","total_count":"10090","total_column_name":"green","percentage":"0.29395441030723488603"},{"yes_count":"9653","max_value_column_name":"red","total_count":"25461","total_column_name":"red","percentage":"0.37912886375240564000"},{"yes_count":"4206","max_value_column_name":"white","total_count":"14919","total_column_name":"white","percentage":"0.28192238085662577921"}],"question_word":"Opportunistic"},{"data":[{"yes_count":"4212","max_value_column_name":"black","total_count":"9521","total_column_name":"black","percentage":"0.44239050519903371495"},{"yes_count":"19385","max_value_column_name":"blue","total_count":"37482","total_column_name":"blue","percentage":"0.51718158049196947868"},{"yes_count":"4527","max_value_column_name":"green","total_count":"10328","total_column_name":"green","percentage":"0.43832300542215336948"},{"yes_count":"16186","max_value_column_name":"red","total_count":"25544","total_column_name":"red","percentage":"0.63365173817726276229"},{"yes_count":"5604","max_value_column_name":"white","total_count":"15001","total_column_name":"white","percentage":"0.37357509499366708886"}],"question_word":"Originality"},{"data":[{"yes_count":"4822","max_value_column_name":"black","total_count":"9366","total_column_name":"black","percentage":"0.51484091394405295751"},{"yes_count":"16504","max_value_column_name":"blue","total_count":"37563","total_column_name":"blue","percentage":"0.43936852754039879669"},{"yes_count":"4916","max_value_column_name":"green","total_count":"10011","total_column_name":"green","percentage":"0.49105983418239936070"},{"yes_count":"20704","max_value_column_name":"red","total_count":"25721","total_column_name":"red","percentage":"0.80494537537420784573"},{"yes_count":"7754","max_value_column_name":"white","total_count":"14816","total_column_name":"white","percentage":"0.52335313174946004320"}],"question_word":"Passion"},{"data":[{"yes_count":"1621","max_value_column_name":"black","total_count":"9503","total_column_name":"black","percentage":"0.17057771230137851205"},{"yes_count":"14049","max_value_column_name":"blue","total_count":"37810","total_column_name":"blue","percentage":"0.37156836815657233536"},{"yes_count":"6535","max_value_column_name":"green","total_count":"10013","total_column_name":"green","percentage":"0.65265155298112453810"},{"yes_count":"11652","max_value_column_name":"red","total_count":"25529","total_column_name":"red","percentage":"0.45642210819068510322"},{"yes_count":"9999","max_value_column_name":"white","total_count":"15194","total_column_name":"white","percentage":"0.65808871923127550349"}],"question_word":"Peace"},{"data":[{"yes_count":"4400","max_value_column_name":"black","total_count":"9476","total_column_name":"black","percentage":"0.46433094132545377797"},{"yes_count":"18428","max_value_column_name":"blue","total_count":"36983","total_column_name":"blue","percentage":"0.49828299488954384447"},{"yes_count":"2816","max_value_column_name":"green","total_count":"10365","total_column_name":"green","percentage":"0.27168355041003376749"},{"yes_count":"6626","max_value_column_name":"red","total_count":"25827","total_column_name":"red","percentage":"0.25655321949897394200"},{"yes_count":"5502","max_value_column_name":"white","total_count":"15101","total_column_name":"white","percentage":"0.36434673200450301305"}],"question_word":"Perfection"},{"data":[{"yes_count":"6130","max_value_column_name":"black","total_count":"9535","total_column_name":"black","percentage":"0.64289459884635553225"},{"yes_count":"19215","max_value_column_name":"blue","total_count":"37685","total_column_name":"blue","percentage":"0.50988456945734377073"},{"yes_count":"5886","max_value_column_name":"green","total_count":"10312","total_column_name":"green","percentage":"0.57079131109387121800"},{"yes_count":"13219","max_value_column_name":"red","total_count":"25431","total_column_name":"red","percentage":"0.51979867091345208604"},{"yes_count":"8366","max_value_column_name":"white","total_count":"14859","total_column_name":"white","percentage":"0.56302577562420082105"}],"question_word":"Persistence"},{"data":[{"yes_count":"5197","max_value_column_name":"black","total_count":"9517","total_column_name":"black","percentage":"0.54607544394241882946"},{"yes_count":"16436","max_value_column_name":"blue","total_count":"37210","total_column_name":"blue","percentage":"0.44170921795216339694"},{"yes_count":"2873","max_value_column_name":"green","total_count":"10298","total_column_name":"green","percentage":"0.27898621091474072635"},{"yes_count":"10175","max_value_column_name":"red","total_count":"25441","total_column_name":"red","percentage":"0.39994497071655988365"},{"yes_count":"4851","max_value_column_name":"white","total_count":"15049","total_column_name":"white","percentage":"0.32234699980065120606"}],"question_word":"Persuasive"},{"data":[{"yes_count":"6999","max_value_column_name":"black","total_count":"9824","total_column_name":"black","percentage":"0.71243892508143322476"},{"yes_count":"13124","max_value_column_name":"blue","total_count":"37522","total_column_name":"blue","percentage":"0.34976813602686423965"},{"yes_count":"3150","max_value_column_name":"green","total_count":"10112","total_column_name":"green","percentage":"0.31151107594936708861"},{"yes_count":"10060","max_value_column_name":"red","total_count":"25321","total_column_name":"red","percentage":"0.39729868488606295170"},{"yes_count":"5576","max_value_column_name":"white","total_count":"14906","total_column_name":"white","percentage":"0.37407755266335703743"}],"question_word":"Pride"},{"data":[{"yes_count":"4537","max_value_column_name":"black","total_count":"9524","total_column_name":"black","percentage":"0.47637547249055018900"},{"yes_count":"16347","max_value_column_name":"blue","total_count":"37692","total_column_name":"blue","percentage":"0.43369945877109200891"},{"yes_count":"5200","max_value_column_name":"green","total_count":"10204","total_column_name":"green","percentage":"0.50960407683261466092"},{"yes_count":"11985","max_value_column_name":"red","total_count":"25212","total_column_name":"red","percentage":"0.47536887196573060447"},{"yes_count":"8164","max_value_column_name":"white","total_count":"14967","total_column_name":"white","percentage":"0.54546669339212935124"}],"question_word":"Purpose"},{"data":[{"yes_count":"5049","max_value_column_name":"black","total_count":"9284","total_column_name":"black","percentage":"0.54383886255924170616"},{"yes_count":"30242","max_value_column_name":"blue","total_count":"38096","total_column_name":"blue","percentage":"0.79383662326753464931"},{"yes_count":"5077","max_value_column_name":"green","total_count":"10034","total_column_name":"green","percentage":"0.50597966912497508471"},{"yes_count":"8921","max_value_column_name":"red","total_count":"25376","total_column_name":"red","percentage":"0.35155264817150063052"},{"yes_count":"8724","max_value_column_name":"white","total_count":"14757","total_column_name":"white","percentage":"0.59117706850985972759"}],"question_word":"Rational"},{"data":[{"yes_count":"6721","max_value_column_name":"black","total_count":"9904","total_column_name":"black","percentage":"0.67861470113085621971"},{"yes_count":"24298","max_value_column_name":"blue","total_count":"37523","total_column_name":"blue","percentage":"0.64754950297151080671"},{"yes_count":"5527","max_value_column_name":"green","total_count":"10240","total_column_name":"green","percentage":"0.53974609375000000000"},{"yes_count":"9921","max_value_column_name":"red","total_count":"25569","total_column_name":"red","percentage":"0.38800891704798779772"},{"yes_count":"8825","max_value_column_name":"white","total_count":"14850","total_column_name":"white","percentage":"0.59427609427609427609"}],"question_word":"Realistic"},{"data":[{"yes_count":"3778","max_value_column_name":"black","total_count":"9467","total_column_name":"black","percentage":"0.39907045526565965987"},{"yes_count":"5896","max_value_column_name":"blue","total_count":"37967","total_column_name":"blue","percentage":"0.15529275423394000053"},{"yes_count":"1582","max_value_column_name":"green","total_count":"10497","total_column_name":"green","percentage":"0.15070972658854910927"},{"yes_count":"10934","max_value_column_name":"red","total_count":"24849","total_column_name":"red","percentage":"0.44001770694997786631"},{"yes_count":"2155","max_value_column_name":"white","total_count":"15231","total_column_name":"white","percentage":"0.14148775523603177730"}],"question_word":"Reckless"},{"data":[{"yes_count":"5424","max_value_column_name":"black","total_count":"9132","total_column_name":"black","percentage":"0.59395532194480946124"},{"yes_count":"6329","max_value_column_name":"blue","total_count":"37744","total_column_name":"blue","percentage":"0.16768228062738448495"},{"yes_count":"1138","max_value_column_name":"green","total_count":"10312","total_column_name":"green","percentage":"0.11035686578743211792"},{"yes_count":"2973","max_value_column_name":"red","total_count":"25547","total_column_name":"red","percentage":"0.11637374251379809762"},{"yes_count":"1802","max_value_column_name":"white","total_count":"14979","total_column_name":"white","percentage":"0.12030175579144135123"}],"question_word":"Remorseless"},{"data":[{"yes_count":"2830","max_value_column_name":"black","total_count":"9557","total_column_name":"black","percentage":"0.29611802867008475463"},{"yes_count":"19996","max_value_column_name":"blue","total_count":"37642","total_column_name":"blue","percentage":"0.53121513203336698369"},{"yes_count":"8979","max_value_column_name":"green","total_count":"10936","total_column_name":"green","percentage":"0.82104974396488661302"},{"yes_count":"16849","max_value_column_name":"red","total_count":"25278","total_column_name":"red","percentage":"0.66654798639132842788"},{"yes_count":"10803","max_value_column_name":"white","total_count":"14670","total_column_name":"white","percentage":"0.73640081799591002045"}],"question_word":"Respect for Life"},{"data":[{"yes_count":"3177","max_value_column_name":"black","total_count":"9380","total_column_name":"black","percentage":"0.33869936034115138593"},{"yes_count":"15567","max_value_column_name":"blue","total_count":"37327","total_column_name":"blue","percentage":"0.41704396281512042221"},{"yes_count":"4841","max_value_column_name":"green","total_count":"10230","total_column_name":"green","percentage":"0.47321603128054740958"},{"yes_count":"8778","max_value_column_name":"red","total_count":"25324","total_column_name":"red","percentage":"0.34662770494392670984"},{"yes_count":"11652","max_value_column_name":"white","total_count":"15431","total_column_name":"white","percentage":"0.75510336335947119435"}],"question_word":"Responsibility"},{"data":[{"yes_count":"2748","max_value_column_name":"black","total_count":"9601","total_column_name":"black","percentage":"0.28622018539735444225"},{"yes_count":"10877","max_value_column_name":"blue","total_count":"37720","total_column_name":"blue","percentage":"0.28836161187698833510"},{"yes_count":"3955","max_value_column_name":"green","total_count":"10335","total_column_name":"green","percentage":"0.38268021286889211418"},{"yes_count":"16470","max_value_column_name":"red","total_count":"25089","total_column_name":"red","percentage":"0.65646299174937223484"},{"yes_count":"6004","max_value_column_name":"white","total_count":"14966","total_column_name":"white","percentage":"0.40117599893091006281"}],"question_word":"Romance"},{"data":[{"yes_count":"6542","max_value_column_name":"black","total_count":"9530","total_column_name":"black","percentage":"0.68646379853095487933"},{"yes_count":"7476","max_value_column_name":"blue","total_count":"37649","total_column_name":"blue","percentage":"0.19857101118223591596"},{"yes_count":"1339","max_value_column_name":"green","total_count":"10256","total_column_name":"green","percentage":"0.13055772230889235569"},{"yes_count":"4720","max_value_column_name":"red","total_count":"25589","total_column_name":"red","percentage":"0.18445425768885067803"},{"yes_count":"2249","max_value_column_name":"white","total_count":"14936","total_column_name":"white","percentage":"0.15057579003749330477"}],"question_word":"Ruthless"},{"data":[{"yes_count":"4334","max_value_column_name":"black","total_count":"9521","total_column_name":"black","percentage":"0.45520428526415292511"},{"yes_count":"22836","max_value_column_name":"blue","total_count":"37163","total_column_name":"blue","percentage":"0.61448214622070338778"},{"yes_count":"8289","max_value_column_name":"green","total_count":"10850","total_column_name":"green","percentage":"0.76396313364055299539"},{"yes_count":"15828","max_value_column_name":"red","total_count":"25238","total_column_name":"red","percentage":"0.62714953641334495602"},{"yes_count":"9120","max_value_column_name":"white","total_count":"14739","total_column_name":"white","percentage":"0.61876653775697130063"}],"question_word":"Seeking Meaningfulness"},{"data":[{"yes_count":"7121","max_value_column_name":"black","total_count":"9662","total_column_name":"black","percentage":"0.73701097081349617057"},{"yes_count":"20918","max_value_column_name":"blue","total_count":"37490","total_column_name":"blue","percentage":"0.55796212323286209656"},{"yes_count":"5225","max_value_column_name":"green","total_count":"10262","total_column_name":"green","percentage":"0.50916000779575131553"},{"yes_count":"11283","max_value_column_name":"red","total_count":"25419","total_column_name":"red","percentage":"0.44388056178449191550"},{"yes_count":"7538","max_value_column_name":"white","total_count":"14911","total_column_name":"white","percentage":"0.50553282811347327476"}],"question_word":"Self-reliant"},{"data":[{"yes_count":"2347","max_value_column_name":"black","total_count":"9554","total_column_name":"black","percentage":"0.24565626962528783755"},{"yes_count":"12143","max_value_column_name":"blue","total_count":"37588","total_column_name":"blue","percentage":"0.32305523039267851442"},{"yes_count":"4850","max_value_column_name":"green","total_count":"10115","total_column_name":"green","percentage":"0.47948591201186356896"},{"yes_count":"15993","max_value_column_name":"red","total_count":"25218","total_column_name":"red","percentage":"0.63418986438258386867"},{"yes_count":"7554","max_value_column_name":"white","total_count":"14789","total_column_name":"white","percentage":"0.51078504293731827710"}],"question_word":"Sentiment"},{"data":[{"yes_count":"1463","max_value_column_name":"black","total_count":"9408","total_column_name":"black","percentage":"0.15550595238095238095"},{"yes_count":"9235","max_value_column_name":"blue","total_count":"37782","total_column_name":"blue","percentage":"0.24442856386639140331"},{"yes_count":"5923","max_value_column_name":"green","total_count":"10012","total_column_name":"green","percentage":"0.59159009188973232121"},{"yes_count":"6703","max_value_column_name":"red","total_count":"25490","total_column_name":"red","percentage":"0.26296586896822283248"},{"yes_count":"5522","max_value_column_name":"white","total_count":"14897","total_column_name":"white","percentage":"0.37067866013291266698"}],"question_word":"Serenity"},{"data":[{"yes_count":"1621","max_value_column_name":"black","total_count":"9803","total_column_name":"black","percentage":"0.16535754360909925533"},{"yes_count":"7785","max_value_column_name":"blue","total_count":"37961","total_column_name":"blue","percentage":"0.20507889676246674218"},{"yes_count":"3482","max_value_column_name":"green","total_count":"10369","total_column_name":"green","percentage":"0.33580866043012826695"},{"yes_count":"7485","max_value_column_name":"red","total_count":"25828","total_column_name":"red","percentage":"0.28980176552578596872"},{"yes_count":"8525","max_value_column_name":"white","total_count":"14792","total_column_name":"white","percentage":"0.57632504056246619794"}],"question_word":"Service"},{"data":[{"yes_count":"2505","max_value_column_name":"black","total_count":"9378","total_column_name":"black","percentage":"0.26711452335252719130"},{"yes_count":"10272","max_value_column_name":"blue","total_count":"37685","total_column_name":"blue","percentage":"0.27257529521029587369"},{"yes_count":"6517","max_value_column_name":"green","total_count":"10377","total_column_name":"green","percentage":"0.62802351353955863930"},{"yes_count":"13015","max_value_column_name":"red","total_count":"25359","total_column_name":"red","percentage":"0.51323001695650459403"},{"yes_count":"7015","max_value_column_name":"white","total_count":"15049","total_column_name":"white","percentage":"0.46614392982922453319"}],"question_word":"Soul"},{"data":[{"yes_count":"3421","max_value_column_name":"black","total_count":"9534","total_column_name":"black","percentage":"0.35882106146423327040"},{"yes_count":"9689","max_value_column_name":"blue","total_count":"37776","total_column_name":"blue","percentage":"0.25648559932232105040"},{"yes_count":"2896","max_value_column_name":"green","total_count":"10257","total_column_name":"green","percentage":"0.28234376523349907380"},{"yes_count":"15785","max_value_column_name":"red","total_count":"25390","total_column_name":"red","percentage":"0.62170145726664040961"},{"yes_count":"3379","max_value_column_name":"white","total_count":"15002","total_column_name":"white","percentage":"0.22523663511531795761"}],"question_word":"Spontaneous"},{"data":[{"yes_count":"3221","max_value_column_name":"black","total_count":"9522","total_column_name":"black","percentage":"0.33826927116152068893"},{"yes_count":"14239","max_value_column_name":"blue","total_count":"37499","total_column_name":"blue","percentage":"0.37971679244779860796"},{"yes_count":"5900","max_value_column_name":"green","total_count":"10122","total_column_name":"green","percentage":"0.58288875716261608378"},{"yes_count":"7026","max_value_column_name":"red","total_count":"25631","total_column_name":"red","percentage":"0.27412118138192033085"},{"yes_count":"8400","max_value_column_name":"white","total_count":"15047","total_column_name":"white","percentage":"0.55825081411577058550"}],"question_word":"Stability"},{"data":[{"yes_count":"6500","max_value_column_name":"black","total_count":"9472","total_column_name":"black","percentage":"0.68623310810810810811"},{"yes_count":"20160","max_value_column_name":"blue","total_count":"37714","total_column_name":"blue","percentage":"0.53454950416291032508"},{"yes_count":"5912","max_value_column_name":"green","total_count":"10544","total_column_name":"green","percentage":"0.56069802731411229135"},{"yes_count":"15176","max_value_column_name":"red","total_count":"25427","total_column_name":"red","percentage":"0.59684587249773862430"},{"yes_count":"7087","max_value_column_name":"white","total_count":"14975","total_column_name":"white","percentage":"0.47325542570951585977"}],"question_word":"Stubborn"},{"data":[{"yes_count":"3074","max_value_column_name":"black","total_count":"9671","total_column_name":"black","percentage":"0.31785751214972598490"},{"yes_count":"14976","max_value_column_name":"blue","total_count":"36764","total_column_name":"blue","percentage":"0.40735502121640735502"},{"yes_count":"2674","max_value_column_name":"green","total_count":"10240","total_column_name":"green","percentage":"0.26113281250000000000"},{"yes_count":"4669","max_value_column_name":"red","total_count":"25583","total_column_name":"red","percentage":"0.18250400656686080600"},{"yes_count":"3522","max_value_column_name":"white","total_count":"15220","total_column_name":"white","percentage":"0.23140604467805519054"}],"question_word":"Subtlety"},{"data":[{"yes_count":"6505","max_value_column_name":"black","total_count":"9674","total_column_name":"black","percentage":"0.67242092205912755840"},{"yes_count":"13949","max_value_column_name":"blue","total_count":"37584","total_column_name":"blue","percentage":"0.37114197530864197531"},{"yes_count":"2932","max_value_column_name":"green","total_count":"10227","total_column_name":"green","percentage":"0.28669208956683289332"},{"yes_count":"7571","max_value_column_name":"red","total_count":"25317","total_column_name":"red","percentage":"0.29904807046648497057"},{"yes_count":"5819","max_value_column_name":"white","total_count":"14957","total_column_name":"white","percentage":"0.38904860600387778298"}],"question_word":"Success"},{"data":[{"yes_count":"5987","max_value_column_name":"black","total_count":"9232","total_column_name":"black","percentage":"0.64850519930675909879"},{"yes_count":"6740","max_value_column_name":"blue","total_count":"37630","total_column_name":"blue","percentage":"0.17911241031092213659"},{"yes_count":"1038","max_value_column_name":"green","total_count":"10189","total_column_name":"green","percentage":"0.10187457061536951614"},{"yes_count":"2926","max_value_column_name":"red","total_count":"25640","total_column_name":"red","percentage":"0.11411856474258970359"},{"yes_count":"2303","max_value_column_name":"white","total_count":"14892","total_column_name":"white","percentage":"0.15464679022293849046"}],"question_word":"Supremacy"},{"data":[{"yes_count":"4483","max_value_column_name":"black","total_count":"9337","total_column_name":"black","percentage":"0.48013280496947627718"},{"yes_count":"17039","max_value_column_name":"blue","total_count":"37634","total_column_name":"blue","percentage":"0.45275548705957378966"},{"yes_count":"3996","max_value_column_name":"green","total_count":"9977","total_column_name":"green","percentage":"0.40052119875714142528"},{"yes_count":"10117","max_value_column_name":"red","total_count":"25615","total_column_name":"red","percentage":"0.39496388834667187195"},{"yes_count":"5096","max_value_column_name":"white","total_count":"15167","total_column_name":"white","percentage":"0.33599261554691105690"}],"question_word":"Talented"},{"data":[{"yes_count":"4209","max_value_column_name":"black","total_count":"9401","total_column_name":"black","percentage":"0.44771832783746409956"},{"yes_count":"25730","max_value_column_name":"blue","total_count":"37771","total_column_name":"blue","percentage":"0.68121045246353022160"},{"yes_count":"3745","max_value_column_name":"green","total_count":"10036","total_column_name":"green","percentage":"0.37315663611000398565"},{"yes_count":"10698","max_value_column_name":"red","total_count":"25257","total_column_name":"red","percentage":"0.42356574415013659580"},{"yes_count":"6356","max_value_column_name":"white","total_count":"14837","total_column_name":"white","percentage":"0.42838848823886230370"}],"question_word":"Technologically Fluent"},{"data":[{"yes_count":"4331","max_value_column_name":"black","total_count":"9429","total_column_name":"black","percentage":"0.45932760632092480645"},{"yes_count":"31441","max_value_column_name":"blue","total_count":"38008","total_column_name":"blue","percentage":"0.82722058513997053252"},{"yes_count":"4649","max_value_column_name":"green","total_count":"10108","total_column_name":"green","percentage":"0.45993272655322516818"},{"yes_count":"11628","max_value_column_name":"red","total_count":"25279","total_column_name":"red","percentage":"0.45998655010087424344"},{"yes_count":"6661","max_value_column_name":"white","total_count":"14814","total_column_name":"white","percentage":"0.44964223032266774673"}],"question_word":"Theorizing"},{"data":[{"yes_count":"1820","max_value_column_name":"black","total_count":"9482","total_column_name":"black","percentage":"0.19194262813752372917"},{"yes_count":"4426","max_value_column_name":"blue","total_count":"37595","total_column_name":"blue","percentage":"0.11772842133262401915"},{"yes_count":"3228","max_value_column_name":"green","total_count":"9565","total_column_name":"green","percentage":"0.33748039728175640355"},{"yes_count":"3957","max_value_column_name":"red","total_count":"25771","total_column_name":"red","percentage":"0.15354468200690698848"},{"yes_count":"4950","max_value_column_name":"white","total_count":"15039","total_column_name":"white","percentage":"0.32914422501496110114"}],"question_word":"Tradition"},{"data":[{"yes_count":"3918","max_value_column_name":"black","total_count":"9489","total_column_name":"black","percentage":"0.41289914638001896933"},{"yes_count":"23805","max_value_column_name":"blue","total_count":"37283","total_column_name":"blue","percentage":"0.63849475632325724861"},{"yes_count":"7156","max_value_column_name":"green","total_count":"9829","total_column_name":"green","percentage":"0.72804964899786346526"},{"yes_count":"17635","max_value_column_name":"red","total_count":"24966","total_column_name":"red","percentage":"0.70636065048465913643"},{"yes_count":"14101","max_value_column_name":"white","total_count":"15946","total_column_name":"white","percentage":"0.88429700238304276935"}],"question_word":"Trustworthy"},{"data":[{"yes_count":"3900","max_value_column_name":"black","total_count":"9629","total_column_name":"black","percentage":"0.40502648250077889708"},{"yes_count":"26673","max_value_column_name":"blue","total_count":"37947","total_column_name":"blue","percentage":"0.70290141513163095897"},{"yes_count":"6889","max_value_column_name":"green","total_count":"10093","total_column_name":"green","percentage":"0.68255226394530862974"},{"yes_count":"15432","max_value_column_name":"red","total_count":"25276","total_column_name":"red","percentage":"0.61053964234847285963"},{"yes_count":"11629","max_value_column_name":"white","total_count":"14869","total_column_name":"white","percentage":"0.78209698029457260071"}],"question_word":"Truth"},{"data":[{"yes_count":"6328","max_value_column_name":"black","total_count":"9379","total_column_name":"black","percentage":"0.67469879518072289157"},{"yes_count":"28005","max_value_column_name":"blue","total_count":"38080","total_column_name":"blue","percentage":"0.73542542016806722689"},{"yes_count":"5750","max_value_column_name":"green","total_count":"10159","total_column_name":"green","percentage":"0.56600059060931194015"},{"yes_count":"13869","max_value_column_name":"red","total_count":"25373","total_column_name":"red","percentage":"0.54660465849525085721"},{"yes_count":"9105","max_value_column_name":"white","total_count":"14722","total_column_name":"white","percentage":"0.61846216546664855319"}],"question_word":"Valuing High Quality"},{"data":[{"yes_count":"1758","max_value_column_name":"black","total_count":"9579","total_column_name":"black","percentage":"0.18352646414030692139"},{"yes_count":"10429","max_value_column_name":"blue","total_count":"37680","total_column_name":"blue","percentage":"0.27677813163481953291"},{"yes_count":"4382","max_value_column_name":"green","total_count":"10167","total_column_name":"green","percentage":"0.43100226222091078981"},{"yes_count":"8088","max_value_column_name":"red","total_count":"25339","total_column_name":"red","percentage":"0.31919175973795335254"},{"yes_count":"9387","max_value_column_name":"white","total_count":"14759","total_column_name":"white","percentage":"0.63601870045396029541"}],"question_word":"Virtue"},{"data":[{"yes_count":"2136","max_value_column_name":"black","total_count":"9723","total_column_name":"black","percentage":"0.21968528232027152114"},{"yes_count":"9402","max_value_column_name":"blue","total_count":"37581","total_column_name":"blue","percentage":"0.25017961203799792448"},{"yes_count":"4380","max_value_column_name":"green","total_count":"9890","total_column_name":"green","percentage":"0.44287158746208291203"},{"yes_count":"5858","max_value_column_name":"red","total_count":"25599","total_column_name":"red","percentage":"0.22883706394781046135"},{"yes_count":"3688","max_value_column_name":"white","total_count":"14984","total_column_name":"white","percentage":"0.24612920448478376935"}],"question_word":"Willing to let go"},{"data":[{"yes_count":"7541","max_value_column_name":"black","total_count":"9813","total_column_name":"black","percentage":"0.76847039641292163457"},{"yes_count":"13940","max_value_column_name":"blue","total_count":"37448","total_column_name":"blue","percentage":"0.37224951933347575304"},{"yes_count":"2645","max_value_column_name":"green","total_count":"10186","total_column_name":"green","percentage":"0.25967013548007068525"},{"yes_count":"8384","max_value_column_name":"red","total_count":"25313","total_column_name":"red","percentage":"0.33121321060324734326"},{"yes_count":"4758","max_value_column_name":"white","total_count":"14827","total_column_name":"white","percentage":"0.32090105887907196331"}],"question_word":"Winning"},{"data":[{"yes_count":"4084","max_value_column_name":"black","total_count":"9477","total_column_name":"black","percentage":"0.43093806056769019732"},{"yes_count":"22955","max_value_column_name":"blue","total_count":"37558","total_column_name":"blue","percentage":"0.61118802918153256297"},{"yes_count":"6977","max_value_column_name":"green","total_count":"10477","total_column_name":"green","percentage":"0.66593490503006585855"},{"yes_count":"10457","max_value_column_name":"red","total_count":"25476","total_column_name":"red","percentage":"0.41046475113832626786"},{"yes_count":"7941","max_value_column_name":"white","total_count":"14980","total_column_name":"white","percentage":"0.53010680907877169559"}],"question_word":"Wisdom"},{"data":[{"yes_count":"3918","max_value_column_name":"black","total_count":"9500","total_column_name":"black","percentage":"0.41242105263157894737"},{"yes_count":"23009","max_value_column_name":"blue","total_count":"37530","total_column_name":"blue","percentage":"0.61308286703970157208"},{"yes_count":"3669","max_value_column_name":"green","total_count":"10251","total_column_name":"green","percentage":"0.35791630084869768803"},{"yes_count":"12395","max_value_column_name":"red","total_count":"25240","total_column_name":"red","percentage":"0.49108557844690966719"},{"yes_count":"5290","max_value_column_name":"white","total_count":"15061","total_column_name":"white","percentage":"0.35123829758980147401"}],"question_word":"Wordplay"},{"data":[{"yes_count":"3869","max_value_column_name":"black","total_count":"9700","total_column_name":"black","percentage":"0.39886597938144329897"},{"yes_count":"10916","max_value_column_name":"blue","total_count":"37834","total_column_name":"blue","percentage":"0.28852355024581064651"},{"yes_count":"4742","max_value_column_name":"green","total_count":"10006","total_column_name":"green","percentage":"0.47391565060963421947"},{"yes_count":"8168","max_value_column_name":"red","total_count":"25491","total_column_name":"red","percentage":"0.32042681730806951473"},{"yes_count":"6587","max_value_column_name":"white","total_count":"15090","total_column_name":"white","percentage":"0.43651424784625579854"}],"question_word":"Fortitude"}] ;
let chartResultsTopResults = [{"data":[{"user_count":"19391","quick_name":"Izzet","total_users":"213298"},{"user_count":"19339","quick_name":"Dimir","total_users":"213298"},{"user_count":"14892","quick_name":"Temur","total_users":"213298"},{"user_count":"14836","quick_name":"Naya","total_users":"213298"},{"user_count":"14138","quick_name":"Bant","total_users":"213298"},{"user_count":"13776","quick_name":"Azorius","total_users":"213298"},{"user_count":"13081","quick_name":"Jeskai","total_users":"213298"},{"user_count":"11905","quick_name":"Grixis","total_users":"213298"},{"user_count":"10481","quick_name":"Gruul","total_users":"213298"},{"user_count":"10351","quick_name":"Simic","total_users":"213298"},{"user_count":"9354","quick_name":"Boros","total_users":"213298"},{"user_count":"8709","quick_name":"Mono Blue","total_users":"213298"},{"user_count":"8553","quick_name":"Selesnya","total_users":"213298"},{"user_count":"6853","quick_name":"Rakdos","total_users":"213298"},{"user_count":"5893","quick_name":"Sultai","total_users":"213298"},{"user_count":"5853","quick_name":"Esper","total_users":"213298"},{"user_count":"5756","quick_name":"Multicolored","total_users":"213298"},{"user_count":"4063","quick_name":"Jund","total_users":"213298"},{"user_count":"3828","quick_name":"Mono Red","total_users":"213298"},{"user_count":"2650","quick_name":"Mardu","total_users":"213298"},{"user_count":"1969","quick_name":"Mono Black","total_users":"213298"},{"user_count":"1880","quick_name":"Orzhov","total_users":"213298"},{"user_count":"1758","quick_name":"Golgari","total_users":"213298"},{"user_count":"1687","quick_name":"Abzan","total_users":"213298"},{"user_count":"1431","quick_name":"Mono White","total_users":"213298"},{"user_count":"827","quick_name":"Mono Green","total_users":"213298"}],"question_word":"all"}];
let resultMostLike;
let selectorsQuestionWords = document.getElementById('question-words');
let selectorsColorGroups = document.getElementById('color-groups');
let wordSelects = document.querySelectorAll(".word-select");
let colorSelects = document.querySelectorAll(".color-select");
//Chart.register(ChartDataLabels);

window.onload = ()=>{
    for(let i = 0; i < questionWords.length; i+=1){
        let wordDiv = document.createElement('div');
        let colorDiv = document.createElement('div');
        let questionContainer = document.createElement('div');
        questionContainer.className ='question-container';
        wordDiv.className = 'question-word-div'
        colorDiv.className = 'color-type-div';
        wordDiv.innerText = questionWords[i].question;
        colorDiv.innerText = questionWords[i].cd_color;
        questionContainer.appendChild(wordDiv);
        questionContainer.appendChild(colorDiv);
        document.getElementById('question-words').appendChild(questionContainer);
    }
    for(let i = 0; i < colorGroups.length; i+=1){
        let resultDiv = document.createElement('div');
        let colorArrayDiv = document.createElement('div');
        let resultContainer = document.createElement('div');
        resultContainer.className ='result-container';
        resultDiv.className = 'result-group-div'
        colorArrayDiv.classList.add('color-array-div');
        colorArrayDiv.classList.add('flex-end');
        resultDiv.innerText = colorGroups[i].quick_name;
            for(let e = 0 ; e < colorGroups[i].color_group.length; e+=1){
                colorArrayDiv.innerText += `  ${colorGroups[i].color_group[e].toUpperCase()}`;
            }
            resultContainer.appendChild(resultDiv);
            resultContainer.appendChild(colorArrayDiv);
            document.getElementById('color-groups').appendChild(resultContainer);
    }
    for(let i=0; i < wordSelects.length; i+=1){
        let select = wordSelects[i];
        for(let i = 0; i < questionWords.length; i+=1){
            option  = document.createElement("option");
            option.text = `${questionWords[i].question}`;
            select.add(option);
        }
    }
    for(let i=0; i < colorSelects.length; i+=1){
        let select = colorSelects[i];
        for(let i = 0; i < colorGroups.length; i+=1){
            option  = document.createElement("option");
            option.text = `${colorGroups[i].quick_name}`;
            select.add(option);
        }
    }
}

Chart.defaults.font.size = 13;

  let orderedColors = {
        Abzan: "darkolivegreen",
        Azorius: "lightskyblue", 
        Bant: "lightseagreen", 
        Boros: "lightcoral", 
        Dimir: "darkblue", 
        Esper: "lightslategray", 
        Golgari: "darkolivegreen",
        Grixis: "darkorchid",
        Gruul: "peru",
        Izzet: "mediumslateblue",
        Jeskai: "lavender",
        Jund: "sienna",
        Mardu: "brown",
        MonoBlack: "black",
        MonoBlue: "blue",
        MonoGreen: "green",
        MonoRed: "red",
        MonoWhite: "white",
        Multicolored: "grey",
        Naya: "goldenrod",
        Orzhov: "darkgrey",
        Rakdos: "maroon",
        Selesnya: "palegreen",
        Simic: "mediumaquamarine",
        Sultai: "darkslategrey",
        Temur: "silver"
    }


let colorScheme = [];

const orderColors=(chartColors)=>{
    colorScheme = [];
    for(let i =0 ; i < chartColors.length ; i++){
        colorScheme.push(orderedColors[chartColors[i]])
    }
}

// most / least popular words
// most / least defining words
// most / least aligned words
// most / least popular colors
// box and whisker plot of color type value averages for each result color

const storeResult =(name, newData) =>{
    if(!!localStorage.getItem(name)){
        let storageItem = JSON.parse(localStorage.getItem(name));
        storageItem.push(newData);
        localStorage.setItem(name, JSON.stringify(storageItem))
    }else{
        let newItem = []
        newItem.push(newData);
        localStorage.setItem(name, JSON.stringify(newItem))
    }
}

const checkStorage = (name, question_word) =>{
    let logObj ={
		chart: name,
		question: question_word
	}
    fetch('/chart',{
		method: 'POST',
		mode: 'cors',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(logObj)
	})
    let storageItem = JSON.parse(localStorage.getItem(name));
    let storageReturn;
    if(name === 'fiveColorRadar'){
        storageItem = chartResultsFiveColorRadar;
        console.log('radar')
    } else if(name === 'topResults'){
        storageItem = chartResultsTopResults;
    }
    if(!!storageItem){
        if(name === "topResults"){
            storageReturn = storageItem[0];
        } 
        else {
            for(let i=0; i < storageItem.length; i +=1){
                if(storageItem[i].question_word === question_word){
                    storageReturn = storageItem[i];
                    break;
                }
            }
        }
    }
    return storageReturn;
}

const loadingToggle =(container)=>{
    let loaded = container.querySelector(".loading");
    if(!!loaded){
        loaded.remove();
    }else{
        let loading = document.createElement("div");
        loading.className = "loading";
        let spinner = document.createElement("div");
        spinner.className = "lds-spinner";
        for(let i = 0; i < 12; i+=1){
            let spoke = document.createElement("div")
            spinner.appendChild(spoke);
        }
        loading.appendChild(spinner);
        container.appendChild(loading);
    }
}

let fiveColorRadarSearch = { question_word: '' };
let responseObject;
const getfiveColorRadar=()=>{
    document.getElementById('fiveColorRadarChart').remove(); 
    let container = document.getElementById('fiveColorRadarChartContainer').parentElement;
    const question_word = document.getElementById('fiveColorRadarSearch').value;
    let storageReturn = checkStorage("fiveColorRadar", question_word);
    if(storageReturn){
        buildFiveColorRadar(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle("fiveColorRadar");
        loadingToggle(container);
        fiveColorRadarSearch.question_word = question_word;
        fetch('/charts/fiveColorRadar',{
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(fiveColorRadarSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("fiveColorRadar", chartObject);
            buildFiveColorRadar(chartData, question_word);
        })
        .catch((error) => {
            console.error('Error:', error);
            buttonToggle();
            loadingToggle(container);
            let canvas = document.createElement('canvas');
            canvas.id = 'fiveColorRadarChart';
            document.getElementById('fiveColorRadarChartContainer').append(canvas);
          });
    }
}
const buildFiveColorRadar = (fiveColorRadar, question_word) =>{
    let canvas = document.createElement('canvas');
    canvas.id = 'fiveColorRadarChart';
    document.getElementById('fiveColorRadarChartContainer').append(canvas);
    let white_counter = (fiveColorRadar[4].percentage);
    let blue_counter = (fiveColorRadar[1].percentage);
    let black_counter = (fiveColorRadar[0].percentage);
    let red_counter = (fiveColorRadar[3].percentage);
    let green_counter = (fiveColorRadar[2].percentage);
    let colorCounterArray = [
        {name: 'white', count: white_counter},
        {name: 'blue', count: blue_counter},
        {name: 'black', count: black_counter},
        {name: 'red', count: red_counter},
        {name: 'green', count: green_counter}
    ];
    colorCounterArray.sort((a,b)=> b.count - a.count);
    var ctx = document.getElementById('fiveColorRadarChart').getContext('2d');
    window.fiveColorRadar = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['White', 'Blue', 'Black', 'Red', 'Green'],
          datasets: [{
              label: question_word,
              backgroundColor: colorCounterArray[0].name,
              borderColor: colorCounterArray[1].name,
              borderWidth: 3,
              data: [`${(white_counter*100).toFixed(1)}`, `${(blue_counter*100).toFixed(1)}`, `${(black_counter*100).toFixed(1)}`, `${(red_counter*100).toFixed(1)}`, `${(green_counter*100).toFixed(1)}`]
          }]
          // second dataset to show the percentage of the result color popularity
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${question_word} Radar Graph`
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    // suggestedMin: 20,
                    // suggestedMax: 90
                }
            },
            plugins:{
                datalabels: {
                    backgroundColor: 'black',
                    color: 'white',
                    weight: 'bold',
                    formatter: Math.round,
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.value];
                    }
                }
            }
        }
    })
}

const getTopResults=()=>{
    let storageReturn = checkStorage("topResults", "all");
    document.getElementById('topResultsChart').remove(); 
    let container = document.getElementById('topResultsChartContainer').parentElement;
    if(storageReturn){
        buildTopResults(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
        fetch('/charts/topResults')
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
                let chartData = data.rows;
                let chartObject = {
                    data: chartData,
                    question_word: "all"
                }
                storeResult("topResults", chartObject);
                buildTopResults(chartData);
            })
            .catch((error) => {
                console.error('Error:', error);
                buttonToggle();
                loadingToggle(container);
                let canvas = document.createElement('canvas');
                canvas.id = 'topResultsChart';
                document.getElementById('topResultsChartContainer').append(canvas);
              });
    }
}
const buildTopResults=(topResults)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'topResultsChart';
    document.getElementById('topResultsChartContainer').append(canvas);
        let count = [];
        let resultColor =[];
        let totalUsers = [];
        let chartColors = [];
        for(let i = 0; i<topResults.length; i+=1){
            count.push(topResults[i].user_count);
            resultColor.push(topResults[i].quick_name);
            totalUsers.push(topResults[i].total_users);

            chartColors.push((topResults[i].quick_name).replace(/\s/g, ''));
        }
        orderColors(chartColors);
        var ctx = document.getElementById('topResultsChart').getContext('2d');
        window.topResults = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: 'Total Results',
                  backgroundColor: colorScheme,
                  borderColor: 'black',
                  borderWidth: 1,
                  data: count
              }
            ]
          },
            options: {
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top Quiz Results'
                }
            }
        })
    }

const resultMostLikeSearch = { question_word: '' };
const getResultMostLike=()=>{
    const question_word = document.getElementById('resultMostLikeSearch').value;
    document.getElementById('resultMostLikeChart').remove(); 
    let container = document.getElementById('resultMostLikeChartContainer').parentElement;
    let storageReturn = checkStorage("resultsMostLike", question_word);
    if(storageReturn){
        buildResultMostLike(storageReturn.data, storageReturn.question_word)
    }else{
        resultMostLikeSearch.question_word = question_word;
        buttonToggle();
        loadingToggle(container);
        fetch('/charts/resultMostLike',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(resultMostLikeSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("resultsMostLike", chartObject);
            buildResultMostLike(chartData, question_word);
        })
        .catch((error) => {
            console.error('Error:', error);
            buttonToggle();
            loadingToggle(container);
            let canvas = document.createElement('canvas');
            canvas.id = 'resultMostLikeChart';
            document.getElementById('resultMostLikeChartContainer').append(canvas);
          });
    }
}
const buildResultMostLike=(resultMostLike, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'resultMostLikeChart';
    document.getElementById('resultMostLikeChartContainer').append(canvas);
    let count = [];
        let resultColor =[];
        let chartColors = [];
        for(let i = 0; i<resultMostLike.length; i+=1){
            count.push((resultMostLike[i].percent_difference * 100).toFixed(1));
            resultColor.push(resultMostLike[i].quick_name);
            
            chartColors.push((resultMostLike[i].quick_name).replace(/\s/g, ''));
        }
        orderColors(chartColors);
        var ctx = document.getElementById('resultMostLikeChart').getContext('2d');
        window.resultMostLike = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: question_word,
                  backgroundColor: colorScheme,
                  borderColor: "black",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `Results most like "${question_word}"`
                }
            }
        })
}
let resultLeastLikeSearch = { question_word: '' };
const getResultLeastLike=()=>{
    const question_word = document.getElementById('resultLeastLikeSearch').value;
    document.getElementById('resultLeastLikeChart').remove(); 
    let container = document.getElementById('resultLeastLikeChartContainer').parentElement;
    let storageReturn = checkStorage("resultsLeastLike", question_word);
    if(storageReturn){
        buildResultLeastLike(storageReturn.data, storageReturn.question_word)
    }else{
    resultLeastLikeSearch.question_word = question_word;
    buttonToggle();
    loadingToggle(container);
    fetch('/charts/resultLeastLike',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultLeastLikeSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("resultsLeastLike", chartObject);
            buildResultLeastLike(chartData, question_word);
        })
        .catch((error) => {
            console.error('Error:', error);
            buttonToggle();
            loadingToggle(container);
            let canvas = document.createElement('canvas');
            canvas.id = 'resultLeastLikeChart';
            document.getElementById('resultLeastLikeChartContainer').append(canvas);
          });
    }
}
const buildResultLeastLike=(resultLeastLike, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'resultLeastLikeChart';
    document.getElementById('resultLeastLikeChartContainer').append(canvas);
    let count = [];
    let resultColor =[];
    let chartColors = [];
    for(let i = 0; i<resultLeastLike.length; i+=1){
        count.push((resultLeastLike[i].percent_difference * 100).toFixed(1));
        resultColor.push(resultLeastLike[i].quick_name);
        
        chartColors.push((resultLeastLike[i].quick_name).replace(/\s/g, ''));
    }
    orderColors(chartColors);
    var ctx = document.getElementById('resultLeastLikeChart').getContext('2d');
    window.resultLeastLike = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resultColor,
          datasets: [{
              label: question_word,
              backgroundColor: colorScheme,
              borderColor: "black",
              borderWidth: 1,
              data: count
          }]
          // second dataset to show the percentage of the result color popularity
      },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Results least like "${question_word}"`
            }
        }
    })
}
let topWordsForResultSearch = { question_word: '' };
const getTopWordsForResult=()=>{
    const question_word = document.getElementById('topWordsForResultSearch').value;
    document.getElementById('topWordsForResultChart').remove(); 
    let storageReturn = checkStorage("topWordsForResult", question_word);
    let container = document.getElementById('topWordsForResultChartContainer').parentElement;
    if(storageReturn){
        buildTopWordsForResult(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
        topWordsForResultSearch.question_word = question_word;
        fetch('/charts/topWordsForResult',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(topWordsForResultSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("topWordsForResult", chartObject);
            buildTopWordsForResult(chartData, question_word);
        })
        .catch((error) => {
            console.error('Error:', error);
            buttonToggle();
            loadingToggle(container);
            let canvas = document.createElement('canvas');
            canvas.id = 'topWordsForResultChart';
            document.getElementById('topWordsForResultChartContainer').append(canvas);
          });
    }
}
const buildTopWordsForResult=(topWordsForResult, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'topWordsForResultChart';
    document.getElementById('topWordsForResultChartContainer').append(canvas);
    let count = [];
        let resultColor = [];
        let barColor = [];
        for(let i = 0; i<topWordsForResult.length; i+=1){
            count.push((topWordsForResult[i].percentage * 100).toFixed(1));
            resultColor.push(topWordsForResult[i].question_word);
            if(topWordsForResult[i].color_type_key == 'w'){
                barColor.push('white')
            }
            if(topWordsForResult[i].color_type_key == 'u'){
                barColor.push('blue')
            }
            if(topWordsForResult[i].color_type_key == 'b'){
                barColor.push('black')
            }
            if(topWordsForResult[i].color_type_key == 'r'){
                barColor.push('red')
            }
            if(topWordsForResult[i].color_type_key == 'g'){
                barColor.push('green')
            }
        }
        var ctx = document.getElementById('topWordsForResultChart').getContext('2d');
        window.topWordsForResult = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: resultColor,
              datasets: [{
                  label: question_word,
                  backgroundColor: barColor,
                  borderColor: "black",
                  borderWidth: 1,
                  data: count
              }]
              // second dataset to show the percentage of the result color popularity
          },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `${question_word} Profile Top Words`
                }
            }
        })
}
let bottomWordsForResultSearch = { question_word: '' };
const getBottomWordsForResult=()=>{
    document.getElementById('bottomWordsForResultChart').remove(); 
    let container =document.getElementById('bottomWordsForResultChartContainer').parentElement;
    const question_word = document.getElementById('bottomWordsForResultSearch').value;
    let storageReturn = checkStorage("bottomWordsForResult", question_word);
    if(storageReturn){
        buildBottomWordsForResult(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
        bottomWordsForResultSearch.question_word = question_word;
        fetch('/charts/bottomWordsForResult',{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(bottomWordsForResultSearch)
        })
        .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("bottomWordsForResult", chartObject);
            buildBottomWordsForResult(chartData, question_word);
        })
        .catch((error) => {
            console.error('Error:', error);
            buttonToggle();
            loadingToggle(container);
            let canvas = document.createElement('canvas');
            canvas.id = 'bottomWordsForResultChart';
            document.getElementById('bottomWordsForResultChartContainer').append(canvas);
          });
    }
}
const buildBottomWordsForResult=(bottomWordsForResult, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'bottomWordsForResultChart';
    document.getElementById('bottomWordsForResultChartContainer').append(canvas);
    let count = [];
    let resultColor =[];
    let barColor = [];
    for(let i = 0; i<bottomWordsForResult.length; i+=1){
        count.push((bottomWordsForResult[i].percentage * 100).toFixed(1));
        resultColor.push(bottomWordsForResult[i].question_word);
        if(bottomWordsForResult[i].color_type_key == 'w'){
            barColor.push('white')
        }
        if(bottomWordsForResult[i].color_type_key == 'u'){
            barColor.push('blue')
        }
        if(bottomWordsForResult[i].color_type_key == 'b'){
            barColor.push('black')
        }
        if(bottomWordsForResult[i].color_type_key == 'r'){
            barColor.push('red')
        }
        if(bottomWordsForResult[i].color_type_key == 'g'){
            barColor.push('green')
        }
    }
    var ctx = document.getElementById('bottomWordsForResultChart').getContext('2d');
    window.bottomWordsForResult = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resultColor,
          datasets: [{
              label: question_word,
              backgroundColor: barColor,
              borderColor: "black",
              borderWidth: 1,
              data: count
          }]
          // second dataset to show the percentage of the result color popularity
      },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${question_word} Profile Bottom Words`
            }
        }
    })
}
let colorpieSlicesSearch = { question_word: '' };
const getColorpieSlices=()=>{
    document.getElementById('resultColorpieSlicesChart').remove(); 
    let container = document.getElementById('resultColorpieSlicesChartContainer').parentElement;
    const question_word = document.getElementById('resultColorpieSlicesSearch').value;
    colorpieSlicesSearch.question_word = question_word;
    let storageReturn = checkStorage("colorpieSlices", question_word);
    if(storageReturn){
        buildColorPieSlices(storageReturn.data, storageReturn.question_word)
    }else{
        buttonToggle();
        loadingToggle(container);
    fetch('/charts/resultColorpieSlices',{
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(colorpieSlicesSearch)
    })
    .then(response => response.json())
        .then(data => {
            buttonToggle();
            loadingToggle(container);
            let chartData = data.rows;
            let chartObject = {
                data: chartData,
                question_word: question_word
            }
            storeResult("colorpieSlices", chartObject);
            buildColorPieSlices(chartData, question_word);
        })
        .catch((error) => {
            console.error('Error:', error);
            buttonToggle();
            loadingToggle(container);
            let canvas = document.createElement('canvas');
            canvas.id = 'resultColorpieSlicesChart';
            document.getElementById('resultColorpieSlicesChartContainer').append(canvas);
          });
    }
}
const buildColorPieSlices=(colorpieSlices, question_word)=>{
    let canvas = document.createElement('canvas');
    canvas.id = 'resultColorpieSlicesChart';
    document.getElementById('resultColorpieSlicesChartContainer').append(canvas);
    let white_counter = ((colorpieSlices[0].white_counter / colorpieSlices[0].total_counter)*100).toFixed(1);
    let blue_counter = ((colorpieSlices[0].blue_counter / colorpieSlices[0].total_counter)*100).toFixed(1);
    let black_counter = ((colorpieSlices[0].black_counter / colorpieSlices[0].total_counter)*100).toFixed(1);
    let red_counter = ((colorpieSlices[0].red_counter / colorpieSlices[0].total_counter)*100).toFixed(1);
    let green_counter = ((colorpieSlices[0].green_counter / colorpieSlices[0].total_counter)*100).toFixed(1);

    let colorCounterArray = [
        {name: 'White', count: white_counter},
        {name: 'Blue', count: blue_counter},
        {name: 'Black', count: black_counter},
        {name: 'Red', count: red_counter},
        {name: 'Green', count: green_counter}
    ];
    colorCounterArray.sort((a,b)=> b.count - a.count);
    var ctx = document.getElementById('resultColorpieSlicesChart').getContext('2d');
    window.colorpieSlices = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [`${colorCounterArray[0].name} : ${colorCounterArray[0].count}%`, 
          `${colorCounterArray[1].name} : ${colorCounterArray[1].count}%`,  
          `${colorCounterArray[2].name} : ${colorCounterArray[2].count}%`,  
          `${colorCounterArray[3].name} : ${colorCounterArray[3].count}%`,  
          `${colorCounterArray[4].name} : ${colorCounterArray[4].count}%`],
          datasets: [{
            backgroundColor: [colorCounterArray[0].name, colorCounterArray[1].name, colorCounterArray[2].name, colorCounterArray[3].name, colorCounterArray[4].name],
            borderColor: 'black',
            borderWidth: 3,
              label: question_word,
              data: [colorCounterArray[0].count, colorCounterArray[1].count, colorCounterArray[2].count, colorCounterArray[3].count, colorCounterArray[4].count]
          }]
          // second dataset to show the percentage of the result color popularity
      },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${question_word} Color Pie`
            }
        }
    })
}



function randomScalingFactor(){
    return Math.floor(Math.random() * Math.floor(25))
}

function randomQuestionWord(e){
    num = Math.floor(Math.random() * Math.floor(questionWords.length));
    let eventId = e.id.slice(0,-6);
    const question_word = document.getElementById(`${eventId}Search`);
    question_word.value = questionWords[num].question;
}
function randomColorGroup(e){
    num = Math.floor(Math.random() * Math.floor(colorGroups.length));
    let eventId = e.id.slice(0,-6);
    const question_word = document.getElementById(`${eventId}Search`);
    question_word.value = colorGroups[num].quick_name;
}


function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }



const buttons = document.querySelectorAll(".query");
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(){buttonToggle()});
// }
function buttonToggle(){
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("disabled-button");
    }
}
