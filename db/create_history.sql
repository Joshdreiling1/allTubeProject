insert into history
(searches)
values
($1)
RETURNING *;