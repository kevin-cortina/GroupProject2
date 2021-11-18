const updateBio = async (event) => {
    event.preventDefault();

    const bio = document.querySelector("#bio").value;
    console.log(bio);
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

const subBio = (event) => {
    event.preventDefault();
    console.log("You are here");
    // document.querySelector("#bioForm").submit();
    updateBio(event);
}

document.querySelector("#bioClose").addEventListener("click", subBio);
document.querySelector("#bioForm").addEventListener("submit", updateBio);