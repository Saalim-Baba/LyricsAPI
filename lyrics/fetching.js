document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("form")
    form.addEventListener("submit", event => {
        document.getElementById("loading").style.display = "block"
        zip()
        event.preventDefault()})
    function zip() {
        const value = document.getElementById("value").value;
        const errorElement = document.getElementById("error");


        fetch(`https://some-random-api.com/lyrics?title=${value}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(json => {
                errorElement.innerText = "";
                document.getElementById("thumbnail").src = json.thumbnail.genius;
                console.log(json);
                document.getElementById("author").innerText = json.author;
                document.getElementById("lyrics").style.display = "block"
                document.getElementById("lyrics").innerText = json.lyrics;
                document.getElementById("loading").style.display = "none"
            })
            .catch(error => {
                console.error('Fetch error:', error);
                document.getElementById("loading").style.display = "none"
                document.getElementById("thumbnail").src = "";
                errorElement.innerText = 'Song not found';
                document.getElementById("author").innerText = "";
                document.getElementById("lyrics").style.display = "";
                document.getElementById("lyrics").innerText = "";

            });
    }
})