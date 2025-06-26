---
title: Trackeen
date: 2025-06-26
slug: trackeen
description: Trackeen es un dispositivo portátil de seguimiento de hábitos, desarrollado con ESP32 y programado en C++ usando PlatformIO.
image: https://res.cloudinary.com/dzdh345nq/image/upload/v1730816589/git/trackeen.jpg
---


### Trackeen: Un dispositivo de seguimiento de hábitos simple, inteligente y conectado

Durante los últimos meses, he estado trabajando en el desarrollo de un dispositivo que busca resolver un problema cotidiano pero profundamente personal: **crear y mantener hábitos de forma consistente**. Así nació **Trackeen**, un pequeño compañero digital que ayuda a las personas a mantenerse alineadas con sus objetivos sin depender del teléfono ni de aplicaciones complejas.

![Trackeen Actualizando](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_1_qckvyg.jpg)

## ¿Por qué Trackeen?

En un mundo saturado de notificaciones y distracciones, muchas personas buscan formas más simples y conscientes de organizar su vida. Las apps móviles para crear hábitos son útiles, pero a menudo terminan olvidadas entre cientos de otras. Además, interactuar con el celular constantemente puede romper la intención de enfocarse en una rutina saludable.

Trackeen nació para cubrir esta necesidad: **una herramienta física, dedicada exclusivamente al seguimiento de hábitos**, sin distracciones, sin redes sociales, sin ruido.

![Trackeen en proceso](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_2_ilftul.jpg)

## ¿Qué es Trackeen?

**Trackeen es un dispositivo portátil basado en ESP32**, programado con Arduino / C++ en PlatformIO, que permite registrar hábitos de forma manual mediante una interfaz simple. Cada vez que el usuario realiza una acción importante —como meditar, hacer ejercicio o beber agua— puede registrarla directamente en el dispositivo.  

Gracias a su **pantalla e-ink** de ultra bajo consumo, el dispositivo puede mostrar la información esencial sin agotar la batería, y permanecer encendido durante semanas con una sola carga. Esta pantalla también permite mostrar recordatorios visuales suaves, sin emitir luz artificial ni generar distracción.

Trackeen emite **recordatorios visuales y auditivos**, en momentos estratégicos, para mantener al usuario enfocado en sus hábitos clave. Además, el dispositivo puede configurarse para mostrar estadísticas básicas del progreso diario o semanal.

![Trackeen siendo armados](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_3_ntnail.jpg)

## Sincronización inteligente con la nube

Una de las características más potentes del sistema es su capacidad de conectarse a internet mediante Wi-Fi para **sincronizar los datos con Google Sheets en tiempo real**, usando la API de Google. De esta manera, el usuario no solo conserva una copia local de su progreso, sino que también puede **visualizar y analizar sus datos desde cualquier dispositivo**. Esta integración elimina la necesidad de aplicaciones intermedias y facilita el análisis desde herramientas familiares como Google Sheets o Google Data Studio.

![Trackeen distintos colores](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_4_fgrhdi.jpg)

## Características técnicas

- **Plataforma:** ESP32 programado en C++ con PlatformIO  
- **Pantalla:** e-ink de bajo consumo (ePaper)  
- **Conectividad:** Wi-Fi con autenticación OAuth2 para enviar datos a Google Sheets  
- **Interfaz de usuario:** botones físicos y menú en pantalla  
- **Recordatorios:** sonido, íconos visuales  
- **Sincronización:** en tiempo real con la nube vía API  
- **Actualización remota:** compatible con actualizaciones OTA mediante una API propia  
- **Consumo energético:** optimizado para uso prolongado gracias a modos de bajo consumo del ESP32  

## Un desarrollo personal y técnico

Como **Co-Fundador y único desarrollador** del proyecto, me he encargado de todo el sistema técnico: desde la planificación de la arquitectura del firmware, la programación del ESP32, la gestión energética, la integración con servicios de Google, hasta el desarrollo de herramientas internas para desplegar actualizaciones remotas.

Trabajé codo a codo con mi socio Konrad, quien lidera la parte comercial, mientras yo asumí la totalidad del desarrollo e implementación técnica. Fue un proyecto desafiante, que me permitió combinar mis intereses en electrónica, software embebido, diseño de productos y automatización de flujos de trabajo en la nube.

![Andi y Konrad en un meeting](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_5_wg5qyy.jpg)

---

**Trackeen es, ante todo, una herramienta hecha con intención.**  
No busca reemplazar tu teléfono, sino ayudarte a reconectar con tus metas sin distracciones.  
Su sencillez es su mayor fortaleza: un dispositivo pequeño, elegante, enfocado en una sola cosa — ayudarte a mantener el rumbo.
