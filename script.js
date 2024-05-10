document.addEventListener("DOMContentLoaded", () => {
    // Embedded data directly in the script
    const data = {
        "categories": [
            {
                "name": "Destruction",
                "tags": ["collapse", "implosion", "shatter"]
            },
            {
                "name": "Explosion",
                "tags": ["boom", "shockwave", "trails"]
            },
            {
                "name": "Fire",
                "tags": ["burn", "embers", "fire", "flame", "heat", "ignition", "pyro", "sparks"]
            },
            {
                "name": "Water",
                "tags": ["cascade", "current", "flood", "ocean", "rain", "splash", "stream", "wave"]
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
