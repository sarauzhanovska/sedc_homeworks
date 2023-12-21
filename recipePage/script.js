let nameOfRecipe = prompt('Enter the name of the recipe!');

let numOfIngridients = parseInt(prompt('How many ingridients do we need for the recipe?'))

document.write("<h2>" + nameOfRecipe + "</h2>");

document.write("<ul>");
for (let i = 0; i < numOfIngridients; i++){
    let ingridient = prompt("Enter the name of indgridient" + (i+1) + ":")
    document.write("<li>"+ ingridient + "</li>");
}
document.write("</ul>");