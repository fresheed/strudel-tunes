let in_Em = (notes) => n(notes).scale("E:minor").transpose(-12)
let in_G = (notes) => n(notes).scale("G:major").transpose(-12)
let in_D = (notes) => n(notes).scale("D:major").transpose(-0)
let in_A = (notes) => n(notes).scale("A:major").transpose(-12)

// let ring everywhere
let verse_Em = in_Em("0@2 7 [0,4,7,9]@2 9 7 4")
let verse_Em_2 = in_Em("0@2 7 [0,4,7,9]@2 11 9 7")
let verse_G = in_G("0@2 2 [0,2,4,7]@2 4 2 7")
let verse_G_2 = in_G("0@2 4 [0,2,4,7]@2 9 2 7")
let verse_D = in_D("0@2 0 [0,4,7]@2 9 7 4")
let verse_D_2 = in_D("0@2 4 [0,4,7]@2 9 7 4")
let verse_A = in_A("0@2 4 [0,4,7,9]@2 7 4 0")
let verse_A_2 = in_A("0@2 7 4 11 9 7 3")

let verse = cat(verse_Em, verse_G, verse_D, verse_A,
                verse_Em_2, verse_G_2, verse_D_2, verse_A_2)

let guitar = 
  verse.slow(1)
  .sound("gm_electric_guitar_clean")

let drums = sound(`
  [bd] sd bd sd
`).bank("RolandTR909").gain(0.25)

setcpm(25);
$: guitar;
$: drums;