let createTable = function() {

    //CREATE ALL HTML ELEMENTS FOR TABLE
    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");

    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");

    //CREATE THE TABLE WITH
    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);


    row2.appendChild(data1);
    row2.appendChild(data2);
    row2.appendChild(data3);


    row3.appendChild(data1);
    row3.appendChild(data2);
    row3.appendChild(data3);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    let content = document.getElementById("content");
    content.appendChild(table);
};
