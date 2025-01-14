# 2.2 
## 1. Für was steht die Deklaration <!DOCTYPE html>?
Die Deklaration "<!DOCTYPE html>" originiert aus dem XML Format, von dem HTMl
eine Unterkategorie ist. Sie hilft dabei zu erkennen, dass es sich bei 
dem gegebenen XML Dokument um ein HTML Dokument handelt.
## 2. Suchen Sie nach dem <HTML>-Tag und erklären sie die dort verwendeten Attribute (dir="ltr" lang="de-DE" class="no-js")
### dir="ltr"
Das "dir" Attribut steht für "direction" und indiziert die Richtung des Textes.
In unserem Fall steht "ltr" for "left-to-right", was in der Westlichen Welt den Regelfall darstellt.
Insbesondere in den arabischen Sprachen würde man eher "rtl", also "right-to-left" verwenden.
### lang="de-DE"
Das "lang" Attribut steht für die Sprache welche auf der Webseite verwendet wird.
Hier bei steht "de" für die Sprache selbst und "DE" für das Land in dem die Sprache gesprochen wird
und kann so bspw. einen Akzent andeuten. Man kann z.B. zwichen "en-US" und "en-GB" unterscheiden,
welche respektive für "United States" und "Great Britain" steht
### class="no-js"
Das "class" Attribut wird verwendet um CSS Style Klassen einzelnen Elementen
zuzuordnen. In diesem Fall speziell, steht "no-js" dafür, dass aktuell kein
JavaScript aktiviert ist und dementsprechend werden andere Style Klassen verwendet.
Inspiziert man den Quellcode der DHBW Startseite direkt (bspw. über "F12" bei Firefox)
so erkennt man, dass diese Klasse durch "js" ersetzt wurde.

# 2.3
