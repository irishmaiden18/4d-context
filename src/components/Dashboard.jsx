import Card from "./Card";

const Dashboard = () => {
  return (
    <>
      <main className="dashboard">
        <Card title="Overview" text="General metrics." />
        <Card title="Performance" text="System performance." />
        <Card title="Settings" text="Adjust configurations." />
      </main>
    </>
  );
};

export default Dashboard;
