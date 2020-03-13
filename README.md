# perpustakaan_back_test

### Postman Documentation : 
[Postman Web Link](https://web.postman.co/collections/10104517-053c9385-4e38-4d51-b1db-eeb7267be09f?version=latest&workspace=25e91d59-a40e-494b-86a7-05feab422e18)

### database on files :
perpustakaan_test.sql

### Demo Account
username : admin
password : admin

### .env
.env
SERVER_ADDRESS=127.0.0.1
PORT_ADDRESS=3001
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=perpustakaan_test

### Books
GET http://127.0.0.1:3001/books/
POST http://127.0.0.1:3001/books/ body={book_name, book_author}
DELETE http://127.0.0.1:3001/books/:book_id
PUT http://127.0.0.1:3001/books/:book_id body={book_name, book_author, book_status}

### Member
GET http://127.0.0.1:3001/member/ body={searchName}
DELETE http://127.0.0.1:3001/member/:member_id
PUT http://127.0.0.1:3001/member/:member_id body={member_name, member_address, member_gender}
POST http://127.0.0.1:3001/member/ body={member_name, member_address, member_gender}

### Borrow 
GET http://127.0.0.1:3001/borrow/:borrow_id
DELETE http://127.0.0.1:3001/borrow/:borrow_id
PUT http://127.0.0.1:3001/borrow/11 body={member_id, books:[{book_id},{book_id}]}
POST http://127.0.0.1:3001/borrow/ body={member_id, books:[{book_id},{book_id}]}

### Login
POST http://127.0.0.1:3001/auth/login  body{username, password}
