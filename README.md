# React + TypeScript + Vite

Architectural methodology - Feature-Sliced ​​Design (FSD)

UI Framework - Ant Design

CSS framework - Tailwind CSS

## Project description

### Home page

Shows the latest 100 news items as a list sorted by date, with the most recent ones on top.
Clicking on a news item takes you to the news page.
The page have a button to force refresh the news list.

Each news item contains:
- title
- rating
- author's nickname
- publication date


### News page

Must contain:
- link to the news item
- news title
- date
- author
- comment counter
- list of comments as a tree (root comments are loaded immediately upon entering the page, nested comments - by clicking on the root)
- button to force refresh the comments list
- button to return to the news list