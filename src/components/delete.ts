// bort tagning av post
let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/21312dadad", {
  method: 'DELETE'
}); // Det sista är ett unikt id som är kopplat till en anteckning

export default {};