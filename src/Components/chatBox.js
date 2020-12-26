import React, { useState, useEffect } from "react";
import styles from "../css/chatbox.module.css";
import messages from "./messages";
import Typewriter from "typewriter-effect";

export default function ChatBox() {
  let chatroll = Array.from(Array(5).keys());
  const [typing, setTyping] = useState(0);
  const [messageitr, setMessageItr] = useState(0);

  const [messageLength, setMessageLength] = useState(0);

  let Message = (message) => {
    document.querySelector(".Typewriter").classList.add(done);
    setTimeout(() => {
      document.querySelector(".Typewriter").classList.remove(done);
      setTyping(0);

      // document.querySelector("#chatArea").
    }, 3000);
    setTimeout(() => {
      const chatMessageDiv = document.createElement("div");
      if (messageitr % 2 === 0) {
        const messageText = document.createTextNode(message);
        // setMessageItr(messageitr + 1);
        chatMessageDiv.appendChild(messageText);
        document.querySelector("#chatArea").appendChild(chatMessageDiv);
      }
    }, 250);
  };

  // useEffect(() => {
  //     });
  // }, []);
  // text.addEventListener("DOMSubtreeModified", () => {
  //   console.log(text.innerHTML);
  // });
  let keyboard = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "",
    // "",
    "up",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    // "",
    "delete",
    // "",
    "123",
    ",",
    "space",
    "space",
    "space",
    "space",
    "space",
    ".",
    "send",
  ];
  let f = 0;
  let done = styles.done;
  return (
    <React.Fragment>
      <div className={styles.device}>
        <div className={styles.topBar}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.chat}>
          <div className={styles.Header}></div>
          <div id="chatArea" className={styles.chatArea}></div>
          <div id="messageArea" className={styles.messageArea}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(5)
                  .callFunction(() => {
                    let textarea = document.querySelector("#messageArea");
                    if (f === 0) {
                      textarea.addEventListener("DOMSubtreeModified", () => {
                        console.log(
                          textarea.firstChild.firstChild.innerHTML[
                            textarea.firstChild.firstChild.innerHTML.length - 1
                          ]
                        );
                        if (
                          textarea.firstChild.firstChild.innerHTML[
                            textarea.firstChild.firstChild.innerHTML.length - 1
                          ] !== " " &&
                          textarea.firstChild.firstChild.innerHTML.length >
                            messageLength
                        ) {
                          document.querySelector(
                            `#${textarea.firstChild.firstChild.innerHTML[
                              textarea.firstChild.firstChild.innerHTML.length -
                                1
                            ].toUpperCase()}`
                          ).style.backgroundColor = "black";
                          setMessageLength(
                            textarea.firstChild.firstChild.innerHTML.length
                          );
                        }
                      });
                      f = 1;
                    }
                  })
                  .typeString(messages[0])
                  .callFunction(() => {
                    Message(messages[0]);
                  })
                  .deleteAll()
                  .pauseFor(4000)
                  .typeString(messages[1])
                  .callFunction(() => {
                    Message(messages[1]);
                  })
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <div className={styles.keypad}>
            {keyboard.map((character) => (
              <span
                id={
                  character === ""
                    ? styles.emp
                    : character === "delete"
                    ? styles.delete
                    : character === "up"
                    ? styles.up
                    : character === "send"
                    ? styles.send
                    : character === "space"
                    ? styles.space
                    : character
                }
              >
                {character === "delete"
                  ? ""
                  : character === "up"
                  ? ""
                  : character === "send"
                  ? ""
                  : character === "space"
                  ? ""
                  : character}
              </span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
