// function searchFunction() {
//     var input, filter, div, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     content = document.getElementById("content");
//     div = content.getElementsByTagName("div");
//     for (i = 0; i < div.length; i++) {
//         a = div[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             div[i].style.display = "";
//         } else {
//             div[i].style.display = "none";
//         }
//     }
// }