const submitButton = document.querySelector("#commentSubmit");
const textContent = document.querySelector("#commentContent");

submitButton.addEventListener("click",async function(){

const text = textContent.value;

const post_id = window.location.href.split("/")[4];

const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ text, post_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/comments/' + post_id);
  } else {
    alert('Failed to create comment.');
  }
});
