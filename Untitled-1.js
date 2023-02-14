import React, { useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState(1000);
  const [orders, setOrders] = useState(500);
  const [revenue, setRevenue] = useState(10000);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Dashboard</h1>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Statistics</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="card">
          <h2>Users</h2>
          <p>Number of registered users: {users}</p>
        </section>

        <section className="card">
          <h2>Orders</h2>
          <p>Number of completed orders: {orders}</p>
        </section>

        <section className="card">
          <h2>Revenue</h2>
          <p>Total revenue: ${revenue}</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Dashboard</p>
      </footer>
    </div>
  );
}

export default Dashboard;
