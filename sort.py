# insert
array = [7,5,9,0,3,1,6,2,4,8]

for i in range(1, len(array)):
  for j in range(i, 0, -1):
    if array[j] < array[j-1]:
      array[j], array[j-1] = array[j-1], array[j]
    else:
      break

print(array)


#quicksort

def quicksort(array, start, end):
    if start >= end: #if there is only one in array
        return
    pivot = start #first element is pivot
    left = start + 1
    right = end
    while left <= right:
        #find elements bigger than pivot
        while left <= end and array[left] <= array[pivot]:
            left += 1
        #find elements smaller than pivot
        while right > start and array[right] >= array[pivot]:
            right -= 1
        #change pivot
        if left > right:
            array[right], array[pivot] = array[pivot], array[right]
        else:
            array[left], array[right] = array[right], array[left]
    quicksort(array, start, right-1)
    quicksort(array, right+1 ,end)
quicksort(array,0,len(array)-1)
print(array)