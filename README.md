# post-app

Endpoint	            Metod	        Beskrivning

/api/notes/:username	GET	            Hämta anteckningar
/api/notes	            POST	        Spara en anteckning
/api/notes/:id	        PUT	            Ändra en anteckning
/api/notes/:id	        DELETE	        Ta bort en anteckning





Nyckel	    Data-Typ	    Beskrivning

id	        String	       Ett genererat ID för denna anteckning.
username	String	       Vem denna anteckning tillhör
title	    String	       Titeln på anteckningen. Max 50 tecken.
note	    String	       Själva anteckningstexten, max 200 tecken.
createdAt	Date	       Datum när anteckningen skapades.