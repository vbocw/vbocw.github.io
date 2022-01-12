console.log("test");

//var tableObj;
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
//var validatedData = []; 
for(i=0;i<tableData.length; i++){
  tableData[i].slno = i+1;
}
var DataTableObject = new Tabulator(document.getElementById("main-table"), {
data: tableData, // defined in dataArray.js
height: "100%",
addRowPos: "bottom",
sortMode:"remote",
columns:[
    //{title:"uindex", field:"uindex", width:50, headerSort:false},
    {title:"#", field:"slno", width:50, headerSort:true},
    {title:"Course", field:"CourseName", width:"100", hozAlign:"right", headerSort:true, formatter:"textarea"},
    {title:"Subject", field:"subjectName", width:"100", hozAlign:"right", formatter:"textarea"},
    {title:"Topic", field:"topicName", width:"150", hozAlign:"right", headerSort:false, formatter:"textarea"},
    {title:"Description", field:"description",width:"150", hozAlign:"center", headerSort:false, formatter:"textarea"},  
    {title:"Link", field:"docLink", width:"100", hozAlign:"right", headerSort:false, formatter:"html"},
    {title:"Contributed by", field:"contributorName",width:"125", hozAlign:"center", formatter:"textarea"},
    {title:"Uploaded On", field:"uploadDate", width:"125", hozAlign:"center", formatter:"textarea"},
    {title:"Department", field:"dept",width:"100", hozAlign:"center", formatter:"textarea"},
    {title:"Level", field:"courseLevel",width:"100", hozAlign:"center", formatter:"textarea"},
    {title:"Instructor", field:"InstructorName",width:"100", hozAlign:"center", formatter:"textarea"},
    {title:"Year & Semester", field:"semYear",width:"100", hozAlign:"center", headerSort:false, formatter:"textarea"},
    {title:"DocID", field:"docId", width:"200"},
    
],
});

for(i=0; i<tableData.length; i++){
  console.log(i);
  DataTableObject.updateRow(i+1, {slno: "lo"});
}
