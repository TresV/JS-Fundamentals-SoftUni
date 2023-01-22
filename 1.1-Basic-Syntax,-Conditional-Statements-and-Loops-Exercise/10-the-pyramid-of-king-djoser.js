function pyramidResources(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let step = 0;
  let innerArea = 0;

  for (let i = base; i > 0; i -= 2) {
    let areaTotal = i * i;
    step++;
    if (i - 2 <= 0) {
      gold += areaTotal * increment;
    } else {
      let innerBase = i - 2;
      innerArea = innerBase * innerBase;
      stone += innerArea * increment;
      if (step % 5 === 0) {
        lapis += (areaTotal - innerArea) * increment;
      } else {
        marble += (areaTotal - innerArea) * increment;
      }
    }
  }

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

pyramidResources(23, 0.5);
