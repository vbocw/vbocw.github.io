console.log("test");

var tableObj;
/*
for (i = 1; i <= 50; i++) {
    tableData.push({
      id: i,
      slno: i,
      subjectName: "Physics",
      docLink:"Test",
      dept: "Physics",
      courseLevel: "Post Graduate",
      InstructorName: "Prof. BCG",
      semYear: "Semester I, 2022",
      contributorName: "Arijit Das",
      description: "Sample Doc"
    });
  }
  */
DataTableObject = new Tabulator(document.getElementById("main-table"), {
data: tableData, // defined in dataArray.js
height: "auto",
addRowPos: "bottom",
columns:[
    {title:"#", field:"slno", width:50, headerSort:false},
    {title:"Course", field:"subjectName", width:"150", hozAlign:"right", headerSort:true},
    {title:"Subject", field:"subjectName", width:"150", hozAlign:"right"},
    {title:"Topic", field:"subjectName", width:"150", hozAlign:"right", headerSort:false},
    {title:"Description", field:"description",width:"150", hozAlign:"center", headerSort:false},  
    {title:"Link", field:"docLink", width:"100", hozAlign:"right", headerSort:false},
    {title:"Contributed by", field:"contributorName",width:"150", hozAlign:"center"},
    {title:"Department", field:"dept",width:"150", hozAlign:"center"},
    {title:"Level", field:"courseLevel",width:"100", hozAlign:"center"},
    {title:"Instructor", field:"InstructorName",width:"100", hozAlign:"center"},
    {title:"Year & Semester", field:"semYear",width:"100", hozAlign:"center", headerSort:false},
    {title:"DocID", field:"id", width:"100"},
    
],
});

