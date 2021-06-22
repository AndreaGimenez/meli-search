# MeLi Challenge

## Instalación

`git clone https://github.com/AndreaGimenez/meli-search.git`
`cd meli-search/server`
`npm run server-dependencies`
`npm run client-dependencies`
`npm start`

Abrir [http://localhost:3000](http://localhost:3000) para verlo en el browser.
**Nota: El backend corre en el puerto 3001**

## Server
La API permite consultar dos endpoints, `/api/items` y `/api/items/:id`. 
La función `fetchData` centraliza las llamadas a la API de MercadoLibre, es utilizada luego por `getSearchResults`, `getItemById` y `getCategoryById`.  Además recibe una función `parser` que formatea adecuadamente la respuesta. 
Por otro lado, `getItemData` devuelve un objeto con los campos **comunes** a ambos endpoints.


##Client
La aplicación consta de 3 vistas. El ruteo lo realiza con la librería `react-router-dom`.
Utiliza componentes funcionales y la funcionalidad de los `hooks` para el manejo del estado interno de componentes y consultas al backend. Para esto último hace uso del custom hook `use-fetch`.
Para los estilos, utilicé `sass`. Cada componente cuenta con su respectiva hoja de estilos. Existe el archivo `variables.scss` que contiene las variables de estilo de la aplicación. 
El breadcrumb que se muestra en la vista de detalle del producto se construye a partir de la categoría
a la que pertenece el producto en particular.
Para la vista de resultados de búsqueda, en algunos casos no se cuenta con categoría definida (por ejemplo para la busqueda de "luz"). En esos casos, el breadcrumb estará vacío. Para casos en los que la búsqueda sí posea una categoría (por ejemplo para la busqueda de "mate") el breadcrumb se construye con ella.