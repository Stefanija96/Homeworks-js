function sumOfMaxAndMin(arr) {
    let max = -Infinity;
    let min = +Infinity;
    for (let i = 0; i <= arr.length; i++) {

        if (typeof arr[i] === 'string' || typeof arr[i] === 'boolean' || typeof arr[i] === 'object') {
            continue;
        }
        if (arr[i] >= max) {
            max = arr[i];
        }
        if (arr[i] <= min) {
            min = arr[i];
        }
    }
    let result = max + min;
    console.log(`Minimum: ${min}, Maximum:${max}, Sum:${result}`);
}
sumOfMaxAndMin([156, 'hello', -143, 12, false, 67, true, 323, '11.8'])