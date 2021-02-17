import {getCardsArray} from './data.js';
import {getPopUp} from './popup.js';

const FINAL_ARRAY_ELEMENTS = 10;

const testDataArray = getCardsArray(FINAL_ARRAY_ELEMENTS);

getPopUp(testDataArray[0]);
