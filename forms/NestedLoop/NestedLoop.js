let rows = parseInt(prompt("Enter the number of rows (between 1 and 10)."))
let columns = parseInt(prompt("Enter the number of columns (between 1 and 10)."))

//Nested loop that displays rows and columns with "*"
for (i = 1; i<=rows; i++){
for (j = 1;j<=columns;j++){
document.write("*")
}
document.write("<br />")
}