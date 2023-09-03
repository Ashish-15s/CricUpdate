async function getMatchData() {
  return await fetch(API)
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;
      const matchesList = data.data;
      if (!matchesList) return [];
      const relaventData = matchesList.map(
        (match) => `${match.name},${match.status}`
      );
      console.log({ relaventData });
      document.getElementById("matches").innerHTML = relaventData
        .map((match) => `<li> ${match} </li>`)
        .join("");
      return relaventData;
    })
    .catch((e) => console.log(e));
}

getMatchData();
