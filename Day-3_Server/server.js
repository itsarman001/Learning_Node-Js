import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Good Afternoon Sir, How can i help you");
});

app.get("/menu", function (req, res) {
  const menu = {
    veg: ["Butter Panner", "Dal Makhni"],
    "non-veg": ["Chicken Kassa", "Chicken Chaap"],
    bread: ["rumali roti", "naan roti"],
  };
  res.send(menu);
});

app.get("/bring-me-anything", (req, res) => res.send("Ok Sir"));

app.listen(3000, () => console.log("Server Started on Localhost Port: 3000"));
