"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([0, -3, 11, 2, 100, 21, 1, 2, 45]);
const characterCollection = new CharactersCollection_1.CharacterCollection("ZxYmBa");
const linkedList = new LinkedList_1.LinkedList();
numbersCollection.sort();
