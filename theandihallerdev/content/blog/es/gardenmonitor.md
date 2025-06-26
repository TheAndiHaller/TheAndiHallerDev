---
title: De cero a proyecto IoT full-stack en 4 horas con IA. ¿Es este el futuro del desarrollo?
date: 2025-06-23
slug: gardenmonitor
description: Aplicación full-Stack construida con IA, desde el frontend al firmware de Arduino.
image: https://res.cloudinary.com/dzdh345nq/image/upload/v1750710512/greenhouse_q4ak1w.png
---

#### Acabo de construir un sistema IoT full-stack — desde el frontend hasta el firmware de Arduino — en solo unas horas, y casi no escribí código.

Hace unos días, mi amigo Konrad me mandó un mensaje contándome de una herramienta de IA increíble que había encontrado: [Lovable.dev](https://lovable.dev/), un sitio que crea aplicaciones web **sin escribir código**, solo con prompts. Me dejó impresionado lo bien que generó una landing page simple, así que, por supuesto, tenía que probar hasta dónde podía llegar.

Le pedí que creara una landing page sencilla para una cafetería, con login para que los clientes se registren y sumen puntos cada vez que compran algo. Un CRUD básico. De nuevo, me sorprendió lo bien que funcionó **— con solo tres prompts**, logré crear la landing e integrarla con Supabase (una plataforma de código abierto que ofrece una base de datos y herramientas de backend para simplificar el desarrollo de aplicaciones). Lo único que tuve que hacer fue crear una cuenta nueva, iniciar un proyecto y darle permiso a Lovable para acceder. ¡Una locura!

Nunca había usado Supabase — ni ninguna plataforma parecida — pero logré armar una app web funcional con base de datos en cuestión de minutos.

Naturalmente, lo siguiente tenía que ser aún más grande. Así que decidí volver a una idea vieja y finalmente hacerla realidad: **El Monitor de Invernadero**.

La idea es construir un dispositivo que monitoree un invernadero o huerta usando un ESP32 para recolectar datos de sensores, enviarlos a una base de datos y mostrar la información en una página web.

Volví a usar Lovable porque necesitaba visualizar la idea primero, y como solo se necesita un prompt para generar la interfaz, pensé: ¿por qué no? Hoy no hay reglas.

Y ya que no hay reglas, decidí entregarme por completo al **vibe-coding** y me bajé Cursor — el nuevo IDE con IA que venía queriendo probar hace tiempo.

De nuevo, me sorprendió lo fácil que fue configurarlo. Me creé una cuenta, inicié sesión, importé mi configuración de VSCode y listo — todo funcionó. Transición sin esfuerzo. Qué maravilla.

Cloné mi repo del frontend y lo abrí con Cursor. Después le pedí que integrara Supabase según los datos de sensores que quería mostrar, y lo dejé trabajar. En poco tiempo, editó el proyecto y hasta me dio el código SQL para Supabase — que, por supuesto, pegué en el editor y ejecuté sin siquiera leer **(porque esa es la vibra — o sea, vibe-coding: confiar en la IA y seguirle el ritmo)**.


¿Y qué pasó? Todo funcionó. Los datos de muestra eran visibles. 

Ahora faltaba la última parte: el código de Arduino. Inicié un nuevo proyecto de PlatformIO desde Cursor y escribí un prompt para que creara el programa. Le pasé los sensores que quería usar y la estructura SQL como contexto. Generó el código en un instante.

El último paso era crear una Edge Function en Supabase para recibir los datos y almacenarlos. ¿Adiviná qué hice? Exacto — se lo pedí a Cursor, y lo hizo. ¡Todo quedó listo!

¿Funcionó a la primera? No del todo. Hubo pequeños errores en casi cada paso — pero nada grave. Tuve que corregir algunas cosas a mano, más que nada porque me resultaba más rápido hacerlo que explicárselo a la IA. Pero funcionó. **Un proyecto IoT full-stack, hecho de punta a punta con vibe-coding**.

Todavía no puedo creer lo rápido que lo hice. Tal vez 4 horas en total, de principio a fin.

¿Escalará? No lo sé.  
¿Es seguro? Ni idea.  
Solo hojeé el código, y no tengo experiencia con RLS, roles ni reglas para verificar si mi base de datos es segura.

---

### Pero ahora viene la verdadera pregunta: ¿a dónde lleva todo esto?

¿Así es como se van a hacer las cosas de ahora en más?  
¿Realmente van a reemplazar a los desarrolladores?  
¿Soy un traidor a mi especie?

No tengo las respuestas. Lo que sé es que construí algo que probablemente no habría terminado solo — en tiempo récord — usando herramientas que apenas entendía. Eso es a la vez emocionante y un poco aterrador.

Definitivamente voy a seguir explorando herramientas como Lovable y Cursor. ¿Qué pensás de esta nueva forma de programar? ¿Es el vibe-coding el futuro… o un atajo del que nos vamos a arrepentir?

Si quieres ver el resultado, visita: [Greenhouse Monitor](https://garden.theandihaller.com/)