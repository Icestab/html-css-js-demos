function quicksort(arr) {
	if (arr.length < 2) {
		return arr//递归出口
	}
	else {
		let PointAddress = RandomPoint(arr)
		let point = arr.splice(PointAddress, 1)//取数组第一个元素为基点同时从数组中删除基点
		console.log(point)
		let less = arr.filter(i => i <= point)//筛选小于等于基点的元素
		let greater = arr.filter(i => i > point)//筛选大于基点的元素
		return quicksort(less).concat(point).concat(quicksort(greater))//将三者拼接成新的数组并返回
	}
}
let arr = [1, 2, 12, 8, -2, 0, 4, 5, 7, 1, 4]
arr.splice(2, 1)
console.log('测试数组' + arr);
console.log('排序后数组' + quicksort(arr))


//随机选择基点
function RandomPoint(arr) {
	let a = Math.round(Math.random() * arr.length)
	return a
}