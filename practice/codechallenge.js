function whosPaying(names){

  
    var numberOfPeople = names.length;
    var randomPersonPosition = math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + "is going to buy lunch today!";

}