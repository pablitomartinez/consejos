# Proyecto de Consejos con Fondo de Tormenta

Este proyecto es una aplicación web sencilla en Next.js que muestra consejos aleatorios con un botón interactivo. La aplicación utiliza un fondo de video de tormenta para crear una atmósfera sombría y dramática, y resalta los consejos en primer plano con un estilo visual impactante.

## Características

- **Consejos Aleatorios**: Al hacer clic en el botón “¿Querés un consejo?”, la aplicación muestra un consejo aleatorio en español.
- **Fondo de Video**: La aplicación usa un video de tormenta en bucle como fondo, generando una atmósfera tenebrosa y envolvente.
- **Estilo Visual Dramático**: El consejo aparece con un efecto de “sangre” y un parpadeo animado, haciendo contraste con el fondo oscuro.

## Captura de Pantalla

![Captura de Pantalla](screenshot.png) <!-- Puedes agregar una captura si deseas -->

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tuusuario/proyecto-consejos-tormenta.git
   cd proyecto-consejos-tormenta
Instala las dependencias:

bash
Copiar código
npm install
Inicia la aplicación en modo desarrollo:

bash
Copiar código
npm run dev
Abre http://localhost:3000 en tu navegador para ver el proyecto.

Archivos Principales
public/tormenta.mp4: Video de fondo que representa una tormenta en bucle.
app/page.tsx: Página principal que contiene el botón interactivo y muestra los consejos aleatorios.
Uso
Al abrir la aplicación, verás un botón grande en el centro que dice “¿Querés un consejo?”.
Haz clic en el botón para recibir un consejo en español.
El fondo de video de tormenta se reproduce en bucle y sin sonido, generando el ambiente dramático.
Personalización
Fondo: Puedes cambiar el video tormenta.mp4 en la carpeta public para usar cualquier otro video de fondo.
Estilo: Modifica el archivo app/page.tsx para ajustar colores, efectos o la animación de los consejos.
Créditos
Advice Slip API: La aplicación consume datos de la Advice Slip API para obtener consejos aleatorios.
Video de Tormenta: [Agrega la fuente si usaste un video gratuito de plataformas como Pexels o Pixabay].
Licencia
Este proyecto es de uso libre para fines personales o educativos. Si decides usarlo o modificarlo, ¡se agradecen las contribuciones y menciones!