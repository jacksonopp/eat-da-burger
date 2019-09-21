DROP DATABASE IF EXISTS burger_db;
create database burger_db;

use burger_db;

create table burgers (
	id int(30) not null auto_increment,
    burger varchar(60),
    is_eaten boolean default false;
    PRIMARY KEY (id)
);

insert into burgers (burger)
values ("the pig lebowski");

insert into burgers (burger)
values ("cheemsborger");

select * from burgers;