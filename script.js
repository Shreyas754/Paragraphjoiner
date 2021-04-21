function getPara1() {
    var inputs = [];
    for(var i = 1 ; i <=4 ; i++)
    {
        inputs.push(document.getElementById("input_box_1" + i).value);
        inputs.join(". ");
        document.getElementById("showPara1").innerHTML = inputs.join(". ");

    }
}