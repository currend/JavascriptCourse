//localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'run') //add item
var myHero = localStorage.getItem('hero') //get item value
//console.log(myHero);

localStorage.setItem('todo', 'record YT video')

//Delete based on key:
localStorage.removeItem('hero')
myHero = localStorage.getItem('hero')
//console.log(myHero);

//Delete all
localStorage.clear()

