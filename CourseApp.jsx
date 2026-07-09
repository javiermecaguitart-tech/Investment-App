import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft, ChevronRight, Check, Circle, BookOpen, PenLine, Award, Menu, X,
  RotateCcw, Eye, EyeOff, Lightbulb, FlaskConical, Calculator, Newspaper,
  Sparkles, AlertTriangle, ClipboardCheck, MessageCircleQuestion, Flame,
} from "lucide-react";

/* =========================================================================
   TOKENS — v4 "VAULT", identidad propia oscura inspirada en apps fintech
   pero sin ser una copia directa de ninguna.
   Fondo: violeta-negro muy oscuro (#0D0B14) con glows difuminados de color,
   no negro puro ni textura de código.
   Acento principal: ámbar/dorado eléctrico (#FFB020) — evoca inversión/
   riqueza sin ser el verde-neón típico de fintech.
   Acento secundario: cian frío (#4DE8E0) para datos/cifras complementarias.
   Paleta por sección de contenido (modo oscuro, con glow sutil):
     · Explicación sencilla → lavanda   (#B794F6)
     · Explicación técnica  → azul cielo (#7DD3FC)
     · Ejemplo numérico     → ámbar     (#FFB020)
     · Ejemplo real         → cian      (#4DE8E0)
     · Analogía             → rosa      (#F0A6CA) — en Fraunces itálica, firma propia
     · Errores habituales   → coral     (#FF7A6E)
     · Resumen final        → verde menta (#6EE7B7)
   Tipografía: Space Grotesk (TODO lo display: títulos, badges, cifras — nunca
   monoespaciada de código) + Inter (cuerpo de texto) + Fraunces itálica
   (solo analogías, como detalle editorial distintivo).
   ========================================================================= */

const FONTS_LINK =
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=Fraunces:ital,wght@1,500;1,600&display=swap";

const PAGE_BG_STYLE = {
  backgroundColor: "#0D0B14",
  backgroundImage:
    "radial-gradient(ellipse 700px 500px at 10% -5%, rgba(183,148,246,0.14), transparent 60%)," +
    "radial-gradient(ellipse 600px 500px at 100% 15%, rgba(255,176,32,0.09), transparent 58%)," +
    "radial-gradient(ellipse 650px 550px at 15% 100%, rgba(77,232,224,0.08), transparent 58%)",
  backgroundAttachment: "fixed, fixed, fixed",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
};

/* Paleta por tipo de bloque de lección: color de acento + icono (modo oscuro) */
const BLOCK_STYLES = {
  simple: { accent: "#B794F6", label: "Explicación sencilla", icon: Lightbulb },
  technical: { accent: "#7DD3FC", label: "Explicación técnica", icon: FlaskConical },
  numericExample: { accent: "#FFB020", label: "Ejemplo numérico", icon: Calculator },
  realExample: { accent: "#4DE8E0", label: "Ejemplo real", icon: Newspaper },
  analogy: { accent: "#F0A6CA", label: "Analogía", icon: Sparkles },
  mistakes: { accent: "#FF7A6E", label: "Errores habituales", icon: AlertTriangle },
  summary: { accent: "#6EE7B7", label: "Resumen final", icon: ClipboardCheck },
};

const CARD_BG = "#15121F";
const CARD_BORDER = "#26202F";
const TEXT_PRIMARY = "#F5F3FA";
const TEXT_MUTED = "#9089A3";
const TEXT_FAINT = "#6B6478";
const AMBER = "#FFB020";
const CYAN = "#4DE8E0";

/* ========================================================================= 
   CONTENIDO DEL CURSO
   ========================================================================= */

const COURSE = {
  title: "Curso de Inversión desde Cero",
  subtitle: "Camino a la independencia financiera — 20 años",
  modules: [
    {
      id: "m0",
      number: 0,
      title: "El dinero, la inflación y el interés compuesto",
      objective:
        "Entender qué es realmente el dinero, por qué pierde valor con el tiempo, y por qué el interés compuesto es la fuerza más importante que vas a usar en los próximos 20 años.",
      time: "3 sesiones de ~35 min",
      prereq: "Ninguno.",
      learn:
        "A pensar en el dinero como una herramienta con \"fecha de caducidad\" en valor, a calcular el efecto de la inflación, y a proyectar tu propio camino a la independencia financiera con interés compuesto.",
      lessons: [
        {
          id: "m0l1",
          title: "Qué es el dinero",
          simple:
            "El dinero no es riqueza. Es un intermediario: un billete que dice \"confía en mí, esto vale algo\", que existe para no tener que hacer trueque directo (cambiar patatas por zapatos).",
          technical: `El dinero cumple tres funciones económicas:

1. Medio de intercambio: permite comprar/vender sin trueque directo.
2. Unidad de cuenta: permite comparar el valor de cosas distintas (un café = 2€, un libro = 15€).
3. Depósito de valor: permite "guardar" poder adquisitivo para el futuro.

Aquí está la clave que te acompañará todo el curso: el dinero es un pésimo depósito de valor a largo plazo. Falla justo en la función 3. Por eso existe la inversión: para arreglar ese fallo.

El dinero moderno (fiat) no está respaldado por oro ni nada físico. Vale porque un banco central lo dice y porque todos aceptamos que vale. Los bancos centrales pueden crear más dinero, y cuando lo hacen, cada unidad vale un poco menos. Eso conecta directamente con la inflación.`,
          numericExample:
            "Imagina una isla con 100 conchas en circulación y 100 cocos para vender. Cada coco cuesta 1 concha. Si aparecen 100 conchas más sin que haya más cocos, ahora hay 200 conchas para 100 cocos: el precio tiende a subir a 2 conchas por coco. Ningún coco nuevo se ha creado, solo dinero. Eso es, en esencia, lo que pasa cuando un banco central \"imprime\" dinero.",
          realExample:
            "Entre 2020 y 2022, la Reserva Federal de EE.UU. y el BCE inyectaron cantidades masivas de dinero en la economía para sostenerla durante el COVID. Una de las consecuencias (no la única) fue la inflación más alta en 40 años en 2022.",
          analogy:
            "El dinero es como el hielo. Si lo dejas quieto (en una cuenta corriente sin invertir), se va derritiendo poco a poco aunque tú no hagas nada. Invertir es meter ese hielo en un congelador que, además, lo hace crecer.",
          mistakes: [
            "Pensar que \"ahorrar en el banco\" es lo mismo que \"no perder dinero\". En términos de poder adquisitivo, normalmente sí pierdes.",
            "Confundir precio con valor. El precio de algo puede subir solo porque el dinero vale menos, no porque esa cosa sea más valiosa.",
          ],
          summary:
            "El dinero es una herramienta de intercambio, no un almacén de riqueza fiable. Su cantidad puede aumentar, y cuando lo hace más rápido que los bienes y servicios disponibles, pierde valor. Esto es el origen de la inflación, y es la razón número uno por la que \"no invertir\" también es una decisión de riesgo.",
          exercises: {
            quiz: [
              {
                q: "¿Cuál de estas NO es una función del dinero?",
                options: [
                  "Medio de intercambio",
                  "Generador automático de riqueza",
                  "Depósito de valor",
                  "Unidad de cuenta",
                ],
                correct: 1,
                explain:
                  "El dinero en sí mismo no genera riqueza: solo la representa o la traslada en el tiempo. Para que \"crezca\" hace falta invertirlo en algo productivo (empresas, propiedades, etc.). Sus tres funciones reales son medio de intercambio, unidad de cuenta y depósito de valor.",
              },
              {
                q: "Si un banco central duplica la cantidad de dinero en circulación sin que aumente la producción de bienes, lo más probable es que:",
                options: [
                  "Los precios bajen",
                  "Los precios suban",
                  "No pase nada",
                  "El dinero valga el doble",
                ],
                correct: 1,
                explain:
                  "Más dinero persiguiendo la misma cantidad de bienes tiende a subir los precios (más conchas para los mismos cocos). Es una simplificación —hay más factores en la economía real— pero es la lógica base de la inflación monetaria.",
              },
            ],
            cases: [
              {
                prompt:
                  "Tienes 10.000€ en una cuenta corriente que da 0% de interés. La inflación de ese año es del 4%. En términos de lo que puedes comprar con ese dinero dentro de un año, ¿tienes más, menos o lo mismo? ¿Por qué?",
                solution:
                  "Tienes menos poder adquisitivo, aunque sigas viendo \"10.000€\" en la cuenta. Con un 4% de inflación, lo que hoy cuesta 10.000€ costará aproximadamente 10.400€ dentro de un año. Tus 10.000€ ya no llegan a comprar lo mismo: has perdido, en términos reales, alrededor de un 4% de poder de compra, aunque el número en la pantalla del banco no haya cambiado.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Si hoy una cesta de la compra cuesta 100€ y la inflación anual es del 3%, ¿cuánto costará esa misma cesta dentro de 1 año? ¿Y dentro de 2 años? (pista: no es simplemente sumar 3% + 3%)",
                solution:
                  "Año 1: 100 × 1,03 = 103€.\nAño 2: 103 × 1,03 = 106,09€ (no 106€).\n\nLa inflación se acumula de forma compuesta, igual que el interés: cada año se aplica sobre el precio ya inflado del año anterior, no sobre el precio original. Esta idea de \"crecimiento sobre crecimiento\" es exactamente la misma que verás en la próxima lección con el interés compuesto — es el mismo mecanismo matemático, jugando en tu contra en vez de a tu favor.",
              },
            ],
            reflection:
              "Antes de esta lección, ¿pensabas en \"ahorrar dinero en el banco\" como una forma segura de no perder valor? ¿Cambia algo tu percepción después de esta lección?",
          },
        },
        {
          id: "m0l2",
          title: "Inflación en profundidad",
          simple:
            "La inflación es la subida generalizada de precios con el tiempo, lo que significa que cada euro que tienes compra un poco menos cada año. No es que las cosas valgan más: es que el dinero vale menos.",
          technical: `La inflación se mide normalmente con el IPC (Índice de Precios de Consumo), una cesta representativa de bienes y servicios que se sigue en el tiempo. En España lo publica el INE; en la Eurozona, Eurostat (HICP).

Distingue dos conceptos clave:
- Rentabilidad nominal: lo que gana tu dinero en número absoluto (ej. tu cuenta da 2%).
- Rentabilidad real: lo que gana tu dinero descontando la inflación (rentabilidad nominal − inflación, aproximadamente).

Fórmula aproximada: rentabilidad real ≈ rentabilidad nominal − inflación.
Fórmula exacta (efecto Fisher): (1 + real) = (1 + nominal) / (1 + inflación).

Esto es la razón central por la que "invertir" no es opcional si quieres mantener o aumentar tu poder adquisitivo a 20 años vista: la inflación histórica media ronda el 2-3% anual en economías desarrolladas, y una cuenta corriente da 0%. Eso es una pérdida garantizada de poder adquisitivo, año tras año, de forma silenciosa.`,
          numericExample:
            "Con una inflación media del 3% anual, un capital que no se invierte pierde aproximadamente la mitad de su poder adquisitivo cada 23-24 años (regla del 72: 72 ÷ 3 ≈ 24). Es decir: 20.000€ guardados hoy \"bajo el colchón\" comprarán, dentro de 24 años, más o menos lo que hoy compran 10.000€.",
          realExample:
            "En España, la inflación interanual llegó a superar el 10% en 2022, el nivel más alto en varias décadas, impulsada por la energía y los alimentos tras la pandemia y la guerra en Ucrania. Quien tuviera sus ahorros solo en una cuenta corriente ese año perdió poder adquisitivo de forma muy visible.",
          analogy:
            "La inflación es como una fuga lenta en un neumático. No estalla de golpe, pero si nunca lo revisas, un día notas que el coche va raro (o, en este caso, que tu dinero ya no llega a fin de mes como antes).",
          mistakes: [
            "Fijarse solo en la rentabilidad nominal (\"mi cuenta me da 1%\") sin restar la inflación para ver la rentabilidad real.",
            "Pensar que la inflación afecta igual a todo el mundo por igual: en realidad varía según en qué gastes tu dinero (la cesta de cada persona es distinta a la cesta oficial del IPC).",
          ],
          summary:
            "La inflación reduce silenciosamente el poder adquisitivo del dinero no invertido. Lo relevante no es cuánto gana tu dinero en números absolutos, sino cuánto gana descontando la inflación (rentabilidad real). Esto es el argumento económico central para invertir a largo plazo en vez de ahorrar sin más.",
          exercises: {
            quiz: [
              {
                q: "Si tu cuenta de ahorro da un 1% de interés nominal y la inflación es del 3%, tu rentabilidad real aproximada es:",
                options: ["+4%", "+1%", "−2%", "0%"],
                correct: 2,
                explain:
                  "Rentabilidad real ≈ nominal − inflación = 1% − 3% = −2%. Aunque tu saldo crece en euros, pierdes poder adquisitivo cada año.",
              },
              {
                q: "¿Qué mide, aproximadamente, el IPC en España?",
                options: [
                  "El precio medio de la vivienda",
                  "La evolución de los precios de una cesta representativa de bienes y servicios",
                  "El sueldo medio de los españoles",
                  "El valor del euro frente al dólar",
                ],
                correct: 1,
                explain:
                  "El IPC (Índice de Precios de Consumo), publicado por el INE, sigue en el tiempo el coste de una cesta representativa de bienes y servicios de consumo habitual.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un familiar te dice: \"Yo no invierto, prefiero tener mi dinero seguro en el banco, así no pierdo nada.\" Con lo aprendido en esta lección, ¿qué le responderías? (no hay una única respuesta correcta, razona tu postura)",
                solution:
                  "Una respuesta sólida reconocería que el dinero en el banco está \"seguro\" en el sentido de que el número no baja (no hay riesgo de pérdida nominal, y hasta 100.000€ está además cubierto por el Fondo de Garantía de Depósitos). Pero eso no es lo mismo que no perder valor: si la inflación supera el interés que da esa cuenta, el poder adquisitivo cae de forma silenciosa y prácticamente garantizada. \"Seguro\" en euros no es lo mismo que \"seguro\" en lo que esos euros pueden comprar. La idea no es decir que invertir no tenga riesgo (lo tiene, lo veremos en el Módulo 1), sino que no invertir también tiene un riesgo, solo que menos visible.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Tienes 15.000€ guardados sin invertir. Suponiendo una inflación constante del 3% anual, usa la regla del 72 para estimar en cuántos años ese dinero habrá perdido aproximadamente la mitad de su poder adquisitivo.",
                solution:
                  "Regla del 72: 72 ÷ 3 = 24 años. En unos 24 años, tus 15.000€ tendrán un poder de compra similar al que hoy tienen unos 7.500€, aunque en el banco sigas viendo \"15.000€\". Con tus horizontes de inversión a 20 años, este es casi exactamente tu marco temporal: por eso la decisión de invertir (o no) pesa tanto en tu caso concreto.",
              },
            ],
            reflection:
              "Piensa en tu propio gasto mensual: ¿crees que tu \"inflación personal\" (lo que realmente encareces tú) es mayor, menor o similar al IPC oficial? ¿Por qué?",
          },
        },
        {
          id: "m0l3",
          title: "Interés compuesto",
          simple:
            "El interés compuesto es \"ganar intereses sobre los intereses ya ganados\", no solo sobre el dinero inicial. Con el tiempo, este efecto se vuelve enorme, casi contraintuitivo.",
          technical: `Fórmula del interés compuesto:

VF = VI × (1 + r)^n

Donde:
VF = Valor futuro
VI = Valor inicial (capital invertido)
r = rentabilidad anual (en tanto por uno, ej. 7% = 0,07)
n = número de años

La diferencia clave frente al interés simple es que en el interés simple los intereses se calculan siempre sobre el capital inicial, mientras que en el compuesto se calculan sobre el capital inicial MÁS los intereses acumulados de años anteriores. Es crecimiento exponencial, no lineal.

Esto tiene una implicación práctica enorme para tu horizonte de 20 años: el tiempo pesa más que el importe inicial. Empezar antes, aunque sea con menos dinero, suele ganar a empezar más tarde con más dinero, porque el interés compuesto necesita tiempo para "acelerar". Los primeros años de una inversión a largo plazo generan poco en términos absolutos; los últimos años son los que hacen la mayor parte del trabajo.`,
          numericExample:
            "Inviertes 10.000€ a una rentabilidad media anual del 7% (aproximación histórica de una cartera diversificada en renta variable global a muy largo plazo, sin garantía de repetirse):\n\n• Año 1: 10.000 × 1,07 = 10.700€\n• Año 10: 10.000 × 1,07^10 ≈ 19.672€\n• Año 20: 10.000 × 1,07^20 ≈ 38.697€\n\nFíjate: en los primeros 10 años ganas cerca de 9.672€. En los segundos 10 años (sin aportar nada más), ganas cerca de 19.025€ — el doble, con el mismo capital inicial y el mismo número de años, simplemente porque el capital sobre el que se calcula el interés ya es mucho mayor.",
          realExample:
            "Es el argumento detrás de \"empezar joven\" en inversión. Dos personas invierten 200€/mes al 7% anual: una empieza a los 25 y para a los 35 (invierte 10 años, deja crecer 30 más). Otra empieza a los 35 y aporta hasta los 65 (invierte 30 años seguidos). Sorprendentemente, la primera persona —que aportó mucho menos dinero total— suele acabar con un capital similar o mayor, porque su dinero tuvo más años para componer.",
          analogy:
            "El interés compuesto es como una bola de nieve rodando cuesta abajo. Al principio es pequeña y crece despacio. Pero cuanto más grande se hace, más nieve recoge por cada vuelta que da — hasta que en los últimos metros de la cuesta crece muchísimo más rápido que al principio, sin que la pendiente haya cambiado.",
          mistakes: [
            "Subestimar el efecto por pensar en porcentajes pequeños (\"solo es un 7% al año\") sin proyectar a 20-30 años, donde el efecto exponencial se vuelve grande.",
            "Esperar a tener \"más dinero\" para empezar a invertir, cuando el tiempo perdido suele pesar más que el importe inicial.",
            "Retirar el dinero invertido en los primeros años por impaciencia, justo cuando el efecto compuesto todavía no ha \"despegado\" — se corta el proceso antes de que dé sus mejores frutos.",
          ],
          summary:
            "El interés compuesto hace que el dinero crezca de forma exponencial, no lineal, porque generas rendimientos sobre rendimientos previos. El tiempo es la variable más poderosa de la fórmula: cuanto antes empieces, más años tiene tu dinero para componer, y los últimos años de una inversión larga son los que más aportan en términos absolutos.",
          exercises: {
            quiz: [
              {
                q: "¿Cuál es la diferencia esencial entre interés simple e interés compuesto?",
                options: [
                  "El compuesto solo se aplica a acciones, el simple a bonos",
                  "El compuesto calcula intereses también sobre los intereses ya ganados; el simple solo sobre el capital inicial",
                  "No hay diferencia real, es solo terminología distinta",
                  "El simple es siempre mayor que el compuesto",
                ],
                correct: 1,
                explain:
                  "Esa es exactamente la diferencia: el interés compuesto reinvierte las ganancias anteriores, generando un crecimiento exponencial en vez de lineal.",
              },
              {
                q: "En una inversión a 20 años con rentabilidad constante, ¿en qué tramo se genera más ganancia en términos absolutos (asumiendo que no se retira ni aporta nada más)?",
                options: [
                  "En los primeros 5 años",
                  "Es igual en todos los tramos",
                  "En los últimos años del periodo",
                  "Depende únicamente de la inflación",
                ],
                correct: 2,
                explain:
                  "Debido al crecimiento exponencial, el capital acumulado es mayor en los últimos años, así que el mismo porcentaje de rentabilidad genera una cantidad absoluta de dinero mucho mayor al final que al principio.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un amigo te dice: \"Voy a esperar a los 35 para empezar a invertir, ahora prefiero disfrutar el dinero, total, son solo 10 años de diferencia.\" ¿Qué le explicarías con lo aprendido sobre interés compuesto?",
                solution:
                  "Los primeros años de una inversión a largo plazo son los que menos aportan en términos absolutos, pero son estructuralmente necesarios para que el efecto compuesto tenga tiempo de \"acelerar\" después. Perder 10 años al principio no es perder 10 años cualquiera: es perder la parte de la curva sobre la que se construye todo el crecimiento exponencial posterior. Con el ejemplo de la lección, alguien que invierte de los 25 a los 35 y luego deja crecer el dinero puede acabar con un capital similar o mayor que alguien que invierte más del doble de años pero empieza más tarde. El coste de esperar no es lineal, es mucho mayor de lo que parece a simple vista.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Inviertes 5.000€ a una rentabilidad media anual constante del 6%, sin aportaciones adicionales. Calcula el capital aproximado a los 10 años y a los 20 años usando VF = VI × (1+r)^n. ¿Qué proporción del crecimiento total (en euros) ocurre en la segunda década frente a la primera?",
                solution:
                  "Año 10: 5.000 × 1,06^10 ≈ 5.000 × 1,7908 ≈ 8.954€ (ganancia de ≈ 3.954€)\nAño 20: 5.000 × 1,06^20 ≈ 5.000 × 3,2071 ≈ 16.036€ (ganancia total de ≈ 11.036€)\n\nGanancia en la 2ª década: 16.036 − 8.954 ≈ 7.082€, frente a 3.954€ en la primera década. Es decir, en la segunda década ganas casi el doble que en la primera, con el mismo capital inicial y sin aportar nada más: es el efecto compuesto acelerando con el tiempo.",
              },
            ],
            reflection:
              "Con un horizonte de 20 años por delante, ¿qué implicación práctica tiene para ti el hecho de que \"empezar antes\" pese más que \"empezar con más dinero\"? ¿Cambia algo en cómo priorizas invertir ahora mismo, aunque sea con poco capital?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 0",
        passScore: 70,
        questions: [
          {
            q: "El dinero fiat moderno tiene valor principalmente porque:",
            options: [
              "Está respaldado por reservas de oro",
              "Un banco central lo respalda y la sociedad lo acepta como tal",
              "Tiene un valor fijo garantizado por ley internacional",
              "Su cantidad nunca puede aumentar",
            ],
            correct: 1,
            topic: "Qué es el dinero",
          },
          {
            q: "Si la cantidad de dinero en circulación crece más rápido que la producción de bienes y servicios, lo esperable es:",
            options: [
              "Deflación",
              "Estabilidad de precios",
              "Inflación",
              "Aumento del valor del dinero",
            ],
            correct: 2,
            topic: "Qué es el dinero / Inflación",
          },
          {
            q: "Rentabilidad real es aproximadamente igual a:",
            options: [
              "Rentabilidad nominal + inflación",
              "Rentabilidad nominal − inflación",
              "Rentabilidad nominal × inflación",
              "Inflación − rentabilidad nominal",
            ],
            correct: 1,
            topic: "Inflación",
          },
          {
            q: "Con una inflación media del 3% anual, la regla del 72 indica que el poder adquisitivo se reduce a la mitad en aproximadamente:",
            options: ["12 años", "18 años", "24 años", "36 años"],
            correct: 2,
            topic: "Inflación",
          },
          {
            q: "En el interés compuesto, los intereses de cada periodo se calculan sobre:",
            options: [
              "Solo el capital inicial, siempre",
              "El capital inicial más los intereses acumulados previamente",
              "Un promedio fijo de todos los años",
              "Nada, es lo mismo que el interés simple",
            ],
            correct: 1,
            topic: "Interés compuesto",
          },
          {
            q: "En una inversión a largo plazo sin aportaciones adicionales, la mayor parte del crecimiento absoluto (en euros) suele producirse:",
            options: [
              "En los primeros años",
              "De forma exactamente igual todos los años",
              "En los últimos años del periodo",
              "Solo si hay una crisis económica",
            ],
            correct: 2,
            topic: "Interés compuesto",
          },
          {
            q: "Si inviertes 8.000€ al 7% anual durante 10 años sin aportar más, el capital final aproximado (usando VF = VI×(1+r)^n) es:",
            options: ["8.560€", "13.600€", "15.737€", "22.400€"],
            correct: 2,
            topic: "Interés compuesto (cálculo)",
          },
        ],
      },
    },
    {
      id: "m1",
      number: 1,
      title: "Riesgo, rentabilidad, diversificación y empresas",
      objective:
        "Entender qué es realmente el riesgo en inversión (y por qué no es lo mismo que \"perder dinero\"), cómo se relaciona con la rentabilidad, por qué diversificar reduce el riesgo sin sacrificar tanto retorno, y qué es una empresa y una acción desde dentro.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulo 0 completo (dinero, inflación, interés compuesto).",
      learn:
        "A distinguir riesgo de volatilidad, a entender la relación riesgo-rentabilidad, a diversificar tu cartera de forma razonada, y a comprender qué compras realmente cuando compras una acción.",
      lessons: [
        {
          id: "m1l1",
          title: "Qué es el riesgo",
          simple:
            "Riesgo no es \"perder dinero seguro\". Es incertidumbre: la posibilidad de que el resultado final sea distinto de lo que esperabas, tanto para bien como para mal.",
          technical: `En finanzas, el riesgo se suele medir con la volatilidad: cuánto se mueve el precio de un activo en el tiempo (técnicamente, la desviación típica de sus rentabilidades). Un activo muy volátil puede subir o bajar mucho en poco tiempo; uno poco volátil se mueve de forma más estable.

Es fundamental distinguir dos conceptos que se confunden constantemente:

- Volatilidad: el vaivén del precio en el corto plazo. Es visible, incómodo, pero no siempre es peligroso si tu horizonte es largo.
- Riesgo de pérdida permanente de capital: perder dinero de forma definitiva, sin posibilidad de recuperación (por ejemplo, una empresa que quiebra).

Un fondo indexado global puede ser muy volátil en un año concreto (caer un 30%) sin que eso implique riesgo real de pérdida permanente, porque a 20 años el mercado global ha tendido históricamente a recuperarse y crecer. En cambio, invertir todo tu capital en una sola empresa que luego quiebra sí es pérdida permanente: ese dinero no vuelve.

Para un inversor a largo plazo como tú, la volatilidad a corto plazo es "ruido" que hay que aprender a tolerar; el verdadero riesgo a evitar es la concentración excesiva y las decisiones impulsivas que convierten una caída temporal en una pérdida permanente (vender en pánico durante una caída, por ejemplo).`,
          numericExample:
            "Imagina dos inversiones de 10.000€ a 10 años. Inversión A: sube y baja mucho cada año (algunos años +25%, otros −20%), pero de media anualizada da un 8%. Inversión B: crece de forma estable un 3% cada año, sin sobresaltos. A los 10 años, A puede valer unos 21.600€ (10.000 × 1,08^10) mientras B vale unos 13.400€ (10.000 × 1,03^10). A fue mucho más volátil en el camino, pero no fue \"más peligrosa\" en el sentido de pérdida permanente: simplemente tuvo un trayecto más incómodo hacia un resultado mejor.",
          realExample:
            "En 2020, con el inicio del COVID, el índice S&P 500 cayó más de un 30% en semanas. Quien vendió en pánico convirtió una caída temporal (volatilidad) en una pérdida permanente real. Quien mantuvo la inversión vio cómo el índice recuperó todo lo perdido en menos de un año y siguió subiendo después.",
          analogy:
            "La volatilidad es como el oleaje en un barco durante una travesía larga: incómodo, a veces mareante, pero no hunde el barco. El riesgo de pérdida permanente es como un agujero en el casco: eso sí te hunde. Confundir ambos lleva a mucha gente a \"abandonar el barco\" (vender) justo durante el oleaje normal de una travesía que, de otro modo, habría llegado a buen puerto.",
          mistakes: [
            "Igualar \"volátil\" con \"peligroso\" sin tener en cuenta el horizonte temporal de la inversión.",
            "Pensar que evitar toda volatilidad (quedarse en efectivo) es \"no asumir riesgo\", cuando en realidad asumes el riesgo silencioso de la inflación (Módulo 0).",
            "Convertir una pérdida temporal en permanente vendiendo por pánico durante una caída de mercado.",
          ],
          summary:
            "El riesgo real que debes evitar como inversor a largo plazo no es la volatilidad (los vaivenes de corto plazo), sino la pérdida permanente de capital, que suele venir de la concentración excesiva y de decisiones impulsivas. Con un horizonte de 20 años, la volatilidad es el precio de entrada a rentabilidades más altas, no un peligro en sí mismo.",
          exercises: {
            quiz: [
              {
                q: "Un fondo indexado global cae un 25% en seis meses y luego se recupera en año y medio. Desde la perspectiva de un inversor a 20 años que no vendió, esto fue principalmente:",
                options: [
                  "Una pérdida permanente de capital",
                  "Volatilidad temporal, no una pérdida permanente",
                  "Una señal de que el fondo es una mala inversión",
                  "Un fraude del gestor del fondo",
                ],
                correct: 1,
                explain:
                  "Mientras el inversor no venda durante la caída, esa bajada es volatilidad temporal en el camino. Solo se convierte en pérdida permanente si se vende en el punto bajo.",
              },
              {
                q: "¿Cuál de estas es la definición más precisa de \"riesgo de pérdida permanente de capital\"?",
                options: [
                  "Que el precio de un activo suba y baje mucho",
                  "Que el dinero invertido se pierda de forma definitiva, sin posibilidad de recuperación",
                  "Que la inflación suba ese año",
                  "Que un fondo tenga comisiones altas",
                ],
                correct: 1,
                explain:
                  "La pérdida permanente implica que el dinero no vuelve (ej. una empresa que quiebra, o vender en el peor momento posible cristalizando la pérdida). Es distinto de la volatilidad, que es reversible mientras no actúes sobre ella.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un compañero de trabajo te dice: \"Invertir en bolsa es un riesgo enorme, prefiero tener todo en el banco.\" Con lo aprendido en esta lección y en el Módulo 0 sobre inflación, ¿cómo matizarías esa afirmación?",
                solution:
                  "La afirmación mezcla dos tipos de riesgo distintos. Tener todo en el banco elimina la volatilidad (el número no baja), pero no elimina el riesgo: sustituye un riesgo visible (la bolsa sube y baja) por uno invisible pero muy real, la pérdida de poder adquisitivo por inflación (visto en el Módulo 0). \"Riesgo cero\" no existe: la pregunta relevante no es \"¿hay riesgo o no?\", sino \"¿qué tipo de riesgo estoy dispuesto a asumir, y cuál es más peligroso para mi objetivo a 20 años?\". Para un horizonte largo, la volatilidad de la bolsa suele ser más manejable que la erosión silenciosa y casi garantizada de la inflación sobre el dinero parado.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tiene 20.000€. Los invierte todos en una única empresa que, dos años después, se declara en quiebra y las acciones pasan a valer 0€. Otro inversor reparte 20.000€ entre 500 empresas distintas (por ejemplo, vía un fondo indexado), y una de esas empresas también quiebra. Calcula qué porcentaje de la cartera pierde cada uno debido a esa quiebra concreta (asume reparto igual entre las 500 empresas).",
                solution:
                  "Inversor 1: pierde el 100% de su capital (20.000€) porque todo estaba en esa única empresa.\nInversor 2: cada empresa representa 20.000€ ÷ 500 = 40€ de la cartera. Si esa empresa quiebra, pierde esos 40€, es decir, un 0,2% de su cartera total (40€ ÷ 20.000€).\n\nEste es el argumento numérico central de la diversificación (que veremos en detalle en la Lección 1.3): el mismo evento — una empresa que quiebra — tiene un impacto radicalmente distinto según cómo esté repartido el capital.",
              },
            ],
            reflection:
              "Piensa en una decisión financiera pasada (tuya o de alguien cercano) que se tomó por miedo a la volatilidad. Con la distinción de esta lección, ¿dirías que ese miedo estaba justificado por un riesgo real de pérdida permanente, o era principalmente incomodidad ante el vaivén normal del mercado?",
          },
        },
        {
          id: "m1l2",
          title: "Rentabilidad y su relación con el riesgo",
          simple:
            "La rentabilidad es lo que ganas (o pierdes) por invertir tu dinero. En general, para aspirar a rentabilidades más altas hay que aceptar más incertidumbre en el camino: no existe \"gratis\" en los mercados.",
          technical: `La rentabilidad se puede medir de varias formas:

- Rentabilidad absoluta: cuánto ha ganado o perdido una inversión en euros o porcentaje, en un periodo dado.
- Rentabilidad anualizada (CAGR, tasa de crecimiento anual compuesto): la tasa de crecimiento constante que, aplicada cada año, habría producido el mismo resultado final. Es la forma correcta de comparar inversiones con distinta duración.

Fórmula del CAGR: CAGR = (Valor final / Valor inicial)^(1/años) − 1

El principio central de las finanzas modernas es la relación riesgo-rentabilidad: los activos que históricamente ofrecen mayor rentabilidad esperada (acciones) también muestran mayor volatilidad que los activos más conservadores (bonos del Estado, cuentas de ahorro). Esto no es casualidad ni "premio" arbitrario: si un activo ofreciera alta rentabilidad sin riesgo, todo el mundo lo compraría, su precio subiría, y la rentabilidad esperada bajaría hasta un punto de equilibrio donde ya no seria tan atractivo. El riesgo es, en cierto sentido, el "precio" que el mercado paga a quien está dispuesto a tolerar la incertidumbre.

Para ti, con 20 años de horizonte, esto tiene una implicación directa: tener un horizonte largo te permite asumir más volatilidad a cambio de mayor rentabilidad esperada, porque tienes tiempo de sobra para capear las caídas temporales.`,
          numericExample:
            "Datos históricos aproximados a muy largo plazo (no garantizados para el futuro): la renta variable global ha rentado de media en torno al 7-8% anual real (descontando inflación) en periodos largos, con caídas puntuales de hasta el 40-50% en crisis severas. Los bonos del Estado a largo plazo han rentado de media más cerca del 1-3% real, con caídas mucho más moderadas. La diferencia de rentabilidad entre ambos —la \"prima de riesgo\"— es la compensación histórica por asumir la mayor volatilidad de las acciones.",
          realExample:
            "Entre 2000 y 2009 (la \"década perdida\" para la bolsa estadounidense, que incluyó la crisis puntocom y la crisis financiera de 2008), el S&P 500 tuvo una rentabilidad prácticamente plana. Quien invirtió justo en el pico de 2000 tuvo que esperar años para recuperar su capital. Esto ilustra que la prima de riesgo no se cobra todos los años ni en todos los periodos: es un promedio a muy largo plazo, no una garantía en cualquier ventana de tiempo.",
          analogy:
            "Pensar en la rentabilidad sin el riesgo es como juzgar un viaje solo por el destino final, ignorando si el camino fue en avión directo o con escalas y turbulencias. Dos inversiones pueden llegar al \"mismo sitio\" en rentabilidad media, pero el trayecto (la volatilidad) puede ser radicalmente distinto — y ese trayecto es lo que realmente vivirás año a año.",
          mistakes: [
            "Buscar \"la inversión perfecta\" que dé alta rentabilidad sin riesgo: si alguien te la ofrece, sospecha (Módulo 9 trata esto en detalle).",
            "Juzgar una inversión solo por su rentabilidad pasada de 1-2 años, sin mirar la volatilidad que tuvo que soportarse para conseguirla.",
            "Comparar rentabilidades de periodos de distinta duración sin anualizar (CAGR), lo que lleva a comparaciones erróneas.",
          ],
          summary:
            "La rentabilidad y el riesgo están intrínsecamente ligados: mayor rentabilidad esperada suele implicar mayor volatilidad en el camino. Con un horizonte de 20 años, puedes permitirte asumir más volatilidad de la que asumiría alguien que necesita el dinero pronto, porque tienes tiempo de sobra para que la prima de riesgo se materialice.",
          exercises: {
            quiz: [
              {
                q: "Si un producto financiero promete una rentabilidad alta \"garantizada\" y sin riesgo, lo más razonable es:",
                options: [
                  "Invertir de inmediato, es una oportunidad única",
                  "Sospechar, porque rentabilidad alta sin riesgo contradice el principio riesgo-rentabilidad",
                  "Es normal, así funcionan todos los productos bancarios",
                  "Invertir solo si te lo recomienda un familiar",
                ],
                correct: 1,
                explain:
                  "El mercado tiende a eliminar las oportunidades de \"alta rentabilidad sin riesgo\" rápidamente porque todo el mundo querría aprovecharlas. Promesas de este tipo son una señal de alerta clásica de producto engañoso o fraudulento (lo veremos en detalle en el Módulo 9).",
              },
              {
                q: "El CAGR (rentabilidad anualizada) es útil principalmente porque:",
                options: [
                  "Elimina completamente el riesgo de una inversión",
                  "Permite comparar inversiones de distinta duración en términos equivalentes",
                  "Es siempre mayor que la rentabilidad absoluta",
                  "Solo se aplica a los bonos",
                ],
                correct: 1,
                explain:
                  "El CAGR convierte cualquier periodo en una tasa \"por año\", lo que permite comparar, por ejemplo, una inversión a 3 años con otra a 10 años en igualdad de condiciones.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un vendedor de un producto financiero te dice: \"Este fondo ha ganado un 60% en los últimos 3 años, mucho mejor que el fondo indexado que solo ha ganado un 35%.\" ¿Qué le preguntarías antes de dejarte impresionar por esa comparación?",
                solution:
                  "Varias preguntas clave: (1) ¿Cuál es el CAGR (rentabilidad anualizada) de cada uno, no solo el total acumulado? (2) ¿Qué volatilidad o caídas máximas ha tenido cada fondo para lograr esa rentabilidad? Un fondo puede haber asumido mucho más riesgo para conseguir más rentabilidad en un periodo concreto, lo cual no es directamente comparable. (3) ¿Qué comisiones tiene cada uno (lo veremos en el Módulo 3), ya que afectan a la rentabilidad neta real? (4) ¿Es un periodo representativo o se ha elegido a propósito una ventana temporal favorable para ese fondo concreto? Comparar rentabilidades sin este contexto es, como mínimo, una comparación incompleta.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una inversión pasa de 10.000€ a 16.000€ en 5 años. Calcula su rentabilidad absoluta (%) y su rentabilidad anualizada (CAGR) usando CAGR = (Valor final/Valor inicial)^(1/años) − 1.",
                solution:
                  "Rentabilidad absoluta: (16.000 − 10.000) / 10.000 = 60%.\n\nCAGR: (16.000/10.000)^(1/5) − 1 = (1,6)^(0,2) − 1 ≈ 1,0986 − 1 = 0,0986 ≈ 9,86% anual.\n\nFíjate en la diferencia: decir \"ganó un 60%\" suena mucho más impresionante que \"ganó un 9,86% anual\", pero son la misma inversión. El CAGR es la forma correcta de entender el ritmo real de crecimiento y de comparar con otras inversiones o con tus propias proyecciones a 20 años.",
              },
            ],
            reflection:
              "¿Alguna vez has visto un anuncio o recomendación de inversión que destacaba solo la rentabilidad sin mencionar el riesgo asumido para conseguirla? ¿Qué preguntas de esta lección te habrían ayudado a evaluarlo mejor?",
          },
        },
        {
          id: "m1l3",
          title: "Diversificación",
          simple:
            "Diversificar es \"no poner todos los huevos en la misma cesta\": repartir tu dinero entre muchos activos distintos para que el mal comportamiento de uno no arruine el conjunto.",
          technical: `La diversificación reduce el riesgo específico (también llamado riesgo idiosincrático o no sistemático): el riesgo propio de una empresa, sector o país concreto (que quiebre, que tenga un escándalo, que un sector entero colapse). Cuando repartes tu inversión entre muchos activos poco correlacionados entre sí, los problemas específicos de unos tienden a compensarse con el buen comportamiento de otros.

Es importante entender su límite: la diversificación NO elimina el riesgo sistemático (o riesgo de mercado): el riesgo que afecta a todo el mercado a la vez (una recesión global, una subida generalizada de tipos de interés, una pandemia). Ningún nivel de diversificación te protege de que el mercado global caiga en su conjunto.

Los fondos indexados globales (como uno que replique el MSCI World, con miles de empresas de decenas de países) son, en la práctica, una de las formas más eficientes y baratas de conseguir diversificación masiva con una sola operación de compra. En vez de intentar elegir qué empresas van a ir bien (algo extremadamente difícil, ver Módulo 8), posees automáticamente un trocito de todas las grandes empresas del mundo desarrollado.

La diversificación también se puede aplicar entre clases de activos (acciones, bonos, inmobiliario, materias primas — Módulos 3, 4 y posteriores), no solo dentro de la renta variable.`,
          numericExample:
            "Si inviertes en 3 empresas de un mismo sector (por ejemplo, 3 petroleras), y el precio del petróleo se desploma, es muy probable que las 3 caigan a la vez: están muy correlacionadas. Si en cambio inviertes en 3 empresas de sectores distintos y no relacionados (una farmacéutica, una tecnológica, una de consumo básico), es mucho menos probable que un mismo evento las afecte a las 3 por igual: su correlación es más baja, y el conjunto se mueve de forma más suave que cada una por separado.",
          realExample:
            "Un fondo indexado que replica el MSCI World invierte en unas 1.400-1.500 empresas de 23 países desarrollados aproximadamente (la composición exacta varía con el tiempo). Si una sola de esas empresas tiene un mal año o incluso quiebra, el impacto en el conjunto del fondo es mínimo, precisamente por el nivel de diversificación implícito.",
          analogy:
            "Diversificar es como programar una fiesta con actividades de interior y exterior a la vez. Si llueve (falla el \"activo\" exterior), la fiesta no se arruina porque tienes el plan de interior funcionando en paralelo. No has evitado la lluvia (el riesgo sistemático, como una recesión global), pero sí has evitado que la lluvia arruine todo el evento.",
          mistakes: [
            "Pensar que tener \"varios fondos\" es diversificar, cuando en realidad esos fondos pueden solapar mucho las mismas empresas (ej. varios fondos de tecnología estadounidense).",
            "Creer que la diversificación elimina todo riesgo, incluyendo el riesgo de mercado en su conjunto (no es así).",
            "Sobre-diversificar de forma artificial comprando decenas de fondos indexados que ya se solapan entre sí, complicando la cartera sin beneficio real adicional.",
          ],
          summary:
            "Diversificar reduce el riesgo específico de empresas, sectores o países concretos, pero no elimina el riesgo de mercado en su conjunto. Los fondos indexados globales ofrecen diversificación masiva y eficiente con una sola operación, lo que los convierte en una herramienta especialmente adecuada para un inversor a largo plazo que no quiere (ni necesita) intentar adivinar qué empresas individuales lo harán mejor.",
          exercises: {
            quiz: [
              {
                q: "La diversificación reduce principalmente:",
                options: [
                  "El riesgo de mercado global (sistemático)",
                  "El riesgo específico de una empresa, sector o país concreto",
                  "La inflación",
                  "Las comisiones de los fondos",
                ],
                correct: 1,
                explain:
                  "La diversificación ataca el riesgo idiosincrático (específico). El riesgo sistemático, que afecta a todo el mercado a la vez, no se elimina diversificando: solo se puede matizar con la elección de la mezcla de activos (Módulo 5).",
              },
              {
                q: "Tener 5 fondos distintos, todos centrados en grandes empresas tecnológicas estadounidenses, es un ejemplo de:",
                options: [
                  "Diversificación real y efectiva",
                  "Falsa diversificación, porque los fondos probablemente se solapan mucho entre sí",
                  "Una estrategia sin ningún riesgo",
                  "Lo mismo que invertir en un fondo indexado global",
                ],
                correct: 1,
                explain:
                  "El número de fondos no garantiza diversificación si todos ellos invierten, en esencia, en las mismas empresas o el mismo sector y país. Lo relevante es la superposición real de activos subyacentes, no el número de vehículos de inversión.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un amigo te dice: \"Yo diversifico mucho, tengo acciones de 8 empresas españolas distintas de diferentes sectores.\" ¿Qué matices le pondrías a esa afirmación usando lo aprendido en esta lección?",
                solution:
                  "Hay una diversificación parcial real (sectores distintos dentro de España reduce algo de riesgo específico de sector), pero sigue existiendo una concentración geográfica importante: las 8 empresas comparten exposición al riesgo país de España (su economía, su regulación, su moneda, su ciclo económico). Un evento que afecte específicamente a la economía española afectaría a las 8 a la vez, aunque sean de sectores distintos. Además, 8 empresas —por muy distintas que sean— siguen siendo una muestra pequeña comparada con las miles de empresas de una decena de países que ofrece un fondo indexado global. No es que esté mal diversificar así, pero es un nivel de diversificación bastante más limitado del que parece a primera vista.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Tienes 12.000€ para invertir. Opción A: los pones todos en una sola empresa. Opción B: los repartes a partes iguales entre 4 empresas de sectores y países distintos. Si en la Opción A esa empresa cae un 50% en un año, y en la Opción B una de las 4 cae un 50% mientras las otras 3 quedan planas (0%), calcula el valor final de la cartera en ambos casos.",
                solution:
                  "Opción A: 12.000€ × 0,5 (cae 50%) = 6.000€ de pérdida. Valor final: 6.000€.\n\nOpción B: cada empresa tiene 3.000€ (12.000 ÷ 4). La que cae un 50% pasa de 3.000€ a 1.500€ (pérdida de 1.500€). Las otras 3 se mantienen en 3.000€ cada una (9.000€ en total). Valor final: 1.500 + 9.000 = 10.500€.\n\nEl mismo evento —una empresa cayendo un 50%— tiene un impacto de 6.000€ de pérdida en la Opción A frente a solo 1.500€ en la Opción B, simplemente por cómo está repartido el capital. Esta es la matemática detrás de por qué la diversificación importa tanto.",
              },
            ],
            reflection:
              "Si hoy tuvieras que invertir tus ahorros, ¿te sentirías más cómodo eligiendo tú mismo 5-10 empresas concretas, o prefieres la diversificación automática de un fondo indexado con miles de empresas? ¿Por qué crees que te inclinas hacia una opción u otra?",
          },
        },
        {
          id: "m1l4",
          title: "Cómo funciona una empresa",
          simple:
            "Una empresa es una organización que produce bienes o servicios, los vende, y con lo que gana (menos lo que gasta) obtiene un beneficio. Ese beneficio es, en última instancia, lo que hace que una empresa tenga valor.",
          technical: `Para entender por qué invertir en empresas tiene sentido económico, hay que entender el ciclo básico de una empresa:

1. Capital inicial: los fundadores o accionistas aportan dinero (capital) para arrancar el negocio.
2. Producción/operación: la empresa usa ese capital para producir bienes o servicios (contratando empleados, comprando maquinaria, materias primas, etc.).
3. Ventas e ingresos: vende esos bienes o servicios a clientes, generando ingresos (facturación).
4. Costes y beneficio: de esos ingresos, resta los costes (salarios, materias primas, alquileres, impuestos, intereses de deuda...). Lo que queda es el beneficio neto.
5. Reinversión o reparto: la empresa puede reinvertir ese beneficio en crecer (nuevas líneas de negocio, expansión) o repartirlo entre los accionistas en forma de dividendos.

Los accionistas (dueños parciales de la empresa, ver la próxima lección) se benefician de dos formas: por la revalorización de la acción (si la empresa vale más porque genera más beneficios o se espera que los genere en el futuro) y por los dividendos (si la empresa reparte parte del beneficio).

Entender esto es clave para toda la inversión en renta variable: cuando compras una acción, no estás comprando "un número que sube y baja en una pantalla". Estás comprando una porción diminuta de un negocio real que produce bienes/servicios, genera ingresos y (si va bien) beneficios. El precio de la acción, a largo plazo, tiende a reflejar la capacidad de esa empresa de generar beneficios presentes y futuros.`,
          numericExample:
            "Una empresa factura (ingresos) 100 millones de euros en un año. Sus costes totales (salarios, materiales, alquileres, impuestos, etc.) son 85 millones de euros. Su beneficio neto es 100 − 85 = 15 millones de euros. Si la empresa decide repartir el 30% de ese beneficio como dividendo y reinvertir el resto, reparte 4,5 millones de euros entre todos sus accionistas (proporcionalmente a las acciones que posea cada uno) y reinvierte 10,5 millones en crecer.",
          realExample:
            "Empresas como Inditex generan miles de millones de euros de beneficio neto al año vendiendo ropa a través de sus marcas (Zara, entre otras). Parte de ese beneficio se reparte en dividendos a sus accionistas, y parte se reinvierte en abrir nuevas tiendas, mejorar la logística o el comercio online. El valor de la acción en bolsa refleja, entre otras cosas, las expectativas del mercado sobre la capacidad futura de la empresa de seguir generando beneficios.",
          analogy:
            "Una empresa es como un huerto. El capital inicial son las semillas y la tierra. El trabajo diario (empleados, gestión) es el cuidado del huerto. La cosecha son los ingresos. Después de descontar lo gastado en semillas, agua y herramientas (costes), lo que queda es el beneficio: parte se puede vender (dividendo) y parte replantar para que el huerto crezca más el año siguiente (reinversión).",
          mistakes: [
            "Pensar en la acción como un simple \"ticker\" desconectado del negocio real que representa.",
            "Confundir ingresos (facturación total) con beneficio (lo que realmente queda después de todos los costes) — una empresa puede facturar mucho y aun así tener pérdidas si sus costes son mayores.",
            "Asumir que todas las empresas reparten dividendos: muchas, especialmente las de crecimiento, reinvierten prácticamente todo el beneficio en vez de repartirlo.",
          ],
          summary:
            "Una empresa genera ingresos vendiendo bienes o servicios, resta sus costes, y el resultado es el beneficio neto, que puede repartirse (dividendos) o reinvertirse en crecer. Cuando inviertes en una acción, estás comprando una porción de ese negocio real y de su capacidad —presente y futura— de generar beneficios.",
          exercises: {
            quiz: [
              {
                q: "El beneficio neto de una empresa es:",
                options: [
                  "Lo mismo que sus ingresos totales (facturación)",
                  "Los ingresos menos todos los costes (salarios, materiales, impuestos, etc.)",
                  "El dinero que reparte siempre en dividendos",
                  "El valor de la acción en bolsa",
                ],
                correct: 1,
                explain:
                  "El beneficio neto es lo que queda después de restar todos los costes a los ingresos. Una empresa puede tener ingresos altísimos y, aun así, pérdidas si sus costes son mayores que esos ingresos.",
              },
              {
                q: "Cuando una empresa reinvierte su beneficio en vez de repartirlo como dividendo, generalmente lo hace para:",
                options: [
                  "Reducir su valor a propósito",
                  "Financiar su crecimiento futuro (expansión, nuevos productos, etc.)",
                  "Evitar pagar impuestos por completo",
                  "Cumplir una obligación legal en todos los países",
                ],
                correct: 1,
                explain:
                  "Reinvertir el beneficio es una forma de financiar el crecimiento futuro sin necesidad de pedir deuda adicional o emitir nuevas acciones. Muchas empresas de crecimiento (especialmente tecnológicas) priorizan esto sobre repartir dividendos.",
              },
            ],
            cases: [
              {
                prompt:
                  "Alguien te dice: \"Esta empresa factura muchísimo, seguro que es una gran inversión.\" ¿Qué le preguntarías antes de darle la razón, con lo aprendido en esta lección?",
                solution:
                  "La pregunta clave es si esa facturación se traduce en beneficio real: ¿cuáles son sus costes? Una empresa puede facturar miles de millones y aun así tener pérdidas si sus costes (incluyendo, por ejemplo, deuda muy alta o una expansión mal gestionada) son mayores. También valdría la pena preguntar si el beneficio (si lo hay) es sostenible y creciente en el tiempo, o es puntual. Facturación alta es una parte de la historia, no toda la historia: hay empresas históricamente famosas por \"quemar\" mucho dinero (gastar más de lo que ingresan) durante años, apostando a un crecimiento futuro que no siempre se cumple.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene unos ingresos de 40 millones de euros. Sus costes son: 18 millones en salarios, 9 millones en materiales, 4 millones en alquileres y logística, 2 millones en intereses de deuda, y paga un 25% de impuestos sobre lo que queda antes de impuestos. Calcula el beneficio neto final.",
                solution:
                  "Costes antes de impuestos: 18 + 9 + 4 + 2 = 33 millones.\nBeneficio antes de impuestos: 40 − 33 = 7 millones.\nImpuestos (25%): 7 × 0,25 = 1,75 millones.\nBeneficio neto: 7 − 1,75 = 5,25 millones de euros.\n\nDe esos 5,25 millones, la empresa decidirá cuánto repartir en dividendos y cuánto reinvertir, según su estrategia y las expectativas de sus directivos y consejo de administración.",
              },
            ],
            reflection:
              "Piensa en una empresa cuyos productos o servicios usas habitualmente. Si tuvieras que explicar en 2-3 frases de dónde saca sus ingresos y qué principales costes crees que tiene, ¿qué dirías? ¿Te parece, a priori, un negocio con buenos márgenes (mucha diferencia entre ingresos y costes) o ajustados?",
          },
        },
        {
          id: "m1l5",
          title: "Qué es una acción",
          simple:
            "Una acción es un trocito de propiedad de una empresa. Si compras una acción de una empresa, te conviertes en dueño (muy pequeño, normalmente) de esa empresa, con derecho a una parte proporcional de sus beneficios y, en teoría, de sus decisiones.",
          technical: `Cuando una empresa se constituye, su capital se divide en un número determinado de acciones. Si una empresa tiene 1.000.000 de acciones en circulación y tú posees 100, eres dueño del 0,01% de esa empresa (100 / 1.000.000).

Como accionista, tienes (en distinta medida según el tipo de acción y la legislación) varios derechos:

- Derecho a una parte proporcional de los beneficios (vía dividendos, si la empresa los reparte).
- Derecho a voto en la junta de accionistas (proporcional a tu número de acciones), para decisiones importantes como elegir al consejo de administración.
- Derecho a una parte proporcional de los activos de la empresa en caso de liquidación (aunque en la práctica, si una empresa quiebra, los accionistas suelen cobrar los últimos, después de acreedores y bonistas — de ahí que las acciones sean más arriesgadas que los bonos, Módulo 4).

El precio de una acción en el mercado bursátil (bolsa) se determina por la oferta y la demanda: si más gente quiere comprar que vender, el precio sube; si más gente quiere vender que comprar, baja. A muy largo plazo, ese precio tiende a reflejar las expectativas del mercado sobre los beneficios presentes y futuros de la empresa (aunque a corto plazo puede desviarse mucho por sentimiento de mercado, noticias, especulación, etc. — Módulo 6 trata esto).

Es importante distinguir entre acciones (renta variable: propiedad de una empresa, sin rentabilidad garantizada) y bonos (renta fija: préstamo a una empresa o gobierno, con pagos de interés pactados de antemano — lo veremos en profundidad en el Módulo 4).`,
          numericExample:
            "Una empresa tiene 50 millones de acciones en circulación, y cada acción cotiza a 20€. Su capitalización bursátil (valor total de mercado) es 50.000.000 × 20€ = 1.000 millones de euros. Si tú compras 200 acciones (200 × 20€ = 4.000€ de inversión), posees el 200 / 50.000.000 = 0,0004% de la empresa. Parece minúsculo, pero es una porción real y proporcional de propiedad, con los mismos derechos (a escala) que cualquier otro accionista.",
          realExample:
            "Cuando compras una participación en un fondo indexado que replica el S&P 500, en la práctica te conviertes (indirectamente, a través del fondo) en accionista minúsculo de las 500 empresas que componen ese índice: Apple, Microsoft, Amazon, y las demás, todas a la vez, en proporción a su peso en el índice.",
          analogy:
            "Comprar una acción es como comprar una loncha de una tarta enorme (la empresa). Si la tarta crece (la empresa genera más beneficios y vale más), tu loncha —aunque siga siendo la misma proporción— vale más en términos absolutos. Si la empresa reparte trozos de \"relleno extra\" (dividendos), tú recibes tu parte proporcional de ese relleno.",
          mistakes: [
            "Pensar que comprar una acción es \"apostar\" en un casino, sin relación con el negocio real subyacente.",
            "Creer que el precio de una acción siempre refleja perfectamente el valor real de la empresa en el corto plazo (a corto plazo puede desviarse mucho por sentimiento de mercado).",
            "No entender que, en caso de quiebra, los accionistas cobran después que los acreedores y bonistas — de ahí el mayor riesgo (y mayor rentabilidad esperada) de las acciones frente a los bonos.",
          ],
          summary:
            "Una acción es una porción real de propiedad de una empresa, con derecho proporcional a sus beneficios (dividendos), a voto, y a sus activos en caso de liquidación (aunque en último lugar, tras acreedores y bonistas). El precio de la acción tiende a reflejar, a largo plazo, la capacidad de la empresa de generar beneficios — aunque a corto plazo puede desviarse bastante por factores de sentimiento de mercado.",
          exercises: {
            quiz: [
              {
                q: "Si posees acciones de una empresa, eres:",
                options: [
                  "Un acreedor de la empresa, como un banco",
                  "Un propietario parcial de la empresa, proporcional a tus acciones",
                  "Un empleado con derecho a salario",
                  "Un cliente con descuentos en sus productos",
                ],
                correct: 1,
                explain:
                  "Las acciones representan propiedad (renta variable), no un préstamo. Esto es distinto de los bonos, donde sí eres acreedor (le prestas dinero a la empresa o gobierno a cambio de un interés pactado).",
              },
              {
                q: "En caso de quiebra de una empresa, el orden habitual de cobro es:",
                options: [
                  "Primero los accionistas, después los acreedores y bonistas",
                  "Primero los acreedores y bonistas, los accionistas los últimos (y a menudo no recuperan nada)",
                  "Todos cobran exactamente lo mismo, en el mismo orden",
                  "Solo cobran los accionistas mayoritarios",
                ],
                correct: 1,
                explain:
                  "Los accionistas asumen el mayor riesgo: cobran los últimos en caso de liquidación, después de que se haya pagado a acreedores, proveedores y bonistas. Esta es una de las razones estructurales por las que las acciones tienen mayor rentabilidad esperada que los bonos: compensan ese mayor riesgo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un conocido te dice: \"Comprar acciones es básicamente apostar, es como ir al casino.\" Con lo aprendido en esta lección y en la anterior (cómo funciona una empresa), ¿qué matices le pondrías?",
                solution:
                  "Hay una diferencia estructural importante entre invertir en acciones y apostar en un casino. En un casino, el juego tiene una esperanza matemática negativa para el jugador por diseño (la banca siempre gana a largo plazo) y el resultado de cada partida es independiente de cualquier actividad productiva real. Invertir en una acción, en cambio, es poseer una porción de un negocio real que produce bienes o servicios, genera ingresos y (si va bien) beneficios — y esos beneficios son la fuente última del valor a largo plazo. Eso no significa que no haya incertidumbre (la hay, y mucha, sobre todo en el corto plazo y con empresas individuales), pero la comparación con el casino ignora que, en conjunto y a muy largo plazo, la economía global y las empresas que la componen han tendido a crecer y generar valor — algo que no aplica a una tirada de ruleta.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene 8 millones de acciones en circulación y cotiza a 45€ por acción. Calcula su capitalización bursátil. Si compras 150 acciones, ¿qué porcentaje de la empresa posees y cuánto capital has invertido?",
                solution:
                  "Capitalización bursátil: 8.000.000 × 45€ = 360.000.000€ (360 millones de euros).\n\nPorcentaje que posees: 150 / 8.000.000 = 0,001875%.\n\nCapital invertido: 150 × 45€ = 6.750€.\n\nAunque el porcentaje de propiedad parezca insignificante, sigue siendo una porción real y proporcional: si la empresa reparte dividendos o crece en valor, tú te beneficias exactamente en esa proporción, ni más ni menos.",
              },
            ],
            reflection:
              "Antes de este módulo, ¿pensabas en comprar acciones como \"comprar un número que sube y baja\", o como \"comprar una porción de un negocio real\"? ¿Cambia en algo tu forma de pensar sobre la inversión en bolsa el entender esta segunda perspectiva?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 1",
        passScore: 70,
        questions: [
          {
            q: "El riesgo de pérdida permanente de capital se diferencia de la volatilidad en que:",
            options: [
              "Son exactamente lo mismo",
              "La pérdida permanente es irreversible; la volatilidad es un vaivén temporal de precio",
              "La volatilidad solo existe en los bonos",
              "La pérdida permanente solo le ocurre a inversores principiantes",
            ],
            correct: 1,
            topic: "Qué es el riesgo",
          },
          {
            q: "La relación general entre riesgo y rentabilidad esperada en los mercados es:",
            options: [
              "No existe ninguna relación",
              "A mayor riesgo asumido, menor rentabilidad esperada siempre",
              "A mayor riesgo/volatilidad, mayor suele ser la rentabilidad esperada a largo plazo",
              "El riesgo y la rentabilidad son features exclusivas de las criptomonedas",
            ],
            correct: 2,
            topic: "Rentabilidad y riesgo",
          },
          {
            q: "La diversificación reduce principalmente:",
            options: [
              "El riesgo sistemático (de todo el mercado)",
              "El riesgo específico de una empresa, sector o país",
              "La inflación",
              "Los impuestos sobre las plusvalías",
            ],
            correct: 1,
            topic: "Diversificación",
          },
          {
            q: "Un fondo indexado global (tipo MSCI World) ofrece diversificación porque:",
            options: [
              "Invierte solo en un sector muy rentable",
              "Invierte en miles de empresas de múltiples países y sectores con una sola operación",
              "Garantiza que nunca vas a perder dinero",
              "Elimina por completo el riesgo de mercado",
            ],
            correct: 1,
            topic: "Diversificación",
          },
          {
            q: "El beneficio neto de una empresa se calcula como:",
            options: [
              "Ingresos totales, sin restar nada",
              "Ingresos menos todos los costes (salarios, materiales, impuestos, etc.)",
              "El precio de la acción multiplicado por el número de acciones",
              "Los dividendos repartidos ese año",
            ],
            correct: 1,
            topic: "Cómo funciona una empresa",
          },
          {
            q: "Cuando compras una acción de una empresa, te conviertes en:",
            options: [
              "Un acreedor, como si le prestaras dinero al banco",
              "Un propietario parcial de esa empresa, con derechos proporcionales a tus acciones",
              "Un empleado con derecho a salario fijo",
              "Un socio con la misma influencia que el fundador de la empresa",
            ],
            correct: 1,
            topic: "Qué es una acción",
          },
          {
            q: "En caso de quiebra de una empresa, el orden de cobro habitual hace que:",
            options: [
              "Los accionistas cobren primero siempre",
              "Los acreedores y bonistas cobren antes que los accionistas",
              "Todos pierdan el 100% del capital sin excepción",
              "Solo el Estado pueda recuperar dinero",
            ],
            correct: 1,
            topic: "Qué es una acción",
          },
          {
            q: "Una inversión de 12.000€ crece hasta 21.000€ en 7 años. Usando CAGR = (VF/VI)^(1/años) − 1, la rentabilidad anualizada aproximada es:",
            options: ["≈ 5,0% anual", "≈ 8,4% anual", "≈ 12,0% anual", "≈ 17,5% anual"],
            correct: 1,
            topic: "Rentabilidad (cálculo)",
          },
        ],
      },
    },
    {
      id: "m2",
      number: 2,
      title: "Bolsa e índices bursátiles",
      objective:
        "Entender qué es la bolsa y cómo funciona, y conocer en profundidad los principales índices que vas a usar como referencia e instrumento de inversión: MSCI World, S&P 500, Nasdaq, Russell, Euro Stoxx y los índices de mercados emergentes.",
      time: "6 sesiones de ~35 min",
      prereq: "Módulos 0 y 1 completos (dinero, riesgo, empresas y acciones).",
      learn:
        "A entender qué es la bolsa como mercado, cómo se construye un índice bursátil y qué mide realmente, y a distinguir los índices más relevantes para un inversor global: su composición, su lógica y sus diferencias prácticas.",
      lessons: [
        {
          id: "m2l1",
          title: "Qué es la bolsa",
          simple:
            "La bolsa es un mercado organizado donde se compran y venden acciones (y otros activos) de empresas que cotizan en ella. No es un lugar físico necesariamente: hoy en día es, sobre todo, un sistema electrónico que conecta compradores y vendedores.",
          technical: `Una bolsa de valores (como la Bolsa de Madrid, la Bolsa de Nueva York/NYSE, o el Nasdaq) es una infraestructura que permite que las empresas coticen (es decir, que sus acciones se puedan comprar y vender públicamente) y que los inversores intercambien esas acciones entre sí de forma organizada, transparente y regulada.

Es importante distinguir dos funciones distintas de la bolsa:

1. Mercado primario: cuando una empresa "sale a bolsa" por primera vez (una OPV, Oferta Pública de Venta, o IPO en inglés), vende acciones nuevas directamente a los inversores para captar capital. Ese dinero va a la empresa.
2. Mercado secundario: el día a día de la bolsa, donde los inversores compran y venden acciones entre ellos (tú le compras una acción a otro inversor, no a la empresa). La empresa no recibe ni pierde dinero directamente por estas operaciones diarias; lo que cambia es quién posee la acción y a qué precio.

Cuando compras un fondo indexado o una acción a través de tu bróker, casi siempre estás operando en el mercado secundario: comprándole la acción a otro inversor que la vende, a través del sistema electrónico de la bolsa.

Las bolsas están reguladas por organismos supervisores (en España, la CNMV; en EE.UU., la SEC) que velan por la transparencia, exigen a las empresas cotizadas publicar información financiera periódica, y persiguen el fraude y la manipulación de mercado.`,
          numericExample:
            "Cuando una empresa sale a bolsa (OPV) vendiendo 10 millones de acciones nuevas a 20€ cada una, capta 200 millones de euros (10.000.000 × 20€) que van directamente a las arcas de la empresa para financiar su crecimiento. A partir de ese momento, esas acciones empiezan a cotizar en el mercado secundario: si tú compras una de esas acciones un año después a 25€, ese dinero va al inversor que te la vende, no a la empresa — aunque el hecho de que el precio haya subido sí refleja (en parte) que el mercado valora mejor a la empresa.",
          realExample:
            "Cuando Airbnb salió a bolsa en 2020, captó miles de millones de dólares en su OPV, dinero que fue directamente a la empresa. Desde entonces, cada vez que alguien compra o vende acciones de Airbnb en el Nasdaq, es una operación de mercado secundario entre inversores: Airbnb como empresa no recibe ni pierde ese dinero, aunque el precio de sus acciones sí afecta a su capitalización bursátil y a la percepción pública de su valor.",
          analogy:
            "El mercado primario es como comprar un coche nuevo directamente al fabricante: el dinero va al fabricante. El mercado secundario es como el mercado de coches de segunda mano: compras el coche a otro propietario, no al fabricante, aunque el fabricante siga existiendo y el modelo de coche sea el mismo. La bolsa, en su día a día, es principalmente ese \"mercado de segunda mano\" de acciones — solo que muy líquido, organizado y regulado.",
          mistakes: [
            "Pensar que cuando compras una acción en bolsa, ese dinero va directamente a la empresa (normalmente no es así, salvo en una OPV o ampliación de capital).",
            "Confundir \"la bolsa\" con un lugar físico único: hoy en día es, en la práctica, una infraestructura electrónica global e interconectada.",
            "Creer que el precio de las acciones en el mercado secundario no importa para la empresa: sí importa indirectamente (afecta a su capacidad de futuras ampliaciones de capital, a su reputación, y al valor de las opciones sobre acciones de sus empleados, entre otras cosas).",
          ],
          summary:
            "La bolsa es un mercado organizado y regulado donde se intercambian acciones de empresas cotizadas. El mercado primario (OPV) es cuando la empresa capta dinero directamente vendiendo acciones nuevas; el mercado secundario es el intercambio diario entre inversores, que es donde tú operas normalmente al invertir a través de un bróker o fondo.",
          exercises: {
            quiz: [
              {
                q: "Cuando compras acciones de una empresa que ya lleva años cotizando en bolsa, normalmente:",
                options: [
                  "El dinero va directamente a la empresa",
                  "El dinero va a otro inversor que te vende esas acciones (mercado secundario)",
                  "El dinero va al Estado en forma de impuestos",
                  "La empresa emite acciones nuevas específicamente para ti",
                ],
                correct: 1,
                explain:
                  "Salvo que participes en una OPV o ampliación de capital (mercado primario), tus compras en bolsa del día a día son operaciones de mercado secundario: compras a otro inversor, no a la empresa.",
              },
              {
                q: "Una OPV (Oferta Pública de Venta) es:",
                options: [
                  "Cualquier compra de acciones en el mercado secundario",
                  "El proceso por el cual una empresa sale a bolsa vendiendo acciones nuevas para captar capital",
                  "Un tipo de impuesto sobre las plusvalías",
                  "Una orden de venta automática programada",
                ],
                correct: 1,
                explain:
                  "La OPV (o IPO en inglés) es el proceso de salida a bolsa de una empresa, en el que vende acciones nuevas al público para captar financiación (mercado primario).",
              },
            ],
            cases: [
              {
                prompt:
                  "Un conocido te dice: \"Si compro acciones de una empresa muy conocida que ya lleva 20 años en bolsa, estoy dándole dinero directamente a esa empresa para que crezca.\" ¿Es correcta esta afirmación? Explica por qué.",
                solution:
                  "No es correcta en la mayoría de los casos. Salvo que la operación sea parte de una ampliación de capital (donde la empresa emite acciones nuevas), comprar acciones de una empresa que ya cotiza desde hace tiempo es una operación de mercado secundario: el dinero va a otro inversor que decide vender sus acciones, no a la empresa. Esto no significa que sea irrelevante para la empresa: un precio de acción alto y estable facilita que la empresa pueda captar capital en el futuro en mejores condiciones (por ejemplo, en una ampliación de capital), y afecta a su reputación y capacidad de atraer talento (vía compensación en acciones). Pero el mecanismo directo de \"tu dinero entra en la caja de la empresa\" solo ocurre en el mercado primario.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa realiza una OPV vendiendo 25 millones de acciones nuevas a 12€ cada una. Calcula cuánto capital capta la empresa en esa operación. Si un año después el precio de la acción en el mercado secundario sube a 18€, ¿recibe la empresa ese incremento de valor de forma directa en efectivo?",
                solution:
                  "Capital captado en la OPV: 25.000.000 × 12€ = 300.000.000€ (300 millones de euros), que van directamente a la empresa.\n\nLa subida posterior a 18€ en el mercado secundario NO supone un ingreso directo en efectivo para la empresa: refleja que el mercado valora más a la empresa (por sus resultados, expectativas de crecimiento, etc.), pero ese dinero adicional de valoración está en manos de quien posea las acciones en cada momento, no en la caja de la empresa. Sí beneficia indirectamente a la empresa (mejor reputación, más facilidad para futuras operaciones de capital), pero no es un ingreso contable directo.",
              },
            ],
            reflection:
              "Antes de esta lección, ¿tenías claro que la mayoría de tus operaciones en bolsa (comprar un fondo indexado, por ejemplo) son intercambios entre inversores y no aportaciones directas de capital a las empresas? ¿Cambia esto algo tu forma de entender qué es \"invertir en bolsa\"?",
          },
        },
        {
          id: "m2l2",
          title: "Qué es un índice bursátil",
          simple:
            "Un índice bursátil es una lista de empresas seleccionadas con unas reglas concretas, cuyo comportamiento conjunto se resume en un único número. Sirve como termómetro de un mercado y, sobre todo para ti, como la base sobre la que se construyen los fondos indexados.",
          technical: `Un índice bursátil se define por: (1) qué empresas incluye (según criterios como el país, el sector, el tamaño, la liquidez, etc.), y (2) cómo se pondera cada una dentro del índice (cuánto "peso" tiene cada empresa en el resultado global).

La forma de ponderación más habitual en los grandes índices globales es la ponderación por capitalización bursátil ajustada por free float: las empresas más grandes (mayor valor de mercado) tienen más peso en el índice, ajustado por la proporción de acciones que realmente cotizan libremente en el mercado (excluyendo, por ejemplo, participaciones muy estables en manos de fundadores que rara vez se venden).

Esto tiene una implicación práctica importante: en un índice ponderado por capitalización, las pocas empresas más grandes pueden representar una proporción desproporcionadamente alta del índice total. Por ejemplo, en el S&P 500, un puñado de las mayores tecnológicas puede representar más del 25-30% del índice completo, aunque sean solo 5-10 de las 500 empresas.

Un índice no es, en sí mismo, un producto en el que se pueda invertir directamente: es una fórmula de cálculo, mantenida por un proveedor de índices (como MSCI, S&P Dow Jones Indices, FTSE Russell, o STOXX). Los fondos indexados (Módulo 3) son los productos financieros reales que replican ese índice para que un inversor pueda, en la práctica, invertir siguiendo su comportamiento.`,
          numericExample:
            "Imagina un índice simplificado con solo 3 empresas: Empresa A (capitalización 500 millones), Empresa B (300 millones) y Empresa C (200 millones). El índice total suma 1.000 millones. El peso de cada empresa en el índice sería: A = 50%, B = 30%, C = 20%. Si la Empresa A sube un 10% y las otras dos se mantienen planas, el índice conjunto sube aproximadamente un 5% (50% × 10% = 5%, ya que las otras dos no aportan variación), no un 10% ni un 3,33% (que sería la media simple sin ponderar).",
          realExample:
            "El S&P 500 está compuesto por aproximadamente 500 grandes empresas estadounidenses, seleccionadas y mantenidas por un comité de S&P Dow Jones Indices según criterios de tamaño, liquidez y rentabilidad, entre otros. Su ponderación por capitalización bursátil hace que, en los últimos años, un grupo reducido de grandes tecnológicas (a veces llamadas informalmente \"Magnificent Seven\" en la prensa financiera) haya llegado a representar una parte muy significativa del movimiento total del índice.",
          analogy:
            "Un índice bursátil ponderado por capitalización es como una foto de familia donde las personas más altas ocupan más espacio visual en la imagen, aunque todos estén presentes. Si la persona más alta se agacha (cae su cotización), la foto cambia mucho más visiblemente que si se agacha la persona más bajita, aunque técnicamter ambas sigan estando en la foto (el índice).",
          mistakes: [
            "Pensar que un índice de \"muchas empresas\" reparte el riesgo de forma completamente equitativa entre todas ellas — en realidad, con ponderación por capitalización, unas pocas empresas grandes pueden dominar el resultado.",
            "Creer que se puede \"comprar el índice\" directamente: en realidad se compra un fondo (indexado o ETF) que replica ese índice, que es un producto financiero distinto gestionado por una entidad (Módulo 3).",
            "Confundir el número del índice (ej. \"el S&P 500 está en 5.800 puntos\") con un precio en euros o dólares: es un número calculado según la fórmula del índice, no directamente convertible sin más contexto.",
          ],
          summary:
            "Un índice bursátil es una fórmula de cálculo que resume el comportamiento de un conjunto de empresas seleccionadas, normalmente ponderadas por capitalización bursátil. Esto hace que las empresas más grandes tengan más peso en su evolución. Los índices son la base sobre la que se construyen los fondos indexados, que es como realmente inviertes siguiendo su comportamiento.",
          exercises: {
            quiz: [
              {
                q: "En un índice ponderado por capitalización bursátil, las empresas con mayor peso son:",
                options: [
                  "Las que llevan más años cotizando",
                  "Las de mayor valor de mercado (capitalización)",
                  "Todas tienen exactamente el mismo peso",
                  "Las que reparten más dividendos",
                ],
                correct: 1,
                explain:
                  "La ponderación por capitalización bursátil da más peso a las empresas más grandes en términos de valor de mercado, no según antigüedad, dividendos o cualquier otro criterio.",
              },
              {
                q: "¿Se puede invertir directamente en un índice bursátil, como el S&P 500?",
                options: [
                  "Sí, comprando \"el índice\" directamente en cualquier bróker",
                  "No, un índice es una fórmula de cálculo; se invierte a través de fondos o ETFs que lo replican",
                  "Solo los bancos centrales pueden invertir en índices",
                  "Solo es posible si eres residente en el país del índice",
                ],
                correct: 1,
                explain:
                  "Un índice en sí mismo no es un producto de inversión, sino una referencia calculada. Para invertir \"siguiendo\" un índice, necesitas un fondo indexado o ETF que lo replique (contenido del Módulo 3).",
              },
            ],
            cases: [
              {
                prompt:
                  "Alguien te dice: \"Si invierto en un fondo que replica el S&P 500, estoy diversificando perfectamente entre 500 empresas iguales.\" ¿Qué matiz importante le pondrías, basándote en cómo funciona la ponderación por capitalización?",
                solution:
                  "El matiz clave es que \"500 empresas\" no significa que cada una tenga el mismo peso o impacto en tu inversión. Debido a la ponderación por capitalización bursátil, un grupo reducido de las empresas más grandes puede representar una proporción muy significativa del índice (en ciertos periodos, más del 25-30% concentrado en menos de 10 empresas). Esto no invalida la diversificación —sigue siendo mucho más diversificado que tener 5-10 acciones elegidas a mano—, pero es importante entender que el comportamiento del índice está más influido por sus mayores componentes que por una media simple entre las 500. Esto es relevante también para entender por qué el índice puede subir o bajar mucho en un día concreto por el movimiento de solo un puñado de grandes empresas.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un índice simplificado tiene 4 empresas con las siguientes capitalizaciones: Empresa W (400M€), Empresa X (300M€), Empresa Y (200M€), Empresa Z (100M€). Calcula el peso porcentual de cada una en el índice. Si la Empresa W sube un 20% y las demás se mantienen planas, ¿cuánto sube aproximadamente el índice completo?",
                solution:
                  "Capitalización total: 400 + 300 + 200 + 100 = 1.000M€.\n\nPesos: W = 400/1000 = 40%. X = 300/1000 = 30%. Y = 200/1000 = 20%. Z = 100/1000 = 10%.\n\nSi W sube un 20% y el resto se mantiene plano, la contribución al índice es: 40% (peso de W) × 20% (subida de W) = 8%. El índice completo sube aproximadamente un 8%, no un 20% ni un 5% (que sería 20%/4, la media simple sin ponderar). Este cálculo ilustra por qué el peso de cada empresa en el índice determina cuánto influye su movimiento individual en el resultado conjunto.",
              },
            ],
            reflection:
              "Si tuvieras que explicarle a alguien sin conocimientos financieros la diferencia entre \"un índice\" y \"un fondo que replica ese índice\", ¿cómo lo resumirías en 2-3 frases sencillas?",
          },
        },
        {
          id: "m2l3",
          title: "MSCI World y S&P 500",
          simple:
            "El MSCI World reúne grandes y medianas empresas de países desarrollados de todo el mundo. El S&P 500 se centra solo en 500 grandes empresas de Estados Unidos. Son dos de los índices más usados por inversores indexados de largo plazo, con alcances geográficos muy distintos.",
          technical: `MSCI World: índice elaborado por MSCI (Morgan Stanley Capital International) que incluye aproximadamente 1.300-1.500 empresas de gran y mediana capitalización de unos 23 países considerados "desarrollados" (Estados Unidos, Japón, Reino Unido, Alemania, Francia, Canadá, Australia, entre otros). Estados Unidos suele representar entre el 65-70% del índice aproximadamente (esta proporción varía con el tiempo), reflejando el peso relativo de su mercado bursátil dentro del mundo desarrollado.

S&P 500: índice que agrupa a 500 grandes empresas cotizadas en EE.UU., seleccionadas por un comité según criterios de capitalización, liquidez y rentabilidad, entre otros. Es probablemente el índice bursátil más seguido y citado del mundo, y representa una parte muy significativa (aunque no toda) de la capitalización bursátil total de EE.UU.

La diferencia práctica clave entre invertir en un fondo MSCI World o uno S&P 500 es la diversificación geográfica: el MSCI World añade exposición a Europa, Japón y otros mercados desarrollados fuera de EE.UU., mientras que el S&P 500 es una apuesta concentrada (aunque diversificada por sectores y empresas) específicamente en la economía estadounidense.

Ninguno de los dos incluye mercados emergentes (China, India, Brasil, etc. — Lección 2.6), ni empresas de pequeña capitalización (small caps), que quedan fuera de ambos índices por diseño.`,
          numericExample:
            "Si un fondo indexado al MSCI World tiene aproximadamente un 68% en EE.UU., un 6% en Japón, un 4% en Reino Unido y el resto repartido entre otros países desarrollados (proporciones aproximadas y variables en el tiempo), un inversor que ponga 10.000€ en ese fondo tendría, de forma indirecta, unos 6.800€ expuestos a empresas estadounidenses, 600€ a Japón, 400€ a Reino Unido, y el resto distribuido en otros mercados desarrollados — todo con una sola operación de compra.",
          realExample:
            "Empresas como Apple, Microsoft, Nvidia o Amazon están presentes tanto en el S&P 500 como en el MSCI World (como parte de su componente estadounidense), pero el MSCI World añade también empresas como Nestlé (Suiza), Toyota (Japón) o LVMH (Francia), que no forman parte del S&P 500 por no ser estadounidenses.",
          analogy:
            "Invertir en el S&P 500 es como apostar por el mejor restaurante de una ciudad muy próspera y con mucho talento culinario (EE.UU.). Invertir en el MSCI World es como apostar por los mejores restaurantes de las principales ciudades desarrolladas del mundo a la vez, dando más peso a esa ciudad próspera (por su tamaño relativo) pero sin depender exclusivamente de ella.",
          mistakes: [
            "Pensar que el MSCI World está \"muy diversificado geográficamente\" en la práctica, sin tener en cuenta que EE.UU. sigue representando la mayoría del índice.",
            "Creer que el S&P 500 incluye empresas de fuera de EE.UU. solo porque esas empresas venden productos a nivel global (lo relevante es dónde cotiza la empresa, no dónde vende).",
            "Asumir que uno de los dos índices es \"mejor\" de forma objetiva: la elección depende de las preferencias de diversificación geográfica de cada inversor, algo que se trata con más profundidad en el Módulo 5.",
          ],
          summary:
            "El MSCI World ofrece exposición a grandes y medianas empresas de todo el mundo desarrollado (con fuerte peso de EE.UU.), mientras que el S&P 500 se concentra exclusivamente en 500 grandes empresas estadounidenses. Ninguno incluye mercados emergentes ni pequeñas empresas. La elección entre ambos (o una combinación) es una decisión de diversificación geográfica que cada inversor debe sopesar según sus preferencias.",
          exercises: {
            quiz: [
              {
                q: "El MSCI World, a diferencia del S&P 500, incluye:",
                options: [
                  "Solo empresas de mercados emergentes",
                  "Empresas de múltiples países desarrollados, no solo de EE.UU.",
                  "Solo empresas tecnológicas",
                  "Empresas de pequeña capitalización (small caps) de todo el mundo",
                ],
                correct: 1,
                explain:
                  "El MSCI World amplía la diversificación geográfica a unos 23 países desarrollados, mientras el S&P 500 se limita a EE.UU. Ninguno de los dos incluye mercados emergentes ni small caps por diseño.",
              },
              {
                q: "Aproximadamente, ¿qué proporción del MSCI World suele representar Estados Unidos?",
                options: [
                  "Menos del 10%",
                  "Alrededor de un 25%",
                  "Entre un 65-70% aproximadamente (varía con el tiempo)",
                  "El 100%, es idéntico al S&P 500",
                ],
                correct: 2,
                explain:
                  "Debido a la ponderación por capitalización bursátil, EE.UU. representa una parte muy mayoritaria del MSCI World, aunque el índice incluya otros 22 países desarrollados. Esta proporción fluctúa con el tiempo según la evolución relativa de los distintos mercados.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un amigo te dice: \"Prefiero invertir en el S&P 500 porque ya incluye empresas globales como Apple o Nike, que venden en todo el mundo, así que ya estoy diversificado internacionalmente.\" ¿Qué le matizarías?",
                solution:
                  "Hay una confusión común entre \"dónde vende sus productos una empresa\" y \"dónde cotiza esa empresa\" (que es lo que determina su inclusión en un índice). Es cierto que muchas empresas del S&P 500 generan una parte importante de sus ingresos fuera de EE.UU., lo cual da cierta exposición indirecta a la economía global. Pero esto es distinto de la diversificación geográfica en el sentido del índice: el S&P 500 sigue estando compuesto al 100% por empresas que cotizan en EE.UU. y están sujetas a su regulación, su ciclo económico, su divisa (el dólar) y su mercado bursátil específico. El MSCI World, en cambio, incluye empresas que cotizan y están domiciliadas en otros países desarrollados, lo cual sí añade una capa adicional de diversificación geográfica en un sentido más estructural (regulación, divisa, ciclo económico del país).",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor pone 8.000€ en un fondo indexado al MSCI World con la siguiente distribución aproximada: 68% EE.UU., 6% Japón, 4% Reino Unido, 22% resto de países desarrollados. Calcula cuántos euros de su inversión quedan expuestos, de forma indirecta, a cada una de esas tres zonas principales.",
                solution:
                  "EE.UU.: 8.000€ × 0,68 = 5.440€.\nJapón: 8.000€ × 0,06 = 480€.\nReino Unido: 8.000€ × 0,04 = 320€.\nResto de países desarrollados: 8.000€ × 0,22 = 1.760€.\n\nEsto ilustra que, aunque el fondo se llame \"World\" (mundial), la mayoría del capital sigue concentrado en un único país (EE.UU.), simplemente porque su mercado bursátil es, en términos de capitalización, mucho mayor que el de cualquier otro país desarrollado individual.",
              },
            ],
            reflection:
              "¿Te sorprende el peso que tiene Estados Unidos dentro del MSCI World? ¿Crees que preferirías una exposición geográfica más repartida (aunque fuera artificialmente, no según capitalización de mercado), o te parece razonable que el índice refleje el tamaño real de cada mercado?",
          },
        },
        {
          id: "m2l4",
          title: "Nasdaq y Russell",
          simple:
            "El Nasdaq es, sobre todo en su versión más conocida (Nasdaq-100), un índice con fuerte peso tecnológico dentro de EE.UU. Los índices Russell (como el Russell 2000) se centran en empresas estadounidenses de menor tamaño (small caps), a diferencia del S&P 500 que se centra en las grandes.",
          technical: `Nasdaq: es tanto el nombre de una bolsa electrónica estadounidense (donde cotizan muchas empresas tecnológicas, aunque no exclusivamente) como el nombre de varios índices asociados a ella. El más conocido para inversores es el Nasdaq-100, que agrupa a las 100 mayores empresas no financieras que cotizan en el Nasdaq, con un peso muy significativo del sector tecnológico (aunque también incluye empresas de consumo, salud y otros sectores). Es importante no confundir "cotizar en el Nasdaq" (la bolsa) con "formar parte del índice Nasdaq-100" (un subconjunto seleccionado).

Russell: FTSE Russell elabora una familia de índices estadounidenses organizados por tamaño de empresa. Los más conocidos son:
- Russell 1000: las 1.000 mayores empresas de EE.UU. por capitalización (similar en espíritu al S&P 500, aunque con metodología distinta).
- Russell 2000: las siguientes 2.000 empresas por tamaño, es decir, empresas de pequeña capitalización (small caps) de EE.UU. Es el índice de referencia más citado para el segmento de small caps estadounidenses.
- Russell 3000: combina ambos, cubriendo aproximadamente el 98% de la capitalización bursátil total del mercado estadounidense.

La diferencia práctica entre el S&P 500 (grandes empresas) y el Russell 2000 (pequeñas empresas) es relevante porque las empresas pequeñas suelen tener un comportamiento distinto: potencialmente más crecimiento futuro, pero también históricamente más volatilidad y más sensibilidad a las condiciones económicas locales (por ejemplo, a los tipos de interés de la Reserva Federal, Módulo 4).`,
          numericExample:
            "Si un inversor compara un fondo indexado al Nasdaq-100 con uno al S&P 500 durante un periodo de fuerte subida del sector tecnológico, es probable que el Nasdaq-100 muestre una rentabilidad superior, precisamente por su mayor concentración en tecnología. Pero esa misma concentración implica mayor volatilidad: en periodos de caída específica del sector tecnológico (como ocurrió en 2000-2002 con la crisis \"puntocom\"), el Nasdaq puede caer proporcionalmente mucho más que un índice más diversificado por sectores como el S&P 500.",
          realExample:
            "Empresas como Meta, Alphabet (Google), Amazon o Nvidia forman parte tanto del S&P 500 como del Nasdaq-100 (cotizan en el Nasdaq y son de las mayores de EE.UU.). En cambio, una empresa industrial pequeña o mediana estadounidense probablemente no aparezca en ninguno de los dos índices anteriores, pero sí podría estar presente en el Russell 2000, precisamente por estar diseñado para capturar ese segmento de menor tamaño que los grandes índices dejan fuera.",
          analogy:
            "Si el S&P 500 es como la liga de las grandes empresas consolidadas, el Russell 2000 es como la liga de equipos más jóvenes y pequeños con más potencial de crecimiento (y más riesgo de no consolidarse). El Nasdaq-100, por su parte, es como una selección de los mejores jugadores de un tipo de juego muy concreto (principalmente tecnología), sin importar tanto la liga en la que compitan.",
          mistakes: [
            "Confundir \"cotizar en el Nasdaq\" (la bolsa) con \"formar parte del índice Nasdaq-100\" (solo 100 empresas seleccionadas).",
            "Pensar que el Russell 2000, por ser de \"empresas pequeñas\", es automáticamente menos arriesgado por ser menos conocido: en realidad, las small caps suelen ser más volátiles, no menos.",
            "Asumir que un índice muy concentrado en un sector (como el Nasdaq-100 en tecnología) ofrece la misma diversificación sectorial que un índice más amplio como el S&P 500.",
          ],
          summary:
            "El Nasdaq-100 concentra grandes empresas no financieras del Nasdaq, con fuerte peso tecnológico. Los índices Russell (especialmente el Russell 2000) capturan el segmento de empresas pequeñas de EE.UU., que queda fuera de índices como el S&P 500. Ambas familias de índices son herramientas para acceder a segmentos específicos del mercado estadounidense (por sector o por tamaño de empresa), más allá de la exposición \"genérica\" a grandes empresas.",
          exercises: {
            quiz: [
              {
                q: "El índice Nasdaq-100 se caracteriza por:",
                options: [
                  "Incluir únicamente empresas financieras",
                  "Tener un peso significativo del sector tecnológico entre sus 100 mayores empresas no financieras",
                  "Ser idéntico al S&P 500",
                  "Incluir solo empresas de fuera de EE.UU.",
                ],
                correct: 1,
                explain:
                  "El Nasdaq-100 agrupa a las 100 mayores empresas no financieras del Nasdaq, con una concentración notable en tecnología, aunque también incluye otros sectores como consumo o salud.",
              },
              {
                q: "El Russell 2000 es el índice de referencia para:",
                options: [
                  "Las 2.000 mayores empresas del mundo",
                  "Empresas de pequeña capitalización (small caps) de Estados Unidos",
                  "Empresas exclusivamente tecnológicas",
                  "Bonos del gobierno estadounidense",
                ],
                correct: 1,
                explain:
                  "El Russell 2000 recoge el segmento de pequeña capitalización del mercado estadounidense, complementando a índices de grandes empresas como el S&P 500 o el Russell 1000.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te comenta: \"Voy a invertir todo mi capital en un fondo indexado al Nasdaq-100 porque en los últimos años ha rentado más que el S&P 500.\" ¿Qué le preguntarías o qué matices le pondrías, conectando con lo aprendido sobre riesgo y diversificación en el Módulo 1?",
                solution:
                  "La rentabilidad pasada superior no es garantía de rentabilidad futura, y es importante entender por qué ha sido superior: principalmente por la fuerte concentración en el sector tecnológico, que ha tenido un comportamiento muy favorable en el periodo reciente. Esa misma concentración es una forma de menor diversificación sectorial comparada con el S&P 500 (que reparte el peso entre tecnología, salud, finanzas, energía, consumo, industria, etc.). Un fondo Nasdaq-100 puede comportarse peor que el S&P 500 en periodos donde el sector tecnológico tenga un mal desempeño relativo (como ocurrió en 2000-2002). No es una decisión \"incorrecta\" per se, pero conviene tomarla siendo consciente de que se está aumentando la concentración sectorial (y por tanto, potencialmente, la volatilidad) a cambio de una mayor exposición a un sector concreto, en vez de estar tomando una decisión \"neutral\" de diversificación amplia.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Durante un año concreto, el sector tecnológico (con fuerte peso en el Nasdaq-100) sube un 35%, mientras que el resto de sectores del mercado estadounidense (más representados en el S&P 500 en su conjunto) suben de media solo un 8%. Si el Nasdaq-100 tiene aproximadamente un 55% de peso en tecnología y el resto (45%) se comporta como la media del mercado general (8%), calcula la rentabilidad aproximada del Nasdaq-100 ese año.",
                solution:
                  "Contribución del componente tecnológico: 55% × 35% = 19,25%.\nContribución del resto: 45% × 8% = 3,6%.\nRentabilidad aproximada del índice: 19,25% + 3,6% = 22,85%.\n\nEste cálculo simplificado ilustra cómo la concentración sectorial de un índice como el Nasdaq-100 amplifica el efecto (positivo o negativo) del sector dominante sobre el resultado total del índice, en comparación con un índice más diversificado sectorialmente.",
              },
            ],
            reflection:
              "¿Te habías planteado antes la diferencia entre \"cotizar en una bolsa\" (como el Nasdaq) y \"formar parte de un índice concreto\" (como el Nasdaq-100)? ¿Por qué crees que esta distinción es importante a la hora de elegir en qué fondo indexado invertir?",
          },
        },
        {
          id: "m2l5",
          title: "Euro Stoxx y otros índices europeos",
          simple:
            "El Euro Stoxx 50 reúne a las 50 mayores empresas de la zona euro. Es el índice de referencia más citado para la eurozona, aunque mucho más pequeño y concentrado que índices como el S&P 500 o el MSCI World.",
          technical: `El Euro Stoxx 50, elaborado por STOXX (una filial de Deutsche Börse), agrupa a las 50 empresas de mayor capitalización de los países que forman parte de la zona euro (es decir, países que usan el euro como moneda: Alemania, Francia, España, Italia, Países Bajos, entre otros — pero no incluye, por ejemplo, al Reino Unido, que ni siquiera usa el euro).

Es importante notar varias limitaciones de este índice frente a los índices globales vistos anteriormente:

- Concentración geográfica: solo cubre la eurozona, dejando fuera al resto del mundo (incluyendo mercados europeos importantes fuera del euro, como el Reino Unido o Suiza).
- Concentración por número de empresas: solo 50 empresas, frente a las 500 del S&P 500 o las 1.300-1.500 del MSCI World, lo que implica menos diversificación en términos absolutos.
- Concentración sectorial: suele tener un peso relativamente alto en sectores como el financiero y el industrial, con menor presencia relativa de grandes tecnológicas comparado con EE.UU.

Existen otros índices europeos relevantes a nivel nacional o regional, como el IBEX 35 (35 mayores empresas españolas), el DAX (40 mayores empresas alemanas), el CAC 40 (40 mayores empresas francesas), o el FTSE 100 (100 mayores empresas del Reino Unido, que no usa el euro).

Para un inversor global indexado con el enfoque de este curso, estos índices europeos suelen usarse más como referencia informativa o como parte de la porción europea de un fondo MSCI World, que como vehículo principal único de inversión — aunque hay quien decide darle un peso adicional específico a Europa dentro de su cartera (Módulo 5).`,
          numericExample:
            "El Euro Stoxx 50, con solo 50 empresas, tiene un nivel de concentración mucho mayor que el MSCI World (más de 1.300 empresas). Si las 10 mayores empresas del Euro Stoxx 50 representan, por ejemplo, un 45% del índice (cifra ilustrativa, varía con el tiempo), un movimiento fuerte en esas 10 empresas concretas tiene un impacto mucho más visible en el índice completo que en un índice mucho más amplio y diversificado como el MSCI World.",
          realExample:
            "Empresas como LVMH (lujo, Francia), SAP (software, Alemania), o Iberdrola (energía, España) forman parte del Euro Stoxx 50. Estas mismas empresas también están incluidas dentro de la porción europea de un fondo MSCI World, ya que Francia, Alemania y España son países desarrollados de la eurozona incluidos en ese índice más amplio.",
          analogy:
            "Si el MSCI World es como ver el mapa completo de restaurantes destacados de todas las grandes ciudades desarrolladas del mundo, el Euro Stoxx 50 es como ver solo el mapa de restaurantes de un barrio concreto (la eurozona) — útil si te interesa específicamente esa zona, pero mucho más limitado si tu objetivo es una vista global.",
          mistakes: [
            "Confundir \"eurozona\" (países que usan el euro) con \"Europa\" en un sentido más amplio (que incluye países como el Reino Unido o Suiza, que no usan el euro).",
            "Pensar que 50 empresas ofrecen un nivel de diversificación comparable al de cientos o miles de empresas de un índice global.",
            "Usar el Euro Stoxx 50 como única referencia de \"cómo le va a Europa\", sin tener en cuenta que deja fuera mercados europeos importantes no pertenecientes a la eurozona.",
          ],
          summary:
            "El Euro Stoxx 50 es el índice de referencia de las 50 mayores empresas de la eurozona, útil como termómetro regional, pero mucho más concentrado (por número de empresas, geografía y sector) que índices globales como el MSCI World o el S&P 500. Existen además índices nacionales relevantes (IBEX 35, DAX, CAC 40, FTSE 100) que reflejan mercados bursátiles concretos de cada país.",
          exercises: {
            quiz: [
              {
                q: "El Euro Stoxx 50 incluye empresas de:",
                options: [
                  "Todo el mundo desarrollado",
                  "Únicamente países de la eurozona (que usan el euro)",
                  "Solo España",
                  "Solo empresas tecnológicas europeas",
                ],
                correct: 1,
                explain:
                  "El Euro Stoxx 50 se limita a las 50 mayores empresas de países de la eurozona, dejando fuera mercados europeos relevantes que no usan el euro, como el Reino Unido o Suiza.",
              },
              {
                q: "Comparado con el MSCI World, el Euro Stoxx 50 ofrece:",
                options: [
                  "Mayor diversificación geográfica y por número de empresas",
                  "Menor diversificación geográfica y por número de empresas, al centrarse solo en 50 empresas de la eurozona",
                  "Exactamente la misma diversificación",
                  "Diversificación en mercados emergentes que el MSCI World no tiene",
                ],
                correct: 1,
                explain:
                  "Con solo 50 empresas y limitado a la eurozona, el Euro Stoxx 50 tiene una diversificación mucho menor —tanto geográfica como en número de empresas— que el MSCI World, que cubre unos 23 países desarrollados y más de 1.300 empresas.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un familiar te dice: \"El Reino Unido debe estar incluido en el Euro Stoxx 50, es uno de los países más importantes de Europa.\" ¿Qué le explicarías sobre por qué esto no es así?",
                solution:
                  "El Euro Stoxx 50 no se organiza según el criterio \"países importantes de Europa en general\", sino específicamente según los países que forman parte de la eurozona, es decir, que usan el euro como moneda oficial. El Reino Unido, aunque geográfica y económicamente es una parte muy relevante de Europa, nunca ha adoptado el euro (mantuvo la libra esterlina) y, además, ya no forma parte de la Unión Europea tras el Brexit. Por eso sus empresas (como HSBC, Shell o AstraZeneca) no aparecen en el Euro Stoxx 50, aunque sí podrían aparecer en otros índices como el FTSE 100 (específico del Reino Unido) o dentro de la porción europea de un índice más amplio como el MSCI World, que sí incluye países desarrollados fuera de la eurozona.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Si el Euro Stoxx 50 tiene 50 empresas y el MSCI World tiene aproximadamente 1.400 empresas, calcula qué porcentaje del número total de empresas del MSCI World representaría, en términos puramente numéricos, el conjunto de empresas del Euro Stoxx 50 (asumiendo, de forma simplificada, que todas las empresas del Euro Stoxx 50 estuvieran también en el MSCI World).",
                solution:
                  "50 / 1.400 × 100 ≈ 3,57%.\n\nEsto ilustra, de forma simplificada y solo en términos de número de empresas (no de peso ponderado, que sería otro cálculo), que el Euro Stoxx 50 representa una porción muy pequeña del universo de empresas cubierto por un índice global como el MSCI World. No es una comparación exacta de peso económico real (que dependería de las capitalizaciones bursátiles concretas), pero sí da una idea intuitiva de la diferencia de amplitud entre ambos índices.",
              },
            ],
            reflection:
              "¿Conocías la diferencia entre \"eurozona\" y \"Europa\" en el contexto de los índices bursátiles antes de esta lección? ¿Te parece relevante esta distinción a la hora de entender qué compone realmente un fondo indexado con nombre \"europeo\"?",
          },
        },
        {
          id: "m2l6",
          title: "Mercados emergentes",
          simple:
            "Los mercados emergentes son economías en desarrollo (como China, India, Brasil o México) que no se consideran \"desarrolladas\" según los criterios de los proveedores de índices. Ofrecen potencial de crecimiento adicional, junto con más riesgos específicos (políticos, de divisa, de gobernanza empresarial).",
          technical: `Los proveedores de índices (MSCI, FTSE, entre otros) clasifican a los países en categorías como "desarrollados", "emergentes" y "frontera" (frontier markets, economías aún menos desarrolladas y líquidas que las emergentes), según criterios como el tamaño y liquidez de su mercado bursátil, el nivel de desarrollo económico, y la calidad de su marco regulatorio e institucional para inversores extranjeros.

El índice MSCI Emerging Markets es el más citado como referencia de este segmento, e incluye países como China, India, Taiwán, Corea del Sur (en algunas clasificaciones, aunque a veces se considera desarrollado según el proveedor), Brasil, México, Sudáfrica, entre otros.

Los mercados emergentes presentan características diferenciales importantes frente a los desarrollados:

- Potencial de crecimiento económico generalmente más alto (economías en proceso de industrialización o desarrollo, con poblaciones más jóvenes en muchos casos).
- Mayor volatilidad histórica, tanto por factores económicos como políticos.
- Riesgo de divisa: al invertir en empresas que operan y reportan en monedas locales (yuan chino, rupia india, real brasileño, etc.), la rentabilidad para un inversor en euros depende también de cómo evolucione el tipo de cambio.
- Riesgo de gobernanza: en algunos mercados emergentes, la protección legal a los accionistas minoritarios, la transparencia contable, o la independencia judicial pueden ser menores que en mercados desarrollados, lo que añade una capa de riesgo específico.
- Riesgo político y regulatorio: cambios de gobierno, políticas económicas, o intervenciones estatales pueden tener un impacto más marcado que en economías desarrolladas más estables institucionalmente.

Ni el MSCI World ni el S&P 500 incluyen mercados emergentes: quien quiera esa exposición debe añadirla explícitamente con un fondo específico (como uno que replique el MSCI Emerging Markets), o elegir un índice más amplio como el MSCI ACWI (All Country World Index), que sí combina mercados desarrollados y emergentes en un solo índice.`,
          numericExample:
            "Un inversor que solo tenga un fondo MSCI World tiene 0% de exposición directa a China, India o Brasil, ya que estos países se consideran emergentes y quedan fuera de ese índice. Si quisiera añadir, por ejemplo, un 10% de su cartera a mercados emergentes, tendría que comprar explícitamente un fondo indexado al MSCI Emerging Markets (o similar) y dedicarle esa proporción de su capital total, como se vería en detalle en el Módulo 5 sobre construcción de carteras.",
          realExample:
            "Empresas como Tencent y Alibaba (China), Taiwan Semiconductor Manufacturing Company —TSMC— (Taiwán, según clasificación) o Reliance Industries (India) forman parte del índice MSCI Emerging Markets, pero no aparecen en el MSCI World ni en el S&P 500, precisamente por no cotizar en países clasificados como desarrollados.",
          analogy:
            "Invertir en mercados desarrollados es como invertir en negocios ya consolidados en ciudades con infraestructuras maduras y reglas de juego muy estables. Invertir en mercados emergentes es como invertir en negocios de ciudades en pleno crecimiento y transformación: hay más margen para un crecimiento espectacular, pero también más incertidumbre sobre las reglas del juego, la estabilidad del entorno, y los posibles baches en el camino.",
          mistakes: [
            "Asumir que un fondo MSCI World o S&P 500 ya incluye exposición a China, India u otros mercados emergentes — no la incluye por diseño.",
            "Ignorar el riesgo de divisa al invertir en mercados emergentes: la rentabilidad en euros puede diferir bastante de la rentabilidad en la moneda local de esas empresas.",
            "Sobreponderar mercados emergentes en la cartera solo por su potencial de crecimiento, sin considerar la mayor volatilidad y los riesgos específicos que conllevan (esto se trata con más profundidad en el Módulo 5).",
          ],
          summary:
            "Los mercados emergentes (China, India, Brasil, y otros) ofrecen potencial de crecimiento adicional frente a los mercados desarrollados, pero con mayor volatilidad, riesgo de divisa y riesgo de gobernanza. Quedan fuera del MSCI World y del S&P 500 por diseño, por lo que un inversor que quiera esa exposición debe añadirla explícitamente mediante un fondo específico como uno que replique el MSCI Emerging Markets, o usar un índice combinado como el MSCI ACWI.",
          exercises: {
            quiz: [
              {
                q: "Un fondo indexado al MSCI World tiene exposición a mercados emergentes como China o India:",
                options: [
                  "Sí, en torno a un 20% del índice",
                  "No, los mercados emergentes quedan fuera del MSCI World por diseño",
                  "Solo si el gestor del fondo lo decide de forma discrecional",
                  "Sí, pero solo a través de empresas occidentales que venden en esos países",
                ],
                correct: 1,
                explain:
                  "El MSCI World está diseñado específicamente para incluir solo países clasificados como desarrollados. China, India, Brasil y otros mercados emergentes quedan fuera por definición del índice, no por decisión de ningún gestor concreto.",
              },
              {
                q: "Uno de los riesgos específicos y adicionales de invertir en mercados emergentes, comparado con mercados desarrollados, es:",
                options: [
                  "El riesgo de divisa, al invertir en empresas que operan en monedas locales distintas al euro",
                  "La ausencia total de cualquier tipo de riesgo",
                  "La garantía legal de rentabilidad mínima",
                  "La imposibilidad total de invertir en ellos desde España",
                ],
                correct: 0,
                explain:
                  "El riesgo de divisa es un factor adicional relevante en mercados emergentes: la rentabilidad final en euros depende también de cómo evolucione el tipo de cambio entre el euro y las monedas locales de esos mercados (yuan, rupia, real, etc.).",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Como mi fondo se llama 'MSCI World' (mundial), ya tengo exposición a todo el mundo, incluida China.\" ¿Qué le explicarías sobre esta afirmación?",
                solution:
                  "El nombre \"World\" puede llevar a confusión, pero en el contexto de los proveedores de índices como MSCI, \"World\" se refiere específicamente al conjunto de países clasificados como \"desarrollados\", no a todos los países del mundo. China, al estar clasificada como mercado emergente, queda excluida del MSCI World por diseño del índice, independientemente de su enorme peso económico global. Para tener exposición a China (y a otros mercados emergentes), el inversor necesitaría añadir explícitamente un fondo indexado al MSCI Emerging Markets, o elegir directamente un índice combinado como el MSCI ACWI, que si integra ambas categorías (desarrollados y emergentes) en un solo producto. Es un matiz de nomenclatura importante que puede llevar a una falsa sensación de diversificación global completa cuando en realidad no la hay.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tiene 15.000€ repartidos así: 80% en un fondo MSCI World y 20% en un fondo MSCI Emerging Markets. Calcula cuántos euros tiene en cada fondo. Si el fondo emergente cae un 15% mientras el fondo de desarrollados se mantiene plano (0%), calcula el valor total de la cartera tras ese movimiento y la pérdida porcentual sobre el total de la cartera.",
                solution:
                  "MSCI World: 15.000€ × 0,80 = 12.000€.\nMSCI Emerging Markets: 15.000€ × 0,20 = 3.000€.\n\nTras la caída del 15% en emergentes: 3.000€ × 0,85 = 2.550€ (pérdida de 450€).\nEl fondo de desarrollados se mantiene en 12.000€ (0% de cambio).\n\nValor total de la cartera: 12.000 + 2.550 = 14.550€.\nPérdida sobre el total de la cartera: 450€ / 15.000€ = 3% aproximadamente.\n\nEste ejercicio ilustra cómo una caída fuerte (15%) en la porción emergente de la cartera, al representar solo el 20% del total, se traduce en un impacto mucho más moderado (3%) sobre el conjunto de la cartera — el mismo principio de diversificación que viste en el Módulo 1, aplicado ahora a nivel de asignación entre distintos mercados geográficos.",
              },
            ],
            reflection:
              "¿Te resultaba intuitivo que un fondo llamado \"MSCI World\" no incluyera países tan grandes económicamente como China o India? ¿Cómo crees que esta distinción entre \"desarrollado\" y \"emergente\" podría influir en tu decisión de construir una cartera diversificada globalmente (algo que veremos en más detalle en el Módulo 5)?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 2",
        passScore: 70,
        questions: [
          {
            q: "Cuando compras acciones de una empresa que ya cotiza en bolsa desde hace años, en la mayoría de los casos:",
            options: [
              "El dinero va directamente a la empresa",
              "El dinero va a otro inversor que te vende esas acciones (mercado secundario)",
              "El dinero se destina a pagar impuestos de la empresa",
              "La empresa emite acciones nuevas específicamente para esa operación",
            ],
            correct: 1,
            topic: "Qué es la bolsa",
          },
          {
            q: "En un índice ponderado por capitalización bursátil:",
            options: [
              "Todas las empresas tienen exactamente el mismo peso",
              "Las empresas de mayor valor de mercado tienen más peso en el resultado del índice",
              "El peso se basa únicamente en la antigüedad de la empresa",
              "Solo cuentan las empresas con dividendos",
            ],
            correct: 1,
            topic: "Qué es un índice bursátil",
          },
          {
            q: "El MSCI World incluye:",
            options: [
              "Solo empresas de Estados Unidos",
              "Empresas de mercados emergentes como China e India",
              "Grandes y medianas empresas de países desarrollados de todo el mundo",
              "Solo empresas tecnológicas globales",
            ],
            correct: 2,
            topic: "MSCI World y S&P 500",
          },
          {
            q: "El S&P 500, a diferencia del MSCI World, se limita a:",
            options: [
              "Empresas europeas",
              "500 grandes empresas de Estados Unidos",
              "Empresas de mercados emergentes",
              "Empresas de pequeña capitalización de todo el mundo",
            ],
            correct: 1,
            topic: "MSCI World y S&P 500",
          },
          {
            q: "El Russell 2000 es el índice de referencia para:",
            options: [
              "Las mayores 2.000 empresas del mundo",
              "Empresas de pequeña capitalización (small caps) de Estados Unidos",
              "Bonos corporativos estadounidenses",
              "Empresas exclusivamente del sector energético",
            ],
            correct: 1,
            topic: "Nasdaq y Russell",
          },
          {
            q: "El Euro Stoxx 50 incluye empresas de:",
            options: [
              "Todo el continente europeo, incluyendo Reino Unido y Suiza",
              "Únicamente países de la eurozona (que usan el euro)",
              "Solo Alemania y Francia",
              "Mercados emergentes europeos",
            ],
            correct: 1,
            topic: "Euro Stoxx y otros índices europeos",
          },
          {
            q: "¿Un fondo indexado al MSCI World tiene exposición directa a China o India?",
            options: [
              "Sí, ambos países forman parte del MSCI World",
              "No, ambos se consideran mercados emergentes y quedan fuera del MSCI World por diseño",
              "Solo India, pero no China",
              "Depende exclusivamente del gestor del fondo",
            ],
            correct: 1,
            topic: "Mercados emergentes",
          },
          {
            q: "Un índice simplificado tiene 2 empresas: Empresa P (capitalización 600M€) y Empresa Q (capitalización 400M€). Si la Empresa P sube un 10% y la Empresa Q se mantiene plana, ¿cuánto sube aproximadamente el índice completo?",
            options: ["10%", "6%", "5%", "4%"],
            correct: 1,
            topic: "Qué es un índice bursátil (cálculo)",
          },
        ],
      },
    },
    {
      id: "m3",
      number: 3,
      title: "ETFs, fondos indexados y fondos activos",
      objective:
        "Entender qué son realmente los ETFs y los fondos indexados, en qué se diferencian de los fondos de gestión activa, y aprender a evaluar un fondo por sus comisiones, su tracking error y su liquidez — las variables prácticas que más afectan a tu rentabilidad real a 20 años.",
      time: "6 sesiones de ~35 min",
      prereq: "Módulos 0, 1 y 2 completos (riesgo, empresas, acciones, índices).",
      learn:
        "A distinguir un ETF de un fondo indexado tradicional, a entender por qué la gestión activa rara vez bate al mercado a largo plazo, y a leer las variables clave (TER, tracking error, liquidez) que determinan si un fondo es una buena herramienta para tu estrategia.",
      lessons: [
        {
          id: "m3l1",
          title: "Qué es un fondo indexado",
          simple:
            "Un fondo indexado es un vehículo de inversión que compra, de forma automática y sin intervención humana en la selección, las mismas empresas (y en las mismas proporciones) que componen un índice concreto, como el MSCI World o el S&P 500.",
          technical: `Un fondo de inversión es un vehículo legal que agrupa el dinero de muchos inversores (partícipes) y lo invierte de forma conjunta según una política de inversión determinada, gestionado por una sociedad gestora. Cada partícipe posee participaciones del fondo, cuyo valor (valor liquidativo) refleja proporcionalmente el valor de todos los activos que posee el fondo.

Un fondo indexado (o fondo índice) es un tipo de fondo cuya política de inversión consiste, específicamente, en replicar la composición de un índice bursátil concreto, comprando (en la medida de lo posible) las mismas empresas y en las mismas proporciones que ese índice. La gestión es "pasiva": no hay un gestor tomando decisiones activas sobre qué empresas comprar o vender basándose en su propio análisis o criterio; el fondo simplemente sigue las reglas mecánicas del índice de referencia.

Existen distintas formas técnicas de replicar un índice:

- Réplica física completa: el fondo compra directamente todas las empresas del índice, en su proporción exacta.
- Réplica física por muestreo (sampling): para índices con miles de componentes, el fondo compra una muestra representativa que se comporta de forma muy similar al índice completo, sin comprar literalmente cada una de las empresas (más eficiente en costes de operación).
- Réplica sintética: el fondo no compra directamente las acciones del índice, sino que utiliza instrumentos financieros derivados (como swaps) con una contraparte (normalmente un banco) que se compromete a pagar la rentabilidad del índice a cambio de una comisión. Esto añade una capa de riesgo de contraparte adicional que conviene entender si se elige este tipo de fondo.

Para un inversor con el enfoque de este curso (largo plazo, indexación, simplicidad), los fondos indexados son especialmente relevantes en España por su tratamiento fiscal específico: permiten el traspaso entre fondos sin tributar en el momento del cambio (a diferencia de los ETFs, que si tributan al vender) — esto se trata en detalle en el Módulo 7.`,
          numericExample:
            "Un fondo indexado al S&P 500 con 500 millones de euros bajo gestión, que replica el índice por muestreo, podría poseer, por ejemplo, un 7% en Apple, un 6,5% en Microsoft, y proporciones decrecientes en el resto de las 500 empresas, replicando (con pequeñas desviaciones técnicas) los pesos exactos del índice S&P 500 real. Si tú inviertes 5.000€ en ese fondo, indirectamente posees, de forma proporcional, un trocito de las 500 empresas, en las mismas proporciones aproximadas que el índice.",
          realExample:
            "Gestoras como Vanguard, iShares (BlackRock), Amundi o Fidelity ofrecen fondos indexados que replican índices como el MSCI World o el S&P 500, con comisiones de gestión (TER, tratado en la Lección 3.4) que suelen oscilar entre el 0,10% y el 0,40% anual aproximadamente, muy por debajo de las comisiones típicas de fondos de gestión activa.",
          analogy:
            "Un fondo indexado es como contratar a alguien para que fotocopie exactamente la lista de la compra de otra persona (el índice), en vez de pagarle a un chef para que decida qué comprar según su propio criterio cada semana. La fotocopiadora (gestión pasiva) es mucho más barata que el chef (gestión activa), y en este caso concreto, resulta que la mayoría de los chefs no consiguen superar sistemáticamente el resultado de simplemente seguir la lista original (esto se explora en la Lección 3.3).",
          mistakes: [
            "Pensar que un fondo indexado \"no tiene ningún gestor\": sigue habiendo una sociedad gestora responsable de ejecutar la réplica correctamente, aunque no tome decisiones activas de selección de valores.",
            "Confundir fondo indexado con ETF: aunque comparten la filosofía de gestión pasiva, son vehículos legales y fiscales distintos (se explica en la Lección 3.2).",
            "No informarse sobre el tipo de réplica (física o sintética) de un fondo concreto, lo cual puede ser relevante para entender los riesgos específicos de ese producto (especialmente el riesgo de contraparte en réplica sintética).",
          ],
          summary:
            "Un fondo indexado replica de forma automática y mecánica la composición de un índice bursátil, sin decisiones activas de selección de empresas. Su gestión pasiva se traduce habitualmente en comisiones mucho más bajas que la gestión activa, y en España tiene además un tratamiento fiscal específico favorable (traspasos sin tributación inmediata) que se trata en el Módulo 7.",
          exercises: {
            quiz: [
              {
                q: "Un fondo indexado se caracteriza principalmente por:",
                options: [
                  "Un gestor que elige activamente qué empresas comprar y vender según su análisis",
                  "Replicar de forma automática la composición de un índice concreto",
                  "Invertir solo en un puñado de empresas seleccionadas manualmente",
                  "Garantizar siempre una rentabilidad mínima",
                ],
                correct: 1,
                explain:
                  "La característica esencial de un fondo indexado es la gestión pasiva: sigue mecánicamente las reglas de un índice, sin decisiones activas de selección de valores por parte de un gestor.",
              },
              {
                q: "La réplica sintética de un índice implica:",
                options: [
                  "Comprar directamente todas las acciones del índice en su proporción exacta",
                  "Usar instrumentos derivados con una contraparte para replicar la rentabilidad del índice, añadiendo riesgo de contraparte",
                  "No replicar el índice en absoluto",
                  "Ser obligatoriamente más barata que la réplica física",
                ],
                correct: 1,
                explain:
                  "La réplica sintética usa derivados (como swaps) con una entidad contraparte, lo que introduce un riesgo adicional (que esa contraparte cumpla su compromiso) que no existe, o existe en mucha menor medida, en la réplica física.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un amigo te dice: \"Un fondo indexado no tiene ningún tipo de gestión, funciona solo, así que da igual qué gestora elija.\" ¿Qué matices le pondrías?",
                solution:
                  "Aunque la gestión es \"pasiva\" en el sentido de que no hay decisiones activas de selección de empresas basadas en el criterio de un gestor, sí existe una sociedad gestora responsable de ejecutar correctamente la réplica del índice, gestionar las entradas y salidas de dinero de los partícipes, y garantizar que el fondo cumple su objetivo de inversión. La calidad de esa ejecución técnica varía entre gestoras y se refleja en variables como el tracking error (Lección 3.5) — es decir, cuánto se desvía el resultado real del fondo respecto al índice que dice replicar. Por eso sí importa qué gestora elegir, aunque la filosofía de fondo (seguir un índice sin selección activa) sea la misma en todos los fondos indexados a un mismo índice.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un fondo indexado al MSCI World tiene 2.000 millones de euros bajo gestión. Si Microsoft representa un 4% del índice MSCI World, ¿cuántos euros del fondo (aproximadamente) están invertidos en Microsoft? Si tú inviertes 3.000€ en ese fondo, ¿cuántos euros de tu inversión están, indirectamente, en Microsoft?",
                solution:
                  "Euros del fondo en Microsoft: 2.000.000.000€ × 0,04 = 80.000.000€ (80 millones de euros).\n\nDe tu inversión de 3.000€: 3.000€ × 0,04 = 120€ están, indirectamente y de forma proporcional, invertidos en Microsoft.\n\nEste cálculo ilustra cómo, sin haber comprado tú directamente ninguna acción de Microsoft, tu participación en el fondo indexado te da una exposición proporcional automática a esa empresa (y a las demás del índice), según el peso exacto que tenga en el índice replicado.",
              },
            ],
            reflection:
              "¿Te sorprende que la gestión \"pasiva\" (sin selección activa de empresas) sea, en la práctica, una de las estrategias más utilizadas por inversores de largo plazo? ¿Qué crees que hace que renunciar a \"elegir las mejores empresas\" pueda ser, para muchos inversores, una decisión razonable?",
          },
        },
        {
          id: "m3l2",
          title: "Qué es un ETF",
          simple:
            "Un ETF (Exchange Traded Fund, fondo cotizado) es, en esencia, un fondo indexado que se compra y vende en la bolsa igual que una acción, en tiempo real durante el horario de mercado, en vez de comprarse a través de la gestora al cierre del día.",
          technical: `Un ETF comparte con un fondo indexado tradicional la filosofía de replicar un índice, pero se diferencia en su estructura legal y en cómo se opera:

- Fondo indexado tradicional: se compra y vende a través de la sociedad gestora (o de un bróker que opere con ella), a un único precio al día: el valor liquidativo, calculado al cierre de la sesión. No cotiza en bolsa en tiempo real.
- ETF: cotiza en una bolsa de valores como si fuera una acción más, con un precio que fluctúa en tiempo real durante el horario de mercado, y se puede comprar y vender en cualquier momento de la sesión bursátil a través de un bróker, igual que cualquier acción.

En España, la diferencia fiscal entre ambos es muy relevante para un inversor de largo plazo: los fondos indexados tradicionales permiten el traspaso entre fondos sin tributar en el momento del cambio (difiriendo el pago de impuestos hasta la venta final), mientras que los ETFs, al operarse como acciones en bolsa, no tienen ese mismo tratamiento y tributan cada vez que se vende con ganancia (esto se trata en profundidad en el Módulo 7).

Ambos vehículos, ETF y fondo indexado, pueden replicar exactamente el mismo índice (por ejemplo, ambos pueden replicar el MSCI World) con estructuras de comisiones similares. La elección entre uno u otro depende, para un inversor español a largo plazo, principalmente de consideraciones fiscales y de la plataforma o bróker que se use para invertir.`,
          numericExample:
            "Si compras un ETF que replica el S&P 500 a las 15:35h de un día de mercado, el precio de compra reflejará el valor del índice en ese preciso instante. Si compras un fondo indexado tradicional al S&P 500 ese mismo día a esa misma hora, la operación no se ejecutará a ese precio instantáneo, sino al valor liquidativo que se calcule al cierre de la sesión (normalmente publicado al día siguiente), independientemente de a qué hora exacta hayas dado la orden.",
          realExample:
            "ETFs como los de iShares (ej. iShares Core MSCI World) o Vanguard (ej. Vanguard FTSE All-World) cotizan en bolsas europeas como Xetra (Alemania) o Euronext, y se pueden comprar a través de cualquier bróker con acceso a esos mercados, con la misma mecánica que comprar una acción de una empresa cotizada.",
          analogy:
            "Un fondo indexado tradicional es como pedir un plato en un restaurante donde el precio se fija una vez al día y es el mismo para todos los que piden ese día, sin importar la hora exacta del pedido. Un ETF es como comprar en un mercado con precios que cambian constantemente en directo, donde puedes ver y aprovechar el precio exacto del momento en que decides comprar.",
          mistakes: [
            "Pensar que un ETF es automáticamente \"mejor\" o \"peor\" que un fondo indexado tradicional de forma universal: depende del contexto fiscal (especialmente relevante en España) y de las necesidades del inversor.",
            "Creer que todos los ETFs son de gestión pasiva: existen también ETFs de gestión activa, aunque son minoritarios frente a los de réplica de índices.",
            "No tener en cuenta que operar un ETF en bolsa puede implicar comisiones de compraventa del bróker (como con cualquier acción), a diferencia de algunos fondos indexados sin comisión de suscripción/reembolso en ciertas plataformas.",
          ],
          summary:
            "Un ETF replica un índice igual que un fondo indexado tradicional, pero cotiza en bolsa en tiempo real y se opera como una acción, mientras que un fondo indexado tradicional se compra a un único valor liquidativo diario a través de la gestora. En España, la elección entre ambos tiene implicaciones fiscales importantes (traspasos sin tributar en fondos, no así en ETFs), que se detallan en el Módulo 7.",
          exercises: {
            quiz: [
              {
                q: "La principal diferencia operativa entre un ETF y un fondo indexado tradicional es:",
                options: [
                  "Los ETFs nunca replican índices, solo los fondos indexados lo hacen",
                  "El ETF cotiza en bolsa en tiempo real; el fondo indexado se opera a un valor liquidativo diario",
                  "Los fondos indexados no pueden comprarse desde España",
                  "No hay ninguna diferencia entre ambos",
                ],
                correct: 1,
                explain:
                  "El ETF se compra y vende en bolsa en tiempo real como una acción, mientras que el fondo indexado tradicional opera a un único valor liquidativo calculado al cierre de cada sesión.",
              },
              {
                q: "En España, una diferencia fiscal relevante entre fondos indexados tradicionales y ETFs es:",
                options: [
                  "Los ETFs siempre pagan menos impuestos",
                  "Los fondos indexados permiten traspasos entre fondos sin tributar en el momento del cambio; los ETFs no tienen ese mismo tratamiento",
                  "Los fondos indexados están prohibidos para residentes en España",
                  "No existe ninguna diferencia fiscal entre ambos vehículos",
                ],
                correct: 1,
                explain:
                  "El régimen de traspasos sin tributación inmediata es una particularidad fiscal española específica de los fondos de inversión tradicionales (incluidos los indexados), que no aplica a los ETFs. Este tema se desarrolla en profundidad en el Módulo 7.",
              },
            ],
            cases: [
              {
                prompt:
                  "Alguien te dice: \"Prefiero los ETFs porque puedo ver el precio moverse en tiempo real, me da más sensación de control.\" Desde la perspectiva de un inversor a largo plazo con la filosofía de este curso, ¿qué reflexión le harías sobre esa preferencia?",
                solution:
                  "Es cierto que operativamente el ETF ofrece esa visibilidad en tiempo real, pero conviene reflexionar sobre si esa característica aporta valor real a una estrategia de inversión a 20 años, o si incluso puede ser contraproducente. Ver el precio moverse constantemente puede fomentar el impulso de operar más de la cuenta (comprar y vender basándose en movimientos de corto plazo), lo cual va en contra de la filosofía de largo plazo y \"comprar y mantener\" que este curso defiende, y puede generar más costes de transacción y, en el caso de ETFs, más eventos fiscales por venta. Para un inversor de largo plazo, la ausencia de esa visibilidad constante en un fondo indexado tradicional (que solo se actualiza una vez al día) puede, paradójicamente, ser una ventaja psicológica: reduce la tentación de reaccionar a movimientos de corto plazo que, a 20 años vista, probablemente sean irrelevantes.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor compra un ETF por valor de 4.000€ y, dos años después, lo vende por 5.200€, generando una plusvalía. Otro inversor invierte los mismos 4.000€ en un fondo indexado equivalente y, en vez de vender, hace un traspaso a otro fondo indexado similar (sin retirar el dinero) cuando su inversión también vale 5.200€. Sin entrar aún en los tipos impositivos exactos (que se detallan en el Módulo 7), ¿en cuál de los dos casos se genera, en ese momento, una obligación fiscal inmediata por la plusvalía de 1.200€?",
                solution:
                  "En el caso del ETF: sí se genera una obligación fiscal inmediata, porque la venta del ETF es un evento fiscal (se materializa la ganancia y hay que declararla y tributar por ella en la próxima declaración de la renta).\n\nEn el caso del fondo indexado con traspaso: no se genera una obligación fiscal inmediata en ese momento, gracias al régimen especial de traspasos entre fondos en España, que permite diferir la tributación hasta que el dinero se retire finalmente del ecosistema de fondos (no solo del fondo concreto). \n\nEste es precisamente el mecanismo fiscal que hace que, para muchos inversores españoles de largo plazo, los fondos indexados tradicionales resulten fiscalmente más eficientes que los ETFs si se prevé hacer cambios de fondo a lo largo de los años — se desarrollará con detalle y con los tipos impositivos exactos en el Módulo 7.",
              },
            ],
            reflection:
              "Si vivieras en España y tu objetivo fuera invertir a 20 años sin necesidad de operar en tiempo real durante el día, ¿qué peso crees que debería tener la ventaja fiscal de los fondos indexados tradicionales en tu decisión de qué vehículo usar, frente a la comodidad operativa de los ETFs?",
          },
        },
        {
          id: "m3l3",
          title: "Fondos de gestión activa",
          simple:
            "Un fondo de gestión activa tiene un gestor (o equipo) que decide qué empresas comprar y vender, intentando superar la rentabilidad del mercado. La evidencia histórica muestra que la mayoría de estos fondos, a largo plazo y después de comisiones, no consiguen batir de forma consistente a un simple índice.",
          technical: `En un fondo de gestión activa, un gestor o equipo de gestión toma decisiones discrecionales sobre qué activos comprar, vender o mantener, basándose en análisis fundamental, técnico, macroeconómico, o una combinación de métodos, con el objetivo declarado de "batir al mercado" (obtener una rentabilidad superior a la de un índice de referencia, ajustada o no por riesgo).

La evidencia empírica acumulada durante décadas, recogida sistemáticamente en informes como el SPIVA (S&P Indices Versus Active) de S&P Dow Jones Indices, muestra de forma consistente que una mayoría significativa de los fondos de gestión activa no logran batir a su índice de referencia en periodos largos (10-15 años o más), una vez descontadas las comisiones. Esta proporción de fondos activos que no baten al índice suele superar el 80-90% en periodos largos, según el mercado y la categoría analizada (las cifras exactas varían según el año y el estudio concreto).

Las razones estructurales de este fenómeno incluyen:

- Comisiones más altas: los fondos activos cobran comisiones de gestión sensiblemente superiores a los fondos indexados (a menudo entre el 1% y el 2% anual, frente al 0,10%-0,40% típico de un indexado), lo cual supone un obstáculo de rentabilidad que hay que superar cada año solo para empatar con el mercado.
- Dificultad de predecir sistemáticamente qué empresas lo harán mejor: los mercados incorporan rápidamente la información pública disponible en los precios (hipótesis de eficiencia de mercado, con matices), lo que dificulta encontrar de forma consistente y repetible oportunidades no reflejadas ya en el precio.
- Rotación de gestores y falta de persistencia: un gestor que lo hace bien un periodo no garantiza que lo siga haciendo en el futuro; la evidencia de persistencia en el rendimiento superior de los gestores activos es débil.

Esto no significa que ningún gestor activo bata nunca al mercado (algunos lo consiguen, especialmente en periodos concretos o categorías de activos menos eficientes), sino que es estadísticamente difícil identificar de antemano cuáles lo conseguirán de forma sostenida, y que la mayoría, en conjunto y a largo plazo, no lo logra tras comisiones.`,
          numericExample:
            "Si un fondo activo cobra un 1,5% de comisión anual y un fondo indexado equivalente cobra un 0,20%, la diferencia de comisión es de 1,3 puntos porcentuales cada año. Sobre una inversión de 10.000€ a 20 años con una rentabilidad bruta de mercado del 7% anual, el fondo indexado (neto de comisión, aproximadamente 6,8% anual) crecería hasta unos 37.000€, mientras que el fondo activo (neto de comisión, aproximadamente 5,5% anual, y asumiendo que iguala al mercado en bruto, lo cual ya es optimista) crecería hasta unos 28.900€ — una diferencia de más de 8.000€ solo por el efecto acumulado de una comisión más alta, sin ni siquiera asumir que el fondo activo lo haga peor que el mercado en términos brutos.",
          realExample:
            "Los informes SPIVA, publicados periódicamente, han mostrado de forma consistente durante muchos años que la gran mayoría de los fondos de gestión activa de renta variable estadounidense de gran capitalización no consiguen batir al S&P 500 en periodos de 10-15 años, tras comisiones. Esta es una de las razones (documentada extensamente y popularizada por inversores como John Bogle, fundador de Vanguard) que ha impulsado el enorme crecimiento de la inversión indexada en las últimas décadas.",
          analogy:
            "Intentar batir consistentemente al mercado eligiendo activamente qué empresas comprar es, en cierto sentido, como intentar predecir sistemáticamente qué caballo ganará cada carrera en un hipódromo muy seguido y analizado por miles de expertos: no es imposible acertar puntualmente, pero es extremadamente difícil acertar de forma repetida y consistente a lo largo de muchos años, precisamente porque toda la información disponible ya está siendo analizada por muchísimos otros participantes con recursos similares o superiores.",
          mistakes: [
            "Elegir un fondo activo únicamente por su rentabilidad pasada reciente, sin considerar que el rendimiento pasado no garantiza rendimiento futuro (esto se trata también en el Módulo 8).",
            "Subestimar el efecto acumulado a largo plazo de una diferencia de comisión aparentemente pequeña (1-1,5 puntos porcentuales) entre gestión activa y pasiva.",
            "Asumir que la gestión activa es \"mala\" en todos los contextos: en ciertos mercados menos eficientes o categorías muy específicas, algunos gestores activos han conseguido añadir valor de forma más consistente, aunque siga siendo la minoría.",
          ],
          summary:
            "La gestión activa intenta batir al mercado mediante decisiones discrecionales de un gestor, pero la evidencia histórica muestra que la mayoría de fondos activos no lo consiguen de forma consistente a largo plazo, una vez descontadas sus comisiones (habitualmente más altas que las de gestión pasiva). Esto no elimina la posibilidad de éxito individual de algunos gestores, pero hace que, estadísticamente, sea una apuesta difícil de acertar de antemano y sostenida en el tiempo.",
          exercises: {
            quiz: [
              {
                q: "Según la evidencia empírica recogida en informes como el SPIVA, la mayoría de los fondos de gestión activa, en periodos largos (10-15 años) y tras comisiones:",
                options: [
                  "Baten sistemáticamente a su índice de referencia",
                  "No consiguen batir de forma consistente a su índice de referencia",
                  "Tienen exactamente el mismo resultado que los fondos indexados",
                  "Están prohibidos en la mayoría de países desarrollados",
                ],
                correct: 1,
                explain:
                  "La evidencia acumulada durante décadas muestra que una amplia mayoría de fondos activos no logra batir a su índice de referencia en periodos largos, tras descontar comisiones.",
              },
              {
                q: "Una de las razones estructurales por las que la gestión activa lo tiene difícil para batir al mercado a largo plazo es:",
                options: [
                  "Las comisiones más altas, que suponen un obstáculo adicional de rentabilidad cada año",
                  "Que está prohibida por los reguladores financieros",
                  "Que nunca invierten en empresas grandes",
                  "Que solo pueden operar una vez al año",
                ],
                correct: 0,
                explain:
                  "Las comisiones de gestión activa (habitualmente 1-2% anual) son sensiblemente más altas que las de gestión pasiva (0,10-0,40%), lo que supone un obstáculo de rentabilidad que el gestor debe superar cada año solo para igualar al mercado.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un asesor bancario te recomienda un fondo activo destacando que \"ha batido al mercado los últimos 3 años\". ¿Qué le preguntarías o qué considerarías antes de tomar una decisión, con lo aprendido en esta lección?",
                solution:
                  "Un periodo de 3 años es relativamente corto para evaluar la habilidad genuina de un gestor frente a la suerte o a un contexto de mercado puntualmente favorable a su estilo de inversión. Preguntas relevantes incluirían: ¿cuál es el rendimiento en periodos más largos (10-15 años), si el fondo existe desde entonces? ¿Cuál es la comisión anual (TER) del fondo, y cómo se compara con un indexado equivalente? ¿Existe evidencia de que ese mismo gestor haya mantenido un rendimiento superior de forma consistente en distintos periodos, o es un caso puntual? También conviene recordar que la persistencia del rendimiento superior de los gestores activos es, en conjunto, débil según la evidencia: que un fondo haya batido al mercado en los últimos 3 años no es un predictor fiable de que lo siga haciendo en los próximos 20.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Comparas dos inversiones de 12.000€ a 25 años. Fondo A (indexado): comisión anual 0,20%, rentabilidad bruta de mercado esperada 7% anual (neta de comisión: 6,8%). Fondo B (activo): comisión anual 1,6%, y asumes optimistamente que iguala la rentabilidad bruta del mercado antes de comisiones (7% anual, neta de comisión: 5,4%). Calcula el capital final aproximado en ambos casos usando VF = VI×(1+r)^años, y la diferencia entre ambos.",
                solution:
                  "Fondo A: 12.000 × (1,068)^25 ≈ 12.000 × 5,166 ≈ 61.992€.\n\nFondo B: 12.000 × (1,054)^25 ≈ 12.000 × 3,738 ≈ 44.856€.\n\nDiferencia: 61.992€ − 44.856€ ≈ 17.136€.\n\nEste cálculo asume, de forma muy favorable para el fondo activo, que consigue igualar exactamente la rentabilidad bruta de mercado (algo que, según la evidencia vista en esta lección, la mayoría no consigue ni siquiera eso). Aun así, solo por el efecto acumulado de una comisión 1,4 puntos porcentuales más alta durante 25 años, la diferencia final supera los 17.000€ sobre una inversión inicial de 12.000€ — más que el capital invertido originalmente.",
              },
            ],
            reflection:
              "¿Te habías planteado antes cuánto puede llegar a suponer, en euros absolutos a 20-25 años, una diferencia de comisión de poco más de un punto porcentual anual? ¿Cómo crees que esta cifra podría influir en tu forma de evaluar recomendaciones de fondos que recibas en el futuro?",
          },
        },
        {
          id: "m3l4",
          title: "Comisiones y TER",
          simple:
            "El TER (Total Expense Ratio) es el porcentaje anual que un fondo cobra sobre tu capital invertido para cubrir sus gastos de gestión y operación. Cuanto más bajo, mejor para ti a largo plazo, ya que es una de las pocas variables de la inversión que puedes controlar directamente.",
          technical: `El TER (Total Expense Ratio, o ratio de gastos totales) es el porcentaje anual, calculado sobre el patrimonio del fondo, que se destina a cubrir los gastos operativos y de gestión del fondo: la comisión de gestión propiamente dicha, los gastos de depositaría (custodia de los activos), y otros gastos administrativos. Se descuenta de forma continua del valor del fondo (no se paga como una factura aparte), por lo que su efecto es silencioso pero constante.

Es importante distinguir el TER de otras comisiones que puede haber, aunque son menos habituales en fondos indexados:

- Comisión de suscripción/reembolso: un porcentaje que se cobra al entrar o salir del fondo (poco habitual en fondos indexados modernos, pero presente en algunos fondos activos o productos más antiguos).
- Comisión de éxito o rendimiento (performance fee): un porcentaje adicional sobre las ganancias que supere cierto umbral, habitual en algunos fondos de gestión activa o alternativa, pero prácticamente inexistente en fondos indexados.

El TER es una de las pocas variables de la inversión que el inversor puede controlar con certeza absoluta de antemano (a diferencia de la rentabilidad futura del mercado, que es incierta). Por eso, para dos fondos que replican el mismo índice con una calidad de réplica similar, el TER más bajo suele ser el criterio de desempate más razonable, ya que ese diferencial de coste se resta directamente, año tras año, de tu rentabilidad final.

Es relevante notar que el efecto del TER no es simplemente aditivo año a año: al descontarse cada año sobre un capital que además está creciendo (o decreciendo) por el efecto del interés compuesto (Módulo 0), el coste acumulado a largo plazo de un TER más alto es más que proporcional a la simple resta del porcentaje anual.`,
          numericExample:
            "Un fondo con TER del 0,10% sobre una inversión de 20.000€ cuesta aproximadamente 20€ al año en gastos de gestión (0,10% × 20.000€). Un fondo equivalente con TER del 1,20% sobre la misma inversión cuesta aproximadamente 240€ al año. La diferencia (220€ el primer año) puede parecer modesta en términos absolutos en un único año, pero como se vio en la lección anterior, el efecto acumulado a 20-25 años de esa diferencia de TER puede suponer varios miles de euros menos de patrimonio final, por el efecto del interés compuesto operando sobre una base de capital sistemáticamente menor.",
          realExample:
            "Fondos indexados populares en España que replican el MSCI World o el S&P 500 de gestoras como Vanguard, Amundi o Fidelity suelen tener TER en el rango del 0,10%-0,30% anual, mientras que muchos fondos de gestión activa de renta variable ofrecidos por bancos tradicionales en España han cobrado, históricamente, TER en el rango del 1,5%-2,2% anual — una diferencia muy significativa que, como se ha visto, se traduce en un impacto sustancial a largo plazo.",
          analogy:
            "El TER es como el peaje que pagas cada año, silenciosamente, por circular por una autopista concreta (el fondo). Un peaje bajo apenas se nota en el viaje de un día, pero si haces ese mismo trayecto (inviertes) todos los años durante 20-25 años, la diferencia acumulada entre un peaje bajo y uno alto puede llegar a ser el coste de un coche entero.",
          mistakes: [
            "Fijarse solo en la rentabilidad pasada de un fondo sin comprobar su TER, cuando ambos factores son relevantes para la rentabilidad neta futura.",
            "Pensar que un TER del 1% es \"solo un 1%\" sin proyectar su efecto acumulado a 20 años sobre el interés compuesto.",
            "Olvidar comprobar si existen comisiones adicionales del bróker o plataforma (comisión de custodia, comisión de compraventa) más allá del TER del propio fondo, que también afectan a la rentabilidad neta final.",
          ],
          summary:
            "El TER es el coste anual porcentual de un fondo, y es una de las pocas variables de inversión que puedes conocer y controlar con certeza de antemano. Diferencias de TER que parecen pequeñas en un año concreto (1-1,5 puntos porcentuales) se traducen, por el efecto del interés compuesto a 20-25 años, en diferencias de varios miles de euros en el capital final — por lo que minimizar el TER, a igualdad de otras condiciones, es una de las decisiones más efectivas y controlables que puede tomar un inversor de largo plazo.",
          exercises: {
            quiz: [
              {
                q: "El TER (Total Expense Ratio) de un fondo representa:",
                options: [
                  "La rentabilidad garantizada del fondo",
                  "El porcentaje anual de gastos de gestión y operación del fondo, descontado del patrimonio",
                  "Un impuesto que cobra Hacienda sobre las plusvalías",
                  "La comisión que cobra el bróker por cada operación de compra",
                ],
                correct: 1,
                explain:
                  "El TER es el coste anual total del fondo, expresado como porcentaje sobre el patrimonio, que se descuenta de forma continua del valor del fondo para cubrir su gestión y operación.",
              },
              {
                q: "Una diferencia de TER de 1 punto porcentual anual entre dos fondos, mantenida durante 25 años sobre una misma inversión inicial:",
                options: [
                  "Tiene un efecto insignificante en el capital final",
                  "Se traduce en una diferencia significativa de capital final, por el efecto acumulado del interés compuesto",
                  "Solo afecta si el fondo pierde dinero",
                  "Se compensa automáticamente con el tiempo",
                ],
                correct: 1,
                explain:
                  "Debido al interés compuesto, una diferencia de TER aparentemente pequeña en términos anuales se acumula de forma significativa a largo plazo, pudiendo suponer varios miles de euros de diferencia en el capital final.",
              },
            ],
            cases: [
              {
                prompt:
                  "Dos fondos replican exactamente el mismo índice (MSCI World), con una calidad de réplica muy similar. El Fondo X tiene TER 0,15% y el Fondo Y tiene TER 0,45%. Un conocido te dice: \"da igual cuál elijas, ambos siguen el mismo índice\". ¿Estás de acuerdo? Explica tu razonamiento.",
                solution:
                  "No estarías completamente de acuerdo. Si ambos fondos replican el mismo índice con una calidad de réplica similar (algo que también convendría verificar mirando su tracking error, tratado en la siguiente lección), la diferencia de TER (0,30 puntos porcentuales) se traduce directamente, año tras año, en una menor rentabilidad neta para el inversor del Fondo Y frente al Fondo X, sin que exista ninguna razón para esperar que el Fondo Y \"compense\" ese coste adicional con algo mejor, precisamente porque ambos siguen el mismo índice de forma mecánica. En igualdad de condiciones de réplica, el TER más bajo es sistemáticamente preferible para un inversor de largo plazo, ya que representa una certeza de menor coste, no una apuesta sobre resultados futuros inciertos.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Inviertes 25.000€ en un fondo con TER 0,20% durante 20 años, con una rentabilidad bruta de mercado del 7% anual (rentabilidad neta aproximada: 6,8%). Calcula el capital final. Después, calcula cuánto habrías tenido con un fondo idéntico salvo por un TER de 0,90% (rentabilidad neta aproximada: 6,1%). Usa VF = VI×(1+r)^años.",
                solution:
                  "Fondo con TER 0,20%: 25.000 × (1,068)^20 ≈ 25.000 × 3,701 ≈ 92.525€.\n\nFondo con TER 0,90%: 25.000 × (1,061)^20 ≈ 25.000 × 3,207 ≈ 80.175€.\n\nDiferencia: 92.525€ − 80.175€ ≈ 12.350€.\n\nSobre una inversión inicial de 25.000€, la diferencia de TER (0,70 puntos porcentuales) supone, a 20 años, una diferencia de más de 12.000€ en el capital final — casi la mitad del capital invertido originalmente, solo por el efecto acumulado de un coste anual aparentemente modesto.",
              },
            ],
            reflection:
              "Antes de esta lección, ¿comprobabas el TER de los fondos como un criterio importante de decisión, o te fijabas principalmente en la rentabilidad pasada? ¿Cómo crees que vas a aplicar lo aprendido aquí la próxima vez que evalúes un fondo?",
          },
        },
        {
          id: "m3l5",
          title: "Tracking error",
          simple:
            "El tracking error mide cuánto se desvía el comportamiento real de un fondo indexado respecto al índice que dice replicar. Un buen fondo indexado debería tener un tracking error muy bajo: si dice seguir al S&P 500, su comportamiento debería parecerse mucho al del S&P 500 real.",
          technical: `El tracking error es una medida estadística (habitualmente la desviación típica de la diferencia de rentabilidades entre el fondo y su índice de referencia, en un periodo dado) que cuantifica cuánto se desvía, de forma consistente, el comportamiento del fondo respecto al índice que replica.

Es distinto de otro concepto relacionado pero diferente: la tracking difference (diferencia de seguimiento), que es simplemente la diferencia acumulada de rentabilidad entre el fondo y el índice en un periodo concreto (por ejemplo, un año). Un fondo puede tener una tracking difference pequeña en un año dado y aun así tener cierto tracking error si esa diferencia fluctúa de forma inconsistente en el tiempo.

Las causas habituales de tracking error (desviación del fondo respecto al índice) incluyen:

- El propio TER del fondo, que resta rentabilidad de forma sistemática respecto al índice "puro" (que no tiene comisiones).
- Costes de transacción del fondo al comprar/vender activos para mantener la réplica actualizada (por ejemplo, cuando cambia la composición del índice).
- Diferencias de fiscalidad sobre dividendos entre distintos países, que pueden afectar de forma distinta al fondo que al índice teórico.
- La técnica de réplica utilizada: la réplica por muestreo (en vez de réplica física completa) puede introducir pequeñas desviaciones adicionales, especialmente en índices muy amplios como el MSCI World.
- El momento exacto de rebalanceo del fondo frente al índice, y la liquidez de los activos subyacentes.

Para un inversor, un tracking error bajo (normalmente por debajo del 0,5% anual en fondos indexados grandes y bien gestionados sobre índices líquidos) es una señal de buena calidad de gestión y ejecución técnica del fondo, más allá del TER anunciado. Un tracking error inesperadamente alto puede indicar problemas de gestión, mayor uso de réplica sintética con desviaciones frecuentes, o el seguimiento de un índice con activos poco líquidos, difíciles de replicar con precisión.`,
          numericExample:
            "Si el índice MSCI World sube un 10,00% en un año, un fondo bien gestionado que lo replica con un TER de 0,20% podría rendir aproximadamente un 9,78-9,85% ese año (una tracking difference cercana, pero no exactamente igual, al TER, debido a otros factores menores). Si en cambio ese mismo fondo rindiera un 9,20% ese año (una desviación mucho mayor de lo que el TER por sí solo explicaría), eso indicaría un tracking error significativo, y sería una señal a investigar sobre la calidad de la réplica de ese fondo concreto.",
          realExample:
            "Las gestoras de fondos indexados grandes y consolidadas (como Vanguard o iShares) suelen publicar de forma transparente el tracking error histórico de sus fondos en sus fichas técnicas (factsheets), permitiendo a los inversores comparar la calidad real de réplica entre distintos fondos que siguen el mismo índice, más allá de solo comparar el TER anunciado.",
          analogy:
            "Si el índice es la ruta oficial de una carrera y el fondo es un corredor que se supone debe seguir esa ruta exacta, el TER sería como el peaje que paga el corredor por usar esa ruta (un coste conocido de antemano), mientras que el tracking error sería cuánto se desvía realmente el corredor del trazado oficial por el camino: pequeños atajos, rodeos, o tropiezos que hacen que su recorrido real no coincida exactamente con la ruta teórica, más allá de lo que el peaje por sí solo explicaría.",
          mistakes: [
            "Confundir tracking error con TER: el TER es un coste conocido de antemano; el tracking error es una medida de la calidad real de ejecución de la réplica, que puede no coincidir exactamente con lo que el TER haría esperar.",
            "Ignorar el tracking error al comparar fondos que siguen el mismo índice, fijándose solo en el TER anunciado.",
            "Asumir que un tracking error de un fondo se mantiene siempre igual en el tiempo: puede variar según las condiciones de mercado, la liquidez de los activos subyacentes, o cambios en la gestión del fondo.",
          ],
          summary:
            "El tracking error mide cuánto se desvía el comportamiento real de un fondo respecto al índice que dice replicar, más allá de lo explicable solo por su TER. Un tracking error bajo es señal de buena calidad de gestión y ejecución técnica. Para un inversor, comparar el tracking error histórico (además del TER) entre fondos que siguen el mismo índice ayuda a elegir el que replica de forma más fiel y consistente su referencia.",
          exercises: {
            quiz: [
              {
                q: "El tracking error mide:",
                options: [
                  "El coste anual de gestión de un fondo",
                  "Cuánto se desvía, de forma consistente, el comportamiento del fondo respecto al índice que replica",
                  "La rentabilidad total del fondo en un año",
                  "El número de empresas que componen el índice",
                ],
                correct: 1,
                explain:
                  "El tracking error cuantifica la desviación del comportamiento del fondo respecto a su índice de referencia, más allá de lo que el TER por sí solo explicaría.",
              },
              {
                q: "Un fondo con un tracking error inesperadamente alto (mayor de lo que su TER explicaría) puede indicar:",
                options: [
                  "Que el fondo es automáticamente mejor que sus competidores",
                  "Posibles problemas de calidad en la ejecución de la réplica del índice",
                  "Que el índice de referencia ha cambiado su nombre",
                  "Que el fondo tiene garantizada una rentabilidad superior",
                ],
                correct: 1,
                explain:
                  "Un tracking error alto de forma inesperada suele ser una señal de alerta sobre la calidad de la gestión y ejecución técnica de la réplica del fondo, y merece investigarse antes de invertir.",
              },
            ],
            cases: [
              {
                prompt:
                  "Estás comparando dos fondos que replican el mismo índice (S&P 500). El Fondo M tiene TER 0,15% y tracking error histórico bajo y estable. El Fondo N tiene TER 0,12% (ligeramente más bajo) pero un tracking error histórico notablemente más alto e inconsistente. ¿Cuál elegirías y por qué, más allá de mirar solo el TER?",
                solution:
                  "A pesar de que el Fondo N tiene un TER nominal ligeramente más bajo, el tracking error más alto e inconsistente sugiere que, en la práctica, su rendimiento real podría desviarse más del índice de lo que el TER por sí solo haría esperar — es decir, el coste \"real\" en términos de desviación de resultados podría no ser menor, y además introduce más incertidumbre sobre el comportamiento futuro del fondo. El Fondo M, con un TER ligeramente superior pero un tracking error bajo y estable, ofrece más previsibilidad de que el fondo se comportará, en la práctica, muy parecido al índice que dice replicar — que es, al final, el objetivo completo de invertir en un fondo indexado. En igualdad de TER, o con diferencias pequeñas como esta, priorizar la consistencia del tracking error suele ser la decisión más razonable para un inversor de largo plazo.",
              },
            ],
            numeric: [
              {
                prompt:
                  "El índice MSCI World rinde un 12,00% en un año concreto. Un fondo que lo replica tiene un TER del 0,25% y rinde un 11,55% ese mismo año. Calcula la tracking difference de ese año (diferencia entre la rentabilidad del índice y la del fondo) y compárala con el TER del fondo. ¿La diferencia observada es coherente solo con el TER, o sugiere algún tracking error adicional?",
                solution:
                  "Tracking difference: 12,00% − 11,55% = 0,45 puntos porcentuales.\n\nEl TER del fondo es 0,25%. Si la única causa de desviación fuera el TER, se esperaría una rentabilidad del fondo cercana a 12,00% − 0,25% = 11,75%, no 11,55%.\n\nLa diferencia adicional no explicada por el TER es: 11,75% − 11,55% = 0,20 puntos porcentuales, que apuntaría a un tracking error adicional (por costes de transacción, técnica de réplica, fiscalidad de dividendos u otros factores) más allá del coste explícito del TER. Este tipo de análisis, replicado a lo largo de varios años, es lo que permite valorar la calidad real de ejecución de un fondo indexado, más allá de su TER anunciado.",
              },
            ],
            reflection:
              "¿Sabías, antes de esta lección, que dos fondos indexados que siguen el mismo índice podían comportarse de forma distinta en la práctica, más allá de su TER? ¿Cómo crees que esto podría influir en tu proceso de selección de un fondo concreto para invertir?",
          },
        },
        {
          id: "m3l6",
          title: "Liquidez y market makers",
          simple:
            "La liquidez es la facilidad con la que puedes comprar o vender un activo rápidamente y a un precio justo, sin que tu propia operación mueva mucho el precio. Los market makers son entidades que ayudan a mantener esa liquidez en los ETFs, comprometiéndose a ofrecer precios de compra y venta de forma continua.",
          technical: `La liquidez de un activo se refiere a la facilidad y rapidez con la que se puede convertir en efectivo (o viceversa) sin que ello afecte significativamente a su precio. Un activo muy líquido (como las acciones de las mayores empresas del mundo, o los ETFs sobre grandes índices) se puede comprar y vender rápidamente, con un diferencial pequeño entre el precio de compra (bid) y el precio de venta (ask) — el llamado spread bid-ask.

En el contexto de los ETFs, existe una figura especializada llamada market maker (o proveedor de liquidez), que son entidades financieras que se comprometen contractualmente con la bolsa a ofrecer, de forma continua durante el horario de mercado, precios de compra y de venta para un ETF concreto, garantizando que siempre haya alguien dispuesto a comprarte o venderte participaciones del ETF, incluso si en ese momento no hay suficientes compradores o vendedores "naturales" entre otros inversores.

Los market makers utilizan un mecanismo llamado creación y destrucción de participaciones (creation/redemption): cuando hay mucha demanda de compra de un ETF y su precio en bolsa se separa del valor real de los activos que contiene (su valor liquidativo teórico o NAV), el market maker puede comprar los activos subyacentes reales (las acciones del índice) y "crear" nuevas participaciones del ETF para venderlas, lo cual ayuda a que el precio del ETF en bolsa se mantenga alineado con el valor real de sus activos. El proceso inverso ("destrucción" de participaciones) ocurre cuando hay más ventas que compras.

Para un inversor, un ETF sobre un índice muy grande y líquido (como el S&P 500 o el MSCI World) suele tener spreads muy reducidos gracias a la actividad de varios market makers compitiendo entre sí. En cambio, ETFs sobre índices o sectores muy nicho, con poco volumen de negociación, pueden tener spreads más amplios, lo que implica un coste implícito adicional al comprar y vender (compras un poco más caro y vendes un poco más barato de lo que sería el "precio justo" teórico).`,
          numericExample:
            "Si un ETF tiene un precio de compra (bid) de 49,98€ y un precio de venta (ask) de 50,02€, el spread es de 0,04€ sobre un precio de referencia de 50€, es decir, un 0,08% aproximadamente. Sobre una operación de 10.000€, ese spread representa un coste implícito de unos 8€ solo por la diferencia entre comprar y vender de forma inmediata. En un ETF muy poco líquido, ese mismo spread podría ser del 1% o más, suponiendo un coste implícito de 100€ o más sobre la misma operación.",
          realExample:
            "ETFs muy populares que replican el S&P 500 o el MSCI World, negociados en grandes bolsas europeas como Xetra o Euronext, suelen tener varios market makers activos compitiendo, lo que se traduce en spreads muy reducidos (a menudo por debajo del 0,05-0,10%) y una gran facilidad para comprar o vender grandes cantidades sin mover apenas el precio.",
          analogy:
            "Los market makers son como los cambistas de un mercado de divisas en un aeropuerto muy transitado: siempre están ahí, ofreciendo comprar y vender en cualquier momento, con una pequeña comisión (el spread) por prestar ese servicio de liquidez inmediata. En un aeropuerto pequeño con poco tráfico, es posible que ese cambista cobre una comisión mayor por la misma operación, precisamente porque hay menos actividad y competencia entre proveedores de ese servicio.",
          mistakes: [
            "Elegir un ETF muy poco negociado (bajo volumen) sin fijarse en su spread bid-ask, asumiendo que todos los ETFs tienen la misma liquidez.",
            "Confundir el volumen de negociación diario de un ETF con su calidad como inversión: un ETF puede ser una buena inversión aunque tenga menos volumen, pero conviene ser consciente del posible coste adicional de liquidez al operar.",
            "Pensar que la liquidez de un ETF depende únicamente de cuánta gente lo compra directamente en bolsa: en realidad, gracias al mecanismo de creación/destrucción de participaciones, la liquidez real de un ETF está más ligada a la liquidez de los activos subyacentes (las acciones del índice) que solo al volumen de negociación del propio ETF.",
          ],
          summary:
            "La liquidez determina cuán fácil y barato es comprar o vender un activo sin mover su precio. Los market makers mantienen la liquidez de los ETFs ofreciendo precios de compra y venta de forma continua, usando el mecanismo de creación/destrucción de participaciones para mantener el precio del ETF alineado con el valor real de sus activos subyacentes. Para un inversor de largo plazo, un ETF con buena liquidez (spreads reducidos) minimiza los costes implícitos de comprar y vender.",
          exercises: {
            quiz: [
              {
                q: "El spread bid-ask de un activo representa:",
                options: [
                  "El TER anual del fondo",
                  "La diferencia entre el precio de compra y el precio de venta disponibles en un momento dado",
                  "El tracking error del fondo",
                  "Un impuesto sobre las plusvalías",
                ],
                correct: 1,
                explain:
                  "El spread bid-ask es la diferencia entre el precio al que puedes comprar (ask) y el precio al que puedes vender (bid) en un momento dado, y representa un coste implícito de la operación, especialmente relevante en activos poco líquidos.",
              },
              {
                q: "La función principal de un market maker en un ETF es:",
                options: [
                  "Decidir qué empresas incluye el índice",
                  "Ofrecer de forma continua precios de compra y venta, ayudando a mantener la liquidez y el precio alineado con el valor real de los activos",
                  "Cobrar el TER del fondo a los inversores",
                  "Gestionar la declaración de la renta de los inversores",
                ],
                correct: 1,
                explain:
                  "Los market makers se comprometen a ofrecer liquidez continua en el ETF, usando mecanismos como la creación y destrucción de participaciones para mantener el precio del ETF alineado con el valor real de los activos que contiene.",
              },
            ],
            cases: [
              {
                prompt:
                  "Estás valorando dos ETFs que siguen el mismo índice MSCI World, con TER prácticamente idéntico. El ETF R tiene un volumen de negociación diario muy alto y un spread bid-ask muy reducido. El ETF S tiene mucho menos volumen y un spread bid-ask notablemente más amplio. ¿Qué considerarías antes de elegir uno u otro, especialmente si planeas hacer aportaciones periódicas durante muchos años?",
                solution:
                  "Aunque ambos ETFs sigan el mismo índice con un TER similar, el spread bid-ask más amplio del ETF S representa un coste implícito adicional cada vez que compres (y, en su momento, cuando vendas), que no aparece reflejado en el TER anunciado pero sí afecta a tu rentabilidad neta real. Si planeas hacer aportaciones periódicas durante 20 años (por ejemplo, mensualmente), ese coste de spread se repetiría en cada operación, acumulándose de forma similar a como lo hace el TER, aunque de forma menos visible. En igualdad del resto de condiciones (TER, tracking error, calidad de la gestora), el ETF con mayor liquidez (menor spread) suele ser la opción más eficiente para un inversor que va a operar de forma repetida a lo largo del tiempo, ya que minimiza estos costes de transacción implícitos y repetidos.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Haces una aportación mensual de 300€ durante 20 años (240 aportaciones) a un ETF con un spread bid-ask medio del 0,15% en cada compra. Calcula el coste total aproximado acumulado solo por el efecto del spread en esas 240 operaciones (asumiendo, de forma simplificada, que el spread se aplica sobre cada aportación individual).",
                solution:
                  "Coste del spread por operación: 300€ × 0,0015 = 0,45€.\n\nCoste total acumulado en 240 aportaciones: 0,45€ × 240 = 108€.\n\nAunque 108€ sobre un total aportado de 72.000€ (300€ × 240) es una cantidad relativamente pequeña en términos relativos (0,15% del total aportado), este ejercicio ilustra que los costes de liquidez, aunque normalmente mucho más pequeños que el TER acumulado a largo plazo, no son cero y conviene tenerlos en cuenta, especialmente si se opera con productos poco líquidos donde el spread pudiera ser sensiblemente mayor al 0,15% usado en este ejemplo simplificado.",
              },
            ],
            reflection:
              "¿Habías considerado antes el spread bid-ask como un coste relevante al elegir un ETF, más allá del TER? ¿Crees que, en tu caso, con aportaciones periódicas a largo plazo, este factor debería tener un peso importante en tu elección de productos, comparado con el TER o el tracking error?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 3",
        passScore: 70,
        questions: [
          {
            q: "Un fondo indexado se caracteriza por:",
            options: [
              "Un gestor que selecciona activamente qué empresas comprar",
              "Replicar de forma automática y mecánica la composición de un índice",
              "Garantizar siempre una rentabilidad mínima anual",
              "No tener ninguna sociedad gestora responsable",
            ],
            correct: 1,
            topic: "Qué es un fondo indexado",
          },
          {
            q: "La principal diferencia operativa entre un ETF y un fondo indexado tradicional es:",
            options: [
              "El ETF cotiza en bolsa en tiempo real; el fondo indexado se opera a un valor liquidativo diario",
              "Los ETFs no pueden replicar índices",
              "Los fondos indexados no existen en España",
              "No hay ninguna diferencia entre ambos",
            ],
            correct: 0,
            topic: "Qué es un ETF",
          },
          {
            q: "En España, una diferencia fiscal relevante entre fondos indexados y ETFs es:",
            options: [
              "Los fondos indexados permiten traspasos entre fondos sin tributar en el momento del cambio; los ETFs no",
              "Los ETFs siempre tributan menos que los fondos indexados",
              "No existe ninguna diferencia fiscal",
              "Los fondos indexados están prohibidos para residentes en España",
            ],
            correct: 0,
            topic: "Qué es un ETF",
          },
          {
            q: "Según la evidencia empírica (como los informes SPIVA), la mayoría de fondos de gestión activa, en periodos largos y tras comisiones:",
            options: [
              "Baten sistemáticamente al mercado",
              "No consiguen batir de forma consistente a su índice de referencia",
              "Tienen prohibido cobrar comisiones",
              "Rinden exactamente igual que los fondos indexados",
            ],
            correct: 1,
            topic: "Fondos de gestión activa",
          },
          {
            q: "El TER de un fondo representa:",
            options: [
              "Un impuesto que cobra Hacienda",
              "El porcentaje anual de gastos de gestión y operación, descontado del patrimonio del fondo",
              "La rentabilidad garantizada del fondo",
              "El spread bid-ask del fondo",
            ],
            correct: 1,
            topic: "Comisiones y TER",
          },
          {
            q: "El tracking error mide:",
            options: [
              "El coste anual explícito de gestión del fondo",
              "Cuánto se desvía, de forma consistente, el comportamiento real del fondo respecto al índice que replica",
              "El número de acciones que componen un índice",
              "La comisión de suscripción del fondo",
            ],
            correct: 1,
            topic: "Tracking error",
          },
          {
            q: "La función de un market maker en un ETF es:",
            options: [
              "Seleccionar qué empresas forman parte del índice",
              "Ofrecer de forma continua precios de compra y venta, ayudando a mantener la liquidez y el precio alineado con el valor de los activos",
              "Calcular el TER del fondo",
              "Presentar la declaración de la renta del inversor",
            ],
            correct: 1,
            topic: "Liquidez y market makers",
          },
          {
            q: "Inviertes 20.000€ a 20 años con una rentabilidad neta del 6,8% anual (tras TER de 0,20%) frente a una alternativa con rentabilidad neta del 5,9% anual (tras TER de 1,10%). Usando VF = VI×(1+r)^años, ¿cuál es aproximadamente la diferencia de capital final entre ambas opciones?",
            options: ["≈ 2.500€", "≈ 8.000€", "≈ 15.000€", "≈ 25.000€"],
            correct: 1,
            topic: "Comisiones y TER (cálculo)",
          },
        ],
      },
    },
    {
      id: "m4",
      number: 4,
      title: "Renta fija: bonos, tipos de interés y bancos centrales",
      objective:
        "Entender qué es un bono y cómo funciona la renta fija, por qué el precio de los bonos se mueve de forma inversa a los tipos de interés, y cómo los bancos centrales (BCE y Reserva Federal) influyen en toda la economía y en tu cartera a través de sus decisiones de tipos.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulos 0 a 3 completos (riesgo, empresas, índices, fondos).",
      learn:
        "A entender qué compras realmente cuando compras un bono, por qué su precio y su rentabilidad se mueven en direcciones opuestas, qué papel juegan el BCE y la Reserva Federal en la economía, y qué es la curva de tipos y qué información transmite.",
      lessons: [
        {
          id: "m4l1",
          title: "Qué es un bono",
          simple:
            "Un bono es, en esencia, un préstamo. Cuando compras un bono, le estás prestando dinero a quien lo emite (un gobierno o una empresa) a cambio de que te devuelva ese dinero en una fecha futura, más unos intereses pactados de antemano.",
          technical: `Un bono (también llamado obligación, según el plazo y la legislación) es un instrumento de deuda: el emisor (un gobierno, como el Tesoro español o el Tesoro de EE.UU., o una empresa) se compromete a devolver al comprador del bono un capital concreto (el valor nominal o principal) en una fecha futura determinada (el vencimiento), y a pagar, mientras tanto, unos intereses periódicos (el cupón), normalmente con una frecuencia anual o semestral.

Los elementos clave de un bono son:

- Valor nominal (o principal): la cantidad que el emisor se compromete a devolver al vencimiento.
- Cupón: el interés periódico que paga el bono, normalmente expresado como un porcentaje fijo del valor nominal (aunque también existen bonos de cupón variable o cupón cero, que no pagan intereses periódicos pero se compran con descuento sobre su valor nominal).
- Vencimiento (o madurez): la fecha en la que el emisor debe devolver el valor nominal completo.
- Rentabilidad al vencimiento (yield to maturity, YTM): la rentabilidad total anualizada que obtendría un inversor si compra el bono a su precio actual y lo mantiene hasta el vencimiento, teniendo en cuenta tanto los cupones como la diferencia entre el precio de compra y el valor nominal que recibirá al final.

A diferencia de una acción (renta variable, donde eres propietario y tu rentabilidad no está garantizada de antemano), un bono es renta fija: en condiciones normales (sin impago del emisor), conoces de antemano el calendario exacto de pagos que vas a recibir si mantienes el bono hasta el vencimiento. Esto no significa que los bonos estén libres de riesgo (existe riesgo de impago del emisor, y riesgo de precio si vendes antes del vencimiento, como se verá en la siguiente lección), pero sí ofrecen, en general, mayor previsibilidad de flujos de pago que las acciones.

Los bonos se clasifican, entre otros criterios, según quién los emite: bonos soberanos o gubernamentales (emitidos por un Estado, como el Bono del Tesoro español o los US Treasury Bonds) y bonos corporativos (emitidos por empresas). Los bonos soberanos de países con alta solvencia (como Alemania o EE.UU.) se consideran, generalmente, de menor riesgo de impago que los bonos corporativos, aunque no están completamente exentos de riesgo.`,
          numericExample:
            "Compras un bono con valor nominal de 1.000€, cupón anual del 3%, y vencimiento a 5 años. Cada año, mientras mantengas el bono, recibirás 30€ de cupón (3% × 1.000€). Al cabo de los 5 años, además del último cupón de ese año, recibirás de vuelta los 1.000€ del valor nominal. En total, a lo largo de los 5 años, habrás recibido 150€ en cupones (30€ × 5) más la devolución de los 1.000€ iniciales, siempre que el emisor no incurra en impago.",
          realExample:
            "El Tesoro Público español emite regularmente Letras del Tesoro (a corto plazo, hasta 18 meses), Bonos del Estado (a medio plazo, 3-5 años) y Obligaciones del Estado (a largo plazo, 10-50 años), que los inversores particulares pueden comprar directamente a través de la web del Tesoro o de un bróker. El gobierno de EE.UU. emite de forma análoga los US Treasury Bills, Notes y Bonds, considerados entre los activos de renta fija más líquidos y seguros del mundo por la solvencia percibida del emisor.",
          analogy:
            "Comprar un bono es como hacerle un préstamo a un amigo con un contrato claro por escrito: \"te presto 1.000€, tú me devuelves esos 1.000€ dentro de 5 años, y mientras tanto me pagas 30€ cada año como agradecimiento\". Comprar una acción, en cambio, es como hacerte socio de un negocio junto a ese amigo: no hay un contrato que garantice que recuperarás una cantidad fija, tu beneficio depende de cómo le vaya al negocio.",
          mistakes: [
            "Pensar que los bonos son \"inversiones sin riesgo\" en un sentido absoluto: existe riesgo de impago del emisor (más relevante en bonos corporativos o de gobiernos con baja solvencia) y riesgo de precio si se vende antes del vencimiento.",
            "Confundir el cupón (interés periódico) con la rentabilidad total del bono (YTM), que también depende del precio al que se compró el bono respecto a su valor nominal.",
            "Asumir que todos los bonos gubernamentales tienen el mismo nivel de riesgo: la solvencia percibida varía mucho entre países (no es lo mismo un bono alemán que un bono de un país con inestabilidad económica o política).",
          ],
          summary:
            "Un bono es un préstamo con condiciones pactadas de antemano: el emisor se compromete a devolver el capital al vencimiento y a pagar cupones periódicos mientras tanto. Es renta fija porque, salvo impago, el calendario de pagos es conocido de antemano — a diferencia de las acciones, cuya rentabilidad no está garantizada. Existen bonos soberanos (de gobiernos) y corporativos (de empresas), con distintos niveles de riesgo de impago según la solvencia del emisor.",
          exercises: {
            quiz: [
              {
                q: "Cuando compras un bono, en esencia estás:",
                options: [
                  "Comprando una porción de propiedad de una empresa",
                  "Prestando dinero al emisor a cambio de intereses y la devolución del capital en el futuro",
                  "Apostando en un mercado sin ninguna relación con préstamos",
                  "Comprando un derivado financiero sin relación con deuda",
                ],
                correct: 1,
                explain:
                  "Un bono es un instrumento de deuda: el comprador presta dinero al emisor, que se compromete a devolverlo (valor nominal) en el vencimiento y a pagar intereses periódicos (cupón) mientras tanto.",
              },
              {
                q: "El cupón de un bono es:",
                options: [
                  "El precio al que se compra el bono en el mercado secundario",
                  "El interés periódico que paga el bono, expresado como porcentaje de su valor nominal",
                  "La fecha en la que el bono vence",
                  "Un impuesto sobre las plusvalías del bono",
                ],
                correct: 1,
                explain:
                  "El cupón es el pago periódico de intereses que recibe el poseedor del bono, calculado habitualmente como un porcentaje fijo sobre el valor nominal del bono.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un familiar te dice: \"Los bonos del Estado son inversión sin ningún riesgo, es dinero seguro al 100%.\" Con lo aprendido en esta lección, ¿qué matices le pondrías?",
                solution:
                  "Aunque los bonos del Estado de países con alta solvencia (como Alemania o, en menor medida, España) se consideran de bajo riesgo relativo, no están completamente libres de riesgo. Existe, en primer lugar, el riesgo de impago del emisor (mucho menor en países con alta solvencia, pero no matemáticamente cero, como ha mostrado la historia con impagos o reestructuraciones de deuda soberana en algunos países). En segundo lugar, si el inversor necesita vender el bono antes de su vencimiento, su precio en el mercado secundario puede haber variado (subido o bajado) respecto al precio de compra, especialmente por movimientos en los tipos de interés (esto se trata en detalle en la siguiente lección) — es decir, sí existe riesgo de precio si no se mantiene el bono hasta el vencimiento. Y en tercer lugar, incluso en el escenario más seguro donde se cobra todo lo pactado, existe el riesgo de que la inflación (Módulo 0) erosione el poder adquisitivo real de esos pagos fijos a lo largo del tiempo.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Compras un bono corporativo con valor nominal de 5.000€, cupón anual del 4%, y vencimiento a 8 años. Calcula el cupón anual en euros que recibirás cada año, y el total de cupones que habrás recibido a lo largo de los 8 años (sin contar la devolución final del valor nominal).",
                solution:
                  "Cupón anual: 5.000€ × 0,04 = 200€ al año.\n\nTotal de cupones en 8 años: 200€ × 8 = 1.600€.\n\nAdemás de esos 1.600€ en cupones, al final del año 8 (vencimiento) recibirías también la devolución de los 5.000€ del valor nominal, siempre que el emisor no incurra en impago durante ese periodo. El rendimiento total de la inversión sería la suma de los cupones recibidos más la devolución del capital, sobre el capital inicialmente invertido.",
              },
            ],
            reflection:
              "¿Pensabas en los bonos como \"préstamos\" antes de esta lección, o los veías como un producto financiero más abstracto sin esa conexión directa? ¿Te ayuda esta forma de entenderlos a comprender mejor por qué su comportamiento es distinto al de las acciones?",
          },
        },
        {
          id: "m4l2",
          title: "Relación entre precio y tipos de interés",
          simple:
            "El precio de un bono y los tipos de interés del mercado se mueven en direcciones opuestas: cuando los tipos de interés suben, el precio de los bonos ya emitidos baja, y viceversa. Es una de las relaciones más importantes (y menos intuitivas al principio) de toda la renta fija.",
          technical: `Cuando un bono ya ha sido emitido con un cupón fijo (por ejemplo, un bono que paga un 3% anual), su atractivo relativo en el mercado secundario depende de qué tipos de interés estén ofreciendo, en ese momento, bonos nuevos de características similares.

Si los tipos de interés del mercado suben (por ejemplo, porque el banco central sube los tipos, como se verá en la siguiente lección) y los bonos nuevos empiezan a emitirse con cupones más altos (por ejemplo, un 5%), el bono antiguo que solo paga un 3% se vuelve menos atractivo en comparación. Para poder venderlo en el mercado secundario, su precio debe bajar lo suficiente como para que su rentabilidad efectiva (teniendo en cuenta tanto el cupón como el descuento sobre el valor nominal) se aproxime a la de los bonos nuevos con tipos más altos. Es decir: el precio del bono antiguo cae cuando suben los tipos de interés.

El mecanismo inverso ocurre cuando los tipos de interés bajan: los bonos antiguos con cupones más altos que los nuevos tipos de mercado se vuelven más atractivos, y su precio sube en el mercado secundario, ya que los inversores están dispuestos a pagar más por asegurar ese cupón relativamente más alto.

Esta sensibilidad del precio de un bono a los cambios en los tipos de interés se mide, de forma aproximada, con un concepto llamado duración: cuanto mayor es la duración de un bono (relacionada, aunque no de forma idéntica, con su plazo hasta el vencimiento), más sensible es su precio a los cambios en los tipos de interés. Un bono a muy largo plazo (por ejemplo, a 30 años) sufre variaciones de precio mucho más pronunciadas ante cambios en los tipos que un bono a corto plazo (por ejemplo, a 1 año).

Es importante remarcar: esta relación inversa entre precio y tipos afecta al valor de mercado del bono si se vende antes del vencimiento. Si el inversor mantiene el bono hasta su vencimiento y el emisor no incurre en impago, recibirá el valor nominal completo y todos los cupones pactados, independientemente de cómo haya fluctuado el precio de mercado del bono mientras tanto.`,
          numericExample:
            "Tienes un bono con valor nominal de 1.000€ y cupón fijo del 3% (30€ anuales). Si los tipos de interés del mercado suben y los bonos nuevos similares empiezan a ofrecer un cupón del 5% (50€ anuales sobre 1.000€), tu bono antiguo, que solo paga 30€ al año, deja de ser competitivo a su precio nominal. Para que un comprador en el mercado secundario obtenga una rentabilidad similar a la de los bonos nuevos, tu bono tendría que venderse, por ejemplo, en torno a 900-950€ en vez de 1.000€ (la cifra exacta depende del plazo restante y otros factores), de forma que el descuento sobre el precio compense el menor cupón relativo.",
          realExample:
            "Entre 2022 y 2023, cuando el BCE y la Reserva Federal subieron los tipos de interés de forma rápida y significativa para combatir la inflación (Módulo 0), el precio de mercado de muchos bonos emitidos en años anteriores, con cupones más bajos acordes a los tipos de esa época, cayó de forma notable — un fenómeno que sorprendió a algunos inversores que pensaban que los bonos eran \"inversiones sin volatilidad\", olvidando que su precio de mercado sí puede fluctuar significativamente ante cambios de tipos, aunque el pago final al vencimiento (si se mantiene hasta entonces) siga siendo el pactado originalmente.",
          analogy:
            "Imagina que tienes un contrato de alquiler fijado hace tiempo a 500€/mes, y de repente el precio de mercado de alquileres similares sube a 700€/mes. Tu contrato antiguo (con condiciones ahora menos favorables para el propietario que las de mercado) valdría menos si quisieras \"vendérselo\" a otra persona que buscara ese tipo de contrato, comparado con contratos nuevos alineados al precio actual de mercado. Lo mismo ocurre con un bono de cupón fijo cuando suben los tipos de interés de mercado: su cupón \"antiguo\" se vuelve menos atractivo relativamente, y su precio de reventa cae para compensarlo.",
          mistakes: [
            "Pensar que los bonos no tienen volatilidad de precio en absoluto: sí la tienen, especialmente ante cambios en los tipos de interés, aunque generalmente menor que las acciones.",
            "Confundir la caída de precio de un bono en el mercado secundario con una \"pérdida garantizada\": si se mantiene el bono hasta el vencimiento (y no hay impago), se sigue recibiendo el valor nominal completo pactado, independientemente de las fluctuaciones de precio intermedias.",
            "No tener en cuenta la duración del bono al valorar su sensibilidad a cambios de tipos: bonos a muy largo plazo son mucho más sensibles (su precio fluctúa más) que bonos a corto plazo ante el mismo cambio de tipos.",
          ],
          summary:
            "El precio de un bono en el mercado secundario se mueve de forma inversa a los tipos de interés: cuando suben los tipos, el precio de los bonos existentes baja (se vuelven menos atractivos relativamente), y viceversa. Esta sensibilidad es mayor cuanto mayor es la duración del bono. Si se mantiene el bono hasta el vencimiento sin impago, se recibe igualmente el valor nominal y los cupones pactados, independientemente de las fluctuaciones de precio intermedias en el mercado.",
          exercises: {
            quiz: [
              {
                q: "Cuando los tipos de interés del mercado suben, el precio de los bonos ya emitidos con cupones fijos más bajos:",
                options: [
                  "Sube, porque son más escasos",
                  "Baja, porque se vuelven menos atractivos comparados con los bonos nuevos de mayor cupón",
                  "Se mantiene siempre exactamente igual",
                  "Deja de pagar cupones",
                ],
                correct: 1,
                explain:
                  "La relación inversa entre precio y tipos de interés es una de las claves de la renta fija: al subir los tipos, los bonos antiguos con cupones más bajos pierden atractivo relativo, y su precio de mercado baja para compensarlo.",
              },
              {
                q: "La duración de un bono está relacionada con:",
                options: [
                  "Su color o denominación",
                  "Su sensibilidad de precio ante cambios en los tipos de interés (a mayor duración, mayor sensibilidad)",
                  "El número de veces que ha cambiado de propietario",
                  "El país donde se emitió el bono, exclusivamente",
                ],
                correct: 1,
                explain:
                  "A mayor duración de un bono (relacionada con su plazo hasta vencimiento), mayor es la sensibilidad de su precio ante cambios en los tipos de interés del mercado.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice, alarmado: \"Compré bonos hace un año y ahora veo que su valor de mercado ha bajado un 8%, ¡he perdido dinero con una inversión 'segura'!\" ¿Qué le explicarías, distinguiendo entre pérdida de valor de mercado y pérdida real definitiva?",
                solution:
                  "Es importante distinguir entre la fluctuación del valor de mercado del bono (que sí puede haber bajado un 8%, probablemente por una subida de los tipos de interés desde que compró el bono) y una pérdida real y definitiva de dinero. Si el inversor mantiene el bono hasta su vencimiento y el emisor no incurre en impago, recibirá el valor nominal completo pactado más todos los cupones acordados, independientemente de cómo haya fluctuado el precio de mercado mientras tanto — de forma similar a lo que se vio en el Módulo 1 sobre volatilidad temporal frente a pérdida permanente en acciones. La \"pérdida\" del 8% solo se materializaría de forma definitiva si decidiera vender el bono ahora, en el mercado secundario, a ese precio más bajo. Esto no significa que los bonos no tengan riesgo (sí lo tienen, especialmente si se necesita liquidez antes del vencimiento), pero conviene no confundir la fluctuación de precio de mercado con una pérdida garantizada e irreversible si se planea mantener el bono hasta su vencimiento.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Tienes un bono con valor nominal 2.000€ y cupón fijo del 2,5% (50€ anuales). Los tipos de mercado suben y los bonos nuevos similares ofrecen ahora un cupón del 4,5% (90€ anuales sobre 2.000€ de nominal). Sin necesidad de un cálculo financiero exacto (que requeriría fórmulas más avanzadas), razona cualitativamente: ¿el precio de tu bono en el mercado secundario debería estar por encima, por debajo, o igual a 2.000€ para resultar atractivo a un comprador potencial, dado ese contexto de tipos más altos?",
                solution:
                  "El precio debería estar por debajo de 2.000€. Como tu bono solo paga 50€ anuales (2,5%) frente a los 90€ anuales (4,5%) que ofrecen ahora los bonos nuevos de características similares, un comprador potencial solo estaría dispuesto a pagarte el valor nominal completo (2.000€) si pudiera obtener una rentabilidad de cupón comparable en otro sitio, lo cual ya no es el caso. Para que la operación resulte atractiva al comprador (obteniendo una rentabilidad total —cupón más diferencia entre precio de compra y valor nominal a recibir al vencimiento— parecida a la de los bonos nuevos del 4,5%), el precio de venta de tu bono tendría que ser sensiblemente inferior a 2.000€, compensando así con un descuento sobre el precio el menor cupón relativo que ofrece.",
              },
            ],
            reflection:
              "¿Te sorprendió, al leer esta lección, que los bonos —considerados a menudo la opción \"conservadora\" por excelencia— puedan fluctuar de precio de forma significativa ante cambios en los tipos de interés? ¿Cómo crees que esto debería influir en tu percepción sobre \"qué tan segura\" es una inversión en renta fija, especialmente a largo plazo?",
          },
        },
        {
          id: "m4l3",
          title: "Qué son los bancos centrales",
          simple:
            "Un banco central es la institución responsable de gestionar la política monetaria de un país o región: principalmente, controla los tipos de interés y la cantidad de dinero en circulación, con el objetivo declarado (en la mayoría de casos) de mantener la inflación bajo control y apoyar el crecimiento económico.",
          technical: `Un banco central es una institución pública (normalmente independiente del gobierno de turno en su gestión operativa diaria, aunque con distintos grados de autonomía real según el país) encargada de gestionar la política monetaria: las decisiones sobre tipos de interés, la cantidad de dinero en circulación, y otras herramientas que afectan al conjunto de la economía.

Sus principales herramientas incluyen:

- Tipos de interés de referencia: el tipo al que el banco central presta dinero a los bancos comerciales (o les paga por sus depósitos), que influye en cascada sobre el resto de tipos de interés de la economía: hipotecas, préstamos al consumo, rentabilidad de las cuentas de ahorro, y —como se ha visto en la lección anterior— el precio de los bonos.
- Operaciones de mercado abierto: compra o venta de activos financieros (como bonos gubernamentales) para inyectar o retirar liquidez del sistema financiero.
- Política de balance (quantitative easing / quantitative tightening): programas de compra masiva de activos (expansión del balance del banco central) para inyectar liquidez adicional en situaciones excepcionales, o su reducción progresiva (contracción del balance) en sentido contrario.

El objetivo principal declarado de la mayoría de bancos centrales de economías desarrolladas es la estabilidad de precios (mantener la inflación en un nivel objetivo, habitualmente en torno al 2% anual en la Eurozona y EE.UU.), aunque algunos bancos centrales (como la Reserva Federal de EE.UU.) tienen también un mandato dual que incluye explícitamente el objetivo de maximizar el empleo.

Cuando la inflación está por encima del objetivo, el banco central tiende a subir los tipos de interés, encareciendo el crédito, lo que tiende a frenar el consumo y la inversión, y con ello, a moderar la subida de precios (aunque con un desfase temporal considerable entre la decisión y su efecto real en la economía). Cuando la economía se debilita o hay riesgo de recesión, el banco central tiende a bajar los tipos de interés, para abaratar el crédito y estimular el consumo y la inversión.`,
          numericExample:
            "Si el banco central sube su tipo de interés de referencia del 2% al 4%, los bancos comerciales tienden a subir, en cascada y con cierto desfase, los tipos de interés de las hipotecas, los préstamos al consumo, y también mejoran la rentabilidad ofrecida en depósitos y cuentas de ahorro. Simultáneamente, como se vio en la lección anterior, el precio de los bonos ya emitidos con cupones más bajos (acordes al 2% anterior) tiende a bajar en el mercado secundario, para ajustarse a las nuevas condiciones de tipos más altos.",
          realExample:
            "Entre 2022 y 2023, tanto el BCE como la Reserva Federal subieron sus tipos de interés de referencia de forma rápida y pronunciada (desde niveles cercanos al 0% hasta niveles por encima del 4-5%, según la región) en respuesta a la inflación elevada surgida tras la pandemia y la guerra en Ucrania. Esta subida encareció significativamente las hipotecas variables en muchos países, incluida España, afectando directamente a las cuotas mensuales de millones de hogares con hipotecas referenciadas a tipos de interés variables.",
          analogy:
            "Un banco central es como el termostato central de un edificio muy grande (la economía). Si el edificio se está \"sobrecalentando\" (inflación alta), el termostato baja la temperatura (sube los tipos, para enfriar el consumo y la inversión). Si el edificio está demasiado \"frío\" (economía débil, riesgo de recesión), el termostato sube la temperatura (baja los tipos, para estimular la actividad). El ajuste no es instantáneo: como con cualquier termostato de un edificio grande, se tarda tiempo en notar el efecto completo del cambio.",
          mistakes: [
            "Pensar que el banco central controla directamente los precios de bienes y servicios: en realidad, influye de forma indirecta, a través de los tipos de interés y la cantidad de dinero, con un desfase temporal considerable.",
            "Confundir el banco central con el gobierno de turno: en la mayoría de economías desarrolladas, el banco central tiene un grado significativo de independencia operativa respecto al gobierno, precisamente para evitar que las decisiones de política monetaria se usen con fines electorales de corto plazo.",
            "Esperar que las subidas o bajadas de tipos tengan un efecto inmediato y completo en la economía: los efectos de la política monetaria suelen tardar meses o incluso más de un año en trasladarse completamente a la economía real.",
          ],
          summary:
            "Un banco central gestiona la política monetaria de un país o región, principalmente a través de los tipos de interés, con el objetivo de mantener la estabilidad de precios (controlar la inflación) y, en algunos casos, apoyar también el empleo. Sus decisiones afectan en cascada a hipotecas, préstamos, ahorro, y al precio de los bonos, con un desfase temporal notable entre la decisión y su efecto completo en la economía real.",
          exercises: {
            quiz: [
              {
                q: "El objetivo principal declarado de la mayoría de bancos centrales de economías desarrolladas es:",
                options: [
                  "Maximizar los beneficios de la banca privada",
                  "La estabilidad de precios (controlar la inflación en un nivel objetivo)",
                  "Fijar directamente el precio de todos los bienes y servicios",
                  "Financiar directamente el gasto público sin límite",
                ],
                correct: 1,
                explain:
                  "El mandato principal de la mayoría de bancos centrales (con matices según el país, como el mandato dual de la Reserva Federal que incluye también el empleo) es mantener la estabilidad de precios, habitualmente con un objetivo de inflación en torno al 2% anual.",
              },
              {
                q: "Cuando un banco central sube sus tipos de interés de referencia, el efecto esperado sobre la economía es, en general:",
                options: [
                  "Estimular fuertemente el consumo y el crédito",
                  "Encarecer el crédito, tendiendo a frenar el consumo y la inversión, moderando la inflación con el tiempo",
                  "No tiene ningún efecto sobre hipotecas ni préstamos",
                  "Bajar automáticamente los precios de todos los productos al instante",
                ],
                correct: 1,
                explain:
                  "Una subida de tipos encarece el crédito (hipotecas, préstamos), lo que tiende a frenar el consumo y la inversión, contribuyendo, con el tiempo, a moderar la inflación — aunque con un desfase considerable entre la decisión y su efecto completo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un conocido te dice: \"El banco central puede bajar la inflación cuando quiera de forma inmediata, si no lo hace es porque no quiere.\" ¿Qué matices le pondrías sobre cómo funciona realmente la política monetaria?",
                solution:
                  "Esta afirmación simplifica en exceso cómo funciona la transmisión de la política monetaria. Aunque el banco central sí tiene herramientas poderosas (principalmente los tipos de interés), su efecto sobre la inflación real no es inmediato: existe un desfase considerable, habitualmente estimado en varios meses o más de un año, entre que se toma una decisión de tipos y que esta se traslada completamente a las decisiones de consumo, inversión, y finalmente a los precios de la economía real. Además, subir tipos de forma muy agresiva y rápida tiene también costes económicos significativos (puede frenar demasiado la actividad económica, aumentar el desempleo, o incluso provocar una recesión), por lo que los bancos centrales suelen buscar un equilibrio entre controlar la inflación y no dañar excesivamente el crecimiento y el empleo. No es, por tanto, una cuestión de \"querer o no querer\" bajar la inflación de forma inmediata, sino de gestionar una herramienta con efectos indirectos, retardados, y con costes económicos asociados a su uso más agresivo.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una familia tiene una hipoteca variable de 180.000€ a tipo de interés referenciado, que sube del 2% al 4,5% anual tras una serie de subidas del banco central (simplificando, sin entrar en la fórmula exacta de amortización de una hipoteca). Calcula, de forma aproximada y solo a efectos ilustrativos, cuánto más pagarían en concepto de intereses en un año si se aplicara ese tipo sobre el capital pendiente completo (180.000€), comparando el 2% frente al 4,5%.",
                solution:
                  "Intereses aproximados al 2%: 180.000€ × 0,02 = 3.600€ al año.\n\nIntereses aproximados al 4,5%: 180.000€ × 0,045 = 8.100€ al año.\n\nDiferencia aproximada: 8.100€ − 3.600€ = 4.500€ más al año solo en concepto de intereses (este cálculo es una simplificación ilustrativa; en la práctica, una hipoteca se amortiza con un sistema de cuotas donde la proporción entre capital e intereses varía cada mes, por lo que el cálculo real sería algo distinto, pero el orden de magnitud del impacto es representativo). Este ejemplo numérico ilustra de forma directa por qué las decisiones de tipos de interés de los bancos centrales tienen un impacto tan directo y sensible en la economía doméstica de millones de familias con hipotecas variables.",
              },
            ],
            reflection:
              "¿Habías relacionado antes las decisiones del BCE o la Reserva Federal sobre tipos de interés con el precio de los bonos que viste en la lección anterior? ¿Cómo crees que esta conexión entre política monetaria y renta fija podría influir en cómo interpretas las noticias económicas sobre bancos centrales a partir de ahora?",
          },
        },
        {
          id: "m4l4",
          title: "BCE y Reserva Federal",
          simple:
            "El BCE (Banco Central Europeo) gestiona la política monetaria de la eurozona. La Reserva Federal (Fed) hace lo propio en Estados Unidos. Ambos son, probablemente, los dos bancos centrales más influyentes del mundo para un inversor global, aunque tienen mandatos y estructuras distintas.",
          technical: `El Banco Central Europeo (BCE), con sede en Fráncfort, es responsable de la política monetaria única de la eurozona (los países que usan el euro como moneda). Su mandato principal, establecido por tratado, es mantener la estabilidad de precios, con un objetivo de inflación de en torno al 2% a medio plazo. El BCE toma sus decisiones de tipos de interés a través del Consejo de Gobierno, compuesto por los miembros del Comité Ejecutivo del BCE y los gobernadores de los bancos centrales nacionales de los países de la eurozona (como el Banco de España).

La Reserva Federal (Federal Reserve, o "Fed"), con estructura descentralizada en 12 bancos regionales coordinados por una Junta de Gobernadores en Washington D.C., es el banco central de Estados Unidos. A diferencia del BCE, la Fed tiene un mandato dual explícito: además de la estabilidad de precios, tiene como objetivo legal maximizar el empleo. Sus decisiones de tipos las toma el FOMC (Federal Open Market Committee, Comité Federal de Mercado Abierto).

Para un inversor con una cartera global (como la que probablemente tendrás si inviertes en índices como el MSCI World o el S&P 500), las decisiones tanto del BCE como de la Fed son relevantes, aunque de forma distinta según la composición de la cartera: las decisiones de la Fed tienden a tener un impacto especialmente relevante en los mercados globales en general (dado el peso de la economía y los mercados financieros estadounidenses en el conjunto mundial), mientras que las decisiones del BCE afectan más directamente a la economía y los mercados de la eurozona, y de forma más cercana a un inversor residente en España en su vida cotidiana (hipotecas, ahorro en euros, etc.).

Ambos bancos centrales publican de forma periódica sus decisiones de tipos de interés, junto con comunicados y ruedas de prensa donde explican su razonamiento y sus previsiones económicas, que son seguidos muy de cerca por los mercados financieros globales, ya que las expectativas sobre futuras decisiones de tipos influyen de forma inmediata en el precio de bonos, acciones y otros activos.`,
          numericExample:
            "Si el BCE mantiene su tipo de interés de referencia en, por ejemplo, un 3,5%, mientras la Fed lo mantiene en un 5%, esta diferencia de tipos entre ambas zonas económicas (entre otros factores) puede influir en el tipo de cambio euro-dólar: en igualdad del resto de condiciones, tipos más altos en EE.UU. tienden a hacer más atractivo invertir en activos denominados en dólares, lo que puede contribuir a una apreciación del dólar frente al euro (aunque el tipo de cambio depende de muchos más factores simultáneos, y esta relación no es mecánica ni automática).",
          realExample:
            "En 2022 y 2023, tanto el BCE como la Fed subieron sus tipos de interés de forma sincronizada (aunque no siempre al mismo ritmo ni con las mismas magnitudes) para combatir la inflación global surgida tras la pandemia. Los comunicados de ambas instituciones, especialmente las ruedas de prensa de sus presidentes (Christine Lagarde en el caso del BCE, Jerome Powell en el caso de la Fed durante ese periodo) generaron habitualmente movimientos notables en los mercados bursátiles y de renta fija globales, por las implicaciones que sus palabras tenían sobre las expectativas de futuras subidas o bajadas de tipos.",
          analogy:
            "Si piensas en la economía global como un sistema de canales de agua interconectados, el BCE y la Fed son como los dos operadores de las principales compuertas de ese sistema (Europa y Estados Unidos, dos de las mayores economías del mundo). Cuando cualquiera de los dos ajusta su compuerta (sube o baja tipos), el nivel del agua en canales conectados (mercados financieros globales) tiende a verse afectado, aunque el efecto sea más directo e inmediato en el canal donde se encuentra esa compuerta concreta.",
          mistakes: [
            "Pensar que solo importan las decisiones del BCE si vives en España, ignorando la influencia global de la Reserva Federal sobre los mercados financieros mundiales, incluidos los activos denominados en euros.",
            "Confundir el mandato de ambas instituciones: la Fed tiene un mandato dual explícito (precios y empleo) mientras que el BCE se centra legalmente, de forma prioritaria, en la estabilidad de precios.",
            "Esperar que el BCE y la Fed actúen siempre de forma sincronizada: aunque a menudo hay cierta coordinación implícita o reacción a fenómenos económicos globales similares, cada institución responde principalmente a las condiciones económicas de su propia región, que pueden diferir.",
          ],
          summary:
            "El BCE gestiona la política monetaria de la eurozona con un mandato centrado en la estabilidad de precios; la Reserva Federal gestiona la de Estados Unidos con un mandato dual que incluye también el empleo. Ambas instituciones son extremadamente relevantes para un inversor global, ya que sus decisiones de tipos de interés influyen en los mercados de bonos y acciones de todo el mundo, no solo en sus respectivas regiones.",
          exercises: {
            quiz: [
              {
                q: "El BCE es responsable de la política monetaria de:",
                options: [
                  "Todo el continente europeo, incluyendo países fuera del euro",
                  "La eurozona (los países que usan el euro como moneda)",
                  "Solo Alemania y Francia",
                  "Estados Unidos y la Unión Europea conjuntamente",
                ],
                correct: 1,
                explain:
                  "El BCE gestiona la política monetaria única de la eurozona, es decir, los países que han adoptado el euro como moneda, no todo el continente europeo en un sentido más amplio.",
              },
              {
                q: "A diferencia del BCE, la Reserva Federal de EE.UU. tiene:",
                options: [
                  "Un mandato exclusivamente centrado en el tipo de cambio del dólar",
                  "Un mandato dual explícito que incluye tanto la estabilidad de precios como el empleo",
                  "Prohibido subir los tipos de interés",
                  "El mismo presidente que el BCE",
                ],
                correct: 1,
                explain:
                  "La Fed tiene legalmente un mandato dual: además de la estabilidad de precios, tiene como objetivo explícito maximizar el empleo, a diferencia del mandato del BCE, centrado prioritariamente en los precios.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor español te dice: \"Yo solo necesito seguir las noticias sobre el BCE, ya que vivo en España e invierto en euros.\" Si su cartera incluye un fondo indexado al MSCI World (con fuerte peso en EE.UU., como viste en el Módulo 2), ¿qué le explicarías sobre la relevancia de la Reserva Federal para su inversión?",
                solution:
                  "Aunque viva en España y opere en euros, si su cartera incluye un fondo MSCI World (que, como se vio en el Módulo 2, tiene un peso de en torno al 65-70% en Estados Unidos), las decisiones de la Reserva Federal son extremadamente relevantes para el comportamiento de esa parte mayoritaria de su inversión. Las subidas o bajadas de tipos de la Fed afectan directamente a las valoraciones de las empresas estadounidenses (a través de varios mecanismos, incluyendo el coste del crédito para esas empresas y el atractivo relativo de otros activos como los bonos), lo que se traslada al valor del fondo que posee, independientemente de que él resida en España y opere en euros. Además, decisiones importantes de la Fed suelen tener efectos de contagio en los mercados globales, incluidos los europeos, por la interconexión de los mercados financieros internacionales. Seguir solo las noticias del BCE le daría una visión incompleta de los factores que realmente influyen en el comportamiento de su cartera global.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tiene 30.000€ en un fondo MSCI World, con la distribución geográfica aproximada vista en el Módulo 2 (68% EE.UU., resto en otros países desarrollados). Calcula cuántos euros de su inversión están expuestos, de forma indirecta, a la economía y la política monetaria de la Reserva Federal (asumiendo que el peso de EE.UU. es representativo de esa exposición).",
                solution:
                  "30.000€ × 0,68 = 20.400€.\n\nEste cálculo (simplificado, ya que en la práctica la influencia de la Fed también se extiende, en menor medida, a otras economías desarrolladas por la interconexión de los mercados financieros globales) ilustra que una parte muy mayoritaria de la inversión de este inversor —más de las dos terceras partes— está directamente ligada a la economía estadounidense y, por tanto, a las decisiones de política monetaria de la Reserva Federal, aunque el inversor resida en España y opere en euros.",
              },
            ],
            reflection:
              "Antes de esta lección, ¿seguías las noticias sobre la Reserva Federal con el mismo interés que las del BCE? Dado el peso de EE.UU. en un fondo MSCI World o S&P 500, ¿cambia esto la atención que le prestarás a partir de ahora a las decisiones de ambas instituciones?",
          },
        },
        {
          id: "m4l5",
          title: "La curva de tipos",
          simple:
            "La curva de tipos muestra la rentabilidad de los bonos de un mismo emisor (normalmente un gobierno) según su plazo: a más corto plazo, un tipo; a más largo plazo, otro. Su forma —normal, plana o invertida— se sigue de cerca porque históricamente ha anticipado, en ocasiones, cambios importantes en la economía.",
          technical: `La curva de tipos (o curva de rendimientos) representa gráficamente la rentabilidad (yield) de los bonos de un mismo emisor, habitualmente un gobierno (por ejemplo, los bonos del Tesoro de EE.UU. o del Tesoro español), en función de su plazo hasta el vencimiento: desde bonos a muy corto plazo (unos meses) hasta bonos a muy largo plazo (10, 20, 30 años).

En condiciones "normales", la curva de tipos tiene pendiente positiva (es ascendente): los bonos a más largo plazo ofrecen una rentabilidad más alta que los bonos a corto plazo. Esto tiene una lógica económica intuitiva: prestar dinero durante más tiempo implica asumir más incertidumbre (sobre la inflación futura, sobre la capacidad de pago del emisor a muy largo plazo, sobre alternativas de inversión que puedan surgir mientras tanto), por lo que los inversores exigen una compensación adicional —una rentabilidad mayor— por comprometer su dinero a plazos más largos.

Existen situaciones, sin embargo, en las que la curva de tipos se aplana (los tipos a corto y largo plazo se acercan) o incluso se invierte (los tipos a corto plazo superan a los de largo plazo). Una curva invertida ha sido, históricamente, una señal seguida muy de cerca por los mercados, ya que en varias ocasiones pasadas ha precedido a periodos de recesión económica en Estados Unidos, aunque no es una relación mecánica ni infalible: ha habido periodos de inversión de la curva sin recesión posterior inmediata, y el desfase temporal entre la inversión de la curva y una eventual recesión (si llega a producirse) puede ser de muchos meses o incluso más de un año.

La explicación habitual de por qué una curva invertida puede anticipar debilidad económica es que suele reflejar que el mercado espera que el banco central tenga que bajar los tipos de interés en el futuro (por ejemplo, ante una desaceleración económica), lo cual reduce las expectativas de rentabilidad de los bonos a largo plazo en comparación con los de corto plazo, que reflejan más directamente el tipo de interés actual del banco central.`,
          numericExample:
            "En una curva de tipos \"normal\", podrías observar, por ejemplo, que un bono a 2 años ofrece una rentabilidad del 3%, un bono a 5 años del 3,5%, y un bono a 10 años del 4% — cada plazo más largo ofrece una rentabilidad algo mayor, reflejando la mayor incertidumbre asociada a comprometer el dinero durante más tiempo. En una curva invertida, en cambio, podrías observar que el bono a 2 años ofrece un 4,5% mientras que el bono a 10 años ofrece solo un 3,8% — los plazos cortos rinden más que los largos, una situación considerada atípica.",
          realExample:
            "La curva de tipos de EE.UU. (comparando, por ejemplo, el bono a 2 años frente al bono a 10 años) se invirtió en varias ocasiones antes de recesiones económicas históricas en ese país, lo que ha hecho que se convierta en un indicador ampliamente seguido por analistas financieros y medios de comunicación económica como posible señal de alerta temprana, aunque —como se ha señalado— no sea una herramienta de predicción exacta ni con un desfase temporal fijo y predecible.",
          analogy:
            "Una curva de tipos normal es como el precio de alquilar un coche: alquilarlo por más días suele costar, proporcionalmente, algo más caro por la incertidumbre adicional para la empresa de alquiler (desgaste, disponibilidad futura del vehículo, etc.). Una curva invertida sería como si, en un momento puntual, alquilar el coche por pocos días fuera más caro que alquilarlo por mucho tiempo — una situación extraña que, en el mundo real de los coches de alquiler no suele pasar, pero que en los mercados de bonos sí ocurre en ciertos momentos, y que suele reflejar expectativas inusuales sobre el futuro económico.",
          mistakes: [
            "Interpretar una curva de tipos invertida como una predicción exacta e inmediata de una recesión: históricamente ha sido una señal de alerta, no una certeza matemática, y el desfase temporal (si la recesión llega a producirse) es muy variable.",
            "Pensar que la curva de tipos es relevante solo para analistas profesionales: entender su forma básica ayuda a interpretar muchas noticias económicas que hacen referencia a ella.",
            "Confundir la curva de tipos de un país con la de otro: cada país (o zona monetaria) tiene su propia curva de tipos, reflejando las condiciones específicas de su economía y su banco central.",
          ],
          summary:
            "La curva de tipos muestra la rentabilidad de los bonos de un mismo emisor según su plazo. En condiciones normales, tiene pendiente positiva (más rentabilidad a más plazo). Una curva invertida (tipos a corto plazo más altos que a largo plazo) ha sido, históricamente, una señal seguida de cerca por su asociación pasada con periodos de recesión económica, aunque sin ser una herramienta de predicción exacta ni infalible.",
          exercises: {
            quiz: [
              {
                q: "En una curva de tipos \"normal\" (con pendiente positiva):",
                options: [
                  "Los bonos a corto plazo rinden más que los de largo plazo",
                  "Los bonos a largo plazo ofrecen, generalmente, una rentabilidad mayor que los de corto plazo",
                  "Todos los bonos, sin importar el plazo, rinden exactamente igual",
                  "Solo existen bonos a un único plazo posible",
                ],
                correct: 1,
                explain:
                  "En una curva de tipos normal, los bonos a mayor plazo ofrecen una rentabilidad mayor, como compensación por la mayor incertidumbre de comprometer el dinero durante más tiempo.",
              },
              {
                q: "Una curva de tipos invertida (donde los tipos a corto plazo superan a los de largo plazo) ha sido, históricamente:",
                options: [
                  "Una garantía matemática de recesión inmediata",
                  "Una señal seguida de cerca por su asociación pasada con periodos de recesión, aunque sin ser una predicción exacta",
                  "Un fenómeno que nunca ha ocurrido en la práctica",
                  "Irrelevante para los analistas económicos",
                ],
                correct: 1,
                explain:
                  "La inversión de la curva de tipos ha precedido a varias recesiones históricas en EE.UU., por lo que se sigue de cerca, aunque no es una herramienta de predicción exacta ni con un desfase temporal fijo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un titular de prensa económica dice: \"La curva de tipos se invierte: los expertos temen una recesión inminente.\" Con lo aprendido en esta lección, ¿qué matices le pondrías a la palabra \"inminente\" en ese titular?",
                solution:
                  "La palabra \"inminente\" puede ser engañosa. Aunque es cierto que, históricamente, la inversión de la curva de tipos ha precedido a varias recesiones en el pasado, el desfase temporal entre la inversión de la curva y el inicio de una eventual recesión ha sido, en distintos episodios históricos, de varios meses hasta más de un año, y no es un patrón mecánico ni garantizado en todos los casos (ha habido periodos de inversión de la curva sin que le siguiera una recesión en el corto-medio plazo). Un titular más preciso hablaría de una \"señal de alerta histórica que merece atención\", en vez de sugerir una certeza de recesión inmediata. Esto no significa que la señal carezca de valor informativo, sino que conviene interpretarla con la cautela estadística apropiada, sin sobrerreaccionar a un titular alarmista basado en una correlación histórica, no en una ley económica exacta y determinista.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Observas la siguiente curva de tipos de un país: bono a 6 meses = 4,8%, bono a 2 años = 4,5%, bono a 10 años = 3,9%, bono a 30 años = 4,1%. Identifica en qué tramo de la curva se observa una inversión (tipos a plazo más corto superiores a los de plazo más largo correspondiente) y en qué tramo la curva vuelve a tener pendiente positiva.",
                solution:
                  "Se observa inversión entre el bono a 6 meses (4,8%) y el bono a 10 años (3,9%): a medida que aumenta el plazo desde 6 meses hasta 10 años, el tipo baja, lo cual es la definición de inversión de la curva en ese tramo. También hay inversión entre el bono a 2 años (4,5%) y el de 10 años (3,9%).\n\nSin embargo, entre el bono a 10 años (3,9%) y el de 30 años (4,1%), la curva vuelve a tener pendiente positiva (el tipo sube ligeramente al aumentar el plazo desde 10 hasta 30 años).\n\nEste ejemplo ilustra que la curva de tipos no siempre es uniformemente normal o uniformemente invertida en toda su extensión: puede tener tramos con distinta pendiente simultáneamente, y los analistas suelen fijarse en comparaciones concretas (como el diferencial entre el bono a 2 años y el de 10 años) como uno de los indicadores más citados, sin que eso agote toda la información que contiene la curva completa.",
              },
            ],
            reflection:
              "¿Habías escuchado hablar de la \"curva de tipos invertida\" en noticias económicas antes de esta lección, sin entender bien qué significaba? ¿Te sientes más capaz ahora de interpretar ese tipo de titulares con el contexto y la cautela adecuados?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 4",
        passScore: 70,
        questions: [
          {
            q: "Cuando compras un bono, en esencia estás:",
            options: [
              "Comprando una porción de propiedad de una empresa",
              "Prestando dinero al emisor a cambio de intereses (cupón) y la devolución del capital al vencimiento",
              "Apostando sin relación con ningún préstamo real",
              "Adquiriendo un derivado sin relación con deuda",
            ],
            correct: 1,
            topic: "Qué es un bono",
          },
          {
            q: "Cuando los tipos de interés de mercado suben, el precio de los bonos ya emitidos con cupones fijos más bajos:",
            options: [
              "Sube, porque son más escasos en el mercado",
              "Baja, porque se vuelven menos atractivos comparados con los bonos nuevos",
              "Se mantiene siempre exactamente igual, sin excepción",
              "Deja automáticamente de pagar cupones",
            ],
            correct: 1,
            topic: "Relación entre precio y tipos",
          },
          {
            q: "Si mantienes un bono hasta su vencimiento y el emisor no incurre en impago:",
            options: [
              "Pierdes automáticamente dinero si los tipos han subido mientras tanto",
              "Recibes el valor nominal completo y los cupones pactados, independientemente de las fluctuaciones de precio intermedias",
              "El bono deja de tener validez legal",
              "Debes pagar una penalización al emisor",
            ],
            correct: 1,
            topic: "Relación entre precio y tipos",
          },
          {
            q: "El objetivo principal declarado de la mayoría de bancos centrales de economías desarrolladas es:",
            options: [
              "Maximizar los beneficios de la banca privada",
              "La estabilidad de precios (mantener la inflación en un nivel objetivo)",
              "Fijar directamente el precio de todos los productos de consumo",
              "Financiar sin límite el gasto público",
            ],
            correct: 1,
            topic: "Qué son los bancos centrales",
          },
          {
            q: "A diferencia del BCE, la Reserva Federal de EE.UU. tiene:",
            options: [
              "Un mandato dual explícito que incluye también el objetivo de maximizar el empleo",
              "Prohibido cambiar los tipos de interés",
              "El mismo presidente que el BCE",
              "Un mandato centrado exclusivamente en el tipo de cambio",
            ],
            correct: 0,
            topic: "BCE y Reserva Federal",
          },
          {
            q: "En una curva de tipos \"normal\" (pendiente positiva):",
            options: [
              "Los bonos a corto plazo rinden más que los de largo plazo",
              "Los bonos a largo plazo ofrecen, generalmente, mayor rentabilidad que los de corto plazo",
              "Todos los plazos rinden exactamente igual",
              "Solo existe un plazo posible de bono",
            ],
            correct: 1,
            topic: "La curva de tipos",
          },
          {
            q: "Una curva de tipos invertida ha sido, históricamente:",
            options: [
              "Una garantía matemática de recesión inmediata en cuestión de días",
              "Una señal de alerta seguida de cerca, asociada en el pasado con periodos de recesión, sin ser una predicción exacta",
              "Un fenómeno que nunca ha ocurrido realmente",
              "Irrelevante para el análisis económico",
            ],
            correct: 1,
            topic: "La curva de tipos",
          },
          {
            q: "Compras un bono con valor nominal de 3.000€ y cupón anual del 3,5%. ¿Cuánto recibirás en concepto de cupón cada año?",
            options: ["35€", "105€", "300€", "350€"],
            correct: 1,
            topic: "Qué es un bono (cálculo)",
          },
        ],
      },
    },
    {
      id: "m5",
      number: 5,
      title: "Construcción de carteras y gestión del riesgo",
      objective:
        "Aprender a diseñar una cartera de inversión coherente con tu horizonte y tolerancia al riesgo: qué es el asset allocation, cómo y cuándo rebalancear, qué es el Dollar Cost Averaging (DCA), y cómo gestionar el riesgo de forma práctica en tu día a día como inversor.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulos 0 a 4 completos (riesgo, índices, fondos, renta fija).",
      learn:
        "A construir una cartera diversificada entre distintos activos según tus objetivos, a mantenerla en equilibrio con el tiempo mediante el rebalanceo, a invertir de forma sistemática con DCA, y a aplicar principios prácticos de gestión del riesgo a tu propia situación.",
      lessons: [
        {
          id: "m5l1",
          title: "Qué es una cartera de inversión",
          simple:
            "Una cartera de inversión es el conjunto de todos los activos que posees (acciones, fondos, bonos, etc.), considerados como un todo. Lo importante no es solo cómo se comporta cada activo por separado, sino cómo se comportan juntos.",
          technical: `Una cartera de inversión es el conjunto completo de activos financieros que posee un inversor: fondos indexados, ETFs, acciones individuales, bonos, efectivo, y cualquier otro instrumento, considerados en su totalidad.

Un principio fundamental de la teoría moderna de carteras (desarrollada, entre otros, por Harry Markowitz, premio Nobel de Economía) es que el riesgo y la rentabilidad de una cartera no dependen únicamente de las características de cada activo por separado, sino también de cómo se relacionan entre sí sus movimientos: su correlación.

Dos activos con baja correlación (que no tienden a subir y bajar exactamente al mismo tiempo y en la misma magnitud) pueden, combinados en una cartera, ofrecer una relación riesgo-rentabilidad conjunta más eficiente que la de cualquiera de los activos por separado. Esto es una extensión, a nivel de cartera completa, del principio de diversificación visto en el Módulo 1: no se trata solo de tener muchos activos distintos, sino de que esos activos, en la medida de lo posible, no se muevan todos exactamente igual ante los mismos eventos.

Para un inversor individual, pensar "en cartera" (en el conjunto) en vez de evaluar cada activo de forma aislada es un cambio de perspectiva importante: un activo que, por sí solo, parece muy volátil o arriesgado, puede tener un papel valioso dentro de una cartera bien construida si su comportamiento compensa, en ciertos momentos, al de otros activos de la cartera. La pregunta relevante no es solo "¿es buena esta inversión por sí sola?", sino "¿qué aporta esta inversión al conjunto de mi cartera?".`,
          numericExample:
            "Imagina una cartera con dos activos: un fondo de renta variable global (que en un año malo cae un 25%) y un fondo de renta fija (bonos gubernamentales, que ese mismo año, en un escenario de \"vuelo hacia la seguridad\" durante una crisis, sube un 5%, un comportamiento que a veces —no siempre— ocurre en las crisis, cuando los inversores buscan refugio en activos considerados más seguros). Si la cartera tiene un 70% en renta variable y un 30% en renta fija, el resultado conjunto sería aproximadamente: (70% × −25%) + (30% × 5%) = −17,5% + 1,5% = −16%, una caída notablemente menor que el −25% que habría sufrido una cartera compuesta al 100% por el fondo de renta variable.",
          realExample:
            "Durante la crisis financiera de 2008, muchos inversores con carteras compuestas únicamente por renta variable sufrieron caídas superiores al 40-50% en algunos índices bursátiles, mientras que quienes tenían una parte de su cartera en bonos gubernamentales de alta calidad experimentaron caídas conjuntas mucho más moderadas, precisamente por el papel amortiguador que jugó esa porción de renta fija en ese episodio concreto (aunque conviene matizar que la correlación entre acciones y bonos no es constante en el tiempo, y en otros periodos de la historia ambos activos han caído a la vez).",
          analogy:
            "Pensar en cada inversión por separado es como evaluar a cada jugador de un equipo de fútbol de forma aislada. Pensar \"en cartera\" es evaluar cómo juegan juntos como equipo: un jugador brillante pero que no encaja con el estilo de los demás puede aportar menos al conjunto que otro jugador algo menos espectacular individualmente, pero que se complementa mejor con sus compañeros. Lo que importa, al final, es el resultado del equipo completo, no solo el de cada jugador por separado.",
          mistakes: [
            "Evaluar cada inversión de la cartera de forma completamente aislada, sin considerar cómo se relaciona con el resto de activos que ya posees.",
            "Asumir que la correlación entre dos activos (por ejemplo, acciones y bonos) es siempre constante en el tiempo: puede variar según el contexto económico y de mercado.",
            "Confundir \"diversificar dentro de la renta variable\" (Módulo 1, distintas empresas/países) con \"diversificar entre clases de activos\" (esta lección, acciones + bonos + otros), que son conceptos relacionados pero distintos y complementarios.",
          ],
          summary:
            "Una cartera es el conjunto de todos tus activos considerados como un todo, no la suma de evaluaciones aisladas de cada uno. La relación (correlación) entre los distintos activos que la componen es tan importante como las características de cada activo por separado, y es la base sobre la que se construye una estrategia de asset allocation (siguiente lección).",
          exercises: {
            quiz: [
              {
                q: "Según la teoría moderna de carteras, el riesgo y la rentabilidad de una cartera dependen de:",
                options: [
                  "Únicamente de la suma de las rentabilidades individuales de cada activo",
                  "De las características de cada activo por separado, y de cómo se relacionan (correlación) entre sí",
                  "Exclusivamente del activo con mayor peso en la cartera",
                  "Solo del número total de activos, sin importar su naturaleza",
                ],
                correct: 1,
                explain:
                  "La correlación entre los activos de una cartera es clave: dos activos con baja correlación pueden mejorar la relación riesgo-rentabilidad conjunta, más allá de sus características individuales por separado.",
              },
              {
                q: "Pensar \"en cartera\" en vez de evaluar cada activo de forma aislada significa:",
                options: [
                  "Ignorar por completo el riesgo de cada activo individual",
                  "Preguntarse qué aporta cada inversión al comportamiento conjunto de toda la cartera, no solo evaluarla en solitario",
                  "Invertir siempre en un único activo para simplificar el análisis",
                  "Evitar cualquier tipo de renta fija en la cartera",
                ],
                correct: 1,
                explain:
                  "El enfoque de cartera consiste en evaluar cómo cada activo contribuye al conjunto (incluyendo su relación con los demás activos), no solo en juzgar sus méritos de forma aislada.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"No voy a invertir nunca en bonos, porque su rentabilidad esperada es mucho menor que la de las acciones, así que solo me hacen perder rentabilidad.\" ¿Qué le explicarías sobre el papel de los bonos dentro de una cartera conjunta, más allá de su rentabilidad aislada?",
                solution:
                  "Es cierto que, de forma aislada, los bonos suelen tener una rentabilidad esperada menor que las acciones a largo plazo (como se vio en el Módulo 1, por la relación riesgo-rentabilidad). Pero evaluar los bonos solo por su rentabilidad individual ignora su posible papel dentro del conjunto de la cartera: en ciertos episodios de mercado (aunque no en todos, la correlación no es constante), los bonos de alta calidad han tendido a comportarse mejor que las acciones, amortiguando las caídas conjuntas de la cartera. Esto puede ser valioso no solo en términos puramente matemáticos de riesgo-rentabilidad, sino también psicológicamente (Módulo 6): una cartera con menos caídas bruscas puede ayudar a un inversor a mantener su estrategia a largo plazo sin tomar decisiones impulsivas en momentos de pánico. La decisión de cuánto peso dar a los bonos frente a las acciones depende del horizonte temporal y la tolerancia al riesgo de cada inversor (se trata en la siguiente lección sobre asset allocation), pero descartarlos únicamente por su menor rentabilidad aislada ignora su función potencial dentro del conjunto de la cartera.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una cartera tiene un 80% en renta variable y un 20% en renta fija. En un año concreto, la renta variable cae un 30% y la renta fija sube un 4%. Calcula la rentabilidad conjunta aproximada de la cartera ese año, y compárala con la que habría tenido una cartera compuesta al 100% por renta variable.",
                solution:
                  "Rentabilidad conjunta de la cartera mixta: (80% × −30%) + (20% × 4%) = −24% + 0,8% = −23,2%.\n\nRentabilidad de una cartera 100% renta variable: −30%.\n\nDiferencia: −23,2% frente a −30%, es decir, la cartera mixta con un 20% en renta fija habría amortiguado la caída en 6,8 puntos porcentuales ese año concreto, gracias al comportamiento distinto (no correlacionado de forma perfecta) entre ambos tipos de activos en ese escenario. Este cálculo ilustra numéricamente el efecto amortiguador que puede tener la diversificación entre clases de activos dentro de una cartera conjunta.",
              },
            ],
            reflection:
              "¿Habías evaluado antes tus inversiones (o las que planeas hacer) de forma aislada, una por una, o pensando en cómo se combinan entre sí como conjunto? ¿Cómo crees que este cambio de perspectiva podría influir en tus próximas decisiones de inversión?",
          },
        },
        {
          id: "m5l2",
          title: "Asset allocation",
          simple:
            "El asset allocation es la decisión de cuánto porcentaje de tu cartera dedicas a cada clase de activo (acciones, bonos, otros). Es, según numerosos estudios, uno de los factores que más explica la variabilidad de resultados de una cartera a largo plazo, más incluso que la elección de productos concretos dentro de cada clase.",
          technical: `El asset allocation (asignación de activos) es la decisión estratégica de cómo repartir el capital de una cartera entre las grandes clases de activos disponibles: renta variable (acciones, a través de fondos indexados o de otro tipo), renta fija (bonos), y potencialmente otras clases como inmobiliario (REITs, Módulo posterior), materias primas, o efectivo.

Diversos estudios académicos sobre atribución de rentabilidad en carteras de inversión (el más citado, aunque también debatido en sus matices metodológicos, es el estudio de Brinson, Hood y Beebower de 1986, y trabajos posteriores relacionados) han sugerido que la decisión de asset allocation explica una proporción muy sustancial de la variabilidad de resultados entre distintas carteras a largo plazo, más que la selección de valores concretos dentro de cada clase de activo o el intento de sincronizar el mercado (market timing, tratado en el Módulo 6).

La decisión de asset allocation depende principalmente de dos factores personales:

- Horizonte temporal: cuánto tiempo falta hasta que necesites usar ese dinero. Horizontes más largos (como tus 20 años hasta la independencia financiera) permiten, en general, asumir una mayor proporción de activos más volátiles (como renta variable), ya que hay más tiempo para recuperarse de caídas temporales.
- Tolerancia al riesgo: la capacidad emocional y financiera de soportar caídas de valor de la cartera sin tomar decisiones impulsivas (como vender en pánico). Esta tolerancia varía de una persona a otra, incluso con horizontes temporales similares.

Una heurística clásica y simplificada (que no debe tomarse como una regla matemática exacta, sino como un punto de partida orientativo) es la regla "110 menos tu edad" (o variantes similares con 100 o 120) para determinar el porcentaje de renta variable en la cartera: por ejemplo, a los 30 años, esta regla sugeriría en torno a un 80% en renta variable (110-30) y un 20% en renta fija, aunque muchos inversores con horizontes muy largos y alta tolerancia al riesgo optan por porcentajes de renta variable más altos, especialmente en las fases iniciales de acumulación de capital antes de acercarse al objetivo final.`,
          numericExample:
            "Dos inversores con el mismo horizonte de 20 años deciden asset allocations distintos: el Inversor A elige 90% renta variable / 10% renta fija; el Inversor B elige 60% renta variable / 40% renta fija. En un año de mercado alcista donde la renta variable sube un 15% y la renta fija sube un 3%, el Inversor A obtendría aproximadamente: (90% × 15%) + (10% × 3%) = 13,5% + 0,3% = 13,8%. El Inversor B obtendría: (60% × 15%) + (40% × 3%) = 9% + 1,2% = 10,2%. En un año bajista donde la renta variable cae un 20% y la renta fija sube un 2%, el Inversor A obtendría: (90% × −20%) + (10% × 2%) = −18% + 0,2% = −17,8%, mientras que el Inversor B obtendría: (60% × −20%) + (40% × 2%) = −12% + 0,8% = −11,2%. Se observa que la decisión de asset allocation determina de forma muy significativa tanto el potencial de ganancia como la magnitud de las caídas.",
          realExample:
            "Fondos con fecha objetivo (target-date funds), populares especialmente en planes de pensiones en países como Estados Unidos, ajustan automáticamente su asset allocation con el tiempo: suelen empezar con un porcentaje alto de renta variable cuando el inversor es joven y el horizonte hasta la jubilación es largo, y van reduciendo progresivamente ese porcentaje a favor de la renta fija a medida que se acerca la fecha objetivo, aplicando de forma automática la lógica de que el horizonte temporal restante debe influir en la composición de la cartera.",
          analogy:
            "El asset allocation es como decidir la proporción de ingredientes de una receta antes de empezar a cocinar: puedes tener los mejores ingredientes individuales del mundo, pero si las proporciones entre ellos no son las adecuadas para el plato que quieres conseguir, el resultado final no será el esperado. De forma similar, elegir los \"mejores\" fondos individuales dentro de cada categoría importa menos, en términos de resultado final de la cartera a largo plazo, que haber decidido bien las proporciones generales entre las distintas clases de activos.",
          mistakes: [
            "Centrar todo el esfuerzo de decisión en elegir \"el mejor fondo\" dentro de una categoría (por ejemplo, qué ETF concreto de renta variable), sin dedicar suficiente reflexión a la decisión de asset allocation general (cuánto en renta variable, cuánto en renta fija).",
            "Copiar el asset allocation de otra persona sin adaptarlo a las circunstancias personales propias (horizonte temporal, tolerancia al riesgo, situación financiera general).",
            "Tratar reglas heurísticas simplificadas (como \"110 menos tu edad\") como fórmulas matemáticas exactas, en vez de como puntos de partida orientativos que conviene ajustar a la situación y preferencias personales de cada inversor.",
          ],
          summary:
            "El asset allocation, la decisión de cómo repartir la cartera entre grandes clases de activos (renta variable, renta fija, y otras), es uno de los factores que más explica la variabilidad de resultados de una cartera a largo plazo. Depende principalmente del horizonte temporal y la tolerancia al riesgo personal de cada inversor, y merece más atención relativa que la elección de productos concretos dentro de cada categoría.",
          exercises: {
            quiz: [
              {
                q: "Según estudios de atribución de rentabilidad en carteras, la decisión de asset allocation:",
                options: [
                  "Es irrelevante comparada con la elección de fondos concretos",
                  "Explica una proporción muy sustancial de la variabilidad de resultados entre distintas carteras a largo plazo",
                  "Solo importa para inversores con más de 1 millón de euros",
                  "Es lo mismo que el market timing",
                ],
                correct: 1,
                explain:
                  "Diversos estudios académicos sugieren que la decisión de cómo repartir la cartera entre grandes clases de activos explica una parte muy significativa de la variabilidad de resultados a largo plazo, más que la selección de productos concretos dentro de cada clase.",
              },
              {
                q: "Los dos factores principales que suelen determinar el asset allocation personal son:",
                options: [
                  "El color favorito del inversor y su edad",
                  "El horizonte temporal hasta necesitar el dinero y la tolerancia personal al riesgo",
                  "Únicamente el saldo actual de la cuenta bancaria",
                  "Exclusivamente las recomendaciones de un influencer financiero",
                ],
                correct: 1,
                explain:
                  "El horizonte temporal (cuánto tiempo falta hasta necesitar el capital) y la tolerancia al riesgo (capacidad emocional y financiera de soportar caídas) son los dos factores centrales que deben guiar la decisión personal de asset allocation.",
              },
            ],
            cases: [
              {
                prompt:
                  "Dos amigos, ambos de 35 años y con el mismo horizonte de inversión de 20 años, deciden asset allocations muy distintos: uno elige 95% renta variable / 5% renta fija, y el otro 50% renta variable / 50% renta fija. Si ambos tienen el mismo horizonte temporal, ¿es necesariamente incorrecta la decisión de alguno de los dos? Explica por qué.",
                solution:
                  "No es necesariamente incorrecta la decisión de ninguno de los dos, porque el horizonte temporal es solo uno de los dos factores relevantes: la tolerancia al riesgo personal es igual de importante y puede ser muy distinta entre dos personas con el mismo horizonte. El amigo con 95% en renta variable probablemente tenga una tolerancia al riesgo alta, esté cómodo con caídas de valor pronunciadas en el corto-medio plazo a cambio de una mayor rentabilidad esperada a largo plazo. El amigo con 50/50 probablemente tenga una tolerancia al riesgo más conservadora, prefiriendo un camino más suave (con menor rentabilidad esperada) a cambio de dormir más tranquilo durante las caídas de mercado. Ninguna decisión es objetivamente \"correcta\" o \"incorrecta\" en abstracto: lo importante es que cada uno elija un asset allocation con el que realmente pueda mantenerse fiel a largo plazo, sin caer en pánico y vender en el peor momento durante una caída de mercado — algo que se trata en profundidad en el Módulo 6 sobre psicología del inversor.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor de 40 años aplica la heurística \"110 menos su edad\" para calcular su porcentaje orientativo de renta variable. Calcula ese porcentaje y el porcentaje complementario de renta fija que sugeriría esta regla simplificada.",
                solution:
                  "Renta variable: 110 − 40 = 70%.\n\nRenta fija: 100% − 70% = 30%.\n\nEsta heurística sugeriría, de forma orientativa y simplificada, un asset allocation aproximado de 70% renta variable / 30% renta fija para este inversor de 40 años. Como se ha señalado en la lección, esta regla es solo un punto de partida orientativo, no una fórmula matemática exacta: el inversor debería ajustar este resultado según su tolerancia al riesgo personal, su situación financiera general, y otros factores relevantes de su circunstancia particular.",
              },
            ],
            reflection:
              "Pensando en tu propio horizonte de 20 años y en cómo crees que reaccionarías emocionalmente ante una caída de mercado del 30-40% en tu cartera, ¿qué asset allocation aproximado (porcentaje de renta variable frente a renta fija) crees, de forma preliminar, que encajaría mejor contigo? (No hace falta una respuesta definitiva ahora — esta reflexión se retomará con más herramientas en el Módulo 10, al diseñar tu estrategia final).",
          },
        },
        {
          id: "m5l3",
          title: "Rebalanceo de cartera",
          simple:
            "Rebalancear es ajustar periódicamente tu cartera para devolverla a los porcentajes objetivo que decidiste originalmente, ya que con el tiempo, al moverse los precios de forma distinta, esos porcentajes se van desviando de tu plan inicial.",
          technical: `Con el paso del tiempo, debido a que los distintos activos de una cartera no suben o bajan exactamente al mismo ritmo, la proporción real entre ellos se desvía gradualmente de la asignación objetivo (asset allocation) que el inversor decidió originalmente. Por ejemplo, si la renta variable sube mucho más que la renta fija durante varios años, el peso de la renta variable en la cartera aumentará progresivamente por encima del porcentaje objetivo inicial, sin que el inversor haya tomado ninguna decisión activa al respecto — simplemente ha ocurrido por la diferencia de rentabilidad entre ambos activos.

El rebalanceo consiste en realizar operaciones periódicas (vender una parte de los activos que se han revalorizado más de la cuenta, y/o comprar más de los que se han quedado rezagados) para devolver la cartera a sus porcentajes objetivo originales.

Existen distintas estrategias para decidir cuándo rebalancear:

- Rebalanceo por calendario: revisar y ajustar la cartera en fechas fijas predeterminadas (por ejemplo, una vez al año, o cada seis meses), independientemente de cuánto se haya desviado la asignación real de la objetivo en ese momento.
- Rebalanceo por umbral (o por bandas): rebalancear solo cuando la desviación de algún activo respecto a su porcentaje objetivo supera un umbral predefinido (por ejemplo, si la renta variable se desvía más de 5 puntos porcentuales de su objetivo), independientemente de la fecha en la que ocurra esa desviación.

El rebalanceo tiene un efecto interesante y, para muchos inversores, contraintuitivo: obliga sistemáticamente a "vender lo que ha subido más y comprar lo que ha subido menos (o ha bajado)", lo cual va en contra del impulso psicológico natural de muchos inversores (que tienden a querer comprar más de lo que ya ha subido, por sesgo de euforia, y evitar lo que ha bajado, por miedo — Módulo 6). Precisamente por esta disciplina sistemática, el rebalanceo puede actuar como un mecanismo de control del riesgo (evitando que la cartera se concentre cada vez más en los activos que más han subido, potencialmente los más sobrevalorados en ese momento) más que como una estrategia diseñada principalmente para maximizar la rentabilidad.

En España, es importante considerar el impacto fiscal del rebalanceo: si se hace vendiendo directamente activos con ganancias (por ejemplo, ETFs o acciones), esa venta genera un evento fiscal sujeto a tributación (Módulo 7). Si se hace mediante traspasos entre fondos de inversión, puede beneficiarse del régimen de diferimiento fiscal español, lo cual hace que la elección del vehículo (fondo frente a ETF, visto en el Módulo 3) tenga también implicaciones prácticas relevantes sobre cómo y cuándo conviene rebalancear.`,
          numericExample:
            "Una cartera empieza con 10.000€: 70% renta variable (7.000€) y 30% renta fija (3.000€). Tras un año de fuerte subida en renta variable (+25%) y una subida modesta en renta fija (+2%), los valores pasan a ser: renta variable = 7.000€ × 1,25 = 8.750€; renta fija = 3.000€ × 1,02 = 3.060€. El valor total de la cartera es ahora 11.810€, pero la proporción real ha cambiado: renta variable representa ahora 8.750/11.810 ≈ 74,1%, y renta fija ≈ 25,9% — desviada del 70/30 objetivo original. Para rebalancear, el inversor vendería una parte de la renta variable y/o compraría más renta fija hasta devolver la cartera a la proporción 70/30 sobre el nuevo valor total de 11.810€ (es decir, aproximadamente 8.267€ en renta variable y 3.543€ en renta fija).",
          realExample:
            "Durante los años de fuerte subida bursátil previos a la crisis de 2008, muchas carteras que originalmente tenían, por ejemplo, un 60% en renta variable, fueron acumulando gradualmente un porcentaje mucho mayor (por ejemplo, 75-80%) sin que sus dueños tomaran ninguna decisión activa, simplemente por el efecto de la revalorización superior de las acciones frente a otros activos. Quienes no rebalancearon se encontraron, sin haberlo decidido conscientemente, con carteras mucho más expuestas al riesgo de renta variable justo antes de una caída muy pronunciada del mercado.",
          analogy:
            "El rebalanceo es como podar periódicamente un jardín para mantener las proporciones originales de las distintas plantas que decidiste plantar. Si una planta crece mucho más rápido que las demás y no la podas nunca, con el tiempo puede acabar invadiendo todo el espacio del jardín, alterando por completo el diseño original que habías planeado, aunque tú nunca hayas decidido activamente cambiar ese diseño.",
          mistakes: [
            "No rebalancear nunca la cartera, dejando que las desviaciones se acumulen indefinidamente hasta que la asignación real quede muy alejada de la planeada originalmente.",
            "Rebalancear con demasiada frecuencia (por ejemplo, cada semana), generando costes de transacción y, en el caso de ETFs o acciones, eventos fiscales innecesarios por desviaciones muy pequeñas que no justifican la operación.",
            "No considerar el impacto fiscal del método de rebalanceo elegido en España (venta directa frente a traspaso entre fondos), que puede tener consecuencias tributarias muy distintas.",
          ],
          summary:
            "El rebalanceo consiste en ajustar periódicamente la cartera para devolverla a los porcentajes objetivo de asset allocation originales, que se desvían con el tiempo por la diferente rentabilidad de los distintos activos. Puede hacerse por calendario o por umbrales de desviación, y actúa como un mecanismo disciplinado de control del riesgo, ya que obliga sistemáticamente a vender lo que más ha subido y comprar lo que se ha quedado rezagado. En España, conviene considerar su impacto fiscal según el vehículo de inversión utilizado.",
          exercises: {
            quiz: [
              {
                q: "El rebalanceo de cartera consiste en:",
                options: [
                  "Vender toda la cartera y empezar de cero cada año",
                  "Ajustar periódicamente la cartera para devolverla a los porcentajes objetivo de asset allocation originales",
                  "Invertir siempre en el activo que más ha subido recientemente",
                  "Una estrategia exclusiva para fondos de renta fija",
                ],
                correct: 1,
                explain:
                  "El rebalanceo corrige las desviaciones que se acumulan con el tiempo entre la asignación real de la cartera y la asignación objetivo decidida originalmente, debido a la distinta rentabilidad de los diferentes activos.",
              },
              {
                q: "Una particularidad psicológicamente contraintuitiva del rebalanceo es que:",
                options: [
                  "Obliga a comprar más de lo que ya ha subido mucho, sin vender nada nunca",
                  "Obliga sistemáticamente a vender parte de lo que más ha subido y comprar más de lo que se ha quedado rezagado",
                  "Elimina por completo cualquier tipo de riesgo de la cartera",
                  "Solo se puede hacer una vez en la vida",
                ],
                correct: 1,
                explain:
                  "El rebalanceo va en contra del impulso natural de muchos inversores (querer comprar más de lo que sube y evitar lo que baja), precisamente porque sistemáticamente vende parte de lo que se ha revalorizado más y compra lo que se ha quedado rezagado respecto al objetivo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Mi cartera de renta variable ha subido mucho estos años, no pienso vender nada de eso para comprar bonos, sería absurdo vender lo que va bien.\" ¿Qué le explicarías sobre la lógica del rebalanceo, más allá de la intuición de \"no tocar lo que funciona\"?",
                solution:
                  "Es comprensible la resistencia psicológica a vender lo que ha ido bien, pero conviene entender que el rebalanceo no se hace porque se piense que ese activo va a ir mal en el futuro, sino como una disciplina de control de riesgo para mantener la cartera alineada con el nivel de riesgo que originalmente se decidió asumir (el asset allocation elegido según el horizonte temporal y la tolerancia al riesgo personal, visto en la lección anterior). Si la renta variable ha subido mucho y ahora representa, por ejemplo, un 85% de la cartera en vez del 70% objetivo original, la cartera ha quedado, sin que el inversor lo decidiera conscientemente, más expuesta a caídas de mercado de lo que él mismo había determinado como su nivel de riesgo apropiado. El rebalanceo no es una apuesta sobre qué activo lo hará mejor en el futuro, sino una forma sistemática de mantener el perfil de riesgo elegido, evitando que la cartera se vaya \"desviando\" silenciosamente hacia niveles de riesgo mayores (o menores) de los que el inversor decidió asumir originalmente.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una cartera de 15.000€ tiene un objetivo de 60% renta variable / 40% renta fija. Tras un periodo de mercado, la renta variable vale ahora 11.700€ y la renta fija 4.800€ (total: 16.500€). Calcula el porcentaje real actual de cada clase de activo, y cuánto habría que vender de renta variable (y comprar de renta fija) para volver exactamente al 60/40 sobre el nuevo valor total.",
                solution:
                  "Porcentaje real actual: renta variable = 11.700/16.500 ≈ 70,9%. Renta fija = 4.800/16.500 ≈ 29,1%.\n\nObjetivo sobre el nuevo total de 16.500€: renta variable = 16.500 × 0,60 = 9.900€. Renta fija = 16.500 × 0,40 = 6.600€.\n\nHabría que vender: 11.700€ − 9.900€ = 1.800€ de renta variable, y comprar esos mismos 1.800€ en renta fija (4.800€ + 1.800€ = 6.600€, que coincide con el objetivo calculado). Esta operación devolvería la cartera exactamente a la proporción 60/40 originalmente decidida.",
              },
            ],
            reflection:
              "¿Te resultaría psicológicamente difícil vender parte de un activo que ha subido mucho para comprar otro que ha subido menos (o ha bajado)? ¿Cómo crees que te ayudaría tener una regla de rebalanceo predefinida (por calendario o por umbral) para no depender de decisiones puntuales basadas en cómo te sientas en cada momento?",
          },
        },
        {
          id: "m5l4",
          title: "Dollar Cost Averaging (DCA)",
          simple:
            "El Dollar Cost Averaging (DCA), o promedio de coste en dólares, consiste en invertir una cantidad fija de dinero de forma periódica (por ejemplo, cada mes), en vez de invertir todo el capital de golpe. Es la forma más habitual en la que invierte, de hecho, cualquier persona que aporta una parte de su nómina cada mes.",
          technical: `El Dollar Cost Averaging (DCA) es una estrategia de inversión que consiste en invertir una cantidad de dinero fija de forma periódica y regular (por ejemplo, 300€ cada mes), independientemente del precio de mercado en ese momento, en vez de invertir todo el capital disponible de una sola vez (lump sum, inversión de una sola vez).

El efecto matemático del DCA es que, cuando los precios están más bajos, la misma cantidad fija de dinero compra más participaciones (o acciones) del activo; cuando los precios están más altos, esa misma cantidad compra menos participaciones. Con el tiempo, esto tiende a suavizar (aunque no eliminar) el efecto de comprar justo en un momento de precio desfavorable, ya que las aportaciones se reparten a lo largo de distintos niveles de precio del mercado.

Es importante matizar un debate relevante sobre el DCA: numerosos estudios académicos y análisis históricos han mostrado que, en términos puramente de rentabilidad esperada, invertir todo el capital disponible de golpe (lump sum) tiende a superar, en promedio y a largo plazo, a repartir esa misma cantidad de capital en aportaciones periódicas a lo largo del tiempo — esto es así porque, en promedio histórico, los mercados de renta variable han tendido a subir con el tiempo, por lo que invertir antes (todo de golpe) suele beneficiarse antes de esa tendencia alcista de largo plazo, comparado con ir invirtiendo poco a poco.

Sin embargo, el DCA tiene ventajas que van más allá de la pura rentabilidad esperada matemática:

- Es la forma natural en la que la mayoría de las personas invierten en la práctica, ya que reciben su capital disponible de forma periódica (un salario mensual), no como una gran suma de golpe.
- Reduce el riesgo psicológico y de arrepentimiento asociado a invertir todo el capital justo antes de una caída fuerte de mercado, lo cual puede ser emocionalmente muy difícil de gestionar y llevar a decisiones de pánico posteriores (Módulo 6).
- Fomenta un hábito de inversión sistemático y disciplinado, menos dependiente de intentar "acertar el momento perfecto" para invertir (market timing, que es extremadamente difícil de hacer de forma consistente, como se trata en el Módulo 6).

Para la mayoría de inversores particulares que ahorran e invierten una parte de sus ingresos periódicos (como es probablemente tu caso, con un horizonte de 20 años), el DCA no es tanto una "elección" frente al lump sum, sino la forma natural en la que se produce la inversión, simplemente porque el capital disponible para invertir va llegando de forma periódica a lo largo del tiempo, no de golpe.`,
          numericExample:
            "Un inversor aporta 200€ cada mes durante 4 meses a un fondo indexado. Mes 1: el precio de la participación es 50€, compra 4 participaciones (200/50). Mes 2: el precio baja a 40€, compra 5 participaciones (200/40). Mes 3: el precio sube a 45€, compra 4,44 participaciones (200/45). Mes 4: el precio sube a 55€, compra 3,64 participaciones (200/55). En total, ha invertido 800€ y ha comprado 17,08 participaciones, a un precio medio de compra de aproximadamente 46,8€ por participación (800/17,08) — un precio medio ponderado por las cantidades compradas en cada momento, que en este ejemplo resulta más favorable que el precio medio simple de los 4 precios observados (47,5€), precisamente porque compró más participaciones cuando el precio estaba más bajo.",
          realExample:
            "La mayoría de planes de pensiones y de ahorro periódico (como las aportaciones automáticas mensuales a un fondo indexado que muchas personas configuran desde su cuenta bancaria) son, en la práctica, ejemplos de DCA: el inversor no decide \"todo de golpe\" en qué momento invertir, sino que automatiza una aportación periódica fija, independientemente de si el mercado está en un momento de precios altos o bajos en cada aportación concreta.",
          analogy:
            "El DCA es como llenar un depósito de agua con un caudal constante durante todo el año, en vez de intentar llenarlo de golpe en un único día concreto que podría (o no) tener el nivel de agua más favorable. Aunque en teoría, si supieras con certeza el mejor momento exacto para llenarlo todo de golpe, esa opción sería más eficiente, en la práctica nadie tiene esa certeza de antemano — y repartir el llenado a lo largo del tiempo evita el riesgo de acertar justo en el peor momento posible.",
          mistakes: [
            "Pensar que el DCA es matemáticamente \"mejor\" que invertir de golpe en todos los casos: la evidencia histórica sugiere lo contrario en términos de rentabilidad esperada pura, aunque el DCA tenga otras ventajas prácticas y psicológicas.",
            "Retrasar indefinidamente la inversión \"esperando el mejor momento\" para hacer una gran aportación de golpe, cuando en la práctica esto suele derivar en no invertir nunca (por la dificultad de predecir el momento óptimo, Módulo 6).",
            "Confundir el DCA con una estrategia activa de \"comprar más cuando baja el mercado\": el DCA, en su forma más pura, es una aportación fija y automática independiente de las condiciones de mercado, no una decisión táctica basada en el nivel de precios.",
          ],
          summary:
            "El DCA consiste en invertir una cantidad fija de forma periódica, independientemente del precio de mercado en cada momento. Aunque estudios históricos sugieren que invertir todo de golpe tiende a superar en rentabilidad esperada al DCA (por la tendencia alcista histórica de los mercados a largo plazo), el DCA es la forma natural en la que invierte la mayoría de personas que ahorran de sus ingresos periódicos, y ofrece ventajas psicológicas relevantes al reducir el riesgo de arrepentimiento por invertir todo justo antes de una caída fuerte.",
          exercises: {
            quiz: [
              {
                q: "El Dollar Cost Averaging (DCA) consiste en:",
                options: [
                  "Invertir todo el capital disponible de una sola vez, en un único momento",
                  "Invertir una cantidad fija de dinero de forma periódica y regular, independientemente del precio de mercado",
                  "Vender toda la cartera cuando el precio sube",
                  "Una estrategia exclusiva para inversores institucionales",
                ],
                correct: 1,
                explain:
                  "El DCA consiste en repartir las aportaciones de capital a lo largo del tiempo en cantidades fijas y periódicas, en vez de invertir todo el capital disponible de golpe en un único momento.",
              },
              {
                q: "Según la evidencia histórica, en términos de rentabilidad esperada pura, invertir todo el capital de golpe (lump sum) frente al DCA:",
                options: [
                  "El DCA siempre supera matemáticamente al lump sum en todos los periodos históricos",
                  "El lump sum tiende a superar, en promedio y a largo plazo, al DCA, por la tendencia alcista histórica de los mercados",
                  "Ambas estrategias son matemáticamente idénticas en todos los casos",
                  "Solo se puede aplicar el DCA a la renta fija",
                ],
                correct: 1,
                explain:
                  "Numerosos estudios históricos muestran que, en promedio, invertir todo el capital disponible de golpe tiende a superar al DCA en términos de rentabilidad esperada pura, precisamente porque los mercados han tendido a subir con el tiempo, beneficiando a quien invierte antes.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor recibe una herencia de 50.000€ y no sabe si invertirla toda de golpe o repartirla en aportaciones mensuales durante un año. Con lo aprendido en esta lección, ¿qué factores le ayudarías a considerar en su decisión, más allá de la pura rentabilidad esperada matemática?",
                solution:
                  "Aunque la evidencia histórica sugiere que invertir todo de golpe suele superar, en promedio, al DCA en términos de rentabilidad esperada pura, la decisión no debería basarse únicamente en ese factor matemático. Es relevante considerar también su tolerancia emocional al riesgo de arrepentimiento: si invertir los 50.000€ de golpe y ver una caída fuerte de mercado justo después le generaría tanto malestar que le llevara a tomar decisiones de pánico (vender en el peor momento), podría ser preferible, para su bienestar y consistencia con la estrategia a largo plazo, repartir la inversión en varias aportaciones a lo largo de varios meses, aceptando renunciar a algo de rentabilidad esperada a cambio de una experiencia emocional más gestionable. No hay una respuesta \"matemáticamente correcta\" única aquí: la mejor estrategia es la que el inversor concreto sea capaz de mantener sin desviarse de su plan por decisiones impulsivas — un tema que se desarrolla con más profundidad en el Módulo 6 sobre psicología del inversor.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor aporta 250€ cada mes durante 3 meses. Mes 1: precio de la participación 25€ (compra 10 participaciones). Mes 2: precio 20€ (compra 12,5 participaciones). Mes 3: precio 22€ (compra ≈11,36 participaciones). Calcula el total invertido, el total de participaciones compradas, y el precio medio de compra por participación (total invertido ÷ total participaciones).",
                solution:
                  "Total invertido: 250€ × 3 = 750€.\n\nTotal de participaciones: 10 + 12,5 + 11,36 ≈ 33,86 participaciones.\n\nPrecio medio de compra: 750€ / 33,86 ≈ 22,15€ por participación.\n\nEste precio medio (22,15€) es más favorable que el precio medio simple de los tres meses observados ((25+20+22)/3 = 22,33€), aunque la diferencia en este ejemplo concreto sea pequeña — el DCA tiende a beneficiarse ligeramente de comprar más participaciones cuando el precio está más bajo (mes 2), lo que reduce el precio medio ponderado de compra frente al precio medio simple.",
              },
            ],
            reflection:
              "Dado que probablemente vayas a invertir una parte de tus ingresos periódicos (salario) a lo largo de los próximos 20 años, ¿te das cuenta de que, en la práctica, ya vas a estar aplicando una estrategia de DCA de forma natural, sin necesidad de ninguna decisión especial adicional? ¿Cambia esto algo tu forma de pensar sobre la preocupación por \"acertar el momento perfecto\" para invertir cada aportación mensual?",
          },
        },
        {
          id: "m5l5",
          title: "Gestión práctica del riesgo",
          simple:
            "Gestionar el riesgo no es eliminarlo (es imposible), sino tomar decisiones conscientes sobre cuánto riesgo estás dispuesto a asumir, cómo lo distribuyes, y qué mecanismos tienes preparados de antemano para no tomar decisiones impulsivas cuando llegue la volatilidad — porque llegará.",
          technical: `La gestión práctica del riesgo, para un inversor individual de largo plazo, combina varios de los conceptos vistos en este módulo y en módulos anteriores en un enfoque coherente y aplicable a la vida real:

1. Definir el asset allocation apropiado (Lección 5.2) según tu horizonte temporal y tolerancia al riesgo, antes de empezar a invertir — no después de ya estar invertido y sufrir una caída fuerte.

2. Mantener un fondo de emergencia separado de la cartera de inversión, en un instrumento líquido y de bajo riesgo (como una cuenta de ahorro), equivalente habitualmente a entre 3 y 6 meses de gastos (aunque esta cifra puede variar según la estabilidad de ingresos y las circunstancias personales de cada persona). Este fondo evita que el inversor se vea obligado a vender inversiones de renta variable en un mal momento de mercado por una necesidad de liquidez imprevista (una reparación urgente, una pérdida temporal de ingresos, etc.).

3. Establecer un plan de rebalanceo (Lección 5.3) predefinido de antemano, para mantener disciplinadamente el nivel de riesgo elegido con el tiempo, sin depender de decisiones puntuales basadas en el estado de ánimo del momento.

4. Automatizar las aportaciones periódicas (DCA, Lección 5.4) en la medida de lo posible, reduciendo la necesidad de tomar decisiones activas repetidas sobre "cuándo" invertir, que son especialmente vulnerables a sesgos psicológicos (Módulo 6).

5. Definir de antemano, por escrito si es posible, cómo se va a reaccionar ante una caída fuerte de mercado (por ejemplo: "no voy a vender nada durante una caída, voy a seguir con mis aportaciones periódicas según lo planeado, y solo revisaré mi asset allocation en mi fecha de rebalanceo predefinida, no de forma reactiva"). Tomar esta decisión con calma, antes de que ocurra la caída, es mucho más fiable que intentar decidir racionalmente en pleno episodio de pánico de mercado, cuando las emociones dificultan mucho el pensamiento racional (se profundiza en el Módulo 6).

6. Diversificar adecuadamente (Módulos 1, 2 y este mismo módulo) tanto dentro de cada clase de activo (muchas empresas, muchos países) como entre clases de activos (renta variable, renta fija, y potencialmente otras), evitando concentraciones excesivas en una única empresa, sector, país, o clase de activo.

Ninguna de estas medidas elimina el riesgo por completo (eso es imposible e indeseable, ya que el riesgo es precisamente la fuente de la rentabilidad esperada, como se vio en el Módulo 1), pero en conjunto ayudan a que el riesgo asumido sea uno consciente, elegido y gestionado, en vez de un riesgo descontrolado o descubierto de forma sorpresiva en el peor momento posible.`,
          numericExample:
            "Un inversor con gastos mensuales de 1.500€ decide mantener un fondo de emergencia de 6 meses (9.000€) en una cuenta de ahorro, separado de su cartera de inversión. Cuando surge un gasto imprevisto de 3.000€ (una reparación urgente del coche), puede cubrirlo con el fondo de emergencia sin necesidad de vender ninguna participación de su cartera de inversión, evitando así materializar una posible pérdida si el mercado estuviera, en ese momento concreto, en un periodo de caída — y evitando también, potencialmente, un evento fiscal innecesario por esa venta (Módulo 7).",
          realExample:
            "Durante la caída de mercado de marzo de 2020 (inicio de la pandemia de COVID), muchos inversores con un fondo de emergencia adecuado y un plan de inversión predefinido pudieron mantener sus aportaciones periódicas e incluso beneficiarse, con el tiempo, de comprar participaciones a precios más bajos durante esos meses, mientras que inversores sin esa preparación previa (sin fondo de emergencia, sin plan definido de antemano) tuvieron, en algunos casos, que vender inversiones en el peor momento posible por necesidades de liquidez imprevistas, o tomaron decisiones de pánico basadas en el miedo del momento.",
          analogy:
            "Gestionar el riesgo de inversión es como prepararte para una tormenta antes de salir de viaje: no puedes controlar si va a llover o no (el mercado), pero sí puedes decidir de antemano llevar un paraguas, un impermeable, y una ruta alternativa planificada (el fondo de emergencia, el asset allocation adecuado, el plan de reacción predefinido), de forma que, si la tormenta llega, no te encuentre completamente desprevenido teniendo que improvisar decisiones bajo presión y con el pánico del momento.",
          mistakes: [
            "Invertir todo el capital disponible sin mantener un fondo de emergencia separado, exponiéndose a tener que vender inversiones en un mal momento por necesidades imprevistas de liquidez.",
            "No definir de antemano cómo se va a reaccionar ante una caída de mercado, dejando esa decisión para el momento de pánico, cuando el pensamiento racional está más comprometido emocionalmente.",
            "Pensar que \"gestionar el riesgo\" significa \"eliminar el riesgo\": en realidad, significa asumir el nivel de riesgo apropiado para cada situación personal de forma consciente y con mecanismos preparados, no evitar todo riesgo (lo cual, como se vio en el Módulo 0, tiene sus propios riesgos silenciosos, como la inflación).",
          ],
          summary:
            "La gestión práctica del riesgo combina un asset allocation adecuado, un fondo de emergencia separado, un plan de rebalanceo predefinido, aportaciones automatizadas, y una decisión anticipada (tomada con calma, no en pleno pánico) sobre cómo reaccionar ante caídas de mercado. No elimina el riesgo, pero convierte un riesgo potencialmente descontrolado en uno consciente, elegido y preparado de antemano.",
          exercises: {
            quiz: [
              {
                q: "El fondo de emergencia, dentro de una estrategia de gestión del riesgo, cumple principalmente la función de:",
                options: [
                  "Maximizar la rentabilidad de la cartera de inversión",
                  "Evitar tener que vender inversiones en un mal momento de mercado por necesidades imprevistas de liquidez",
                  "Sustituir por completo a la cartera de renta variable",
                  "Pagar impuestos de forma anticipada",
                ],
                correct: 1,
                explain:
                  "El fondo de emergencia, mantenido separado y en un instrumento líquido, evita que el inversor se vea forzado a vender inversiones (potencialmente en un mal momento de mercado) ante una necesidad imprevista de dinero.",
              },
              {
                q: "Definir de antemano cómo se va a reaccionar ante una caída de mercado es útil principalmente porque:",
                options: [
                  "Garantiza que el mercado no vaya a caer nunca",
                  "Permite tomar esa decisión con calma, antes de que el pánico del momento dificulte el pensamiento racional",
                  "Elimina por completo cualquier posibilidad de pérdida",
                  "Es un requisito legal obligatorio para invertir",
                ],
                correct: 1,
                explain:
                  "Tomar decisiones sobre cómo reaccionar ante una caída de mercado con antelación, en un momento de calma, suele ser mucho más fiable que intentar decidir racionalmente en pleno episodio de pánico, cuando las emociones dificultan el pensamiento racional.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"No necesito fondo de emergencia, prefiero invertir absolutamente todo mi dinero disponible para maximizar mi rentabilidad a 20 años.\" ¿Qué riesgos concretos le señalarías sobre esta decisión, conectando con lo aprendido en esta lección?",
                solution:
                  "Aunque desde una perspectiva de pura rentabilidad esperada matemática pudiera parecer que invertir el 100% del capital disponible maximiza el crecimiento a largo plazo, esta decisión ignora un riesgo práctico muy real: sin un fondo de emergencia separado, cualquier necesidad imprevista de liquidez (una avería importante, una pérdida temporal de ingresos, un gasto médico inesperado) le obligaría a vender parte de su cartera de inversión para conseguir ese dinero. Si esa necesidad surge justo durante una caída de mercado (algo que no se puede predecir de antemano cuándo ocurrirá), se vería forzado a materializar una pérdida en el peor momento posible, en vez de poder esperar a que el mercado se recupere, como sí podría hacer si tuviera ese colchón de liquidez separado. Además, esa venta forzada en mal momento también podría generar una obligación fiscal (Módulo 7) en un momento no elegido libremente. El fondo de emergencia no es una \"pérdida de rentabilidad potencial\", sino un seguro práctico que protege precisamente la capacidad de mantener la estrategia de inversión a largo plazo sin verse forzado a romperla en el peor momento posible.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tiene gastos mensuales de 1.800€ y quiere mantener un fondo de emergencia equivalente a 5 meses de gastos. Calcula cuánto dinero debería mantener en ese fondo de emergencia, separado de su cartera de inversión.",
                solution:
                  "Fondo de emergencia: 1.800€ × 5 = 9.000€.\n\nEste inversor debería mantener 9.000€ en un instrumento líquido y de bajo riesgo (como una cuenta de ahorro), separado completamente de su cartera de inversión en renta variable y renta fija, antes o en paralelo a empezar (o continuar) con sus aportaciones periódicas de inversión a largo plazo, siguiendo la lógica de gestión de riesgo práctica vista en esta lección.",
              },
            ],
            reflection:
              "¿Tienes actualmente un fondo de emergencia separado de tus inversiones? ¿Y un plan predefinido, aunque sea sencillo, de cómo reaccionarías ante una caída fuerte de mercado? Si no los tienes, ¿qué pasos concretos podrías dar en las próximas semanas para establecerlos, antes de que llegue el próximo episodio de volatilidad del mercado?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 5",
        passScore: 70,
        questions: [
          {
            q: "Según la teoría moderna de carteras, el riesgo y la rentabilidad de una cartera dependen, entre otros factores, de:",
            options: [
              "Únicamente de la suma directa de rentabilidades individuales de cada activo",
              "De cómo se relacionan (correlación) entre sí los distintos activos que la componen",
              "Exclusivamente del activo con mayor rentabilidad histórica",
              "Solo del número de fondos distintos, sin importar su naturaleza",
            ],
            correct: 1,
            topic: "Qué es una cartera de inversión",
          },
          {
            q: "El asset allocation (asignación de activos) se refiere a:",
            options: [
              "La elección del bróker donde se invierte",
              "La decisión de cómo repartir la cartera entre grandes clases de activos (renta variable, renta fija, etc.)",
              "El nombre legal de un fondo de inversión",
              "Un tipo de impuesto sobre las plusvalías",
            ],
            correct: 1,
            topic: "Asset allocation",
          },
          {
            q: "Los dos factores principales que deben guiar la decisión personal de asset allocation son:",
            options: [
              "El horizonte temporal y la tolerancia personal al riesgo",
              "El color de la interfaz del bróker y la hora del día",
              "Solo el saldo bancario actual",
              "Exclusivamente la recomendación de un familiar",
            ],
            correct: 0,
            topic: "Asset allocation",
          },
          {
            q: "El rebalanceo de cartera consiste en:",
            options: [
              "Vender toda la cartera y empezar de cero cada año sin ningún criterio",
              "Ajustar periódicamente la cartera para devolverla a los porcentajes objetivo originales de asset allocation",
              "Invertir siempre más en el activo que más ha subido, sin ningún límite",
              "Una operación exclusiva de los fondos de renta fija",
            ],
            correct: 1,
            topic: "Rebalanceo de cartera",
          },
          {
            q: "El Dollar Cost Averaging (DCA) consiste en:",
            options: [
              "Invertir todo el capital disponible de una sola vez",
              "Invertir una cantidad fija de dinero de forma periódica, independientemente del precio de mercado",
              "Vender la cartera completa cuando el precio baja",
              "Una estrategia solo aplicable a bonos gubernamentales",
            ],
            correct: 1,
            topic: "Dollar Cost Averaging (DCA)",
          },
          {
            q: "Según la evidencia histórica, en términos de rentabilidad esperada pura, invertir todo el capital de golpe frente al DCA:",
            options: [
              "El DCA siempre gana en todos los periodos históricos analizados",
              "Invertir de golpe (lump sum) tiende a superar, en promedio, al DCA, por la tendencia alcista histórica de los mercados",
              "Ambas estrategias son matemáticamente idénticas siempre",
              "Solo aplica a inversiones en materias primas",
            ],
            correct: 1,
            topic: "Dollar Cost Averaging (DCA)",
          },
          {
            q: "La función principal de un fondo de emergencia, dentro de la gestión práctica del riesgo, es:",
            options: [
              "Maximizar la rentabilidad total de la cartera",
              "Evitar tener que vender inversiones en un mal momento de mercado por necesidades imprevistas de liquidez",
              "Sustituir completamente a la renta fija de la cartera",
              "Reducir los impuestos sobre la renta",
            ],
            correct: 1,
            topic: "Gestión práctica del riesgo",
          },
          {
            q: "Una cartera de 12.000€ tiene un objetivo de 70% renta variable / 30% renta fija. Tras un periodo de mercado, la renta variable vale 9.900€ y la renta fija 3.300€ (total 13.200€). ¿Cuál es el porcentaje real actual de renta variable en la cartera?",
            options: ["70%", "75%", "82,5%", "68%"],
            correct: 1,
            topic: "Rebalanceo de cartera (cálculo)",
          },
        ],
      },
    },
    {
      id: "m6",
      number: 6,
      title: "Psicología del inversor",
      objective:
        "Entender los sesgos cognitivos y emocionales más comunes que llevan a los inversores a tomar malas decisiones, y aprender a reconocer patrones de euforia y miedo colectivo (burbujas y crashes) para no dejarte arrastrar por ellos.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulos 0 a 5 completos (riesgo, carteras, gestión del riesgo).",
      learn:
        "A identificar tus propios sesgos cognitivos como inversor, a entender por qué el miedo y la euforia son las dos fuerzas que más destruyen rentabilidad a largo plazo, y a reconocer la anatomía de una burbuja y de un crash bursátil.",
      lessons: [
        {
          id: "m6l1",
          title: "Por qué la psicología importa más de lo que crees",
          simple:
            "La mayor amenaza para tu rentabilidad a largo plazo no suele ser el mercado en sí, sino tus propias decisiones impulsivas: comprar en la euforia, vender en el pánico. Entender tu propia psicología es, para muchos inversores, más importante que entender los mercados.",
          technical: `Existe una diferencia bien documentada entre la rentabilidad de un fondo o índice (la rentabilidad "del mercado") y la rentabilidad real que obtienen, en promedio, los inversores particulares que invierten en ese mismo fondo o índice (a veces llamada "behavior gap" o brecha de comportamiento). Estudios como los informes anuales "Quantitative Analysis of Investor Behavior" de la firma DALBAR (centrados en el mercado estadounidense) han mostrado, de forma consistente durante décadas, que el inversor medio obtiene una rentabilidad sensiblemente inferior a la del propio índice o fondo en el que invierte.

La causa principal de esta brecha no es, habitualmente, elegir malos productos de inversión, sino el comportamiento del propio inversor en el tiempo: comprar más cuando el mercado ya ha subido mucho (por euforia y miedo a perderse la subida, FOMO por sus siglas en inglés), y vender en pánico cuando el mercado cae con fuerza (cristalizando pérdidas que, de haberse mantenido la inversión, probablemente se habrían recuperado con el tiempo, como se vio en el Módulo 1 sobre volatilidad frente a pérdida permanente).

Esto conecta directamente con conceptos ya vistos en el curso: el interés compuesto (Módulo 0) requiere tiempo ininterrumpido para desplegar todo su efecto; interrumpirlo con ventas de pánico y intentos fallidos de "volver a entrar en el momento perfecto" rompe ese proceso de crecimiento compuesto de forma muy costosa. La gestión práctica del riesgo (Módulo 5) —fondo de emergencia, plan predefinido, aportaciones automatizadas— existe, en gran medida, precisamente para proteger al inversor de sus propios impulsos psicológicos en los momentos de mayor tensión emocional.

Entender la psicología del inversor no es un añadido "blando" o secundario al conocimiento técnico de los mercados: para muchos inversores particulares, es el factor que más determina si consiguen (o no) capturar, en la práctica, la rentabilidad que el mercado o el fondo elegido realmente ofreció a lo largo del tiempo.`,
          numericExample:
            "Si el mercado de renta variable global rinde de media un 8% anual durante un periodo de 20 años, pero un inversor concreto, por vender en pánico durante 2-3 caídas fuertes y volver a entrar tarde (después de que el mercado ya se hubiera recuperado en parte), obtiene en la práctica solo un 5% anual de media durante ese mismo periodo, la diferencia acumulada sobre una inversión de 20.000€ a 20 años sería sustancial: al 8% anual, 20.000€ crecerían hasta unos 93.200€; al 5% anual, hasta unos 53.000€ — una diferencia de más de 40.000€, no por haber elegido un mal fondo, sino por el propio comportamiento del inversor en el tiempo.",
          realExample:
            "Los informes de DALBAR han mostrado, en distintos periodos analizados durante más de dos décadas, que el inversor medio en fondos de renta variable estadounidense ha obtenido, de forma consistente, una rentabilidad varios puntos porcentuales anuales inferior a la del propio índice S&P 500 durante el mismo periodo, atribuyendo esta brecha principalmente al comportamiento de compra y venta mal sincronizado de los inversores particulares, más que a la elección de productos concretos.",
          analogy:
            "Es como subirse a un tren de largo recorrido (el mercado, con su rentabilidad de largo plazo) y bajarse asustado en cada parada con turbulencias, esperar en el andén hasta que parezca que ha pasado el peligro, y volver a subirte más tarde, habiéndote perdido parte del trayecto mientras estabas fuera. Quien simplemente se queda sentado en el tren durante todo el recorrido, sin bajarse en cada sacudida, suele llegar más lejos que quien se baja y sube repetidamente intentando \"evitar\" cada tramo incómodo del viaje.",
          mistakes: [
            "Pensar que la clave del éxito en inversión es únicamente \"elegir los productos correctos\", subestimando el papel del propio comportamiento a lo largo del tiempo.",
            "Creer que uno mismo está \"libre\" de estos sesgos psicológicos por conocerlos intelectualmente: el conocimiento teórico de un sesgo no garantiza inmunidad frente a él en el momento real de tensión emocional.",
            "No preparar de antemano (Módulo 5) mecanismos que protejan de las propias decisiones impulsivas futuras, confiando únicamente en la fuerza de voluntad del momento.",
          ],
          summary:
            "La brecha entre la rentabilidad del mercado y la rentabilidad real obtenida por el inversor medio se debe, principalmente, al comportamiento psicológico: comprar en euforia, vender en pánico. Entender y anticipar los propios sesgos psicológicos es, para muchos inversores particulares, un factor más determinante para el resultado final que la elección técnica de productos concretos.",
          exercises: {
            quiz: [
              {
                q: "La diferencia entre la rentabilidad de un índice o fondo y la rentabilidad real obtenida por el inversor medio se debe principalmente a:",
                options: [
                  "Errores exclusivamente de las gestoras de fondos",
                  "El comportamiento de compra y venta del propio inversor a lo largo del tiempo (comprar en euforia, vender en pánico)",
                  "Cambios en la legislación fiscal",
                  "El tamaño de la empresa gestora",
                ],
                correct: 1,
                explain:
                  "Estudios como los de DALBAR atribuyen esta brecha principalmente al comportamiento del propio inversor: entrar y salir del mercado en los momentos equivocados, más que a la elección de productos concretos.",
              },
              {
                q: "Entender la psicología del inversor es relevante porque:",
                options: [
                  "Es un tema secundario sin impacto real en los resultados",
                  "Para muchos inversores, el propio comportamiento determina más el resultado final que la elección técnica de productos",
                  "Solo afecta a inversores institucionales, no a particulares",
                  "Elimina por completo la volatilidad del mercado",
                ],
                correct: 1,
                explain:
                  "La evidencia sugiere que, para muchos inversores particulares, gestionar bien su propio comportamiento (evitar comprar en euforia y vender en pánico) tiene un impacto mayor en el resultado final que la selección técnica de productos de inversión.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Yo ya sé todo esto de la psicología, los sesgos y tal, así que a mí no me va a pasar, sabré mantener la calma cuando llegue una caída fuerte.\" ¿Qué le dirías sobre la diferencia entre conocer un sesgo intelectualmente y estar protegido frente a él en la práctica?",
                solution:
                  "Conocer intelectualmente un sesgo psicológico (como el miedo a las pérdidas o el pánico durante una caída de mercado) no equivale automáticamente a estar protegido frente a él quando llega el momento real de tensión emocional. La investigación en psicología conductual muestra que, incluso profesionales financieros con amplio conocimiento técnico de estos sesgos, pueden verse afectados por ellos en situaciones de estrés real, precisamente porque las decisiones bajo fuerte carga emocional no siempre siguen el mismo proceso racional que el pensamiento calmado y teórico. Por eso, en el Módulo 5, se enfatizó la importancia de preparar mecanismos concretos de antemano (plan de reacción predefinido, automatización de aportaciones, fondo de emergencia) en vez de confiar únicamente en la fuerza de voluntad o el conocimiento teórico del momento de crisis — estos mecanismos actúan como una protección estructural que no depende de mantener la calma perfecta en el momento de máxima tensión emocional.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un fondo indexado rinde de media un 7,5% anual durante 20 años. Un inversor concreto, por decisiones de compra y venta mal sincronizadas, obtiene en la práctica solo un 4,8% anual de media durante ese mismo periodo. Sobre una inversión inicial de 15.000€ (sin aportaciones adicionales, para simplificar el cálculo), calcula el capital final en ambos escenarios usando VF = VI×(1+r)^20, y la diferencia entre ambos.",
                solution:
                  "Rentabilidad del fondo (7,5%): 15.000 × (1,075)^20 ≈ 15.000 × 4,248 ≈ 63.720€.\n\nRentabilidad real del inversor (4,8%): 15.000 × (1,048)^20 ≈ 15.000 × 2,594 ≈ 38.910€.\n\nDiferencia: 63.720€ − 38.910€ ≈ 24.810€.\n\nEste cálculo ilustra, de forma numérica, cómo la brecha de comportamiento (comprar y vender en los momentos equivocados) puede costar, en este ejemplo, más de 24.000€ sobre una inversión inicial de 15.000€ a 20 años — una cantidad mayor que el propio capital invertido originalmente, sin que el inversor haya elegido necesariamente un mal producto de inversión.",
              },
            ],
            reflection:
              "¿Recuerdas alguna decisión financiera (tuya o de alguien cercano) que, en retrospectiva, estuviera motivada más por una emoción del momento (miedo, euforia, FOMO) que por un análisis racional? ¿Qué habría ayudado, en ese momento, a tomar una decisión distinta?",
          },
        },
        {
          id: "m6l2",
          title: "Sesgos cognitivos principales",
          simple:
            "Los sesgos cognitivos son atajos mentales automáticos que el cerebro usa para tomar decisiones rápidas, muy útiles en la vida cotidiana en general, pero que a menudo llevan a errores sistemáticos y predecibles en el contexto específico de la inversión.",
          technical: `Algunos de los sesgos cognitivos más relevantes y documentados en el contexto de la inversión incluyen:

- Aversión a la pérdida (loss aversion): la tendencia, ampliamente documentada en la investigación de Daniel Kahneman y Amos Tversky (pioneros de la economía conductual), a sentir el dolor de una pérdida con mayor intensidad emocional que el placer de una ganancia equivalente. Esto puede llevar a vender ganadores demasiado pronto (para "asegurar" la ganancia) y mantener perdedores demasiado tiempo (esperando "recuperar" antes de vender, evitando materializar el dolor de la pérdida).

- Sesgo de confirmación (confirmation bias): la tendencia a buscar, interpretar y recordar preferentemente la información que confirma las creencias o decisiones ya tomadas previamente, ignorando o restando importancia a la información que las contradice. Un inversor que ya ha decidido que una acción concreta es una buena inversión tenderá a fijarse más en las noticias positivas sobre esa empresa, y a descartar más fácilmente las negativas.

- Exceso de confianza (overconfidence bias): la tendencia a sobrestimar la propia capacidad de predecir el comportamiento futuro del mercado o de empresas concretas, más allá de lo que la evidencia objetiva justificaría.

- Efecto de anclaje (anchoring bias): la tendencia a dar un peso desproporcionado a una cifra o referencia inicial (por ejemplo, el precio al que se compró una acción) a la hora de tomar decisiones posteriores, en vez de evaluar la situación actual de forma independiente de ese ancla del pasado.

- Sesgo de disponibilidad (availability bias): la tendencia a sobrevalorar la probabilidad de eventos que vienen fácilmente a la mente (por ejemplo, por haber sido muy mediáticos recientemente), en vez de basarse en su probabilidad estadística real.

- FOMO (Fear Of Missing Out, miedo a perderse algo): el impulso emocional a comprar un activo simplemente porque ha subido mucho recientemente y otros parecen estar beneficiándose, por miedo a "quedarse fuera" de una oportunidad, más que por un análisis racional de su valor.

Ninguno de estos sesgos es una señal de "falta de inteligencia": son patrones cognitivos universales, presentes en prácticamente todas las personas en algún grado, que la investigación en economía conductual ha documentado de forma consistente. Reconocerlos por su nombre y su mecanismo es un primer paso útil para, al menos, cuestionarlos conscientemente cuando aparecen en las propias decisiones de inversión.`,
          numericExample:
            "Un inversor compró una acción a 50€ y ahora cotiza a 30€ (una caída del 40%). Por aversión a la pérdida y efecto de anclaje (ancla en el precio de compra de 50€), decide \"esperar a que vuelva a 50€ para vender y así no perder dinero\", en vez de evaluar de forma independiente si, al precio actual de 30€, esa empresa sigue siendo una buena inversión de cara al futuro. Este razonamiento ignora que el precio de compra pasado (50€) es irrelevante para la decisión racional futura: lo relevante es si, a 30€ de precio actual, esa inversión sigue teniendo sentido comparada con las alternativas disponibles — el dinero ya invertido en el pasado (a veces llamado \"coste hundido\") no debería determinar la decisión racional sobre el futuro.",
          realExample:
            "Durante periodos de fuerte subida de un activo concreto (por ejemplo, ciertas acciones tecnológicas o criptomonedas en momentos de gran cobertura mediática), es habitual observar un patrón de FOMO colectivo: inversores que compran principalmente porque \"todo el mundo habla de ello\" y \"está subiendo mucho\", sin haber analizado en profundidad los fundamentos de esa inversión, y a menudo justo en las fases finales y más elevadas de precio antes de una corrección posterior.",
          analogy:
            "Los sesgos cognitivos son como los efectos ópticos en ilusiones visuales: aunque sepas racionalmente que dos líneas tienen la misma longitud (el sesgo está \"explicado\"), tu percepción visual inmediata sigue viéndolas de forma distinta. De la misma manera, saber intelectualmente que existe la aversión a la pérdida no hace que, en el momento real de ver una inversión caer un 30%, el impulso emocional de \"no vender para no materializar la pérdida\" desaparezca automáticamente — hace falta un esfuerzo consciente y, mejor aún, mecanismos preparados de antemano (Módulo 5) para contrarrestarlo.",
          mistakes: [
            "Pensar que los sesgos cognitivos son un problema de \"otras personas menos informadas\", sin reconocer que son patrones universales que afectan, en algún grado, a prácticamente todos los inversores.",
            "Usar el precio de compra pasado de un activo (efecto de anclaje) como criterio principal para decidir si venderlo o mantenerlo ahora, en vez de evaluar la situación actual de forma independiente.",
            "Comprar un activo principalmente por FOMO (porque ha subido mucho y todo el mundo habla de él) sin haber hecho un análisis propio de por qué esa inversión encajaría en tu estrategia y objetivos.",
          ],
          summary:
            "Los sesgos cognitivos son patrones de pensamiento automáticos y universales que llevan a errores sistemáticos en la toma de decisiones de inversión: aversión a la pérdida, sesgo de confirmación, exceso de confianza, anclaje, sesgo de disponibilidad y FOMO son algunos de los más relevantes. Reconocerlos conscientemente, aunque no elimina su influencia por completo, es un primer paso para cuestionarlos activamente en las propias decisiones.",
          exercises: {
            quiz: [
              {
                q: "La aversión a la pérdida se refiere a:",
                options: [
                  "La tendencia a sentir el dolor de una pérdida con mayor intensidad que el placer de una ganancia equivalente",
                  "El miedo exclusivo a invertir en bonos",
                  "La preferencia por invertir solo en efectivo",
                  "Un tipo de comisión bancaria",
                ],
                correct: 0,
                explain:
                  "La aversión a la pérdida, documentada por Kahneman y Tversky, describe cómo el dolor psicológico de perder una cantidad de dinero suele sentirse con mayor intensidad que el placer de ganar esa misma cantidad, lo que puede distorsionar las decisiones de inversión.",
              },
              {
                q: "El efecto de anclaje, aplicado a la inversión, describe:",
                options: [
                  "La tendencia a diversificar excesivamente la cartera",
                  "Dar un peso desproporcionado a una cifra de referencia pasada (como el precio de compra) al tomar decisiones actuales",
                  "Un tipo de fondo indexado especializado en materias primas",
                  "La obligación legal de mantener una inversión durante un periodo mínimo",
                ],
                correct: 1,
                explain:
                  "El anclaje lleva a los inversores a fijarse excesivamente en referencias pasadas, como el precio de compra original, en vez de evaluar la situación actual de la inversión de forma independiente de esa cifra histórica.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Compré esta acción a 80€, ahora vale 55€, no pienso venderla hasta que al menos recupere lo que pagué.\" Identifica qué sesgo o sesgos cognitivos podrían estar influyendo en esta decisión, y qué pregunta racional alternativa le sugerirías.",
                solution:
                  "Esta afirmación combina, probablemente, el efecto de anclaje (fijar el precio de compra de 80€ como referencia relevante para la decisión futura) y la aversión a la pérdida (evitar materializar la pérdida vendiendo por debajo del precio de compra, aunque eso no cambie la situación económica real de la inversión). Una pregunta racional alternativa sería: \"si hoy no tuviera ninguna acción de esta empresa y tuviera 55€ en efectivo, ¿decidiría comprar esta acción concreta a ese precio, considerando sus perspectivas actuales?\" Si la respuesta es no, mantener la acción únicamente por \"no vender con pérdidas\" no tiene una justificación racional basada en la situación actual de la inversión: el precio de compra pasado (80€) es un coste hundido que no debería determinar la decisión sobre qué hacer de cara al futuro, que debería basarse en las perspectivas actuales de la inversión, no en el precio histórico al que se compró.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Dos inversores compraron la misma acción: el Inversor X la compró a 40€ y ahora vale 60€ (ganancia no realizada del 50%). El Inversor Y la compró a 90€ y ahora vale 60€ (pérdida no realizada de aproximadamente 33%). Si ambos evaluaran racionalmente, de forma independiente del precio de compra, si esta acción sigue siendo una buena inversión a 60€ de cara al futuro, ¿debería su decisión de mantener o vender depender del precio al que la compraron originalmente? Explica numéricamente por qué el precio de compra no debería ser, en teoría, relevante para la decisión futura.",
                solution:
                  "En teoría, no debería depender del precio de compra original. Ambos inversores, en el momento actual, poseen exactamente el mismo activo (la misma acción, con las mismas perspectivas futuras) al mismo precio de mercado actual (60€), independientemente de si lo compraron a 40€ o a 90€. La decisión racional de mantener o vender debería basarse únicamente en si, a 60€, esa acción sigue pareciendo una buena inversión de cara al futuro comparada con otras alternativas disponibles — una pregunta idéntica para ambos inversores, ya que ambos parten exactamente de la misma situación actual (poseer la acción a 60€). El hecho de que uno tenga una ganancia no realizada del 50% y el otro una pérdida no realizada del 33% es información sobre el pasado (el coste hundido), mecánicamente irrelevante para la decisión racional sobre el futuro, aunque psicológicamente (por aversión a la pérdida y efecto de anclaje) suela influir de forma muy distinta en ambos inversores en la práctica.",
              },
            ],
            reflection:
              "De los sesgos cognitivos vistos en esta lección (aversión a la pérdida, sesgo de confirmación, exceso de confianza, anclaje, sesgo de disponibilidad, FOMO), ¿cuál crees que te afecta más a ti personalmente, o te ha afectado en decisiones pasadas (no necesariamente de inversión)? ¿Qué podrías hacer para estar más alerta ante él en el futuro?",
          },
        },
        {
          id: "m6l3",
          title: "El miedo y el pánico de mercado",
          simple:
            "El miedo, durante una caída fuerte de mercado, es una emoción completamente natural — pero actuar impulsivamente guiado por ese miedo (vendiendo en el peor momento) suele ser, según la evidencia histórica, una de las decisiones más costosas que puede tomar un inversor de largo plazo.",
          technical: `Durante episodios de caída pronunciada del mercado (correcciones, crashes, o crisis financieras), es habitual que el miedo colectivo se intensifique de forma autoalimentada: las caídas de precio generan noticias alarmantes, que generan más ventas por parte de inversores asustados, que generan caídas de precio adicionales, en un ciclo que puede acelerar y amplificar el movimiento bajista más allá de lo que los fundamentos económicos, por sí solos, justificarían necesariamente.

Este fenómeno se conoce a veces como "capitulación": el momento en que incluso inversores que habían mantenido la calma durante gran parte de una caída, finalmente ceden al miedo y venden, a menudo cerca del punto más bajo del mercado, precisamente cuando el pesimismo colectivo alcanza su punto máximo.

La paradoja de las caídas de mercado es que, precisamente en los momentos de mayor miedo (cuando los precios son más bajos), es cuando, en retrospectiva histórica, suele haber existido más oportunidad de compra a largo plazo — pero también es, psicológicamente, cuando resulta más difícil actuar en esa dirección, porque las noticias, el entorno social y la incertidumbre generan una presión emocional muy fuerte hacia la venta o la inacción por parálisis.

Los mecanismos vistos en el Módulo 5 (fondo de emergencia, DCA automatizado, plan de reacción predefinido) están diseñados, en gran medida, precisamente para estos momentos: no para "aprovechar" de forma activa y sofisticada las caídas (algo muy difícil de ejecutar bien en la práctica, como se verá en la siguiente lección sobre burbujas y crashes), sino simplemente para evitar la decisión más costosa de todas: vender en pánico cerca del punto más bajo, cristalizando una pérdida que, de haberse mantenido la inversión según el plan original, probablemente se habría recuperado con el tiempo, como ha ocurrido de forma consistente en los mercados globales diversificados tras crisis pasadas (sin que esto sea, por supuesto, una garantía matemática sobre el futuro).`,
          numericExample:
            "Durante la crisis financiera de 2008-2009, el índice S&P 500 llegó a caer más de un 50% desde sus máximos previos. Un inversor que hubiera vendido cerca del punto más bajo (marzo de 2009) por pánico, y hubiera esperado varios meses o años antes de volver a invertir \"cuando se sintiera más seguro\", se habría perdido gran parte de la recuperación posterior, que en los años siguientes llevó al índice no solo a recuperar sus máximos previos, sino a superarlos ampliamente. Quien mantuvo la inversión durante toda la caída (sin vender) y siguió con sus aportaciones periódicas según su plan original, capturó esa recuperación completa sin necesidad de \"acertar\" el momento exacto de salida y reentrada.",
          realExample:
            "En marzo de 2020, con el inicio de la pandemia de COVID-19, los mercados globales cayeron de forma muy rápida y pronunciada (más de un 30% en pocas semanas en varios índices), generando un fuerte pánico colectivo. Quienes vendieron en ese momento de máximo miedo se perdieron una de las recuperaciones más rápidas de la historia reciente de los mercados, que en los meses siguientes no solo recuperó las pérdidas sino que alcanzó nuevos máximos históricos.",
          analogy:
            "El pánico de mercado es como una estampida en un espacio cerrado: aunque racionalmente cada persona podría reconocer que caminar de forma ordenada hacia la salida sería más seguro y eficiente para todos, el miedo colectivo y contagioso empuja a comportamientos de manada (correr, empujar) que suelen empeorar la situación general, incluso cuando, individualmente, muchas de esas personas sabrían, en un momento de calma, que ese no es el comportamiento más racional.",
          mistakes: [
            "Confundir \"sentir miedo durante una caída\" (una reacción emocional natural e inevitable) con \"actuar sobre ese miedo vendiendo impulsivamente\" (una decisión que se puede, con preparación previa, evitar o al menos moderar).",
            "Pensar que el pánico solo les ocurre a \"inversores inexpertos\": inversores con mucha experiencia y conocimiento también pueden verse afectados por el miedo colectivo en momentos de crisis intensa.",
            "No haber preparado de antemano (Módulo 5) un plan y unos mecanismos que hagan más difícil, en la práctica, ceder al impulso de vender durante el momento de mayor pánico.",
          ],
          summary:
            "El miedo durante una caída de mercado es una emoción natural, pero actuar impulsivamente vendiendo en el momento de mayor pánico (a menudo cerca del punto más bajo) suele ser, según la evidencia histórica de crisis pasadas, una de las decisiones más costosas para un inversor de largo plazo. Los mecanismos preparados de antemano (Módulo 5) existen precisamente para ayudar a resistir ese impulso en el momento de mayor tensión emocional.",
          exercises: {
            quiz: [
              {
                q: "La \"capitulación\" en el contexto de una caída de mercado se refiere a:",
                options: [
                  "El momento en que el mercado alcanza nuevos máximos históricos",
                  "El momento en que incluso inversores que habían mantenido la calma finalmente ceden al miedo y venden, a menudo cerca del punto más bajo",
                  "Una estrategia de inversión recomendada por analistas profesionales",
                  "El cierre oficial de la sesión bursátil",
                ],
                correct: 1,
                explain:
                  "La capitulación describe el punto de máximo pesimismo colectivo, donde incluso inversores previamente pacientes ceden al miedo y venden, a menudo coincidiendo, en retrospectiva histórica, con niveles de precio relativamente bajos.",
              },
              {
                q: "La paradoja de las caídas de mercado, según lo visto en esta lección, es que:",
                options: [
                  "Los precios más bajos nunca representan una oportunidad de compra",
                  "Precisamente cuando el miedo es mayor (y los precios más bajos) es psicológicamente más difícil actuar de forma distinta a la venta impulsiva",
                  "El miedo siempre lleva a decisiones acertadas de inversión",
                  "Los mercados nunca se recuperan tras una caída fuerte",
                ],
                correct: 1,
                explain:
                  "La paradoja es que los momentos de mayor pesimismo colectivo, que en retrospectiva histórica han coincidido a menudo con niveles de precio relativamente bajos, son precisamente los más difíciles psicológicamente para actuar de forma distinta a la venta impulsiva por miedo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Durante la última caída fuerte del mercado, vendí todo por miedo a perderlo todo, y ahora me arrepiento porque el mercado se recuperó después.\" ¿Qué le explicarías sobre cómo prepararse mejor de cara a la próxima caída de mercado (que, tarde o temprano, volverá a ocurrir), sin simplemente decirle \"no sientas miedo\"?",
                solution:
                  "Decirle simplemente \"no sientas miedo\" no es un consejo práctico ni realista: el miedo durante una caída fuerte es una reacción emocional natural, no un fallo de carácter que se pueda eliminar solo con fuerza de voluntad. Lo más útil, de cara al futuro, sería ayudarle a preparar de antemano (en un momento de calma, no durante la próxima crisis) los mecanismos vistos en el Módulo 5: un fondo de emergencia adecuado que reduzca la necesidad de vender inversiones por liquidez imprevista, aportaciones automatizadas que no requieran una decisión activa repetida en cada momento de tensión, y sobre todo, un plan de reacción escrito y decidido con antelación (\"pase lo que pase con el mercado a corto plazo, no voy a vender mis inversiones de largo plazo, salvo en mi fecha de rebalanceo predefinida\") que pueda consultar y recordarse a sí mismo precisamente en el momento de mayor tensión emocional, cuando el pensamiento racional puro es más difícil de mantener. La preparación estructural, hecha con antelación, suele ser más efectiva que confiar únicamente en la capacidad de \"no sentir miedo\" en el momento real de la crisis.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tenía 40.000€ invertidos antes de una caída de mercado del 35%. Su cartera pasa a valer 26.000€ (40.000 × 0,65). Presa del pánico, vende todo a ese valor y no vuelve a invertir hasta 18 meses después, cuando el mercado ya se ha recuperado completamente y algo más, y su capital de 26.000€ (que había mantenido en efectivo mientras tanto, sin generar apenas rentabilidad) solo le permite comprar lo equivalente a lo que antes hubiera costado con esos mismos 26.000€. Si, en cambio, hubiera mantenido la inversión original de 40.000€ y el mercado se hubiera recuperado un 54% desde el punto más bajo de 26.000€ (que es la subida necesaria para que 26.000€ vuelva a valer 40.000€, aproximadamente), calcula cuánto habría valido su cartera de haberla mantenido sin vender, comparado con los 26.000€ que tiene tras vender y quedarse fuera del mercado.",
                solution:
                  "Si hubiera mantenido la inversión: su cartera, tras la recuperación del 54% desde el punto más bajo (26.000€ × 1,54 ≈ 40.040€), habría vuelto aproximadamente a su valor original de 40.000€ (con cifras redondeadas, ya que 1,54 es la subida aproximada necesaria para recuperar una caída del 35%).\n\nAl vender en el punto más bajo y quedarse fuera del mercado, su capital se mantuvo en 26.000€ (sin la revalorización del 54% que experimentó el mercado mientras él estaba fuera), asumiendo que no obtuvo apenas rentabilidad manteniendo ese dinero en efectivo durante esos 18 meses.\n\nDiferencia: 40.000€ (si hubiera mantenido) frente a 26.000€ (habiendo vendido y quedado fuera) ≈ 14.000€ de diferencia, solo por la decisión de vender en el punto de máximo pánico y no volver a entrar hasta después de que ya se hubiera producido gran parte de la recuperación. Este ejercicio numérico ilustra por qué la evidencia (Lección 6.1, informes DALBAR) muestra de forma consistente que el comportamiento de compra-venta mal sincronizado es uno de los mayores destructores de rentabilidad para el inversor particular.",
              },
            ],
            reflection:
              "Si mañana el mercado cayera un 30% de golpe, ¿qué plan concreto tienes preparado ahora mismo (fondo de emergencia, decisión predefinida sobre aportaciones y ventas) que te ayudaría a no actuar impulsivamente por miedo? Si no tienes ese plan todavía, ¿qué es lo primero que harías esta semana para empezar a prepararlo?",
          },
        },
        {
          id: "m6l4",
          title: "La euforia y el FOMO",
          simple:
            "Igual que el miedo lleva a vender en el peor momento, la euforia colectiva lleva a comprar en el peor momento: cuando los precios ya están muy altos, impulsados más por el entusiasmo y el miedo a quedarse fuera que por un análisis racional del valor real.",
          technical: `La euforia de mercado es el fenómeno psicológico opuesto al pánico, pero con un efecto igualmente destructivo para la rentabilidad del inversor particular: durante periodos de fuerte subida sostenida de un activo o mercado, el entusiasmo colectivo (alimentado por historias de éxito muy visibles y mediáticas, cobertura extensa en prensa y redes sociales, y el testimonio de conocidos que "están ganando mucho dinero") puede generar un ciclo autoalimentado de compras impulsadas más por el miedo a perderse la subida (FOMO) que por un análisis racional del valor fundamental del activo.

Este fenómeno tiende a intensificarse en las fases finales de una tendencia alcista muy prolongada, cuando los precios ya se han alejado significativamente de cualquier valoración razonable basada en fundamentos económicos (beneficios reales, flujos de caja, crecimiento sostenible — conceptos que se desarrollarán en el Módulo 8), pero el impulso social y la narrativa de "esto solo puede seguir subiendo" atrae a cada vez más compradores, muchos de ellos con poco conocimiento previo del activo en cuestión, movidos principalmente por el miedo a quedarse fuera de las ganancias que otros parecen estar obteniendo.

Un patrón psicológico relacionado es el "sesgo de la nueva era" (this time is different): durante episodios de euforia extrema, es habitual que se generen narrativas que justifican por qué "esta vez es diferente" y las valoraciones extremadamente altas están justificadas por algún cambio estructural excepcional, ignorando patrones históricos de episodios de euforia previos que, en retrospectiva, resultaron ser burbujas especulativas (Lección 6.5).

Al igual que con el miedo, la euforia no es una emoción "irracional" en sí misma de forma individual (es comprensible sentir entusiasmo cuando una inversión está subiendo mucho), pero actuar impulsivamente sobre ella (aumentando significativamente la exposición a un activo concreto solo porque está subiendo mucho y "todo el mundo habla de ello", sin un análisis propio) puede llevar a comprar precisamente cerca de los máximos de precio, justo antes de una corrección o crash posterior.`,
          numericExample:
            "Un inversor que había planeado mantener un asset allocation de 70% renta variable / 30% renta fija, al ver que un sector concreto (por ejemplo, un sector tecnológico específico) ha subido un 150% en el último año y todos sus conocidos hablan de las ganancias que están obteniendo, decide, por FOMO, vender parte de su renta fija y de su renta variable diversificada para concentrar un 40% de su cartera total en ese sector concreto, abandonando su plan de asset allocation original. Si ese sector, tras esa fuerte subida, sufre posteriormente una corrección del 60% (un patrón histórico observado en varios episodios de euforia sectorial pasados), la pérdida sobre esa porción concentrada de la cartera sería mucho mayor que si hubiera mantenido su asset allocation diversificado original.",
          realExample:
            "La burbuja de las empresas \"puntocom\" a finales de los años 90 y principio de los 2000 mostró un patrón clásico de euforia: empresas tecnológicas con escasos o nulos beneficios reales alcanzaron valoraciones extraordinariamente altas, impulsadas por narrativas sobre \"la nueva economía de internet\" que justificaban ignorar las métricas de valoración tradicionales (Módulo 8). Muchos inversores particulares entraron en esas inversiones principalmente por FOMO, cerca del pico de la burbuja, sufriendo después caídas muy pronunciadas cuando la burbuja estalló.",
          analogy:
            "La euforia de mercado es como una fiesta que se sale de control: al principio es divertida y parece razonable unirse, pero según avanza la noche y el ambiente se vuelve cada vez más excesivo, quienes se unen más tarde (atraídos por lo bien que parecía estarlo pasando todo el mundo) suelen ser los que se quedan a limpiar el desorden cuando la fiesta termina de forma abrupta — mientras que quienes se marcharon a tiempo, o nunca se dejaron llevar completamente por el ambiente, evitan la peor parte de las consecuencias.",
          mistakes: [
            "Aumentar significativamente la exposición a un activo o sector concreto únicamente porque ha subido mucho recientemente y genera mucha atención mediática o social, sin un análisis propio de sus fundamentos.",
            "Abandonar un plan de asset allocation cuidadosamente decidido (Módulo 5) por el impulso emocional de \"no quedarse fuera\" de una subida que parece imparable.",
            "Creer narrativas de \"esta vez es diferente\" sin someterlas a un escrutinio crítico, especialmente cuando justifican ignorar métricas de valoración tradicionales de forma extrema.",
          ],
          summary:
            "La euforia colectiva, alimentada por el FOMO, lleva a muchos inversores a concentrar capital en activos que ya han subido mucho, precisamente cerca de sus niveles de precio más altos, justo antes de correcciones o crashes posteriores. Al igual que con el miedo, no se trata de eliminar la emoción (el entusiasmo es natural), sino de no actuar impulsivamente sobre ella, manteniendo el plan de inversión y asset allocation decidido racionalmente con antelación.",
          exercises: {
            quiz: [
              {
                q: "El FOMO (Fear Of Missing Out) en el contexto de la inversión describe:",
                options: [
                  "El miedo racional a una recesión económica bien fundamentada",
                  "El impulso emocional a comprar un activo principalmente por miedo a quedarse fuera de una subida, más que por análisis propio",
                  "Una estrategia recomendada de diversificación",
                  "Un tipo de comisión bancaria",
                ],
                correct: 1,
                explain:
                  "El FOMO lleva a comprar activos principalmente porque están subiendo mucho y otros parecen beneficiarse, por miedo a perderse esa oportunidad, en vez de por un análisis racional propio del valor de esa inversión.",
              },
              {
                q: "El \"sesgo de la nueva era\" (this time is different) se refiere a:",
                options: [
                  "Un indicador técnico de análisis bursátil",
                  "Narrativas que justifican valoraciones extremas durante episodios de euforia, ignorando patrones históricos de burbujas previas",
                  "Una regulación específica del BCE",
                  "Un tipo de bono a tipo de interés variable",
                ],
                correct: 1,
                explain:
                  "Este sesgo describe la tendencia, durante episodios de euforia extrema, a construir narrativas sobre por qué \"esta vez\" las valoraciones extraordinariamente altas están justificadas, ignorando el patrón histórico de episodios de euforia previos que resultaron ser burbujas.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Todos mis amigos están ganando mucho dinero con una inversión concreta que ha subido un 200% este año, voy a meter una parte grande de mis ahorros ahí también, no quiero quedarme fuera.\" ¿Qué preguntas o consideraciones le sugerirías antes de tomar esa decisión, conectando con lo aprendido sobre asset allocation (Módulo 5) y euforia?",
                solution:
                  "Antes de tomar esa decisión, sería razonable preguntarle: ¿ha analizado los fundamentos de esa inversión concreta (qué la respalda, más allá de que el precio haya subido mucho), o está decidiendo principalmente por la subida de precio reciente y el testimonio social de sus amigos? ¿Esta decisión encaja con su asset allocation y su tolerancia al riesgo decidida racionalmente con antelación (Módulo 5), o supone abandonar ese plan por un impulso puntual? ¿Ha considerado que una subida del 200% en poco tiempo podría reflejar, en algunos casos, una situación de euforia especulativa más que un cambio fundamental sostenible en el valor de esa inversión (algo que se explorará más en la siguiente lección sobre burbujas)? Es importante no descartar automáticamente toda inversión que suba mucho como \"burbuja\" (algunas subidas reflejan cambios fundamentales reales), pero sí sería prudente distinguir entre analizar esa inversión por sus propios méritos, y decidir invertir en ella principalmente por el miedo a quedarse fuera de lo que otros parecen estar ganando.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tenía una cartera diversificada de 25.000€ (70% renta variable global, 30% renta fija). Por FOMO, vende toda su renta fija y una parte de su renta variable diversificada para invertir 15.000€ en un activo concreto que ha subido mucho recientemente, dejando el resto (10.000€) en su cartera diversificada original. Si ese activo concentrado sufre después una caída del 65% (mientras su cartera diversificada original se mantiene estable), calcula el valor final de su cartera total tras ese movimiento.",
                solution:
                  "Valor del activo concentrado tras la caída del 65%: 15.000€ × 0,35 = 5.250€ (pérdida de 9.750€).\n\nValor de la cartera diversificada restante (sin cambios en este ejemplo simplificado): 10.000€.\n\nValor total de la cartera tras el movimiento: 5.250€ + 10.000€ = 15.250€.\n\nComparado con el valor original de 25.000€, esto supone una pérdida total de 9.750€ (39% de la cartera original), causada específicamente por la decisión de concentrar una parte muy significativa del capital en un único activo por FOMO, abandonando la diversificación y el asset allocation que tenía originalmente planeado. Este ejercicio ilustra numéricamente cómo el impulso de euforia y FOMO puede materializar, de forma muy costosa, exactamente el tipo de riesgo de concentración que la diversificación (Módulo 1) y el asset allocation (Módulo 5) están diseñados para evitar.",
              },
            ],
            reflection:
              "¿Has sentido alguna vez FOMO respecto a una inversión concreta (o a cualquier otra decisión financiera) porque parecía que \"todo el mundo\" estaba ganando dinero con ella? ¿Cómo actuaste, y qué habrías hecho de forma distinta con la perspectiva que tienes ahora tras esta lección?",
          },
        },
        {
          id: "m6l5",
          title: "Burbujas y crashes bursátiles",
          simple:
            "Una burbuja es un periodo en el que el precio de un activo se separa de forma extrema de su valor fundamental, impulsado por la euforia colectiva. Un crash es la caída rápida y pronunciada que, históricamente, suele seguir al estallido de esa burbuja.",
          technical: `Una burbuja especulativa es un fenómeno de mercado en el que el precio de un activo (o de una clase entera de activos) se eleva muy por encima de lo que sus fundamentos económicos (beneficios, flujos de caja, utilidad real, Módulo 8) justificarían razonablemente, impulsado principalmente por la expectativa de que el precio seguirá subiendo (más que por el valor intrínseco del activo), atrayendo a más y más compradores movidos por esa expectativa y por el FOMO (Lección 6.4).

Aunque cada burbuja histórica tiene sus particularidades, los economistas e historiadores financieros han identificado patrones recurrentes en muchos episodios pasados (documentados extensamente en obras como "Manias, Panics, and Crashes" de Charles Kindleberger, o análisis posteriores de otros economistas financieros), incluyendo, de forma simplificada:

1. Desplazamiento: surge una innovación, tecnología, o cambio estructural genuino que genera entusiasmo justificado inicialmente (por ejemplo, internet en los años 90, o los ferrocarriles en el siglo XIX).
2. Auge (boom): los precios empiezan a subir de forma sostenida, atrayendo cada vez más atención e inversores.
3. Euforia: el optimismo se desconecta cada vez más de los fundamentos reales; entra dinero de inversores con poco conocimiento previo del activo, atraídos principalmente por las subidas de precio recientes (FOMO).
4. Toma de beneficios (o "smart money" saliendo): inversores más experimentados o con mejor información empiezan a vender y tomar beneficios, aunque el precio pueda seguir subiendo un tiempo más por la inercia de la euforia colectiva.
5. Pánico (crash): en algún momento, la confianza colectiva se revierte (a menudo de forma súbita, desencadenada por algún evento concreto, aunque el desencadenante exacto es difícil de predecir de antemano), y el precio cae de forma rápida y pronunciada, a menudo superando en velocidad a la subida previa.

Es importante ser honesto sobre una limitación fundamental: aunque es posible reconocer, en retrospectiva histórica, patrones que caracterizaron burbujas pasadas, identificar con certeza y de antemano si un episodio concreto de subida de precios es una "burbuja" en tiempo real (mientras está ocurriendo) es extraordinariamente difícil, incluso para economistas y analistas profesionales — muchas advertencias de "burbuja" a lo largo de la historia han resultado prematuras (el activo siguió subiendo mucho tiempo más antes de cualquier corrección), mientras que otras subidas de precio que parecían justificadas por fundamentos sólidos resultaron ser, en retrospectiva, burbujas. Esta incertidumbre inherente es una de las razones por las que la estrategia de diversificación amplia (en vez de concentrar capital intentando identificar y evitar burbujas específicas) es coherente con la filosofía de este curso.`,
          numericExample:
            "Durante la burbuja de los tulipanes en los Países Bajos en el siglo XVII (uno de los episodios de burbuja especulativa más citados en la historia económica), se documenta que ciertos bulbos de tulipán llegaron a alcanzar precios equivalentes al salario anual de un artesano cualificado, antes de que el mercado colapsara de forma abrupta en 1637, con los precios cayendo drásticamente en cuestión de semanas. Este episodio, aunque ocurrido hace siglos, ilustra el patrón recurrente de euforia extrema seguida de colapso rápido que se ha repetido, con variaciones, en numerosos episodios posteriores de la historia financiera.",
          realExample:
            "La burbuja inmobiliaria y financiera que precedió a la crisis de 2008 mostró un patrón similar: precios inmobiliarios y de ciertos productos financieros complejos vinculados a hipotecas se elevaron de forma sostenida durante años, impulsados por una combinación de crédito fácil, expectativas de subidas continuas de precios inmobiliarios, y productos financieros que, en retrospectiva, no reflejaban adecuadamente los riesgos subyacentes reales — hasta que el mercado colapsó de forma abrupta a partir de 2007-2008, con consecuencias que se extendieron mucho más allá del sector inmobiliario, hacia toda la economía global.",
          analogy:
            "Una burbuja es como inflar un globo cada vez más: mientras se sigue inflando, es imposible saber con certeza en qué momento exacto explotará (podría explotar pronto, o podría seguir inflándose bastante más de lo que cualquiera esperaría). Lo que sí se sabe con certeza histórica es que, cuanto más se infla más allá de su capacidad natural (los fundamentos económicos reales), mayor es el riesgo de una explosión eventual — aunque predecir el momento exacto sea, en la práctica, extraordinariamente difícil incluso para expertos.",
          mistakes: [
            "Pensar que es fácil identificar una burbuja \"en tiempo real\", con la misma claridad con la que se identifica en retrospectiva histórica, décadas después de que haya ocurrido.",
            "Concentrar una parte muy significativa del capital intentando \"aprovechar\" activamente una burbuja identificada (comprando cerca del pico esperando vender antes del colapso), una estrategia extremadamente arriesgada y difícil de ejecutar con éxito de forma consistente.",
            "Ignorar por completo el riesgo de burbujas asumiendo que \"esta vez\" la situación es fundamentalmente distinta a episodios históricos previos, sin someter esa creencia a un escrutinio crítico suficiente.",
          ],
          summary:
            "Una burbuja es un periodo de desconexión extrema entre el precio de un activo y sus fundamentos económicos reales, impulsada por la euforia colectiva y el FOMO, que históricamente ha tendido a terminar en un crash (caída rápida y pronunciada). Aunque se pueden reconocer patrones recurrentes en retrospectiva histórica, identificar una burbuja con certeza en tiempo real es extraordinariamente difícil, lo cual refuerza la lógica de una estrategia diversificada de largo plazo, en vez de intentar predecir y evitar activamente episodios de burbuja específicos.",
          exercises: {
            quiz: [
              {
                q: "Una burbuja especulativa se caracteriza por:",
                options: [
                  "Una subida de precio siempre justificada por fundamentos económicos sólidos y estables",
                  "El precio de un activo separándose de forma extrema de su valor fundamental, impulsado principalmente por expectativas de subidas continuas",
                  "Una caída constante y predecible de precios",
                  "Un tipo específico de bono gubernamental",
                ],
                correct: 1,
                explain:
                  "Una burbuja implica que el precio de un activo se eleva muy por encima de lo que sus fundamentos económicos reales justificarían, impulsado principalmente por la expectativa de subidas futuras y el FOMO colectivo, más que por su valor intrínseco real.",
              },
              {
                q: "Según lo visto en esta lección, identificar una burbuja con certeza mientras está ocurriendo (en tiempo real):",
                options: [
                  "Es sencillo y cualquier inversor experimentado puede hacerlo sin margen de error",
                  "Es extraordinariamente difícil, incluso para economistas y analistas profesionales",
                  "Es imposible incluso en retrospectiva histórica",
                  "Solo lo pueden hacer los bancos centrales",
                ],
                correct: 1,
                explain:
                  "Aunque se pueden reconocer patrones de burbujas en retrospectiva histórica, identificarlas con certeza mientras están ocurriendo es extraordinariamente difícil: muchas advertencias de burbuja a lo largo de la historia han resultado prematuras, mientras otras subidas que parecían justificadas resultaron ser burbujas.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"He identificado claramente que tal activo está en una burbuja, voy a poner una gran parte de mi capital en su contra (apostando a que va a caer) para aprovecharme cuando estalle.\" ¿Qué riesgos y consideraciones le señalarías sobre esta estrategia, con lo aprendido en esta lección?",
                solution:
                  "Aunque su análisis de que existe una burbuja pudiera ser acertado (algo que, como se ha visto, es difícil de determinar con certeza incluso para expertos), apostar de forma concentrada contra un activo específico (una estrategia bajista, a veces llamada \"posición corta\", que implica riesgos adicionales significativos, potencialmente incluso pérdidas superiores al capital invertido en ciertos instrumentos) añade un riesgo considerable: incluso si finalmente tiene razón sobre la existencia de la burbuja, el momento exacto en que estallará es extraordinariamente difícil de predecir — las burbujas, históricamente, han podido seguir inflándose durante periodos de tiempo mucho más largos de lo que cualquier analista razonable habría anticipado, antes de finalmente corregir. Una posición concentrada apostando contra un activo podría generar pérdidas significativas si el precio sigue subiendo durante meses o años antes de corregir (si es que llega a corregir en el plazo que a él le interesa). La filosofía de este curso, basada en diversificación amplia y horizonte de largo plazo, es coherente precisamente con reconocer esta dificultad práctica de predecir con precisión el momento de estallido de una burbuja, prefiriendo no concentrar capital en apuestas direccionales de este tipo, sino mantener una cartera diversificada que no dependa de acertar este tipo de predicciones difíciles.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un activo sube un 400% en 18 meses durante un episodio de euforia especulativa (pasando, por ejemplo, de 100€ a 500€). Posteriormente, sufre un crash y cae un 85% desde su máximo. Calcula el precio final del activo tras esa caída, y compáralo con el precio inicial de 100€ antes de todo el episodio, para entender el resultado neto de haber comprado justo en el pico frente a no haber participado en absoluto en ese episodio concreto.",
                solution:
                  "Precio en el pico: 500€ (tras la subida del 400% desde 100€).\n\nPrecio tras la caída del 85% desde el pico: 500€ × 0,15 = 75€.\n\nComparando con el precio inicial de 100€ (antes de todo el episodio de euforia y posterior crash): 75€ es un 25% menos que el precio inicial de 100€, a pesar de que en algún momento intermedio el activo llegó a valer 500€ (un 400% más). Quien hubiera comprado cerca del pico de 500€ habría sufrido una pérdida del 85% sobre su inversión; quien nunca hubiera participado en ese episodio concreto (manteniendo su capital en otras inversiones diversificadas) simplemente no se habría visto afectado por este ciclo completo de euforia y colapso. Este ejercicio numérico ilustra por qué el momento exacto de entrada (comprar cerca del pico de euforia) es tan determinante para el resultado final, y por qué es tan arriesgado concentrar capital basándose en la expectativa de que una subida de precio muy pronunciada vaya a continuar de forma indefinida.",
              },
            ],
            reflection:
              "Pensando en la historia reciente de los mercados (o en episodios que hayas vivido o de los que hayas oído hablar), ¿recuerdas algún caso que, en retrospectiva, pareciera un episodio de euforia especulativa? ¿Era fácil, en ese momento, distinguir entre una subida de precio justificada por fundamentos reales y una burbuja especulativa? ¿Qué aprendes de esa dificultad de cara a tu propia estrategia de inversión?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 6",
        passScore: 70,
        questions: [
          {
            q: "La brecha entre la rentabilidad de un fondo/índice y la rentabilidad real obtenida por el inversor medio se debe principalmente a:",
            options: [
              "Errores exclusivos de las gestoras de fondos",
              "El comportamiento de compra y venta del propio inversor (comprar en euforia, vender en pánico)",
              "Cambios permanentes en la legislación fiscal",
              "El tamaño del bróker utilizado",
            ],
            correct: 1,
            topic: "Por qué importa la psicología",
          },
          {
            q: "La aversión a la pérdida describe:",
            options: [
              "La tendencia a sentir el dolor de una pérdida con mayor intensidad que el placer de una ganancia equivalente",
              "Una estrategia de diversificación entre países",
              "El proceso legal de declarar pérdidas en la renta",
              "Un tipo de bono corporativo",
            ],
            correct: 0,
            topic: "Sesgos cognitivos",
          },
          {
            q: "El efecto de anclaje, aplicado a la inversión, se refiere a:",
            options: [
              "Diversificar entre múltiples clases de activos",
              "Dar un peso desproporcionado a una referencia pasada (como el precio de compra) al tomar decisiones actuales",
              "Un tipo de orden de compra automática",
              "El proceso de rebalanceo de cartera",
            ],
            correct: 1,
            topic: "Sesgos cognitivos",
          },
          {
            q: "La \"capitulación\" durante una caída de mercado describe:",
            options: [
              "El momento en que el mercado alcanza nuevos máximos históricos",
              "El momento de máximo pesimismo colectivo, cuando incluso inversores pacientes ceden al miedo y venden",
              "Una estrategia de inversión recomendada oficialmente",
              "El cierre administrativo de un fondo de inversión",
            ],
            correct: 1,
            topic: "El miedo y el pánico de mercado",
          },
          {
            q: "El FOMO (Fear Of Missing Out) en inversión describe:",
            options: [
              "Un análisis racional y fundamentado de una inversión",
              "El impulso a comprar un activo principalmente por miedo a quedarse fuera de una subida, más que por análisis propio",
              "Una comisión bancaria específica",
              "Un tipo de bono a tipo variable",
            ],
            correct: 1,
            topic: "La euforia y el FOMO",
          },
          {
            q: "Según el patrón histórico descrito en esta lección, una burbuja especulativa se caracteriza por:",
            options: [
              "Una relación estable y constante entre precio y fundamentos económicos",
              "El precio de un activo separándose de forma extrema de su valor fundamental, impulsado por la euforia colectiva",
              "Una caída lenta y predecible de precios durante años",
              "Ser exclusiva del mercado de bonos gubernamentales",
            ],
            correct: 1,
            topic: "Burbujas y crashes bursátiles",
          },
          {
            q: "Identificar una burbuja con certeza mientras está ocurriendo (en tiempo real), según lo visto en esta lección:",
            options: [
              "Es sencillo para cualquier inversor con conocimientos básicos",
              "Es extraordinariamente difícil, incluso para analistas y economistas profesionales",
              "Es matemáticamente imposible incluso en retrospectiva",
              "Solo lo determinan los bancos centrales de forma oficial",
            ],
            correct: 1,
            topic: "Burbujas y crashes bursátiles",
          },
          {
            q: "Un fondo rinde de media un 8% anual durante 15 años. Un inversor, por decisiones de compra/venta mal sincronizadas, obtiene en la práctica un 5,2% anual durante ese mismo periodo. Sobre una inversión inicial de 10.000€ (sin aportaciones adicionales), usando VF=VI×(1+r)^15, ¿cuál es aproximadamente la diferencia de capital final entre ambos escenarios?",
            options: ["≈ 3.000€", "≈ 9.500€", "≈ 15.000€", "≈ 21.000€"],
            correct: 1,
            topic: "Por qué importa la psicología (cálculo)",
          },
        ],
      },
    },
    {
      id: "m7",
      number: 7,
      title: "Fiscalidad española de la inversión",
      objective:
        "Entender cómo tributan en España las ganancias de tus inversiones, aprovechar el régimen de traspasos entre fondos, saber compensar pérdidas con ganancias, y entender qué debes declarar (y cómo) en tu declaración de la renta.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulos 0 a 6 completos, especialmente el Módulo 3 (ETFs y fondos).",
      learn:
        "A calcular cuánto pagarás de impuestos sobre tus plusvalías, a usar el traspaso entre fondos para diferir tributación, a compensar pérdidas con ganancias dentro de los límites legales, y a entender qué apartados de tu declaración de la renta afectan a tus inversiones.",
      lessons: [
        {
          id: "m7l1",
          title: "Cómo tributan las inversiones en España: la base del ahorro",
          simple:
            "En España, las ganancias de tus inversiones (vender más caro de lo que compraste, o cobrar dividendos) tributan dentro de la llamada \"base imponible del ahorro\", con un tipo de impuesto que depende de cuánto hayas ganado en total ese año, no de tus ingresos por trabajo.",
          technical: `El sistema fiscal español (IRPF, Impuesto sobre la Renta de las Personas Físicas) distingue entre dos grandes bloques: la base imponible general (que incluye, entre otros, los rendimientos del trabajo, como el salario) y la base imponible del ahorro (que incluye, entre otros, las ganancias patrimoniales derivadas de la venta de activos financieros —acciones, ETFs, fondos de inversión— y los rendimientos del capital mobiliario, como los dividendos y los intereses).

Es importante entender esta distinción porque cada base tributa con una escala de tipos distinta: la base del ahorro tiene, en general, tipos marginales más bajos que los tramos altos de la base general del trabajo, y una escala propia por tramos.

A fecha de esta lección, la escala de gravamen de la base del ahorro en España (que puede cambiar con futuras reformas fiscales, por lo que conviene verificar los tramos vigentes en el momento de aplicarlos) se estructura, de forma aproximada, en tramos crecientes: un primer tramo hasta 6.000€ de ganancias anuales tributando a un tipo, un segundo tramo entre 6.000€ y 50.000€ a un tipo algo mayor, y tramos adicionales superiores para ganancias más elevadas, con el tipo marginal aumentando progresivamente según el importe total de ganancias del ahorro obtenidas en el año. Dado que estos tramos y porcentajes exactos pueden modificarse por ley de un año a otro, este curso no fija cifras exactas de forma permanente: lo importante es entender la lógica (tributación progresiva por tramos dentro de la base del ahorro) y saber que conviene consultar los tramos y tipos vigentes en el momento concreto de hacer los cálculos, por ejemplo en la web de la Agencia Tributaria.

Un aspecto clave: la ganancia patrimonial tributable no es el importe total que recibes al vender, sino la diferencia entre el precio de venta y el precio de compra (más gastos asociados, como comisiones de compraventa), es decir, la plusvalía neta obtenida, no el capital total recuperado.`,
          numericExample:
            "Compraste participaciones de un fondo indexado por 8.000€ y, años después, las vendes por 12.500€. La ganancia patrimonial tributable no es 12.500€ (el importe total recibido), sino la diferencia: 12.500€ − 8.000€ = 4.500€ de plusvalía, que es la cantidad sobre la que se calculará el impuesto correspondiente según los tramos vigentes de la base del ahorro en el momento de la venta.",
          realExample:
            "Un inversor que en un mismo año natural vende participaciones de distintos fondos con una ganancia total de, por ejemplo, 20.000€, tributaría por tramos: una parte de esa ganancia (hasta el límite del primer tramo) al tipo más bajo, la siguiente parte (hasta el límite del segundo tramo) a un tipo intermedio, y así sucesivamente según la escala progresiva vigente ese año, no aplicando un único tipo fijo sobre el total de la ganancia.",
          analogy:
            "La tributación por tramos en la base del ahorro funciona de forma parecida a como tributa el salario en el IRPF general: no se aplica un único porcentaje sobre todo el importe, sino que cada \"tramo\" de ganancia tributa al tipo correspondiente a ese nivel, de forma progresiva, como si el importe total de tu ganancia fuera subiendo peldaños de una escalera, y cada peldaño tuviera un precio distinto de \"peaje\" a pagar.",
          mistakes: [
            "Pensar que se tributa sobre el importe total recibido al vender, en vez de sobre la plusvalía neta (diferencia entre venta y compra).",
            "Aplicar el tipo marginal más alto sobre toda la ganancia, en vez de entender la progresividad por tramos (solo la parte de la ganancia que cae dentro de cada tramo tributa al tipo de ese tramo).",
            "No verificar los tramos y tipos vigentes en el momento real de hacer los cálculos, ya que la fiscalidad puede cambiar entre años por reformas legislativas.",
          ],
          summary:
            "Las ganancias de tus inversiones en España tributan dentro de la base imponible del ahorro, con una escala progresiva por tramos que puede variar con el tiempo por reformas fiscales. Se tributa sobre la plusvalía neta (diferencia entre venta y compra), no sobre el importe total recibido. Conviene consultar siempre los tramos y tipos vigentes en el momento concreto de la operación, dado que este dato cambia con la legislación.",
          exercises: {
            quiz: [
              {
                q: "Las ganancias derivadas de vender acciones, ETFs o fondos de inversión en España tributan dentro de:",
                options: [
                  "La base imponible general, junto con el salario",
                  "La base imponible del ahorro, con una escala progresiva por tramos propia",
                  "No tributan bajo ninguna circunstancia",
                  "Un impuesto municipal específico",
                ],
                correct: 1,
                explain:
                  "Las ganancias patrimoniales por venta de activos financieros y los rendimientos del capital mobiliario (dividendos, intereses) tributan dentro de la base imponible del ahorro del IRPF, con una escala de tramos propia distinta a la de los rendimientos del trabajo.",
              },
              {
                q: "La ganancia patrimonial tributable al vender una inversión es:",
                options: [
                  "El importe total recibido en la venta",
                  "La diferencia entre el precio de venta y el precio de compra (más gastos asociados)",
                  "Siempre un 20% fijo del importe invertido",
                  "El valor nominal de la inversión original",
                ],
                correct: 1,
                explain:
                  "Se tributa sobre la plusvalía neta (venta menos compra, considerando también gastos asociados como comisiones), no sobre el importe total recuperado en la venta.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un familiar te dice: \"Si vendo mis inversiones con una ganancia de 30.000€ este año, me van a quitar un 30% de esos 30.000€ completos.\" ¿Qué matiz importante le explicarías sobre cómo funciona realmente la tributación por tramos?",
                solution:
                  "El matiz clave es que la tributación es progresiva por tramos, no un tipo único fijo aplicado sobre el total de la ganancia. Esto significa que solo la porción de la ganancia que cae dentro de cada tramo tributa al tipo correspondiente a ese tramo concreto: por ejemplo, una primera parte de la ganancia (hasta el límite del primer tramo vigente) tributaría a un tipo más bajo, y solo la parte que supere ese límite y entre en tramos superiores tributaría a tipos progresivamente más altos. El tipo marginal más alto que menciona (por ejemplo, en torno al 26-28% en tramos superiores según la normativa vigente en cada momento) no se aplica sobre el total de los 30.000€, sino únicamente sobre la porción de esa ganancia que efectivamente entra en el tramo más alto. El tipo medio efectivo sobre el total de la ganancia sería, por tanto, inferior al tipo marginal máximo aplicable a la última porción del importe.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Compraste acciones por 6.500€ y, años después, las vendes por 9.800€, pagando además 30€ en comisiones de compraventa (que se pueden restar como gasto asociado a la operación). Calcula la ganancia patrimonial neta tributable de esta operación.",
                solution:
                  "Precio de venta: 9.800€.\nPrecio de compra: 6.500€.\nComisiones asociadas (gasto deducible): 30€.\n\nGanancia patrimonial neta: 9.800€ − 6.500€ − 30€ = 3.270€.\n\nEsta cantidad (3.270€), y no el importe total de 9.800€ recibido en la venta, es la base sobre la que se calcularía el impuesto correspondiente según los tramos vigentes de la base del ahorro en el momento de esa venta.",
              },
            ],
            reflection:
              "¿Sabías, antes de esta lección, que las ganancias de inversión tributan de forma progresiva por tramos y no con un tipo único fijo? ¿Te ayuda esta distinción a entender mejor cómo estimar el impuesto real que pagarías al materializar ganancias de tus inversiones?",
          },
        },
        {
          id: "m7l2",
          title: "Traspasos entre fondos: la ventaja fiscal española",
          simple:
            "En España, puedes cambiar tu dinero de un fondo de inversión a otro (un traspaso) sin pagar impuestos en ese momento, siempre que el dinero no salga del ecosistema de fondos. Esta es una de las ventajas fiscales más importantes y específicas del sistema español.",
          technical: `El régimen de traspasos entre fondos de inversión, regulado en la normativa española del IRPF, permite a un inversor cambiar su capital de un fondo de inversión a otro fondo de inversión (por ejemplo, de un fondo indexado al MSCI World gestionado por una gestora, a un fondo indexado al S&P 500 gestionado por otra gestora distinta) sin que esa operación de traspaso genere, en ese momento, una obligación fiscal inmediata, siempre que se cumplan ciertos requisitos (fundamentalmente, que el dinero se mueva directamente entre fondos, sin pasar por la cuenta corriente del inversor, y que ambos vehículos cumplan los requisitos legales para acogerse a este régimen).

Este mecanismo permite diferir la tributación: en vez de pagar impuestos cada vez que se cambia de fondo (lo cual desincentivaría en la práctica el rebalanceo, Módulo 5, o el ajuste de la estrategia con el tiempo), el impuesto solo se genera cuando finalmente se retira el dinero del ecosistema de fondos hacia la cuenta corriente del inversor (un reembolso), momento en el que se calcula la ganancia o pérdida acumulada desde la compra original del primer fondo, considerando todos los traspasos intermedios como si no hubieran generado, por sí mismos, ningún evento fiscal.

Es importante remarcar una distinción vista en el Módulo 3: este régimen de traspasos sin tributación inmediata aplica a los fondos de inversión tradicionales (incluidos los fondos indexados tradicionales), pero no a los ETFs, que al operarse como acciones en el mercado secundario, generan un evento fiscal (tributación) cada vez que se venden con ganancia, independientemente de si el dinero se reinvierte inmediatamente en otro ETF o no.

Para un inversor de largo plazo con el enfoque de este curso, que probablemente quiera ajustar su estrategia con el tiempo (cambiar de gestora buscando menor TER, hacer rebalanceo entre distintos fondos, o adaptar su asset allocation según cambien sus circunstancias personales), esta ventaja fiscal específica de los fondos frente a los ETFs puede ser un factor relevante a la hora de elegir el vehículo de inversión principal.`,
          numericExample:
            "Un inversor compra 10.000€ en el Fondo A (indexado al MSCI World). Años después, cuando su inversión vale 15.000€, decide traspasar todo el capital al Fondo B (indexado también al MSCI World, pero de otra gestora con menor TER). Gracias al régimen de traspasos, esa operación no genera tributación en ese momento, a pesar de que existe una plusvalía latente de 5.000€ (15.000€ − 10.000€). Si, años más tarde, finalmente retira 20.000€ del Fondo B hacia su cuenta corriente, la ganancia tributable en ese momento se calculará sobre la diferencia entre el valor final (20.000€) y el coste de adquisición original del primer fondo (10.000€), es decir, sobre 10.000€ de plusvalía total acumulada a lo largo de todo el proceso, no solo sobre la revalorización del segundo fondo.",
          realExample:
            "Muchos inversores particulares en España utilizan el régimen de traspasos para ir optimizando su cartera con el tiempo: por ejemplo, cambiando de un fondo indexado de una gestora a otro fondo equivalente de menor TER (Módulo 3) de otra gestora, sin que ese cambio genere ninguna obligación fiscal inmediata, a diferencia de lo que ocurriría si tuvieran ese mismo capital invertido en un ETF y quisieran hacer un cambio equivalente (lo cual sí generaría un evento fiscal en el momento de la venta del ETF).",
          analogy:
            "El régimen de traspasos es como poder cambiar de compartimento dentro del mismo tren en marcha sin tener que bajarte y volver a comprar billete cada vez: mientras te mantengas dentro del tren (el ecosistema de fondos de inversión), puedes moverte de un vagón a otro (de un fondo a otro) libremente. Solo cuando finalmente te bajas del tren por completo (reembolsas el dinero a tu cuenta corriente) es cuando se calcula y se paga el \"billete\" completo del trayecto realizado desde el origen.",
          mistakes: [
            "Confundir un traspaso entre fondos (sin tributación inmediata) con un reembolso a la cuenta corriente seguido de una nueva inversión (que sí generaría tributación en el momento del reembolso): para acogerse al régimen de traspasos, el dinero debe moverse directamente entre fondos, sin pasar por la cuenta del inversor.",
              "Pensar que este régimen de traspasos aplica también a los ETFs: no es así, es una particularidad específica de los fondos de inversión tradicionales.",
              "Olvidar que, aunque se difiera la tributación con los traspasos, el impuesto seguirá aplicándose finalmente cuando se reembolse el dinero, calculado sobre la ganancia total acumulada desde la inversión original.",
            ],
            summary:
              "El régimen de traspasos entre fondos de inversión permite a un inversor español cambiar de un fondo a otro sin generar tributación inmediata, siempre que el dinero se mueva directamente entre fondos sin pasar por su cuenta corriente. Esta ventaja fiscal, específica de los fondos (no de los ETFs), facilita ajustar la estrategia de inversión con el tiempo (cambiar de gestora, rebalancear) sin el coste fiscal que tendría hacer lo mismo con otros vehículos de inversión.",
            exercises: {
              quiz: [
                {
                  q: "El régimen de traspasos entre fondos de inversión en España permite:",
                  options: [
                    "Evitar pagar impuestos para siempre sobre las ganancias de inversión",
                    "Cambiar de un fondo a otro sin generar tributación inmediata, siempre que el dinero no pase por la cuenta corriente del inversor",
                    "Aplica exclusivamente a los ETFs",
                    "Solo está disponible para inversores institucionales",
                  ],
                  correct: 1,
                  explain:
                    "El traspaso permite diferir la tributación (no eliminarla) al cambiar de un fondo a otro, siempre que la operación se haga directamente entre fondos, sin que el dinero pase por la cuenta corriente del inversor en el proceso.",
                },
                {
                  q: "¿Aplica el régimen de traspasos sin tributación inmediata a los ETFs?",
                  options: [
                    "Sí, exactamente igual que a los fondos de inversión tradicionales",
                    "No, es una particularidad específica de los fondos de inversión tradicionales, no de los ETFs",
                    "Solo si el ETF cotiza en la bolsa española",
                    "Solo para importes superiores a 100.000€",
                  ],
                  correct: 1,
                  explain:
                    "Como se vio también en el Módulo 3, el régimen de traspasos sin tributación inmediata es una particularidad de los fondos de inversión tradicionales en España; los ETFs, al operarse como acciones, generan tributación en cada venta con ganancia.",
                },
              ],
              cases: [
                {
                  prompt:
                    "Un inversor te dice: \"He decidido cambiar mi dinero de un fondo indexado a otro con menor TER, así que voy a vender mi fondo actual, que el dinero llegue a mi cuenta, y luego comprar el nuevo fondo con ese dinero.\" ¿Qué error importante está a punto de cometer, y qué le recomendarías hacer en su lugar?",
                  solution:
                    "El error importante es que, al vender el fondo actual y dejar que el dinero llegue primero a su cuenta corriente antes de comprar el nuevo fondo, estaría realizando un reembolso (no un traspaso), lo cual generaría una obligación fiscal inmediata sobre la ganancia acumulada en el fondo original, perdiendo la ventaja del diferimiento fiscal. En su lugar, debería solicitar expresamente a su gestora o bróker un traspaso directo entre fondos (no un reembolso seguido de una nueva suscripción), de forma que el capital se mueva directamente de un fondo a otro sin pasar por su cuenta corriente en ningún momento del proceso. La mayoría de brókeres y plataformas de fondos en España ofrecen esta opción de traspaso de forma explícita y diferenciada de un simple reembolso, precisamente para que los inversores puedan beneficiarse de este régimen fiscal específico al cambiar de fondo.",
                },
              ],
              numeric: [
                {
                  prompt:
                    "Un inversor invirtió originalmente 12.000€ en el Fondo X. Con el tiempo, hizo un traspaso al Fondo Y cuando su inversión valía 17.000€ (sin tributar en ese momento por el traspaso), y después otro traspaso al Fondo Z cuando su inversión (ya en el Fondo Y) valía 21.000€ (tampoco tributó en ese momento). Finalmente, decide reembolsar todo el capital a su cuenta corriente cuando el Fondo Z vale 26.000€. Calcula la ganancia patrimonial total que tributaría en el momento de ese reembolso final.",
                  solution:
                    "Gracias al régimen de traspasos, ninguno de los cambios intermedios entre el Fondo X, Y y Z generó tributación en su momento. La ganancia patrimonial tributable se calcula únicamente en el momento del reembolso final, sobre la diferencia entre el valor final recuperado y la inversión original de partida:\n\nGanancia tributable: 26.000€ − 12.000€ = 14.000€.\n\nEsta cantidad (14.000€) es la que tributaría, según los tramos vigentes de la base del ahorro en el momento del reembolso, independientemente de que la inversión haya pasado por tres fondos distintos (X, Y y Z) a lo largo del tiempo mediante traspasos, ya que todos esos cambios intermedios no generaron, por sí mismos, ningún evento fiscal.",
                },
              ],
              reflection:
                "¿Conocías esta particularidad fiscal española de los traspasos entre fondos antes de este curso? ¿Cómo crees que podría influir en tu decisión, vista también en el Módulo 3, de elegir fondos indexados tradicionales frente a ETFs para tu estrategia de inversión a 20 años, especialmente si prevés hacer ajustes o rebalanceos con el tiempo?",
          },
        },
        {
          id: "m7l3",
          title: "Compensación de pérdidas y ganancias",
          simple:
            "Si en un mismo año tienes tanto ganancias como pérdidas en tus inversiones, puedes compensarlas entre sí para reducir la cantidad final sobre la que pagas impuestos. Incluso puedes \"guardar\" pérdidas de años anteriores para compensarlas en el futuro, dentro de ciertos límites y plazos.",
          technical: `El sistema fiscal español permite la compensación de pérdidas y ganancias patrimoniales dentro de la base del ahorro, lo cual puede reducir significativamente la carga fiscal efectiva de un inversor que, en un mismo ejercicio fiscal, haya tenido tanto operaciones con ganancia como operaciones con pérdida.

El mecanismo general de compensación sigue, de forma simplificada, esta lógica:

1. Dentro del mismo año fiscal, las ganancias patrimoniales se compensan primero con las pérdidas patrimoniales del mismo tipo (por ejemplo, ganancias y pérdidas por venta de fondos o acciones se compensan entre sí).
2. Si tras esa compensación queda un remanente de pérdidas (has perdido más de lo que has ganado ese año en conjunto), ese remanente se puede compensar, dentro de ciertos límites porcentuales anuales, con otros rendimientos del ahorro (como dividendos o intereses) del mismo ejercicio.
3. Si aún queda un remanente de pérdidas sin compensar, la normativa española permite trasladar ("arrastrar") esas pérdidas a ejercicios fiscales futuros, dentro de un plazo determinado de años (habitualmente cuatro años siguientes, aunque conviene verificar el plazo exacto vigente), para compensarlas con ganancias que se obtengan en esos años posteriores.

Existe una norma anti-abuso relevante para tener en cuenta, conocida coloquialmente como "regla de los dos meses" para valores cotizados (como acciones y ETFs) y de un año para otros activos: si se vende un activo con pérdidas y se recompra un activo idéntico (o sustancialmente similar) dentro de ese plazo (2 meses antes o después de la venta, para valores cotizados en mercados organizados), esa pérdida no se puede computar fiscalmente en ese momento, precisamente para evitar que los inversores generen pérdidas fiscales "artificiales" vendiendo y recomprando rápidamente el mismo activo solo por motivos fiscales, sin una intención económica real de deshacer la posición.

Para un inversor de largo plazo, esta capacidad de compensar pérdidas con ganancias (y de arrastrar pérdidas no compensadas a años futuros) es una herramienta legítima de planificación fiscal que puede reducir el impacto impositivo efectivo, especialmente relevante si en algún momento se realizan ventas con pérdida (por ejemplo, al reajustar la cartera) en el mismo año en que también se materializan ganancias en otras posiciones.`,
          numericExample:
            "En un mismo año, un inversor vende el Fondo A con una ganancia de 4.000€, y también vende una acción individual con una pérdida de 2.500€. En vez de tributar sobre los 4.000€ completos de ganancia, puede compensar esa ganancia con la pérdida de 2.500€, tributando solo sobre la diferencia neta: 4.000€ − 2.500€ = 1.500€ de ganancia neta compensada, reduciendo significativamente su base imponible del ahorro de ese año.",
          realExample:
            "Durante años de fuerte volatilidad de mercado (como 2022, con caídas significativas tanto en renta variable como en renta fija en muchos mercados), algunos inversores aprovecharon para vender posiciones concretas con pérdida (por ejemplo, algún fondo o acción específica que no encajaba ya con su estrategia), compensando esa pérdida fiscal con ganancias obtenidas en otras posiciones vendidas ese mismo año, optimizando así su factura fiscal conjunta del ejercicio.",
          analogy:
            "La compensación de pérdidas y ganancias es como hacer un balance conjunto de todas tus \"apuestas\" del año antes de calcular cuánto debes: si en algunas ganaste y en otras perdiste, lo relevante fiscalmente (dentro de los límites legales) es el resultado neto conjunto, no el resultado de cada apuesta evaluada de forma completamente aislada, como si las demás no hubieran existido ese mismo año.",
          mistakes: [
            "No informarse sobre la posibilidad de compensar pérdidas de años anteriores (dentro del plazo legal) con ganancias del año actual, dejando pasar esa oportunidad legítima de reducir la carga fiscal.",
            "Vender un activo con pérdida y recomprar rápidamente el mismo activo (o uno muy similar) dentro del plazo antielusión de la \"regla de los dos meses\", sin saber que esa pérdida no sería computable fiscalmente en ese caso.",
            "Confundir \"compensar pérdidas\" con \"evitar pagar impuestos por completo\": la compensación reduce la base imponible según reglas específicas, pero no elimina la obligación fiscal de forma indiscriminada ni ilimitada.",
          ],
          summary:
            "El sistema fiscal español permite compensar pérdidas patrimoniales con ganancias patrimoniales dentro del mismo año, y arrastrar pérdidas no compensadas a ejercicios futuros dentro de un plazo determinado. Existe una norma anti-abuso (la \"regla de los dos meses\" para valores cotizados) que impide computar fiscalmente una pérdida si se recompra el mismo activo dentro de ese plazo. Esta compensación es una herramienta legítima de planificación fiscal que puede reducir de forma significativa la carga impositiva efectiva de un inversor.",
          exercises: {
            quiz: [
              {
                q: "La compensación de pérdidas y ganancias patrimoniales en España permite:",
                options: [
                  "Eliminar por completo cualquier obligación fiscal futura",
                  "Reducir la base imponible del ahorro compensando las pérdidas con las ganancias del mismo año (y, en ciertos casos, de años posteriores)",
                  "Solo se aplica a los bonos gubernamentales",
                  "Es una opción exclusiva de grandes patrimonios",
                ],
                correct: 1,
                explain:
                  "La compensación permite reducir la base imponible del ahorro del año, y bajo ciertas condiciones y límites, arrastrar el remanente de pérdidas no compensadas a ejercicios fiscales futuros.",
              },
              {
                q: "La \"regla de los dos meses\" (para valores cotizados como acciones y ETFs) implica que:",
                options: [
                  "Hay que esperar dos meses obligatoriamente para poder vender cualquier inversión",
                  "Si se recompra un activo idéntico o sustancialmente similar dentro de los 2 meses siguientes (o anteriores) a una venta con pérdida, esa pérdida no se puede computar fiscalmente",
                  "Solo aplica a los fondos de inversión, no a las acciones",
                  "Permite duplicar la pérdida fiscal si se recompra rápidamente",
                ],
                correct: 1,
                explain:
                  "Esta norma anti-abuso impide computar fiscalmente una pérdida si se recompra el mismo activo (o uno sustancialmente similar) dentro del plazo de 2 meses antes o después de la venta con pérdida, para valores cotizados en mercados organizados.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Voy a vender mi fondo con pérdidas para 'aprovechar fiscalmente' esa pérdida, y mañana mismo vuelvo a comprar el mismo fondo, así no pierdo mi posición y encima me ahorro impuestos.\" ¿Qué error importante está a punto de cometer?",
                solution:
                  "Está a punto de incumplir la norma anti-abuso de la \"regla de los dos meses\": si vende un activo con pérdida y recompra el mismo activo (o uno sustancialmente idéntico) dentro de los dos meses siguientes a esa venta (para valores cotizados como fondos indexados/ETFs y acciones), esa pérdida no será computable fiscalmente, precisamente porque la normativa está diseñada para evitar este tipo de operaciones que buscan generar una pérdida fiscal \"artificial\" sin una intención económica real de deshacer la posición de inversión. Si realmente quiere aprovechar fiscalmente esa pérdida, tendría que esperar a que transcurra el plazo de dos meses antes de recomprar el mismo activo, o bien invertir en un activo distinto (no sustancialmente idéntico) durante ese periodo si no quiere quedarse fuera del mercado mientras tanto — aunque esto último implicaría asumir el riesgo de que el activo original se mueva de precio durante ese periodo de espera.",
              },
            ],
            numeric: [
              {
                prompt:
                  "En un año, un inversor obtiene las siguientes ganancias y pérdidas patrimoniales: venta del Fondo A con ganancia de 5.500€, venta de una acción con pérdida de 1.800€, y venta del Fondo B con ganancia de 2.200€. Calcula la ganancia patrimonial neta total que tributaría ese año, tras compensar todas las operaciones entre sí.",
                solution:
                  "Ganancias totales: 5.500€ + 2.200€ = 7.700€.\nPérdidas totales: 1.800€.\n\nGanancia patrimonial neta compensada: 7.700€ − 1.800€ = 5.900€.\n\nEsta cantidad (5.900€), y no los 7.700€ de ganancias brutas totales, es la que formaría parte de la base imponible del ahorro de ese año (asumiendo que la pérdida de 1.800€ es fiscalmente computable, es decir, que no se recompró el mismo activo dentro del plazo de la regla de los dos meses), reduciendo así la carga fiscal efectiva del inversor ese ejercicio.",
              },
            ],
            reflection:
              "Si en algún año futuro tuvieras tanto ganancias como pérdidas en distintas inversiones de tu cartera, ¿cómo crees que esta posibilidad de compensación podría influir en tu decisión de cuándo materializar (vender) ciertas posiciones? ¿Ves alguna situación en la que esta herramienta fiscal podría ser especialmente útil para ti?",
          },
        },
        {
          id: "m7l4",
          title: "Dividendos e intereses: retenciones",
          simple:
            "Los dividendos que reparten las empresas y los intereses que pagan los bonos también tributan en España, dentro de la misma base del ahorro que las plusvalías, y normalmente llevan una retención automática en el momento del pago.",
          technical: `Además de las ganancias patrimoniales por venta de activos (Lección 7.1), otro tipo de rendimiento sujeto a tributación en la base del ahorro son los rendimientos del capital mobiliario, que incluyen principalmente:

- Dividendos: los pagos periódicos que reparten algunas empresas a sus accionistas (Módulo 1), a partir de su beneficio.
- Intereses (cupones) de bonos y otros instrumentos de renta fija (Módulo 4).
- Intereses de cuentas de ahorro y depósitos bancarios.

Estos rendimientos tributan también dentro de la escala progresiva de la base del ahorro (los mismos tramos vistos en la Lección 7.1), y habitualmente están sujetos a una retención a cuenta en el momento del pago: la entidad pagadora (el bróker, en el caso de dividendos de acciones o fondos; el banco, en el caso de intereses de depósitos) retiene automáticamente un porcentaje (a fecha de esta lección, habitualmente en torno al 19-21%, aunque este porcentaje puede haber cambiado, por lo que conviene verificarlo en el momento concreto) y lo ingresa directamente a la Agencia Tributaria en nombre del inversor, de forma similar a como funciona la retención sobre el salario en las nóminas.

Esta retención es "a cuenta" del impuesto final: en la declaración de la renta anual, se regulariza la diferencia entre lo ya retenido y lo que realmente corresponde pagar según los tramos aplicables al conjunto de rendimientos del ahorro obtenidos ese año — si la retención practicada fue superior a lo finalmente debido, Hacienda devuelve la diferencia; si fue inferior, el contribuyente debe pagar la diferencia restante en su declaración.

Un aspecto relevante para inversores en fondos indexados de acumulación (a diferencia de los de distribución o reparto): los fondos de acumulación reinvierten automáticamente los dividendos recibidos de las empresas subyacentes dentro del propio fondo, en vez de repartirlos directamente al inversor. Esto significa que el inversor no recibe esos dividendos como flujo de caja periódico ni tributa por ellos en el momento en que el fondo los recibe internamente: esa reinversión se refleja simplemente en un mayor valor liquidativo del fondo con el tiempo, y el inversor solo tributará, en su momento, por la ganancia patrimonial total al vender o reembolsar sus participaciones — otra ventaja de eficiencia fiscal (diferimiento) que suelen ofrecer los fondos indexados de acumulación frente a recibir dividendos de forma directa.`,
          numericExample:
            "Un inversor recibe 800€ de dividendos de sus acciones a lo largo de un año. El bróker practica una retención del 19% en el momento del pago (152€), por lo que el inversor recibe realmente 648€ netos en su cuenta (800€ − 152€). En su declaración de la renta anual, esos 800€ brutos de dividendos se integran en su base del ahorro junto con el resto de rendimientos y ganancias patrimoniales del año, calculándose el impuesto final según los tramos aplicables al conjunto; los 152€ ya retenidos se descuentan de esa cantidad final a pagar (o generan una devolución si la retención fue superior a lo finalmente debido).",
          realExample:
            "Un inversor que posea un fondo indexado de acumulación al MSCI World no recibe ningún ingreso por dividendos de forma directa, aunque las empresas que componen el índice (como muchas grandes multinacionales) sí reparten dividendos regularmente: esos dividendos se reinvierten automáticamente dentro del fondo, incrementando su valor liquidativo con el tiempo, sin generar tributación ni retención en ese momento para el inversor, que solo tributará, en su caso, al vender o reembolsar sus participaciones del fondo en el futuro.",
          analogy:
            "La retención sobre dividendos e intereses es como el anticipo que te descuentan de la nómina cada mes por el IRPF: no es el impuesto final definitivo, sino un pago \"a cuenta\" que se ajusta y regulariza en la declaración de la renta anual, donde se calcula la cifra exacta según todos tus ingresos y circunstancias del año completo.",
          mistakes: [
            "Pensar que la retención practicada sobre dividendos o intereses es ya el impuesto final definitivo, sin necesidad de declararlos en la renta anual: en realidad, es un pago a cuenta que se regulariza en la declaración.",
            "Confundir un fondo de acumulación (que reinvierte los dividendos internamente, sin tributación inmediata para el inversor) con un fondo de distribución o reparto (que sí entrega los dividendos como flujo de caja periódico, generando tributación en ese momento).",
            "Olvidar declarar dividendos o intereses recibidos de brókeres extranjeros, que pueden no aplicar automáticamente la retención española, siendo responsabilidad del inversor declararlos correctamente igualmente.",
          ],
          summary:
            "Los dividendos e intereses tributan en la base del ahorro, con una retención a cuenta practicada habitualmente en el momento del pago, que se regulariza posteriormente en la declaración de la renta anual. Los fondos indexados de acumulación reinvierten los dividendos internamente sin generar tributación inmediata para el inversor, ofreciendo una ventaja de diferimiento fiscal adicional frente a recibir esos dividendos de forma directa.",
          exercises: {
            quiz: [
              {
                q: "La retención practicada sobre dividendos o intereses en el momento del pago es:",
                options: [
                  "El impuesto final y definitivo, sin necesidad de declararlo posteriormente",
                  "Un pago a cuenta que se regulariza en la declaración de la renta anual",
                  "Una comisión bancaria sin relación con Hacienda",
                  "Solo aplicable a inversores no residentes en España",
                ],
                correct: 1,
                explain:
                  "La retención es un anticipo a cuenta del impuesto final, que se ajusta en la declaración de la renta anual según el conjunto de rendimientos del ahorro obtenidos ese año.",
              },
              {
                q: "Un fondo indexado de acumulación, a diferencia de uno de distribución/reparto:",
                options: [
                  "Reparte los dividendos directamente al inversor cada mes",
                  "Reinvierte los dividendos recibidos internamente, sin generar tributación inmediata para el inversor",
                  "No puede invertir en empresas que reparten dividendos",
                  "Tiene un TER obligatoriamente más alto",
                ],
                correct: 1,
                explain:
                  "Los fondos de acumulación reinvierten automáticamente los dividendos dentro del propio fondo, reflejándose en un mayor valor liquidativo, sin que el inversor tribute por ellos hasta que finalmente venda o reembolse sus participaciones.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Prefiero un fondo que reparta dividendos directamente, así tengo ingresos periódicos sin tener que vender nada.\" Desde una perspectiva de eficiencia fiscal (no de preferencias personales de liquidez, que son legítimas), ¿qué le explicarías sobre la diferencia con un fondo de acumulación?",
                solution:
                  "Desde una perspectiva puramente de eficiencia fiscal, un fondo de acumulación suele ser más eficiente que uno de reparto para un inversor que no necesita esos ingresos periódicos de forma inmediata: al reinvertir automáticamente los dividendos dentro del fondo, se difiere la tributación hasta el momento en que finalmente se venda o reembolse la inversión, en vez de tributar cada año sobre los dividendos recibidos (con su correspondiente retención inmediata) para luego, probablemente, tener que reinvertir manualmente esos dividendos netos (ya con el impuesto descontado) en el mismo u otro activo. Es importante remarcar que esto no significa que un fondo de reparto sea una mala elección en términos absolutos: para un inversor que sí necesita ingresos periódicos regulares (por ejemplo, alguien ya en la fase de disfrute de su independencia financiera, no en la fase de acumulación como probablemente sea tu caso ahora, con tu horizonte de 20 años), un fondo de distribución podría encajar mejor con sus necesidades prácticas de liquidez, aunque implique una tributación menos eficiente en términos de diferimiento fiscal comparado con un fondo de acumulación.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor recibe 1.200€ brutos en dividendos a lo largo de un año, con una retención del 19% practicada en el momento del pago. Calcula el importe neto que recibe efectivamente en su cuenta, y el importe de la retención practicada.",
                solution:
                  "Retención: 1.200€ × 0,19 = 228€.\n\nImporte neto recibido: 1.200€ − 228€ = 972€.\n\nEn su declaración de la renta anual, los 1.200€ brutos (no los 972€ netos) se integrarán en su base del ahorro junto con el resto de rendimientos y ganancias patrimoniales de ese año, y los 228€ ya retenidos se descontarán del importe final a pagar (o generarán una devolución si la retención resultó superior a lo finalmente debido según los tramos aplicables al conjunto de rendimientos del año).",
              },
            ],
            reflection:
              "Dado tu horizonte de 20 años en fase de acumulación de capital (no de disfrute inmediato de rentas), ¿te parece más coherente con tu estrategia optar por fondos de acumulación (reinvirtiendo automáticamente y difiriendo impuestos) o de distribución (recibiendo ingresos periódicos que tendrías que reinvertir manualmente)? ¿Por qué?",
          },
        },
        {
          id: "m7l5",
          title: "La declaración de la renta y tus inversiones",
          simple:
            "Al hacer tu declaración de la renta anual, tendrás que incluir las ganancias (o pérdidas) que hayas materializado ese año vendiendo inversiones, así como los dividendos e intereses recibidos. Conocer qué apartados te afectan te ayuda a hacer una declaración correcta y, potencialmente, a planificar mejor tus decisiones fiscales.",
          technical: `Al preparar la declaración de la renta anual en España (habitualmente entre abril y junio del año siguiente al ejercicio fiscal correspondiente, a través del sistema Renta WEB de la Agencia Tributaria), un inversor con actividad en fondos, ETFs, acciones o bonos debe prestar atención principalmente a estos apartados:

- Ganancias y pérdidas patrimoniales derivadas de la transmisión de elementos patrimoniales: aquí se declaran las ventas de acciones, ETFs, fondos de inversión (en caso de reembolso, no de traspaso, como se vio en la Lección 7.2) y otros activos financieros, con su correspondiente cálculo de plusvalía o minusvalía.

- Rendimientos del capital mobiliario: aquí se declaran los dividendos recibidos y los intereses (cupones) de bonos, depósitos y cuentas de ahorro.

- Compensación de bases negativas de ejercicios anteriores: en caso de tener pérdidas de años anteriores pendientes de compensar (dentro del plazo legal, Lección 7.3), este es el apartado donde se aplica esa compensación contra las ganancias del ejercicio actual.

Un aspecto muy relevante desde el punto de vista práctico: en la mayoría de los casos, si se opera a través de un bróker o entidad financiera española, esta entidad envía directamente a la Agencia Tributaria la información sobre las operaciones realizadas (ventas, dividendos, retenciones practicadas), y gran parte de estos datos aparecen ya precargados automáticamente en el borrador de la declaración de la renta. Aun así, es responsabilidad del contribuyente revisar cuidadosamente que esta información precargada sea correcta y completa, especialmente si se ha operado también con brókeres extranjeros (que pueden no reportar automáticamente a Hacienda de la misma forma), donde el inversor debe declarar manualmente esos rendimientos y operaciones.

También existe la obligación, para determinados casos y umbrales de patrimonio o activos en el extranjero, de presentar el Modelo 720 (declaración informativa de bienes y derechos situados en el extranjero), que es una obligación distinta e independiente de la propia declaración de la renta, y que conviene verificar si aplica según las circunstancias personales concretas de cada inversor (por ejemplo, si se invierte a través de un bróker extranjero con custodia de valores fuera de España, superando ciertos umbrales de valor establecidos por la normativa).`,
          numericExample:
            "Un inversor, a lo largo de un año, ha vendido participaciones de un fondo con una ganancia de 3.500€ (tras aplicar el régimen de traspasos correctamente en operaciones intermedias, según lo visto en la Lección 7.2), ha recibido 600€ de dividendos brutos de unas acciones que mantiene, y tiene 900€ de pérdidas pendientes de compensar de un ejercicio anterior. En su declaración, incluirá los 3.500€ de ganancia patrimonial y los 600€ de rendimientos del capital mobiliario (dividendos) como ingresos de la base del ahorro, y podrá aplicar la compensación de los 900€ de pérdidas pendientes contra esas ganancias, reduciendo su base imponible del ahorro final a: 3.500€ + 600€ − 900€ = 3.200€.",
          realExample:
            "La Agencia Tributaria, a través de la información que reciben de los brókeres y entidades financieras españolas (obligadas a reportar estas operaciones), suele precargar automáticamente en el borrador de la renta gran parte de los datos de ventas de fondos, acciones, y dividendos percibidos a través de entidades españolas, facilitando el proceso al contribuyente — aunque, como se ha señalado, sigue siendo responsabilidad del contribuyente verificar que esa información precargada sea correcta y esté completa, especialmente si ha operado también con brókeres extranjeros no sujetos a esa obligación automática de reporte a Hacienda.",
          analogy:
            "Preparar la declaración de la renta con inversiones es como hacer el balance final de un juego de mesa largo con múltiples rondas: no basta con mirar el resultado de la última ronda (el último movimiento), sino que hay que sumar correctamente todas las ganancias, pérdidas, y \"bonificaciones\" (compensaciones de pérdidas anteriores) acumuladas a lo largo de todo el año, para llegar al resultado neto final sobre el que se calculará lo que realmente se debe.",
          mistakes: [
            "Confiar ciegamente en los datos precargados en el borrador de la renta sin revisarlos, especialmente si se ha operado con brókeres extranjeros que pueden no reportar automáticamente a la Agencia Tributaria española.",
            "Olvidar aplicar la compensación de pérdidas de ejercicios anteriores pendientes, dejando pasar una reducción legítima de la carga fiscal a la que se tiene derecho.",
            "No informarse sobre si aplican obligaciones adicionales como el Modelo 720 (declaración de bienes en el extranjero) según las circunstancias personales concretas, especialmente relevante si se invierte a través de brókeres extranjeros con custodia fuera de España.",
          ],
          summary:
            "La declaración de la renta anual recoge las ganancias y pérdidas patrimoniales por venta de inversiones, los dividendos e intereses recibidos, y permite aplicar la compensación de pérdidas pendientes de ejercicios anteriores. Gran parte de esta información suele precargarse automáticamente si se opera con brókeres españoles, pero sigue siendo responsabilidad del contribuyente verificarla, especialmente en caso de operar también con entidades extranjeras, donde pueden aplicar obligaciones adicionales de declaración.",
          exercises: {
            quiz: [
              {
                q: "En la declaración de la renta, las ventas de acciones, ETFs o fondos (por reembolso, no por traspaso) se declaran en el apartado de:",
                options: [
                  "Rendimientos del trabajo",
                  "Ganancias y pérdidas patrimoniales derivadas de la transmisión de elementos patrimoniales",
                  "Deducciones por vivienda habitual",
                  "Retenciones sobre el salario",
                ],
                correct: 1,
                explain:
                  "Las ventas de activos financieros con ganancia o pérdida se declaran en el apartado específico de ganancias y pérdidas patrimoniales, dentro de la base imponible del ahorro.",
              },
              {
                q: "Los datos precargados automáticamente en el borrador de la renta sobre operaciones de inversión, procedentes de brókeres españoles:",
                options: [
                  "Siempre son correctos y no requieren ninguna revisión por parte del contribuyente",
                  "Deben revisarse cuidadosamente por el contribuyente, especialmente si también se ha operado con brókeres extranjeros",
                  "Nunca se precargan automáticamente en ningún caso",
                  "Solo aplican a inversores con patrimonio superior a 1 millón de euros",
                ],
                correct: 1,
                explain:
                  "Aunque los brókeres españoles suelen reportar automáticamente a Hacienda, sigue siendo responsabilidad del contribuyente verificar que esa información precargada sea correcta y completa, especialmente si ha operado también con entidades extranjeras que pueden no reportar de la misma forma.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Como el borrador de mi declaración ya viene todo precargado automáticamente, no necesito revisar nada, simplemente lo presento tal cual.\" ¿Qué riesgos le señalarías sobre esta forma de proceder, especialmente si opera con brókeres extranjeros?",
                solution:
                  "Aunque es cierto que los brókeres y entidades financieras españolas suelen reportar automáticamente sus operaciones a la Agencia Tributaria, facilitando el precargado del borrador, esto no cubre necesariamente toda su actividad de inversión, especialmente si opera también a través de brókeres extranjeros (algo cada vez más habitual, dado el acceso a plataformas internacionales), que pueden no tener la misma obligación automática de reporte a Hacienda española. En esos casos, sería responsabilidad del propio contribuyente declarar manualmente esas operaciones, dividendos, e intereses no reflejados automáticamente en el borrador. Presentar la declaración sin verificar esta información podría llevar a una declaración incompleta o incorrecta, con las consecuentes implicaciones (posibles requerimientos posteriores de la Agencia Tributaria, recargos, etc.) si se detecta esa falta de declaración de rendimientos no reportados automáticamente. Además, convendría verificar también si, según sus circunstancias concretas (por ejemplo, tener valores custodiados en el extranjero superando ciertos umbrales), le aplica alguna obligación informativa adicional como el Modelo 720.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tiene, en un mismo ejercicio fiscal: ganancia patrimonial por venta de fondos de 6.200€, dividendos brutos recibidos de 950€, y 1.500€ de pérdidas pendientes de compensar de un ejercicio anterior (dentro del plazo legal). Calcula la base imponible del ahorro final de ese ejercicio tras aplicar todas las compensaciones correspondientes.",
                solution:
                  "Suma de ganancias y rendimientos del ahorro del ejercicio: 6.200€ (ganancia patrimonial) + 950€ (dividendos) = 7.150€.\n\nCompensación de pérdidas pendientes de ejercicios anteriores: 7.150€ − 1.500€ = 5.650€.\n\nLa base imponible del ahorro final de ese ejercicio, tras aplicar la compensación de pérdidas pendientes, sería de 5.650€, que es la cantidad sobre la que se calcularía el impuesto correspondiente según los tramos vigentes de la base del ahorro para ese año fiscal.",
              },
            ],
            reflection:
              "¿Habías pensado antes en la declaración de la renta como una parte integral de tu estrategia de inversión, o la veías como un trámite completamente separado? ¿Qué aspectos de este módulo (traspasos, compensación de pérdidas, tributación de dividendos) crees que más influirán en cómo planifiques tus decisiones de inversión de aquí en adelante?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 7",
        passScore: 70,
        questions: [
          {
            q: "Las ganancias patrimoniales por venta de acciones, ETFs o fondos en España tributan dentro de:",
            options: [
              "La base imponible general, junto con el salario",
              "La base imponible del ahorro, con una escala progresiva por tramos",
              "No tributan en ningún caso",
              "Un impuesto exclusivamente municipal",
            ],
            correct: 1,
            topic: "Cómo tributan las inversiones",
          },
          {
            q: "La ganancia patrimonial tributable al vender una inversión es:",
            options: [
              "El importe total recibido en la venta",
              "La diferencia entre el precio de venta y el precio de compra (más gastos asociados)",
              "Siempre un porcentaje fijo idéntico para todos los inversores",
              "El valor nominal original de la inversión",
            ],
            correct: 1,
            topic: "Cómo tributan las inversiones",
          },
          {
            q: "El régimen de traspasos entre fondos de inversión en España permite:",
            options: [
              "Evitar pagar impuestos para siempre",
              "Cambiar de un fondo a otro sin tributación inmediata, siempre que el dinero no pase por la cuenta corriente del inversor",
              "Solo se aplica a los ETFs, no a los fondos tradicionales",
              "Solo para inversores institucionales",
            ],
            correct: 1,
            topic: "Traspasos entre fondos",
          },
          {
            q: "¿Aplica el régimen de traspasos sin tributación inmediata a los ETFs?",
            options: [
              "Sí, exactamente igual que a los fondos tradicionales",
              "No, es una particularidad específica de los fondos de inversión tradicionales",
              "Solo si el ETF está denominado en euros",
              "Solo para operaciones superiores a 50.000€",
            ],
            correct: 1,
            topic: "Traspasos entre fondos",
          },
          {
            q: "La compensación de pérdidas y ganancias patrimoniales permite:",
            options: [
              "Eliminar por completo cualquier obligación fiscal futura",
              "Reducir la base imponible del ahorro compensando pérdidas con ganancias del mismo año, y arrastrar el remanente a años futuros dentro de un plazo legal",
              "Solo se aplica a los rendimientos del trabajo",
              "Es ilegal en España",
            ],
            correct: 1,
            topic: "Compensación de pérdidas y ganancias",
          },
          {
            q: "La \"regla de los dos meses\" para valores cotizados implica que:",
            options: [
              "Hay que esperar dos meses para poder vender cualquier inversión",
              "Si se recompra un activo idéntico o similar dentro de los 2 meses siguientes o anteriores a una venta con pérdida, esa pérdida no es fiscalmente computable",
              "Solo aplica a los fondos de renta fija",
              "Permite duplicar la pérdida fiscal si se recompra rápidamente",
            ],
            correct: 1,
            topic: "Compensación de pérdidas y ganancias",
          },
          {
            q: "Un fondo indexado de acumulación, respecto a los dividendos que reciben las empresas subyacentes:",
            options: [
              "Los reparte directamente al inversor cada mes, con retención inmediata",
              "Los reinvierte internamente, sin generar tributación inmediata para el inversor",
              "No puede invertir en empresas que repartan dividendos",
              "Los devuelve automáticamente a las empresas emisoras",
            ],
            correct: 1,
            topic: "Dividendos e intereses",
          },
          {
            q: "Un inversor tiene una ganancia patrimonial de 5.800€ por venta de fondos, dividendos brutos de 700€, y 1.200€ de pérdidas pendientes de compensar de un año anterior. ¿Cuál es la base imponible del ahorro final tras aplicar la compensación?",
            options: ["5.300€", "5.500€", "6.500€", "7.700€"],
            correct: 0,
            topic: "La declaración de la renta (cálculo)",
          },
        ],
      },
    },
    {
      id: "m8",
      number: 8,
      title: "Cómo analizar una empresa",
      objective:
        "Aprender a leer los indicadores fundamentales que se usan para evaluar una empresa cotizada: PER, ROE, ROIC, flujo de caja, márgenes y deuda, y entender los principios básicos de valoración — útil tanto si en algún momento inviertes en acciones individuales como para entender mejor qué compone un índice.",
      time: "6 sesiones de ~35 min",
      prereq: "Módulos 0 a 7 completos, especialmente el Módulo 1 (cómo funciona una empresa).",
      learn:
        "A interpretar los principales ratios financieros usados para evaluar empresas cotizadas, a distinguir beneficio contable de caja real, y a entender los principios básicos (y las limitaciones) de la valoración de empresas.",
      lessons: [
        {
          id: "m8l1",
          title: "El PER: precio sobre beneficio",
          simple:
            "El PER (Price to Earnings Ratio, o ratio precio-beneficio) es uno de los indicadores más citados para valorar una empresa: compara el precio de la acción con el beneficio que genera esa empresa por acción, dando una idea de cuántos años de beneficio actual estás \"pagando\" al comprarla.",
          technical: `El PER se calcula dividiendo el precio actual de la acción entre el beneficio por acción (BPA, o EPS en inglés, Earnings Per Share) de la empresa, habitualmente de los últimos 12 meses (PER histórico) o de las estimaciones de beneficio futuro (PER forward o proyectado).

PER = Precio de la acción / Beneficio por acción

Una forma intuitiva de interpretarlo: si una empresa tiene un PER de 20, significa que, al precio actual, estás pagando 20 veces el beneficio anual que genera esa empresa por cada acción — o, dicho de otra forma, que si el beneficio se mantuviera constante (una simplificación, ya que en la práctica los beneficios cambian con el tiempo), tardarías aproximadamente 20 años en "recuperar" el precio pagado únicamente a través del beneficio generado por la empresa.

Un PER más alto puede reflejar que el mercado espera un crecimiento futuro de beneficios más rápido para esa empresa (justificando pagar más por cada euro de beneficio actual), mientras que un PER más bajo puede reflejar expectativas de crecimiento más modestas, o también puede señalar que el mercado percibe riesgos específicos sobre esa empresa que justifican un precio más conservador respecto a su beneficio actual.

Es fundamental entender las limitaciones del PER como herramienta aislada de análisis:

- No tiene sentido comparar el PER de empresas de sectores muy distintos sin contexto: sectores con crecimiento esperado más alto (como ciertas tecnológicas) suelen cotizar, históricamente, con PER más elevados que sectores más maduros y estables (como utilities o banca tradicional), sin que eso signifique necesariamente que unas estén "más caras" que otras en un sentido absoluto.
- El beneficio contable (el denominador del PER) puede estar distorsionado por partidas puntuales o no recurrentes (ventas de activos, ajustes contables específicos de un año), lo que puede hacer que el PER de un año concreto no sea representativo de la capacidad de generación de beneficios "normal" de la empresa.
- Un PER muy bajo no es automáticamente sinónimo de "oportunidad barata": puede reflejar, de forma justificada, problemas fundamentales serios de la empresa que el mercado ya está anticipando.

Por estas limitaciones, el PER se suele usar como un punto de partida orientativo, no como una herramienta de decisión aislada y suficiente por sí sola.`,
          numericExample:
            "Una empresa tiene un precio de acción de 60€ y genera un beneficio por acción de 3€ al año. Su PER es 60€ / 3€ = 20. Esto significa que, al precio actual, el mercado está pagando 20 veces el beneficio anual actual por cada acción. Si otra empresa de un sector similar tiene un precio de 40€ y un beneficio por acción de 4€, su PER sería 40€ / 4€ = 10 — un PER más bajo, que podría reflejar, según el contexto, o bien una oportunidad de valoración más atractiva, o bien expectativas de crecimiento futuro más limitadas, o riesgos específicos que el mercado está descontando en el precio.",
          realExample:
            "Empresas tecnológicas de alto crecimiento han cotizado, en distintos periodos históricos, con PER muy superiores a la media del mercado (a veces por encima de 40-50, o incluso sin beneficios positivos en fases muy tempranas), reflejando expectativas de crecimiento de beneficios muy elevadas en el futuro. Empresas de sectores más maduros y estables, como ciertas utilities (empresas de suministro eléctrico o de agua), suelen cotizar históricamente con PER más bajos y estables (a menudo entre 10 y 15), reflejando expectativas de crecimiento más modestas pero también, habitualmente, mayor estabilidad y previsibilidad de sus beneficios.",
          analogy:
            "El PER es como el número de años de alquiler que estarías dispuesto a pagar por adelantado para comprar un piso que genera un alquiler anual determinado: si pagas 20 años de alquiler por adelantado (PER 20), esperas que ese piso siga generando ese alquiler (o más) durante mucho tiempo para que la compra merezca la pena. Un PER más bajo sería como pagar menos años de alquiler por adelantado, lo cual podría parecer más atractivo, salvo que hubiera una razón de fondo (por ejemplo, dudas sobre si el piso seguirá siendo alquilable en el futuro) que justificara ese precio más bajo.",
          mistakes: [
            "Comparar el PER de empresas de sectores muy distintos sin tener en cuenta las diferencias estructurales de crecimiento y riesgo esperado entre esos sectores.",
            "Asumir automáticamente que un PER bajo significa \"oportunidad barata\" sin investigar por qué el mercado está valorando esa empresa con ese PER concreto.",
            "Usar el PER como único criterio de decisión, sin considerar otros indicadores complementarios (los que se ven en el resto de este módulo) ni el contexto completo de la empresa.",
          ],
          summary:
            "El PER compara el precio de una acción con el beneficio por acción que genera la empresa, dando una idea aproximada de cuánto se está pagando por cada euro de beneficio actual. Es útil como punto de partida orientativo, pero tiene limitaciones importantes: no es comparable directamente entre sectores distintos, puede estar distorsionado por partidas contables puntuales, y no debe usarse de forma aislada sin considerar otros indicadores y el contexto completo de la empresa.",
          exercises: {
            quiz: [
              {
                q: "El PER (Price to Earnings Ratio) se calcula como:",
                options: [
                  "Beneficio por acción dividido entre el precio de la acción",
                  "Precio de la acción dividido entre el beneficio por acción",
                  "El total de ingresos de la empresa dividido entre su capitalización bursátil",
                  "La deuda total de la empresa dividido entre sus activos",
                ],
                correct: 1,
                explain:
                  "El PER se calcula dividiendo el precio actual de la acción entre el beneficio por acción, indicando cuántas veces el beneficio anual se está pagando por cada acción.",
              },
              {
                q: "Un PER muy bajo comparado con la media del mercado:",
                options: [
                  "Es siempre y automáticamente una oportunidad de compra atractiva",
                  "Puede reflejar tanto una oportunidad de valoración como problemas fundamentales que el mercado ya está anticipando; requiere más análisis",
                  "Significa que la empresa nunca reparte dividendos",
                  "Es ilegal según la normativa de mercados",
                ],
                correct: 1,
                explain:
                  "Un PER bajo no debe interpretarse automáticamente como una ganga: puede reflejar expectativas de crecimiento modestas o riesgos específicos que el mercado ya está descontando en el precio, y requiere un análisis más profundo antes de sacar conclusiones.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Esta empresa tecnológica tiene un PER de 45, mientras que esta empresa eléctrica tiene un PER de 12, así que la eléctrica es claramente una mejor inversión porque está más barata.\" ¿Qué matices le pondrías a esta comparación directa?",
                solution:
                  "Comparar directamente el PER de empresas de sectores tan distintos (tecnología frente a utilities/eléctricas) sin más contexto es una simplificación excesiva. Los sectores tecnológicos de alto crecimiento suelen cotizar, de forma estructural y por su propia naturaleza, con PER más elevados que sectores maduros y estables como las eléctricas, precisamente porque el mercado espera un crecimiento de beneficios futuro más rápido en el primer caso, y una mayor estabilidad (pero menor crecimiento) en el segundo. Un PER de 45 en una empresa tecnológica de alto crecimiento podría estar perfectamente justificado si sus beneficios efectivamente crecen a un ritmo elevado en los próximos años, mientras que un PER de 12 en una eléctrica podría ser coherente con su perfil de crecimiento más limitado pero estable. La comparación relevante del PER suele hacerse dentro del mismo sector (entre empresas comparables), o de una empresa respecto a su propia media histórica, no directamente entre sectores con dinámicas de negocio fundamentalmente distintas.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene un precio de acción de 85€ y un beneficio por acción de 5€. Calcula su PER. Si el beneficio por acción crece un 20% el año siguiente (sin que el precio de la acción cambie), calcula el nuevo PER resultante.",
                solution:
                  "PER inicial: 85€ / 5€ = 17.\n\nNuevo beneficio por acción tras el crecimiento del 20%: 5€ × 1,20 = 6€.\n\nNuevo PER (con el mismo precio de 85€): 85€ / 6€ ≈ 14,17.\n\nEste ejercicio ilustra cómo, si el precio de la acción se mantiene constante pero el beneficio crece, el PER baja (la empresa se vuelve, en cierto sentido, \"más barata\" en relación a su beneficio actual, sin que su precio haya cambiado) — o, visto de otra forma, cómo un crecimiento de beneficios puede justificar, con el tiempo, que el precio de la acción también suba manteniendo un PER estable, si el mercado sigue valorando la empresa con un múltiplo similar sobre sus beneficios crecientes.",
              },
            ],
            reflection:
              "¿Conocías el PER antes de esta lección? ¿Cómo crees que podrías usarlo de forma útil (como punto de partida, no como única herramienta) si en algún momento decides analizar una empresa concreta para invertir en acciones individuales?",
          },
        },
        {
          id: "m8l2",
          title: "ROE y ROIC: rentabilidad sobre el capital",
          simple:
            "El ROE mide cuánto beneficio genera una empresa en relación al dinero que han aportado sus accionistas. El ROIC mide algo parecido, pero considerando todo el capital invertido en el negocio (accionistas más deuda). Ambos ayudan a entender qué tan eficiente es una empresa generando beneficios con el capital que tiene disponible.",
          technical: `El ROE (Return on Equity, rentabilidad sobre el patrimonio neto o fondos propios) mide la capacidad de una empresa de generar beneficio en relación al capital que han aportado específicamente sus accionistas (el patrimonio neto o equity contable de la empresa).

ROE = Beneficio neto / Patrimonio neto

Un ROE alto indica que la empresa genera mucho beneficio en relación al capital de los accionistas invertido en el negocio, lo cual, en principio, es una señal positiva de eficiencia en el uso de ese capital. Sin embargo, hay que tener una precaución importante: el ROE puede inflarse artificialmente si la empresa usa mucha deuda (apalancamiento financiero) en vez de capital propio para financiar sus operaciones, ya que la deuda no forma parte del denominador (patrimonio neto) del cálculo, pero sí puede contribuir a generar el beneficio del numerador — es decir, una empresa muy endeudada podría mostrar un ROE elevado que, en realidad, refleja en parte un mayor riesgo financiero (por el apalancamiento), no necesariamente una eficiencia operativa superior.

Para complementar esta limitación, se utiliza el ROIC (Return on Invested Capital, rentabilidad sobre el capital invertido), que considera todo el capital empleado en el negocio, tanto el aportado por los accionistas como el financiado con deuda:

ROIC = Beneficio operativo neto después de impuestos (NOPAT) / Capital invertido total (patrimonio neto + deuda financiera)

El ROIC ofrece una visión más completa de la eficiencia operativa real de la empresa en generar beneficio con todo el capital que emplea en su actividad, independientemente de cómo se haya financiado ese capital (con recursos propios o con deuda), lo que lo hace especialmente útil para comparar empresas con distintos niveles de apalancamiento financiero.

Una comparación relevante y utilizada por muchos analistas es contrastar el ROIC de una empresa con su coste de capital (el coste medio ponderado de financiar ese capital, considerando tanto el coste de la deuda como el coste de oportunidad exigido por los accionistas): si el ROIC supera de forma sostenida el coste de capital, la empresa está, en términos económicos, creando valor con cada euro adicional que invierte en su negocio; si el ROIC está por debajo del coste de capital, la empresa podría estar, en cierto sentido, destruyendo valor económico con sus inversiones, aunque contablemente muestre beneficios positivos.`,
          numericExample:
            "Una empresa tiene un beneficio neto de 40 millones de euros y un patrimonio neto (capital de los accionistas) de 200 millones de euros. Su ROE es 40/200 = 20%. Otra empresa del mismo sector tiene el mismo beneficio neto de 40 millones, pero con un patrimonio neto de solo 100 millones (porque financia una parte mayor de su actividad con deuda). Su ROE sería 40/100 = 40%, aparentemente mucho más rentable. Sin embargo, si se calcula el ROIC de ambas empresas (considerando también la deuda en el denominador), es posible que la diferencia se reduzca significativamente o incluso se invierta, revelando que la segunda empresa no es necesariamente más eficiente operativamente, sino que simplemente utiliza más apalancamiento financiero, lo cual también implica mayor riesgo financiero.",
          realExample:
            "Empresas con modelos de negocio que requieren poco capital físico intensivo (como muchas empresas de software o servicios digitales) suelen mostrar, de forma estructural, ROE y ROIC más altos que empresas de sectores intensivos en capital (como empresas industriales, de infraestructuras, o utilities), que necesitan invertir mucho más capital en activos físicos (fábricas, redes de distribución, maquinaria) para generar cada euro de beneficio.",
          analogy:
            "El ROE es como medir cuánto dinero gana un pequeño negocio en relación al dinero que puso el dueño de su propio bolsillo, sin tener en cuenta si también pidió un préstamo bancario grande para montar el negocio. El ROIC sería medir cuánto gana el negocio en relación a todo el dinero empleado en montarlo, tanto el propio como el prestado — dando una imagen más completa y comparable de si el negocio en sí es realmente eficiente generando beneficio con los recursos totales que utiliza, más allá de cómo se financiaron esos recursos.",
          mistakes: [
            "Comparar el ROE de dos empresas sin considerar sus niveles de deuda respectivos, ya que un ROE elevado puede reflejar, en parte, mayor apalancamiento financiero en vez de mayor eficiencia operativa real.",
            "Ignorar el ROIC como complemento al ROE, especialmente al comparar empresas con estructuras de financiación (deuda frente a capital propio) muy distintas entre sí.",
            "No comparar el ROIC con el coste de capital de la empresa, que es lo que realmente indica si la empresa está creando o destruyendo valor económico con las inversiones que realiza.",
          ],
          summary:
            "El ROE mide la rentabilidad generada en relación al capital aportado por los accionistas, pero puede inflarse por el uso de deuda. El ROIC ofrece una visión más completa al considerar todo el capital empleado (propio y de deuda), siendo más adecuado para comparar empresas con distintos niveles de apalancamiento financiero. Comparar el ROIC con el coste de capital de la empresa ayuda a determinar si realmente está creando valor económico con sus inversiones.",
          exercises: {
            quiz: [
              {
                q: "El ROE (Return on Equity) mide:",
                options: [
                  "La rentabilidad en relación a todo el capital invertido, incluyendo deuda",
                  "La rentabilidad generada en relación al patrimonio neto (capital aportado por los accionistas)",
                  "El precio de la acción dividido entre el beneficio por acción",
                  "El total de dividendos repartidos por la empresa",
                ],
                correct: 1,
                explain:
                  "El ROE se calcula como el beneficio neto dividido entre el patrimonio neto (fondos propios), midiendo la eficiencia con la que la empresa genera beneficio en relación al capital de los accionistas.",
              },
              {
                q: "Una limitación importante del ROE es que:",
                options: [
                  "No puede calcularse para empresas cotizadas",
                  "Puede inflarse artificialmente si la empresa usa mucha deuda, sin reflejar necesariamente mayor eficiencia operativa real",
                  "Solo se aplica a empresas del sector tecnológico",
                  "Siempre es idéntico al PER",
                ],
                correct: 1,
                explain:
                  "Como el patrimonio neto (denominador del ROE) no incluye la deuda, una empresa muy apalancada financieramente puede mostrar un ROE elevado que refleja, en parte, mayor riesgo financiero, no necesariamente mayor eficiencia operativa pura.",
              },
            ],
            cases: [
              {
                prompt:
                  "Dos empresas del mismo sector tienen un ROE idéntico del 25%. Sin embargo, la Empresa M tiene muy poca deuda, mientras que la Empresa N tiene un nivel de deuda muy elevado. ¿Deberían considerarse ambas empresas igual de atractivas solo por tener el mismo ROE? Explica por qué, conectando con el concepto de ROIC.",
                solution:
                  "No deberían considerarse automáticamente igual de atractivas solo por compartir el mismo ROE del 25%, precisamente porque ese indicador no refleja el nivel de riesgo financiero asumido para lograr esa rentabilidad. La Empresa N, al tener un nivel de deuda mucho más elevado, probablemente muestre un ROIC más bajo que la Empresa M cuando se considera todo el capital empleado (propio más deuda) en el cálculo, lo que indicaría que su eficiencia operativa real (independiente de cómo se financia) es inferior a la de la Empresa M, y que su ROE elevado se explica en mayor medida por el apalancamiento financiero. Además, un mayor nivel de deuda implica mayor riesgo financiero: en un escenario de dificultades económicas o subida de tipos de interés (Módulo 4), la Empresa N tendría una carga de intereses más pesada que gestionar, lo que podría poner en riesgo su estabilidad financiera de una forma que no afectaría en la misma medida a la Empresa M, con menos deuda. El ROE por sí solo, sin el contexto del ROIC y del nivel de deuda, puede dar una imagen incompleta o incluso engañosa de la calidad real del negocio.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene un beneficio neto de 18 millones de euros y un patrimonio neto de 90 millones de euros. Calcula su ROE. Si además tiene una deuda financiera de 60 millones de euros, calcula su ROIC de forma simplificada usando la fórmula: ROIC = Beneficio neto / (Patrimonio neto + Deuda financiera) (una simplificación con fines ilustrativos, ya que el cálculo riguroso de ROIC usa el NOPAT en vez del beneficio neto directamente).",
                solution:
                  "ROE: 18 / 90 = 20%.\n\nROIC simplificado: 18 / (90 + 60) = 18 / 150 = 12%.\n\nSe observa que el ROIC (12%) es sensiblemente inferior al ROE (20%), precisamente porque el ROIC reparte el mismo beneficio entre una base de capital total mayor (que incluye también la deuda de 60 millones), ofreciendo una imagen más completa —y en este caso más conservadora— de la rentabilidad real generada sobre todos los recursos empleados en el negocio, no solo sobre el capital aportado por los accionistas.",
              },
            ],
            reflection:
              "¿Te habías fijado antes en si una empresa usa mucha o poca deuda al evaluar indicadores como el ROE? ¿Cómo crees que esta distinción entre ROE y ROIC te ayudará a interpretar con más matices los indicadores de rentabilidad de una empresa en el futuro?",
          },
        },
        {
          id: "m8l3",
          title: "Flujo de caja: la diferencia entre beneficio y caja real",
          simple:
            "El beneficio contable de una empresa no siempre coincide con el dinero real que entra y sale de su caja. El flujo de caja mide ese movimiento real de efectivo, y es, para muchos analistas, un indicador tan o más importante que el beneficio contable para evaluar la salud financiera real de una empresa.",
          technical: `El beneficio contable (o beneficio neto) de una empresa se calcula según normas contables que incluyen partidas que no representan movimientos reales de efectivo en ese momento, como las amortizaciones (el reconocimiento contable gradual del desgaste de un activo, como maquinaria o edificios, a lo largo de su vida útil) o ciertos ajustes contables por valoración de activos.

El flujo de caja (cash flow) mide, en cambio, el movimiento real de efectivo que entra y sale de la empresa en un periodo determinado, independientemente de las convenciones contables del beneficio. Se distinguen habitualmente varios tipos de flujo de caja:

- Flujo de caja operativo: el efectivo generado (o consumido) por las operaciones habituales del negocio (cobros a clientes, pagos a proveedores y empleados, etc.), sin incluir inversiones de capital ni financiación.
- Flujo de caja libre (Free Cash Flow, FCF): el flujo de caja operativo menos las inversiones de capital (capex, gastos en activos como maquinaria, infraestructura, o tecnología necesarios para mantener o hacer crecer el negocio). Representa, de forma simplificada, el efectivo que la empresa genera y que queda realmente disponible después de mantener y hacer crecer su negocio, pudiendo destinarse a pagar dividendos, recomprar acciones, reducir deuda, o acumularse como reserva de caja.

La razón por la que muchos analistas prestan tanta (o más) atención al flujo de caja libre que al beneficio contable es que el beneficio puede "maquillarse" (dentro de los límites legales de la normativa contable) de formas que no reflejan necesariamente la generación real de efectivo del negocio, mientras que el flujo de caja, al medir movimientos reales de dinero, es más difícil de distorsionar de la misma manera. Una empresa puede mostrar beneficio contable positivo durante varios periodos y, al mismo tiempo, tener un flujo de caja libre negativo o muy débil (por ejemplo, por necesitar invertir mucho capital en crecer, o por problemas de cobro a sus clientes que generan un desfase entre el beneficio "reconocido" contablemente y el efectivo realmente cobrado) — una señal que conviene investigar con atención, ya que, a largo plazo, una empresa necesita generar efectivo real, no solo beneficio contable, para sostener sus operaciones, pagar dividendos, o reducir su deuda.`,
          numericExample:
            "Una empresa reporta un beneficio neto contable de 10 millones de euros en un año. Sin embargo, al analizar su flujo de caja, se observa que sus clientes le deben (cuentas por cobrar) una cantidad significativamente mayor que el año anterior, y que ha tenido que invertir 8 millones de euros en nueva maquinaria (capex) para mantener su capacidad productiva. Su flujo de caja operativo real podría ser, por ejemplo, de solo 6 millones de euros (por el retraso en los cobros), y su flujo de caja libre (tras restar los 8 millones de capex) podría llegar a ser negativo (6 − 8 = −2 millones), a pesar de haber reportado un beneficio contable positivo de 10 millones — una discrepancia que merecería una investigación más profunda por parte de un inversor atento.",
          realExample:
            "Empresas en fase de fuerte crecimiento (por ejemplo, muchas empresas tecnológicas en sus primeros años como cotizadas) a menudo muestran beneficio contable negativo o muy reducido, precisamente porque están invirtiendo agresivamente en crecer (marketing, contratación, desarrollo de producto), pero pueden tener un flujo de caja operativo saludable si su modelo de negocio genera efectivo de forma eficiente por cada cliente o unidad de producto vendido, lo cual algunos inversores consideran una señal más relevante de la viabilidad futura del negocio que el beneficio contable de corto plazo.",
          analogy:
            "El beneficio contable es como la nota final de un examen calculada según ciertas reglas específicas de puntuación, que pueden incluir puntos \"teóricos\" no completamente correlacionados con el rendimiento real. El flujo de caja es como comprobar directamente, de forma tangible, cuánto dinero real tienes en el bolsillo después de todos los ingresos y gastos efectivos del periodo — una medida más difícil de \"maquillar\" con ajustes contables específicos, y en cierto sentido más honesta sobre la situación económica real del negocio.",
          mistakes: [
            "Fijarse únicamente en el beneficio contable de una empresa sin revisar también su flujo de caja, especialmente su flujo de caja libre.",
            "Asumir que un beneficio contable positivo implica automáticamente que la empresa está generando efectivo real de forma saludable.",
            "No investigar las razones detrás de una discrepancia notable entre beneficio contable y flujo de caja operativo, que puede señalar tanto problemas potenciales (dificultades de cobro a clientes) como, en otros casos, simplemente una fase de fuerte inversión para crecer que no necesariamente es negativa a largo plazo.",
          ],
          summary:
            "El flujo de caja mide el movimiento real de efectivo de una empresa, a diferencia del beneficio contable, que puede incluir partidas no monetarias según convenciones contables. El flujo de caja libre (operativo menos inversiones de capital) es especialmente relevante porque representa el efectivo real disponible tras mantener y hacer crecer el negocio. Comparar beneficio contable con flujo de caja ayuda a detectar posibles señales de alerta o a entender mejor la fase de inversión en la que se encuentra una empresa.",
          exercises: {
            quiz: [
              {
                q: "El flujo de caja libre (Free Cash Flow) se calcula, de forma simplificada, como:",
                options: [
                  "El beneficio contable multiplicado por el PER",
                  "El flujo de caja operativo menos las inversiones de capital (capex)",
                  "Los ingresos totales de la empresa sin restar ningún coste",
                  "El patrimonio neto dividido entre la deuda total",
                ],
                correct: 1,
                explain:
                  "El flujo de caja libre representa el efectivo generado por las operaciones del negocio, tras restar las inversiones de capital necesarias para mantener o hacer crecer ese negocio, quedando disponible para dividendos, reducción de deuda u otros usos.",
              },
              {
                q: "Una empresa puede mostrar beneficio contable positivo y, al mismo tiempo:",
                options: [
                  "Es matemáticamente imposible que tenga un flujo de caja libre negativo o débil",
                  "Tener un flujo de caja libre negativo o débil, por ejemplo por fuerte inversión de capital o problemas de cobro a clientes",
                  "Automáticamente tener un ROE del 100%",
                  "Estar obligada legalmente a repartir dividendos",
                ],
                correct: 1,
                explain:
                  "El beneficio contable y el flujo de caja son medidas distintas: una empresa puede reportar beneficio contable positivo mientras su flujo de caja libre es débil o negativo, por ejemplo debido a fuerte inversión en capex o a un desfase en los cobros a clientes, una discrepancia que merece investigarse.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Esta empresa reporta beneficios crecientes cada trimestre, así que su situación financiera debe ser excelente sin ninguna duda.\" ¿Qué le sugerirías investigar adicionalmente antes de asumir que la situación financiera es necesariamente sólida, con lo aprendido en esta lección?",
                solution:
                  "Aunque el crecimiento de beneficios contables trimestre a trimestre es, en principio, una señal positiva, sería prudente complementar ese análisis revisando también el flujo de caja de la empresa, especialmente su flujo de caja operativo y su flujo de caja libre. Convendría investigar si ese crecimiento de beneficio contable se está traduciendo en un crecimiento paralelo de efectivo real generado por el negocio, o si existe una divergencia notable entre ambos indicadores (por ejemplo, si las cuentas por cobrar a clientes están creciendo más rápido que las ventas, lo que podría indicar dificultades de cobro real, o si la empresa está invirtiendo cantidades muy elevadas de capital que consumen gran parte de ese beneficio contable en efectivo real). Un beneficio contable creciente acompañado de un flujo de caja débil o decreciente sería una señal de alerta que merecería una investigación más profunda antes de concluir que la situación financiera de la empresa es, sin más matices, \"excelente\".",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene un flujo de caja operativo de 25 millones de euros, e invierte 16 millones de euros en capex (inversiones de capital) ese mismo año. Calcula su flujo de caja libre. Si el año anterior su flujo de caja libre había sido de 12 millones de euros, calcula el crecimiento porcentual de su flujo de caja libre entre ambos años.",
                solution:
                  "Flujo de caja libre del año actual: 25 − 16 = 9 millones de euros.\n\nComparado con el flujo de caja libre del año anterior (12 millones de euros), esto representa en realidad una caída, no un crecimiento: (9 − 12) / 12 = −25% aproximadamente.\n\nEste ejercicio numérico ilustra un caso donde, aunque el flujo de caja operativo pudiera parecer saludable en términos absolutos (25 millones), un incremento significativo en las inversiones de capital (capex) puede hacer que el flujo de caja libre disponible finalmente sea menor que en periodos anteriores, una información relevante que no se apreciaría mirando solo el beneficio contable o el flujo de caja operativo de forma aislada, sin considerar el capex.",
              },
            ],
            reflection:
              "¿Sabías, antes de esta lección, que el beneficio contable de una empresa y el efectivo real que genera podían ser cifras significativamente distintas? ¿Cómo crees que esta distinción cambiará tu forma de interpretar noticias sobre \"beneficios récord\" de empresas cotizadas en el futuro?",
          },
        },
        {
          id: "m8l4",
          title: "Márgenes de una empresa",
          simple:
            "Los márgenes miden qué porcentaje de las ventas de una empresa se convierte en beneficio en distintas etapas de su cuenta de resultados. Empresas con márgenes altos y estables suelen tener, en general, un negocio con más capacidad de generar valor de forma sostenida.",
          technical: `Los márgenes son ratios que expresan distintos niveles de beneficio como porcentaje de los ingresos (ventas) totales de una empresa, permitiendo evaluar la eficiencia y rentabilidad del negocio en distintas etapas de su cuenta de resultados. Los más habituales son:

- Margen bruto: (Ingresos − Coste de los bienes vendidos) / Ingresos. Mide el porcentaje de las ventas que queda después de descontar únicamente el coste directo de producir o adquirir lo que se vende (materias primas, coste de fabricación directo), antes de considerar otros gastos operativos como marketing, administración, o I+D.

- Margen operativo (o margen EBIT): Beneficio operativo / Ingresos. Mide el porcentaje de las ventas que queda como beneficio después de descontar todos los costes operativos del negocio (incluyendo salarios, marketing, I+D, etc.), pero antes de considerar los intereses de la deuda y los impuestos.

- Margen neto: Beneficio neto / Ingresos. Mide el porcentaje final de las ventas que se convierte en beneficio neto, después de descontar absolutamente todos los costes, incluyendo intereses de deuda e impuestos.

Comparar estos márgenes entre empresas del mismo sector (la comparación entre sectores distintos tiene limitaciones similares a las vistas con el PER, ya que la estructura de márgenes "normal" varía mucho según el tipo de negocio) puede revelar diferencias importantes de eficiencia operativa, poder de fijación de precios (pricing power, la capacidad de subir precios sin perder muchos clientes, habitualmente asociada a marcas fuertes o productos diferenciados), o estructura de costes.

También es relevante analizar la evolución de los márgenes de una misma empresa en el tiempo: márgenes que se mantienen estables o crecen con el tiempo suelen ser una señal positiva de fortaleza competitiva sostenida, mientras que márgenes que se deterioran de forma consistente pueden señalar presión competitiva creciente, pérdida de poder de fijación de precios, o problemas de eficiencia operativa que merecen investigarse.`,
          numericExample:
            "Una empresa tiene ingresos de 500 millones de euros. Su coste de los bienes vendidos es de 300 millones (margen bruto: (500−300)/500 = 40%). Sus gastos operativos adicionales (marketing, administración, I+D) suman 100 millones, dejando un beneficio operativo de 100 millones (margen operativo: 100/500 = 20%). Tras restar 15 millones de intereses de deuda y 21 millones de impuestos, su beneficio neto es de 64 millones (margen neto: 64/500 ≈ 12,8%). Este desglose permite ver en qué etapa de la cuenta de resultados se \"pierde\" más margen, y comparar cada nivel con empresas similares del mismo sector.",
          realExample:
            "Empresas de software o tecnología con productos muy escalables (donde el coste de producir una unidad adicional del producto es muy bajo una vez desarrollado) suelen mostrar márgenes brutos muy elevados (a menudo por encima del 70-80%), mientras que empresas de sectores como la distribución minorista de alimentación, con estructuras de costes muy distintas y mucha competencia en precios, suelen mostrar márgenes brutos y netos estructuralmente mucho más ajustados (a menudo de un solo dígito porcentual en el margen neto), sin que eso signifique necesariamente que sean negocios peores, sino que reflejan la naturaleza estructural distinta de cada tipo de sector.",
          analogy:
            "Los márgenes son como analizar, paso a paso, cuánto dinero \"se queda por el camino\" en distintas etapas de la venta de un producto: primero el coste de fabricarlo (margen bruto), luego los gastos de venderlo y gestionarlo (margen operativo), y finalmente los intereses de cualquier préstamo pedido y los impuestos (margen neto). Ver este desglose por etapas ayuda a entender mejor en qué parte concreta del proceso una empresa es más o menos eficiente comparada con sus competidores, en vez de solo mirar el resultado final agregado.",
          mistakes: [
            "Comparar márgenes de empresas de sectores muy distintos sin tener en cuenta las diferencias estructurales normales de cada tipo de negocio.",
            "Fijarse solo en el margen neto final sin desglosar en qué etapa (bruto, operativo, neto) se producen las principales diferencias respecto a competidores o respecto al histórico de la propia empresa.",
            "No prestar atención a la tendencia de los márgenes en el tiempo, centrándose solo en una fotografía puntual de un año concreto sin ver si están mejorando, deteriorándose, o manteniéndose estables.",
          ],
          summary:
            "Los márgenes (bruto, operativo, neto) miden qué porcentaje de las ventas se convierte en beneficio en distintas etapas de la cuenta de resultados de una empresa. Comparar márgenes entre empresas del mismo sector, y analizar su evolución en el tiempo para una misma empresa, ayuda a evaluar la eficiencia operativa y el poder de fijación de precios de un negocio, con las mismas cautelas de comparabilidad sectorial vistas con otros indicadores como el PER.",
          exercises: {
            quiz: [
              {
                q: "El margen bruto se calcula como:",
                options: [
                  "Beneficio neto dividido entre ingresos totales",
                  "(Ingresos menos coste de los bienes vendidos) dividido entre ingresos",
                  "Precio de la acción dividido entre beneficio por acción",
                  "Deuda total dividida entre patrimonio neto",
                ],
                correct: 1,
                explain:
                  "El margen bruto mide el porcentaje de las ventas que queda tras descontar únicamente el coste directo de producir o adquirir lo vendido, antes de otros gastos operativos.",
              },
              {
                q: "Comparar márgenes entre empresas de sectores muy distintos, sin más contexto:",
                options: [
                  "Es siempre una comparación perfectamente válida y directa",
                  "Tiene limitaciones importantes, ya que la estructura de márgenes normal varía mucho según el tipo de negocio",
                  "Solo se puede hacer con empresas del mismo país",
                  "Es ilegal según la normativa contable",
                ],
                correct: 1,
                explain:
                  "Al igual que con el PER, comparar márgenes entre sectores estructuralmente muy distintos (por ejemplo, software frente a distribución minorista) sin tener en cuenta esas diferencias de naturaleza del negocio puede llevar a conclusiones erróneas.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Esta empresa de distribución de alimentación tiene un margen neto de solo el 3%, mientras que esta empresa de software tiene un margen neto del 25%, así que la de software es claramente un negocio mejor gestionado.\" ¿Qué matices le pondrías a esa conclusión?",
                solution:
                  "Esta comparación directa, sin más contexto, puede ser engañosa. Los márgenes netos estructuralmente bajos en el sector de distribución de alimentación no reflejan necesariamente una mala gestión, sino la naturaleza propia de ese tipo de negocio: alta competencia en precios, volúmenes muy elevados de venta con márgenes unitarios reducidos, y una estructura de costes muy distinta a la de una empresa de software (que, una vez desarrollado el producto, puede replicarlo y venderlo con un coste marginal muy bajo, permitiendo márgenes estructuralmente mucho más altos). La comparación más informativa no sería entre sectores tan distintos, sino comparar el margen neto de esta empresa de distribución con el de sus competidores directos del mismo sector (otras cadenas de distribución de alimentación similares), y ver si su margen del 3% es superior, similar, o inferior a la media de ese sector concreto — esa comparación sí daría información más relevante sobre si está \"bien gestionada\" en relación a negocios verdaderamente comparables.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene ingresos de 200 millones de euros, un coste de los bienes vendidos de 130 millones, gastos operativos adicionales de 40 millones, y tras intereses e impuestos, un beneficio neto de 18 millones. Calcula el margen bruto, el margen operativo y el margen neto de esta empresa.",
                solution:
                  "Margen bruto: (200 − 130) / 200 = 70/200 = 35%.\n\nBeneficio operativo: 70 − 40 = 30 millones. Margen operativo: 30/200 = 15%.\n\nMargen neto: 18/200 = 9%.\n\nEste desglose muestra que, de cada 100€ de ventas, la empresa conserva 35€ tras el coste directo de producción (margen bruto), 15€ tras todos los costes operativos (margen operativo), y finalmente solo 9€ como beneficio neto final, tras intereses de deuda e impuestos — permitiendo ver en qué etapas concretas de la cuenta de resultados se \"pierde\" más margen a lo largo del proceso completo.",
              },
            ],
            reflection:
              "¿Habías pensado antes en desglosar el beneficio de una empresa en distintas etapas de margen (bruto, operativo, neto), o solo te fijabas en el resultado final? ¿Crees que este desglose por etapas te ayudaría a entender mejor las noticias financieras sobre resultados empresariales que veas en el futuro?",
          },
        },
        {
          id: "m8l5",
          title: "Deuda y solvencia",
          simple:
            "El nivel de deuda de una empresa es una variable clave para entender su riesgo financiero: una empresa con demasiada deuda puede verse en serios problemas si sus ingresos caen o si los tipos de interés suben, incluso si su negocio subyacente es fundamentalmente sólido.",
          technical: `La deuda financiera de una empresa (el capital que ha tomado prestado, a través de préstamos bancarios, emisión de bonos corporativos —Módulo 4—, u otras formas de financiación ajena) es una parte normal y, en muchos casos, razonable de la estructura de capital de un negocio, ya que permite financiar el crecimiento sin diluir a los accionistas actuales emitiendo nuevas acciones. Sin embargo, un nivel de deuda excesivo en relación a la capacidad de generación de beneficios o efectivo de la empresa incrementa significativamente su riesgo financiero.

Algunos indicadores habituales para evaluar el nivel de deuda y la solvencia de una empresa incluyen:

- Ratio deuda neta / EBITDA: compara la deuda financiera neta (deuda total menos efectivo disponible) con el EBITDA (beneficio antes de intereses, impuestos, depreciación y amortización, una aproximación habitual a la capacidad de generación de caja operativa del negocio). Un ratio más alto indica que la empresa tardaría más años (en términos de su EBITDA actual) en pagar su deuda neta si dedicara todo ese EBITDA a ese propósito, señalando mayor riesgo financiero relativo.

- Ratio de cobertura de intereses: EBIT (beneficio operativo) dividido entre los gastos por intereses de la deuda. Mide cuántas veces el beneficio operativo de la empresa cubre el pago de intereses de su deuda; un ratio más bajo indica menor margen de seguridad para afrontar esos pagos si el beneficio operativo se redujera.

- Ratio de deuda sobre patrimonio neto (deuda/equity): compara la deuda total con el patrimonio neto (capital de los accionistas), dando una idea de la proporción relativa entre financiación ajena y financiación propia de la empresa.

Es importante entender que "más deuda" no es automáticamente "malo": el nivel de deuda apropiado varía mucho según el sector (empresas de sectores muy estables y predecibles, como ciertas utilities, pueden sostener niveles de deuda más altos de forma razonable que empresas de sectores más cíclicos o volátiles) y según el propósito de esa deuda (financiar una expansión bien planificada con retornos esperados sólidos es distinto de acumular deuda para cubrir pérdidas operativas recurrentes). Lo relevante es evaluar si el nivel de deuda es sostenible en relación a la capacidad de generación de beneficios y efectivo de la empresa, considerando también la volatilidad y ciclicidad propia de su sector.

Una empresa con un balance muy endeudado es, en general, más vulnerable ante subidas de tipos de interés (Módulo 4, ya que su coste de financiación aumenta) y ante caídas de sus ingresos (una recesión económica, por ejemplo, ya que sus obligaciones de pago de deuda son fijas, independientemente de si sus ingresos suben o bajan ese año), lo que puede amplificar significativamente el riesgo para sus accionistas en escenarios económicos adversos.`,
          numericExample:
            "Una empresa tiene una deuda financiera neta de 400 millones de euros y un EBITDA anual de 100 millones de euros. Su ratio deuda neta/EBITDA es 400/100 = 4x, lo que indica que, si dedicara todo su EBITDA anual exclusivamente a pagar deuda (algo poco realista en la práctica, ya que también necesita reinvertir en el negocio y puede tener otras obligaciones), tardaría aproximadamente 4 años en cancelar completamente su deuda neta actual. Otra empresa del mismo sector con una deuda neta de 150 millones y un EBITDA de 100 millones tendría un ratio de 1,5x, sensiblemente más conservador y con menos riesgo financiero relativo.",
          realExample:
            "Durante episodios de subida rápida de tipos de interés, como el vivido entre 2022 y 2023 (Módulo 4), las empresas con niveles de deuda más elevados, especialmente aquella financiada a tipo variable o que necesitaba refinanciar deuda que vencía en ese periodo, vieron incrementado de forma significativa su coste financiero, presionando sus beneficios netos y, en algunos casos, generando dudas sobre su capacidad de repago, mientras que empresas con balances menos endeudados fueron, en general, menos vulnerables a este cambio de contexto de tipos.",
          analogy:
            "El nivel de deuda de una empresa es como el nivel de hipoteca de una familia en relación a sus ingresos: una hipoteca moderada, acorde a la capacidad de pago de la familia, puede ser una herramienta razonable para acceder a una vivienda que de otra forma no podrían comprar. Pero una hipoteca excesiva, mal ajustada a los ingresos reales de la familia, la deja muy vulnerable ante cualquier imprevisto (una subida de tipos de interés en su hipoteca variable, o una pérdida temporal de ingresos), pudiendo convertir una situación manejable en una crisis financiera grave.",
          mistakes: [
            "Asumir que cualquier nivel de deuda es automáticamente negativo, sin considerar que puede ser una herramienta razonable de financiación si está bien dimensionada respecto a la capacidad de generación de beneficios de la empresa.",
            "Comparar el nivel de deuda entre empresas de sectores muy distintos sin considerar que el nivel \"razonable\" de deuda varía según la estabilidad y ciclicidad propia de cada sector.",
            "No considerar el impacto potencial de una subida de tipos de interés (Módulo 4) sobre empresas con niveles elevados de deuda, especialmente si esa deuda está a tipo variable o requiere refinanciación próxima.",
          ],
          summary:
            "El nivel de deuda de una empresa, medido con ratios como deuda neta/EBITDA o el ratio de cobertura de intereses, es clave para evaluar su riesgo financiero. Un nivel de deuda apropiado varía según el sector y el propósito de esa financiación, pero un endeudamiento excesivo en relación a la capacidad de generación de beneficios incrementa significativamente la vulnerabilidad de la empresa ante subidas de tipos de interés o caídas de ingresos.",
          exercises: {
            quiz: [
              {
                q: "El ratio deuda neta / EBITDA indica, de forma aproximada:",
                options: [
                  "El precio de la acción dividido entre el beneficio por acción",
                  "Cuántos años tardaría la empresa en pagar su deuda neta si dedicara todo su EBITDA anual a ese propósito",
                  "El porcentaje de las ventas que se convierte en beneficio neto",
                  "El total de dividendos repartidos por la empresa",
                ],
                correct: 1,
                explain:
                  "Este ratio compara la deuda financiera neta con el EBITDA anual, dando una idea aproximada de cuántos años de generación de caja operativa actual serían necesarios para cancelar la deuda neta, un indicador habitual del nivel de riesgo financiero relativo.",
              },
              {
                q: "Un nivel de deuda más alto en una empresa:",
                options: [
                  "Es siempre negativo en cualquier circunstancia y sector",
                  "No es automáticamente malo, pero incrementa la vulnerabilidad ante subidas de tipos de interés o caídas de ingresos si no está bien dimensionado respecto a su capacidad de generación de beneficios",
                  "Nunca afecta a los accionistas de la empresa",
                  "Solo es relevante para empresas del sector financiero",
                ],
                correct: 1,
                explain:
                  "El nivel de deuda apropiado varía según el sector y el propósito de la financiación; lo relevante es si es sostenible en relación a la capacidad de generación de beneficios y efectivo de la empresa, y cómo de vulnerable queda la empresa ante escenarios adversos como subidas de tipos o caídas de ingresos.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Nunca invertiría en una empresa que tenga algo de deuda, prefiero empresas sin ninguna deuda en absoluto.\" ¿Qué matices le pondrías a esta postura, considerando que la deuda puede ser, en ciertos contextos, una herramienta razonable de financiación?",
                solution:
                  "Aunque la cautela ante el riesgo de deuda excesiva es razonable, descartar automáticamente cualquier empresa con algo de deuda, sin más análisis, podría ser una simplificación excesiva que descarte oportunidades de inversión perfectamente sólidas. La deuda, utilizada de forma prudente y proporcionada a la capacidad de generación de beneficios de la empresa, puede ser una herramienta legítima y eficiente de financiación: permite a una empresa financiar proyectos de crecimiento con retornos esperados sólidos sin diluir a los accionistas actuales emitiendo nuevas acciones, y el coste de la deuda (los intereses) suele ser, en igualdad de condiciones, más barato que el coste de capital exigido por los accionistas. La pregunta relevante no debería ser \"¿tiene deuda o no?\" de forma binaria, sino \"¿es el nivel de deuda de esta empresa razonable y sostenible en relación a su capacidad de generación de beneficios y efectivo, considerando también la estabilidad propia de su sector?\" — una empresa con un nivel de deuda moderado y bien gestionado puede ser una inversión más sólida que otra sin deuda pero con un negocio fundamentalmente más débil o menos eficiente en su estructura de capital.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Una empresa tiene un EBIT (beneficio operativo) de 45 millones de euros, y paga 9 millones de euros en intereses de su deuda financiera ese año. Calcula su ratio de cobertura de intereses (EBIT / gastos por intereses). Si su EBIT cayera un 40% en un escenario de recesión económica (mientras los intereses de deuda se mantienen iguales, al ser obligaciones fijas), calcula el nuevo ratio de cobertura de intereses en ese escenario adverso.",
                solution:
                  "Ratio de cobertura de intereses inicial: 45 / 9 = 5x.\n\nNuevo EBIT tras la caída del 40%: 45 × 0,60 = 27 millones de euros.\n\nNuevo ratio de cobertura de intereses (con los mismos 9 millones de intereses, ya que son obligaciones fijas): 27 / 9 = 3x.\n\nAunque el ratio de 3x seguiría indicando, en este ejemplo concreto, que la empresa puede cubrir sus intereses de deuda con margen suficiente incluso en un escenario adverso, este ejercicio ilustra cómo una caída del beneficio operativo (algo que puede ocurrir en una recesión) reduce directamente el margen de seguridad de una empresa para afrontar sus obligaciones de deuda fijas, siendo esta sensibilidad mucho más peligrosa para empresas que ya partían de ratios de cobertura más ajustados antes de la caída.",
              },
            ],
            reflection:
              "¿Te habías fijado antes en el nivel de deuda de una empresa al evaluar si invertir en ella (individualmente, más allá de un fondo indexado diversificado), o te centrabas principalmente en su beneficio o crecimiento de ventas? ¿Cómo crees que esta perspectiva sobre el riesgo financiero de la deuda cambiará tu análisis en el futuro?",
          },
        },
        {
          id: "m8l6",
          title: "Principios básicos de valoración",
          simple:
            "Valorar una empresa consiste en estimar cuánto vale realmente su negocio, más allá de su precio actual en bolsa. Es un ejercicio complejo, con importantes márgenes de incertidumbre, y ningún método de valoración ofrece una certeza absoluta sobre el valor \"correcto\" de una empresa.",
          technical: `La valoración de empresas es la disciplina que busca estimar el valor intrínseco de un negocio (cuánto vale realmente, según sus fundamentos económicos), que puede coincidir o no, en un momento dado, con su precio de mercado (el precio al que efectivamente cotiza en bolsa, determinado por la oferta y la demanda, Módulo 2).

Entre los métodos de valoración más habituales se encuentran:

- Valoración por múltiplos comparables: consiste en comparar indicadores como el PER (Lección 8.1), el ratio precio/ventas, o el ratio EV/EBITDA (valor de la empresa entre su EBITDA) de una empresa con los de otras empresas comparables de su mismo sector, para estimar si cotiza relativamente cara o barata en comparación con sus pares. Es un método relativamente sencillo de aplicar, pero depende de que existan empresas realmente comparables y de que el mercado, en su conjunto, esté valorando ese sector de forma razonable (si todo un sector está en una burbuja, comparar una empresa con sus pares igualmente sobrevalorados no revela esa sobrevaloración conjunta).

- Descuento de flujos de caja (DCF, Discounted Cash Flow): consiste en proyectar los flujos de caja libres (Lección 8.3) que se espera que genere la empresa en el futuro, y "descontarlos" a valor presente (aplicando una tasa que refleja el valor del dinero en el tiempo y el riesgo de esas proyecciones futuras), para estimar un valor actual del negocio completo. Es un método conceptualmente más riguroso, pero extremadamente sensible a los supuestos utilizados (tasas de crecimiento futuro, tasa de descuento aplicada), de forma que pequeños cambios en esos supuestos pueden generar valoraciones finales muy distintas.

Es fundamental entender, con honestidad, las limitaciones inherentes a cualquier método de valoración: todos requieren hacer supuestos sobre el futuro (crecimiento de ventas, evolución de márgenes, tipos de interés futuros, etc.) que son, por naturaleza, inciertos. Ningún método de valoración ofrece una cifra "correcta" con precisión matemática; en el mejor de los casos, ofrece una estimación razonable dentro de un rango de incertidumbre, que distintos analistas, con distintos supuestos, pueden calcular de forma sensiblemente diferente para la misma empresa.

Esta incertidumbre inherente a la valoración de empresas individuales es, precisamente, una de las razones que refuerzan la lógica de la inversión indexada diversificada (Módulo 3) para la mayoría de inversores particulares: en vez de intentar estimar con precisión el valor "correcto" de decenas o cientos de empresas individuales (una tarea extraordinariamente difícil incluso para analistas profesionales especializados a tiempo completo), un fondo indexado permite poseer, de forma automática y con una sola operación, una porción proporcional de todo el mercado, sin necesidad de acertar en esas valoraciones individuales complejas.`,
          numericExample:
            "Una empresa genera un flujo de caja libre estimado de 20 millones de euros este año, y un analista proyecta que crecerá un 5% anual de forma sostenida en el futuro. Usando una tasa de descuento del 9% (que refleja el riesgo estimado de esa proyección), una fórmula simplificada de valoración perpetua (Valor = Flujo de caja / (Tasa de descuento − Tasa de crecimiento)) daría: 20 / (0,09 − 0,05) = 20 / 0,04 = 500 millones de euros de valor estimado. Si otro analista, con supuestos ligeramente distintos (por ejemplo, un crecimiento futuro del 4% en vez del 5%, y una tasa de descuento del 10% en vez del 9%), calculara: 20 / (0,10 − 0,04) = 20 / 0,06 ≈ 333 millones de euros — una diferencia de más del 30% en la valoración final, solo por cambios relativamente moderados en los supuestos de partida, ilustrando la alta sensibilidad de estos métodos a las hipótesis utilizadas.",
          realExample:
            "Es habitual que distintas casas de análisis (bancos de inversión, gestoras) publiquen valoraciones (precios objetivo) muy distintas para una misma empresa cotizada, a veces con diferencias del 30-50% o más entre el precio objetivo más optimista y el más conservador, reflejando precisamente las distintas hipótesis de crecimiento, márgenes futuros, y tasas de descuento que cada analista utiliza en sus modelos de valoración, sobre una misma información pública disponible.",
          analogy:
            "Valorar una empresa es como estimar cuánto valdrá dentro de 10 años una casa que se está construyendo ahora mismo: se pueden hacer proyecciones razonables basadas en la ubicación, la calidad de construcción, y las tendencias del mercado inmobiliario, pero esas proyecciones dependen de supuestos sobre el futuro (evolución del barrio, de la economía, de las preferencias de los compradores) que nadie puede conocer con certeza absoluta de antemano. Dos tasadores razonables, con la misma información disponible sobre la construcción actual, podrían llegar a estimaciones de valor futuro bastante distintas, sin que ninguno de los dos esté necesariamente \"equivocado\" en su metodología.",
          mistakes: [
            "Pensar que existe un método de valoración que ofrece una cifra \"objetivamente correcta\" y precisa del valor de una empresa, sin margen de incertidumbre.",
            "No ser consciente de la alta sensibilidad de métodos como el descuento de flujos de caja a pequeños cambios en los supuestos utilizados (tasas de crecimiento, tasas de descuento).",
            "Subestimar la dificultad práctica de superar de forma consistente al mercado en la valoración de empresas individuales, una tarea en la que incluso analistas profesionales especializados muestran, en conjunto, resultados muy dispares (conectando con lo visto en el Módulo 3 sobre la dificultad de la gestión activa).",
          ],
          summary:
            "La valoración de empresas busca estimar el valor intrínseco de un negocio, mediante métodos como los múltiplos comparables o el descuento de flujos de caja, pero todos estos métodos requieren hacer supuestos inciertos sobre el futuro, y pequeños cambios en esos supuestos pueden generar valoraciones finales muy distintas. Esta incertidumbre inherente refuerza la lógica de la inversión indexada diversificada para la mayoría de inversores particulares, en vez de depender de acertar en valoraciones individuales complejas y sujetas a un margen de error considerable.",
          exercises: {
            quiz: [
              {
                q: "El método de descuento de flujos de caja (DCF) consiste en:",
                options: [
                  "Comparar directamente el precio de la acción con el de sus competidores sin ningún ajuste",
                  "Proyectar los flujos de caja futuros de la empresa y descontarlos a valor presente, aplicando una tasa que refleje el riesgo y el valor del dinero en el tiempo",
                  "Calcular exclusivamente el PER histórico de la empresa",
                  "Sumar todos los dividendos pasados repartidos por la empresa",
                ],
                correct: 1,
                explain:
                  "El DCF proyecta los flujos de caja libres futuros esperados de una empresa y los convierte a un valor presente estimado, aplicando una tasa de descuento que incorpora el riesgo de esas proyecciones y el valor temporal del dinero.",
              },
              {
                q: "Una limitación fundamental de cualquier método de valoración de empresas es que:",
                options: [
                  "Ofrece siempre una cifra exacta y objetivamente correcta, sin ningún margen de error",
                  "Requiere hacer supuestos sobre el futuro que son, por naturaleza, inciertos, y pequeños cambios en esos supuestos pueden alterar significativamente el resultado",
                  "Solo se puede aplicar a empresas que no cotizan en bolsa",
                  "Está prohibido legalmente para inversores particulares",
                ],
                correct: 1,
                explain:
                  "Todo método de valoración depende de supuestos inciertos sobre el futuro (crecimiento, márgenes, tasas de descuento), lo que introduce un margen de incertidumbre considerable que puede llevar a valoraciones muy distintas entre distintos analistas para una misma empresa.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"He calculado con un modelo de descuento de flujos de caja que esta empresa vale exactamente 45,72€ por acción, así que si cotiza a 40€ es una compra clara y segura.\" ¿Qué matices le pondrías sobre la precisión y certeza de ese resultado, con lo aprendido en esta lección?",
                solution:
                  "Aunque el ejercicio de hacer una valoración propia con un modelo de descuento de flujos de caja es una práctica razonable y rigurosa, presentar el resultado como una cifra exacta y objetivamente cierta (\"45,72€\") transmite una falsa sensación de precisión que no corresponde a la naturaleza real de este tipo de análisis. Ese resultado depende completamente de los supuestos utilizados en el modelo (tasas de crecimiento futuro de los flujos de caja, tasa de descuento aplicada, proyecciones de márgenes, entre otros), que son estimaciones inciertas sobre el futuro, no datos objetivos conocidos con certeza. Cambios relativamente moderados en esos supuestos (como se ilustró en el ejemplo numérico de la lección) pueden alterar significativamente el resultado final, por lo que sería más honesto y útil pensar en esa valoración como una estimación dentro de un rango razonable (por ejemplo, \"entre 38€ y 52€, según distintos escenarios de supuestos\"), en vez de una cifra exacta con dos decimales que sugiere una precisión matemática que el propio método no puede realmente ofrecer, dada la incertidumbre inherente sobre el futuro del negocio.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Usando la fórmula simplificada Valor = Flujo de caja / (Tasa de descuento − Tasa de crecimiento), calcula el valor estimado de una empresa con un flujo de caja libre de 15 millones de euros, bajo dos escenarios distintos: Escenario A (tasa de descuento 8%, crecimiento 3%) y Escenario B (tasa de descuento 8%, crecimiento 5%). Compara ambos resultados y calcula la diferencia porcentual entre ellos.",
                solution:
                  "Escenario A: 15 / (0,08 − 0,03) = 15 / 0,05 = 300 millones de euros.\n\nEscenario B: 15 / (0,08 − 0,05) = 15 / 0,03 = 500 millones de euros.\n\nDiferencia: (500 − 300) / 300 ≈ 66,7% más de valoración en el Escenario B respecto al A.\n\nEste ejercicio numérico ilustra, de forma muy directa, la enorme sensibilidad de este tipo de modelos de valoración a cambios relativamente moderados en un único supuesto (la tasa de crecimiento futuro esperada, que pasa de un 3% a un 5% entre ambos escenarios): una diferencia de solo 2 puntos porcentuales en ese supuesto genera una diferencia de valoración final de más del 66%, mostrando por qué es tan importante ser consciente de la incertidumbre inherente a cualquier ejercicio de valoración de empresas.",
              },
            ],
            reflection:
              "Tras ver, con estos ejemplos numéricos, lo sensibles que son los métodos de valoración a los supuestos utilizados, ¿cómo crees que esta lección refuerza (o no) tu preferencia inicial por la inversión indexada diversificada frente al intento de valorar y seleccionar empresas individuales de forma activa?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 8",
        passScore: 70,
        questions: [
          {
            q: "El PER (Price to Earnings Ratio) se calcula como:",
            options: [
              "Beneficio por acción dividido entre el precio de la acción",
              "Precio de la acción dividido entre el beneficio por acción",
              "Ingresos totales dividido entre capitalización bursátil",
              "Deuda total dividida entre patrimonio neto",
            ],
            correct: 1,
            topic: "El PER",
          },
          {
            q: "Una limitación importante del ROE es que:",
            options: [
              "No puede calcularse para empresas cotizadas",
              "Puede inflarse artificialmente por el uso de deuda, sin reflejar necesariamente mayor eficiencia operativa real",
              "Es idéntico siempre al PER",
              "Solo se aplica a empresas tecnológicas",
            ],
            correct: 1,
            topic: "ROE y ROIC",
          },
          {
            q: "El ROIC, a diferencia del ROE, considera:",
            options: [
              "Únicamente el patrimonio neto de los accionistas",
              "Todo el capital empleado en el negocio, tanto el aportado por accionistas como el financiado con deuda",
              "Solo la deuda financiera de la empresa",
              "Exclusivamente los dividendos repartidos",
            ],
            correct: 1,
            topic: "ROE y ROIC",
          },
          {
            q: "El flujo de caja libre (Free Cash Flow) se calcula, de forma simplificada, como:",
            options: [
              "El beneficio contable multiplicado por el margen neto",
              "El flujo de caja operativo menos las inversiones de capital (capex)",
              "Los ingresos totales sin restar ningún coste",
              "El PER dividido entre el ROE",
            ],
            correct: 1,
            topic: "Flujo de caja",
          },
          {
            q: "El margen bruto de una empresa se calcula como:",
            options: [
              "Beneficio neto dividido entre ingresos totales",
              "(Ingresos menos coste de los bienes vendidos) dividido entre ingresos",
              "Deuda neta dividida entre EBITDA",
              "Precio de la acción dividido entre beneficio por acción",
            ],
            correct: 1,
            topic: "Márgenes de una empresa",
          },
          {
            q: "El ratio deuda neta / EBITDA indica, de forma aproximada:",
            options: [
              "El porcentaje de las ventas que se convierte en beneficio",
              "Cuántos años tardaría la empresa en pagar su deuda neta usando todo su EBITDA anual actual",
              "El precio objetivo exacto de la acción",
              "El total de dividendos históricos repartidos",
            ],
            correct: 1,
            topic: "Deuda y solvencia",
          },
          {
            q: "Una limitación fundamental de cualquier método de valoración de empresas (como el descuento de flujos de caja) es que:",
            options: [
              "Ofrece siempre un resultado exacto y objetivamente correcto",
              "Depende de supuestos inciertos sobre el futuro, y pequeños cambios en esos supuestos pueden alterar significativamente el resultado",
              "Solo puede aplicarse a empresas no cotizadas",
              "Está prohibido para inversores particulares en España",
            ],
            correct: 1,
            topic: "Principios básicos de valoración",
          },
          {
            q: "Una empresa tiene un precio de acción de 72€ y un beneficio por acción de 4€. ¿Cuál es su PER?",
            options: ["8", "12", "18", "28,8"],
            correct: 2,
            topic: "El PER (cálculo)",
          },
        ],
      },
    },
    {
      id: "m9",
      number: 9,
      title: "Errores típicos, estafas y productos peligrosos",
      objective:
        "Aprender a reconocer los errores más comunes de los inversores particulares, identificar las señales de alerta de estafas financieras, entender qué productos suelen ser especialmente arriesgados o desaconsejables para un inversor de largo plazo, y desarrollar criterio propio para detectar malas recomendaciones.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulos 0 a 8 completos.",
      learn:
        "A identificar patrones comunes de estafas de inversión, a reconocer productos financieros que suelen ser desaconsejables para tu perfil, y a desarrollar un criterio propio de alerta ante recomendaciones de inversión que recibas de cualquier fuente.",
      lessons: [
        {
          id: "m9l1",
          title: "Errores típicos del inversor particular",
          simple:
            "Más allá de los sesgos psicológicos vistos en el Módulo 6, existen errores prácticos y recurrentes que cometen muchos inversores particulares, muchas veces por desconocimiento más que por mala intención propia o ajena.",
          technical: `Además de los sesgos psicológicos vistos en el Módulo 6 (miedo, euforia, aversión a la pérdida, etc.), existen errores prácticos recurrentes en la forma en que muchos inversores particulares gestionan su dinero, que conviene identificar de forma explícita:

- Perseguir rentabilidades pasadas: elegir un fondo o activo principalmente porque "ha rentado mucho en los últimos 1-3 años", sin considerar que la rentabilidad pasada no garantiza rentabilidad futura, y que a menudo los activos que más han subido recientemente son los que están más cerca de una corrección (Módulo 6).

- Sobreoperar (overtrading): comprar y vender con demasiada frecuencia, generando costes de transacción repetidos y, en muchos vehículos, eventos fiscales innecesarios (Módulo 7), sin que esa actividad frecuente aporte, en la mayoría de los casos, una mejora real de rentabilidad — más bien al contrario, según la evidencia vista en el Módulo 6 sobre la brecha de comportamiento.

- Falta de un plan de inversión por escrito: invertir sin haber definido de antemano el asset allocation (Módulo 5), el horizonte temporal, y los criterios de rebalanceo, lo que deja mucho margen para decisiones improvisadas e inconsistentes basadas en el estado de ánimo de cada momento.

- Concentración excesiva en el empleador propio: muchos empleados acumulan una parte desproporcionada de su patrimonio en acciones o planes de compensación de la propia empresa donde trabajan, lo que concentra un riesgo doble: si la empresa atraviesa dificultades, el inversor podría perder simultáneamente su empleo y una parte significativa de sus inversiones, sin la diversificación (Módulo 1) que protegería de ese escenario correlacionado.

- Ignorar los costes acumulados: no prestar suficiente atención al efecto acumulado a largo plazo de comisiones (TER, Módulo 3), comisiones de bróker, o spreads de compraventa, subestimando su impacto real sobre la rentabilidad neta final a 20 años.

- No revisar ni ajustar el plan con el tiempo: en el extremo opuesto a sobreoperar, algunos inversores establecen un plan inicial y nunca lo revisan, ni siquiera cuando sus circunstancias personales cambian de forma significativa (un cambio de horizonte temporal, de tolerancia al riesgo, o de objetivos financieros), lo que puede dejar la estrategia desalineada con la situación actual real del inversor.

Reconocer estos patrones no garantiza estar libre de ellos, pero es un primer paso útil, complementario a la comprensión de los sesgos psicológicos del Módulo 6, para desarrollar hábitos de inversión más sólidos y consistentes con los objetivos de largo plazo.`,
          numericExample:
            "Un inversor cambia de fondo cada vez que ve que otro fondo ha tenido mejor rentabilidad en el último año, repitiendo esta práctica 4 veces en 10 años. Cada cambio (si se hace correctamente vía traspaso, Módulo 7) no genera coste fiscal inmediato, pero si implica salir de un fondo justo cuando está en un momento de rendimiento relativo más débil (para entrar en el que \"ganó\" el año anterior, que estadísticamente tiene menos probabilidad de repetir ese liderazgo de forma consistente), el efecto acumulado de perseguir rentabilidades pasadas de esta forma puede ser sustancialmente peor, a 10-20 años, que haber mantenido una única estrategia diversificada y coherente desde el principio, sin necesidad de intentar predecir qué fondo concreto \"ganará\" cada año.",
          realExample:
            "Es un patrón bien documentado en estudios de comportamiento de inversores que los fondos con mayores entradas netas de dinero de inversores particulares en un año concreto suelen ser, en promedio, los que mejor rentabilidad tuvieron el año o los años inmediatamente anteriores — precisamente el patrón de \"perseguir rentabilidad pasada\" descrito en esta lección, que la evidencia histórica de reversión a la media sugiere que no es una estrategia consistentemente exitosa.",
          analogy:
            "Perseguir rentabilidades pasadas es como decidir en qué cola ponerte en un supermercado basándote únicamente en cuál avanzó más rápido en el minuto anterior, sin considerar que las colas tienden a equilibrarse con el tiempo, y que la que iba más rápida hace un momento no tiene por qué seguir siendo la más rápida en el futuro inmediato — cambiar constantemente de cola persiguiendo la que \"va mejor\" en cada instante suele ser, en la práctica, menos eficiente que quedarse en una cola razonable desde el principio.",
          mistakes: [
            "Elegir fondos o activos basándose principalmente en su rentabilidad de los últimos 1-3 años, sin más análisis del contexto o de la sostenibilidad de esa rentabilidad.",
            "No tener un plan de inversión por escrito, dejando las decisiones sujetas a la improvisación del momento.",
            "Acumular una parte desproporcionada del patrimonio en acciones de la propia empresa empleadora, sin ser consciente del riesgo de concentración doble que esto representa.",
          ],
          summary:
            "Además de los sesgos psicológicos del Módulo 6, existen errores prácticos recurrentes entre inversores particulares: perseguir rentabilidades pasadas, sobreoperar, no tener un plan por escrito, concentrar riesgo en el empleador propio, ignorar el efecto acumulado de los costes, y no revisar el plan cuando cambian las circunstancias personales. Identificar estos patrones es un primer paso útil para evitarlos de forma consciente.",
          exercises: {
            quiz: [
              {
                q: "\"Perseguir rentabilidades pasadas\" como error común de inversión se refiere a:",
                options: [
                  "Analizar cuidadosamente los fundamentos de una empresa antes de invertir",
                  "Elegir un fondo o activo principalmente porque ha rentado mucho recientemente, sin más análisis del contexto",
                  "Diversificar la cartera entre varias clases de activos",
                  "Mantener un plan de inversión estable a largo plazo",
                ],
                correct: 1,
                explain:
                  "Este error consiste en dejarse llevar por la rentabilidad reciente de un activo o fondo como criterio principal de decisión, sin considerar que la rentabilidad pasada no garantiza rentabilidad futura y que existe una tendencia estadística de reversión a la media.",
              },
              {
                q: "Concentrar una parte muy significativa del patrimonio en acciones de la propia empresa empleadora implica:",
                options: [
                  "Ningún riesgo adicional relevante",
                  "Un riesgo de concentración doble: si la empresa atraviesa dificultades, se puede perder simultáneamente el empleo y una parte importante de las inversiones",
                  "Una estrategia recomendada universalmente por todos los asesores financieros",
                  "Una obligación legal en la mayoría de países",
                ],
                correct: 1,
                explain:
                  "Esta concentración crea una correlación de riesgo indeseable: los problemas de la empresa podrían afectar simultáneamente tanto al empleo como a una parte significativa del patrimonio invertido, en vez de estar diversificado entre fuentes de riesgo independientes.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un compañero de trabajo te cuenta que, cada enero, revisa qué fondo tuvo mejor rentabilidad el año anterior y mueve todo su capital a ese fondo, repitiendo este proceso todos los años. ¿Qué le explicarías sobre los riesgos de esta estrategia, conectando con lo aprendido en esta lección y en módulos anteriores?",
                solution:
                  "Esta estrategia es un ejemplo clásico de \"perseguir rentabilidades pasadas\": el hecho de que un fondo haya tenido la mejor rentabilidad en un año concreto no es un predictor fiable de que vaya a repetir ese liderazgo en el año siguiente — de hecho, existe evidencia de reversión a la media en muchos casos, donde el activo o sector que más subió en un periodo tiende, con cierta frecuencia, a tener un comportamiento relativo más moderado en el periodo siguiente. Además, esta estrategia de cambio anual constante impide beneficiarse de la disciplina de mantener una cartera diversificada y coherente con un asset allocation decidido racionalmente (Módulo 5), y puede generar el efecto de \"comprar caro\" (entrando en el activo justo después de que ya haya subido mucho) y potencialmente \"vender barato\" (saliendo de activos que podrían estar en un momento temporalmente más débil pero con buenas perspectivas a largo plazo). Sería más razonable mantener una estrategia diversificada y estable a largo plazo, con rebalanceos periódicos según un plan predefinido (Módulo 5), en vez de perseguir cada año el fondo \"ganador\" del año anterior.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor cambia de fondo cada año persiguiendo la mejor rentabilidad reciente, y cada cambio (aunque sea vía traspaso sin coste fiscal inmediato) le hace perder, de media, 1 punto porcentual de rentabilidad anual respecto a si hubiera mantenido una estrategia diversificada estable (por el efecto de comprar sistemáticamente después de las subidas y vender después de los momentos más débiles). Sobre una inversión de 18.000€ a 20 años, compara el capital final si hubiera obtenido una rentabilidad neta del 7% anual (estrategia estable) frente a un 6% anual (estrategia de persecución de rentabilidad pasada), usando VF=VI×(1+r)^20.",
                solution:
                  "Estrategia estable (7% anual): 18.000 × (1,07)^20 ≈ 18.000 × 3,870 ≈ 69.660€.\n\nEstrategia de persecución de rentabilidad (6% anual): 18.000 × (1,06)^20 ≈ 18.000 × 3,207 ≈ 57.726€.\n\nDiferencia: 69.660€ − 57.726€ ≈ 11.934€.\n\nEste ejercicio numérico ilustra cómo, incluso una diferencia aparentemente modesta de 1 punto porcentual anual (causada en este ejemplo por el patrón de comportamiento de perseguir rentabilidades pasadas) puede suponer, a 20 años, una diferencia de más de 11.000€ en el capital final, reforzando la importancia práctica de evitar este tipo de errores recurrentes.",
              },
            ],
            reflection:
              "De los errores típicos vistos en esta lección (perseguir rentabilidad pasada, sobreoperar, falta de plan por escrito, concentración en el empleador, ignorar costes acumulados, no revisar el plan), ¿cuál crees que sería, para ti personalmente, el más fácil de cometer sin darte cuenta? ¿Qué podrías hacer concretamente para evitarlo?",
          },
        },
        {
          id: "m9l2",
          title: "Anatomía de una estafa financiera",
          simple:
            "Las estafas de inversión, aunque varían en su forma concreta, suelen compartir un conjunto de características comunes y reconocibles: promesas de rentabilidad muy alta con poco o ningún riesgo, presión para decidir rápido, y falta de transparencia sobre cómo se genera realmente esa rentabilidad.",
          technical: `Aunque las estafas financieras adoptan formas muy diversas (esquemas Ponzi, productos financieros fraudulentos, falsos brókeres, criptoactivos fraudulentos, entre muchos otros), la investigación sobre fraude financiero y los organismos reguladores (como la CNMV en España) han identificado un conjunto de señales de alerta recurrentes que aparecen, con gran frecuencia, en la mayoría de estafas de inversión:

- Rentabilidad prometida excesivamente alta y consistente, con poco o ningún riesgo declarado: como se vio en el Módulo 1, la relación riesgo-rentabilidad es un principio estructural de los mercados financieros; promesas de rentabilidad muy superior a la media del mercado, de forma consistente y "garantizada" sin apenas riesgo, contradicen ese principio básico y son una de las señales de alerta más fiables de fraude.

- Presión temporal y escasez artificial: mensajes que insisten en que "la oportunidad es limitada" o que "hay que decidir ya, antes de que se cierre el cupo", diseñados para evitar que la persona tenga tiempo de investigar, reflexionar, o consultar con terceros de confianza antes de comprometer su dinero.

- Falta de transparencia sobre el mecanismo real de generación de rentabilidad: cuando se pregunta con detalle "¿cómo exactamente se genera esta rentabilidad?", las respuestas son vagas, evasivas, o se centran en testimonios de otros inversores satisfechos en vez de explicar el mecanismo económico concreto.

- Uso de testimonios y prueba social como principal argumento: mostrar capturas de pantalla de "ganancias" de otros inversores, o testimonios entusiastas, como sustituto de una explicación rigurosa y verificable del funcionamiento real del producto.

- Solicitud de reclutar a otras personas: en esquemas piramidales o Ponzi, una parte importante (a veces la principal) de la "rentabilidad" de los primeros participantes proviene, en realidad, del dinero aportado por nuevos participantes reclutados, no de una actividad económica productiva real generando ese valor.

- Falta de registro o supervisión por el regulador correspondiente: en España, las entidades y productos de inversión legítimos deben estar registrados y supervisados por la CNMV (Comisión Nacional del Mercado de Valores) o el Banco de España, según el tipo de producto; comprobar este registro es un paso de verificación básico, gratuito y accesible que muchas víctimas de fraude no llegan a realizar antes de invertir.

Ninguna de estas señales, de forma aislada, es una prueba definitiva de fraude (existen, por ejemplo, oportunidades legítimas con cierta urgencia temporal), pero la combinación de varias de ellas simultáneamente debería activar un alto grado de cautela y de investigación adicional antes de comprometer cualquier cantidad de dinero.`,
          numericExample:
            "Un producto de inversión promete un 3% de rentabilidad mensual \"garantizada\" (lo que equivaldría a más de un 42% anual compuesto, muy por encima de la rentabilidad histórica media de la renta variable global vista en módulos anteriores, en torno al 7-8% anual real a muy largo plazo), sin explicar con claridad cómo se genera esa rentabilidad, e insiste en que \"las plazas se agotan esta semana\". La combinación de una rentabilidad extraordinariamente alta y consistente, con falta de transparencia sobre el mecanismo, y presión temporal, son tres señales de alerta clásicas presentes simultáneamente en este ejemplo.",
          realExample:
            "El caso Madoff, uno de los mayores esquemas Ponzi de la historia (descubierto en 2008), prometía rentabilidades consistentes y relativamente altas año tras año, con muy poca volatilidad aparente (una señal de alerta en sí misma, ya que rentabilidades altas sin apenas volatilidad son extremadamente infrecuentes en mercados financieros legítimos), y durante años logró engañar a inversores sofisticados e instituciones financieras reconocidas, en parte por la reputación social del gestor y la falta de escrutinio suficientemente riguroso sobre el mecanismo real (o inexistente) de generación de esas rentabilidades declaradas.",
          analogy:
            "Una estafa financiera bien diseñada es como un edificio con una fachada muy atractiva y cuidada, pero sin cimientos reales sólidos detrás. Desde fuera (los testimonios, las capturas de pantalla de ganancias, la presión social de otros \"inversores satisfechos\"), puede parecer perfectamente sólido, pero quien se atreve a preguntar con detalle \"¿cómo está construido esto exactamente por dentro?\" (el mecanismo real de generación de rentabilidad) suele encontrar respuestas evasivas o inconsistentes, precisamente porque no hay una estructura económica real sosteniendo las promesas hechas desde la fachada.",
          mistakes: [
            "Invertir en un producto sin verificar si la entidad o el producto están registrados y supervisados por el regulador correspondiente (CNMV en España, para la mayoría de productos de inversión).",
            "Dejarse influir principalmente por testimonios de otros inversores satisfechos, sin exigir una explicación clara y verificable del mecanismo económico real de generación de rentabilidad.",
            "Tomar decisiones de inversión bajo presión temporal artificial, sin darse el tiempo necesario para investigar y, idealmente, consultar con alguien de confianza antes de comprometer el dinero.",
          ],
          summary:
            "Las estafas financieras, aunque diversas en su forma concreta, suelen compartir señales de alerta comunes: rentabilidad prometida excesivamente alta y consistente con poco riesgo declarado, presión temporal, falta de transparencia sobre el mecanismo real de generación de rentabilidad, uso de testimonios como principal argumento, solicitud de reclutar a otros, y falta de registro ante el regulador correspondiente. Reconocer estas señales, especialmente cuando aparecen combinadas, es una herramienta práctica de protección fundamental para cualquier inversor.",
          exercises: {
            quiz: [
              {
                q: "Una promesa de rentabilidad muy alta y consistente, con poco o ningún riesgo declarado, es una señal de alerta porque:",
                options: [
                  "Es completamente normal en cualquier producto financiero legítimo",
                  "Contradice el principio estructural de la relación riesgo-rentabilidad visto en el Módulo 1",
                  "Solo aplica a productos de renta fija",
                  "Es obligatoria por ley en cualquier producto de inversión",
                ],
                correct: 1,
                explain:
                  "Como se vio en el Módulo 1, mayor rentabilidad esperada suele implicar mayor riesgo asumido; promesas de rentabilidad alta y consistente sin apenas riesgo contradicen ese principio básico de funcionamiento de los mercados financieros legítimos.",
              },
              {
                q: "En España, verificar si una entidad o producto de inversión está registrado y supervisado corresponde principalmente a:",
                options: [
                  "No es necesario verificarlo nunca",
                  "La CNMV (Comisión Nacional del Mercado de Valores) o el Banco de España, según el tipo de producto",
                  "Únicamente el propio banco que ofrece el producto",
                  "Un trámite exclusivo para inversores institucionales",
                ],
                correct: 1,
                explain:
                  "La CNMV supervisa los mercados de valores y muchos productos de inversión en España; comprobar si una entidad o producto concreto está debidamente registrado y supervisado es un paso de verificación básico y accesible para cualquier inversor particular.",
              },
            ],
            cases: [
              {
                prompt:
                  "Recibes un mensaje de un conocido lejano recomendándote una plataforma de inversión que promete un 5% de rentabilidad mensual garantizada, con capturas de pantalla mostrando las ganancias de varios usuarios, e insistiendo en que debes registrarte esta misma semana porque \"están cerrando las inscripciones pronto\". Identifica, con lo aprendido en esta lección, todas las señales de alerta presentes en este mensaje.",
                solution:
                  "Este mensaje combina varias señales de alerta clásicas simultáneamente: (1) Rentabilidad excesivamente alta y \"garantizada\" — un 5% mensual equivaldría a una rentabilidad anual compuesta extraordinariamente superior a cualquier rentabilidad histórica media razonable de los mercados financieros legítimos vistos en este curso. (2) Uso de capturas de pantalla y testimonios como principal prueba, en vez de una explicación clara y verificable del mecanismo económico real que generaría esa rentabilidad. (3) Presión temporal artificial (\"cerrando las inscripciones pronto\"), diseñada para evitar que dediques tiempo a investigar o consultar con alguien de confianza antes de decidir. Adicionalmente, sería fundamental verificar si esa plataforma está registrada y supervisada por la CNMV — la ausencia de ese registro (algo que se puede comprobar de forma gratuita en la web de la CNMV) sería una señal de alerta adicional muy significativa. La combinación de estas múltiples señales simultáneas debería llevar a rechazar esta oferta con un alto grado de confianza, sin necesidad siquiera de profundizar más en los detalles concretos del \"producto\" ofrecido.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un producto promete una rentabilidad \"garantizada\" del 4% mensual. Calcula la rentabilidad anual compuesta equivalente que estaría prometiendo, usando la fórmula (1+r_mensual)^12 − 1, y compárala con la rentabilidad histórica media aproximada de la renta variable global vista en módulos anteriores (en torno al 7-8% anual real a muy largo plazo).",
                solution:
                  "Rentabilidad anual compuesta equivalente: (1,04)^12 − 1 ≈ 1,601 − 1 = 0,601, es decir, aproximadamente un 60,1% anual.\n\nComparado con la rentabilidad histórica media aproximada de la renta variable global (7-8% anual a muy largo plazo, vista en módulos anteriores), esta promesa de un 4% mensual (60% anual compuesto) es más de 7 veces superior a esa referencia histórica, y además \"garantizada\", sin riesgo declarado — una combinación que, según todo lo visto en este curso sobre la relación riesgo-rentabilidad (Módulo 1) y las señales de alerta de estafas (esta lección), debería generar una sospecha extremadamente alta sobre la legitimidad de ese producto.",
              },
            ],
            reflection:
              "¿Has recibido alguna vez (o conoces a alguien que haya recibido) una oferta de inversión con alguna de las señales de alerta vistas en esta lección? ¿Cómo reaccionaste o crees que reaccionarías ahora, con las herramientas de análisis de este curso?",
          },
        },
        {
          id: "m9l3",
          title: "Productos financieros especialmente arriesgados",
          simple:
            "Más allá de las estafas directas, existen productos financieros legales y legítimos que, sin embargo, suelen ser especialmente arriesgados o poco adecuados para la mayoría de inversores particulares de largo plazo, por su complejidad, apalancamiento, o estructura de costes.",
          technical: `Existen productos financieros que, sin ser necesariamente fraudulentos, presentan características que los hacen especialmente arriesgados o desaconsejables para la mayoría de inversores particulares con un perfil de largo plazo como el descrito en este curso, especialmente si no se comprenden completamente sus mecanismos:

- Productos apalancados (CFDs, futuros con apalancamiento, ciertos ETFs apalancados o inversos): permiten multiplicar tanto las ganancias como las pérdidas potenciales respecto al movimiento del activo subyacente. Los CFDs (Contratos por Diferencia), en particular, han sido objeto de advertencias específicas de reguladores europeos (incluida la CNMV) debido a que la gran mayoría de cuentas de inversores particulares que operan con ellos pierden dinero, según los propios datos que las entidades que ofrecen estos productos están obligadas a publicar. Los ETFs apalancados o inversos, además, suelen tener un comportamiento a largo plazo que se desvía significativamente del simple múltiplo del índice subyacente debido a efectos de "reseteo diario" del apalancamiento, haciéndolos generalmente inadecuados para mantener durante periodos largos.

- Productos estructurados complejos: instrumentos financieros que combinan varios componentes (por ejemplo, un bono con opciones sobre acciones) de forma que resulta difícil, para un inversor no especializado, entender completamente su perfil real de riesgo y rentabilidad, y que a menudo incluyen comisiones implícitas elevadas y poco transparentes.

- Inversión en criptoactivos altamente especulativos: sin entrar a valorar el potencial de la tecnología subyacente en términos generales, muchos criptoactivos individuales (más allá de los más establecidos) presentan una volatilidad extrema, ausencia de flujos de caja o beneficios que sustenten una valoración fundamental (a diferencia de las empresas vistas en el Módulo 8), y en algunos casos, esquemas de manipulación de mercado documentados por reguladores, lo que los convierte en una categoría de riesgo muy distinta a la inversión diversificada en renta variable global a través de índices.

- Productos con comisiones ocultas o muy elevadas y poco transparentes: ciertos seguros de ahorro vinculados a inversión (unit linked) o planes de pensiones con estructuras de comisiones complejas y elevadas pueden erosionar significativamente la rentabilidad neta a largo plazo, de forma similar a lo visto en el Módulo 3 sobre el TER, pero con una transparencia habitualmente menor que la de un fondo indexado estándar.

No se trata de afirmar que todos estos productos sean "malos" en un sentido absoluto para cualquier inversor en cualquier circunstancia (existen usos profesionales o de cobertura legítimos para algunos de ellos), sino de reconocer que, para el perfil de inversor de largo plazo, con horizonte de 20 años y sin necesidad ni interés en operar de forma activa y sofisticada, estos productos suelen añadir complejidad, coste, y riesgo adicional sin un beneficio claro correspondiente para ese objetivo concreto.`,
          numericExample:
            "Un CFD con apalancamiento 10:1 sobre una acción permite controlar una posición de 10.000€ con solo 1.000€ de capital propio (margen). Si la acción sube un 5%, la ganancia sobre el capital propio sería aproximadamente del 50% (10 veces el movimiento del 5%, antes de comisiones). Pero si la acción cae un 5%, la pérdida sobre el capital propio sería también aproximadamente del 50% — y si la caída alcanza el 10%, el inversor podría perder el 100% de su capital aportado (y, dependiendo de las condiciones del contrato, incluso quedar debiendo dinero adicional al bróker), una volatilidad de resultados radicalmente distinta a la de una inversión no apalancada en el mismo activo.",
          realExample:
            "Los datos que las entidades que ofrecen CFDs están obligadas a publicar en la Unión Europea (incluida España, bajo supervisión de la CNMV) muestran de forma consistente que un porcentaje muy elevado —frecuentemente entre el 70% y el 80% o más, según la entidad y el periodo— de las cuentas de clientes particulares que operan con estos productos pierden dinero, una estadística que las propias entidades deben mostrar de forma visible en su publicidad por requerimiento regulatorio, precisamente por la magnitud del riesgo que representan para el inversor medio.",
          analogy:
            "Operar con productos apalancados es como conducir un coche con una aceleración mucho más sensible y potente de lo habitual: en manos de un piloto profesional con mucha experiencia y en un circuito controlado, puede tener sentido y utilidad. Pero para la inmensa mayoría de conductores en carretera normal, sin ese entrenamiento específico, la misma sensibilidad que permite acelerar mucho más rápido también multiplica enormemente el riesgo de perder el control del vehículo ante cualquier error o imprevisto — el mismo mecanismo que amplifica las ganancias potenciales amplifica, exactamente en la misma proporción, las pérdidas potenciales.",
          mistakes: [
            "Operar con productos apalancados (CFDs, futuros, ciertos ETFs apalancados) sin entender completamente el mecanismo de amplificación de pérdidas que conllevan, más allá de fijarse solo en el potencial de ganancia amplificada.",
            "Mantener ETFs apalancados o inversos durante periodos largos, sin ser consciente de que su comportamiento a largo plazo puede desviarse significativamente del simple múltiplo del índice subyacente, por el efecto de reseteo diario del apalancamiento.",
            "Contratar productos estructurados complejos sin entender completamente su estructura de comisiones y su perfil real de riesgo, dejándose guiar principalmente por la explicación simplificada de quien los vende.",
          ],
          summary:
            "Existen productos financieros legales y legítimos, pero especialmente arriesgados o poco adecuados para la mayoría de inversores particulares de largo plazo: productos apalancados (CFDs, futuros, ciertos ETFs apalancados), productos estructurados complejos, criptoactivos altamente especulativos, y productos con comisiones ocultas o poco transparentes. No son necesariamente fraudulentos, pero su complejidad, riesgo amplificado, o estructura de costes los hace generalmente desaconsejables para el perfil de inversión diversificada y de largo plazo descrito en este curso.",
          exercises: {
            quiz: [
              {
                q: "Según los datos publicados por entidades reguladas en la Unión Europea, el porcentaje de cuentas de clientes particulares que pierden dinero operando con CFDs es, típicamente:",
                options: [
                  "Menos del 10%",
                  "En torno al 30-40%",
                  "Frecuentemente entre el 70% y el 80% o más, según la entidad y el periodo",
                  "Prácticamente el 0%, ya que son productos sin riesgo",
                ],
                correct: 2,
                explain:
                  "Los datos que las entidades están obligadas a publicar en la UE muestran, de forma consistente, que una gran mayoría de cuentas de inversores particulares que operan con CFDs (frecuentemente 70-80% o más) pierden dinero, reflejando el riesgo elevado de estos productos apalancados para el inversor medio.",
              },
              {
                q: "Los ETFs apalancados o inversos, mantenidos durante periodos largos:",
                options: [
                  "Siempre replican de forma exacta el múltiplo del índice subyacente a largo plazo",
                  "Pueden desviarse significativamente del simple múltiplo del índice subyacente, debido al efecto de reseteo diario del apalancamiento",
                  "Son idénticos en riesgo a un fondo indexado tradicional",
                  "Están prohibidos en toda la Unión Europea",
                ],
                correct: 1,
                explain:
                  "Debido al mecanismo de reseteo diario del apalancamiento, estos productos suelen estar diseñados para replicar el múltiplo del índice en periodos muy cortos (diarios), pero su comportamiento acumulado a largo plazo puede desviarse significativamente de ese múltiplo simple, haciéndolos generalmente inadecuados para mantener durante periodos largos.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un conocido te dice: \"He empezado a operar con CFDs porque me permiten ganar mucho más rápido con poco capital inicial.\" ¿Qué le explicarías sobre el otro lado de esa misma característica (el apalancamiento), y qué datos objetivos (vistos en esta lección) le compartirías para que tome una decisión informada?",
                solution:
                  "Es importante explicarle que el apalancamiento es una herramienta simétrica: la misma característica que permite multiplicar las ganancias potenciales con poco capital inicial multiplica, exactamente en la misma proporción, las pérdidas potenciales. Un movimiento adverso relativamente pequeño en el activo subyacente puede generar una pérdida muy significativa (o incluso total) sobre el capital aportado, de una forma que no ocurriría invirtiendo en el mismo activo sin apalancamiento. Sería útil compartirle el dato objetivo, publicado por las propias entidades reguladas bajo requerimiento normativo, de que un porcentaje muy elevado (frecuentemente 70-80% o más) de cuentas de clientes particulares que operan con CFDs pierden dinero — una estadística que, viniendo de las propias entidades que ofrecen el producto (no de una fuente con interés en desaconsejarlo), es especialmente reveladora sobre el riesgo real que asume el inversor medio con este tipo de productos. Esto no significa necesariamente que deba evitarlo de forma absoluta si decide operar con pleno conocimiento de causa y con una cantidad de capital que puede permitirse perder completamente, pero sí que debería tomar esa decisión siendo plenamente consciente de estos datos objetivos, no solo del potencial de ganancia amplificada que inicialmente le atrajo.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor opera con un CFD apalancado 5:1, aportando 2.000€ de margen para controlar una posición de 10.000€. Si el activo subyacente cae un 15%, calcula la pérdida en euros sobre la posición total, y qué porcentaje representa esa pérdida sobre el capital propio (margen) aportado de 2.000€.",
                solution:
                  "Pérdida sobre la posición total: 10.000€ × 0,15 = 1.500€.\n\nEsta pérdida de 1.500€ se aplica sobre el capital propio aportado (margen) de 2.000€, no sobre la posición total de 10.000€: 1.500€ / 2.000€ = 75% de pérdida sobre el capital propio.\n\nEste ejercicio numérico ilustra cómo una caída relativamente moderada del 15% en el activo subyacente (una magnitud de movimiento que puede ocurrir en periodos de volatilidad de mercado, como se ha visto en módulos anteriores) se traduce, con este apalancamiento de 5:1, en una pérdida del 75% sobre el capital propio invertido — mostrando de forma numérica y directa por qué estos productos apalancados representan un riesgo tan significativamente amplificado respecto a una inversión no apalancada en el mismo activo subyacente.",
              },
            ],
            reflection:
              "¿Habías considerado antes operar con algún producto apalancado o especulativo de los mencionados en esta lección? Con los datos y ejemplos vistos, ¿cambia tu perspectiva sobre su idoneidad para tu estrategia de inversión a 20 años?",
          },
        },
        {
          id: "m9l4",
          title: "Cómo detectar malas recomendaciones",
          simple:
            "No todas las malas recomendaciones de inversión son estafas deliberadas: a veces provienen de asesores con conflictos de interés, de amigos bienintencionados sin suficiente conocimiento, o de contenido en redes sociales sin ningún tipo de responsabilidad ni cualificación real detrás.",
          technical: `Además de las estafas deliberadas (Lección 9.2) y los productos especialmente arriesgados (Lección 9.3), un inversor debe desarrollar criterio propio para evaluar críticamente las recomendaciones de inversión que reciba de cualquier fuente, incluyendo fuentes bienintencionadas pero potencialmente sesgadas o mal informadas.

Algunos focos habituales de recomendaciones de calidad cuestionable incluyen:

- Conflictos de interés en asesoramiento financiero: en España, ha sido históricamente habitual que ciertos asesores financieros vinculados a entidades bancarias o comercializadoras reciban comisiones (retrocesiones) por recomendar productos concretos (típicamente fondos de gestión activa con comisiones más altas, Módulo 3), lo que puede generar un incentivo económico para recomendar esos productos frente a alternativas potencialmente más eficientes (como fondos indexados de bajo coste) para el cliente, aunque la normativa MiFID II ha introducido mayores requisitos de transparencia sobre estos conflictos de interés en los últimos años.

- Influencers y contenido financiero en redes sociales sin cualificación ni responsabilidad regulatoria: cualquier persona puede publicar contenido sobre inversión en redes sociales sin necesidad de ninguna cualificación profesional verificada ni sujeción a la supervisión de un regulador financiero, lo que hace especialmente importante evaluar de forma crítica las fuentes, sin asumir autoridad o fiabilidad automática por el número de seguidores o la producción audiovisual atractiva del contenido.

- Recomendaciones basadas en resultados personales anecdóticos: alguien que cuenta que "ganó mucho dinero" con una estrategia o producto concreto está compartiendo una experiencia individual, que puede haber sido resultado de suerte, de un contexto de mercado específico no repetible, o de un sesgo de supervivencia (quienes perdieron dinero con esa misma estrategia rara vez lo publicitan con el mismo entusiasmo), sin que eso constituya evidencia estadísticamente robusta de que esa estrategia funcionará de forma consistente en el futuro.

- Recomendaciones sin transparencia sobre comisiones o incentivos del recomendador: cuando alguien recomienda un producto o plataforma concreta sin aclarar si recibe alguna compensación (comisión de afiliado, patrocinio) por esa recomendación, existe un potencial conflicto de interés no declarado que conviene tener en cuenta al valorar la objetividad real de esa recomendación.

Un criterio práctico útil, complementario a las señales de alerta de estafas ya vistas: ante cualquier recomendación de inversión, preguntarse explícitamente "¿quién se beneficia económicamente de que yo siga este consejo, y de qué forma?", y buscar, siempre que sea posible, contrastar la recomendación con fuentes independientes, datos objetivos verificables, y los principios fundamentales vistos a lo largo de este curso (relación riesgo-rentabilidad, importancia de los costes, diversificación, dificultad de batir al mercado de forma consistente), en vez de aceptar recomendaciones basándose únicamente en la autoridad percibida o la confianza personal en quien las hace.`,
          numericExample:
            "Un asesor bancario recomienda un fondo de gestión activa con un TER del 1,8% en vez de un fondo indexado equivalente con TER del 0,20%, sin mencionar que su entidad recibe una retrocesión (comisión) de la gestora del fondo activo por cada cliente que lo contrata a través de ellos. Sobre una inversión de 25.000€ a 20 años, como se vio en el Módulo 3, esa diferencia de TER (1,6 puntos porcentuales) podría suponer, por el efecto acumulado del interés compuesto, una diferencia de varias decenas de miles de euros en el capital final, un coste que el cliente asume sin ser plenamente consciente del incentivo económico que llevó a esa recomendación concreta.",
          realExample:
            "La normativa MiFID II, aplicable en la Unión Europea desde 2018, introdujo mayores requisitos de transparencia sobre las comisiones y posibles conflictos de interés en el asesoramiento financiero, obligando a las entidades a informar más claramente sobre si su asesoramiento es \"independiente\" (sin recibir retrocesiones de terceros) o no. Aun así, sigue siendo responsabilidad del inversor informarse activamente sobre esta distinción y sus implicaciones prácticas antes de seguir una recomendación concreta.",
          analogy:
            "Evaluar una recomendación de inversión sin considerar quién se beneficia de ella es como comprar un coche siguiendo únicamente la recomendación entusiasta del propio vendedor de ese concesionario concreto, sin comparar con opiniones independientes de otros conductores o de publicaciones especializadas sin interés comercial directo en esa venta específica. El vendedor puede no estar mintiendo activamente sobre las características del coche, pero su recomendación tiene, estructuralmente, un incentivo económico que puede sesgar qué aspectos destaca y cuáles minimiza, comparado con una fuente sin ese mismo interés directo en el resultado de tu decisión.",
          mistakes: [
            "Aceptar recomendaciones de inversión de un asesor o entidad sin preguntar explícitamente si recibe alguna comisión o incentivo económico por recomendar ese producto concreto frente a alternativas.",
            "Dar autoridad automática a contenido financiero en redes sociales solo por su popularidad o producción atractiva, sin verificar la cualificación real y la ausencia de conflictos de interés no declarados de quien lo publica.",
            "Basar decisiones de inversión importantes en experiencias anecdóticas individuales de terceros (\"mi cuñado ganó mucho con esto\"), sin contrastarlas con datos más amplios y principios fundamentales de inversión.",
          ],
          summary:
            "No todas las malas recomendaciones de inversión provienen de estafas deliberadas: los conflictos de interés en el asesoramiento financiero tradicional, el contenido de influencers sin cualificación ni supervisión regulatoria, las experiencias anecdóticas individuales, y las recomendaciones sin transparencia sobre incentivos del recomendador son fuentes habituales de consejos de calidad cuestionable. Preguntarse \"¿quién se beneficia de que yo siga este consejo?\" y contrastar con principios fundamentales y fuentes independientes es una herramienta práctica de protección para cualquier inversor.",
          exercises: {
            quiz: [
              {
                q: "Una retrocesión, en el contexto del asesoramiento financiero, se refiere a:",
                options: [
                  "Un impuesto que cobra Hacienda sobre las inversiones",
                  "Una comisión que puede recibir un asesor o entidad por recomendar un producto concreto, generando un potencial conflicto de interés",
                  "El proceso de devolución de una inversión fraudulenta",
                  "Un tipo de fondo indexado especializado",
                ],
                correct: 1,
                explain:
                  "Las retrocesiones son comisiones que ciertos asesores o entidades pueden recibir de las gestoras de fondos por recomendar y comercializar sus productos, lo que puede generar un incentivo económico no siempre alineado con el mejor interés del cliente.",
              },
              {
                q: "Una recomendación de inversión basada principalmente en la experiencia anecdótica individual de una persona concreta (\"gané mucho con esto\"):",
                options: [
                  "Es siempre una prueba estadísticamente sólida de que esa estrategia funcionará en el futuro",
                  "Puede reflejar suerte, un contexto de mercado específico no repetible, o sesgo de supervivencia, sin constituir evidencia robusta por sí sola",
                  "Es la mejor fuente posible de información sobre inversión",
                  "Solo aplica a productos de renta fija",
                ],
                correct: 1,
                explain:
                  "Una experiencia individual puede deberse a múltiples factores no generalizables (suerte, momento de mercado específico, sesgo de supervivencia donde quienes perdieron no publicitan su experiencia), por lo que no constituye, por sí sola, evidencia sólida sobre la validez futura de una estrategia.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un influencer con muchos seguidores en redes sociales recomienda con entusiasmo una plataforma de inversión concreta, mostrando capturas de pantalla de sus propias ganancias, sin mencionar si recibe alguna compensación por esa recomendación. ¿Qué pasos concretos seguirías, con lo aprendido en esta lección, antes de considerar seguir esa recomendación?",
                solution:
                  "Antes de considerar seguir esa recomendación, sería razonable: (1) Investigar si el influencer declara explícitamente algún tipo de compensación (enlace de afiliado, patrocinio, comisión) por esa recomendación concreta — muchas plataformas ofrecen comisiones a creadores de contenido por cada usuario que se registra a través de su enlace, lo que constituye un incentivo económico relevante a considerar. (2) Verificar si esa plataforma está registrada y supervisada por el regulador correspondiente (CNMV en España, u organismo equivalente según la jurisdicción), un paso de verificación básico y gratuito. (3) Contrastar la recomendación con fuentes independientes y datos objetivos, sin depender únicamente de las capturas de pantalla de ganancias individuales del influencer, que constituyen evidencia anecdótica, no una prueba robusta de la validez o seguridad de esa plataforma o estrategia concreta. (4) Preguntarse si esa recomendación es coherente con los principios fundamentales vistos a lo largo de este curso (diversificación, relación riesgo-rentabilidad razonable, transparencia de costes) o si presenta alguna de las señales de alerta vistas en las lecciones anteriores de este módulo. Ninguno de estos pasos garantiza una decisión perfecta, pero en conjunto reducen significativamente el riesgo de seguir una recomendación mal informada o interesada sin la debida diligencia previa.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un asesor recomienda un fondo activo con TER 1,7% en vez de un fondo indexado equivalente con TER 0,25%, por el que recibe una retrocesión anual del 0,5% sobre el capital gestionado del cliente (una parte de esa diferencia de comisión revierte al asesor). Si un cliente invierte 40.000€ siguiendo esa recomendación, calcula cuánto recibiría el asesor en concepto de esa retrocesión durante el primer año.",
                solution:
                  "Retrocesión anual del asesor: 40.000€ × 0,005 = 200€ en el primer año (y, previsiblemente, cantidades similares o crecientes en años sucesivos mientras el cliente mantenga esa inversión, ya que las retrocesiones suelen calcularse sobre el patrimonio gestionado de forma recurrente, no como un pago único).\n\nEste cálculo ilustra, de forma numérica y directa, el incentivo económico concreto que puede tener un asesor para recomendar un producto con mayor comisión frente a una alternativa de menor coste para el cliente (como se vio en el Módulo 3, la diferencia de TER entre ambos fondos —1,45 puntos porcentuales— tendría, además, un impacto muy significativo en el capital final del cliente a largo plazo, mucho mayor que los 200€ anuales que recibe el asesor, pero ese coste recae completamente sobre el cliente, no sobre quien hace la recomendación).",
              },
            ],
            reflection:
              "¿Has recibido alguna vez una recomendación de inversión (de un asesor, un conocido, o contenido en redes sociales) sin preguntarte explícitamente si esa persona o entidad tenía algún incentivo económico para hacer esa recomendación concreta? ¿Cómo crees que aplicarás la pregunta \"¿quién se beneficia de que yo siga este consejo?\" en el futuro?",
          },
        },
        {
          id: "m9l5",
          title: "Construyendo tu propio criterio de protección",
          simple:
            "Más allá de memorizar señales de alerta concretas, el objetivo final de este módulo es que desarrolles un criterio propio, basado en los principios de todo el curso, que te permita evaluar de forma independiente cualquier oferta o recomendación de inversión que encuentres en el futuro, incluso ante situaciones nuevas no cubiertas explícitamente en estas lecciones.",
          technical: `Los mecanismos de fraude y las malas recomendaciones evolucionan constantemente, adaptándose a nuevas tecnologías, productos financieros, y tendencias del momento (criptoactivos, inteligencia artificial aplicada a "trading automático", nuevas plataformas). Por eso, más valioso que memorizar una lista fija de señales de alerta concretas (que puede quedar desactualizada con el tiempo) es desarrollar un conjunto de principios generales, basados en los fundamentos vistos a lo largo de todo este curso, que sirvan como marco de evaluación crítica ante cualquier oferta o recomendación futura, incluso ante formatos completamente nuevos que puedan surgir.

Algunos principios generales de protección, que sintetizan lo visto en este módulo y en el resto del curso, incluyen:

1. Contrastar cualquier promesa de rentabilidad con el principio riesgo-rentabilidad (Módulo 1): si algo promete una rentabilidad muy superior a la media histórica de mercados diversificados, con poco o ningún riesgo declarado, la carga de la prueba recae sobre quien hace esa promesa extraordinaria, no sobre el escepticismo razonable del inversor.

2. Preguntar siempre "¿cómo se genera exactamente esta rentabilidad?" y exigir una respuesta clara, verificable, y coherente con mecanismos económicos reales (como los vistos en los Módulos 1, 2, 4 y 8 sobre cómo generan valor las empresas, los bonos, o los mercados en general), no solo testimonios o promesas vagas.

3. Verificar la regulación y supervisión: comprobar si la entidad o producto está registrado ante el regulador correspondiente (CNMV, Banco de España, u organismo equivalente según la jurisdicción) es un paso de verificación básico, gratuito, y aplicable a prácticamente cualquier oferta de inversión legítima.

4. Identificar quién se beneficia económicamente de la recomendación, y en qué medida ese incentivo podría sesgar la objetividad del consejo recibido.

5. Desconfiar de la presión temporal artificial y de la dificultad para obtener información clara y detallada tras hacer preguntas directas y específicas.

6. Recordar la dificultad demostrada de batir al mercado de forma consistente (Módulos 3 y 8): cualquier oferta que prometa hacerlo de forma sistemática y sin apenas riesgo, especialmente si proviene de fuentes sin trayectoria verificable ni supervisión regulatoria, merece un escrutinio particularmente riguroso.

7. Dar tiempo a la decisión: las oportunidades de inversión legítimas y bien fundamentadas rara vez requieren una decisión inmediata sin margen para investigar, reflexionar, y eventualmente consultar con fuentes independientes de confianza.

Ninguno de estos principios ofrece una garantía absoluta contra el fraude o las malas decisiones (la sofisticación de ciertos esquemas fraudulentos puede ser considerable), pero en conjunto, aplicados de forma consistente y con el conocimiento adquirido a lo largo de todo este curso, reducen significativamente la vulnerabilidad de un inversor ante ofertas y recomendaciones de baja calidad o directamente fraudulentas, presentes y futuras.`,
          numericExample:
            "Aplicando el principio 1 (contrastar con riesgo-rentabilidad) a una nueva oferta hipotética que prometiera un 15% mensual \"sin riesgo\" a través de un mecanismo de \"arbitraje automatizado con inteligencia artificial\": esa rentabilidad equivaldría a más de un 435% anual compuesto ((1,15)^12 − 1 ≈ 4,35, es decir, 435%), una cifra que, contrastada con la rentabilidad histórica media de la renta variable global vista en el curso (7-8% anual real a muy largo plazo), es más de 50 veces superior — una desviación tan extrema del rango histórico razonable que, independientemente de lo convincente que suene la explicación tecnológica ofrecida (\"inteligencia artificial\", \"arbitraje automatizado\"), debería generar un escepticismo extremadamente alto, aplicando simplemente el principio general de contraste con la relación riesgo-rentabilidad histórica, sin necesidad de entender los detalles técnicos específicos de esa supuesta tecnología.",
          realExample:
            "A lo largo de la historia financiera reciente, han surgido sucesivamente distintas \"modas\" de fraude adaptadas a cada época (esquemas piramidales tradicionales, fondos de inversión fraudulentos, ICOs fraudulentas de criptoactivos, plataformas de \"trading automatizado con IA\" sin verificación real de su funcionamiento), pero prácticamente todos ellos, al aplicar los principios generales descritos en esta lección (contrastar con la relación riesgo-rentabilidad histórica, exigir transparencia sobre el mecanismo real, verificar regulación, identificar incentivos del recomendador), muestran patrones de alerta reconocibles, independientemente de la novedad tecnológica o narrativa específica utilizada en cada caso concreto.",
          analogy:
            "Desarrollar un criterio propio de protección, basado en principios generales en vez de una lista fija de señales concretas, es como aprender a nadar de verdad en vez de memorizar una lista específica de piscinas peligrosas conocidas: el conocimiento de los principios fundamentales (cómo funciona la flotación, cómo reaccionar ante corrientes) te protege ante cualquier piscina o playa nueva que encuentres en el futuro, incluso una que nunca habías visto antes, mientras que memorizar solo una lista fija de lugares peligrosos concretos no te ayudaría ante un peligro nuevo y distinto que no estuviera en esa lista original.",
          mistakes: [
            "Pensar que memorizar una lista fija de señales de alerta de estafas conocidas es suficiente protección permanente, sin desarrollar la capacidad de aplicar principios generales a situaciones nuevas y no vistas previamente.",
            "Bajar la guardia ante ofertas que utilizan terminología tecnológica sofisticada o de moda (\"inteligencia artificial\", \"blockchain\", \"arbitraje algorítmico\"), asumiendo que la complejidad técnica aparente es, por sí misma, garantía de legitimidad.",
            "No aplicar el mismo escrutinio crítico a recomendaciones que provienen de fuentes con las que se tiene una relación personal de confianza (amigos, familiares), asumiendo que la buena intención de quien recomienda garantiza la calidad objetiva de esa recomendación.",
          ],
          summary:
            "Más allá de señales de alerta específicas, el objetivo de este módulo es desarrollar un criterio propio de protección basado en principios generales aplicables a cualquier situación futura: contrastar promesas con la relación riesgo-rentabilidad histórica, exigir transparencia sobre el mecanismo real de generación de valor, verificar regulación, identificar incentivos del recomendador, desconfiar de la presión temporal, y recordar la dificultad demostrada de batir al mercado de forma consistente. Estos principios, aplicados de forma sistemática, protegen ante formas de fraude o malas recomendaciones tanto conocidas como futuras.",
          exercises: {
            quiz: [
              {
                q: "El objetivo principal de este módulo, más allá de memorizar señales de alerta concretas, es:",
                options: [
                  "Aprender de memoria una lista fija de estafas históricas conocidas",
                  "Desarrollar principios generales de evaluación crítica aplicables a situaciones nuevas y no vistas previamente",
                  "Evitar cualquier tipo de inversión de forma permanente",
                  "Confiar exclusivamente en recomendaciones de familiares y amigos",
                ],
                correct: 1,
                explain:
                  "Dado que los mecanismos de fraude evolucionan constantemente, el valor real está en desarrollar principios generales de evaluación crítica (basados en los fundamentos de todo el curso) que sirvan ante cualquier situación futura, no solo en memorizar ejemplos históricos específicos.",
              },
              {
                q: "Ante una oferta de inversión que usa terminología tecnológica sofisticada (\"inteligencia artificial\", \"arbitraje algorítmico\") para justificar rentabilidades extraordinarias:",
                options: [
                  "La complejidad técnica aparente es, por sí misma, garantía suficiente de legitimidad",
                  "Deben aplicarse los mismos principios generales de escrutinio crítico (contraste con riesgo-rentabilidad, transparencia, regulación) independientemente de la terminología utilizada",
                  "Nunca se debe cuestionar una oferta que menciona inteligencia artificial",
                  "Es automáticamente ilegal mencionar tecnología en una oferta de inversión",
                ],
                correct: 1,
                explain:
                  "La terminología tecnológica sofisticada no exime a una oferta de inversión del mismo escrutinio crítico basado en principios fundamentales; de hecho, términos de moda se utilizan a menudo precisamente para generar una falsa sensación de sofisticación y legitimidad que dificulte el análisis crítico.",
              },
            ],
            cases: [
              {
                prompt:
                  "Imagina que dentro de varios años surge una nueva categoría de producto de inversión que no existe todavía hoy, con una narrativa tecnológica completamente nueva. Sin conocer los detalles específicos de ese producto futuro, ¿qué principios generales de los vistos en este módulo aplicarías para evaluarlo con criterio propio?",
                solution:
                  "Independientemente de la naturaleza tecnológica específica de ese producto futuro desconocido hoy, se podrían aplicar los mismos principios generales vistos en esta lección: (1) Contrastar cualquier promesa de rentabilidad con la relación histórica riesgo-rentabilidad vista en el Módulo 1 — una rentabilidad prometida muy superior a la media histórica de mercados diversificados, con poco riesgo declarado, seguiría siendo una señal de alerta fundamental, independientemente de la tecnología subyacente. (2) Exigir una explicación clara y verificable del mecanismo económico real que generaría esa rentabilidad, más allá de la terminología tecnológica de moda utilizada para describirlo. (3) Verificar si ese nuevo tipo de producto o entidad está sujeto a algún tipo de regulación y supervisión por el organismo correspondiente en ese momento futuro. (4) Identificar quién se beneficia económicamente de que se invierta en ese producto, y si existe transparencia suficiente sobre esos incentivos. (5) Desconfiar de cualquier presión temporal artificial para decidir rápidamente sin margen de investigación. Estos principios, al estar basados en fundamentos económicos y de comportamiento humano relativamente estables en el tiempo (la relación riesgo-rentabilidad, los incentivos económicos, la dificultad de generar rentabilidades extraordinarias de forma consistente), siguen siendo aplicables incluso ante innovaciones tecnológicas o narrativas de producto completamente nuevas que hoy ni siquiera podemos anticipar con precisión.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Aplicando el principio de contraste con la relación riesgo-rentabilidad histórica, calcula la rentabilidad anual compuesta equivalente de una oferta hipotética que promete un 8% de rentabilidad mensual \"garantizada\", usando (1+r_mensual)^12 − 1, y compárala (calculando cuántas veces superior es) con una rentabilidad histórica media razonable del 7,5% anual de una cartera diversificada de largo plazo.",
                solution:
                  "Rentabilidad anual compuesta equivalente: (1,08)^12 − 1 ≈ 2,518 − 1 = 1,518, es decir, aproximadamente un 151,8% anual.\n\nComparado con una rentabilidad histórica media razonable del 7,5% anual: 151,8% / 7,5% ≈ 20,2 veces superior.\n\nEste cálculo, aplicando simplemente el principio general de contraste numérico con la referencia histórica razonable vista a lo largo de todo el curso, revela de forma inmediata y cuantitativa la naturaleza extraordinariamente inverosímil de esta promesa hipotética, sin necesidad de conocer ningún detalle adicional sobre el supuesto mecanismo tecnológico o narrativa específica utilizada para justificarla — ilustrando el valor práctico de tener interiorizados los órdenes de magnitud razonables de rentabilidad vistos en este curso como herramienta rápida de detección de ofertas fraudulentas o extremadamente improbables.",
              },
            ],
            reflection:
              "Repasando todo lo aprendido en este módulo, ¿cuáles dirías que son los dos o tres principios que más te ayudarán a protegerte, de aquí en adelante, ante cualquier oferta o recomendación de inversión que recibas, incluso ante situaciones o productos que hoy ni siquiera existen todavía?",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 9",
        passScore: 70,
        questions: [
          {
            q: "\"Perseguir rentabilidades pasadas\" como error común de inversión implica:",
            options: [
              "Analizar cuidadosamente los fundamentos antes de invertir",
              "Elegir un fondo o activo principalmente porque ha rentado mucho recientemente, sin más análisis",
              "Mantener una cartera diversificada estable a largo plazo",
              "Verificar la regulación de una entidad antes de invertir",
            ],
            correct: 1,
            topic: "Errores típicos del inversor",
          },
          {
            q: "Una promesa de rentabilidad muy alta y consistente, con poco o ningún riesgo declarado, es una señal de alerta porque:",
            options: [
              "Es normal en cualquier producto financiero legítimo",
              "Contradice el principio estructural de la relación riesgo-rentabilidad",
              "Solo aplica a productos de renta fija",
              "Es obligatoria por ley en toda oferta de inversión",
            ],
            correct: 1,
            topic: "Anatomía de una estafa financiera",
          },
          {
            q: "En España, verificar si una entidad o producto de inversión está registrado y supervisado corresponde principalmente a:",
            options: [
              "No es necesario verificarlo nunca",
              "La CNMV o el Banco de España, según el tipo de producto",
              "Únicamente el banco que ofrece el producto",
              "Un trámite exclusivo para grandes patrimonios",
            ],
            correct: 1,
            topic: "Anatomía de una estafa financiera",
          },
          {
            q: "Los CFDs (Contratos por Diferencia), según los datos publicados por entidades reguladas en la UE:",
            options: [
              "Generan pérdidas en menos del 10% de las cuentas de clientes particulares",
              "Generan pérdidas en un porcentaje muy elevado (frecuentemente 70-80% o más) de las cuentas de clientes particulares",
              "Están completamente libres de riesgo",
              "Están prohibidos en toda la Unión Europea",
            ],
            correct: 1,
            topic: "Productos financieros arriesgados",
          },
          {
            q: "Una retrocesión, en el contexto del asesoramiento financiero, se refiere a:",
            options: [
              "Un impuesto sobre las plusvalías",
              "Una comisión que puede recibir un asesor por recomendar un producto concreto, generando un potencial conflicto de interés",
              "El proceso de devolución de dinero por fraude",
              "Un tipo de fondo indexado específico",
            ],
            correct: 1,
            topic: "Cómo detectar malas recomendaciones",
          },
          {
            q: "Una recomendación de inversión basada principalmente en la experiencia anecdótica individual de una persona (\"gané mucho con esto\"):",
            options: [
              "Es siempre prueba estadísticamente sólida de éxito futuro",
              "Puede reflejar suerte, contexto no repetible, o sesgo de supervivencia, sin ser evidencia robusta por sí sola",
              "Es la mejor fuente de información sobre inversión",
              "Solo se aplica a bonos gubernamentales",
            ],
            correct: 1,
            topic: "Cómo detectar malas recomendaciones",
          },
          {
            q: "El objetivo principal de desarrollar un criterio propio de protección, más allá de memorizar señales de alerta concretas, es:",
            options: [
              "Evitar cualquier inversión de forma permanente",
              "Aplicar principios generales de evaluación crítica ante situaciones nuevas y no vistas previamente",
              "Confiar exclusivamente en recomendaciones de conocidos",
              "Memorizar una lista fija e inmutable de estafas históricas",
            ],
            correct: 1,
            topic: "Construyendo tu propio criterio",
          },
          {
            q: "Un producto promete un 6% de rentabilidad mensual \"garantizada\". Usando (1+r_mensual)^12−1, ¿cuál es aproximadamente la rentabilidad anual compuesta equivalente que estaría prometiendo?",
            options: ["≈ 72%", "≈ 101%", "≈ 143%", "≈ 200%"],
            correct: 2,
            topic: "Anatomía de una estafa financiera (cálculo)",
          },
        ],
      },
    },
    {
      id: "m10",
      number: 10,
      title: "Diseño de tu estrategia de inversión",
      objective:
        "Integrar todo lo aprendido a lo largo del curso en un plan de inversión personal, concreto y por escrito, adaptado a tu horizonte de 20 años, tu tolerancia al riesgo, y tu situación en España — el paso final para convertir el conocimiento adquirido en una estrategia que puedas ejecutar y mantener de forma consistente.",
      time: "5 sesiones de ~35 min",
      prereq: "Módulos 0 a 9 completos — este módulo integra todo el contenido previo del curso.",
      learn:
        "A sintetizar todo el conocimiento del curso en un documento de estrategia personal por escrito: tus objetivos, tu asset allocation, tu plan de aportaciones, tus criterios de rebalanceo, tu plan de reacción ante caídas de mercado, y tus próximos pasos concretos.",
      lessons: [
        {
          id: "m10l1",
          title: "Definir tus objetivos y tu horizonte con precisión",
          simple:
            "Antes de decidir en qué invertir, conviene definir con la mayor precisión posible qué estás buscando conseguir, para cuándo, y qué significa realmente para ti la \"independencia financiera\" que mencionaste al principio de este curso.",
          technical: `El primer paso de cualquier estrategia de inversión sólida no es "qué comprar", sino "para qué y para cuándo". A lo largo de este curso, tu objetivo declarado ha sido alcanzar la independencia financiera en un horizonte de aproximadamente 20 años. Este módulo final te invita a concretar ese objetivo con mayor precisión, aplicando los conceptos vistos:

- Definir qué significa "independencia financiera" en tu caso concreto: ¿un capital que te permita cubrir tus gastos anuales mediante retiradas sostenibles de una cartera de inversión (un concepto relacionado con la llamada "tasa de retirada segura", que estudios como el histórico Trinity Study han situado, con matices y debates metodológicos posteriores, en torno al 4% anual de retirada inicial ajustada por inflación como referencia orientativa, aunque este porcentaje es objeto de debate continuo entre analistas y depende de múltiples factores personales)? ¿Complementar unos ingresos laborales reducidos? ¿Un capital objetivo concreto en euros?

- Estimar, de forma aproximada, cuánto capital necesitarías para ese objetivo: si, por ejemplo, tu objetivo es poder retirar de forma sostenible 24.000€ anuales (ajustados por inflación con el tiempo, Módulo 0) de tu cartera, y usas como referencia orientativa una tasa de retirada del 4% anual, el capital objetivo aproximado sería 24.000€ / 0,04 = 600.000€ (en términos de poder adquisitivo actual, es decir, en euros de hoy, sin ajustar todavía por la inflación acumulada durante los 20 años hasta alcanzar ese objetivo).

- Revisar tu horizonte temporal real: ¿los 20 años que mencionaste al principio siguen siendo precisos, o has aprendido a lo largo del curso matices (por ejemplo, sobre cómo el horizonte influye en el asset allocation, Módulo 5) que te hacen reconsiderar ligeramente ese plazo?

- Considerar hitos intermedios: ¿existen objetivos financieros intermedios en el camino (comprar una vivienda, financiar estudios, otros proyectos) que puedan requerir capital antes de los 20 años completos, y que por tanto merezcan una estrategia de inversión distinta (con menor tolerancia al riesgo por el horizonte más corto) separada de tu cartera principal de largo plazo?

Esta claridad inicial sobre objetivos y horizonte es la base sobre la que se construyen, de forma coherente, todas las demás decisiones de la estrategia: el asset allocation (Módulo 5), la elección de vehículos de inversión (Módulo 3), y el plan de aportaciones (siguiente lección de este módulo).`,
          numericExample:
            "Si estimas que necesitarás un capital de 600.000€ (en euros de poder adquisitivo actual) dentro de 20 años, y asumes una inflación media del 3% anual (Módulo 0), el capital nominal equivalente dentro de 20 años (en euros de ese momento futuro, sin ajustar por poder adquisitivo) sería aproximadamente: 600.000€ × (1,03)^20 ≈ 600.000€ × 1,806 ≈ 1.083.600€. Esta distinción entre \"capital objetivo en poder adquisitivo actual\" y \"capital nominal futuro necesario\" es importante para no subestimar, por el efecto de la inflación acumulada a 20 años, cuánto necesitarás realmente ahorrar e invertir en términos de euros futuros.",
          realExample:
            "El \"Trinity Study\" (1998) y sus actualizaciones posteriores por distintos investigadores han sido ampliamente citados como referencia orientativa sobre tasas de retirada sostenibles de una cartera de inversión diversificada a largo plazo, aunque con matices importantes: el estudio original se basó en datos históricos del mercado estadounidense, no necesariamente extrapolables sin ajustes a otros contextos, y estudios y debates posteriores han cuestionado si el 4% sigue siendo una referencia apropiada bajo distintos escenarios de rentabilidad esperada futura, duración de la jubilación, y composición de cartera — por lo que conviene tratarlo como un punto de partida orientativo para la reflexión personal, no como una cifra matemática garantizada y aplicable sin matices a cualquier situación individual.",
          analogy:
            "Definir tus objetivos con precisión antes de invertir es como planificar una ruta de senderismo de varios días: no basta con decir \"quiero llegar lejos\", conviene saber exactamente a qué punto geográfico concreto quieres llegar, cuánto tiempo tienes disponible, y qué nivel de dificultad del camino estás dispuesto a asumir — esa claridad inicial es la que permite elegir el equipo, la ruta, y el ritmo apropiados, en vez de caminar sin rumbo claro y descubrir a mitad de camino que no llevabas lo necesario para el destino real que tenías en mente.",
          mistakes: [
            "Mantener el objetivo de \"independencia financiera\" de forma vaga, sin traducirlo a una cifra aproximada de capital objetivo y un horizonte temporal concreto.",
            "No distinguir entre capital objetivo en poder adquisitivo actual y capital nominal futuro necesario, subestimando el efecto de la inflación acumulada a 20 años.",
            "No considerar hitos financieros intermedios que puedan requerir una estrategia de inversión distinta (con menor tolerancia al riesgo por horizonte más corto) separada de la cartera principal de largo plazo.",
          ],
          summary:
            "Antes de decidir en qué invertir, conviene definir con precisión qué significa tu objetivo de independencia financiera, estimar un capital objetivo aproximado (distinguiendo entre poder adquisitivo actual y capital nominal futuro ajustado por inflación), confirmar tu horizonte temporal real, y considerar hitos financieros intermedios que puedan requerir una estrategia separada. Esta claridad inicial es la base de todas las decisiones posteriores de tu estrategia.",
          exercises: {
            quiz: [
              {
                q: "Usando una tasa de retirada orientativa del 4% anual, si tu objetivo es poder retirar 20.000€ anuales de tu cartera (en poder adquisitivo actual), el capital objetivo aproximado sería:",
                options: ["80.000€", "200.000€", "500.000€", "800.000€"],
                correct: 2,
                explain:
                  "Capital objetivo = Retirada anual deseada / Tasa de retirada = 20.000€ / 0,04 = 500.000€, usando esta referencia orientativa (con los matices y debates metodológicos señalados en la lección).",
              },
              {
                q: "La distinción entre \"capital objetivo en poder adquisitivo actual\" y \"capital nominal futuro necesario\" es relevante porque:",
                options: [
                  "Son exactamente la misma cifra siempre",
                  "La inflación acumulada durante el horizonte de inversión hace que el capital nominal necesario en el futuro sea mayor que el objetivo expresado en poder adquisitivo actual",
                  "Solo aplica a inversores con más de 1 millón de euros",
                  "Es irrelevante para la planificación financiera",
                ],
                correct: 1,
                explain:
                  "Como se vio en el Módulo 0, la inflación reduce el poder adquisitivo del dinero con el tiempo, por lo que el capital nominal (en euros del futuro) necesario para alcanzar un objetivo expresado en poder adquisitivo actual debe ajustarse al alza para compensar esa inflación acumulada.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"Mi objetivo es simplemente 'tener mucho dinero ahorrado' dentro de 20 años, no necesito ser más específico que eso.\" ¿Qué le explicarías sobre por qué una definición más precisa del objetivo podría ayudarle a tomar mejores decisiones de inversión a lo largo del camino?",
                solution:
                  "Aunque \"tener mucho dinero ahorrado\" es un punto de partida comprensible, una definición más precisa del objetivo (una cifra aproximada de capital, un horizonte temporal concreto, una comprensión de qué tasa de retirada le permitiría vivir de ese capital) le proporcionaría varias ventajas prácticas: primero, le permitiría calcular con más precisión cuánto necesita aportar periódicamente (siguiente lección de este módulo) para alcanzar ese objetivo con una probabilidad razonable, en vez de ahorrar \"lo que pueda\" sin saber si eso será suficiente. Segundo, le ayudaría a evaluar si su asset allocation actual (Módulo 5) es coherente con la magnitud real de ese objetivo y el tiempo disponible para alcanzarlo. Tercero, tener una cifra y un plazo concretos facilita revisar periódicamente el progreso real hacia el objetivo, permitiendo ajustar el plan con antelación suficiente si se detecta una desviación significativa, en vez de descubrir demasiado tarde, cerca del horizonte de 20 años, que el capital acumulado es insuficiente para el nivel de vida que realmente deseaba en su etapa de independencia financiera.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Estimas que necesitarás un capital de 450.000€ en poder adquisitivo actual dentro de 20 años. Asumiendo una inflación media del 2,5% anual durante ese periodo, calcula el capital nominal aproximado que necesitarás en euros del momento futuro (dentro de 20 años), usando VF = VI × (1+inflación)^años.",
                solution:
                  "Capital nominal futuro: 450.000€ × (1,025)^20 ≈ 450.000€ × 1,639 ≈ 737.550€.\n\nEste cálculo muestra que, debido al efecto acumulado de la inflación durante 20 años (incluso con una inflación moderada del 2,5% anual), el capital nominal que efectivamente necesitarás acumular en euros del futuro es considerablemente superior (más de 287.000€ más) al capital objetivo expresado en poder adquisitivo actual — una distinción importante a tener en cuenta al planificar tus aportaciones periódicas, que se abordará en la siguiente lección de este módulo.",
              },
            ],
            reflection:
              "Con todo lo aprendido a lo largo del curso, ¿cómo definirías ahora, con la mayor precisión posible, tu objetivo personal de independencia financiera? Intenta escribir una cifra aproximada de capital objetivo (en poder adquisitivo actual) y confirmar si tu horizonte de 20 años sigue siendo el adecuado para tu situación real.",
          },
        },
        {
          id: "m10l2",
          title: "Calcular tu plan de aportaciones",
          simple:
            "Una vez que tienes un capital objetivo y un horizonte temporal, puedes calcular, con la fórmula del interés compuesto vista en el Módulo 0, aproximadamente cuánto necesitas aportar de forma periódica para alcanzar ese objetivo, dado un supuesto razonable de rentabilidad esperada.",
          technical: `Con un capital objetivo y un horizonte temporal definidos (lección anterior), y una rentabilidad esperada razonable (basada en tu asset allocation elegido, Módulo 5, y en referencias históricas de largo plazo vistas a lo largo del curso, con toda la incertidumbre inherente sobre si el futuro replicará exactamente el comportamiento histórico), es posible estimar de forma aproximada qué aportación periódica seria necesaria para alcanzar ese objetivo.

La fórmula del valor futuro de una serie de aportaciones periódicas (una extensión de la fórmula de interés compuesto simple vista en el Módulo 0) es más compleja que la fórmula básica VF = VI × (1+r)^n, ya que debe considerar que cada aportación individual tiene un tiempo distinto para crecer (la primera aportación tiene todo el horizonte completo para crecer, mientras que la última aportación, hecha justo al final del periodo, apenas tiene tiempo de generar rendimiento). Sin entrar en el desarrollo matemático completo de esa fórmula (que utiliza el concepto de "valor futuro de una anualidad"), es importante entender los factores clave que la determinan:

- El capital objetivo final deseado.
- El horizonte temporal disponible (a mayor horizonte, menor aportación periódica necesaria para el mismo objetivo, por el efecto del interés compuesto visto en el Módulo 0).
- La rentabilidad esperada asumida (a mayor rentabilidad esperada, menor aportación periódica necesaria — aunque, como se ha visto en el Módulo 1, mayor rentabilidad esperada suele implicar también mayor riesgo/volatilidad asumida).
- Si ya se dispone de un capital inicial de partida (que también crecerá con el tiempo, reduciendo la necesidad de aportaciones periódicas adicionales para alcanzar el mismo objetivo final).

Es fundamental aplicar, de forma explícita y consciente, un margen de prudencia en los supuestos utilizados para este cálculo: usar una rentabilidad esperada moderada (en vez de la más optimista posible dentro del rango histórico), y revisar y ajustar el plan periódicamente (por ejemplo, cada 1-2 años) según la evolución real de la cartera y de las circunstancias personales, en vez de tratar el cálculo inicial como una cifra fija e inamovible durante los 20 años completos.`,
          numericExample:
            "Usando una calculadora de interés compuesto con aportaciones periódicas (existen numerosas herramientas online gratuitas para este cálculo, dado que la fórmula matemática exacta es más compleja de resolver manualmente), un inversor que parte de 0€ de capital inicial, con un horizonte de 20 años, una rentabilidad esperada asumida del 6,5% anual (un supuesto moderado dentro del rango histórico visto en el curso, no el más optimista), necesitaría aportar aproximadamente entre 1.400€ y 1.500€ mensuales para alcanzar un capital nominal futuro de aproximadamente 737.000€ (la cifra calculada en el ejemplo numérico de la lección anterior). Si el mismo inversor ya dispusiera de un capital inicial de 15.000€ ya invertido, la aportación mensual necesaria para el mismo objetivo final se reduciría, ya que ese capital inicial también crecería con el tiempo, aportando una parte del camino hacia el objetivo final.",
          realExample:
            "Numerosas entidades financieras, gestoras de fondos, y webs especializadas en finanzas personales ofrecen calculadoras gratuitas de \"cuánto necesito ahorrar para alcanzar mi objetivo\", que aplican precisamente la fórmula de valor futuro de una anualidad mencionada en esta lección, permitiendo a cualquier inversor introducir su capital objetivo, horizonte, rentabilidad esperada, y capital inicial (si lo hay), para obtener una estimación de la aportación periódica necesaria, sin tener que resolver manualmente la fórmula matemática completa.",
          analogy:
            "Calcular tu plan de aportaciones es como planificar cuánto combustible necesitas cargar en un depósito para completar un viaje largo, sabiendo la distancia total (capital objetivo), la velocidad media a la que probablemente circularás (rentabilidad esperada), y el tiempo total del que dispones (horizonte temporal): con esos datos, puedes calcular de forma razonable cuánto combustible (aportación periódica) necesitas ir añadiendo por el camino, aunque conviene revisar periódicamente el nivel del depósito real durante el viaje, por si las condiciones reales (tráfico, viento en contra, en la analogía: rentabilidad real del mercado) difieren de lo inicialmente estimado, y ajustar el ritmo de repostaje en consecuencia.",
          mistakes: [
            "Usar supuestos de rentabilidad esperada demasiado optimistas (por ejemplo, basados en el mejor periodo histórico posible, en vez de una media razonable y prudente) al calcular la aportación periódica necesaria, lo que podría llevar a aportar menos de lo realmente necesario.",
            "Calcular el plan de aportaciones una única vez al principio y no revisarlo nunca más, sin ajustar según la evolución real de la cartera o cambios en las circunstancias personales a lo largo de los 20 años.",
            "No tener en cuenta el capital inicial ya disponible (si existe) al calcular la aportación periódica adicional necesaria, lo que podría llevar a sobreestimar el esfuerzo de ahorro futuro requerido.",
          ],
          summary:
            "Con un capital objetivo, un horizonte temporal, y una rentabilidad esperada razonable y prudente, se puede estimar la aportación periódica aproximada necesaria para alcanzar el objetivo, usando herramientas de cálculo de valor futuro de aportaciones periódicas. Conviene aplicar supuestos moderados (no los más optimistas), considerar el capital inicial ya disponible, y revisar y ajustar el plan periódicamente según la evolución real, en vez de tratarlo como una cifra fija e inamovible durante todo el horizonte.",
          exercises: {
            quiz: [
              {
                q: "Al calcular la aportación periódica necesaria para alcanzar un capital objetivo, un horizonte temporal más largo (en igualdad del resto de factores) implica:",
                options: [
                  "Una aportación periódica necesaria mayor",
                  "Una aportación periódica necesaria menor, por el efecto del interés compuesto actuando durante más tiempo",
                  "No tiene ninguna relación con la aportación periódica necesaria",
                  "Solo afecta si la rentabilidad esperada es del 0%",
                ],
                correct: 1,
                explain:
                  "Un horizonte más largo permite que el interés compuesto (Módulo 0) actúe durante más tiempo, reduciendo la aportación periódica necesaria para alcanzar el mismo capital objetivo final, en comparación con un horizonte más corto.",
              },
              {
                q: "Al calcular el plan de aportaciones, es recomendable:",
                options: [
                  "Usar siempre el escenario de rentabilidad más optimista posible dentro del rango histórico",
                  "Usar supuestos de rentabilidad moderados y prudentes, y revisar el plan periódicamente según la evolución real",
                  "Calcular el plan una única vez y no volver a revisarlo nunca",
                  "Ignorar por completo cualquier capital inicial ya disponible",
                ],
                correct: 1,
                explain:
                  "Aplicar supuestos prudentes (no los más optimistas) y revisar periódicamente el plan según la evolución real de la cartera y las circunstancias personales es una práctica más robusta que fijar el cálculo inicial de forma permanente e inamovible.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor calcula su aportación mensual necesaria usando una rentabilidad esperada del 11% anual (un supuesto muy optimista, superior a la media histórica razonable de la renta variable global vista en el curso), obteniendo una aportación mensual relativamente baja y cómoda para su presupuesto. ¿Qué riesgo le señalarías sobre esta forma de calcular su plan?",
                solution:
                  "Usar un supuesto de rentabilidad esperada excesivamente optimista (11% anual, muy por encima de la referencia histórica razonable de en torno al 7-8% anual real vista en el curso para una cartera diversificada de renta variable global) genera un riesgo significativo: si la rentabilidad real de su cartera a lo largo de los 20 años resulta ser más moderada (más cercana a la referencia histórica razonable, o incluso inferior en algunos periodos), la aportación mensual que ha calculado como \"cómoda\" resultará, en la práctica, insuficiente para alcanzar su capital objetivo real dentro del plazo previsto. Sería mucho más prudente usar un supuesto de rentabilidad esperada más conservador (por ejemplo, en el rango del 6-7% anual, incluso por debajo de la media histórica pura, como margen de seguridad adicional) para el cálculo inicial de su plan de aportaciones, aceptando una aportación mensual algo mayor pero con más probabilidad realista de alcanzar el objetivo, y ajustando el plan al alza (aumentando aportaciones) si, con el tiempo, observa que la rentabilidad real de su cartera está siendo sistemáticamente inferior a ese supuesto prudente inicial, en vez de descubrir esa insuficiencia solo al final del horizonte de 20 años, cuando ya sería demasiado tarde para corregirlo con margen suficiente.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor ya tiene un capital inicial de 20.000€ invertido, y estima una rentabilidad esperada del 6,5% anual. Calcula, usando la fórmula simple VF = VI × (1+r)^n (sin considerar aportaciones adicionales, solo para estimar el crecimiento de ese capital inicial en solitario), cuánto valdría ese capital inicial de 20.000€ dentro de 20 años sin ninguna aportación adicional, y reflexiona sobre cómo esto reduciría la aportación periódica adicional necesaria para alcanzar un objetivo mayor.",
                solution:
                  "Valor futuro del capital inicial (sin aportaciones adicionales): 20.000€ × (1,065)^20 ≈ 20.000€ × 3,524 ≈ 70.480€.\n\nEste cálculo muestra que, incluso sin ninguna aportación periódica adicional, el capital inicial de 20.000€ ya invertido crecería, por sí solo, hasta aproximadamente 70.480€ en 20 años (asumiendo esa rentabilidad esperada del 6,5% anual). Esto significa que, si el objetivo final de capital nominal futuro fuera, por ejemplo, de 737.000€ (como en el ejemplo de la lección anterior), la parte que debería cubrirse mediante aportaciones periódicas adicionales sería menor: 737.000€ − 70.480€ ≈ 666.520€, en vez de tener que calcular la aportación periódica necesaria para alcanzar los 737.000€ completos partiendo de cero, como sería el caso de un inversor sin capital inicial previo.",
              },
            ],
            reflection:
              "Si tuvieras que calcular ahora mismo, usando una calculadora de interés compuesto con aportaciones periódicas (buscando alguna herramienta online, si lo deseas), tu aportación mensual aproximada necesaria para tu objetivo personal (definido en la lección anterior), ¿qué cifra obtendrías, y te parece un nivel de ahorro realista y sostenible dado tu situación actual de ingresos y gastos?",
          },
        },
        {
          id: "m10l3",
          title: "Diseñar tu asset allocation personal",
          simple:
            "Con tu horizonte y objetivos claros, y habiendo repasado los conceptos de riesgo, diversificación y clases de activos vistos en el curso, es momento de concretar, de forma específica, tu asset allocation personal: qué porcentaje de tu cartera dedicarás a cada clase de activo.",
          technical: `Integrando los conceptos vistos a lo largo de todo el curso (relación riesgo-rentabilidad del Módulo 1, tipos de índices del Módulo 2, vehículos de inversión del Módulo 3, renta fija del Módulo 4, y principios de asset allocation del Módulo 5), este es el momento de concretar tu propia asignación de activos personal, respondiendo explícitamente a estas preguntas:

1. ¿Qué porcentaje de tu cartera dedicarás a renta variable frente a renta fija? Considera tu horizonte de 20 años (que, en general, permite asumir un porcentaje relativamente alto de renta variable, dado el tiempo disponible para recuperarse de caídas temporales, Módulo 1) y tu tolerancia al riesgo personal (Módulo 5), sin dejarte guiar únicamente por heurísticas simplificadas como la regla "110 menos tu edad", sino ajustándolas a tu situación y sensación de comodidad real ante la volatilidad.

2. Dentro de la renta variable, ¿qué distribución geográfica prefieres? ¿Un único fondo global (como uno indexado al MSCI World o al MSCI ACWI, que ya incluye una ponderación por capitalización entre países, Módulo 2), o una combinación de varios fondos con pesos geográficos distintos a los que ofrece la ponderación pura por capitalización (por ejemplo, dando más peso deliberado a mercados emergentes o a Europa del que tendrían de forma естándar en un índice global)?

3. ¿Incluirás mercados emergentes de forma explícita (Módulo 2), y en qué proporción, dado que quedan fuera de índices como el MSCI World?

4. ¿Qué papel tendrá la renta fija en tu cartera (Módulo 4)? ¿Qué proporción, y con qué duración/plazo de los bonos (recordando la relación entre duración y sensibilidad a tipos de interés)?

5. ¿Considerarás otras clases de activos (como REITs inmobiliarios u otros, que se mencionan brevemente en el temario ampliado del curso, aunque no se hayan desarrollado en profundidad en los módulos vistos hasta ahora) en una proporción menor, complementaria a tu núcleo principal de renta variable y renta fija?

No existe un asset allocation "correcto" de forma universal y objetiva: existe el asset allocation que, dados tu horizonte, tu tolerancia al riesgo real (no la que te gustaría tener idealmente, sino la que honestamente crees que tendrás durante una caída fuerte de mercado, Módulo 6), y tus objetivos concretos, tiene más probabilidad de que puedas mantener de forma consistente durante los 20 años completos, sin abandonarlo por pánico en el peor momento posible.`,
          numericExample:
            "Un ejemplo (no una recomendación universal, sino una ilustración) de asset allocation coherente para un inversor con horizonte de 20 años y tolerancia al riesgo alta podría ser: 80% renta variable (por ejemplo, dividido en 60% MSCI World / S&P 500 como núcleo, y 20% MSCI Emerging Markets para aumentar deliberadamente la exposición a mercados emergentes más allá de su peso natural en un índice global puro) y 20% renta fija (bonos gubernamentales de calidad, con una duración moderada). Otro inversor con la misma edad y horizonte, pero con menor tolerancia personal al riesgo, podría optar, de forma igualmente razonable para su perfil, por un 60% renta variable / 40% renta fija, aceptando una rentabilidad esperada algo menor a cambio de una volatilidad de cartera más moderada y, potencialmente, mayor probabilidad de mantener la estrategia sin desviarse por pánico durante las caídas de mercado.",
          realExample:
            "Muchos inversores indexados de largo plazo en España optan por carteras relativamente simples, con 2 o 3 fondos indexados (por ejemplo, un fondo de renta variable global tipo MSCI World o MSCI ACWI, opcionalmente complementado con un fondo específico de mercados emergentes, y un fondo de renta fija), en vez de carteras muy complejas con muchos fondos distintos, precisamente para mantener la estrategia simple, comprensible, y más fácil de mantener de forma disciplinada a largo plazo, coherente con la filosofía de simplicidad e indexación defendida a lo largo de este curso.",
          analogy:
            "Diseñar tu asset allocation personal es como decidir la composición final de una receta después de haber aprendido, a lo largo de este curso, las propiedades de cada ingrediente disponible (renta variable global, mercados emergentes, renta fija, distintas duraciones de bonos): no hay una única receta \"correcta\" para todo el mundo, sino la combinación de ingredientes que, dado tu propio paladar (tolerancia al riesgo) y el tiempo que tienes para cocinar (horizonte temporal), tiene más probabilidades de resultar en un plato (cartera) que disfrutarás mantener durante mucho tiempo, sin abandonar la receta a mitad de cocción por no gustarte el proceso.",
          mistakes: [
            "Copiar el asset allocation de otra persona (un influencer, un familiar, un foro de internet) sin adaptarlo a tu propio horizonte, tolerancia al riesgo, y objetivos personales concretos.",
            "Diseñar una cartera excesivamente compleja, con muchos fondos distintos que se solapan significativamente entre sí (Módulo 1), sin un beneficio real adicional de diversificación que justifique esa complejidad.",
            "Elegir un asset allocation basándose en la tolerancia al riesgo \"ideal\" que te gustaría tener, en vez de la tolerancia real que honestamente crees que tendrás durante una caída fuerte de mercado (Módulo 6).",
          ],
          summary:
            "Diseñar tu asset allocation personal implica decidir, de forma concreta y fundamentada en todo lo aprendido en el curso, el porcentaje entre renta variable y renta fija, la distribución geográfica dentro de la renta variable (incluyendo si añades mercados emergentes de forma explícita), y las características de la renta fija elegida. No existe una asignación universalmente \"correcta\": existe la que, dado tu horizonte y tu tolerancia al riesgo real, tienes más probabilidad de mantener de forma consistente durante los 20 años completos de tu estrategia.",
          exercises: {
            quiz: [
              {
                q: "Al diseñar un asset allocation personal, la tolerancia al riesgo relevante a considerar es:",
                options: [
                  "La tolerancia al riesgo \"ideal\" que te gustaría tener",
                  "La tolerancia al riesgo real que honestamente crees que tendrás durante una caída fuerte de mercado",
                  "Siempre la máxima posible, sin excepciones",
                  "La tolerancia al riesgo de la persona con más seguidores en redes sociales",
                ],
                correct: 1,
                explain:
                  "El asset allocation más apropiado es el que, dada tu tolerancia al riesgo real (no la idealizada), tienes más probabilidad de mantener sin abandonar la estrategia por pánico durante episodios de volatilidad de mercado (Módulo 6).",
              },
              {
                q: "El MSCI World, por sí solo, no incluye de forma directa:",
                options: [
                  "Empresas de Estados Unidos",
                  "Mercados emergentes como China o India",
                  "Empresas de Japón",
                  "Empresas de Alemania",
                ],
                correct: 1,
                explain:
                  "Como se vio en el Módulo 2, los mercados emergentes quedan fuera del MSCI World por diseño; un inversor que quiera esa exposición debe añadirla explícitamente con un fondo específico o usar un índice combinado como el MSCI ACWI.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"He visto en un foro de internet que la cartera 'perfecta' es 90% MSCI World y 10% oro, así que voy a replicar exactamente esa distribución sin más análisis.\" ¿Qué le sugerirías considerar antes de adoptar directamente esa distribución ajena?",
                solution:
                  "Le sugeriría considerar que esa distribución, aunque pueda ser razonable para la persona que la comparte en el foro, no tiene por qué ser la más apropiada para su situación personal concreta, ya que el asset allocation óptimo depende de factores individuales como el horizonte temporal exacto, la tolerancia al riesgo real, y los objetivos financieros específicos de cada persona (elementos trabajados en las lecciones anteriores de este mismo módulo). Antes de replicar directamente esa distribución, sería más prudente preguntarse: ¿es mi horizonte temporal y mi tolerancia al riesgo comparable a la de esa persona del foro (de quien, probablemente, se desconocen esos detalles personales)? ¿Entiendo bien el papel que jugaría cada componente de esa cartera (por ejemplo, si no se ha estudiado en profundidad el papel del oro como activo, cabría investigarlo antes de incorporarlo, en vez de añadirlo solo porque aparece en una recomendación ajena)? Copiar una cartera ajena sin ese análisis personal previo contradice el espíritu de todo este módulo final, que busca precisamente que cada inversor diseñe una estrategia fundamentada en su propia situación, no en la reproducción acrítica de decisiones de terceros con circunstancias potencialmente muy distintas.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor diseña un asset allocation de 75% renta variable / 25% renta fija sobre una cartera de 30.000€. Dentro de la renta variable, decide un 70% en un fondo MSCI World y un 30% en un fondo MSCI Emerging Markets. Calcula el importe en euros que corresponde a cada uno de los tres componentes de su cartera (renta variable MSCI World, renta variable Emerging Markets, y renta fija).",
                solution:
                  "Renta variable total: 30.000€ × 0,75 = 22.500€.\nRenta fija: 30.000€ × 0,25 = 7.500€.\n\nDentro de la renta variable (22.500€):\nMSCI World: 22.500€ × 0,70 = 15.750€.\nMSCI Emerging Markets: 22.500€ × 0,30 = 6.750€.\n\nResumen final de la cartera: 15.750€ en MSCI World, 6.750€ en MSCI Emerging Markets, y 7.500€ en renta fija, sumando el total de 30.000€ de la cartera completa, distribuidos según el asset allocation personal definido por este inversor.",
              },
            ],
            reflection:
              "Con todo lo aprendido en el curso, intenta escribir tu propio asset allocation personal preliminar: ¿qué porcentaje de renta variable frente a renta fija elegirías? Dentro de la renta variable, ¿incluirías mercados emergentes de forma explícita, y en qué proporción? Recuerda que esta es una reflexión preliminar que podrás seguir refinando en las siguientes lecciones de este módulo final.",
          },
        },
        {
          id: "m10l4",
          title: "Elegir tus vehículos y plan de ejecución",
          simple:
            "Con tu asset allocation definido, el siguiente paso es decidir con qué vehículos concretos (fondos indexados, ETFs) y a través de qué bróker o plataforma vas a implementar tu estrategia, considerando las particularidades fiscales españolas vistas en el Módulo 7.",
          technical: `Traduciendo el asset allocation diseñado en la lección anterior a una implementación práctica y concreta, conviene decidir de forma explícita:

- Vehículo de inversión (fondo indexado tradicional frente a ETF, Módulo 3): dado el régimen de traspasos sin tributación inmediata específico de los fondos en España (Módulo 7), muchos inversores de largo plazo que prevén hacer ajustes o rebalanceos con el tiempo priorizan los fondos indexados tradicionales sobre los ETFs, aunque esta no es una regla absoluta: algunos inversores prefieren la operativa en tiempo real de los ETFs, o combinan ambos vehículos según distintas porciones de su cartera.

- Gestora y fondo/ETF concreto para cada componente de tu asset allocation: aplicando los criterios vistos en el Módulo 3 (TER bajo, Lección 3.4; tracking error reducido, Lección 3.5; liquidez adecuada si se opta por ETFs, Lección 3.6), y verificando que el fondo o ETF elegido realmente replica el índice deseado (por ejemplo, confirmando que un fondo "MSCI World" replica efectivamente ese índice y no una variante distinta con una composición diferente).

- Bróker o plataforma a través de la cual operar: considerando factores como las comisiones de custodia y compraventa (si aplican), la facilidad de uso de la plataforma, el acceso a los fondos o ETFs concretos que has elegido, y si la entidad está debidamente registrada y supervisada por la CNMV o el regulador correspondiente (Módulo 9).

- Automatización de las aportaciones periódicas (DCA, Módulo 5): configurar, en la medida de lo posible, aportaciones automáticas recurrentes (por ejemplo, mensuales) coincidiendo con el cobro de tu nómina u otros ingresos periódicos, reduciendo la necesidad de decisiones activas repetidas sobre "cuándo" invertir cada mes.

Un principio general útil en esta fase de implementación práctica: la simplicidad razonable suele ser preferible a la complejidad innecesaria. Una cartera con 2-4 fondos bien elegidos, que cubran tu asset allocation deseado de forma eficiente, suele ser más fácil de entender, mantener, y rebalancear de forma consistente a lo largo de 20 años, que una cartera con muchos más componentes que aporten poca diversificación adicional real (Módulo 1) a cambio de mayor complejidad de gestión y seguimiento.`,
          numericExample:
            "Un inversor con el asset allocation del ejemplo de la lección anterior (70% MSCI World, 30% MSCI Emerging Markets dentro de su renta variable, más una porción de renta fija) podría implementarlo con solo 3 fondos indexados tradicionales de bajo coste (uno para cada componente), todos accesibles a través de un único bróker o plataforma que ofrezca acceso a fondos de varias gestoras distintas, configurando una aportación mensual automática que se reparta, según los porcentajes de su asset allocation, entre esos 3 fondos cada mes, sin necesidad de decisiones manuales repetidas sobre cuándo o cómo invertir cada aportación periódica.",
          realExample:
            "Existen en España varios brókeres y plataformas (tanto nacionales como internacionales operando bajo regulación europea) que dan acceso a un catálogo amplio de fondos indexados de bajo coste de distintas gestoras (Vanguard, Amundi, Fidelity, entre otras), permitiendo a un inversor construir una cartera diversificada con pocos fondos, gestionando aportaciones periódicas y traspasos entre fondos desde una única plataforma centralizada, simplificando considerablemente la operativa práctica de mantener una estrategia de inversión indexada a largo plazo.",
          analogy:
            "Elegir tus vehículos y plan de ejecución es como decidir, tras haber planeado la receta completa (asset allocation), en qué supermercados concretos vas a comprar cada ingrediente, y cómo vas a organizar la compra recurrente para no tener que decidir cada semana desde cero: una vez que sabes exactamente qué necesitas y dónde conseguirlo de forma fiable y a buen precio, automatizar ese proceso de compra recurrente libera tiempo y energía mental, y reduce el riesgo de decisiones improvisadas de última hora.",
          mistakes: [
            "Elegir fondos o ETFs sin verificar que realmente replican el índice deseado, o sin comparar su TER y tracking error con alternativas similares disponibles.",
            "Construir una cartera excesivamente compleja con muchos fondos que se solapan significativamente, dificultando el seguimiento y el rebalanceo consistente a lo largo del tiempo.",
            "No automatizar las aportaciones periódicas, dejando la decisión de \"cuándo invertir cada mes\" sujeta a decisiones activas repetidas, más vulnerables a los sesgos psicológicos vistos en el Módulo 6.",
          ],
          summary:
            "Implementar tu asset allocation de forma práctica implica elegir el vehículo de inversión (fondo indexado frente a ETF, considerando las implicaciones fiscales españolas del Módulo 7), seleccionar fondos o ETFs concretos con buen TER y bajo tracking error, elegir un bróker o plataforma adecuada y debidamente regulada, y automatizar las aportaciones periódicas siempre que sea posible. La simplicidad razonable (pocos fondos bien elegidos) suele ser preferible a la complejidad innecesaria para mantener la estrategia de forma consistente durante 20 años.",
          exercises: {
            quiz: [
              {
                q: "Para un inversor español de largo plazo que prevé hacer ajustes o rebalanceos con el tiempo, el régimen de traspasos (Módulo 7) suele hacer preferibles:",
                options: [
                  "Los ETFs, en todos los casos sin excepción",
                  "Los fondos indexados tradicionales, por el diferimiento fiscal que ofrecen los traspasos entre fondos",
                  "Las acciones individuales de empresas concretas",
                  "Los productos apalancados como los CFDs",
                ],
                correct: 1,
                explain:
                  "Como se vio en los Módulos 3 y 7, el régimen de traspasos sin tributación inmediata es una particularidad específica de los fondos de inversión tradicionales en España, lo que suele hacerlos más eficientes fiscalmente que los ETFs para inversores que prevén ajustar su cartera con el tiempo.",
              },
              {
                q: "Automatizar las aportaciones periódicas (DCA) ayuda principalmente a:",
                options: [
                  "Garantizar una rentabilidad superior a la media del mercado",
                  "Reducir la necesidad de decisiones activas repetidas sobre cuándo invertir, más vulnerables a sesgos psicológicos",
                  "Eliminar por completo el riesgo de la inversión",
                  "Evitar pagar cualquier tipo de impuesto",
                ],
                correct: 1,
                explain:
                  "Automatizar las aportaciones reduce la exposición a decisiones activas repetidas (que podrían verse afectadas por sesgos como el miedo o la euforia, Módulo 6), facilitando mantener la disciplina de inversión sistemática a largo plazo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Un inversor te dice: \"He decidido construir mi cartera con 12 fondos distintos, uno para cada país que me interesa individualmente, así tengo control total sobre mi exposición geográfica exacta.\" ¿Qué le señalarías sobre los posibles inconvenientes prácticos de esta decisión, conectando con los principios de simplicidad vistos en esta lección?",
                solution:
                  "Aunque el deseo de tener un control muy granular sobre la exposición geográfica es comprensible, una cartera con 12 fondos distintos introduce una complejidad de gestión considerable que puede no aportar un beneficio proporcional de diversificación adicional real, especialmente si esos 12 fondos ya se solaparían significativamente con lo que ofrecería, de forma mucho más simple, un único fondo MSCI World o MSCI ACWI bien diversificado (Módulo 1 y 2). Esta complejidad tiene costes prácticos concretos: sería mucho más difícil hacer un seguimiento claro del asset allocation real conjunto de la cartera, el proceso de rebalanceo (Módulo 5) se volvería mucho más laborioso con 12 componentes distintos en vez de 2-4, y la probabilidad de cometer errores de gestión o de abandonar el seguimiento consistente de la estrategia por la carga de complejidad aumentaría considerablemente a lo largo de 20 años. Sería razonable preguntarle si ese nivel de granularidad geográfica específica realmente responde a un análisis fundamentado de sus objetivos personales, o si, en la práctica, una cartera más simple con 2-4 fondos bien elegidos (por ejemplo, un fondo global más un fondo específico de mercados emergentes con el peso adicional deseado, más renta fija) podría ofrecerle una exposición geográfica suficientemente ajustada a sus preferencias, con una complejidad de gestión mucho menor y más sostenible a largo plazo.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Un inversor tiene un asset allocation de 3 componentes: 55% en un fondo MSCI World (TER 0,18%), 20% en un fondo MSCI Emerging Markets (TER 0,25%), y 25% en un fondo de renta fija (TER 0,15%). Calcula el TER medio ponderado de su cartera completa.",
                solution:
                  "TER medio ponderado: (55% × 0,18%) + (20% × 0,25%) + (25% × 0,15%) = 0,099% + 0,050% + 0,0375% = 0,1865% aproximadamente.\n\nEste cálculo (redondeable a aproximadamente 0,19%) muestra el coste medio anual conjunto de toda la cartera, ponderado según el peso de cada componente, una cifra útil para tener una visión global del coste total de la estrategia completa, más allá del TER individual de cada fondo por separado, y que puede compararse con el TER medio de estrategias alternativas al evaluar la eficiencia de costes global de la cartera diseñada.",
              },
            ],
            reflection:
              "Con tu asset allocation preliminar definido en la lección anterior, ¿qué número aproximado de fondos o ETFs crees que necesitarías para implementarlo de forma razonablemente simple? ¿Has identificado ya, o necesitarías investigar, qué bróker o plataforma te daría acceso a esos vehículos concretos desde España?",
          },
        },
        {
          id: "m10l5",
          title: "Tu documento de estrategia final",
          simple:
            "El último paso de este curso es sintetizar todo lo trabajado en este módulo (y en el curso completo) en un documento breve, por escrito, que recoja tu estrategia de inversión personal — un documento al que puedas volver en el futuro, especialmente en los momentos de mayor incertidumbre o volatilidad de mercado.",
          technical: `Tener un plan de inversión por escrito, aunque sea breve y sencillo, ofrece varias ventajas prácticas importantes, especialmente conectando con lo visto en el Módulo 6 sobre psicología del inversor: en los momentos de mayor tensión emocional (una caída fuerte de mercado, una noticia alarmante, una tentación de FOMO ante una subida especulativa), tener un documento previamente redactado con calma, al que volver como referencia, suele ser mucho más eficaz para mantener la disciplina que intentar razonar desde cero en pleno episodio de estrés emocional.

Un documento de estrategia de inversión personal, sintetizando todo lo trabajado a lo largo de este módulo final (y del curso completo), podría incluir, de forma breve y concreta:

1. Mis objetivos: capital objetivo aproximado (en poder adquisitivo actual y ajustado por inflación), horizonte temporal, y qué significa para mí la independencia financiera (Lección 10.1).

2. Mi plan de aportaciones: cantidad periódica aproximada que aportaré, y con qué frecuencia (Lección 10.2).

3. Mi asset allocation: porcentajes concretos entre renta variable y renta fija, y distribución geográfica dentro de la renta variable (Lección 10.3).

4. Mis vehículos de inversión: fondos o ETFs concretos elegidos para cada componente, y el bróker o plataforma utilizada (Lección 10.4).

5. Mi plan de rebalanceo: con qué frecuencia o bajo qué criterio de desviación rebalancearé mi cartera (Módulo 5).

6. Mi fondo de emergencia: cuánto mantengo separado de mi cartera de inversión, y en qué instrumento (Módulo 5).

7. Mi plan de reacción ante caídas de mercado: una declaración explícita, escrita con calma, de cómo actuaré (o, más importante, cómo NO actuaré) ante una caída fuerte de mercado, recordándome a mí mismo los principios vistos en el Módulo 6 sobre la diferencia entre volatilidad temporal y pérdida permanente (Módulo 1).

8. Mi fecha de revisión: cuándo revisaré este documento completo de nuevo (por ejemplo, una vez al año, o ante cambios significativos en mis circunstancias personales), para ajustarlo si es necesario, sin caer tampoco en el extremo de revisarlo y modificarlo con demasiada frecuencia por impulsos de corto plazo.

Este documento no necesita ser extenso ni sofisticado: su valor principal reside en la claridad y en el hecho de haber sido reflexionado y redactado con calma, en un momento sin la presión emocional de una crisis de mercado, precisamente para servir de ancla racional en los momentos futuros en los que esa calma sea más difícil de mantener por sí sola.`,
          numericExample:
            "Un ejemplo simplificado de cómo podrían verse algunos puntos de este documento para un inversor concreto (ilustrativo, no una plantilla universal a copiar sin reflexión propia): \"Objetivo: 700.000€ de capital nominal en 20 años. Aportación: 900€ mensuales, automatizados. Asset allocation: 75% renta variable (55% MSCI World, 20% MSCI Emerging Markets) / 25% renta fija. Rebalanceo: una vez al año, cada enero, o si algún componente se desvía más de 5 puntos porcentuales de su objetivo. Plan ante caídas: no vendo nada durante caídas de mercado; sigo con mis aportaciones automáticas según lo planeado; solo reviso mi asset allocation en mi fecha de rebalanceo anual predefinida, no de forma reactiva ante las noticias del momento.\"",
          realExample:
            "La práctica de tener una \"declaración de política de inversión\" (Investment Policy Statement, IPS) por escrito es una herramienta estándar utilizada por gestores de patrimonio profesionales para sus clientes, precisamente por las mismas razones vistas en esta lección: sirve como documento de referencia acordado con calma, que ayuda a mantener la disciplina de la estrategia decidida durante los inevitables periodos de volatilidad e incertidumbre del mercado a lo largo de los años, evitando decisiones improvisadas basadas en el estado de ánimo del momento.",
          analogy:
            "Tu documento de estrategia final es como las instrucciones de seguridad que se leen antes de despegar en un avión: en un vuelo tranquilo, pueden parecer un trámite casi innecesario, pero en el improbable caso de una situación de emergencia real, tener esas instrucciones ya interiorizadas de antemano (en vez de tener que decidir qué hacer improvisando en pleno pánico del momento) marca una diferencia fundamental entre una reacción ordenada y eficaz, y una reacción caótica que puede empeorar la situación. De la misma forma, tu plan de inversión por escrito, redactado con calma, es la \"instrucción de seguridad\" que consultarás (mentalmente o literalmente) en el momento de mayor turbulencia del mercado.",
          mistakes: [
            "No llegar a poner por escrito el plan de inversión, dejándolo como una serie de ideas dispersas y no del todo concretadas en la mente, más vulnerables a modificarse por impulsos del momento.",
            "Redactar el documento pero no volver a consultarlo nunca en los momentos de mayor tensión emocional, cuando precisamente es más útil como ancla racional.",
            "Revisar y modificar el documento con demasiada frecuencia, basándose en noticias o movimientos de mercado de corto plazo, en vez de reservar esa revisión para una fecha predefinida (por ejemplo, anual) o ante cambios verdaderamente significativos en las circunstancias personales.",
          ],
          summary:
            "Sintetizar toda tu estrategia de inversión (objetivos, plan de aportaciones, asset allocation, vehículos elegidos, plan de rebalanceo, fondo de emergencia, y plan de reacción ante caídas de mercado) en un documento breve por escrito, redactado con calma, es una herramienta práctica final de este curso que te ayudará a mantener la disciplina de tu estrategia durante los inevitables episodios de volatilidad e incertidumbre a lo largo de tus próximos 20 años como inversor.",
          exercises: {
            quiz: [
              {
                q: "El principal valor práctico de tener un documento de estrategia de inversión por escrito es:",
                options: [
                  "Garantizar matemáticamente una rentabilidad determinada",
                  "Servir de ancla racional, redactada con calma, a la que volver en los momentos de mayor tensión emocional del mercado",
                  "Cumplir un requisito legal obligatorio para poder invertir",
                  "Eliminar por completo cualquier posibilidad de pérdida",
                ],
                correct: 1,
                explain:
                  "El documento no elimina el riesgo ni garantiza resultados, pero sirve como referencia racional, elaborada con calma, que ayuda a mantener la disciplina de la estrategia decidida durante los momentos de mayor volatilidad emocional, cuando el pensamiento racional puro es más difícil de sostener.",
              },
              {
                q: "Respecto a la frecuencia de revisión del documento de estrategia, lo más recomendable es:",
                options: [
                  "Revisarlo y modificarlo cada vez que hay una noticia relevante sobre los mercados",
                  "Establecer una fecha de revisión predefinida (por ejemplo, anual), o revisarlo ante cambios significativos en las circunstancias personales, evitando modificaciones impulsivas frecuentes",
                  "No revisarlo nunca una vez redactado",
                  "Revisarlo cada día para ajustarlo a los movimientos diarios del mercado",
                ],
                correct: 1,
                explain:
                  "Un equilibrio razonable implica revisar el documento en fechas predefinidas o ante cambios personales verdaderamente significativos, evitando tanto la rigidez de no revisarlo nunca como la inestabilidad de modificarlo constantemente por impulsos de corto plazo.",
              },
            ],
            cases: [
              {
                prompt:
                  "Imagina que, dentro de unos años, el mercado sufre una caída del 35% en pocos meses, y sientes una fuerte tentación de vender toda tu cartera por miedo. Si en ese momento consultas tu documento de estrategia (redactado hoy, con calma), y en él escribiste explícitamente \"no vendo nada durante caídas de mercado, sigo con mis aportaciones automáticas según lo planeado\", ¿cómo crees que esa frase, escrita hoy sin la presión emocional de ese futuro momento, podría influir en tu decisión real llegado ese momento?",
                solution:
                  "Esa frase, redactada hoy en un momento de calma y reflexión racional (como el que estás teniendo ahora mismo completando este curso), actuaría como un compromiso previo contigo mismo, tomado precisamente cuando el pensamiento racional no está comprometido por el miedo agudo del momento de crisis real. En el momento futuro de pánico, leer esa declaración explícita —escrita por tu propio yo racional del pasado, no por un consejo externo abstracto— podría ayudarte a reconocer que la tentación de vender es, muy probablemente, la misma reacción de pánico colectivo estudiada en el Módulo 6, en vez de una decisión nueva y racional basada en información genuinamente distinta sobre los fundamentos de tu estrategia a largo plazo. No garantiza que definitivamente vayas a seguir esa indicación (las emociones intensas pueden, en algunos casos, superar incluso los mejores planes previos), pero aumenta significativamente la probabilidad de mantener la disciplina, comparado con no tener ninguna referencia previa a la que volver, teniendo que decidir completamente desde cero, en plena tormenta emocional, sin el ancla de esa reflexión previa hecha con la cabeza fría.",
              },
            ],
            numeric: [
              {
                prompt:
                  "Recapitulando los cálculos de las lecciones anteriores de este módulo: un inversor tiene un objetivo de capital nominal futuro de 737.000€ en 20 años, ya cuenta con un capital inicial que crecerá hasta aproximadamente 70.480€ sin aportaciones adicionales, y calcula que necesitará aportar aproximadamente 1.350€ mensuales durante los 20 años para cubrir la diferencia restante, asumiendo una rentabilidad del 6,5% anual. Si revisa su plan cada año y, en la revisión del año 5, observa que su cartera va ligeramente por debajo de la trayectoria esperada (por una rentabilidad real algo menor a la asumida en esos primeros años), ¿qué tipo de ajustes, de los vistos a lo largo de este módulo, podría considerar para corregir el rumbo hacia su objetivo final?",
                solution:
                  "Ante esta desviación detectada en la revisión periódica (una práctica recomendada explícitamente en esta lección), el inversor podría considerar varios ajustes, sin que ninguno sea automáticamente \"el correcto\" sin más contexto: (1) Aumentar la aportación mensual para los años restantes, compensando la menor rentabilidad de los primeros años con un mayor esfuerzo de ahorro futuro. (2) Revisar si su horizonte temporal de 20 años sigue siendo fijo, o si tendría margen para extenderlo ligeramente si fuese necesario, dando más tiempo al interés compuesto para compensar la desviación. (3) Revisar (con cautela, sin caer en el error de perseguir rentabilidad pasada visto en el Módulo 9) si su asset allocation actual sigue siendo coherente con sus objetivos, sin cambiar de estrategia de forma impulsiva basándose solo en unos pocos años de rentabilidad inferior a la esperada, que podría deberse simplemente a la volatilidad normal de mercado (Módulo 1) más que a un problema fundamental de la estrategia elegida. Lo importante, coherente con todo el espíritu de este módulo final, es que esta revisión y estos ajustes se hagan de forma reflexionada y en la fecha de revisión predefinida, no como una reacción impulsiva ante un único año de rentabilidad inferior a la esperada dentro de un horizonte de inversión mucho más largo de 20 años completos.",
              },
            ],
            reflection:
              "Este es el ejercicio final del curso: tómate el tiempo necesario (no hace falta que sea ahora mismo, en esta misma sesión) para redactar, aunque sea de forma breve, tu propio documento de estrategia de inversión personal, incluyendo los puntos vistos en esta lección: objetivos, plan de aportaciones, asset allocation, vehículos elegidos, plan de rebalanceo, fondo de emergencia, plan de reacción ante caídas de mercado, y fecha de próxima revisión. Guárdalo en un lugar al que puedas volver fácilmente en el futuro — será, probablemente, el documento financiero más valioso que redactes a partir de completar este curso.",
          },
        },
      ],
      exam: {
        title: "Examen Módulo 10",
        passScore: 70,
        questions: [
          {
            q: "La tasa de retirada del 4% anual (referencia orientativa del Trinity Study y estudios relacionados) se usa habitualmente para:",
            options: [
              "Calcular el TER de un fondo indexado",
              "Estimar, de forma orientativa, el capital objetivo necesario para vivir de una cartera de inversión de forma sostenible",
              "Calcular la inflación anual esperada",
              "Determinar el tipo de interés de un bono gubernamental",
            ],
            correct: 1,
            topic: "Definir objetivos y horizonte",
          },
          {
            q: "La distinción entre \"capital objetivo en poder adquisitivo actual\" y \"capital nominal futuro necesario\" es relevante porque:",
            options: [
              "Son siempre exactamente la misma cifra",
              "La inflación acumulada hace que el capital nominal necesario en el futuro sea mayor que el objetivo en poder adquisitivo actual",
              "Solo afecta a inversores con más de 1 millón de euros",
              "Es completamente irrelevante para la planificación",
            ],
            correct: 1,
            topic: "Definir objetivos y horizonte",
          },
          {
            q: "Al calcular el plan de aportaciones periódicas necesarias, es recomendable usar:",
            options: [
              "El supuesto de rentabilidad más optimista posible dentro del rango histórico",
              "Supuestos de rentabilidad moderados y prudentes, revisando el plan periódicamente",
              "Siempre una rentabilidad esperada del 0%",
              "Nunca revisar el plan una vez calculado",
            ],
            correct: 1,
            topic: "Calcular el plan de aportaciones",
          },
          {
            q: "El asset allocation personal más apropiado para un inversor es el que:",
            options: [
              "Copia exactamente el de un influencer con muchos seguidores",
              "Tiene más probabilidad de que el inversor lo mantenga de forma consistente, dado su horizonte y tolerancia al riesgo real",
              "Siempre incluye el máximo porcentaje posible de renta variable, sin excepciones",
              "Es idéntico para cualquier persona, independientemente de su situación",
            ],
            correct: 1,
            topic: "Diseñar el asset allocation",
          },
          {
            q: "Para un inversor español de largo plazo que prevé hacer ajustes o rebalanceos con el tiempo, el régimen de traspasos suele hacer preferibles:",
            options: [
              "Los ETFs en todos los casos",
              "Los fondos indexados tradicionales, por su diferimiento fiscal en los traspasos",
              "Las acciones individuales exclusivamente",
              "Los productos apalancados",
            ],
            correct: 1,
            topic: "Elegir vehículos y plan de ejecución",
          },
          {
            q: "Automatizar las aportaciones periódicas ayuda principalmente a:",
            options: [
              "Garantizar una rentabilidad fija predeterminada",
              "Reducir la necesidad de decisiones activas repetidas, más vulnerables a sesgos psicológicos",
              "Eliminar cualquier tipo de comisión",
              "Evitar completamente la declaración de la renta",
            ],
            correct: 1,
            topic: "Elegir vehículos y plan de ejecución",
          },
          {
            q: "El principal valor práctico de tener un documento de estrategia de inversión por escrito es:",
            options: [
              "Garantizar matemáticamente un resultado concreto",
              "Servir de ancla racional, redactada con calma, para los momentos de mayor tensión emocional del mercado",
              "Ser un requisito legal obligatorio",
              "Sustituir la necesidad de un fondo de emergencia",
            ],
            correct: 1,
            topic: "Documento de estrategia final",
          },
          {
            q: "Un inversor estima un capital objetivo de 500.000€ en poder adquisitivo actual. Asumiendo una inflación media del 2,5% anual durante 20 años, usando VF=VI×(1+inflación)^20, ¿cuál es aproximadamente el capital nominal futuro necesario?",
            options: ["≈ 550.000€", "≈ 655.000€", "≈ 819.000€", "≈ 900.000€"],
            correct: 2,
            topic: "Definir objetivos y horizonte (cálculo)",
          },
        ],
      },
    },
  ],
};

/* =========================================================================
   STORAGE HELPERS — usa localStorage del navegador (funciona en cualquier
   web, no depende de Claude). Cada persona que abra la web guarda su propio
   progreso en su propio navegador/dispositivo.
   ========================================================================= */

const STORAGE_KEY = "curso-inversion-progreso-v1";

async function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    /* no existing key yet */
  }
  return {
    completedLessons: {},
    examScores: {},
    lastPosition: { moduleId: "m0", lessonId: "m0l1" },
  };
}

async function saveProgress(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("No se pudo guardar el progreso", e);
  }
}

/* =========================================================================
   PEQUEÑOS COMPONENTES DE UI
   ========================================================================= */

function ProgressRing({ pct, size = 34 }) {
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  const gradId = `pr-grad-${size}`;
  return (
    <svg width={size} height={size} className="shrink-0">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B794F6" />
          <stop offset="100%" stopColor="#F0A6CA" />
        </linearGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#26202F" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={`url(#${gradId})`}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
}

function SectionLabel({ children, color = "#B794F6", tint = "#1C1729" }) {
  return (
    <div
      style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: tint, color }}
      className="inline-flex text-[11px] tracking-[0.1em] uppercase font-bold mb-2 px-2.5 py-1 rounded-full"
    >
      {children}
    </div>
  );
}

/* =========================================================================
   QUIZ COMPONENT
   ========================================================================= */

function QuizQuestion({ item, idx, onAnswered, savedAnswer }) {
  const [selected, setSelected] = useState(
    savedAnswer !== undefined ? savedAnswer : null
  );
  const [checked, setChecked] = useState(savedAnswer !== undefined);

  const handleSelect = (i) => {
    if (checked) return;
    setSelected(i);
  };

  const handleCheck = () => {
    if (selected === null) return;
    setChecked(true);
    onAnswered(idx, selected);
  };

  const isCorrect = selected === item.correct;

  return (
    <div className="border border-[#26202F] rounded-2xl p-5 bg-[#15121F] shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_20px_-12px_rgba(0,0,0,0.10)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.07),0_14px_30px_-12px_rgba(0,0,0,0.16)] transition-shadow duration-300">
      <p className="font-bold text-[#F5F3FA] mb-3.5 leading-relaxed flex gap-2.5">
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[12px] text-white font-bold mt-0.5"
          style={{ backgroundColor: "#B794F6" }}
        >
          {idx + 1}
        </span>
        <span className="pt-0.5">{item.q}</span>
      </p>
      <div className="space-y-2 mb-4">
        {item.options.map((opt, i) => {
          let stateClasses = "border-[#26202F] hover:border-[#FFB020]/60 hover:bg-[#FFB020]/[0.04] hover:-translate-y-px hover:shadow-sm";
          let pillClasses = "bg-[#1C1826] text-[#9089A3]";
          if (checked) {
            if (i === item.correct) {
              stateClasses = "border-[#6EE7B7] bg-[#6EE7B7]/8 shadow-sm";
              pillClasses = "bg-[#6EE7B7] text-white";
            } else if (i === selected && i !== item.correct) {
              stateClasses = "border-[#FF7A6E] bg-[#FF7A6E]/8";
              pillClasses = "bg-[#FF7A6E] text-white";
            } else {
              stateClasses = "border-[#26202F] opacity-50";
            }
          } else if (selected === i) {
            stateClasses = "border-[#B794F6] bg-[#B794F6]/6 shadow-sm";
            pillClasses = "bg-[#B794F6] text-white";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={checked}
              className={`w-full text-left px-4 py-2.5 rounded-xl border text-[15px] leading-snug transition-all duration-150 flex items-center gap-3 ${stateClasses} ${
                checked ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className={`text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${pillClasses}`}
              >
                {String.fromCharCode(97 + i)}
              </span>
              <span className="text-[#E4DFF0]">{opt}</span>
            </button>
          );
        })}
      </div>
      {!checked ? (
        <button
          onClick={handleCheck}
          disabled={selected === null}
          className="text-sm px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-[#B794F6] to-[#C4A5FA] text-[#0D0B14] disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-md hover:shadow-[#B794F6]/30 active:scale-[0.98] transition-all duration-150"
        >
          Comprobar
        </button>
      ) : (
        <div
          className={`text-sm px-4 py-3 rounded-xl mt-2 border-l-[3px] ${
            isCorrect
              ? "bg-[#6EE7B7]/10 text-[#A7F3D5] border-l-[#6EE7B7]"
              : "bg-[#FF7A6E]/10 text-[#FFB4AB] border-l-[#FF7A6E]"
          }`}
        >
          <p className="font-bold mb-1">
            {isCorrect ? "✓ Correcto." : "✕ No es correcto."}
          </p>
          <p className="leading-relaxed opacity-90">{item.explain}</p>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   OPEN QUESTION (case / numeric / reflection) WITH HIDDEN SOLUTION
   ========================================================================= */

function OpenQuestion({ label, prompt, solution, storageKey, savedText, onSave }) {
  const [text, setText] = useState(savedText || "");
  const [revealed, setRevealed] = useState(false);

  const theme =
    label === "Caso práctico"
      ? { color: "#7DD3FC", tint: "#0F1E28", icon: Newspaper }
      : label === "Ejercicio numérico"
      ? { color: "#6EE7B7", tint: "#12241D", icon: Calculator }
      : { color: "#F0A6CA", tint: "#1E1621", icon: MessageCircleQuestion };
  const Icon = theme.icon;

  return (
    <div
      className="border rounded-2xl p-5 bg-[#15121F] shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_20px_-12px_rgba(0,0,0,0.10)] hover:shadow-[0_1px_3px_rgba(0,0,0,0.07),0_14px_30px_-12px_rgba(0,0,0,0.16)] transition-shadow duration-300"
      style={{ borderColor: `${theme.color}30` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: theme.tint, color: theme.color }}
        >
          <Icon size={15} strokeWidth={2.4} />
        </span>
        <span
          className="text-[13px] font-bold tracking-tight"
          style={{ color: theme.color, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {label}
        </span>
      </div>
      <p className="text-[#F5F3FA] leading-relaxed mb-3.5 whitespace-pre-line">{prompt}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => onSave(storageKey, text)}
        placeholder="Escribe aquí tu respuesta, aunque no estés seguro…"
        rows={4}
        className="w-full border border-[#26202F] bg-[#15121F] rounded-xl px-3.5 py-2.5 text-[15px] leading-relaxed text-[#E4DFF0] focus:outline-none focus:ring-2 focus:ring-offset-0 focus:bg-[#1C1729] transition-colors resize-y"
        style={{ "--tw-ring-color": `${theme.color}40` }}
        onFocus={(e) => (e.target.style.borderColor = theme.color)}
        onBlurCapture={(e) => (e.target.style.borderColor = "")}
      />
      {solution && (
        <div className="mt-3">
          {!revealed ? (
            <button
              onClick={() => setRevealed(true)}
              className="text-sm inline-flex items-center gap-1.5 text-[#0D0B14] font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: theme.color }}
            >
              <Eye size={15} /> Ver corrección
            </button>
          ) : (
            <div>
              <button
                onClick={() => setRevealed(false)}
                className="text-sm inline-flex items-center gap-1.5 mb-2.5 font-semibold"
                style={{ color: theme.color }}
              >
                <EyeOff size={15} /> Ocultar
              </button>
              <div
                className="rounded-xl px-4 py-3.5 text-sm leading-relaxed text-[#F5F3FA] whitespace-pre-line shadow-sm border-l-[3px]"
                style={{ backgroundColor: theme.tint, borderLeftColor: theme.color }}
              >
                {solution}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   LESSON VIEW
   ========================================================================= */

function LessonView({ lesson, progress, setProgress, onComplete, isCompleted }) {
  const key = lesson.id;

  const answersKey = `answers_${key}`;
  const savedAnswers = progress.answers?.[key] || {};

  const saveOpenAnswer = useCallback(
    (storageKey, text) => {
      setProgress((prev) => ({
        ...prev,
        answers: {
          ...prev.answers,
          [key]: { ...(prev.answers?.[key] || {}), [storageKey]: text },
        },
      }));
    },
    [key, setProgress]
  );

  const saveQuizAnswer = useCallback(
    (idx, selected) => {
      setProgress((prev) => ({
        ...prev,
        answers: {
          ...prev.answers,
          [key]: {
            ...(prev.answers?.[key] || {}),
            [`quiz_${idx}`]: selected,
          },
        },
      }));
    },
    [key, setProgress]
  );

  const CONTENT_TABS = [
    { key: "simple", label: "Sencillo" },
    { key: "technical", label: "Técnico" },
    { key: "numericExample", label: "Ejemplo" },
    { key: "realExample", label: "Real" },
    { key: "analogy", label: "Analogía" },
    { key: "mistakes", label: "Errores" },
    { key: "summary", label: "Resumen" },
  ];
  const [contentTab, setContentTab] = useState("simple");
  const [mainTab, setMainTab] = useState("content"); // 'content' | 'exercises'

  const renderContentBlock = () => {
    switch (contentTab) {
      case "simple":
        return (
          <Block variant="simple">
            <p className="text-[17px] leading-[1.7] text-[#E4DFF0] font-medium">{lesson.simple}</p>
          </Block>
        );
      case "technical":
        return (
          <Block variant="technical">
            <p className="text-[16px] leading-[1.75] text-[#E4DFF0] whitespace-pre-line">
              {lesson.technical}
            </p>
          </Block>
        );
      case "numericExample":
        return (
          <Block variant="numericExample">
            <p
              className="text-[13.5px] leading-[1.8] text-[#A7F3D5] whitespace-pre-line bg-[#12241D] rounded-xl px-4 py-3.5 border border-[#6EE7B7]/25"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {lesson.numericExample}
            </p>
          </Block>
        );
      case "realExample":
        return (
          <Block variant="realExample">
            <p className="text-[16px] leading-[1.75] text-[#E4DFF0] bg-[#0F1E28] rounded-xl px-4 py-3.5 border border-[#7DD3FC]/20">
              {lesson.realExample}
            </p>
          </Block>
        );
      case "analogy":
        return (
          <Block variant="analogy">
            <p
              className="text-[18px] leading-[1.7] text-[#F5F3FA] bg-[#1E1621] rounded-xl px-5 py-4 border-l-[3px] border-l-[#F0A6CA] border-y border-r border-[#F0A6CA]/15"
              style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
            >
              {lesson.analogy}
            </p>
          </Block>
        );
      case "mistakes":
        return (
          <Block variant="mistakes">
            <ul className="space-y-2 bg-[#231519] rounded-xl px-4 py-3.5 border border-[#FF7A6E]/20">
              {lesson.mistakes.map((m, i) => (
                <li key={i} className="flex gap-2.5 text-[15.5px] leading-relaxed text-[#E4DFF0]">
                  <span className="text-[#FF7A6E] mt-0.5 shrink-0 font-bold">✕</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Block>
        );
      case "summary":
        return (
          <Block variant="summary">
            <p className="text-[17px] leading-[1.75] text-[#F5F3FA] font-semibold bg-gradient-to-br from-[#241C0D] to-[#2B2210] rounded-xl px-4 py-4 border border-[#FFB020]/30 border-l-[4px] border-l-[#FFB020] shadow-sm">
              {lesson.summary}
            </p>
          </Block>
        );
      default:
        return null;
    }
  };

  const contentTabIdx = CONTENT_TABS.findIndex((t) => t.key === contentTab);

  return (
    <div className="max-w-[680px] mx-auto pb-24">
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase mb-4"
        style={{ backgroundColor: "#1C1729", color: "#B794F6", fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <BookOpen size={12} /> Lección
      </div>
      <h1
        className="text-[34px] md:text-[42px] leading-[1.08] font-bold text-[#F5F3FA] mb-3 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {lesson.title}
      </h1>
      <div className="h-[5px] w-14 rounded-full mb-6" style={{ backgroundColor: "#FFB020" }} />

      {/* Pestañas principales: Contenido / Ejercicios */}
      <div className="flex gap-2 mb-6 border-b border-[#26202F]">
        {[
          { key: "content", label: "Contenido" },
          { key: "exercises", label: "Ejercicios" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setMainTab(t.key)}
            className="px-1 pb-3 text-[15px] font-bold transition-colors relative"
            style={{
              color: mainTab === t.key ? "#F5F3FA" : "#6B6478",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {t.label}
            {mainTab === t.key && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: "#FFB020" }} />
            )}
          </button>
        ))}
      </div>

      {mainTab === "content" && (
        <>
          {/* Sub-pestañas de las 7 secciones de contenido */}
          <div className="flex gap-1.5 mb-6 overflow-x-auto pb-1">
            {CONTENT_TABS.map((t) => {
              const meta = BLOCK_STYLES[t.key];
              const active = contentTab === t.key;
              const Icon = meta.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setContentTab(t.key)}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-bold transition-all"
                  style={
                    active
                      ? { backgroundColor: `${meta.accent}22`, color: meta.accent, border: `1px solid ${meta.accent}55` }
                      : { color: "#6B6478", border: "1px solid transparent" }
                  }
                >
                  <Icon size={13} />
                  {t.label}
                </button>
              );
            })}
          </div>

          {renderContentBlock()}

          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => contentTabIdx > 0 && setContentTab(CONTENT_TABS[contentTabIdx - 1].key)}
              disabled={contentTabIdx === 0}
              className="text-[13px] font-bold flex items-center gap-1 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
              style={{ color: "#9089A3" }}
            >
              <ChevronLeft size={15} /> Anterior
            </button>
            <span className="text-[12px] font-semibold" style={{ color: "#6B6478" }}>
              {contentTabIdx + 1} / {CONTENT_TABS.length}
            </span>
            {contentTabIdx < CONTENT_TABS.length - 1 ? (
              <button
                onClick={() => setContentTab(CONTENT_TABS[contentTabIdx + 1].key)}
                className="text-[13px] font-bold flex items-center gap-1 transition-colors"
                style={{ color: "#FFB020" }}
              >
                Siguiente <ChevronRight size={15} />
              </button>
            ) : (
              <button
                onClick={() => setMainTab("exercises")}
                className="text-[13px] font-bold flex items-center gap-1 transition-colors"
                style={{ color: "#FFB020" }}
              >
                Ir a ejercicios <ChevronRight size={15} />
              </button>
            )}
          </div>
        </>
      )}

      {mainTab === "exercises" && (
        <>
          <div className="space-y-4 mb-8">
            <SectionLabel color="#B794F6" tint="#1C1729">Preguntas tipo test</SectionLabel>
            {lesson.exercises.quiz.map((item, i) => (
              <QuizQuestion
                key={i}
                item={item}
                idx={i}
                onAnswered={saveQuizAnswer}
                savedAnswer={savedAnswers[`quiz_${i}`]}
              />
            ))}
          </div>

          {lesson.exercises.cases?.length > 0 && (
            <div className="space-y-4 mb-8">
              {lesson.exercises.cases.map((c, i) => (
                <OpenQuestion
                  key={i}
                  label="Caso práctico"
                  prompt={c.prompt}
                  solution={c.solution}
                  storageKey={`case_${i}`}
                  savedText={savedAnswers[`case_${i}`]}
                  onSave={saveOpenAnswer}
                />
              ))}
            </div>
          )}

          {lesson.exercises.numeric?.length > 0 && (
            <div className="space-y-4 mb-8">
              {lesson.exercises.numeric.map((n, i) => (
                <OpenQuestion
                  key={i}
                  label="Ejercicio numérico"
                  prompt={n.prompt}
                  solution={n.solution}
                  storageKey={`numeric_${i}`}
                  savedText={savedAnswers[`numeric_${i}`]}
                  onSave={saveOpenAnswer}
                />
              ))}
            </div>
          )}

          {lesson.exercises.reflection && (
            <div className="mb-10">
              <OpenQuestion
                label="Pregunta de reflexión"
                prompt={lesson.exercises.reflection}
                solution={null}
                storageKey="reflection"
                savedText={savedAnswers.reflection}
                onSave={saveOpenAnswer}
              />
            </div>
          )}

          <button
            onClick={onComplete}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-[15px] transition-all duration-200 ${
              isCompleted
                ? "bg-[#6EE7B7]/10 text-[#A7F3D5] border border-[#6EE7B7]/30"
                : "bg-gradient-to-r from-[#B794F6] to-[#C4A5FA] text-[#0D0B14] hover:shadow-lg hover:shadow-[#B794F6]/30 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            }`}
          >
            <Check size={17} />
            {isCompleted ? "Lección completada" : "Marcar lección como completada"}
          </button>
        </>
      )}
    </div>
  );
}

function Block({ variant, children }) {
  const style = BLOCK_STYLES[variant];
  const Icon = style.icon;
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${style.accent}1F`, color: style.accent }}
        >
          <Icon size={15} strokeWidth={2.4} />
        </span>
        <span
          className="text-[13px] font-bold tracking-tight"
          style={{ color: style.accent, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {style.label}
        </span>
      </div>
      {children}
    </div>
  );
}

/* =========================================================================
   EXAM VIEW
   ========================================================================= */

function ExamView({ exam, moduleTitle, onFinish, savedResult }) {
  const [answers, setAnswers] = useState(savedResult?.answers || {});
  const [submitted, setSubmitted] = useState(!!savedResult);
  const [result, setResult] = useState(savedResult || null);

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    let correct = 0;
    const wrongTopics = [];
    exam.questions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
      else wrongTopics.push(q.topic);
    });
    const score = Math.round((correct / exam.questions.length) * 100);
    const res = { score, answers, wrongTopics: [...new Set(wrongTopics)], date: new Date().toISOString() };
    setResult(res);
    setSubmitted(true);
    onFinish(res);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setResult(null);
  };

  const passed = result && result.score >= exam.passScore;

  return (
    <div className="max-w-[680px] mx-auto pb-24">
      <SectionLabel color="#F0A6CA" tint="#1E1621">🔥 Examen final</SectionLabel>
      <h1
        className="text-[38px] leading-[1.1] font-bold text-[#F5F3FA] mb-1.5 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {exam.title}
      </h1>
      <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#B794F6] to-[#B794F6]/20 mb-4" />
      <p className="text-[15px] text-[#6B6478] mb-8">{moduleTitle}</p>

      {submitted && result && (
        <div
          className={`rounded-2xl border px-5 py-4 mb-8 ${
            passed
              ? "bg-[#6EE7B7]/10 border-[#6EE7B7]/30"
              : "bg-[#FF7A6E]/10 border-[#FF7A6E]/30"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span
              className={`text-lg font-bold ${passed ? "text-[#A7F3D5]" : "text-[#FFB4AB]"}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {passed ? "🎉" : "📚"} {result.score}% {passed ? "— Aprobado" : "— No superado"}
            </span>
            <button
              onClick={handleRetry}
              className="text-sm inline-flex items-center gap-1.5 text-[#B794F6] hover:text-[#9F7AE8] font-semibold"
            >
              <RotateCcw size={14} /> Repetir
            </button>
          </div>
          <p className="text-sm opacity-80">
            {passed
              ? "Has superado el mínimo necesario (70%) para avanzar al siguiente módulo."
              : `Necesitas un 70% para aprobar. Repasa especialmente: ${result.wrongTopics.join(", ")}.`}
          </p>
        </div>
      )}

      <div className="space-y-4">
        {exam.questions.map((q, i) => {
          const selected = answers[i];
          const isAnswered = selected !== undefined;
          return (
            <div key={i} className="border border-[#26202F] rounded-2xl p-5 bg-[#15121F] shadow-[0_1px_3px_rgba(0,0,0,0.3),0_8px_20px_-12px_rgba(0,0,0,0.10)]">
              <p className="font-bold text-[#F5F3FA] mb-3.5 leading-relaxed flex gap-2.5">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[12px] text-white font-bold mt-0.5"
                  style={{ backgroundColor: "#F0A6CA" }}
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{q.q}</span>
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  let cls = "border-[#26202F] hover:border-[#FFB020]/50";
                  let pillClasses = "bg-[#1C1826] text-[#9089A3]";
                  if (submitted) {
                    if (oi === q.correct) {
                      cls = "border-[#6EE7B7] bg-[#6EE7B7]/8";
                      pillClasses = "bg-[#6EE7B7] text-white";
                    } else if (oi === selected) {
                      cls = "border-[#FF7A6E] bg-[#FF7A6E]/8";
                      pillClasses = "bg-[#FF7A6E] text-white";
                    } else {
                      cls = "border-[#26202F] opacity-50";
                    }
                  } else if (selected === oi) {
                    cls = "border-[#B794F6] bg-[#B794F6]/6";
                    pillClasses = "bg-[#B794F6] text-white";
                  }
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(i, oi)}
                      disabled={submitted}
                      className={`w-full text-left px-4 py-2.5 rounded-xl border text-[15px] leading-snug transition-all duration-150 flex items-center gap-3 ${cls} ${
                        submitted ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        className={`text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${pillClasses}`}
                      >
                        {String.fromCharCode(97 + oi)}
                      </span>
                      <span className="text-[#E4DFF0]">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < exam.questions.length}
          className="w-full mt-8 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-[15px] bg-gradient-to-r from-[#F0A6CA] to-[#F6C4DC] text-[#0D0B14] disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#F0A6CA]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <Award size={17} />
          Entregar examen ({Object.keys(answers).length}/{exam.questions.length} respondidas)
        </button>
      )}
    </div>
  );
}

/* =========================================================================
   SIDEBAR / NAV
   ========================================================================= */

function Sidebar({ course, progress, current, setCurrent, open, setOpen }) {
  const totalCourseItems = course.modules.reduce((acc, m) => acc + m.lessons.length + 1, 0);
  const completedCourseItems = course.modules.reduce((acc, m) => {
    const doneLessons = m.lessons.filter((l) => progress.completedLessons?.[l.id]).length;
    const doneExam = progress.examScores?.[m.id] ? 1 : 0;
    return acc + doneLessons + doneExam;
  }, 0);
  const coursePct = Math.round((completedCourseItems / totalCourseItems) * 100);

  return (
      <aside
        className="hidden md:flex md:sticky top-0 left-0 h-screen w-[280px] bg-[#0D0B14]/80 backdrop-blur-md border-r border-[#26202F] shadow-[4px_0_28px_-8px_rgba(124,58,237,0.15)] z-40 flex-col"
      >
        <div className="px-6 pt-7 pb-6 bg-gradient-to-br from-[#B794F6] via-[#A25FE0] to-[#F0A6CA] relative overflow-hidden">
          <div className="absolute -right-6 -top-8 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute -left-8 bottom-0 w-20 h-20 rounded-full bg-white/10" />
          <div
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-[10px] tracking-[0.2em] uppercase text-white/70 mb-1.5 relative"
          >
            {course.subtitle}
          </div>
          <h1
            className="text-[22px] leading-[1.12] font-bold text-white tracking-tight relative"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {course.title}
          </h1>
        </div>

        <div className="px-6 py-3 flex items-center gap-3 border-b border-[#26202F]">
          <ProgressRing pct={coursePct} />
          <div>
            <div className="text-sm font-bold text-[#F5F3FA]">{coursePct}% del curso</div>
            <div
              className="text-xs text-[#FFC968] font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {completedCourseItems}/{totalCourseItems} completado
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-3">
          {course.modules.map((mod) => {
            const totalItems = mod.lessons.length + 1;
            const completedCount =
              mod.lessons.filter((l) => progress.completedLessons?.[l.id]).length +
              (progress.examScores?.[mod.id] ? 1 : 0);
            const isModuleActive = current.moduleId === mod.id;
            const isModuleDone = completedCount === totalItems;

            return (
              <div key={mod.id} className="mb-1">
                <div className="px-6 pt-2.5 pb-1.5 flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                      isModuleDone
                        ? "bg-[#6EE7B7]/15 text-[#A7F3D5]"
                        : isModuleActive
                        ? "bg-[#B794F6] text-white"
                        : "bg-[#26202F] text-[#FFC968]"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {isModuleDone ? <Check size={11} /> : mod.number}
                  </span>
                  <span
                    className={`text-[13px] font-semibold leading-tight ${
                      isModuleActive ? "text-[#F5F3FA]" : "text-[#6B6478]"
                    }`}
                  >
                    {mod.title}
                  </span>
                </div>

                {isModuleActive && (
                  <div className="px-3 space-y-0.5 mb-1">
                    {mod.lessons.map((l) => {
                      const isActive = current.type === "lesson" && current.lessonId === l.id;
                      const isDone = !!progress.completedLessons?.[l.id];
                      return (
                        <button
                          key={l.id}
                          onClick={() => {
                            setCurrent({ type: "lesson", moduleId: mod.id, lessonId: l.id });
                            setOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 ${
                            isActive
                              ? "bg-gradient-to-r from-[#B794F6] to-[#C4A5FA] text-white shadow-md shadow-[#B794F6]/25"
                              : "text-[#E4DFF0] hover:bg-[#26202F] hover:translate-x-0.5"
                          }`}
                        >
                          {isDone ? (
                            <Check size={15} className={isActive ? "text-[#FFB020]" : "text-[#6EE7B7]"} />
                          ) : (
                            <Circle size={13} className={isActive ? "text-[#0D0B14]/50" : "text-[#FFC968]/50"} />
                          )}
                          <span className="flex-1 leading-snug">{l.title}</span>
                        </button>
                      );
                    })}

                    <button
                      onClick={() => {
                        setCurrent({ type: "exam", moduleId: mod.id });
                        setOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left text-sm transition-all duration-150 mt-1 ${
                        current.type === "exam" && current.moduleId === mod.id
                          ? "bg-gradient-to-r from-[#B794F6] to-[#C4A5FA] text-white shadow-md shadow-[#B794F6]/25"
                          : "text-[#E4DFF0] hover:bg-[#26202F] hover:translate-x-0.5"
                      }`}
                    >
                      {progress.examScores?.[mod.id] ? (
                        <Award size={15} className="text-[#FFB020]" />
                      ) : (
                        <Circle
                          size={13}
                          className={
                            current.type === "exam" && current.moduleId === mod.id
                              ? "text-[#0D0B14]/50"
                              : "text-[#FFC968]/50"
                          }
                        />
                      )}
                      <span className="flex-1">Examen del módulo</span>
                      {progress.examScores?.[mod.id] && (
                        <span
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          className="text-xs opacity-70"
                        >
                          {progress.examScores[mod.id].score}%
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          {course.modules.length < 11 && (
            <div className="px-6 mt-4 pt-4 border-t border-[#26202F]">
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-[10px] tracking-[0.15em] uppercase text-[#FFC968]/70 mb-2"
              >
                Próximamente
              </div>
              <div className="text-[13px] text-[#9089A3] leading-relaxed">
                Bolsa e índices, ETFs y fondos, renta fija, carteras, psicología, fiscalidad española, análisis de empresas, estafas y estrategia final.
              </div>
            </div>
          )}
        </div>
      </aside>
  );
}

/* =========================================================================
   NAVEGACIÓN MÓVIL — barra inferior fija estilo app + hoja de lecciones
   ========================================================================= */

function LessonsSheet({ course, progress, current, setCurrent, open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-[#F5F3FA]/40 backdrop-blur-[2px]" onClick={onClose} />
      <div
        className="fixed left-0 right-0 bottom-0 bg-gradient-to-b from-[#0D0B14] to-[#15121F] rounded-t-2xl shadow-[0_-8px_40px_-8px_rgba(91,58,142,0.35)] animate-[slideUp_0.25s_ease-out]"
        style={{ top: "25vh" }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1.5 rounded-full bg-[#26202F]" />
        </div>
        <div className="px-5 pt-2 pb-3 flex items-center justify-between">
          <h3
            className="text-[19px] font-bold text-[#F5F3FA] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Módulos
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full bg-[#26202F]/60 text-[#F5F3FA]">
            <X size={16} />
          </button>
        </div>
        <div
          className="overflow-y-scroll px-4 space-y-3"
          style={{
            WebkitOverflowScrolling: "touch",
            height: "calc(75vh - 64px - env(safe-area-inset-bottom))",
            paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
          }}
        >
          {course.modules.map((mod) => {
            const isModuleActive = current.moduleId === mod.id;
            const totalItems = mod.lessons.length + 1;
            const completedCount =
              mod.lessons.filter((l) => progress.completedLessons?.[l.id]).length +
              (progress.examScores?.[mod.id] ? 1 : 0);
            const isModuleDone = completedCount === totalItems;
            return (
              <div key={mod.id}>
                <div className="flex items-center gap-2 px-1 pb-1.5">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                      isModuleDone
                        ? "bg-[#6EE7B7]/15 text-[#A7F3D5]"
                        : "bg-[#26202F] text-[#FFC968]"
                    }`}
                  >
                    {isModuleDone ? <Check size={11} /> : mod.number}
                  </span>
                  <span className="text-[13px] font-semibold text-[#6B6478]">{mod.title}</span>
                </div>
                <div className="space-y-1.5">
                  {mod.lessons.map((l, i) => {
                    const isActive =
                      isModuleActive && current.type === "lesson" && current.lessonId === l.id;
                    const isDone = !!progress.completedLessons?.[l.id];
                    return (
                      <button
                        key={l.id}
                        onClick={() => {
                          setCurrent({ type: "lesson", moduleId: mod.id, lessonId: l.id });
                          onClose();
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-[15px] transition-all active:scale-[0.98] ${
                          isActive
                            ? "bg-gradient-to-r from-[#B794F6] to-[#C4A5FA] text-white shadow-md shadow-[#B794F6]/25"
                            : "bg-[#1C1826]/70 text-[#E4DFF0]"
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                            isDone
                              ? isActive
                                ? "bg-white/25 text-white"
                                : "bg-[#6EE7B7]/15 text-[#A7F3D5]"
                              : isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#26202F] text-[#FFC968]"
                          }`}
                        >
                          {isDone ? <Check size={14} /> : i + 1}
                        </span>
                        <span className="flex-1 leading-snug">{l.title}</span>
                      </button>
                    );
                  })}
                  <button
                    onClick={() => {
                      setCurrent({ type: "exam", moduleId: mod.id });
                      onClose();
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-[15px] transition-all active:scale-[0.98] ${
                      isModuleActive && current.type === "exam"
                        ? "bg-gradient-to-r from-[#F0A6CA] to-[#F6C4DC] text-white shadow-md shadow-[#F0A6CA]/25"
                        : "bg-[#1C1826]/70 text-[#E4DFF0]"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        isModuleActive && current.type === "exam"
                          ? "bg-white/20 text-white"
                          : "bg-[#26202F] text-[#FFC968]"
                      }`}
                    >
                      <Award size={14} />
                    </span>
                    <span className="flex-1">Examen del módulo</span>
                    {progress.examScores?.[mod.id] && (
                      <span
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        className="text-xs opacity-80"
                      >
                        {progress.examScores[mod.id].score}%
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProgressSheet({ course, progress, open, onClose }) {
  if (!open) return null;
  const totalCourseItems = course.modules.reduce((acc, m) => acc + m.lessons.length + 1, 0);
  const completedCourseItems = course.modules.reduce((acc, m) => {
    const doneLessons = m.lessons.filter((l) => progress.completedLessons?.[l.id]).length;
    const doneExam = progress.examScores?.[m.id] ? 1 : 0;
    return acc + doneLessons + doneExam;
  }, 0);
  const coursePct = Math.round((completedCourseItems / totalCourseItems) * 100);

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-[#F5F3FA]/40 backdrop-blur-[2px]" onClick={onClose} />
      <div
        className="fixed left-0 right-0 bottom-0 bg-gradient-to-b from-[#0D0B14] to-[#15121F] rounded-t-2xl shadow-[0_-8px_40px_-8px_rgba(91,58,142,0.35)] animate-[slideUp_0.25s_ease-out]"
        style={{ top: "25vh" }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1.5 rounded-full bg-[#26202F]" />
        </div>
        <div className="px-5 pt-2 pb-4 flex items-center justify-between">
          <h3
            className="text-[19px] font-bold text-[#F5F3FA] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Tu progreso
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full bg-[#26202F]/60 text-[#F5F3FA]">
            <X size={16} />
          </button>
        </div>
        <div
          className="overflow-y-scroll px-5 space-y-5"
          style={{
            WebkitOverflowScrolling: "touch",
            height: "calc(75vh - 72px - env(safe-area-inset-bottom))",
            paddingBottom: "calc(24px + env(safe-area-inset-bottom))",
          }}
        >
          <div className="flex items-center gap-4 bg-[#15121F]/80 rounded-xl p-4">
            <ProgressRing pct={coursePct} size={48} />
            <div>
              <div className="text-lg font-bold text-[#F5F3FA]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {coursePct}% del curso
              </div>
              <div className="text-xs text-[#FFC968]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {completedCourseItems}/{totalCourseItems} completado
              </div>
            </div>
          </div>

          {course.modules.map((mod) => {
            const totalItems = mod.lessons.length + 1;
            const completedCount =
              mod.lessons.filter((l) => progress.completedLessons?.[l.id]).length +
              (progress.examScores?.[mod.id] ? 1 : 0);
            const examResult = progress.examScores?.[mod.id];
            return (
              <div key={mod.id}>
                <div
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-[11px] tracking-[0.15em] uppercase text-[#FFC968] mb-2"
                >
                  Módulo {mod.number} · {completedCount}/{totalItems}
                </div>
                <div className="space-y-1.5">
                  {mod.lessons.map((l, i) => {
                    const isDone = !!progress.completedLessons?.[l.id];
                    return (
                      <div key={l.id} className="flex items-center gap-3 bg-[#15121F]/60 rounded-lg px-3.5 py-2.5 text-sm">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                            isDone ? "bg-[#6EE7B7]/15 text-[#A7F3D5]" : "bg-[#26202F] text-[#FFC968]"
                          }`}
                        >
                          {isDone ? <Check size={12} /> : i + 1}
                        </span>
                        <span className="flex-1 text-[#E4DFF0]">{l.title}</span>
                      </div>
                    );
                  })}
                  {examResult ? (
                    <div
                      className={`rounded-lg px-4 py-3 text-sm font-medium ${
                        examResult.score >= mod.exam.passScore
                          ? "bg-[#6EE7B7]/10 text-[#A7F3D5]"
                          : "bg-[#FF7A6E]/10 text-[#FFB4AB]"
                      }`}
                    >
                      Examen: {examResult.score}% —{" "}
                      {examResult.score >= mod.exam.passScore ? "Aprobado" : "No superado, puedes repetirlo"}
                    </div>
                  ) : (
                    <div className="rounded-lg px-4 py-3 text-sm bg-[#15121F]/60 text-[#6B6478]">
                      Examen aún no realizado.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function BottomNav({ course, mod, progress, current, setCurrent }) {
  const [sheet, setSheet] = useState(null); // 'lessons' | 'progress' | null
  const totalCourseItems = course.modules.reduce((acc, m) => acc + m.lessons.length + 1, 0);
  const completedCourseItems = course.modules.reduce((acc, m) => {
    const doneLessons = m.lessons.filter((l) => progress.completedLessons?.[l.id]).length;
    const doneExam = progress.examScores?.[m.id] ? 1 : 0;
    return acc + doneLessons + doneExam;
  }, 0);
  const pct = Math.round((completedCourseItems / totalCourseItems) * 100);

  const tabs = [
    { key: "lessons", label: "Lecciones", icon: BookOpen },
    { key: "progress", label: "Progreso", icon: Award },
    { key: "exam", label: "Examen", icon: PenLine },
  ];

  return (
    <>
      <LessonsSheet
        course={course}
        progress={progress}
        current={current}
        setCurrent={setCurrent}
        open={sheet === "lessons"}
        onClose={() => setSheet(null)}
      />
      <ProgressSheet course={course} progress={progress} open={sheet === "progress"} onClose={() => setSheet(null)} />

      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-[#0D0B14] to-[#0D0B14]/95 backdrop-blur-md border-t border-[#26202F] shadow-[0_-4px_20px_-4px_rgba(91,58,142,0.15)] flex items-stretch"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            (tab.key === "lessons" && sheet === "lessons") ||
            (tab.key === "progress" && sheet === "progress") ||
            (tab.key === "exam" && current.type === "exam" && sheet === null);
          const handleClick = () => {
            if (tab.key === "exam") {
              setCurrent({ type: "exam", moduleId: mod.id });
              setSheet(null);
            } else {
              setSheet(tab.key);
            }
          };
          return (
            <button
              key={tab.key}
              onClick={handleClick}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 relative active:scale-95 transition-transform"
            >
              {tab.key === "progress" ? (
                <div className="relative">
                  <ProgressRing pct={pct} size={22} />
                </div>
              ) : (
                <Icon
                  size={20}
                  className={isActive ? "text-[#B794F6]" : "text-[#9089A3]"}
                  strokeWidth={isActive ? 2.4 : 2}
                />
              )}
              <span
                className={`text-[10.5px] font-medium ${isActive ? "text-[#B794F6]" : "text-[#9089A3]"}`}
              >
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-gradient-to-r from-[#B794F6] to-[#C4A5FA]" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
}

/* =========================================================================
   APP PRINCIPAL
   ========================================================================= */

export default function CourseApp() {
  const [progress, setProgress] = useState(null);
  const [current, setCurrent] = useState({ type: "lesson", moduleId: "m0", lessonId: "m0l1" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const touchStartX = React.useRef(null);
  const touchStartY = React.useRef(null);

  useEffect(() => {
    loadProgress().then((p) => {
      setProgress(p);
      if (p.lastPosition) {
        setCurrent(
          p.lastPosition.type
            ? p.lastPosition
            : { type: "lesson", moduleId: p.lastPosition.moduleId, lessonId: p.lastPosition.lessonId }
        );
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading && progress) {
      saveProgress({ ...progress, lastPosition: current });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, current, loading]);

  if (loading || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={PAGE_BG_STYLE}>
        <link rel="stylesheet" href={FONTS_LINK} />
        <div className="text-[#FFC968] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Cargando curso…
        </div>
      </div>
    );
  }

  const mod = COURSE.modules.find((m) => m.id === current.moduleId) || COURSE.modules[0];
  const modIdx = COURSE.modules.findIndex((m) => m.id === mod.id);
  const allLessons = mod.lessons;

  const currentLessonIdx = allLessons.findIndex((l) => l.id === current.lessonId);
  const flatItems = [
    ...allLessons.map((l) => ({ type: "lesson", id: l.id })),
    { type: "exam", id: mod.id },
  ];
  const currentFlatIdx =
    current.type === "exam"
      ? flatItems.length - 1
      : flatItems.findIndex((f) => f.type === "lesson" && f.id === current.lessonId);

  const goPrev = () => {
    if (currentFlatIdx > 0) {
      const target = flatItems[currentFlatIdx - 1];
      if (target.type === "lesson") {
        setCurrent({ type: "lesson", moduleId: mod.id, lessonId: target.id });
      } else {
        setCurrent({ type: "exam", moduleId: mod.id });
      }
      return;
    }
    // Ir al examen del módulo anterior si existe
    if (modIdx > 0) {
      const prevMod = COURSE.modules[modIdx - 1];
      setCurrent({ type: "exam", moduleId: prevMod.id });
    }
  };
  const goNext = () => {
    if (currentFlatIdx < flatItems.length - 1) {
      const target = flatItems[currentFlatIdx + 1];
      if (target.type === "lesson") {
        setCurrent({ type: "lesson", moduleId: mod.id, lessonId: target.id });
      } else {
        setCurrent({ type: "exam", moduleId: mod.id });
      }
      return;
    }
    // Ir a la primera lección del siguiente módulo si existe
    if (modIdx < COURSE.modules.length - 1) {
      const nextMod = COURSE.modules[modIdx + 1];
      setCurrent({ type: "lesson", moduleId: nextMod.id, lessonId: nextMod.lessons[0].id });
    }
  };
  const isVeryFirst = modIdx === 0 && currentFlatIdx === 0;
  const isVeryLast = modIdx === COURSE.modules.length - 1 && currentFlatIdx === flatItems.length - 1;

  const markComplete = (lessonId) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: { ...prev.completedLessons, [lessonId]: true },
    }));
  };

  const finishExam = (result) => {
    setProgress((prev) => ({
      ...prev,
      examScores: { ...prev.examScores, [mod.id]: result },
    }));
  };

  const activeLesson =
    current.type === "lesson" ? allLessons.find((l) => l.id === current.lessonId) : null;

  /* Swipe táctil: izquierda = siguiente, derecha = anterior */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    const SWIPE_THRESHOLD = 60;
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div className="min-h-screen flex" style={{ ...PAGE_BG_STYLE, fontFamily: "'Space Grotesk', sans-serif" }}>
      <link rel="stylesheet" href={FONTS_LINK} />
      <link rel="manifest" href="data:application/manifest+json,%7B%22name%22%3A%22Curso%20de%20Inversi%C3%B3n%22%2C%22short_name%22%3A%22Inversi%C3%B3n%22%2C%22display%22%3A%22standalone%22%2C%22background_color%22%3A%22%23FBF3E7%22%2C%22theme_color%22%3A%22%235B3A8E%22%7D" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Inversión" />
      <meta name="theme-color" content="#B794F6" />
      <style>{`
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>

      <Sidebar
        course={COURSE}
        progress={progress}
        current={current}
        setCurrent={setCurrent}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header desktop */}
        <header className="hidden md:flex sticky top-0 z-20 bg-[#0D0B14]/75 backdrop-blur-md border-b border-[#26202F] shadow-[0_2px_16px_-4px_rgba(91,58,142,0.08)] px-10 py-3.5 items-center justify-between">
          <div
            className="flex items-center gap-2 text-sm text-[#FFC968]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <BookOpen size={14} />
            Módulo {mod.number} — {mod.title}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={goPrev}
              disabled={isVeryFirst}
              className="p-2 rounded-sm hover:bg-[#15121F] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3FA]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              disabled={isVeryLast}
              className="p-2 rounded-sm hover:bg-[#15121F] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3FA]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </header>

        {/* Header móvil: app bar compacta con título de la lección actual */}
        <header
          className="md:hidden sticky top-0 z-20 bg-[#0D0B14]/85 backdrop-blur-md border-b border-[#26202F] px-4 py-3 flex items-center justify-between"
          style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
        >
          <div className="min-w-0">
            <div
              className="text-[9.5px] tracking-[0.15em] uppercase text-[#FFC968]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Módulo {mod.number}
            </div>
            <div className="text-[14.5px] font-semibold text-[#F5F3FA] truncate max-w-[70vw]">
              {current.type === "exam" ? "Examen del módulo" : activeLesson?.title}
            </div>
          </div>
        </header>

        <main
          className="flex-1 px-5 md:px-10 py-10 pb-28 md:pb-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {current.type === "lesson" && currentLessonIdx === 0 && (
            <ModuleIntro mod={mod} />
          )}
          {current.type === "lesson" && activeLesson && (
            <LessonView
              key={activeLesson.id}
              lesson={activeLesson}
              progress={progress}
              setProgress={setProgress}
              onComplete={() => markComplete(activeLesson.id)}
              isCompleted={!!progress.completedLessons?.[activeLesson.id]}
            />
          )}
          {current.type === "exam" && (
            <ExamView
              key={mod.id}
              exam={mod.exam}
              moduleTitle={mod.title}
              onFinish={finishExam}
              savedResult={progress.examScores?.[mod.id]}
            />
          )}
        </main>
      </div>

      <BottomNav course={COURSE} mod={mod} progress={progress} current={current} setCurrent={setCurrent} />
    </div>
  );
}

function ModuleIntro({ mod }) {
  return (
    <div className="max-w-[680px] mx-auto mb-10 pb-8 border-b border-[#26202F]">
      <SectionLabel color="#6EE7B7" tint="#12241D">Módulo {mod.number}</SectionLabel>
      <h1
        className="text-[34px] font-bold text-[#F5F3FA] mb-4 leading-[1.08] tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {mod.title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <div
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-[10px] tracking-[0.15em] uppercase text-[#FFC968] mb-1"
          >
            Tiempo estimado
          </div>
          <div className="text-[#E4DFF0]">{mod.time}</div>
        </div>
        <div>
          <div
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-[10px] tracking-[0.15em] uppercase text-[#FFC968] mb-1"
          >
            Previos
          </div>
          <div className="text-[#E4DFF0]">{mod.prereq}</div>
        </div>
        <div>
          <div
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-[10px] tracking-[0.15em] uppercase text-[#FFC968] mb-1"
          >
            Objetivo
          </div>
          <div className="text-[#E4DFF0]">{mod.objective}</div>
        </div>
      </div>
    </div>
  );
}
