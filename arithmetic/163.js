const arr = [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 1, 1, 1, 1, 1, 1, 2, 3, 34, 2]

const map = new Map()

for (const item of arr) {
	map.set(item, map.get(item) + 1 || 1)
}

const sort = [...new Set(arr)].sort((a, b) => map.get(a) - map.get(b))
console.log(sort);


console.log(map);
