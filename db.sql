-- Creation d'une table car
CREATE DATABASE car;

--Creation d'une table voiture
CREATE TABLE voiture (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    marque text(30),
    model text(30),
    puissance TEXT(5),
    motorisation TEXT(10),
    date_sortie DATE,
    coup_coeur BOOLEAN DEFAULT false,
    vitesse INT, 
    nb_porte INT 
);

-- Creation des inserts dans la table voiture
INSERT INTO voiture (marque, model, puissance, motorisation, date_sortie, coup_coeur, vitesse, nb_porte) 
VALUES ("Audi", 'A3','140cv','2.0tdi', '2006-06-10', 1, 210,3),
       ("Audi", 'A4','180cv','3.0tdi', '2010-03-24', 1, 215,5),
       ("Audi", 'Q7','140cv','V12 tdi', '2010-04-7', 0, 220,3),
       ("Citroen", 'Ax','60cv','1.5D', '1999-12-10', 0, 120,5),
       ("Citroen", 'Xantia','100cv','2.0 turbo', '1990-11-9', 0, 150,5),
       ("Citroen", 'Xm','120cv','2.0 turbo', '2000-08-18', 0, 185,5),
       ("Renault", 'laguna 2','140cv','2.0 V6', '2005-02-1', 1, 222,5),
       ("Renault", 'Clio 2','250cv','V6', '2000-01-19', 0, 10,3),
       ("Renault", '21','140cv','2.0 turbo', '2000-07-1', 0, 185,3),
       ("Tesla", 'Spider','140cv','electrique', '2000-02-17', 1, 150,3),
       ("Renault", 'Megane RS','240cv','2.0', '2010-08-26', 1, 218,3),
       ("Citroen", '2cv','2cv','2.0', '1980-10-29', 0, 90,5);

