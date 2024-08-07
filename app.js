console.log("hello back to school");

// creating some constants
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

let saleMap;
let totalSales;
let salesByProduct;
let salesBySegment;

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

    saleMap = listSheets.find((ws) => ws.name == 'SaleMap');
    totalSales = listSheets.find((ws) => ws.name == 'Total Sales');
    salesByProduct = listSheets.find((ws) => ws.name == 'SalesbyProduct');
    salesBySegment = listSheets.find((ws) => ws.name == 'SalesbySegment');
};

// assingning constants to the buttons
const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");

// Functions that tell JS what to do when buttons are clicked

function oregonWashFunction() {
    //Log what's pressed
    console.log(oregonWashingtonButton.value);

    //Apply the filter to all of the sheets
    saleMap.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
    totalSales.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
    salesByProduct.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
    salesBySegment.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
}

viz.addEventListener("firstinteractive", logWorkbookInformation);

oregonWashingtonButton.addEventListener("click", oregonWashFunction)



