const commentList = document.getElementById('latestComments');
const commentForm = document.getElementById('commentForm');
function createCommentDiv(comment) {
  let commentDiv = document.createElement('div');
  //commentDiv.classList.add('');
  commentDiv.classList.add('flex');
  commentDiv.classList.add('column');
  commentDiv.id = `comment-${comment.commentId}`;
  let email = document.createElement('h3');
  email.innerText = comment.email;
  let message = document.createElement('p');
  message.innerText = comment.message;
  commentDiv.appendChild(email);
  commentDiv.appendChild(message);
  return commentDiv;
}

const loadComments = async (comment) => {
    commentList.innerHTML="";
    try {
        const comments = await $.get(
            'https://60d8bcffeec56d00174774a8.mockapi.io/comments'
          );
          for (const comment of comments) {
            commentDiv = createCommentDiv(comment);
            commentList.appendChild(commentDiv);
          }
    } catch (error) {
      console.log(error);
    }

};

$('document').ready(async () => {
  await loadComments();
});
const addComment = async (comment) => {
  try {
    const res = await $.post(
      'https://60d8bcffeec56d00174774a8.mockapi.io/comments',
      comment
    );
  } catch (error) {
    console.log(error);
  }
};
$('#commentForm').submit(async (e) => {
  e.preventDefault();
  const formdata = new FormData(commentForm);
  const comment = {
    email: formdata.get('name'),
    message: formdata.get('message'),
  };
  await addComment(comment);
  await loadComments();
});
