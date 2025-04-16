// Add default blog posts if not already present
if (!localStorage.getItem('blogs')) {
  const sampleBlogs = [
    {
      title: "First Blog Post",
      date: "2025-04-01",
      content: "This is the first blog post! In this blog, we'll explore web development, tips, tutorials, and more."
    },
    {
      title: "JavaScript Basics",
      date: "2025-04-05",
      content: "JavaScript is the language of the web. Learn variables, loops, functions, and how to manipulate the DOM."
    },
    {
      title: "Responsive Design",
      date: "2025-04-09",
      content: "Make your website look great on all devices. Learn the difference between Flexbox and Grid and how to use media queries."
    }
  ];
  localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
}

// Fetch blogs from localStorage
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

// Display blogs
const blogList = document.getElementById('blog-list');
blogs.forEach(blog => {
  const blogItem = document.createElement('div');
  blogItem.classList.add('blog-item');

  blogItem.innerHTML = `
    <h3>${blog.title}</h3>
    <div class="date">${blog.date}</div>
    <div class="preview">${blog.content.slice(0, 150)}...</div>
  `;

  blogList.appendChild(blogItem);
});
