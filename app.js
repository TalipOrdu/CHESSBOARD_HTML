
let table = document.getElementById("myTable");
let rowIndex,colIndex;

//table rows
for(var i=0; i<table.rows.length; i++){

    for(var j=0 ; j<table.rows[i].cells.length; j++){

        table.rows[i].cells[j].onclick = function(){

            rowIndex = this.parentElement.rowIndex;
            colIndex = this.cellIndex;
            console.log("row:" + rowIndex+ "col:"+colIndex);

            document.getElementById("result").innerHTML = "row: " + rowIndex + " col: "+ colIndex;
        }
    }
}



// function clickMe(x,y){
//     alert("1.1 hücresi");
// }

// function clickMe2(){
//     alert("1.2 hücresi");
// }
