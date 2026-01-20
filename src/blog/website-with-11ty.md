---
layout: layout.njk
title: Thoughts on making a website with 11ty
date: 2025-01-31
---

# Thoughts on making a website with 11ty

My first experience with building websites back in the 90s was writing HTML and CSS in notepad in Windows. Super simple, super basic.

Since then I've worked with increasingly complex systems such as PHP, Wordpress, Django, etc to add dynamic content to sites. It got to the point where making a personal website seemed such a large job. What framework was I going to have to use?

Then along came frameworks like React and Next, which ultimately seemed to just generate static content anyway. It felt like things were coming back to where they started, just with a whole lot of complexity inbetween. Why not just write the content as direct HTML?

Then a friend recommended [11ty](https://www.11ty.dev/). It's a static site generator, but you never really need to get into the actual code of it all. It's super simple to use, and because of it's ability to handle markdown files as content, you don't even have to write HTML. Just blast out your content and you're good. Your HTML is auto-generated.

There's enough complexity under the hood to help with creating dynamic lists of content with simple yaml data at the top of a file, but again very simple to use.

And it seems to be simple to host too, as ultimately, it is just a static site. Either cheaply host the static pages, or use a service to host and then you can push content from anywhere if you're using a service like Git.

## Further reading

- [11ty](https://www.11ty.dev/)
