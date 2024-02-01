// editera post
const note = {
    note: 'Detta är min uppdaterade text'
  }
  
  let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/21312dadad", {
    method: "PUT",
    body: JSON.stringify(note), // Gör om till ett JSON objekt
    headers: {
      'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
    }
  }); // Det sista är ett unikt id som är kopplat till en anteckning
export default {};