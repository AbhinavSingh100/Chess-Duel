import React, { useEffect } from 'react'
import Board from '../components/Chessboard/Board'
import PlayerInfoHeader from '../components/others/PlayerInfoHeader'
import { useLocation, useNavigate } from 'react-router-dom'

const Game = ({player1, player2}) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleBackPressed = (event) => {
      event.preventDefault(); // Prevents default back navigation
      if (window.confirm("Your progress will be lost. Are you sure you want to exit?")) {
        navigate('/home/new'); // Navigate to new game
      } else {
        window.history.pushState(null, null, location.pathname); // Prevent back
      }
    };

    
    window.addEventListener("popstate", handleBackPressed);

    return () => {
      window.removeEventListener("popstate", handleBackPressed);
    };
  }, [navigate, location]);

  return (
    <>
    <div className='flex justify-center items-center w-screen h-screen'>
        <div>
            <PlayerInfoHeader 
                playerName={player1.name}
                playerRating={player1.rating}
                playerImg={player1.img}
                timer={"0:00"}/>
            <Board/>
            <PlayerInfoHeader 
                playerName={player2.name}
                playerRating={player2.rating}
                playerImg={player2.img}
                timer={"0:00"}/>
        </div>
    </div>

    </>
  )
}

export default Game