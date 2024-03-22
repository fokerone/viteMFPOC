import './App.css'; // Archivo CSS para estilos

function Dashboard() {
  const handleButtonClick = (action: string) => {
    // Función que maneja el clic del botón y muestra un mensaje en la consola
    console.log(`Se ejecutó la acción: ${action}`);
  };

  return (
    <div className="App-dasboard">
      <h1>APP-DASHBOARD</h1>
      <div className="dashboard">
        <div className="card">
          <h2>Card 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
          <button onClick={() => handleButtonClick('acción 1')}>Ejecutar Acción</button>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
          <button onClick={() => handleButtonClick('acción 2')}>Ejecutar Acción</button>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
          <button onClick={() => handleButtonClick('acción 3')}>Ejecutar Acción</button>
        </div>
        <div className="card">
          <h2>Card 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
          <button onClick={() => handleButtonClick('acción 4')}>Ejecutar Acción</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
