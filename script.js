const Books=function (title, author, pages, status,imageurl){
    this.title=title;
    this.author=author;
    this.pages=pages
    this.status=status
    this.imageurl=imageurl;
}
let Harry1=new Books("Harry Potter and the Sorcerer's Stone",'J.K. Rowling','223','read','https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg')
let Harry2=new Books("Harry Potter and the Chamber of Secrets ","J.K. Rowling",'256','read','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU98oKDseyDVb1r_Ols-FHTronbrTtv8-but8sHibSo2YHSSBzlVzFaZwhO_CUNcEcOA&usqp=CAU')
let Harry3= new Books("Harry Potter and the Prisoner of Azkaban ","J.K. Rowling","317","read","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNfcKI8Wqws-pZ03TgjqGW_u1LBT2ll4hSQ6AJwxJ6Y5CeDF7IxEuy6yrR9ST2u68GzQ&usqp=CAU")
let Harry4= new Books("Harry Potter and the Goblet of Fire ","J.K. Rowling",'636','read',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLHKo2yRynB8c4yebrkj_SO5ocZMLKPxKERCbOaykJzPDQQiCUx67_4S_fPE32d-8JX0&usqp=CAU")
let Harry5=new Books("Harry Potter and the Order of the Phoenix ","J.K. Rownling","896",'read',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9W2vt9wbFUC9Ul3g9-7tHqE4ILSnC5JBPbJkLi1wUQ&s")
let Harry6=new Books("Harry Potter and the Half-Blood Prince","J.K. Rownling","672",'read',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuh-G1Hi5SGmZ4SiCseEtLez4-qpJd1NqV5jNdVHa1A&s")
let Harry7=new Books("Harry Potter and the Deathly Hallows","J.K. Rownling","784","read","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllBekmaAfqiUmZEsyGBLdmd2hTw3hErUOmMOioNW11A&s")
let Harry8=new Books("Harry Potter and the Cursed Child","J.K. Rowling","336",'read',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXGY-wYeRX2HKQU3tnf6ZvLN2mP2PJxvMb-ldfLtIWQ&s")



const Library=[]
const storebook=function (book){
    Library.push(book)
}
storebook(Harry1)
storebook(Harry2)
storebook(Harry3)
storebook(Harry4)
storebook(Harry5)
storebook(Harry6)
storebook(Harry7)
storebook(Harry8)
 let shelf=document.getElementById('card_container')

function addbook(){
    let titleinput
    let authorinput
    let pagesinput
    let status
    let imagelink
   
    titleinput=document.getElementById('title').value
    authorinput=document.getElementById('author').value
    pagesinput=document.getElementById('pages').value
    status=document.querySelector('input[name="status"]:checked').value
    imagelink=document.getElementById('image').value

    let newbook=new Books(titleinput,authorinput,pagesinput,status,imagelink)
    storebook(newbook)
    document.getElementById('title').value=''
    document.getElementById('author').value=''
    document.getElementById('pages').value=''
    document.getElementById('image').value=''
    
}
function deleteme(me){
    Library.splice(me.value,1)
    publishcards()
}   

function publishcards(){
    document.getElementById('card_container').innerHTML=''
    Library.map(function(array,index){
        
        let titletext;
        let authortext;
        let pagestext;
        let statustext;
        let imageurltext;
        titletext=array.title;
        authortext=array.author
        pagestext=array.pages
        statustext=array.status
        imageurltext=array.imageurl
        const card=document.createElement('div')
        const booktitle=document.createElement('div')
        const bookauthor=document.createElement('div')
        const bookpages=document.createElement('div')
        let bookstatus=document.createElement('div')
        const bookimage=document.createElement('img')
        bookimage.src=imageurltext
        const booktitle_text=document.createTextNode('Title: '+titletext)
        const bookauthor_text=document.createTextNode('Author: '+authortext)
        const bookpages_text=document.createTextNode('Pages: '+pagestext)
        let bookstatus_text=document.createTextNode('Status: '+statustext)
                
            booktitle.appendChild(booktitle_text)
            bookauthor.appendChild(bookauthor_text)
            bookpages.appendChild(bookpages_text)
            bookstatus.appendChild(bookstatus_text)
            card.appendChild(booktitle)
            card.appendChild(bookauthor)
            card.appendChild(bookpages)
            card.appendChild(bookstatus)
            card.appendChild(bookimage)
            shelf.appendChild(card)
            let deletebutton
            deletebutton=document.createElement('button')
            deletebutton.setAttribute('value',index)     
            deletebutton.setAttribute('id','sheel')     
            deletebutton.addEventListener('click',function(){
                Library.splice(this.value,1)
                publishcards()
            })
            let changestatus;
            changestatus=document.createElement('button')
            changestatus.setAttribute('id','statusbutton')
            changestatus.innerText='Change Status'
            changestatus.onclick=function(){
                if(array.status=='read'){
                    array.status='not-read'
                    publishcards()
                }else{
                    array.status='read'
                    publishcards()
                }
                }
            
            card.appendChild(changestatus)
            
            card.appendChild(deletebutton)

}
    )
}

    function publish(){
    
    addbook();
    publishcards();
    }
   publishcards()
    
    