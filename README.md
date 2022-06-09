# Breaking Bad Characters List

El proyecto se ha creado usando TypeScript e interfaces (modelos) como lenguaje de programación, Redux y Redux-thunk como patrones de diseño para el control del estado.

## Redux y Redux-thunk

Redux se ha dividido principalmente en dos stores, una para los characters y otro para los quotes, con sus correspondientes reducers y thunks (esta última librería para el manejo de peticiones asíncronas y el estado). Se inicializa el contexto (Provider) al nivel más alto de la aplicación puesto que no hay muchos datos y estos van a ser necesarios en toda la aplicación.

## Internacionalización

Para la internacionalización se ha seguido el estandar i18n y las librerías i18next para el control de las traducciones y etiquetas y i18next-browser-languagedetector para la detección automática del idioma del navegador del usuario, en cualquier caso se puede cambiar el idioma entre inglés y español con el selector que hay en la parte superior derecha.

## Enrutamiento

Para el enrutamiento se ha usado la libreria react-router-dom (como no podía ser de otra forma). Solo existen tres rutas: / que es el listado de personajes; /character/:id donde se muestra toda la información del personaje al que pernece el id pasado como parámetro; una ruta 404 para todas las páginas que no caígan en las dos primeras.

## Control de errores

En caso de recibir algún error desde el servidor (o no recibir respuesta) se mostrará un mensaje de error al usuario en pantalla. Este error se controla a través de Redux-thunk y se recoge a alto nivel, así se evita tener que estar preocupándose por los errores en cada componente.

## Estilos y librerías de componentes

Para el estilizado de la aplicación se ha usado el framework de css Sass. El estilo de la aplicación es muy mejorable por la falta de tiempo y centrarme en otras partes más cruciales de la aplicación. Para algunos componentes e íconos se ha usado la librería material-UI:

## Responsive design

Se ha programado la aplicación de tal forma que sea responsiva y se redimensione correctamente para dispositivos móviles.

## Testing

Por el mismo motivo de tiempo mencionado anteriormente, no se ha podido completar la parte del testing, entre otras cosas. He decidido darle menos prioridad a esta parte porque considero que es algo relativamente sencillo de hacer pero que requiere de bastante tiempo.

## Funcionalidad extra

Como funcionalidad extra se ha añadido un Header/Navbar donde se aglutina un logo para volver al listado de personajes, un buscador funciona para buscar personajes por nombre (nombre fictio de la serie o nombre del actor) y en la parte derecha el selector de lenguaje. También se ha añadido un botón para scrollear hasta arriba.

### Néstor Fernández González
