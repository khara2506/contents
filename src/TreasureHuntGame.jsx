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
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const handleTreasureClick = () => {
    setFound(true);
    setScore(score + 100);
    setAttempts(attempts + 1);
    try {
      new Audio(soundUrl).play();
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  const handleWrongClick = () => {
    setAttempts(attempts + 1);
  };

  const resetGame = () => {
    setFound(false);
    setScore(0);
    setAttempts(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">🏴‍☠️ たからものさがし</h1>
          <div className="flex justify-center gap-6 text-sm font-semibold">
            <div className="bg-white/20 px-3 py-1 rounded-full">
              スコア: {score}
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              挑戦: {attempts}
            </div>
          </div>
        </div>

        {/* ゲームエリア */}
        <div className="relative w-full h-[500px] bg-gradient-to-b from-green-100 to-blue-100 overflow-hidden">
          {/* 背景装飾 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 text-4xl">🌳</div>
            <div className="absolute top-20 right-16 text-3xl">🌺</div>
            <div className="absolute bottom-20 left-20 text-3xl">🍄</div>
            <div className="absolute bottom-10 right-10 text-4xl">🗻</div>
          </div>

          {items.map((item) => {
            // キャラクター
            if (item.type === "character") {
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
                  className="cursor-pointer hover:scale-110 transition-transform duration-200"
                  onClick={handleWrongClick}
                >
                  <div className="relative">
                    <span className="text-6xl drop-shadow-lg">{getEmoji(item.name)}</span>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white/80 px-2 py-1 rounded-full">
                      {item.name}
                    </div>
                  </div>
                </div>
              );
            }
            // ダミーアイテム
            if (item.type === "dummy") {
              return (
                <button
                  key={item.id}
                  style={{
                    position: "absolute",
                    left: item.left,
                    top: item.top,
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                  className="bg-yellow-100 hover:bg-yellow-200 rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-200 border-2 border-yellow-300"
                  onClick={handleWrongClick}
                  aria-label="ダミーアイテム"
                >
                  <span className="text-5xl">{getEmoji(item.name)}</span>
                </button>
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
                  className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full p-4 shadow-xl hover:scale-125 transition-all duration-300 border-4 border-yellow-500 animate-pulse"
                  onClick={handleTreasureClick}
                  aria-label="宝物を発見！"
                >
                  <span className="text-5xl">💎</span>
                </button>
              );
            }
            return null;
          })}
        </div>

        {/* 成功メッセージ */}
        {found && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
            <div className="text-center p-8">
              <div className="animate-bounce text-8xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-purple-600 mb-2">おめでとう！</h2>
              <p className="text-xl text-gray-700 mb-4">たからものを見つけました！</p>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
                最終スコア: {score}点 ({attempts}回の挑戦)
              </div>
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                もう一度プレイ
              </button>
            </div>
          </div>
        )}

        {/* ヒント */}
        {!found && attempts > 0 && (
          <div className="bg-blue-50 border-t border-blue-200 p-4 text-center">
            <p className="text-blue-700 text-sm font-medium">
              💡 ヒント: 光っているものを探してみよう！
            </p>
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
