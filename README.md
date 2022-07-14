# postmate

***Demonstrates CRUD Operations by interacting with a REST API with Pure JavaScript***

### Built with ###
` JavaScript Async `
` JSON Fake REST API as backend `
` JavaScript Async `
` Babel / webpack `

### How it works ###
User can submit a post by filling the fields with post title and post body and clicking the post button.

Once this is done, an http ***POST*** request is made to the JSON Server REST API and the post is stored in the mock database

User can edit the post by clicking the edit icon and and the fields will be automatically filled with the post title and body. The Form state will also be changed to edit state.

Once the user clicks ***Update Post*** button, an http ***PUT*** request is made to the server and the post is updated and automatically sent to the UI

Similar thing happens with deleting a post.