import Header from "../Header/Header"

const ErrorPage = () => {
  return (
    <main>
      {/* <Header/> */}
      <h1> Opps you shouldn't be here! Please go back</h1>
      <button className="return-to-game-btn">Return to Game</button>
    </main>
  )
};

export default ErrorPage;
