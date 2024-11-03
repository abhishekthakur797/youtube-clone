// const videos = [
//   {
//     title: "How RUSSIAN VILLAGES Look: Ride around my countryside with me",
//     videoUrl: "https://youtu.be/meSLlseYaLg?si=Rpku3kEWzkXxa9Bs",
//     channelUrl: "https://www.youtube.com/channel/UCravAQX9gFINPvPxdnKnS3Q",
//     thumbnail: "./img/Thumbnails/1.jpg",
//     profileImg: "./img/Thumbnails/1 profile.jpg",
//     channelName: "Agent Nesty",
//     views: "1M",
//     uploadDate: "1 month ago",
//   },
//   // Add more video objects here
// ];

// const contentMain = document.getElementById("content-main");

// videos.forEach((video) => {
//   const card = document.createElement("div");
//   card.className = "content-card w-4/12 p-3";

//   card.innerHTML = `
//       <a href="${video.videoUrl}">
//         <img class="rounded-lg" src="${video.thumbnail}" alt="" />
//       </a>
//       <div class="content-info flex mt-2 text-xs">
//         <a href="${video.channelUrl}">
//           <img class="thumbnail rounded-full w-12" src="${video.profileImg}" alt="" />
//         </a>
//         <div class="content-text ml-3 flex flex-col">
//           <a href="${video.videoUrl}">
//             <p class="video-title font-bold">${video.title}</p>
//           </a>
//           <a class="mt-1 text-gray-400" href="${video.channelUrl}">${video.channelName}</a>
//           <div class="content-meta flex gap-2 text-gray-400">
//             <p class="views">${video.views}</p>
//             <p class="upload-date">${video.uploadDate}</p>
//           </div>
//         </div>
//       </div>
//     `;

//   contentMain.appendChild(card);
// });
