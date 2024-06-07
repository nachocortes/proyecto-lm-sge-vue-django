[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/A5AdBoof)
# Portal del empleado

Una empresa de la zona os ha contratado para desarrollar una nueva aplicación que les permita gestionar de forma más
ágil el día a día de los trámites administrativos de los empleados.

Se quiere automatizar una serie de procesos:

- Visualización de calendarios de trabajo.
- Recepción de justificantes por ausencias.
- Gestión de solicitudes de permisos.
- Notificaciones personalizadas.

## Requisitos

### Generales

- La aplicación dispondrá de un sistema de autenticación y permitirá identificar al usuario mediante un identificador único y consecutivo, que se asigna al empleado al contratarlo por primera vez y que nunca cambia.

### Visualización de calendarios de trabajo

- Mostrará el calendario anual actualmente en vigor del trabajador y los calendarios anteriores que hubiera tenido.
- El departamento de administración podrá añadir nuevos calendarios y editar los existentes.

### Recepción de justificantes por ausencias

- Cuando se produce una ausencia imprevista, permitirá crear un parte con información sobre las causas, así como adjuntar el posible justificante oficial (médico, etc.).

### Gestión de solicitudes de permisos

- La aplicación permitirá crear solicitudes de permisos (retribuídos o no) en el sistema, que serán validados por el departamento de administración como autorizados o no.

### Notificaciones personalizadas

- La aplicación incluirá un sistema de mensajería simple que permita enviar notificaciones breves (compuestas de un título y un mensaje breve) a cada usuario o grupo de usuarios.
- También permitirá que los usuarios envíen mensajes al buzón principal del departamento de administración.

## Plataforma tecnológica

- La empresa dispone de aplicaciones creadas en [Django](https://www.djangoproject.com) y [Vue](https://vuejs.org), pero hasta ahora no ha desarrollado ninguna que combine ambas tecnologías; esta será la primera.
- El _backend_ proporcionará una [API REST](https://restfulapi.net) que será consumido por la aplicación _frontend_.
- Cada parte de la aplicación (_backend_ y _frontend_) tiene que poder arrancarse como un contenedor [Docker](https://www.docker.com) independiente, para facilitar su posterior despliegue en producción.
- La API tiene que estar debidamente documentada mediante _swagger_ o _redoc._

## Restricciones y sugerencias

- Las personas que estén cursando a la vez LM y SGE pueden realizar el trabajo bien de forma individual o, como máximo, en equipos de dos personas. 
- Los que sólo estén cursando SGE, desarrollarán el backend con django modo API y el frontend lo harán en django realizando las llamadas de forma asincrona convenientemente para poder utilizar la api que se ha desarrollado. Podéis también realizar el trabajo bien de forma individual o, como máximo, en equipos de dos personas. 
- Los equipos se deben comunicar por escrito a [ijaureguialzo@egibide.org](mailto:ijaureguialzo@egibide.org) y a [ilarranaga@egibide.org](mailto:ilarranaga@egibide.org) antes del viernes 3 de mayo a las 22.00.
- También se deben realizar las pruebas de la api mediante [Postman](https://www.postman.com) para poner a prueba la API convenientemente. Se deberá añadir al repositorio el fichero *.json* con las pruebas realizadas.
- Todos los productos desarrollados se añadirán como subcarpetas en este repositorio, no se admitirá ningún otro tipo de soporte.
- Todo el software, material gráfico y recursos utilizados deberán ser de fuentes libres o de dominio público verificable y serán atribuidos adecuadamente.

## Plazo

- Fecha de entrega: 30/05/2024 a las 18:00h.
- Ese día se expondrá a los demás el trabajo realizado y se atenderán a las cuestiones que se planteen por parte del equipo docente, cuyas respuestas serán importantes para valorar el grado de conocimiento adquirido en la ejecución del proyecto y por tanto para su calificación.

## Importante

- **No habrá tolerancia con los plagios**. Si se detecta un caso así el resultado será un 0 automático en la actividad, tanto para la persona que plagie como para la que permita que su proyecto sea plagiado.

## Rúbricas de evaluación

|                              | No entregado (0) | Insuficiente (2)                                                                                             | Insuficiente (4)                                                                                                    | Superado (6)                                                                                                                                                                                                                                                                     | Destacado (8)                                                                                                                                                                                                                                                                    | Excelente (10)                                                                                                                                                                                                                                                                   |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos mínimos          |                  |                                                                                                              | No funciona correctamente o faltan requisitos obligatorios.                                                         | - Se ha desarrollado el API REST. <br> - El sistema de autenticación de usuarios funciona correctamente. <br> - Permite crear y visualizar el calendario actual del usuario. <br> - Permite crear justificantes por ausencias. <br> - Permite gestionar solicitudes de permisos. | - Se ha desarrollado el API REST. <br> - El sistema de autenticación de usuarios funciona correctamente. <br> - Permite crear y visualizar el calendario actual del usuario. <br> - Permite crear justificantes por ausencias. <br> - Permite gestionar solicitudes de permisos. | - Se ha desarrollado el API REST. <br> - El sistema de autenticación de usuarios funciona correctamente. <br> - Permite crear y visualizar el calendario actual del usuario. <br> - Permite crear justificantes por ausencias. <br> - Permite gestionar solicitudes de permisos. |
| Características adicionales |                  |                                                                                                              |                                                                                                                     |                                                                                                                                                                                                                                                                                  | - Permite visualizar históricos de calendarios, justificantes y solicitudes de ausencias. <br> - Se ha desarrollado el CRUD completo de todas las entidades.                                                                                                                     | - Permite visualizar históricos de calendarios, justificantes y solicitudes de ausencias. <br> - Se ha desarrollado el CRUD completo de todas las entidades.<br>- Sistema de mensajería simple implementado                                                                      |
| Extras                       |                  |                                                                                                              |                                                                                                                     |                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                  | - Se ha desarrollado el sistema de notificaciones completo. <br> - Se ha desplegado la aplicación usando contenedores Docker.                                                                                                                                                    |
| Dominio del Tema             |                  | El presentador muestra un completo desconocimiento del tema y es incapaz de responder preguntas adicionales. | El presentador muestra un conocimiento limitado del tema y tiene dificultades para responder preguntas adicionales. | El presentador muestra un conocimiento básico del tema pero puede tener dificultades para responder algunas preguntas adicionales.                                                                                                                                               | El presentador muestra un buen dominio del tema y puede responder la mayoría de las preguntas adicionales con precisión.                                                                                                                                                         | El presentador demuestra un dominio completo del tema y puede responder preguntas adicionales con facilidad.                                                                                                                                                                     |
| Claridad de Respuestas       |                  | Las respuestas son tan confusas que no se puede entender el contenido presentado.                            | Las respuestas son confusas o incompletas, lo que dificulta la comprensión del tema.                                | Las respuestas son adecuadas pero pueden carecer de claridad en algunos puntos importantes.                                                                                                                                                                                      | Las respuestas son claras y en su mayoría completas, aunque pueden ser un poco ambiguas en algunos puntos.                                                                                                                                                                       | Las respuestas son claras, concisas y completas. Se demuestra un profundo entendimiento del tema.                                                                                                                                                                                |

## Penalizaciones

|         | Insuficiente (-10 cada item)                                                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Plazo   | No se ha entregado el proyecto en el plazo previsto.                                                                                                                                       |
| Entrega | No se ha entregado el código fuente en un repositorio Git o no tiene la estructura adecuada.                                                                                               |
| Github  | El número de commits realizados es mínimo o no se han realizado commits de forma regular (deben figurar commits todas las semanas no vacacionales) y por todos los integrantes del equipo. |
| Errores | El código contiene errores de sintaxis, de ejecución,...                                                                                                                                   |
| Pruebas | El número de registros de prueba es insuficiente o no es relevante                                                                                                                         |
