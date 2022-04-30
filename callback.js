const posts = [
    {title: "Post One",
    body: "This is post one"},
    {title: "Post Two",
    body: "This is post two"}
];


// create a function that gets these posts;


const getPost = () => {


setTimeout(() => {
let output = "";

posts.map(post => output += `<li> ${post.title} </li>`);


document.body.textContent = output;


}, 1000)

};







const createPost = (post, callback) => {

setTimeout(() => {

    posts.push(post)
    callback();

}, 1000)


}



// const post = [
//     {title: "Post One",
//     body: "This is post one"},
//     {title: "Post Two",
//     body: "This is post two"}
// ];

let stopBtn = document.getElementById("btn")

function attachEventListener() {
let count = 0;
stopBtn.addEventListener("click", () => {

    console.log("Button Clicked", ++count)
})

}

attachEventListener();

class Book {
    constructor(name, date, pages) {
        this.name = name;
        this.date = date;
        this.pages = pages;


    }


}



let newBook = new Book("abdel", "Sept.23", 45)

newBook.name = "SIMONES"

console.log(newBook)


















function getPosts() {
    setTimeout( () => {
        let output = "";

        post.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.textContent = output;

    }, 1000);
}


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}




createPost({title: "Post Three", body: "this is post three"}, getPosts);






let count = 5;

setInterval(() => {

if( count >= 0) {
console.log(count--)
}

}, 1000)

let posts = {title:"super", name: "hi", age: 23}

let newPosts = new Array(posts)


newPosts.push({name: "hi"})

console.log(newPosts)
