# bilbo-bloggins

 [Please Visit The Deployed Application](https://bilbo-bloggins-8795742758ed.herokuapp.com/)

 ![img](./public/images/Screenshot%202023-11-07%20203515.png)

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Learning Points](#learning-points)
  * [Questions](#questions)
  

  ## License
    
  MIT License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  Copyright 2023 Jack Lunchick-Seymour

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
  ## Description
     
  Bilbo Bloggins is every bloggers dream, with the ability to post, comment, and see your own dashboard, you have everything at the tip of your fingers!

  ## Installation

  No installation is needed, please visit the deployed website @ [https://bilbo-bloggins-8795742758ed.herokuapp.com/](https://bilbo-bloggins-8795742758ed.herokuapp.com/)

  ## Usage

  Bilbo Bloggins Has many options available to the user for their desired communication method.

  We have:

  * The Shire- A homepage for viewing all blogposts within the Bilbo Bloggins Database.

  * Dashboard- A page allowing the user to view all previous posts that they made as well as create new posts.

  * Comment Pages- Each blog post has commenting functionality, view all comments pertaining to a specific post and create a new comments for that post.

  * User Accounts- View all your blogs and comments and keep all that information secure with your account!

  ## Learning Points

  ```js

  router.get('/comments/:id', withAuth, async (req,res)=>{
    const commentData = await Comment.findAll({
        where:{
            post_id: req.params.id
        }
    });

    const postData = await Post.findByPk(req.params.id);
    
    const comment = (commentData).map((comment)=> comment.dataValues);
    const post = postData.dataValues;
    console.log(post);
    res.render('comments', {
        comment,
        post,
        loggedIn: req.session.loggedIn
    });
});

  ```
  The functionality of this code allows the user to get a comment page specific to any given post. 

  ---

  ```js

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

  ```
And this code takes the input from the user and posts it to the database on the click of the submit button.

---
  ## Questions

  For any questions please contact me at any of the following:
    
  Github: https://github.com/JackLCmore 
  
  Email: jack.lcmore@gmail.com 
  
  LinkedIn: https://www.linkedin.com/in/jack-seymour-b0b2b0292/