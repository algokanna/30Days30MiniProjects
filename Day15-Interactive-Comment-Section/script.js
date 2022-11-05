class Comment {
  constructor(id, creator, content, timestamp) {
    this.id = id;
    this.creator = creator;
    this.content = content;
    this.timestamp = timestamp;
  }
}
const allComments = [];

// Up Vote - Dơwn Vote Behaviors

const upvoteButtons = document.querySelectorAll(".up-vote"),
  downvoteButtons = document.querySelectorAll(".down-vote"),
  voteCountParameters = document.querySelectorAll(".vote-count"),
  userToken = "juliusomo";

function downvote(e) {
  const voteCount = e.target.parentElement.querySelector(".vote-count");
  if (
    !voteCount.classList.contains(`downvoted-by-${userToken}`) &&
    !voteCount.classList.contains(`upvoted-by-${userToken}`)
  ) {
    voteCount.innerHTML = `${parseInt(voteCount.innerHTML) - 1}`;
    voteCount.classList.add(`downvoted-by-${userToken}`);
  } else if (
    !voteCount.classList.contains(`downvoted-by-${userToken}`) &&
    voteCount.classList.contains(`upvoted-by-${userToken}`)
  ) {
    voteCount.innerHTML = `${parseInt(voteCount.innerHTML) - 1}`;
    voteCount.classList.remove(`upvoted-by-${userToken}`);
  }
}

function upvote(e) {
  const voteCount = e.target.parentElement.querySelector(".vote-count");
  if (
    !voteCount.classList.contains(`upvoted-by-${userToken}`) &&
    !voteCount.classList.contains(`downvoted-by-${userToken}`)
  ) {
    voteCount.innerHTML = `${parseInt(voteCount.innerHTML) + 1}`;
    voteCount.classList.add(`upvoted-by-${userToken}`);
  } else if (
    !voteCount.classList.contains(`upvoted-by-${userToken}`) &&
    voteCount.classList.contains(`downvoted-by-${userToken}`)
  ) {
    voteCount.innerHTML = `${parseInt(voteCount.innerHTML) + 1}`;
    voteCount.classList.remove(`downvoted-by-${userToken}`);
  }
}
upvoteButtons.forEach((upvoteBtn) => {
  upvoteBtn.addEventListener("click", (e) => {
    upvote(e);
  });
});
downvoteButtons.forEach((downvoteBtn) => {
  downvoteBtn.addEventListener("click", (e) => {
    downvote(e);
  });
});

// Trigger Comment Editor and Create Comment

function timestampConvert(timestring) {
  const createdTime = new Date(timestring);
  const currentTime = new Date();
  const months = [
    "January",
    "Ferbuary",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  let parsedNow = Date.parse(currentTime),
    parsedCreatedTime = Date.parse(createdTime);
  if (parsedNow - parsedCreatedTime < minute) {
    return `Less than a minute`;
  }
  if (parsedNow - parsedCreatedTime > minute) {
    if ((parsedNow - parsedCreatedTime) / hour < 1) {
      return `${Math.round(
        (parsedNow - parsedCreatedTime) / minute
      )} minutes ago`;
    } else if (Math.round((parsedNow - parsedCreatedTime) / hour) === 1) {
      return `1 hour ago`;
    } else {
      if ((parsedNow - parsedCreatedTime) / day < 1) {
        return `${Math.round(
          (parsedNow - parsedCreatedTime) / hour
        )} hours ago`;
      } else if (Math.round((parsedNow - parsedCreatedTime) / day) === 1) {
        return `1 day ago`;
      } else {
        if ((parsedNow - parsedCreatedTime) / month < 1) {
          return `${Math.round(
            (parsedNow - parsedCreatedTime) / day
          )} days ago`;
        } else if (Math.round((parsedNow - parsedCreatedTime) / month) === 1) {
          return `1 month ago`;
        } else {
          return `${
            months[createdTime.getMonth()]
          } ${createdTime.getDate()}, ${createdTime.getFullYear()}`;
        }
      }
    }
  }
}

function triggerCommentEditor(e) {
  const commentWrapper =
    e.target.parentElement.parentElement.parentElement.parentElement;
  const replyToUsername =
    e.target.parentElement.querySelector(".username").innerHTML;
  const commentCards = commentWrapper.querySelectorAll(".comment-card");
  commentCards[commentCards.length - 1].insertAdjacentHTML(
    "afterend",
    `
    <form action="" class="add-new-comment flex temporary-comment-editor">
        <img src="./assets/avatars/image-juliusomo.png" alt="avatar" class="avatar">
        <div class="comment-editor">
            <a href="#" class="handle">@${replyToUsername}</a>
            <span contenteditable="true">Add new comment...</span>
        </div>
        <input type="submit" value="Reply" class="submit-btn" onclick="submitComment(event)">
    </form>
    `
  );
}
function submitComment(e) {
  const commentText = e.target.parentElement.querySelector(
    ".comment-editor>span"
  ).innerHTML;
  const commentCards =
    e.target.parentElement.parentElement.querySelectorAll(".comment-card");
  const replyTo =
    e.target.parentElement.querySelector(".comment-editor>a").innerHTML;
  const commentWrapper = e.target.parentElement.parentElement;
  const temporaryCommentObject = new Comment(
    allComments.length - 1,
    userToken,
    commentText,
    new Date()
  );
  allComments.push(temporaryCommentObject);
  if (commentWrapper.classList.contains("comment-wrapper")) {
    commentCards[commentCards.length - 1].insertAdjacentHTML(
      "afterend",
      `
        <div class="sub-comment-wrapper flex">
            <div class="comment-card flex">
                <div class="up-vote-parameter flex">
                    <img src="./assets/icon-plus.svg" alt="up vote" class="up-vote" onclick="upvote(event)">
                    <p class="vote-count">0</p>
                    <img src="./assets/icon-minus.svg" alt="down vote" class="down-vote" onclick="downvote(event)">
                </div>
                <div class="text-block flex">
                    <div class="info flex">
                        <img src="./assets/avatars/image-juliusomo.png" alt="avatar" class="avatar">
                        <a href="#" class="username account-owner">${userToken}</a>
                        <span class="timestamp">${timestampConvert(
                          allComments[allComments.length - 1].timestamp
                        )}</span>
                        <div class="modify flex">
                            <span class="delete" onclick="deleteDialogue(event)">Delete</span>
                            <span class="edit" onclick="editComment(event)">Edit</span>
                        </div>
                    </div>
                    <p class="comment-text">
                        <a href="#" class="handle">${replyTo}</a>
                        <span>${commentText}</span>
                    </p>
                </div>
            </div>
        </div>
        `
    );
  } else {
    commentCards[commentCards.length - 1].insertAdjacentHTML(
      "afterend",
      `
      <div class="comment-card flex">
      <div class="up-vote-parameter flex">
          <img src="./assets/icon-plus.svg" alt="up vote" class="up-vote" onclick="upvote(event)">
          <p class="vote-count">0</p>
          <img src="./assets/icon-minus.svg" alt="down vote" class="down-vote" onclick="downvote(event)">
      </div>
      <div class="text-block flex">
          <div class="info flex">
              <img src="./assets/avatars/image-juliusomo.png" alt="avatar" class="avatar">
              <a href="#" class="username account-owner">${userToken}</a>
              <span class="timestamp">${timestampConvert(
                allComments[allComments.length - 1].timestamp
              )}</span>
              <div class="modify flex">
                  <span class="delete" onclick="deleteDialogue(event)">Delete</span>
                  <span class="edit" onclick="editComment(event)">Edit</span>
              </div>
          </div>
          <p class="comment-text">
              <a href="#" class="handle">${replyTo}</a>
              <span>${commentText}</span>
          </p>
      </div>
  </div>
        `
    );
  }
  e.target.parentElement.remove();
  e.preventDefault();
  return false;
}

const replyButtons = document.querySelectorAll("span.reply");

replyButtons.forEach((replyBtn) => {
  replyBtn.addEventListener("click", (e) => {
    triggerCommentEditor(e);
  });
});

// Edit Behaviors

function editComment(e) {
  const temporaryCommentEditor =
    e.target.parentElement.parentElement.parentElement.querySelector(
      ".comment-text"
    );
  const temporaryCommentText = temporaryCommentEditor.querySelector("span");
  temporaryCommentEditor.classList.add("comment-editor");
  temporaryCommentText.setAttribute("contenteditable", "true");
  temporaryCommentEditor.parentElement.innerHTML += `
      <input type="submit" value="Update" class="submit-btn" onclick="updateComment(event)">
    `;
}
function updateComment(e) {
  const temporaryCommentEditor =
    e.target.parentElement.querySelector(".comment-text");
  const temporaryCommentText = temporaryCommentEditor.querySelector("span");
  temporaryCommentEditor.classList.remove("comment-editor");
  temporaryCommentText.setAttribute("contenteditable", "false");
  e.target.remove();
  const editButtons = document.querySelectorAll("span.edit");

  editButtons.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      editComment(e);
    });
  });
  const deleteButtons = document.querySelectorAll("span.delete");

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      deleteDialogue(e);
    });
  });
}

const editButtons = document.querySelectorAll("span.edit");

editButtons.forEach((editBtn) => {
  editBtn.addEventListener("click", (e) => {
    editComment(e);
  });
});

// Delete Behaviors

function deleteDialogue(e) {
  const commentCard =
    e.target.parentElement.parentElement.parentElement.parentElement;
  commentCard.innerHTML += `
    <div class="delete-dialogue flex">
        <div class="delete-confirm-card flex">
            <h3>Delete Comment</h3>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <button class="cancel-deleting" onclick="deleteCancel(event)">No, cancel</button>
            <button class="confirm-deleting" onclick="deleteConfirm(event)">Yes,delete</button>
        </div>
    </div>
    `;
}
function deleteConfirm(e) {
  const commentWrapper = e.target.parentElement.parentElement.parentElement.parentElement;
  if (commentWrapper.classList.contains("comment-wrapper")){
    commentWrapper.remove();
  } else if (commentWrapper.classList.contains("sub-comment-wrapper")){
    const commentCards = commentWrapper.querySelectorAll(".comment-card");
    if (commentCards.length === 1){
      commentWrapper.remove();
    } else {
      commentCards[commentCards.length - 1].remove();
    }
  }

  const deleteButtons = document.querySelectorAll("span.delete");

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      deleteDialogue(e);
    });
  });
}
function deleteCancel(e) {
  e.target.parentElement.parentElement.remove();
  const deleteButtons = document.querySelectorAll("span.delete");

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      deleteDialogue(e);
    });
  });
}
const deleteButtons = document.querySelectorAll("span.delete");

deleteButtons.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", (e) => {
    deleteDialogue(e);
  });
});

// Main Comment Editor's Behaviors

const mainCommentEditor = document.querySelector(".main-comment-editor");
const sendCommentButton = mainCommentEditor.querySelector(".send");

sendCommentButton.addEventListener("click", (e) => {
  e.preventDefault();
  const commentWrappers =
    e.target.parentElement.parentElement.querySelectorAll(".comment-wrapper");
  const commentText = e.target.parentElement.querySelector(
    ".comment-editor>span"
  ).innerHTML;
  const temporaryCommentObject = new Comment(
    allComments.length - 1,
    userToken,
    commentText,
    new Date()
  );
  allComments.push(temporaryCommentObject);
  commentWrappers[commentWrappers.length - 1].insertAdjacentHTML(
    "afterend",
    `
    <div class="comment-wrapper flex">
        <div class="comment-card flex">
            <div class="up-vote-parameter flex">
                <img src="./assets/icon-plus.svg" alt="up vote" class="up-vote" onclick="upvote(event)">
                <p class="vote-count">0</p>
                <img src="./assets/icon-minus.svg" alt="down vote" class="down-vote" onclick="downvote(event)">
            </div>
            <div class="text-block flex">
                <div class="info flex">
                    <img src="./assets/avatars/image-juliusomo.png" alt="avatar" class="avatar">
                    <a href="#" class="username account-owner">${userToken}</a>
                    <span class="timestamp">${timestampConvert(
                      allComments[allComments.length - 1].timestamp
                    )}</span>
                    <div class="modify flex">
                        <span class="delete" onclick="deleteDialogue(event)">Delete</span>
                        <span class="edit" onclick="editComment(event)">Edit</span>
                    </div>
                </div>
                <p class="comment-text">
                    <span>${commentText}</span>
                </p>
            </div>
        </div>
    </div>
  `
  );
  e.target.parentElement.querySelector(".comment-editor>span").innerHTML = "";
  return false;
});
