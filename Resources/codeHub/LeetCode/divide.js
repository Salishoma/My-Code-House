var divide = function(dividend, divisor) {
    if (dividend <= -2147483648 && divisor==-1) return 2147483647;
    let sign = Math.sign(dividend)==Math.sign(divisor)?1:-1;
    [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)];
    if (divisor == 1 || divisor == -1) return sign*dividend;
    let result = 0;
    while (divisor <= dividend) {
        let double = divisor, count = 1;
        // if double exceeded half of the dividend, there's no need for further doubling
        while (double<=(dividend>>1)) {
            double<<=1; // doubles current divisor
            count<<=1; // double current count
        }
        result+=count;
        dividend-=double;
    }
    return sign*result;
};
divide(30, 6)