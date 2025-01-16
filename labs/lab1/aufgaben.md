# 2.2 Quelltext von Web-Seiten

## 1. Für was steht die Deklaration <!DOCTYPE html>?
Die Deklaration `<!DOCTYPE html>` originiert aus dem XML Format, von dem HTMl
eine Unterkategorie ist. Sie hilft dabei zu erkennen, dass es sich bei 
dem gegebenen XML Dokument um ein HTML Dokument handelt.
## 2. Suchen Sie nach dem <HTML>-Tag und erklären sie die dort verwendeten Attribute (`dir="ltr" lang="de-DE" class="no-js"`)
### `dir="ltr"`
Das `dir` Attribut steht für "direction" und indiziert die Richtung des Textes. In unserem Fall steht `ltr` for "left-to-right", was in der Westlichen Welt den Regelfall darstellt. Insbesondere in den arabischen Sprachen würde man eher `rtl`, also "right-to-left" verwenden.
### `lang="de-DE"`
Das `lang` Attribut steht für die Sprache welche auf der Webseite verwendet wird. Hierbei steht `de` für die Sprache selbst und `DE` für das Land in dem die Sprache gesprochen wird und kann so bspw. einen Akzent andeuten. Man kann z.B. zwichen `en-US` und `en-GB` unterscheiden, welche respektive für "United States" und "Great Britain" steht.
### `class="no-js"`
Das `class` Attribut wird verwendet um CSS Style Klassen einzelnen Elementen
zuzuordnen. In diesem Fall speziell, steht `no-js` dafür, dass aktuell kein
JavaScript aktiviert ist und dementsprechend werden andere Style Klassen verwendet. Inspiziert man den Quellcode der DHBW Startseite direkt (bspw. über "F12" bei Firefox) so erkennt man, dass diese Klasse durch `js` ersetzt wurde.
## 3. Welches Zeichensatz-Encoding verwendet die Web-Seite
Der Zeichensatz kann der Deklaration `<meta charset="utf-8">` entnommen werden. Die Web-Seite verwendet den Zeichensatz UTF-8.
## 4. Was passiert beim Klicken auf den blauen Text?
Die zugeörige Webseite wird geöffnet.

# 2.3 Entwicklerwerkzeuge
## 4. Die ersten 5 Webobjekte
| Webobjekt                                       | Typ        | Ladezeit |
| ----------------------------------------------- | ---------- |--------  |
| startseite                                      | document   | 130 ms   |
| 602a22886015476c24a2b6f7f78e2def.css?1701184751 | stylesheet | 0,15 ms  |
| styles.css?1736869242                           | stylesheet | 0,12 ms  |
| vendor_head.min.js?vqk0vqs                      | script     | 0,16 ms  |
| main.min.css?vqk0vqs                            | stylesheet | 0,16 ms  |
## 5. Erste 4 Headereinträge der Startseite
| Name           | Inhalt                         | Bedeutung |
| -------------- | ------------------------------ | - |
| Request URL    | https://www.dhbw.de/startseite | URL des angefordeten Elements |
| Request Method | GET                            | Angewandte Methode des Clients |
| Status Code    | 200 OK                         | End-Code der Operation |
| Remote Address | 141.31.235.50:443              | Server und Port des Webservers |
## 7. Bedeutung von Matomo
Matomo ist eine weitverbreitete Open-Source-Webanalytik-Plattform und konkurriert mit Google Analytics.
