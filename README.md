# O'Coffee

## Présentation

Bienvenue sur **O'Coffee**, un site web statique qui met en avant une boutique spécialisée dans le café haut de gamme. Ce projet vise à offrir une expérience immersive en présentant :

- L'atmosphère unique de la boutique.
- Une sélection de produits de qualité.
- Un engagement envers une expérience client exceptionnelle.

---

## Fonctionnalités principales

- **Présentation immersive** de l’ambiance et des produits.
- **Mise en page optimisée** pour une navigation fluide et agréable.
- **Filtrage dynamique** des produits dans le catalogue.

---

## Quelques aperçus

<details>
    <summary>Voir quelques aperçus du rendu final </summary>
    
![Page d'accueil - vue Desktop](/doc/home-desktop.png)
![Page d'accueil - vue mobile](/doc/home-mobile.png)
![Page catalogue - vue tablette](/doc/catalog-tablet.png)

</details>

---

## Technologies utilisées

Le projet repose sur les technologies suivantes :

### **Frontend**

- HTML5
- CSS3 (vanilla)
- JavaScript (vanilla)

### **Backend**

- Node.js avec Express
- EJS pour le templating
- PostgreSQL pour la base de données

---

## Prérequis

Avant d’installer le projet localement, assurez-vous d’avoir les éléments suivants :

- **Node.js** (version 16 ou supérieure).
- **Git** pour cloner le dépôt.
- **PostgreSQL** pour la base de données.

---

## Installation et exécution en locale

Suivez ces étapes pour exécuter le projet sur votre machine :

### Cloner le dépôt :

```bash
git clone <url-de-votre-repo>
```

### Installer les dépendances :

```bash
npm install
```

### Création de la base de donnée :

- Initialisez une nouvelle base de données dans PosgreSQL.
- Si nécessaire, créez un nouveau couple identifiant/mot de passe.
- Exécutez le fichier /data/create_db.sql pour insérer les données du projet.

### Définition des variables d'environnements :

- Créez un fichier .env sur le modèle de .env.example (présent à la racine du projet).
- Renseignez les informations requises.

### Démmarer le projet :

En mode développement :

```bash
npm run dev
```

En mode production :

```bash
npm start
```

---

## Contribution

Les contributions sont les bienvenus ! Si vous avez des idées d'améliorations ou des bugs à signaler, n'hésitez pas à ouvrir une issue ou un pull request.
