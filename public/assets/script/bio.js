const updateBio = (event) => {
    event.preventDefault();

    const bio = document.querySelector("bio").value;

    const response = await fetch("api/users/bio", {
        method: 'PUT',
        body: JSON.stringify({
          bio
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log("OK");
      } else {
        console.log("Failed");
      }
}



document.querySelector("#bioForm").addEventListener("submit", updateBio);