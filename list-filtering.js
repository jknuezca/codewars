function filter_list(list) {
    //Return a new array with the strings filtered out
    //return list.filter((element) => typeof element === "number");
    var integers = [],
        i = 0;
    for (var i; i < list.length; i++) {
        if (Number.isInteger(list[i])) {
            integers.push(list[i]);
        }
    }
    return integers;
}
