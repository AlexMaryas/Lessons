const result = (value) => {
    if (typeof value != 'string') {
        alert(`It's not a string: ${value}`);
    } else {
        value = value.trim();
        if (value.length > 30) {
            value.length === 30;
            value = value + "...";
        }
        console.log(value);
    }
};
result('                   dqqqqqqqqqqqqqqqqq12345678901212098765-            ');