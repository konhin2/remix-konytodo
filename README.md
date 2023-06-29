konhin2
konhin2#1465

Welcome
konhin2
. Say hi!
— 06/19/2023 10:02 PM
misanc21
is here.
— 06/19/2023 10:17 PM
Glad you're here,
holasoypolito
.
— 06/19/2023 10:21 PM
diurivj — 06/19/2023 10:48 PM
diurivj — 06/19/2023 10:48 PM
diurivj — 06/19/2023 10:48 PM
A wild
jdejose
appeared.
— 06/20/2023 7:03 AM
jdejose — 06/20/2023 7:03 AM
diurivj — 06/20/2023 9:46 AM
A wild
Jorge Martinez
appeared.
— 06/20/2023 1:13 PM
crisderzweite
just landed.
— 06/20/2023 6:05 PM
crisderzweite — 06/20/2023 6:06 PM
yo sí
Jorge Martinez — 06/20/2023 6:07 PM
yo si
Jorge Martinez — 06/20/2023 6:07 PM
Joselink74
is here.
— 06/20/2023 6:08 PM
crisderzweite — 06/20/2023 6:09 PM
examen sorpresa pa Jorge
Bichous
is here.
— 06/20/2023 6:18 PM
Bichous — 06/20/2023 8:10 PM
las grabaciones tienen algun fecha de expiracion?
diurivj — 06/20/2023 8:10 PM
Creo que no, pero las voy a descargar y se las paso en un drive para que las tengan
Bichous — 06/20/2023 8:10 PM
vaaa tnks
diurivj — 06/20/2023 8:10 PM
Ya recordé cual era la duda, como hacer para que loader lentos no muestren solo una pagina en blanco
Bichous — 06/20/2023 8:10 PM
ya no voy a preguntar tanto xD
diurivj — 06/20/2023 8:10 PM
mañana cuando veamos la integración con la db, les muestro como hacer eso
Bichous — 06/20/2023 8:11 PM
va
diurivj — 06/20/2023 8:11 PM
tu pregunta todo lo que quieras
Bichous — 06/20/2023 8:12 PM
vaaa
Jorge Martinez — 06/20/2023 10:29 PM
hola, ya pasaron el link del repo? de lo que se ha hecho hasta hoy :P?
konhin2 — 06/26/2023 1:48 PM
@here una pregunta saben si lo de:
import {useEffect, useState} from 'react'
va a cambiar lo menciono @diurivj
import \* as React from 'react'
va a cambiar solo en Remix o tambien se veria afectado en una app con nextjs o react puro
diurivj — 06/26/2023 1:50 PM
No es por remix, es React
Aquí está el link
https://twitter.com/dan_abramov/status/1308739731551858689?s=46&t=d6lqYJCsaz2sppfyxtO6SA

дэн (@dan_abramov)
@kentcdodds @jacobmparis To clarify:

✅ import { useState } from 'react'
✅ import \* as React from 'react'
🟡 import React from 'react'

The third one is called "default import" and in the long term (maybe in 19 or 20) we will stop supporting it. We provide an automated script to change it.
Likes
288

Twitter•09/23/2020 7:07 AM
konhin2 — 06/26/2023 1:50 PM
muchas gracias
konhin2 — 06/26/2023 2:05 PM
Una pregunta @diurivj la publicacion es de 2020, aun sigue jalando pero si dejara de funcionar en algun momento?
diurivj — 06/26/2023 2:06 PM
Si lees con detenimiento a lo que dice Dan al final es que posiblemente en la versión 19 o 20 de react lo cambien. Seguimos en la 18 actualmente
konhin2 — 06/26/2023 2:08 PM
Got it!
diurivj — Today at 8:16 PM
Aquí están los requisitos del proyecto final!

# Proyecto final - To Do app

## Requisitos

1. Ser un proyecto nuevo en Remix, usando la versiÃ³n minima 1.18.0, (escoger la opcion de deployear en fly.io)
   Expand
   requisitos.md
   3 KB
   diurivj — Today at 8:47 PM
   Pensándolo más detenidamente, voy a modificar un punto y agregar otro.

Modificacion:
para agregar una nota, puede ser desde la misma ruta donde se ven todas las notas o en una nueva ruta.

Nuevo punto:
agregar funcionalidad de order by, mostrando opciones para ordenar por nombre, fecha creada y por estatus (completed o no)

# Proyecto final - To Do app

## Requisitos

1. Ser un proyecto nuevo en Remix, usando la versiÃ³n minima 1.18.0, (escoger la opcion de deployear en fly.io)

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
