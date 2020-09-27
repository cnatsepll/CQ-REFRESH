const topResult = `SELECT COUNT(result.user_id), result_color FROM result LEFT JOIN users ON (result.user_id = users.user_id) WHERE post_date > '2018/12/01' GROUP BY result_color ORDER BY count DESC;`;

const resultMostLike = `
select result_color, answers, total, (answers / total) percent_difference from (
    select 
    result_color, 
    count(answer.user_id) answers, 
    (select cast(count(user_id) as decimal) total from result r2 where r1.result_color = r2.result_color)
    
    from answer
    join result r1 on r1.user_id = answer.user_id
    where 
    question_word = 'Skepticism' 
    and answer_value > 16
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


exports.topResult = topResult;
exports.resultMostLike = resultMostLike;
exports.resultLeastLike = resultLeastLike;