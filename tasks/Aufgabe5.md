## Aufgabe 5: XML-Anwendungen

---

### 1. ZIP ist ein sogenanntes Container-Format. Erklären Sie den Begriff und den Aufbau einer ZIP Datei. 

Das ZIP-Format ist eine Möglichkeit sowohl einzelne Dateien als auch ganze Pfadbäume zu einer Datei zusammenzufassen und dabei zu komprimieren. Zur Komprimierung werden redundante Teile einer Datei entfernt und effizienter gespeichert. Im Gegensatz zu anderen Komprimierungsmethoden werden bei ZIP keine Dateiübergreifenden Redundanzen entfernt. Dadurch werden Inhalte zwar nicht ganz so stark komprimiert, jedoch ermöglicht dies das nachträgliche komprimieren und dekomprimieren von einzelnen Dateien. ZIP-Dateien bestehen aus 3 Teilen:

- Header: Enthält zentrale Informationen über die Datei. (Erstellungsdatum, Komprimierungsmethode, etc.)
- Datenbereich: Beinhaltet die Daten der komprimierten Dateien.
- Central Directory: Hier werden die verschiedenen Datenblöcke im Datenbereich referenziert. Dadurch wird das Arbeiten mit ZIP-Dateien ermöglicht (z.B: Entfernen einzelner Dateien, Hinzufügen von Dateien, Dekomprimieren).

### 2. Was versteht man unter dem Mime Media Type von Daten? Wie lautet dieser für ZIP-Dateien?

Der MIME-Typ (Multipurpose Internet Mail Extensions) informiert darüber welche Art von Daten vorliegen. Dies ermöglicht zum Beispiel das Übertragen von Nicht-ASCII-Zeichen in Text-Elementen oder das Übertragen von Nicht-Text-Dokumenten (z.B: Bilder) in textbasierten Übertragungssystemen wie E-Mail. Der MIME-Typ besteht zum einen aus dem Haupttypen (z.B: text, image, application) und einem Untertypen (z.B: text/plain, image/jpeg). Für ZIP-Dateien lautet dieser Typ "application/zip".

### 3. Was verbirgt sich hinter dem Namen Ecma International (Ecma)?

Ecma International ist eine gemeinnützige Organisation, die sich mit der Standardisierung von Informations- und Kommunikationssystemen beschäftigt. Früher stand ECMA für "European Computer Manufacturers Association". Mittlerweile ist die Organisation nicht mehr auf Europa beschränkt und heißt ECMA International.

### 4. Office Open XML Dokumente werden im Ecma-376 Standard definiert. Office Open XML Dokumente werden in sogenannte Packages abgespeichert. Welches Format verwendet ein Package und aus welchen Bestandteilen besteht dieses?

Ein Package ist eine ZIP-Datei, welche alle Bestandteile (Parts und Items) eines Dokuments enthält. Parts sind die Bestandteile des Dokuments. Items zeigen an, wie die verschiedenen Parts zusammen hängen (Relationship Item) und wie diese dargestellt werden müssen (Content-Type Items).

### 5. Beschreiben Sie den Unterschied zwischen wohlgeformten und gültigen XML-Dokumenten.

Ein XML-Dokument ist wohlgeformt, wenn alle syntaktischen Regeln eingehalten sind. Gültig ist es erst dann, wenn zusätzlich auch die Regeln eines Schemas oder einer Dokumenttypdefinition beachtet wurden. Also dann, wenn nur gültige Elemente verwendet wurden und sich in einer erlaubten Reihenfolge befinden.

### 6. Was ist eine XML-Bombe? Geben Sie ein Beispiel für eine XML-Bombe an.

> **ARBEIT EINGESTELLT**
> 
> >**müssen wir das überhaupt machen?**