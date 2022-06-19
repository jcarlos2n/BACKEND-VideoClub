<h1 align="center">
VideoClub
</h1>

___
<h5 align="center">Primer proyecto de Backend realizado en SQL para el Bootcamp FSD de GeeksHubs. Por José Carlos Núñez.</h5>

<br>

<p align="center">
    <a href="#about">About</a> ·
    <a href="#usage">Usage</a> ·
    <a href="#features">Features</a>
</p>

___

## About

Simulamos la base de datos de un videoclub, en el que se encuentran tres modelos, peliculas, clientes, y alquiler, relacionados entre ellos mediante alquiler.

He añadido 10 EndPoints con diferentes utilidades en el CRUD de la base de datos.

El FrontEnd ha sido simulado mediante Postman para usar las utilidades de la base de datos.

</p>

---

## Usage

El primer Endpoint, nos permite registrar a un nuevo usuario.

<p align="center">
<img src="img/addUser.png" width= 500><br>
<sub>addUser</sub>
</p>

El segundo EndPoint, nos permite hacer el login de usuario, el cual nos devolvera un Token, para poder acceder a otras utilidades de la base de datos

<p align="center">
<img src="img/login.png" width= 500><br>
<sub> login</sub>
</p>

El tercer EndPoint, ingresando en token recibido en el login, nos permite ver nuestros datos de usuario, salvo al admin, que le permite ver a todos los usuarios.

<p align="center">
<img src="img/getUser.png" width= 500><br>
<sub> getUser</sub>
</p>

El cuarto EndPoint, nos permite modificar los datos de usuario.

<p align="center">
<img src="img/updateUser.png" width= 500><br>
<sub> updateUser</sub>
</p>

El quinto EndPoint, nos mostrara todas las peliculas.
<p align="center">
<img src="img/getFilms.png" width= 500><br>
<sub> getFilms</sub>
</p>

El sexto Endpoint, nos permite añadir peliculas solo si nuestro token pertenece al admin.

<p align="center">
<img src="img/postFilm.png" width= 500><br>
<sub> postFilm</sub>
</p>

El septimo EndPoint, permite al admin eliminar peliculas segun su ID.

<p align="center">
<img src="img/deleteFilm.png" width= 500><br>
<sub> deleteFilm</sub>
</p>

El octavo EndPoint, permite a los usuarios buscar peliculas por el titulo.

<p align="center">
<img src="img/searchTittle.png" width= 500><br>
<sub> searchTittle</sub>
</p>

El noveno EndPoint, permite a los usuarios realizar un pedido, si el usuario es menor de edad, no podra hacer un pedido de determinadas peliculas.

<p align="center">
<img src="img/makeRent.png" width= 500><br>
<sub> postRent</sub>
</p>

El decimo EndPoint, siendo admin, permite ver todos los pedidos realizados.

<p align="center">
<img src="img/getRent.png" width= 500><br>
<sub> getRent</sub>
</p>

---

## Features

<img src="https://img.shields.io/badge/node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"
      alt="nodejs"/> <img src="https://img.shields.io/badge/express-000000.svg?style=for-the-badge&logo=express&logoColor=white"
      alt="express" />  <img src="https://img.shields.io/badge/Javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"
      alt="javascript"/> <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
      alt="sql"/> <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"
      alt="sequelize"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman"/> <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/> <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/>
