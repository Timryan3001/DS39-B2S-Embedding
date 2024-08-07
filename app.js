console.log("hello back to school");

// creating some constants
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInformation() {
    workbook = viz.workbook;
    console.log(`The workbook name is : "${workbook.name}"`);

    // find the array of sheets within a dashboard
    let sheets = workbook.publishedSheetsInfo;
    sheets.forEach((element) => {
        index = element.index;
        console.log(`The sheet with index ${index} is: ${element.name}`);
    });

    vizActiveSheet = workbook.activeSheet;
    console.log(`The active sheet is ${vizActiveSheet.name}`)

    listSheets = vizActiveSheet.worksheets;
    listSheets.forEach((element) => {
        index = element.index;
        worksheetName = element.name;
        console.log(`The worksheet with index ${index} is: ${worksheetName}`)
    });
};



viz.addEventListener("firstinteractive", logWorkbookInformation);

