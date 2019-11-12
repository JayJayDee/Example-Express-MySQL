CREATE TABLE product (
  id INT PRIMARY KEY AUTO_INCREMENT,
  image_url VARCHAR(150) NOT NULL,  
  num_product INT NOT NULL
);

CREATE TABLE customer_has_product (
  id INT PRIMARY AUTO_INCREMENT,
  product_id INT NOT NULL,
  customer_id VARCHAR(30) NOT NULL
);