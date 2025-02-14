"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWlpbWVkb2g5Mm14NDMxbXZxajh2dW5xOTc5ZnphNG04dWFoZWs5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hodynOSVjudO5fNZsq/giphy.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! love yaaaaa!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHQ1bmZ2ZzUwN2Q5b3BkeDhxZ2RtOWppeWk0cWQ5cWgwa2V2ZDJsdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oX7a6TfnVqTRZS7czp/giphy.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
