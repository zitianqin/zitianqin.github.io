"use client";

import React, { useState, useEffect, useRef } from "react";

type Move = "rock" | "paper" | "scissors";
type GameResult = "win" | "lose" | "draw";

interface GameState {
  playerMove: Move | null;
  aiMove: Move | null;
  result: GameResult | null;
  playerScore: number;
  aiScore: number;
  draws: number;
  round: number;
}

// Q-Learning Agent that learns and adapts to player patterns
class RLAgent {
  private qTable: Map<string, Map<Move, number>>;
  private learningRate: number = 0.1;
  private discountFactor: number = 0.9;
  private explorationRate: number = 0.3;
  private playerHistory: Move[] = [];
  private moveHistory: Array<{ player: Move; ai: Move; reward: number }> = [];

  constructor() {
    this.qTable = new Map();
  }

  // Get state representation based on player's recent moves
  private getState(): string {
    const historyLength = Math.min(10, this.playerHistory.length);
    if (historyLength === 0) return "start";
    return this.playerHistory.slice(-historyLength).join("-");
  }

  // Initialize Q-values for a state if not exists
  private initializeState(state: string): void {
    if (!this.qTable.has(state)) {
      const moves = new Map<Move, number>();
      moves.set("rock", 0);
      moves.set("paper", 0);
      moves.set("scissors", 0);
      this.qTable.set(state, moves);
    }
  }

  // Predict player's next move based on patterns
  private predictPlayerMove(): Move {
    if (this.playerHistory.length < 2) {
      const moves: Move[] = ["rock", "paper", "scissors"];
      return moves[Math.floor(Math.random() * 3)];
    }

    // Analyze player patterns
    const patternCounts = new Map<Move, number>();
    patternCounts.set("rock", 0);
    patternCounts.set("paper", 0);
    patternCounts.set("scissors", 0);

    // Count recent moves with more weight on recent history
    for (let i = 0; i < this.playerHistory.length; i++) {
      const weight = Math.pow(1.2, i); // More recent moves have more weight
      const move = this.playerHistory[this.playerHistory.length - 1 - i];
      patternCounts.set(move, (patternCounts.get(move) || 0) + weight);
    }

    // Find most likely move
    let maxCount = 0;
    let predictedMove: Move = "rock";
    patternCounts.forEach((count, move) => {
      if (count > maxCount) {
        maxCount = count;
        predictedMove = move;
      }
    });

    return predictedMove;
  }

  // Choose AI move using Q-learning
  chooseMove(): Move {
    const state = this.getState();
    this.initializeState(state);

    // Exploration vs exploitation
    if (Math.random() < this.explorationRate) {
      // Explore: Use pattern prediction
      const predictedPlayerMove = this.predictPlayerMove();
      return this.getCounterMove(predictedPlayerMove);
    } else {
      // Exploit: Use Q-table
      const qValues = this.qTable.get(state)!;
      let bestMove: Move = "rock";
      let bestValue = -Infinity;

      qValues.forEach((value, move) => {
        if (value > bestValue) {
          bestValue = value;
          bestMove = move;
        }
      });

      // Add some randomness to prevent being too predictable
      if (Math.random() < 0.2) {
        const moves: Move[] = ["rock", "paper", "scissors"];
        return moves[Math.floor(Math.random() * 3)];
      }

      return bestMove;
    }
  }

  // Get the move that beats the predicted player move
  private getCounterMove(playerMove: Move): Move {
    const counters: Record<Move, Move> = {
      rock: "paper",
      paper: "scissors",
      scissors: "rock",
    };
    return counters[playerMove];
  }

  // Update Q-values based on game result
  learn(playerMove: Move, aiMove: Move, result: GameResult): void {
    this.playerHistory.push(playerMove);
    
    // Keep history manageable
    if (this.playerHistory.length > 20) {
      this.playerHistory.shift();
    }

    const reward = result === "win" ? -1 : result === "lose" ? 1 : 0;
    
    const currentState = this.getState();
    this.initializeState(currentState);

    const currentQ = this.qTable.get(currentState)!.get(aiMove)!;
    
    // Simple Q-learning update
    const newQ = currentQ + this.learningRate * (reward - currentQ);
    this.qTable.get(currentState)!.set(aiMove, newQ);

    this.moveHistory.push({ player: playerMove, ai: aiMove, reward });

    // Reduce exploration over time
    if (this.explorationRate > 0.1) {
      this.explorationRate *= 0.995;
    }
  }

  // Get stats about the AI's learning
  getStats() {
    return {
      statesLearned: this.qTable.size,
      totalGames: this.playerHistory.length,
      explorationRate: (this.explorationRate * 100).toFixed(1) + "%",
    };
  }

  reset(): void {
    this.qTable.clear();
    this.playerHistory = [];
    this.moveHistory = [];
    this.explorationRate = 0.3;
  }
}

export default function RockPaperScissors() {
  const [gameState, setGameState] = useState<GameState>({
    playerMove: null,
    aiMove: null,
    result: null,
    playerScore: 0,
    aiScore: 0,
    draws: 0,
    round: 0,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [aiStats, setAiStats] = useState({ statesLearned: 0, totalGames: 0, explorationRate: "30.0%" });
  const agentRef = useRef<RLAgent>(new RLAgent());

  useEffect(() => {
    // Initialize agent on mount
    agentRef.current = new RLAgent();
  }, []);

  const determineWinner = (player: Move, ai: Move): GameResult => {
    if (player === ai) return "draw";
    if (
      (player === "rock" && ai === "scissors") ||
      (player === "paper" && ai === "rock") ||
      (player === "scissors" && ai === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  const playMove = (playerMove: Move) => {
    if (isPlaying) return;

    setIsPlaying(true);
    setShowResult(false);

    // Get AI move using RL agent
    const aiMove = agentRef.current.chooseMove();
    const result = determineWinner(playerMove, aiMove);

    // Update scores
    const newState = { ...gameState };
    newState.playerMove = playerMove;
    newState.aiMove = aiMove;
    newState.result = result;
    newState.round += 1;

    if (result === "win") {
      newState.playerScore += 1;
    } else if (result === "lose") {
      newState.aiScore += 1;
    } else {
      newState.draws += 1;
    }

    // AI learns from this game
    agentRef.current.learn(playerMove, aiMove, result);
    setAiStats(agentRef.current.getStats());

    setGameState(newState);

    // Show result after animation
    setTimeout(() => {
      setShowResult(true);
      setIsPlaying(false);
    }, 1000);
  };

  const resetGame = () => {
    setGameState({
      playerMove: null,
      aiMove: null,
      result: null,
      playerScore: 0,
      aiScore: 0,
      draws: 0,
      round: 0,
    });
    agentRef.current.reset();
    setAiStats(agentRef.current.getStats());
    setShowResult(false);
  };

  const getMoveEmoji = (move: Move | null) => {
    if (!move) return "?";
    const emojis = { rock: "🪨", paper: "📄", scissors: "✂️" };
    return emojis[move];
  };

  const getResultMessage = () => {
    if (!gameState.result) return "";
    if (gameState.result === "win") return "You Win! 🎉";
    if (gameState.result === "lose") return "AI Wins! 🤖";
    return "Draw! 🤝";
  };

  const getResultColor = () => {
    if (!gameState.result) return "";
    if (gameState.result === "win") return "text-green-400";
    if (gameState.result === "lose") return "text-red-400";
    return "text-yellow-400";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Rock Paper Scissors
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          Play against an AI that learns and adapts to your strategy
        </p>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
      </section>

      {/* Game Area */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
        {/* Score Board */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <div className="text-sm text-gray-400 mb-1">You</div>
            <div className="text-3xl font-bold text-green-400">{gameState.playerScore}</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <div className="text-sm text-gray-400 mb-1">Draws</div>
            <div className="text-3xl font-bold text-yellow-400">{gameState.draws}</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <div className="text-sm text-gray-400 mb-1">AI</div>
            <div className="text-3xl font-bold text-red-400">{gameState.aiScore}</div>
          </div>
        </div>

        {/* Game Display */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-3">Your Move</div>
            <div className={`text-8xl transition-all duration-300 ${isPlaying ? "scale-110" : "scale-100"}`}>
              {getMoveEmoji(gameState.playerMove)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-3">AI Move</div>
            <div className={`text-8xl transition-all duration-300 ${isPlaying ? "scale-110" : "scale-100"}`}>
              {getMoveEmoji(gameState.aiMove)}
            </div>
          </div>
        </div>

        {/* Result Message */}
        {showResult && (
          <div className={`text-center text-2xl font-bold mb-6 ${getResultColor()} animate-pulse`}>
            {getResultMessage()}
          </div>
        )}

        {/* Move Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => playMove("rock")}
            disabled={isPlaying}
            className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-50 border border-white/20 rounded-xl p-6 text-6xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            🪨
          </button>
          <button
            onClick={() => playMove("paper")}
            disabled={isPlaying}
            className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-50 border border-white/20 rounded-xl p-6 text-6xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            📄
          </button>
          <button
            onClick={() => playMove("scissors")}
            disabled={isPlaying}
            className="bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-50 border border-white/20 rounded-xl p-6 text-6xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            ✂️
          </button>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={resetGame}
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-2 text-sm transition-all duration-200"
          >
            Reset Game & AI Memory
          </button>
        </div>
      </div>

      {/* AI Stats */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">AI Learning Stats</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-gray-400 mb-1">Round</div>
            <div className="text-xl font-bold">{gameState.round}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">States Learned</div>
            <div className="text-xl font-bold">{aiStats.statesLearned}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Exploration Rate</div>
            <div className="text-xl font-bold">{aiStats.explorationRate}</div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-400 text-center">
          The AI uses Q-learning to adapt to your playing patterns. The more you play, the better it gets!
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">How the AI Learns</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong className="text-white">Pattern Recognition:</strong> The AI tracks your move history and identifies patterns in your choices.
          </p>
          <p>
            <strong className="text-white">Q-Learning:</strong> Using reinforcement learning, the AI updates its strategy based on wins and losses.
          </p>
          <p>
            <strong className="text-white">Adaptive Strategy:</strong> As you play more rounds, the AI's exploration rate decreases and it becomes more confident in exploiting your patterns.
          </p>
          <p>
            <strong className="text-white">Counter-Play:</strong> The AI predicts your next move and tries to counter it, making the game increasingly challenging.
          </p>
        </div>
      </div>
    </div>
  );
}
