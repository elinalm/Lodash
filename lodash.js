
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function shuffleHand() {
        let hand=[]

        for(let i = 0; i < cards.length; i++){
            if(Math.random() > 0.5) {
                hand.push(cards[i])
            } else {
                hand.unshift(cards[i])
            }
            Numbers.innerHTML = hand
        }
        return hand.slice(5);
    }
    

function shuffleLodash(){
        const shuffle = _.shuffle(cards)
        const Numbers = document.getElementById('Numbers')
        Numbers.innerHTML = shuffle
    }

    
    





let pets = [
        {name: 'Fluffy', age: 9, color: 'brown'},
        {name: 'Sandie', age: 6, color: 'brown'},
        {name: 'Fia', age: 6, color: 'brown'},
        {name: 'Molly', age: 8, color: 'sand'}, 
        {name: 'Sally', age: 6, color: 'blue'}, 
        {name: 'blabla', age: 2, color: 'red'}, 
        {name: 'bläblä', age: 6, color: 'brown'}, 
    ]; 
    
function dogs(){
   
         var matches = [];
            pets.forEach(function (pet) {
            if (pet.age === 6 && pet.color === 'brown') {
                matches.push(pet);
            }
            console.log(matches)
            return matches  
    }); 
    
}

function dogsLodash(){
    var matches = _.filter(pets, {age: 6, color: 'brown'});
    console.log(matches)
}

        
   