const post = document.querySelector("#post");

post.addEventListener("click", async function(){

const response = await fetch('/api/posts/:id', {
    method: 'GET',
    body: JSON.stringify({ title, text }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/comments');
  } else {
    alert('Failed to find comments for this post.');
  }
});