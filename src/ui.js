class UI {
    constructor() {
        this.posts = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = "";

        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>

                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>

                        <a href="#" class="delete card-link" id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `
        });

        this.posts.innerHTML = output;
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(`${message}`));

        /* get container */
        const container = document.querySelector('.postContainer');

        /* get posts container */
        const posts = document.querySelector('#posts');

        container.insertBefore(div, posts);

        setTimeout(() => this.clearAlert(), 3000)
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput = data.id;
    }

    clearInput() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();