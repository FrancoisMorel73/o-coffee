# Dictionnaire des données

## Table `coffees`
| **Colonne**       | **Type**      | **Description**                                        |
|-------------------|---------------|--------------------------------------------------------|
| `id`              | INTEGER       | Identifiant unique du café (clé primaire)              |
| `name`            | VARCHAR(255)   | Nom du café                                            |
| `description`     | TEXT          | Description du café                                    |
| `reference`       | VARCHAR(255)   | Référence du produit                                   |
| `price_per_kg`    | DECIMAL(10, 2) | Prix par kilo du café                                  |
| `available`       | BOOLEAN       | Disponibilité du produit (Oui / Non)                 |
| `origin_id`       | INTEGER       | Clé étrangère vers la table `origins`                    |
| `coffee_type_id`  | INTEGER       | Clé étrangère vers la table `coffee_type`              |

## Table `coffee_type`
| **Colonne**       | **Type**      | **Description**                                        |
|-------------------|---------------|--------------------------------------------------------|
| `id`              | INTEGER       | Identifiant unique du type de café (clé primaire)      |
| `name`            | VARCHAR(255)   | Nom du type de café (ex : Corsé, Fruité, Doux, etc.)   |

## Table `origins`
| **Colonne**       | **Type**      | **Description**                                        |
|-------------------|---------------|--------------------------------------------------------|
| `id`              | INTEGER       | Identifiant unique de l'origine (clé primaire)         |
| `country`         | VARCHAR(255)   | Pays d'origine du café                                 |

---