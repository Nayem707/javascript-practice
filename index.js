//jhonH = 180;
//mikeH = 165;

//JhonAge = 26;
//MikeAge = 29;

//jhonScore = jhonH + 5 * JhonAge;
//jhonScore = mikeH + 5 * MikeAge;

//180 + 5 * 26;

const j = 182;
const m = 165;

const ja = 26;
const ma = 29;

const jS = j + 5 * ja;
const mS = m + 5 * ma;

if (jS > mS) {
  console.log("jhon win");
} else if (mS > jS) {
  console.log("mike win");
} else if (jS === mS) {
  console.log("draw!");
}
