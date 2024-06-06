interface Student {
    firstName: string
    lastName: string
    age: number
    location: string


}

const student1: Student = {
    firstName: 'Sugira',
    lastName: 'Vincent',
    age: 25,
    location: 'Kabeza'

};
const student2: Student = {
    firstName: 'Gihozo',
    lastName: 'Julia',
    age: 24,
    location: 'Kanombe'
};

let StudentList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[];

// create the table with HTML DOM

const table: HTMLTableElement = document.createElement("table")[0];
const th: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement =document.createElement("tbody");

const rowHead: HTMLTableRowElement = th.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);