var Excel=require('exceljs');
var workbook=new Excel.Workbook();
var worksheet=workbook.addWorksheet('sheet1');
worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'DOB', width: 10, outlineLevel: 1 }
];