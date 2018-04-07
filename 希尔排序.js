const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function shellSort (arr) {
  let len = arr.length
  let gap = 1
  console.time('希尔排序耗时:')
  while (gap < len / 5) { // 动态定义间隔序列
    gap = gap * 5 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i]
      let j = i - gap
      for (; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.timeEnd('希尔排序耗时:')
  return arr
}

function shellSort2 (arr) {
  let gap = 1
  while (gap < arr.length / 5) {
    gap = gap * 5 + 1
  }

  for (; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < arr.length; i++) {
      let j = i - gap
      for (; j >= 0 && arr[j] > arr[i]; j -= gap) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
      console.log(arr, gap)
    }
  }

  return arr
}

console.log(arr)
console.log(shellSort2([...arr]))
