let main_riff = null
let trans1 = null
let trans2 = null

// main_riff * 4
// trans F high, A#
// verse * 3
// trans2 F low, A#
// verse * 3
// trans2 F low, A#
// main_riff * 4
// trans F low, G#
// verse * 3  
// trans A#, A#, C, G#   * 3
// trans F low, A#
// silence  - two main riffs
//      enter on "Hung down with the freaks and the **ghouls"
// verse * 2
// trans F low, A#
// verse * 3
// trans F low, A#
// main_riff * 2



let bass = 
  chorus1.slow(1)
  .sound("gm_electric_bass_pick").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums;