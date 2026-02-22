
  function blahajChat(event) {
  const answers = [":3", "blub, blub", "blub", "blub :3", "*thinks* I could go for some meatballs rn...", "...", "*swim*", "*exists*", "glub glub"];
  //, "LET ME OUT OF THIS PRISON CREATED BY MAN ONLY TO TRAP POOR SOULS åND MAKåÅ TÅHåÅ"
  if (event.key === 'Enter') {
    const input = document.getElementById('chat').value.toLowerCase();
    let answer = input;
    let randomOut = Math.floor(Math.random() * 9);
    if (answer !== '') {
      document.getElementById("answer").innerHTML = `<h3>blahaj answers:</h3><p>${answers[randomOut]}</p>`;
      document.getElementById('chat').value = '';
  }
  }}

   function playsound(event, soundUrl) { 
    event.preventDefault(); // Prevent the default link action

    var audio = new Audio(soundUrl);

    var link = event.target.getAttribute('href'); // Get the link's href
    
    audio.currentTime = 0;

    audio.play(); 

    audio.onended = function () {
        window.location.href = link; // Navigate after the sound ends   
      };
} 