import express from "express";

import { AUDIOS, SLIDES } from "./data/dummy.js";

let CURRENT_AUDIO = AUDIOS[0];
let CURRENT_SLIDE = SLIDES[0];

const app = express();
const port = 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function findObjByDesc(objs, desc) {
  return objs.find((obj) => obj.desc === desc);
}

//REMOVE THIS AFTER?
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//END REMOVE AFTER

app.post("/current", (req, res) => {
  const { audio_desc, slide_desc } = req.body;
  console.log({ audio_desc, slide_desc });

  if (audio_desc && audio_desc !== "")
    CURRENT_AUDIO = findObjByDesc(AUDIOS, audio_desc);
  if (slide_desc && slide_desc !== "")
    CURRENT_SLIDE = findObjByDesc(SLIDES, slide_desc);

  res.json({ status: 200 });
});

app.get("/current", (req, res) => {
  res.json({
    current_audio: CURRENT_AUDIO,
    current_slide: CURRENT_SLIDE,
  });
});

app.get("/", (req, res) => {
  res.json({ audios: AUDIOS, slides: SLIDES });
});

app.listen(port, () => {
  console.log(`API on port http://127.0.0.1:${port}`);
});
