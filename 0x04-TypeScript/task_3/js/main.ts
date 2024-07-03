/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert a row and get the new RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log('New Row ID:', newRowID);

// Update the row with age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };
const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);
console.log('Updated Row ID:', updatedRowID);

// Delete the row
CRUD.deleteRow(updatedRowID);
