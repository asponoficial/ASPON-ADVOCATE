//script.js

//Sample data (replace with your actual data)
const mediaData = [
    { type: 'video',src:'video.mp4',thumbnail:'videol_thumb.jpg'},
    { type: 'image',src:'imagel.jpg'},
    //...more media iterms
];

const chartData = {
    labels:['A','B','C'],
    datasets: [{
        label: 'My Dataset',
        data: [10, 20, 30],
        backingroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    }]
};

// Create media elements
const mediaList = document.getElementByld('media-list');
mediaData.forEach(item => {
    const mediaItem = document.createElement('div');
    mediaIterm.class.add('media-item');

    if(item.type === 'video'){
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        mediaItem.appendChild(video);
    } else if (item.type === 'image') {
        const img = document.createElement('img');
        img.src= item.src;
        mediaItem.appendChild(img);

    }
    if (item.thumbnail) {
        const thumbnail = document.createElement('img');
        thumbnail.src = item.thumbnail;
        mediaItem.appendChild(thumbanail);
    }

    mediaList.appendChild(mediaItem);
});

// Create chart
const ctx = document.getElementById('myChart').getContext('2d');
new chart(ctx,{
    type: 'bar',
    data: chartData,
    Options:{}
});

// Download and share functionality(placeholder)
document.getElementById('download-button').addEventListener('clic',() =>
    {
        //Implement downloard logic here
        alert('download functionality not yet implemented');
    });

    document.getElementById('share-button').addEventListener('click',
    () => {
        // Implement share logic here
        alert('share functionality not yet implemented');
    });

