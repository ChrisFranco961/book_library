
let title=document.getElementById('title')
let author=document.getElementById('author')
let pages=document.getElementById('pages')
let status=document.getElementById('read')
let image=document.getElementById('image')
class CreateBook{
    card=document.createElement('div')
    constructor(title, author, pages, status, imageurl){
        this.title=title.value
        this.pages=pages.value
        this.author=author.value
        this.status=status.value
        this.imageurl=imageurl.value
        let booktitle=document.createElement('div')
        let bookauthor=document.createElement('div')
        let bookpages=document.createElement('div')
        let bookstatus=document.createElement('div')
        bookstatus.setAttribute('id','changestatus')
        let bookimage=document.createElement('img')
        this.card.setAttribute('id','card')
        let shelf=document.getElementById('card_container')
        booktitle.innerHTML='Title: '+this.title
        bookauthor.innerHTML='Author: '+this.author
        bookpages.innerHTML='Pages: '+this.pages
        bookstatus.innerHTML='Status: '+this.status
        bookimage.src=this.imageurl
        this.card.appendChild(booktitle)
        this.card.appendChild(bookauthor)
        this.card.appendChild(bookpages)
        this.card.appendChild(bookstatus)
        this.card.appendChild(bookimage)
        shelf.appendChild(this.card)
        this.deletebutton(this.card)
        this.changestatus(this.card,bookstatus)

    }
    bookstatus=document.getElementById('changestatus')

    deletebutton(card){
        let deleteb=document.createElement('button')
        deleteb.setAttribute('id','sheel')
        deleteb.onclick=function(){
           card.remove() 
        }

        card.appendChild(deleteb)
    }
   
                
    changestatus(card,status){
        let change=document.createElement('button')
        change.setAttribute('id','statusbutton')
        change.innerText='Change Status'
        card.appendChild(change)
        change.onclick=function(){
            if(status.innerText=='Status: read'){
                status.innerText='Status: not-read'
            }else{
                status.innerText='Status: read'
            }
        }
    }

    
            
    
}