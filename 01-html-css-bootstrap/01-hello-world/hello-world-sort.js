var list = [1, -43, 8, 42, 6, 3]
var newList = []

while(list.length > 0) {
	var maybeSmallest = list[0]
	var maybeSmallestPosition = 0
	for (var i = 0; i < list.length; i++) {
		if (list[i + 1] < maybeSmallest) {
			maybeSmallest = list[i + 1]
			maybeSmallestPosition = i + 1
		}
	}


	newList.push(maybeSmallest)
	list.splice(maybeSmallestPosition, 1)
	console.log("new list", newList)

}



var listEasier = [1, -43, 8, 42, 6, 3]
var sortedList = listEasier.sort()
console.log("sorted list", sortedList)