let shift = 2

let riff_Dm = n("0@2 ~ 4 ~ 7 ~ 4 0@2 ~ 4 ~ 7 ~ 4").scale("D:minor").transpose(-24 + shift);

let riff_E1 = n("0@2 ~ 4 ~ 7 ~ 4").scale("E:major").transpose(-24 + shift);
let riff_E2_l2l3 = n("0@2 ~ [4 5@3] ~ [7 8@3] ~ 4").scale("E:major").transpose(-24 + shift);
let riff_E2_l3_h = n("0@2 ~ 4 ~ [7 8@3] ~ 7").scale("E:major").transpose(-24 + shift);
let riff_E2_l3_l4h = n("0@2 ~ 4 ~ [7 8@2] ~ [10 11@2]").scale("E:major").transpose(-24 + shift);
let riff_E2_faster = n("0 0 1 1 [4 5@2] 4 7 5").scale("E:major").transpose(-24 + shift);
let riff_E2_l3 = n("0@2 ~ 4 ~ [7 8@2] ~ 4").scale("E:major").transpose(-24 + shift);

// TODO: split, unify names
let chorus_Dm4 = n("0@2 ~ 0 ~ 0 ~ 7   0@2 ~ 0 ~ 0 ~ 7").scale("D:minor").transpose(-24 + shift);
let chorus_E3 = n("0@2 ~ 0 ~ 7 ~ 0   0@2 ~ 0!3 5 4").scale("E:major").transpose(-24 + shift);
let chorus_Dm3 = n("0@2 ~ 0 ~ 7 ~ 0   0@2 ~ 0 ~ 7 ~ 0").scale("D:minor").transpose(-24 + shift);
let chorus_E4 = n("0@2 ~ 0 ~ 0 ~ 7   0 0 4 0 7 6b 5 4").scale("E:major").transpose(-24 + shift);
let chorus_E4_high = n("0@2 ~ 0 ~ 0 ~ 7   7 7 1 1 [4 5@2] 4 7 5").scale("E:major").transpose(-24 + shift);
let chorus_E4_asc = n("0@2 ~ 0 ~ 0 ~ 7   0@2 ~ 0 1 4 5 7").scale("E:major").transpose(-24 + shift);
let mk_E_riff = (e2) => seq(riff_E1, e2)

// TODO: split into two parts and unify with riff
let chorus_Dm_43 = n("0@2 ~ 0 ~ 0 ~ 7   0@2 ~ 0 ~ 7 ~ 0").scale("D:minor").transpose(-24 + shift);
let chorus_Dm_34 = n("0@2 ~ 0 ~ 7 ~ 0   0@2 ~ 0 ~ 0 ~ 7").scale("D:minor").transpose(-24 + shift);
let chorus_E_low = n("[0@2 ~ 0 ~ 0 ~ 0]!2").scale("E:major").transpose(-24 + shift);

let intro = cat(riff_Dm, mk_E_riff(riff_E2_l2l3), 
                riff_Dm, mk_E_riff(riff_E2_faster))

let chorus1 = cat(
  // chorus_Dm4, chorus_E3,
  //chorus_Dm3, chorus_E4,
  // chorus_Dm_43, chorus_E_low,
  chorus_Dm_34, chorus_E4_high
)

let chorus2 = cat(
  chorus_Dm4, chorus_E4_asc,
)


let verse1 = cat(
  riff_Dm, mk_E_riff(riff_E2_l3),
  riff_Dm, mk_E_riff(riff_E2_l3),
  riff_Dm, mk_E_riff(riff_E2_l3_l4h),                
  riff_Dm, mk_E_riff(riff_E2_faster),
)

let verse2 = cat(
  riff_Dm, mk_E_riff(riff_E2_l3),
  riff_Dm, mk_E_riff(riff_E2_l3_l4h),  // plus extra legato in E
  riff_Dm, mk_E_riff(riff_E2_l3),
  riff_Dm, mk_E_riff(riff_E2_faster),
)

let interlude = cat(
  riff_Dm, mk_E_riff(riff_E2_l3_h),
  riff_Dm, mk_E_riff(riff_E2_faster),  
)


/* 
let verse2 = 
 seq([riff_E2_even_slower, riff_E2_slower_alt_high].map((e2) => seq(riff_Dm, mk_E_riff(e2)).slow(4)))
  */
 
let bass = 
  verse1.slow(2)
  .sound("gm_electric_bass_pick").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums;