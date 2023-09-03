async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=3a77eb74-981e-42d1-bdbc-acd604259862&offset=0"
  )
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
