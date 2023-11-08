const submitButton = document.querySelector("#commentSubmit");
const textContent = document.querySelector("#textContent");

submitButton.addEventListener("click",async function(){

const text = textContent.value;

const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ text }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/comment');
  } else {
    alert('Failed to create post.');
  }
});
