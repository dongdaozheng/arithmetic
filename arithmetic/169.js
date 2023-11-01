const arr = [1, 2, 3, 4, 4, 1];

async function printArrayElements() {
	for (let i = 0; i < arr.length; i++) {
		new Promise(res => setTimeout(res, 5000)).then(async () => {
			await console.log(arr[i]);
		})
	}
}
printArrayElements();
