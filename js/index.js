function changeQuote() {
    var postApi = 'https://api.quotable.io/random?size=1';
    const content = document.getElementById("content");
    const author = document.getElementById("author");
    fetch(postApi)
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            let quotes = data.content;
            let nameAuthor = data.author;
            content.textContent = quotes;
            author.textContent = nameAuthor;
        })
        .catch(function (err) {
            alert("có lỗi!!!");
        });

};
const button = document.getElementsByClassName("footer--btn");

button.addEventListener("click", changeQuote);
changeQuote();
