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
let riff_E2_slower_alt_high = n("0@2 ~ 4 ~ [7 8@2] ~ [10 11@2]").scale("E:major").transpose(-24);
let riff_E2_faster = n("0 0 1 1 [4 5@2] 4 7 5").scale("E:major").transpose(-24);
let riff_E2_even_slower = n("0@2 ~ 4 ~ [7 8@2] ~ 4").scale("E:major").transpose(-24);

// TODO: split, unify names
let chorus_Dm4 = n("0@2 ~ 0 ~ 0 ~ 7   0@2 ~ 0 ~ 0 ~ 7").scale("D:minor").transpose(-24);
let chorus_E3 = n("0@2 ~ 0 ~ 7 ~ 0   0@2 ~ 0!3 5 4").scale("E:major").transpose(-24);
let chorus_Dm3 = n("0@2 ~ 0 ~ 7 ~ 0   0@2 ~ 0 ~ 7 ~ 0").scale("D:minor").transpose(-24);
let chorus_E4 = n("0@2 ~ 0 ~ 0 ~ 7   0 0 4 0 7 6b 5 4").scale("E:major").transpose(-24);
let chorus_E4_high = n("0@2 ~ 0 ~ 0 ~ 7   7 7 1 1 [4 5@2] 4 7 5").scale("E:major").transpose(-24);

// TODO: split into two parts and unify with riff
let chorus_Dm_43 = n("0@2 ~ 0 ~ 0 ~ 7   0@2 ~ 0 ~ 7 ~ 0").scale("D:minor").transpose(-24);
let chorus_Dm_34 = n("0@2 ~ 0 ~ 7 ~ 0   0@2 ~ 0 ~ 0 ~ 7").scale("D:minor").transpose(-24);
let chorus_E_low = n("[0@2 ~ 0 ~ 0 ~ 0]!2").scale("E:major").transpose(-24);


let chorus1 = cat(
  // chorus_Dm4, chorus_E3,
  //chorus_Dm3, chorus_E4,
  // chorus_Dm_43, chorus_E_low,
  chorus_Dm_34, chorus_E4_high
)

let intro = cat(riff_Dm, 
                seq(riff_E1, riff_E2_slower),
                riff_Dm, 
                seq(riff_E1, riff_E2_faster),
              )

let verse1 = cat(
    /* riff_Dm, 
    seq(riff_E1, riff_E2_even_slower),
    riff_Dm, 
    seq(riff_E1, riff_E2_even_slower), */
    riff_Dm, 
    seq(riff_E1, riff_E2_slower_alt_high),                
    riff_Dm, 
    seq(riff_E1, riff_E2_faster),
)

let bass = 
  chorus1.slow(2).sound("gm_electric_bass_finger")

$: bass;
$: drums;