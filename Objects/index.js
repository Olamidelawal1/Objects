//Using the constructor method, create an instagramPost() constructor function that takes the properties below as arguments
function instagramPost (handleOfAuthor, content, imagelink, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imagelink = imagelink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

//Create 2 instagram post objects from the constructor function you created above
let birthdayPost = new instagramPost ('Oyin_x', '20th birthday pictures', 'www.oyin_x.insta20thbirthday.com', '200, 000 views', '107,248 likes');
let graduationPost = new instagramPost ('Yewaande', 'Masters graduation pictures', 'www.yewaande.instamastersgrad.com', '350, 004 views', '278,000 likes')

console.log(birthdayPost);
console.log(graduationPost);

//Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments.
//afterwards create an object representing Musa from the factory function.
function createPerson (name, age, location) {
    return{
        name: name,
        age: age,
        location: location,
    }
}
const Musa = createPerson ('Musa Dawodu', '19 years old', 'Lagos, Nigeria');
console.log (Musa);

//Also implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an Object
//representing Musa's Jamb Scores. Add the Object as a property to Musa Object you created above 
function createJambScores( Eng, Govt, Lit, Crk){
    return{
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        Crk: Crk,
    }
}
Musa.createJambScores = new createJambScores(70, 85, 82, 94);
console.log (Musa);

//What are the different ways you can clone an object? Give examples for each of them

//Option one - Using Object.assign()
const scienceRelatedProfession = {
    professionName: 'Medicine',
    numberofYears: '6 years',
    placeOfWork: 'hospital',
}
const artRelatedProfession = Object.assign( {}, scienceRelatedProfession)
artRelatedProfession.professionName = 'Law';
artRelatedProfession.numberofYears = '5 years';
artRelatedProfession.placeOfWork = 'Court of law';

console.log ({scienceRelatedProfession});
console.log ({artRelatedProfession});


//Option two - Using the spread syntax ...
const commerceRelatedProfession = {...scienceRelatedProfession};
commerceRelatedProfession.professionName = 'Accounting';
commerceRelatedProfession.numberofYears = '4 years';
commerceRelatedProfession.placeOfWork = 'Accounting firm';
console.log({commerceRelatedProfession});

//Option three - Using the method JSON.parse(JSON.stringify())
const selfLearntProfession = JSON.parse(JSON.stringify(scienceRelatedProfession));
selfLearntProfession.professionName = 'Tech';
selfLearntProfession.numberofYears = 'Depends';
selfLearntProfession.placeOfWork = 'Anywhere';
console.log ({selfLearntProfession});

//Using any of the enumeration methods, log out each of the presidential candidates in this format
// "Omeyele Sowore is the presidential candidate of AAC"
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu kwankwaso',
    PDP: 'Atiku Abubakar',
}
//for...in loops 
for (const property in presidentialCandidates){
    console.log (presidentialCandidates[property] + ' is the presidential candidate of ' + (property));
}