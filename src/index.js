import { record } from "rrweb";
import localForage from "localforage";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { recordingData } from "../test";

const store = localForage.createInstance({
    name: "EventStore"
});
store.clear(() => {
    console.log("Storage cleared");
});

  let events = [];
  let index = 0;
  let stopFn;

  document.getElementById("btnStart").onclick = () => {
    stopFn = record({
      emit(event) {
        events.push(event);
        store.setItem(String(index++), event);
      }
    });
  };

  document.getElementById("btnPlay").onclick = () => {
    stopFn();
    console.log("DATA:::::::::::::::",recordingData);
    console.log("EVENTS:::::::::::::::",events);
    // events = recordingData
    new rrwebPlayer({
      target: document.body, // customizable root element
      props: {
        events
      }
    });
  };
