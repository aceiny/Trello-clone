
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## about this project
```bash
response time : 80ms-150ms-500ms

/auth/login  //POST login both user and admin can login
/auth/signup //POST signup  only admin can create a new account and assign a role to it weather user or admin , example
{ 
    "username" : "aceiny",
    "password" : "1234",
    "role" : "USER" or
    "role" : "ADMIN" 
}
/event //GET get all events , you can use filtering with all event values 
/event/:id //GET get a single event by id
/event //POST create a new event with event data and event poster -image- can only be accesd by admin example 
{
            "title" : "this is a title",
            "description" : "wow",
            "date" : "25 sep 2022 ",
            "location" : "medjana " ,
            "poster" : one image buffer
}

/event/:id //PATCH update any field of an existing event ,  needs to be admin example 
{
  "status" : "OPEN" or 
  "status" : "CLOSED"
}
/event/:id //DELETE delte event , needs to be admin

```

<details>
<summary>Click to expand project features</summary>
Project Features
User Authentication: Allow users to sign up, log in, and log out. Use authentication to secure user-specific data and actions.
Boards:

Create boards.
View all boards a user has access to.
Update board details (name, description, etc.).
Delete boards (with appropriate permissions).
Lists:

Create lists within a board.
Reorder lists within a board.
Update list details (name, color, etc.).
Delete lists (with appropriate permissions).
Cards:

Create cards within a list.
Drag and drop cards between lists.
Update card details (name, description, due date, etc.).
Assign users to cards.
Add labels to cards.
Add attachments to cards.
Add comments to cards.
Delete cards (with appropriate permissions).
Real-time Updates: Use WebSockets or a similar technology to provide real-time updates when changes are made to boards, lists, or cards.

Collaboration:

Allow multiple users to collaborate on the same board.
Implement permissions to control who can view, edit, and delete boards, lists, and cards.
Search: Implement a search functionality to quickly find boards, lists, or cards based on keywords.

Notifications:

Notify users of important events (e.g., when they are added to a board, when a card is assigned to them, etc.).
Allow users to manage their notification settings.
Archiving: Allow users to archive boards, lists, or cards to keep their workspace organized.

Activity Log: Keep a log of all actions performed on boards, lists, and cards, allowing users to track changes and revert if needed.

Mobile Responsiveness: Ensure the application is responsive and usable on mobile devices.

Data Backup: Implement regular backups to prevent data loss.

Performance Optimization: Optimize the application for performance, especially for operations involving large numbers of boards, lists, or cards.

</details>