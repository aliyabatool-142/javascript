const lyrics = [
"One day I'm gonna grow wings (Wealth) "
,"One day I'm gonna grow wings (Health) "
,"One day I'm gonna grow wings (Spirituality) "
,"One day I'm gonna grow wings (Fame) "
,"One day I'm gonna grow wings (Love) "
,"One day I'm gonna grow wings (Freedom) "
,"One day I'm gonna grow wings (Success) "
,"One day I'm gonna grow wings (Happiness) "
,"One day I'm gonna grow wings (Power) "
,"One day I'm gonna grow wings (Death) "

];

function typeWriter(text, callback) {
  let i = 0;

  function typing() {
    if (i < text.length) {
      process.stdout.write(text.charAt(i)); // prints one letter
      i++;
      setTimeout(typing, 50); // speed (100ms per letter)
    } else {
      process.stdout.write("\n"); // move to next line
      if (callback) callback();
    }
  }

  typing();
}

// print all lines one after the other
function printLyrics(lines, index = 0) {
  if (index < lines.length) {
    typeWriter(lines[index], () => {
      setTimeout(() => {
        printLyrics(lines, index + 1);
      }, 300); // wait before next line starts
    });
  }
}

printLyrics(lyrics);
