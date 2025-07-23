import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Chart1() {
  const data = [
    { name: "Đã làm", value: 10 },
    { name: "Chưa làm", value: 2 },
    { name: "Đã bỏ", value: 1 },
  ];

  const COLORS = ["#4ade80", "#f87171", "#facc15"];

  return (
    <div className="flex flex-col items-center p-4">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={150}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart1;
