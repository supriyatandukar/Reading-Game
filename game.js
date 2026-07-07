const output = document.getElementById("output");
const input = document.getElementById("player-input");
const submitBtn = document.getElementById("submit-btn");

let playerName = "";

let stage = "intro";

let forestVisited = false;
let pathVisited = false;
let playgroundVisited = false;

function slowPrint(text, delay = 35) {

    return new Promise(resolve => {

        let i = 0;

        const interval = setInterval(() => {

            output.innerHTML += text.charAt(i);

            output.scrollTop = output.scrollHeight;

            i++;

            if(i >= text.length){

                clearInterval(interval);

                output.innerHTML += "<br><br>";

                output.scrollTop = output.scrollHeight;

                resolve();

            }

        }, delay);

    });

}

async function chooseNextLocation(){

    if(forestVisited && pathVisited && playgroundVisited){

        await slowPrint("");
        await slowPrint("════════════════════════════");
        await slowPrint("Search Complete");
        await slowPrint("════════════════════════════");
        await slowPrint("");

        await slowPrint("The strange feeling inside you grows stronger.");
        await slowPrint("Every place you've visited feels connected...");
        await slowPrint("As if each memory is leading you somewhere.");

        await slowPrint("");

        await slowPrint("Through the thinning fog...");
        await slowPrint("An old building slowly comes into view.");

        await slowPrint("");

        await slowPrint("The faded sign reads:");

        await slowPrint("\"POLICE STATION\"");

        await slowPrint("");

        await slowPrint("Perhaps your answers are waiting inside.");

        await slowPrint("");

        await slowPrint("Press Enter to continue.");

        stage = "chapter2";

        return;

    }

    await slowPrint("");

    await slowPrint("════════════════════════════");
    await slowPrint("Places to Search");
    await slowPrint("════════════════════════════");

    await slowPrint("");

    await slowPrint(
        forestVisited
        ? "[✓] Forest"
        : "[ ] Forest"
    );

    await slowPrint(
        pathVisited
        ? "[✓] Stone Path"
        : "[ ] Stone Path"
    );

    await slowPrint(
        playgroundVisited
        ? "[✓] Playground"
        : "[ ] Playground"
    );

    await slowPrint("");

    await slowPrint("Type the place you want to visit.");

    await slowPrint("");

    await slowPrint("Example:");

    await slowPrint("> forest");

    stage = "chapter1";

}


async function gameLogic(inputText){

    inputText = inputText.trim().toLowerCase();

    switch(stage){

        case "intro":

            await slowPrint("══════════════════════════════");
            await slowPrint("THE FORGOTTEN SEARCH");
            await slowPrint("══════════════════════════════");

            await slowPrint("An Interactive Psychological Mystery");

            await slowPrint("");

            await slowPrint("How to Play");

            await slowPrint("• Read carefully.");
            await slowPrint("• Whenever choices appear, type the exact word shown (for example: forest).");
            await slowPrint("• Press Enter or click Submit to continue.");
            await slowPrint("• Explore every location to uncover the truth.");
            await slowPrint("");

            await slowPrint("What is your name?");

            stage = "name";

            break;

        case "name":

            playerName = inputText || "Unknown";

            await slowPrint(`Welcome, ${playerName}.`);

            await slowPrint("");

            await slowPrint("════════════════════");
            await slowPrint("CHAPTER I");
            await slowPrint("Awakening");
            await slowPrint("════════════════════");

            await slowPrint("");

            await slowPrint("The first thing you notice...");

            await slowPrint("...is silence.");

            await slowPrint("");

            await slowPrint("Not the peaceful silence of an empty room.");

            await slowPrint("The kind of silence that makes your ears ring.");

            await slowPrint("");

            await slowPrint("Slowly...");

            await slowPrint("You open your eyes.");

            await slowPrint("");

            await slowPrint("A thick blanket of pale fog stretches endlessly around you.");

            await slowPrint("Ancient trees tower over your head.");

            await slowPrint("No birds sing.");

            await slowPrint("No wind blows.");

            await slowPrint("");

            await slowPrint("Everything feels strangely familiar.");

            await slowPrint("Like returning to a place you've forgotten.");

            await slowPrint("");

            await slowPrint("You search your memories.");

            await slowPrint("");

            await slowPrint("Nothing.");

            await slowPrint("No home.");

            await slowPrint("No family.");

            await slowPrint("No friends.");

            await slowPrint("No childhood.");

            await slowPrint("");

            await slowPrint("Only one certainty remains.");

            await slowPrint("\"I exist.\"");

            await slowPrint("");

            await slowPrint("A strange feeling begins pulling at your heart.");

            await slowPrint("Not fear.");

            await slowPrint("Not pain.");

            await slowPrint("A longing.");

            await slowPrint("");

            await slowPrint("You need to find someone.");

            await slowPrint("");

            await slowPrint("Who?");

            await slowPrint("");

            await slowPrint("You don't know.");

            await slowPrint("");

            await slowPrint("Why?");

            await slowPrint("");

            await slowPrint("You don't know that either.");

            await slowPrint("");

            await slowPrint("Yet every instinct tells you...");

            await slowPrint("");

            await slowPrint("\"Keep searching.\"");

            await slowPrint("");

            await slowPrint("Three places catch your attention.");

            stage = "chapter1";

            await chooseNextLocation();

            break;

        
        case "chapter1":
          if(inputText === "forest" && !forestVisited){
            forestVisited = true;
            await slowPrint("You walk deeper into the forest.");
            await slowPrint("Every tree seems older than the last.");
            await slowPrint("A tiny blue shoe lies beneath the fallen leaves.");
            await slowPrint("The moment you touch it, a memory flashes...");
            await slowPrint("\"Slow down!\"");
            await slowPrint("A warm voice laughs.");
            await slowPrint("The memory disappears as quickly as it came.");
            await chooseNextLocation();
          }
          
          else if(inputText === "path" && !pathVisited){
            pathVisited = true;
            await slowPrint("You follow the cracked stone path.");
            await slowPrint("A rusty tricycle rests beside the road.");
            await slowPrint("You touch it.");
            await slowPrint("\"You're doing great!\"");
            await slowPrint("\"WAIT! DON'T GO TOO FAR!\"");
            await slowPrint("The memory suddenly fades.");
            await chooseNextLocation();
          }
          
          else if(inputText === "playground" && !playgroundVisited){
            playgroundVisited = true;
            await slowPrint("An abandoned playground emerges from the fog.");
            await slowPrint("A faded teddy bear sits alone on a bench.");
            await slowPrint("\"Don't forget Buttons!\"");
            await slowPrint("The name feels familiar...");
            await chooseNextLocation();
          }
          
          else{
            await slowPrint("Please type one of the available places.");
            await chooseNextLocation();
          }
          
          break;
        }

}

submitBtn.addEventListener("click", async()=>{

    const inputText = input.value.trim();

    if(!inputText) return;

    output.innerHTML += `<span>> ${inputText}</span><br>`;

    input.value="";

    await gameLogic(inputText);

});

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter")
        submitBtn.click();

});

// Start the game automatically
gameLogic("");