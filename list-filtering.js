function filter_list(list) {
    var integers = [],
        i = 0;
    for (var i; i < list.length; i++) {
        if (Number.isInteger(list[i])) {
            integers.push(list[i]);
        }
    }
    return integers;
}
