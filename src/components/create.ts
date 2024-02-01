// skapa 
// Skickas med som body alltså det vi vill spara i databasen
const note = {
    username: 'ada',
    title: "Första anteckningen",
    note: "Min första anteckning"
  }
  
  let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
    method: "POST",
    body: JSON.stringify(note), // Gör om till ett JSON objekt
    headers: {
      'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
    }
  });
export default {};