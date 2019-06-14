$_$wp(1);
function minusMaker(minusNumber) {
    $_$wf(1);
    function minus(firstNumber) {
        $_$wf(1);
        return $_$w(1, 0), firstNumber - minusNumber;
    }
    return $_$w(1, 1), minus;
}
const minus5 = ($_$w(1, 2), minusMaker(5));
$_$w(1, 3), $_$tracer.log(minus5(7), 'minus5(7)', 1, 3);
$_$w(1, 4), $_$tracer.log(minus5(59), 'minus5(59)', 1, 4);
function counter() {
    $_$wf(1);
    let number = ($_$w(1, 5), 0);
    function add1() {
        $_$wf(1);
        return $_$w(1, 6), ++number;
    }
    return $_$w(1, 7), add1;
}
;
const newCounter = ($_$w(1, 8), counter());
$_$w(1, 9), $_$tracer.log(newCounter(), 'newCounter()', 1, 9);
$_$w(1, 10), $_$tracer.log(newCounter(), 'newCounter()', 1, 10);
const $_$wvd12 = $_$w(1, 11), counterFactory = howMuch => {
        $_$wf(1);
        var startNumber = ($_$w(1, 12), 0);
        return $_$w(1, 13), {
            increment: function () {
                $_$wf(1);
                return $_$w(1, 14), startNumber += howMuch;
            },
            decrement: function () {
                $_$wf(1);
                return $_$w(1, 15), startNumber -= howMuch;
            }
        };
    };
const adderSubtracter = ($_$w(1, 16), counterFactory(7));
const add7 = ($_$w(1, 17), adderSubtracter.increment);
$_$w(1, 18), $_$tracer.log(add7(), 'add7()', 1, 18);
$_$wpe(1);