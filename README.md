# Document List App

El proyecto se ha creado usando TypeScript y tipos (modelos) como lenguaje de programación, Redux como patrón de diseño para el control del estado. La idea general es la máxima componetización y reutilización de componentes y funciones auxiliares o servicios.

## Redux

El control del estado de la aplicación se controla con Redux, hay un store principal (no tenía sentido dividir en varios stores puesto que es una aplicación relativamente pequeña y todo el estado gira en torno a los documentos y los filtros de búsqueda). El patrón de diseño es: se despacha una acción con un payload (o no), esta acción está asociada a un tipo concreto, el cual será detectado en el reducer donde se modificará el estado. El reducer tiene un fichero auxiliar func.js donde se definen las funciones que se ejecutan en el reducer para modificar el estado, como por ejemplo limpiar el formulario o eliminar un documento de los distintos listados.

## Internacionalización

Para la internacionalización se ha seguido el estandar i18n y la librería i18next, aunque solo haya un idioma, el control de las etiquetas se lleva ahí y en caso de querer añadir nuevas traducciones solo habría que añadir un fichero JSON con las mismas.

## Mobile first

Se ha seguido el patrón de diseño mobile first, de tal forma que todo el desarrollo de la aplicación se ha hecho siguiendo un modelo móvil (Iphone 12), procurando que todos los elementos fueran flexibles para tener que aplicar la mejor cantidad posible de media queries. El diseño de la interfaz en teléfono es muy bueno, puesto que este ha sido el centro del desarollo, pero escala bien a ventanas de ordenadores.

## Estilos (Sass)

Para el estilizado de la aplicación se ha usado el framework de css Sass. El estilo general es minimalista pero elegante. En cuanto a la programación, se ha creado un fichero para clases y variables globales, para evitar la repetición de código y en caso de querer cambiar por ejemplo el color principal de la aplicación, solo es necesario modificarlo en ese archivo global.

## Enrutamiento

Para el enrutamiento se ha usado la libreria react-router-dom. Solo existen cuatro rutas: / que es el listado de documentos. En este listado se puede filtrar por tipo de documentos o por el texto del título, también se puede paginar, esto se hace mediante query params por url; /document/:id donde se muestra toda la información del documento al que pertenece el id pasado como parámetro y la posibilidad de eliminar el mismo; /add-document que es un formulario para crear nuevos documentos; una ruta 404 para todas las páginas que no caígan en las mencionadas anteriormente.

## Control de errores

A la hora de crear documentos, se validan los campos: que no estén vacios los que son obligatorios y en caso de la url de la imagen que tenga un formato correcto. Si tiene un formato correcto se muestra una preview de la imagen, para esto se ha usado useMemo y evitar recargas innecesarias, solo se actualiza cuando se modifica el campo imagen.

## Componenitización, reutilización y customHooks

Se ha seguido un patrón de componetización al máximo, un ejemplo de ellos son los componentes Input, en vez de repetir el código, se ha creado un componente genérico que aglutina los estilos y la lógica del mismo. Se ha intentado no programar la lógica dentro de los componentes, sino extraerlo a servicios y hooks propios.

## Paginación y filtros

Se ha añadido una paginación de 5 en 5 documentos, siendo este parámetro modificable. Para retroceder o avanzar de página se deben pulsar los correspondientes botones situados en la parte inferior. Los filtros funcionan paralelamente a la paginación, es decir, si por ejemplo se selecciona un tipo del que hay 6 elementos de 20 en total, ya no se paginará en 4 páginas, sino en 2, los 5 elementos primeros del tipo en la primera página, y uno más en la segunda.

## Testing

Pendiente

## Funcionalidad extra

Como funcionalidad extra se ha añadido un Header donde se aglutina un logo para volver al listado de documentos, el buscador solicitado por tipo, y uno extra para filtrar por título. Otra funcionalidad extra añadida es la previsualización de la imagen cuando la url tiene el formato correcto, en el formulario para crear un documento.

### Néstor Fernández González
