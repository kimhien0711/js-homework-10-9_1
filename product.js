var id=0;
function sell(){
    id++;
    var p_name = document.getElementById("nhap_name").value;
    var p_qt = document.getElementById("nhap_qty").value;
    var p_up = document.getElementById("nhap_up").value;
    var p_dc = document.getElementById("nhap_dc").value;
    var total = p_qt*p_up*(1-p_dc/100).toFixed(2);
    var row= "<tr>";
        row += "<td>" + id + "</td>";
        row += "<td>" + p_name + "</td>";
        row += "<td>" + p_qt + "</td>";
        row += "<td>" + p_up + "</td>";
        row += "<td>" + p_dc + "</td>";
        row += "<td>" + total + "</td>";
        row += "</tr>";
    document.getElementById("table").innerHTML+=row;
}
function cancel(){
    document.getElementById("frm").reset();
}