function permute(nums) {
	const result = [];

	backtrack(nums, []);

	function backtrack(nums, current) {
		if (current.length === nums.length) {
			result.push([...current]);
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			if (current.includes(nums[i])) {
				console.log(nums[i]);
				continue;
			}
			current.push(nums[i]);
			console.log(nums, current);
			backtrack(nums, current);

			current.pop();
		}
	}

	return result;
}
console.log(permute([1, 2, 3]));