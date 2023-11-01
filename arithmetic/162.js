/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join(arr1, arr2) {
	const mergedArray = [...arr1, ...arr2];

	const groupedObj = mergedArray.reduce((result, obj) => {
		const id = obj.id;
		if (!result[id]) {
			result[id] = obj;
		} else {
			Object.assign(result[id], obj);
		}
		return result;
	}, {});


	const joinedArray = Object.values(groupedObj);

	joinedArray.sort((a, b) => a.id - b.id);

	return joinedArray;
}
console.log(
	join(
		[
			{ "id": 1, "x": 2, "y": 3 },
			{ "id": 2, "x": 3, "y": 6 }
		],
		[
			{ "id": 2, "x": 10, "y": 20 },
			{ "id": 3, "x": 0, "y": 0 }
		]
	)
);