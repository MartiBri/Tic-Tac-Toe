let createTable = function() {

    //CREATE ALL HTML ELEMENTS FOR TABLE
    let table = document.createElement("TABLE");

    let row1 = document.createElement("TR");
    let data1 = document.createElement("TD");
    data1.onmouseover=function(){onOver(this)};
    data1.onmouseout=function(){onOut(this)};
    let data2 = document.createElement("TD");
    data2.onmouseover=function(){onOver(this)};
    data2.onmouseout=function(){onOut(this)};
    let data3 = document.createElement("TD");
    data3.onmouseover=function(){onOver(this)};
    data3.onmouseout=function(){onOut(this)};

    let row2 = document.createElement("TR");
    let data4 = document.createElement("TD");
    data4.onmouseover=function(){onOver(this)};
    data4.onmouseout=function(){onOut(this)};
    let data5 = document.createElement("TD");
    data5.onmouseover=function(){onOver(this)};
    data5.onmouseout=function(){onOut(this)};
    let data6 = document.createElement("TD");
    data6.onmouseover=function(){onOver(this)};
    data6.onmouseout=function(){onOut(this)};

    let row3 = document.createElement("TR");
    let data7 = document.createElement("TD");
    data7.onmouseover=function(){onOver(this)};
    data7.onmouseout=function(){onOut(this)};
    let data8 = document.createElement("TD");
    data8.onmouseover=function(){onOver(this)};
    data8.onmouseout=function(){onOut(this)};
    let data9 = document.createElement("TD");
    data9.onmouseover=function(){onOver(this)};
    data9.onmouseout=function(){onOut(this)};

    //CREATE THE TABLE WITH
    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);

    row2.appendChild(data4);
    row2.appendChild(data5);
    row2.appendChild(data6);


    row3.appendChild(data7);
    row3.appendChild(data8);
    row3.appendChild(data9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    let content = document.getElementById("content");
    content.appendChild(table)


};

let onOver = function(id){

   id.style.backgroundColor = "Black";

    
};

let onOut = function (id) {
    id.style.backgroundColor = "white";
}