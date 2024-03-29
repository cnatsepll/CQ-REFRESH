window.onload = function(e){ 
    loadDescriptionContainers();
}

const loadDescriptionContainers = ()=>{
    let containers = document.querySelectorAll(".description-container")
    for(let i = 0; i < containers.length; i+=1){
        let container = containers[i]
        container.appendChild(document.createElement("br"));
        let colorId = container.id;
        let name = colorId.charAt(0).toUpperCase() + colorId.slice(1);;
        let descriptionArray = shortDescriptions[container.id]();
        if(!!descriptionArray){
            for(let i = 0 ; i < descriptionArray.length; i+=1){
                let newDiv = document.createElement("div");
                newDiv.innerText = descriptionArray[i];
                if(i === 0){newDiv.style.fontWeight = "bold"};
                container.appendChild(newDiv);
                container.appendChild(document.createElement("br"));
            }
        }
        if(!!dice[colorId]){
            let diceDiv = document.createElement("div");
            let diceLinkText = document.createTextNode(`Click here to watch a video on ${name}'s philosophy`);
            let diceLink = document.createElement("a");
            diceLink.style.color = "black";
            diceLink.title = `DiceTry video on ${name}`;
            diceLink.href = dice[colorId];
            diceLink.target = '_blank';

            diceLink.addEventListener("click", ()=>{diceClick(`${name} - R`, dice[colorId])});

            diceLink.appendChild(diceLinkText);
            diceDiv.appendChild(diceLink);
            container.appendChild(diceDiv);
            container.appendChild(document.createElement("br"));
            container.appendChild(document.createElement("hr"));
        }else{
            container.appendChild(document.createElement("hr"));
        }
    }    
}

const diceClick =(result, link)=>{
	let logObj ={
		result: result,
		link: link
	}
	fetch('/video',{
		method: 'POST',
		mode: 'cors',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(logObj)
	})
}

let shortDescriptions = {};
shortDescriptions.gruul = ()=>{
    let mage = [];
    mage.push("You are a Red/Green Planeswalker (Welcome to the Gruul Clans).");
    mage.push("A Red/Green Planeswalker asks the question where am I now, and where should I go? Red and green both agree on the importance of authenticity. Green, from a place of wildness and immediacy, and red from a place of passion and self actualization. A real life activity that embodies red/green is Circling (à la the Authentic Relating community), which in part emphasizes setting aside narratives and frames and just being present, in the moment, with yourself and other people. Dionysian archetypes are red/green, as is Tinkerbell and the Hulk, and the parts of Wolverine that aren't green are usually red. On the gentler side of things, Aang from Avatar: The Last Airbender is firmly red/green and is often torn between his innate red playfulness and the gravity and responsibility required of his green role and destiny.");
    return mage;
}
shortDescriptions.golgari = ()=>{
    let mage = [];
    mage.push("You are a Black/Green Planeswalker (Welcome to the Golgari Swarm).");
    mage.push("A Black/Green Planeswalker asks the question what costs must be paid to achieve the ideal? Black and green share a sense of profanity (the absence of the sacred). Black/green is the combination that gets down in the dirt, the combination that embraces the cycle of life and death and rebirth. It's Tyler Durden shouting at his minions \"You are not special; you are made of the same decaying organic matter as everything else; you are all a part of the same compost heap.\" Notable black/green characters are; Bagheera from The Jungle Book, and Poison Ivy from Batman. Circe from The Odyssey is black/green, as are the eponymous Shrek and the Borg from Star Trek. In our own society, certain branches of ecoterrorists and social justice activists are firmly in this class");
    return mage;
}
shortDescriptions.rakdos = ()=>{
    let mage = [];
    mage.push("You are a Black/Red Planeswalker (Welcome to the Cult of Rakdos).");
    mage.push("A Black/Red Planeswalker asks the question how do I get what I want? Because of its dismissive attitude toward judgment and social mores, black/red is often the combination of endorsed hedonism and \"live and let live.\" Black and Red both agree that independence. For red it is something to be fostered and defended in an attempt to avoid coercion or pressure, and for black it is out of a desire for self reliance and agency. Many black/red characters lean evil, such as the Joker from Batman and Voldemort from canon Harry Potter, but the combination can also be one of impishness or chaotic selfishness, as with Peter Pan, Deadpool, or Cap'n Jack Sparrow. ");
    return mage;
}
shortDescriptions.simic = ()=>{
    let mage = [];
    mage.push("You are a Blue/Green Planeswalker (Welcome to the Simic Combine).");
    mage.push("A Blue/Green Planeswalker asks the question what do I not yet understand? Blue/Green is the combination of truth seeking. While they disagree strongly about what to do with understanding, both blue and green are deeply committed to seeing and understanding the world as it is, with blue pursuing knowledge and green striving for wisdom. A resonant example in today's society is Genetic Engineering. Genetic engineering is maybe the central case of \"see what's there, so that you can rearrange it to make it better.\"  Albus Dumbledore was blue/green in his old age, as was Uncle Iroh from Avatar: The Last Airbender. The character Morpheus from The Matrix played a blue/green role in the plot.");
    return mage;
}
shortDescriptions.izzet = ()=>{
    let mage = [];
    mage.push("You are a Blue/Red Planeswalker (Welcome to the Izzet League).");
    mage.push("A Blue/Red Planeswalker asks the question what can be achieved? What might be possible? Blue and red taken together are the colors of creativity. Passion combined with perfection, freedom combined with investigation, blue/red is the pairing that most typifies wild artistry and mad science. Nikola Tesla's endeavors are a strong example of blue/red mentality in modern society. Tony Stark from Iron Man started out blue/black, he ended up blue/red. Willy Wonka is also a blue/red archetype, as are Doc Brown from Back to the Future and Indiana Jones.");
    return mage;
}
shortDescriptions.dimir = ()=>{
    let mage = [];
    mage.push("You are a Blue/Black Planeswalker (Welcome to House Dimir).");
    mage.push("A Blue/Black Planeswalker asks the question how can I best achieve my goals? It's fair to describe blue/black as the combination of \"enlightened self-interest\". Blue and black both agree on growth mindset, the idea that one is not defined by one's origins or constrained to the role society has set. Blue/black characters are often intelligent, clever, arrogant, and aloof. Notable examples include Odysseus from The Odyssey, Sherlock Holmes, and Lex Luthor. Transhumanism is a fundamentally blue/black worldview, in opposition to the imperative to accept death as a crucial and inevitable part of life.");
    return mage;
}
shortDescriptions.selesnya = ()=>{
    let mage = [];
    mage.push("You are a White/Green Planeswalker (Welcome to the Selesnya Conclave).");
    mage.push("A White/Green Planeswalker asks the question what's fair and good? They both agree on community—on the sense that the whole can be greater than the sum of its parts, and that there are things larger than oneself that are worth sacrificing for. Green/white institutions tend to be centered around compassionate endeavors, but if they go astray it's in the direction of well meaning lost purposes and wasted signaling (a lack of blue's epistemic hygiene) rather than in the direction of cold, heartless efficiency or relentless pursuit of knowledge or the bottom line. They include institutions like the YMCA, Habitat for Humanity, Teach for America, and most small town churches, basically any organization whose primary purpose is to foster the web of connection between people and to maintain the society's culture.");
    return mage;
}
shortDescriptions.boros = ()=>{
    let mage = [];
    mage.push("You are a White/Red Planeswalker (Welcome to the Boros Legion).");
    mage.push("A White/Red Planeswalker asks the question what needs to be done? What would a good person do? Red and White are the colors of heroism and passion channeled through morality, and adherence to laws that may be higher than law. The best of warriors, soldiers, and vigilantes is red/white, as are heroes and martyrs. Examples include Daredevil, Robin Hood, and the Weasley twins from Harry Potter (Gryffindor is a red/white House), as well as V from V for Vendetta and Prince Zuko from Avatar: The Last Airbender (at least, near the end of their arcs).");
    return mage;
}
shortDescriptions.orzhov = ()=>{
    let mage = [];
    mage.push("You are a White/Black Planeswalker (Welcome to the Orzhov Syndicate).");
    mage.push("A White/Black Planeswalker asks the question who's in my circle of concern? The colors White and Black combine to form tribalism, the \"us versus them\" mentality. Think Don Corleone and the other gangsters from The Godfather—a strict system of codes and honor within the group, and almost total impunity with outsiders. You can also see the white/black ingroup/outgroup dynamic in certain swaths of social justice culture.");
    return mage;
}
shortDescriptions.azorius = ()=>{
    let mage = [];
    mage.push("You are a White/Blue Planeswalker (Welcome to the Azorius Senate).");
    mage.push("A White/Blue Planeswalker asks the question how do we know what's right and good? The whole concept of a \"rationality technique\" is extremely white/blue, the idea that we might create carefully defined, algorithmic heuristics for doing things better according to some outside standard is not one that other color combinations are likely to produce. Effective Altruism is also a white/blue movement, though it makes efforts to reach out to red (compassion) and black (taking the long view on self interest)");
    return mage;
}
shortDescriptions.abzan = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Abzan Houses.");
    mage.push("Abzan is a combination of White, Green, and Black");
    mage.push("Abzan shows an unyielding certainty with regards to one’s place in the world, an adherence to destiny, and an unrestrained will to survive, thrive, and protect a way of life. Those of Abzan colors have an earnest practicality about them and foster communities structured around growth and achievement.");
    return mage;
}
shortDescriptions.temur = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Temur Frontier.");
        mage.push("Temur is a combination of Green, Red, and Blue.");
        mage.push("Temur promotes a childlike curiosity, a Zen like wonder of self, and an insatiable desire to play, explore, discover and understand. Those of Temur colors are not interested in ego. They are do not have a concern for status or reputation, focusing instead on a oneness with their own immediate experience.");
        return mage;
}
shortDescriptions.sultai = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Sultai Brood.");
        mage.push("Sultai is a combination of Black, Blue and Green.");
        mage.push("Sultai have a driven wanting, not fiery or passionate, but sure and unyielding. Those of Sultai colors do not believe in adhering to rules, norms, or laws if it does not benefit them, but they are respectful to the power of nature and fate. Sultai seek opportunity and believe in maximizing their true potential, willing to do anything necessary that moves them closer to their goals.");
        return mage;
}
shortDescriptions.mardu = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Mardu Horde.");
        mage.push("Mardu is a combination of Red, White, and Black.");
        mage.push("Mardu is the folk hero archetype, wandering from place to place, who chooses a people or principle to defend and then when satisfied, moves on. Those of Mardu colors beleive making the most of your experiences is what it is to be fulfilled in life, and find order in a code of conduct that promotes this philosophy.");
        return mage;
}
shortDescriptions.jeskai = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Jeskai Way");
        mage.push("Jeskai is a combination of Blue, Red, and White.");
        mage.push("Jeskai live within a cycle of inspiration, investigation, and evaluation. Those of Jeskai colors show a refusal to be content with what is already known. They have a desire to out out in search of new information, to return and share their findings in comunal progress. Jeskai put their ego second in the process of reaching for something greater.");
        return mage;
}
shortDescriptions.esper = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Esper Shard.");
        mage.push("Esper is a combination of Blue, Black, and White.");
        mage.push("Esper takes a coolly calculated, methodical approach towards building a better future for oneself and those in one's circle of interest, without frivolous emotion or an excessive concern for harmony or the status quo. They do what needs to be done in the name of progress");
        return mage;
}
shortDescriptions.naya = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Naya Shard.");
    mage.push("Naya is a combination of Green, White, and Red.");
    mage.push("Naya has a passionate presence, tempered by tradition and a sense of belonging, Naya has a full and vibrant commitment to one’s chosen way of life. Those of Naya colors have an almost total lack of selfishness or dissatisfaction, resulting in a fierce desire to protect the good that already is.");
    return mage;
}
shortDescriptions.grixis = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Grixis Shard");
    mage.push("Grixis is a combination of Black, Blue, and Red.");
    mage.push("Grixis believes in a bold and impassioned search for satisfaction, perfection, and self expression. Those of Grixis colors have an eagerness to break the status quo and remake things in their own image. They disregard tradition and conventional approval, seeing them as unnecessary to achieve their goals, the well behaved rarely make history.");
    return mage;
}
shortDescriptions.bant = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Bant Shard.");
    mage.push("Bant is a combination of the White, Green, and Blue colors.");
    mage.push("Bant displays a calm and peaceful stability underlying a slow progression towards knowledge, wisdom, and fulfillment. Those of Bant colors are respectful and have an absence of urgency, and restlessness. They believe in building scaffolds rather than cages, and are patient in lifting others up towards a better future.");
    return mage;
}
shortDescriptions.jund = ()=>{
    let mage = [];
    mage.push("You are a Planeswalker of The Jund Shard.");
    mage.push("Jund is a combination of the Red, Green and Black colors.");
    mage.push("Jund has a feral realism with no sugar coating, a self aware self indulgence that doesn't pretend to be anything it isn't. Those of Jund colors show a refusal to slow down or be contained, and do not follow standards that are contrived and ephemeral in the first place.");
    return mage;
}
shortDescriptions.white = ()=>{
    let mage = [];
    mage.push("You are a Mono White Planeswalker, all for one one for all.");
    mage.push("White wants peace.");
    mage.push("A White Planeswalker, when presented with a decision or quandary, asks what is the right course of action to take, where \"right\" depends on their moral or cultural framework.");
    mage.push("White wants to create a world where there is no unnecessary suffering, a world where life is as good as it can be for each individual. The key to making this happen is teaching individuals the importance of taking actions which benefit the group as a whole, even if those actions might not benefit them personally.");
    mage.push("White does want as many as possible to understand its motives and share them. But white realizes that in order to accomplish its larger goal, some individuals will have to be lead down the path rather than venture there of their own accord.");
    return mage;
}
shortDescriptions.blue = ()=>{
    let mage = [];
    mage.push("You are a Mono Blue Planeswalker, stay curious.");
    mage.push("Blue wants perfection");
    mage.push("A Blue Planeswalker, when presented with a decision or quandary, asks what course of action makes the most sense, where \"sense\" is determined by careful thought and the application of knowledge and expertise.");
    mage.push("Blue believes that each and every one of us is born a blank slate with the potential to become anything. The entire point of life is figuring out what you could achieve with the right education, experience, and tools. Note that this is not a task with an end goal, but one that continues throughout your life. There will always be things you can do to improve, change, or adapt. The journey of life is one of constant discovery as you keep seeking to better yourself.");
    mage.push("Much as blue wishes to perfect itself, it also wants to perfect the world it lives in. Part of this is to ensure that blue has access to the resources it needs, but part of it is the belief that an element of reaching one's potential is living within a world that has reached its own potential. As such, blue is the color most interested in technology and wants the latest and greatest version of whatever it is using.");
    return mage;
}
shortDescriptions.black = ()=>{
    let mage = [];
    mage.push("You are a Mono Black Planeswalker, be uninhibited.");
    mage.push("Black wants power.");
    mage.push("A Black Planeswalker, when presented with a decision or quandary, asks what course of action will leave me best off, where \"best off\" includes having power, influence, safety, and wealth, as well as having moved closer to one's goals.");
    mage.push("Black believes it is the only realist, the only color to look and see the world as it is. An individual is free to have whatever they want, provided they have the power to obtain and keep it. This makes power the most important resource, because it's the one thing that can guarantee your ability to control your life and thus your happiness.");
    mage.push("Black's philosophy is very simple: There's no one better suited to look after your own interests than you. Therefore, if everyone looks out after their own interests, you've created a system where everyone has someone looking out for them. In addition, black's system allows everyone the opportunity to succeed. Will everyone succeed? Of course not—but once again, that's not black's doing. That's just how the world works.");
    return mage;
}
shortDescriptions.red = ()=>{
    let mage = [];
    mage.push("You are a Mono Red Planeswalker, stay true to yourself.");
    mage.push("Red wants freedom.");
    mage.push("A Red Planeswalker, when presented with a decision or quandary, asks what do I feel like doing?");
    mage.push("Everyone seems preoccupied with the meaning of life. Red's not, because red already knows the answer. You see, your heart tells you what it needs in order to be fulfilled. All you have to do is listen to it and act accordingly. It's not a mystery. You are literally bombarded with constant feelings that guide you down the correct path. The problem is all the other colors ignore the message.");
    mage.push("To outsiders, red might seem a bit chaotic; but that's only because others can't see what's in red's heart. They cannot feel red's emotions guiding them. Living life to its fullest takes a lot of dedication and perseverance, but red is always up to the task.");
    return mage;
}
shortDescriptions.green = ()=>{
    let mage = [];
    mage.push("You are a Mono Green Planeswalker, one with the world.");
    mage.push("Green wants harmony.");
    mage.push("A Green Planeswalker, when presented with a decision or quandary, asks how are these things usually done? What is the established wisdom?");
    mage.push("The other colors are all focused on how they'd change the world to make it better. Green is the one color that doesn't want to change the world, because green is convinced that the world already got everything right. The natural order is a thing of beauty and has all the answers to life's problems. The key is learning to sit back and recognize what is right in front of you.");
    mage.push("Each individual is born with all the potential they need. The secret to a happy life is to recognize the role you were born into and then embrace it. Do what you were destined to do. The world is this elaborate system, and each one of us gets to play a part. And it's not something we have to guess about; it's imprinted on us, it's in our genes. Just look within.");
    return mage;
}