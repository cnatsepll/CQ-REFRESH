const topResult = "SELECT COUNT(result.user_id), result_color FROM result LEFT JOIN users ON (result.user_id = users.user_id) WHERE post_date > '2018/12/01' GROUP BY result_color ORDER BY count ;";

exports.topResult = topResult;