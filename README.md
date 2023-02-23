# SodexoTest



## Diagrama de arquitectura de la solución propuesta

<img width="451" alt="image" src="https://user-images.githubusercontent.com/65778274/220912376-a4337b39-a019-4c27-8e23-b7676c1afbf7.png">



En este diagrama, se puede ver que la solución propuesta consta de dos componentes principales: el frontend y el backend. El frontend está construido utilizando Angular, mientras que el backend está construido utilizando Spring Boot.

El frontend y el backend se comunican a través de HTTP Requests y HTTP Responses. El frontend realiza solicitudes HTTP al backend para obtener, guardar o listar datos, y el backend envía las respuestas correspondientes al frontend.

El backend consta de tres componentes principales: el Service (lógica de negocio), el Repository (acceso a datos) y el External API (servicio de comunas). El Service se encarga de manejar la lógica de negocio de la aplicación, el Repository se encarga de manejar el acceso a la base de datos y el External API se encarga de consumir el servicio de comunas.

La base de datos utilizada en el backend es una base de datos H2, que se utiliza para almacenar y recuperar los datos de la aplicación.
En resumen, esta arquitectura propuesta sigue un patrón de arquitectura de software en capas, donde cada componente se encarga de un conjunto específico de tareas y se comunica con los otros componentes a través de interfaces bien definidas. Esto ayuda a mantener el código modular y escalable.


## Pruebas
<img width="1205" alt="image" src="https://user-images.githubusercontent.com/65778274/220914518-c5976053-7ba3-4895-9b43-ac8b222c0aad.png">
<img width="1185" alt="image" src="https://user-images.githubusercontent.com/65778274/220914651-3797928e-5a35-4e47-be68-c9150a23c511.png">
<img width="1495" alt="image" src="https://user-images.githubusercontent.com/65778274/220914868-a9f2770c-feac-4078-bb40-f0a6a27c69dc.png">
<img width="843" alt="image" src="https://user-images.githubusercontent.com/65778274/220914910-4bcf14b1-a832-41a6-80ac-cda7fd3c0ebb.png">
