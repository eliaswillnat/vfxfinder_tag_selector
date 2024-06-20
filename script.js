document.addEventListener("DOMContentLoaded", () => {
    // Embedded data directly in the script
    const data = {
        "categories": [
            {
                "name": "Elemental",
                "tags": ["burn", "embers", "fire", "flame", "heat", "ignition", "pyro", "lava", "magma", "cascade", "current",
                        "flood", "stream", "wave", "watersplash", "ice", "snow", "underwater", "gusts", "shockwave",
                        "splash", "acidic", "electricity", "energy", "dust", "smoke",
                        "liquid", "gas", "oxygen", "helium", "hydrogen", "rocks", "flames", "sand", "water", "droplet", "light", "plutonium", "air"]
            },
            {
                "name": "Sci-Fi & Space",
                "tags": ["spacetime", "blackhole", "wormhole", "hyperspace", "teleportation", "artificialintelligence", "aliens", "invasion",
                        "ai", "clone", "mutation", "star", "sun", "solarsystem", "propulsion", "atomic", "laser",
                        "beam", "void", "moon", "solarwaves", "earth", "planet", "stars", "astronaut", "beyond", "city", "clones", "endless", "eternity",
                        "scifi", "space", "futuristic", "galaxy", "universe", "kardashevscale1", "kardashevscale2", "kardashevscale3", "hud", "interstellar", "tachyondrive", "jumpdrive",
                        "timetravel", "quantumteleportation", "warpspeed", "lasersword", "lightsaber", "laserbeam", "lightspeed", "warpdrive", "holography", "hologram", "microverse", "microworld",
                        "nebula", "planetarysystem", "stellarsystem"]
            },
            {
                "name": "Weather & Natural Phenomena",
                "tags": ["storm", "thunderbolt", "eruption", "fissure", "volcano", "clone",
                        "mutation", "tornado", "twister", "lightning", "rain", "coldness", "freezing", "snowing",
                        "clouds", "windy", "sandstorm", "geyser", "tsunami", "thunder", "ocean", "heatwaves", "splash", "melting", "atmosphere",
                        "earthquake", "night"]
            },
            {
                "name": "Materials",
                "tags": ["glass", "rubber", "fur", "wood", "plastics", "metals", "ceramics", "textiles", "concrete", "stones"]
            },
            {
                "name": "Creatures, Magic & Fantasy",
                "tags": ["cells", "superpowers", "animals", "beasts", "bite", "bones", "creatures", "darkness", "magic", "utopian", "dystopian", "spells",
                        "onodrim", "horde", "immortality", "invisible", "monsters", "superhuman", "paralyzed", "mutants", "reptiles", "saliva", "portals", "dragons",
                         "demons", "goblin", "trolls", "vampires", "werewolf", "witch", "wizards", "elf", "dwarf", "orcs", "dinosaurs", "trex"]
            },
            {
                "name": "Physics",
                "tags": ["absorption", "expansion", "spin", "force", "power", "radiation", "molecules", "particles", "relativity", "physics", "vibrations", "supersonic", "magneticfield",
                         "soundwave", "acousticcavitation", "fluiddynamics", "chemicalreaction", "cymatics", "11d", "11th", "4d", "4th", "hyperspace", "accretiondisk", "mimicking", "atoms",
                         "attraction", "bend", "brightness", "bubble", "electron", "darkmatter", "darkenergy", "dimensions", "distortion", "spacetime", "laser", "echo", "eleventh", "eventhorizon",
                         "falling", "fourth", "fractal", "kaleidoscopic", "singularity", "nucleus", "glitch", "flight", "fly", "gravity", "higherdimension", "interdimensional", "hyperdrive",
                         "hyperspeed", "infinity", "tachyon", "jump", "nanotechnology", "timedilation", "quantumrealm", "speedoflight", "timeloop", "timewarp", "xray", "ultrasonic", "propulsion",
                         "timelapse", "microscopic", "slowmotion", "signal", "shrink"]
            },
            {
                "name": "Destruction & Combat",
                "tags": ["weapons", "swords", "guns", "bullets", "explosions", "implosions", "combat", "trails", "condensationcloud", "gunfire", "punches", "kicks", "fights", "wars", "battles",
                         "collapse", "fractures", "shatters", "blasts", "blastrings", "shards", "burn", "atomicbomb", "rage", "eruption", "embers",
                         "burst", "cracking", "collision", "disintegration", "debris", "volcano", "sparks", "massacre", "fissurevent", "shattered", "annihilation",
                         "meteor", "wilsoncloud", "meteorite", "attacking", "army", "blood", "skindamage", "shooting", "kamikaze", "kick", "kill", "laserpointer", "breaking",
                         "bulletime", "car", "chase", "chaos", "crowd", "dead", "death", "doom", "endoftheworld", "destructions", "armor", "injury", "grenade",
                         "headshot", "impact", "infectionsinvade", "nanobots", "massmurder", "swarms", "nuclearattack", "holocaust", "armageddon", "supervillain", "wounds", "nuke", "military",
                         "soldiers", "smash"]
            },
            {
                "name": "Nature",
                "tags": ["jungle", "forest", "tropical", "underwater", "ocean", "sea", "mountain", "mushroom", "tundra", "grassland", "desert", "trees"]
            },
            {
                "name": "Vehicles & Machines",
                "tags": ["cars", "bus", "airplanes", "rockets", "exosuits", "exoskeletons", "cyberneticsuits", "cyborg", "aircrafts", "bicycles", "trains", "flyingcars", "hovertrains", "maglevtrains",
                         "driverless", "machines", "robots", "skateboard", "hoverboard", "hyperloop", "helicopter", "spaceship", "spacestation", "megastructures", "ringstation", "spaceelevator",
                         "topopolis", "stellarengine", "matrioshkabrain", "dysonsphere", "gps"]
            }
        ]
    };

    const categoryContainer = document.querySelector('.scrollable-content');

    // Sort categories by their name
    data.categories.sort((a, b) => a.name.localeCompare(b.name));

    // Clear the container and re-append sorted categories
    categoryContainer.innerHTML = '';
    data.categories.forEach(category => {
        // Create category element with a title
        let categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        let title = document.createElement('h3');
        title.textContent = category.name;
        categoryDiv.appendChild(title);

        // Sort and append tags
        let tagsDiv = document.createElement('div');
        tagsDiv.className = 'tags';
        category.tags.sort().forEach(tag => {
            let tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagSpan.addEventListener('click', function() {
                this.classList.toggle('selected');
                updateOutput();
            });
            tagsDiv.appendChild(tagSpan);
        });

        categoryDiv.appendChild(tagsDiv);
        categoryContainer.appendChild(categoryDiv);
    });

    // Function to update the output based on selected tags
    function updateOutput() {
        const selectedTags = Array.from(document.querySelectorAll('.tag.selected'))
                                  .map(tag => tag.textContent)
                                  .sort(); // Sorts the selected tags alphabetically
        document.getElementById('output').value = selectedTags.join(' ');
    }

    // Copy functionality
    document.getElementById('copy').addEventListener('click', () => {
        const output = document.getElementById('output');
        output.select();
        document.execCommand('copy');
    });
});
