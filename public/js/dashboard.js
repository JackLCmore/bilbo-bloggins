const submitButton = document.querySelector("#dashboardSubmit");
const titleInput = document.querySelector("#titleInput");
const textContent = document.querySelector("#textContent");

submitButton.addEventListener("click",async function(){

const title = titleInput.value;

const text = textContent.value;

const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, text }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to create post.');
  }
});
