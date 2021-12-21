function calcWordFrequencies() {
    var string= prompt("What do you want to say?");
    var words=string.split(" ");

    var elements=new Map();
    for(let i=0; i<words.length;i++){
        word=words[i]
        if (elements.has(word)){
            elements.set(word, (elements.get(word))+1);
        }
        else{
            elements.set(words[i], 1);
        } 
    }
    for(let word in elements){
        console.log(word + " " + elements.get(word));
    }
}