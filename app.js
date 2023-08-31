
let btn = document.querySelector('button')
let ul = document.querySelector('ul')


btn.addEventListener('click', function(){
    let inp = document.querySelector('input');
    let newItem = document.createElement('li');
    let delBtn = document.createElement('button')
     let span = document.createElement('span')
    // span.classList.add('material-symbols-outlined')
    
   

   
    newItem.innerText = inp.value;
    ul.appendChild(newItem)


    
    delBtn.innerHTML = "<span class='material-symbols-outlined'>Delete</span>"
    delBtn.classList.add('delete')
    delBtn.appendChild(span)

    newItem.appendChild(delBtn)
     
    inp.value = ""
    console.log(inp.value);

})


// this is not workin on new added items 

// let delBtns = document.querySelectorAll('.delete')

// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement
        
       
//         par.remove()
//     })
// }

// new  code Start from here 


ul.addEventListener("click",function(e){
    let span = document.createElement('span')
    let spanody = document.querySelector('span')
    console.log(spanody)

    console.log(e.target.nodeName);

    if(e.target.nodeName=='SPAN'){
        let Button = e.target
        Button.classList.add('material-symbols-outlined')

        console.log(Button)
        let listItem = e.target.parentElement
        let item = listItem.parentElement
       console.log(listItem.child)

        item.remove()
    }
})