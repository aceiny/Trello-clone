
# What is This ? 
this is full stack trello task managment clone built using nest js for the backend ...


## schema
you can find a full description of the schema design i used here 
```bash 
https://dbdiagram.io/d/65ddfd8d5cd0412774ef94f2
```
## Clone
```bash
$ git clone https://github.com/aceiny/Trello-clone
```
## Installation
```bash
$ npm install
```
## development
```bash
Backend : $ npm run start:dev
Frontend : $ npm run dev
```
## Deployment

To deploy this project run

```bash
 Backend : $ npm run start:prod
 Frontend : $ npm run build
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file : 
`JWT_SECRET`
`MONGO_URI`

## Project Features
<details>
<summary>Click to expand project features</summary>

**User Authentication :**
- Allow users to sign up, log in, and log out. Use authentication to secure user-specific data and actions.
- Allow users to update account informations

**Boards:**
- Create boards.
- View all boards a user has access to.
- Update board details (name, description, etc.).
- Delete boards (with appropriate permissions).

**Lists:**
- Create lists within a board.
- Reorder lists within a board.
- Update list details (name, color, etc.).
- Delete lists (with appropriate permissions).

**Cards:**
- Create cards within a list.
- Drag and drop cards between lists.
- Update card details (name, description, due date, etc.).
- Assign users to cards.
- Add labels to cards.
- Add attachments to cards.
- Add comments to cards.
- Delete cards (with appropriate permissions).

**Real-time Updates**: Use WebSockets or a similar technology to provide real-time updates when changes are made to boards, lists, or cards.

**Collaboration:**
- Allow multiple users to collaborate on the same board.
- Implement permissions to control who can view, edit, and delete boards, lists, and cards.

**Search**: Implement a search functionality to quickly find boards, lists, or cards based on keywords.

**Notifications:**
- Notify users of important events (e.g., when they are added to a board, when a card is assigned to them, etc.).
- Allow users to manage their notification settings.

**Archiving**: Allow users to archive boards, lists, or cards to keep their workspace organized.

**Activity Log**: Keep a log of all actions performed on boards, lists, and cards, allowing users to track changes and revert if needed.

**Mobile Responsiveness**: Ensure the application is responsive and usable on mobile devices.

**Data Backup**: Implement regular backups to prevent data loss.

**Performance Optimization**: Optimize the application for performance, especially for operations involving large numbers of boards, lists, or cards.
</details>
## API Reference
<details> 
<summary>Click to expand project features</summary>
#### Signup new user
```http
POST /auth/signup
```
| Parameter | Type     |
| :-------- | :------- |
| `Username` | `string` |
| `Passsword` | `string` |

#### Login user
```http
GET /auth/login
```
| Parameter | Type     |
| :-------- | :------- |
| `Username` | `string` |
| `Passsword` | `string` |

#### Get all user boards
```http
GET /board  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `` | `` |

#### Get Board by ID
```http
  GET /board/:id  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `id` | `string` |

#### Create Board
```http
POST /board  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `board` | `BoardDto` |

#### Update Board
```http
PUT /board/:id  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `id` | `string` |
| `board` | `Board` |

#### Delete Board
```http
DELETE /board/:id  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `id` | `string` |

#### Get All Lists by Board ID
```http
GET /list/all/:boardId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `boardId` | `string` |

#### Get List by ID
```http
GET /list/:id  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `Id` | `string` |

#### Create List
```http
POST /list/:boardId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `boardId` | `string` |
| `list` | `ListDto` |

#### Reorder List
```http
POST /list/:listId/:boardId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `listId` | `string` |
| `boardId` | `string` |
| `position` | `number` |

#### Update List
```http
PUT /list/:id  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `id` | `string` |
| `list` | `ListDto` |

#### Delete List
```http
DELETE /list/:id  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `id` | `string` |

#### Get Cards by List ID
```http
GET /card/all/:listId  'require auth'
```

| Parameter | Type     |
| :-------- | :------- |
| `listId	` | `string` |

#### Get Card by ID
```http
GET /card/all/:listId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `cardId` | `string` |

#### Create Card
```http
GET /card/all/:listId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `listId` | `string` |
| `card` | `CardDto` |


#### Reorder Card
```http
POST /card/:cardId/:listId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `cardId` | `string` |
| `listId` | `string` |
| `position` | `number` |

#### Update Card
```http
PUT /card/:cardId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `cardId` | `string` |
| `card` | `CardUpdateDto` |

#### Delete Card
```http
DELETE /card/:cardId  'require auth'
```
| Parameter | Type     |
| :-------- | :------- |
| `cardId` | `string` |
</details>
