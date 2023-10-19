# Pokédex 〽️

Este es un proyecto realizado para la empresa **VINCO ORBIS** para la posición **"FRONT END"**.

![Project view](/public/demo.gif)

## Capturas de pantalla. 📷

Pantalla de inicio de la app.
![screen 1](/public/screen-1.png)
<br/>

Pantalla mostrando los detalles del pokémon.
![screen 2](/public/screen-2.png)
<br/>

Pantalla mostrando el menu desplegable que contiene la colección de pokemon que ha creado el usuario.
![screen 3](/public/screen-3.png)
<br/>

Pantalla mostrando una gráfica con los tipos de pokémon en base a los de su colección.
![screen 4](/public/screen-4.png)

## Principales características. 🧐

- [x] Buscar pokémon por nombre.
- [x] Agregar pokémon a la colección desde los resultados de busqueda.
- [x] Ver el listado de pokemon que se han agregado a la colección.
- [x] Eliminar pokémon de la colección.
- [x] Eliminar todos los pokemones de la colección, en una sola acción.
- [x] Observar una gráfica que contenga los tipos de pokémon de acuerdo con el conteo que se encuentre en mi colección.
- [x] Almacenar la colección de pokemon en el **local storage**

## Tecnologías usadas. 🧪

- React JS v.18.
- Vite JS.
- Zustand
- Tailwind CSS.

## Instalación. 🚀

### Requerimientos para la instalación.

Tener instalado en tu dispositivo:

- [Node JS](https://nodejs.org/en) versión >= 16
- [Git](https://git-scm.com/)

#### 1. Clonar el repositorio.

Usando [Git](https://git-scm.com/), ejecutamos el siguiente comando en la terminal, el la carpeta donde quiera clonar el proyecto

```bash
 git clone https://github.com/Franklin361/pokedex
```

### 2. Instalar dependencias.

Ejecuta este comando para instalar las dependencias del proyecto.

```bash
 npm install
```

### 3. Levantar el servidor de desarrollo.

Ejecute este comando para levantar el servidor de desarrollo.

```bash
 npm run dev
```

### 4. Ejución de pruebas.

Para ejecutar las pruebas debe haber seguido todos los pasos anteriores sobre la instalación del proyecto.

#### Antes de ejecutar las pruebas ...

Primero debe tener levantado el servidor de desarrollo, usando el siguiente comando que se mostro anteriormente.

Esto es debido a que las pruebas son **end-to-end** (usando [playwright](https://playwright.dev/))

```bash
 npm run dev
```

#### Ejecute este comando para correr las pruebas

Una vez levantado el servidor de desarrollo, puede ejecutar el siguiente comando para correr las pruebas.

```bash
 npm run test
```

_En la consola le mostrará los resultados._

## Enlaces. ⛓️

Demostración en vivo de la app
🔗 **https://pokedex-franklin-mtz.netlify.app/**
