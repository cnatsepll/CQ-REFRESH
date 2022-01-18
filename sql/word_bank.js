// const totalResults = `
// SELECT 100 * count(*) AS estimate FROM result TABLESAMPLE SYSTEM (1);
// `;

// const totalAnswers = `
// SELECT 100 * count(*) AS estimate FROM answer TABLESAMPLE SYSTEM (1);
// `;


// select * from (
// 	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1))cd_color
// 	from black_questions where substring(question_word from 2) != 'No Limits'
// 	union
// 	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
// 	from blue_questions where substring(question_word from 2) != 'Predicting Patterns'
// 	union
// 	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
// 	from green_questions where substring(question_word from 2) != 'Might'
// 	union
// 	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
// 	from red_questions where substring(question_word from 2) != 'Confidence'
// 	union
// 	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
// 	from white_questions where substring(question_word from 2) != 'Credibility'
// ) innerTable
// order by question
const listAllQuestionWords = `
[{"question":"Acceptance","cd_color":"G"},{"question":"Achievement","cd_color":"B"},{"question":"Adaptability","cd_color":"U"},{"question":"Advantageous","cd_color":"B"},{"question":"Adventure","cd_color":"R"},{"question":"Affection","cd_color":"R"},{"question":"Agreeable","cd_color":"G"},{"question":"Ambition","cd_color":"B"},{"question":"Amorality","cd_color":"B"},{"question":"Analyzing","cd_color":"U"},{"question":"Arrogant","cd_color":"B"},{"question":"Assertive","cd_color":"R"},{"question":"Authenticity","cd_color":"R"},{"question":"Authority","cd_color":"W"},{"question":"Autonomy","cd_color":"B"},{"question":"Balance","cd_color":"G"},{"question":"Being Present","cd_color":"R"},{"question":"Benevolence","cd_color":"W"},{"question":"Boldness","cd_color":"R"},{"question":"Calculating","cd_color":"B"},{"question":"Calm","cd_color":"G"},{"question":"Casual","cd_color":"R"},{"question":"Centered","cd_color":"G"},{"question":"Charm","cd_color":"R"},{"question":"Cold (attitude)","cd_color":"U"},{"question":"Commitment","cd_color":"W"},{"question":"Common sense","cd_color":"G"},{"question":"Community","cd_color":"G"},{"question":"Competitive","cd_color":"B"},{"question":"Complexity","cd_color":"U"},{"question":"Connected","cd_color":"G"},{"question":"Contentment","cd_color":"G"},{"question":"Contribution","cd_color":"W"},{"question":"Cooperation","cd_color":"W"},{"question":"Courage","cd_color":"R"},{"question":"Curiosity","cd_color":"U"},{"question":"Cynical","cd_color":"U"},{"question":"Deception","cd_color":"B"},{"question":"Decisive","cd_color":"W"},{"question":"Dedication","cd_color":"W"},{"question":"Defiance","cd_color":"B"},{"question":"Desire","cd_color":"B"},{"question":"Desire to Know","cd_color":"U"},{"question":"Destiny","cd_color":"G"},{"question":"Discerning","cd_color":"U"},{"question":"Discipline","cd_color":"W"},{"question":"Dominance","cd_color":"B"},{"question":"Earthy","cd_color":"G"},{"question":"Efficiency","cd_color":"U"},{"question":"Ego","cd_color":"B"},{"question":"Emotion","cd_color":"R"},{"question":"Empathy","cd_color":"R"},{"question":"Enthusiasm","cd_color":"R"},{"question":"Exploitation","cd_color":"B"},{"question":"Fairness","cd_color":"W"},{"question":"Flamboyant","cd_color":"R"},{"question":"Focus","cd_color":"U"},{"question":"Formality","cd_color":"W"},{"question":"Fortitude","cd_color":"G"},{"question":"Freedom","cd_color":"R"},{"question":"Friendship","cd_color":"R"},{"question":"Fun","cd_color":"R"},{"question":"Generosity","cd_color":"W"},{"question":"Growth","cd_color":"G"},{"question":"Guardian","cd_color":"W"},{"question":"Guile","cd_color":"U"},{"question":"Harmony","cd_color":"G"},{"question":"Heart","cd_color":"R"},{"question":"Hearty","cd_color":"G"},{"question":"Helpful","cd_color":"W"},{"question":"Honesty","cd_color":"W"},{"question":"Honor","cd_color":"W"},{"question":"Hope","cd_color":"G"},{"question":"Humble","cd_color":"W"},{"question":"Humor","cd_color":"R"},{"question":"Imaginative","cd_color":"U"},{"question":"Impulsive","cd_color":"R"},{"question":"Independent","cd_color":"R"},{"question":"Individuality","cd_color":"R"},{"question":"Influence","cd_color":"B"},{"question":"Instinct","cd_color":"G"},{"question":"Integrity","cd_color":"W"},{"question":"Intuition","cd_color":"G"},{"question":"Inventive","cd_color":"U"},{"question":"Investigative","cd_color":"U"},{"question":"Joy","cd_color":"R"},{"question":"Justice","cd_color":"W"},{"question":"Knowledge","cd_color":"U"},{"question":"Law","cd_color":"W"},{"question":"Leadership","cd_color":"W"},{"question":"Leverage","cd_color":"B"},{"question":"Live and let live","cd_color":"G"},{"question":"Logical","cd_color":"U"},{"question":"Looking to the Future","cd_color":"U"},{"question":"Love","cd_color":"R"},{"question":"Manipulation","cd_color":"B"},{"question":"Mastery","cd_color":"B"},{"question":"Mischievous","cd_color":"R"},{"question":"Morality","cd_color":"W"},{"question":"Natural","cd_color":"G"},{"question":"Neatness","cd_color":"W"},{"question":"Notices the little things","cd_color":"U"},{"question":"Nuance","cd_color":"U"},{"question":"Opportunistic","cd_color":"B"},{"question":"Organization","cd_color":"W"},{"question":"Originality","cd_color":"R"},{"question":"Passion","cd_color":"R"},{"question":"Peace","cd_color":"W"},{"question":"Perfection","cd_color":"U"},{"question":"Performer","cd_color":"R"},{"question":"Persistence","cd_color":"G"},{"question":"Persuasive","cd_color":"U"},{"question":"Poetic","cd_color":"R"},{"question":"Possessions","cd_color":"B"},{"question":"Power","cd_color":"B"},{"question":"Pragmatism","cd_color":"B"},{"question":"Pride","cd_color":"B"},{"question":"Profanity","cd_color":"B"},{"question":"Professional","cd_color":"W"},{"question":"Progress","cd_color":"U"},{"question":"Protective","cd_color":"W"},{"question":"Purity","cd_color":"W"},{"question":"Purpose","cd_color":"R"},{"question":"Questioning","cd_color":"U"},{"question":"Randomness","cd_color":"R"},{"question":"Rational","cd_color":"U"},{"question":"Realistic","cd_color":"B"},{"question":"Reckless","cd_color":"R"},{"question":"Relentless","cd_color":"B"},{"question":"Remorseless","cd_color":"B"},{"question":"Respect","cd_color":"G"},{"question":"Respect for Life","cd_color":"G"},{"question":"Responsibility","cd_color":"W"},{"question":"Romance","cd_color":"R"},{"question":"Ruthless","cd_color":"B"},{"question":"Sacred","cd_color":"W"},{"question":"Scholarly","cd_color":"U"},{"question":"Seeking Meaningfulness","cd_color":"G"},{"question":"Self-Control","cd_color":"W"},{"question":"Self-interest","cd_color":"B"},{"question":"Self-reliant","cd_color":"B"},{"question":"Sensitive","cd_color":"R"},{"question":"Sentiment","cd_color":"R"},{"question":"Serenity","cd_color":"G"},{"question":"Service","cd_color":"W"},{"question":"Significance","cd_color":"G"},{"question":"Simplicity","cd_color":"G"},{"question":"Skepticism","cd_color":"U"},{"question":"Solitary","cd_color":"B"},{"question":"Soul","cd_color":"G"},{"question":"Speculation","cd_color":"U"},{"question":"Spirituality","cd_color":"G"},{"question":"Spontaneous","cd_color":"R"},{"question":"Stability","cd_color":"G"},{"question":"Strategic","cd_color":"U"},{"question":"Stubborn","cd_color":"G"},{"question":"Studious","cd_color":"U"},{"question":"Subtlety","cd_color":"U"},{"question":"Success","cd_color":"B"},{"question":"Supportive","cd_color":"W"},{"question":"Supremacy","cd_color":"B"},{"question":"Talented","cd_color":"G"},{"question":"Teamwork","cd_color":"W"},{"question":"Technologically Fluent","cd_color":"U"},{"question":"Theorizing","cd_color":"U"},{"question":"Tradition","cd_color":"G"},{"question":"Trustworthy","cd_color":"W"},{"question":"Truth","cd_color":"U"},{"question":"Uninhibited","cd_color":"B"},{"question":"Valuing High Quality","cd_color":"U"},{"question":"Virtue","cd_color":"W"},{"question":"Willing to let go","cd_color":"G"},{"question":"Winning","cd_color":"B"},{"question":"Wisdom","cd_color":"G"},{"question":"Wordplay","cd_color":"U"}]
`;

//select quick_name, color_group from color_definitions order by quick_name asc;
const listAllColorGroups = `
[{"quick_name":"Abzan","color_group":["w","b","g"]},{"quick_name":"Azorius","color_group":["w","u"]},{"quick_name":"Bant","color_group":["w","u","g"]},{"quick_name":"Boros","color_group":["w","r"]},{"quick_name":"Dimir","color_group":["u","b"]},{"quick_name":"Esper","color_group":["w","u","b"]},{"quick_name":"Golgari","color_group":["b","g"]},{"quick_name":"Grixis","color_group":["u","b","r"]},{"quick_name":"Gruul","color_group":["r","g"]},{"quick_name":"Izzet","color_group":["u","r"]},{"quick_name":"Jeskai","color_group":["w","u","r"]},{"quick_name":"Jund","color_group":["b","r","g"]},{"quick_name":"Mardu","color_group":["w","b","r"]},{"quick_name":"Mono Black","color_group":["b"]},{"quick_name":"Mono Blue","color_group":["u"]},{"quick_name":"Mono Green","color_group":["g"]},{"quick_name":"Mono Red","color_group":["r"]},{"quick_name":"Mono White","color_group":["u"]},{"quick_name":"Naya","color_group":["w","r","g"]},{"quick_name":"Orzhov","color_group":["w","b"]},{"quick_name":"Rakdos","color_group":["b","r"]},{"quick_name":"Selesnya","color_group":["w","g"]},{"quick_name":"Simic","color_group":["u","g"]},{"quick_name":"Sultai","color_group":["u","b","g"]},{"quick_name":"Temur","color_group":["u","r","g"]}]
`;


exports.listAllQuestionWords = listAllQuestionWords;
exports.listAllColorGroups = listAllColorGroups;
// exports.totalResults = totalResults;
// exports.totalAnswers = totalAnswers;
