quotes_object = {
   quote1: {
        quote: "The world isn't perfect. But it's there for us, doing the best it can… that's what makes it so damn beautiful.", 
        person : "Roy Mustang",
    },
   quote2: {
        quote: "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.", 
        person : "Matsumoto Rangiku",
    },
   quote3: {
        quote: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.", 
        person : "Gildart",
    },
   quote4: {
        quote: "People, who can't throw something important away, can never hope to change anything.", 
        person : "Armin Arlert",
    },
   quote5: {
        quote: "People's lives don't end when they die, it ends when they lose faith.", 
        person : "Itachi Uchiha",
    },
   quote6: {
        quote: "People become stronger because they have memories they can't forget.", 
        person : "Tsunade",
    },
   quote7: {
        quote: "I'll leave tomorrow's problems to tomorrow's me.", 
        person : "Saitama",
    },
   quote8: {
        quote: "Giving up kills people. When people reject giving up… they finally win the right to transcend humanity.", 
        person : "Alucard",
    },
   quote9: {
        quote: "You can die anytime, but living takes true courage.", 
        person : "Kenshin Himura",
    },
   quote10: {
        quote: "A dropout will beat a genius through hard work.", 
        person : "Rock Lee",
    },
}

const button = document.querySelector("button");
let no_of_quotes = 1;
button.addEventListener("click", change);

function change(e){

    const target = e.target
    const quote = document.querySelector(".quote");
    const person = document.querySelector(".person");
    if(no_of_quotes === 10){
        no_of_quotes = 1
    }
    if(target){
        quote.innerText = quotes_object[`quote${no_of_quotes}`]["quote"];
        person.innerText = quotes_object[`quote${no_of_quotes}`]["person"];
        no_of_quotes += 1
        console.log(no_of_quotes)
    }
}