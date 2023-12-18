function combineNames() {

    let firstNames = ['Sara', 'Katerina', 'Keti', 'Gorjan', 'Hanna'];
    let lastNames = ['Uzhanovska', 'Trajcevska', 'Markovska', 'Dimitrovski', 'Naumoska'];
    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {

        let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;

        fullNames.push(fullName);
    }

    console.log(fullNames);
}
combineNames();