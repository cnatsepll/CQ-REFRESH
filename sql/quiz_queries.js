const gatherQuestions = `
select substring(question_word from 2) question, substring(question_word from 1 for 1) cd_color
from black_questions
union
select substring(question_word from 2) question, substring(question_word from 1 for 1) cd_color
from blue_questions
union
select substring(question_word from 2) question, substring(question_word from 1 for 1) cd_color
from green_questions
union
select substring(question_word from 2) question, substring(question_word from 1 for 1) cd_color
from red_questions
union
select substring(question_word from 2) question, substring(question_word from 1 for 1) cd_color
from white_questions
`;