# Task Traker (CLI app)

La aplicacón de debe correr en la linea de comandos, aceptar acciones y entradas por parte del usuario y almacenar las tareas en un archivo JSON. El usuario deberia poder:

- Agregar, actualizar y eleminar tareas
- Marcar una tarea como en progreso o completada
- Enlistar todas las tareas
- Enlistar las tareas completadas
- Enlistar las tareas pendientes
- Enlistar las tareas en progreso

```
// Añadir una tarea
node main.js add "Buy groceries"

// Actualizado y elimando una tarea
node main.js update 1 "Buy groceries and cook dinner"
node main.js delete 1

// Marcar tarea como en progreso o completada
node main.js mark-in-progress 1
node main.js mark-done 1

// Enlistando todas las tareas
node main.js list

// Enlistando las tareas por estado
node main.js list done
node main.js list in-progress
```

Este proyecto esta inspirado en la listas de proyectos de [roadmap.sh](https://roadmap.sh/backend/projects).