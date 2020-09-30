CREATE TABLE color_definitions(
    cd_key SERIAL,
	quick_name varchar(200),
	color_group char[]
);


insert into color_definitions (quick_name, color_group) values ('Jund', array['b','r','g']);
insert into color_definitions (quick_name, color_group) values ('Dimir', array['b','u']);
insert into color_definitions (quick_name, color_group) values ('Golgari', array['b','g']);
insert into color_definitions (quick_name, color_group) values ('Rakdos', array['b','r']);
insert into color_definitions (quick_name, color_group) values ('Orzhov', array['b','w']);
insert into color_definitions (quick_name, color_group) values ('Simic', array['g','u']);
insert into color_definitions (quick_name, color_group) values ('Izzet', array['r','u']);
insert into color_definitions (quick_name, color_group) values ('Azorius', array['u','w']);
insert into color_definitions (quick_name, color_group) values ('Gruul', array['r','g']);
insert into color_definitions (quick_name, color_group) values ('Selesnya', array['g','w']);
insert into color_definitions (quick_name, color_group) values ('Mono Black', array['b']);
insert into color_definitions (quick_name, color_group) values ('Mono Blue', array['u']);
insert into color_definitions (quick_name, color_group) values ('Mono Green', array['g']);
insert into color_definitions (quick_name, color_group) values ('Mono Red', array['r']);
insert into color_definitions (quick_name, color_group) values ('Mono White', array['u']);
insert into color_definitions (quick_name, color_group) values ('Abzan', array['b','g','w']);
insert into color_definitions (quick_name, color_group) values ('Bant', array['g','u','w']);
insert into color_definitions (quick_name, color_group) values ('Esper', array['b','u','w']);
insert into color_definitions (quick_name, color_group) values ('Grixis', array['b','r','u']);
insert into color_definitions (quick_name, color_group) values ('Jeskai', array['r','u','w']);
insert into color_definitions (quick_name, color_group) values ('Mardu', array['b','r','w']);
insert into color_definitions (quick_name, color_group) values ('Naya', array['r','g','w']);
insert into color_definitions (quick_name, color_group) values ('Sultai', array['b','g','u']);
insert into color_definitions (quick_name, color_group) values ('Temur', array['r','g','u']);
insert into color_definitions (quick_name, color_group) values ('Boros', array['r','w']);
insert into color_definitions (quick_name, color_group) values ('Multicolored', array['b','g','r','u','w']);