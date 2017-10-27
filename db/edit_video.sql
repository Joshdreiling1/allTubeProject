UPDATE videos
SET title = $3
where userId = $1 and id = $2
