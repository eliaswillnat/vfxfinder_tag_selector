document.addEventListener("DOMContentLoaded", () => {
    // Embedded data directly in the script
    const data = {
        "categories": [
            {
                "name": "Elemental",
                "tags": ["burn", "embers", "fire", "flame", "heat", "ignition", "pyro", "sparks", "lava", "magma", "cascade", "current",
                        "flood", "ocean", "rain", "stream", "wave", "watersplash", "ice", "snow", "underwater", "gusts", "shockwave", "rock", "debris", "dust",
                        "cascade", "current", "flood", "ocean", "rain", "splash", "stream", "wave"]
            },
            {
                "name": "Supernatural",
                "tags": ["dimensions", "darkdimension", "distortion", "magic", "spells", "superpower", "superhuman", "slowmotion"]
            },
            {
                "name": "Sci-Fi & Space",
                "tags": ["spacetime", "galaxy", "blackhole", "wormhole", "hyperspace", "teleportation", "artificialintelligence", "aliens", "invasion",
                        "ai", "clone", "mutation", "star", "nebula", "sun", "solarsystem", "propulsion", "warpdrive", "timetravel", "quantumteleportation", "atomic", "laser"]
            },
            {
                "name": "Weather & Natural Phenomena",
                "tags": ["storm", "thunderbolt", "earthquake", "eruption", "fissure", "volcano", "artificialintelligence", "ai", "clone",
                        "mutation", "tornado", "twister", "mountain", "lightning"]
            },
            {
                "name": "Creatures, Magic & Fantasy",
                "tags": ["dragon", "monster", "beast", "demon", "goblin", "troll", "vampire", "werewolf", "witch", "wizard", "elf", "dwarf", "orc", "dinosaurs", "trex"]
            },
            {
                "name": "Destruction & Combat",
                "tags": ["weapons", "swords", "guns", "bullets", "explosions", "implosion", "combat", "trails", "condensationcloud", "gunfire", "punches", "kicks", "fights", "wars", "battles", "destructions", "collapse", "fractures", "shatters"]
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
