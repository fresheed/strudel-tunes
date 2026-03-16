setcpm(30);

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");


/* let bass =
  //cat(riff1, riff2, riff3, riff4).slow(4)
  //cat(verse11, verse12).slow(4)
  verse2.slow(4)
  .sound("gm_electric_bass_pick")
 */

let riff_Dm = n("0@2 ~ 4 ~ 7 ~ 4 0@2 ~ 4 ~ 7 ~ 4").scale("D:minor").transpose(-24);

let riff_E1 = n("0@2 ~ 4 ~ 7 ~ 4").scale("E:major").transpose(-24);
let riff_E2_slower = n("0@2 ~ [4 5@3] ~ [7 8@3] ~ 4").scale("E:major").transpose(-24);
let riff_E2_faster = n("0 0 1 1 [4 5@3] 4 7 5").scale("E:major").transpose(-24);

let intro = cat(riff_Dm, 
                seq(riff_E1, riff_E2_slower),
                riff_Dm, 
                seq(riff_E1, riff_E2_faster))

let bass = 
  intro.slow(2).sound("gm_electric_bass_finger")

$: bass;
$: drums;