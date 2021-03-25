function quicksort(arr) {
	if(arr.length<2){
		return arr//递归出口
	}
	else{
		let point=arr.shift()//取数组第一个元素为基点同时从数组中删除基点
		let less=arr.filter(i=>i<=point)//筛选小于等于基点的元素
		let greater=arr.filter(i=>i>point)//筛选大于基点的元素
		return quicksort(less).concat(point).concat(quicksort(greater))//将三者拼接成新的数组并返回
	}
}
let arr = [1,2,12,8,-2,0,4,5,7,1,4]
console.log(quicksort(arr))
