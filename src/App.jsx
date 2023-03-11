import { useEffect, useState } from "react";
import useKeypress from "react-use-keypress";
import "./App.css";
import Card from "./components/Card";

function App() {
  let [people, setPeople] = useState([
    {
      id: 1,
      name: "Ziady",
      background: "Software Engineer",
      interest: "Coding, Music, Design🎧",
      goals: "Have a Dream Team🦄",
      socialMedia: "LinkedIn: ziterz",
      picture:
        "https://v5.airtableusercontent.com/v1/15/15/1678536000000/piSyr4kl7Mvnr9QW2I5mAA/Ho0B7xe5wYNuUfcPeMqwTJ2ng0xNn11dgwEJC5LDjbDlQpIuOBunzcQZ3y5SSbhNdUwGa6gm7ESToo6umDqgOg/vTeWgABF4C92ZeWBxjnWBy1HvWD09-LvhzBRvnD9rck",
      active: true
    },
    {
      id: 2,
      name: "Fajri",
      background: "Full-Stack JavaScript",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/201",
      active: true
    },
    {
      id: 3,
      name: "Zidan",
      background: "UI Designer",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/202",
      active: true
    },
    {
      id: 4,
      name: "Safik Widiantoro",
      background: "Guardian of the galaxy",
      interest: "Music",
      goals: "to be product manager",
      socialMedia: "linkedin - safik",
      picture:
        "https://v5.airtableusercontent.com/v1/15/15/1678536000000/29gBeKzVEoiIeSsrAPo1HA/X2_ILMiJiCns4ZnDWcBhXTcYkeakB2QWcft1AhDVv1zp7G0AKl1rGsQDmB_s05ZIP7vS5YudN1Rd-tIY9M9Kvw/Gnf1v6448lz-sq7JbZ2Oa4q-SYFgpyXK3Ji0q-luXgw",
      active: true
    },
    {
      id: 5,
      name: "Wahyu Alfandi",
      background: "Mahasiswa",
      interest: "Coding",
      goals: "Win WWDC",
      socialMedia: "IG - w_alfandi",
      picture:
        "https://v5.airtableusercontent.com/v1/15/15/1678536000000/9C2CQN3UxqqvsRwqUYX6Rw/teuAAhWkBtr9uheFWgucOfuu1lUmvFbGposB3kfme3CVBq7lQzXpM0_oR5E80t8yhC8owZQsfLKEOAgLSncnjA/00erSQvtCiT7-maejjEvC6qvhXghMkykKGPzjKrTHDQ",
      active: true
    },
    {
      id: 6,
      name: "Amanda",
      background: "Marketing Manager",
      interest: "Social Media, Photography",
      goals: "Increase Brand Awareness",
      socialMedia: "Instagram: amandapage",
      picture: "https://picsum.photos/205",
      active: true
    },
    {
      id: 7,
      name: "Rahul",
      background: "Data Scientist",
      interest: "Machine Learning, Artificial Intelligence",
      goals: "Develop Innovative Algorithms",
      socialMedia: "Twitter: @rahulds",
      picture: "https://picsum.photos/206",
      active: true
    },
    {
      id: 8,
      name: "Sophie",
      background: "UX Designer",
      interest: "User Research, Human-Centered Design",
      goals: "Create Delightful User Experiences",
      socialMedia: "LinkedIn: sophiedesigns",
      picture: "https://picsum.photos/207",
      active: true
    },
    {
      id: 9,
      name: "Mike",
      background: "Product Manager",
      interest: "Market Research, Product Development",
      goals: "Launch Successful Products",
      socialMedia: "LinkedIn: mike",
      picture: "https://picsum.photos/208",
      active: true
    },
    {
      id: 10,
      name: "Nadia",
      background: "Front-End Developer",
      interest: "Web Development, UI/UX Design",
      goals: "Create Responsive Websites",
      socialMedia: "GitHub: nadiafe",
      picture: "https://picsum.photos/209",
      active: true
    }
    // {
    //   id: 11,
    //   name: "Jhonny",
    //   background: "Graphic Designer",
    //   interest: "Typography, Branding",
    //   goals: "Create Memorable Designs",
    //   socialMedia: "Behance: jhonny",
    //   picture: "https://picsum.photos/210"
    // },
    // {
    //   id: 12,
    //   name: "Emillie",
    //   background: "Content Writer",
    //   interest: "Creative Writing, Blogging",
    //   goals: "Engage Readers with Compelling Content",
    //   socialMedia: "Twitter: @emillie",
    //   picture: "https://picsum.photos/211"
    // },
    // {
    //   id: 13,
    //   name: "Dave",
    //   background: "SEO Specialist",
    //   interest: "Analytics, Keyword Research",
    //   goals: "Improve Website Ranking",
    //   socialMedia: "LinkedIn: dave",
    //   picture: "https://picsum.photos/212"
    // },
    // {
    //   id: 14,
    //   name: "Olivia",
    //   background: "Project Manager",
    //   interest: "Agile Methodology, Stakeholder Management",
    //   goals: "Deliver Projects on Time and Budget",
    //   socialMedia: "LinkedIn: oliviaproject",
    //   picture: "https://picsum.photos/213"
    // },
    // {
    //   id: 15,
    //   name: "Alex",
    //   background: "Back-End Developer",
    //   interest: "Database Management, API Development",
    //   goals: "Build Scalable and Secure Applications",
    //   socialMedia: "GitHub: alexdev",
    //   picture: "https://picsum.photos/214"
    // },
    // {
    //   id: 16,
    //   name: "Sasha",
    //   background: "UI/UX Designer",
    //   interest: "Wireframing, Prototyping",
    //   goals: "Create User-Centered Designs",
    //   socialMedia: "LinkedIn: sashadesigns",
    //   picture: "https://picsum.photos/215"
    // },
    // {
    //   id: 17,
    //   name: "Daniel",
    //   background: "Software Developer",
    //   interest: "Coding, Robotics",
    //   goals: "Develop Innovative Solutions",
    //   socialMedia: "GitHub: danidev",
    //   picture: "https://picsum.photos/216"
    // },
    // {
    //   id: 18,
    //   name: "Maria",
    //   background: "Digital Marketer",
    //   interest: "SEO, Social Media",
    //   goals: "Increase Online Visibility",
    //   socialMedia: "LinkedIn: mariadigital",
    //   picture: "https://picsum.photos/217"
    // },
    // {
    //   id: 19,
    //   name: "Adam",
    //   background: "UI Designer",
    //   interest: "Mobile App Design, Animation",
    //   goals: "Create Visually Stunning Designs",
    //   socialMedia: "Dribbble: adamdesigns",
    //   picture: "https://picsum.photos/218"
    // },
    // {
    //   id: 20,
    //   name: "Julia",
    //   background: "Content Strategist",
    //   interest: "Content Marketing, Storytelling",
    //   goals: "Create Meaningful Connections with Audience",
    //   socialMedia: "Twitter: @juliacontent",
    //   picture: "https://picsum.photos/219"
    // },
    // {
    //   id: 21,
    //   name: "Ethan",
    //   background: "Data Analyst",
    //   interest: "Data Visualization, Statistical Analysis",
    //   goals: "Provide Insights for Better Decision Making",
    //   socialMedia: "LinkedIn: ethandata",
    //   picture: "https://picsum.photos/220"
    // },
    // {
    //   id: 22,
    //   name: "Lena",
    //   background: "Graphic Designer",
    //   interest: "Illustration, Motion Graphics",
    //   goals: "Create Compelling Visuals",
    //   socialMedia: "Behance: lenadesigns",
    //   picture: "https://picsum.photos/221"
    // },
    // {
    //   id: 23,
    //   name: "Max",
    //   background: "Full-Stack Developer",
    //   interest: "JavaScript, Cloud Computing",
    //   goals: "Build Robust and Scalable Applications",
    //   socialMedia: "GitHub: maxdev",
    //   picture: "https://picsum.photos/222"
    // },
    // {
    //   id: 24,
    //   name: "Emma",
    //   background: "Social Media Manager",
    //   interest: "Content Creation, Influencer Marketing",
    //   goals: "Increase Social Media Engagement",
    //   socialMedia: "Instagram: emmasocial",
    //   picture: "https://picsum.photos/223"
    // },
    // {
    //   id: 25,
    //   name: "Eric",
    //   background: "Cybersecurity Analyst",
    //   interest: "Penetration Testing, Vulnerability Assessment",
    //   goals: "Ensure Information Security",
    //   socialMedia: "LinkedIn: ericsecurity",
    //   picture: "https://picsum.photos/224"
    // },
    // {
    //   id: 26,
    //   name: "Shoppie",
    //   background: "Web Designer",
    //   interest: "Responsive Design, UI Design",
    //   goals: "Create Engaging Websites",
    //   socialMedia: "LinkedIn: shoppie",
    //   picture: "https://picsum.photos/225"
    // },
    // {
    //   id: 27,
    //   name: "William",
    //   background: "Software Engineer",
    //   interest: "Artificial Intelligence, Machine Learning",
    //   goals: "Develop Intelligent Systems",
    //   socialMedia: "GitHub: willdev",
    //   picture: "https://picsum.photos/226"
    // },
    // {
    //   id: 28,
    //   name: "Emily",
    //   background: "Marketing Manager",
    //   interest: "Travel, Reading, Yoga 🧘‍♀️",
    //   goals: "Launch a Successful Campaign",
    //   socialMedia: "LinkedIn: emily_marketing",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 29,
    //   name: "John",
    //   background: "Business Analyst",
    //   interest: "Sports, Cooking, Photography 📷",
    //   goals: "Become a Manager",
    //   socialMedia: "LinkedIn: john_bizanalyst",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 30,
    //   name: "Samantha",
    //   background: "Graphic Designer",
    //   interest: "Art, Travel, Technology 💻",
    //   goals: "Win a Design Award",
    //   socialMedia: "LinkedIn: samantha_graphicdesigner",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 31,
    //   name: "David",
    //   background: "Project Manager",
    //   interest: "Hiking, Chess, Philosophy 📚",
    //   goals: "Deliver a Successful Project",
    //   socialMedia: "LinkedIn: david_pm",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 32,
    //   name: "Sophia",
    //   background: "UX Designer",
    //   interest: "Music, Travel, Photography 📷",
    //   goals: "Create a User-Centered Design",
    //   socialMedia: "LinkedIn: sophia_uxdesigner",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 33,
    //   name: "Michael",
    //   background: "Data Scientist",
    //   interest: "Gym, Movies, Coding 💻",
    //   goals: "Develop a Predictive Model",
    //   socialMedia: "LinkedIn: michael_datascientist",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 34,
    //   name: "Sarah",
    //   background: "Software Developer",
    //   interest: "Reading, Painting, Travel ✈️",
    //   goals: "Contribute to an Open-Source Project",
    //   socialMedia: "LinkedIn: sarah_dev",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 35,
    //   name: "Anthony",
    //   background: "Sales Manager",
    //   interest: "Golf, Music, Reading 📖",
    //   goals: "Achieve Sales Targets",
    //   socialMedia: "LinkedIn: anthony_salesmgr",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 36,
    //   name: "Melissa",
    //   background: "Product Manager",
    //   interest: "Baking, Travel, Gardening 🌺",
    //   goals: "Launch a Successful Product",
    //   socialMedia: "LinkedIn: melissa_productmgr",
    //   picture: "https://picsum.photos/200"
    // },
    // {
    //   id: 37,
    //   name: "Mark",
    //   background: "IT Manager",
    //   interest: "Swimming, Guitar, Chess ♟️",
    //   goals: "Improve IT Infrastructure",
    //   socialMedia: "LinkedIn: mark_itmgr",
    //   picture: "https://picsum.photos/200"
    // }
  ]);

  useKeypress(" ", () => {
    let arrayShuffle = people;
    let j, x, i;
    for (i = arrayShuffle.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arrayShuffle[i];
      arrayShuffle[i] = arrayShuffle[j];
      arrayShuffle[j] = x;
    }
    setPeople([...arrayShuffle]);
  });

  useEffect(() => {
    console.log("change");
  }, [people]);

  return (
    <div className="App">
      <div className="mx-auto">
        <div className="absolute bg-white w-screen">
          <h1 className="text-4xl font-bold my-5">Find your teammate!</h1>
        </div>
        <div className="grid grid-cols-4 h-screen">
          <Card bg="bg-neutral-50" data={people[0]} />
          <Card bg="bg-neutral-100" data={people[1]} />
          <Card bg="bg-neutral-200" data={people[2]} />
          <Card bg="bg-neutral-300" data={people[3]} />
        </div>
      </div>
    </div>
  );
}

export default App;
