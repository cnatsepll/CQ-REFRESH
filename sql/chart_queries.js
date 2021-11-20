const listAllQuestionWords = `
select * from (
	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1))cd_color
	from black_questions
	union
	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
	from blue_questions
	union
	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
	from green_questions
	union
	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
	from red_questions
	union
	select substring(question_word from 2) question, upper(substring(question_word from 1 for 1)) cd_color
	from white_questions
) innerTable
order by question
`;

const listAllColorGroups = `
select quick_name, color_group from color_definitions;
`;



const topResultsDetailed = `
SELECT COUNT(result.user_id) user_count, result_color, color_group, quick_name
,(SELECT count(user_id) FROM result)total_users
FROM result 
LEFT JOIN users ON (result.user_id = users.user_id) 
join color_definitions on result.result_color like concat('%',color_definitions.quick_name,'%')
GROUP BY result_color, quick_name, color_group 
ORDER BY user_count DESC
`;

const topResult = `
SELECT COUNT(result.user_id) user_count, quick_name
,(SELECT count(user_id) FROM result)total_users
FROM result 
LEFT JOIN users ON (result.user_id = users.user_id) 
join color_definitions on result.result_color like concat('%',color_definitions.quick_name,'%')
GROUP BY quick_name 
ORDER BY user_count DESC
`;

const resultMostLike = `
select quick_name, answers, total, (answers / total) percent_difference 
from (
	select 
	quick_name, 
	count(answer.user_id) answers, 
	(select cast(count(user_id) as decimal) total from result r2 where r2.result_color like concat('%',color_definitions.quick_name,'%'))
	from answer
	join result r1 on r1.user_id = answer.user_id
	join color_definitions on r1.result_color like concat('%',color_definitions.quick_name,'%')
	where 
	question_word = $1
	and answer_value > 5
	group by quick_name
) innerTable
order by percent_difference desc`;
const resultMostLikeDetailed = `
select result_color, answers, total, (answers / total) percent_difference from (
select 
result_color, 
count(answer.user_id) answers, 
(select cast(count(user_id) as decimal) total from result r2 where r1.result_color = r2.result_color)
from answer
join result r1 on r1.user_id = answer.user_id
where 
question_word = $1 
and answer_value > 5
group by result_color
) innerTable
order by percent_difference desc`;

const resultLeastLike = `
select quick_name, answers, total, (answers / total) percent_difference 
from (
	select 
	quick_name, 
	count(answer.user_id) answers, 
	(select cast(count(user_id) as decimal) total from result r2 where r2.result_color like concat('%',color_definitions.quick_name,'%'))
	from answer
	join result r1 on r1.user_id = answer.user_id
	join color_definitions on r1.result_color like concat('%',color_definitions.quick_name,'%')
	where 
	question_word = $1
	and answer_value < 5
	group by quick_name
) innerTable
order by percent_difference desc`;
const resultLeastLikeDetailed = `
select result_color, answers, total, (answers / total) percent_difference from (
select 
result_color, 
count(answer.user_id) answers, 
(select cast(count(user_id) as decimal) total from result r2 where r1.result_color = r2.result_color)
from answer
join result r1 on r1.user_id = answer.user_id
where 
question_word = $1
and answer_value < 5
group by result_color
) innerTable
order by percent_difference desc`;

const topWordsForResult = `
select count(answer.user_id), question_word, sum(answer_value), color_type_key
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
result_color like concat('%',$1::text,'%')
group by question_word, color_type_key
order by sum desc
limit 30
`;

const bottomWordsForResult = `
select count(answer.user_id), question_word, sum(answer_value), color_type_key
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
result_color like concat('%',$1::text,'%')
group by question_word, color_type_key
order by sum asc 
limit 30
`;

const fiveColorRadar =
`
select * from
(
select count(answer.user_id) answers
, sum(white_counter) white_counter 
, sum(blue_counter) blue_counter
, sum(black_counter) black_counter
, sum(red_counter) red_counter
, sum(green_counter) green_counter
, 'positive' response_value
from answer
join result r1 on r1.user_id = answer.user_id
where 
question_word = $1
and answer_value > 5
union
select 
count(answer.user_id) answers
, sum(white_counter) white_counter 
, sum(blue_counter) blue_counter
, sum(black_counter) black_counter
, sum(red_counter) red_counter
, sum(green_counter) green_counter
,'negative' response_value
from answer
join result r1 on r1.user_id = answer.user_id
where 
question_word = $1
) value_gathering
order by response_value desc
`;

const resultColorpieSlices =
`
select white_counter, blue_counter, black_counter, red_counter, green_counter
,sum(white_counter+blue_counter+black_counter+red_counter+green_counter) total_counter
from(
	select sum(white_counter) white_counter
	, sum(blue_counter) blue_counter
	, sum(black_counter) black_counter
	, sum(red_counter) red_counter
	, sum(green_counter) green_counter
	from (
		select 
		count(answer.user_id) answers
		, sum(white_counter) white_counter 
		, sum(blue_counter) blue_counter
		, sum(black_counter) black_counter
		, sum(red_counter) red_counter
		, sum(green_counter) green_counter
		from answer
		join result r1 on r1.user_id = answer.user_id
		where  result_color like $1
	) innerTable
)outerTable
group by white_counter, blue_counter, black_counter, red_counter, green_counter

`;

const mostFavoredColors = 
`
select count(answer.user_id) answers
, sum(white_counter) white_counter 
, sum(blue_counter) blue_counter
, sum(black_counter) black_counter
, sum(red_counter) red_counter
, sum(green_counter) green_counter
from answer
join result r1 on r1.user_id = answer.user_id
`;

exports.mostFavoredColors = mostFavoredColors;

exports.listAllQuestionWords = listAllQuestionWords;
exports.listAllColorGroups = listAllColorGroups;

exports.topResult = topResult;
exports.topResultsDetailed = topResultsDetailed;
exports.resultMostLike = resultMostLike;
exports.resultLeastLike = resultLeastLike;
exports.topWordsForResult = topWordsForResult;
exports.bottomWordsForResult = bottomWordsForResult;
exports.resultColorpieSlices = resultColorpieSlices;

exports.fiveColorRadar = fiveColorRadar;