insert into videos
(userId, title, source)
values
($1, $2, $3)
RETURNING *;