console.log('Types');

function printType(value) {
    let type = typeof value
    console.log(`Type of ${value}: ${type}`);
}

printType([]);
printType(2 + 3 == 5);
printType(5);
printType("My name is Sara");
printType (undefined);