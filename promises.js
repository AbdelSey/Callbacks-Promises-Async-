
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


document.body.innerHTML = output;


}, 1000)

};







const createPost = (post) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            posts.push(post);

           const error = false;

        if (!error) {
            resolve()
        } else {
            reject("Error: something went Wrong ABDEL!")
        }

        }, 2000)


    })

}


// createPost({title:"Post three", body: "this is Post 3"})
// .then(getPost)
// .catch(error => console.log(error))


//async / await

  let init = async () => {
    await createPost({title:"Post three", body: "this is Post 3"});

    getPost();
}


init();





const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "GoodBye"));
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())


Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values)
})














posts.forEach(post => {

    output += `${post.title}`


function getPosts() {

    setTimeout(() => {
        let output = "";

        posts.forEach((post, index) => {

            output += `<li> ${post.title + post.body}</li>`;

        });

        document.body.innerHTML = output;
    }, 1000)
}





let createPost = (post, callback) => {

setTimeout(() => {

posts.push(post);
callback();



}, 2000)


}



createPost({title: "Post 3", body: "this is post three"}, getPosts)
