// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(newName) {
    let newCats = [...cats, newName]
    return newCats;
}

function prependCat(newName) {
    let newCats = [newName, ...cats]
    return newCats;
}

//new array
function removeLastCat() {
    return cats.slice(1);
}

// new array
function removeFirstCat() {
    return cats.slice(0, cats.length - 1);
}