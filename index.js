const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

//    requête GET pour recuperer la table voiture
app.get('/car', (req, res) => {  
    connection.query('SELECT * from voiture', (err, results) => {    
        if (err) {
        res.status(500).send('Erreur lors de la récupération de la table voiture');
        } else {
        res.json(results);
        };
    });
});
//   requête GET pour recuperer quelques champs specifiques
app.get('/car/marque', (req, res) => {  
    connection.query('SELECT marque, model from voiture', (err, results) => {    
        if (err) {
        res.status(500).send('Erreur lors de la recuperation des marques et des models');
        } else {
        res.json(results);
        };
    });
});
//    requête GET pour recuper par filtre des marques de voitures commencant par A
app.get('/car/marque/A', (req, res) => {  
    connection.query('SELECT marque, model FROM voiture WHERE marque LIKE "A%"', (err, results) => {    
        if (err) {
        res.status(500).send('Erreur lors de la recuperation des marques de voitures commencant par A et des champs model');
        } else {
        res.json(results);
        };
    });
});
//   requete GET pour recuperer par filtre des voitures qui ont une date de sortie superieur ou egal à 20 ans
app.get('/car/date_sortie/20', (req, res) => {
    connection.query('SELECT marque, model, puissance, motorisation, vitesse, date_sortie FROM voiture WHERE date_sortie>= 20', (err, results) => {    
        if (err) {
        res.status(500).send('Erreur lors de la recuperation des voitures qui ont une année de sortie, supérieur ou egal à 20 ans');
        } else {
        res.json(results);
        };
    });
});
//    requete GET pour recuperer les voitures qui ne sont pas des coups de coeur
app.get('/car/coup_coeur/false', (req, res) => {
    connection.query('SELECT * from voiture WHERE coup_coeur != true;', (err, results) => {    
        if (err) {
        res.status(500).send('Erreur lors de la recuperation des voitures qui ne sont pas des coup de coeur');
        } else {
        res.json(results);
        };
    });
});
//   requete GET pour recuperer les données de voiture trie par date de sortie
app.get('/car/recuperation/date_sortie', (req, res) => {
    connection.query('SELECT marque, model, puissance, motorisation, date_sortie, nb_porte, vitesse FROM voiture ORDER BY date_sortie ASC', (err, results) => {    
      if (err) {
        res.status(500).send('Erreur lors de la récupération des écoliers décroissant');
      } else {
        res.json(results);
      };
    });
});
//    requete POST pour l'insertion d'une nouvelle voiture
app.post('/car', (req, res) => {
    const carDat = req.body;
    connection.query('INSERT INTO voiture SET ?', carDat, (err, results) => {
        if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d'une voiture");
        } else {
        res.sendStatus(200);
        }
    });
});
//   requete PUT pour la modification d'une voiture
app.put('/car/:id', (req, res) => {
    const idCar = req.params.id;
    const carDat = req.body;
    connection.query('UPDATE voiture SET ? WHERE id = ?', [carDat, idCar], err => {
        if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'une voiture avec un id");
        } else {
        res.sendStatus(200);
        }
    });
});
//   requete PUT pour la modification d'une voiture par coup de coeur
app.put('/car/:id', (req, res) => {
    const idCar = req.params.id;
    const carDat = req.body;
    connection.query('UPDATE voiture SET coup_coeur= !coup_coeur WHERE id = ?', [carDat, idCar], err => {
        if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la modification d'une voiture avec un id suivant un coup coeur");
        } else {
        res.sendStatus(200);
        }
    });
});
//   requete DELETE pour la suppresion d'une voiture avec un id
app.delete('/car/:id', (req, res) => {
    const idCar = req.params.id;
    connection.query('DELETE FROM voiture WHERE id = ?', [idCar], err => {
        if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'une voiture avec un id");
        } else {
        res.sendStatus(200);
        }
    });
});
//   requete DELETE pour la suppresion d'une voiture avec aucun coup_coeur
app.delete('/car/', (req, res) => {
    const idCar = req.params.id;
    connection.query('DELETE FROM voiture WHERE coup_coeur =0', [idCar], err => {
        if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression d'une voiture avec aucun coup de coeur");
        } else {
        res.sendStatus(200);
        }
    });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Quelque chose de terrible est arrivé ...');
  }

  console.log(`Serveur a l'ecoute sur le port ${port}`);
});