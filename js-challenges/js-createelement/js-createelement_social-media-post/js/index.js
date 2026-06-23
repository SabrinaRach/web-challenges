//console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

//ARTICLE
const newPost = document.createElement("article");
newPost.classList.add("post");

//TEXT
const newPostText = document.createElement("p");
newPostText.classList.add("post__content");

newPostText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Usw.";


//FOOTER
const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

//USERNAME
const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";

//BUTTON
const newPostLikeButton = document.createElement("button");
newPostLikeButton.classList.add("post__button");
newPostLikeButton.textContent = "♥ Like";
newPostLikeButton.addEventListener("click", handleLikeButtonClick);

//append
document.body.append(newPost);
newPostFooter.append(newPostUsername, newPostLikeButton);
newPost.append(newPostText, newPostFooter)


// Exercise:
// Use document.createElement() and append another social media post to the body.
