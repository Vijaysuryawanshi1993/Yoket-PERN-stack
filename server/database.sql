//postgresql 

CREATE DATABASE pern;

CREATE TABLE users(
    id serial primary key,
    first_name varchar(255) not null,
    last_name text,
    age int,
    email text unique not null,
    password text
);

CREATE TABLE tasks(
    task_id SERIAL PRIMARY KEY,
    task_title text,
    task_description text default '...',
    task_deadline date,
    task_priority text,
    task_status text,
    "creatorId" int references users(id) not null
);