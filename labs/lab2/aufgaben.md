# 1.1 XML-Dokumente und Namespaces

## 1. XML Namespaces
XML-Namensräume (englisch „XML namespaces“) werden benutzt, um Elemente und Attribute in einem XML-Dokument eindeutig zu identifizieren und um in einem einzelnen Dokument mehrere XML-Sprachen mischen zu können. Ihre Funktionsweise ist mit Vorwahlen bei Telefonnummern zu vergleichen. \
Bsp.: 
```
<root xmlns:x="http://www.example.com/x">
	<x:book>
		<x:title>XML für Einsteiger</x:title>
		<x:author>Max Mustermann</x:author>
	</x:book>
</root>
```
In diesem Beispiel wird dem namespace von "www.example.com/x" der Präfix x gegeben. Von nun an können Elemente aus diesem Namespace mit x genutzt werden.


# 2.2 UTF-8, UTF-16, UTF-32 Encoding von Zeichen

## 4. Optimale Encodings
| Region der Sprache | Optimales Encoding |
| ------------------ | ------------------ |
| Europa             | UTF-8              |
| Asien              | UTF-16             |

## 5. Begriffserklärung Glyphe
Eine Glyphe ist die visuelle Darstellung eines Zeichens oder Symbols in einem Schriftsystem. Sie beschreibt, wie ein Zeichen aussieht, abhängig von Schriftart, Stil und Kontext. \
Z.B. Das 'A' in "Arial" und in "Times New Roman"

## 6. Zeichenausgabe im Terminal
Ja, die Zeichen können ausgegeben werden, da das Terminal in diesem Fall UTF-8-Encoding verwendet (Umgebungsvariable: `LANG=en_US.UTF-8`)
