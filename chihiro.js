let C = n("0@3 6    ~@8    5 6@3").scale("C:major").transpose(-12);
let C_extra = n("0@3 6  ~@4   ~@2 0@2  5 6@3").scale("C:major").transpose(-12);
let C_extra_octave = n("0@3 6  ~@4   ~@2 0@2  6 7@3").scale("C:major").transpose(-12);

let A1 = n("0@3 7  ~@4   ~@2 0@2  6 7@3").scale("A:dorian").transpose(-24);
let A2_desc = n("0@3 7   ~@2 [6 ~]@2  ~ 5 ~@2 6@2 5@2").scale("A:dorian").transpose(-24);
let A2_spaced = n("0@3 7   ~@4  ~@2 0@2 ~ 5@3").scale("A:dorian").transpose(-24);

let E_l = n("0@3 7  ~@4  ~@2 0@2 6 7@3").scale("E:minor").transpose(-24);
let E_l_jump = n("0@3 7  ~@4  ~@2 0@2 6 7@2 7").scale("E:minor").transpose(-24);
let E = n("0@3 7  ~@4  ~@2 0@2 7@4").scale("E:minor").transpose(-24);

let G1 = n("0@3 7  ~@2 8@3 9@3   ~@4").scale("G:mixolydian").transpose(-24);
let G1_spaced = n("0@3 7  ~@2 8@2  ~ 9 ~@2  ~@4").scale("G:mixolydian").transpose(-24);
let G2 = n("0@3 7@3  8@3 9@3  8@2 7@2").scale("G:mixolydian").transpose(-24);
let G_extra = n("0@3 7  ~@4   ~@2 0@2  6 7@3").scale("G:mixolydian").transpose(-24);
let G_stacc = n("0@3 7  ~@2 [7b ~]@2  ~ 4  ~@2 4@4").scale("G:mixolydian").transpose(-24);

let silence = n("~")

let verse1 = cat(
    // "To take my love away..."
    C, C,
    A1, A2_desc,
    E_l, E,
    G1, G2,
    // "Kind of strange..."
    C, C_extra,
    A1, A2_desc,
    E_l, E_l,
    G_extra, G2
)

let pre_chorus1 = cat(
    // "Can you open up the door..."
    // C_extra, C_extra,
    // A1, A2_desc,
    // E_l_jump, E_l,
    // G_stacc, silence,
    // C_extra_octave, C_extra,
    // A1, A2_spaced,
    // E_l, E_l,
    G_stacc, G1_spaced
)


let bass = 
  pre_chorus1.slow(1)
  .sound("gm_electric_bass_pick").lpf(900)

let drums = sound(`
  [bd, rim] sd bd sd
`).bank("RolandTR909");

setcpm(30);
$: bass;
$: drums;