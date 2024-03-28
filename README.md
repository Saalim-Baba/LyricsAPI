# Lyrics Finder Web App
Die Lyrics Finder Web App ist eine interaktive Anwendung, die es Benutzern ermöglicht, nach den Texten ihrer Lieblingssongs zu suchen. Durch eine einfache Benutzeroberfläche kann der Benutzer einen Songtitel eingeben und erhält, sofern verfügbar, sofort die Songtexte, den Künstlernamen und ein zugehöriges Bild.

# Features
Songtext-Suche: Gib den Namen eines Songs ein, um dessen Texte zu finden.
Dynamische Inhaltsanzeige: Zeigt den Autor des Songs und ein Thumbnail-Bild zusammen mit den Songtexten an.
Fehlerbehandlung: Informiert den Benutzer, wenn der gesuchte Song nicht gefunden werden kann oder ein Netzwerkfehler auftritt.
Ladeanzeige: Während der Suche wird eine Ladeanzeige angezeigt, um den Benutzer über den Fortschritt zu informieren.

# Technologien
JavaScript: Für das Frontend-Scripting und die Interaktion mit der Some Random API.
Fetch API: Zum Abrufen der Songtexte und zugehörigen Informationen von der API.
HTML & CSS: Für das Markup und Styling der Webanwendung.

# Wie es funktioniert
Der Benutzer gibt den Titel eines Songs in das Suchfeld ein und sendet das Formular ab.
Ein JavaScript-Event-Listener fängt das Absendereignis ab und ruft die zip Funktion auf.
Die zip Funktion verwendet die Fetch API, um eine Anfrage an die https://some-random-api.com/lyrics API zu senden und übergibt den gesuchten Songtitel als Parameter.
Die Anwendung zeigt eine Ladeanzeige, während die Anfrage bearbeitet wird.
Bei erfolgreicher Anfrage werden der Songtitel, die Songtexte, der Künstlername und ein Thumbnail auf der Webseite angezeigt.
Bei einem Fehler (z.B. wenn der Song nicht gefunden wird oder es ein Problem mit der Netzwerkverbindung gibt) zeigt die Anwendung eine entsprechende Fehlermeldung an.

# Schnellstart
Um die Lyrics Finder Web App zu nutzen, folge einfach diesen Schritten:

1. Klone das Repository auf deinen lokalen Computer.
2. Öffne index.html in deinem Browser, um die Anwendung zu starten.
3. Beginne mit der Suche nach deinen Lieblingssongs!
