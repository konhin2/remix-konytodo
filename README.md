# Proyecto final - To Do app

## Requisitos

1. Ser un proyecto nuevo en Remix, usando la version minima 1.18.0, (escoger la opcion de deployear en fly.io)

2. Pueden usar o no usar un remix stack

3. Debe de incluir el CRUD completo para los to do!, (crear un todo, editar el todo, leer los todo, borrar los todo)

4. Debe de tener auth, (pueden usar remix vanilla, remix-auth, clerk)

5. Debe de estar deployeado en fly.io

6. Usar prisma para los modelos y la conexion a la DB (notes, user, password)

7. Es OPCIONAL usar typescript y/o cualquier libreria de tipado, como zod.

8. Agregar funcionalidad de order by, mostrando opciones para ordenar por nombre, fecha creada y por estatus (completed o no)

## Requerimientos tecnicos

-   Al ir a la ruta index es opcional, pueden mostrar un landing page o no mostrar nada. (links para ir a logearnos o crear una cuenta). (/)

-   Al ir a la ruta login debemos de mostrar un formulario para iniciar sesion

-   Al ir a la ruta signup/join/register debemos de mostrar un formulario para crear una cuenta de usuario

-   Al ir a la ruta /notes debemos de mostrar todas las notas del usuario logueado, si no hay un usuario logueado, redirigir a /login. Esta misma ruta debe de mostrar un link que nos mande a la ruta /notes/new. Esta misma ruta debe de mostrar un boton para cerrar sesion o hacer logout

-   Al ir a la ruta /notes/new debemos de ver un formulario para crear una nota, al crear una nota, debemos de redirigir al usuario a /notes

-   En la lista de notas debe de mostrar la opcion para eliminar la nota, o marcarla como 'done', cuando se cambie el estado de la nota debe de verse reflejado en la misma lista.

-   La lista de notas, NO ES NECESARIO que sea paginada, llamese tener una tabla con paginacion o tener un infinite scroll. NO ES NECESARIO!!!!!!!!

-   Su app debe de estar estilizada usando tailwind solamente!!!!

## Modelos de prisma

### User

-   id
-   name
-   email "unico"
-   password -> relacion al model Password
-   todos -> relacion de muchos a uno al model de Todo
-   createdAt
-   updatedAt

### Password

-   id
-   hash
-   userId -> relacion al modelo del usuario
-   createdAt
-   updatedAt

### Todo

-   id
-   name
-   completed -> boolean -> default false
-   creatorId -> relacion al model User
-   createdAt
-   updatedAt

requisitos.md
3 KB
