function aliasGen(first, last){

    let firstName = {A: "Alpha", B: "Beta", C: "Cache", D: "Data", E: "Energy", F: "Function", G: "Glitch", H: "Half-life", I: "Ice", J: "Java", K: "Keystroke", L: "Logic", M: "Malware", N: "Nagware", O: "OS", P: "Phishing", Q: "Quantum", R: "RAD", S: "Strike", T: "Trojan", U: "Ultraviolet", V: "Vanilla", W: "WiFi", X: "Xerox", Y: "Y", Z: "Zero"};

    let lastName = {A: "Analogue", B: "Bomb", C: "Catalyst", D: "Discharge", E: "Electron", F: "Faraday", G: "Gig", H: "Hacker", I: "IP", J: "Jabber", K: "Killer", L: "Lazer", M: "Mike", N: "n00b", O: "Overclock", P: "Payload", Q: "Quark", R: "Roy", S: "Spy", T: "T-Rex", U: "Unit", V: "Virus", W: "Worm", X: "X", Y: "Yob", Z: "Zombie"};

    let firstCharRegex = /\D/;

    let firstInitial = first[0].toUpperCase();

    let lastInitial = last[0].toUpperCase();

    console.log(firstCharRegex);
    console.log(firstCharRegex.test(firstInitial));
    console.log(first[0]);
    console.log(firstInitial);

    if (firstCharRegex.test(firstInitial) & firstCharRegex.test(lastInitial)) {
        return firstName[firstInitial] + " " + lastName[lastInitial]
        
        
        
    } else {
        return "Your name must start with a letter from A - Z."
    }

    // 

    // if (first[0] )
    
        
}

// aliasGen("Ammiel", "Latorre");
console.log(aliasGen("Malware", "Mike"));