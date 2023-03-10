import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "../components/Card";
import useKeypress from "react-use-keypress";

function App() {
  let [people, setPeople] = useState([
    {
      id: 1,
      name: "Ziady",
      background: "Software Engineer",
      interest: "Coding, Music, Design🎧",
      goals: "Have a Dream Team",
      socialMedia: "LinkedIn: ziterz",
      picture: "https://picsum.photos/200"
    },
    {
      id: 2,
      name: "Fajri",
      background: "Full-Stack JavaScript",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/201"
    },
    {
      id: 3,
      name: "Zidan",
      background: "UI Designer",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/202"
    },
    {
      id: 4,
      name: "Safik",
      background: "QA Engineer",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/203"
    },
    {
      id: 5,
      name: "Wahyu",
      background: "Mobile Developer",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/204"
    },
    {
      id: 6,
      name: "Leanne Graham",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/205"
    },
    {
      id: 7,
      name: "Ervin Howell",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/206"
    },
    {
      id: 8,
      name: "Clementine Bauch",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/207"
    },
    {
      id: 9,
      name: "Patricia Lebsack",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/208"
    },
    {
      id: 10,
      name: "Chelsey Dietrich",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/209"
    },
    {
      id: 11,
      name: "Dennis Schulist",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/210"
    },
    {
      id: 12,
      name: "Kurtis Weissnat",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/211"
    },
    {
      id: 13,
      name: "Nicholas Runolfsdottir",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/212"
    },
    {
      id: 14,
      name: "Glenna Reichert",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/213"
    },
    {
      id: 15,
      name: "Clementina DuBuque",
      background: "-",
      interest: "-",
      goals: "-",
      socialMedia: "-",
      picture: "https://picsum.photos/214"
    }
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
    console.log(people + "change");
  }, [people]);

  return (
    <div className="App">
      <div className="mx-auto">
        <div className="absolute bg-white w-screen">
          <h1 className="text-4xl font-bold my-5">Find your teammate!</h1>
        </div>
        <div className="grid grid-cols-5 h-screen">
          <Card bg="bg-gray-50" data={people[0]} />
          <Card bg="bg-gray-100" data={people[1]} />
          <Card bg="bg-gray-200" data={people[2]} />
          <Card bg="bg-gray-300" data={people[3]} />
          <Card bg="bg-gray-400" data={people[4]} />
        </div>
      </div>
    </div>
  );
}

export default App;
