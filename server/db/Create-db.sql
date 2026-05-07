CREATE DATABASE wizardTavern;
\c wizardtavern
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100)
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    body TEXT,
    img VARCHAR(100),
    userid INTEGER REFERENCES users(id)
);