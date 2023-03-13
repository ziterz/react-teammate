import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getPeoples } from "./firebase";
import discord from "./assets/discord.png";
import fyt from "./assets/fyt-logo.png";

function App() {
  const [people, setPeople] = useState([]);
  const [locks, setLocks] = useState([false, false, false, false]);
  const [peopleIndex, setPeopleIndex] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("[App][useEffect][handleKeyDown][people]", people);
      if (event.code === "Space") {
        setPeopleIndex(randomizePeoplexIndex());
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [locks, peopleIndex, people]);

  const randomizePeoplexIndex = () => {
    const peopleIndexList = [];

    peopleIndex.forEach((pplIdx, i) => {
      if (locks[i]) {
        peopleIndexList[i] = pplIdx;
        return;
      }

      let randomNumber;
      do {
        randomNumber = randomizeNumber();
      } while (peopleIndexList.includes(randomNumber));

      peopleIndexList[i] = randomNumber;
    });

    return peopleIndexList;
  }

  const randomizeNumber = () => {
    if (people.length === 0) return;

    const randomNumber = Math.floor(Math.random() * people.length);

    if (peopleIndex.includes(randomNumber)) return randomizeNumber();

    return randomNumber;
  };

  useEffect(() => {
    console.log("change");
  }, [people]);

  useEffect(() => {
    getPeoples().then((peopleList) => {
      console.log("[App][useEffect][getPeoples][peopleList]", peopleList);
      setPeople(peopleList);
    });
  }, []);

  function toggleLock(index) {
    document.activeElement.blur();
    setLocks((prevLocks) => {
      const newLocks = [...prevLocks];
      newLocks[index] = !newLocks[index];
      return newLocks;
    });
  }

  return (
    <div className="App">
      <div className="mx-auto static">
        <div className="absolute ">
          <div className="md:hidden">
            <img src={fyt} alt="fyt logo" width={220} height={220} className="mx-auto p-2" />
          </div>
          <div className="hidden md:block">
            <img
              src={fyt}
              alt="fyt logo"
              width={300}
              height={300}
              className="absolute top-0 left-0 right-0 mx-auto "
            />
            <div className="flex justify-between w-screen p-5 bg-white">
              <span className="text-neutral-500 flex items-center">
                Press the <b>&nbsp;spacebar&nbsp;</b> to find your teammate!
              </span>
              <div className="flex gap-5 items-center">
                <span>Meet Our Team</span>
                <img src={discord} alt="discord" width={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 h-screen ">
            <Card
              bg="bg-neutral-50"
              data={people[peopleIndex[0]]}
              lock={locks[0]}
              onToggleLock={() => toggleLock(0)}
            />
            <Card
              bg="bg-neutral-100"
              data={people[peopleIndex[1]]}
              lock={locks[1]}
              onToggleLock={() => toggleLock(1)}
            />
            <Card
              bg="bg-neutral-50"
              data={people[peopleIndex[2]]}
              lock={locks[2]}
              onToggleLock={() => toggleLock(2)}
            />
            <Card
              bg="bg-neutral-100"
              className="md:order-last"
              data={people[peopleIndex[3]]}
              lock={locks[3]}
              onToggleLock={() => toggleLock(3)}
            />
          </div>
        </div>
        <div className="md:hidden">
          <div className="grid grid-row-2 lg:grid-cols-4 h-screen">
            <Card
              bg="bg-neutral-50"
              data={people[peopleIndex[0]]}
              lock={locks[0]}
              onToggleLock={() => toggleLock(0)}
            />
            <Card
              bg="bg-neutral-100"
              data={people[peopleIndex[1]]}
              lock={locks[1]}
              onToggleLock={() => toggleLock(1)}
            />
            <Card
              bg="bg-neutral-50"
              data={people[peopleIndex[2]]}
              lock={locks[2]}
              onToggleLock={() => toggleLock(2)}
            />
            <Card
              bg="bg-neutral-100"
              className="md:order-last"
              data={people[peopleIndex[3]]}
              lock={locks[3]}
              onToggleLock={() => toggleLock(3)}
            />
          </div>

        </div>
        {/* <div className="fixed bottom-0 md:hidden">
          <div className="flex justify-between w-screen p-5 bg-white">
            <button className="py-2 px-5 border rounded-lg hover:text-white hover:bg-neutral-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2" onClick={setPeopleIndex(randomizePeoplexIndex())}>Generate</button>
            <div className="flex gap-5 items-center">
              <span>Meet Our Team</span>
              <img src={discord} alt="discord" width={100} />
            </div>
          </div>
        </div> */}
      </div>
    </div >
  );
}

export default App;
