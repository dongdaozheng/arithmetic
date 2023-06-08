const obj = [
	{
		id: 2,
		text: "1"
	},
	{
		id: 2,
		text: "1"
	},
	{
		id: 2,
		text: "1"
	},
	{
		id: 2,
		text: "1"
	}
]
const map = new Map()
let left = 0, right = obj.length - 1

while (left < right) {
	map.set(obj[left].id, obj[left])
	map.set(obj[right].id, obj[right])
	left++
	right--
}
if (left === right) {
	map.set(obj[right].id, obj[right])
}


console.time()
console.log([...map.values()]);
console.timeEnd()

