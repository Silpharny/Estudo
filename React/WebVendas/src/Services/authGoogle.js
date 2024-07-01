export function HandleCredentialResponse(response) {
    let token = parseJwt(response.credential)
    console.log(token);
  
    // Salvar no LocalStorage
    localStorage.setItem('token', JSON.stringify(token))

    //Redirecionamento para página de clientes
    if(token !== undefined){
        window.location.replace('http://localhost:5173/MeusClientes')
    }

    }
  window.onload = function () {
    window.google.accounts.id.initialize({
      client_id: "124682817288-3723rd6vnr9ii8o16jd7bsv0jrg7e6r8.apps.googleusercontent.com",
      callback: HandleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export default HandleCredentialResponse