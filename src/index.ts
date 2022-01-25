import { CharacterCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([0, -3, 11, 2, 100, 21, 1, 2, 45]);
const characterCollection = new CharacterCollection("ZxYmBa");
const linkedList = new LinkedList();
numbersCollection.sort();
