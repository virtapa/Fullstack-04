const _ = require("lodash");

const dummy = (blogs) => {
  return Number(blogs + 1);
};

const totalLikes = (blogs) => {
  if (!Array.isArray(blogs) || !blogs.length) return 0;

  if (blogs.length === 1) return blogs[0].likes;

  return blogs.reduce((total, blog) => total + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return null;
  }

  const max = blogs.reduce((previous, current) =>
    previous.likes > current.likes ? previous : current
  );

  const favBlog = {
    title: max.title,
    author: max.author,
    likes: max.likes,
  };

  return favBlog;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
