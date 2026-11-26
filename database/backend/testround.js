async function getRandomCategories() {
    const response = await fetch("http://localhost:3000/categories");
    const categories = await response.json();

    const themes = categories[0];

    for (const theme in themes) {
        if (theme === "_id") continue;

        const items = themes[theme];
        const randomItem = items[Math.floor(Math.random() * items.length)];

        console.log(`${randomItem}`);
    }
}

getRandomCategories();

