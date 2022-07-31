let quotes = [
    {quote:"Next to trying and winning the the best thing is trying and failing",
    author:'Lacy Maud Montgomery'},
   {quote:"Nothing will work unless you do",
    author:'Maya Angelou'},
   {quote:"Hakuna Matata",
    author:'Timon and Pumba'}
  ]
   
  i = 0
  
  // when the button is clicked, the next quote block will show
  // i want the quote to change every time, so i need to change the inner HTML 
  // i want the increase the place in the array by 1 each time 
  // i need a loop 
  // i need to add an event to the quote class where the innerhtml will change when the button is clicked 
  
  document.querySelector('.btn').addEventListener('click',buttonfunc) 
  
  function buttonfunc (e) {
  i++
   let quote = document.querySelector('.quote')
   let author = document.querySelector('.author')
    quote.innerHTML = quotes[i].quote
    author.innerHTML = quotes[i].author
  }
  
  
  