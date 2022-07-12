import { http } from './http';
import { ui } from './ui';

/* Get posts on DOM load */
document.addEventListener('DOMContentLoaded', getPosts);

/* Add posts on clicking post button */
document.querySelector(".post-submit").addEventListener('click', postSubmit);

/* Function to get posts from server */
function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err))
}

/* Function to add post */
function postSubmit() {
    const title = document.querySelector("#title").value
    const body = document.querySelector("#body").value

    const data = { title, body }

    http.post('http://localhost:3000/posts', data)
        .then(() => {
            ui.clearInput();
            ui.showAlert('Post Added', "alert alert-success");
            getPosts();
        })
        .catch(err => ui.showAlert("An Error Occured", "alert alert-danger"))
}