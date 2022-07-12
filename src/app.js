import { http } from './http';
import { ui } from './ui';

/* Get posts on DOM load */
document.addEventListener('DOMContentLoaded', getPosts);

/* Add posts on clicking post button */
document.querySelector(".post-submit").addEventListener('click', postSubmit);

/* show edit state on clicking edit button */
document.querySelector('#posts').addEventListener('click', showEditState);

/* delete posts on clicking delete button */
document.querySelector('#posts').addEventListener('click', deletePost);

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

    if (title !== '' && body !== '') {
        const data = { title, body }

        http.post('http://localhost:3000/posts', data)
            .then(() => {
                ui.clearInput();
                ui.clearAlert();
                ui.showAlert('Post Added', "alert alert-success");
                getPosts();
            })
            .catch(() => ui.showAlert("An Error Occured", "alert alert-danger"));
    } else {
        ui.clearAlert();
        ui.showAlert('Fill the empty fields', "alert alert-danger");
    }


}


/* Function to show edit state */
function showEditState(e) {
    const target = e.target.parentElement;
    if (target.classList.contains('edit')) {
        const id = target.id;
        const title = target.previousElementSibling.previousElementSibling.textContent;
        const body = target.previousElementSibling.textContent;

        const data = { id, title, body };

        ui.fillForm(data);
    }

    e.preventDefault()
}

/* Function to delete a post */
function deletePost(e) {
    const target = e.target.parentElement;

    if (target.classList.contains('delete')) {
        const id = target.id;

        if (confirm("Are you sure?")) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(() => {
                    ui.clearAlert();
                    ui.clearInput();
                    ui.showAlert('Post deleted', 'alert alert-danger');
                    getPosts();
                })
                .catch(() => ui.showAlert("An Error Occured", "alert alert-danger"));
        }
    }

    e.preventDefault()
}