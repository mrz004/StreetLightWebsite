const key = "55555";
const bulbs = Array.from(document.getElementsByClassName("bulb"));
const mapping = {
  field1: bulbs[0],
  field2: bulbs[1],
  field3: bulbs[2],
  field4: bulbs[3],
};

const liteBubls = async () => {
  res = await fetch(
    "https://api.thingspeak.com/channels/2084964/feeds.json?api_key=H6WC0O0XKQJD5NEN&results=1"
  );

  const { feeds } = await res.json();
  const feed = feeds[0];
  // console.log(feed);

  for (let key in feed) {
    if (mapping.hasOwnProperty(key)) {
      if (feed[key] == 1) {
        mapping[key].title = "on";
        mapping[key].src = "imgs/light-on.png";
      } else {
        mapping[key].title = "off";
        mapping[key].src = "imgs/light-off.png";
      }
    }
  }
};

setInterval(liteBubls, 500);

liteBubls();
/*
bulbs.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    const { target } = event;
    target.title = target.title === "on" ? "off" : "on";
    query = "https://api.thingspeak.com/update?api_key=2VN3PDF9U36VII3L";

    bulbs.forEach((e, i) => {
      query += `&field${i + 1}=${e.title === "on" ? 1 : 0}`;
    });

    // console.log(query);

    fetch(query).then((_) => liteBubls());
  });
});
*/
