# Task Traker (CLI app)

La aplicacón de debe correr en la linea de comandos, aceptar acciones y entradas por parte del usuario y almacenar las tareas en un archivo JSON. El usuario deberia poder:

- Agregar, actualizar y eleminar tareas
- Marcar una tarea como en progreso o completada
- Enlistar todas las tareas
- Enlistar las tareas completadas
- Enlistar las tareas pendientes
- Enlistar las tareas en progreso

```javascript
// Añadir una tarea
node index.js add "Buy groceries"

// Actualizado y elimando una tarea
node index.js update 1 "Buy groceries and cook dinner"
node index.js delete 1

// Marcar tarea como en progreso o completada
node index.js mark-in-progress 1
node index.js mark-done 1

// Enlistando todas las tareas
node index.js list

// Enlistando las tareas por estado
node index.js list done
node index.js list in-progress
```

Este proyecto esta inspirado en la listas de proyectos de [roadmap.sh](https://roadmap.sh/backend/projects).