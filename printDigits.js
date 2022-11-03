function printDigits(num) {
    while (num) {
        let digitToPnt = num % 10;
        console.log(digitToPnt)
        num = (num - digitToPnt) /10
    }
}

printDigits(8);

printDigits(123);