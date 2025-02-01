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


## 2.
