// Script to add multiple content card.

const contentMain = document.querySelector(".content-main");
const videoLink = document.querySelectorAll(".video-link");
const thumbnail = document.querySelector(".thumbnail");
const channelLink = document.querySelectorAll(".channel-link"); // text and href links
const profilePic = document.querySelector(".profile-pic");
const videoTittle = document.querySelector(".video-tittle");
const channelName = document.querySelector(".channel-name");
const views = document.querySelector(".views");
const uploadDate = document.querySelector(".upload-date");

const videosData = [
  {
    videoLink: "https://youtu.be/KjNA2L-iolw?si=0l_wd97qgcrH7AWd",
    thumbnail: "./img/Thumbnails/2.jpg",
    channelLink: "https://www.youtube.com/@beebomco",
    profilePic: "./img/Thumbnails/2_beebom.jpg",
    videoTittle: "This is the Best Laptop Under ₹25,000 But..",
    channelName: "Beebom",
    views: "52k",
    uploadDate: "5 days ago",
  },
  {
    videoLink: "https://youtu.be/Z2wQnliV0Y0?si=Kt8opYt9YaUOQLYd",
    thumbnail: "./img/Thumbnails/3.jpg",
    channelLink: "https://www.youtube.com/@IHDFantasy",
    profilePic: "./img/Thumbnails/3_ihdfantasy.jpg",
    videoTittle:
      " EP 02 | Rinku Missing Why? India T20 World Cup Squad Podcast 2024",
    channelName: "IHD Fantasy Prediction",
    views: "320",
    uploadDate: "6 months ago",
  },
  {
    videoLink: "https://youtu.be/S9CGGtwmdeE?si=rhkBnx9VrVo5zikH",
    thumbnail: "./img/Thumbnails/4.jpg",
    channelLink: "https://www.youtube.com/@HiteshCodeLab",
    profilePic: "./img/Thumbnails/4_hitesh.jpg",
    videoTittle: "Wordpress Open Source drama",
    channelName: "Hitesh Chaudhary",
    views: "37K",
    uploadDate: "1 months ago",
  },
  {
    videoLink: "https://youtu.be/1ZrYQxr3tbQ?si=AoCiH7miQOE_qz7D",
    thumbnail: "./img/Thumbnails/5.jpg",
    channelLink: "https://www.youtube.com/@HiteshCodeLab",
    profilePic: "./img/Thumbnails/5_chaiAurCode.jpg",
    videoTittle: " Laptop buying guide for coders in 2025",
    channelName: "Chai aur Code",
    views: "3K",
    uploadDate: "2 hours ago",
  },
  {
    videoLink: "https://youtu.be/fMiUwXzku7A?si=Zo0ZwgvBbIDvdgH9",
    thumbnail: "./img/Thumbnails/6.jpg",
    channelLink: "https://www.youtube.com/@GyanTherapy",
    profilePic: "./img/Thumbnails/6_gyanTherapy.jpg",
    videoTittle: "Curve Display vs Flat Display Comparison - Good & Bad !",
    channelName: "Gyan Therapy",
    views: "4.4M",
    uploadDate: "1 Year ago",
  },
  {
    videoLink: "https://youtu.be/Vsx9a7-IXX4?si=T4RA4rxk6oaWIQJl",
    thumbnail: "./img/Thumbnails/7.jpg",
    channelLink: "https://www.youtube.com/@SamayRainaOfficial",
    profilePic: "./img/Thumbnails/7_samay.jpg",
    videoTittle: "INDIA'S GOT LATENT | EP 04",
    channelName: "samay Raina",
    views: "25M",
    uploadDate: "2 months ago",
  },
  {
    videoLink: "https://youtu.be/dEU2ibHQnjM?si=_1M8YKXZkfjM-s2_",
    thumbnail: "./img/Thumbnails/8.jpg",
    channelLink: "https://www.youtube.com/@ezsnippat",
    profilePic: "./img/Thumbnails/8_neeraj.jpg",
    videoTittle: "OPEN YOUR EYES AND SEE THE REALITY *IMPORTANT*",
    channelName: "Neeraj Walia",
    views: "1M",
    uploadDate: "7 months ago",
  },
  {
    videoLink: "https://youtu.be/ILQx_kZVIPw?si=C-eZpBl5B3qk5mzb",
    thumbnail: "./img/Thumbnails/9.jpg",
    channelLink: "https://www.youtube.com/@PassengerParamvir",
    profilePic: "./img/Thumbnails/9_pp.jpg",
    videoTittle: "Queenstown: The World’s Most Stunning City! 🇳🇿",
    channelName: "Passenger Paramvir",
    views: "1.2M",
    uploadDate: "3 months ago",
  },
  {
    videoLink: "https://youtu.be/Z2wQnliV0Y0?si=Kt8opYt9YaUOQLYd",
    thumbnail: "./img/Thumbnails/3.jpg",
    channelLink: "https://www.youtube.com/@IHDFantasy",
    profilePic: "./img/Thumbnails/3_ihdfantasy.jpg",
    videoTittle:
      " EP 02 | Rinku Missing Why? India T20 World Cup Squad Podcast 2024",
    channelName: "IHD Fantasy Prediction",
    views: "320",
    uploadDate: "6 months ago",
  },
  {
    videoLink: "https://youtu.be/1ZrYQxr3tbQ?si=AoCiH7miQOE_qz7D",
    thumbnail: "./img/Thumbnails/5.jpg",
    channelLink: "https://www.youtube.com/@HiteshCodeLab",
    profilePic: "./img/Thumbnails/5_chaiAurCode.jpg",
    videoTittle: " Laptop buying guide for coders in 2025",
    channelName: "Chai aur Code",
    views: "3K",
    uploadDate: "2 hours ago",
  },
  {
    videoLink: "https://youtu.be/KjNA2L-iolw?si=0l_wd97qgcrH7AWd",
    thumbnail: "./img/Thumbnails/2.jpg",
    channelLink: "https://www.youtube.com/@beebomco",
    profilePic: "./img/Thumbnails/2_beebom.jpg",
    videoTittle: "This is the Best Laptop Under ₹25,000 But..",
    channelName: "Beebom",
    views: "52k",
    uploadDate: "5 days ago",
  },
  {
    videoLink: "https://youtu.be/S9CGGtwmdeE?si=rhkBnx9VrVo5zikH",
    thumbnail: "./img/Thumbnails/4.jpg",
    channelLink: "https://www.youtube.com/@HiteshCodeLab",
    profilePic: "./img/Thumbnails/4_hitesh.jpg",
    videoTittle: "Wordpress Open Source drama",
    channelName: "Hitesh Chaudhary",
    views: "37K",
    uploadDate: "1 months ago",
  },
  {
    videoLink: "https://youtu.be/fMiUwXzku7A?si=Zo0ZwgvBbIDvdgH9",
    thumbnail: "./img/Thumbnails/6.jpg",
    channelLink: "https://www.youtube.com/@GyanTherapy",
    profilePic: "./img/Thumbnails/6_gyanTherapy.jpg",
    videoTittle: "Curve Display vs Flat Display Comparison - Good & Bad !",
    channelName: "Gyan Therapy",
    views: "4.4M",
    uploadDate: "1 Year ago",
  },
  {
    videoLink: "https://youtu.be/Vsx9a7-IXX4?si=T4RA4rxk6oaWIQJl",
    thumbnail: "./img/Thumbnails/7.jpg",
    channelLink: "https://www.youtube.com/@SamayRainaOfficial",
    profilePic: "./img/Thumbnails/7_samay.jpg",
    videoTittle: "INDIA'S GOT LATENT | EP 04",
    channelName: "samay Raina",
    views: "25M",
    uploadDate: "2 months ago",
  },
  {
    videoLink: "https://youtu.be/ILQx_kZVIPw?si=C-eZpBl5B3qk5mzb",
    thumbnail: "./img/Thumbnails/9.jpg",
    channelLink: "https://www.youtube.com/@PassengerParamvir",
    profilePic: "./img/Thumbnails/9_pp.jpg",
    videoTittle: "Queenstown: The World’s Most Stunning City! 🇳🇿",
    channelName: "Passenger Paramvir",
    views: "1.2M",
    uploadDate: "3 months ago",
  },
  {
    videoLink: "https://youtu.be/dEU2ibHQnjM?si=_1M8YKXZkfjM-s2_",
    thumbnail: "./img/Thumbnails/8.jpg",
    channelLink: "https://www.youtube.com/@ezsnippat",
    profilePic: "./img/Thumbnails/8_neeraj.jpg",
    videoTittle: "OPEN YOUR EYES AND SEE THE REALITY *IMPORTANT*",
    channelName: "Neeraj Walia",
    views: "1M",
    uploadDate: "7 months ago",
  },
  {
    videoLink: "https://youtu.be/KjNA2L-iolw?si=0l_wd97qgcrH7AWd",
    thumbnail: "./img/Thumbnails/2.jpg",
    channelLink: "https://www.youtube.com/@beebomco",
    profilePic: "./img/Thumbnails/2_beebom.jpg",
    videoTittle: "This is the Best Laptop Under ₹25,000 But..",
    channelName: "Beebom",
    views: "52k",
    uploadDate: "5 days ago",
  },
];

videosData.forEach((video) => {
  const contentCard = document.createElement("div");
  contentCard.classList.add("content-card", "p-3");

  contentCard.innerHTML = `
   <a class="video-link" href="${video.videoLink}"><img
              class="thumbnail rounded-lg" src="${video.thumbnail}" alt="" /></a>
          <div class="content-info flex mt-2 text-xs">
            <a class="channel-link" href="${video.channelLink}"><img
                class="profile-pic rounded-full w-12 h-12" src="${video.profilePic}" alt="" /></a>
            <div class="content-text ml-3 flex flex-col">
              <a class="video-link" href="${video.videoLink}">
                <p class="video-tittle font-bold">${video.videoTittle}</p>
              </a>
              <a class="channel-link mt-1 text-gray-400"
                href="${video.channelLink}">
                <p class="channel-name">${video.channelName}</p>
              </a>
              <div class="content-meta flex gap-2 text-gray-400 items-center">
                <p class="views">${video.views}</p>
                <i class="fa-solid fa-circle" style="font-size: 4px"></i>
                <p class="upload-date">${video.uploadDate}</p>
              </div>
            </div>
          </div>
`;

  contentMain.appendChild(contentCard);
});
