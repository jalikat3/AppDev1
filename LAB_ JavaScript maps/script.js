let actors = new Map(); // Code will be tested with different actors

actors.set("Sean Astin", { movie: "The Lord of the Rings", role: "Samwise Gamgee" });
actors.set("Johnny Depp", { movie: "Pirates of the Caribbean", role: "Jack Sparrow" });
actors.set("Matt Damon", { movie: "Interstellar", role: "Mann" });
actors.set("Robin Wright", { movie: "Forrest Gump", role: "Jenny Curran" });


function actorInfo(actorName, actorsInput){
    if(actors.has("Johnny Depp")){
        console.log(actorName+" plays "+ actors.get(actorName).role + " in "+ actors(actorName).movie);
    }
    else{
        console.log("Actor is not found");
    }
}