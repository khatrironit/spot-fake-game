import useToastify from "@/hooks/use-toastify";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const GameProvider = ({ children }) => {
	const [number, setNumber] = useState(1);
	const [score, setScore] = useState(0);
  const { notify, renderToast } = useToastify();

  const resetQuiz = () => {
    setNumber(1);
    setScore(0);
  }

  const contextValue = useMemo(() => {
    return {
      number, score, setNumber, setScore, notify, resetQuiz
    };
  }, [number, score, setNumber, setScore, resetQuiz]);

  return (
    <GameContext.Provider value={contextValue}>
      {children}
      {renderToast()}
    </GameContext.Provider>
  );
};

export default GameProvider;
