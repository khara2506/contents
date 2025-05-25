import React from 'react';
import { useState } from "react";

// 効果音ファイル(フリー素材例)のURL
const soundUrl = "https://cdn.pixabay.com/audio/2022/08/20/audio_123rfh.mp3"; // Popな効果音

// 可愛いキャラとアイテムのリスト
const items = [
  { id: 1, name: "しろまる", type: "character", left: "10%", top: "60%" },
  { id: 2, name: "ぴよりん", type: "character", left: "70%", top: "30%" },
  { id: 3, name: "ふわみ", type: "character", left: "40%", top: "75%" },
  { id: 4, name: "ももねこ", type: "character", left: "60%", top: "65%" },
  { id: 5, name: "宝物", type: "treasure", left: "30%", top: "40%" },
  { id: 6, name: "おもちゃ", type: "dummy", left: "80%", top: "55%" },
];

export default function TreasureHuntGame() {
  const [found, setFound] = useState(false);

  const handleTreasureClick = () => {
    setFound(true);
    new Audio(soundUrl).play();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 p-2">
      <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl shadow-lg bg-white overflow-hidden">
        {/* タイトル */}
        <h1 className="text-xl md:text-2xl text-center py-4 font-bold text-pink-500">たからものさがしゲーム</h1>

        {/* ゲームエリア */}
        <div className="relative w-full h-[70vh] md:h-[400px]">
          {items.map((item) => {
            // キャラ・ダミー
            if (item.type === "character" || item.type === "dummy") {
              return (
                <div
                  key={item.id}
                  style={{
                    position: "absolute",
                    left: item.left,
                    top: item.top,
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                >
                  <span className="text-5xl">{getEmoji(item.name)}</span>
                </div>
              );
            }
            // 宝物
            if (item.type === "treasure" && !found) {
              return (
                <button
                  key={item.id}
                  style={{
                    position: "absolute",
                    left: item.left,
                    top: item.top,
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                  }}
                  className="bg-yellow-200 rounded-full p-3 shadow hover:scale-110 transition-all"
                  onClick={handleTreasureClick}
                  aria-label="宝物を発見！"
                >
                  <span className="text-4xl">💎</span>
                </button>
              );
            }
            return null;
          })}
        </div>

        {/* 宝物を見つけた時のメッセージ */}
        {found && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80">
            <span className="text-6xl mb-4">🎉</span>
            <p className="text-pink-500 font-bold text-xl md:text-2xl">やったー！たからものみつけた！</p>
          </div>
        )}
      </div>
    </div>
  );
}

// シンプルな絵文字でキャラを表現（差し替え可）
function getEmoji(name) {
  switch (name) {
    case "しろまる":
      return "🐻‍❄️";
    case "ぴよりん":
      return "🐤";
    case "ふわみ":
      return "🐰";
    case "ももねこ":
      return "🐱";
    case "おもちゃ":
      return "🧸";
    default:
      return "❓";
  }
}
