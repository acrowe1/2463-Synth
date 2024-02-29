/** different synth options */
let synth = new Tone.PolySynth(Tone.Synth); 

let bend = new Tone.PitchShift();
bend.pitch = 0; 

synth.connect(bend); 
bend.toDestination(); 

/** if you add two asterisks, it auto generates the end of the comment for you!!! */
/* can use frequency numbers (ex: 200, 220, etc.) instead of notes
if you so choose */ 
let notes = {
  'a' : "C4", 
  's' : "D4", 
  'd' : "E4", 
  'f' : "F4", 
  'g' : "G4", 
  'h' : "A4", 
  'j' : "B4", 
  'k' : "C5"
};

function setup() {
  createCanvas(400, 400);

  // pitch can be negative!! 
  pitchSlider = createSlider(0, 12, 0, 0.1);
  pitchSlider.position(95, 235); 
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value()); 
}

function keyPressed() {
  let playNotes = notes[key]; 
  synth.triggerAttack(playNotes); 
}

function keyReleased() {
  let playNotes = notes[key]; 
  synth.triggerRelease(playNotes, '+0.03'); 
}

function draw() {
  background(220);

  text('Play A-K for synth!', 100, 200); 
  text('Adjust the pitch', 100, 230);
}
