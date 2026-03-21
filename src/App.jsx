import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomeNavbar from './componets/HomeNavbar';
import FullHome from './pages/FullHome';
import Footer from './componets/Footer';
import HireMe from './pages/HireMe';
import About from './pages/About';
import Skill from './pages/Skill';
import Service from './pages/Service';
import Contact from './pages/Contact';
import RouteLoader from './componets/RouteLoader';
import SkillDetails from './pages/SkillDetails';
import ServiceDetails from './pages/ServiceDetails';
import Works from './pages/Works';
import WorkDetails from './pages/WorkDetails';
import Forbidden from './AdminAcces/Forbidden';

function App() {

    //skill-Items
const skillItems = [

{
id:1,
slug:"cinematic-video-editing",
image:"https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
name:"Cinematic Video Editing",

shortDesc:"Professional cinematic editing with storytelling and smooth transitions.",

description:`Cinematic video editing focuses on creating visually stunning videos that feel like a movie. Through creative storytelling, smooth transitions and color grading, raw footage is transformed into an engaging cinematic experience.`,

features:[
"Creative storytelling",
"Professional cinematic cuts",
"Smooth transitions",
"Mood based color grading"
],

tools:[
"Adobe Premiere Pro",
"After Effects",
"DaVinci Resolve"
],

videoPreview:"/videos/cinematic.mp4"
},

{
id:2,
slug:"instagram-reels-editing",
image:"https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
name:"Instagram Reels Editing",

shortDesc:"Short form video editing optimized for social media reach.",

description:`Instagram reels editing focuses on creating engaging short videos designed for social media platforms. Fast cuts, trendy transitions and engaging visuals help attract viewers and improve engagement.`,

features:[
"Short form video editing",
"Fast paced cuts",
"Trending transitions",
"Social media optimized format"
],

tools:[
"Premiere Pro",
"CapCut",
"After Effects"
],

videoPreview:"/videos/reels.mp4"
},

{
id:3,
slug:"beat-sync-editing",
image:"https://cdn-icons-png.flaticon.com/512/727/727245.png",
name:"Beat Sync Editing",

shortDesc:"Synchronizing visuals perfectly with music beats.",

description:`Beat sync editing focuses on aligning video cuts and transitions exactly with music beats to create powerful and energetic visual moments.`,

features:[
"Music beat detection",
"Perfect cut timing",
"Rhythm based transitions",
"High energy visual flow"
],

tools:[
"Premiere Pro",
"After Effects"
],

videoPreview:"/videos/beatsync.mp4"
},

{
id:4,
slug:"seamless-transitions",
image:"https://cdn-icons-png.flaticon.com/512/1484/1484853.png",
name:"Seamless Transitions",

shortDesc:"Smooth transitions connecting scenes creatively.",

description:`Seamless transitions make videos visually smooth and professional by connecting scenes naturally without breaking viewer engagement.`,

features:[
"Creative scene transitions",
"Smooth flow between clips",
"Visual continuity",
"Professional video pacing"
],

tools:[
"Premiere Pro",
"After Effects"
],

videoPreview:"/videos/transitions.mp4"
},

{
id:5,
slug:"creative-reel-concepts",
image:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
name:"Creative Reel Concepts",

shortDesc:"Developing unique reel ideas for engaging content.",

description:`Creative reel concepts focus on generating unique ideas and storytelling approaches that make short videos more engaging and memorable.`,

features:[
"Unique reel ideas",
"Creative storytelling",
"Audience engagement",
"Social media friendly content"
],

tools:[
"Premiere Pro",
"CapCut"
],

videoPreview:"/videos/reelconcept.mp4"
},

{
id:6,
slug:"basic-color-grading",
image:"https://cdn-icons-png.flaticon.com/512/1828/1828911.png",
name:"Basic Color Grading",

shortDesc:"Enhancing mood and tone of videos through color.",

description:`Color grading improves the visual quality of videos by adjusting colors, contrast and lighting to create the desired mood.`,

features:[
"Color correction",
"Mood enhancement",
"Cinematic color tone",
"Professional visual look"
],

tools:[
"DaVinci Resolve",
"Premiere Pro"
],

videoPreview:"/videos/color.mp4"
},

{
id:7,
slug:"basic-sound-design",
image:"https://cdn-icons-png.flaticon.com/512/727/727269.png",
name:"Basic Sound Design",

shortDesc:"Improving audio quality and adding sound effects.",

description:`Basic sound design enhances video quality by balancing background music, dialogue and sound effects.`,

features:[
"Audio balancing",
"Background music sync",
"Sound effects",
"Clean audio output"
],

tools:[
"Adobe Audition",
"Premiere Pro"
],

videoPreview:"/videos/sound.mp4"
},

{
id:8,
slug:"smooth-cuts",
image:"https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
name:"Smooth Cuts & Clean Flow",

shortDesc:"Maintaining natural visual flow using smooth cuts.",

description:`Smooth cuts ensure that the video flows naturally from one scene to another without abrupt interruptions.`,

features:[
"Clean video cuts",
"Visual continuity",
"Smooth editing flow",
"Better viewer experience"
],

tools:[
"Premiere Pro"
],

videoPreview:"/videos/cuts.mp4"
},

{
id:9,
slug:"visual-storytelling",
image:"https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
name:"Visual Storytelling",

shortDesc:"Transforming footage into meaningful stories.",

description:`Visual storytelling focuses on delivering emotions and messages through carefully arranged visuals and editing techniques.`,

features:[
"Emotional storytelling",
"Visual narrative building",
"Audience connection",
"Creative scene structure"
],

tools:[
"Premiere Pro",
"After Effects"
],

videoPreview:"/videos/story.mp4"
},

{
id:10,
slug:"client-focused-editing",
image:"https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
name:"Client Focused Editing",

shortDesc:"Editing videos based on client needs and goals.",

description:`Client focused editing ensures that the final video matches the brand style, message and expectations of the client.`,

features:[
"Client requirement understanding",
"Brand focused editing",
"Professional delivery",
"Quality assurance"
],

tools:[
"Premiere Pro"
],

videoPreview:"/videos/client.mp4"
},

{
id:11,
slug:"trend-based-editing",
image:"https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
name:"Trend Based Editing",

shortDesc:"Editing based on latest social media trends.",

description:`Trend based editing follows the latest editing styles and formats popular on social media platforms.`,

features:[
"Trending effects",
"Modern editing styles",
"Social media optimization",
"Audience engagement"
],

tools:[
"Premiere Pro",
"CapCut"
],

videoPreview:"/videos/trend.mp4"
},

{
id:12,
slug:"time-management",
image:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
name:"Time Management",

shortDesc:"Efficiently managing editing workflow and deadlines.",

description:`Time management helps in handling multiple projects efficiently while maintaining high editing quality.`,

features:[
"Project planning",
"Efficient workflow",
"On time delivery",
"Consistent productivity"
],

tools:[
"Editing workflow tools"
],

videoPreview:"/videos/time.mp4"
}

]

//works
const works = [


{
id:1,
title:"Wedding Highlights",
category:"Wedding Film",
image:"https://images.unsplash.com/photo-1615966650071-855b15f29ad1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlJTIwbG92ZXxlbnwwfHwwfHx8MA%3D%3D",
videos:[
{
    url: "https://drive.google.com/file/d/144j2lEhunT7ie_GSUPlNAZDE-pYPattf/preview"
  },
  {
    url: "https://drive.google.com/file/d/1zr0sHvHZpjug4wdPOsX0-c4qQdDv0w0i/preview"
  },
  {
    url: "https://drive.google.com/file/d/1rC-67CRDQtW79fqPr7dyQ8_Z07s5lpks/preview"
  },
  {
    url: "https://drive.google.com/file/d/12Kk2wryzs7HfMRIiQQ88dGRB1KWyG06-/preview"
  },
  {
    url: "https://drive.google.com/file/d/10O0jg9H5PgAcuI5lXljy2EBqHKrjPTqh/preview"
  }

]
},
{
id:2,
title:"Instagram Edit",
category:"Social Media Reel",
image:"https://mojogear.eu/cdn/shop/articles/Header-1_0b56a907-eba5-4d0a-a826-1bb495288aa3.png?v=1757317785&width=1346",
videos:[
{
url: "https://drive.google.com/file/d/1BySSYVJ44Vv65yIOjSTKfWuOSswYZBF7/preview"
},
{
url: "https://drive.google.com/file/d/1yoQla2ZE30bDO7PDsGlUCOPQIBePUlVq/preview"
},
{
url: "https://drive.google.com/file/d/1F1RvHZTRqvhxs0oYLThbuAXvkp3XRmxH/preview"
},
{
url: "https://drive.google.com/file/d/1yJFHxE5UvxIMWOw3g6DTv6wFUrTMyN54/preview"
},
{
url: "https://drive.google.com/file/d/1-adYn0rO_i8rdQZuaZ7EPYAVFrprT4Ou/preview"
},
{
url: "https://drive.google.com/file/d/1NkGipbakIK6KANkbYrYBDeT8UTx75lBz/preview"
},
{
url: "https://drive.google.com/file/d/1pvKj_k025ciLNIEfcIBsFHwLZTpyisAm/preview"
}
,
 {
    url: "https://drive.google.com/file/d/1AoKqMF8NhHB-R-dP5WV4uS6g3tmGJZ7z/preview"
  },
  {
    url: "https://drive.google.com/file/d/188S6JiEVLn50IBYVTucqV4T9HN87nDtH/preview"
  },
  {
    url: "https://drive.google.com/file/d/1A4h4G_hNFY7kDwKK-X3-KXJOoOjFXga9/preview"
  },
  {
    url: "https://drive.google.com/file/d/1M2wmGUUFATfcMpSI7mVKyk3rijrS0B5b/preview"
  },
  {
    url: "https://drive.google.com/file/d/1CkM5785v0nrzmpnK_4D_KYM-i7jqhYHq/preview"
  },
  {
    url: "https://drive.google.com/file/d/1_rQDCpmoH4wWLp_Vf9_y_LBJ1hmPF6fl/preview"
  }
]
},


{
id:3,
title:"🚧 Under Maintenance",

image:"https://img.freepik.com/free-photo/cup-tea-lamp-laptop-desktop-night_169016-17447.jpg",
videos:[

]
},

{
id:4,
title:"Events",
category:"Live Event Edits",
image:"https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
videos:[
 {
    url: "https://drive.google.com/file/d/1rf1QAYxdjtv42GzKPgR63hU-YmqeLE63/preview"
  },
  {
    url: "https://drive.google.com/file/d/1SnaRyEC3sWWCtnEok_Zb9wGRvifiF9-_/preview"
  },
  {
    url: "https://drive.google.com/file/d/1jh8nvfJTS_1iQr7y9ktFkhHAXa11yJcd/preview"
  },
  {
    url: "https://drive.google.com/file/d/1-lLFYcXmNjJyCPc2F6XcMLcZYUdVsDdn/preview"
  }
]
},

{
id:5,
title:"Commercial Ad",
category:"Brand Promotion",
image:"https://apiexcellent.com/storage/images/blog/whatsapp-image-2024-09-13-at-44156-pm-20240913184346.jpeg",
videos:[
     {
    url: "https://drive.google.com/file/d/10dXrooPPn9r7BHB4LqeD5UZjLgdQQLq8/preview"
  },
  {
    url: "https://drive.google.com/file/d/1fmuMKBvi5KDscQ08DkqCzZAgkssURdCw/preview"
  },
  {
    url: "https://drive.google.com/file/d/1Hcpvmy1OUS16KCOHd3e9FLcepraBBJur/preview"
  },
  {
    url: "https://drive.google.com/file/d/1Haxz4BLRN2iMlJMWENgYtQECyMcxSpnf/preview"
  },
  {
    url: "https://drive.google.com/file/d/1HoeYRojTfaIH2i0jOsGS_AuRjbHVtOaP/preview"
  },
  {
    url: "https://drive.google.com/file/d/1SGZ0EcFpW15N1Ti1OREYbspqiuxXKHj1/preview"
  }
]
},
{
id:6,
title:"Premium Delivery Films",
category:"Reveal Cinematics",
image:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d7/54/92/d75492a0-57fb-5fd3-ea7d-138bf71c1734/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x630wa.jpg",
videos:[
    {
    url: "https://drive.google.com/file/d/1xVTM9jjLqDrer9C472S-EEbGt-yQ4Mid/preview"
  },

  {
    url: "https://drive.google.com/file/d/1C5M9yY_3hdG13Eq9lS8BTfMAb28d3rj3/preview"
  },
  
  
  
]
},

];

    return(
       <HashRouter>
       <RouteLoader/>
       <HomeNavbar/>
       <Routes>
        <Route path='/' element={<FullHome skillItems={skillItems}/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/hire-me' element={<HireMe/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skill skillItems={skillItems}/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skill-details/:id' element={<SkillDetails skillItems={skillItems}/>}/>
        <Route path='/service-details/:id' element={<ServiceDetails/>}/>
         <Route path='/works' element={<Works works={works}/>}/>
        <Route path='/work-details/:id' element={<WorkDetails works={works}/>} />
         <Route path='/adminAcc' element={<Forbidden/>} />
       </Routes>
       <Footer/>
       </HashRouter>
    )
}

export default App;
