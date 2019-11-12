CREATE TABLE IF NOT EXISTS product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  product_desc VARCHAR(300) NOT NULL,
  image_url VARCHAR(300) NOT NULL,
  num_product INT NOT NULL,
  num_remain INT NOT NULL
);
TRUNCATE TABLE product;

CREATE TABLE IF NOT EXISTS product_consumes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT NOT NULL,
  customer_id VARCHAR(30) NULL,
  reg_date TIMESTAMP NOT NULL
);
TRUNCATE TABLE product_consumes;

INSERT INTO product
  (product_name, product_desc, image_url, num_product, num_remain)
VALUES 
  ('Gummy Bear', 'Gummy bears (German: Gummibär) are small, fruit gum candies, similar to a jelly baby in some English-speaking countries.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg/250px-Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg', 20, 20),
  ('Fotune Cookie', 'A fortune cookie is a crisp and sugary cookie usually made from flour, sugar, vanilla, and sesame seed oil with a piece of paper inside, a "fortune", on which is an aphorism, or a vague prophecy.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Fortune_cookies.jpg/220px-Fortune_cookies.jpg', 15, 15);

INSERT INTO product_consumes (product_id, customer_id, reg_date) VALUES
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW()),
  (1, NULL, NOW());

INSERT INTO product_consumes (product_id, customer_id, reg_date) VALUES
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW()),
  (2, NULL, NOW());