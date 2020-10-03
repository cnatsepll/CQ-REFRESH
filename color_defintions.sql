CREATE TABLE color_definitions(
    cd_key SERIAL,
	quick_name varchar(200),
	color_group char[]
);


insert into color_definitions (quick_name, color_group) values ('Jund', array['b','r','g']);
insert into color_definitions (quick_name, color_group) values ('Dimir', array['u', 'b']);
insert into color_definitions (quick_name, color_group) values ('Golgari', array['b','g']);
insert into color_definitions (quick_name, color_group) values ('Rakdos', array['b','r']);
insert into color_definitions (quick_name, color_group) values ('Orzhov', array['w', 'b']);
insert into color_definitions (quick_name, color_group) values ('Simic', array['u','g']);
insert into color_definitions (quick_name, color_group) values ('Izzet', array['u','r']);
insert into color_definitions (quick_name, color_group) values ('Azorius', array['w','u']);
insert into color_definitions (quick_name, color_group) values ('Gruul', array['r','g']);
insert into color_definitions (quick_name, color_group) values ('Selesnya', array['w','g']);
insert into color_definitions (quick_name, color_group) values ('Mono Black', array['b']);
insert into color_definitions (quick_name, color_group) values ('Mono Blue', array['u']);
insert into color_definitions (quick_name, color_group) values ('Mono Green', array['g']);
insert into color_definitions (quick_name, color_group) values ('Mono Red', array['r']);
insert into color_definitions (quick_name, color_group) values ('Mono White', array['u']);
insert into color_definitions (quick_name, color_group) values ('Abzan', array['w','b','g']);
insert into color_definitions (quick_name, color_group) values ('Bant', array['w','u','g']);
insert into color_definitions (quick_name, color_group) values ('Esper', array['w','u','b']);
insert into color_definitions (quick_name, color_group) values ('Grixis', array['u','b','r']);
insert into color_definitions (quick_name, color_group) values ('Jeskai', array['w','u','r']);
insert into color_definitions (quick_name, color_group) values ('Mardu', array['w','b','r']);
insert into color_definitions (quick_name, color_group) values ('Naya', array['w','r','g']);
insert into color_definitions (quick_name, color_group) values ('Sultai', array['u','b','g']);
insert into color_definitions (quick_name, color_group) values ('Temur', array['u','r','g']);
insert into color_definitions (quick_name, color_group) values ('Boros', array['w','r']);
insert into color_definitions (quick_name, color_group) values ('Multicolored', array['w','u','b','r','g']);