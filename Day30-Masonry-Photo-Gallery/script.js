const container = document.querySelector(".container");

function generateMasonryGrid(columns, posts){
    container.innerHTML = '';
    
    let columnWrappers = {};
    
    for (let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }
    for (let i = 0; i < posts.length; i++){
        const column = i % columns; 
        columnWrappers[`column${column}`].push(posts[i]);
    }
    for (let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add("column");
        columnPosts.forEach(post => {
                column.innerHTML += `
                <div class="post">
                    <img src="${post.image}" alt="" />
                    <div class="overlay">
                        <h4 class="title">${post.title}</h4>
                    </div>
                </div>`;
        });
        container.appendChild(column);
    }
}
function adjustGrid(){
    if (window.innerWidth > 1200 && window.innerWidth <= 1440) generateMasonryGrid(5, posts);
    if (window.innerWidth > 1024 && window.innerWidth <= 1200) generateMasonryGrid(4, posts);
    if (window.innerWidth > 600 && window.innerWidth <= 1024) generateMasonryGrid(3, posts);
    if (window.innerWidth > 375 && window.innerWidth <= 600) generateMasonryGrid(2, posts);
    if (window.innerWidth <= 375) generateMasonryGrid(1, posts);
}
window.addEventListener("load", adjustGrid);
window.addEventListener("resize", adjustGrid);