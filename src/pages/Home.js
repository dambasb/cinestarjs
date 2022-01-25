const Home = () => {
  const goToOrder = () => {
    console.log(22);
    window.location.assign('/order');
  };
  return (
    <section>
      <h1>Welcome to cinestarJS!</h1>

      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={goToOrder}
      >
        Buy Ticket
      </button>
    </section>
  );
};

export default Home;
