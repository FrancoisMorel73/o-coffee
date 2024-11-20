DROP TABLE IF EXISTS "coffee" CASCADE;
DROP TABLE IF EXISTS "coffee_type" CASCADE;
DROP TABLE IF EXISTS "origin" CASCADE;

CREATE TABLE "origin" (
    "id" SERIAL PRIMARY KEY,
    "country" VARCHAR(255) NOT NULL
);

INSERT INTO "origin" ("country") VALUES
('Italie'),
('Colombie'),
('Éthiopie'),
('Brésil'),
('Guatemala'),
('Kenya'),
('Indonésie'),
('Costa Rica'),
('Vietnam'),
('Tanzanie'),
('Jamaïque'),
('Rwanda'),
('Panama'),
('Pérou'),
('Hawaï'),
('Nicaragua');

CREATE TABLE "coffee_type" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL
);

INSERT INTO "coffee_type" ("name") VALUES
('Corsé'),
('Fruité'),
('Doux'),
('Acide'),
('Épicé');

CREATE TABLE "coffee" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "reference" VARCHAR(255) NOT NULL,
    "price_per_kg" DECIMAL(10, 2) NOT NULL,
    "available" BOOLEAN NOT NULL,
    "origin_id" INTEGER REFERENCES origin(id) ON DELETE CASCADE,
    "coffee_type_id" INTEGER REFERENCES coffee_type(id) ON DELETE CASCADE
);

INSERT INTO "coffee" ("name", "description", "reference", "price_per_kg", "origin_id", "available", "coffee_type_id") VALUES
('Espresso', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', '100955890', 20.99, 1, TRUE, 1),
('Columbian', 'Café moyennement corsé avec une acidité vive et une saveur riche.', '100955894', 18.75, 2, TRUE, 2),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 22.50, 3, TRUE, 2),
('Brazilian Santos', 'Café doux et lisse avec un profil de saveur de noisette.', '134009550', 17.80, 4, TRUE, 3),
('Guatemalan Antigua', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', '256505890', 21.25, 5, TRUE, 1),
('Kenyan AA', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 23.70, 6, TRUE, 2),
('Sumatra Mandheling', 'Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 19.95, 7, TRUE, 1),
('Costa Rican Tarrazu', 'Café vif et net avec une finition propre et une acidité vive.', '327302954', 24.50, 8, TRUE, 2),
('Vietnamese Robusta', 'Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 16.75, 9, TRUE, 5),
('Tanzanian Peaberry', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 26.80, 10, TRUE, 2),
('Jamaican Blue Mountain', 'Reconnu pour sa saveur douce, son acidité vive et son absence d\''amertume.', '589100954', 39.25, 11, TRUE, 3),
('Rwandan Bourbon', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 21.90, 12, TRUE, 2),
('Panamanian Geisha', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 42.00, 13, TRUE, 2),
('Peruvian Arabica', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 19.40, 14, FALSE, 4),
('Hawaiian Kona', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', '958090105', 55.75, 15, FALSE, 3),
('Nicaraguan Maragogipe', 'Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 28.60, 16, FALSE, 2);
