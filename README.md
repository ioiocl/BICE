# BICE

#Intro :

Esta App toma los valores del cobre desde este endpoint https://www.indecon.online/values/cobre  y calcula 
la media movil simple para 5 y 20 dias.  Este gráfico junto al precio spot es desplegado en pantalla via google charts.
Esta App esta construida con React/Redux en el frontend y NodeJS en el backend mas la libreria tulind para obtener los indicadores financieros.


#Instalación

Ingresar a cada directorio (front y back) y ejecutar : npm i

Luego acceder al front desde la siguiente url : http://localhost:3000/
Para ver el resultado de la api : http://localhost:3001/api/quotes
Y la documentación swagger : http://localhost:3001/documentation
