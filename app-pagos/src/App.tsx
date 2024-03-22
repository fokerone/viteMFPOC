
import './App.css'; 

function App() {
  const customerData = {
    name: 'Pepe trueno',
    email: 'pepe@example.com',
    address: 'En el mundo',
    balance: '$500.00',
    lastPayment: '2024-03-20',
    nextBillingDate: '2024-04-01'
  };

  return (
    <div className="App">
      <div className="container">
        <h1>APP-PAGOS</h1>
        <div className="customer-info">
          <h2>Información del Cliente</h2>
          <p><strong>Nombre:</strong> {customerData.name}</p>
          <p><strong>Correo Electrónico:</strong> {customerData.email}</p>
          <p><strong>Dirección:</strong> {customerData.address}</p>
          <h2>Estado de Cuenta</h2>
          <p><strong>Saldo Pendiente:</strong> {customerData.balance}</p>
          <p><strong>Último Pago:</strong> {customerData.lastPayment}</p>
          <p><strong>Próxima Fecha de Facturación:</strong> {customerData.nextBillingDate}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
