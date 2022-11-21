const images = [
    'https://dr.savee-cdn.com/things/thumbnails/6/1/8f49b6400ad4e7965c339b.webp',
    'https://dr.savee-cdn.com/things/6/2/677a6375d97600607f7e96.webp',
    'https://dr.savee-cdn.com/things/5/d/11ec389ec98c4500facf20.webp',
    'https://dr.savee-cdn.com/things/6/2/8dedf452061130e55aab0b.webp',
    'https://dr.savee-cdn.com/things/6/2/8df1545bf68ffa19cca4a6.webp',
    'https://dr.savee-cdn.com/things/5/d/923122e7bc2a1ee8e24127.webp',
    'https://dr.savee-cdn.com/things/6/3/1a1b377ab1e581a362ebb8.webp',
    'https://dr.savee-cdn.com/things/6/3/2b6b39bd105f976ae6912b.webp',
    'https://dr.savee-cdn.com/things/5/d/eab65d5c3bc0360c33fde8.webp'
];
const posts = [];

let imageIndex = 0;

for (let i = 0; i < 93; i++){
    let item = {
        id: i, 
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}
