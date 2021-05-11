var arrow = document.querySelector('#arrow');

arrow.addEventListener('click', () => {
    document.getElementById('bottom').scrollIntoView({behavior: "smooth", block: "start"})
    subPage()
    
})


function type(id, text, speed) {
  repo()
  var i = 0;
  var txt = text;
  document.getElementById(id).innerHTML = ""

  typeWriter()
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById(id).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

function subPage() {
    type("whyTitle", "Why?", 200)
    type("whoTitle", "Who?", 200)
    window.onscroll = null;
  
}

const repo = async () => { 
  await fetch('https://api.github.com/repos/hackernoon/Free-Internet-Plugin').then(response => response.json())
            .then(data => {
                document.getElementById("repo").innerHTML = `Stars: ${data.stargazers_count} -  Forks: ${data.forks}  -  Watchers: ${data.subscribers_count}`
    })
}