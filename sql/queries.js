const listAllQuestionWords = `
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



const topResultsDetailed = `
SELECT COUNT(result.user_id) user_count, result_color, color_group, quick_name
,(SELECT count(user_id) FROM result WHERE result_color LIKE '%Planeswalker%')total_users
FROM result 
LEFT JOIN users ON (result.user_id = users.user_id) 
join color_definitions on result.result_color like concat('%',color_definitions.quick_name,'%')
GROUP BY result_color, quick_name, color_group 
ORDER BY user_count DESC
`;

const topResult = `
SELECT COUNT(result.user_id) user_count, quick_name
,(SELECT count(user_id) FROM result WHERE result_color LIKE '%Planeswalker%')total_users
FROM result 
LEFT JOIN users ON (result.user_id = users.user_id) 
join color_definitions on result.result_color like concat('%',color_definitions.quick_name,'%')
GROUP BY quick_name 
ORDER BY user_count DESC
`;

const resultMostLike = `
select result_color, answers, total, (answers / total) percent_difference from (
select 
result_color, 
count(answer.user_id) answers, 
(select cast(count(user_id) as decimal) total from result r2 where r1.result_color = r2.result_color)
from answer
join result r1 on r1.user_id = answer.user_id
where 
question_word = $1 
and answer_value >= 15
and result_color like '%Planeswalker%'
group by result_color
) innerTable
order by percent_difference desc`;

const resultLeastLike = `
select result_color, answers, total, (answers / total) percent_difference from (
select 
result_color, 
count(answer.user_id) answers, 
(select cast(count(user_id) as decimal) total from result r2 where r1.result_color = r2.result_color)
from answer
join result r1 on r1.user_id = answer.user_id
where 
question_word = 'Service' 
and answer_value < 9
and result_color like '%Planeswalker%'
group by result_color
) innerTable
order by percent_difference desc`;

const topWordsForResult = `
select count(answer.user_id), question_word, sum(answer_value)
from answer
join result on answer.user_id = result.user_id
where 
question_word in (
select substring(question_word from 2)
from black_questions
union
select substring(question_word from 2)
from blue_questions
union
select substring(question_word from 2)
from green_questions
union
select substring(question_word from 2)
from red_questions
union
select substring(question_word from 2)
from white_questions
)
and 
result_color like '%Jund%'
group by question_word
order by sum desc
limit 25
`;

const bottomWordsForResult = `
select count(answer.user_id), question_word, sum(answer_value)
from answer
join result on answer.user_id = result.user_id
where 
question_word in (
select substring(question_word from 2)
from black_questions
union
select substring(question_word from 2)
from blue_questions
union
select substring(question_word from 2)
from green_questions
union
select substring(question_word from 2)
from red_questions
union
select substring(question_word from 2)
from white_questions
)
and 
result_color like '%Jund%'
group by question_word
order by sum asc
limit 25
`;





exports.listAllQuestionWords = listAllQuestionWords;

exports.topResult = topResult;
exports.topResultsDetailed = topResultsDetailed;
exports.resultMostLike = resultMostLike;
exports.resultLeastLike = resultLeastLike;

exports.topWordsForResult = topWordsForResult;
exports.bottomWordsForResult = bottomWordsForResult;