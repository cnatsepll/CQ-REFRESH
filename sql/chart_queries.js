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
	(select cast(count(answer.user_id) as decimal) total from result r2 
	 join answer on answer.user_id = r2.user_id 
	 where r2.result_color like concat('%',color_definitions.quick_name,'%') and question_word = $1)
	from answer
	join result r1 on r1.user_id = answer.user_id
	join color_definitions on r1.result_color like concat('%',color_definitions.quick_name,'%')
	where 
	question_word = $1
	and answer_value > 5
	and quick_name not like 'Multicolored' 
	group by quick_name
) innerTable
order by percent_difference desc
`;



const resultLeastLike = `
select quick_name, answers, total, (answers / total) percent_difference 
from (
	select 
	quick_name, 
	count(answer.user_id) answers, 
	(select cast(count(answer.user_id) as decimal) total from result r2 
	 join answer on answer.user_id = r2.user_id 
	 where r2.result_color like concat('%',color_definitions.quick_name,'%') and question_word = $1)
	from answer
	join result r1 on r1.user_id = answer.user_id
	join color_definitions on r1.result_color like concat('%',color_definitions.quick_name,'%')
	where 
	question_word = $1
	and answer_value < 5
	and quick_name not like 'Multicolored' 
	group by quick_name
) innerTable
order by percent_difference desc`;


const topWordsForResult = 
`
select *, (yes_count::decimal / total_count) as percentage
from (
	(select count(answer.user_id)yes_count, question_word, sum(answer_value), color_type_key
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
	and answer_value > 5
	group by question_word, color_type_key)table1
join
	(select count(answer.user_id)total_count, question_word qw, sum(answer_value) total_sum, color_type_key
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
	group by question_word, color_type_key)table2
on table1.question_word = table2.qw
)table3
order by percentage desc
limit 35
`;

const bottomWordsForResult = 
`
select *, (yes_count::decimal / total_count) as percentage
from (
	(select count(answer.user_id)yes_count, question_word, sum(answer_value), color_type_key
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
	and answer_value < 5
	group by question_word, color_type_key)table1
join
	(select count(answer.user_id)total_count, question_word qw, sum(answer_value) total_sum, color_type_key
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
	group by question_word, color_type_key)table2
on table1.question_word = table2.qw
)table3
order by percentage desc
limit 35
`;

const fiveColorRadar =
`
select *, (yes_count::decimal / total_count) as percentage
from (
	select * from (
		select count(*) yes_count,
			CASE GREATEST(white_counter, blue_counter, black_counter, red_counter, green_counter) 
				WHEN white_counter THEN 'white'
				WHEN blue_counter THEN 'blue'
				WHEN black_counter THEN 'black'
				WHEN red_counter THEN 'red'
				WHEN green_counter THEN 'green'
			END AS max_value_column_name
		from result 
		join answer r1 on r1.user_id = result.user_id
		where question_word = $1
		and answer_value > 5
		group by max_value_column_name
		) table1
	join (
	select count(*) total_count,
		CASE GREATEST(white_counter, blue_counter, black_counter, red_counter, green_counter) 
			WHEN white_counter THEN 'white'
			WHEN blue_counter THEN 'blue'
			WHEN black_counter THEN 'black'
			WHEN red_counter THEN 'red'
			WHEN green_counter THEN 'green'
		END AS total_column_name
	from result 
	join answer r1 on r1.user_id = result.user_id
	where question_word = $1
	group by total_column_name
	) table2 on max_value_column_name = total_column_name
)table3
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

exports.topResult = topResult;
exports.topResultsDetailed = topResultsDetailed;
exports.resultMostLike = resultMostLike;
exports.resultLeastLike = resultLeastLike;
exports.topWordsForResult = topWordsForResult;
exports.bottomWordsForResult = bottomWordsForResult;
exports.resultColorpieSlices = resultColorpieSlices;

exports.fiveColorRadar = fiveColorRadar;