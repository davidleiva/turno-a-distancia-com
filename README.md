<span class="c0">Turno A Distancia - Miniaplicación Conversacional para Gestión de Turnos</span>

<span class="c0"></span>

<span class="c0">El post-coronavirus genera un problema para los gestores de espacios públicos y privados que gestionan grandes cantidades de gente mediante turnos en espacios cerrados.</span>

<span class="c0"></span>

<span class="c0">Estos espacios no están diseñados ni preparados para el distanciamiento social necesario en estas épocas. Sin embargo la gente se ve obligada a aglomerarse en dichos espacios para no perder su turno.</span>

<span class="c0"></span>

<span class="c0">Es por ello que proponemos una solución para que las personas puedan realizar el seguimiento de la cola y conocer su turno, a distancia a travé de Whatsapp.</span>

<span class="c0"></span>

<span class="c0">Al mismo tiempo se crea un sencilla extensión para el navegador de Chrome de manera que cualquier persona encargada de actualizar los turnos, lo puedan hacer sin la necesidad de ningún hardware adicional.</span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0">FUNCIONAMIENTO:</span>

<span class="c0"></span>

<span class="c0">Por parte del Gestor del Espacio Público:</span>

<span class="c0"></span>

1.  <span class="c0">Genera un código QR, a través de la página Turnoadistancia.com con el código/password, y el teléfono en el que se encuentra el bot de Whatsapp</span>
2.  <span class="c0">La generación del QR también ofrece un archivo PDF con el que facilita el escaneo</span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0">Por parte del Usuario:</span>

<span class="c0"></span>

1.  <span class="c0">Escanea el código QR</span>
2.  <span class="c0">Activa el enlace (url) que le redirecciona a la aplicación de Whatsapp con el código/Password preescrito</span>
3.  <span class="c0">Sin editar nada, envía el código/Password</span>
4.  <span class="c0">Este inicializa el bot, y si el código/Password es correcto, se iniciará el bot</span>
5.  <span class="c0">Le ofrecerá las diferentes gestiones que puede realizar en el establecimiento</span>
6.  <span class="c0">Selecciona el número indicado</span>
7.  <span class="c0">Se le asigna el número y se le informa del estado actual de los turnos</span>
8.  <span class="c0">Si desea volver a informarse del estado actual de los turnos, solo ha de escribir y enviar la palabra “Cola”</span>

<span class="c0"></span>

<span class="c0">Por parte del responsable de la cola que da paso al siguiente:</span>

<span class="c0"></span>

1.  <span class="c0">Selecciona el icono de la extensión de Turnoadistancia</span>
2.  <span class="c0">Escribe el código/password</span>
3.  <span class="c0">Se le mostrará el gestor con las diferentes areas</span>
4.  <span class="c0">Con apretar el botón de su área, dará paso a la siguiente persona</span>
5.  <span class="c0">Al final del día puede resetear los datos y números  

    </span>

<span class="c0">CONSTRUCCIÓN PROTOTIPO FUNCIONAL</span>

<span class="c0"></span>

<span class="c0">El proyecto se ha realizado para demostrar la posibilidad de ofrecer una manera segura y eficiente de gestionar espacios. Para ello en un tiempo limitado y con un equipo reducido, hemos decido un acercamiento lean a la hora de la construcción, por ello hemos escogido:</span>

<span class="c0"></span>

<span class="c0">BOT DE WHATSAPP: Landbot.io</span>

<span class="c0"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 245.86px; height: 531.50px;">![](images/pic_landbot.jpg)</span>

<span class="c0"></span>

<span class="c0">Landbot ofrece la posibilidad de crear de manera sencilla y rápida un bot, con su playground. Sin embargo está limitado a que solo un usuario pueda interactuar con el bot, el cual ha asociado su número al playground.</span>

<span class="c0"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 338.67px;">![](images/pic_bot.png)</span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0">BASE DE DATOS: Airtable.</span>

<span class="c0"></span>

<span class="c0">Con Airtable y su API hemos podido crear en un espacio muy reducido de tiempo, un esqueleto de un modelo de datos, que se podría construir en otro servicio como Mongo.</span>

<span class="c0"></span>

<span class="c0"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 602.00px; height: 229.33px;">![](images/pic_airtable.png)</span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0">API y LOGICA: Google Cloud Functions</span>

<span class="c0"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 329.00px; height: 162.00px;">![](images/pic_cloud.png)</span>

<span class="c0"></span>

<span class="c0">Construidas con Node.js, ofrecen una manera ligera de comunicar BOT <-> Base de Datos, Extensión <-> Base de Datos</span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0">Chrome Extension: Vanilla JS, HTML, CSS y Chrome Browser API</span>

<span class="c0"></span>

<span class="c0">La extensión ha sido creada para cubrir las funcionalidades básicas y lo más generalistas y para poder atender el mayor número de casos</span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0"></span>

<span class="c0">Home:</span>

<span class="c0"></span>

<span class="c0">Hemos generado una mínima app en react. En principio esta App trabajaba con una api en node y una base de datos en mongo, pero por no tener tiempo ni recursos suficientes nos decidimos por optar por un prototipo mínimo, mostrando simplemente el look and feel y funcionalidades mínimas, con la vista puesta a una futura implementación al 100%.</span>