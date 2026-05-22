Create VIEW view_river_info
AS
Select 
	Concat_WS(
		' ',
		'The river',
		river_name,
		'flows into the',
		outflow,
		'and is',
		"length",
		'kilometers long.')
AS "River Information" 
FROM
	rivers
ORDER BY river_name ASC;

Select * From view_river_info;