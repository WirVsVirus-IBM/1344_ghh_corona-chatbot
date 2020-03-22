#Gutenbot
Hi, ich bin *Gutenbot*! Ein Chatbot basierend auf [IBM Watson Assistant] (https://www.ibm.com/cloud/watson-assistant/), der deine Fragen über Covid-19 beantworten kann.

##Team
Entwicklet wurde Gutenbot Während des Hackathons #wirvsvirus von einem bunten Team aus ganz Deutschland, das sich am Freitagabend kennenlernte und am Sonntagabend einen Prototypen für einen Chatbot zum Thema Covid-19 einreichte: [GHH Corona Chatbot] (https://devpost.com/software/ghh-corona-chatbot).

##Problemstellung
Patienten oder Mitarbeiter im Krankenhaus möchte verlässliche Antworten auf ihre Fragen zu Corona, damit Experten im Gesundheitswesen nicht mit allgemeinen Fragen belaste und ihnen mehr Zeit bleibt auf die Patienten einzugehen, die ihre Hilfe wirklich dringend benötigen.

##Lösung
Der Gutenbot kann als Chatbot auf jeder Website von Gesundheitseinrichtungen, Ämtern oder anderen Anbietern eingebunden werden. Hier kann er als erster Anlaufpunkt für Informationssuchende genutzt werden: allgemeine Fragen nach typischen Sympthomen von Covid-19, Hygienemaßnahmen und ähnliche beantwortet der Bot eigenständig. Erkennt Watson Assistant, dass eine Frage nicht durch eine Antwort im Dialogbaum abgedeckt ist, wird mit Hilfe der öffentlichen API von [Covid-QA] (https://covid.deepset.ai/home) nach einer passenden Antwort in seriösen Online Quellen wie bspw. dem Robert-Koch-Institut gesucht.

##Wie kann ich Gutenbot auf meiner Website nutzen?
Die bereitgestellte Datei skill_Gutenbot.json ermöglicht es, in der IBM Cloud einen Watsons Assistant Service einzurichten. Ausgehend von den bereits vorkonfigurierten Dialogen, ist es so möglich, den Chatbot auf die eigenen Bedürfnisse anzupassen und um lokale oder spezielle Informationen zu ergänzen. 

[Getting started with Watson Assistant] (https://cloud.ibm.com/docs/services/assistant?topic=assistant-getting-started#getting-started) bietet einen guten ersten Überblick wie der Chatbot angepasst wird.

Um die API von [Covid-QA] (https://covid.deepset.ai/home) zu nutzen, muss eine kleine Webhook implementiert werden, die das Format des IBM Watson Assistant an die API anpasst. Zwei Beispielimplementierung in Python und nodeJS sind in diesem GitHub Repository vorhanden. Es ist bspw. möglich in der IBM Cloud einen Cloud Foundry Service anzulegen und dort den nodeJS Server zu starten.

##Wie kann ich Gutenbot anpassen?
Ausgehend von diesem Prototypen, gibt es verschiedene Möglichkeiten, den Chatbot an die eigenen Gegebenheiten anzupassen:
- Erstellen neuer Intents und Dialoge, die weitere Fragen abdecken.
- Einbinden weiterer öffentlicher APIs, z.B. der des RKI.
- Anbinden verschiedener Messenger Plattformen, z.B. Facebook Messenger. [Adding an integration] (https://cloud.ibm.com/docs/assistant?topic=assistant-deploy-integration-add)
- Anbinden eines Voice-2-Text Services, der natürliche Sprachen in Text übersetzt und Antworten gibt z.B. in Verbindung mit der Integration einer Telefonanlage.
- Übersetzen der vorhandenen Intents und Dialoge in weitere Sprachen oder Nutzung eines Übersetzungs-Service in der IBM Cloud.